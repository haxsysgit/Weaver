(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();const uM="modulepreload",fM=function(a){return"/"+a},p_={},dM=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");l=m(i.map(p=>{if(p=fM(p),p in p_)return;p_[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":uM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,E)=>{g.addEventListener("load",S),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return l.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function hM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var oh={exports:{}},ul={};var m_;function pM(){if(m_)return ul;m_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:u,ref:l!==void 0?l:null,props:c}}return ul.Fragment=e,ul.jsx=i,ul.jsxs=i,ul}var g_;function mM(){return g_||(g_=1,oh.exports=pM()),oh.exports}var G=mM(),lh={exports:{}},lt={};var v_;function gM(){if(v_)return lt;v_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function y(D,W,he){this.props=D,this.context=W,this.refs=b,this.updater=he||E}y.prototype.isReactComponent={},y.prototype.setState=function(D,W){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,W,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=y.prototype;function z(D,W,he){this.props=D,this.context=W,this.refs=b,this.updater=he||E}var w=z.prototype=new P;w.constructor=z,C(w,y.prototype),w.isPureReactComponent=!0;var L=Array.isArray;function U(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function I(D,W,he){var _e=he.ref;return{$$typeof:a,type:D,key:W,ref:_e!==void 0?_e:null,props:he}}function k(D,W){return I(D.type,W,D.props)}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===a}function K(D){var W={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(he){return W[he]})}var ue=/\/+/g;function fe(D,W){return typeof D=="object"&&D!==null&&D.key!=null?K(""+D.key):W.toString(36)}function q(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(U,U):(D.status="pending",D.then(function(W){D.status==="pending"&&(D.status="fulfilled",D.value=W)},function(W){D.status==="pending"&&(D.status="rejected",D.reason=W)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function N(D,W,he,_e,Ae){var ee=typeof D;(ee==="undefined"||ee==="boolean")&&(D=null);var Se=!1;if(D===null)Se=!0;else switch(ee){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(D.$$typeof){case a:case e:Se=!0;break;case _:return Se=D._init,N(Se(D._payload),W,he,_e,Ae)}}if(Se)return Ae=Ae(D),Se=_e===""?"."+fe(D,0):_e,L(Ae)?(he="",Se!=null&&(he=Se.replace(ue,"$&/")+"/"),N(Ae,W,he,"",function(Je){return Je})):Ae!=null&&(H(Ae)&&(Ae=k(Ae,he+(Ae.key==null||D&&D.key===Ae.key?"":(""+Ae.key).replace(ue,"$&/")+"/")+Se)),W.push(Ae)),1;Se=0;var Me=_e===""?".":_e+":";if(L(D))for(var Ne=0;Ne<D.length;Ne++)_e=D[Ne],ee=Me+fe(_e,Ne),Se+=N(_e,W,he,ee,Ae);else if(Ne=S(D),typeof Ne=="function")for(D=Ne.call(D),Ne=0;!(_e=D.next()).done;)_e=_e.value,ee=Me+fe(_e,Ne++),Se+=N(_e,W,he,ee,Ae);else if(ee==="object"){if(typeof D.then=="function")return N(q(D),W,he,_e,Ae);throw W=String(D),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Se}function V(D,W,he){if(D==null)return D;var _e=[],Ae=0;return N(D,_e,"","",function(ee){return W.call(he,ee,Ae++)}),_e}function $(D){if(D._status===-1){var W=D._result;W=W(),W.then(function(he){(D._status===0||D._status===-1)&&(D._status=1,D._result=he)},function(he){(D._status===0||D._status===-1)&&(D._status=2,D._result=he)}),D._status===-1&&(D._status=0,D._result=W)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Te={map:V,forEach:function(D,W,he){V(D,function(){W.apply(this,arguments)},he)},count:function(D){var W=0;return V(D,function(){W++}),W},toArray:function(D){return V(D,function(W){return W})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return lt.Activity=v,lt.Children=Te,lt.Component=y,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=z,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return F.H.useMemoCache(D)}},lt.cache=function(D){return function(){return D.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(D,W,he){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var _e=C({},D.props),Ae=D.key;if(W!=null)for(ee in W.key!==void 0&&(Ae=""+W.key),W)!T.call(W,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&W.ref===void 0||(_e[ee]=W[ee]);var ee=arguments.length-2;if(ee===1)_e.children=he;else if(1<ee){for(var Se=Array(ee),Me=0;Me<ee;Me++)Se[Me]=arguments[Me+2];_e.children=Se}return I(D.type,Ae,_e)},lt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},lt.createElement=function(D,W,he){var _e,Ae={},ee=null;if(W!=null)for(_e in W.key!==void 0&&(ee=""+W.key),W)T.call(W,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Ae[_e]=W[_e]);var Se=arguments.length-2;if(Se===1)Ae.children=he;else if(1<Se){for(var Me=Array(Se),Ne=0;Ne<Se;Ne++)Me[Ne]=arguments[Ne+2];Ae.children=Me}if(D&&D.defaultProps)for(_e in Se=D.defaultProps,Se)Ae[_e]===void 0&&(Ae[_e]=Se[_e]);return I(D,ee,Ae)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(D){return{$$typeof:h,render:D}},lt.isValidElement=H,lt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:$}},lt.memo=function(D,W){return{$$typeof:p,type:D,compare:W===void 0?null:W}},lt.startTransition=function(D){var W=F.T,he={};F.T=he;try{var _e=D(),Ae=F.S;Ae!==null&&Ae(he,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(U,de)}catch(ee){de(ee)}finally{W!==null&&he.types!==null&&(W.types=he.types),F.T=W}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(D){return F.H.use(D)},lt.useActionState=function(D,W,he){return F.H.useActionState(D,W,he)},lt.useCallback=function(D,W){return F.H.useCallback(D,W)},lt.useContext=function(D){return F.H.useContext(D)},lt.useDebugValue=function(){},lt.useDeferredValue=function(D,W){return F.H.useDeferredValue(D,W)},lt.useEffect=function(D,W){return F.H.useEffect(D,W)},lt.useEffectEvent=function(D){return F.H.useEffectEvent(D)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(D,W,he){return F.H.useImperativeHandle(D,W,he)},lt.useInsertionEffect=function(D,W){return F.H.useInsertionEffect(D,W)},lt.useLayoutEffect=function(D,W){return F.H.useLayoutEffect(D,W)},lt.useMemo=function(D,W){return F.H.useMemo(D,W)},lt.useOptimistic=function(D,W){return F.H.useOptimistic(D,W)},lt.useReducer=function(D,W,he){return F.H.useReducer(D,W,he)},lt.useRef=function(D){return F.H.useRef(D)},lt.useState=function(D){return F.H.useState(D)},lt.useSyncExternalStore=function(D,W,he){return F.H.useSyncExternalStore(D,W,he)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.8",lt}var __;function sm(){return __||(__=1,lh.exports=gM()),lh.exports}var Qe=sm();const om=hM(Qe);function ep(a,e){(e==null||e>a.length)&&(e=a.length);for(var i=0,r=Array(e);i<e;i++)r[i]=a[i];return r}function vM(a){if(Array.isArray(a))return a}function _M(a){if(Array.isArray(a))return ep(a)}function xM(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function yM(a,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,hy(r.key),r)}}function SM(a,e,i){return e&&yM(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function Ru(a,e){var i=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!i){if(Array.isArray(a)||(i=lm(a))||e){i&&(a=i);var r=0,l=function(){};return{s:l,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,u=!0,h=!1;return{s:function(){i=i.call(a)},n:function(){var m=i.next();return u=m.done,m},e:function(m){h=!0,c=m},f:function(){try{u||i.return==null||i.return()}finally{if(h)throw c}}}}function at(a,e,i){return(e=hy(e))in a?Object.defineProperty(a,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[e]=i,a}function bM(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function MM(a,e){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var r,l,c,u,h=[],m=!0,p=!1;try{if(c=(i=i.call(a)).next,e===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(r=c.call(i)).done)&&(h.push(r.value),h.length!==e);m=!0);}catch(_){p=!0,l=_}finally{try{if(!m&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(p)throw l}}return h}}function EM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x_(a,e){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),i.push.apply(i,r)}return i}function Re(a){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?x_(Object(i),!0).forEach(function(r){at(a,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):x_(Object(i)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(i,r))})}return a}function ju(a,e){return vM(a)||MM(a,e)||lm(a,e)||EM()}function ki(a){return _M(a)||bM(a)||lm(a)||TM()}function AM(a,e){if(typeof a!="object"||!a)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var r=i.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function hy(a){var e=AM(a,"string");return typeof e=="symbol"?e:e+""}function Iu(a){"@babel/helpers - typeof";return Iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Iu(a)}function lm(a,e){if(a){if(typeof a=="string")return ep(a,e);var i={}.toString.call(a).slice(8,-1);return i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set"?Array.from(a):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ep(a,e):void 0}}var y_=function(){},cm={},py={},my=null,gy={mark:y_,measure:y_};try{typeof window<"u"&&(cm=window),typeof document<"u"&&(py=document),typeof MutationObserver<"u"&&(my=MutationObserver),typeof performance<"u"&&(gy=performance)}catch{}var RM=cm.navigator||{},S_=RM.userAgent,b_=S_===void 0?"":S_,yr=cm,Jt=py,M_=my,Yc=gy;yr.document;var Fa=!!Jt.documentElement&&!!Jt.head&&typeof Jt.addEventListener=="function"&&typeof Jt.createElement=="function",vy=~b_.indexOf("MSIE")||~b_.indexOf("Trident/"),jc,CM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,wM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,_y={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},DM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},xy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",wl="duotone",yy="sharp",Sy="sharp-duotone",by="chisel",My="etch",Ey="graphite",Ty="jelly",Ay="jelly-duo",Ry="jelly-fill",Cy="mosaic",wy="notdog",Dy="notdog-duo",Ny="pixel",Ly="slab",Uy="slab-duo",Oy="slab-press",Py="slab-press-duo",Iy="thumbprint",zy="utility",Fy="utility-duo",By="utility-fill",Hy="vellum",Gy="whiteboard",NM="Classic",LM="Duotone",UM="Sharp",OM="Sharp Duotone",PM="Chisel",IM="Etch",zM="Graphite",FM="Jelly",BM="Jelly Duo",HM="Jelly Fill",GM="Mosaic",VM="Notdog",kM="Notdog Duo",XM="Pixel",WM="Slab",qM="Slab Duo",YM="Slab Press",jM="Slab Press Duo",ZM="Thumbprint",KM="Utility",QM="Utility Duo",JM="Utility Fill",$M="Vellum",eE="Whiteboard",Vy=[In,wl,yy,Sy,by,My,Ey,Ty,Ay,Ry,Cy,wy,Dy,Ny,Ly,Uy,Oy,Py,Iy,zy,Fy,By,Hy,Gy];jc={},at(at(at(at(at(at(at(at(at(at(jc,In,NM),wl,LM),yy,UM),Sy,OM),by,PM),My,IM),Ey,zM),Ty,FM),Ay,BM),Ry,HM),at(at(at(at(at(at(at(at(at(at(jc,Cy,GM),wy,VM),Dy,kM),Ny,XM),Ly,WM),Uy,qM),Oy,YM),Py,jM),Iy,ZM),zy,KM),at(at(at(at(jc,Fy,QM),By,JM),Hy,$M),Gy,eE);var tE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},nE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},iE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),aE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},ky=["fak","fa-kit","fakd","fa-kit-duotone"],E_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},rE=["kit"],sE="kit",oE="kit-duotone",lE="Kit",cE="Kit Duotone";at(at({},sE,lE),oE,cE);var uE={kit:{"fa-kit":"fak"}},fE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},dE={kit:{fak:"fa-kit"}},T_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Zc,Kc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],pE="classic",mE="duotone",gE="sharp",vE="sharp-duotone",_E="chisel",xE="etch",yE="graphite",SE="jelly",bE="jelly-duo",ME="jelly-fill",EE="mosaic",TE="notdog",AE="notdog-duo",RE="pixel",CE="slab",wE="slab-duo",DE="slab-press",NE="slab-press-duo",LE="thumbprint",UE="utility",OE="utility-duo",PE="utility-fill",IE="vellum",zE="whiteboard",FE="Classic",BE="Duotone",HE="Sharp",GE="Sharp Duotone",VE="Chisel",kE="Etch",XE="Graphite",WE="Jelly",qE="Jelly Duo",YE="Jelly Fill",jE="Mosaic",ZE="Notdog",KE="Notdog Duo",QE="Pixel",JE="Slab",$E="Slab Duo",eT="Slab Press",tT="Slab Press Duo",nT="Thumbprint",iT="Utility",aT="Utility Duo",rT="Utility Fill",sT="Vellum",oT="Whiteboard";Zc={},at(at(at(at(at(at(at(at(at(at(Zc,pE,FE),mE,BE),gE,HE),vE,GE),_E,VE),xE,kE),yE,XE),SE,WE),bE,qE),ME,YE),at(at(at(at(at(at(at(at(at(at(Zc,EE,jE),TE,ZE),AE,KE),RE,QE),CE,JE),wE,$E),DE,eT),NE,tT),LE,nT),UE,iT),at(at(at(at(Zc,OE,aT),PE,rT),IE,sT),zE,oT);var lT="kit",cT="kit-duotone",uT="Kit",fT="Kit Duotone";at(at({},lT,uT),cT,fT);var dT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},hT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},tp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},pT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Xy=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(hE,pT),mT=["solid","regular","light","thin","duotone","brands","semibold"],Wy=[1,2,3,4,5,6,7,8,9,10],gT=Wy.concat([11,12,13,14,15,16,17,18,19,20]),vT=["aw","fw","pull-left","pull-right"],_T=[].concat(ki(Object.keys(hT)),mT,vT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Kc.GROUP,Kc.SWAP_OPACITY,Kc.PRIMARY,Kc.SECONDARY]).concat(Wy.map(function(a){return"".concat(a,"x")})).concat(gT.map(function(a){return"w-".concat(a)})),xT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ua="___FONT_AWESOME___",np=16,qy="fa",Yy="svg-inline--fa",ns="data-fa-i2svg",ip="data-fa-pseudo-element",yT="data-fa-pseudo-element-pending",um="data-prefix",fm="data-icon",A_="fontawesome-i2svg",ST="async",bT=["HTML","HEAD","STYLE","SCRIPT"],jy=["::before","::after",":before",":after"],Zy=(function(){try{return!0}catch{return!1}})();function Dl(a){return new Proxy(a,{get:function(i,r){return r in i?i[r]:i[In]}})}var Ky=Re({},_y);Ky[In]=Re(Re(Re(Re({},{"fa-duotone":"duotone"}),_y[In]),E_.kit),E_["kit-duotone"]);var MT=Dl(Ky),ap=Re({},aE);ap[In]=Re(Re(Re(Re({},{duotone:"fad"}),ap[In]),T_.kit),T_["kit-duotone"]);var R_=Dl(ap),rp=Re({},tp);rp[In]=Re(Re({},rp[In]),dE.kit);var dm=Dl(rp),sp=Re({},dT);sp[In]=Re(Re({},sp[In]),uE.kit);Dl(sp);var ET=CM,Qy="fa-layers-text",TT=wM,AT=Re({},tE);Dl(AT);var RT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ch=DM,CT=[].concat(ki(rE),ki(_T)),Ml=yr.FontAwesomeConfig||{};function wT(a){var e=Jt.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function DT(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(Jt&&typeof Jt.querySelector=="function"){var NT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];NT.forEach(function(a){var e=ju(a,2),i=e[0],r=e[1],l=DT(wT(i));l!=null&&(Ml[r]=l)})}var Jy={styleDefault:"solid",familyDefault:In,cssPrefix:qy,replacementClass:Yy,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ml.familyPrefix&&(Ml.cssPrefix=Ml.familyPrefix);var uo=Re(Re({},Jy),Ml);uo.autoReplaceSvg||(uo.observeMutations=!1);var it={};Object.keys(Jy).forEach(function(a){Object.defineProperty(it,a,{enumerable:!0,set:function(i){uo[a]=i,El.forEach(function(r){return r(it)})},get:function(){return uo[a]}})});Object.defineProperty(it,"familyPrefix",{enumerable:!0,set:function(e){uo.cssPrefix=e,El.forEach(function(i){return i(it)})},get:function(){return uo.cssPrefix}});yr.FontAwesomeConfig=it;var El=[];function LT(a){return El.push(a),function(){El.splice(El.indexOf(a),1)}}var Gs=np,$i={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function UT(a){if(!(!a||!Fa)){var e=Jt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var i=Jt.head.childNodes,r=null,l=i.length-1;l>-1;l--){var c=i[l],u=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(r=c)}return Jt.head.insertBefore(e,r),a}}var OT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C_(){for(var a=12,e="";a-- >0;)e+=OT[Math.random()*62|0];return e}function go(a){for(var e=[],i=(a||[]).length>>>0;i--;)e[i]=a[i];return e}function hm(a){return a.classList?go(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function $y(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function PT(a){return Object.keys(a||{}).reduce(function(e,i){return e+"".concat(i,'="').concat($y(a[i]),'" ')},"").trim()}function Zu(a){return Object.keys(a||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(a[i].trim(),";")},"")}function pm(a){return a.size!==$i.size||a.x!==$i.x||a.y!==$i.y||a.rotate!==$i.rotate||a.flipX||a.flipY}function IT(a){var e=a.transform,i=a.containerWidth,r=a.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(u," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:l,inner:m,path:p}}function zT(a){var e=a.transform,i=a.width,r=i===void 0?np:i,l=a.height,c=l===void 0?np:l,u="";return vy?u+="translate(".concat(e.x/Gs-r/2,"em, ").concat(e.y/Gs-c/2,"em) "):u+="translate(calc(-50% + ".concat(e.x/Gs,"em), calc(-50% + ").concat(e.y/Gs,"em)) "),u+="scale(".concat(e.size/Gs*(e.flipX?-1:1),", ").concat(e.size/Gs*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var FT=`:root, :host {
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
}`;function eS(){var a=qy,e=Yy,i=it.cssPrefix,r=it.replacementClass,l=FT;if(i!==a||r!==e){var c=new RegExp("\\.".concat(a,"\\-"),"g"),u=new RegExp("\\--".concat(a,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");l=l.replace(c,".".concat(i,"-")).replace(u,"--".concat(i,"-")).replace(h,".".concat(r))}return l}var w_=!1;function uh(){it.autoAddCss&&!w_&&(UT(eS()),w_=!0)}var BT={mixout:function(){return{dom:{css:eS,insertCss:uh}}},hooks:function(){return{beforeDOMElementCreation:function(){uh()},beforeI2svg:function(){uh()}}}},Oa=yr||{};Oa[Ua]||(Oa[Ua]={});Oa[Ua].styles||(Oa[Ua].styles={});Oa[Ua].hooks||(Oa[Ua].hooks={});Oa[Ua].shims||(Oa[Ua].shims=[]);var Hi=Oa[Ua],tS=[],nS=function(){Jt.removeEventListener("DOMContentLoaded",nS),zu=1,tS.map(function(e){return e()})},zu=!1;Fa&&(zu=(Jt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Jt.readyState),zu||Jt.addEventListener("DOMContentLoaded",nS));function HT(a){Fa&&(zu?setTimeout(a,0):tS.push(a))}function Nl(a){var e=a.tag,i=a.attributes,r=i===void 0?{}:i,l=a.children,c=l===void 0?[]:l;return typeof a=="string"?$y(a):"<".concat(e," ").concat(PT(r),">").concat(c.map(Nl).join(""),"</").concat(e,">")}function D_(a,e,i){if(a&&a[e]&&a[e][i])return{prefix:e,iconName:i,icon:a[e][i]}}var fh=function(e,i,r,l){var c=Object.keys(e),u=c.length,h=i,m,p,_;for(r===void 0?(m=1,_=e[c[0]]):(m=0,_=r);m<u;m++)p=c[m],_=h(_,e[p],p,e);return _};function iS(a){return ki(a).length!==1?null:a.codePointAt(0).toString(16)}function N_(a){return Object.keys(a).reduce(function(e,i){var r=a[i],l=!!r.icon;return l?e[r.iconName]=r.icon:e[i]=r,e},{})}function op(a,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.skipHooks,l=r===void 0?!1:r,c=N_(e);typeof Hi.hooks.addPack=="function"&&!l?Hi.hooks.addPack(a,N_(e)):Hi.styles[a]=Re(Re({},Hi.styles[a]||{}),c),a==="fas"&&op("fa",e)}var Al=Hi.styles,GT=Hi.shims,aS=Object.keys(dm),VT=aS.reduce(function(a,e){return a[e]=Object.keys(dm[e]),a},{}),mm=null,rS={},sS={},oS={},lS={},cS={};function kT(a){return~CT.indexOf(a)}function XT(a,e){var i=e.split("-"),r=i[0],l=i.slice(1).join("-");return r===a&&l!==""&&!kT(l)?l:null}var uS=function(){var e=function(c){return fh(Al,function(u,h,m){return u[m]=fh(h,c,{}),u},{})};rS=e(function(l,c,u){if(c[3]&&(l[c[3]]=u),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=u})}return l}),sS=e(function(l,c,u){if(l[u]=u,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=u})}return l}),cS=e(function(l,c,u){var h=c[2];return l[u]=u,h.forEach(function(m){l[m]=u}),l});var i="far"in Al||it.autoFetchSvg,r=fh(GT,function(l,c){var u=c[0],h=c[1],m=c[2];return h==="far"&&!i&&(h="fas"),typeof u=="string"&&(l.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(l.unicodes[u.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});oS=r.names,lS=r.unicodes,mm=Ku(it.styleDefault,{family:it.familyDefault})};LT(function(a){mm=Ku(a.styleDefault,{family:it.familyDefault})});uS();function gm(a,e){return(rS[a]||{})[e]}function WT(a,e){return(sS[a]||{})[e]}function $r(a,e){return(cS[a]||{})[e]}function fS(a){return oS[a]||{prefix:null,iconName:null}}function qT(a){var e=lS[a],i=gm("fas",a);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Sr(){return mm}var dS=function(){return{prefix:null,iconName:null,rest:[]}};function YT(a){var e=In,i=aS.reduce(function(r,l){return r[l]="".concat(it.cssPrefix,"-").concat(l),r},{});return Vy.forEach(function(r){(a.includes(i[r])||a.some(function(l){return VT[r].includes(l)}))&&(e=r)}),e}function Ku(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,r=i===void 0?In:i,l=MT[r][a];if(r===wl&&!a)return"fad";var c=R_[r][a]||R_[r][l],u=a in Hi.styles?a:null,h=c||u||null;return h}function jT(a){var e=[],i=null;return a.forEach(function(r){var l=XT(it.cssPrefix,r);l?i=l:r&&e.push(r)}),{iconName:i,rest:e}}function L_(a){return a.sort().filter(function(e,i,r){return r.indexOf(e)===i})}var U_=Xy.concat(ky);function Qu(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,r=i===void 0?!1:i,l=null,c=L_(a.filter(function(S){return U_.includes(S)})),u=L_(a.filter(function(S){return!U_.includes(S)})),h=c.filter(function(S){return l=S,!xy.includes(S)}),m=ju(h,1),p=m[0],_=p===void 0?null:p,v=YT(c),g=Re(Re({},jT(u)),{},{prefix:Ku(_,{family:v})});return Re(Re(Re({},g),JT({values:a,family:v,styles:Al,config:it,canonical:g,givenPrefix:l})),ZT(r,l,g))}function ZT(a,e,i){var r=i.prefix,l=i.iconName;if(a||!r||!l)return{prefix:r,iconName:l};var c=e==="fa"?fS(l):{},u=$r(r,l);return l=c.iconName||u||l,r=c.prefix||r,r==="far"&&!Al.far&&Al.fas&&!it.autoFetchSvg&&(r="fas"),{prefix:r,iconName:l}}var KT=Vy.filter(function(a){return a!==In||a!==wl}),QT=Object.keys(tp).filter(function(a){return a!==In}).map(function(a){return Object.keys(tp[a])}).flat();function JT(a){var e=a.values,i=a.family,r=a.canonical,l=a.givenPrefix,c=l===void 0?"":l,u=a.styles,h=u===void 0?{}:u,m=a.config,p=m===void 0?{}:m,_=i===wl,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=r.prefix==="fad"||r.prefix==="fa-duotone";if(!_&&(v||g||S)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&KT.includes(i)){var E=Object.keys(h).find(function(b){return QT.includes(b)});if(E||p.autoFetchSvg){var C=iE.get(i).defaultShortPrefixId;r.prefix=C,r.iconName=$r(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||c==="fa")&&(r.prefix=Sr()||"fas"),r}var $T=(function(){function a(){xM(this,a),this.definitions={}}return SM(a,[{key:"add",value:function(){for(var i=this,r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];var u=l.reduce(this._pullDefinitions,{});Object.keys(u).forEach(function(h){i.definitions[h]=Re(Re({},i.definitions[h]||{}),u[h]),op(h,u[h]);var m=dm[In][h];m&&op(m,u[h]),uS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,r){var l=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(l).map(function(c){var u=l[c],h=u.prefix,m=u.iconName,p=u.icon,_=p[2];i[h]||(i[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(i[h][v]=p)}),i[h][m]=p}),i}}])})(),O_=[],io={},so={},eA=Object.keys(so);function tA(a,e){var i=e.mixoutsTo;return O_=a,io={},Object.keys(so).forEach(function(r){eA.indexOf(r)===-1&&delete so[r]}),O_.forEach(function(r){var l=r.mixout?r.mixout():{};if(Object.keys(l).forEach(function(u){typeof l[u]=="function"&&(i[u]=l[u]),Iu(l[u])==="object"&&Object.keys(l[u]).forEach(function(h){i[u]||(i[u]={}),i[u][h]=l[u][h]})}),r.hooks){var c=r.hooks();Object.keys(c).forEach(function(u){io[u]||(io[u]=[]),io[u].push(c[u])})}r.provides&&r.provides(so)}),i}function lp(a,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),l=2;l<i;l++)r[l-2]=arguments[l];var c=io[a]||[];return c.forEach(function(u){e=u.apply(null,[e].concat(r))}),e}function is(a){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];var l=io[a]||[];l.forEach(function(c){c.apply(null,i)})}function br(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return so[a]?so[a].apply(null,e):void 0}function cp(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,i=a.prefix||Sr();if(e)return e=$r(i,e)||e,D_(hS.definitions,i,e)||D_(Hi.styles,i,e)}var hS=new $T,nA=function(){it.autoReplaceSvg=!1,it.observeMutations=!1,is("noAuto")},iA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fa?(is("beforeI2svg",e),br("pseudoElements2svg",e),br("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;it.autoReplaceSvg===!1&&(it.autoReplaceSvg=!0),it.observeMutations=!0,HT(function(){rA({autoReplaceSvgRoot:i}),is("watch",e)})}},aA={icon:function(e){if(e===null)return null;if(Iu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$r(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ku(e[0]);return{prefix:r,iconName:$r(r,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(it.cssPrefix,"-"))>-1||e.match(ET))){var l=Qu(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||Sr(),iconName:$r(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var c=Sr();return{prefix:c,iconName:$r(c,e)||e}}}},vi={noAuto:nA,config:it,dom:iA,parse:aA,library:hS,findIconDefinition:cp,toHtml:Nl},rA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,r=i===void 0?Jt:i;(Object.keys(Hi.styles).length>0||it.autoFetchSvg)&&Fa&&it.autoReplaceSvg&&vi.dom.i2svg({node:r})};function Ju(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return Nl(r)})}}),Object.defineProperty(a,"node",{get:function(){if(Fa){var r=Jt.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function sA(a){var e=a.children,i=a.main,r=a.mask,l=a.attributes,c=a.styles,u=a.transform;if(pm(u)&&i.found&&!r.found){var h=i.width,m=i.height,p={x:h/m/2,y:.5};l.style=Zu(Re(Re({},c),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function oA(a){var e=a.prefix,i=a.iconName,r=a.children,l=a.attributes,c=a.symbol,u=c===!0?"".concat(e,"-").concat(it.cssPrefix,"-").concat(i):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Re(Re({},l),{},{id:u}),children:r}]}]}function lA(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(i){return i in a})}function vm(a){var e=a.icons,i=e.main,r=e.mask,l=a.prefix,c=a.iconName,u=a.transform,h=a.symbol,m=a.maskId,p=a.extra,_=a.watchable,v=_===void 0?!1:_,g=r.found?r:i,S=g.width,E=g.height,C=[it.replacementClass,c?"".concat(it.cssPrefix,"-").concat(c):""].filter(function(L){return p.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(p.classes).join(" "),b={children:[],attributes:Re(Re({},p.attributes),{},{"data-prefix":l,"data-icon":c,class:C,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(E)})};!lA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ns]="");var y=Re(Re({},b),{},{prefix:l,iconName:c,main:i,mask:r,maskId:m,transform:u,symbol:h,styles:Re({},p.styles)}),P=r.found&&i.found?br("generateAbstractMask",y)||{children:[],attributes:{}}:br("generateAbstractIcon",y)||{children:[],attributes:{}},z=P.children,w=P.attributes;return y.children=z,y.attributes=w,h?oA(y):sA(y)}function P_(a){var e=a.content,i=a.width,r=a.height,l=a.transform,c=a.extra,u=a.watchable,h=u===void 0?!1:u,m=Re(Re({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ns]="");var p=Re({},c.styles);pm(l)&&(p.transform=zT({transform:l,width:i,height:r}),p["-webkit-transform"]=p.transform);var _=Zu(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function cA(a){var e=a.content,i=a.extra,r=Re(Re({},i.attributes),{},{class:i.classes.join(" ")}),l=Zu(i.styles);l.length>0&&(r.style=l);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),c}var dh=Hi.styles;function up(a){var e=a[0],i=a[1],r=a.slice(4),l=ju(r,1),c=l[0],u=null;return Array.isArray(c)?u={tag:"g",attributes:{class:"".concat(it.cssPrefix,"-").concat(ch.GROUP)},children:[{tag:"path",attributes:{class:"".concat(it.cssPrefix,"-").concat(ch.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(it.cssPrefix,"-").concat(ch.PRIMARY),fill:"currentColor",d:c[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:i,icon:u}}var uA={found:!1,width:512,height:512};function fA(a,e){!Zy&&!it.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function fp(a,e){var i=e;return e==="fa"&&it.styleDefault!==null&&(e=Sr()),new Promise(function(r,l){if(i==="fa"){var c=fS(a)||{};a=c.iconName||a,e=c.prefix||e}if(a&&e&&dh[e]&&dh[e][a]){var u=dh[e][a];return r(up(u))}fA(a,e),r(Re(Re({},uA),{},{icon:it.showMissingIcons&&a?br("missingIconAbstract")||{}:{}}))})}var I_=function(){},dp=it.measurePerformance&&Yc&&Yc.mark&&Yc.measure?Yc:{mark:I_,measure:I_},yl='FA "7.3.1"',dA=function(e){return dp.mark("".concat(yl," ").concat(e," begins")),function(){return pS(e)}},pS=function(e){dp.mark("".concat(yl," ").concat(e," ends")),dp.measure("".concat(yl," ").concat(e),"".concat(yl," ").concat(e," begins"),"".concat(yl," ").concat(e," ends"))},_m={begin:dA,end:pS},Cu=function(){};function z_(a){var e=a.getAttribute?a.getAttribute(ns):null;return typeof e=="string"}function hA(a){var e=a.getAttribute?a.getAttribute(um):null,i=a.getAttribute?a.getAttribute(fm):null;return e&&i}function pA(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(it.replacementClass)}function mA(){if(it.autoReplaceSvg===!0)return wu.replace;var a=wu[it.autoReplaceSvg];return a||wu.replace}function gA(a){return Jt.createElementNS("http://www.w3.org/2000/svg",a)}function vA(a){return Jt.createElement(a)}function mS(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,r=i===void 0?a.tag==="svg"?gA:vA:i;if(typeof a=="string")return Jt.createTextNode(a);var l=r(a.tag);Object.keys(a.attributes||[]).forEach(function(u){l.setAttribute(u,a.attributes[u])});var c=a.children||[];return c.forEach(function(u){l.appendChild(mS(u,{ceFn:r}))}),l}function _A(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wu={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(l){i.parentNode.insertBefore(mS(l),i)}),i.getAttribute(ns)===null&&it.keepOriginalSource){var r=Jt.createComment(_A(i));i.parentNode.replaceChild(r,i)}else i.remove()},nest:function(e){var i=e[0],r=e[1];if(~hm(i).indexOf(it.replacementClass))return wu.replace(e);var l=new RegExp("".concat(it.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var c=r[0].attributes.class.split(" ").reduce(function(h,m){return m===it.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",c.toNode.join(" "))}var u=r.map(function(h){return Nl(h)}).join(`
`);i.setAttribute(ns,""),i.innerHTML=u}};function F_(a){a()}function gS(a,e){var i=typeof e=="function"?e:Cu;if(a.length===0)i();else{var r=F_;it.mutateApproach===ST&&(r=yr.requestAnimationFrame||F_),r(function(){var l=mA(),c=_m.begin("mutate");a.map(l),c(),i()})}}var xm=!1;function vS(){xm=!0}function hp(){xm=!1}var Fu=null;function B_(a){if(M_&&it.observeMutations){var e=a.treeCallback,i=e===void 0?Cu:e,r=a.nodeCallback,l=r===void 0?Cu:r,c=a.pseudoElementsCallback,u=c===void 0?Cu:c,h=a.observeMutationsRoot,m=h===void 0?Jt:h;Fu=new M_(function(p){if(!xm){var _=Sr();go(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!z_(v.addedNodes[0])&&(it.searchPseudoElements&&u(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&it.searchPseudoElements&&u([v.target],!0),v.type==="attributes"&&z_(v.target)&&~RT.indexOf(v.attributeName))if(v.attributeName==="class"&&hA(v.target)){var g=Qu(hm(v.target)),S=g.prefix,E=g.iconName;v.target.setAttribute(um,S||_),E&&v.target.setAttribute(fm,E)}else pA(v.target)&&l(v.target)})}}),Fa&&Fu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xA(){Fu&&Fu.disconnect()}function yA(a){var e=a.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(r,l){var c=l.split(":"),u=c[0],h=c.slice(1);return u&&h.length>0&&(r[u]=h.join(":").trim()),r},{})),i}function SA(a){var e=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",l=Qu(hm(a));return l.prefix||(l.prefix=Sr()),e&&i&&(l.prefix=e,l.iconName=i),l.iconName&&l.prefix||(l.prefix&&r.length>0&&(l.iconName=WT(l.prefix,a.innerText)||gm(l.prefix,iS(a.innerText))),!l.iconName&&it.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=a.firstChild.data)),l}function bA(a){var e=go(a.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{});return e}function MA(){return{iconName:null,prefix:null,transform:$i,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function H_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=SA(a),r=i.iconName,l=i.prefix,c=i.rest,u=bA(a),h=lp("parseNodeAttributes",{},a),m=e.styleParser?yA(a):[];return Re({iconName:r,prefix:l,transform:$i,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:u}},h)}var EA=Hi.styles;function _S(a){var e=it.autoReplaceSvg==="nest"?H_(a,{styleParser:!1}):H_(a);return~e.extra.classes.indexOf(Qy)?br("generateLayersText",a,e):br("generateSvgReplacementMutation",a,e)}function TA(){return[].concat(ki(ky),ki(Xy))}function G_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fa)return Promise.resolve();var i=Jt.documentElement.classList,r=function(v){return i.add("".concat(A_,"-").concat(v))},l=function(v){return i.remove("".concat(A_,"-").concat(v))},c=it.autoFetchSvg?TA():xy.concat(Object.keys(EA));c.includes("fa")||c.push("fa");var u=[".".concat(Qy,":not([").concat(ns,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ns,"])")})).join(", ");if(u.length===0)return Promise.resolve();var h=[];try{h=go(a.querySelectorAll(u))}catch{}if(h.length>0)r("pending"),l("complete");else return Promise.resolve();var m=_m.begin("onTree"),p=h.reduce(function(_,v){try{var g=_S(v);g&&_.push(g)}catch(S){Zy||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){gS(g,function(){r("active"),r("complete"),l("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function AA(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_S(a).then(function(i){i&&gS([i],e)})}function RA(a){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:cp(e||{}),l=i.mask;return l&&(l=(l||{}).icon?l:cp(l||{})),a(r,Re(Re({},i),{},{mask:l}))}}var CA=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,l=r===void 0?$i:r,c=i.symbol,u=c===void 0?!1:c,h=i.mask,m=h===void 0?null:h,p=i.maskId,_=p===void 0?null:p,v=i.classes,g=v===void 0?[]:v,S=i.attributes,E=S===void 0?{}:S,C=i.styles,b=C===void 0?{}:C;if(e){var y=e.prefix,P=e.iconName,z=e.icon;return Ju(Re({type:"icon"},e),function(){return is("beforeDOMElementCreation",{iconDefinition:e,params:i}),vm({icons:{main:up(z),mask:m?up(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:P,transform:Re(Re({},$i),l),symbol:u,maskId:_,extra:{attributes:E,styles:b,classes:g}})})}},wA={mixout:function(){return{icon:RA(CA)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=G_,i.nodeCallback=AA,i}}},provides:function(e){e.i2svg=function(i){var r=i.node,l=r===void 0?Jt:r,c=i.callback,u=c===void 0?function(){}:c;return G_(l,u)},e.generateSvgReplacementMutation=function(i,r){var l=r.iconName,c=r.prefix,u=r.transform,h=r.symbol,m=r.mask,p=r.maskId,_=r.extra;return new Promise(function(v,g){Promise.all([fp(l,c),m.iconName?fp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=ju(S,2),C=E[0],b=E[1];v([i,vm({icons:{main:C,mask:b},prefix:c,iconName:l,transform:u,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(i){var r=i.children,l=i.attributes,c=i.main,u=i.transform,h=i.styles,m=Zu(h);m.length>0&&(l.style=m);var p;return pm(u)&&(p=br("generateAbstractTransformGrouping",{main:c,transform:u,containerWidth:c.width,iconWidth:c.width})),r.push(p||c.icon),{children:r,attributes:l}}}},DA={mixout:function(){return{layer:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=r.classes,c=l===void 0?[]:l;return Ju({type:"layer"},function(){is("beforeDOMElementCreation",{assembler:i,params:r});var u=[];return i(function(h){Array.isArray(h)?h.map(function(m){u=u.concat(m.abstract)}):u=u.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(it.cssPrefix,"-layers")].concat(ki(c)).join(" ")},children:u}]})}}}},NA={mixout:function(){return{counter:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return Ju({type:"counter",content:i},function(){return is("beforeDOMElementCreation",{content:i,params:r}),cA({content:i.toString(),extra:{attributes:h,styles:p,classes:["".concat(it.cssPrefix,"-layers-counter")].concat(ki(c))}})})}}}},LA={mixout:function(){return{text:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=r.transform,c=l===void 0?$i:l,u=r.classes,h=u===void 0?[]:u,m=r.attributes,p=m===void 0?{}:m,_=r.styles,v=_===void 0?{}:_;return Ju({type:"text",content:i},function(){return is("beforeDOMElementCreation",{content:i,params:r}),P_({content:i,transform:Re(Re({},$i),c),extra:{attributes:p,styles:v,classes:["".concat(it.cssPrefix,"-layers-text")].concat(ki(h))}})})}}},provides:function(e){e.generateLayersText=function(i,r){var l=r.transform,c=r.extra,u=null,h=null;if(vy){var m=parseInt(getComputedStyle(i).fontSize,10),p=i.getBoundingClientRect();u=p.width/m,h=p.height/m}return Promise.resolve([i,P_({content:i.innerHTML,width:u,height:h,transform:l,extra:c,watchable:!0})])}}},xS=new RegExp('"',"ug"),V_=[1105920,1112319],k_=Re(Re(Re(Re({},{FontAwesome:{normal:"fas",400:"fas"}}),nE),xT),fE),pp=Object.keys(k_).reduce(function(a,e){return a[e.toLowerCase()]=k_[e],a},{}),UA=Object.keys(pp).reduce(function(a,e){var i=pp[e];return a[e]=i[900]||ki(Object.entries(i))[0][1],a},{});function OA(a){var e=a.replace(xS,"");return iS(ki(e)[0]||"")}function PA(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),i=a.getPropertyValue("content"),r=i.replace(xS,""),l=r.codePointAt(0),c=l>=V_[0]&&l<=V_[1],u=r.length===2?r[0]===r[1]:!1;return c||u||e}function IA(a,e){var i=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),l=isNaN(r)?"normal":r;return(pp[i]||{})[l]||UA[i]}function X_(a,e){var i="".concat(yT).concat(e.replace(":","-"));return new Promise(function(r,l){if(a.getAttribute(i)!==null)return r();var c=go(a.children),u=c.filter(function(U){return U.getAttribute(ip)===e})[0],h=yr.getComputedStyle(a,e),m=h.getPropertyValue("font-family"),p=m.match(TT),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(u&&!p)return a.removeChild(u),r();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=IA(m,_),E=OA(g),C=p[0].startsWith("FontAwesome"),b=PA(h),y=gm(S,E),P=y;if(C){var z=qT(E);z.iconName&&z.prefix&&(y=z.iconName,S=z.prefix)}if(y&&!b&&(!u||u.getAttribute(um)!==S||u.getAttribute(fm)!==P)){a.setAttribute(i,P),u&&a.removeChild(u);var w=MA(),L=w.extra;L.attributes[ip]=e,fp(y,S).then(function(U){var F=vm(Re(Re({},w),{},{icons:{main:U,mask:dS()},prefix:S,iconName:P,extra:L,watchable:!0})),T=Jt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(T,a.firstChild):a.appendChild(T),T.outerHTML=F.map(function(I){return Nl(I)}).join(`
`),a.removeAttribute(i),r()}).catch(l)}else r()}else r()})}function zA(a){return Promise.all([X_(a,"::before"),X_(a,"::after")])}function FA(a){return a.parentNode!==document.head&&!~bT.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(ip)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var BA=function(e){return!!e&&jy.some(function(i){return e.includes(i)})},HA=function(e){if(!e)return[];var i=new Set,r=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=Ru(r),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if(BA(u)){var h=jy.reduce(function(m,p){return m.replace(p,"")},u);h!==""&&h!=="*"&&i.add(h)}}}catch(m){l.e(m)}finally{l.f()}return i};function W_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Fa){var i;if(e)i=a;else if(it.searchPseudoElementsFullScan)i=a.querySelectorAll("*");else{var r=new Set,l=Ru(document.styleSheets),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;try{var h=Ru(u.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=HA(p.selectorText),v=Ru(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;r.add(S)}}catch(C){v.e(C)}finally{v.f()}}}catch(C){h.e(C)}finally{h.f()}}catch(C){it.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(u.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){l.e(C)}finally{l.f()}if(!r.size)return;var E=Array.from(r).join(", ");try{i=a.querySelectorAll(E)}catch{}}return new Promise(function(C,b){var y=go(i).filter(FA).map(zA),P=_m.begin("searchPseudoElements");vS(),Promise.all(y).then(function(){P(),hp(),C()}).catch(function(){P(),hp(),b()})})}}var GA={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=W_,i}}},provides:function(e){e.pseudoElements2svg=function(i){var r=i.node,l=r===void 0?Jt:r;it.searchPseudoElements&&W_(l)}}},q_=!1,VA={mixout:function(){return{dom:{unwatch:function(){vS(),q_=!0}}}},hooks:function(){return{bootstrap:function(){B_(lp("mutationObserverCallbacks",{}))},noAuto:function(){xA()},watch:function(i){var r=i.observeMutationsRoot;q_?hp():B_(lp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Y_=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,l){var c=l.toLowerCase().split("-"),u=c[0],h=c.slice(1).join("-");if(u&&h==="h")return r.flipX=!0,r;if(u&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(u){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},i)},kA={mixout:function(){return{parse:{transform:function(i){return Y_(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,r){var l=r.getAttribute("data-fa-transform");return l&&(i.transform=Y_(l)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var r=i.main,l=i.transform,c=i.containerWidth,u=i.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),_="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(u/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:Re({},S.outer),children:[{tag:"g",attributes:Re({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Re(Re({},r.icon.attributes),S.path)}]}]}}}},hh={x:0,y:0,width:"100%",height:"100%"};function j_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function XA(a){return a.tag==="g"?a.children:[a]}var WA={hooks:function(){return{parseNodeAttributes:function(i,r){var l=r.getAttribute("data-fa-mask"),c=l?Qu(l.split(" ").map(function(u){return u.trim()})):dS();return c.prefix||(c.prefix=Sr()),i.mask=c,i.maskId=r.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var r=i.children,l=i.attributes,c=i.main,u=i.mask,h=i.maskId,m=i.transform,p=c.width,_=c.icon,v=u.width,g=u.icon,S=IT({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:Re(Re({},hh),{},{fill:"white"})},C=_.children?{children:_.children.map(j_)}:{},b={tag:"g",attributes:Re({},S.inner),children:[j_(Re({tag:_.tag,attributes:Re(Re({},_.attributes),S.path)},C))]},y={tag:"g",attributes:Re({},S.outer),children:[b]},P="mask-".concat(h||C_()),z="clip-".concat(h||C_()),w={tag:"mask",attributes:Re(Re({},hh),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:z},children:XA(g)},w]};return r.push(L,{tag:"rect",attributes:Re({fill:"currentColor","clip-path":"url(#".concat(z,")"),mask:"url(#".concat(P,")")},hh)}),{children:r,attributes:l}}}},qA={provides:function(e){var i=!1;yr.matchMedia&&(i=yr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],l={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Re(Re({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var u=Re(Re({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Re(Re({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||h.children.push({tag:"animate",attributes:Re(Re({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Re(Re({},u),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:Re(Re({},u),{},{values:"1;0;0;0;0;1;"})}]}),i||r.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Re(Re({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},YA={hooks:function(){return{parseNodeAttributes:function(i,r){var l=r.getAttribute("data-fa-symbol"),c=l===null?!1:l===""?!0:l;return i.symbol=c,i}}}},jA=[BT,wA,DA,NA,LA,GA,VA,kA,WA,qA,YA];tA(jA,{mixoutsTo:vi});vi.noAuto;var as=vi.config;vi.library;vi.dom;var yS=vi.parse;vi.findIconDefinition;vi.toHtml;var ZA=vi.icon;vi.layer;vi.text;vi.counter;var ph={exports:{}},fl={},mh={exports:{}},gh={};var Z_;function KA(){return Z_||(Z_=1,(function(a){function e(N,V){var $=N.length;N.push(V);e:for(;0<$;){var de=$-1>>>1,Te=N[de];if(0<l(Te,V))N[de]=V,N[$]=Te,$=de;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],$=N.pop();if($!==V){N[0]=$;e:for(var de=0,Te=N.length,D=Te>>>1;de<D;){var W=2*(de+1)-1,he=N[W],_e=W+1,Ae=N[_e];if(0>l(he,$))_e<Te&&0>l(Ae,he)?(N[de]=Ae,N[_e]=$,de=_e):(N[de]=he,N[W]=$,de=W);else if(_e<Te&&0>l(Ae,$))N[de]=Ae,N[_e]=$,de=_e;else break e}}return V}function l(N,V){var $=N.sortIndex-V.sortIndex;return $!==0?$:N.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,C=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function w(N){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=N)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function L(N){if(C=!1,w(N),!E)if(i(m)!==null)E=!0,U||(U=!0,K());else{var V=i(p);V!==null&&q(L,V.startTime-N)}}var U=!1,F=-1,T=5,I=-1;function k(){return b?!0:!(a.unstable_now()-I<T)}function H(){if(b=!1,U){var N=a.unstable_now();I=N;var V=!0;try{e:{E=!1,C&&(C=!1,P(F),F=-1),S=!0;var $=g;try{t:{for(w(N),v=i(m);v!==null&&!(v.expirationTime>N&&k());){var de=v.callback;if(typeof de=="function"){v.callback=null,g=v.priorityLevel;var Te=de(v.expirationTime<=N);if(N=a.unstable_now(),typeof Te=="function"){v.callback=Te,w(N),V=!0;break t}v===i(m)&&r(m),w(N)}else r(m);v=i(m)}if(v!==null)V=!0;else{var D=i(p);D!==null&&q(L,D.startTime-N),V=!1}}break e}finally{v=null,g=$,S=!1}V=void 0}}finally{V?K():U=!1}}}var K;if(typeof z=="function")K=function(){z(H)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=H,K=function(){fe.postMessage(null)}}else K=function(){y(H,0)};function q(N,V){F=y(function(){N(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(N){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var $=g;g=V;try{return N()}finally{g=$}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var $=g;g=N;try{return V()}finally{g=$}},a.unstable_scheduleCallback=function(N,V,$){var de=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?de+$:de):$=de,N){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=$+Te,N={id:_++,callback:V,priorityLevel:N,startTime:$,expirationTime:Te,sortIndex:-1},$>de?(N.sortIndex=$,e(p,N),i(m)===null&&N===i(p)&&(C?(P(F),F=-1):C=!0,q(L,$-de))):(N.sortIndex=Te,e(m,N),E||S||(E=!0,U||(U=!0,K()))),N},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(N){var V=g;return function(){var $=g;g=V;try{return N.apply(this,arguments)}finally{g=$}}}})(gh)),gh}var K_;function QA(){return K_||(K_=1,mh.exports=KA()),mh.exports}var vh={exports:{}},Fn={};var Q_;function JA(){if(Q_)return Fn;Q_=1;var a=sm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Fn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Fn.flushSync=function(m){var p=u.T,_=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=_,r.d.f()}},Fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Fn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Fn.requestFormReset=function(m){r.d.r(m)},Fn.unstable_batchedUpdates=function(m,p){return m(p)},Fn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.2.8",Fn}var J_;function $A(){if(J_)return vh.exports;J_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),vh.exports=JA(),vh.exports}var $_;function e2(){if($_)return fl;$_=1;var a=QA(),e=sm(),i=$A();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,o=n;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(o=f.return,o!==null){s=o;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===o)return m(f),n;d=d.sibling}throw Error(r(188))}if(s.return!==o.return)s=f,o=d;else{for(var x=!1,R=f.child;R;){if(R===s){x=!0,s=f,o=d;break}if(R===o){x=!0,o=f,s=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===s){x=!0,s=d,o=f;break}if(R===o){x=!0,o=d,s=f;break}R=R.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),z=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case L:return"Suspense";case U:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case z:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var q=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},de=[],Te=-1;function D(t){return{current:t}}function W(t){0>Te||(t.current=de[Te],de[Te]=null,Te--)}function he(t,n){Te++,de[Te]=t.current,t.current=n}var _e=D(null),Ae=D(null),ee=D(null),Se=D(null);function Me(t,n){switch(he(ee,n),he(Ae,t),he(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zv(n),t=Fv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(_e),he(_e,t)}function Ne(){W(_e),W(Ae),W(ee)}function Je(t){t.memoizedState!==null&&he(Se,t);var n=_e.current,s=Fv(n,t.type);n!==s&&(he(Ae,t),he(_e,s))}function Ze(t){Ae.current===t&&(W(_e),W(Ae)),Se.current===t&&(W(Se),sl._currentValue=$)}var Vt,ut;function bt(t){if(Vt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Vt=n&&n[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+t+ut}var Mt=!1;function mt(t,n){if(!t||Mt)return"";Mt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ce){var le=ce}Reflect.construct(t,[],be)}else{try{be.call()}catch(ce){le=ce}t.call(be.prototype)}}else{try{throw Error()}catch(ce){le=ce}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var B=x.split(`
`),ne=R.split(`
`);for(f=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;f<ne.length&&!ne[f].includes("DetermineComponentFrameRoot");)f++;if(o===B.length||f===ne.length)for(o=B.length-1,f=ne.length-1;1<=o&&0<=f&&B[o]!==ne[f];)f--;for(;1<=o&&0<=f;o--,f--)if(B[o]!==ne[f]){if(o!==1||f!==1)do if(o--,f--,0>f||B[o]!==ne[f]){var ve=`
`+B[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=f);break}}}finally{Mt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?bt(s):""}function an(t,n){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return t.child!==n&&n!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return mt(t.type,!1);case 11:return mt(t.type.render,!1);case 1:return mt(t.type,!0);case 31:return bt("Activity");default:return""}}function rn(t){try{var n="",s=null;do n+=an(t,s),s=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var sn=Object.prototype.hasOwnProperty,dn=a.unstable_scheduleCallback,Zt=a.unstable_cancelCallback,on=a.unstable_shouldYield,Z=a.unstable_requestPaint,kt=a.unstable_now,Nt=a.unstable_getCurrentPriorityLevel,O=a.unstable_ImmediatePriority,M=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,se=a.unstable_LowPriority,me=a.unstable_IdlePriority,Ce=a.log,Ue=a.unstable_setDisableYieldValue,pe=null,ge=null;function De(t){if(typeof Ce=="function"&&Ue(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(pe,t)}catch{}}var He=Math.clz32?Math.clz32:$e,Ie=Math.log,Oe=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Ie(t)/Oe|0)|0}var et=256,ot=262144,Y=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,s){var o=t.pendingLanes;if(o===0)return 0;var f=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?f=we(o):(x&=R,x!==0?f=we(x):s||(s=R&~t,s!==0&&(f=we(s))))):(R=o&~d,R!==0?f=we(R):x!==0?f=we(x):s||(s=o&~t,s!==0&&(f=we(s)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:f}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Ye(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $t(t,n,s,o,f,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,ne=t.hiddenUpdates;for(s=x&~s;0<s;){var ve=31-He(s),be=1<<ve;R[ve]=0,B[ve]=-1;var le=ne[ve];if(le!==null)for(ne[ve]=null,ve=0;ve<le.length;ve++){var ce=le[ve];ce!==null&&(ce.lane&=-536870913)}s&=~be}o!==0&&Pt(t,o,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Pt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-He(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ii(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var o=31-He(s),f=1<<o;f&n|t[o]&n&&(t[o]|=n),s&=~f}}function ai(t,n){var s=n&-n;return s=(s&42)!==0?1:yo(s),(s&(t.suspendedLanes|n))!==0?0:s}function yo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function So(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bo(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:o_(t.type))}function cs(t,n){var s=V.p;try{return V.p=t,n()}finally{V.p=s}}var Xi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Xi,Dn="__reactProps$"+Xi,qn="__reactContainer$"+Xi,Er="__reactEvents$"+Xi,Il="__reactListeners$"+Xi,zl="__reactHandles$"+Xi,Tr="__reactResources$"+Xi,Ba="__reactMarker$"+Xi;function Ha(t){delete t[mn],delete t[Dn],delete t[Er],delete t[Il],delete t[zl]}function ra(t){var n=t[mn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[qn]||s[mn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Wv(t);t!==null;){if(s=t[mn])return s;t=Wv(t)}return n}t=s,s=t.parentNode}return null}function sa(t){if(t=t[mn]||t[qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ar(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ga(t){var n=t[Tr];return n||(n=t[Tr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Ba]=!0}var Fl=new Set,A={};function j(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)Fl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},ze={};function Ve(t){return sn.call(ze,t)?!0:sn.call(re,t)?!1:ae.test(t)?ze[t]=!0:(re[t]=!0,!1)}function Pe(t,n,s){if(Ve(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function We(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Xe(t,n,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==s?(n.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function zt(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,s,o,f,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?gt(t,x,tt(n)):s!=null?gt(t,x,tt(s)):o!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+tt(R):t.removeAttribute("name")}function zn(t,n,s,o,f,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ct(t);return}s=s!=null?""+tt(s):"",n=n!=null?""+tt(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ct(t)}function gt(t,n,s){n==="number"&&Yt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function bn(t,n,s,o){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&o&&(t[s].defaultSelected=!0)}else{for(s=""+tt(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,o&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function ri(t,n,s){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+tt(s):""}function Di(t,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(r(92));if(q(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=tt(n),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Ct(t)}function si(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,s):typeof s!="number"||s===0||Ft.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Ni(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var f in n)o=n[f],n.hasOwnProperty(f)&&s[f]!==o&&tn(t,f,o)}else for(var d in n)n.hasOwnProperty(d)&&tn(t,d,n[d])}function Ot(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rr(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var af=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var us=null,fs=null;function Im(t){var n=sa(t);if(n&&(t=n.stateNode)){var s=t[Dn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==t&&o.form===t.form){var f=o[Dn]||null;if(!f)throw Error(r(90));Ge(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===t.form&&en(o)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&bn(t,!!s.multiple,n,!1)}}}var sf=!1;function zm(t,n,s){if(sf)return t(n,s);sf=!0;try{var o=t(n);return o}finally{if(sf=!1,(us!==null||fs!==null)&&(Tc(),us&&(n=us,t=fs,fs=us=null,Im(n),t)))for(n=0;n<t.length;n++)Im(t[n])}}function Mo(t,n){var s=t.stateNode;if(s===null)return null;var o=s[Dn]||null;if(o===null)return null;s=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=!1;if(la)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){of=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{of=!1}var ka=null,lf=null,Bl=null;function Fm(){if(Bl)return Bl;var t,n=lf,s=n.length,o,f="value"in ka?ka.value:ka.textContent,d=f.length;for(t=0;t<s&&n[t]===f[t];t++);var x=s-t;for(o=1;o<=x&&n[s-o]===f[d-o];o++);return Bl=f.slice(t,1<o?1-o:void 0)}function Hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function Bm(){return!1}function Yn(t){function n(s,o,f,d,x){this._reactName=s,this._targetInst=f,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Gl:Bm,this.isPropagationStopped=Bm,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),n}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Yn(Cr),To=v({},Cr,{view:0,detail:0}),l1=Yn(To),cf,uf,Ao,kl=v({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(cf=t.screenX-Ao.screenX,uf=t.screenY-Ao.screenY):uf=cf=0,Ao=t),cf)},movementY:function(t){return"movementY"in t?t.movementY:uf}}),Hm=Yn(kl),c1=v({},kl,{dataTransfer:0}),u1=Yn(c1),f1=v({},To,{relatedTarget:0}),ff=Yn(f1),d1=v({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),h1=Yn(d1),p1=v({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m1=Yn(p1),g1=v({},Cr,{data:0}),Gm=Yn(g1),v1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y1(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=x1[t])?!!n[t]:!1}function df(){return y1}var S1=v({},To,{key:function(t){if(t.key){var n=v1[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b1=Yn(S1),M1=v({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=Yn(M1),E1=v({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),T1=Yn(E1),A1=v({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=Yn(A1),C1=v({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w1=Yn(C1),D1=v({},Cr,{newState:0,oldState:0}),N1=Yn(D1),L1=[9,13,27,32],hf=la&&"CompositionEvent"in window,Ro=null;la&&"documentMode"in document&&(Ro=document.documentMode);var U1=la&&"TextEvent"in window&&!Ro,km=la&&(!hf||Ro&&8<Ro&&11>=Ro),Xm=" ",Wm=!1;function qm(t,n){switch(t){case"keyup":return L1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ym(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function O1(t,n){switch(t){case"compositionend":return Ym(n);case"keypress":return n.which!==32?null:(Wm=!0,Xm);case"textInput":return t=n.data,t===Xm&&Wm?null:t;default:return null}}function P1(t,n){if(ds)return t==="compositionend"||!hf&&qm(t,n)?(t=Fm(),Bl=lf=ka=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return km&&n.locale!=="ko"?null:n.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!I1[t.type]:n==="textarea"}function Zm(t,n,s,o){us?fs?fs.push(o):fs=[o]:us=o,n=Lc(n,"onChange"),0<n.length&&(s=new Vl("onChange","change",null,s,o),t.push({event:s,listeners:n}))}var Co=null,wo=null;function z1(t){Nv(t,0)}function Xl(t){var n=Ar(t);if(en(n))return t}function Km(t,n){if(t==="change")return n}var Qm=!1;if(la){var pf;if(la){var mf="oninput"in document;if(!mf){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),mf=typeof Jm.oninput=="function"}pf=mf}else pf=!1;Qm=pf&&(!document.documentMode||9<document.documentMode)}function $m(){Co&&(Co.detachEvent("onpropertychange",eg),wo=Co=null)}function eg(t){if(t.propertyName==="value"&&Xl(wo)){var n=[];Zm(n,wo,t,rf(t)),zm(z1,n)}}function F1(t,n,s){t==="focusin"?($m(),Co=n,wo=s,Co.attachEvent("onpropertychange",eg)):t==="focusout"&&$m()}function B1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(wo)}function H1(t,n){if(t==="click")return Xl(n)}function G1(t,n){if(t==="input"||t==="change")return Xl(n)}function V1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:V1;function Do(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var f=s[o];if(!sn.call(n,f)||!oi(t[f],n[f]))return!1}return!0}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,n){var s=tg(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=n&&o>=n)return{node:s,offset:n-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=tg(s)}}function ig(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ig(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ag(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Yt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Yt(t.document)}return n}function gf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var k1=la&&"documentMode"in document&&11>=document.documentMode,hs=null,vf=null,No=null,_f=!1;function rg(t,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;_f||hs==null||hs!==Yt(o)||(o=hs,"selectionStart"in o&&gf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),No&&Do(No,o)||(No=o,o=Lc(vf,"onSelect"),0<o.length&&(n=new Vl("onSelect","select",null,n,s),t.push({event:n,listeners:o}),n.target=hs)))}function wr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var ps={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},xf={},sg={};la&&(sg=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Dr(t){if(xf[t])return xf[t];if(!ps[t])return t;var n=ps[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in sg)return xf[t]=n[s];return t}var og=Dr("animationend"),lg=Dr("animationiteration"),cg=Dr("animationstart"),X1=Dr("transitionrun"),W1=Dr("transitionstart"),q1=Dr("transitioncancel"),ug=Dr("transitionend"),fg=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function Li(t,n){fg.set(t,n),j(n,[t])}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],ms=0,Sf=0;function ql(){for(var t=ms,n=Sf=ms=0;n<t;){var s=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var f=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,o!==null&&f!==null){var x=o.pending;x===null?f.next=f:(f.next=x.next,x.next=f),o.pending=f}d!==0&&dg(s,f,d)}}function Yl(t,n,s,o){_i[ms++]=t,_i[ms++]=n,_i[ms++]=s,_i[ms++]=o,Sf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bf(t,n,s,o){return Yl(t,n,s,o),jl(t)}function Nr(t,n){return Yl(t,null,null,n),jl(t)}function dg(t,n,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&n!==null&&(f=31-He(s),t=d.hiddenUpdates,o=t[f],o===null?t[f]=[n]:o.push(n),n.lane=s|536870912),d):null}function jl(t){if(50<$o)throw $o=0,Nd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gs={};function Y1(t,n,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,s,o){return new Y1(t,n,s,o)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var s=t.alternate;return s===null?(s=li(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function hg(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zl(t,n,s,o,f,d){var x=0;if(o=t,typeof t=="function")Mf(t)&&(x=1);else if(typeof t=="string")x=Jb(t,s,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=li(31,s,n,f),t.elementType=I,t.lanes=d,t;case C:return Lr(s.children,f,d,n);case b:x=8,f|=24;break;case y:return t=li(12,s,n,f|2),t.elementType=y,t.lanes=d,t;case L:return t=li(13,s,n,f),t.elementType=L,t.lanes=d,t;case U:return t=li(19,s,n,f),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:x=10;break e;case P:x=9;break e;case w:x=11;break e;case F:x=14;break e;case T:x=16,o=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=li(x,s,n,f),n.elementType=t,n.type=o,n.lanes=d,n}function Lr(t,n,s,o){return t=li(7,t,o,n),t.lanes=s,t}function Ef(t,n,s){return t=li(6,t,null,n),t.lanes=s,t}function pg(t){var n=li(18,null,null,0);return n.stateNode=t,n}function Tf(t,n,s){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var mg=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var s=mg.get(t);return s!==void 0?s:(n={value:t,source:n,stack:rn(n)},mg.set(t,n),n)}return{value:t,source:n,stack:rn(n)}}var vs=[],_s=0,Kl=null,Lo=0,yi=[],Si=0,Xa=null,qi=1,Yi="";function ua(t,n){vs[_s++]=Lo,vs[_s++]=Kl,Kl=t,Lo=n}function gg(t,n,s){yi[Si++]=qi,yi[Si++]=Yi,yi[Si++]=Xa,Xa=t;var o=qi;t=Yi;var f=32-He(o)-1;o&=~(1<<f),s+=1;var d=32-He(n)+f;if(30<d){var x=f-f%5;d=(o&(1<<x)-1).toString(32),o>>=x,f-=x,qi=1<<32-He(n)+f|s<<f|o,Yi=d+t}else qi=1<<d|s<<f|o,Yi=t}function Af(t){t.return!==null&&(ua(t,1),gg(t,1,0))}function Rf(t){for(;t===Kl;)Kl=vs[--_s],vs[_s]=null,Lo=vs[--_s],vs[_s]=null;for(;t===Xa;)Xa=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null,qi=yi[--Si],yi[Si]=null}function vg(t,n){yi[Si++]=qi,yi[Si++]=Yi,yi[Si++]=Xa,qi=n.id,Yi=n.overflow,Xa=t}var Nn=null,Kt=null,Et=!1,Wa=null,bi=!1,Cf=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(xi(n,t)),Cf}function _g(t){var n=t.stateNode,s=t.type,o=t.memoizedProps;switch(n[mn]=t,n[Dn]=o,s){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(s=0;s<tl.length;s++)_t(tl[s],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Di(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||Pv(n.textContent,s)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||qa(t,!0)}function xg(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function xs(t){if(t!==Nn)return!1;if(!Et)return xg(t),Et=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||qd(t.type,t.memoizedProps)),s=!s),s&&Kt&&qa(t),xg(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=Xv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=Xv(t)}else n===27?(n=Kt,sr(t.type)?(t=Qd,Qd=null,Kt=t):Kt=n):Kt=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Ur(){Kt=Nn=null,Et=!1}function wf(){var t=Wa;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Wa=null),t}function Uo(t){Wa===null?Wa=[t]:Wa.push(t)}var Df=D(null),Or=null,fa=null;function Ya(t,n,s){he(Df,n._currentValue),n._currentValue=s}function da(t){t._currentValue=Df.current,W(Df)}function Nf(t,n,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===s)break;t=t.return}}function Lf(t,n,s,o){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=f;for(var B=0;B<n.length;B++)if(R.context===n[B]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),Nf(d.return,s,t),o||(x=null);break e}d=R.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Nf(x,s,t),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function ys(t,n,s,o){t=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=f.type;oi(f.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(f===Se.current){if(x=f.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(sl):t=[sl])}f=f.return}t!==null&&Lf(n,t,s,o),n.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Or=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return yg(Or,t)}function Jl(t,n){return Or===null&&Pr(t),yg(t,n)}function yg(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},fa===null){if(t===null)throw Error(r(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return s}var j1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},Z1=a.unstable_scheduleCallback,K1=a.unstable_NormalPriority,vn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new j1,data:new Map,refCount:0}}function Oo(t){t.refCount--,t.refCount===0&&Z1(K1,function(){t.controller.abort()})}var Po=null,Of=0,Ss=0,bs=null;function Q1(t,n){if(Po===null){var s=Po=[];Of=0,Ss=zd(),bs={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Of++,n.then(Sg,Sg),n}function Sg(){if(--Of===0&&Po!==null){bs!==null&&(bs.status="fulfilled");var t=Po;Po=null,Ss=0,bs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function J1(t,n){var s=[],o={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(o.status="rejected",o.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),o}var bg=N.S;N.S=function(t,n){rv=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Q1(t,n),bg!==null&&bg(t,n)};var Ir=D(null);function Pf(){var t=Ir.current;return t!==null?t:jt.pooledCache}function $l(t,n){n===null?he(Ir,Ir.current):he(Ir,n.pool)}function Mg(){var t=Pf();return t===null?null:{parent:vn._currentValue,pool:t}}var Ms=Error(r(460)),If=Error(r(474)),ec=Error(r(542)),tc={then:function(){}};function Eg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tg(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(oa,oa),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rg(t),t;default:if(typeof n.status=="string")n.then(oa,oa);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=o}},function(o){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rg(t),t}throw Fr=n,Ms}}function zr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fr=s,Ms):s}}var Fr=null;function Ag(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function Rg(t){if(t===Ms||t===ec)throw Error(r(483))}var Es=null,Io=0;function nc(t){var n=Io;return Io+=1,Es===null&&(Es=[]),Tg(Es,t,n)}function zo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ic(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Cg(t){function n(Q,X){if(t){var te=Q.deletions;te===null?(Q.deletions=[X],Q.flags|=16):te.push(X)}}function s(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function f(Q,X){return Q=ca(Q,X),Q.index=0,Q.sibling=null,Q}function d(Q,X,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<X?(Q.flags|=67108866,X):te):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,te,ye){return X===null||X.tag!==6?(X=Ef(te,Q.mode,ye),X.return=Q,X):(X=f(X,te),X.return=Q,X)}function B(Q,X,te,ye){var nt=te.type;return nt===C?ve(Q,X,te.props.children,ye,te.key):X!==null&&(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&zr(nt)===X.type)?(X=f(X,te.props),zo(X,te),X.return=Q,X):(X=Zl(te.type,te.key,te.props,null,Q.mode,ye),zo(X,te),X.return=Q,X)}function ne(Q,X,te,ye){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Tf(te,Q.mode,ye),X.return=Q,X):(X=f(X,te.children||[]),X.return=Q,X)}function ve(Q,X,te,ye,nt){return X===null||X.tag!==7?(X=Lr(te,Q.mode,ye,nt),X.return=Q,X):(X=f(X,te),X.return=Q,X)}function be(Q,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ef(""+X,Q.mode,te),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return te=Zl(X.type,X.key,X.props,null,Q.mode,te),zo(te,X),te.return=Q,te;case E:return X=Tf(X,Q.mode,te),X.return=Q,X;case T:return X=zr(X),be(Q,X,te)}if(q(X)||K(X))return X=Lr(X,Q.mode,te,null),X.return=Q,X;if(typeof X.then=="function")return be(Q,nc(X),te);if(X.$$typeof===z)return be(Q,Jl(Q,X),te);ic(Q,X)}return null}function le(Q,X,te,ye){var nt=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return nt!==null?null:R(Q,X,""+te,ye);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===nt?B(Q,X,te,ye):null;case E:return te.key===nt?ne(Q,X,te,ye):null;case T:return te=zr(te),le(Q,X,te,ye)}if(q(te)||K(te))return nt!==null?null:ve(Q,X,te,ye,null);if(typeof te.then=="function")return le(Q,X,nc(te),ye);if(te.$$typeof===z)return le(Q,X,Jl(Q,te),ye);ic(Q,te)}return null}function ce(Q,X,te,ye,nt){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Q=Q.get(te)||null,R(X,Q,""+ye,nt);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case S:return Q=Q.get(ye.key===null?te:ye.key)||null,B(X,Q,ye,nt);case E:return Q=Q.get(ye.key===null?te:ye.key)||null,ne(X,Q,ye,nt);case T:return ye=zr(ye),ce(Q,X,te,ye,nt)}if(q(ye)||K(ye))return Q=Q.get(te)||null,ve(X,Q,ye,nt,null);if(typeof ye.then=="function")return ce(Q,X,te,nc(ye),nt);if(ye.$$typeof===z)return ce(Q,X,te,Jl(X,ye),nt);ic(X,ye)}return null}function qe(Q,X,te,ye){for(var nt=null,wt=null,je=X,ht=X=0,yt=null;je!==null&&ht<te.length;ht++){je.index>ht?(yt=je,je=null):yt=je.sibling;var Dt=le(Q,je,te[ht],ye);if(Dt===null){je===null&&(je=yt);break}t&&je&&Dt.alternate===null&&n(Q,je),X=d(Dt,X,ht),wt===null?nt=Dt:wt.sibling=Dt,wt=Dt,je=yt}if(ht===te.length)return s(Q,je),Et&&ua(Q,ht),nt;if(je===null){for(;ht<te.length;ht++)je=be(Q,te[ht],ye),je!==null&&(X=d(je,X,ht),wt===null?nt=je:wt.sibling=je,wt=je);return Et&&ua(Q,ht),nt}for(je=o(je);ht<te.length;ht++)yt=ce(je,Q,ht,te[ht],ye),yt!==null&&(t&&yt.alternate!==null&&je.delete(yt.key===null?ht:yt.key),X=d(yt,X,ht),wt===null?nt=yt:wt.sibling=yt,wt=yt);return t&&je.forEach(function(fr){return n(Q,fr)}),Et&&ua(Q,ht),nt}function rt(Q,X,te,ye){if(te==null)throw Error(r(151));for(var nt=null,wt=null,je=X,ht=X=0,yt=null,Dt=te.next();je!==null&&!Dt.done;ht++,Dt=te.next()){je.index>ht?(yt=je,je=null):yt=je.sibling;var fr=le(Q,je,Dt.value,ye);if(fr===null){je===null&&(je=yt);break}t&&je&&fr.alternate===null&&n(Q,je),X=d(fr,X,ht),wt===null?nt=fr:wt.sibling=fr,wt=fr,je=yt}if(Dt.done)return s(Q,je),Et&&ua(Q,ht),nt;if(je===null){for(;!Dt.done;ht++,Dt=te.next())Dt=be(Q,Dt.value,ye),Dt!==null&&(X=d(Dt,X,ht),wt===null?nt=Dt:wt.sibling=Dt,wt=Dt);return Et&&ua(Q,ht),nt}for(je=o(je);!Dt.done;ht++,Dt=te.next())Dt=ce(je,Q,ht,Dt.value,ye),Dt!==null&&(t&&Dt.alternate!==null&&je.delete(Dt.key===null?ht:Dt.key),X=d(Dt,X,ht),wt===null?nt=Dt:wt.sibling=Dt,wt=Dt);return t&&je.forEach(function(cM){return n(Q,cM)}),Et&&ua(Q,ht),nt}function qt(Q,X,te,ye){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var nt=te.key;X!==null;){if(X.key===nt){if(nt=te.type,nt===C){if(X.tag===7){s(Q,X.sibling),ye=f(X,te.props.children),ye.return=Q,Q=ye;break e}}else if(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&zr(nt)===X.type){s(Q,X.sibling),ye=f(X,te.props),zo(ye,te),ye.return=Q,Q=ye;break e}s(Q,X);break}else n(Q,X);X=X.sibling}te.type===C?(ye=Lr(te.props.children,Q.mode,ye,te.key),ye.return=Q,Q=ye):(ye=Zl(te.type,te.key,te.props,null,Q.mode,ye),zo(ye,te),ye.return=Q,Q=ye)}return x(Q);case E:e:{for(nt=te.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(Q,X.sibling),ye=f(X,te.children||[]),ye.return=Q,Q=ye;break e}else{s(Q,X);break}else n(Q,X);X=X.sibling}ye=Tf(te,Q.mode,ye),ye.return=Q,Q=ye}return x(Q);case T:return te=zr(te),qt(Q,X,te,ye)}if(q(te))return qe(Q,X,te,ye);if(K(te)){if(nt=K(te),typeof nt!="function")throw Error(r(150));return te=nt.call(te),rt(Q,X,te,ye)}if(typeof te.then=="function")return qt(Q,X,nc(te),ye);if(te.$$typeof===z)return qt(Q,X,Jl(Q,te),ye);ic(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(s(Q,X.sibling),ye=f(X,te),ye.return=Q,Q=ye):(s(Q,X),ye=Ef(te,Q.mode,ye),ye.return=Q,Q=ye),x(Q)):s(Q,X)}return function(Q,X,te,ye){try{Io=0;var nt=qt(Q,X,te,ye);return Es=null,nt}catch(je){if(je===Ms||je===ec)throw je;var wt=li(29,je,null,Q.mode);return wt.lanes=ye,wt.return=Q,wt}}}var Br=Cg(!0),wg=Cg(!1),ja=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var f=o.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),o.pending=n,n=jl(t),dg(t,null,s),n}return Yl(t,o,n,s),jl(t)}function Fo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ii(t,s)}}function Bf(t,n){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?f=d=n:d=d.next=n}else f=d=n;s={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Hf=!1;function Bo(){if(Hf){var t=bs;if(t!==null)throw t}}function Ho(t,n,s,o){Hf=!1;var f=t.updateQueue;ja=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var B=R,ne=B.next;B.next=null,x===null?d=ne:x.next=ne,x=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==x&&(R===null?ve.firstBaseUpdate=ne:R.next=ne,ve.lastBaseUpdate=B))}if(d!==null){var be=f.baseState;x=0,ve=ne=B=null,R=d;do{var le=R.lane&-536870913,ce=le!==R.lane;if(ce?(xt&le)===le:(o&le)===le){le!==0&&le===Ss&&(Hf=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,rt=R;le=n;var qt=s;switch(rt.tag){case 1:if(qe=rt.payload,typeof qe=="function"){be=qe.call(qt,be,le);break e}be=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=rt.payload,le=typeof qe=="function"?qe.call(qt,be,le):qe,le==null)break e;be=v({},be,le);break e;case 2:ja=!0}}le=R.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(ne=ve=ce,B=be):ve=ve.next=ce,x|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);ve===null&&(B=be),f.baseState=B,f.firstBaseUpdate=ne,f.lastBaseUpdate=ve,d===null&&(f.shared.lanes=0),tr|=x,t.lanes=x,t.memoizedState=be}}function Dg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Ng(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Dg(s[t],n)}var Ts=D(null),ac=D(0);function Lg(t,n){t=Sa,he(ac,t),he(Ts,n),Sa=t|n.baseLanes}function Gf(){he(ac,Sa),he(Ts,Ts.current)}function Vf(){Sa=ac.current,W(Ts),W(ac)}var ci=D(null),Mi=null;function Qa(t){var n=t.alternate;he(hn,hn.current&1),he(ci,t),Mi===null&&(n===null||Ts.current!==null||n.memoizedState!==null)&&(Mi=t)}function kf(t){he(hn,hn.current),he(ci,t),Mi===null&&(Mi=t)}function Ug(t){t.tag===22?(he(hn,hn.current),he(ci,t),Mi===null&&(Mi=t)):Ja()}function Ja(){he(hn,hn.current),he(ci,ci.current)}function ui(t){W(ci),Mi===t&&(Mi=null),W(hn)}var hn=D(0);function rc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Zd(s)||Kd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,dt=null,Xt=null,_n=null,sc=!1,As=!1,Hr=!1,oc=0,Go=0,Rs=null,$1=0;function ln(){throw Error(r(321))}function Xf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!oi(t[s],n[s]))return!1;return!0}function Wf(t,n,s,o,f,d){return ha=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?g0:sd,Hr=!1,d=s(o,f),Hr=!1,As&&(d=Pg(n,s,o,f)),Og(t),d}function Og(t){N.H=Xo;var n=Xt!==null&&Xt.next!==null;if(ha=0,_n=Xt=dt=null,sc=!1,Go=0,Rs=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&Ql(t)&&(xn=!0))}function Pg(t,n,s,o){dt=t;var f=0;do{if(As&&(Rs=null),Go=0,As=!1,25<=f)throw Error(r(301));if(f+=1,_n=Xt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=v0,d=n(s,o)}while(As);return d}function eb(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Vo(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(dt.flags|=1024),n}function qf(){var t=oc!==0;return oc=0,t}function Yf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function jf(t){if(sc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sc=!1}ha=0,_n=Xt=dt=null,As=!1,Go=oc=0,Rs=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?dt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Xt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=_n===null?dt.memoizedState:_n.next;if(n!==null)_n=n,Xt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},_n===null?dt.memoizedState=_n=t:_n=_n.next=t}return _n}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(t){var n=Go;return Go+=1,Rs===null&&(Rs=[]),t=Tg(Rs,t,n),n=dt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?g0:sd),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vo(t);if(t.$$typeof===z)return Ln(t)}throw Error(r(438,String(t)))}function Zf(t){var n=null,s=dt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=lc(),dt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),o=0;o<t;o++)s[o]=k;return n.index++,s}function pa(t,n){return typeof n=="function"?n(t):n}function uc(t){var n=pn();return Kf(n,Xt,t)}function Kf(t,n,s){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var f=t.baseQueue,d=o.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}n.baseQueue=f=d,o.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{n=f.next;var R=x=null,B=null,ne=n,ve=!1;do{var be=ne.lane&-536870913;if(be!==ne.lane?(xt&be)===be:(ha&be)===be){var le=ne.revertLane;if(le===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),be===Ss&&(ve=!0);else if((ha&le)===le){ne=ne.next,le===Ss&&(ve=!0);continue}else be={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(R=B=be,x=d):B=B.next=be,dt.lanes|=le,tr|=le;be=ne.action,Hr&&s(d,be),d=ne.hasEagerState?ne.eagerState:s(d,be)}else le={lane:be,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(R=B=le,x=d):B=B.next=le,dt.lanes|=be,tr|=be;ne=ne.next}while(ne!==null&&ne!==n);if(B===null?x=d:B.next=R,!oi(d,t.memoizedState)&&(xn=!0,ve&&(s=bs,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=B,o.lastRenderedState=d}return f===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Qf(t){var n=pn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var o=s.dispatch,f=s.pending,d=n.memoizedState;if(f!==null){s.pending=null;var x=f=f.next;do d=t(d,x.action),x=x.next;while(x!==f);oi(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,o]}function Ig(t,n,s){var o=dt,f=pn(),d=Et;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=n();var x=!oi((Xt||f).memoizedState,s);if(x&&(f.memoizedState=s,xn=!0),f=f.queue,ed(Bg.bind(null,o,f,t),[t]),f.getSnapshot!==n||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Cs(9,{destroy:void 0},Fg.bind(null,o,f,s,n),null),jt===null)throw Error(r(349));d||(ha&127)!==0||zg(o,n,s)}return s}function zg(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=dt.updateQueue,n===null?(n=lc(),dt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Fg(t,n,s,o){n.value=s,n.getSnapshot=o,Hg(n)&&Gg(t)}function Bg(t,n,s){return s(function(){Hg(n)&&Gg(t)})}function Hg(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!oi(t,s)}catch{return!0}}function Gg(t){var n=Nr(t,2);n!==null&&Jn(n,t,2)}function Jf(t){var n=Vn();if(typeof t=="function"){var s=t;if(t=s(),Hr){De(!0);try{s()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function Vg(t,n,s,o){return t.baseState=s,Kf(t,Xt,typeof o=="function"?o:pa)}function tb(t,n,s,o,f){if(hc(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};N.T!==null?s(!0):d.isTransition=!1,o(d),s=n.pending,s===null?(d.next=n.pending=d,kg(n,d)):(d.next=s.next,n.pending=s.next=d)}}function kg(t,n){var s=n.action,o=n.payload,f=t.state;if(n.isTransition){var d=N.T,x={};N.T=x;try{var R=s(f,o),B=N.S;B!==null&&B(x,R),Xg(t,n,R)}catch(ne){$f(t,n,ne)}finally{d!==null&&x.types!==null&&(d.types=x.types),N.T=d}}else try{d=s(f,o),Xg(t,n,d)}catch(ne){$f(t,n,ne)}}function Xg(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Wg(t,n,o)},function(o){return $f(t,n,o)}):Wg(t,n,s)}function Wg(t,n,s){n.status="fulfilled",n.value=s,qg(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,kg(t,s)))}function $f(t,n,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,qg(n),n=n.next;while(n!==o)}t.action=null}function qg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yg(t,n){return n}function jg(t,n){if(Et){var s=jt.formState;if(s!==null){e:{var o=dt;if(Et){if(Kt){t:{for(var f=Kt,d=bi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Kt=Ei(f.nextSibling),o=f.data==="F!";break e}}qa(o)}o=!1}o&&(n=s[0])}}return s=Vn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yg,lastRenderedState:n},s.queue=o,s=h0.bind(null,dt,o),o.dispatch=s,o=Jf(!1),d=rd.bind(null,dt,!1,o.queue),o=Vn(),f={state:n,dispatch:null,action:t,pending:null},o.queue=f,s=tb.bind(null,dt,f,d,s),f.dispatch=s,o.memoizedState=t,[n,s,!1]}function Zg(t){var n=pn();return Kg(n,Xt,t)}function Kg(t,n,s){if(n=Kf(t,n,Yg)[0],t=uc(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Vo(n)}catch(x){throw x===Ms?ec:x}else o=n;n=pn();var f=n.queue,d=f.dispatch;return s!==n.memoizedState&&(dt.flags|=2048,Cs(9,{destroy:void 0},nb.bind(null,f,s),null)),[o,d,t]}function nb(t,n){t.action=n}function Qg(t){var n=pn(),s=Xt;if(s!==null)return Kg(n,s,t);pn(),n=n.memoizedState,s=pn();var o=s.queue.dispatch;return s.memoizedState=t,[n,o,!1]}function Cs(t,n,s,o){return t={tag:t,create:s,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=lc(),dt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,n.lastEffect=t),t}function Jg(){return pn().memoizedState}function fc(t,n,s,o){var f=Vn();dt.flags|=t,f.memoizedState=Cs(1|n,{destroy:void 0},s,o===void 0?null:o)}function dc(t,n,s,o){var f=pn();o=o===void 0?null:o;var d=f.memoizedState.inst;Xt!==null&&o!==null&&Xf(o,Xt.memoizedState.deps)?f.memoizedState=Cs(n,d,s,o):(dt.flags|=t,f.memoizedState=Cs(1|n,d,s,o))}function $g(t,n){fc(8390656,8,t,n)}function ed(t,n){dc(2048,8,t,n)}function ib(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=lc(),dt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function e0(t){var n=pn().memoizedState;return ib({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function t0(t,n){return dc(4,2,t,n)}function n0(t,n){return dc(4,4,t,n)}function i0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function a0(t,n,s){s=s!=null?s.concat([t]):null,dc(4,4,i0.bind(null,n,t),s)}function td(){}function r0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Xf(n,o[1])?o[0]:(s.memoizedState=[t,n],t)}function s0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Xf(n,o[1]))return o[0];if(o=t(),Hr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,n],o}function nd(t,n,s){return s===void 0||(ha&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=ov(),dt.lanes|=t,tr|=t,s)}function o0(t,n,s,o){return oi(s,n)?s:Ts.current!==null?(t=nd(t,s,o),oi(t,n)||(xn=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(xt&261930)===0?(xn=!0,t.memoizedState=s):(t=ov(),dt.lanes|=t,tr|=t,n)}function l0(t,n,s,o,f){var d=V.p;V.p=d!==0&&8>d?d:8;var x=N.T,R={};N.T=R,rd(t,!1,n,s);try{var B=f(),ne=N.S;if(ne!==null&&ne(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ve=J1(B,o);ko(t,n,ve,hi(t))}else ko(t,n,o,hi(t))}catch(be){ko(t,n,{then:function(){},status:"rejected",reason:be},hi())}finally{V.p=d,x!==null&&R.types!==null&&(x.types=R.types),N.T=x}}function ab(){}function id(t,n,s,o){if(t.tag!==5)throw Error(r(476));var f=c0(t).queue;l0(t,f,n,$,s===null?ab:function(){return u0(t),s(o)})}function c0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function u0(t){var n=c0(t);n.next===null&&(n=t.alternate.memoizedState),ko(t,n.next.queue,{},hi())}function ad(){return Ln(sl)}function f0(){return pn().memoizedState}function d0(){return pn().memoizedState}function rb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=hi();t=Za(s);var o=Ka(n,t,s);o!==null&&(Jn(o,n,s),Fo(o,n,s)),n={cache:Uf()},t.payload=n;return}n=n.return}}function sb(t,n,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hc(t)?p0(n,s):(s=bf(t,n,s,o),s!==null&&(Jn(s,t,o),m0(s,n,o)))}function h0(t,n,s){var o=hi();ko(t,n,s,o)}function ko(t,n,s,o){var f={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(hc(t))p0(n,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,s);if(f.hasEagerState=!0,f.eagerState=R,oi(R,x))return Yl(t,n,f,0),jt===null&&ql(),!1}catch{}if(s=bf(t,n,f,o),s!==null)return Jn(s,t,o),m0(s,n,o),!0}return!1}function rd(t,n,s,o){if(o={lane:2,revertLane:zd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(n)throw Error(r(479))}else n=bf(t,s,o,2),n!==null&&Jn(n,t,2)}function hc(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function p0(t,n){As=sc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function m0(t,n,s){if((s&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ii(t,s)}}var Xo={readContext:Ln,use:cc,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};Xo.useEffectEvent=ln;var g0={readContext:Ln,use:cc,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:$g,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,fc(4194308,4,i0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return fc(4194308,4,t,n)},useInsertionEffect:function(t,n){fc(4,2,t,n)},useMemo:function(t,n){var s=Vn();n=n===void 0?null:n;var o=t();if(Hr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,n],o},useReducer:function(t,n,s){var o=Vn();if(s!==void 0){var f=s(n);if(Hr){De(!0);try{s(n)}finally{De(!1)}}}else f=n;return o.memoizedState=o.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},o.queue=t,t=t.dispatch=sb.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=Jf(t);var n=t.queue,s=h0.bind(null,dt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:td,useDeferredValue:function(t,n){var s=Vn();return nd(s,t,n)},useTransition:function(){var t=Jf(!1);return t=l0.bind(null,dt,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var o=dt,f=Vn();if(Et){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),jt===null)throw Error(r(349));(xt&127)!==0||zg(o,n,s)}f.memoizedState=s;var d={value:s,getSnapshot:n};return f.queue=d,$g(Bg.bind(null,o,d,t),[t]),o.flags|=2048,Cs(9,{destroy:void 0},Fg.bind(null,o,d,s,n),null),s},useId:function(){var t=Vn(),n=jt.identifierPrefix;if(Et){var s=Yi,o=qi;s=(o&~(1<<32-He(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=oc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=$1++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ad,useFormState:jg,useActionState:jg,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=rd.bind(null,dt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Zf,useCacheRefresh:function(){return Vn().memoizedState=rb.bind(null,dt)},useEffectEvent:function(t){var n=Vn(),s={impl:t};return n.memoizedState=s,function(){if((Lt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},sd={readContext:Ln,use:cc,useCallback:r0,useContext:Ln,useEffect:ed,useImperativeHandle:a0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:s0,useReducer:uc,useRef:Jg,useState:function(){return uc(pa)},useDebugValue:td,useDeferredValue:function(t,n){var s=pn();return o0(s,Xt.memoizedState,t,n)},useTransition:function(){var t=uc(pa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:Ig,useId:f0,useHostTransitionStatus:ad,useFormState:Zg,useActionState:Zg,useOptimistic:function(t,n){var s=pn();return Vg(s,Xt,t,n)},useMemoCache:Zf,useCacheRefresh:d0};sd.useEffectEvent=e0;var v0={readContext:Ln,use:cc,useCallback:r0,useContext:Ln,useEffect:ed,useImperativeHandle:a0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:s0,useReducer:Qf,useRef:Jg,useState:function(){return Qf(pa)},useDebugValue:td,useDeferredValue:function(t,n){var s=pn();return Xt===null?nd(s,t,n):o0(s,Xt.memoizedState,t,n)},useTransition:function(){var t=Qf(pa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:Ig,useId:f0,useHostTransitionStatus:ad,useFormState:Qg,useActionState:Qg,useOptimistic:function(t,n){var s=pn();return Xt!==null?Vg(s,Xt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:d0};v0.useEffectEvent=e0;function od(t,n,s,o){n=t.memoizedState,s=s(o,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ld={enqueueSetState:function(t,n,s){t=t._reactInternals;var o=hi(),f=Za(o);f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,o),n!==null&&(Jn(n,t,o),Fo(n,t,o))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var o=hi(),f=Za(o);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,o),n!==null&&(Jn(n,t,o),Fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=hi(),o=Za(s);o.tag=2,n!=null&&(o.callback=n),n=Ka(t,o,s),n!==null&&(Jn(n,t,s),Fo(n,t,s))}};function _0(t,n,s,o,f,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!Do(s,o)||!Do(f,d):!0}function x0(t,n,s,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==t&&ld.enqueueReplaceState(n,n.state,null)}function Gr(t,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function y0(t){Wl(t)}function S0(t){console.error(t)}function b0(t){Wl(t)}function pc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function M0(t,n,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function cd(t,n,s){return s=Za(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(t,n)},s}function E0(t){return t=Za(t),t.tag=3,t}function T0(t,n,s,o){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=o.value;t.payload=function(){return f(d)},t.callback=function(){M0(n,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){M0(n,s,o),typeof f!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function ob(t,n,s,o,f){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&ys(n,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Ac():s.alternate===null&&cn===0&&(cn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,o===tc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),Od(t,o,f)),!1;case 22:return s.flags|=65536,o===tc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),Od(t,o,f)),!1}throw Error(r(435,s.tag))}return Od(t,o,f),Ac(),!1}if(Et)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,o!==Cf&&(t=Error(r(422),{cause:o}),Uo(xi(t,s)))):(o!==Cf&&(n=Error(r(423),{cause:o}),Uo(xi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,o=xi(o,s),f=cd(t.stateNode,o,f),Bf(t,f),cn!==4&&(cn=2)),!1;var d=Error(r(520),{cause:o});if(d=xi(d,s),Jo===null?Jo=[d]:Jo.push(d),cn!==4&&(cn=2),n===null)return!0;o=xi(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=cd(s.stateNode,o,t),Bf(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(nr===null||!nr.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=E0(f),T0(f,t,s,o),Bf(s,f),!1}s=s.return}while(s!==null);return!1}var ud=Error(r(461)),xn=!1;function Un(t,n,s,o){n.child=t===null?wg(n,null,s,o):Br(n,t.child,s,o)}function A0(t,n,s,o,f){s=s.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Pr(n),o=Wf(t,n,s,x,d,f),R=qf(),t!==null&&!xn?(Yf(t,n,f),ma(t,n,f)):(Et&&R&&Af(n),n.flags|=1,Un(t,n,o,f),n.child)}function R0(t,n,s,o,f){if(t===null){var d=s.type;return typeof d=="function"&&!Mf(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,C0(t,n,d,o,f)):(t=Zl(s.type,null,o,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!_d(t,f)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Do,s(x,o)&&t.ref===n.ref)return ma(t,n,f)}return n.flags|=1,t=ca(d,o),t.ref=n.ref,t.return=n,n.child=t}function C0(t,n,s,o,f){if(t!==null){var d=t.memoizedProps;if(Do(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,_d(t,f))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ma(t,n,f)}return fd(t,n,s,o,f)}function w0(t,n,s,o){var f=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=n.child=t.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~d}else o=0,n.child=null;return D0(t,n,d,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(n,d!==null?d.cachePool:null),d!==null?Lg(n,d):Gf(),Ug(n);else return o=n.lanes=536870912,D0(t,n,d!==null?d.baseLanes|s:s,s,o)}else d!==null?($l(n,d.cachePool),Lg(n,d),Ja(),n.memoizedState=null):(t!==null&&$l(n,null),Gf(),Ja());return Un(t,n,f,s),n.child}function Wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function D0(t,n,s,o,f){var d=Pf();return d=d===null?null:{parent:vn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&$l(n,null),Gf(),Ug(n),t!==null&&ys(t,n,o,!0),n.childLanes=f,null}function mc(t,n){return n=vc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function N0(t,n,s){return Br(n,t.child,null,s),t=mc(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function lb(t,n,s){var o=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=mc(n,o),n.lanes=536870912,Wo(null,t);if(kf(n),(t=Kt)?(t=kv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=pg(t),s.return=n,n.child=s,Nn=n,Kt=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return mc(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(kf(n),f)if(n.flags&256)n.flags&=-257,n=N0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(xn||ys(t,n,s,!1),f=(s&t.childLanes)!==0,xn||f){if(o=jt,o!==null&&(x=ai(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Nr(t,x),Jn(o,t,x),ud;Ac(),n=N0(t,n,s)}else t=d.treeContext,Kt=Ei(x.nextSibling),Nn=n,Et=!0,Wa=null,bi=!1,t!==null&&vg(n,t),n=mc(n,o),n.flags|=4096;return n}return t=ca(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function fd(t,n,s,o,f){return Pr(n),s=Wf(t,n,s,o,void 0,f),o=qf(),t!==null&&!xn?(Yf(t,n,f),ma(t,n,f)):(Et&&o&&Af(n),n.flags|=1,Un(t,n,s,f),n.child)}function L0(t,n,s,o,f,d){return Pr(n),n.updateQueue=null,s=Pg(n,o,s,f),Og(t),o=qf(),t!==null&&!xn?(Yf(t,n,d),ma(t,n,d)):(Et&&o&&Af(n),n.flags|=1,Un(t,n,s,d),n.child)}function U0(t,n,s,o,f){if(Pr(n),n.stateNode===null){var d=gs,x=s.contextType;typeof x=="object"&&x!==null&&(d=Ln(x)),d=new s(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ld,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},zf(n),x=s.contextType,d.context=typeof x=="object"&&x!==null?Ln(x):gs,d.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(od(n,s,x,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&ld.enqueueReplaceState(d,d.state,null),Ho(n,o,d,f),Bo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,B=Gr(s,R);d.props=B;var ne=d.context,ve=s.contextType;x=gs,typeof ve=="object"&&ve!==null&&(x=Ln(ve));var be=s.getDerivedStateFromProps;ve=typeof be=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ne!==x)&&x0(n,d,o,x),ja=!1;var le=n.memoizedState;d.state=le,Ho(n,o,d,f),Bo(),ne=n.memoizedState,R||le!==ne||ja?(typeof be=="function"&&(od(n,s,be,o),ne=n.memoizedState),(B=ja||_0(n,s,B,o,le,ne,x))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=x,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ff(t,n),x=n.memoizedProps,ve=Gr(s,x),d.props=ve,be=n.pendingProps,le=d.context,ne=s.contextType,B=gs,typeof ne=="object"&&ne!==null&&(B=Ln(ne)),R=s.getDerivedStateFromProps,(ne=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==be||le!==B)&&x0(n,d,o,B),ja=!1,le=n.memoizedState,d.state=le,Ho(n,o,d,f),Bo();var ce=n.memoizedState;x!==be||le!==ce||ja||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof R=="function"&&(od(n,s,R,o),ce=n.memoizedState),(ve=ja||_0(n,s,ve,o,le,ce,B)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=B,o=ve):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,gc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Br(n,t.child,null,f),n.child=Br(n,null,s,f)):Un(t,n,s,f),n.memoizedState=d.state,t=n.child):t=ma(t,n,f),t}function O0(t,n,s,o){return Ur(),n.flags|=256,Un(t,n,s,o),n.child}var dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(t){return{baseLanes:t,cachePool:Mg()}}function pd(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=di),t}function P0(t,n,s){var o=n.pendingProps,f=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),x&&(f=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(f?Qa(n):Ja(),(t=Kt)?(t=kv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=pg(t),s.return=n,n.child=s,Nn=n,Kt=null)):t=null,t===null)throw qa(n);return Kd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,f?(Ja(),f=n.mode,R=vc({mode:"hidden",children:R},f),o=Lr(o,f,s,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=hd(s),o.childLanes=pd(t,x,s),n.memoizedState=dd,Wo(null,o)):(Qa(n),md(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=gd(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=o.fallback,f=n.mode,o=vc({mode:"visible",children:o.children},f),R=Lr(R,f,s,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Br(n,t.child,null,s),o=n.child,o.memoizedState=hd(s),o.childLanes=pd(t,x,s),n.memoizedState=dd,n=Wo(null,o));else if(Qa(n),Kd(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ne=x.dgst;x=ne,o=Error(r(419)),o.stack="",o.digest=x,Uo({value:o,source:null,stack:null}),n=gd(t,n,s)}else if(xn||ys(t,n,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=jt,x!==null&&(o=ai(x,s),o!==0&&o!==B.retryLane))throw B.retryLane=o,Nr(t,o),Jn(x,t,o),ud;Zd(R)||Ac(),n=gd(t,n,s)}else Zd(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Kt=Ei(R.nextSibling),Nn=n,Et=!0,Wa=null,bi=!1,t!==null&&vg(n,t),n=md(n,o.children),n.flags|=4096);return n}return f?(Ja(),R=o.fallback,f=n.mode,B=t.child,ne=B.sibling,o=ca(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ne!==null?R=ca(ne,R):(R=Lr(R,f,s,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Wo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=hd(s):(f=R.cachePool,f!==null?(B=vn._currentValue,f=f.parent!==B?{parent:B,pool:B}:f):f=Mg(),R={baseLanes:R.baseLanes|s,cachePool:f}),o.memoizedState=R,o.childLanes=pd(t,x,s),n.memoizedState=dd,Wo(t.child,o)):(Qa(n),s=t.child,t=s.sibling,s=ca(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function md(t,n){return n=vc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vc(t,n){return t=li(22,t,null,n),t.lanes=0,t}function gd(t,n,s){return Br(n,t.child,null,s),t=md(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function I0(t,n,s){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Nf(t.return,n,s)}function vd(t,n,s,o,f,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:f,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=f,x.treeForkCount=d)}function z0(t,n,s){var o=n.pendingProps,f=o.revealOrder,d=o.tail;o=o.children;var x=hn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,he(hn,x),Un(t,n,o,s),o=Et?Lo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I0(t,s,n);else if(t.tag===19)I0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),vd(n,!1,f,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&rc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}vd(n,!0,s,null,d,o);break;case"together":vd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),tr|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(ys(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=ca(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=ca(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function _d(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function cb(t,n,s){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Ya(n,vn,t.memoizedState.cache),Ur();break;case 27:case 5:Je(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,kf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?P0(t,n,s):(Qa(n),t=ma(t,n,s),t!==null?t.sibling:null);Qa(n);break;case 19:var f=(t.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(ys(t,n,s,!1),o=(s&n.childLanes)!==0),f){if(o)return z0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),he(hn,hn.current),o)break;return null;case 22:return n.lanes=0,w0(t,n,s,n.pendingProps);case 24:Ya(n,vn,t.memoizedState.cache)}return ma(t,n,s)}function F0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!_d(t,s)&&(n.flags&128)===0)return xn=!1,cb(t,n,s);xn=(t.flags&131072)!==0}else xn=!1,Et&&(n.flags&1048576)!==0&&gg(n,Lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=zr(n.elementType),n.type=t,typeof t=="function")Mf(t)?(o=Gr(t,o),n.tag=1,n=U0(null,n,t,o,s)):(n.tag=0,n=fd(null,n,t,o,s));else{if(t!=null){var f=t.$$typeof;if(f===w){n.tag=11,n=A0(null,n,t,o,s);break e}else if(f===F){n.tag=14,n=R0(null,n,t,o,s);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return fd(t,n,n.type,n.pendingProps,s);case 1:return o=n.type,f=Gr(o,n.pendingProps),U0(t,n,o,f,s);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;f=d.element,Ff(t,n),Ho(n,o,null,s);var x=n.memoizedState;if(o=x.cache,Ya(n,vn,o),o!==d.cache&&Lf(n,[vn],s,!0),Bo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=O0(t,n,o,s);break e}else if(o!==f){f=xi(Error(r(424)),n),Uo(f),n=O0(t,n,o,s);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=Ei(t.firstChild),Nn=n,Et=!0,Wa=null,bi=!0,s=wg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ur(),o===f){n=ma(t,n,s);break e}Un(t,n,o,s)}n=n.child}return n;case 26:return gc(t,n),t===null?(s=Zv(n.type,null,n.pendingProps,null))?n.memoizedState=s:Et||(s=n.type,t=n.pendingProps,o=Uc(ee.current).createElement(s),o[mn]=n,o[Dn]=t,On(o,s,t),gn(o),n.stateNode=o):n.memoizedState=Zv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&Et&&(o=n.stateNode=qv(n.type,n.pendingProps,ee.current),Nn=n,bi=!0,f=Kt,sr(n.type)?(Qd=f,Kt=Ei(o.firstChild)):Kt=f),Un(t,n,n.pendingProps.children,s),gc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((f=o=Kt)&&(o=Bb(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Nn=n,Kt=Ei(o.firstChild),bi=!1,f=!0):f=!1),f||qa(n)),Je(n),f=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,qd(f,d)?o=null:x!==null&&qd(f,x)&&(n.flags|=32),n.memoizedState!==null&&(f=Wf(t,n,eb,null,null,s),sl._currentValue=f),gc(t,n),Un(t,n,o,s),n.child;case 6:return t===null&&Et&&((t=s=Kt)&&(s=Hb(s,n.pendingProps,bi),s!==null?(n.stateNode=s,Nn=n,Kt=null,t=!0):t=!1),t||qa(n)),null;case 13:return P0(t,n,s);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Br(n,null,o,s):Un(t,n,o,s),n.child;case 11:return A0(t,n,n.type,n.pendingProps,s);case 7:return Un(t,n,n.pendingProps,s),n.child;case 8:return Un(t,n,n.pendingProps.children,s),n.child;case 12:return Un(t,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),Un(t,n,o.children,s),n.child;case 9:return f=n.type._context,o=n.pendingProps.children,Pr(n),f=Ln(f),o=o(f),n.flags|=1,Un(t,n,o,s),n.child;case 14:return R0(t,n,n.type,n.pendingProps,s);case 15:return C0(t,n,n.type,n.pendingProps,s);case 19:return z0(t,n,s);case 31:return lb(t,n,s);case 22:return w0(t,n,s,n.pendingProps);case 24:return Pr(n),o=Ln(vn),t===null?(f=Pf(),f===null&&(f=jt,d=Uf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),n.memoizedState={parent:o,cache:f},zf(n),Ya(n,vn,f)):((t.lanes&s)!==0&&(Ff(t,n),Ho(n,null,null,s),Bo()),f=t.memoizedState,d=n.memoizedState,f.parent!==o?(f={parent:o,cache:o},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ya(n,vn,o)):(o=d.cache,Ya(n,vn,o),o!==f.cache&&Lf(n,[vn],s,!0))),Un(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ga(t){t.flags|=4}function xd(t,n,s,o,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(fv())t.flags|=8192;else throw Fr=tc,If}else t.flags&=-16777217}function B0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e_(n))if(fv())t.flags|=8192;else throw Fr=tc,If}function _c(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,Ls|=n)}function qo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=o,t.childLanes=s,n}function ub(t,n,s){var o=n.pendingProps;switch(Rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return s=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(vn),Ne(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(xs(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wf())),Qt(n),null;case 26:var f=n.type,d=n.memoizedState;return t===null?(ga(n),d!==null?(Qt(n),B0(n,d)):(Qt(n),xd(n,f,null,o,s))):d?d!==t.memoizedState?(ga(n),Qt(n),B0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),Qt(n),xd(n,f,t,o,s)),null;case 27:if(Ze(n),s=ee.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=_e.current,xs(n)?_g(n):(t=qv(f,o,s),n.stateNode=t,ga(n))}return Qt(n),null;case 5:if(Ze(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(d=_e.current,xs(n))_g(n);else{var x=Uc(ee.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(f,{is:o.is}):x.createElement(f)}}d[mn]=n,d[Dn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(On(d,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return Qt(n),xd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ee.current,xs(n)){if(t=n.stateNode,s=n.memoizedProps,o=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}t[mn]=n,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Pv(t.nodeValue,s)),t||qa(n,!0)}else t=Uc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return Qt(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(o=xs(n),s!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else s=wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=xs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[mn]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),f=!1}else f=wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=n.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==f&&(o.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),_c(n,n.updateQueue),Qt(n),null);case 4:return Ne(),t===null&&Gd(n.stateNode.containerInfo),Qt(n),null;case 10:return da(n.type),Qt(n),null;case 19:if(W(hn),o=n.memoizedState,o===null)return Qt(n),null;if(f=(n.flags&128)!==0,d=o.rendering,d===null)if(f)qo(o,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=rc(t),d!==null){for(n.flags|=128,qo(o,!1),t=d.updateQueue,n.updateQueue=t,_c(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)hg(s,t),s=s.sibling;return he(hn,hn.current&1|2),Et&&ua(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&kt()>Mc&&(n.flags|=128,f=!0,qo(o,!1),n.lanes=4194304)}else{if(!f)if(t=rc(d),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,_c(n,t),qo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Et)return Qt(n),null}else 2*kt()-o.renderingStartTime>Mc&&s!==536870912&&(n.flags|=128,f=!0,qo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=kt(),t.sibling=null,s=hn.current,he(hn,f?s&1|2:s&1),Et&&ua(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ui(n),Vf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),s=n.updateQueue,s!==null&&_c(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),t!==null&&W(Ir),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),da(vn),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function fb(t,n){switch(Rf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(vn),Ne(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ze(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(r(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(hn),null;case 4:return Ne(),null;case 10:return da(n.type),null;case 22:case 23:return ui(n),Vf(),t!==null&&W(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(vn),null;case 25:return null;default:return null}}function H0(t,n){switch(Rf(n),n.tag){case 3:da(vn),Ne();break;case 26:case 27:case 5:Ze(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:W(hn);break;case 10:da(n.type);break;case 22:case 23:ui(n),Vf(),t!==null&&W(Ir);break;case 24:da(vn)}}function Yo(t,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var f=o.next;s=f;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==f)}}catch(R){Ht(n,n.return,R)}}function $a(t,n,s){try{var o=n.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var d=f.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,f=n;var B=s,ne=R;try{ne()}catch(ve){Ht(f,B,ve)}}}o=o.next}while(o!==d)}}catch(ve){Ht(n,n.return,ve)}}function G0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Ng(n,s)}catch(o){Ht(t,t.return,o)}}}function V0(t,n,s){s.props=Gr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Ht(t,n,o)}}function jo(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(f){Ht(t,n,f)}}function ji(t,n){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(f){Ht(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ht(t,n,f)}else s.current=null}function k0(t){var n=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(f){Ht(t,t.return,f)}}function yd(t,n,s){try{var o=t.stateNode;Ub(o,t.type,s,n),o[Dn]=n}catch(f){Ht(t,t.return,f)}}function X0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function Sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&sr(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(bd(t,n,s),t=t.sibling;t!==null;)bd(t,n,s),t=t.sibling}function xc(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(o!==4&&(o===27&&sr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(xc(t,n,s),t=t.sibling;t!==null;)xc(t,n,s),t=t.sibling}function W0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);On(n,o,s),n[mn]=t,n[Dn]=s}catch(d){Ht(t,t.return,d)}}var va=!1,yn=!1,Md=!1,q0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function db(t,n){if(t=t.containerInfo,Xd=Hc,t=ag(t),gf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var f=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,R=-1,B=-1,ne=0,ve=0,be=t,le=null;t:for(;;){for(var ce;be!==s||f!==0&&be.nodeType!==3||(R=x+f),be!==d||o!==0&&be.nodeType!==3||(B=x+o),be.nodeType===3&&(x+=be.nodeValue.length),(ce=be.firstChild)!==null;)le=be,be=ce;for(;;){if(be===t)break t;if(le===s&&++ne===f&&(R=x),le===d&&++ve===o&&(B=x),(ce=be.nextSibling)!==null)break;be=le,le=be.parentNode}be=ce}s=R===-1||B===-1?null:{start:R,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Wd={focusedElem:t,selectionRange:s},Hc=!1,Rn=n;Rn!==null;)if(n=Rn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rn=t;else for(;Rn!==null;){switch(n=Rn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,f=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var qe=Gr(s.type,f);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Ht(s,s.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)jd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Rn=t;break}Rn=n.return}}function Y0(t,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:xa(t,s),o&4&&Yo(5,s);break;case 1:if(xa(t,s),o&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){Ht(s,s.return,x)}else{var f=Gr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ht(s,s.return,x)}}o&64&&G0(s),o&512&&jo(s,s.return);break;case 3:if(xa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Ng(t,n)}catch(x){Ht(s,s.return,x)}}break;case 27:n===null&&o&4&&W0(s);case 26:case 5:xa(t,s),n===null&&o&4&&k0(s),o&512&&jo(s,s.return);break;case 12:xa(t,s);break;case 31:xa(t,s),o&4&&K0(t,s);break;case 13:xa(t,s),o&4&&Q0(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Sb.bind(null,s),Gb(t,s))));break;case 22:if(o=s.memoizedState!==null||va,!o){n=n!==null&&n.memoizedState!==null||yn,f=va;var d=yn;va=o,(yn=n)&&!d?ya(t,s,(s.subtreeFlags&8772)!==0):xa(t,s),va=f,yn=d}break;case 30:break;default:xa(t,s)}}function j0(t){var n=t.alternate;n!==null&&(t.alternate=null,j0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,jn=!1;function _a(t,n,s){for(s=s.child;s!==null;)Z0(t,n,s),s=s.sibling}function Z0(t,n,s){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:yn||ji(s,n),_a(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||ji(s,n);var o=nn,f=jn;sr(s.type)&&(nn=s.stateNode,jn=!1),_a(t,n,s),il(s.stateNode),nn=o,jn=f;break;case 5:yn||ji(s,n);case 6:if(o=nn,f=jn,nn=null,_a(t,n,s),nn=o,jn=f,nn!==null)if(jn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(s.stateNode)}catch(d){Ht(s,n,d)}else try{nn.removeChild(s.stateNode)}catch(d){Ht(s,n,d)}break;case 18:nn!==null&&(jn?(t=nn,Gv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Hs(t)):Gv(nn,s.stateNode));break;case 4:o=nn,f=jn,nn=s.stateNode.containerInfo,jn=!0,_a(t,n,s),nn=o,jn=f;break;case 0:case 11:case 14:case 15:$a(2,s,n),yn||$a(4,s,n),_a(t,n,s);break;case 1:yn||(ji(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&V0(s,n,o)),_a(t,n,s);break;case 21:_a(t,n,s);break;case 22:yn=(o=yn)||s.memoizedState!==null,_a(t,n,s),yn=o;break;default:_a(t,n,s)}}function K0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hs(t)}catch(s){Ht(n,n.return,s)}}}function Q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hs(t)}catch(s){Ht(n,n.return,s)}}function hb(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new q0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new q0),n;default:throw Error(r(435,t.tag))}}function yc(t,n){var s=hb(t);n.forEach(function(o){if(!s.has(o)){s.add(o);var f=bb.bind(null,t,o);o.then(f,f)}})}function Zn(t,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var f=s[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(sr(R.type)){nn=R.stateNode,jn=!1;break e}break;case 5:nn=R.stateNode,jn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(nn===null)throw Error(r(160));Z0(d,x,f),nn=null,jn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)J0(n,t),n=n.sibling}var Ui=null;function J0(t,n){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(n,t),Kn(t),o&4&&($a(3,t,t.return),Yo(3,t),$a(5,t,t.return));break;case 1:Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),o&64&&va&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var f=Ui;if(Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(o){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ba]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(o),f.head.insertBefore(d,f.querySelector("head > title"))),On(d,o,s),d[mn]=t,gn(d),o=d;break e;case"link":var x=Jv("link","href",f).get(o+(s.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(R,1);break t}}d=f.createElement(o),On(d,o,s),f.head.appendChild(d);break;case"meta":if(x=Jv("meta","content",f).get(o+(s.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(R,1);break t}}d=f.createElement(o),On(d,o,s),f.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else $v(f,t.type,t.stateNode);else t.stateNode=Qv(f,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?$v(f,t.type,t.stateNode):Qv(f,o,t.memoizedProps)):o===null&&t.stateNode!==null&&yd(t,t.memoizedProps,s.memoizedProps)}break;case 27:Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),s!==null&&o&4&&yd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),t.flags&32){f=t.stateNode;try{si(f,"")}catch(qe){Ht(t,t.return,qe)}}o&4&&t.stateNode!=null&&(f=t.memoizedProps,yd(t,f,s!==null?s.memoizedProps:f)),o&1024&&(Md=!0);break;case 6:if(Zn(n,t),Kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(qe){Ht(t,t.return,qe)}}break;case 3:if(Ic=null,f=Ui,Ui=Oc(n.containerInfo),Zn(n,t),Ui=f,Kn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Hs(n.containerInfo)}catch(qe){Ht(t,t.return,qe)}Md&&(Md=!1,$0(t));break;case 4:o=Ui,Ui=Oc(t.stateNode.containerInfo),Zn(n,t),Kn(t),Ui=o;break;case 12:Zn(n,t),Kn(t);break;case 31:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 13:Zn(n,t),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(bc=kt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 22:f=t.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,ne=va,ve=yn;if(va=ne||f,yn=ve||B,Zn(n,t),yn=ve,va=ne,Kn(t),o&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||B||va||yn||Vr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){B=s=n;try{if(d=B.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=B.stateNode;var be=B.memoizedProps.style,le=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){Ht(B,B.return,qe)}}}else if(n.tag===6){if(s===null){B=n;try{B.stateNode.nodeValue=f?"":B.memoizedProps}catch(qe){Ht(B,B.return,qe)}}}else if(n.tag===18){if(s===null){B=n;try{var ce=B.stateNode;f?Vv(ce,!0):Vv(B.stateNode,!1)}catch(qe){Ht(B,B.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,yc(t,s))));break;case 19:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 30:break;case 21:break;default:Zn(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var s,o=t.return;o!==null;){if(X0(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=Sd(t);xc(t,d,f);break;case 5:var x=s.stateNode;s.flags&32&&(si(x,""),s.flags&=-33);var R=Sd(t);xc(t,R,x);break;case 3:case 4:var B=s.stateNode.containerInfo,ne=Sd(t);bd(t,ne,B);break;default:throw Error(r(161))}}catch(ve){Ht(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Y0(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Vr(n);break;case 1:ji(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&V0(n,n.return,s),Vr(n);break;case 27:il(n.stateNode);case 26:case 5:ji(n,n.return),Vr(n);break;case 22:n.memoizedState===null&&Vr(n);break;case 30:Vr(n);break;default:Vr(n)}t=t.sibling}}function ya(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,f=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ya(f,d,s),Yo(4,d);break;case 1:if(ya(f,d,s),o=d,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ne){Ht(o,o.return,ne)}if(o=d,f=o.updateQueue,f!==null){var R=o.stateNode;try{var B=f.shared.hiddenCallbacks;if(B!==null)for(f.shared.hiddenCallbacks=null,f=0;f<B.length;f++)Dg(B[f],R)}catch(ne){Ht(o,o.return,ne)}}s&&x&64&&G0(d),jo(d,d.return);break;case 27:W0(d);case 26:case 5:ya(f,d,s),s&&o===null&&x&4&&k0(d),jo(d,d.return);break;case 12:ya(f,d,s);break;case 31:ya(f,d,s),s&&x&4&&K0(f,d);break;case 13:ya(f,d,s),s&&x&4&&Q0(f,d);break;case 22:d.memoizedState===null&&ya(f,d,s),jo(d,d.return);break;case 30:break;default:ya(f,d,s)}n=n.sibling}}function Ed(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Oo(s))}function Td(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Oo(t))}function Oi(t,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ev(t,n,s,o),n=n.sibling}function ev(t,n,s,o){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,s,o),f&2048&&Yo(9,n);break;case 1:Oi(t,n,s,o);break;case 3:Oi(t,n,s,o),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Oo(t)));break;case 12:if(f&2048){Oi(t,n,s,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ht(n,n.return,B)}}else Oi(t,n,s,o);break;case 31:Oi(t,n,s,o);break;case 13:Oi(t,n,s,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Oi(t,n,s,o):Zo(t,n):d._visibility&2?Oi(t,n,s,o):(d._visibility|=2,ws(t,n,s,o,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Ed(x,n);break;case 24:Oi(t,n,s,o),f&2048&&Td(n.alternate,n);break;default:Oi(t,n,s,o)}}function ws(t,n,s,o,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=s,B=o,ne=x.flags;switch(x.tag){case 0:case 11:case 15:ws(d,x,R,B,f),Yo(8,x);break;case 23:break;case 22:var ve=x.stateNode;x.memoizedState!==null?ve._visibility&2?ws(d,x,R,B,f):Zo(d,x):(ve._visibility|=2,ws(d,x,R,B,f)),f&&ne&2048&&Ed(x.alternate,x);break;case 24:ws(d,x,R,B,f),f&&ne&2048&&Td(x.alternate,x);break;default:ws(d,x,R,B,f)}n=n.sibling}}function Zo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,o=n,f=o.flags;switch(o.tag){case 22:Zo(s,o),f&2048&&Ed(o.alternate,o);break;case 24:Zo(s,o),f&2048&&Td(o.alternate,o);break;default:Zo(s,o)}n=n.sibling}}var Ko=8192;function Ds(t,n,s){if(t.subtreeFlags&Ko)for(t=t.child;t!==null;)tv(t,n,s),t=t.sibling}function tv(t,n,s){switch(t.tag){case 26:Ds(t,n,s),t.flags&Ko&&t.memoizedState!==null&&$b(s,Ui,t.memoizedState,t.memoizedProps);break;case 5:Ds(t,n,s);break;case 3:case 4:var o=Ui;Ui=Oc(t.stateNode.containerInfo),Ds(t,n,s),Ui=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ko,Ko=16777216,Ds(t,n,s),Ko=o):Ds(t,n,s));break;default:Ds(t,n,s)}}function nv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Rn=o,av(o,t)}nv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iv(t),t=t.sibling}function iv(t){switch(t.tag){case 0:case 11:case 15:Qo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Qo(t);break;case 12:Qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sc(t)):Qo(t);break;default:Qo(t)}}function Sc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Rn=o,av(o,t)}nv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Sc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Sc(n));break;default:Sc(n)}t=t.sibling}}function av(t,n){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:$a(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Oo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Rn=o;else e:for(s=t;Rn!==null;){o=Rn;var f=o.sibling,d=o.return;if(j0(o),o===s){Rn=null;break e}if(f!==null){f.return=d,Rn=f;break e}Rn=d}}}var pb={getCacheForType:function(t){var n=Ln(vn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},mb=typeof WeakMap=="function"?WeakMap:Map,Lt=0,jt=null,vt=null,xt=0,Bt=0,fi=null,er=!1,Ns=!1,Ad=!1,Sa=0,cn=0,tr=0,kr=0,Rd=0,di=0,Ls=0,Jo=null,Qn=null,Cd=!1,bc=0,rv=0,Mc=1/0,Ec=null,nr=null,Mn=0,ir=null,Us=null,ba=0,wd=0,Dd=null,sv=null,$o=0,Nd=null;function hi(){return(Lt&2)!==0&&xt!==0?xt&-xt:N.T!==null?zd():bo()}function ov(){if(di===0)if((xt&536870912)===0||Et){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function Jn(t,n,s){(t===jt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Os(t,0),ar(t,xt,di,!1)),ke(t,s),((Lt&2)===0||t!==jt)&&(t===jt&&((Lt&2)===0&&(kr|=s),cn===4&&ar(t,xt,di,!1)),Zi(t))}function lv(t,n,s){if((Lt&6)!==0)throw Error(r(327));var o=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),f=o?_b(t,n):Ud(t,n,!0),d=o;do{if(f===0){Ns&&!o&&ar(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!gb(s)){f=Ud(t,n,!1),d=!1;continue}if(f===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;f=Jo;var B=R.current.memoizedState.isDehydrated;if(B&&(Os(R,x).flags|=256),x=Ud(R,x,!1),x!==2){if(Ad&&!B){R.errorRecoveryDisabledLanes|=d,kr|=d,f=4;break e}d=Qn,Qn=f,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){Os(t,0),ar(t,n,0,!0);break}e:{switch(o=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ar(o,n,di,!er);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=bc+300-kt(),10<f)){if(ar(o,n,di,!er),xe(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=Bv(cv.bind(null,o,s,Qn,Ec,Cd,n,di,kr,Ls,er,d,"Throttled",-0,0),f);break e}cv(o,s,Qn,Ec,Cd,n,di,kr,Ls,er,d,null,-0,0)}}break}while(!0);Zi(t)}function cv(t,n,s,o,f,d,x,R,B,ne,ve,be,le,ce){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},tv(n,d,be);var qe=(d&62914560)===d?bc-kt():(d&4194048)===d?rv-kt():0;if(qe=eM(be,qe),qe!==null){ba=d,t.cancelPendingCommit=qe(vv.bind(null,t,n,d,s,o,f,x,R,B,ve,be,null,le,ce)),ar(t,d,x,!ne);return}}vv(t,n,d,s,o,f,x,R,B)}function gb(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var f=s[o],d=f.getSnapshot;f=f.value;try{if(!oi(d(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,s,o){n&=~Rd,n&=~kr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var f=n;0<f;){var d=31-He(f),x=1<<d;o[d]=-1,f&=~x}s!==0&&Pt(t,s,n)}function Tc(){return(Lt&6)===0?(el(0),!1):!0}function Ld(){if(vt!==null){if(Bt===0)var t=vt.return;else t=vt,fa=Or=null,jf(t),Es=null,Io=0,t=vt;for(;t!==null;)H0(t.alternate,t),t=t.return;vt=null}}function Os(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Ib(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ba=0,Ld(),jt=t,vt=s=ca(t.current,null),xt=n,Bt=0,fi=null,er=!1,Ns=Le(t,n),Ad=!1,Ls=di=Rd=kr=tr=cn=0,Qn=Jo=null,Cd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var f=31-He(o),d=1<<f;n|=t[f],o&=~d}return Sa=n,ql(),s}function uv(t,n){dt=null,N.H=Xo,n===Ms||n===ec?(n=Ag(),Bt=3):n===If?(n=Ag(),Bt=4):Bt=n===ud?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,vt===null&&(cn=1,pc(t,xi(n,t.current)))}function fv(){var t=ci.current;return t===null?!0:(xt&4194048)===xt?Mi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===Mi:!1}function dv(){var t=N.H;return N.H=Xo,t===null?Xo:t}function hv(){var t=N.A;return N.A=pb,t}function Ac(){cn=4,er||(xt&4194048)!==xt&&ci.current!==null||(Ns=!0),(tr&134217727)===0&&(kr&134217727)===0||jt===null||ar(jt,xt,di,!1)}function Ud(t,n,s){var o=Lt;Lt|=2;var f=dv(),d=hv();(jt!==t||xt!==n)&&(Ec=null,Os(t,n)),n=!1;var x=cn;e:do try{if(Bt!==0&&vt!==null){var R=vt,B=fi;switch(Bt){case 8:Ld(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ne=Bt;if(Bt=0,fi=null,Ps(t,R,B,ne),s&&Ns){x=0;break e}break;default:ne=Bt,Bt=0,fi=null,Ps(t,R,B,ne)}}vb(),x=cn;break}catch(ve){uv(t,ve)}while(!0);return n&&t.shellSuspendCounter++,fa=Or=null,Lt=o,N.H=f,N.A=d,vt===null&&(jt=null,xt=0,ql()),x}function vb(){for(;vt!==null;)pv(vt)}function _b(t,n){var s=Lt;Lt|=2;var o=dv(),f=hv();jt!==t||xt!==n?(Ec=null,Mc=kt()+500,Os(t,n)):Ns=Le(t,n);e:do try{if(Bt!==0&&vt!==null){n=vt;var d=fi;t:switch(Bt){case 1:Bt=0,fi=null,Ps(t,n,d,1);break;case 2:case 9:if(Eg(d)){Bt=0,fi=null,mv(n);break}n=function(){Bt!==2&&Bt!==9||jt!==t||(Bt=7),Zi(t)},d.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Eg(d)?(Bt=0,fi=null,mv(n)):(Bt=0,fi=null,Ps(t,n,d,7));break;case 5:var x=null;switch(vt.tag){case 26:x=vt.memoizedState;case 5:case 27:var R=vt;if(x?e_(x):R.stateNode.complete){Bt=0,fi=null;var B=R.sibling;if(B!==null)vt=B;else{var ne=R.return;ne!==null?(vt=ne,Rc(ne)):vt=null}break t}}Bt=0,fi=null,Ps(t,n,d,5);break;case 6:Bt=0,fi=null,Ps(t,n,d,6);break;case 8:Ld(),cn=6;break e;default:throw Error(r(462))}}xb();break}catch(ve){uv(t,ve)}while(!0);return fa=Or=null,N.H=o,N.A=f,Lt=s,vt!==null?0:(jt=null,xt=0,ql(),cn)}function xb(){for(;vt!==null&&!on();)pv(vt)}function pv(t){var n=F0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Rc(t):vt=n}function mv(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=L0(s,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=L0(s,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:jf(n);default:H0(s,n),n=vt=hg(n,Sa),n=F0(s,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Rc(t):vt=n}function Ps(t,n,s,o){fa=Or=null,jf(n),Es=null,Io=0;var f=n.return;try{if(ob(t,f,n,s,xt)){cn=1,pc(t,xi(s,t.current)),vt=null;return}}catch(d){if(f!==null)throw vt=f,d;cn=1,pc(t,xi(s,t.current)),vt=null;return}n.flags&32768?(Et||o===1?t=!0:Ns||(xt&536870912)!==0?t=!1:(er=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),gv(n,t)):Rc(n)}function Rc(t){var n=t;do{if((n.flags&32768)!==0){gv(n,er);return}t=n.return;var s=ub(n.alternate,n,Sa);if(s!==null){vt=s;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);cn===0&&(cn=5)}function gv(t,n){do{var s=fb(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);cn=6,vt=null}function vv(t,n,s,o,f,d,x,R,B){t.cancelPendingCommit=null;do Cc();while(Mn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Sf,$t(t,s,d,x,R,B),t===jt&&(vt=jt=null,xt=0),Us=n,ir=t,ba=s,wd=d,Dd=f,sv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Mb(J,function(){return bv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,f=V.p,V.p=2,x=Lt,Lt|=4;try{db(t,n,s)}finally{Lt=x,V.p=f,N.T=o}}Mn=1,_v(),xv(),yv()}}function _v(){if(Mn===1){Mn=0;var t=ir,n=Us,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var o=V.p;V.p=2;var f=Lt;Lt|=4;try{J0(n,t);var d=Wd,x=ag(t.containerInfo),R=d.focusedElem,B=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&ig(R.ownerDocument.documentElement,R)){if(B!==null&&gf(R)){var ne=B.start,ve=B.end;if(ve===void 0&&(ve=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(ve,R.value.length);else{var be=R.ownerDocument||document,le=be&&be.defaultView||window;if(le.getSelection){var ce=le.getSelection(),qe=R.textContent.length,rt=Math.min(B.start,qe),qt=B.end===void 0?rt:Math.min(B.end,qe);!ce.extend&&rt>qt&&(x=qt,qt=rt,rt=x);var Q=ng(R,rt),X=ng(R,qt);if(Q&&X&&(ce.rangeCount!==1||ce.anchorNode!==Q.node||ce.anchorOffset!==Q.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var te=be.createRange();te.setStart(Q.node,Q.offset),ce.removeAllRanges(),rt>qt?(ce.addRange(te),ce.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),ce.addRange(te))}}}}for(be=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&be.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var ye=be[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Hc=!!Xd,Wd=Xd=null}finally{Lt=f,V.p=o,N.T=s}}t.current=n,Mn=2}}function xv(){if(Mn===2){Mn=0;var t=ir,n=Us,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var o=V.p;V.p=2;var f=Lt;Lt|=4;try{Y0(t,n.alternate,n)}finally{Lt=f,V.p=o,N.T=s}}Mn=3}}function yv(){if(Mn===4||Mn===3){Mn=0,Z();var t=ir,n=Us,s=ba,o=sv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Us=ir=null,Sv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(nr=null),So(s),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,f=V.p,V.p=2,N.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{N.T=n,V.p=f}}(ba&3)!==0&&Cc(),Zi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Nd?$o++:($o=0,Nd=t):$o=0,el(0)}}function Sv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Oo(n)))}function Cc(){return _v(),xv(),yv(),bv()}function bv(){if(Mn!==5)return!1;var t=ir,n=wd;wd=0;var s=So(ba),o=N.T,f=V.p;try{V.p=32>s?32:s,N.T=null,s=Dd,Dd=null;var d=ir,x=ba;if(Mn=0,Us=ir=null,ba=0,(Lt&6)!==0)throw Error(r(331));var R=Lt;if(Lt|=4,iv(d.current),ev(d,d.current,x,s),Lt=R,el(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(pe,d)}catch{}return!0}finally{V.p=f,N.T=o,Sv(t,n)}}function Mv(t,n,s){n=xi(s,n),n=cd(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(ke(t,2),Zi(t))}function Ht(t,n,s){if(t.tag===3)Mv(t,t,s);else for(;n!==null;){if(n.tag===3){Mv(n,t,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(nr===null||!nr.has(o))){t=xi(s,t),s=E0(2),o=Ka(n,s,2),o!==null&&(T0(s,o,n,t),ke(o,2),Zi(o));break}}n=n.return}}function Od(t,n,s){var o=t.pingCache;if(o===null){o=t.pingCache=new mb;var f=new Set;o.set(n,f)}else f=o.get(n),f===void 0&&(f=new Set,o.set(n,f));f.has(s)||(Ad=!0,f.add(s),t=yb.bind(null,t,n,s),n.then(t,t))}function yb(t,n,s){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,jt===t&&(xt&s)===s&&(cn===4||cn===3&&(xt&62914560)===xt&&300>kt()-bc?(Lt&2)===0&&Os(t,0):Rd|=s,Ls===xt&&(Ls=0)),Zi(t)}function Ev(t,n){n===0&&(n=Ee()),t=Nr(t,n),t!==null&&(ke(t,n),Zi(t))}function Sb(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Ev(t,s)}function bb(t,n){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ev(t,s)}function Mb(t,n){return dn(t,n)}var wc=null,Is=null,Pd=!1,Dc=!1,Id=!1,rr=0;function Zi(t){t!==Is&&t.next===null&&(Is===null?wc=Is=t:Is=Is.next=t),Dc=!0,Pd||(Pd=!0,Tb())}function el(t,n){if(!Id&&Dc){Id=!0;do for(var s=!1,o=wc;o!==null;){if(t!==0){var f=o.pendingLanes;if(f===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-He(42|t)+1)-1,d&=f&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Cv(o,d))}else d=xt,d=xe(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Le(o,d)||(s=!0,Cv(o,d));o=o.next}while(s);Id=!1}}function Eb(){Tv()}function Tv(){Dc=Pd=!1;var t=0;rr!==0&&Pb()&&(t=rr);for(var n=kt(),s=null,o=wc;o!==null;){var f=o.next,d=Av(o,n);d===0?(o.next=null,s===null?wc=f:s.next=f,f===null&&(Is=s)):(s=o,(t!==0||(d&3)!==0)&&(Dc=!0)),o=f}Mn!==0&&Mn!==5||el(t),rr!==0&&(rr=0)}function Av(t,n){for(var s=t.suspendedLanes,o=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-He(d),R=1<<x,B=f[x];B===-1?((R&s)===0||(R&o)!==0)&&(f[x]=Be(R,n)):B<=n&&(t.expiredLanes|=R),d&=~R}if(n=jt,s=xt,s=xe(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Zt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Le(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(o!==null&&Zt(o),So(s)){case 2:case 8:s=M;break;case 32:s=J;break;case 268435456:s=me;break;default:s=J}return o=Rv.bind(null,t),s=dn(s,o),t.callbackPriority=n,t.callbackNode=s,n}return o!==null&&o!==null&&Zt(o),t.callbackPriority=2,t.callbackNode=null,2}function Rv(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Cc()&&t.callbackNode!==s)return null;var o=xt;return o=xe(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(lv(t,o,n),Av(t,kt()),t.callbackNode!=null&&t.callbackNode===s?Rv.bind(null,t):null)}function Cv(t,n){if(Cc())return null;lv(t,n,!0)}function Tb(){zb(function(){(Lt&6)!==0?dn(O,Eb):Tv()})}function zd(){if(rr===0){var t=Ss;t===0&&(t=et,et<<=1,(et&261888)===0&&(et=256)),rr=t}return rr}function wv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rr(""+t)}function Dv(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function Ab(t,n,s,o,f){if(n==="submit"&&s&&s.stateNode===f){var d=wv((f[Dn]||null).action),x=o.submitter;x&&(n=(n=x[Dn]||null)?wv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new Vl("action","action",null,o,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rr!==0){var B=x?Dv(f,x):new FormData(f);id(s,{pending:!0,data:B,method:f.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=x?Dv(f,x):new FormData(f),id(s,{pending:!0,data:B,method:f.method,action:d},d,B))},currentTarget:f}]})}}for(var Fd=0;Fd<yf.length;Fd++){var Bd=yf[Fd],Rb=Bd.toLowerCase(),Cb=Bd[0].toUpperCase()+Bd.slice(1);Li(Rb,"on"+Cb)}Li(og,"onAnimationEnd"),Li(lg,"onAnimationIteration"),Li(cg,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(X1,"onTransitionRun"),Li(W1,"onTransitionStart"),Li(q1,"onTransitionCancel"),Li(ug,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function Nv(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],f=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],B=R.instance,ne=R.currentTarget;if(R=R.listener,B!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ne;try{d(f)}catch(ve){Wl(ve)}f.currentTarget=null,d=B}else for(x=0;x<o.length;x++){if(R=o[x],B=R.instance,ne=R.currentTarget,R=R.listener,B!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ne;try{d(f)}catch(ve){Wl(ve)}f.currentTarget=null,d=B}}}}function _t(t,n){var s=n[Er];s===void 0&&(s=n[Er]=new Set);var o=t+"__bubble";s.has(o)||(Lv(n,t,2,!1),s.add(o))}function Hd(t,n,s){var o=0;n&&(o|=4),Lv(s,t,o,n)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Gd(t){if(!t[Nc]){t[Nc]=!0,Fl.forEach(function(s){s!=="selectionchange"&&(wb.has(s)||Hd(s,!1,t),Hd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nc]||(n[Nc]=!0,Hd("selectionchange",!1,n))}}function Lv(t,n,s,o){switch(o_(n)){case 2:var f=iM;break;case 8:f=aM;break;default:f=nh}s=f.bind(null,n,s,t),f=void 0,!of||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),o?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Vd(t,n,s,o,f){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===f)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;R!==null;){if(x=ra(R),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=d=x;continue e}R=R.parentNode}}o=o.return}zm(function(){var ne=d,ve=rf(s),be=[];e:{var le=fg.get(t);if(le!==void 0){var ce=Vl,qe=t;switch(t){case"keypress":if(Hl(s)===0)break e;case"keydown":case"keyup":ce=b1;break;case"focusin":qe="focus",ce=ff;break;case"focusout":qe="blur",ce=ff;break;case"beforeblur":case"afterblur":ce=ff;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=u1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=T1;break;case og:case lg:case cg:ce=h1;break;case ug:ce=R1;break;case"scroll":case"scrollend":ce=l1;break;case"wheel":ce=w1;break;case"copy":case"cut":case"paste":ce=m1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Vm;break;case"toggle":case"beforetoggle":ce=N1}var rt=(n&4)!==0,qt=!rt&&(t==="scroll"||t==="scrollend"),Q=rt?le!==null?le+"Capture":null:le;rt=[];for(var X=ne,te;X!==null;){var ye=X;if(te=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||te===null||Q===null||(ye=Mo(X,Q),ye!=null&&rt.push(nl(X,ye,te))),qt)break;X=X.return}0<rt.length&&(le=new ce(le,qe,null,s,ve),be.push({event:le,listeners:rt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&s!==af&&(qe=s.relatedTarget||s.fromElement)&&(ra(qe)||qe[qn]))break e;if((ce||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(qe=s.relatedTarget||s.toElement,ce=ne,qe=qe?ra(qe):null,qe!==null&&(qt=c(qe),rt=qe.tag,qe!==qt||rt!==5&&rt!==27&&rt!==6)&&(qe=null)):(ce=null,qe=ne),ce!==qe)){if(rt=Hm,ye="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Vm,ye="onPointerLeave",Q="onPointerEnter",X="pointer"),qt=ce==null?le:Ar(ce),te=qe==null?le:Ar(qe),le=new rt(ye,X+"leave",ce,s,ve),le.target=qt,le.relatedTarget=te,ye=null,ra(ve)===ne&&(rt=new rt(Q,X+"enter",qe,s,ve),rt.target=te,rt.relatedTarget=qt,ye=rt),qt=ye,ce&&qe)t:{for(rt=Db,Q=ce,X=qe,te=0,ye=Q;ye;ye=rt(ye))te++;ye=0;for(var nt=X;nt;nt=rt(nt))ye++;for(;0<te-ye;)Q=rt(Q),te--;for(;0<ye-te;)X=rt(X),ye--;for(;te--;){if(Q===X||X!==null&&Q===X.alternate){rt=Q;break t}Q=rt(Q),X=rt(X)}rt=null}else rt=null;ce!==null&&Uv(be,le,ce,rt,!1),qe!==null&&qt!==null&&Uv(be,qt,qe,rt,!0)}}e:{if(le=ne?Ar(ne):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var wt=Km;else if(jm(le))if(Qm)wt=G1;else{wt=B1;var je=F1}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&Ot(ne.elementType)&&(wt=Km):wt=H1;if(wt&&(wt=wt(t,ne))){Zm(be,wt,s,ve);break e}je&&je(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&gt(le,"number",le.value)}switch(je=ne?Ar(ne):window,t){case"focusin":(jm(je)||je.contentEditable==="true")&&(hs=je,vf=ne,No=null);break;case"focusout":No=vf=hs=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,rg(be,s,ve);break;case"selectionchange":if(k1)break;case"keydown":case"keyup":rg(be,s,ve)}var ht;if(hf)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else ds?qm(t,s)&&(yt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(yt="onCompositionStart");yt&&(km&&s.locale!=="ko"&&(ds||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&ds&&(ht=Fm()):(ka=ve,lf="value"in ka?ka.value:ka.textContent,ds=!0)),je=Lc(ne,yt),0<je.length&&(yt=new Gm(yt,t,null,s,ve),be.push({event:yt,listeners:je}),ht?yt.data=ht:(ht=Ym(s),ht!==null&&(yt.data=ht)))),(ht=U1?O1(t,s):P1(t,s))&&(yt=Lc(ne,"onBeforeInput"),0<yt.length&&(je=new Gm("onBeforeInput","beforeinput",null,s,ve),be.push({event:je,listeners:yt}),je.data=ht)),Ab(be,t,ne,s,ve)}Nv(be,n)})}function nl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Lc(t,n){for(var s=n+"Capture",o=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Mo(t,s),f!=null&&o.unshift(nl(t,f,d)),f=Mo(t,n),f!=null&&o.push(nl(t,f,d))),t.tag===3)return o;t=t.return}return[]}function Db(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Uv(t,n,s,o,f){for(var d=n._reactName,x=[];s!==null&&s!==o;){var R=s,B=R.alternate,ne=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||ne===null||(B=ne,f?(ne=Mo(s,d),ne!=null&&x.unshift(nl(s,ne,B))):f||(ne=Mo(s,d),ne!=null&&x.push(nl(s,ne,B)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var Nb=/\r\n?/g,Lb=/\u0000|\uFFFD/g;function Ov(t){return(typeof t=="string"?t:""+t).replace(Nb,`
`).replace(Lb,"")}function Pv(t,n){return n=Ov(n),Ov(t)===n}function Wt(t,n,s,o,f,d){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&si(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,s,o);break;case"style":Ni(t,o,d);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Rr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Wt(t,n,"name",f.name,f,null),Wt(t,n,"formEncType",f.formEncType,f,null),Wt(t,n,"formMethod",f.formMethod,f,null),Wt(t,n,"formTarget",f.formTarget,f,null)):(Wt(t,n,"encType",f.encType,f,null),Wt(t,n,"method",f.method,f,null),Wt(t,n,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Rr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=oa);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=Rr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Pe(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Wi.get(s)||s,Pe(t,s,o))}}function kd(t,n,s,o,f,d){switch(s){case"style":Ni(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,f),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,o,f);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Pe(t,s,o)}}}function On(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,d,x,s,null)}}f&&Wt(t,n,"srcSet",s.srcSet,s,null),o&&Wt(t,n,"src",s.src,s,null);return;case"input":_t("invalid",t);var R=d=x=f=null,B=null,ne=null;for(o in s)if(s.hasOwnProperty(o)){var ve=s[o];if(ve!=null)switch(o){case"name":f=ve;break;case"type":x=ve;break;case"checked":B=ve;break;case"defaultChecked":ne=ve;break;case"value":d=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Wt(t,n,o,ve,s,null)}}zn(t,d,R,B,ne,x,f,!1);return;case"select":_t("invalid",t),o=x=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Wt(t,n,f,R,s,null)}n=d,s=x,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):s!=null&&bn(t,!!o,s,!0);return;case"textarea":_t("invalid",t),d=f=o=null;for(x in s)if(s.hasOwnProperty(x)&&(R=s[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Wt(t,n,x,R,s,null)}Di(t,o,f,d);return;case"option":for(B in s)s.hasOwnProperty(B)&&(o=s[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Wt(t,n,B,o,s,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<tl.length;o++)_t(tl[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(o=s[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,ne,o,s,null)}return;default:if(Ot(n)){for(ve in s)s.hasOwnProperty(ve)&&(o=s[ve],o!==void 0&&kd(t,n,ve,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Wt(t,n,R,o,s,null))}function Ub(t,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,R=null,B=null,ne=null,ve=null;for(ce in s){var be=s[ce];if(s.hasOwnProperty(ce)&&be!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":B=be;default:o.hasOwnProperty(ce)||Wt(t,n,ce,null,o,be)}}for(var le in o){var ce=o[le];if(be=s[le],o.hasOwnProperty(le)&&(ce!=null||be!=null))switch(le){case"type":d=ce;break;case"name":f=ce;break;case"checked":ne=ce;break;case"defaultChecked":ve=ce;break;case"value":x=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==be&&Wt(t,n,le,ce,o,be)}}Ge(t,x,R,B,ne,ve,d,f);return;case"select":ce=x=R=le=null;for(d in s)if(B=s[d],s.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ce=B;default:o.hasOwnProperty(d)||Wt(t,n,d,null,o,B)}for(f in o)if(d=o[f],B=s[f],o.hasOwnProperty(f)&&(d!=null||B!=null))switch(f){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==B&&Wt(t,n,f,d,o,B)}n=R,s=x,o=ce,le!=null?bn(t,!!s,le,!1):!!o!=!!s&&(n!=null?bn(t,!!s,n,!0):bn(t,!!s,s?[]:"",!1));return;case"textarea":ce=le=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(t,n,R,null,o,f)}for(x in o)if(f=o[x],d=s[x],o.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":le=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Wt(t,n,x,f,o,d)}ri(t,le,ce);return;case"option":for(var qe in s)le=s[qe],s.hasOwnProperty(qe)&&le!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Wt(t,n,qe,null,o,le));for(B in o)le=o[B],ce=s[B],o.hasOwnProperty(B)&&le!==ce&&(le!=null||ce!=null)&&(B==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Wt(t,n,B,le,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in s)le=s[rt],s.hasOwnProperty(rt)&&le!=null&&!o.hasOwnProperty(rt)&&Wt(t,n,rt,null,o,le);for(ne in o)if(le=o[ne],ce=s[ne],o.hasOwnProperty(ne)&&le!==ce&&(le!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Wt(t,n,ne,le,o,ce)}return;default:if(Ot(n)){for(var qt in s)le=s[qt],s.hasOwnProperty(qt)&&le!==void 0&&!o.hasOwnProperty(qt)&&kd(t,n,qt,void 0,o,le);for(ve in o)le=o[ve],ce=s[ve],!o.hasOwnProperty(ve)||le===ce||le===void 0&&ce===void 0||kd(t,n,ve,le,o,ce);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&Wt(t,n,Q,null,o,le);for(be in o)le=o[be],ce=s[be],!o.hasOwnProperty(be)||le===ce||le==null&&ce==null||Wt(t,n,be,le,o,ce)}function Iv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ob(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var f=s[o],d=f.transferSize,x=f.initiatorType,R=f.duration;if(d&&R&&Iv(x)){for(x=0,R=f.responseEnd,o+=1;o<s.length;o++){var B=s[o],ne=B.startTime;if(ne>R)break;var ve=B.transferSize,be=B.initiatorType;ve&&Iv(be)&&(B=B.responseEnd,x+=ve*(B<R?1:(R-ne)/(B-ne)))}if(--o,n+=8*(d+x)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xd=null,Wd=null;function Uc(t){return t.nodeType===9?t:t.ownerDocument}function zv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Pb(){var t=window.event;return t&&t.type==="popstate"?t===Yd?!1:(Yd=t,!0):(Yd=null,!1)}var Bv=typeof setTimeout=="function"?setTimeout:void 0,Ib=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,zb=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(t){return Hv.resolve(null).then(t).catch(Fb)}:Bv;function Fb(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function Gv(t,n){var s=n,o=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(f),Hs(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")il(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,il(s);for(var d=s.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[Ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&il(t.ownerDocument.body);s=f}while(s);Hs(n)}function Vv(t,n){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function jd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":jd(s),Ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Bb(t,n,s,o){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function Hb(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function kv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function Zd(t){return t.data==="$?"||t.data==="$~"}function Kd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gb(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qd=null;function Xv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Ei(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Wv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function qv(t,n,s){switch(n=Uc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function il(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var Ti=new Map,Yv=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=V.d;V.d={f:Vb,r:kb,D:Xb,C:Wb,L:qb,m:Yb,X:Zb,S:jb,M:Kb};function Vb(){var t=Ma.f(),n=Tc();return t||n}function kb(t){var n=sa(t);n!==null&&n.tag===5&&n.type==="form"?u0(n):Ma.r(t)}var zs=typeof document>"u"?null:document;function jv(t,n,s){var o=zs;if(o&&typeof n=="string"&&n){var f=zt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Yv.has(f)||(Yv.add(f),t={rel:t,crossOrigin:s,href:n},o.querySelector(f)===null&&(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function Xb(t){Ma.D(t),jv("dns-prefetch",t,null)}function Wb(t,n){Ma.C(t,n),jv("preconnect",t,n)}function qb(t,n,s){Ma.L(t,n,s);var o=zs;if(o&&t&&n){var f='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+zt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+zt(s.imageSizes)+'"]')):f+='[href="'+zt(t)+'"]';var d=f;switch(n){case"style":d=Fs(t);break;case"script":d=Bs(t)}Ti.has(d)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ti.set(d,t),o.querySelector(f)!==null||n==="style"&&o.querySelector(al(d))||n==="script"&&o.querySelector(rl(d))||(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function Yb(t,n){Ma.m(t,n);var s=zs;if(s&&t){var o=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+zt(o)+'"][href="'+zt(t)+'"]',d=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Bs(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ti.set(d,t),s.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(rl(d)))return}o=s.createElement("link"),On(o,"link",t),gn(o),s.head.appendChild(o)}}}function jb(t,n,s){Ma.S(t,n,s);var o=zs;if(o&&t){var f=Ga(o).hoistableStyles,d=Fs(t);n=n||"default";var x=f.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(al(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ti.get(d))&&Jd(t,s);var B=x=o.createElement("link");gn(B),On(B,"link",t),B._p=new Promise(function(ne,ve){B.onload=ne,B.onerror=ve}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Pc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},f.set(d,x)}}}function Zb(t,n){Ma.X(t,n);var s=zs;if(s&&t){var o=Ga(s).hoistableScripts,f=Bs(t),d=o.get(f);d||(d=s.querySelector(rl(f)),d||(t=v({src:t,async:!0},n),(n=Ti.get(f))&&$d(t,n),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function Kb(t,n){Ma.M(t,n);var s=zs;if(s&&t){var o=Ga(s).hoistableScripts,f=Bs(t),d=o.get(f);d||(d=s.querySelector(rl(f)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ti.get(f))&&$d(t,n),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function Zv(t,n,s,o){var f=(f=ee.current)?Oc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Fs(s.href),s=Ga(f).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Fs(s.href);var d=Ga(f).hoistableStyles,x=d.get(t);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=f.querySelector(al(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||Qb(f,t,s,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Bs(s),s=Ga(f).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Fs(t){return'href="'+zt(t)+'"'}function al(t){return'link[rel="stylesheet"]['+t+"]"}function Kv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Qb(t,n,s,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",s),gn(n),t.head.appendChild(n))}function Bs(t){return'[src="'+zt(t)+'"]'}function rl(t){return"script[async]"+t}function Qv(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+zt(s.href)+'"]');if(o)return n.instance=o,gn(o),o;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),On(o,"style",f),Pc(o,s.precedence,t),n.instance=o;case"stylesheet":f=Fs(s.href);var d=t.querySelector(al(f));if(d)return n.state.loading|=4,n.instance=d,gn(d),d;o=Kv(s),(f=Ti.get(f))&&Jd(o,f),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),On(d,"link",o),n.state.loading|=4,Pc(d,s.precedence,t),n.instance=d;case"script":return d=Bs(s.src),(f=t.querySelector(rl(d)))?(n.instance=f,gn(f),f):(o=s,(f=Ti.get(d))&&(o=v({},s),$d(o,f)),t=t.ownerDocument||t,f=t.createElement("script"),gn(f),On(f,"link",o),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Pc(o,s.precedence,t));return n.instance}function Pc(t,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,d=f,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ic=null;function Jv(t,n,s){if(Ic===null){var o=new Map,f=Ic=new Map;f.set(s,o)}else f=Ic,o=f.get(s),o||(o=new Map,f.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Ba]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function $v(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function Jb(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $b(t,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Fs(o.href),d=n.querySelector(al(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=zc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=n.ownerDocument||n,o=Kv(o),(f=Ti.get(f))&&Jd(o,f),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),On(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=zc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var eh=0;function eM(t,n){return t.stylesheets&&t.count===0&&Bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&eh===0&&(eh=62500*Ob());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>eh?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function Bc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,n.forEach(tM,t),Fc=null,zc.call(t))}function tM(t,n){if(!(n.state.loading&4)){var s=Fc.get(t);if(s)var o=s.get(null);else{s=new Map,Fc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}f=n.instance,x=f.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,f),s.set(x,f),this.count++,o=zc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var sl={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function nM(t,n,s,o,f,d,x,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function t_(t,n,s,o,f,d,x,R,B,ne,ve,be){return t=new nM(t,n,s,x,B,ne,ve,be,R),n=1,d===!0&&(n|=24),d=li(3,null,null,n),t.current=d,d.stateNode=t,n=Uf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:n},zf(d),t}function n_(t){return t?(t=gs,t):gs}function i_(t,n,s,o,f,d){f=n_(f),o.context===null?o.context=f:o.pendingContext=f,o=Za(n),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Ka(t,o,n),s!==null&&(Jn(s,t,n),Fo(s,t,n))}function a_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function th(t,n){a_(t,n),(t=t.alternate)&&a_(t,n)}function r_(t){if(t.tag===13||t.tag===31){var n=Nr(t,67108864);n!==null&&Jn(n,t,67108864),th(t,67108864)}}function s_(t){if(t.tag===13||t.tag===31){var n=hi();n=yo(n);var s=Nr(t,n);s!==null&&Jn(s,t,n),th(t,n)}}var Hc=!0;function iM(t,n,s,o){var f=N.T;N.T=null;var d=V.p;try{V.p=2,nh(t,n,s,o)}finally{V.p=d,N.T=f}}function aM(t,n,s,o){var f=N.T;N.T=null;var d=V.p;try{V.p=8,nh(t,n,s,o)}finally{V.p=d,N.T=f}}function nh(t,n,s,o){if(Hc){var f=ih(o);if(f===null)Vd(t,n,o,Gc,s),l_(t,o);else if(sM(f,t,n,s,o))o.stopPropagation();else if(l_(t,o),n&4&&-1<rM.indexOf(t)){for(;f!==null;){var d=sa(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=we(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var B=1<<31-He(x);R.entanglements[1]|=B,x&=~B}Zi(d),(Lt&6)===0&&(Mc=kt()+500,el(0))}}break;case 31:case 13:R=Nr(d,2),R!==null&&Jn(R,d,2),Tc(),th(d,2)}if(d=ih(o),d===null&&Vd(t,n,o,Gc,s),d===f)break;f=d}f!==null&&o.stopPropagation()}else Vd(t,n,o,null,s)}}function ih(t){return t=rf(t),ah(t)}var Gc=null;function ah(t){if(Gc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gc=t,null}function o_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case O:return 2;case M:return 8;case J:case se:return 32;case me:return 268435456;default:return 32}default:return 32}}var rh=!1,or=null,lr=null,cr=null,ol=new Map,ll=new Map,ur=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function cl(t,n,s,o,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[f]},n!==null&&(n=sa(n),n!==null&&r_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function sM(t,n,s,o,f){switch(n){case"focusin":return or=cl(or,t,n,s,o,f),!0;case"dragenter":return lr=cl(lr,t,n,s,o,f),!0;case"mouseover":return cr=cl(cr,t,n,s,o,f),!0;case"pointerover":var d=f.pointerId;return ol.set(d,cl(ol.get(d)||null,t,n,s,o,f)),!0;case"gotpointercapture":return d=f.pointerId,ll.set(d,cl(ll.get(d)||null,t,n,s,o,f)),!0}return!1}function c_(t){var n=ra(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,cs(t.priority,function(){s_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,cs(t.priority,function(){s_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=ih(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);af=o,s.target.dispatchEvent(o),af=null}else return n=sa(s),n!==null&&r_(n),t.blockedOn=s,!1;n.shift()}return!0}function u_(t,n,s){Vc(t)&&s.delete(n)}function oM(){rh=!1,or!==null&&Vc(or)&&(or=null),lr!==null&&Vc(lr)&&(lr=null),cr!==null&&Vc(cr)&&(cr=null),ol.forEach(u_),ll.forEach(u_)}function kc(t,n){t.blockedOn===n&&(t.blockedOn=null,rh||(rh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,oM)))}var Xc=null;function f_(t){Xc!==t&&(Xc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Xc===t&&(Xc=null);for(var n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],f=t[n+2];if(typeof o!="function"){if(ah(o||s)===null)continue;break}var d=sa(s);d!==null&&(t.splice(n,3),n-=3,id(d,{pending:!0,data:f,method:s.method,action:o},o,f))}}))}function Hs(t){function n(B){return kc(B,t)}or!==null&&kc(or,t),lr!==null&&kc(lr,t),cr!==null&&kc(cr,t),ol.forEach(n),ll.forEach(n);for(var s=0;s<ur.length;s++){var o=ur[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ur.length&&(s=ur[0],s.blockedOn===null);)c_(s),s.blockedOn===null&&ur.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var f=s[o],d=s[o+1],x=f[Dn]||null;if(typeof d=="function")x||f_(s);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[Dn]||null)R=x.formAction;else if(ah(f)!==null)continue}else R=x.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),f_(s)}}}function d_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function sh(t){this._internalRoot=t}Wc.prototype.render=sh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,o=hi();i_(s,o,t,n,null,null)},Wc.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;i_(t.current,2,null,t,null,null),Tc(),n[qn]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bo();t={blockedOn:null,target:t,priority:n};for(var s=0;s<ur.length&&n!==0&&n<ur[s].priority;s++);ur.splice(s,0,t),s===0&&c_(t)}};var h_=e.version;if(h_!=="19.2.8")throw Error(r(527,h_,"19.2.8"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var lM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{pe=qc.inject(lM),ge=qc}catch{}}return fl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var s=!1,o="",f=y0,d=S0,x=b0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=t_(t,1,!1,null,null,s,o,null,f,d,x,d_),t[qn]=n.current,Gd(t),new sh(n)},fl.hydrateRoot=function(t,n,s){if(!l(t))throw Error(r(299));var o=!1,f="",d=y0,x=S0,R=b0,B=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(B=s.formState)),n=t_(t,1,!0,n,s??null,o,f,B,d,x,R,d_),n.context=n_(null),s=n.current,o=hi(),o=yo(o),f=Za(o),f.callback=null,Ka(s,f,o),s=o,n.current.lanes=s,ke(n,s),Zi(n),t[qn]=n.current,Gd(t),new Wc(n)},fl.version="19.2.8",fl}var ex;function t2(){if(ex)return ph.exports;ex=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ph.exports=e2(),ph.exports}var n2=t2();function _h(a){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${a}-${e}`}function tx(a){return{id:a.message_id,role:a.role,content:a.content}}function Xr(a,e,i,r){return a.map(l=>l.id!==e?l:{...l,content:i,streaming:r})}function i2(a,e,i){return e?a.find(r=>r.conversation_id===e)?.title??i:i}function a2(a,e){const[i,r]=Qe.useState([]),[l,c]=Qe.useState(null),u=l,[h,m]=Qe.useState([]),[p,_]=Qe.useState(""),[v,g]=Qe.useState("idle"),[S,E]=Qe.useState(null),[C,b]=Qe.useState(null),[y,P]=Qe.useState(null),[z,w]=Qe.useState(null),[L,U]=Qe.useState([]),F=Qe.useRef(0),T=Qe.useRef(null);Qe.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const I=Qe.useMemo(()=>i2(i,l,e.newConversationTitle),[l,i,e.newConversationTitle]),k=v!=="idle";Qe.useEffect(()=>{let D=!0;async function W(){try{let he=await a.listConversations(),_e=localStorage.getItem(e.storageKey);he.some(Se=>Se.conversation_id===_e)||(_e=he[0]?.conversation_id??null),_e||(_e=(await a.createConversation()).conversation_id,he=await a.listConversations());const ee=await a.loadMessages(_e);if(!D)return;r(he),c(_e),m(ee.map(tx)),localStorage.setItem(e.storageKey,_e)}catch(he){D&&w(he instanceof Error?he.message:e.wakeErrorMessage)}}return W(),()=>{D=!1}},[a,e.storageKey,e.wakeErrorMessage]);async function H(){r(await a.listConversations())}async function K(){if(k||h.length===0)return!1;const D=await a.createConversation();return c(D.conversation_id),m([]),b(null),E(null),P(null),localStorage.setItem(e.storageKey,D.conversation_id),await H(),!0}async function ue(D){if(!k){if(await a.deleteConversation(D),D===u){const W=(await a.listConversations()).filter(he=>he.conversation_id!==D);W.length>0?await q(W[0].conversation_id):await K()}await H()}}async function fe(D){return a.getPassage(D)}async function q(D){if(k||D===l)return!1;const W=F.current+1;F.current=W;const he=await a.loadMessages(D);return F.current!==W?!1:(c(D),m(he.map(tx)),b(null),E(null),P(null),localStorage.setItem(e.storageKey,D),!0)}function N(D,W,he){if(D.type==="delta"){T.current&&clearTimeout(T.current),U([]);const _e=he+D.text;return m(Ae=>Xr(Ae,W,_e,!0)),{text:_e,terminal:!1}}return D.type==="completed"?(m(_e=>Xr(_e,W,D.text,!1)),E(W),{text:D.text,terminal:!0}):D.type==="tool"?(U([{name:D.name,status:D.status,detail:D.detail,preview:D.preview,handles:D.handles}]),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>U([]),3500),{text:he,terminal:!1}):(m(_e=>Xr(_e,W,he,!1)),P(D.message),{text:he,terminal:!0})}async function V(D){if(!l||k)return;const W=_h("assistant");_(""),b(D),E(null),P(null),U([]),g("streaming"),m(Ae=>[...Ae,{id:_h("owner"),role:"owner",content:D},{id:W,role:"weaver",content:"",streaming:!0}]);let he="",_e=!1;try{for await(const Ae of a.streamTurn(l,D)){const ee=N(Ae,W,he);if(he=ee.text,_e=ee.terminal,ee.terminal)break}_e||(m(Ae=>Xr(Ae,W,he,!1)),P(e.incompleteTurnMessage))}catch(Ae){m(Se=>Xr(Se,W,he,!1));const ee=Ae instanceof Error?Ae.message:e.connectionLostMessage;P(Ae instanceof Error?`${ee} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await H()}catch{}}}async function $(){if(!(!l||v!=="streaming")){g("cancelling");try{await a.cancelTurn(l)}catch(D){P(D instanceof Error?D.message:e.cancelFailedMessage),g("streaming")}}}function de(){C&&v==="idle"&&V(C)}async function Te(){if(!l||v!=="idle"||!C)return;const D=_h("assistant");E(null),P(null),U([]),g("streaming"),m(_e=>[..._e,{id:D,role:"weaver",content:"",streaming:!0}]);let W="",he=!1;try{for await(const _e of a.retryTurn(l)){const Ae=N(_e,D,W);if(W=Ae.text,he=Ae.terminal,Ae.terminal)break}he||(m(_e=>Xr(_e,D,W,!1)),P(e.incompleteTurnMessage))}catch(_e){m(ee=>Xr(ee,D,W,!1));const Ae=_e instanceof Error?_e.message:e.connectionLostMessage;P(_e instanceof Error?`${Ae} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await H()}catch{}}}return{activeTitle:I,activity:L,bootError:z,cancelTurn:$,conversationId:l,conversations:i,createConversation:K,deleteConversation:ue,loadPassage:fe,draft:p,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:de,retryLastTurn:Te,selectConversation:q,sendMessage:V,setDraft:_,turnActive:k,turnState:v}}const r2={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."};var s2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},o2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},l2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},c2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},u2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},f2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},d2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},h2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},p2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},m2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},g2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},v2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},_2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]};function x2(a){return a=a-0,a===a}function SS(a){return x2(a)?a:(a=a.replace(/[_-]+(.)?/g,(e,i)=>i?i.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var y2=(a,e)=>om.createElement("stop",{key:`${e}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function S2(a){return a.charAt(0).toUpperCase()+a.slice(1)}var Vs=new Map,b2=1e3;function M2(a){if(Vs.has(a))return Vs.get(a);const e={};let i=0;const r=a.length;for(;i<r;){const l=a.indexOf(";",i),c=l===-1?r:l,u=a.slice(i,c).trim();if(u){const h=u.indexOf(":");if(h>0){const m=u.slice(0,h).trim(),p=u.slice(h+1).trim();if(m&&p){const _=SS(m);e[_.startsWith("webkit")?S2(_):_]=p}}}i=c+1}if(Vs.size===b2){const l=Vs.keys().next().value;l&&Vs.delete(l)}return Vs.set(a,e),e}function bS(a,e,i={}){if(typeof e=="string")return e;const r=(e.children||[]).map(v=>{let g=v;return("fill"in i||i.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),bS(a,g)}),l=e.attributes||{},c={};for(const[v,g]of Object.entries(l))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=M2(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[SS(v)]=g}const{style:u,role:h,"aria-label":m,gradientFill:p,..._}=i;if(u&&(c.style=c.style?{...c.style,...u}:u),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;r.unshift(a(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(y2)))}return a(e.tag,{...c,..._},...r)}var E2=bS.bind(null,om.createElement),nx=(a,e)=>{const i=Qe.useId();return a||(e?i:void 0)},T2=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},A2="searchPseudoElementsFullScan"in as&&typeof as.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",R2=Number.parseInt(A2)>=7,C2=()=>R2,Tl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},w2={left:"fa-pull-left",right:"fa-pull-right"},D2={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},N2={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Pi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function L2(a){const e=as.cssPrefix||as.familyPrefix||Tl;return e===Tl?a:a.replace(new RegExp(String.raw`(?<=^|\s)${Tl}-`,"g"),`${e}-`)}function U2(a){const{beat:e,fade:i,beatFade:r,bounce:l,shake:c,spin:u,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:E,rotation:C,pull:b,swapOpacity:y,rotateBy:P,widthAuto:z,canvasSquare:w,canvasRoomy:L,flip360:U,buzz:F,float:T,jello:I,spinSnap:k,spinSnap4:H,spinSnap8:K,swing:ue,wag:fe,className:q}=a,N=[];return q&&N.push(...q.split(" ")),e&&N.push(Cn.beat),i&&N.push(Cn.fade),r&&N.push(Cn.beatFade),l&&N.push(Cn.bounce),c&&N.push(Cn.shake),u&&N.push(Cn.spin),m&&N.push(Cn.spinReverse),h&&N.push(Cn.spinPulse),p&&N.push(Cn.pulse),_&&N.push(Pi.fixedWidth),v&&N.push(Pi.inverse),g&&N.push(Pi.border),S===!0&&N.push(Pi.flip),(S==="horizontal"||S==="both")&&N.push(Pi.flipHorizontal),(S==="vertical"||S==="both")&&N.push(Pi.flipVertical),E!=null&&N.push(N2[E]),C!=null&&C!==0&&N.push(D2[C]),b!=null&&N.push(w2[b]),y&&N.push(Pi.swapOpacity),C2()?(P&&N.push(Pi.rotateBy),z&&N.push(Pi.widthAuto),w&&N.push(Pi.canvasSquare),L&&N.push(Pi.canvasRoomy),U&&N.push(Cn.flip360),F&&N.push(Cn.buzz),T&&N.push(Cn.float),I&&N.push(Cn.jello),k&&N.push(Cn.spinSnap),H&&N.push(Cn.spinSnap4),K&&N.push(Cn.spinSnap8),ue&&N.push(Cn.swing),fe&&N.push(Cn.wag),(as.cssPrefix||as.familyPrefix||Tl)===Tl?N:N.map(L2)):N}var O2=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function ix(a){if(a)return O2(a)?a:yS.icon(a)}function P2(a){return Object.keys(a)}var ax=new T2("FontAwesomeIcon"),MS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},I2=new Set(Object.keys(MS)),ni=om.forwardRef((a,e)=>{const i={...MS,...a},{icon:r,mask:l,symbol:c,title:u,titleId:h,maskId:m,transform:p}=i,_=nx(m,!!l),v=nx(h,!!u),g=ix(r);if(!g)return ax.error("Icon lookup is undefined",r),null;const S=U2(i),E=typeof p=="string"?yS.transform(p):p,C=ix(l),b=ZA(g,{...S.length>0&&{classes:S},...E&&{transform:E},...C&&{mask:C},symbol:c,title:u,titleId:v,maskId:_});if(!b)return ax.error("Could not find icon",g),null;const{abstract:y}=b,P={ref:e};for(const z of P2(i))I2.has(z)||(P[z]=i[z]);return E2(y[0],P)});ni.displayName="FontAwesomeIcon";function z2(a){return G.jsx(ni,{"aria-hidden":"true",icon:f2,...a})}function rx(a){return G.jsx(ni,{"aria-hidden":"true",icon:v2,...a})}function F2(a){return G.jsx(ni,{"aria-hidden":"true",icon:g2,...a})}function B2(a){return G.jsx(ni,{"aria-hidden":"true",icon:d2,...a})}function H2(a){return G.jsx(ni,{"aria-hidden":"true",icon:_2,...a})}function Qc(a){return G.jsx(ni,{"aria-hidden":"true",icon:c2,...a})}function G2(a){return G.jsx(ni,{"aria-hidden":"true",icon:s2,...a})}function V2(a){return G.jsx(ni,{"aria-hidden":"true",icon:m2,...a})}function k2(a){return G.jsx(ni,{"aria-hidden":"true",icon:u2,...a})}function X2(a){return G.jsx(ni,{"aria-hidden":"true",icon:o2,...a})}function W2(a){return G.jsx(ni,{"aria-hidden":"true",icon:h2,...a})}function q2(a){return G.jsx(ni,{"aria-hidden":"true",icon:p2,...a})}const Y2=["awakened","ascended","transcendent"];function j2({cancelling:a,draft:e,inputLabel:i="Message assistant",onCancel:r,onDraftChange:l,onSubmit:c,onTierChange:u,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const E=Qe.useRef(null),C=v??E,b=Qe.useRef(null),[y,P]=Qe.useState(!1);Qe.useEffect(()=>{const L=C.current;L&&(L.style.height="auto",L.style.height=`${Math.min(L.scrollHeight,160)}px`)},[e,C]),Qe.useEffect(()=>{if(!y)return;function L(F){b.current&&!b.current.contains(F.target)&&P(!1)}function U(F){F.key==="Escape"&&P(!1)}return document.addEventListener("pointerdown",L),document.addEventListener("keydown",U),()=>{document.removeEventListener("pointerdown",L),document.removeEventListener("keydown",U)}},[y]);function z(){const L=e.trim();!L||S||c(L)}function w(L){L.key!=="Enter"||L.shiftKey||(L.preventDefault(),z())}return G.jsx("div",{className:"composer-wrap",children:G.jsxs("div",{className:"composer-shell",children:[G.jsx("textarea",{"aria-label":i,disabled:S,onChange:L=>l(L.target.value),onKeyDown:w,placeholder:h,ref:C,rows:1,value:e}),G.jsxs("div",{className:"composer-tier",ref:b,children:[G.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>P(L=>!L),type:"button",children:[G.jsx("span",{className:"tier-pill-name",children:g}),G.jsx(q2,{})]}),y&&G.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:Y2.map(L=>G.jsx("li",{children:G.jsxs("button",{"aria-selected":L===g,onClick:()=>{u(L),P(!1)},role:"option",type:"button",children:[G.jsx("span",{className:"tier-menu-check",children:L===g?"✦":""}),L]})},L))})]}),S?G.jsx("button",{"aria-label":a?_:p,className:"composer-action composer-stop",disabled:a,onClick:r,type:"button",children:G.jsx(H2,{})}):G.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:z,type:"button",children:G.jsx(z2,{})})]})})}function Z2(a){return(a||"").slice(0,10)}function K2(a){const e=new Date,i=new Date;i.setDate(e.getDate()-1);const r=new Date;r.setDate(e.getDate()-7);const l=u=>new Date(Z2(u)+"T00:00:00"),c=[{label:"Today",conversations:[]},{label:"Yesterday",conversations:[]},{label:"This week",conversations:[]},{label:"Older",conversations:[]}];for(const u of a){const h=l(u.created_at||""),m=h>=l(e.toISOString())?"Today":h>=l(i.toISOString())?"Yesterday":h>=l(r.toISOString())?"This week":"Older";c.find(p=>p.label===m)?.conversations.push(u)}return c.filter(u=>u.conversations.length>0)}function Q2({Mark:a,activeConversationId:e,conversations:i,desktopCollapsed:r,disabled:l,interactionHidden:c,mobileLayout:u,mobileOpen:h,onClose:m,onCreate:p,onDelete:_,onOpenSettings:v,onSelect:g,product:S,readerChapter:E,spoilerMode:C,tier:b}){const y=Qe.useRef(null),[P,z]=Qe.useState(new Set),[w,L]=Qe.useState(null);Qe.useEffect(()=>{h&&y.current?.focus()},[h]);function U(k){z(H=>{const K=new Set(H);return K.has(k)?K.delete(k):K.add(k),K})}function F(k){if(w===k){L(null),_(k);return}L(k),window.setTimeout(()=>{L(H=>H===k?null:H)},3e3)}const T=K2(i),I=[E?`ch ${E}`:"reader unknown",b,C==="protect"?"spoilers protected":"no spoiler care"].join(" · ");return G.jsxs(G.Fragment,{children:[G.jsx("button",{"aria-hidden":"true","aria-label":S.closeRailLabel,className:`drawer-scrim ${h?"drawer-scrim-open":""}`,onClick:m,tabIndex:-1,type:"button"}),G.jsxs("aside",{"aria-hidden":c,"aria-label":u?S.navigationLabel:void 0,"aria-modal":u&&h?!0:void 0,className:["conversation-rail",r?"conversation-rail-collapsed":"",h?"conversation-rail-open":""].filter(Boolean).join(" "),id:"conversation-rail",inert:c,role:u?"dialog":void 0,children:[G.jsxs("header",{className:"rail-brand",children:[G.jsxs("div",{className:"brand-lockup",children:[G.jsx("div",{className:"brand-mark-seal",children:G.jsx(a,{className:"brand-mark",compact:!0})}),G.jsxs("div",{children:[G.jsx("strong",{children:S.assistantName}),G.jsx("span",{children:S.brandLine})]})]}),G.jsx("button",{"aria-label":S.closeRailLabel,className:"icon-button rail-close",onClick:m,ref:y,type:"button",children:G.jsx(V2,{})})]}),G.jsxs("button",{className:"new-weave-button",disabled:l,onClick:p,type:"button",children:[G.jsx(F2,{}),G.jsx("span",{children:S.newConversationLabel})]}),G.jsxs("div",{className:"rail-scroll",children:[G.jsxs("section",{"aria-label":"Threads",className:"rail-section",children:[G.jsxs("div",{className:"rail-section-label",children:[G.jsx("span",{children:S.recentConversationsLabel}),G.jsx("span",{className:"thread-count",children:i.length})]}),G.jsxs("nav",{"aria-label":S.navigationLabel,className:"conversation-list",children:[T.map(k=>G.jsxs("div",{className:"conversation-group",children:[G.jsxs("button",{"aria-expanded":!P.has(k.label),className:"conversation-group-toggle",onClick:()=>U(k.label),type:"button",children:[G.jsx("span",{className:"group-caret",children:P.has(k.label)?"▸":"▾"}),G.jsx("span",{children:k.label}),G.jsx("span",{className:"group-count",children:k.conversations.length})]}),!P.has(k.label)&&G.jsx("ul",{className:"conversation-group-list",children:k.conversations.map(H=>{const K=H.conversation_id===e;return G.jsxs("li",{className:"conversation-row",children:[G.jsxs("button",{"aria-current":K?"page":void 0,"aria-label":`${H.title} ${S.conversationNoun}`,className:`conversation-item ${K?"conversation-item-active":""}`,disabled:l,onClick:()=>g(H.conversation_id),type:"button",children:[G.jsx(Qc,{}),G.jsx("span",{className:"conversation-title",children:H.title})]}),G.jsx("button",{"aria-label":`Delete ${H.title}`,className:"conversation-delete",disabled:l,onClick:()=>F(H.conversation_id),title:w===H.conversation_id?"Sure?":"Delete",type:"button",children:G.jsx(X2,{})})]},H.conversation_id)})})]},k.label)),T.length===0&&G.jsx("p",{className:"conversation-empty",children:"No threads yet."})]})]}),G.jsxs("section",{"aria-label":"Library",className:"rail-section rail-section-library",children:[G.jsx("div",{className:"rail-section-label",children:G.jsx("span",{children:"Library"})}),G.jsxs("ul",{className:"library-list",children:[G.jsxs("li",{className:"library-row",title:"Not yet woven",children:[G.jsx(Qc,{}),G.jsx("span",{children:"What-ifs"}),G.jsx("span",{className:"library-soon",children:"not yet woven"})]}),G.jsxs("li",{className:"library-row",title:"Not yet woven",children:[G.jsx(Qc,{}),G.jsx("span",{children:"Your takes"}),G.jsx("span",{className:"library-soon",children:"not yet woven"})]}),G.jsxs("li",{className:"library-row",title:"Not yet woven",children:[G.jsx(Qc,{}),G.jsx("span",{children:"Arc recaps"}),G.jsx("span",{className:"library-soon",children:"not yet woven"})]})]})]})]}),G.jsxs("footer",{className:"rail-footer",children:[G.jsxs("button",{"aria-label":"Reader status and settings",className:"reader-status",onClick:v,type:"button",children:[G.jsx("span",{className:"reader-status-line",children:I}),G.jsx(k2,{})]}),G.jsx("p",{className:"footer-line",children:S.footerLine})]})]})]})}function J2({onClose:a,onSave:e,initial:i}){const[r,l]=Qe.useState(i.reader_chapter==null?"":String(i.reader_chapter)),[c,u]=Qe.useState(i.spoiler_mode),[h,m]=Qe.useState(i.tier),[p,_]=Qe.useState(!1),v=Qe.useRef(null);Qe.useEffect(()=>{v.current?.focus()},[]);async function g(){_(!0);const E=r.trim()===""?null:Number(r);await e({reader_chapter:E&&E>=1&&E<=3127?E:null,spoiler_mode:c,tier:h}),_(!1),a()}const S=r.trim()===""?"?":r;return G.jsx("div",{"aria-label":"Chat settings","aria-modal":"true",className:"settings-backdrop",role:"dialog",children:G.jsxs("div",{className:"soul-sea-panel",children:[G.jsxs("div",{className:"soul-sea-sky",children:[G.jsx("div",{"aria-hidden":"true",className:"soul-sun"}),G.jsx("div",{"aria-hidden":"true",className:"soul-sun-glow"}),G.jsxs("div",{className:"soul-core",role:"img","aria-label":`At chapter ${S}`,children:[G.jsx("span",{className:"soul-core-star"}),G.jsx("strong",{className:"soul-core-chapter",children:S})]}),G.jsx("p",{className:"soul-sea-caption",children:r.trim()===""?"your soul core hangs unanchored — name your chapter, and Weaver orients her answers around it":`your soul core · ch ${S} · weaver weaves her answers around this position`})]}),G.jsxs("div",{className:"soul-spheres",children:[G.jsxs("div",{className:"soul-sphere",children:[G.jsxs("label",{className:"soul-sphere-label",htmlFor:"reader-chapter",children:[G.jsx("span",{className:"soul-sphere-name",children:"I'm at chapter"}),G.jsx("input",{className:"settings-input",id:"reader-chapter",inputMode:"numeric",onChange:E=>l(E.target.value),placeholder:"unknown",ref:v,type:"number",value:r})]}),G.jsx("span",{className:"settings-hint",children:"1-3127. Leave empty if you do not want to say."})]}),G.jsxs("fieldset",{className:"soul-sphere",children:[G.jsx("legend",{className:"soul-sphere-label",children:G.jsx("span",{className:"soul-sphere-name",children:"Spoilers"})}),G.jsxs("label",{className:"settings-option",children:[G.jsx("input",{checked:c==="protect",name:"spoiler-mode",onChange:()=>u("protect"),type:"radio"}),"Protect the story"]}),G.jsxs("label",{className:"settings-option",children:[G.jsx("input",{checked:c==="none",name:"spoiler-mode",onChange:()=>u("none"),type:"radio"}),"No spoiler care (spoil me freely)"]})]}),G.jsxs("fieldset",{className:"soul-sphere",children:[G.jsx("legend",{className:"soul-sphere-label",children:G.jsx("span",{className:"soul-sphere-name",children:"Reading tier"})}),G.jsxs("label",{className:"settings-option",children:[G.jsx("input",{checked:h==="awakened",name:"reading-tier",onChange:()=>m("awakened"),type:"radio"}),"Awakened (fast, 50 tool steps)"]}),G.jsxs("label",{className:"settings-option",children:[G.jsx("input",{checked:h==="ascended",name:"reading-tier",onChange:()=>m("ascended"),type:"radio"}),"Ascended (default, 70 tool steps)"]}),G.jsxs("label",{className:"settings-option",children:[G.jsx("input",{checked:h==="transcendent",name:"reading-tier",onChange:()=>m("transcendent"),type:"radio"}),"Transcendent (deep, 90 tool steps)"]})]})]}),G.jsxs("div",{className:"soul-sea-actions",children:[G.jsx("button",{className:"settings-button",onClick:a,type:"button",children:"Cancel"}),G.jsx("button",{className:"settings-button settings-button-primary",disabled:p,onClick:()=>{g()},type:"button",children:p?"Saving…":"Save"})]})]})})}const $2=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function e3(a){try{const e=new URL(a);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function xh(a,e){if(!e)return;const i=a.at(-1);if(i?.type==="text"){i.value+=e;return}a.push({type:"text",value:e})}function Jc(a){const e=[];let i=0;for(const r of a.matchAll($2)){const l=r.index??0;xh(e,a.slice(i,l));const c=r[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const u=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=u?.[2]??"";u&&e3(h)?e.push({type:"link",label:u[1],href:h}):xh(e,c)}i=l+c.length}return xh(e,a.slice(i)),e}function t3(a){const e=a.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function n3(a){const e=[],i=String(a??"").split(/\r?\n/);let r=0;for(;r<i.length;){const l=i[r].trim();if(!l){r+=1;continue}if(l.startsWith("```")){const p=[];for(r+=1;r<i.length&&!i[r].trimStart().startsWith("```");)p.push(i[r]),r+=1;r<i.length&&(r+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(l);if(c){e.push({type:"heading",level:c[1].length,children:Jc(c[2])}),r+=1;continue}if(l.startsWith(">")){e.push({type:"quote",children:Jc(l.replace(/^>\s?/,""))}),r+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){e.push({type:"rule"}),r+=1;continue}const u=/^[-*]\s+/.test(l),h=/^\d+[.)]\s+/.test(l);if(u||h){const p=[];for(;r<i.length;){const _=i[r].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(Jc(v[1])),r+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;r<i.length;){const p=i[r].trim();if(!p||m.length>0&&t3(p))break;m.push(p),r+=1}e.push({type:"paragraph",children:Jc(m.join(" "))})}return e}function ao(a){return a.map((e,i)=>{const r=`${e.type}-${i}`;return e.type==="text"?G.jsx(Qe.Fragment,{children:e.value},r):e.type==="strong"?G.jsx("strong",{children:ao(e.children)},r):e.type==="emphasis"?G.jsx("em",{children:ao(e.children)},r):e.type==="code"?G.jsx("code",{children:e.value},r):G.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},r)})}function i3({children:a}){return n3(a).map((i,r)=>{const l=`${i.type}-${r}`;if(i.type==="paragraph")return G.jsx("p",{children:ao(i.children)},l);if(i.type==="heading"){const u=`h${i.level}`;return G.jsx(u,{children:ao(i.children)},l)}if(i.type==="code")return G.jsx("pre",{children:G.jsx("code",{children:i.value})},l);if(i.type==="quote")return G.jsx("blockquote",{children:ao(i.children)},l);if(i.type==="rule")return G.jsx("hr",{},l);const c=i.ordered?"ol":"ul";return G.jsx(c,{children:i.items.map((u,h)=>G.jsx("li",{children:ao(u)},`${l}-${h}`))},l)})}const a3={search_story:{doing:"searching the library",done:"searched the library"},read_chapters:{doing:"recalling a passage",done:"recalled a passage"},find_text:{doing:"finding the words",done:"found the words"},browse_chapters:{doing:"browsing the chapters",done:"browsed the chapters"},who_is:{doing:"consulting the notebook",done:"consulted the notebook"}};function r3(a,e,i){const r=a3[a];return r?e==="start"?`weaver is ${r.doing}`:`weaver has ${r.done}`:e==="start"?`${a} ${i||"started"}`.trim():`${a} ${i||"done"}`.trim()}function s3({Mark:a,activity:e,assistantName:i,message:r,onQuote:l,onRegenerate:c,onViewPassage:u,regenerateLabel:h}){const[m,p]=Qe.useState(!1),[_,v]=Qe.useState(null),[g,S]=Qe.useState(null),E=Qe.useRef(null);Qe.useEffect(()=>{function b(){if(r.role!=="weaver"||!l||!E.current)return;const y=window.getSelection(),P=y?y.toString().trim():"",z=E.current,w=y&&y.rangeCount>0&&z.contains(y.getRangeAt(0).commonAncestorContainer);if(P.length>=2&&w){const L=y.getRangeAt(0).getBoundingClientRect();v(P),S({top:L.bottom+6,left:L.left})}else v(null),S(null)}return document.addEventListener("selectionchange",b),()=>document.removeEventListener("selectionchange",b)},[r.role,l]);async function C(){await navigator.clipboard?.writeText(r.content),p(!0),window.setTimeout(()=>p(!1),1400)}return r.role==="owner"?G.jsx("article",{className:"message message-owner",children:G.jsxs("div",{className:"owner-message-content",children:[G.jsx("div",{className:"owner-bubble",children:r.content}),G.jsx("div",{className:"message-actions",children:G.jsxs("button",{"aria-label":"Copy owner message",onClick:C,type:"button",children:[G.jsx(rx,{}),G.jsx("span",{children:m?"Copied":"Copy"})]})})]})}):G.jsxs("article",{className:`message message-weaver ${r.streaming?"message-streaming":""}`,children:[G.jsx("div",{className:"weaver-avatar",children:G.jsx(a,{compact:!0})}),G.jsxs("div",{className:"weaver-message-content",children:[G.jsx("div",{className:"message-role",children:i}),e&&G.jsxs("p",{className:`spell-line spell-line-${e.status}`,children:[G.jsx("span",{className:"spell-bracket",children:"["}),r3(e.name,e.status,e.detail),e.preview&&G.jsxs("span",{className:"spell-preview",children:[" ",e.preview,"…"]}),e.handles&&e.handles.length>0&&G.jsx("button",{"aria-label":"View the recalled passage",className:"spell-view",onClick:()=>u?.(e.handles[0]),type:"button",children:"view passage"}),G.jsx("span",{className:"spell-bracket",children:"]"})]}),G.jsx("div",{className:"markdown-body",ref:E,children:r.content?G.jsx(i3,{children:r.content}):G.jsx("span",{className:"thinking-thread"})}),!r.streaming&&r.content&&G.jsxs("div",{className:"message-actions",children:[G.jsxs("button",{"aria-label":"Copy reply",onClick:C,type:"button",children:[G.jsx(rx,{}),G.jsx("span",{children:m?"Copied":"Copy"})]}),c&&G.jsxs("button",{"aria-label":"Regenerate reply",onClick:c,type:"button",children:[G.jsx(B2,{}),G.jsx("span",{children:h})]})]})]}),_&&g&&G.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{l?.(_),v(null),S(null)},style:{top:g.top,left:g.left},type:"button",children:[G.jsx(W2,{}),G.jsx("span",{children:"ask about this"})]})]})}const ym="185",o3=0,sx=1,l3=2,Du=1,c3=2,Sl=3,Mr=0,ei=1,wa=2,Na=0,oo=1,ox=2,lx=3,cx=4,u3=5,Qr=100,f3=101,d3=102,h3=103,p3=104,m3=200,g3=201,v3=202,_3=203,mp=204,gp=205,x3=206,y3=207,S3=208,b3=209,M3=210,E3=211,T3=212,A3=213,R3=214,vp=0,_p=1,xp=2,fo=3,yp=4,Sp=5,bp=6,Mp=7,ES=0,C3=1,w3=2,na=0,TS=1,AS=2,RS=3,CS=4,wS=5,DS=6,NS=7,LS=300,rs=301,ho=302,yh=303,Sh=304,$u=306,Ep=1e3,Da=1001,Tp=1002,Pn=1003,D3=1004,$c=1005,Gn=1006,bh=1007,es=1008,wi=1009,US=1010,OS=1011,Rl=1012,Sm=1013,aa=1014,ea=1015,Pa=1016,bm=1017,Mm=1018,Cl=1020,PS=35902,IS=35899,zS=1021,FS=1022,Gi=1023,Ia=1026,ts=1027,BS=1028,Em=1029,ss=1030,Tm=1031,Am=1033,Nu=33776,Lu=33777,Uu=33778,Ou=33779,Ap=35840,Rp=35841,Cp=35842,wp=35843,Dp=36196,Np=37492,Lp=37496,Up=37488,Op=37489,Bu=37490,Pp=37491,Ip=37808,zp=37809,Fp=37810,Bp=37811,Hp=37812,Gp=37813,Vp=37814,kp=37815,Xp=37816,Wp=37817,qp=37818,Yp=37819,jp=37820,Zp=37821,Kp=36492,Qp=36494,Jp=36495,$p=36283,em=36284,Hu=36285,tm=36286,N3=3200,ux=0,L3=1,_r="",Ri="srgb",Gu="srgb-linear",Vu="linear",Gt="srgb",ks=7680,fx=519,U3=512,O3=513,P3=514,Rm=515,I3=516,z3=517,Cm=518,F3=519,dx=35044,hx="300 es",ta=2e3,ku=2001;function B3(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Xu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function H3(){const a=Xu("canvas");return a.style.display="block",a}const px={};function mx(...a){const e="THREE."+a.shift();console.log(e,...a)}function HS(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=HS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Rt(...a){a=HS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function lo(...a){const e=a.join(" ");e in px||(px[e]=!0,st(...a))}function G3(a,e,i){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const V3={[vp]:_p,[xp]:bp,[yp]:Mp,[fo]:Sp,[_p]:vp,[bp]:xp,[Mp]:yp,[Sp]:fo};class ls{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=Math.PI/180,nm=180/Math.PI;function Ll(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function At(a,e,i){return Math.max(e,Math.min(i,a))}function k3(a,e){return(a%e+e)%e}function Eh(a,e,i){return(1-i)*a+i*e}function dl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nm=class Nm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*l+e.x,this.y=c*l+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nm.prototype.isVector2=!0;let Ut=Nm;class vo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,u,h){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3],g=c[u+0],S=c[u+1],E=c[u+2],C=c[u+3];if(v!==C||m!==g||p!==S||_!==E){let b=m*g+p*S+_*E+v*C;b<0&&(g=-g,S=-S,E=-E,C=-C,b=-b);let y=1-h;if(b<.9995){const P=Math.acos(b),z=Math.sin(P);y=Math.sin(y*P)/z,h=Math.sin(h*P)/z,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+C*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+C*h;const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,u){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[u],g=c[u+1],S=c[u+2],E=c[u+3];return e[i]=h*E+_*v+m*S-p*g,e[i+1]=m*E+_*g+p*v-h*S,e[i+2]=p*E+_*S+h*g-m*v,e[i+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),v=h(c/2),g=m(r/2),S=m(l/2),E=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],u=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(u-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+u)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(l+u)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(u-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,u=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+u*h+l*p-c*m,this._y=l*_+u*m+c*h-r*p,this._z=c*_+u*p+r*m-l*h,this._w=u*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lm=class Lm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*l-h*r),_=2*(h*i-c*l),v=2*(c*r-u*i);return this.x=i+m*p+u*v-h*_,this.y=r+m*_+h*p-c*v,this.z=l+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*u-r*m,this.z=r*h-l*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lm.prototype.isVector3=!0;let ie=Lm;const Th=new ie,gx=new vo,Um=class Um{constructor(e,i,r,l,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,u,h,m,p)}set(e,i,r,l,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],_=r[4],v=r[7],g=r[2],S=r[5],E=r[8],C=l[0],b=l[3],y=l[6],P=l[1],z=l[4],w=l[7],L=l[2],U=l[5],F=l[8];return c[0]=u*C+h*P+m*L,c[3]=u*b+h*z+m*U,c[6]=u*y+h*w+m*F,c[1]=p*C+_*P+v*L,c[4]=p*b+_*z+v*U,c[7]=p*y+_*w+v*F,c[2]=g*C+S*P+E*L,c[5]=g*b+S*z+E*U,c[8]=g*y+S*w+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*u*_-i*h*p-r*c*_+r*h*m+l*c*p-l*u*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*u-h*p,g=h*m-_*c,S=p*c-u*m,E=i*v+r*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(l*p-_*r)*C,e[2]=(h*r-l*u)*C,e[3]=g*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=S*C,e[7]=(r*m-p*i)*C,e[8]=(u*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-l*p,l*m,-l*(-p*u+m*h)+h+i,0,0,1),this}scale(e,i){return lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ah.makeScale(e,i)),this}rotate(e){return lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ah.makeRotation(-e)),this}translate(e,i){return lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Um.prototype.isMatrix3=!0;let ct=Um;const Ah=new ct,vx=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X3(){const a={enabled:!0,workingColorSpace:Gu,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Gt&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Gt&&(l.r=co(l.r),l.g=co(l.g),l.b=co(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_r?Vu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Gu]:{primaries:e,whitePoint:r,transfer:Vu,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),a}const Tt=X3();function La(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function co(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Xs;class W3{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Xs===void 0&&(Xs=Xu("canvas")),Xs.width=e.width,Xs.height=e.height;const l=Xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Xs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=La(c[u]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(La(i[r]/255)*255):i[r]=La(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q3=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q3++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,h=l.length;u<h;u++)l[u].isDataTexture?c.push(Rh(l[u].image)):c.push(Rh(l[u]))}else c=Rh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Rh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?W3.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Y3=0;const Ch=new ie;class Xn extends ls{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Da,l=Da,c=Gn,u=es,h=Gi,m=wi,p=Xn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y3++}),this.uuid=Ll(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==LS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ep:e.x=e.x-Math.floor(e.x);break;case Da:e.x=e.x<0?0:1;break;case Tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ep:e.y=e.y-Math.floor(e.y);break;case Da:e.y=e.y<0?0:1;break;case Tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=LS;Xn.DEFAULT_ANISOTROPY=1;const Om=class Om{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*l+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*l+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*l+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],C=m[2],b=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,w=(S+1)/2,L=(y+1)/2,U=(_+g)/4,F=(v+C)/4,T=(E+b)/4;return z>w&&z>L?z<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(z),l=U/r,c=F/r):w>L?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=U/l,c=T/l):L<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),r=F/c,l=T/c),this.set(r,l,c,i),this}let P=Math.sqrt((b-E)*(b-E)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(b-E)/P,this.y=(v-C)/P,this.z=(g-_)/P,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Om.prototype.isVector4=!0;let un=Om;class j3 extends ls{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Xn(l),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new wm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends j3{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class GS extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z3 extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yu=class Yu{constructor(e,i,r,l,c,u,h,m,p,_,v,g,S,E,C,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,u,h,m,p,_,v,g,S,E,C,b)}set(e,i,r,l,c,u,h,m,p,_,v,g,S,E,C,b){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=C,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ws.setFromMatrixColumn(e,0).length(),c=1/Ws.setFromMatrixColumn(e,1).length(),u=1/Ws.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,S=u*v,E=h*_,C=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-C*p,i[9]=-h*m,i[2]=C-g*p,i[6]=E+S*p,i[10]=u*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,C=p*v;i[0]=g+C*h,i[4]=E*h-S,i[8]=u*p,i[1]=u*v,i[5]=u*_,i[9]=-h,i[2]=S*h-E,i[6]=C+g*h,i[10]=u*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,C=p*v;i[0]=g-C*h,i[4]=-u*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=u*_,i[9]=C-g*h,i[2]=-u*p,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const g=u*_,S=u*v,E=h*_,C=h*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+C,i[1]=m*v,i[5]=C*p+g,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const g=u*m,S=u*p,E=h*m,C=h*p;i[0]=m*_,i[4]=C-g*v,i[8]=E*v+S,i[1]=v,i[5]=u*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-C*v}else if(e.order==="XZY"){const g=u*m,S=u*p,E=h*m,C=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+C,i[5]=u*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K3,e,Q3)}lookAt(e,i,r){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),dr.crossVectors(r,pi),dr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),dr.crossVectors(r,pi)),dr.normalize(),eu.crossVectors(pi,dr),l[0]=dr.x,l[4]=eu.x,l[8]=pi.x,l[1]=dr.y,l[5]=eu.y,l[9]=pi.y,l[2]=dr.z,l[6]=eu.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],_=r[1],v=r[5],g=r[9],S=r[13],E=r[2],C=r[6],b=r[10],y=r[14],P=r[3],z=r[7],w=r[11],L=r[15],U=l[0],F=l[4],T=l[8],I=l[12],k=l[1],H=l[5],K=l[9],ue=l[13],fe=l[2],q=l[6],N=l[10],V=l[14],$=l[3],de=l[7],Te=l[11],D=l[15];return c[0]=u*U+h*k+m*fe+p*$,c[4]=u*F+h*H+m*q+p*de,c[8]=u*T+h*K+m*N+p*Te,c[12]=u*I+h*ue+m*V+p*D,c[1]=_*U+v*k+g*fe+S*$,c[5]=_*F+v*H+g*q+S*de,c[9]=_*T+v*K+g*N+S*Te,c[13]=_*I+v*ue+g*V+S*D,c[2]=E*U+C*k+b*fe+y*$,c[6]=E*F+C*H+b*q+y*de,c[10]=E*T+C*K+b*N+y*Te,c[14]=E*I+C*ue+b*V+y*D,c[3]=P*U+z*k+w*fe+L*$,c[7]=P*F+z*H+w*q+L*de,c[11]=P*T+z*K+w*N+L*Te,c[15]=P*I+z*ue+w*V+L*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],C=e[7],b=e[11],y=e[15],P=m*S-p*g,z=h*S-p*v,w=h*g-m*v,L=u*S-p*_,U=u*g-m*_,F=u*v-h*_;return i*(C*P-b*z+y*w)-r*(E*P-b*L+y*U)+l*(E*z-C*L+y*F)-c*(E*w-C*U+b*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return i*(u*_-h*p)-r*(c*_-h*m)+l*(c*p-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],C=e[13],b=e[14],y=e[15],P=i*h-r*u,z=i*m-l*u,w=i*p-c*u,L=r*m-l*h,U=r*p-c*h,F=l*p-c*m,T=_*C-v*E,I=_*b-g*E,k=_*y-S*E,H=v*b-g*C,K=v*y-S*C,ue=g*y-S*b,fe=P*ue-z*K+w*H+L*k-U*I+F*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/fe;return e[0]=(h*ue-m*K+p*H)*q,e[1]=(l*K-r*ue-c*H)*q,e[2]=(C*F-b*U+y*L)*q,e[3]=(g*U-v*F-S*L)*q,e[4]=(m*k-u*ue-p*I)*q,e[5]=(i*ue-l*k+c*I)*q,e[6]=(b*w-E*F-y*z)*q,e[7]=(_*F-g*w+S*z)*q,e[8]=(u*K-h*k+p*T)*q,e[9]=(r*k-i*K-c*T)*q,e[10]=(E*U-C*w+y*P)*q,e[11]=(v*w-_*U-S*P)*q,e[12]=(h*I-u*H-m*T)*q,e[13]=(i*H-r*I+l*T)*q,e[14]=(C*z-E*L-b*P)*q,e[15]=(_*L-v*z+g*P)*q,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*u,0,p*m-l*h,_*m+l*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,u){return this.set(1,r,c,0,e,1,u,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,p=c+c,_=u+u,v=h+h,g=c*p,S=c*_,E=c*v,C=u*_,b=u*v,y=h*v,P=m*p,z=m*_,w=m*v,L=r.x,U=r.y,F=r.z;return l[0]=(1-(C+y))*L,l[1]=(S+w)*L,l[2]=(E-z)*L,l[3]=0,l[4]=(S-w)*U,l[5]=(1-(g+y))*U,l[6]=(b+P)*U,l[7]=0,l[8]=(E+z)*F,l[9]=(b-P)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Ws.set(l[0],l[1],l[2]).length();const h=Ws.set(l[4],l[5],l[6]).length(),m=Ws.set(l[8],l[9],l[10]).length();c<0&&(u=-u),Ii.copy(this);const p=1/u,_=1/h,v=1/m;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,i.setFromRotationMatrix(Ii),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,l,c,u,h=ta,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(r-l),g=(i+e)/(i-e),S=(r+l)/(r-l);let E,C;if(m)E=c/(u-c),C=u*c/(u-c);else if(h===ta)E=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(h===ku)E=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,u,h=ta,m=!1){const p=this.elements,_=2/(i-e),v=2/(r-l),g=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,C;if(m)E=1/(u-c),C=u/(u-c);else if(h===ta)E=-2/(u-c),C=-(u+c)/(u-c);else if(h===ku)E=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Yu.prototype.isMatrix4=!0;let fn=Yu;const Ws=new ie,Ii=new fn,K3=new ie(0,0,0),Q3=new ie(1,1,1),dr=new ie,eu=new ie,pi=new ie,xx=new fn,yx=new vo;class os{constructor(e=0,i=0,r=0,l=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],u=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return xx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return yx.setFromEuler(this),this.setFromQuaternion(yx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class VS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J3=0;const Sx=new ie,qs=new vo,Ea=new fn,tu=new ie,hl=new ie,$3=new ie,eR=new vo,bx=new ie(1,0,0),Mx=new ie(0,1,0),Ex=new ie(0,0,1),Tx={type:"added"},tR={type:"removed"},Ys={type:"childadded",child:null},wh={type:"childremoved",child:null};class Wn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J3++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ie,i=new os,r=new vo,l=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ct}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new VS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return qs.setFromAxisAngle(e,i),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,i){return qs.setFromAxisAngle(e,i),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(bx,e)}rotateY(e){return this.rotateOnAxis(Mx,e)}rotateZ(e){return this.rotateOnAxis(Ex,e)}translateOnAxis(e,i){return Sx.copy(e).applyQuaternion(this.quaternion),this.position.add(Sx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(bx,e)}translateY(e){return this.translateOnAxis(Mx,e)}translateZ(e){return this.translateOnAxis(Ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tu.copy(e):tu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(hl,tu,this.up):Ea.lookAt(tu,hl,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),qs.setFromRotationMatrix(Ea),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tx),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(tR),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tx),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,$3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,eR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new ie(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nu extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nR={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const b=i.getJointPose(C,r),y=this._getHandJoint(p,C);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(nR)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new nu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const kS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},iu={h:0,s:0,l:0};function Nh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class St{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=k3(e,1),i=At(i,0,1),r=At(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Nh(u,c,e+1/3),this.g=Nh(u,c,e),this.b=Nh(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ri){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=l[1],h=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ri){const r=kS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Tt.workingToColorSpace(Hn.copy(this),e),Math.round(At(Hn.r*255,0,255))*65536+Math.round(At(Hn.g*255,0,255))*256+Math.round(At(Hn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,c=Hn.b,u=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=_<=.5?v/(u+h):v/(2-u-h),u){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ri){Tt.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==Ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(iu);const r=Eh(hr.h,iu.h,i),l=Eh(hr.s,iu.s,i),c=Eh(hr.l,iu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new St;St.NAMES=kS;class iR extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new ie,Ta=new ie,Lh=new ie,Aa=new ie,js=new ie,Zs=new ie,Ax=new ie,Uh=new ie,Oh=new ie,Ph=new ie,Ih=new un,zh=new un,Fh=new un;class Bi{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),zi.subVectors(e,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){zi.subVectors(l,i),Ta.subVectors(r,i),Lh.subVectors(e,i);const u=zi.dot(zi),h=zi.dot(Ta),m=zi.dot(Lh),p=Ta.dot(Ta),_=Ta.dot(Lh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(u*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,r,l,c,u,h,m){return this.getBarycoord(e,i,r,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(u,Aa.y),m.addScaledVector(h,Aa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,u){return Ih.setScalar(0),zh.setScalar(0),Fh.setScalar(0),Ih.fromBufferAttribute(e,i),zh.fromBufferAttribute(e,r),Fh.fromBufferAttribute(e,l),u.setScalar(0),u.addScaledVector(Ih,c.x),u.addScaledVector(zh,c.y),u.addScaledVector(Fh,c.z),u}static isFrontFacing(e,i,r,l){return zi.subVectors(r,i),Ta.subVectors(e,i),zi.cross(Ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),zi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let u,h;js.subVectors(l,r),Zs.subVectors(c,r),Uh.subVectors(e,r);const m=js.dot(Uh),p=Zs.dot(Uh);if(m<=0&&p<=0)return i.copy(r);Oh.subVectors(e,l);const _=js.dot(Oh),v=Zs.dot(Oh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),i.copy(r).addScaledVector(js,u);Ph.subVectors(e,c);const S=js.dot(Ph),E=Zs.dot(Ph);if(E>=0&&S<=E)return i.copy(c);const C=S*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Zs,h);const b=_*E-S*v;if(b<=0&&v-_>=0&&S-E>=0)return Ax.subVectors(c,l),h=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(Ax,h);const y=1/(b+C+g);return u=C*y,h=g*y,i.copy(r).addScaledVector(js,u).addScaledVector(Zs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ul{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(c,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),au.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),au.copy(r.boundingBox)),au.applyMatrix4(e.matrixWorld),this.union(au)}const l=e.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),ru.subVectors(this.max,pl),Ks.subVectors(e.a,pl),Qs.subVectors(e.b,pl),Js.subVectors(e.c,pl),pr.subVectors(Qs,Ks),mr.subVectors(Js,Qs),Wr.subVectors(Ks,Js);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Wr.z,Wr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Wr.z,0,-Wr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Wr.y,Wr.x,0];return!Bh(i,Ks,Qs,Js,ru)||(i=[1,0,0,0,1,0,0,0,1],!Bh(i,Ks,Qs,Js,ru))?!1:(su.crossVectors(pr,mr),i=[su.x,su.y,su.z],Bh(i,Ks,Qs,Js,ru))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Fi=new ie,au=new Ul,Ks=new ie,Qs=new ie,Js=new ie,pr=new ie,mr=new ie,Wr=new ie,pl=new ie,ru=new ie,su=new ie,qr=new ie;function Bh(a,e,i,r,l){for(let c=0,u=a.length-3;c<=u;c+=3){qr.fromArray(a,c);const h=l.x*Math.abs(qr.x)+l.y*Math.abs(qr.y)+l.z*Math.abs(qr.z),m=e.dot(qr),p=i.dot(qr),_=r.dot(qr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new ie,ou=new Ut;let aR=0;class En extends ls{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aR++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=dx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ou.fromBufferAttribute(this,i),ou.applyMatrix3(e),this.setXY(i,ou.x,ou.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=dl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=dl(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=dl(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=dl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=dl(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class XS extends En{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class WS extends En{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vi extends En{constructor(e,i,r){super(new Float32Array(e),i,r)}}const rR=new Ul,ml=new ie,Hh=new ie;class Ol{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):rR.setFromPoints(e).getCenter(r);let l=0;for(let c=0,u=e.length;c<u;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ml,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(Hh)),this.expandByPoint(ml.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sR=0;const Ai=new fn,Gh=new Wn,$s=new ie,mi=new Ul,gl=new Ul,wn=new ie;class ti extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B3(e)?WS:XS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const u=e[l];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];gl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,gl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,gl.max),mi.expandByPoint(wn)):(mi.expandByPoint(gl.min),mi.expandByPoint(gl.max))}mi.getCenter(r);let l=0;for(let c=0,u=e.count;c<u;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(wn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)wn.fromBufferAttribute(h,p),m&&($s.fromBufferAttribute(e,p),wn.add($s)),l=Math.max(l,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new En(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ie,m[T]=new ie;const p=new ie,_=new ie,v=new ie,g=new Ut,S=new Ut,E=new Ut,C=new ie,b=new ie;function y(T,I,k){p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,I),v.fromBufferAttribute(r,k),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,I),E.fromBufferAttribute(c,k),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(H),h[T].add(C),h[I].add(C),h[k].add(C),m[T].add(b),m[I].add(b),m[k].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,I=P.length;T<I;++T){const k=P[T],H=k.start,K=k.count;for(let ue=H,fe=H+K;ue<fe;ue+=3)y(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const z=new ie,w=new ie,L=new ie,U=new ie;function F(T){L.fromBufferAttribute(l,T),U.copy(L);const I=h[T];z.copy(I),z.sub(L.multiplyScalar(L.dot(I))).normalize(),w.crossVectors(U,I);const H=w.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,H)}for(let T=0,I=P.length;T<I;++T){const k=P[T],H=k.start,K=k.count;for(let ue=H,fe=H+K;ue<fe;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new En(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const l=new ie,c=new ie,u=new ie,h=new ie,m=new ie,p=new ie,_=new ie,v=new ie;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),C=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),_.subVectors(u,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),h.add(_),m.add(_),p.add(_),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),u.fromBufferAttribute(i,g+2),_.subVectors(u,c),v.subVectors(l,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?S=m[C]*h.data.stride+h.offset:S=m[C]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new En(g,_,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oR=0;class _o extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=oo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mp,this.blendDst=gp,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mp&&(r.blendSrc=this.blendSrc),this.blendDst!==gp&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=l(e.textures),u=l(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ut().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new ie,Vh=new ie,lu=new ie,gr=new ie,kh=new ie,cu=new ie,Xh=new ie;class Dm{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Vh.copy(e).add(i).multiplyScalar(.5),lu.copy(i).sub(e).normalize(),gr.copy(this.origin).sub(Vh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(lu),h=gr.dot(this.direction),m=-gr.dot(lu),p=gr.lengthSq(),_=Math.abs(1-u*u);let v,g,S,E;if(_>0)if(v=u*m-h,g=u*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const C=1/_;v*=C,g*=C,S=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Vh).addScaledVector(lu,g),S}intersectSphere(e,i){Ca.subVectors(e.center,this.origin);const r=Ca.dot(this.direction),l=Ca.dot(Ca)-r*r,c=e.radius*e.radius;if(l>c)return null;const u=Math.sqrt(c-l),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||c>l||((c>r||isNaN(r))&&(r=c),(u<l||isNaN(l))&&(l=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,r,l,c){kh.subVectors(i,e),cu.subVectors(r,e),Xh.crossVectors(kh,cu);let u=this.direction.dot(Xh),h;if(u>0){if(l)return null;h=1}else if(u<0)h=-1,u=-u;else return null;gr.subVectors(this.origin,e);const m=h*this.direction.dot(cu.crossVectors(gr,cu));if(m<0)return null;const p=h*this.direction.dot(kh.cross(gr));if(p<0||m+p>u)return null;const _=-h*gr.dot(Xh);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qS extends _o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=ES,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rx=new fn,Yr=new Dm,uu=new Ol,Cx=new ie,fu=new ie,du=new ie,hu=new ie,Wh=new ie,pu=new ie,wx=new ie,mu=new ie;class za extends Wn{constructor(e=new ti,i=new qS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){pu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Wh.fromBufferAttribute(v,e),u?pu.addScaledVector(Wh,_):pu.addScaledVector(Wh.sub(i),_))}i.add(pu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(uu.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(uu,Cx)===null||Yr.origin.distanceToSquared(Cx)>(e.far-e.near)**2))&&(Rx.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(Rx),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Yr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const b=g[E],y=u[b.materialIndex],P=Math.max(b.start,S.start),z=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let w=P,L=z;w<L;w+=3){const U=h.getX(w),F=h.getX(w+1),T=h.getX(w+2);l=gu(this,y,e,r,p,_,v,U,F,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let b=E,y=C;b<y;b+=3){const P=h.getX(b),z=h.getX(b+1),w=h.getX(b+2);l=gu(this,u,e,r,p,_,v,P,z,w),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const b=g[E],y=u[b.materialIndex],P=Math.max(b.start,S.start),z=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let w=P,L=z;w<L;w+=3){const U=w,F=w+1,T=w+2;l=gu(this,y,e,r,p,_,v,U,F,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let b=E,y=C;b<y;b+=3){const P=b,z=b+1,w=b+2;l=gu(this,u,e,r,p,_,v,P,z,w),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function lR(a,e,i,r,l,c,u,h){let m;if(e.side===ei?m=r.intersectTriangle(u,c,l,!0,h):m=r.intersectTriangle(l,c,u,e.side===Mr,h),m===null)return null;mu.copy(h),mu.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(mu);return p<i.near||p>i.far?null:{distance:p,point:mu.clone(),object:a}}function gu(a,e,i,r,l,c,u,h,m,p){a.getVertexPosition(h,fu),a.getVertexPosition(m,du),a.getVertexPosition(p,hu);const _=lR(a,e,i,r,fu,du,hu,wx);if(_){const v=new ie;Bi.getBarycoord(wx,fu,du,hu,v),l&&(_.uv=Bi.getInterpolatedAttribute(l,h,m,p,v,new Ut)),c&&(_.uv1=Bi.getInterpolatedAttribute(c,h,m,p,v,new Ut)),u&&(_.normal=Bi.getInterpolatedAttribute(u,h,m,p,v,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ie,materialIndex:0};Bi.getNormal(fu,du,hu,g.normal),_.face=g,_.barycoord=v}return _}class cR extends Xn{constructor(e=null,i=1,r=1,l,c,u,h,m,p=Pn,_=Pn,v,g){super(null,u,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qh=new ie,uR=new ie,fR=new ct;class Kr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=qh.subVectors(r,i).cross(uR.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(qh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(l,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||fR.getNormalMatrix(e),l=this.coplanarPoint(qh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Ol,dR=new Ut(.5,.5),vu=new ie;class YS{constructor(e=new Kr,i=new Kr,r=new Kr,l=new Kr,c=new Kr,u=new Kr){this.planes=[e,i,r,l,c,u]}set(e,i,r,l,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta,r=!1){const l=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],C=c[9],b=c[10],y=c[11],P=c[12],z=c[13],w=c[14],L=c[15];if(l[0].setComponents(p-u,S-_,y-E,L-P).normalize(),l[1].setComponents(p+u,S+_,y+E,L+P).normalize(),l[2].setComponents(p+h,S+v,y+C,L+z).normalize(),l[3].setComponents(p-h,S-v,y-C,L-z).normalize(),r)l[4].setComponents(m,g,b,w).normalize(),l[5].setComponents(p-m,S-g,y-b,L-w).normalize();else if(l[4].setComponents(p-m,S-g,y-b,L-w).normalize(),i===ta)l[5].setComponents(p+m,S+g,y+b,L+w).normalize();else if(i===ku)l[5].setComponents(m,g,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const i=dR.distanceTo(e.center);return jr.radius=.7071067811865476+i,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(vu.x=l.normal.x>0?e.max.x:e.min.x,vu.y=l.normal.y>0?e.max.y:e.min.y,vu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hR extends _o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new ie,qu=new ie,Dx=new fn,vl=new Dm,_u=new Ol,Yh=new ie,Nx=new ie;class pR extends Wn{constructor(e=new ti,i=new hR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Wu.fromBufferAttribute(i,l-1),qu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wu.distanceTo(qu);e.setAttribute("lineDistance",new Vi(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(l),_u.radius+=c,e.ray.intersectsSphere(_u)===!1)return;Dx.copy(l).invert(),vl.copy(e.ray).applyMatrix4(Dx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let C=S,b=E-1;C<b;C+=p){const y=_.getX(C),P=_.getX(C+1),z=xu(this,e,vl,m,y,P,C);z&&i.push(z)}if(this.isLineLoop){const C=_.getX(E-1),b=_.getX(S),y=xu(this,e,vl,m,C,b,E-1);y&&i.push(y)}}else{const S=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let C=S,b=E-1;C<b;C+=p){const y=xu(this,e,vl,m,C,C+1,C);y&&i.push(y)}if(this.isLineLoop){const C=xu(this,e,vl,m,E-1,S,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function xu(a,e,i,r,l,c,u){const h=a.geometry.attributes.position;if(Wu.fromBufferAttribute(h,l),qu.fromBufferAttribute(h,c),i.distanceSqToSegment(Wu,qu,Yh,Nx)>r)return;Yh.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Yh);if(!(p<e.near||p>e.far))return{distance:p,point:Nx.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const Lx=new ie,Ux=new ie;class mR extends pR{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Lx.fromBufferAttribute(i,l),Ux.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Lx.distanceTo(Ux);e.setAttribute("lineDistance",new Vi(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gR extends _o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ox=new fn,im=new Dm,yu=new Ol,Su=new ie;class Px extends Wn{constructor(e=new ti,i=new gR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yu.copy(r.boundingSphere),yu.applyMatrix4(l),yu.radius+=c,e.ray.intersectsSphere(yu)===!1)return;Ox.copy(l).invert(),im.copy(e.ray).applyMatrix4(Ox);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let E=g,C=S;E<C;E++){const b=p.getX(E);Su.fromBufferAttribute(v,b),Ix(Su,b,m,l,e,i,this)}}else{const g=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let E=g,C=S;E<C;E++)Su.fromBufferAttribute(v,E),Ix(Su,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ix(a,e,i,r,l,c,u){const h=im.distanceSqToPoint(a);if(h<i){const m=new ie;im.closestPointToPoint(a,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class jS extends Xn{constructor(e=[],i=rs,r,l,c,u,h,m,p,_){super(e,i,r,l,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class po extends Xn{constructor(e,i,r=aa,l,c,u,h=Pn,m=Pn,p,_=Ia,v=1){if(_!==Ia&&_!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,u,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class vR extends po{constructor(e,i=aa,r=rs,l,c,u=Pn,h=Pn,m,p=Ia){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,r,l,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ZS extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pl extends ti{constructor(e=1,i=1,r=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:u};const h=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,l,u,2),E("x","z","y",1,-1,e,r,-i,l,u,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Vi(p,3)),this.setAttribute("normal",new Vi(_,3)),this.setAttribute("uv",new Vi(v,2));function E(C,b,y,P,z,w,L,U,F,T,I){const k=w/F,H=L/T,K=w/2,ue=L/2,fe=U/2,q=F+1,N=T+1;let V=0,$=0;const de=new ie;for(let Te=0;Te<N;Te++){const D=Te*H-ue;for(let W=0;W<q;W++){const he=W*k-K;de[C]=he*P,de[b]=D*z,de[y]=fe,p.push(de.x,de.y,de.z),de[C]=0,de[b]=0,de[y]=U>0?1:-1,_.push(de.x,de.y,de.z),v.push(W/F),v.push(1-Te/T),V+=1}}for(let Te=0;Te<T;Te++)for(let D=0;D<F;D++){const W=g+D+q*Te,he=g+D+q*(Te+1),_e=g+(D+1)+q*(Te+1),Ae=g+(D+1)+q*Te;m.push(W,he,Ae),m.push(he,_e,Ae),$+=6}h.addGroup(S,$,I),S+=$,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ef extends ti{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=i/m,S=[],E=[],C=[],b=[];for(let y=0;y<_;y++){const P=y*g-u;for(let z=0;z<p;z++){const w=z*v-c;E.push(w,-P,0),C.push(0,0,1),b.push(z/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<h;P++){const z=P+p*y,w=P+p*(y+1),L=P+1+p*(y+1),U=P+1+p*y;S.push(z,w,U),S.push(w,L,U)}this.setIndex(S),this.setAttribute("position",new Vi(E,3)),this.setAttribute("normal",new Vi(C,3)),this.setAttribute("uv",new Vi(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.width,e.height,e.widthSegments,e.heightSegments)}}function mo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const l=a[i][r];if(zx(l))l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(zx(l[0])){const c=[];for(let u=0,h=l.length;u<h;u++)c[u]=l[u].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function kn(a){const e={};for(let i=0;i<a.length;i++){const r=mo(a[i]);for(const l in r)e[l]=r[l]}return e}function zx(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function _R(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function KS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const xR={clone:mo,merge:kn};var yR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends _o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yR,this.fragmentShader=SR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=_R(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?i.uniforms[l]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[l]={type:"m4",value:u.toArray()}:i.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new St().setHex(l.value);break;case"v2":this.uniforms[r].value=new Ut().fromArray(l.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(l.value);break;case"v4":this.uniforms[r].value=new un().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(l.value);break;case"m4":this.uniforms[r].value=new fn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bR extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MR extends _o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ER extends _o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bu=new ie,Mu=new vo,Ki=new ie;class QS extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bu,Mu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Mu,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(bu,Mu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Mu,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vr=new ie,Fx=new Ut,Bx=new Ut;class Ci extends QS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nm*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,i){return this.getViewBounds(e,Fx,Bx),i.subVectors(Bx,Fx)}setViewOffset(e,i,r,l,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Mh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*l/m,i-=u.offsetY*r/p,l*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class JS extends QS{constructor(e=-1,i=1,r=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const eo=-90,to=1;class TR extends Wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(eo,to,e,i);l.layers=this.layers,this.add(l);const c=new Ci(eo,to,e,i);c.layers=this.layers,this.add(c);const u=new Ci(eo,to,e,i);u.layers=this.layers,this.add(u);const h=new Ci(eo,to,e,i);h.layers=this.layers,this.add(h);const m=new Ci(eo,to,e,i);m.layers=this.layers,this.add(m);const p=new Ci(eo,to,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,u,h,m]=i;for(const p of i)this.remove(p);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ku)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class AR extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class RR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Pm=class Pm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Pm.prototype.isMatrix2=!0;let Hx=Pm;function Gx(a,e,i,r){const l=CR(r);switch(i){case zS:return a*e;case BS:return a*e/l.components*l.byteLength;case Em:return a*e/l.components*l.byteLength;case ss:return a*e*2/l.components*l.byteLength;case Tm:return a*e*2/l.components*l.byteLength;case FS:return a*e*3/l.components*l.byteLength;case Gi:return a*e*4/l.components*l.byteLength;case Am:return a*e*4/l.components*l.byteLength;case Nu:case Lu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Ou:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rp:case wp:return Math.max(a,16)*Math.max(e,8)/4;case Ap:case Cp:return Math.max(a,8)*Math.max(e,8)/2;case Dp:case Np:case Up:case Op:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Lp:case Bu:case Pp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case kp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Xp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case qp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Yp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case jp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Zp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Kp:case Qp:case Jp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case $p:case em:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Hu:case tm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CR(a){switch(a){case wi:case US:return{byteLength:1,components:1};case Rl:case OS:case Pa:return{byteLength:2,components:1};case bm:case Mm:return{byteLength:2,components:4};case aa:case Sm:case ea:return{byteLength:4,components:1};case PS:case IS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ym}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ym);function $S(){let a=null,e=!1,i=null,r=null;function l(c,u){i(c,u),r=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(l),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function wR(a){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const _=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],C=v[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,v[g]=C)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const C=v[S];a.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:u}}var DR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NR=`#ifdef USE_ALPHAHASH
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
#endif`,LR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IR=`#ifdef USE_AOMAP
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
#endif`,zR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FR=`#ifdef USE_BATCHING
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
#endif`,BR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kR=`#ifdef USE_IRIDESCENCE
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
#endif`,XR=`#ifdef USE_BUMPMAP
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
#endif`,WR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$R=`#define PI 3.141592653589793
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
} // validated`,eC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tC=`vec3 transformedNormal = objectNormal;
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
#endif`,nC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sC="gl_FragColor = linearToOutputTexel( gl_FragColor );",oC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lC=`#ifdef USE_ENVMAP
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
#endif`,cC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uC=`#ifdef USE_ENVMAP
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
#endif`,fC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dC=`#ifdef USE_ENVMAP
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
#endif`,hC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vC=`#ifdef USE_GRADIENTMAP
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
}`,_C=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bC=`#ifdef USE_ENVMAP
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
#endif`,MC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RC=`PhysicalMaterial material;
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
#endif`,CC=`uniform sampler2D dfgLUT;
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
}`,wC=`
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
#endif`,DC=`#if defined( RE_IndirectDiffuse )
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
#endif`,NC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,UC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HC=`#if defined( USE_POINTS_UV )
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
#endif`,GC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qC=`#ifdef USE_MORPHTARGETS
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
#endif`,YC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$C=`#ifdef USE_NORMALMAP
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
#endif`,ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mw=`float getShadowMask() {
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
}`,gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vw=`#ifdef USE_SKINNING
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
#endif`,_w=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xw=`#ifdef USE_SKINNING
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
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ew=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#ifdef USE_TRANSMISSION
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`uniform sampler2D t2D;
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`#include <common>
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
}`,zw=`#if DEPTH_PACKING == 3200
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
}`,Fw=`#define DISTANCE
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
}`,Bw=`#define DISTANCE
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`uniform float scale;
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
}`,kw=`uniform vec3 diffuse;
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
}`,Xw=`#include <common>
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
}`,Ww=`uniform vec3 diffuse;
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
}`,qw=`#define LAMBERT
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
}`,Yw=`#define LAMBERT
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
}`,jw=`#define MATCAP
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
}`,Zw=`#define MATCAP
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
}`,Kw=`#define NORMAL
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
}`,Qw=`#define NORMAL
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
}`,Jw=`#define PHONG
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
}`,$w=`#define PHONG
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
}`,eD=`#define STANDARD
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
}`,tD=`#define STANDARD
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
}`,nD=`#define TOON
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
}`,iD=`#define TOON
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
}`,aD=`uniform float size;
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
}`,rD=`uniform vec3 diffuse;
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
}`,sD=`#include <common>
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
}`,oD=`uniform vec3 color;
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
}`,lD=`uniform float rotation;
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
}`,cD=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:DR,alphahash_pars_fragment:NR,alphamap_fragment:LR,alphamap_pars_fragment:UR,alphatest_fragment:OR,alphatest_pars_fragment:PR,aomap_fragment:IR,aomap_pars_fragment:zR,batching_pars_vertex:FR,batching_vertex:BR,begin_vertex:HR,beginnormal_vertex:GR,bsdfs:VR,iridescence_fragment:kR,bumpmap_pars_fragment:XR,clipping_planes_fragment:WR,clipping_planes_pars_fragment:qR,clipping_planes_pars_vertex:YR,clipping_planes_vertex:jR,color_fragment:ZR,color_pars_fragment:KR,color_pars_vertex:QR,color_vertex:JR,common:$R,cube_uv_reflection_fragment:eC,defaultnormal_vertex:tC,displacementmap_pars_vertex:nC,displacementmap_vertex:iC,emissivemap_fragment:aC,emissivemap_pars_fragment:rC,colorspace_fragment:sC,colorspace_pars_fragment:oC,envmap_fragment:lC,envmap_common_pars_fragment:cC,envmap_pars_fragment:uC,envmap_pars_vertex:fC,envmap_physical_pars_fragment:bC,envmap_vertex:dC,fog_vertex:hC,fog_pars_vertex:pC,fog_fragment:mC,fog_pars_fragment:gC,gradientmap_pars_fragment:vC,lightmap_pars_fragment:_C,lights_lambert_fragment:xC,lights_lambert_pars_fragment:yC,lights_pars_begin:SC,lights_toon_fragment:MC,lights_toon_pars_fragment:EC,lights_phong_fragment:TC,lights_phong_pars_fragment:AC,lights_physical_fragment:RC,lights_physical_pars_fragment:CC,lights_fragment_begin:wC,lights_fragment_maps:DC,lights_fragment_end:NC,lightprobes_pars_fragment:LC,logdepthbuf_fragment:UC,logdepthbuf_pars_fragment:OC,logdepthbuf_pars_vertex:PC,logdepthbuf_vertex:IC,map_fragment:zC,map_pars_fragment:FC,map_particle_fragment:BC,map_particle_pars_fragment:HC,metalnessmap_fragment:GC,metalnessmap_pars_fragment:VC,morphinstance_vertex:kC,morphcolor_vertex:XC,morphnormal_vertex:WC,morphtarget_pars_vertex:qC,morphtarget_vertex:YC,normal_fragment_begin:jC,normal_fragment_maps:ZC,normal_pars_fragment:KC,normal_pars_vertex:QC,normal_vertex:JC,normalmap_pars_fragment:$C,clearcoat_normal_fragment_begin:ew,clearcoat_normal_fragment_maps:tw,clearcoat_pars_fragment:nw,iridescence_pars_fragment:iw,opaque_fragment:aw,packing:rw,premultiplied_alpha_fragment:sw,project_vertex:ow,dithering_fragment:lw,dithering_pars_fragment:cw,roughnessmap_fragment:uw,roughnessmap_pars_fragment:fw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:hw,shadowmap_vertex:pw,shadowmask_pars_fragment:mw,skinbase_vertex:gw,skinning_pars_vertex:vw,skinning_vertex:_w,skinnormal_vertex:xw,specularmap_fragment:yw,specularmap_pars_fragment:Sw,tonemapping_fragment:bw,tonemapping_pars_fragment:Mw,transmission_fragment:Ew,transmission_pars_fragment:Tw,uv_pars_fragment:Aw,uv_pars_vertex:Rw,uv_vertex:Cw,worldpos_vertex:ww,background_vert:Dw,background_frag:Nw,backgroundCube_vert:Lw,backgroundCube_frag:Uw,cube_vert:Ow,cube_frag:Pw,depth_vert:Iw,depth_frag:zw,distance_vert:Fw,distance_frag:Bw,equirect_vert:Hw,equirect_frag:Gw,linedashed_vert:Vw,linedashed_frag:kw,meshbasic_vert:Xw,meshbasic_frag:Ww,meshlambert_vert:qw,meshlambert_frag:Yw,meshmatcap_vert:jw,meshmatcap_frag:Zw,meshnormal_vert:Kw,meshnormal_frag:Qw,meshphong_vert:Jw,meshphong_frag:$w,meshphysical_vert:eD,meshphysical_frag:tD,meshtoon_vert:nD,meshtoon_frag:iD,points_vert:aD,points_frag:rD,shadow_vert:sD,shadow_frag:oD,sprite_vert:lD,sprite_frag:cD},Fe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ji={basic:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:kn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:kn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:kn([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:kn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:kn([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:kn([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:kn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:kn([Fe.lights,Fe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ji.physical={uniforms:kn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Eu={r:0,b:0,g:0},uD=new fn,e1=new ct;e1.set(-1,0,0,0,1,0,0,0,1);function fD(a,e,i,r,l,c){const u=new St(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(P){let z=P.isScene===!0?P.background:null;if(z&&z.isTexture){const w=P.backgroundBlurriness>0;z=e.get(z,w)}return z}function E(P){let z=!1;const w=S(P);w===null?b(u,h):w&&w.isColor&&(b(w,1),z=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(P,z){const w=S(z);w&&(w.isCubeTexture||w.mapping===$u)?(p===void 0&&(p=new za(new Pl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:mo(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uD.makeRotationFromEuler(z.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(e1),p.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Gt,(_!==w||v!==w.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=w,v=w.version,g=a.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new za(new ef(2,2),new gi({name:"BackgroundMaterial",uniforms:mo(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,g=a.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,z){P.getRGB(Eu,KS(a)),i.buffers.color.setClear(Eu.r,Eu.g,Eu.b,z,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,z=1){u.set(P),h=z,b(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,b(u,h)},render:E,addToRenderList:C,dispose:y}}function dD(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,u=!1;function h(H,K,ue,fe,q){let N=!1;const V=v(H,fe,ue,K);c!==V&&(c=V,p(c.object)),N=S(H,fe,ue,q),N&&E(H,fe,ue,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(N||u)&&(u=!1,w(H,K,ue,fe),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function p(H){return a.bindVertexArray(H)}function _(H){return a.deleteVertexArray(H)}function v(H,K,ue,fe){const q=fe.wireframe===!0;let N=r[K.id];N===void 0&&(N={},r[K.id]=N);const V=H.isInstancedMesh===!0?H.id:0;let $=N[V];$===void 0&&($={},N[V]=$);let de=$[ue.id];de===void 0&&(de={},$[ue.id]=de);let Te=de[q];return Te===void 0&&(Te=g(m()),de[q]=Te),Te}function g(H){const K=[],ue=[],fe=[];for(let q=0;q<i;q++)K[q]=0,ue[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ue,attributeDivisors:fe,object:H,attributes:{},index:null}}function S(H,K,ue,fe){const q=c.attributes,N=K.attributes;let V=0;const $=ue.getAttributes();for(const de in $)if($[de].location>=0){const D=q[de];let W=N[de];if(W===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),D===void 0||D.attribute!==W||W&&D.data!==W.data)return!0;V++}return c.attributesNum!==V||c.index!==fe}function E(H,K,ue,fe){const q={},N=K.attributes;let V=0;const $=ue.getAttributes();for(const de in $)if($[de].location>=0){let D=N[de];D===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(D=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(D=H.instanceColor));const W={};W.attribute=D,D&&D.data&&(W.data=D.data),q[de]=W,V++}c.attributes=q,c.attributesNum=V,c.index=fe}function C(){const H=c.newAttributes;for(let K=0,ue=H.length;K<ue;K++)H[K]=0}function b(H){y(H,0)}function y(H,K){const ue=c.newAttributes,fe=c.enabledAttributes,q=c.attributeDivisors;ue[H]=1,fe[H]===0&&(a.enableVertexAttribArray(H),fe[H]=1),q[H]!==K&&(a.vertexAttribDivisor(H,K),q[H]=K)}function P(){const H=c.newAttributes,K=c.enabledAttributes;for(let ue=0,fe=K.length;ue<fe;ue++)K[ue]!==H[ue]&&(a.disableVertexAttribArray(ue),K[ue]=0)}function z(H,K,ue,fe,q,N,V){V===!0?a.vertexAttribIPointer(H,K,ue,q,N):a.vertexAttribPointer(H,K,ue,fe,q,N)}function w(H,K,ue,fe){C();const q=fe.attributes,N=ue.getAttributes(),V=K.defaultAttributeValues;for(const $ in N){const de=N[$];if(de.location>=0){let Te=q[$];if(Te===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(Te=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(Te=H.instanceColor)),Te!==void 0){const D=Te.normalized,W=Te.itemSize,he=e.get(Te);if(he===void 0)continue;const _e=he.buffer,Ae=he.type,ee=he.bytesPerElement,Se=Ae===a.INT||Ae===a.UNSIGNED_INT||Te.gpuType===Sm;if(Te.isInterleavedBufferAttribute){const Me=Te.data,Ne=Me.stride,Je=Te.offset;if(Me.isInstancedInterleavedBuffer){for(let Ze=0;Ze<de.locationSize;Ze++)y(de.location+Ze,Me.meshPerAttribute);H.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ze=0;Ze<de.locationSize;Ze++)b(de.location+Ze);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let Ze=0;Ze<de.locationSize;Ze++)z(de.location+Ze,W/de.locationSize,Ae,D,Ne*ee,(Je+W/de.locationSize*Ze)*ee,Se)}else{if(Te.isInstancedBufferAttribute){for(let Me=0;Me<de.locationSize;Me++)y(de.location+Me,Te.meshPerAttribute);H.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Me=0;Me<de.locationSize;Me++)b(de.location+Me);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let Me=0;Me<de.locationSize;Me++)z(de.location+Me,W/de.locationSize,Ae,D,W*ee,W/de.locationSize*Me*ee,Se)}}else if(V!==void 0){const D=V[$];if(D!==void 0)switch(D.length){case 2:a.vertexAttrib2fv(de.location,D);break;case 3:a.vertexAttrib3fv(de.location,D);break;case 4:a.vertexAttrib4fv(de.location,D);break;default:a.vertexAttrib1fv(de.location,D)}}}}P()}function L(){I();for(const H in r){const K=r[H];for(const ue in K){const fe=K[ue];for(const q in fe){const N=fe[q];for(const V in N)_(N[V].object),delete N[V];delete fe[q]}}delete r[H]}}function U(H){if(r[H.id]===void 0)return;const K=r[H.id];for(const ue in K){const fe=K[ue];for(const q in fe){const N=fe[q];for(const V in N)_(N[V].object),delete N[V];delete fe[q]}}delete r[H.id]}function F(H){for(const K in r){const ue=r[K];for(const fe in ue){const q=ue[fe];if(q[H.id]===void 0)continue;const N=q[H.id];for(const V in N)_(N[V].object),delete N[V];delete q[H.id]}}}function T(H){for(const K in r){const ue=r[K],fe=H.isInstancedMesh===!0?H.id:0,q=ue[fe];if(q!==void 0){for(const N in q){const V=q[N];for(const $ in V)_(V[$].object),delete V[$];delete q[N]}delete ue[fe],Object.keys(ue).length===0&&delete r[K]}}}function I(){k(),u=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:b,disableUnusedAttributes:P}}function hD(a,e,i){let r;function l(m){r=m}function c(m,p){a.drawArrays(r,m,p),i.update(p,r,1)}function u(m,p,_){_!==0&&(a.drawArraysInstanced(r,m,p,_),i.update(p,r,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function pD(a,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(F){return!(F!==Gi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==wi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ea&&!T)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),U=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:w,maxSamples:L,samples:U}}function mD(a){const e=this;let i=null,r=0,l=!1,c=!1;const u=new Kr,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||l;return l=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,C=v.clipIntersection,b=v.clipShadows,y=a.get(v);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const P=c?0:r,z=P*4;let w=y.clippingState||null;m.value=w,w=_(E,g,z,S);for(let L=0;L!==z;++L)w[L]=i[L];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,E){const C=v!==null?v.length:0;let b=null;if(C!==0){if(b=m.value,E!==!0||b===null){const y=S+C*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<y)&&(b=new Float32Array(y));for(let z=0,w=S;z!==C;++z,w+=4)u.copy(v[z]).applyMatrix4(P,h),u.normal.toArray(b,w),b[w+3]=u.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,b}}const xr=4,Vx=[.125,.215,.35,.446,.526,.582],Jr=20,gD=256,_l=new JS,kx=new St;let jh=null,Zh=0,Kh=0,Qh=!1;const vD=new ie;class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:u=256,position:h=vD}=c;jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Zh,Kh),this._renderer.xr.enabled=Qh,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===rs||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Pa,format:Gi,colorSpace:Gu,depthBuffer:!1},l=Wx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wx(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_D(c)),this._blurMaterial=yD(c,e,i),this._ggxMaterial=xD(c,e,i)}return l}_compileMaterial(e){const i=new za(new ti,e);this._renderer.compile(i,_l)}_sceneToCubeUV(e,i,r,l,c){const m=new Ci(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(kx),v.toneMapping=na,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new za(new Pl,new qS({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let y=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,y=!0):(b.color.copy(kx),y=!0);for(let z=0;z<6;z++){const w=z%3;w===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[z],c.y,c.z)):w===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[z]));const L=this._cubeSize;no(l,w*L,z>2?L:0,L,L),v.setRenderTarget(l),y&&v.render(C,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===rs||e.mapping===ho;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qx());const c=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;no(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,_l)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,C=this._sizeLods[r],b=3*C*(r>E-xr?r-E+xr:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,no(c,b,y,3*C,2*C),l.setRenderTarget(c),l.render(h,_l),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,no(e,b,y,3*C,2*C),l.setRenderTarget(e),l.render(h,_l)}_blur(e,i,r,l,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,l,"latitudinal",c),this._halfBlur(u,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),C=c/E,b=isFinite(c)?1+Math.floor(_*C):Jr;b>Jr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Jr}`);const y=[];let P=0;for(let F=0;F<Jr;++F){const T=F/C,I=Math.exp(-T*T/2);y.push(I),F===0?P+=I:F<b&&(P+=2*I)}for(let F=0;F<y.length;F++)y[F]=y[F]/P;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:z}=this;g.dTheta.value=E,g.mipInt.value=z-r;const w=this._sizeLods[l],L=3*w*(l>z-xr?l-z+xr:0),U=4*(this._cubeSize-w);no(i,L,U,3*w,2*w),m.setRenderTarget(i),m.render(v,_l)}}function _D(a){const e=[],i=[],r=[];let l=a;const c=a-xr+1+Vx.length;for(let u=0;u<c;u++){const h=Math.pow(2,l);e.push(h);let m=1/h;u>a-xr?m=Vx[u-a+xr-1]:u===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,C=3,b=2,y=1,P=new Float32Array(C*E*S),z=new Float32Array(b*E*S),w=new Float32Array(y*E*S);for(let U=0;U<S;U++){const F=U%3*2/3-1,T=U>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];P.set(I,C*E*U),z.set(g,b*E*U);const k=[U,U,U,U,U,U];w.set(k,y*E*U)}const L=new ti;L.setAttribute("position",new En(P,C)),L.setAttribute("uv",new En(z,b)),L.setAttribute("faceIndex",new En(w,y)),r.push(new za(L,null)),l>xr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Wx(a,e,i){const r=new ia(a,e,i);return r.texture.mapping=$u,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function no(a,e,i,r,l){a.viewport.set(e,i,r,l),a.scissor.set(e,i,r,l)}function xD(a,e,i){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function yD(a,e,i){const r=new Float32Array(Jr),l=new ie(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tf(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function qx(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Yx(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function tf(){return`

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
	`}class t1 extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new jS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Pl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Na});c.uniforms.tEquirect.value=i;const u=new za(l,c),h=i.minFilter;return i.minFilter===es&&(i.minFilter=Gn),new TR(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,l);e.setRenderTarget(c)}}function SD(a){let e=new WeakMap,i=new WeakMap,r=null;function l(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===yh||S===Sh)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new t1(E.height);return C.fromEquirectangularTexture(a,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,E=S===yh||S===Sh,C=S===rs||S===ho;if(E||C){let b=i.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new Xx(a)),b=E?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const P=g.image;return E&&P&&P.height>0||C&&P&&m(P)?(r===null&&(r=new Xx(a)),b=E?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===yh?g.mapping=rs:S===Sh&&(g.mapping=ho),g}function m(g){let S=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function bD(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=a.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&lo("WebGLRenderer: "+r+" extension not supported."),l}}}function MD(a,e,i,r){const l={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",u),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(S!==null){const P=S.array;C=S.version;for(let z=0,w=P.length;z<w;z+=3){const L=P[z+0],U=P[z+1],F=P[z+2];g.push(L,U,U,F,F,L)}}else{const P=E.array;C=E.version;for(let z=0,w=P.length/3-1;z<w;z+=3){const L=z+0,U=z+1,F=z+2;g.push(L,U,U,F,F,L)}}const b=new(E.count>=65535?WS:XS)(g,1);b.version=C;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function ED(a,e,i){let r;function l(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){a.drawElements(r,g,c,v*u),i.update(g,r,1)}function p(v,g,S){S!==0&&(a.drawElementsInstanced(r,g,c,v*u,S),i.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let C=0;for(let b=0;b<S;b++)C+=g[b];i.update(C,r,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function TD(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function AD(a,e,i){const r=new WeakMap,l=new un;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let I=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let z=0;S===!0&&(z=1),E===!0&&(z=2),C===!0&&(z=3);let w=h.attributes.position.count*z,L=1;w>e.maxTextureSize&&(L=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*L*4*v),F=new GS(U,w,L,v);F.type=ea,F.needsUpdate=!0;const T=z*4;for(let k=0;k<v;k++){const H=b[k],K=y[k],ue=P[k],fe=w*L*4*k;for(let q=0;q<H.count;q++){const N=q*T;S===!0&&(l.fromBufferAttribute(H,q),U[fe+N+0]=l.x,U[fe+N+1]=l.y,U[fe+N+2]=l.z,U[fe+N+3]=0),E===!0&&(l.fromBufferAttribute(K,q),U[fe+N+4]=l.x,U[fe+N+5]=l.y,U[fe+N+6]=l.z,U[fe+N+7]=0),C===!0&&(l.fromBufferAttribute(ue,q),U[fe+N+8]=l.x,U[fe+N+9]=l.y,U[fe+N+10]=l.z,U[fe+N+11]=ue.itemSize===4?l.w:1)}}g={count:v,texture:F,size:new Ut(w,L)},r.set(h,g),h.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let S=0;for(let C=0;C<p.length;C++)S+=p[C];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(a,"morphTargetBaseInfluence",E),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function RD(a,e,i,r,l){let c=new WeakMap;function u(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:u,dispose:h}}const CD={[TS]:"LINEAR_TONE_MAPPING",[AS]:"REINHARD_TONE_MAPPING",[RS]:"CINEON_TONE_MAPPING",[CS]:"ACES_FILMIC_TONE_MAPPING",[DS]:"AGX_TONE_MAPPING",[NS]:"NEUTRAL_TONE_MAPPING",[wS]:"CUSTOM_TONE_MAPPING"};function wD(a,e,i,r,l,c){const u=new ia(e,i,{type:a,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new po(e,i):void 0}),h=new ia(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new ti;m.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Vi([0,2,0,0,2,0],2));const p=new bR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new za(m,p),v=new JS(-1,1,1,-1,0,1);let g=null,S=null,E=!1,C,b=null,y=[],P=!1;this.setSize=function(z,w){u.setSize(z,w),h.setSize(z,w);for(let L=0;L<y.length;L++){const U=y[L];U.setSize&&U.setSize(z,w)}},this.setEffects=function(z){y=z,P=y.length>0&&y[0].isRenderPass===!0;const w=u.width,L=u.height;for(let U=0;U<y.length;U++){const F=y[U];F.setSize&&F.setSize(w,L)}},this.begin=function(z,w){if(E||z.toneMapping===na&&y.length===0)return!1;if(b=w,w!==null){const L=w.width,U=w.height;(u.width!==L||u.height!==U)&&this.setSize(L,U)}return P===!1&&z.setRenderTarget(u),C=z.toneMapping,z.toneMapping=na,!0},this.hasRenderPass=function(){return P},this.end=function(z,w){z.toneMapping=C,E=!0;let L=u,U=h;for(let F=0;F<y.length;F++){const T=y[F];if(T.enabled!==!1&&(T.render(z,U,L,w),T.needsSwap!==!1)){const I=L;L=U,U=I}}if(g!==z.outputColorSpace||S!==z.toneMapping){g=z.outputColorSpace,S=z.toneMapping,p.defines={},Tt.getTransfer(g)===Gt&&(p.defines.SRGB_TRANSFER="");const F=CD[S];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,z.setRenderTarget(b),z.render(_,v),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const n1=new Xn,am=new po(1,1),i1=new GS,a1=new Z3,r1=new jS,jx=[],Zx=[],Kx=new Float32Array(16),Qx=new Float32Array(9),Jx=new Float32Array(4);function xo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const l=e*i;let c=jx[l];if(c===void 0&&(c=new Float32Array(l),jx[l]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Tn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function An(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function nf(a,e){let i=Zx[e];i===void 0&&(i=new Int32Array(e),Zx[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function DD(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function ND(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;a.uniform2fv(this.addr,e),An(i,e)}}function LD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;a.uniform3fv(this.addr,e),An(i,e)}}function UD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;a.uniform4fv(this.addr,e),An(i,e)}}function OD(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,r))return;Jx.set(r),a.uniformMatrix2fv(this.addr,!1,Jx),An(i,r)}}function PD(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,r))return;Qx.set(r),a.uniformMatrix3fv(this.addr,!1,Qx),An(i,r)}}function ID(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,r))return;Kx.set(r),a.uniformMatrix4fv(this.addr,!1,Kx),An(i,r)}}function zD(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function FD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;a.uniform2iv(this.addr,e),An(i,e)}}function BD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;a.uniform3iv(this.addr,e),An(i,e)}}function HD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;a.uniform4iv(this.addr,e),An(i,e)}}function GD(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function VD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;a.uniform2uiv(this.addr,e),An(i,e)}}function kD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;a.uniform3uiv(this.addr,e),An(i,e)}}function XD(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;a.uniform4uiv(this.addr,e),An(i,e)}}function WD(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(am.compareFunction=i.isReversedDepthBuffer()?Cm:Rm,c=am):c=n1,i.setTexture2D(e||c,l)}function qD(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||a1,l)}function YD(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||r1,l)}function jD(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||i1,l)}function ZD(a){switch(a){case 5126:return DD;case 35664:return ND;case 35665:return LD;case 35666:return UD;case 35674:return OD;case 35675:return PD;case 35676:return ID;case 5124:case 35670:return zD;case 35667:case 35671:return FD;case 35668:case 35672:return BD;case 35669:case 35673:return HD;case 5125:return GD;case 36294:return VD;case 36295:return kD;case 36296:return XD;case 35678:case 36198:case 36298:case 36306:case 35682:return WD;case 35679:case 36299:case 36307:return qD;case 35680:case 36300:case 36308:case 36293:return YD;case 36289:case 36303:case 36311:case 36292:return jD}}function KD(a,e){a.uniform1fv(this.addr,e)}function QD(a,e){const i=xo(e,this.size,2);a.uniform2fv(this.addr,i)}function JD(a,e){const i=xo(e,this.size,3);a.uniform3fv(this.addr,i)}function $D(a,e){const i=xo(e,this.size,4);a.uniform4fv(this.addr,i)}function eN(a,e){const i=xo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function tN(a,e){const i=xo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function nN(a,e){const i=xo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function iN(a,e){a.uniform1iv(this.addr,e)}function aN(a,e){a.uniform2iv(this.addr,e)}function rN(a,e){a.uniform3iv(this.addr,e)}function sN(a,e){a.uniform4iv(this.addr,e)}function oN(a,e){a.uniform1uiv(this.addr,e)}function lN(a,e){a.uniform2uiv(this.addr,e)}function cN(a,e){a.uniform3uiv(this.addr,e)}function uN(a,e){a.uniform4uiv(this.addr,e)}function fN(a,e,i){const r=this.cache,l=e.length,c=nf(i,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=am:u=n1;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||u,c[h])}function dN(a,e,i){const r=this.cache,l=e.length,c=nf(i,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==l;++u)i.setTexture3D(e[u]||a1,c[u])}function hN(a,e,i){const r=this.cache,l=e.length,c=nf(i,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==l;++u)i.setTextureCube(e[u]||r1,c[u])}function pN(a,e,i){const r=this.cache,l=e.length,c=nf(i,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==l;++u)i.setTexture2DArray(e[u]||i1,c[u])}function mN(a){switch(a){case 5126:return KD;case 35664:return QD;case 35665:return JD;case 35666:return $D;case 35674:return eN;case 35675:return tN;case 35676:return nN;case 5124:case 35670:return iN;case 35667:case 35671:return aN;case 35668:case 35672:return rN;case 35669:case 35673:return sN;case 5125:return oN;case 36294:return lN;case 36295:return cN;case 36296:return uN;case 35678:case 36198:case 36298:case 36306:case 35682:return fN;case 35679:case 36299:case 36307:return dN;case 35680:case 36300:case 36308:case 36293:return hN;case 36289:case 36303:case 36311:case 36292:return pN}}class gN{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ZD(i.type)}}class vN{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mN(i.type)}}class _N{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function $x(a,e){a.seq.push(e),a.map[e.id]=e}function xN(a,e,i){const r=a.name,l=r.length;for(Jh.lastIndex=0;;){const c=Jh.exec(r),u=Jh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===l){$x(i,p===void 0?new gN(h,a,e):new vN(h,a,e));break}else{let v=i.map[h];v===void 0&&(v=new _N(h),$x(i,v)),i=v}}}class Pu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);xN(h,m,this)}const l=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(u):c.push(u);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const u=e[l];u.id in i&&r.push(u)}return r}}function ey(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const yN=37297;let SN=0;function bN(a,e){const i=a.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=l;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const ty=new ct;function MN(a){Tt._getMatrix(ty,Tt.workingColorSpace,a);const e=`mat3( ${ty.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(a)){case Vu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ny(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+bN(a.getShaderSource(e),h)}else return c}function EN(a,e){const i=MN(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TN={[TS]:"Linear",[AS]:"Reinhard",[RS]:"Cineon",[CS]:"ACESFilmic",[DS]:"AgX",[NS]:"Neutral",[wS]:"Custom"};function AN(a,e){const i=TN[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tu=new ie;function RN(){Tt.getLuminanceCoefficients(Tu);const a=Tu.x.toFixed(4),e=Tu.y.toFixed(4),i=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CN(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function wN(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function DN(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(e,l),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function bl(a){return a!==""}function iy(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ay(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NN=/^[ \t]*#include +<([\w\d./]+)>/gm;function rm(a){return a.replace(NN,UN)}const LN=new Map;function UN(a,e){let i=pt[e];if(i===void 0){const r=LN.get(e);if(r!==void 0)i=pt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rm(i)}const ON=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ry(a){return a.replace(ON,PN)}function PN(a,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sy(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const IN={[Du]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function zN(a){return IN[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FN={[rs]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[$u]:"ENVMAP_TYPE_CUBE_UV"};function BN(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":FN[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const HN={[ho]:"ENVMAP_MODE_REFRACTION"};function GN(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":HN[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VN={[ES]:"ENVMAP_BLENDING_MULTIPLY",[C3]:"ENVMAP_BLENDING_MIX",[w3]:"ENVMAP_BLENDING_ADD"};function kN(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":VN[a.combine]||"ENVMAP_BLENDING_NONE"}function XN(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function WN(a,e,i,r){const l=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=zN(i),p=BN(i),_=GN(i),v=kN(i),g=XN(i),S=CN(i),E=wN(c),C=l.createProgram();let b,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),y.length>0&&(y+=`
`)):(b=[sy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),y=[sy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?pt.tonemapping_pars_fragment:"",i.toneMapping!==na?AN("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,EN("linearToOutputTexel",i.outputColorSpace),RN(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bl).join(`
`)),u=rm(u),u=iy(u,i),u=ay(u,i),h=rm(h),h=iy(h,i),h=ay(h,i),u=ry(u),h=ry(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=P+b+u,w=P+y+h,L=ey(l,l.VERTEX_SHADER,z),U=ey(l,l.FRAGMENT_SHADER,w);l.attachShader(C,L),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(a.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",ue=l.getShaderInfoLog(L)||"",fe=l.getShaderInfoLog(U)||"",q=K.trim(),N=ue.trim(),V=fe.trim();let $=!0,de=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,C,L,U);else{const Te=ny(l,L,"vertex"),D=ny(l,U,"fragment");Rt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+Te+`
`+D)}else q!==""?st("WebGLProgram: Program Info Log:",q):(N===""||V==="")&&(de=!1);de&&(H.diagnostics={runnable:$,programLog:q,vertexShader:{log:N,prefix:b},fragmentShader:{log:V,prefix:y}})}l.deleteShader(L),l.deleteShader(U),T=new Pu(l,C),I=DN(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(C,yN)),k},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SN++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=U,this}let qN=0;class YN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new jN(e),i.set(e,r)),r}}class jN{constructor(e){this.id=qN++,this.code=e,this.usedTimes=0}}function ZN(a){return a===ss||a===Bu||a===Hu}function KN(a,e,i,r,l,c){const u=new VS,h=new YN,m=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,I,k,H,K,ue){const fe=H.fog,q=K.geometry,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||N,V),de=$&&$.mapping===$u?$.image.height:null,Te=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,W=D!==void 0?D.length:0;let he=0;q.morphAttributes.position!==void 0&&(he=1),q.morphAttributes.normal!==void 0&&(he=2),q.morphAttributes.color!==void 0&&(he=3);let _e,Ae,ee,Se;if(Te){const ke=Ji[Te];_e=ke.vertexShader,Ae=ke.fragmentShader}else{_e=T.vertexShader,Ae=T.fragmentShader;const ke=h.getVertexShaderStage(T),$t=h.getFragmentShaderStage(T);h.update(T,ke,$t),ee=ke.id,Se=$t.id}const Me=a.getRenderTarget(),Ne=a.state.buffers.depth.getReversed(),Je=K.isInstancedMesh===!0,Ze=K.isBatchedMesh===!0,Vt=!!T.map,ut=!!T.matcap,bt=!!$,Mt=!!T.aoMap,mt=!!T.lightMap,an=!!T.bumpMap&&T.wireframe===!1,rn=!!T.normalMap,sn=!!T.displacementMap,dn=!!T.emissiveMap,Zt=!!T.metalnessMap,on=!!T.roughnessMap,Z=T.anisotropy>0,kt=T.clearcoat>0,Nt=T.dispersion>0,O=T.iridescence>0,M=T.sheen>0,J=T.transmission>0,se=Z&&!!T.anisotropyMap,me=kt&&!!T.clearcoatMap,Ce=kt&&!!T.clearcoatNormalMap,Ue=kt&&!!T.clearcoatRoughnessMap,pe=O&&!!T.iridescenceMap,ge=O&&!!T.iridescenceThicknessMap,De=M&&!!T.sheenColorMap,He=M&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Oe=!!T.specularColorMap,$e=!!T.specularIntensityMap,et=J&&!!T.transmissionMap,ot=J&&!!T.thicknessMap,Y=!!T.gradientMap,we=!!T.alphaMap,xe=T.alphaTest>0,Le=!!T.alphaHash,Be=!!T.extensions;let Ee=na;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const Ye={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:_e,fragmentShader:Ae,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&K._colorsTexture!==null,instancing:Je,instancingColor:Je&&K.instanceColor!==null,instancingMorph:Je&&K.morphTexture!==null,outputColorSpace:Me===null?a.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Vt,matcap:ut,envMap:bt,envMapMode:bt&&$.mapping,envMapCubeUVHeight:de,aoMap:Mt,lightMap:mt,bumpMap:an,normalMap:rn,displacementMap:sn,emissiveMap:dn,normalMapObjectSpace:rn&&T.normalMapType===L3,normalMapTangentSpace:rn&&T.normalMapType===ux,packedNormalMap:rn&&T.normalMapType===ux&&ZN(T.normalMap.format),metalnessMap:Zt,roughnessMap:on,anisotropy:Z,anisotropyMap:se,clearcoat:kt,clearcoatMap:me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ue,dispersion:Nt,iridescence:O,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:M,sheenColorMap:De,sheenRoughnessMap:He,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:$e,transmission:J,transmissionMap:et,thicknessMap:ot,gradientMap:Y,opaque:T.transparent===!1&&T.blending===oo&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:xe,alphaHash:Le,combine:T.combine,mapUv:Vt&&E(T.map.channel),aoMapUv:Mt&&E(T.aoMap.channel),lightMapUv:mt&&E(T.lightMap.channel),bumpMapUv:an&&E(T.bumpMap.channel),normalMapUv:rn&&E(T.normalMap.channel),displacementMapUv:sn&&E(T.displacementMap.channel),emissiveMapUv:dn&&E(T.emissiveMap.channel),metalnessMapUv:Zt&&E(T.metalnessMap.channel),roughnessMapUv:on&&E(T.roughnessMap.channel),anisotropyMapUv:se&&E(T.anisotropyMap.channel),clearcoatMapUv:me&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(T.sheenRoughnessMap.channel),specularMapUv:Ie&&E(T.specularMap.channel),specularColorMapUv:Oe&&E(T.specularColorMap.channel),specularIntensityMapUv:$e&&E(T.specularIntensityMap.channel),transmissionMapUv:et&&E(T.transmissionMap.channel),thicknessMapUv:ot&&E(T.thicknessMap.channel),alphaMapUv:we&&E(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rn||Z),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!q.attributes.uv&&(Vt||we),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&rn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ne,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:he,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Vt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Gt,decodeVideoTextureEmissive:dn&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wa,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function b(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)I.push(k),I.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(y(I,T),P(I,T),I.push(a.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function y(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function P(T,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const I=S[T.type];let k;if(I){const H=Ji[I];k=xR.clone(H.uniforms)}else k=T.uniforms;return k}function w(T,I){let k=_.get(I);return k!==void 0?++k.usedTimes:(k=new WN(a,I,T,l),p.push(k),_.set(I,k)),k}function L(T){if(--T.usedTimes===0){const I=p.indexOf(T);p[I]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function F(){h.dispose()}return{getParameters:C,getProgramCacheKey:b,getUniforms:z,acquireProgram:w,releaseProgram:L,releaseShaderCache:U,programs:p,dispose:F}}function QN(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function l(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function JN(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function oy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ly(){const a=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,C,b,y){let P=a[e];return P===void 0?(P={id:g.id,object:g,geometry:S,material:E,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:b,group:y},a[e]=P):(P.id=g.id,P.object=g,P.geometry=S,P.material=E,P.materialVariant=u(g),P.groupOrder=C,P.renderOrder=g.renderOrder,P.z=b,P.group=y),e++,P}function m(g,S,E,C,b,y){const P=h(g,S,E,C,b,y);E.transmission>0?r.push(P):E.transparent===!0?l.push(P):i.push(P)}function p(g,S,E,C,b,y){const P=h(g,S,E,C,b,y);E.transmission>0?r.unshift(P):E.transparent===!0?l.unshift(P):i.unshift(P)}function _(g,S,E){i.length>1&&i.sort(g||JN),r.length>1&&r.sort(S||oy),l.length>1&&l.sort(S||oy),E&&(i.reverse(),r.reverse(),l.reverse())}function v(){for(let g=e,S=a.length;g<S;g++){const E=a[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function $N(){let a=new WeakMap;function e(r,l){const c=a.get(r);let u;return c===void 0?(u=new ly,a.set(r,[u])):l>=c.length?(u=new ly,c.push(u)):u=c[l],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function eL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new St};break;case"SpotLight":i={position:new ie,direction:new ie,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new St,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new St,groundColor:new St};break;case"RectAreaLight":i={color:new St,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=i,i}}}function tL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let nL=0;function iL(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function aL(a){const e=new eL,i=tL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ie);const l=new ie,c=new fn,u=new fn;function h(p){let _=0,v=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let S=0,E=0,C=0,b=0,y=0,P=0,z=0,w=0,L=0,U=0,F=0;p.sort(iL);for(let I=0,k=p.length;I<k;I++){const H=p[I],K=H.color,ue=H.intensity,fe=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ss?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=K.r*ue,v+=K.g*ue,g+=K.b*ue;else if(H.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(H.sh.coefficients[N],ue);F++}else if(H.isDirectionalLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,$=i.get(H);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.directionalShadow[S]=$,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=H.shadow.matrix,P++}r.directional[S]=N,S++}else if(H.isSpotLight){const N=e.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(K).multiplyScalar(ue),N.distance=fe,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,r.spot[C]=N;const V=H.shadow;if(H.map&&(r.spotLightMap[L]=H.map,L++,V.updateMatrices(H),H.castShadow&&U++),r.spotLightMatrix[C]=V.matrix,H.castShadow){const $=i.get(H);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=q,w++}C++}else if(H.isRectAreaLight){const N=e.get(H);N.color.copy(K).multiplyScalar(ue),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),r.rectArea[b]=N,b++}else if(H.isPointLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const V=H.shadow,$=i.get(H);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=H.shadow.matrix,z++}r.point[E]=N,E++}else if(H.isHemisphereLight){const N=e.get(H);N.skyColor.copy(H.color).multiplyScalar(ue),N.groundColor.copy(H.groundColor).multiplyScalar(ue),r.hemi[y]=N,y++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==b||T.hemiLength!==y||T.numDirectionalShadows!==P||T.numPointShadows!==z||T.numSpotShadows!==w||T.numSpotMaps!==L||T.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=b,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=w+L-U,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=F,T.directionalLength=S,T.pointLength=E,T.spotLength=C,T.rectAreaLength=b,T.hemiLength=y,T.numDirectionalShadows=P,T.numPointShadows=z,T.numSpotShadows=w,T.numSpotMaps=L,T.numLightProbes=F,r.version=nL++)}function m(p,_){let v=0,g=0,S=0,E=0,C=0;const b=_.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const z=p[y];if(z.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(b),v++}else if(z.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(b),w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(b),S++}else if(z.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(b),u.identity(),c.copy(z.matrixWorld),c.premultiply(b),u.extractRotation(c),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(z.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(b),g++}else if(z.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:r}}function cy(a){const e=new aL(a),i=[],r=[],l=[];function c(g){v.camera=g,i.length=0,r.length=0,l.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function rL(a){let e=new WeakMap;function i(l,c=0){const u=e.get(l);let h;return u===void 0?(h=new cy(a),e.set(l,[h])):c>=u.length?(h=new cy(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const sL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oL=`uniform sampler2D shadow_pass;
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
}`,lL=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],cL=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],uy=new fn,xl=new ie,$h=new ie;function uL(a,e,i){let r=new YS;const l=new Ut,c=new Ut,u=new un,h=new MR,m=new ER,p={},_=i.maxTextureSize,v={[Mr]:ei,[ei]:Mr,[wa]:wa},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:sL,fragmentShader:oL}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ti;E.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new za(E,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let y=this.type;this.render=function(U,F,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||U.length===0)return;this.type===c3&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Du);const I=a.getRenderTarget(),k=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Na),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ue=y!==this.type;ue&&F.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(q=>q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,q=U.length;fe<q;fe++){const N=U[fe],V=N.shadow;if(V===void 0){st("WebGLShadowMap:",N,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const $=V.getFrameExtents();l.multiply($),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,V.mapSize.y=c.y));const de=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=de,V.map===null||ue===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Sl){if(N.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ia(l.x,l.y,{format:ss,type:Pa,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),V.map.texture.name=N.name+".shadowMap",V.map.depthTexture=new po(l.x,l.y,ea),V.map.depthTexture.name=N.name+".shadowMapDepth",V.map.depthTexture.format=Ia,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn}else N.isPointLight?(V.map=new t1(l.x),V.map.depthTexture=new vR(l.x,aa)):(V.map=new ia(l.x,l.y),V.map.depthTexture=new po(l.x,l.y,aa)),V.map.depthTexture.name=N.name+".shadowMap",V.map.depthTexture.format=Ia,this.type===Du?(V.map.depthTexture.compareFunction=de?Cm:Rm,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn);V.camera.updateProjectionMatrix()}const Te=V.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Te;D++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,D),a.clear();else{D===0&&(a.setRenderTarget(V.map),a.clear());const W=V.getViewport(D);u.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),K.viewport(u)}if(N.isPointLight){const W=V.camera,he=V.matrix,_e=N.distance||W.far;_e!==W.far&&(W.far=_e,W.updateProjectionMatrix()),xl.setFromMatrixPosition(N.matrixWorld),W.position.copy(xl),$h.copy(W.position),$h.add(lL[D]),W.up.copy(cL[D]),W.lookAt($h),W.updateMatrixWorld(),he.makeTranslation(-xl.x,-xl.y,-xl.z),uy.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V._frustum.setFromProjectionMatrix(uy,W.coordinateSystem,W.reversedDepth)}else V.updateMatrices(N);r=V.getFrustum(),w(F,T,V.camera,N,this.type)}V.isPointLightShadow!==!0&&this.type===Sl&&P(V,T),V.needsUpdate=!1}y=this.type,b.needsUpdate=!1,a.setRenderTarget(I,k,H)};function P(U,F){const T=e.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ia(l.x,l.y,{format:ss,type:Pa})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,a.setRenderTarget(U.mapPass),a.clear(),a.renderBufferDirect(F,null,T,g,C,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,a.setRenderTarget(U.map),a.clear(),a.renderBufferDirect(F,null,T,S,C,null)}function z(U,F,T,I){let k=null;const H=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)k=H;else if(k=T.isPointLight===!0?m:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=k.uuid,ue=F.uuid;let fe=p[K];fe===void 0&&(fe={},p[K]=fe);let q=fe[ue];q===void 0&&(q=k.clone(),fe[ue]=q,F.addEventListener("dispose",L)),k=q}if(k.visible=F.visible,k.wireframe=F.wireframe,I===Sl?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:v[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const K=a.properties.get(k);K.light=T}return k}function w(U,F,T,I,k){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&k===Sl)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ue=e.update(U),fe=U.material;if(Array.isArray(fe)){const q=ue.groups;for(let N=0,V=q.length;N<V;N++){const $=q[N],de=fe[$.materialIndex];if(de&&de.visible){const Te=z(U,de,I,k);U.onBeforeShadow(a,U,F,T,ue,Te,$),a.renderBufferDirect(T,null,ue,Te,U,$),U.onAfterShadow(a,U,F,T,ue,Te,$)}}}else if(fe.visible){const q=z(U,fe,I,k);U.onBeforeShadow(a,U,F,T,ue,q,null),a.renderBufferDirect(T,null,ue,q,U,null),U.onAfterShadow(a,U,F,T,ue,q,null)}}const K=U.children;for(let ue=0,fe=K.length;ue<fe;ue++)w(K[ue],F,T,I,k)}function L(U){U.target.removeEventListener("dispose",L);for(const T in p){const I=p[T],k=U.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function fL(a,e){function i(){let Y=!1;const we=new un;let xe=null;const Le=new un(0,0,0,0);return{setMask:function(Be){xe!==Be&&!Y&&(a.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){Y=Be},setClear:function(Be,Ee,Ye,ke,$t){$t===!0&&(Be*=ke,Ee*=ke,Ye*=ke),we.set(Be,Ee,Ye,ke),Le.equals(we)===!1&&(a.clearColor(Be,Ee,Ye,ke),Le.copy(we))},reset:function(){Y=!1,xe=null,Le.set(-1,0,0,0)}}}function r(){let Y=!1,we=!1,xe=null,Le=null,Be=null;return{setReversed:function(Ee){if(we!==Ee){const Ye=e.get("EXT_clip_control");Ee?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),we=Ee;const ke=Be;Be=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(Ee){Ee?Me(a.DEPTH_TEST):Ne(a.DEPTH_TEST)},setMask:function(Ee){xe!==Ee&&!Y&&(a.depthMask(Ee),xe=Ee)},setFunc:function(Ee){if(we&&(Ee=V3[Ee]),Le!==Ee){switch(Ee){case vp:a.depthFunc(a.NEVER);break;case _p:a.depthFunc(a.ALWAYS);break;case xp:a.depthFunc(a.LESS);break;case fo:a.depthFunc(a.LEQUAL);break;case yp:a.depthFunc(a.EQUAL);break;case Sp:a.depthFunc(a.GEQUAL);break;case bp:a.depthFunc(a.GREATER);break;case Mp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Le=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){Be!==Ee&&(Be=Ee,we&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){Y=!1,xe=null,Le=null,Be=null,we=!1}}}function l(){let Y=!1,we=null,xe=null,Le=null,Be=null,Ee=null,Ye=null,ke=null,$t=null;return{setTest:function(Pt){Y||(Pt?Me(a.STENCIL_TEST):Ne(a.STENCIL_TEST))},setMask:function(Pt){we!==Pt&&!Y&&(a.stencilMask(Pt),we=Pt)},setFunc:function(Pt,ii,ai){(xe!==Pt||Le!==ii||Be!==ai)&&(a.stencilFunc(Pt,ii,ai),xe=Pt,Le=ii,Be=ai)},setOp:function(Pt,ii,ai){(Ee!==Pt||Ye!==ii||ke!==ai)&&(a.stencilOp(Pt,ii,ai),Ee=Pt,Ye=ii,ke=ai)},setLocked:function(Pt){Y=Pt},setClear:function(Pt){$t!==Pt&&(a.clearStencil(Pt),$t=Pt)},reset:function(){Y=!1,we=null,xe=null,Le=null,Be=null,Ee=null,Ye=null,ke=null,$t=null}}}const c=new i,u=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],C=null,b=!1,y=null,P=null,z=null,w=null,L=null,U=null,F=null,T=new St(0,0,0),I=0,k=!1,H=null,K=null,ue=null,fe=null,q=null;const N=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const de=a.getParameter(a.VERSION);de.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(de)[1]),V=$>=1):de.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),V=$>=2);let Te=null,D={};const W=a.getParameter(a.SCISSOR_BOX),he=a.getParameter(a.VIEWPORT),_e=new un().fromArray(W),Ae=new un().fromArray(he);function ee(Y,we,xe,Le){const Be=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(Y,Ee),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<xe;Ye++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(we,0,a.RGBA,1,1,Le,0,a.RGBA,a.UNSIGNED_BYTE,Be):a.texImage2D(we+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Be);return Ee}const Se={};Se[a.TEXTURE_2D]=ee(a.TEXTURE_2D,a.TEXTURE_2D,1),Se[a.TEXTURE_CUBE_MAP]=ee(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[a.TEXTURE_2D_ARRAY]=ee(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Se[a.TEXTURE_3D]=ee(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Me(a.DEPTH_TEST),u.setFunc(fo),an(!1),rn(sx),Me(a.CULL_FACE),Mt(Na);function Me(Y){_[Y]!==!0&&(a.enable(Y),_[Y]=!0)}function Ne(Y){_[Y]!==!1&&(a.disable(Y),_[Y]=!1)}function Je(Y,we){return g[Y]!==we?(a.bindFramebuffer(Y,we),g[Y]=we,Y===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=we),Y===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=we),!0):!1}function Ze(Y,we){let xe=E,Le=!1;if(Y){xe=S.get(we),xe===void 0&&(xe=[],S.set(we,xe));const Be=Y.textures;if(xe.length!==Be.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Ye=Be.length;Ee<Ye;Ee++)xe[Ee]=a.COLOR_ATTACHMENT0+Ee;xe.length=Be.length,Le=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Le=!0);Le&&a.drawBuffers(xe)}function Vt(Y){return C!==Y?(a.useProgram(Y),C=Y,!0):!1}const ut={[Qr]:a.FUNC_ADD,[f3]:a.FUNC_SUBTRACT,[d3]:a.FUNC_REVERSE_SUBTRACT};ut[h3]=a.MIN,ut[p3]=a.MAX;const bt={[m3]:a.ZERO,[g3]:a.ONE,[v3]:a.SRC_COLOR,[mp]:a.SRC_ALPHA,[M3]:a.SRC_ALPHA_SATURATE,[S3]:a.DST_COLOR,[x3]:a.DST_ALPHA,[_3]:a.ONE_MINUS_SRC_COLOR,[gp]:a.ONE_MINUS_SRC_ALPHA,[b3]:a.ONE_MINUS_DST_COLOR,[y3]:a.ONE_MINUS_DST_ALPHA,[E3]:a.CONSTANT_COLOR,[T3]:a.ONE_MINUS_CONSTANT_COLOR,[A3]:a.CONSTANT_ALPHA,[R3]:a.ONE_MINUS_CONSTANT_ALPHA};function Mt(Y,we,xe,Le,Be,Ee,Ye,ke,$t,Pt){if(Y===Na){b===!0&&(Ne(a.BLEND),b=!1);return}if(b===!1&&(Me(a.BLEND),b=!0),Y!==u3){if(Y!==y||Pt!==k){if((P!==Qr||L!==Qr)&&(a.blendEquation(a.FUNC_ADD),P=Qr,L=Qr),Pt)switch(Y){case oo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ox:a.blendFunc(a.ONE,a.ONE);break;case lx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case cx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Rt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case oo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ox:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case lx:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cx:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",Y);break}z=null,w=null,U=null,F=null,T.set(0,0,0),I=0,y=Y,k=Pt}return}Be=Be||we,Ee=Ee||xe,Ye=Ye||Le,(we!==P||Be!==L)&&(a.blendEquationSeparate(ut[we],ut[Be]),P=we,L=Be),(xe!==z||Le!==w||Ee!==U||Ye!==F)&&(a.blendFuncSeparate(bt[xe],bt[Le],bt[Ee],bt[Ye]),z=xe,w=Le,U=Ee,F=Ye),(ke.equals(T)===!1||$t!==I)&&(a.blendColor(ke.r,ke.g,ke.b,$t),T.copy(ke),I=$t),y=Y,k=!1}function mt(Y,we){Y.side===wa?Ne(a.CULL_FACE):Me(a.CULL_FACE);let xe=Y.side===ei;we&&(xe=!xe),an(xe),Y.blending===oo&&Y.transparent===!1?Mt(Na):Mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Le=Y.stencilWrite;h.setTest(Le),Le&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),dn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Me(a.SAMPLE_ALPHA_TO_COVERAGE):Ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function an(Y){H!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),H=Y)}function rn(Y){Y!==o3?(Me(a.CULL_FACE),Y!==K&&(Y===sx?a.cullFace(a.BACK):Y===l3?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ne(a.CULL_FACE),K=Y}function sn(Y){Y!==ue&&(V&&a.lineWidth(Y),ue=Y)}function dn(Y,we,xe){Y?(Me(a.POLYGON_OFFSET_FILL),(fe!==we||q!==xe)&&(fe=we,q=xe,u.getReversed()&&(we=-we),a.polygonOffset(we,xe))):Ne(a.POLYGON_OFFSET_FILL)}function Zt(Y){Y?Me(a.SCISSOR_TEST):Ne(a.SCISSOR_TEST)}function on(Y){Y===void 0&&(Y=a.TEXTURE0+N-1),Te!==Y&&(a.activeTexture(Y),Te=Y)}function Z(Y,we,xe){xe===void 0&&(Te===null?xe=a.TEXTURE0+N-1:xe=Te);let Le=D[xe];Le===void 0&&(Le={type:void 0,texture:void 0},D[xe]=Le),(Le.type!==Y||Le.texture!==we)&&(Te!==xe&&(a.activeTexture(xe),Te=xe),a.bindTexture(Y,we||Se[Y]),Le.type=Y,Le.texture=we)}function kt(){const Y=D[Te];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Nt(){try{a.compressedTexImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function O(){try{a.compressedTexImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function M(){try{a.texSubImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function J(){try{a.texSubImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function se(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function Ce(){try{a.texStorage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function Ue(){try{a.texStorage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function pe(){try{a.texImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function ge(){try{a.texImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function De(Y){return v[Y]!==void 0?v[Y]:a.getParameter(Y)}function He(Y,we){v[Y]!==we&&(a.pixelStorei(Y,we),v[Y]=we)}function Ie(Y){_e.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function Oe(Y){Ae.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Ae.copy(Y))}function $e(Y,we){let xe=p.get(we);xe===void 0&&(xe=new WeakMap,p.set(we,xe));let Le=xe.get(Y);Le===void 0&&(Le=a.getUniformBlockIndex(we,Y.name),xe.set(Y,Le))}function et(Y,we){const Le=p.get(we).get(Y);m.get(we)!==Le&&(a.uniformBlockBinding(we,Le,Y.__bindingPointIndex),m.set(we,Le))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},v={},Te=null,D={},g={},S=new WeakMap,E=[],C=null,b=!1,y=null,P=null,z=null,w=null,L=null,U=null,F=null,T=new St(0,0,0),I=0,k=!1,H=null,K=null,ue=null,fe=null,q=null,_e.set(0,0,a.canvas.width,a.canvas.height),Ae.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Me,disable:Ne,bindFramebuffer:Je,drawBuffers:Ze,useProgram:Vt,setBlending:Mt,setMaterial:mt,setFlipSided:an,setCullFace:rn,setLineWidth:sn,setPolygonOffset:dn,setScissorTest:Zt,activeTexture:on,bindTexture:Z,unbindTexture:kt,compressedTexImage2D:Nt,compressedTexImage3D:O,texImage2D:pe,texImage3D:ge,pixelStorei:He,getParameter:De,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:J,compressedTexSubImage2D:se,compressedTexSubImage3D:me,scissor:Ie,viewport:Oe,reset:ot}}function dL(a,e,i,r,l,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,M){return E?new OffscreenCanvas(O,M):Xu("canvas")}function b(O,M,J){let se=1;const me=Nt(O);if((me.width>J||me.height>J)&&(se=J/Math.max(me.width,me.height)),se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ce=Math.floor(se*me.width),Ue=Math.floor(se*me.height);g===void 0&&(g=C(Ce,Ue));const pe=M?C(Ce,Ue):g;return pe.width=Ce,pe.height=Ue,pe.getContext("2d").drawImage(O,0,0,Ce,Ue),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ce+"x"+Ue+")."),pe}else return"data"in O&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function y(O){return O.generateMipmaps}function P(O){a.generateMipmap(O)}function z(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(O,M,J,se,me,Ce=!1){if(O!==null){if(a[O]!==void 0)return a[O];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ue;se&&(Ue=e.get("EXT_texture_norm16"),Ue||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=M;if(M===a.RED&&(J===a.FLOAT&&(pe=a.R32F),J===a.HALF_FLOAT&&(pe=a.R16F),J===a.UNSIGNED_BYTE&&(pe=a.R8),J===a.UNSIGNED_SHORT&&Ue&&(pe=Ue.R16_EXT),J===a.SHORT&&Ue&&(pe=Ue.R16_SNORM_EXT)),M===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.R8UI),J===a.UNSIGNED_SHORT&&(pe=a.R16UI),J===a.UNSIGNED_INT&&(pe=a.R32UI),J===a.BYTE&&(pe=a.R8I),J===a.SHORT&&(pe=a.R16I),J===a.INT&&(pe=a.R32I)),M===a.RG&&(J===a.FLOAT&&(pe=a.RG32F),J===a.HALF_FLOAT&&(pe=a.RG16F),J===a.UNSIGNED_BYTE&&(pe=a.RG8),J===a.UNSIGNED_SHORT&&Ue&&(pe=Ue.RG16_EXT),J===a.SHORT&&Ue&&(pe=Ue.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RG8UI),J===a.UNSIGNED_SHORT&&(pe=a.RG16UI),J===a.UNSIGNED_INT&&(pe=a.RG32UI),J===a.BYTE&&(pe=a.RG8I),J===a.SHORT&&(pe=a.RG16I),J===a.INT&&(pe=a.RG32I)),M===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),J===a.UNSIGNED_INT&&(pe=a.RGB32UI),J===a.BYTE&&(pe=a.RGB8I),J===a.SHORT&&(pe=a.RGB16I),J===a.INT&&(pe=a.RGB32I)),M===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),J===a.UNSIGNED_INT&&(pe=a.RGBA32UI),J===a.BYTE&&(pe=a.RGBA8I),J===a.SHORT&&(pe=a.RGBA16I),J===a.INT&&(pe=a.RGBA32I)),M===a.RGB&&(J===a.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGB16_EXT),J===a.SHORT&&Ue&&(pe=Ue.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),M===a.RGBA){const ge=Ce?Vu:Tt.getTransfer(me);J===a.FLOAT&&(pe=a.RGBA32F),J===a.HALF_FLOAT&&(pe=a.RGBA16F),J===a.UNSIGNED_BYTE&&(pe=ge===Gt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGBA16_EXT),J===a.SHORT&&Ue&&(pe=Ue.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(O,M){let J;return O?M===null||M===aa||M===Cl?J=a.DEPTH24_STENCIL8:M===ea?J=a.DEPTH32F_STENCIL8:M===Rl&&(J=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===aa||M===Cl?J=a.DEPTH_COMPONENT24:M===ea?J=a.DEPTH_COMPONENT32F:M===Rl&&(J=a.DEPTH_COMPONENT16),J}function U(O,M){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Pn&&O.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function F(O){const M=O.target;M.removeEventListener("dispose",F),I(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(O){const M=O.target;M.removeEventListener("dispose",T),H(M)}function I(O){const M=r.get(O);if(M.__webglInit===void 0)return;const J=O.source,se=S.get(J);if(se){const me=se[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&k(O),Object.keys(se).length===0&&S.delete(J)}r.remove(O)}function k(O){const M=r.get(O);a.deleteTexture(M.__webglTexture);const J=O.source,se=S.get(J);delete se[M.__cacheKey],u.memory.textures--}function H(O){const M=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let me=0;me<M.__webglFramebuffer[se].length;me++)a.deleteFramebuffer(M.__webglFramebuffer[se][me]);else a.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)a.deleteFramebuffer(M.__webglFramebuffer[se]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=O.textures;for(let se=0,me=J.length;se<me;se++){const Ce=r.get(J[se]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove(J[se])}r.remove(O)}let K=0;function ue(){K=0}function fe(){return K}function q(O){K=O}function N(){const O=K;return O>=l.maxTextures&&st("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),K+=1,O}function V(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function $(O,M){const J=r.get(O);if(O.isVideoTexture&&Z(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const se=O.image;if(se===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(J,O,M);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+M)}function de(O,M){const J=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){Ne(J,O,M);return}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+M)}function Te(O,M){const J=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){Ne(J,O,M);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+M)}function D(O,M){const J=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&J.__version!==O.version){Je(J,O,M);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+M)}const W={[Ep]:a.REPEAT,[Da]:a.CLAMP_TO_EDGE,[Tp]:a.MIRRORED_REPEAT},he={[Pn]:a.NEAREST,[D3]:a.NEAREST_MIPMAP_NEAREST,[$c]:a.NEAREST_MIPMAP_LINEAR,[Gn]:a.LINEAR,[bh]:a.LINEAR_MIPMAP_NEAREST,[es]:a.LINEAR_MIPMAP_LINEAR},_e={[U3]:a.NEVER,[F3]:a.ALWAYS,[O3]:a.LESS,[Rm]:a.LEQUAL,[P3]:a.EQUAL,[Cm]:a.GEQUAL,[I3]:a.GREATER,[z3]:a.NOTEQUAL};function Ae(O,M){if(M.type===ea&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===bh||M.magFilter===$c||M.magFilter===es||M.minFilter===Gn||M.minFilter===bh||M.minFilter===$c||M.minFilter===es)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,W[M.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,W[M.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,W[M.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,he[M.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==$c&&M.minFilter!==es||M.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ee(O,M){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",F));const se=M.source;let me=S.get(se);me===void 0&&(me={},S.set(se,me));const Ce=V(M);if(Ce!==O.__cacheKey){me[Ce]===void 0&&(me[Ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),me[Ce].usedTimes++;const Ue=me[O.__cacheKey];Ue!==void 0&&(me[O.__cacheKey].usedTimes--,Ue.usedTimes===0&&k(M)),O.__cacheKey=Ce,O.__webglTexture=me[Ce].texture}return J}function Se(O,M,J){return Math.floor(Math.floor(O/J)/M)}function Me(O,M,J,se){const Ce=O.updateRanges;if(Ce.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,J,se,M.data);else{Ce.sort((He,Ie)=>He.start-Ie.start);let Ue=0;for(let He=1;He<Ce.length;He++){const Ie=Ce[Ue],Oe=Ce[He],$e=Ie.start+Ie.count,et=Se(Oe.start,M.width,4),ot=Se(Ie.start,M.width,4);Oe.start<=$e+1&&et===ot&&Se(Oe.start+Oe.count-1,M.width,4)===et?Ie.count=Math.max(Ie.count,Oe.start+Oe.count-Ie.start):(++Ue,Ce[Ue]=Oe)}Ce.length=Ue+1;const pe=i.getParameter(a.UNPACK_ROW_LENGTH),ge=i.getParameter(a.UNPACK_SKIP_PIXELS),De=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let He=0,Ie=Ce.length;He<Ie;He++){const Oe=Ce[He],$e=Math.floor(Oe.start/4),et=Math.ceil(Oe.count/4),ot=$e%M.width,Y=Math.floor($e/M.width),we=et,xe=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,ot,Y,we,xe,J,se,M.data)}O.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,pe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(a.UNPACK_SKIP_ROWS,De)}}function Ne(O,M,J){let se=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=a.TEXTURE_3D);const me=ee(O,M),Ce=M.source;i.bindTexture(se,O.__webglTexture,a.TEXTURE0+J);const Ue=r.get(Ce);if(Ce.version!==Ue.__version||me===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const xe=Tt.getPrimaries(Tt.workingColorSpace),Le=M.colorSpace===_r?null:Tt.getPrimaries(M.colorSpace),Be=M.colorSpace===_r||xe===Le?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=b(M.image,!1,l.maxTextureSize);ge=kt(M,ge);const De=c.convert(M.format,M.colorSpace),He=c.convert(M.type);let Ie=w(M.internalFormat,De,He,M.normalized,M.colorSpace,M.isVideoTexture);Ae(se,M);let Oe;const $e=M.mipmaps,et=M.isVideoTexture!==!0,ot=Ue.__version===void 0||me===!0,Y=Ce.dataReady,we=U(M,ge);if(M.isDepthTexture)Ie=L(M.format===ts,M.type),ot&&(et?i.texStorage2D(a.TEXTURE_2D,1,Ie,ge.width,ge.height):i.texImage2D(a.TEXTURE_2D,0,Ie,ge.width,ge.height,0,De,He,null));else if(M.isDataTexture)if($e.length>0){et&&ot&&i.texStorage2D(a.TEXTURE_2D,we,Ie,$e[0].width,$e[0].height);for(let xe=0,Le=$e.length;xe<Le;xe++)Oe=$e[xe],et?Y&&i.texSubImage2D(a.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,De,He,Oe.data):i.texImage2D(a.TEXTURE_2D,xe,Ie,Oe.width,Oe.height,0,De,He,Oe.data);M.generateMipmaps=!1}else et?(ot&&i.texStorage2D(a.TEXTURE_2D,we,Ie,ge.width,ge.height),Y&&Me(M,ge,De,He)):i.texImage2D(a.TEXTURE_2D,0,Ie,ge.width,ge.height,0,De,He,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&ot&&i.texStorage3D(a.TEXTURE_2D_ARRAY,we,Ie,$e[0].width,$e[0].height,ge.depth);for(let xe=0,Le=$e.length;xe<Le;xe++)if(Oe=$e[xe],M.format!==Gi)if(De!==null)if(et){if(Y)if(M.layerUpdates.size>0){const Be=Gx(Oe.width,Oe.height,M.format,M.type);for(const Ee of M.layerUpdates){const Ye=Oe.data.subarray(Ee*Be/Oe.data.BYTES_PER_ELEMENT,(Ee+1)*Be/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,Ee,Oe.width,Oe.height,1,De,Ye)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Oe.width,Oe.height,ge.depth,De,Oe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Ie,Oe.width,Oe.height,ge.depth,0,Oe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Y&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Oe.width,Oe.height,ge.depth,De,He,Oe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,xe,Ie,Oe.width,Oe.height,ge.depth,0,De,He,Oe.data)}else{et&&ot&&i.texStorage2D(a.TEXTURE_2D,we,Ie,$e[0].width,$e[0].height);for(let xe=0,Le=$e.length;xe<Le;xe++)Oe=$e[xe],M.format!==Gi?De!==null?et?Y&&i.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,De,Oe.data):i.compressedTexImage2D(a.TEXTURE_2D,xe,Ie,Oe.width,Oe.height,0,Oe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Y&&i.texSubImage2D(a.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,De,He,Oe.data):i.texImage2D(a.TEXTURE_2D,xe,Ie,Oe.width,Oe.height,0,De,He,Oe.data)}else if(M.isDataArrayTexture)if(et){if(ot&&i.texStorage3D(a.TEXTURE_2D_ARRAY,we,Ie,ge.width,ge.height,ge.depth),Y)if(M.layerUpdates.size>0){const xe=Gx(ge.width,ge.height,M.format,M.type);for(const Le of M.layerUpdates){const Be=ge.data.subarray(Le*xe/ge.data.BYTES_PER_ELEMENT,(Le+1)*xe/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Le,ge.width,ge.height,1,De,He,Be)}M.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,De,He,ge.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,De,He,ge.data);else if(M.isData3DTexture)et?(ot&&i.texStorage3D(a.TEXTURE_3D,we,Ie,ge.width,ge.height,ge.depth),Y&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,De,He,ge.data)):i.texImage3D(a.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,De,He,ge.data);else if(M.isFramebufferTexture){if(ot)if(et)i.texStorage2D(a.TEXTURE_2D,we,Ie,ge.width,ge.height);else{let xe=ge.width,Le=ge.height;for(let Be=0;Be<we;Be++)i.texImage2D(a.TEXTURE_2D,Be,Ie,xe,Le,0,De,He,null),xe>>=1,Le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ge.parentNode!==xe){xe.appendChild(ge),v.add(M),xe.onpaint=Le=>{const Be=Le.changedElements;for(const Ee of v)Be.includes(Ee.image)&&(Ee.needsUpdate=!0)},xe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ge);else{const Be=a.RGBA,Ee=a.RGBA,Ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Be,Ee,Ye,ge)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&ot){const xe=Nt($e[0]);i.texStorage2D(a.TEXTURE_2D,we,Ie,xe.width,xe.height)}for(let xe=0,Le=$e.length;xe<Le;xe++)Oe=$e[xe],et?Y&&i.texSubImage2D(a.TEXTURE_2D,xe,0,0,De,He,Oe):i.texImage2D(a.TEXTURE_2D,xe,Ie,De,He,Oe);M.generateMipmaps=!1}else if(et){if(ot){const xe=Nt(ge);i.texStorage2D(a.TEXTURE_2D,we,Ie,xe.width,xe.height)}Y&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,De,He,ge)}else i.texImage2D(a.TEXTURE_2D,0,Ie,De,He,ge);y(M)&&P(se),Ue.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Je(O,M,J){if(M.image.length!==6)return;const se=ee(O,M),me=M.source;i.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+J);const Ce=r.get(me);if(me.version!==Ce.__version||se===!0){i.activeTexture(a.TEXTURE0+J);const Ue=Tt.getPrimaries(Tt.workingColorSpace),pe=M.colorSpace===_r?null:Tt.getPrimaries(M.colorSpace),ge=M.colorSpace===_r||Ue===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,Ie=[];for(let Ee=0;Ee<6;Ee++)!De&&!He?Ie[Ee]=b(M.image[Ee],!0,l.maxCubemapSize):Ie[Ee]=He?M.image[Ee].image:M.image[Ee],Ie[Ee]=kt(M,Ie[Ee]);const Oe=Ie[0],$e=c.convert(M.format,M.colorSpace),et=c.convert(M.type),ot=w(M.internalFormat,$e,et,M.normalized,M.colorSpace),Y=M.isVideoTexture!==!0,we=Ce.__version===void 0||se===!0,xe=me.dataReady;let Le=U(M,Oe);Ae(a.TEXTURE_CUBE_MAP,M);let Be;if(De){Y&&we&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ot,Oe.width,Oe.height);for(let Ee=0;Ee<6;Ee++){Be=Ie[Ee].mipmaps;for(let Ye=0;Ye<Be.length;Ye++){const ke=Be[Ye];M.format!==Gi?$e!==null?Y?xe&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,0,0,ke.width,ke.height,$e,ke.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,ot,ke.width,ke.height,0,ke.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,0,0,ke.width,ke.height,$e,et,ke.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,ot,ke.width,ke.height,0,$e,et,ke.data)}}}else{if(Be=M.mipmaps,Y&&we){Be.length>0&&Le++;const Ee=Nt(Ie[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ot,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(He){Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ie[Ee].width,Ie[Ee].height,$e,et,Ie[Ee].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ot,Ie[Ee].width,Ie[Ee].height,0,$e,et,Ie[Ee].data);for(let Ye=0;Ye<Be.length;Ye++){const $t=Be[Ye].image[Ee].image;Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,0,0,$t.width,$t.height,$e,et,$t.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,ot,$t.width,$t.height,0,$e,et,$t.data)}}else{Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,$e,et,Ie[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ot,$e,et,Ie[Ee]);for(let Ye=0;Ye<Be.length;Ye++){const ke=Be[Ye];Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,0,0,$e,et,ke.image[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,ot,$e,et,ke.image[Ee])}}}y(M)&&P(a.TEXTURE_CUBE_MAP),Ce.__version=me.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Ze(O,M,J,se,me,Ce){const Ue=c.convert(J.format,J.colorSpace),pe=c.convert(J.type),ge=w(J.internalFormat,Ue,pe,J.normalized,J.colorSpace),De=r.get(M),He=r.get(J);if(He.__renderTarget=M,!De.__hasExternalTextures){const Ie=Math.max(1,M.width>>Ce),Oe=Math.max(1,M.height>>Ce);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?i.texImage3D(me,Ce,ge,Ie,Oe,M.depth,0,Ue,pe,null):i.texImage2D(me,Ce,ge,Ie,Oe,0,Ue,pe,null)}i.bindFramebuffer(a.FRAMEBUFFER,O),on(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,me,He.__webglTexture,0,Zt(M)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,se,me,He.__webglTexture,Ce),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Vt(O,M,J){if(a.bindRenderbuffer(a.RENDERBUFFER,O),M.depthBuffer){const se=M.depthTexture,me=se&&se.isDepthTexture?se.type:null,Ce=L(M.stencilBuffer,me),Ue=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;on(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Zt(M),Ce,M.width,M.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Zt(M),Ce,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ue,a.RENDERBUFFER,O)}else{const se=M.textures;for(let me=0;me<se.length;me++){const Ce=se[me],Ue=c.convert(Ce.format,Ce.colorSpace),pe=c.convert(Ce.type),ge=w(Ce.internalFormat,Ue,pe,Ce.normalized,Ce.colorSpace);on(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Zt(M),ge,M.width,M.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Zt(M),ge,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ge,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(O,M,J){const se=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),Ae(a.TEXTURE_CUBE_MAP,M.depthTexture);const De=c.convert(M.depthTexture.format),He=c.convert(M.depthTexture.type);let Ie;M.depthTexture.format===Ia?Ie=a.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(Ie=a.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ie,M.width,M.height,0,De,He,null)}}else $(M.depthTexture,0);const Ce=me.__webglTexture,Ue=Zt(M),pe=se?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,ge=M.depthTexture.format===ts?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ia)on(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,Ce,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,Ce,0);else if(M.depthTexture.format===ts)on(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,Ce,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(O){const M=r.get(O),J=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const se=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",me)};se.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=se}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(J)for(let se=0;se<6;se++)ut(M.__webglFramebuffer[se],O,se);else{const se=O.texture.mipmaps;se&&se.length>0?ut(M.__webglFramebuffer[0],O,0):ut(M.__webglFramebuffer,O,0)}else if(J){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=a.createRenderbuffer(),Vt(M.__webglDepthbuffer[se],O,!1);else{const me=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[se];a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Ce)}}else{const se=O.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),Vt(M.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Ce)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Mt(O,M,J){const se=r.get(O);M!==void 0&&Ze(se.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&bt(O)}function mt(O){const M=O.texture,J=r.get(O),se=r.get(M);O.addEventListener("dispose",T);const me=O.textures,Ce=O.isWebGLCubeRenderTarget===!0,Ue=me.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture()),se.__version=M.version,u.memory.textures++),Ce){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)J.__webglFramebuffer[pe][ge]=a.createFramebuffer()}else J.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)J.__webglFramebuffer[pe]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Ue)for(let pe=0,ge=me.length;pe<ge;pe++){const De=r.get(me[pe]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),u.memory.textures++)}if(O.samples>0&&on(O)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<me.length;pe++){const ge=me[pe];J.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const De=c.convert(ge.format,ge.colorSpace),He=c.convert(ge.type),Ie=w(ge.internalFormat,De,He,ge.normalized,ge.colorSpace,O.isXRRenderTarget===!0),Oe=Zt(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Oe,Ie,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),Vt(J.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture),Ae(a.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Ze(J.__webglFramebuffer[pe][ge],O,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Ze(J.__webglFramebuffer[pe],O,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(M)&&P(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let pe=0,ge=me.length;pe<ge;pe++){const De=me[pe],He=r.get(De);let Ie=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ie,He.__webglTexture),Ae(Ie,De),Ze(J.__webglFramebuffer,O,De,a.COLOR_ATTACHMENT0+pe,Ie,0),y(De)&&P(Ie)}i.unbindTexture()}else{let pe=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(pe=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(pe,se.__webglTexture),Ae(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Ze(J.__webglFramebuffer[ge],O,M,a.COLOR_ATTACHMENT0,pe,ge);else Ze(J.__webglFramebuffer,O,M,a.COLOR_ATTACHMENT0,pe,0);y(M)&&P(pe),i.unbindTexture()}O.depthBuffer&&bt(O)}function an(O){const M=O.textures;for(let J=0,se=M.length;J<se;J++){const me=M[J];if(y(me)){const Ce=z(O),Ue=r.get(me).__webglTexture;i.bindTexture(Ce,Ue),P(Ce),i.unbindTexture()}}}const rn=[],sn=[];function dn(O){if(O.samples>0){if(on(O)===!1){const M=O.textures,J=O.width,se=O.height;let me=a.COLOR_BUFFER_BIT;const Ce=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=r.get(O),pe=M.length>1;if(pe)for(let De=0;De<M.length;De++)i.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const ge=O.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<M.length;De++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const He=r.get(M[De]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,J,se,0,0,J,se,me,a.NEAREST),m===!0&&(rn.length=0,sn.length=0,rn.push(a.COLOR_ATTACHMENT0+De),O.depthBuffer&&O.resolveDepthBuffer===!1&&(rn.push(Ce),sn.push(Ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,sn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,rn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<M.length;De++){i.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const He=r.get(M[De]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,He,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const M=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Zt(O){return Math.min(l.maxSamples,O.samples)}function on(O){const M=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(O){const M=u.render.frame;_.get(O)!==M&&(_.set(O,M),O.update())}function kt(O,M){const J=O.colorSpace,se=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==Gu&&J!==_r&&(Tt.getTransfer(J)===Gt?(se!==Gi||me!==wi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",J)),M}function Nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=N,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=de,this.setTexture3D=Te,this.setTextureCube=D,this.rebindTextures=Mt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hL(a,e){function i(r,l=_r){let c;const u=Tt.getTransfer(l);if(r===wi)return a.UNSIGNED_BYTE;if(r===bm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Mm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===PS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===IS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===US)return a.BYTE;if(r===OS)return a.SHORT;if(r===Rl)return a.UNSIGNED_SHORT;if(r===Sm)return a.INT;if(r===aa)return a.UNSIGNED_INT;if(r===ea)return a.FLOAT;if(r===Pa)return a.HALF_FLOAT;if(r===zS)return a.ALPHA;if(r===FS)return a.RGB;if(r===Gi)return a.RGBA;if(r===Ia)return a.DEPTH_COMPONENT;if(r===ts)return a.DEPTH_STENCIL;if(r===BS)return a.RED;if(r===Em)return a.RED_INTEGER;if(r===ss)return a.RG;if(r===Tm)return a.RG_INTEGER;if(r===Am)return a.RGBA_INTEGER;if(r===Nu||r===Lu||r===Uu||r===Ou)if(u===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ap||r===Rp||r===Cp||r===wp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ap)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dp||r===Np||r===Lp||r===Up||r===Op||r===Bu||r===Pp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Dp||r===Np)return u===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Lp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Up)return c.COMPRESSED_R11_EAC;if(r===Op)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Bu)return c.COMPRESSED_RG11_EAC;if(r===Pp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ip||r===zp||r===Fp||r===Bp||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===qp||r===Yp||r===jp||r===Zp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ip)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zp)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kp||r===Qp||r===Jp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Kp)return u===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$p||r===em||r===Hu||r===tm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$p)return c.COMPRESSED_RED_RGTC1_EXT;if(r===em)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const pL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mL=`
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

}`;class gL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new ZS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new gi({vertexShader:pL,fragmentShader:mL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new za(new ef(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vL extends ls{constructor(e,i){super();const r=this;let l=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const C=typeof XRWebGLBinding<"u",b=new gL,y={},P=i.getContextAttributes();let z=null,w=null;const L=[],U=[],F=new Ut;let T=null;const I=new Ci;I.viewport=new un;const k=new Ci;k.viewport=new un;const H=[I,k],K=new AR;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Se=L[ee];return Se===void 0&&(Se=new Dh,L[ee]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ee){let Se=L[ee];return Se===void 0&&(Se=new Dh,L[ee]=Se),Se.getGripSpace()},this.getHand=function(ee){let Se=L[ee];return Se===void 0&&(Se=new Dh,L[ee]=Se),Se.getHandSpace()};function q(ee){const Se=U.indexOf(ee.inputSource);if(Se===-1)return;const Me=L[Se];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,p||u),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function N(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",V);for(let ee=0;ee<L.length;ee++){const Se=U[ee];Se!==null&&(U[ee]=null,L[ee].disconnect(Se))}ue=null,fe=null,b.reset();for(const ee in y)delete y[ee];e.setRenderTarget(z),S=null,g=null,v=null,l=null,w=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",N),l.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ne=null,Je=null;P.depth&&(Je=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=P.stencil?ts:Ia,Ne=P.stencil?Cl:aa);const Ze={colorFormat:i.RGBA8,depthFormat:Je,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Ze),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new ia(g.textureWidth,g.textureHeight,{format:Gi,type:wi,depthTexture:new po(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new ia(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(ee){for(let Se=0;Se<ee.removed.length;Se++){const Me=ee.removed[Se],Ne=U.indexOf(Me);Ne>=0&&(U[Ne]=null,L[Ne].disconnect(Me))}for(let Se=0;Se<ee.added.length;Se++){const Me=ee.added[Se];let Ne=U.indexOf(Me);if(Ne===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=U.length){U.push(Me),Ne=Ze;break}else if(U[Ze]===null){U[Ze]=Me,Ne=Ze;break}if(Ne===-1)break}const Je=L[Ne];Je&&Je.connect(Me)}}const $=new ie,de=new ie;function Te(ee,Se,Me){$.setFromMatrixPosition(Se.matrixWorld),de.setFromMatrixPosition(Me.matrixWorld);const Ne=$.distanceTo(de),Je=Se.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,Vt=Je[14]/(Je[10]-1),ut=Je[14]/(Je[10]+1),bt=(Je[9]+1)/Je[5],Mt=(Je[9]-1)/Je[5],mt=(Je[8]-1)/Je[0],an=(Ze[8]+1)/Ze[0],rn=Vt*mt,sn=Vt*an,dn=Ne/(-mt+an),Zt=dn*-mt;if(Se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Zt),ee.translateZ(dn),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Je[10]===-1)ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const on=Vt+dn,Z=ut+dn,kt=rn-Zt,Nt=sn+(Ne-Zt),O=bt*ut/Z*on,M=Mt*ut/Z*on;ee.projectionMatrix.makePerspective(kt,Nt,O,M,on,Z),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function D(ee,Se){Se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let Se=ee.near,Me=ee.far;b.texture!==null&&(b.depthNear>0&&(Se=b.depthNear),b.depthFar>0&&(Me=b.depthFar)),K.near=k.near=I.near=Se,K.far=k.far=I.far=Me,(ue!==K.near||fe!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ue=K.near,fe=K.far),K.layers.mask=ee.layers.mask|6,I.layers.mask=K.layers.mask&-5,k.layers.mask=K.layers.mask&-3;const Ne=ee.parent,Je=K.cameras;D(K,Ne);for(let Ze=0;Ze<Je.length;Ze++)D(Je[Ze],Ne);Je.length===2?Te(K,I,k):K.projectionMatrix.copy(I.projectionMatrix),W(ee,K,Ne)};function W(ee,Se,Me){Me===null?ee.matrix.copy(Se.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=nm*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(K)},this.getCameraTexture=function(ee){return y[ee]};let he=null;function _e(ee,Se){if(_=Se.getViewerPose(p||u),E=Se,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Ne=!1;Me.length!==K.cameras.length&&(K.cameras.length=0,Ne=!0);for(let ut=0;ut<Me.length;ut++){const bt=Me[ut];let Mt=null;if(S!==null)Mt=S.getViewport(bt);else{const an=v.getViewSubImage(g,bt);Mt=an.viewport,ut===0&&(e.setRenderTargetTextures(w,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(w))}let mt=H[ut];mt===void 0&&(mt=new Ci,mt.layers.enable(ut),mt.viewport=new un,H[ut]=mt),mt.matrix.fromArray(bt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(bt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ut===0&&(K.matrix.copy(mt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ne===!0&&K.cameras.push(mt)}const Je=l.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ut=v.getDepthInformation(Me[0]);ut&&ut.isValid&&ut.texture&&b.init(ut,l.renderState)}if(Je&&Je.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ut=0;ut<Me.length;ut++){const bt=Me[ut].camera;if(bt){let Mt=y[bt];Mt||(Mt=new ZS,y[bt]=Mt);const mt=v.getCameraImage(bt);Mt.sourceTexture=mt}}}}for(let Me=0;Me<L.length;Me++){const Ne=U[Me],Je=L[Me];Ne!==null&&Je!==void 0&&Je.update(Ne,Se,p||u)}he&&he(ee,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),E=null}const Ae=new $S;Ae.setAnimationLoop(_e),this.setAnimationLoop=function(ee){he=ee},this.dispose=function(){}}}const _L=new fn,s1=new ct;s1.set(-1,0,0,0,1,0,0,0,1);function xL(a,e){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function r(b,y){y.color.getRGB(b.fogColor.value,KS(a)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,P,z,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,w)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),C(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(u(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,P,z):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ei&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ei&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y),z=P.envMap,w=P.envMapRotation;z&&(b.envMap.value=z,b.envMapRotation.value.setFromMatrix4(_L.makeRotationFromEuler(w)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(s1),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function u(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,P,z){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=z*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function C(b,y){const P=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yL(a,e,i,r){let l={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,L){const U=L.program;r.uniformBlockBinding(w,U)}function p(w,L){let U=l[w.id];U===void 0&&(b(w),U=_(w),l[w.id]=U,w.addEventListener("dispose",P));const F=L.program;r.updateUBOMapping(w,F);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function _(w){const L=v();w.__bindingPointIndex=L;const U=a.createBuffer(),F=w.__size,T=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,F,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,U),U}function v(){for(let w=0;w<h;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const L=l[w.id],U=w.uniforms,F=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let T=0,I=U.length;T<I;T++){const k=U[T];if(Array.isArray(k))for(let H=0,K=k.length;H<K;H++)S(k[H],T,H,F);else S(k,T,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(w,L,U,F){if(C(w,L,U,F)===!0){const T=w.__offset,I=w.value;if(Array.isArray(I)){let k=0;for(let H=0;H<I.length;H++){const K=I[H],ue=y(K);E(K,w.__data,k),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(k+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,w.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,w.__data)}}function E(w,L,U){typeof w=="number"||typeof w=="boolean"?L[0]=w:w.isMatrix3?(L[0]=w.elements[0],L[1]=w.elements[1],L[2]=w.elements[2],L[3]=0,L[4]=w.elements[3],L[5]=w.elements[4],L[6]=w.elements[5],L[7]=0,L[8]=w.elements[6],L[9]=w.elements[7],L[10]=w.elements[8],L[11]=0):ArrayBuffer.isView(w)?L.set(new w.constructor(w.buffer,w.byteOffset,L.length)):w.toArray(L,U)}function C(w,L,U,F){const T=w.value,I=L+"_"+U;if(F[I]===void 0)return typeof T=="number"||typeof T=="boolean"?F[I]=T:ArrayBuffer.isView(T)?F[I]=T.slice():F[I]=T.clone(),!0;{const k=F[I];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return F[I]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function b(w){const L=w.uniforms;let U=0;const F=16;for(let I=0,k=L.length;I<k;I++){const H=Array.isArray(L[I])?L[I]:[L[I]];for(let K=0,ue=H.length;K<ue;K++){const fe=H[K],q=Array.isArray(fe.value)?fe.value:[fe.value];for(let N=0,V=q.length;N<V;N++){const $=q[N],de=y($),Te=U%F,D=Te%de.boundary,W=Te+D;U+=D,W!==0&&F-W<de.storage&&(U+=F-W),fe.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=U,U+=de.storage}}}const T=U%F;return T>0&&(U+=F-T),w.__size=U,w.__cache={},this}function y(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):st("WebGLRenderer: Unsupported uniform value type.",w),L}function P(w){const L=w.target;L.removeEventListener("dispose",P);const U=u.indexOf(L.__bindingPointIndex);u.splice(U,1),a.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function z(){for(const w in l)a.deleteBuffer(l[w]);u=[],l={},c={}}return{bind:m,update:p,dispose:z}}const SL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function bL(){return Qi===null&&(Qi=new cR(SL,16,16,ss,Pa),Qi.name="DFG_LUT",Qi.minFilter=Gn,Qi.magFilter=Gn,Qi.wrapS=Da,Qi.wrapT=Da,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class ML{constructor(e={}){const{canvas:i=H3(),context:r=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=wi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=S,b=new Set([Am,Tm,Em]),y=new Set([wi,aa,Rl,Cl,bm,Mm]),P=new Uint32Array(4),z=new Int32Array(4),w=new ie;let L=null,U=null;const F=[],T=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let H=!1,K=null,ue=null,fe=null,q=null;this._outputColorSpace=Ri;let N=0,V=0,$=null,de=-1,Te=null;const D=new un,W=new un;let he=null;const _e=new St(0);let Ae=0,ee=i.width,Se=i.height,Me=1,Ne=null,Je=null;const Ze=new un(0,0,ee,Se),Vt=new un(0,0,ee,Se);let ut=!1;const bt=new YS;let Mt=!1,mt=!1;const an=new fn,rn=new ie,sn=new un,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function on(){return $===null?Me:1}let Z=r;function kt(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ym}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",ii,!1),Z===null){const j="webgl2";if(Z=kt(j,A),Z===null)throw kt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let Nt,O,M,J,se,me,Ce,Ue,pe,ge,De,He,Ie,Oe,$e,et,ot,Y,we,xe,Le,Be,Ee;function Ye(){Nt=new bD(Z),Nt.init(),Le=new hL(Z,Nt),O=new pD(Z,Nt,e,Le),M=new fL(Z,Nt),O.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),ue=Z.createFramebuffer(),fe=Z.createFramebuffer(),q=Z.createFramebuffer(),J=new TD(Z),se=new QN,me=new dL(Z,Nt,M,se,O,Le,J),Ce=new SD(k),Ue=new wR(Z),Be=new dD(Z,Ue),pe=new MD(Z,Ue,J,Be),ge=new RD(Z,pe,Ue,Be,J),Y=new AD(Z,O,me),$e=new mD(se),De=new KN(k,Ce,Nt,O,Be,$e),He=new xL(k,se),Ie=new $N,Oe=new rL(Nt),ot=new fD(k,Ce,M,ge,E,m),et=new uL(k,ge,O),Ee=new yL(Z,J,O,M),we=new hD(Z,Nt,J),xe=new ED(Z,Nt,J),J.programs=De.programs,k.capabilities=O,k.extensions=Nt,k.properties=se,k.renderLists=Ie,k.shadowMap=et,k.state=M,k.info=J}Ye(),C!==wi&&(I=new wD(C,i.width,i.height,h,l,c));const ke=new vL(k,Z);this.xr=ke,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(A){A!==void 0&&(Me=A,this.setSize(ee,Se,!1))},this.getSize=function(A){return A.set(ee,Se)},this.setSize=function(A,j,oe=!0){if(ke.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,Se=j,i.width=Math.floor(A*Me),i.height=Math.floor(j*Me),oe===!0&&(i.style.width=A+"px",i.style.height=j+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ee*Me,Se*Me).floor()},this.setDrawingBufferSize=function(A,j,oe){ee=A,Se=j,Me=oe,i.width=Math.floor(A*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===wi){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Ze)},this.setViewport=function(A,j,oe,ae){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,j,oe,ae),M.viewport(D.copy(Ze).multiplyScalar(Me).round())},this.getScissor=function(A){return A.copy(Vt)},this.setScissor=function(A,j,oe,ae){A.isVector4?Vt.set(A.x,A.y,A.z,A.w):Vt.set(A,j,oe,ae),M.scissor(W.copy(Vt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){M.setScissorTest(ut=A)},this.setOpaqueSort=function(A){Ne=A},this.setTransparentSort=function(A){Je=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,oe=!0){let ae=0;if(A){let re=!1;if($!==null){const ze=$.texture.format;re=b.has(ze)}if(re){const ze=$.texture.type,Ve=y.has(ze),Pe=ot.getClearColor(),We=ot.getClearAlpha(),Xe=Pe.r,tt=Pe.g,ft=Pe.b;Ve?(P[0]=Xe,P[1]=tt,P[2]=ft,P[3]=We,Z.clearBufferuiv(Z.COLOR,0,P)):(z[0]=Xe,z[1]=tt,z[2]=ft,z[3]=We,Z.clearBufferiv(Z.COLOR,0,z))}else ae|=Z.COLOR_BUFFER_BIT}j&&(ae|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",ii,!1),ot.dispose(),Ie.dispose(),Oe.dispose(),se.dispose(),Ce.dispose(),ge.dispose(),Be.dispose(),Ee.dispose(),De.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",mn),ke.removeEventListener("sessionend",Dn),qn.stop()};function $t(A){A.preventDefault(),mx("WebGLRenderer: Context Lost."),H=!0}function Pt(){mx("WebGLRenderer: Context Restored."),H=!1;const A=J.autoReset,j=et.enabled,oe=et.autoUpdate,ae=et.needsUpdate,re=et.type;Ye(),J.autoReset=A,et.enabled=j,et.autoUpdate=oe,et.needsUpdate=ae,et.type=re}function ii(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ai(A){const j=A.target;j.removeEventListener("dispose",ai),yo(j)}function yo(A){So(A),se.remove(A)}function So(A){const j=se.get(A).programs;j!==void 0&&(j.forEach(function(oe){De.releaseProgram(oe)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,oe,ae,re,ze){j===null&&(j=dn);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Pe=Ga(A,j,oe,ae,re);M.setMaterial(ae,Ve);let We=oe.index,Xe=1;if(ae.wireframe===!0){if(We=pe.getWireframeAttribute(oe),We===void 0)return;Xe=2}const tt=oe.drawRange,ft=oe.attributes.position;let Ke=tt.start*Xe,Ct=(tt.start+tt.count)*Xe;ze!==null&&(Ke=Math.max(Ke,ze.start*Xe),Ct=Math.min(Ct,(ze.start+ze.count)*Xe)),We!==null?(Ke=Math.max(Ke,0),Ct=Math.min(Ct,We.count)):ft!=null&&(Ke=Math.max(Ke,0),Ct=Math.min(Ct,ft.count));const en=Ct-Ke;if(en<0||en===1/0)return;Be.setup(re,ae,Pe,oe,We);let Yt,It=we;if(We!==null&&(Yt=Ue.get(We),It=xe,It.setIndex(Yt)),re.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*on()),It.setMode(Z.LINES)):It.setMode(Z.TRIANGLES);else if(re.isLine){let zt=ae.linewidth;zt===void 0&&(zt=1),M.setLineWidth(zt*on()),re.isLineSegments?It.setMode(Z.LINES):re.isLineLoop?It.setMode(Z.LINE_LOOP):It.setMode(Z.LINE_STRIP)}else re.isPoints?It.setMode(Z.POINTS):re.isSprite&&It.setMode(Z.TRIANGLES);if(re.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))It.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const zt=re._multiDrawStarts,Ge=re._multiDrawCounts,zn=re._multiDrawCount,gt=We?Ue.get(We).bytesPerElement:1,bn=se.get(ae).currentProgram.getUniforms();for(let ri=0;ri<zn;ri++)bn.setValue(Z,"_gl_DrawID",ri),It.render(zt[ri]/gt,Ge[ri])}else if(re.isInstancedMesh)It.renderInstances(Ke,en,re.count);else if(oe.isInstancedBufferGeometry){const zt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ge=Math.min(oe.instanceCount,zt);It.renderInstances(Ke,en,Ge)}else It.render(Ke,en)};function bo(A,j,oe){A.transparent===!0&&A.side===wa&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,Ha(A,j,oe),A.side=Mr,A.needsUpdate=!0,Ha(A,j,oe),A.side=wa):Ha(A,j,oe)}this.compile=function(A,j,oe=null){oe===null&&(oe=A),U=Oe.get(oe),U.init(j),T.push(U),oe.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights();const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const ze=re.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){const Pe=ze[Ve];bo(Pe,oe,re),ae.add(Pe)}else bo(ze,oe,re),ae.add(ze)}),U=T.pop(),ae},this.compileAsync=function(A,j,oe=null){const ae=this.compile(A,j,oe);return new Promise(re=>{function ze(){if(ae.forEach(function(Ve){se.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){re(A);return}setTimeout(ze,10)}Nt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let cs=null;function Xi(A){cs&&cs(A)}function mn(){qn.stop()}function Dn(){qn.start()}const qn=new $S;qn.setAnimationLoop(Xi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){cs=A,ke.setAnimationLoop(A),A===null?qn.stop():qn.start()},ke.addEventListener("sessionstart",mn),ke.addEventListener("sessionend",Dn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;K!==null&&K.renderStart(A,j);const oe=ke.enabled===!0&&ke.isPresenting===!0,ae=I!==null&&($===null||oe)&&I.begin(k,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(j),j=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,j,$),U=Oe.get(A,T.length),U.init(j),U.state.textureUnits=me.getTextureUnits(),T.push(U),an.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),bt.setFromProjectionMatrix(an,ta,j.reversedDepth),mt=this.localClippingEnabled,Mt=$e.init(this.clippingPlanes,mt),L=Ie.get(A,F.length),L.init(),F.push(L),ke.enabled===!0&&ke.isPresenting===!0){const Ve=k.xr.getDepthSensingMesh();Ve!==null&&Er(Ve,j,-1/0,k.sortObjects)}Er(A,j,0,k.sortObjects),L.finish(),k.sortObjects===!0&&L.sort(Ne,Je,j.reversedDepth),Zt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Zt&&ot.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&$e.beginShadows();const re=U.state.shadowsArray;if(et.render(re,A,j),Mt===!0&&$e.endShadows(),(ae&&I.hasRenderPass())===!1){const Ve=L.opaque,Pe=L.transmissive;if(U.setupLights(),j.isArrayCamera){const We=j.cameras;if(Pe.length>0)for(let Xe=0,tt=We.length;Xe<tt;Xe++){const ft=We[Xe];zl(Ve,Pe,A,ft)}Zt&&ot.render(A);for(let Xe=0,tt=We.length;Xe<tt;Xe++){const ft=We[Xe];Il(L,A,ft,ft.viewport)}}else Pe.length>0&&zl(Ve,Pe,A,j),Zt&&ot.render(A),Il(L,A,j)}$!==null&&V===0&&(me.updateMultisampleRenderTarget($),me.updateRenderTargetMipmap($)),ae&&I.end(k),A.isScene===!0&&A.onAfterRender(k,A,j),Be.resetDefaultState(),de=-1,Te=null,T.pop(),T.length>0?(U=T[T.length-1],me.setTextureUnits(U.state.textureUnits),Mt===!0&&$e.setGlobalState(k.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,K!==null&&K.renderEnd()};function Er(A,j,oe,ae){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||bt.intersectsSprite(A)){ae&&sn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(an);const Ve=ge.update(A),Pe=A.material;Pe.visible&&L.push(A,Ve,Pe,oe,sn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||bt.intersectsObject(A))){const Ve=ge.update(A),Pe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),sn.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),sn.copy(Ve.boundingSphere.center)),sn.applyMatrix4(A.matrixWorld).applyMatrix4(an)),Array.isArray(Pe)){const We=Ve.groups;for(let Xe=0,tt=We.length;Xe<tt;Xe++){const ft=We[Xe],Ke=Pe[ft.materialIndex];Ke&&Ke.visible&&L.push(A,Ve,Ke,oe,sn.z,ft)}}else Pe.visible&&L.push(A,Ve,Pe,oe,sn.z,null)}}const ze=A.children;for(let Ve=0,Pe=ze.length;Ve<Pe;Ve++)Er(ze[Ve],j,oe,ae)}function Il(A,j,oe,ae){const{opaque:re,transmissive:ze,transparent:Ve}=A;U.setupLightsView(oe),Mt===!0&&$e.setGlobalState(k.clippingPlanes,oe),ae&&M.viewport(D.copy(ae)),re.length>0&&Tr(re,j,oe),ze.length>0&&Tr(ze,j,oe),Ve.length>0&&Tr(Ve,j,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function zl(A,j,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const Ke=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new ia(1,1,{generateMipmaps:!0,type:Ke?Pa:wi,minFilter:es,samples:Math.max(4,O.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const ze=U.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||D;ze.setSize(Ve.z*k.transmissionResolutionScale,Ve.w*k.transmissionResolutionScale);const Pe=k.getRenderTarget(),We=k.getActiveCubeFace(),Xe=k.getActiveMipmapLevel();k.setRenderTarget(ze),k.getClearColor(_e),Ae=k.getClearAlpha(),Ae<1&&k.setClearColor(16777215,.5),k.clear(),Zt&&ot.render(oe);const tt=k.toneMapping;k.toneMapping=na;const ft=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),Mt===!0&&$e.setGlobalState(k.clippingPlanes,ae),Tr(A,oe,ae),me.updateMultisampleRenderTarget(ze),me.updateRenderTargetMipmap(ze),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ct=0,en=j.length;Ct<en;Ct++){const Yt=j[Ct],{object:It,geometry:zt,material:Ge,group:zn}=Yt;if(Ge.side===wa&&It.layers.test(ae.layers)){const gt=Ge.side;Ge.side=ei,Ge.needsUpdate=!0,Ba(It,oe,ae,zt,Ge,zn),Ge.side=gt,Ge.needsUpdate=!0,Ke=!0}}Ke===!0&&(me.updateMultisampleRenderTarget(ze),me.updateRenderTargetMipmap(ze))}k.setRenderTarget(Pe,We,Xe),k.setClearColor(_e,Ae),ft!==void 0&&(ae.viewport=ft),k.toneMapping=tt}function Tr(A,j,oe){const ae=j.isScene===!0?j.overrideMaterial:null;for(let re=0,ze=A.length;re<ze;re++){const Ve=A[re],{object:Pe,geometry:We,group:Xe}=Ve;let tt=Ve.material;tt.allowOverride===!0&&ae!==null&&(tt=ae),Pe.layers.test(oe.layers)&&Ba(Pe,j,oe,We,tt,Xe)}}function Ba(A,j,oe,ae,re,ze){A.onBeforeRender(k,j,oe,ae,re,ze),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(k,j,oe,ae,A,ze),re.transparent===!0&&re.side===wa&&re.forceSinglePass===!1?(re.side=ei,re.needsUpdate=!0,k.renderBufferDirect(oe,j,ae,re,A,ze),re.side=Mr,re.needsUpdate=!0,k.renderBufferDirect(oe,j,ae,re,A,ze),re.side=wa):k.renderBufferDirect(oe,j,ae,re,A,ze),A.onAfterRender(k,j,oe,ae,re,ze)}function Ha(A,j,oe){j.isScene!==!0&&(j=dn);const ae=se.get(A),re=U.state.lights,ze=U.state.shadowsArray,Ve=re.state.version,Pe=De.getParameters(A,re.state,ze,j,oe,U.state.lightProbeGridArray),We=De.getProgramCacheKey(Pe);let Xe=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,ae.fog=j.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Ce.get(A.envMap||ae.environment,tt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",ai),Xe=new Map,ae.programs=Xe);let ft=Xe.get(We);if(ft!==void 0){if(ae.currentProgram===ft&&ae.lightsStateVersion===Ve)return sa(A,Pe),ft}else Pe.uniforms=De.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,oe,Pe),A.onBeforeCompile(Pe,k),ft=De.acquireProgram(Pe,We),Xe.set(We,ft),ae.uniforms=Pe.uniforms;const Ke=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=$e.uniform),sa(A,Pe),ae.needsLights=Fl(A),ae.lightsStateVersion=Ve,ae.needsLights&&(Ke.ambientLightColor.value=re.state.ambient,Ke.lightProbe.value=re.state.probe,Ke.directionalLights.value=re.state.directional,Ke.directionalLightShadows.value=re.state.directionalShadow,Ke.spotLights.value=re.state.spot,Ke.spotLightShadows.value=re.state.spotShadow,Ke.rectAreaLights.value=re.state.rectArea,Ke.ltc_1.value=re.state.rectAreaLTC1,Ke.ltc_2.value=re.state.rectAreaLTC2,Ke.pointLights.value=re.state.point,Ke.pointLightShadows.value=re.state.pointShadow,Ke.hemisphereLights.value=re.state.hemi,Ke.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ke.spotLightMatrix.value=re.state.spotLightMatrix,Ke.spotLightMap.value=re.state.spotLightMap,Ke.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=U.state.lightProbeGridArray.length>0,ae.currentProgram=ft,ae.uniformsList=null,ft}function ra(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Pu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function sa(A,j){const oe=se.get(A);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function Ar(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(j.matrixWorld);for(let oe=0,ae=A.length;oe<ae;oe++){const re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function Ga(A,j,oe,ae,re){j.isScene!==!0&&(j=dn),me.resetTextureUnits();const ze=j.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?j.environment:null,Pe=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Tt.workingColorSpace,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Xe=Ce.get(ae.envMap||Ve,We),tt=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ke=!!oe.morphAttributes.position,Ct=!!oe.morphAttributes.normal,en=!!oe.morphAttributes.color;let Yt=na;ae.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Yt=k.toneMapping);const It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=It!==void 0?It.length:0,Ge=se.get(ae),zn=U.state.lights;if(Mt===!0&&(mt===!0||A!==Te)){const Ot=A===Te&&ae.id===de;$e.setState(ae,A,Ot)}let gt=!1;ae.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==zn.state.version||Ge.outputColorSpace!==Pe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==Xe||ae.fog===!0&&Ge.fog!==ze||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$e.numPlanes||Ge.numIntersection!==$e.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==ft||Ge.morphTargets!==Ke||Ge.morphNormals!==Ct||Ge.morphColors!==en||Ge.toneMapping!==Yt||Ge.morphTargetsCount!==zt||!!Ge.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ge.__version=ae.version);let bn=Ge.currentProgram;gt===!0&&(bn=Ha(ae,j,re),K&&ae.isNodeMaterial&&K.onUpdateProgram(ae,bn,Ge));let ri=!1,Di=!1,si=!1;const Ft=bn.getUniforms(),tn=Ge.uniforms;if(M.useProgram(bn.program)&&(ri=!0,Di=!0,si=!0),ae.id!==de&&(de=ae.id,Di=!0),Ge.needsLights){const Ot=Ar(U.state.lightProbeGridArray,re);Ge.lightProbeGrid!==Ot&&(Ge.lightProbeGrid=Ot,Di=!0)}if(ri||Te!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(Z,"projectionMatrix",A.projectionMatrix),Ft.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Wi=Ft.map.cameraPosition;Wi!==void 0&&Wi.setValue(Z,rn.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&Ft.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),Te!==A&&(Te=A,Di=!0,si=!0)}if(Ge.needsLights&&(zn.state.directionalShadowMap.length>0&&Ft.setValue(Z,"directionalShadowMap",zn.state.directionalShadowMap,me),zn.state.spotShadowMap.length>0&&Ft.setValue(Z,"spotShadowMap",zn.state.spotShadowMap,me),zn.state.pointShadowMap.length>0&&Ft.setValue(Z,"pointShadowMap",zn.state.pointShadowMap,me)),re.isSkinnedMesh){Ft.setOptional(Z,re,"bindMatrix"),Ft.setOptional(Z,re,"bindMatrixInverse");const Ot=re.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ft.setValue(Z,"boneTexture",Ot.boneTexture,me))}re.isBatchedMesh&&(Ft.setOptional(Z,re,"batchingTexture"),Ft.setValue(Z,"batchingTexture",re._matricesTexture,me),Ft.setOptional(Z,re,"batchingIdTexture"),Ft.setValue(Z,"batchingIdTexture",re._indirectTexture,me),Ft.setOptional(Z,re,"batchingColorTexture"),re._colorsTexture!==null&&Ft.setValue(Z,"batchingColorTexture",re._colorsTexture,me));const Ni=oe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Y.update(re,oe,bn),(Di||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,Ft.setValue(Z,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&j.environment!==null&&(tn.envMapIntensity.value=j.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=bL()),Di){if(Ft.setValue(Z,"toneMappingExposure",k.toneMappingExposure),Ge.needsLights&&gn(tn,si),ze&&ae.fog===!0&&He.refreshFogUniforms(tn,ze),He.refreshMaterialUniforms(tn,ae,Me,Se,U.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ot=Ge.lightProbeGrid;tn.probesSH.value=Ot.texture,tn.probesMin.value.copy(Ot.boundingBox.min),tn.probesMax.value.copy(Ot.boundingBox.max),tn.probesResolution.value.copy(Ot.resolution)}Pu.upload(Z,ra(Ge),tn,me)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Pu.upload(Z,ra(Ge),tn,me),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(Z,"center",re.center),Ft.setValue(Z,"modelViewMatrix",re.modelViewMatrix),Ft.setValue(Z,"normalMatrix",re.normalMatrix),Ft.setValue(Z,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const Ot=ae.uniformsGroups;for(let Wi=0,Va=Ot.length;Wi<Va;Wi++){const Rr=Ot[Wi];Ee.update(Rr,bn),Ee.bind(Rr,bn)}}return bn}function gn(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Fl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,j,oe){const ae=se.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=j,se.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const oe=se.get(A);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,oe=0){$=A,N=j,V=oe;let ae=null,re=!1,ze=!1;if(A){const Pe=se.get(A);if(Pe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Z.FRAMEBUFFER,Pe.__webglFramebuffer),D.copy(A.viewport),W.copy(A.scissor),he=A.scissorTest,M.viewport(D),M.scissor(W),M.setScissorTest(he),de=-1;return}else if(Pe.__webglFramebuffer===void 0)me.setupRenderTarget(A);else if(Pe.__hasExternalTextures)me.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Pe.__boundDepthTexture!==tt){if(tt!==null&&se.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ze=!0);const Xe=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[j])?ae=Xe[j][oe]:ae=Xe[j],re=!0):A.samples>0&&me.useMultisampledRTT(A)===!1?ae=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?ae=Xe[oe]:ae=Xe,D.copy(A.viewport),W.copy(A.scissor),he=A.scissorTest}else D.copy(Ze).multiplyScalar(Me).floor(),W.copy(Vt).multiplyScalar(Me).floor(),he=ut;if(oe!==0&&(ae=ue),M.bindFramebuffer(Z.FRAMEBUFFER,ae)&&M.drawBuffers(A,ae),M.viewport(D),M.scissor(W),M.setScissorTest(he),re){const Pe=se.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pe.__webglTexture,oe)}else if(ze){const Pe=j;for(let We=0;We<A.textures.length;We++){const Xe=se.get(A.textures[We]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+We,Xe.__webglTexture,oe,Pe)}}else if(A!==null&&oe!==0){const Pe=se.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Pe.__webglTexture,oe)}de=-1},this.readRenderTargetPixels=function(A,j,oe,ae,re,ze,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){M.bindFramebuffer(Z.FRAMEBUFFER,We);try{const Xe=A.textures[Pe],tt=Xe.format,ft=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pe),!O.textureFormatReadable(tt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ft)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ae&&oe>=0&&oe<=A.height-re&&Z.readPixels(j,oe,ae,re,Le.convert(tt),Le.convert(ft),ze)}finally{const Xe=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,j,oe,ae,re,ze,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(j>=0&&j<=A.width-ae&&oe>=0&&oe<=A.height-re){M.bindFramebuffer(Z.FRAMEBUFFER,We);const Xe=A.textures[Pe],tt=Xe.format,ft=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pe),!O.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.bufferData(Z.PIXEL_PACK_BUFFER,ze.byteLength,Z.STREAM_READ),Z.readPixels(j,oe,ae,re,Le.convert(tt),Le.convert(ft),0);const Ct=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Ct);const en=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await G3(Z,en,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,ze),Z.deleteBuffer(Ke),Z.deleteSync(en),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(A.image.width*ae),ze=Math.floor(A.image.height*ae),Ve=j!==null?j.x:0,Pe=j!==null?j.y:0;me.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,oe,0,0,Ve,Pe,re,ze),M.unbindTexture()},this.copyTextureToTexture=function(A,j,oe=null,ae=null,re=0,ze=0){let Ve,Pe,We,Xe,tt,ft,Ke,Ct,en;const Yt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Pe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,tt=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const tn=Math.pow(2,-re);Ve=Math.floor(Yt.width*tn),Pe=Math.floor(Yt.height*tn),A.isDataArrayTexture?We=Yt.depth:A.isData3DTexture?We=Math.floor(Yt.depth*tn):We=1,Xe=0,tt=0,ft=0}ae!==null?(Ke=ae.x,Ct=ae.y,en=ae.z):(Ke=0,Ct=0,en=0);const It=Le.convert(j.format),zt=Le.convert(j.type);let Ge;j.isData3DTexture?(me.setTexture3D(j,0),Ge=Z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(me.setTexture2DArray(j,0),Ge=Z.TEXTURE_2D_ARRAY):(me.setTexture2D(j,0),Ge=Z.TEXTURE_2D),M.activeTexture(Z.TEXTURE0),M.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),M.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),M.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment);const zn=M.getParameter(Z.UNPACK_ROW_LENGTH),gt=M.getParameter(Z.UNPACK_IMAGE_HEIGHT),bn=M.getParameter(Z.UNPACK_SKIP_PIXELS),ri=M.getParameter(Z.UNPACK_SKIP_ROWS),Di=M.getParameter(Z.UNPACK_SKIP_IMAGES);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Yt.width),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Yt.height),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xe),M.pixelStorei(Z.UNPACK_SKIP_ROWS,tt),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,ft);const si=A.isDataArrayTexture||A.isData3DTexture,Ft=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const tn=se.get(A),Ni=se.get(j),Ot=se.get(tn.__renderTarget),Wi=se.get(Ni.__renderTarget);M.bindFramebuffer(Z.READ_FRAMEBUFFER,Ot.__webglFramebuffer),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Va=0;Va<We;Va++)si&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(A).__webglTexture,re,ft+Va),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(j).__webglTexture,ze,en+Va)),Z.blitFramebuffer(Xe,tt,Ve,Pe,Ke,Ct,Ve,Pe,Z.DEPTH_BUFFER_BIT,Z.NEAREST);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||se.has(A)){const tn=se.get(A),Ni=se.get(j);M.bindFramebuffer(Z.READ_FRAMEBUFFER,fe),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Ot=0;Ot<We;Ot++)si?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,tn.__webglTexture,re,ft+Ot):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,tn.__webglTexture,re),Ft?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ni.__webglTexture,ze,en+Ot):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ni.__webglTexture,ze),re!==0?Z.blitFramebuffer(Xe,tt,Ve,Pe,Ke,Ct,Ve,Pe,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ft?Z.copyTexSubImage3D(Ge,ze,Ke,Ct,en+Ot,Xe,tt,Ve,Pe):Z.copyTexSubImage2D(Ge,ze,Ke,Ct,Xe,tt,Ve,Pe);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(Ge,ze,Ke,Ct,en,Ve,Pe,We,It,zt,Yt.data):j.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ge,ze,Ke,Ct,en,Ve,Pe,We,It,Yt.data):Z.texSubImage3D(Ge,ze,Ke,Ct,en,Ve,Pe,We,It,zt,Yt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ze,Ke,Ct,Ve,Pe,It,zt,Yt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ze,Ke,Ct,Yt.width,Yt.height,It,Yt.data):Z.texSubImage2D(Z.TEXTURE_2D,ze,Ke,Ct,Ve,Pe,It,zt,Yt);M.pixelStorei(Z.UNPACK_ROW_LENGTH,zn),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,gt),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,bn),M.pixelStorei(Z.UNPACK_SKIP_ROWS,ri),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,Di),ze===0&&j.generateMipmaps&&Z.generateMipmap(Ge),M.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){N=0,V=0,$=null,M.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const EL=new St(12764882),TL=new St(13159638),ro=4500,Au=91,AL=new St(15253624),RL=`
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
`,CL=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,wL=`
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
`,DL=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,NL=`
  attribute float phase;
  attribute float size;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vGlow;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float breath = 0.78 + 0.22 * sin(uTime * 0.55 + phase * 6.2831);
    vGlow = breath;
    gl_PointSize = size * uPixelRatio * (150.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,LL=`
  varying float vGlow;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.06, d);
    gl_FragColor = vec4(uColor, a * (0.5 + 0.5 * vGlow));
  }
`;function UL(){const a=new Float32Array(ro*3),e=new Float32Array(ro),i=new Float32Array(ro);for(let r=0;r<ro;r++){const l=24+Math.random()*36,c=Math.random()*Math.PI*2,u=(Math.random()-.5)*1.1;a[r*3]=l*Math.cos(c)*Math.cos(u),a[r*3+1]=l*Math.sin(u)*2.2,a[r*3+2]=l*Math.sin(c)*Math.cos(u)-18,e[r]=Math.random(),i[r]=.7+Math.random()*1.6}return{positions:a,phases:e,sizes:i}}function OL(){const a=new Float32Array(Au*3),e=new Float32Array(Au),i=new Float32Array(Au);for(let r=0;r<Au;r++){const l=13+Math.random()*15,c=Math.random()*Math.PI*2,u=(Math.random()-.5)*1.1;a[r*3]=l*Math.cos(c)*Math.cos(u),a[r*3+1]=l*Math.sin(u)*2.2,a[r*3+2]=l*Math.sin(c)*Math.cos(u)-12,e[r]=Math.random(),i[r]=1.7+Math.random()*.9}return{positions:a,phases:e,sizes:i}}function PL(a,e,i={}){const{transparent:r=!1,threadAlpha:l}=i;let c;try{c=new ML({canvas:a,antialias:!1,alpha:!0})}catch{return()=>{}}c.setPixelRatio(1);const u=new iR;u.background=r?null:new St(328968);const h=new Ci(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:_}=UL(),v=new ti;v.setAttribute("position",new En(m,3)),v.setAttribute("phase",new En(p,1)),v.setAttribute("size",new En(_,1));const g=new gi({vertexShader:RL,fragmentShader:CL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:EL}},transparent:!0,depthWrite:!1}),S=new Px(v,g);u.add(S);const{positions:E,phases:C,sizes:b}=OL(),y=new ti;y.setAttribute("position",new En(E,3)),y.setAttribute("phase",new En(C,1)),y.setAttribute("size",new En(b,1));const P=new gi({vertexShader:NL,fragmentShader:LL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:AL}},transparent:!0,depthWrite:!1}),z=new Px(y,P);u.add(z);const w=3400,L=new ti,U=new Float32Array(w*6),F=new Float32Array(w*2),T=new Float32Array(w*2);L.setAttribute("position",new En(U,3)),L.setAttribute("lineUV",new En(F,1)),L.setAttribute("segPhase",new En(T,1)),L.setDrawRange(0,0);const I=new gi({vertexShader:wL,fragmentShader:DL,uniforms:{uTime:{value:0},uColor:{value:TL},uAlpha:{value:l??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),k=new mR(L,I);u.add(k);const H=($,de=!1)=>{if(e==="subtle"&&!de)return;const Te=new Set,D=[],W=[],he=[];for(let _e=0;_e<ro&&D.length<w*6;_e++){const Ae=m[_e*3],ee=m[_e*3+1],Se=m[_e*3+2],Me=[];for(let Ne=0;Ne<ro;Ne++){if(Ne===_e)continue;const Je=m[Ne*3]-Ae,Ze=m[Ne*3+1]-ee,Vt=m[Ne*3+2]-Se,ut=Je*Je+Ze*Ze+Vt*Vt;ut<$*$&&Me.push([Ne,ut])}Me.sort((Ne,Je)=>Ne[1]-Je[1]);for(const[Ne]of Me.slice(0,5)){if(D.length>=w*6)break;const Je=_e<Ne?`${_e}-${Ne}`:`${Ne}-${_e}`;Te.has(Je)||(Te.add(Je),D.push(Ae,ee,Se,m[Ne*3],m[Ne*3+1],m[Ne*3+2]),W.push(0,1),he.push(Math.random(),Math.random()))}}U.set(D),F.set(W),T.set(he),L.getAttribute("position").needsUpdate=!0,L.getAttribute("lineUV").needsUpdate=!0,L.getAttribute("segPhase").needsUpdate=!0,L.setDrawRange(0,D.length/3)};H(e==="alive"?4.8:5.2,!0);const K=new RR;let ue=0,fe=0;const q=()=>{const $=a.clientWidth||window.innerWidth,de=a.clientHeight||window.innerHeight;c.setSize($,de,!1),h.aspect=$/de,h.updateProjectionMatrix()};q(),window.addEventListener("resize",q);let N=0;const V=$=>{const de=K.getElapsedTime();de-N>=1/30&&(N=de,g.uniforms.uTime.value=de,I.uniforms.uTime.value=de,P.uniforms.uTime.value=de,e==="alive"&&(fe+=1/30,fe>3.2&&(fe=0,H(4.8))),c.render(u,h)),ue=requestAnimationFrame(V)};return ue=requestAnimationFrame(V),()=>{cancelAnimationFrame(ue),window.removeEventListener("resize",q),v.dispose(),L.dispose(),y.dispose(),g.dispose(),I.dispose(),P.dispose(),c.dispose()}}function IL({mode:a,transparent:e=!1,threadAlpha:i,className:r="spell-bg"}){const l=Qe.useRef(null);return Qe.useEffect(()=>{const c=l.current;return c?PL(c,a,{transparent:e,threadAlpha:i}):void 0},[a,e,i]),G.jsx("canvas",{"aria-hidden":"true",className:r,ref:l})}function zL({handle:a,loadPassage:e,onClose:i}){const[r,l]=Qe.useState(null),[c,u]=Qe.useState(null);return Qe.useEffect(()=>{let h=!0;e(a).then(p=>{h&&l(p)}).catch(p=>{h&&u(p instanceof Error?p.message:"could not summon the passage")});function m(p){p.key==="Escape"&&i()}return window.addEventListener("keydown",m),()=>{h=!1,window.removeEventListener("keydown",m)}},[a,e,i]),G.jsx("div",{"aria-label":"Summoned passage","aria-modal":"true",className:"passage-backdrop",role:"dialog",children:G.jsxs("div",{className:"passage-panel",children:[G.jsxs("header",{className:"passage-header",children:[G.jsx("h2",{className:"passage-title",children:r?G.jsxs(G.Fragment,{children:["chapter ",r.chapter,G.jsxs("span",{className:"passage-lines",children:[", lines ",r.line_start,"-",r.line_end," · volume"," ",r.volume]})]}):"summoning…"}),G.jsx("button",{"aria-label":"Close passage",className:"icon-button passage-close",onClick:i,type:"button",children:"×"})]}),r&&r.beats.length>0&&G.jsx("div",{className:"passage-beats",children:r.beats.map(h=>G.jsx("span",{className:"passage-beat",children:h},h))}),c?G.jsx("p",{className:"passage-error",children:c}):G.jsx("pre",{className:"passage-text",children:r?r.text:"…"})]})})}function FL({chooseLabel:a,createLabel:e,message:i,onChooseConversation:r,onCreateConversation:l,onRetry:c,retryLabel:u,title:h}){return G.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[G.jsx("span",{className:"recovery-knot"}),G.jsxs("div",{children:[G.jsx("strong",{children:h}),G.jsx("p",{children:i}),G.jsxs("div",{className:"recovery-actions",children:[c&&u&&G.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:u}),G.jsx("button",{onClick:l,type:"button",children:e}),G.jsx("button",{onClick:r,type:"button",children:a})]})]})]})}function BL({className:a,compact:e=!1}){const i=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",a].filter(Boolean).join(" ");return G.jsx(ni,{"aria-hidden":"true",className:i,icon:l2})}function HL({api:a,Mark:e=BL,modeLabel:i,privacyLabel:r,product:l=r2}){const c=a2(a,l),[u,h]=Qe.useState(!1),[m,p]=Qe.useState(!1),[_,v]=Qe.useState(()=>window.innerWidth<768),[g,S]=Qe.useState(!1),[E,C]=Qe.useState({reader_chapter:null,spoiler_mode:"protect",tier:"ascended"}),[b,y]=Qe.useState(null),P=Qe.useRef(!1),z=Qe.useRef(null),w=Qe.useRef(null),L=Qe.useRef(null),U=_?!m:u,F=_&&m;Qe.useEffect(()=>{function q(){v(window.innerWidth<768)}return window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]),Qe.useEffect(()=>{!U||!P.current||(z.current?.focus(),P.current=!1)},[U]),Qe.useEffect(()=>{const q=w.current;q&&(q.scrollTop=q.scrollHeight)},[c.messages,c.recoveryMessage,c.activity]);function T(){a.getPreferences().then(q=>{C(q),S(!0)}).catch(()=>S(!0))}function I(q){c.setDraft(`"${q}" `),L.current?.focus()}async function k(){await c.createConversation()&&p(!1)}async function H(q){await c.selectConversation(q),p(!1)}function K(){if(_){p(!0);return}h(!1)}function ue(){if(P.current=!0,_){p(!1);return}h(!0)}const fe=c.activity.length>0?c.activity[c.activity.length-1]:null;return G.jsxs("div",{className:`chat-app ${u?"chat-app-rail-collapsed":""}`,children:[G.jsx(IL,{mode:"subtle",threadAlpha:.3,transparent:!0}),G.jsx(Q2,{Mark:e,activeConversationId:c.conversationId,conversations:c.conversations,desktopCollapsed:u,disabled:c.turnActive,interactionHidden:U,mobileLayout:_,mobileOpen:m,onClose:ue,onCreate:()=>{k()},onDelete:q=>{c.deleteConversation(q)},onOpenSettings:T,onSelect:q=>{H(q)},product:l,readerChapter:E.reader_chapter,spoilerMode:E.spoiler_mode,tier:E.tier}),G.jsxs("main",{"aria-hidden":F,className:"chat-main",inert:F,children:[G.jsxs("header",{className:"chat-header",children:[G.jsx("button",{"aria-controls":"conversation-rail","aria-expanded":!U,"aria-label":l.openRailLabel,className:"icon-button rail-toggle-main",onClick:K,ref:z,type:"button",children:G.jsx(G2,{})}),G.jsxs("div",{className:"active-thread",children:[G.jsx("span",{className:"active-thread-kicker",children:l.currentConversationLabel}),G.jsx("strong",{children:c.activeTitle})]}),G.jsx("span",{className:"mode-seal",children:i})]}),G.jsx("div",{"aria-live":"polite",className:"transcript",ref:w,children:G.jsxs("div",{className:"transcript-column",children:[c.bootError&&G.jsx("div",{className:"boot-error",children:c.bootError}),!c.bootError&&c.messages.length===0&&G.jsxs("section",{className:"empty-weave",children:[G.jsx("div",{className:"empty-mark-wrap",children:G.jsx(e,{className:"empty-mark"})}),G.jsxs("div",{className:"empty-copy",children:[G.jsx("p",{className:"empty-eyebrow",children:l.emptyEyebrow}),G.jsx("h1",{children:l.emptyTitle}),G.jsx("p",{children:l.emptyHint})]})]}),c.messages.map(q=>G.jsx(s3,{Mark:e,activity:q.streaming?fe:null,assistantName:l.assistantName,message:q,onQuote:I,onRegenerate:q.id===c.liveReplyId&&c.turnState==="idle"?c.regenerateReply:void 0,onViewPassage:N=>y(N),regenerateLabel:l.regenerateLabel},q.id)),c.recoveryMessage&&G.jsx(FL,{chooseLabel:l.recoveryChooseLabel,createLabel:l.recoveryCreateLabel,message:c.recoveryMessage,onChooseConversation:K,onCreateConversation:()=>{k()},onRetry:()=>{c.retryLastTurn()},retryLabel:l.recoveryRetryLabel,title:l.recoveryTitle})]})}),G.jsxs("footer",{className:"composer-dock",children:[G.jsx(j2,{cancelling:c.turnState==="cancelling",draft:c.draft,inputLabel:l.inputLabel,onCancel:()=>{c.cancelTurn()},onDraftChange:c.setDraft,onSubmit:q=>{c.sendMessage(q)},onTierChange:q=>{C(N=>({...N,tier:q})),a.savePreferences({...E,tier:q})},placeholder:l.composerPlaceholder,sendLabel:l.sendLabel,stopLabel:l.stopLabel,stoppingLabel:l.stoppingLabel,tier:E.tier,turnActive:c.turnActive,textareaRef:L}),G.jsxs("p",{className:"privacy-line",children:[G.jsx("span",{className:"privacy-dot"}),r]})]})]}),g&&G.jsx(J2,{initial:E,onClose:()=>S(!1),onSave:async q=>{await a.savePreferences(q),C(q)}}),b&&G.jsx(zL,{handle:b,loadPassage:c.loadPassage,onClose:()=>y(null)})]})}async function Zr(a,e){if(!a.ok)throw new Error(`${e} failed (${a.status})`);return await a.json()}function GL(a){const e=typeof a.data.text=="string"?a.data.text:"",i=typeof a.data.message=="string"?a.data.message:"";if(a.event==="delta")return{type:"delta",text:e};if(a.event==="completed")return{type:"completed",text:e,tokenCount:typeof a.data.token_count=="number"?a.data.token_count:void 0,tokenBudget:typeof a.data.token_budget=="number"?a.data.token_budget:void 0};if(a.event==="interrupted")return{type:"interrupted",message:i||"The turn was interrupted."};if(a.event==="failed")return{type:"failed",message:i||"The reply failed.",code:typeof a.data.code=="string"?a.data.code:void 0};if(a.event==="tool"){const r=Array.isArray(a.data.handles)?a.data.handles.filter(l=>typeof l=="string"):void 0;return{type:"tool",name:typeof a.data.name=="string"?a.data.name:"tool",status:typeof a.data.status=="string"?a.data.status:"start",detail:typeof a.data.detail=="string"?a.data.detail:"",preview:typeof a.data.preview=="string"?a.data.preview:void 0,handles:r&&r.length>0?r:void 0}}return null}async function*VL(a){const e=[];let i=[],r=null,l=0;const c=["delta","tool","completed","interrupted","failed"];for(const u of c)a.addEventListener(u,h=>{try{const m=GL({event:u,data:JSON.parse(h.data)});m&&(e.push(m),i.splice(0).forEach(p=>p()))}catch{}});a.onerror=()=>{l+=1,(a.readyState===EventSource.CLOSED||l>4)&&(r=new Error("The reply stream was interrupted."),i.splice(0).forEach(u=>u()))};try{for(;;)if(e.length>0)yield e.shift();else{if(r)throw r;await new Promise(u=>i.push(u))}}finally{a.close()}}async function*fy(a){const e=new EventSource(`/api/conversations/${encodeURIComponent(a)}/stream`);let i=!1;for await(const r of VL(e))if(yield r,r.type==="completed"||r.type==="interrupted"||r.type==="failed"){i=!0;break}if(!i)throw new Error("The reply stream closed without finishing.")}function kL(a=fetch){return{async getPreferences(){const e=await a("/api/preferences");return Zr(e,"Loading preferences")},async deleteConversation(e){const i=await a(`/api/conversations/${e}`,{method:"DELETE"});return Zr(i,"Deleting conversation")},async getPassage(e){const i=await a(`/api/passages?handle=${encodeURIComponent(e)}`);return Zr(i,"Loading passage")},async savePreferences(e){const i=await a("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return Zr(i,"Saving preferences")},async listConversations(){const e=await a("/api/conversations");return Zr(e,"Loading conversations")},async createConversation(){const e=await a("/api/conversations",{method:"POST"});return Zr(e,"Creating a conversation")},async loadMessages(e){const i=await a(`/api/conversations/${encodeURIComponent(e)}/messages`);return Zr(i,"Loading the conversation")},async*streamTurn(e,i){const r=await a(`/api/conversations/${encodeURIComponent(e)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:i})});if(!r.ok)throw new Error(`Sending the message failed (${r.status})`);yield*fy(e)},async*retryTurn(e){const i=await a(`/api/conversations/${encodeURIComponent(e)}/retry`,{method:"POST"});if(!i.ok)throw new Error(`Retrying failed (${i.status})`);yield*fy(e)},async cancelTurn(e){const i=await a(`/api/conversations/${encodeURIComponent(e)}/cancel`,{method:"POST"});if(i.status===202)return"cancelling";if(i.status===200)return"idle";throw new Error(`Stopping the reply failed (${i.status})`)}}}const XL=Qe.lazy(()=>dM(()=>import("./ThemeLab-DHVRdkq2.js"),[]).then(a=>({default:a.ThemeLab})));as.autoAddCss=!1;function dy(a){return document.querySelector(`meta[name="${a}"]`)?.content??""}const o1=document.getElementById("root");if(!o1)throw new Error("Weaver root element is missing.");const WL=window.location.hash==="#theme-lab";n2.createRoot(o1).render(WL?G.jsx(Qe.Suspense,{fallback:G.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:G.jsx(XL,{})}):G.jsx(HL,{api:kL(),modeLabel:dy("weaver-mode"),privacyLabel:dy("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{IL as S,G as j,Qe as r};

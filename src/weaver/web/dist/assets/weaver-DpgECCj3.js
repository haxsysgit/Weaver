(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();const CM="modulepreload",wM=function(r){return"/"+r},E_={},DM=function(e,n,a){let l=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(n.map(p=>{if(p=wM(p),p in E_)return;E_[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":CM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,E)=>{g.addEventListener("load",S),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function NM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var dh={exports:{}},pl={};var T_;function LM(){if(T_)return pl;T_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return pl.Fragment=e,pl.jsx=n,pl.jsxs=n,pl}var A_;function UM(){return A_||(A_=1,dh.exports=LM()),dh.exports}var C=UM(),hh={exports:{}},ut={};var R_;function OM(){if(R_)return ut;R_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function y(D,k,Q){this.props=D,this.context=k,this.refs=b,this.updater=Q||E}y.prototype.isReactComponent={},y.prototype.setState=function(D,k){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,k,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function I(){}I.prototype=y.prototype;function F(D,k,Q){this.props=D,this.context=k,this.refs=b,this.updater=Q||E}var N=F.prototype=new I;N.constructor=F,w(N,y.prototype),N.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(D,k,Q){var be=Q.ref;return{$$typeof:r,type:D,key:k,ref:be!==void 0?be:null,props:Q}}function q(D,k){return z(D.type,k,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function j(D){var k={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Q){return k[Q]})}var he=/\/+/g;function pe(D,k){return typeof D=="object"&&D!==null&&D.key!=null?j(""+D.key):k.toString(36)}function $(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(L,L):(D.status="pending",D.then(function(k){D.status==="pending"&&(D.status="fulfilled",D.value=k)},function(k){D.status==="pending"&&(D.status="rejected",D.reason=k)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function U(D,k,Q,be,Ae){var K=typeof D;(K==="undefined"||K==="boolean")&&(D=null);var oe=!1;if(D===null)oe=!0;else switch(K){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(D.$$typeof){case r:case e:oe=!0;break;case _:return oe=D._init,U(oe(D._payload),k,Q,be,Ae)}}if(oe)return Ae=Ae(D),oe=be===""?"."+pe(D,0):be,O(Ae)?(Q="",oe!=null&&(Q=oe.replace(he,"$&/")+"/"),U(Ae,k,Q,"",function(Te){return Te})):Ae!=null&&(V(Ae)&&(Ae=q(Ae,Q+(Ae.key==null||D&&D.key===Ae.key?"":(""+Ae.key).replace(he,"$&/")+"/")+oe)),k.push(Ae)),1;oe=0;var fe=be===""?".":be+":";if(O(D))for(var we=0;we<D.length;we++)be=D[we],K=fe+pe(be,we),oe+=U(be,k,Q,K,Ae);else if(we=S(D),typeof we=="function")for(D=we.call(D),we=0;!(be=D.next()).done;)be=be.value,K=fe+pe(be,we++),oe+=U(be,k,Q,K,Ae);else if(K==="object"){if(typeof D.then=="function")return U($(D),k,Q,be,Ae);throw k=String(D),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return oe}function G(D,k,Q){if(D==null)return D;var be=[],Ae=0;return U(D,be,"","",function(K){return k.call(Q,K,Ae++)}),be}function ee(D){if(D._status===-1){var k=D._result;k=k(),k.then(function(Q){(D._status===0||D._status===-1)&&(D._status=1,D._result=Q)},function(Q){(D._status===0||D._status===-1)&&(D._status=2,D._result=Q)}),D._status===-1&&(D._status=0,D._result=k)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Ee={map:G,forEach:function(D,k,Q){G(D,function(){k.apply(this,arguments)},Q)},count:function(D){var k=0;return G(D,function(){k++}),k},toArray:function(D){return G(D,function(k){return k})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ut.Activity=v,ut.Children=Ee,ut.Component=y,ut.Fragment=n,ut.Profiler=l,ut.PureComponent=F,ut.StrictMode=a,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},ut.cache=function(D){return function(){return D.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(D,k,Q){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var be=w({},D.props),Ae=D.key;if(k!=null)for(K in k.key!==void 0&&(Ae=""+k.key),k)!T.call(k,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&k.ref===void 0||(be[K]=k[K]);var K=arguments.length-2;if(K===1)be.children=Q;else if(1<K){for(var oe=Array(K),fe=0;fe<K;fe++)oe[fe]=arguments[fe+2];be.children=oe}return z(D.type,Ae,be)},ut.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ut.createElement=function(D,k,Q){var be,Ae={},K=null;if(k!=null)for(be in k.key!==void 0&&(K=""+k.key),k)T.call(k,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ae[be]=k[be]);var oe=arguments.length-2;if(oe===1)Ae.children=Q;else if(1<oe){for(var fe=Array(oe),we=0;we<oe;we++)fe[we]=arguments[we+2];Ae.children=fe}if(D&&D.defaultProps)for(be in oe=D.defaultProps,oe)Ae[be]===void 0&&(Ae[be]=oe[be]);return z(D,K,Ae)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(D){return{$$typeof:h,render:D}},ut.isValidElement=V,ut.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:ee}},ut.memo=function(D,k){return{$$typeof:p,type:D,compare:k===void 0?null:k}},ut.startTransition=function(D){var k=B.T,Q={};B.T=Q;try{var be=D(),Ae=B.S;Ae!==null&&Ae(Q,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(L,me)}catch(K){me(K)}finally{k!==null&&Q.types!==null&&(k.types=Q.types),B.T=k}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(D){return B.H.use(D)},ut.useActionState=function(D,k,Q){return B.H.useActionState(D,k,Q)},ut.useCallback=function(D,k){return B.H.useCallback(D,k)},ut.useContext=function(D){return B.H.useContext(D)},ut.useDebugValue=function(){},ut.useDeferredValue=function(D,k){return B.H.useDeferredValue(D,k)},ut.useEffect=function(D,k){return B.H.useEffect(D,k)},ut.useEffectEvent=function(D){return B.H.useEffectEvent(D)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(D,k,Q){return B.H.useImperativeHandle(D,k,Q)},ut.useInsertionEffect=function(D,k){return B.H.useInsertionEffect(D,k)},ut.useLayoutEffect=function(D,k){return B.H.useLayoutEffect(D,k)},ut.useMemo=function(D,k){return B.H.useMemo(D,k)},ut.useOptimistic=function(D,k){return B.H.useOptimistic(D,k)},ut.useReducer=function(D,k,Q){return B.H.useReducer(D,k,Q)},ut.useRef=function(D){return B.H.useRef(D)},ut.useState=function(D){return B.H.useState(D)},ut.useSyncExternalStore=function(D,k,Q){return B.H.useSyncExternalStore(D,k,Q)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.2.8",ut}var C_;function gm(){return C_||(C_=1,hh.exports=OM()),hh.exports}var Xe=gm();const vm=NM(Xe);function lp(r,e){(e==null||e>r.length)&&(e=r.length);for(var n=0,a=Array(e);n<e;n++)a[n]=r[n];return a}function PM(r){if(Array.isArray(r))return r}function IM(r){if(Array.isArray(r))return lp(r)}function zM(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function FM(r,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,Ay(a.key),a)}}function BM(r,e,n){return e&&FM(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Nu(r,e){var n=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=_m(r))||e){n&&(r=n);var a=0,l=function(){};return{s:l,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,f=!0,h=!1;return{s:function(){n=n.call(r)},n:function(){var m=n.next();return f=m.done,m},e:function(m){h=!0,c=m},f:function(){try{f||n.return==null||n.return()}finally{if(h)throw c}}}}function rt(r,e,n){return(e=Ay(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function HM(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function GM(r,e){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var a,l,c,f,h=[],m=!0,p=!1;try{if(c=(n=n.call(r)).next,e===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(a=c.call(n)).done)&&(h.push(a.value),h.length!==e);m=!0);}catch(_){p=!0,l=_}finally{try{if(!m&&n.return!=null&&(f=n.return(),Object(f)!==f))return}finally{if(p)throw l}}return h}}function VM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w_(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),n.push.apply(n,a)}return n}function De(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?w_(Object(n),!0).forEach(function(a){rt(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):w_(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function $u(r,e){return PM(r)||GM(r,e)||_m(r,e)||VM()}function Xi(r){return IM(r)||HM(r)||_m(r)||kM()}function XM(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Ay(r){var e=XM(r,"string");return typeof e=="symbol"?e:e+""}function Hu(r){"@babel/helpers - typeof";return Hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hu(r)}function _m(r,e){if(r){if(typeof r=="string")return lp(r,e);var n={}.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?lp(r,e):void 0}}var D_=function(){},xm={},Ry={},Cy=null,wy={mark:D_,measure:D_};try{typeof window<"u"&&(xm=window),typeof document<"u"&&(Ry=document),typeof MutationObserver<"u"&&(Cy=MutationObserver),typeof performance<"u"&&(wy=performance)}catch{}var WM=xm.navigator||{},N_=WM.userAgent,L_=N_===void 0?"":N_,br=xm,tn=Ry,U_=Cy,Qc=wy;br.document;var Ha=!!tn.documentElement&&!!tn.head&&typeof tn.addEventListener=="function"&&typeof tn.createElement=="function",Dy=~L_.indexOf("MSIE")||~L_.indexOf("Trident/"),Jc,qM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,YM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ny={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},jM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ly=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",Ul="duotone",Uy="sharp",Oy="sharp-duotone",Py="chisel",Iy="etch",zy="graphite",Fy="jelly",By="jelly-duo",Hy="jelly-fill",Gy="mosaic",Vy="notdog",ky="notdog-duo",Xy="pixel",Wy="slab",qy="slab-duo",Yy="slab-press",jy="slab-press-duo",Zy="thumbprint",Ky="utility",Qy="utility-duo",Jy="utility-fill",$y="vellum",eS="whiteboard",ZM="Classic",KM="Duotone",QM="Sharp",JM="Sharp Duotone",$M="Chisel",eE="Etch",tE="Graphite",nE="Jelly",iE="Jelly Duo",aE="Jelly Fill",rE="Mosaic",sE="Notdog",oE="Notdog Duo",lE="Pixel",cE="Slab",uE="Slab Duo",fE="Slab Press",dE="Slab Press Duo",hE="Thumbprint",pE="Utility",mE="Utility Duo",gE="Utility Fill",vE="Vellum",_E="Whiteboard",tS=[In,Ul,Uy,Oy,Py,Iy,zy,Fy,By,Hy,Gy,Vy,ky,Xy,Wy,qy,Yy,jy,Zy,Ky,Qy,Jy,$y,eS];Jc={},rt(rt(rt(rt(rt(rt(rt(rt(rt(rt(Jc,In,ZM),Ul,KM),Uy,QM),Oy,JM),Py,$M),Iy,eE),zy,tE),Fy,nE),By,iE),Hy,aE),rt(rt(rt(rt(rt(rt(rt(rt(rt(rt(Jc,Gy,rE),Vy,sE),ky,oE),Xy,lE),Wy,cE),qy,uE),Yy,fE),jy,dE),Zy,hE),Ky,pE),rt(rt(rt(rt(Jc,Qy,mE),Jy,gE),$y,vE),eS,_E);var xE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},yE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},SE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),bE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},nS=["fak","fa-kit","fakd","fa-kit-duotone"],O_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ME=["kit"],EE="kit",TE="kit-duotone",AE="Kit",RE="Kit Duotone";rt(rt({},EE,AE),TE,RE);var CE={kit:{"fa-kit":"fak"}},wE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},DE={kit:{fak:"fa-kit"}},P_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$c,eu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},NE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],LE="classic",UE="duotone",OE="sharp",PE="sharp-duotone",IE="chisel",zE="etch",FE="graphite",BE="jelly",HE="jelly-duo",GE="jelly-fill",VE="mosaic",kE="notdog",XE="notdog-duo",WE="pixel",qE="slab",YE="slab-duo",jE="slab-press",ZE="slab-press-duo",KE="thumbprint",QE="utility",JE="utility-duo",$E="utility-fill",eT="vellum",tT="whiteboard",nT="Classic",iT="Duotone",aT="Sharp",rT="Sharp Duotone",sT="Chisel",oT="Etch",lT="Graphite",cT="Jelly",uT="Jelly Duo",fT="Jelly Fill",dT="Mosaic",hT="Notdog",pT="Notdog Duo",mT="Pixel",gT="Slab",vT="Slab Duo",_T="Slab Press",xT="Slab Press Duo",yT="Thumbprint",ST="Utility",bT="Utility Duo",MT="Utility Fill",ET="Vellum",TT="Whiteboard";$c={},rt(rt(rt(rt(rt(rt(rt(rt(rt(rt($c,LE,nT),UE,iT),OE,aT),PE,rT),IE,sT),zE,oT),FE,lT),BE,cT),HE,uT),GE,fT),rt(rt(rt(rt(rt(rt(rt(rt(rt(rt($c,VE,dT),kE,hT),XE,pT),WE,mT),qE,gT),YE,vT),jE,_T),ZE,xT),KE,yT),QE,ST),rt(rt(rt(rt($c,JE,bT),$E,MT),eT,ET),tT,TT);var AT="kit",RT="kit-duotone",CT="Kit",wT="Kit Duotone";rt(rt({},AT,CT),RT,wT);var DT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},NT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},cp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},LT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],iS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(NE,LT),UT=["solid","regular","light","thin","duotone","brands","semibold"],aS=[1,2,3,4,5,6,7,8,9,10],OT=aS.concat([11,12,13,14,15,16,17,18,19,20]),PT=["aw","fw","pull-left","pull-right"],IT=[].concat(Xi(Object.keys(NT)),UT,PT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",eu.GROUP,eu.SWAP_OPACITY,eu.PRIMARY,eu.SECONDARY]).concat(aS.map(function(r){return"".concat(r,"x")})).concat(OT.map(function(r){return"w-".concat(r)})),zT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Pa="___FONT_AWESOME___",up=16,rS="fa",sS="svg-inline--fa",ss="data-fa-i2svg",fp="data-fa-pseudo-element",FT="data-fa-pseudo-element-pending",ym="data-prefix",Sm="data-icon",I_="fontawesome-i2svg",BT="async",HT=["HTML","HEAD","STYLE","SCRIPT"],oS=["::before","::after",":before",":after"],lS=(function(){try{return!0}catch{return!1}})();function Ol(r){return new Proxy(r,{get:function(n,a){return a in n?n[a]:n[In]}})}var cS=De({},Ny);cS[In]=De(De(De(De({},{"fa-duotone":"duotone"}),Ny[In]),O_.kit),O_["kit-duotone"]);var GT=Ol(cS),dp=De({},bE);dp[In]=De(De(De(De({},{duotone:"fad"}),dp[In]),P_.kit),P_["kit-duotone"]);var z_=Ol(dp),hp=De({},cp);hp[In]=De(De({},hp[In]),DE.kit);var bm=Ol(hp),pp=De({},DT);pp[In]=De(De({},pp[In]),CE.kit);Ol(pp);var VT=qM,uS="fa-layers-text",kT=YM,XT=De({},xE);Ol(XT);var WT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ph=jM,qT=[].concat(Xi(ME),Xi(IT)),Rl=br.FontAwesomeConfig||{};function YT(r){var e=tn.querySelector("script["+r+"]");if(e)return e.getAttribute(r)}function jT(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(tn&&typeof tn.querySelector=="function"){var ZT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ZT.forEach(function(r){var e=$u(r,2),n=e[0],a=e[1],l=jT(YT(n));l!=null&&(Rl[a]=l)})}var fS={styleDefault:"solid",familyDefault:In,cssPrefix:rS,replacementClass:sS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rl.familyPrefix&&(Rl.cssPrefix=Rl.familyPrefix);var mo=De(De({},fS),Rl);mo.autoReplaceSvg||(mo.observeMutations=!1);var at={};Object.keys(fS).forEach(function(r){Object.defineProperty(at,r,{enumerable:!0,set:function(n){mo[r]=n,Cl.forEach(function(a){return a(at)})},get:function(){return mo[r]}})});Object.defineProperty(at,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,Cl.forEach(function(n){return n(at)})},get:function(){return mo.cssPrefix}});br.FontAwesomeConfig=at;var Cl=[];function KT(r){return Cl.push(r),function(){Cl.splice(Cl.indexOf(r),1)}}var Ws=up,ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function QT(r){if(!(!r||!Ha)){var e=tn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=r;for(var n=tn.head.childNodes,a=null,l=n.length-1;l>-1;l--){var c=n[l],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=c)}return tn.head.insertBefore(e,a),r}}var JT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function F_(){for(var r=12,e="";r-- >0;)e+=JT[Math.random()*62|0];return e}function yo(r){for(var e=[],n=(r||[]).length>>>0;n--;)e[n]=r[n];return e}function Mm(r){return r.classList?yo(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(e){return e})}function dS(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $T(r){return Object.keys(r||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(dS(r[n]),'" ')},"").trim()}function ef(r){return Object.keys(r||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(r[n].trim(),";")},"")}function Em(r){return r.size!==ta.size||r.x!==ta.x||r.y!==ta.y||r.rotate!==ta.rotate||r.flipX||r.flipY}function eA(r){var e=r.transform,n=r.containerWidth,a=r.iconWidth,l={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(h)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:l,inner:m,path:p}}function tA(r){var e=r.transform,n=r.width,a=n===void 0?up:n,l=r.height,c=l===void 0?up:l,f="";return Dy?f+="translate(".concat(e.x/Ws-a/2,"em, ").concat(e.y/Ws-c/2,"em) "):f+="translate(calc(-50% + ".concat(e.x/Ws,"em), calc(-50% + ").concat(e.y/Ws,"em)) "),f+="scale(".concat(e.size/Ws*(e.flipX?-1:1),", ").concat(e.size/Ws*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var nA=`:root, :host {
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
}`;function hS(){var r=rS,e=sS,n=at.cssPrefix,a=at.replacementClass,l=nA;if(n!==r||a!==e){var c=new RegExp("\\.".concat(r,"\\-"),"g"),f=new RegExp("\\--".concat(r,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");l=l.replace(c,".".concat(n,"-")).replace(f,"--".concat(n,"-")).replace(h,".".concat(a))}return l}var B_=!1;function mh(){at.autoAddCss&&!B_&&(QT(hS()),B_=!0)}var iA={mixout:function(){return{dom:{css:hS,insertCss:mh}}},hooks:function(){return{beforeDOMElementCreation:function(){mh()},beforeI2svg:function(){mh()}}}},Ia=br||{};Ia[Pa]||(Ia[Pa]={});Ia[Pa].styles||(Ia[Pa].styles={});Ia[Pa].hooks||(Ia[Pa].hooks={});Ia[Pa].shims||(Ia[Pa].shims=[]);var Gi=Ia[Pa],pS=[],mS=function(){tn.removeEventListener("DOMContentLoaded",mS),Gu=1,pS.map(function(e){return e()})},Gu=!1;Ha&&(Gu=(tn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tn.readyState),Gu||tn.addEventListener("DOMContentLoaded",mS));function aA(r){Ha&&(Gu?setTimeout(r,0):pS.push(r))}function Pl(r){var e=r.tag,n=r.attributes,a=n===void 0?{}:n,l=r.children,c=l===void 0?[]:l;return typeof r=="string"?dS(r):"<".concat(e," ").concat($T(a),">").concat(c.map(Pl).join(""),"</").concat(e,">")}function H_(r,e,n){if(r&&r[e]&&r[e][n])return{prefix:e,iconName:n,icon:r[e][n]}}var gh=function(e,n,a,l){var c=Object.keys(e),f=c.length,h=n,m,p,_;for(a===void 0?(m=1,_=e[c[0]]):(m=0,_=a);m<f;m++)p=c[m],_=h(_,e[p],p,e);return _};function gS(r){return Xi(r).length!==1?null:r.codePointAt(0).toString(16)}function G_(r){return Object.keys(r).reduce(function(e,n){var a=r[n],l=!!a.icon;return l?e[a.iconName]=a.icon:e[n]=a,e},{})}function mp(r,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,l=a===void 0?!1:a,c=G_(e);typeof Gi.hooks.addPack=="function"&&!l?Gi.hooks.addPack(r,G_(e)):Gi.styles[r]=De(De({},Gi.styles[r]||{}),c),r==="fas"&&mp("fa",e)}var Dl=Gi.styles,rA=Gi.shims,vS=Object.keys(bm),sA=vS.reduce(function(r,e){return r[e]=Object.keys(bm[e]),r},{}),Tm=null,_S={},xS={},yS={},SS={},bS={};function oA(r){return~qT.indexOf(r)}function lA(r,e){var n=e.split("-"),a=n[0],l=n.slice(1).join("-");return a===r&&l!==""&&!oA(l)?l:null}var MS=function(){var e=function(c){return gh(Dl,function(f,h,m){return f[m]=gh(h,c,{}),f},{})};_S=e(function(l,c,f){if(c[3]&&(l[c[3]]=f),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=f})}return l}),xS=e(function(l,c,f){if(l[f]=f,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=f})}return l}),bS=e(function(l,c,f){var h=c[2];return l[f]=f,h.forEach(function(m){l[m]=f}),l});var n="far"in Dl||at.autoFetchSvg,a=gh(rA,function(l,c){var f=c[0],h=c[1],m=c[2];return h==="far"&&!n&&(h="fas"),typeof f=="string"&&(l.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(l.unicodes[f.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});yS=a.names,SS=a.unicodes,Tm=tf(at.styleDefault,{family:at.familyDefault})};KT(function(r){Tm=tf(r.styleDefault,{family:at.familyDefault})});MS();function Am(r,e){return(_S[r]||{})[e]}function cA(r,e){return(xS[r]||{})[e]}function is(r,e){return(bS[r]||{})[e]}function ES(r){return yS[r]||{prefix:null,iconName:null}}function uA(r){var e=SS[r],n=Am("fas",r);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mr(){return Tm}var TS=function(){return{prefix:null,iconName:null,rest:[]}};function fA(r){var e=In,n=vS.reduce(function(a,l){return a[l]="".concat(at.cssPrefix,"-").concat(l),a},{});return tS.forEach(function(a){(r.includes(n[a])||r.some(function(l){return sA[a].includes(l)}))&&(e=a)}),e}function tf(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?In:n,l=GT[a][r];if(a===Ul&&!r)return"fad";var c=z_[a][r]||z_[a][l],f=r in Gi.styles?r:null,h=c||f||null;return h}function dA(r){var e=[],n=null;return r.forEach(function(a){var l=lA(at.cssPrefix,a);l?n=l:a&&e.push(a)}),{iconName:n,rest:e}}function V_(r){return r.sort().filter(function(e,n,a){return a.indexOf(e)===n})}var k_=iS.concat(nS);function nf(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,a=n===void 0?!1:n,l=null,c=V_(r.filter(function(S){return k_.includes(S)})),f=V_(r.filter(function(S){return!k_.includes(S)})),h=c.filter(function(S){return l=S,!Ly.includes(S)}),m=$u(h,1),p=m[0],_=p===void 0?null:p,v=fA(c),g=De(De({},dA(f)),{},{prefix:tf(_,{family:v})});return De(De(De({},g),gA({values:r,family:v,styles:Dl,config:at,canonical:g,givenPrefix:l})),hA(a,l,g))}function hA(r,e,n){var a=n.prefix,l=n.iconName;if(r||!a||!l)return{prefix:a,iconName:l};var c=e==="fa"?ES(l):{},f=is(a,l);return l=c.iconName||f||l,a=c.prefix||a,a==="far"&&!Dl.far&&Dl.fas&&!at.autoFetchSvg&&(a="fas"),{prefix:a,iconName:l}}var pA=tS.filter(function(r){return r!==In||r!==Ul}),mA=Object.keys(cp).filter(function(r){return r!==In}).map(function(r){return Object.keys(cp[r])}).flat();function gA(r){var e=r.values,n=r.family,a=r.canonical,l=r.givenPrefix,c=l===void 0?"":l,f=r.styles,h=f===void 0?{}:f,m=r.config,p=m===void 0?{}:m,_=n===Ul,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=a.prefix==="fad"||a.prefix==="fa-duotone";if(!_&&(v||g||S)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&pA.includes(n)){var E=Object.keys(h).find(function(b){return mA.includes(b)});if(E||p.autoFetchSvg){var w=SE.get(n).defaultShortPrefixId;a.prefix=w,a.iconName=is(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||c==="fa")&&(a.prefix=Mr()||"fas"),a}var vA=(function(){function r(){zM(this,r),this.definitions={}}return BM(r,[{key:"add",value:function(){for(var n=this,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){n.definitions[h]=De(De({},n.definitions[h]||{}),f[h]),mp(h,f[h]);var m=bm[In][h];m&&mp(m,f[h]),MS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var l=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(l).map(function(c){var f=l[c],h=f.prefix,m=f.iconName,p=f.icon,_=p[2];n[h]||(n[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(n[h][v]=p)}),n[h][m]=p}),n}}])})(),X_=[],oo={},uo={},_A=Object.keys(uo);function xA(r,e){var n=e.mixoutsTo;return X_=r,oo={},Object.keys(uo).forEach(function(a){_A.indexOf(a)===-1&&delete uo[a]}),X_.forEach(function(a){var l=a.mixout?a.mixout():{};if(Object.keys(l).forEach(function(f){typeof l[f]=="function"&&(n[f]=l[f]),Hu(l[f])==="object"&&Object.keys(l[f]).forEach(function(h){n[f]||(n[f]={}),n[f][h]=l[f][h]})}),a.hooks){var c=a.hooks();Object.keys(c).forEach(function(f){oo[f]||(oo[f]=[]),oo[f].push(c[f])})}a.provides&&a.provides(uo)}),n}function gp(r,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),l=2;l<n;l++)a[l-2]=arguments[l];var c=oo[r]||[];return c.forEach(function(f){e=f.apply(null,[e].concat(a))}),e}function os(r){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var l=oo[r]||[];l.forEach(function(c){c.apply(null,n)})}function Er(){var r=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[r]?uo[r].apply(null,e):void 0}function vp(r){r.prefix==="fa"&&(r.prefix="fas");var e=r.iconName,n=r.prefix||Mr();if(e)return e=is(n,e)||e,H_(AS.definitions,n,e)||H_(Gi.styles,n,e)}var AS=new vA,yA=function(){at.autoReplaceSvg=!1,at.observeMutations=!1,os("noAuto")},SA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ha?(os("beforeI2svg",e),Er("pseudoElements2svg",e),Er("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;at.autoReplaceSvg===!1&&(at.autoReplaceSvg=!0),at.observeMutations=!0,aA(function(){MA({autoReplaceSvgRoot:n}),os("watch",e)})}},bA={icon:function(e){if(e===null)return null;if(Hu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:is(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=tf(e[0]);return{prefix:a,iconName:is(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(at.cssPrefix,"-"))>-1||e.match(VT))){var l=nf(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||Mr(),iconName:is(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var c=Mr();return{prefix:c,iconName:is(c,e)||e}}}},vi={noAuto:yA,config:at,dom:SA,parse:bA,library:AS,findIconDefinition:vp,toHtml:Pl},MA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?tn:n;(Object.keys(Gi.styles).length>0||at.autoFetchSvg)&&Ha&&at.autoReplaceSvg&&vi.dom.i2svg({node:a})};function af(r,e){return Object.defineProperty(r,"abstract",{get:e}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(a){return Pl(a)})}}),Object.defineProperty(r,"node",{get:function(){if(Ha){var a=tn.createElement("div");return a.innerHTML=r.html,a.children}}}),r}function EA(r){var e=r.children,n=r.main,a=r.mask,l=r.attributes,c=r.styles,f=r.transform;if(Em(f)&&n.found&&!a.found){var h=n.width,m=n.height,p={x:h/m/2,y:.5};l.style=ef(De(De({},c),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function TA(r){var e=r.prefix,n=r.iconName,a=r.children,l=r.attributes,c=r.symbol,f=c===!0?"".concat(e,"-").concat(at.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:De(De({},l),{},{id:f}),children:a}]}]}function AA(r){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in r})}function Rm(r){var e=r.icons,n=e.main,a=e.mask,l=r.prefix,c=r.iconName,f=r.transform,h=r.symbol,m=r.maskId,p=r.extra,_=r.watchable,v=_===void 0?!1:_,g=a.found?a:n,S=g.width,E=g.height,w=[at.replacementClass,c?"".concat(at.cssPrefix,"-").concat(c):""].filter(function(O){return p.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(p.classes).join(" "),b={children:[],attributes:De(De({},p.attributes),{},{"data-prefix":l,"data-icon":c,class:w,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(E)})};!AA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ss]="");var y=De(De({},b),{},{prefix:l,iconName:c,main:n,mask:a,maskId:m,transform:f,symbol:h,styles:De({},p.styles)}),I=a.found&&n.found?Er("generateAbstractMask",y)||{children:[],attributes:{}}:Er("generateAbstractIcon",y)||{children:[],attributes:{}},F=I.children,N=I.attributes;return y.children=F,y.attributes=N,h?TA(y):EA(y)}function W_(r){var e=r.content,n=r.width,a=r.height,l=r.transform,c=r.extra,f=r.watchable,h=f===void 0?!1:f,m=De(De({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ss]="");var p=De({},c.styles);Em(l)&&(p.transform=tA({transform:l,width:n,height:a}),p["-webkit-transform"]=p.transform);var _=ef(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function RA(r){var e=r.content,n=r.extra,a=De(De({},n.attributes),{},{class:n.classes.join(" ")}),l=ef(n.styles);l.length>0&&(a.style=l);var c=[];return c.push({tag:"span",attributes:a,children:[e]}),c}var vh=Gi.styles;function _p(r){var e=r[0],n=r[1],a=r.slice(4),l=$u(a,1),c=l[0],f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat(at.cssPrefix,"-").concat(ph.GROUP)},children:[{tag:"path",attributes:{class:"".concat(at.cssPrefix,"-").concat(ph.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(at.cssPrefix,"-").concat(ph.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:n,icon:f}}var CA={found:!1,width:512,height:512};function wA(r,e){!lS&&!at.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(e,'" is missing.'))}function xp(r,e){var n=e;return e==="fa"&&at.styleDefault!==null&&(e=Mr()),new Promise(function(a,l){if(n==="fa"){var c=ES(r)||{};r=c.iconName||r,e=c.prefix||e}if(r&&e&&vh[e]&&vh[e][r]){var f=vh[e][r];return a(_p(f))}wA(r,e),a(De(De({},CA),{},{icon:at.showMissingIcons&&r?Er("missingIconAbstract")||{}:{}}))})}var q_=function(){},yp=at.measurePerformance&&Qc&&Qc.mark&&Qc.measure?Qc:{mark:q_,measure:q_},El='FA "7.3.1"',DA=function(e){return yp.mark("".concat(El," ").concat(e," begins")),function(){return RS(e)}},RS=function(e){yp.mark("".concat(El," ").concat(e," ends")),yp.measure("".concat(El," ").concat(e),"".concat(El," ").concat(e," begins"),"".concat(El," ").concat(e," ends"))},Cm={begin:DA,end:RS},Lu=function(){};function Y_(r){var e=r.getAttribute?r.getAttribute(ss):null;return typeof e=="string"}function NA(r){var e=r.getAttribute?r.getAttribute(ym):null,n=r.getAttribute?r.getAttribute(Sm):null;return e&&n}function LA(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(at.replacementClass)}function UA(){if(at.autoReplaceSvg===!0)return Uu.replace;var r=Uu[at.autoReplaceSvg];return r||Uu.replace}function OA(r){return tn.createElementNS("http://www.w3.org/2000/svg",r)}function PA(r){return tn.createElement(r)}function CS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?r.tag==="svg"?OA:PA:n;if(typeof r=="string")return tn.createTextNode(r);var l=a(r.tag);Object.keys(r.attributes||[]).forEach(function(f){l.setAttribute(f,r.attributes[f])});var c=r.children||[];return c.forEach(function(f){l.appendChild(CS(f,{ceFn:a}))}),l}function IA(r){var e=" ".concat(r.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Uu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(l){n.parentNode.insertBefore(CS(l),n)}),n.getAttribute(ss)===null&&at.keepOriginalSource){var a=tn.createComment(IA(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Mm(n).indexOf(at.replacementClass))return Uu.replace(e);var l=new RegExp("".concat(at.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var c=a[0].attributes.class.split(" ").reduce(function(h,m){return m===at.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});a[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var f=a.map(function(h){return Pl(h)}).join(`
`);n.setAttribute(ss,""),n.innerHTML=f}};function j_(r){r()}function wS(r,e){var n=typeof e=="function"?e:Lu;if(r.length===0)n();else{var a=j_;at.mutateApproach===BT&&(a=br.requestAnimationFrame||j_),a(function(){var l=UA(),c=Cm.begin("mutate");r.map(l),c(),n()})}}var wm=!1;function DS(){wm=!0}function Sp(){wm=!1}var Vu=null;function Z_(r){if(U_&&at.observeMutations){var e=r.treeCallback,n=e===void 0?Lu:e,a=r.nodeCallback,l=a===void 0?Lu:a,c=r.pseudoElementsCallback,f=c===void 0?Lu:c,h=r.observeMutationsRoot,m=h===void 0?tn:h;Vu=new U_(function(p){if(!wm){var _=Mr();yo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Y_(v.addedNodes[0])&&(at.searchPseudoElements&&f(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&at.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&Y_(v.target)&&~WT.indexOf(v.attributeName))if(v.attributeName==="class"&&NA(v.target)){var g=nf(Mm(v.target)),S=g.prefix,E=g.iconName;v.target.setAttribute(ym,S||_),E&&v.target.setAttribute(Sm,E)}else LA(v.target)&&l(v.target)})}}),Ha&&Vu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zA(){Vu&&Vu.disconnect()}function FA(r){var e=r.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,l){var c=l.split(":"),f=c[0],h=c.slice(1);return f&&h.length>0&&(a[f]=h.join(":").trim()),a},{})),n}function BA(r){var e=r.getAttribute("data-prefix"),n=r.getAttribute("data-icon"),a=r.innerText!==void 0?r.innerText.trim():"",l=nf(Mm(r));return l.prefix||(l.prefix=Mr()),e&&n&&(l.prefix=e,l.iconName=n),l.iconName&&l.prefix||(l.prefix&&a.length>0&&(l.iconName=cA(l.prefix,r.innerText)||Am(l.prefix,gS(r.innerText))),!l.iconName&&at.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=r.firstChild.data)),l}function HA(r){var e=yo(r.attributes).reduce(function(n,a){return n.name!=="class"&&n.name!=="style"&&(n[a.name]=a.value),n},{});return e}function GA(){return{iconName:null,prefix:null,transform:ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function K_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=BA(r),a=n.iconName,l=n.prefix,c=n.rest,f=HA(r),h=gp("parseNodeAttributes",{},r),m=e.styleParser?FA(r):[];return De({iconName:a,prefix:l,transform:ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:f}},h)}var VA=Gi.styles;function NS(r){var e=at.autoReplaceSvg==="nest"?K_(r,{styleParser:!1}):K_(r);return~e.extra.classes.indexOf(uS)?Er("generateLayersText",r,e):Er("generateSvgReplacementMutation",r,e)}function kA(){return[].concat(Xi(nS),Xi(iS))}function Q_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ha)return Promise.resolve();var n=tn.documentElement.classList,a=function(v){return n.add("".concat(I_,"-").concat(v))},l=function(v){return n.remove("".concat(I_,"-").concat(v))},c=at.autoFetchSvg?kA():Ly.concat(Object.keys(VA));c.includes("fa")||c.push("fa");var f=[".".concat(uS,":not([").concat(ss,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ss,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=yo(r.querySelectorAll(f))}catch{}if(h.length>0)a("pending"),l("complete");else return Promise.resolve();var m=Cm.begin("onTree"),p=h.reduce(function(_,v){try{var g=NS(v);g&&_.push(g)}catch(S){lS||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){wS(g,function(){a("active"),a("complete"),l("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function XA(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;NS(r).then(function(n){n&&wS([n],e)})}function WA(r){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:vp(e||{}),l=n.mask;return l&&(l=(l||{}).icon?l:vp(l||{})),r(a,De(De({},n),{},{mask:l}))}}var qA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,l=a===void 0?ta:a,c=n.symbol,f=c===void 0?!1:c,h=n.mask,m=h===void 0?null:h,p=n.maskId,_=p===void 0?null:p,v=n.classes,g=v===void 0?[]:v,S=n.attributes,E=S===void 0?{}:S,w=n.styles,b=w===void 0?{}:w;if(e){var y=e.prefix,I=e.iconName,F=e.icon;return af(De({type:"icon"},e),function(){return os("beforeDOMElementCreation",{iconDefinition:e,params:n}),Rm({icons:{main:_p(F),mask:m?_p(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:I,transform:De(De({},ta),l),symbol:f,maskId:_,extra:{attributes:E,styles:b,classes:g}})})}},YA={mixout:function(){return{icon:WA(qA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Q_,n.nodeCallback=XA,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,l=a===void 0?tn:a,c=n.callback,f=c===void 0?function(){}:c;return Q_(l,f)},e.generateSvgReplacementMutation=function(n,a){var l=a.iconName,c=a.prefix,f=a.transform,h=a.symbol,m=a.mask,p=a.maskId,_=a.extra;return new Promise(function(v,g){Promise.all([xp(l,c),m.iconName?xp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=$u(S,2),w=E[0],b=E[1];v([n,Rm({icons:{main:w,mask:b},prefix:c,iconName:l,transform:f,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var a=n.children,l=n.attributes,c=n.main,f=n.transform,h=n.styles,m=ef(h);m.length>0&&(l.style=m);var p;return Em(f)&&(p=Er("generateAbstractTransformGrouping",{main:c,transform:f,containerWidth:c.width,iconWidth:c.width})),a.push(p||c.icon),{children:a,attributes:l}}}},jA={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.classes,c=l===void 0?[]:l;return af({type:"layer"},function(){os("beforeDOMElementCreation",{assembler:n,params:a});var f=[];return n(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(at.cssPrefix,"-layers")].concat(Xi(c)).join(" ")},children:f}]})}}}},ZA={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var l=a.classes,c=l===void 0?[]:l,f=a.attributes,h=f===void 0?{}:f,m=a.styles,p=m===void 0?{}:m;return af({type:"counter",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:a}),RA({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(at.cssPrefix,"-layers-counter")].concat(Xi(c))}})})}}}},KA={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,c=l===void 0?ta:l,f=a.classes,h=f===void 0?[]:f,m=a.attributes,p=m===void 0?{}:m,_=a.styles,v=_===void 0?{}:_;return af({type:"text",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:a}),W_({content:n,transform:De(De({},ta),c),extra:{attributes:p,styles:v,classes:["".concat(at.cssPrefix,"-layers-text")].concat(Xi(h))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var l=a.transform,c=a.extra,f=null,h=null;if(Dy){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([n,W_({content:n.innerHTML,width:f,height:h,transform:l,extra:c,watchable:!0})])}}},LS=new RegExp('"',"ug"),J_=[1105920,1112319],$_=De(De(De(De({},{FontAwesome:{normal:"fas",400:"fas"}}),yE),zT),wE),bp=Object.keys($_).reduce(function(r,e){return r[e.toLowerCase()]=$_[e],r},{}),QA=Object.keys(bp).reduce(function(r,e){var n=bp[e];return r[e]=n[900]||Xi(Object.entries(n))[0][1],r},{});function JA(r){var e=r.replace(LS,"");return gS(Xi(e)[0]||"")}function $A(r){var e=r.getPropertyValue("font-feature-settings").includes("ss01"),n=r.getPropertyValue("content"),a=n.replace(LS,""),l=a.codePointAt(0),c=l>=J_[0]&&l<=J_[1],f=a.length===2?a[0]===a[1]:!1;return c||f||e}function e2(r,e){var n=r.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),l=isNaN(a)?"normal":a;return(bp[n]||{})[l]||QA[n]}function ex(r,e){var n="".concat(FT).concat(e.replace(":","-"));return new Promise(function(a,l){if(r.getAttribute(n)!==null)return a();var c=yo(r.children),f=c.filter(function(L){return L.getAttribute(fp)===e})[0],h=br.getComputedStyle(r,e),m=h.getPropertyValue("font-family"),p=m.match(kT),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return r.removeChild(f),a();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=e2(m,_),E=JA(g),w=p[0].startsWith("FontAwesome"),b=$A(h),y=Am(S,E),I=y;if(w){var F=uA(E);F.iconName&&F.prefix&&(y=F.iconName,S=F.prefix)}if(y&&!b&&(!f||f.getAttribute(ym)!==S||f.getAttribute(Sm)!==I)){r.setAttribute(n,I),f&&r.removeChild(f);var N=GA(),O=N.extra;O.attributes[fp]=e,xp(y,S).then(function(L){var B=Rm(De(De({},N),{},{icons:{main:L,mask:TS()},prefix:S,iconName:I,extra:O,watchable:!0})),T=tn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?r.insertBefore(T,r.firstChild):r.appendChild(T),T.outerHTML=B.map(function(z){return Pl(z)}).join(`
`),r.removeAttribute(n),a()}).catch(l)}else a()}else a()})}function t2(r){return Promise.all([ex(r,"::before"),ex(r,"::after")])}function n2(r){return r.parentNode!==document.head&&!~HT.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(fp)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var i2=function(e){return!!e&&oS.some(function(n){return e.includes(n)})},a2=function(e){if(!e)return[];var n=new Set,a=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=Nu(a),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;if(i2(f)){var h=oS.reduce(function(m,p){return m.replace(p,"")},f);h!==""&&h!=="*"&&n.add(h)}}}catch(m){l.e(m)}finally{l.f()}return n};function tx(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ha){var n;if(e)n=r;else if(at.searchPseudoElementsFullScan)n=r.querySelectorAll("*");else{var a=new Set,l=Nu(document.styleSheets),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;try{var h=Nu(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=a2(p.selectorText),v=Nu(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;a.add(S)}}catch(w){v.e(w)}finally{v.f()}}}catch(w){h.e(w)}finally{h.f()}}catch(w){at.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){l.e(w)}finally{l.f()}if(!a.size)return;var E=Array.from(a).join(", ");try{n=r.querySelectorAll(E)}catch{}}return new Promise(function(w,b){var y=yo(n).filter(n2).map(t2),I=Cm.begin("searchPseudoElements");DS(),Promise.all(y).then(function(){I(),Sp(),w()}).catch(function(){I(),Sp(),b()})})}}var r2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=tx,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,l=a===void 0?tn:a;at.searchPseudoElements&&tx(l)}}},nx=!1,s2={mixout:function(){return{dom:{unwatch:function(){DS(),nx=!0}}}},hooks:function(){return{bootstrap:function(){Z_(gp("mutationObserverCallbacks",{}))},noAuto:function(){zA()},watch:function(n){var a=n.observeMutationsRoot;nx?Sp():Z_(gp("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ix=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,l){var c=l.toLowerCase().split("-"),f=c[0],h=c.slice(1).join("-");if(f&&h==="h")return a.flipX=!0,a;if(f&&h==="v")return a.flipY=!0,a;if(h=parseFloat(h),isNaN(h))return a;switch(f){case"grow":a.size=a.size+h;break;case"shrink":a.size=a.size-h;break;case"left":a.x=a.x-h;break;case"right":a.x=a.x+h;break;case"up":a.y=a.y-h;break;case"down":a.y=a.y+h;break;case"rotate":a.rotate=a.rotate+h;break}return a},n)},o2={mixout:function(){return{parse:{transform:function(n){return ix(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var l=a.getAttribute("data-fa-transform");return l&&(n.transform=ix(l)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,l=n.transform,c=n.containerWidth,f=n.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),_="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(f/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:De({},S.outer),children:[{tag:"g",attributes:De({},S.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:De(De({},a.icon.attributes),S.path)}]}]}}}},_h={x:0,y:0,width:"100%",height:"100%"};function ax(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||e)&&(r.attributes.fill="black"),r}function l2(r){return r.tag==="g"?r.children:[r]}var c2={hooks:function(){return{parseNodeAttributes:function(n,a){var l=a.getAttribute("data-fa-mask"),c=l?nf(l.split(" ").map(function(f){return f.trim()})):TS();return c.prefix||(c.prefix=Mr()),n.mask=c,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,l=n.attributes,c=n.main,f=n.mask,h=n.maskId,m=n.transform,p=c.width,_=c.icon,v=f.width,g=f.icon,S=eA({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:De(De({},_h),{},{fill:"white"})},w=_.children?{children:_.children.map(ax)}:{},b={tag:"g",attributes:De({},S.inner),children:[ax(De({tag:_.tag,attributes:De(De({},_.attributes),S.path)},w))]},y={tag:"g",attributes:De({},S.outer),children:[b]},I="mask-".concat(h||F_()),F="clip-".concat(h||F_()),N={tag:"mask",attributes:De(De({},_h),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:l2(g)},N]};return a.push(O,{tag:"rect",attributes:De({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(I,")")},_h)}),{children:a,attributes:l}}}},u2={provides:function(e){var n=!1;br.matchMedia&&(n=br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],l={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:De(De({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=De(De({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:De(De({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:De(De({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:De(De({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(h),a.push({tag:"path",attributes:De(De({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:De(De({},f),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:De(De({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:De(De({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},f2={hooks:function(){return{parseNodeAttributes:function(n,a){var l=a.getAttribute("data-fa-symbol"),c=l===null?!1:l===""?!0:l;return n.symbol=c,n}}}},d2=[iA,YA,jA,ZA,KA,r2,s2,o2,c2,u2,f2];xA(d2,{mixoutsTo:vi});vi.noAuto;var ls=vi.config;vi.library;vi.dom;var US=vi.parse;vi.findIconDefinition;vi.toHtml;var h2=vi.icon;vi.layer;vi.text;vi.counter;var xh={exports:{}},ml={},yh={exports:{}},Sh={};var rx;function p2(){return rx||(rx=1,(function(r){function e(U,G){var ee=U.length;U.push(G);e:for(;0<ee;){var me=ee-1>>>1,Ee=U[me];if(0<l(Ee,G))U[me]=G,U[ee]=Ee,ee=me;else break e}}function n(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var G=U[0],ee=U.pop();if(ee!==G){U[0]=ee;e:for(var me=0,Ee=U.length,D=Ee>>>1;me<D;){var k=2*(me+1)-1,Q=U[k],be=k+1,Ae=U[be];if(0>l(Q,ee))be<Ee&&0>l(Ae,Q)?(U[me]=Ae,U[be]=ee,me=be):(U[me]=Q,U[k]=ee,me=k);else if(be<Ee&&0>l(Ae,ee))U[me]=Ae,U[be]=ee,me=be;else break e}}return G}function l(U,G){var ee=U.sortIndex-G.sortIndex;return ee!==0?ee:U.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var G=n(p);G!==null;){if(G.callback===null)a(p);else if(G.startTime<=U)a(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=n(p)}}function O(U){if(w=!1,N(U),!E)if(n(m)!==null)E=!0,L||(L=!0,j());else{var G=n(p);G!==null&&$(O,G.startTime-U)}}var L=!1,B=-1,T=5,z=-1;function q(){return b?!0:!(r.unstable_now()-z<T)}function V(){if(b=!1,L){var U=r.unstable_now();z=U;var G=!0;try{e:{E=!1,w&&(w=!1,I(B),B=-1),S=!0;var ee=g;try{t:{for(N(U),v=n(m);v!==null&&!(v.expirationTime>U&&q());){var me=v.callback;if(typeof me=="function"){v.callback=null,g=v.priorityLevel;var Ee=me(v.expirationTime<=U);if(U=r.unstable_now(),typeof Ee=="function"){v.callback=Ee,N(U),G=!0;break t}v===n(m)&&a(m),N(U)}else a(m);v=n(m)}if(v!==null)G=!0;else{var D=n(p);D!==null&&$(O,D.startTime-U),G=!1}}break e}finally{v=null,g=ee,S=!1}G=void 0}}finally{G?j():L=!1}}}var j;if(typeof F=="function")j=function(){F(V)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,pe=he.port2;he.port1.onmessage=V,j=function(){pe.postMessage(null)}}else j=function(){y(V,0)};function $(U,G){B=y(function(){U(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ee=g;g=G;try{return U()}finally{g=ee}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=g;g=U;try{return G()}finally{g=ee}},r.unstable_scheduleCallback=function(U,G,ee){var me=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?me+ee:me):ee=me,U){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ee+Ee,U={id:_++,callback:G,priorityLevel:U,startTime:ee,expirationTime:Ee,sortIndex:-1},ee>me?(U.sortIndex=ee,e(p,U),n(m)===null&&U===n(p)&&(w?(I(B),B=-1):w=!0,$(O,ee-me))):(U.sortIndex=Ee,e(m,U),E||S||(E=!0,L||(L=!0,j()))),U},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(U){var G=g;return function(){var ee=g;g=G;try{return U.apply(this,arguments)}finally{g=ee}}}})(Sh)),Sh}var sx;function m2(){return sx||(sx=1,yh.exports=p2()),yh.exports}var bh={exports:{}},Bn={};var ox;function g2(){if(ox)return Bn;ox=1;var r=gm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=_,a.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Bn.requestFormReset=function(m){a.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var lx;function v2(){if(lx)return bh.exports;lx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bh.exports=g2(),bh.exports}var cx;function _2(){if(cx)return ml;cx=1;var r=m2(),e=gm(),n=v2();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===o)return m(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var x=!1,R=u.child;R;){if(R===s){x=!0,s=u,o=d;break}if(R===o){x=!0,o=u,s=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===s){x=!0,s=d,o=u;break}if(R===o){x=!0,o=d,s=u;break}R=R.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),F=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var $=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function D(t){return{current:t}}function k(t){0>Ee||(t.current=me[Ee],me[Ee]=null,Ee--)}function Q(t,i){Ee++,me[Ee]=t.current,t.current=i}var be=D(null),Ae=D(null),K=D(null),oe=D(null);function fe(t,i){switch(Q(K,i),Q(Ae,t),Q(be,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Yv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Yv(i),t=jv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(be),Q(be,t)}function we(){k(be),k(Ae),k(K)}function Te(t){t.memoizedState!==null&&Q(oe,t);var i=be.current,s=jv(i,t.type);i!==s&&(Q(Ae,t),Q(be,s))}function Ce(t){Ae.current===t&&(k(be),k(Ae)),oe.current===t&&(k(oe),ul._currentValue=ee)}var mt,lt;function gt(t){if(mt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);mt=i&&i[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+t+lt}var dt=!1;function $e(t,i){if(!t||dt)return"";dt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(de){var ue=de}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(de){ue=de}t.call(Me.prototype)}}else{try{throw Error()}catch(de){ue=de}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(de){if(de&&ue&&typeof de.stack=="string")return[de.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var H=x.split(`
`),ie=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var xe=`
`+H[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{dt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?gt(s):""}function Ct(t,i){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return $e(t.type,!1);case 11:return $e(t.type.render,!1);case 1:return $e(t.type,!0);case 31:return gt("Activity");default:return""}}function jt(t){try{var i="",s=null;do i+=Ct(t,s),s=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Jt=Object.prototype.hasOwnProperty,nn=r.unstable_scheduleCallback,Qt=r.unstable_cancelCallback,ln=r.unstable_shouldYield,Z=r.unstable_requestPaint,Xt=r.unstable_now,Ut=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,te=r.unstable_NormalPriority,le=r.unstable_LowPriority,ve=r.unstable_IdlePriority,Ne=r.log,Pe=r.unstable_setDisableYieldValue,ge=null,_e=null;function Ue(t){if(typeof Ne=="function"&&Pe(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ge,t)}catch{}}var Ve=Math.clz32?Math.clz32:et,Fe=Math.log,Ie=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Fe(t)/Ie|0)|0}var tt=256,ct=262144,W=4194304;function Le(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Le(o):(x&=R,x!==0?u=Le(x):s||(s=R&~t,s!==0&&(u=Le(s))))):(R=o&~d,R!==0?u=Le(R):x!==0?u=Le(x):s||(s=o&~t,s!==0&&(u=Le(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Oe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ge(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ke(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function qe(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,i,s,o,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(s=x&~s;0<s;){var xe=31-Ve(s),Me=1<<xe;R[xe]=0,H[xe]=-1;var ue=ie[xe];if(ue!==null)for(ie[xe]=null,xe=0;xe<ue.length;xe++){var de=ue[xe];de!==null&&(de.lane&=-536870913)}s&=~Me}o!==0&&zt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~i))}function zt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ve(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ii(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-Ve(s),u=1<<o;u&i|t[o]&i&&(t[o]|=i),s&=~u}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:Eo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function To(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ao(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:v_(t.type))}function hs(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Wi,Dn="__reactProps$"+Wi,Yn="__reactContainer$"+Wi,Ar="__reactEvents$"+Wi,Hl="__reactListeners$"+Wi,Gl="__reactHandles$"+Wi,Rr="__reactResources$"+Wi,Ga="__reactMarker$"+Wi;function Va(t){delete t[mn],delete t[Dn],delete t[Ar],delete t[Hl],delete t[Gl]}function oa(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Yn]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=t_(t);t!==null;){if(s=t[mn])return s;t=t_(t)}return i}t=s,s=t.parentNode}return null}function la(t){if(t=t[mn]||t[Yn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Cr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ka(t){var i=t[Rr];return i||(i=t[Rr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gn(t){t[Ga]=!0}var Vl=new Set,A={};function Y(t,i){ce(t,i),ce(t+"Capture",i)}function ce(t,i){for(A[t]=i,t=0;t<i.length;t++)Vl.add(i[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Be={};function We(t){return Jt.call(Be,t)?!0:Jt.call(se,t)?!1:re.test(t)?Be[t]=!0:(se[t]=!0,!1)}function ze(t,i,s){if(We(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ye(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t,i,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Dt(t){if(!t._valueTracker){var i=ht(t)?"checked":"value";t._valueTracker=Je(t,i,""+t[i])}}function rn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=ht(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Bt(t){return t.replace(Ft,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ke(t,i,s,o,u,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),i!=null?x==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+nt(i)):t.value!==""+nt(i)&&(t.value=""+nt(i)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),i!=null?xt(t,x,nt(i)):s!=null?xt(t,x,nt(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+nt(R):t.removeAttribute("name")}function Fn(t,i,s,o,u,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Dt(t);return}s=s!=null?""+nt(s):"",i=i!=null?""+nt(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Dt(t)}function xt(t,i,s){i==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,i,s,o){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+nt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ri(t,i,s){if(i!=null&&(i=""+nt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+nt(s):""}function Ni(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if($(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=nt(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Dt(t)}function si(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||Ht.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Li(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&sn(t,u,o)}else for(var d in i)i.hasOwnProperty(d)&&sn(t,d,i[d])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return Xa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var cf=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ps=null,ms=null;function qm(t){var i=la(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Bt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var u=o[Dn]||null;if(!u)throw Error(a(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&rn(o)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Mn(t,!!s.multiple,i,!1)}}}var ff=!1;function Ym(t,i,s){if(ff)return t(i,s);ff=!0;try{var o=t(i);return o}finally{if(ff=!1,(ps!==null||ms!==null)&&(wc(),ps&&(i=ps,t=ms,ms=ps=null,qm(i),t)))for(i=0;i<t.length;i++)qm(t[i])}}function Ro(t,i){var s=t.stateNode;if(s===null)return null;var o=s[Dn]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=!1;if(ua)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){df=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{df=!1}var Wa=null,hf=null,kl=null;function jm(){if(kl)return kl;var t,i=hf,s=i.length,o,u="value"in Wa?Wa.value:Wa.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var x=s-t;for(o=1;o<=x&&i[s-o]===u[d-o];o++);return kl=u.slice(t,1<o?1-o:void 0)}function Xl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function Zm(){return!1}function jn(t){function i(s,o,u,d,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wl:Zm,this.isPropagationStopped=Zm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),i}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=jn(Dr),wo=v({},Dr,{view:0,detail:0}),Ab=jn(wo),pf,mf,Do,Yl=v({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(pf=t.screenX-Do.screenX,mf=t.screenY-Do.screenY):mf=pf=0,Do=t),pf)},movementY:function(t){return"movementY"in t?t.movementY:mf}}),Km=jn(Yl),Rb=v({},Yl,{dataTransfer:0}),Cb=jn(Rb),wb=v({},wo,{relatedTarget:0}),gf=jn(wb),Db=v({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Nb=jn(Db),Lb=v({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ub=jn(Lb),Ob=v({},Dr,{data:0}),Qm=jn(Ob),Pb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fb(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=zb[t])?!!i[t]:!1}function vf(){return Fb}var Bb=v({},wo,{key:function(t){if(t.key){var i=Pb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ib[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hb=jn(Bb),Gb=v({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=jn(Gb),Vb=v({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),kb=jn(Vb),Xb=v({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wb=jn(Xb),qb=v({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yb=jn(qb),jb=v({},Dr,{newState:0,oldState:0}),Zb=jn(jb),Kb=[9,13,27,32],_f=ua&&"CompositionEvent"in window,No=null;ua&&"documentMode"in document&&(No=document.documentMode);var Qb=ua&&"TextEvent"in window&&!No,$m=ua&&(!_f||No&&8<No&&11>=No),eg=" ",tg=!1;function ng(t,i){switch(t){case"keyup":return Kb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Jb(t,i){switch(t){case"compositionend":return ig(i);case"keypress":return i.which!==32?null:(tg=!0,eg);case"textInput":return t=i.data,t===eg&&tg?null:t;default:return null}}function $b(t,i){if(gs)return t==="compositionend"||!_f&&ng(t,i)?(t=jm(),kl=hf=Wa=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $m&&i.locale!=="ko"?null:i.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!e1[t.type]:i==="textarea"}function rg(t,i,s,o){ps?ms?ms.push(o):ms=[o]:ps=o,i=Ic(i,"onChange"),0<i.length&&(s=new ql("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var Lo=null,Uo=null;function t1(t){Gv(t,0)}function jl(t){var i=Cr(t);if(rn(i))return t}function sg(t,i){if(t==="change")return i}var og=!1;if(ua){var xf;if(ua){var yf="oninput"in document;if(!yf){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),yf=typeof lg.oninput=="function"}xf=yf}else xf=!1;og=xf&&(!document.documentMode||9<document.documentMode)}function cg(){Lo&&(Lo.detachEvent("onpropertychange",ug),Uo=Lo=null)}function ug(t){if(t.propertyName==="value"&&jl(Uo)){var i=[];rg(i,Uo,t,uf(t)),Ym(t1,i)}}function n1(t,i,s){t==="focusin"?(cg(),Lo=i,Uo=s,Lo.attachEvent("onpropertychange",ug)):t==="focusout"&&cg()}function i1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Uo)}function a1(t,i){if(t==="click")return jl(i)}function r1(t,i){if(t==="input"||t==="change")return jl(i)}function s1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:s1;function Oo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!Jt.call(i,u)||!oi(t[u],i[u]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,i){var s=fg(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=fg(s)}}function hg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?hg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function pg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Zt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Zt(t.document)}return i}function Sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var o1=ua&&"documentMode"in document&&11>=document.documentMode,vs=null,bf=null,Po=null,Mf=!1;function mg(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Mf||vs==null||vs!==Zt(o)||(o=vs,"selectionStart"in o&&Sf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=Ic(bf,"onSelect"),0<o.length&&(i=new ql("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=vs)))}function Nr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var _s={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Ef={},gg={};ua&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Lr(t){if(Ef[t])return Ef[t];if(!_s[t])return t;var i=_s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in gg)return Ef[t]=i[s];return t}var vg=Lr("animationend"),_g=Lr("animationiteration"),xg=Lr("animationstart"),l1=Lr("transitionrun"),c1=Lr("transitionstart"),u1=Lr("transitioncancel"),yg=Lr("transitionend"),Sg=new Map,Tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tf.push("scrollEnd");function Ui(t,i){Sg.set(t,i),Y(i,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],xs=0,Af=0;function Kl(){for(var t=xs,i=Af=xs=0;i<t;){var s=_i[i];_i[i++]=null;var o=_i[i];_i[i++]=null;var u=_i[i];_i[i++]=null;var d=_i[i];if(_i[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&bg(s,u,d)}}function Ql(t,i,s,o){_i[xs++]=t,_i[xs++]=i,_i[xs++]=s,_i[xs++]=o,Af|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Rf(t,i,s,o){return Ql(t,i,s,o),Jl(t)}function Ur(t,i){return Ql(t,null,null,i),Jl(t)}function bg(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ve(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=s|536870912),d):null}function Jl(t){if(50<il)throw il=0,Id=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ys={};function f1(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,o){return new f1(t,i,s,o)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Mg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function $l(t,i,s,o,u,d){var x=0;if(o=t,typeof t=="function")Cf(t)&&(x=1);else if(typeof t=="string")x=gM(t,s,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=li(31,s,i,u),t.elementType=z,t.lanes=d,t;case w:return Or(s.children,u,d,i);case b:x=8,u|=24;break;case y:return t=li(12,s,i,u|2),t.elementType=y,t.lanes=d,t;case O:return t=li(13,s,i,u),t.elementType=O,t.lanes=d,t;case L:return t=li(19,s,i,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break e;case I:x=9;break e;case N:x=11;break e;case B:x=14;break e;case T:x=16,o=null;break e}x=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return i=li(x,s,i,u),i.elementType=t,i.type=o,i.lanes=d,i}function Or(t,i,s,o){return t=li(7,t,o,i),t.lanes=s,t}function wf(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Eg(t){var i=li(18,null,null,0);return i.stateNode=t,i}function Df(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Tg=new WeakMap;function xi(t,i){if(typeof t=="object"&&t!==null){var s=Tg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:jt(i)},Tg.set(t,i),i)}return{value:t,source:i,stack:jt(i)}}var Ss=[],bs=0,ec=null,Io=0,yi=[],Si=0,qa=null,Yi=1,ji="";function da(t,i){Ss[bs++]=Io,Ss[bs++]=ec,ec=t,Io=i}function Ag(t,i,s){yi[Si++]=Yi,yi[Si++]=ji,yi[Si++]=qa,qa=t;var o=Yi;t=ji;var u=32-Ve(o)-1;o&=~(1<<u),s+=1;var d=32-Ve(i)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Yi=1<<32-Ve(i)+u|s<<u|o,ji=d+t}else Yi=1<<d|s<<u|o,ji=t}function Nf(t){t.return!==null&&(da(t,1),Ag(t,1,0))}function Lf(t){for(;t===ec;)ec=Ss[--bs],Ss[bs]=null,Io=Ss[--bs],Ss[bs]=null;for(;t===qa;)qa=yi[--Si],yi[Si]=null,ji=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null}function Rg(t,i){yi[Si++]=Yi,yi[Si++]=ji,yi[Si++]=qa,Yi=i.id,ji=i.overflow,qa=t}var Nn=null,$t=null,Tt=!1,Ya=null,bi=!1,Uf=Error(a(519));function ja(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(xi(i,t)),Uf}function Cg(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[mn]=t,i[Dn]=o,s){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(s=0;s<rl.length;s++)St(rl[s],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":St("invalid",i),Fn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",i);break;case"textarea":St("invalid",i),Ni(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Wv(i.textContent,s)?(o.popover!=null&&(St("beforetoggle",i),St("toggle",i)),o.onScroll!=null&&St("scroll",i),o.onScrollEnd!=null&&St("scrollend",i),o.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||ja(t,!0)}function wg(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Ms(t){if(t!==Nn)return!1;if(!Tt)return wg(t),Tt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Qd(t.type,t.memoizedProps)),s=!s),s&&$t&&ja(t),wg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=e_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=e_(t)}else i===27?(i=$t,lr(t.type)?(t=nh,nh=null,$t=t):$t=i):$t=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Pr(){$t=Nn=null,Tt=!1}function Of(){var t=Ya;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Ya=null),t}function zo(t){Ya===null?Ya=[t]:Ya.push(t)}var Pf=D(null),Ir=null,ha=null;function Za(t,i,s){Q(Pf,i._currentValue),i._currentValue=s}function pa(t){t._currentValue=Pf.current,k(Pf)}function If(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function zf(t,i,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var H=0;H<i.length;H++)if(R.context===i[H]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),If(d.return,s,t),o||(x=null);break e}d=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),If(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Es(t,i,s,o){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var R=u.type;oi(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===oe.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}u=u.return}t!==null&&zf(i,t,s,o),i.flags|=262144}function tc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Ir=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Dg(Ir,t)}function nc(t,i){return Ir===null&&zr(t),Dg(t,i)}function Dg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(a(308));ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ha=ha.next=i;return s}var d1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},h1=r.unstable_scheduleCallback,p1=r.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ff(){return{controller:new d1,data:new Map,refCount:0}}function Fo(t){t.refCount--,t.refCount===0&&h1(p1,function(){t.controller.abort()})}var Bo=null,Bf=0,Ts=0,As=null;function m1(t,i){if(Bo===null){var s=Bo=[];Bf=0,Ts=Vd(),As={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Bf++,i.then(Ng,Ng),i}function Ng(){if(--Bf===0&&Bo!==null){As!==null&&(As.status="fulfilled");var t=Bo;Bo=null,Ts=0,As=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function g1(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Lg=U.S;U.S=function(t,i){mv=Xt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&m1(t,i),Lg!==null&&Lg(t,i)};var Fr=D(null);function Hf(){var t=Fr.current;return t!==null?t:Kt.pooledCache}function ic(t,i){i===null?Q(Fr,Fr.current):Q(Fr,i.pool)}function Ug(){var t=Hf();return t===null?null:{parent:vn._currentValue,pool:t}}var Rs=Error(a(460)),Gf=Error(a(474)),ac=Error(a(542)),rc={then:function(){}};function Og(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zg(t),t;default:if(typeof i.status=="string")i.then(ca,ca);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zg(t),t}throw Hr=i,Rs}}function Br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hr=s,Rs):s}}var Hr=null;function Ig(){if(Hr===null)throw Error(a(459));var t=Hr;return Hr=null,t}function zg(t){if(t===Rs||t===ac)throw Error(a(483))}var Cs=null,Ho=0;function sc(t){var i=Ho;return Ho+=1,Cs===null&&(Cs=[]),Pg(Cs,t,i)}function Go(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function oc(t,i){throw i.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Fg(t){function i(J,X){if(t){var ne=J.deletions;ne===null?(J.deletions=[X],J.flags|=16):ne.push(X)}}function s(J,X){if(!t)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=fa(J,X),J.index=0,J.sibling=null,J}function d(J,X,ne){return J.index=ne,t?(ne=J.alternate,ne!==null?(ne=ne.index,ne<X?(J.flags|=67108866,X):ne):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function x(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,X,ne,Se){return X===null||X.tag!==6?(X=wf(ne,J.mode,Se),X.return=J,X):(X=u(X,ne),X.return=J,X)}function H(J,X,ne,Se){var it=ne.type;return it===w?xe(J,X,ne.props.children,Se,ne.key):X!==null&&(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===T&&Br(it)===X.type)?(X=u(X,ne.props),Go(X,ne),X.return=J,X):(X=$l(ne.type,ne.key,ne.props,null,J.mode,Se),Go(X,ne),X.return=J,X)}function ie(J,X,ne,Se){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Df(ne,J.mode,Se),X.return=J,X):(X=u(X,ne.children||[]),X.return=J,X)}function xe(J,X,ne,Se,it){return X===null||X.tag!==7?(X=Or(ne,J.mode,Se,it),X.return=J,X):(X=u(X,ne),X.return=J,X)}function Me(J,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=wf(""+X,J.mode,ne),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ne=$l(X.type,X.key,X.props,null,J.mode,ne),Go(ne,X),ne.return=J,ne;case E:return X=Df(X,J.mode,ne),X.return=J,X;case T:return X=Br(X),Me(J,X,ne)}if($(X)||j(X))return X=Or(X,J.mode,ne,null),X.return=J,X;if(typeof X.then=="function")return Me(J,sc(X),ne);if(X.$$typeof===F)return Me(J,nc(J,X),ne);oc(J,X)}return null}function ue(J,X,ne,Se){var it=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return it!==null?null:R(J,X,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ne.key===it?H(J,X,ne,Se):null;case E:return ne.key===it?ie(J,X,ne,Se):null;case T:return ne=Br(ne),ue(J,X,ne,Se)}if($(ne)||j(ne))return it!==null?null:xe(J,X,ne,Se,null);if(typeof ne.then=="function")return ue(J,X,sc(ne),Se);if(ne.$$typeof===F)return ue(J,X,nc(J,ne),Se);oc(J,ne)}return null}function de(J,X,ne,Se,it){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ne)||null,R(X,J,""+Se,it);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case S:return J=J.get(Se.key===null?ne:Se.key)||null,H(X,J,Se,it);case E:return J=J.get(Se.key===null?ne:Se.key)||null,ie(X,J,Se,it);case T:return Se=Br(Se),de(J,X,ne,Se,it)}if($(Se)||j(Se))return J=J.get(ne)||null,xe(X,J,Se,it,null);if(typeof Se.then=="function")return de(J,X,ne,sc(Se),it);if(Se.$$typeof===F)return de(J,X,ne,nc(X,Se),it);oc(X,Se)}return null}function Ze(J,X,ne,Se){for(var it=null,Nt=null,Qe=X,vt=X=0,Mt=null;Qe!==null&&vt<ne.length;vt++){Qe.index>vt?(Mt=Qe,Qe=null):Mt=Qe.sibling;var Lt=ue(J,Qe,ne[vt],Se);if(Lt===null){Qe===null&&(Qe=Mt);break}t&&Qe&&Lt.alternate===null&&i(J,Qe),X=d(Lt,X,vt),Nt===null?it=Lt:Nt.sibling=Lt,Nt=Lt,Qe=Mt}if(vt===ne.length)return s(J,Qe),Tt&&da(J,vt),it;if(Qe===null){for(;vt<ne.length;vt++)Qe=Me(J,ne[vt],Se),Qe!==null&&(X=d(Qe,X,vt),Nt===null?it=Qe:Nt.sibling=Qe,Nt=Qe);return Tt&&da(J,vt),it}for(Qe=o(Qe);vt<ne.length;vt++)Mt=de(Qe,J,vt,ne[vt],Se),Mt!==null&&(t&&Mt.alternate!==null&&Qe.delete(Mt.key===null?vt:Mt.key),X=d(Mt,X,vt),Nt===null?it=Mt:Nt.sibling=Mt,Nt=Mt);return t&&Qe.forEach(function(hr){return i(J,hr)}),Tt&&da(J,vt),it}function st(J,X,ne,Se){if(ne==null)throw Error(a(151));for(var it=null,Nt=null,Qe=X,vt=X=0,Mt=null,Lt=ne.next();Qe!==null&&!Lt.done;vt++,Lt=ne.next()){Qe.index>vt?(Mt=Qe,Qe=null):Mt=Qe.sibling;var hr=ue(J,Qe,Lt.value,Se);if(hr===null){Qe===null&&(Qe=Mt);break}t&&Qe&&hr.alternate===null&&i(J,Qe),X=d(hr,X,vt),Nt===null?it=hr:Nt.sibling=hr,Nt=hr,Qe=Mt}if(Lt.done)return s(J,Qe),Tt&&da(J,vt),it;if(Qe===null){for(;!Lt.done;vt++,Lt=ne.next())Lt=Me(J,Lt.value,Se),Lt!==null&&(X=d(Lt,X,vt),Nt===null?it=Lt:Nt.sibling=Lt,Nt=Lt);return Tt&&da(J,vt),it}for(Qe=o(Qe);!Lt.done;vt++,Lt=ne.next())Lt=de(Qe,J,vt,Lt.value,Se),Lt!==null&&(t&&Lt.alternate!==null&&Qe.delete(Lt.key===null?vt:Lt.key),X=d(Lt,X,vt),Nt===null?it=Lt:Nt.sibling=Lt,Nt=Lt);return t&&Qe.forEach(function(RM){return i(J,RM)}),Tt&&da(J,vt),it}function Yt(J,X,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:e:{for(var it=ne.key;X!==null;){if(X.key===it){if(it=ne.type,it===w){if(X.tag===7){s(J,X.sibling),Se=u(X,ne.props.children),Se.return=J,J=Se;break e}}else if(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===T&&Br(it)===X.type){s(J,X.sibling),Se=u(X,ne.props),Go(Se,ne),Se.return=J,J=Se;break e}s(J,X);break}else i(J,X);X=X.sibling}ne.type===w?(Se=Or(ne.props.children,J.mode,Se,ne.key),Se.return=J,J=Se):(Se=$l(ne.type,ne.key,ne.props,null,J.mode,Se),Go(Se,ne),Se.return=J,J=Se)}return x(J);case E:e:{for(it=ne.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){s(J,X.sibling),Se=u(X,ne.children||[]),Se.return=J,J=Se;break e}else{s(J,X);break}else i(J,X);X=X.sibling}Se=Df(ne,J.mode,Se),Se.return=J,J=Se}return x(J);case T:return ne=Br(ne),Yt(J,X,ne,Se)}if($(ne))return Ze(J,X,ne,Se);if(j(ne)){if(it=j(ne),typeof it!="function")throw Error(a(150));return ne=it.call(ne),st(J,X,ne,Se)}if(typeof ne.then=="function")return Yt(J,X,sc(ne),Se);if(ne.$$typeof===F)return Yt(J,X,nc(J,ne),Se);oc(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(s(J,X.sibling),Se=u(X,ne),Se.return=J,J=Se):(s(J,X),Se=wf(ne,J.mode,Se),Se.return=J,J=Se),x(J)):s(J,X)}return function(J,X,ne,Se){try{Ho=0;var it=Yt(J,X,ne,Se);return Cs=null,it}catch(Qe){if(Qe===Rs||Qe===ac)throw Qe;var Nt=li(29,Qe,null,J.mode);return Nt.lanes=Se,Nt.return=J,Nt}}}var Gr=Fg(!0),Bg=Fg(!1),Ka=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Jl(t),bg(t,null,s),i}return Ql(t,o,i,s),Jl(t)}function Vo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ii(t,s)}}function Xf(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Wf=!1;function ko(){if(Wf){var t=As;if(t!==null)throw t}}function Xo(t,i,s,o){Wf=!1;var u=t.updateQueue;Ka=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ie=H.next;H.next=null,x===null?d=ie:x.next=ie,x=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,R=xe.lastBaseUpdate,R!==x&&(R===null?xe.firstBaseUpdate=ie:R.next=ie,xe.lastBaseUpdate=H))}if(d!==null){var Me=u.baseState;x=0,xe=ie=H=null,R=d;do{var ue=R.lane&-536870913,de=ue!==R.lane;if(de?(bt&ue)===ue:(o&ue)===ue){ue!==0&&ue===Ts&&(Wf=!0),xe!==null&&(xe=xe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,st=R;ue=i;var Yt=s;switch(st.tag){case 1:if(Ze=st.payload,typeof Ze=="function"){Me=Ze.call(Yt,Me,ue);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=st.payload,ue=typeof Ze=="function"?Ze.call(Yt,Me,ue):Ze,ue==null)break e;Me=v({},Me,ue);break e;case 2:Ka=!0}}ue=R.callback,ue!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ue]:de.push(ue))}else de={lane:ue,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xe===null?(ie=xe=de,H=Me):xe=xe.next=de,x|=ue;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);xe===null&&(H=Me),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=xe,d===null&&(u.shared.lanes=0),ir|=x,t.lanes=x,t.memoizedState=Me}}function Hg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Gg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Hg(s[t],i)}var ws=D(null),lc=D(0);function Vg(t,i){t=Ma,Q(lc,t),Q(ws,i),Ma=t|i.baseLanes}function qf(){Q(lc,Ma),Q(ws,ws.current)}function Yf(){Ma=lc.current,k(ws),k(lc)}var ci=D(null),Mi=null;function $a(t){var i=t.alternate;Q(hn,hn.current&1),Q(ci,t),Mi===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(Mi=t)}function jf(t){Q(hn,hn.current),Q(ci,t),Mi===null&&(Mi=t)}function kg(t){t.tag===22?(Q(hn,hn.current),Q(ci,t),Mi===null&&(Mi=t)):er()}function er(){Q(hn,hn.current),Q(ci,ci.current)}function ui(t){k(ci),Mi===t&&(Mi=null),k(hn)}var hn=D(0);function cc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||eh(s)||th(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,pt=null,Wt=null,_n=null,uc=!1,Ds=!1,Vr=!1,fc=0,Wo=0,Ns=null,v1=0;function cn(){throw Error(a(321))}function Zf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function Kf(t,i,s,o,u,d){return ma=d,pt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,U.H=t===null||t.memoizedState===null?A0:fd,Vr=!1,d=s(o,u),Vr=!1,Ds&&(d=Wg(i,s,o,u)),Xg(t),d}function Xg(t){U.H=jo;var i=Wt!==null&&Wt.next!==null;if(ma=0,_n=Wt=pt=null,uc=!1,Wo=0,Ns=null,i)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&tc(t)&&(xn=!0))}function Wg(t,i,s,o){pt=t;var u=0;do{if(Ds&&(Ns=null),Wo=0,Ds=!1,25<=u)throw Error(a(301));if(u+=1,_n=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=R0,d=i(s,o)}while(Ds);return d}function _1(){var t=U.H,i=t.useState()[0];return i=typeof i.then=="function"?qo(i):i,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(pt.flags|=1024),i}function Qf(){var t=fc!==0;return fc=0,t}function Jf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function $f(t){if(uc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uc=!1}ma=0,_n=Wt=pt=null,Ds=!1,Wo=fc=0,Ns=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?pt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Wt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=_n===null?pt.memoizedState:_n.next;if(i!==null)_n=i,Wt=t;else{if(t===null)throw pt.alternate===null?Error(a(467)):Error(a(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},_n===null?pt.memoizedState=_n=t:_n=_n.next=t}return _n}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(t){var i=Wo;return Wo+=1,Ns===null&&(Ns=[]),t=Pg(Ns,t,i),i=pt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,U.H=i===null||i.memoizedState===null?A0:fd),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qo(t);if(t.$$typeof===F)return Ln(t)}throw Error(a(438,String(t)))}function ed(t){var i=null,s=pt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=dc(),pt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=q;return i.index++,s}function ga(t,i){return typeof i=="function"?i(t):i}function pc(t){var i=pn();return td(i,Wt,t)}function td(t,i,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}i.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var R=x=null,H=null,ie=i,xe=!1;do{var Me=ie.lane&-536870913;if(Me!==ie.lane?(bt&Me)===Me:(ma&Me)===Me){var ue=ie.revertLane;if(ue===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Me===Ts&&(xe=!0);else if((ma&ue)===ue){ie=ie.next,ue===Ts&&(xe=!0);continue}else Me={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=Me,x=d):H=H.next=Me,pt.lanes|=ue,ir|=ue;Me=ie.action,Vr&&s(d,Me),d=ie.hasEagerState?ie.eagerState:s(d,Me)}else ue={lane:Me,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=ue,x=d):H=H.next=ue,pt.lanes|=Me,ir|=Me;ie=ie.next}while(ie!==null&&ie!==i);if(H===null?x=d:H.next=R,!oi(d,t.memoizedState)&&(xn=!0,xe&&(s=As,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function nd(t){var i=pn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);oi(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function qg(t,i,s){var o=pt,u=pn(),d=Tt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var x=!oi((Wt||u).memoizedState,s);if(x&&(u.memoizedState=s,xn=!0),u=u.queue,rd(Zg.bind(null,o,u,t),[t]),u.getSnapshot!==i||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Ls(9,{destroy:void 0},jg.bind(null,o,u,s,i),null),Kt===null)throw Error(a(349));d||(ma&127)!==0||Yg(o,i,s)}return s}function Yg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=pt.updateQueue,i===null?(i=dc(),pt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function jg(t,i,s,o){i.value=s,i.getSnapshot=o,Kg(i)&&Qg(t)}function Zg(t,i,s){return s(function(){Kg(i)&&Qg(t)})}function Kg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function Qg(t){var i=Ur(t,2);i!==null&&$n(i,t,2)}function id(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Vr){Ue(!0);try{s()}finally{Ue(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i}function Jg(t,i,s,o){return t.baseState=s,td(t,Wt,typeof o=="function"?o:ga)}function x1(t,i,s,o,u){if(vc(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};U.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,$g(i,d)):(d.next=s.next,i.pending=s.next=d)}}function $g(t,i){var s=i.action,o=i.payload,u=t.state;if(i.isTransition){var d=U.T,x={};U.T=x;try{var R=s(u,o),H=U.S;H!==null&&H(x,R),e0(t,i,R)}catch(ie){ad(t,i,ie)}finally{d!==null&&x.types!==null&&(d.types=x.types),U.T=d}}else try{d=s(u,o),e0(t,i,d)}catch(ie){ad(t,i,ie)}}function e0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){t0(t,i,o)},function(o){return ad(t,i,o)}):t0(t,i,s)}function t0(t,i,s){i.status="fulfilled",i.value=s,n0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$g(t,s)))}function ad(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,n0(i),i=i.next;while(i!==o)}t.action=null}function n0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function i0(t,i){return i}function a0(t,i){if(Tt){var s=Kt.formState;if(s!==null){e:{var o=pt;if(Tt){if($t){t:{for(var u=$t,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=Ei(u.nextSibling),o=u.data==="F!";break e}}ja(o)}o=!1}o&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:i},s.queue=o,s=M0.bind(null,pt,o),o.dispatch=s,o=id(!1),d=ud.bind(null,pt,!1,o.queue),o=kn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,s=x1.bind(null,pt,u,d,s),u.dispatch=s,o.memoizedState=t,[i,s,!1]}function r0(t){var i=pn();return s0(i,Wt,t)}function s0(t,i,s){if(i=td(t,i,i0)[0],t=pc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=qo(i)}catch(x){throw x===Rs?ac:x}else o=i;i=pn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(pt.flags|=2048,Ls(9,{destroy:void 0},y1.bind(null,u,s),null)),[o,d,t]}function y1(t,i){t.action=i}function o0(t){var i=pn(),s=Wt;if(s!==null)return s0(i,s,t);pn(),i=i.memoizedState,s=pn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function Ls(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=pt.updateQueue,i===null&&(i=dc(),pt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function l0(){return pn().memoizedState}function mc(t,i,s,o){var u=kn();pt.flags|=t,u.memoizedState=Ls(1|i,{destroy:void 0},s,o===void 0?null:o)}function gc(t,i,s,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&Zf(o,Wt.memoizedState.deps)?u.memoizedState=Ls(i,d,s,o):(pt.flags|=t,u.memoizedState=Ls(1|i,d,s,o))}function c0(t,i){mc(8390656,8,t,i)}function rd(t,i){gc(2048,8,t,i)}function S1(t){pt.flags|=4;var i=pt.updateQueue;if(i===null)i=dc(),pt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function u0(t){var i=pn().memoizedState;return S1({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function f0(t,i){return gc(4,2,t,i)}function d0(t,i){return gc(4,4,t,i)}function h0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function p0(t,i,s){s=s!=null?s.concat([t]):null,gc(4,4,h0.bind(null,i,t),s)}function sd(){}function m0(t,i){var s=pn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Zf(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function g0(t,i){var s=pn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Zf(i,o[1]))return o[0];if(o=t(),Vr){Ue(!0);try{t()}finally{Ue(!1)}}return s.memoizedState=[o,i],o}function od(t,i,s){return s===void 0||(ma&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=vv(),pt.lanes|=t,ir|=t,s)}function v0(t,i,s,o){return oi(s,i)?s:ws.current!==null?(t=od(t,s,o),oi(t,i)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=s):(t=vv(),pt.lanes|=t,ir|=t,i)}function _0(t,i,s,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var x=U.T,R={};U.T=R,ud(t,!1,i,s);try{var H=u(),ie=U.S;if(ie!==null&&ie(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xe=g1(H,o);Yo(t,i,xe,hi(t))}else Yo(t,i,o,hi(t))}catch(Me){Yo(t,i,{then:function(){},status:"rejected",reason:Me},hi())}finally{G.p=d,x!==null&&R.types!==null&&(x.types=R.types),U.T=x}}function b1(){}function ld(t,i,s,o){if(t.tag!==5)throw Error(a(476));var u=x0(t).queue;_0(t,u,i,ee,s===null?b1:function(){return y0(t),s(o)})}function x0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:ee},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function y0(t){var i=x0(t);i.next===null&&(i=t.alternate.memoizedState),Yo(t,i.next.queue,{},hi())}function cd(){return Ln(ul)}function S0(){return pn().memoizedState}function b0(){return pn().memoizedState}function M1(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=Qa(s);var o=Ja(i,t,s);o!==null&&($n(o,i,s),Vo(o,i,s)),i={cache:Ff()},t.payload=i;return}i=i.return}}function E1(t,i,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(t)?E0(i,s):(s=Rf(t,i,s,o),s!==null&&($n(s,t,o),T0(s,i,o)))}function M0(t,i,s){var o=hi();Yo(t,i,s,o)}function Yo(t,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(t))E0(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,R=d(x,s);if(u.hasEagerState=!0,u.eagerState=R,oi(R,x))return Ql(t,i,u,0),Kt===null&&Kl(),!1}catch{}if(s=Rf(t,i,u,o),s!==null)return $n(s,t,o),T0(s,i,o),!0}return!1}function ud(t,i,s,o){if(o={lane:2,revertLane:Vd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vc(t)){if(i)throw Error(a(479))}else i=Rf(t,s,o,2),i!==null&&$n(i,t,2)}function vc(t){var i=t.alternate;return t===pt||i!==null&&i===pt}function E0(t,i){Ds=uc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function T0(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ii(t,s)}}var jo={readContext:Ln,use:hc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};jo.useEffectEvent=cn;var A0={readContext:Ln,use:hc,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:c0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,mc(4194308,4,h0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return mc(4194308,4,t,i)},useInsertionEffect:function(t,i){mc(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var o=t();if(Vr){Ue(!0);try{t()}finally{Ue(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=kn();if(s!==void 0){var u=s(i);if(Vr){Ue(!0);try{s(i)}finally{Ue(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=E1.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=id(t);var i=t.queue,s=M0.bind(null,pt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:sd,useDeferredValue:function(t,i){var s=kn();return od(s,t,i)},useTransition:function(){var t=id(!1);return t=_0.bind(null,pt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=pt,u=kn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Kt===null)throw Error(a(349));(bt&127)!==0||Yg(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,c0(Zg.bind(null,o,d,t),[t]),o.flags|=2048,Ls(9,{destroy:void 0},jg.bind(null,o,d,s,i),null),s},useId:function(){var t=kn(),i=Kt.identifierPrefix;if(Tt){var s=ji,o=Yi;s=(o&~(1<<32-Ve(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=v1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:cd,useFormState:a0,useActionState:a0,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ud.bind(null,pt,!0,s),s.dispatch=i,[t,i]},useMemoCache:ed,useCacheRefresh:function(){return kn().memoizedState=M1.bind(null,pt)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((Ot&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},fd={readContext:Ln,use:hc,useCallback:m0,useContext:Ln,useEffect:rd,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:pc,useRef:l0,useState:function(){return pc(ga)},useDebugValue:sd,useDeferredValue:function(t,i){var s=pn();return v0(s,Wt.memoizedState,t,i)},useTransition:function(){var t=pc(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),i]},useSyncExternalStore:qg,useId:S0,useHostTransitionStatus:cd,useFormState:r0,useActionState:r0,useOptimistic:function(t,i){var s=pn();return Jg(s,Wt,t,i)},useMemoCache:ed,useCacheRefresh:b0};fd.useEffectEvent=u0;var R0={readContext:Ln,use:hc,useCallback:m0,useContext:Ln,useEffect:rd,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:nd,useRef:l0,useState:function(){return nd(ga)},useDebugValue:sd,useDeferredValue:function(t,i){var s=pn();return Wt===null?od(s,t,i):v0(s,Wt.memoizedState,t,i)},useTransition:function(){var t=nd(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),i]},useSyncExternalStore:qg,useId:S0,useHostTransitionStatus:cd,useFormState:o0,useActionState:o0,useOptimistic:function(t,i){var s=pn();return Wt!==null?Jg(s,Wt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ed,useCacheRefresh:b0};R0.useEffectEvent=u0;function dd(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var hd={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.payload=i,s!=null&&(u.callback=s),i=Ja(t,u,o),i!==null&&($n(i,t,o),Vo(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ja(t,u,o),i!==null&&($n(i,t,o),Vo(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),o=Qa(s);o.tag=2,i!=null&&(o.callback=i),i=Ja(t,o,s),i!==null&&($n(i,t,s),Vo(i,t,s))}};function C0(t,i,s,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):i.prototype&&i.prototype.isPureReactComponent?!Oo(s,o)||!Oo(u,d):!0}function w0(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&hd.enqueueReplaceState(i,i.state,null)}function kr(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function D0(t){Zl(t)}function N0(t){console.error(t)}function L0(t){Zl(t)}function _c(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function U0(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pd(t,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(t,i)},s}function O0(t){return t=Qa(t),t.tag=3,t}function P0(t,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){U0(i,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){U0(i,s,o),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function T1(t,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&Es(i,s,u,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Dc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===rc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Bd(t,o,u)),!1;case 22:return s.flags|=65536,o===rc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Bd(t,o,u)),!1}throw Error(a(435,s.tag))}return Bd(t,o,u),Dc(),!1}if(Tt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Uf&&(t=Error(a(422),{cause:o}),zo(xi(t,s)))):(o!==Uf&&(i=Error(a(423),{cause:o}),zo(xi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,s),u=pd(t.stateNode,o,u),Xf(t,u),un!==4&&(un=2)),!1;var d=Error(a(520),{cause:o});if(d=xi(d,s),nl===null?nl=[d]:nl.push(d),un!==4&&(un=2),i===null)return!0;o=xi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=pd(s.stateNode,o,t),Xf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=O0(u),P0(u,t,s,o),Xf(s,u),!1}s=s.return}while(s!==null);return!1}var md=Error(a(461)),xn=!1;function Un(t,i,s,o){i.child=t===null?Bg(i,null,s,o):Gr(i,t.child,s,o)}function I0(t,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return zr(i),o=Kf(t,i,s,x,d,u),R=Qf(),t!==null&&!xn?(Jf(t,i,u),va(t,i,u)):(Tt&&R&&Nf(i),i.flags|=1,Un(t,i,o,u),i.child)}function z0(t,i,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!Cf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,F0(t,i,d,o,u)):(t=$l(s.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Md(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(x,o)&&t.ref===i.ref)return va(t,i,u)}return i.flags|=1,t=fa(d,o),t.ref=i.ref,t.return=i,i.child=t}function F0(t,i,s,o,u){if(t!==null){var d=t.memoizedProps;if(Oo(d,o)&&t.ref===i.ref)if(xn=!1,i.pendingProps=o=d,Md(t,u))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,va(t,i,u)}return gd(t,i,s,o,u)}function B0(t,i,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=i.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return H0(t,i,d,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(i,d!==null?d.cachePool:null),d!==null?Vg(i,d):qf(),kg(i);else return o=i.lanes=536870912,H0(t,i,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(ic(i,d.cachePool),Vg(i,d),er(),i.memoizedState=null):(t!==null&&ic(i,null),qf(),er());return Un(t,i,u,s),i.child}function Zo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function H0(t,i,s,o,u){var d=Hf();return d=d===null?null:{parent:vn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ic(i,null),qf(),kg(i),t!==null&&Es(t,i,o,!0),i.childLanes=u,null}function xc(t,i){return i=Sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function G0(t,i,s){return Gr(i,t.child,null,s),t=xc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function A1(t,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=xc(i,o),i.lanes=536870912,Zo(null,t);if(jf(i),(t=$t)?(t=$v(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=Eg(t),s.return=i,i.child=s,Nn=i,$t=null)):t=null,t===null)throw ja(i);return i.lanes=536870912,null}return xc(i,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(jf(i),u)if(i.flags&256)i.flags&=-257,i=G0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(xn||Es(t,i,s,!1),u=(s&t.childLanes)!==0,xn||u){if(o=Kt,o!==null&&(x=ai(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ur(t,x),$n(o,t,x),md;Dc(),i=G0(t,i,s)}else t=d.treeContext,$t=Ei(x.nextSibling),Nn=i,Tt=!0,Ya=null,bi=!1,t!==null&&Rg(i,t),i=xc(i,o),i.flags|=4096;return i}return t=fa(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function yc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function gd(t,i,s,o,u){return zr(i),s=Kf(t,i,s,o,void 0,u),o=Qf(),t!==null&&!xn?(Jf(t,i,u),va(t,i,u)):(Tt&&o&&Nf(i),i.flags|=1,Un(t,i,s,u),i.child)}function V0(t,i,s,o,u,d){return zr(i),i.updateQueue=null,s=Wg(i,o,s,u),Xg(t),o=Qf(),t!==null&&!xn?(Jf(t,i,d),va(t,i,d)):(Tt&&o&&Nf(i),i.flags|=1,Un(t,i,s,d),i.child)}function k0(t,i,s,o,u){if(zr(i),i.stateNode===null){var d=ys,x=s.contextType;typeof x=="object"&&x!==null&&(d=Ln(x)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=hd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Vf(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?Ln(x):ys,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(dd(i,s,x,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&hd.enqueueReplaceState(d,d.state,null),Xo(i,o,d,u),ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var R=i.memoizedProps,H=kr(s,R);d.props=H;var ie=d.context,xe=s.contextType;x=ys,typeof xe=="object"&&xe!==null&&(x=Ln(xe));var Me=s.getDerivedStateFromProps;xe=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ie!==x)&&w0(i,d,o,x),Ka=!1;var ue=i.memoizedState;d.state=ue,Xo(i,o,d,u),ko(),ie=i.memoizedState,R||ue!==ie||Ka?(typeof Me=="function"&&(dd(i,s,Me,o),ie=i.memoizedState),(H=Ka||C0(i,s,H,o,ue,ie,x))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ie),d.props=o,d.state=ie,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,kf(t,i),x=i.memoizedProps,xe=kr(s,x),d.props=xe,Me=i.pendingProps,ue=d.context,ie=s.contextType,H=ys,typeof ie=="object"&&ie!==null&&(H=Ln(ie)),R=s.getDerivedStateFromProps,(ie=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Me||ue!==H)&&w0(i,d,o,H),Ka=!1,ue=i.memoizedState,d.state=ue,Xo(i,o,d,u),ko();var de=i.memoizedState;x!==Me||ue!==de||Ka||t!==null&&t.dependencies!==null&&tc(t.dependencies)?(typeof R=="function"&&(dd(i,s,R,o),de=i.memoizedState),(xe=Ka||C0(i,s,xe,o,ue,de,H)||t!==null&&t.dependencies!==null&&tc(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,de,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,de,H)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=de),d.props=o,d.state=de,d.context=H,o=xe):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,yc(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=Gr(i,t.child,null,u),i.child=Gr(i,null,s,u)):Un(t,i,s,u),i.memoizedState=d.state,t=i.child):t=va(t,i,u),t}function X0(t,i,s,o){return Pr(),i.flags|=256,Un(t,i,s,o),i.child}var vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _d(t){return{baseLanes:t,cachePool:Ug()}}function xd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function W0(t,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(u?$a(i):er(),(t=$t)?(t=$v(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=Eg(t),s.return=i,i.child=s,Nn=i,$t=null)):t=null,t===null)throw ja(i);return th(t)?i.lanes=32:i.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(er(),u=i.mode,R=Sc({mode:"hidden",children:R},u),o=Or(o,u,s,null),R.return=i,o.return=i,R.sibling=o,i.child=R,o=i.child,o.memoizedState=_d(s),o.childLanes=xd(t,x,s),i.memoizedState=vd,Zo(null,o)):($a(i),yd(i,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)i.flags&256?($a(i),i.flags&=-257,i=Sd(t,i,s)):i.memoizedState!==null?(er(),i.child=t.child,i.flags|=128,i=null):(er(),R=o.fallback,u=i.mode,o=Sc({mode:"visible",children:o.children},u),R=Or(R,u,s,null),R.flags|=2,o.return=i,R.return=i,o.sibling=R,i.child=o,Gr(i,t.child,null,s),o=i.child,o.memoizedState=_d(s),o.childLanes=xd(t,x,s),i.memoizedState=vd,i=Zo(null,o));else if($a(i),th(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ie=x.dgst;x=ie,o=Error(a(419)),o.stack="",o.digest=x,zo({value:o,source:null,stack:null}),i=Sd(t,i,s)}else if(xn||Es(t,i,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=Kt,x!==null&&(o=ai(x,s),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ur(t,o),$n(x,t,o),md;eh(R)||Dc(),i=Sd(t,i,s)}else eh(R)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,$t=Ei(R.nextSibling),Nn=i,Tt=!0,Ya=null,bi=!1,t!==null&&Rg(i,t),i=yd(i,o.children),i.flags|=4096);return i}return u?(er(),R=o.fallback,u=i.mode,H=t.child,ie=H.sibling,o=fa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?R=fa(ie,R):(R=Or(R,u,s,null),R.flags|=2),R.return=i,o.return=i,o.sibling=R,i.child=o,Zo(null,o),o=i.child,R=t.child.memoizedState,R===null?R=_d(s):(u=R.cachePool,u!==null?(H=vn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Ug(),R={baseLanes:R.baseLanes|s,cachePool:u}),o.memoizedState=R,o.childLanes=xd(t,x,s),i.memoizedState=vd,Zo(t.child,o)):($a(i),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(x=i.deletions,x===null?(i.deletions=[t],i.flags|=16):x.push(t)),i.child=s,i.memoizedState=null,s)}function yd(t,i){return i=Sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Sc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function Sd(t,i,s){return Gr(i,t.child,null,s),t=yd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function q0(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),If(t.return,i,s)}function bd(t,i,s,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function Y0(t,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=hn.current,R=(x&2)!==0;if(R?(x=x&1|2,i.flags|=128):x&=1,Q(hn,x),Un(t,i,o,s),o=Tt?Io:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&q0(t,s,i);else if(t.tag===19)q0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),bd(i,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&cc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}bd(i,!0,s,null,d,o);break;case"together":bd(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Es(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=fa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Md(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&tc(t)))}function R1(t,i,s){switch(i.tag){case 3:fe(i,i.stateNode.containerInfo),Za(i,vn,t.memoizedState.cache),Pr();break;case 27:case 5:Te(i);break;case 4:fe(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,jf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?($a(i),i.flags|=128,null):(s&i.child.childLanes)!==0?W0(t,i,s):($a(i),t=va(t,i,s),t!==null?t.sibling:null);$a(i);break;case 19:var u=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(Es(t,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return Y0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Q(hn,hn.current),o)break;return null;case 22:return i.lanes=0,B0(t,i,s,i.pendingProps);case 24:Za(i,vn,t.memoizedState.cache)}return va(t,i,s)}function j0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Md(t,s)&&(i.flags&128)===0)return xn=!1,R1(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Tt&&(i.flags&1048576)!==0&&Ag(i,Io,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=Br(i.elementType),i.type=t,typeof t=="function")Cf(t)?(o=kr(t,o),i.tag=1,i=k0(null,i,t,o,s)):(i.tag=0,i=gd(null,i,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===N){i.tag=11,i=I0(null,i,t,o,s);break e}else if(u===B){i.tag=14,i=z0(null,i,t,o,s);break e}}throw i=pe(t)||t,Error(a(306,i,""))}}return i;case 0:return gd(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=kr(o,i.pendingProps),k0(t,i,o,u,s);case 3:e:{if(fe(i,i.stateNode.containerInfo),t===null)throw Error(a(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,kf(t,i),Xo(i,o,null,s);var x=i.memoizedState;if(o=x.cache,Za(i,vn,o),o!==d.cache&&zf(i,[vn],s,!0),ko(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=X0(t,i,o,s);break e}else if(o!==u){u=xi(Error(a(424)),i),zo(u),i=X0(t,i,o,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$t=Ei(t.firstChild),Nn=i,Tt=!0,Ya=null,bi=!0,s=Bg(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Pr(),o===u){i=va(t,i,s);break e}Un(t,i,o,s)}i=i.child}return i;case 26:return yc(t,i),t===null?(s=r_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,t=i.pendingProps,o=zc(K.current).createElement(s),o[mn]=i,o[Dn]=t,On(o,s,t),gn(o),i.stateNode=o):i.memoizedState=r_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Te(i),t===null&&Tt&&(o=i.stateNode=n_(i.type,i.pendingProps,K.current),Nn=i,bi=!0,u=$t,lr(i.type)?(nh=u,$t=Ei(o.firstChild)):$t=u),Un(t,i,i.pendingProps.children,s),yc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((u=o=$t)&&(o=iM(o,i.type,i.pendingProps,bi),o!==null?(i.stateNode=o,Nn=i,$t=Ei(o.firstChild),bi=!1,u=!0):u=!1),u||ja(i)),Te(i),u=i.type,d=i.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,Qd(u,d)?o=null:x!==null&&Qd(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=Kf(t,i,_1,null,null,s),ul._currentValue=u),yc(t,i),Un(t,i,o,s),i.child;case 6:return t===null&&Tt&&((t=s=$t)&&(s=aM(s,i.pendingProps,bi),s!==null?(i.stateNode=s,Nn=i,$t=null,t=!0):t=!1),t||ja(i)),null;case 13:return W0(t,i,s);case 4:return fe(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=Gr(i,null,o,s):Un(t,i,o,s),i.child;case 11:return I0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Za(i,i.type,o.value),Un(t,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,zr(i),u=Ln(u),o=o(u),i.flags|=1,Un(t,i,o,s),i.child;case 14:return z0(t,i,i.type,i.pendingProps,s);case 15:return F0(t,i,i.type,i.pendingProps,s);case 19:return Y0(t,i,s);case 31:return A1(t,i,s);case 22:return B0(t,i,s,i.pendingProps);case 24:return zr(i),o=Ln(vn),t===null?(u=Hf(),u===null&&(u=Kt,d=Ff(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Vf(i),Za(i,vn,u)):((t.lanes&s)!==0&&(kf(t,i),Xo(i,null,null,s),ko()),u=t.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Za(i,vn,o)):(o=d.cache,Za(i,vn,o),o!==u.cache&&zf(i,[vn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function _a(t){t.flags|=4}function Ed(t,i,s,o,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Sv())t.flags|=8192;else throw Hr=rc,Gf}else t.flags&=-16777217}function Z0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!u_(i))if(Sv())t.flags|=8192;else throw Hr=rc,Gf}function bc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Re():536870912,t.lanes|=i,Is|=i)}function Ko(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function C1(t,i,s){var o=i.pendingProps;switch(Lf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),pa(vn),we(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ms(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Of())),en(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(_a(i),d!==null?(en(i),Z0(i,d)):(en(i),Ed(i,u,null,o,s))):d?d!==t.memoizedState?(_a(i),en(i),Z0(i,d)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&_a(i),en(i),Ed(i,u,t,o,s)),null;case 27:if(Ce(i),s=K.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return en(i),null}t=be.current,Ms(i)?Cg(i):(t=n_(u,o,s),i.stateNode=t,_a(i))}return en(i),null;case 5:if(Ce(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return en(i),null}if(d=be.current,Ms(i))Cg(i);else{var x=zc(K.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[mn]=i,d[Dn]=o;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&_a(i)}}return en(i),Ed(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(t=K.current,Ms(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Wv(t.nodeValue,s)),t||ja(i,!0)}else t=zc(t).createTextNode(o),t[mn]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(o=Ms(i),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return en(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ms(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),u=!1}else u=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),bc(i,i.updateQueue),en(i),null);case 4:return we(),t===null&&qd(i.stateNode.containerInfo),en(i),null;case 10:return pa(i.type),en(i),null;case 19:if(k(hn),o=i.memoizedState,o===null)return en(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)Ko(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=cc(t),d!==null){for(i.flags|=128,Ko(o,!1),t=d.updateQueue,i.updateQueue=t,bc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Mg(s,t),s=s.sibling;return Q(hn,hn.current&1|2),Tt&&da(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&Xt()>Rc&&(i.flags|=128,u=!0,Ko(o,!1),i.lanes=4194304)}else{if(!u)if(t=cc(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,bc(i,t),Ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return en(i),null}else 2*Xt()-o.renderingStartTime>Rc&&s!==536870912&&(i.flags|=128,u=!0,Ko(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(t=o.last,t!==null?t.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xt(),t.sibling=null,s=hn.current,Q(hn,u?s&1|2:s&1),Tt&&da(i,o.treeForkCount),t):(en(i),null);case 22:case 23:return ui(i),Yf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&bc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&k(Fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(vn),en(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function w1(t,i){switch(Lf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(vn),we(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ce(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return k(hn),null;case 4:return we(),null;case 10:return pa(i.type),null;case 22:case 23:return ui(i),Yf(),t!==null&&k(Fr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function K0(t,i){switch(Lf(i),i.tag){case 3:pa(vn),we();break;case 26:case 27:case 5:Ce(i);break;case 4:we();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:k(hn);break;case 10:pa(i.type);break;case 22:case 23:ui(i),Yf(),t!==null&&k(Fr);break;case 24:pa(vn)}}function Qo(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==u)}}catch(R){Vt(i,i.return,R)}}function tr(t,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=i;var H=s,ie=R;try{ie()}catch(xe){Vt(u,H,xe)}}}o=o.next}while(o!==d)}}catch(xe){Vt(i,i.return,xe)}}function Q0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Gg(i,s)}catch(o){Vt(t,t.return,o)}}}function J0(t,i,s){s.props=kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Vt(t,i,o)}}function Jo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Vt(t,i,u)}}function Zi(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Vt(t,i,u)}else s.current=null}function $0(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Vt(t,t.return,u)}}function Td(t,i,s){try{var o=t.stateNode;Q1(o,t.type,s,i),o[Dn]=i}catch(u){Vt(t,t.return,u)}}function ev(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Rd(t,i,s),t=t.sibling;t!==null;)Rd(t,i,s),t=t.sibling}function Mc(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mc(t,i,s),t=t.sibling;t!==null;)Mc(t,i,s),t=t.sibling}function tv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);On(i,o,s),i[mn]=t,i[Dn]=s}catch(d){Vt(t,t.return,d)}}var xa=!1,yn=!1,Cd=!1,nv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function D1(t,i){if(t=t.containerInfo,Zd=Xc,t=pg(t),Sf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,R=-1,H=-1,ie=0,xe=0,Me=t,ue=null;t:for(;;){for(var de;Me!==s||u!==0&&Me.nodeType!==3||(R=x+u),Me!==d||o!==0&&Me.nodeType!==3||(H=x+o),Me.nodeType===3&&(x+=Me.nodeValue.length),(de=Me.firstChild)!==null;)ue=Me,Me=de;for(;;){if(Me===t)break t;if(ue===s&&++ie===u&&(R=x),ue===d&&++xe===o&&(H=x),(de=Me.nextSibling)!==null)break;Me=ue,ue=Me.parentNode}Me=de}s=R===-1||H===-1?null:{start:R,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kd={focusedElem:t,selectionRange:s},Xc=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Ze=kr(s.type,u);t=o.getSnapshotBeforeUpdate(Ze,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(st){Vt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)$d(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$d(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function iv(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),o&4&&Qo(5,s);break;case 1:if(Sa(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(x){Vt(s,s.return,x)}else{var u=kr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Vt(s,s.return,x)}}o&64&&Q0(s),o&512&&Jo(s,s.return);break;case 3:if(Sa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Gg(t,i)}catch(x){Vt(s,s.return,x)}}break;case 27:i===null&&o&4&&tv(s);case 26:case 5:Sa(t,s),i===null&&o&4&&$0(s),o&512&&Jo(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),o&4&&sv(t,s);break;case 13:Sa(t,s),o&4&&ov(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=B1.bind(null,s),rM(t,s))));break;case 22:if(o=s.memoizedState!==null||xa,!o){i=i!==null&&i.memoizedState!==null||yn,u=xa;var d=yn;xa=o,(yn=i)&&!d?ba(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=u,yn=d}break;case 30:break;default:Sa(t,s)}}function av(t){var i=t.alternate;i!==null&&(t.alternate=null,av(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Va(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Zn=!1;function ya(t,i,s){for(s=s.child;s!==null;)rv(t,i,s),s=s.sibling}function rv(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:yn||Zi(s,i),ya(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Zi(s,i);var o=on,u=Zn;lr(s.type)&&(on=s.stateNode,Zn=!1),ya(t,i,s),ol(s.stateNode),on=o,Zn=u;break;case 5:yn||Zi(s,i);case 6:if(o=on,u=Zn,on=null,ya(t,i,s),on=o,Zn=u,on!==null)if(Zn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){Vt(s,i,d)}else try{on.removeChild(s.stateNode)}catch(d){Vt(s,i,d)}break;case 18:on!==null&&(Zn?(t=on,Qv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xs(t)):Qv(on,s.stateNode));break;case 4:o=on,u=Zn,on=s.stateNode.containerInfo,Zn=!0,ya(t,i,s),on=o,Zn=u;break;case 0:case 11:case 14:case 15:tr(2,s,i),yn||tr(4,s,i),ya(t,i,s);break;case 1:yn||(Zi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&J0(s,i,o)),ya(t,i,s);break;case 21:ya(t,i,s);break;case 22:yn=(o=yn)||s.memoizedState!==null,ya(t,i,s),yn=o;break;default:ya(t,i,s)}}function sv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(s){Vt(i,i.return,s)}}}function ov(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(s){Vt(i,i.return,s)}}function N1(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new nv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new nv),i;default:throw Error(a(435,t.tag))}}function Ec(t,i){var s=N1(t);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=H1.bind(null,t,o);o.then(u,u)}})}function Kn(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,x=i,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(lr(R.type)){on=R.stateNode,Zn=!1;break e}break;case 5:on=R.stateNode,Zn=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,Zn=!0;break e}R=R.return}if(on===null)throw Error(a(160));rv(d,x,u),on=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)lv(i,t),i=i.sibling}var Oi=null;function lv(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(i,t),Qn(t),o&4&&(tr(3,t,t.return),Qo(3,t),tr(5,t,t.return));break;case 1:Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Oi;if(Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ga]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,s),d[mn]=t,gn(d),o=d;break e;case"link":var x=l_("link","href",u).get(o+(s.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(R,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;case"meta":if(x=l_("meta","content",u).get(o+(s.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(R,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else c_(u,t.type,t.stateNode);else t.stateNode=o_(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?c_(u,t.type,t.stateNode):o_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Td(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),s!==null&&o&4&&Td(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(Ze){Vt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Td(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Cd=!0);break;case 6:if(Kn(i,t),Qn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(Ze){Vt(t,t.return,Ze)}}break;case 3:if(Hc=null,u=Oi,Oi=Fc(i.containerInfo),Kn(i,t),Oi=u,Qn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Xs(i.containerInfo)}catch(Ze){Vt(t,t.return,Ze)}Cd&&(Cd=!1,cv(t));break;case 4:o=Oi,Oi=Fc(t.stateNode.containerInfo),Kn(i,t),Qn(t),Oi=o;break;case 12:Kn(i,t),Qn(t);break;case 31:Kn(i,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 13:Kn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=Xt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 22:u=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ie=xa,xe=yn;if(xa=ie||u,yn=xe||H,Kn(i,t),yn=xe,xa=ie,Qn(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||H||xa||yn||Xr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=H.stateNode;var Me=H.memoizedProps.style,ue=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Ze){Vt(H,H.return,Ze)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ze){Vt(H,H.return,Ze)}}}else if(i.tag===18){if(s===null){H=i;try{var de=H.stateNode;u?Jv(de,!0):Jv(H.stateNode,!1)}catch(Ze){Vt(H,H.return,Ze)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Ec(t,s))));break;case 19:Kn(i,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 30:break;case 21:break;default:Kn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if(ev(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=Ad(t);Mc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(si(x,""),s.flags&=-33);var R=Ad(t);Mc(t,R,x);break;case 3:case 4:var H=s.stateNode.containerInfo,ie=Ad(t);Rd(t,ie,H);break;default:throw Error(a(161))}}catch(xe){Vt(t,t.return,xe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function cv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;cv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)iv(t,i.alternate,i),i=i.sibling}function Xr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:tr(4,i,i.return),Xr(i);break;case 1:Zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&J0(i,i.return,s),Xr(i);break;case 27:ol(i.stateNode);case 26:case 5:Zi(i,i.return),Xr(i);break;case 22:i.memoizedState===null&&Xr(i);break;case 30:Xr(i);break;default:Xr(i)}t=t.sibling}}function ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:ba(u,d,s),Qo(4,d);break;case 1:if(ba(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Vt(o,o.return,ie)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Hg(H[u],R)}catch(ie){Vt(o,o.return,ie)}}s&&x&64&&Q0(d),Jo(d,d.return);break;case 27:tv(d);case 26:case 5:ba(u,d,s),s&&o===null&&x&4&&$0(d),Jo(d,d.return);break;case 12:ba(u,d,s);break;case 31:ba(u,d,s),s&&x&4&&sv(u,d);break;case 13:ba(u,d,s),s&&x&4&&ov(u,d);break;case 22:d.memoizedState===null&&ba(u,d,s),Jo(d,d.return);break;case 30:break;default:ba(u,d,s)}i=i.sibling}}function wd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Fo(s))}function Dd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t))}function Pi(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)uv(t,i,s,o),i=i.sibling}function uv(t,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,o),u&2048&&Qo(9,i);break;case 1:Pi(t,i,s,o);break;case 3:Pi(t,i,s,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t)));break;case 12:if(u&2048){Pi(t,i,s,o),t=i.stateNode;try{var d=i.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Vt(i,i.return,H)}}else Pi(t,i,s,o);break;case 31:Pi(t,i,s,o);break;case 13:Pi(t,i,s,o);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?Pi(t,i,s,o):$o(t,i):d._visibility&2?Pi(t,i,s,o):(d._visibility|=2,Us(t,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&wd(x,i);break;case 24:Pi(t,i,s,o),u&2048&&Dd(i.alternate,i);break;default:Pi(t,i,s,o)}}function Us(t,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,x=i,R=s,H=o,ie=x.flags;switch(x.tag){case 0:case 11:case 15:Us(d,x,R,H,u),Qo(8,x);break;case 23:break;case 22:var xe=x.stateNode;x.memoizedState!==null?xe._visibility&2?Us(d,x,R,H,u):$o(d,x):(xe._visibility|=2,Us(d,x,R,H,u)),u&&ie&2048&&wd(x.alternate,x);break;case 24:Us(d,x,R,H,u),u&&ie&2048&&Dd(x.alternate,x);break;default:Us(d,x,R,H,u)}i=i.sibling}}function $o(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,u=o.flags;switch(o.tag){case 22:$o(s,o),u&2048&&wd(o.alternate,o);break;case 24:$o(s,o),u&2048&&Dd(o.alternate,o);break;default:$o(s,o)}i=i.sibling}}var el=8192;function Os(t,i,s){if(t.subtreeFlags&el)for(t=t.child;t!==null;)fv(t,i,s),t=t.sibling}function fv(t,i,s){switch(t.tag){case 26:Os(t,i,s),t.flags&el&&t.memoizedState!==null&&vM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Os(t,i,s);break;case 3:case 4:var o=Oi;Oi=Fc(t.stateNode.containerInfo),Os(t,i,s),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=el,el=16777216,Os(t,i,s),el=o):Os(t,i,s));break;default:Os(t,i,s)}}function dv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function tl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,pv(o,t)}dv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hv(t),t=t.sibling}function hv(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&tr(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Tc(t)):tl(t);break;default:tl(t)}}function Tc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,pv(o,t)}dv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:tr(8,i,i.return),Tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(i));break;default:Tc(i)}t=t.sibling}}function pv(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:tr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Rn=o;else e:for(s=t;Rn!==null;){o=Rn;var u=o.sibling,d=o.return;if(av(o),o===s){Rn=null;break e}if(u!==null){u.return=d,Rn=u;break e}Rn=d}}}var L1={getCacheForType:function(t){var i=Ln(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},U1=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Kt=null,yt=null,bt=0,Gt=0,fi=null,nr=!1,Ps=!1,Nd=!1,Ma=0,un=0,ir=0,Wr=0,Ld=0,di=0,Is=0,nl=null,Jn=null,Ud=!1,Ac=0,mv=0,Rc=1/0,Cc=null,ar=null,En=0,rr=null,zs=null,Ea=0,Od=0,Pd=null,gv=null,il=0,Id=null;function hi(){return(Ot&2)!==0&&bt!==0?bt&-bt:U.T!==null?Vd():Ao()}function vv(){if(di===0)if((bt&536870912)===0||Tt){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function $n(t,i,s){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),sr(t,bt,di,!1)),qe(t,s),((Ot&2)===0||t!==Kt)&&(t===Kt&&((Ot&2)===0&&(Wr|=s),un===4&&sr(t,bt,di,!1)),Ki(t))}function _v(t,i,s){if((Ot&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Oe(t,i),u=o?I1(t,i):Fd(t,i,!0),d=o;do{if(u===0){Ps&&!o&&sr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!O1(s)){u=Fd(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var R=t;u=nl;var H=R.current.memoizedState.isDehydrated;if(H&&(Fs(R,x).flags|=256),x=Fd(R,x,!1),x!==2){if(Nd&&!H){R.errorRecoveryDisabledLanes|=d,Wr|=d,u=4;break e}d=Jn,Jn=u,d!==null&&(Jn===null?Jn=d:Jn.push.apply(Jn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Fs(t,0),sr(t,i,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:sr(o,i,di,!nr);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=Ac+300-Xt(),10<u)){if(sr(o,i,di,!nr),ye(o,0,!0)!==0)break e;Ea=i,o.timeoutHandle=Zv(xv.bind(null,o,s,Jn,Cc,Ud,i,di,Wr,Is,nr,d,"Throttled",-0,0),u);break e}xv(o,s,Jn,Cc,Ud,i,di,Wr,Is,nr,d,null,-0,0)}}break}while(!0);Ki(t)}function xv(t,i,s,o,u,d,x,R,H,ie,xe,Me,ue,de){if(t.timeoutHandle=-1,Me=i.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},fv(i,d,Me);var Ze=(d&62914560)===d?Ac-Xt():(d&4194048)===d?mv-Xt():0;if(Ze=_M(Me,Ze),Ze!==null){Ea=d,t.cancelPendingCommit=Ze(Rv.bind(null,t,i,d,s,o,u,x,R,H,xe,Me,null,ue,de)),sr(t,d,x,!ie);return}}Rv(t,i,d,s,o,u,x,R,H)}function O1(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!oi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i,s,o){i&=~Ld,i&=~Wr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var d=31-Ve(u),x=1<<d;o[d]=-1,u&=~x}s!==0&&zt(t,s,i)}function wc(){return(Ot&6)===0?(al(0),!1):!0}function zd(){if(yt!==null){if(Gt===0)var t=yt.return;else t=yt,ha=Ir=null,$f(t),Cs=null,Ho=0,t=yt;for(;t!==null;)K0(t.alternate,t),t=t.return;yt=null}}function Fs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,eM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,zd(),Kt=t,yt=s=fa(t.current,null),bt=i,Gt=0,fi=null,nr=!1,Ps=Oe(t,i),Nd=!1,Is=di=Ld=Wr=ir=un=0,Jn=nl=null,Ud=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Ve(o),d=1<<u;i|=t[u],o&=~d}return Ma=i,Kl(),s}function yv(t,i){pt=null,U.H=jo,i===Rs||i===ac?(i=Ig(),Gt=3):i===Gf?(i=Ig(),Gt=4):Gt=i===md?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,yt===null&&(un=1,_c(t,xi(i,t.current)))}function Sv(){var t=ci.current;return t===null?!0:(bt&4194048)===bt?Mi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Mi:!1}function bv(){var t=U.H;return U.H=jo,t===null?jo:t}function Mv(){var t=U.A;return U.A=L1,t}function Dc(){un=4,nr||(bt&4194048)!==bt&&ci.current!==null||(Ps=!0),(ir&134217727)===0&&(Wr&134217727)===0||Kt===null||sr(Kt,bt,di,!1)}function Fd(t,i,s){var o=Ot;Ot|=2;var u=bv(),d=Mv();(Kt!==t||bt!==i)&&(Cc=null,Fs(t,i)),i=!1;var x=un;e:do try{if(Gt!==0&&yt!==null){var R=yt,H=fi;switch(Gt){case 8:zd(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var ie=Gt;if(Gt=0,fi=null,Bs(t,R,H,ie),s&&Ps){x=0;break e}break;default:ie=Gt,Gt=0,fi=null,Bs(t,R,H,ie)}}P1(),x=un;break}catch(xe){yv(t,xe)}while(!0);return i&&t.shellSuspendCounter++,ha=Ir=null,Ot=o,U.H=u,U.A=d,yt===null&&(Kt=null,bt=0,Kl()),x}function P1(){for(;yt!==null;)Ev(yt)}function I1(t,i){var s=Ot;Ot|=2;var o=bv(),u=Mv();Kt!==t||bt!==i?(Cc=null,Rc=Xt()+500,Fs(t,i)):Ps=Oe(t,i);e:do try{if(Gt!==0&&yt!==null){i=yt;var d=fi;t:switch(Gt){case 1:Gt=0,fi=null,Bs(t,i,d,1);break;case 2:case 9:if(Og(d)){Gt=0,fi=null,Tv(i);break}i=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Ki(t)},d.then(i,i);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Og(d)?(Gt=0,fi=null,Tv(i)):(Gt=0,fi=null,Bs(t,i,d,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var R=yt;if(x?u_(x):R.stateNode.complete){Gt=0,fi=null;var H=R.sibling;if(H!==null)yt=H;else{var ie=R.return;ie!==null?(yt=ie,Nc(ie)):yt=null}break t}}Gt=0,fi=null,Bs(t,i,d,5);break;case 6:Gt=0,fi=null,Bs(t,i,d,6);break;case 8:zd(),un=6;break e;default:throw Error(a(462))}}z1();break}catch(xe){yv(t,xe)}while(!0);return ha=Ir=null,U.H=o,U.A=u,Ot=s,yt!==null?0:(Kt=null,bt=0,Kl(),un)}function z1(){for(;yt!==null&&!ln();)Ev(yt)}function Ev(t){var i=j0(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,i===null?Nc(t):yt=i}function Tv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=V0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=V0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:$f(i);default:K0(s,i),i=yt=Mg(i,Ma),i=j0(s,i,Ma)}t.memoizedProps=t.pendingProps,i===null?Nc(t):yt=i}function Bs(t,i,s,o){ha=Ir=null,$f(i),Cs=null,Ho=0;var u=i.return;try{if(T1(t,u,i,s,bt)){un=1,_c(t,xi(s,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;un=1,_c(t,xi(s,t.current)),yt=null;return}i.flags&32768?(Tt||o===1?t=!0:Ps||(bt&536870912)!==0?t=!1:(nr=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),Av(i,t)):Nc(i)}function Nc(t){var i=t;do{if((i.flags&32768)!==0){Av(i,nr);return}t=i.return;var s=C1(i.alternate,i,Ma);if(s!==null){yt=s;return}if(i=i.sibling,i!==null){yt=i;return}yt=i=t}while(i!==null);un===0&&(un=5)}function Av(t,i){do{var s=w1(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);un=6,yt=null}function Rv(t,i,s,o,u,d,x,R,H){t.cancelPendingCommit=null;do Lc();while(En!==0);if((Ot&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Af,an(t,s,d,x,R,H),t===Kt&&(yt=Kt=null,bt=0),zs=i,rr=t,Ea=s,Od=d,Pd=u,gv=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,G1(te,function(){return Lv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=G.p,G.p=2,x=Ot,Ot|=4;try{D1(t,i,s)}finally{Ot=x,G.p=u,U.T=o}}En=1,Cv(),wv(),Dv()}}function Cv(){if(En===1){En=0;var t=rr,i=zs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=U.T,U.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{lv(i,t);var d=Kd,x=pg(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&hg(R.ownerDocument.documentElement,R)){if(H!==null&&Sf(R)){var ie=H.start,xe=H.end;if(xe===void 0&&(xe=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(xe,R.value.length);else{var Me=R.ownerDocument||document,ue=Me&&Me.defaultView||window;if(ue.getSelection){var de=ue.getSelection(),Ze=R.textContent.length,st=Math.min(H.start,Ze),Yt=H.end===void 0?st:Math.min(H.end,Ze);!de.extend&&st>Yt&&(x=Yt,Yt=st,st=x);var J=dg(R,st),X=dg(R,Yt);if(J&&X&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==X.node||de.focusOffset!==X.offset)){var ne=Me.createRange();ne.setStart(J.node,J.offset),de.removeAllRanges(),st>Yt?(de.addRange(ne),de.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),de.addRange(ne))}}}}for(Me=[],de=R;de=de.parentNode;)de.nodeType===1&&Me.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Xc=!!Zd,Kd=Zd=null}finally{Ot=u,G.p=o,U.T=s}}t.current=i,En=2}}function wv(){if(En===2){En=0;var t=rr,i=zs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=U.T,U.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{iv(t,i.alternate,i)}finally{Ot=u,G.p=o,U.T=s}}En=3}}function Dv(){if(En===4||En===3){En=0,Z();var t=rr,i=zs,s=Ea,o=gv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,zs=rr=null,Nv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ar=null),To(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ge,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=U.T,u=G.p,G.p=2,U.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{U.T=i,G.p=u}}(Ea&3)!==0&&Lc(),Ki(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Id?il++:(il=0,Id=t):il=0,al(0)}}function Nv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Fo(i)))}function Lc(){return Cv(),wv(),Dv(),Lv()}function Lv(){if(En!==5)return!1;var t=rr,i=Od;Od=0;var s=To(Ea),o=U.T,u=G.p;try{G.p=32>s?32:s,U.T=null,s=Pd,Pd=null;var d=rr,x=Ea;if(En=0,zs=rr=null,Ea=0,(Ot&6)!==0)throw Error(a(331));var R=Ot;if(Ot|=4,hv(d.current),uv(d,d.current,x,s),Ot=R,al(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ge,d)}catch{}return!0}finally{G.p=u,U.T=o,Nv(t,i)}}function Uv(t,i,s){i=xi(s,i),i=pd(t.stateNode,i,2),t=Ja(t,i,2),t!==null&&(qe(t,2),Ki(t))}function Vt(t,i,s){if(t.tag===3)Uv(t,t,s);else for(;i!==null;){if(i.tag===3){Uv(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){t=xi(s,t),s=O0(2),o=Ja(i,s,2),o!==null&&(P0(s,o,i,t),qe(o,2),Ki(o));break}}i=i.return}}function Bd(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new U1;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Nd=!0,u.add(s),t=F1.bind(null,t,i,s),i.then(t,t))}function F1(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(bt&s)===s&&(un===4||un===3&&(bt&62914560)===bt&&300>Xt()-Ac?(Ot&2)===0&&Fs(t,0):Ld|=s,Is===bt&&(Is=0)),Ki(t)}function Ov(t,i){i===0&&(i=Re()),t=Ur(t,i),t!==null&&(qe(t,i),Ki(t))}function B1(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Ov(t,s)}function H1(t,i){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Ov(t,s)}function G1(t,i){return nn(t,i)}var Uc=null,Hs=null,Hd=!1,Oc=!1,Gd=!1,or=0;function Ki(t){t!==Hs&&t.next===null&&(Hs===null?Uc=Hs=t:Hs=Hs.next=t),Oc=!0,Hd||(Hd=!0,k1())}function al(t,i){if(!Gd&&Oc){Gd=!0;do for(var s=!1,o=Uc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ve(42|t)+1)-1,d&=u&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Fv(o,d))}else d=bt,d=ye(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Oe(o,d)||(s=!0,Fv(o,d));o=o.next}while(s);Gd=!1}}function V1(){Pv()}function Pv(){Oc=Hd=!1;var t=0;or!==0&&$1()&&(t=or);for(var i=Xt(),s=null,o=Uc;o!==null;){var u=o.next,d=Iv(o,i);d===0?(o.next=null,s===null?Uc=u:s.next=u,u===null&&(Hs=s)):(s=o,(t!==0||(d&3)!==0)&&(Oc=!0)),o=u}En!==0&&En!==5||al(t),or!==0&&(or=0)}function Iv(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ve(d),R=1<<x,H=u[x];H===-1?((R&s)===0||(R&o)!==0)&&(u[x]=Ge(R,i)):H<=i&&(t.expiredLanes|=R),d&=~R}if(i=Kt,s=bt,s=ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Oe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&Qt(o),To(s)){case 2:case 8:s=M;break;case 32:s=te;break;case 268435456:s=ve;break;default:s=te}return o=zv.bind(null,t),s=nn(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&Qt(o),t.callbackPriority=2,t.callbackNode=null,2}function zv(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Lc()&&t.callbackNode!==s)return null;var o=bt;return o=ye(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(_v(t,o,i),Iv(t,Xt()),t.callbackNode!=null&&t.callbackNode===s?zv.bind(null,t):null)}function Fv(t,i){if(Lc())return null;_v(t,i,!0)}function k1(){tM(function(){(Ot&6)!==0?nn(P,V1):Pv()})}function Vd(){if(or===0){var t=Ts;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),or=t}return or}function Bv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function Hv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function X1(t,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=Bv((u[Dn]||null).action),x=o.submitter;x&&(i=(i=x[Dn]||null)?Bv(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var R=new ql("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var H=x?Hv(u,x):new FormData(u);ld(s,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=x?Hv(u,x):new FormData(u),ld(s,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var kd=0;kd<Tf.length;kd++){var Xd=Tf[kd],W1=Xd.toLowerCase(),q1=Xd[0].toUpperCase()+Xd.slice(1);Ui(W1,"on"+q1)}Ui(vg,"onAnimationEnd"),Ui(_g,"onAnimationIteration"),Ui(xg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(l1,"onTransitionRun"),Ui(c1,"onTransitionStart"),Ui(u1,"onTransitionCancel"),Ui(yg,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Gv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var x=o.length-1;0<=x;x--){var R=o[x],H=R.instance,ie=R.currentTarget;if(R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ie;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(R=o[x],H=R.instance,ie=R.currentTarget,R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ie;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}}}}function St(t,i){var s=i[Ar];s===void 0&&(s=i[Ar]=new Set);var o=t+"__bubble";s.has(o)||(Vv(i,t,2,!1),s.add(o))}function Wd(t,i,s){var o=0;i&&(o|=4),Vv(s,t,o,i)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function qd(t){if(!t[Pc]){t[Pc]=!0,Vl.forEach(function(s){s!=="selectionchange"&&(Y1.has(s)||Wd(s,!1,t),Wd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Pc]||(i[Pc]=!0,Wd("selectionchange",!1,i))}}function Vv(t,i,s,o){switch(v_(i)){case 2:var u=SM;break;case 8:u=bM;break;default:u=oh}s=u.bind(null,i,s,t),u=void 0,!df||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function Yd(t,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=oa(R),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}R=R.parentNode}}o=o.return}Ym(function(){var ie=d,xe=uf(s),Me=[];e:{var ue=Sg.get(t);if(ue!==void 0){var de=ql,Ze=t;switch(t){case"keypress":if(Xl(s)===0)break e;case"keydown":case"keyup":de=Hb;break;case"focusin":Ze="focus",de=gf;break;case"focusout":Ze="blur",de=gf;break;case"beforeblur":case"afterblur":de=gf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Cb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=kb;break;case vg:case _g:case xg:de=Nb;break;case yg:de=Wb;break;case"scroll":case"scrollend":de=Ab;break;case"wheel":de=Yb;break;case"copy":case"cut":case"paste":de=Ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Jm;break;case"toggle":case"beforetoggle":de=Zb}var st=(i&4)!==0,Yt=!st&&(t==="scroll"||t==="scrollend"),J=st?ue!==null?ue+"Capture":null:ue;st=[];for(var X=ie,ne;X!==null;){var Se=X;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||J===null||(Se=Ro(X,J),Se!=null&&st.push(sl(X,Se,ne))),Yt)break;X=X.return}0<st.length&&(ue=new de(ue,Ze,null,s,xe),Me.push({event:ue,listeners:st}))}}if((i&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ue&&s!==cf&&(Ze=s.relatedTarget||s.fromElement)&&(oa(Ze)||Ze[Yn]))break e;if((de||ue)&&(ue=xe.window===xe?xe:(ue=xe.ownerDocument)?ue.defaultView||ue.parentWindow:window,de?(Ze=s.relatedTarget||s.toElement,de=ie,Ze=Ze?oa(Ze):null,Ze!==null&&(Yt=c(Ze),st=Ze.tag,Ze!==Yt||st!==5&&st!==27&&st!==6)&&(Ze=null)):(de=null,Ze=ie),de!==Ze)){if(st=Km,Se="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=Jm,Se="onPointerLeave",J="onPointerEnter",X="pointer"),Yt=de==null?ue:Cr(de),ne=Ze==null?ue:Cr(Ze),ue=new st(Se,X+"leave",de,s,xe),ue.target=Yt,ue.relatedTarget=ne,Se=null,oa(xe)===ie&&(st=new st(J,X+"enter",Ze,s,xe),st.target=ne,st.relatedTarget=Yt,Se=st),Yt=Se,de&&Ze)t:{for(st=j1,J=de,X=Ze,ne=0,Se=J;Se;Se=st(Se))ne++;Se=0;for(var it=X;it;it=st(it))Se++;for(;0<ne-Se;)J=st(J),ne--;for(;0<Se-ne;)X=st(X),Se--;for(;ne--;){if(J===X||X!==null&&J===X.alternate){st=J;break t}J=st(J),X=st(X)}st=null}else st=null;de!==null&&kv(Me,ue,de,st,!1),Ze!==null&&Yt!==null&&kv(Me,Yt,Ze,st,!0)}}e:{if(ue=ie?Cr(ie):window,de=ue.nodeName&&ue.nodeName.toLowerCase(),de==="select"||de==="input"&&ue.type==="file")var Nt=sg;else if(ag(ue))if(og)Nt=r1;else{Nt=i1;var Qe=n1}else de=ue.nodeName,!de||de.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?ie&&It(ie.elementType)&&(Nt=sg):Nt=a1;if(Nt&&(Nt=Nt(t,ie))){rg(Me,Nt,s,xe);break e}Qe&&Qe(t,ue,ie),t==="focusout"&&ie&&ue.type==="number"&&ie.memoizedProps.value!=null&&xt(ue,"number",ue.value)}switch(Qe=ie?Cr(ie):window,t){case"focusin":(ag(Qe)||Qe.contentEditable==="true")&&(vs=Qe,bf=ie,Po=null);break;case"focusout":Po=bf=vs=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,mg(Me,s,xe);break;case"selectionchange":if(o1)break;case"keydown":case"keyup":mg(Me,s,xe)}var vt;if(_f)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else gs?ng(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&($m&&s.locale!=="ko"&&(gs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&gs&&(vt=jm()):(Wa=xe,hf="value"in Wa?Wa.value:Wa.textContent,gs=!0)),Qe=Ic(ie,Mt),0<Qe.length&&(Mt=new Qm(Mt,t,null,s,xe),Me.push({event:Mt,listeners:Qe}),vt?Mt.data=vt:(vt=ig(s),vt!==null&&(Mt.data=vt)))),(vt=Qb?Jb(t,s):$b(t,s))&&(Mt=Ic(ie,"onBeforeInput"),0<Mt.length&&(Qe=new Qm("onBeforeInput","beforeinput",null,s,xe),Me.push({event:Qe,listeners:Mt}),Qe.data=vt)),X1(Me,t,ie,s,xe)}Gv(Me,i)})}function sl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ic(t,i){for(var s=i+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ro(t,s),u!=null&&o.unshift(sl(t,u,d)),u=Ro(t,i),u!=null&&o.push(sl(t,u,d))),t.tag===3)return o;t=t.return}return[]}function j1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function kv(t,i,s,o,u){for(var d=i._reactName,x=[];s!==null&&s!==o;){var R=s,H=R.alternate,ie=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ie===null||(H=ie,u?(ie=Ro(s,d),ie!=null&&x.unshift(sl(s,ie,H))):u||(ie=Ro(s,d),ie!=null&&x.push(sl(s,ie,H)))),s=s.return}x.length!==0&&t.push({event:i,listeners:x})}var Z1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function Xv(t){return(typeof t=="string"?t:""+t).replace(Z1,`
`).replace(K1,"")}function Wv(t,i){return i=Xv(i),Xv(t)===i}function qt(t,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&si(t,""+o);break;case"className":je(t,"class",o);break;case"tabIndex":je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,s,o);break;case"style":Li(t,o,d);break;case"data":if(i!=="object"){je(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&qt(t,i,"name",u.name,u,null),qt(t,i,"formEncType",u.formEncType,u,null),qt(t,i,"formMethod",u.formMethod,u,null),qt(t,i,"formTarget",u.formTarget,u,null)):(qt(t,i,"encType",u.encType,u,null),qt(t,i,"method",u.method,u,null),qt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=ca);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=wr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":St("beforetoggle",t),St("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,ze(t,s,o))}}function jd(t,i,s,o,u,d){switch(s){case"style":Li(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):ze(t,s,o)}}}function On(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,d,x,s,null)}}u&&qt(t,i,"srcSet",s.srcSet,s,null),o&&qt(t,i,"src",s.src,s,null);return;case"input":St("invalid",t);var R=d=x=u=null,H=null,ie=null;for(o in s)if(s.hasOwnProperty(o)){var xe=s[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":x=xe;break;case"checked":H=xe;break;case"defaultChecked":ie=xe;break;case"value":d=xe;break;case"defaultValue":R=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,i));break;default:qt(t,i,o,xe,s,null)}}Fn(t,d,R,H,ie,x,u,!1);return;case"select":St("invalid",t),o=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:qt(t,i,u,R,s,null)}i=d,s=x,t.multiple=!!o,i!=null?Mn(t,!!o,i,!1):s!=null&&Mn(t,!!o,s,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(R=s[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:qt(t,i,x,R,s,null)}Ni(t,o,u,d);return;case"option":for(H in s)s.hasOwnProperty(H)&&(o=s[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,i,H,o,s,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<rl.length;o++)St(rl[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in s)if(s.hasOwnProperty(ie)&&(o=s[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,ie,o,s,null)}return;default:if(It(i)){for(xe in s)s.hasOwnProperty(xe)&&(o=s[xe],o!==void 0&&jd(t,i,xe,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&qt(t,i,R,o,s,null))}function Q1(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,R=null,H=null,ie=null,xe=null;for(de in s){var Me=s[de];if(s.hasOwnProperty(de)&&Me!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":H=Me;default:o.hasOwnProperty(de)||qt(t,i,de,null,o,Me)}}for(var ue in o){var de=o[ue];if(Me=s[ue],o.hasOwnProperty(ue)&&(de!=null||Me!=null))switch(ue){case"type":d=de;break;case"name":u=de;break;case"checked":ie=de;break;case"defaultChecked":xe=de;break;case"value":x=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:de!==Me&&qt(t,i,ue,de,o,Me)}}ke(t,x,R,H,ie,xe,d,u);return;case"select":de=x=R=ue=null;for(d in s)if(H=s[d],s.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":de=H;default:o.hasOwnProperty(d)||qt(t,i,d,null,o,H)}for(u in o)if(d=o[u],H=s[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ue=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==H&&qt(t,i,u,d,o,H)}i=R,s=x,o=de,ue!=null?Mn(t,!!s,ue,!1):!!o!=!!s&&(i!=null?Mn(t,!!s,i,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":de=ue=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(t,i,R,null,o,u)}for(x in o)if(u=o[x],d=s[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ue=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&qt(t,i,x,u,o,d)}ri(t,ue,de);return;case"option":for(var Ze in s)ue=s[Ze],s.hasOwnProperty(Ze)&&ue!=null&&!o.hasOwnProperty(Ze)&&(Ze==="selected"?t.selected=!1:qt(t,i,Ze,null,o,ue));for(H in o)ue=o[H],de=s[H],o.hasOwnProperty(H)&&ue!==de&&(ue!=null||de!=null)&&(H==="selected"?t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol":qt(t,i,H,ue,o,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)ue=s[st],s.hasOwnProperty(st)&&ue!=null&&!o.hasOwnProperty(st)&&qt(t,i,st,null,o,ue);for(ie in o)if(ue=o[ie],de=s[ie],o.hasOwnProperty(ie)&&ue!==de&&(ue!=null||de!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:qt(t,i,ie,ue,o,de)}return;default:if(It(i)){for(var Yt in s)ue=s[Yt],s.hasOwnProperty(Yt)&&ue!==void 0&&!o.hasOwnProperty(Yt)&&jd(t,i,Yt,void 0,o,ue);for(xe in o)ue=o[xe],de=s[xe],!o.hasOwnProperty(xe)||ue===de||ue===void 0&&de===void 0||jd(t,i,xe,ue,o,de);return}}for(var J in s)ue=s[J],s.hasOwnProperty(J)&&ue!=null&&!o.hasOwnProperty(J)&&qt(t,i,J,null,o,ue);for(Me in o)ue=o[Me],de=s[Me],!o.hasOwnProperty(Me)||ue===de||ue==null&&de==null||qt(t,i,Me,ue,o,de)}function qv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,x=u.initiatorType,R=u.duration;if(d&&R&&qv(x)){for(x=0,R=u.responseEnd,o+=1;o<s.length;o++){var H=s[o],ie=H.startTime;if(ie>R)break;var xe=H.transferSize,Me=H.initiatorType;xe&&qv(Me)&&(H=H.responseEnd,x+=xe*(H<R?1:(R-ie)/(H-ie)))}if(--o,i+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zd=null,Kd=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function Yv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Qd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jd=null;function $1(){var t=window.event;return t&&t.type==="popstate"?t===Jd?!1:(Jd=t,!0):(Jd=null,!1)}var Zv=typeof setTimeout=="function"?setTimeout:void 0,eM=typeof clearTimeout=="function"?clearTimeout:void 0,Kv=typeof Promise=="function"?Promise:void 0,tM=typeof queueMicrotask=="function"?queueMicrotask:typeof Kv<"u"?function(t){return Kv.resolve(null).then(t).catch(nM)}:Zv;function nM(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function Qv(t,i){var s=i,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Xs(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")ol(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ol(s);for(var d=s.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[Ga]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&ol(t.ownerDocument.body);s=u}while(s);Xs(i)}function Jv(t,i){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function $d(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":$d(s),Va(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function iM(t,i,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ga])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function aM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function $v(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ei(t.nextSibling),t===null))return null;return t}function eh(t){return t.data==="$?"||t.data==="$~"}function th(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var nh=null;function e_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ei(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function t_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function n_(t,i,s){switch(i=zc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ol(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Va(t)}var Ti=new Map,i_=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=G.d;G.d={f:sM,r:oM,D:lM,C:cM,L:uM,m:fM,X:hM,S:dM,M:pM};function sM(){var t=Ta.f(),i=wc();return t||i}function oM(t){var i=la(t);i!==null&&i.tag===5&&i.type==="form"?y0(i):Ta.r(t)}var Gs=typeof document>"u"?null:document;function a_(t,i,s){var o=Gs;if(o&&typeof i=="string"&&i){var u=Bt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),i_.has(u)||(i_.add(u),t={rel:t,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),On(i,"link",t),gn(i),o.head.appendChild(i)))}}function lM(t){Ta.D(t),a_("dns-prefetch",t,null)}function cM(t,i){Ta.C(t,i),a_("preconnect",t,i)}function uM(t,i,s){Ta.L(t,i,s);var o=Gs;if(o&&t&&i){var u='link[rel="preload"][as="'+Bt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Bt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Bt(s.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var d=u;switch(i){case"style":d=Vs(t);break;case"script":d=ks(t)}Ti.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ti.set(d,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(ll(d))||i==="script"&&o.querySelector(cl(d))||(i=o.createElement("link"),On(i,"link",t),gn(i),o.head.appendChild(i)))}}function fM(t,i){Ta.m(t,i);var s=Gs;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ks(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},i),Ti.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(cl(d)))return}o=s.createElement("link"),On(o,"link",t),gn(o),s.head.appendChild(o)}}}function dM(t,i,s){Ta.S(t,i,s);var o=Gs;if(o&&t){var u=ka(o).hoistableStyles,d=Vs(t);i=i||"default";var x=u.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(ll(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ti.get(d))&&ih(t,s);var H=x=o.createElement("link");gn(H),On(H,"link",t),H._p=new Promise(function(ie,xe){H.onload=ie,H.onerror=xe}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Bc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(d,x)}}}function hM(t,i){Ta.X(t,i);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0},i),(i=Ti.get(u))&&ah(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function pM(t,i){Ta.M(t,i);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0,type:"module"},i),(i=Ti.get(u))&&ah(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function r_(t,i,s,o){var u=(u=K.current)?Fc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vs(s.href),s=ka(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vs(s.href);var d=ka(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(ll(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||mM(u,t,s,x.state))),i&&o===null)throw Error(a(528,""));return x}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ks(s),s=ka(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Vs(t){return'href="'+Bt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function s_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function mM(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),On(i,"link",s),gn(i),t.head.appendChild(i))}function ks(t){return'[src="'+Bt(t)+'"]'}function cl(t){return"script[async]"+t}function o_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(s.href)+'"]');if(o)return i.instance=o,gn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),On(o,"style",u),Bc(o,s.precedence,t),i.instance=o;case"stylesheet":u=Vs(s.href);var d=t.querySelector(ll(u));if(d)return i.state.loading|=4,i.instance=d,gn(d),d;o=s_(s),(u=Ti.get(u))&&ih(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),On(d,"link",o),i.state.loading|=4,Bc(d,s.precedence,t),i.instance=d;case"script":return d=ks(s.src),(u=t.querySelector(cl(d)))?(i.instance=u,gn(u),u):(o=s,(u=Ti.get(d))&&(o=v({},s),ah(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),On(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Bc(o,s.precedence,t));return i.instance}function Bc(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===i)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function ih(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ah(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Hc=null;function l_(t,i,s){if(Hc===null){var o=new Map,u=Hc=new Map;u.set(s,o)}else u=Hc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ga]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function c_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function gM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function u_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vM(t,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Vs(o.href),d=i.querySelector(ll(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Gc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=i.ownerDocument||i,o=s_(o),(u=Ti.get(u))&&ih(o,u),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),On(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Gc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var rh=0;function _M(t,i){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&rh===0&&(rh=62500*J1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>rh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function kc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,i.forEach(xM,t),Vc=null,Gc.call(t))}function xM(t,i){if(!(i.state.loading&4)){var s=Vc.get(t);if(s)var o=s.get(null);else{s=new Map,Vc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,u),s.set(x,u),this.count++,o=Gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var ul={$$typeof:F,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function yM(t,i,s,o,u,d,x,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function f_(t,i,s,o,u,d,x,R,H,ie,xe,Me){return t=new yM(t,i,s,x,H,ie,xe,Me,R),i=1,d===!0&&(i|=24),d=li(3,null,null,i),t.current=d,d.stateNode=t,i=Ff(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Vf(d),t}function d_(t){return t?(t=ys,t):ys}function h_(t,i,s,o,u,d){u=d_(u),o.context===null?o.context=u:o.pendingContext=u,o=Qa(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Ja(t,o,i),s!==null&&($n(s,t,i),Vo(s,t,i))}function p_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function sh(t,i){p_(t,i),(t=t.alternate)&&p_(t,i)}function m_(t){if(t.tag===13||t.tag===31){var i=Ur(t,67108864);i!==null&&$n(i,t,67108864),sh(t,67108864)}}function g_(t){if(t.tag===13||t.tag===31){var i=hi();i=Eo(i);var s=Ur(t,i);s!==null&&$n(s,t,i),sh(t,i)}}var Xc=!0;function SM(t,i,s,o){var u=U.T;U.T=null;var d=G.p;try{G.p=2,oh(t,i,s,o)}finally{G.p=d,U.T=u}}function bM(t,i,s,o){var u=U.T;U.T=null;var d=G.p;try{G.p=8,oh(t,i,s,o)}finally{G.p=d,U.T=u}}function oh(t,i,s,o){if(Xc){var u=lh(o);if(u===null)Yd(t,i,o,Wc,s),__(t,o);else if(EM(u,t,i,s,o))o.stopPropagation();else if(__(t,o),i&4&&-1<MM.indexOf(t)){for(;u!==null;){var d=la(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Le(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var H=1<<31-Ve(x);R.entanglements[1]|=H,x&=~H}Ki(d),(Ot&6)===0&&(Rc=Xt()+500,al(0))}}break;case 31:case 13:R=Ur(d,2),R!==null&&$n(R,d,2),wc(),sh(d,2)}if(d=lh(o),d===null&&Yd(t,i,o,Wc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Yd(t,i,o,null,s)}}function lh(t){return t=uf(t),ch(t)}var Wc=null;function ch(t){if(Wc=null,t=oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Wc=t,null}function v_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case P:return 2;case M:return 8;case te:case le:return 32;case ve:return 268435456;default:return 32}default:return 32}}var uh=!1,cr=null,ur=null,fr=null,fl=new Map,dl=new Map,dr=[],MM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(t,i){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function hl(t,i,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=la(i),i!==null&&m_(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function EM(t,i,s,o,u){switch(i){case"focusin":return cr=hl(cr,t,i,s,o,u),!0;case"dragenter":return ur=hl(ur,t,i,s,o,u),!0;case"mouseover":return fr=hl(fr,t,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return fl.set(d,hl(fl.get(d)||null,t,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,dl.set(d,hl(dl.get(d)||null,t,i,s,o,u)),!0}return!1}function x_(t){var i=oa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,hs(t.priority,function(){g_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,hs(t.priority,function(){g_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=lh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);cf=o,s.target.dispatchEvent(o),cf=null}else return i=la(s),i!==null&&m_(i),t.blockedOn=s,!1;i.shift()}return!0}function y_(t,i,s){qc(t)&&s.delete(i)}function TM(){uh=!1,cr!==null&&qc(cr)&&(cr=null),ur!==null&&qc(ur)&&(ur=null),fr!==null&&qc(fr)&&(fr=null),fl.forEach(y_),dl.forEach(y_)}function Yc(t,i){t.blockedOn===i&&(t.blockedOn=null,uh||(uh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,TM)))}var jc=null;function S_(t){jc!==t&&(jc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){jc===t&&(jc=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(ch(o||s)===null)continue;break}var d=la(s);d!==null&&(t.splice(i,3),i-=3,ld(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Xs(t){function i(H){return Yc(H,t)}cr!==null&&Yc(cr,t),ur!==null&&Yc(ur,t),fr!==null&&Yc(fr,t),fl.forEach(i),dl.forEach(i);for(var s=0;s<dr.length;s++){var o=dr[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<dr.length&&(s=dr[0],s.blockedOn===null);)x_(s),s.blockedOn===null&&dr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],x=u[Dn]||null;if(typeof d=="function")x||S_(s);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Dn]||null)R=x.formAction;else if(ch(u)!==null)continue}else R=x.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),S_(s)}}}function b_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function fh(t){this._internalRoot=t}Zc.prototype.render=fh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=hi();h_(s,o,t,i,null,null)},Zc.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;h_(t.current,2,null,t,null,null),wc(),i[Yn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ao();t={blockedOn:null,target:t,priority:i};for(var s=0;s<dr.length&&i!==0&&i<dr[s].priority;s++);dr.splice(s,0,t),s===0&&x_(t)}};var M_=e.version;if(M_!=="19.2.8")throw Error(a(527,M_,"19.2.8"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var AM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{ge=Kc.inject(AM),_e=Kc}catch{}}return ml.createRoot=function(t,i){if(!l(t))throw Error(a(299));var s=!1,o="",u=D0,d=N0,x=L0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=f_(t,1,!1,null,null,s,o,null,u,d,x,b_),t[Yn]=i.current,qd(t),new fh(i)},ml.hydrateRoot=function(t,i,s){if(!l(t))throw Error(a(299));var o=!1,u="",d=D0,x=N0,R=L0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=f_(t,1,!0,i,s??null,o,u,H,d,x,R,b_),i.context=d_(null),s=i.current,o=hi(),o=Eo(o),u=Qa(o),u.callback=null,Ja(s,u,o),s=o,i.current.lanes=s,qe(i,s),Ki(i),t[Yn]=i.current,qd(t),new Zc(i)},ml.version="19.2.8",ml}var ux;function x2(){if(ux)return xh.exports;ux=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xh.exports=_2(),xh.exports}var y2=x2();function tu(r){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${r}-${e}`}function fx(r){return{id:r.message_id,role:r.role,content:r.content}}function qr(r,e,n,a){return r.map(l=>l.id!==e?l:{...l,content:n,streaming:a})}function S2(r,e,n){return e?r.find(a=>a.conversation_id===e)?.title??n:n}function b2(r,e){const[n,a]=Xe.useState([]),[l,c]=Xe.useState(null),f=l,[h,m]=Xe.useState([]),[p,_]=Xe.useState(""),[v,g]=Xe.useState("idle"),[S,E]=Xe.useState(null),[w,b]=Xe.useState(null),[y,I]=Xe.useState(null),[F,N]=Xe.useState(null),[O,L]=Xe.useState([]),B=Xe.useRef(0),T=Xe.useRef(null);Xe.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const z=Xe.useMemo(()=>S2(n,l,e.newConversationTitle),[l,n,e.newConversationTitle]),q=v!=="idle";Xe.useEffect(()=>{let Q=!0;async function be(){try{let Ae=await r.listConversations(),K=localStorage.getItem(e.storageKey);Ae.some(we=>we.conversation_id===K)||(K=Ae[0]?.conversation_id??null),K||(K=(await r.createConversation()).conversation_id,Ae=await r.listConversations());const fe=await r.loadMessages(K);if(!Q)return;a(Ae),c(K),m(fe.map(fx)),localStorage.setItem(e.storageKey,K)}catch(Ae){Q&&N(Ae instanceof Error?Ae.message:e.wakeErrorMessage)}}return be(),()=>{Q=!1}},[r,e.storageKey,e.wakeErrorMessage]);async function V(){a(await r.listConversations())}async function j(){if(q||h.length===0)return!1;const Q=await r.createConversation();return c(Q.conversation_id),m([]),b(null),E(null),I(null),localStorage.setItem(e.storageKey,Q.conversation_id),await V(),!0}async function he(Q){if(!q){if(await r.deleteConversation(Q),Q===f){const be=(await r.listConversations()).filter(Ae=>Ae.conversation_id!==Q);be.length>0?await $(be[0].conversation_id):await j()}await V()}}async function pe(Q){return r.getPassage(Q)}async function $(Q){if(q||Q===l)return!1;const be=B.current+1;B.current=be;const Ae=await r.loadMessages(Q);return B.current!==be?!1:(c(Q),m(Ae.map(fx)),b(null),E(null),I(null),localStorage.setItem(e.storageKey,Q),!0)}function U(Q,be,Ae){if(Q.type==="delta"){T.current&&clearTimeout(T.current),L([]);const K=Ae+Q.text;return m(oe=>qr(oe,be,K,!0)),{text:K,terminal:!1}}return Q.type==="completed"?(m(K=>qr(K,be,Q.text,!1)),E(be),{text:Q.text,terminal:!0}):Q.type==="tool"?(L([{name:Q.name,status:Q.status,detail:Q.detail,preview:Q.preview,handles:Q.handles}]),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>L([]),3500),{text:Ae,terminal:!1}):(m(K=>qr(K,be,Ae,!1)),I(Q.message),{text:Ae,terminal:!0})}async function G(Q){if(!l||q)return;const be=tu("assistant");_(""),b(Q),E(null),I(null),L([]),g("streaming"),m(oe=>[...oe,{id:tu("owner"),role:"owner",content:Q},{id:be,role:"weaver",content:"",streaming:!0}]);let Ae="",K=!1;try{for await(const oe of r.streamTurn(l,Q)){const fe=U(oe,be,Ae);if(Ae=fe.text,K=fe.terminal,fe.terminal)break}K||(m(oe=>qr(oe,be,Ae,!1)),I(e.incompleteTurnMessage))}catch(oe){m(we=>qr(we,be,Ae,!1));const fe=oe instanceof Error?oe.message:e.connectionLostMessage;I(oe instanceof Error?`${fe} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}async function ee(){if(!(!l||v!=="streaming")){g("cancelling");try{await r.cancelTurn(l)}catch(Q){I(Q instanceof Error?Q.message:e.cancelFailedMessage),g("streaming")}}}async function me(){if(!l||v!=="idle"||!S)return;const Q=S,be=tu("assistant");E(null),I(null),L([]),g("streaming"),m(Ae=>[...Ae.filter(K=>K.id!==Q),{id:be,role:"weaver",content:"",streaming:!0}]),await D(be,r.regenerateTurn(l))}async function Ee(){if(!l||v!=="idle"||!w)return;const Q=tu("assistant");E(null),I(null),L([]),g("streaming"),m(be=>[...be,{id:Q,role:"weaver",content:"",streaming:!0}]),await D(Q,r.retryTurn(l))}async function D(Q,be){let Ae="",K=!1;try{for await(const oe of be){const fe=U(oe,Q,Ae);if(Ae=fe.text,K=fe.terminal,fe.terminal)break}K||(m(oe=>qr(oe,Q,Ae,!1)),I(e.incompleteTurnMessage))}catch(oe){m(we=>qr(we,Q,Ae,!1));const fe=oe instanceof Error?oe.message:e.connectionLostMessage;I(oe instanceof Error?`${fe} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}const k=(()=>{const Q=h[h.length-1];return Q&&Q.role==="weaver"?Q.id:null})();return{activeTitle:z,activity:O,bootError:F,cancelTurn:ee,conversationId:l,conversations:n,createConversation:j,deleteConversation:he,loadPassage:pe,draft:p,lastReplyId:k,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:me,retryLastTurn:Ee,selectConversation:$,sendMessage:G,setDraft:_,turnActive:q,turnState:v}}const Ai={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."},M2=["[Searching the fate tapestry.]","[Following a silver thread through the void.]","[Tracing where this memory touches the chapters.]"],E2=["[Reading what the Spell remembers.]","[Drawing the found passage into the weave.]","[Listening for the truth between the lines.]"],T2=["[Binding the scattered threads.]","[Setting each echo in its proper place.]","[Joining memory to canon.]"],A2=["[The Spell turns the question in the dark.]","[The pattern is beginning to answer.]","[Following the next thread of fate.]"];function nu(r,e){let n=0;for(const a of r)n+=a.charCodeAt(0);return e[n%e.length]}function Mh(r,e){return e.some(n=>r.includes(n))}function R2(r){if(r.status!=="start")return null;const e=r.name.toLowerCase();return Mh(e,["search","find","locate","browse","grep","glob","who_is"])?nu(e,M2):Mh(e,["read","chapter","passage","inspect"])?nu(e,E2):Mh(e,["connect","related","compare","timeline","link"])?nu(e,T2):nu(e,A2)}var C2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},w2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},D2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},N2={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},L2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},U2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},O2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},P2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},I2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},z2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},F2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},B2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},H2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},G2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},V2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},k2={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function X2(r){return r=r-0,r===r}function OS(r){return X2(r)?r:(r=r.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),r.charAt(0).toLowerCase()+r.slice(1))}var W2=(r,e)=>vm.createElement("stop",{key:`${e}-${r.offset}`,offset:r.offset,stopColor:r.color,...r.opacity!==void 0&&{stopOpacity:r.opacity}});function q2(r){return r.charAt(0).toUpperCase()+r.slice(1)}var qs=new Map,Y2=1e3;function j2(r){if(qs.has(r))return qs.get(r);const e={};let n=0;const a=r.length;for(;n<a;){const l=r.indexOf(";",n),c=l===-1?a:l,f=r.slice(n,c).trim();if(f){const h=f.indexOf(":");if(h>0){const m=f.slice(0,h).trim(),p=f.slice(h+1).trim();if(m&&p){const _=OS(m);e[_.startsWith("webkit")?q2(_):_]=p}}}n=c+1}if(qs.size===Y2){const l=qs.keys().next().value;l&&qs.delete(l)}return qs.set(r,e),e}function PS(r,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(v=>{let g=v;return("fill"in n||n.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),PS(r,g)}),l=e.attributes||{},c={};for(const[v,g]of Object.entries(l))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=j2(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[OS(v)]=g}const{style:f,role:h,"aria-label":m,gradientFill:p,..._}=n;if(f&&(c.style=c.style?{...c.style,...f}:f),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;a.unshift(r(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(W2)))}return r(e.tag,{...c,..._},...a)}var Z2=PS.bind(null,vm.createElement),dx=(r,e)=>{const n=Xe.useId();return r||(e?n:void 0)},K2=class{constructor(r="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=r,this.enabled=e}log(...r){this.enabled&&console.log(`[${this.scope}]`,...r)}warn(...r){this.enabled&&console.warn(`[${this.scope}]`,...r)}error(...r){this.enabled&&console.error(`[${this.scope}]`,...r)}},Q2="searchPseudoElementsFullScan"in ls&&typeof ls.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",J2=Number.parseInt(Q2)>=7,$2=()=>J2,wl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},e3={left:"fa-pull-left",right:"fa-pull-right"},t3={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},n3={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ii={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function i3(r){const e=ls.cssPrefix||ls.familyPrefix||wl;return e===wl?r:r.replace(new RegExp(String.raw`(?<=^|\s)${wl}-`,"g"),`${e}-`)}function a3(r){const{beat:e,fade:n,beatFade:a,bounce:l,shake:c,spin:f,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:E,rotation:w,pull:b,swapOpacity:y,rotateBy:I,widthAuto:F,canvasSquare:N,canvasRoomy:O,flip360:L,buzz:B,float:T,jello:z,spinSnap:q,spinSnap4:V,spinSnap8:j,swing:he,wag:pe,className:$}=r,U=[];return $&&U.push(...$.split(" ")),e&&U.push(Cn.beat),n&&U.push(Cn.fade),a&&U.push(Cn.beatFade),l&&U.push(Cn.bounce),c&&U.push(Cn.shake),f&&U.push(Cn.spin),m&&U.push(Cn.spinReverse),h&&U.push(Cn.spinPulse),p&&U.push(Cn.pulse),_&&U.push(Ii.fixedWidth),v&&U.push(Ii.inverse),g&&U.push(Ii.border),S===!0&&U.push(Ii.flip),(S==="horizontal"||S==="both")&&U.push(Ii.flipHorizontal),(S==="vertical"||S==="both")&&U.push(Ii.flipVertical),E!=null&&U.push(n3[E]),w!=null&&w!==0&&U.push(t3[w]),b!=null&&U.push(e3[b]),y&&U.push(Ii.swapOpacity),$2()?(I&&U.push(Ii.rotateBy),F&&U.push(Ii.widthAuto),N&&U.push(Ii.canvasSquare),O&&U.push(Ii.canvasRoomy),L&&U.push(Cn.flip360),B&&U.push(Cn.buzz),T&&U.push(Cn.float),z&&U.push(Cn.jello),q&&U.push(Cn.spinSnap),V&&U.push(Cn.spinSnap4),j&&U.push(Cn.spinSnap8),he&&U.push(Cn.swing),pe&&U.push(Cn.wag),(ls.cssPrefix||ls.familyPrefix||wl)===wl?U:U.map(i3)):U}var r3=r=>typeof r=="object"&&"icon"in r&&!!r.icon;function hx(r){if(r)return r3(r)?r:US.icon(r)}function s3(r){return Object.keys(r)}var px=new K2("FontAwesomeIcon"),IS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},o3=new Set(Object.keys(IS)),zn=vm.forwardRef((r,e)=>{const n={...IS,...r},{icon:a,mask:l,symbol:c,title:f,titleId:h,maskId:m,transform:p}=n,_=dx(m,!!l),v=dx(h,!!f),g=hx(a);if(!g)return px.error("Icon lookup is undefined",a),null;const S=a3(n),E=typeof p=="string"?US.transform(p):p,w=hx(l),b=h2(g,{...S.length>0&&{classes:S},...E&&{transform:E},...w&&{mask:w},symbol:c,title:f,titleId:v,maskId:_});if(!b)return px.error("Could not find icon",g),null;const{abstract:y}=b,I={ref:e};for(const F of s3(n))o3.has(F)||(I[F]=n[F]);return Z2(y[0],I)});zn.displayName="FontAwesomeIcon";function l3(r){return C.jsx(zn,{"aria-hidden":"true",icon:O2,...r})}function mx(r){return C.jsx(zn,{"aria-hidden":"true",icon:G2,...r})}function c3(r){return C.jsx(zn,{"aria-hidden":"true",icon:H2,...r})}function u3(r){return C.jsx(zn,{"aria-hidden":"true",icon:I2,...r})}function f3(r){return C.jsx(zn,{"aria-hidden":"true",icon:V2,...r})}function d3(r){return C.jsx(zn,{"aria-hidden":"true",icon:L2,...r})}function zS(r){return C.jsx(zn,{"aria-hidden":"true",icon:C2,...r})}function h3(r){return C.jsx(zn,{"aria-hidden":"true",icon:B2,...r})}function FS(r){return C.jsx(zn,{"aria-hidden":"true",icon:U2,...r})}function p3(r){return C.jsx(zn,{"aria-hidden":"true",icon:w2,...r})}function m3(r){return C.jsx(zn,{"aria-hidden":"true",icon:z2,...r})}function Mp(r){return C.jsx(zn,{"aria-hidden":"true",icon:F2,...r})}function gx(r){return C.jsx(zn,{"aria-hidden":"true",icon:k2,...r})}function g3(r){return C.jsx(zn,{"aria-hidden":"true",icon:P2,...r})}function v3(r){return C.jsx(zn,{"aria-hidden":"true",icon:N2,...r})}const _3=["awakened","ascended","transcendent"];function x3({cancelling:r,draft:e,inputLabel:n="Message assistant",onCancel:a,onDraftChange:l,onSubmit:c,onTierChange:f,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const E=Xe.useRef(null),w=v??E,b=Xe.useRef(null),[y,I]=Xe.useState(!1);Xe.useEffect(()=>{const O=w.current;O&&(O.style.height="auto",O.style.height=`${Math.min(O.scrollHeight,160)}px`)},[e,w]),Xe.useEffect(()=>{if(!y)return;function O(B){b.current&&!b.current.contains(B.target)&&I(!1)}function L(B){B.key==="Escape"&&I(!1)}return document.addEventListener("pointerdown",O),document.addEventListener("keydown",L),()=>{document.removeEventListener("pointerdown",O),document.removeEventListener("keydown",L)}},[y]);function F(){const O=e.trim();!O||S||c(O)}function N(O){O.key!=="Enter"||O.shiftKey||(O.preventDefault(),F())}return C.jsx("div",{className:"composer-wrap",children:C.jsxs("div",{className:"composer-shell",children:[C.jsx("textarea",{"aria-label":n,disabled:S,onChange:O=>l(O.target.value),onKeyDown:N,placeholder:h,ref:w,rows:1,value:e}),C.jsxs("div",{className:"composer-tier",ref:b,children:[C.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>I(O=>!O),type:"button",children:[C.jsx("span",{className:"tier-pill-name",children:g}),C.jsx(Mp,{})]}),y&&C.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:_3.map(O=>C.jsx("li",{children:C.jsxs("button",{"aria-selected":O===g,onClick:()=>{f(O),I(!1)},role:"option",type:"button",children:[C.jsx("span",{className:"tier-menu-check",children:O===g?"✦":""}),O]})},O))})]}),S?C.jsx("button",{"aria-label":r?_:p,className:"composer-action composer-stop",disabled:r,onClick:a,type:"button",children:C.jsx(f3,{})}):C.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:F,type:"button",children:C.jsx(l3,{})})]})})}function y3(){return C.jsx("div",{"aria-label":"Weaver is weaving an answer",className:"fate-weaving-loader",role:"status",children:C.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 128 36",children:[C.jsx("path",{className:"fate-loader-thread fate-loader-thread-one",d:"M2 7 C30 7, 37 18, 64 18 S98 29, 126 29",pathLength:"1"}),C.jsx("path",{className:"fate-loader-thread fate-loader-thread-two",d:"M2 29 C30 29, 37 18, 64 18 S98 7, 126 7",pathLength:"1"}),C.jsx("path",{className:"fate-loader-thread fate-loader-thread-three",d:"M2 18 C32 18, 42 12, 64 18 S96 24, 126 18",pathLength:"1"}),C.jsx("circle",{className:"fate-loader-core fate-loader-core-one",cx:"40",cy:"15",r:"1.7"}),C.jsx("circle",{className:"fate-loader-core fate-loader-core-two",cx:"64",cy:"18",r:"2.3"}),C.jsx("circle",{className:"fate-loader-core fate-loader-core-three",cx:"89",cy:"21",r:"1.7"})]})})}const S3=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function b3(r){try{const e=new URL(r);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function Eh(r,e){if(!e)return;const n=r.at(-1);if(n?.type==="text"){n.value+=e;return}r.push({type:"text",value:e})}function iu(r){const e=[];let n=0;for(const a of r.matchAll(S3)){const l=a.index??0;Eh(e,r.slice(n,l));const c=a[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const f=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=f?.[2]??"";f&&b3(h)?e.push({type:"link",label:f[1],href:h}):Eh(e,c)}n=l+c.length}return Eh(e,r.slice(n)),e}function M3(r){const e=r.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function E3(r){const e=[],n=String(r??"").split(/\r?\n/);let a=0;for(;a<n.length;){const l=n[a].trim();if(!l){a+=1;continue}if(l.startsWith("```")){const p=[];for(a+=1;a<n.length&&!n[a].trimStart().startsWith("```");)p.push(n[a]),a+=1;a<n.length&&(a+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(l);if(c){e.push({type:"heading",level:c[1].length,children:iu(c[2])}),a+=1;continue}if(l.startsWith(">")){e.push({type:"quote",children:iu(l.replace(/^>\s?/,""))}),a+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){e.push({type:"rule"}),a+=1;continue}const f=/^[-*]\s+/.test(l),h=/^\d+[.)]\s+/.test(l);if(f||h){const p=[];for(;a<n.length;){const _=n[a].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(iu(v[1])),a+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;a<n.length;){const p=n[a].trim();if(!p||m.length>0&&M3(p))break;m.push(p),a+=1}e.push({type:"paragraph",children:iu(m.join(" "))})}return e}function lo(r){return r.map((e,n)=>{const a=`${e.type}-${n}`;return e.type==="text"?C.jsx(Xe.Fragment,{children:e.value},a):e.type==="strong"?C.jsx("strong",{children:lo(e.children)},a):e.type==="emphasis"?C.jsx("em",{children:lo(e.children)},a):e.type==="code"?C.jsx("code",{children:e.value},a):C.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},a)})}function T3({children:r}){return E3(r).map((n,a)=>{const l=`${n.type}-${a}`;if(n.type==="paragraph")return C.jsx("p",{children:lo(n.children)},l);if(n.type==="heading"){const f=`h${n.level}`;return C.jsx(f,{children:lo(n.children)},l)}if(n.type==="code")return C.jsx("pre",{children:C.jsx("code",{children:n.value})},l);if(n.type==="quote")return C.jsx("blockquote",{children:lo(n.children)},l);if(n.type==="rule")return C.jsx("hr",{},l);const c=n.ordered?"ol":"ul";return C.jsx(c,{children:n.items.map((f,h)=>C.jsx("li",{children:lo(f)},`${l}-${h}`))},l)})}function A3({Mark:r,assistantName:e,message:n,onQuote:a,onRegenerate:l,regenerateLabel:c}){const[f,h]=Xe.useState(!1),[m,p]=Xe.useState(null),[_,v]=Xe.useState(null),g=Xe.useRef(null);Xe.useEffect(()=>{function E(){if(n.role!=="weaver"||!a||!g.current)return;const w=window.getSelection(),b=w?w.toString().trim():"",y=g.current,I=w&&w.rangeCount>0&&y.contains(w.getRangeAt(0).commonAncestorContainer);if(b.length>=2&&I){const F=w.getRangeAt(0).getBoundingClientRect();p(b),v({top:F.bottom+6,left:F.left})}else p(null),v(null)}return document.addEventListener("selectionchange",E),()=>document.removeEventListener("selectionchange",E)},[n.role,a]);async function S(){await navigator.clipboard?.writeText(n.content),h(!0),window.setTimeout(()=>h(!1),1400)}return n.role==="owner"?C.jsx("article",{className:"message message-owner",children:C.jsxs("div",{className:"owner-message-content",children:[C.jsx("div",{className:"owner-bubble",children:n.content}),C.jsx("div",{className:"message-actions",children:C.jsxs("button",{"aria-label":"Copy owner message",onClick:S,type:"button",children:[C.jsx(mx,{}),C.jsx("span",{children:f?"Copied":"Copy"})]})})]})}):C.jsxs("article",{className:`message message-weaver ${n.streaming?"message-streaming":""}`,children:[C.jsx("div",{className:"weaver-avatar",children:C.jsx(r,{compact:!0})}),C.jsxs("div",{className:"weaver-message-content",children:[C.jsx("div",{className:"message-role",children:e}),C.jsx("div",{className:"markdown-body",ref:g,children:n.content?C.jsx(T3,{children:n.content}):C.jsx(y3,{})}),!n.streaming&&n.content&&C.jsxs("div",{className:"message-actions",children:[C.jsxs("button",{"aria-label":"Copy reply",onClick:S,type:"button",children:[C.jsx(mx,{}),C.jsx("span",{children:f?"Copied":"Copy"})]}),l&&C.jsxs("button",{"aria-label":"Regenerate reply",onClick:l,type:"button",children:[C.jsx(u3,{}),C.jsx("span",{children:c})]})]})]}),m&&_&&C.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{a?.(m),p(null),v(null)},style:{top:_.top,left:_.left},type:"button",children:[C.jsx(m3,{}),C.jsx("span",{children:"ask about this"})]})]})}function R3({chooseLabel:r,createLabel:e,message:n,onChooseConversation:a,onCreateConversation:l,onRetry:c,retryLabel:f,title:h}){return C.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[C.jsx("span",{className:"recovery-knot"}),C.jsxs("div",{children:[C.jsx("strong",{children:h}),C.jsx("p",{children:n}),C.jsxs("div",{className:"recovery-actions",children:[c&&f&&C.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:f}),C.jsx("button",{onClick:l,type:"button",children:e}),C.jsx("button",{onClick:a,type:"button",children:r})]})]})]})}const Dm="185",C3=0,vx=1,w3=2,Ou=1,D3=2,Tl=3,Tr=0,ti=1,Na=2,Ua=0,fo=1,_x=2,xx=3,yx=4,N3=5,ts=100,L3=101,U3=102,O3=103,P3=104,I3=200,z3=201,F3=202,B3=203,Ep=204,Tp=205,H3=206,G3=207,V3=208,k3=209,X3=210,W3=211,q3=212,Y3=213,j3=214,Ap=0,Rp=1,Cp=2,go=3,wp=4,Dp=5,Np=6,Lp=7,BS=0,Z3=1,K3=2,aa=0,HS=1,GS=2,VS=3,kS=4,XS=5,WS=6,qS=7,YS=300,cs=301,vo=302,Th=303,Ah=304,rf=306,Up=1e3,La=1001,Op=1002,Pn=1003,Q3=1004,au=1005,Vn=1006,Rh=1007,as=1008,Di=1009,jS=1010,ZS=1011,Nl=1012,Nm=1013,sa=1014,na=1015,za=1016,Lm=1017,Um=1018,Ll=1020,KS=35902,QS=35899,JS=1021,$S=1022,Vi=1023,Fa=1026,rs=1027,eb=1028,Om=1029,us=1030,Pm=1031,Im=1033,Pu=33776,Iu=33777,zu=33778,Fu=33779,Pp=35840,Ip=35841,zp=35842,Fp=35843,Bp=36196,Hp=37492,Gp=37496,Vp=37488,kp=37489,ku=37490,Xp=37491,Wp=37808,qp=37809,Yp=37810,jp=37811,Zp=37812,Kp=37813,Qp=37814,Jp=37815,$p=37816,em=37817,tm=37818,nm=37819,im=37820,am=37821,rm=36492,sm=36494,om=36495,lm=36283,cm=36284,Xu=36285,um=36286,J3=3200,Sx=0,$3=1,yr="",Ci="srgb",Wu="srgb-linear",qu="linear",kt="srgb",Ys=7680,bx=519,eR=512,tR=513,nR=514,zm=515,iR=516,aR=517,Fm=518,rR=519,Mx=35044,Ex="300 es",ia=2e3,Yu=2001;function sR(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ju(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oR(){const r=ju("canvas");return r.style.display="block",r}const Tx={};function Ax(...r){const e="THREE."+r.shift();console.log(e,...r)}function tb(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ot(...r){r=tb(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function wt(...r){r=tb(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function ho(...r){const e=r.join(" ");e in Tx||(Tx[e]=!0,ot(...r))}function lR(r,e,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const cR={[Ap]:Rp,[Cp]:Np,[wp]:Lp,[go]:Dp,[Rp]:Ap,[Np]:Cp,[Lp]:wp,[Dp]:go};class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ch=Math.PI/180,fm=180/Math.PI;function Il(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Rt(r,e,n){return Math.max(e,Math.min(n,r))}function uR(r,e){return(r%e+e)%e}function wh(r,e,n){return(1-n)*r+n*e}function gl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Gm=class Gm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gm.prototype.isVector2=!0;let Pt=Gm;class So{constructor(e=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=l}static slerpFlat(e,n,a,l,c,f,h){let m=a[l+0],p=a[l+1],_=a[l+2],v=a[l+3],g=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==E){let b=m*g+p*S+_*E+v*w;b<0&&(g=-g,S=-S,E=-E,w=-w,b=-b);let y=1-h;if(b<.9995){const I=Math.acos(b),F=Math.sin(I);y=Math.sin(y*I)/F,h=Math.sin(h*I)/F,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h;const I=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=I,p*=I,_*=I,v*=I}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],_=a[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return e[n]=h*E+_*v+m*S-p*g,e[n+1]=m*E+_*g+p*v-h*S,e[n+2]=p*E+_*S+h*g-m*v,e[n+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,l){return this._x=e,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(l/2),v=h(c/2),g=m(a/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=a+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,l=e._y,c=e._z,f=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-a*p,this._z=c*_+f*p+a*m-l*h,this._w=f*_-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(a=-a,l=-l,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vm=class Vm{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,a=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*a),_=2*(h*n-c*l),v=2*(c*a-f*n);return this.x=n+m*p+f*v-h*_,this.y=a+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,l=e.y,c=e.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return n*n+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const l=Math.sin(n)*e;return this.x=l*Math.sin(a),this.y=Math.cos(n)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vm.prototype.isVector3=!0;let ae=Vm;const Dh=new ae,Rx=new So,km=class km{constructor(e,n,a,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,h,m,p)}set(e,n,a,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],S=a[5],E=a[8],w=l[0],b=l[3],y=l[6],I=l[1],F=l[4],N=l[7],O=l[2],L=l[5],B=l[8];return c[0]=f*w+h*I+m*O,c[3]=f*b+h*F+m*L,c[6]=f*y+h*N+m*B,c[1]=p*w+_*I+v*O,c[4]=p*b+_*F+v*L,c[7]=p*y+_*N+v*B,c[2]=g*w+S*I+E*O,c[5]=g*b+S*F+E*L,c[8]=g*y+S*N+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*f*_-n*h*p-a*c*_+a*h*m+l*c*p-l*f*m}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,E=n*v+a*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(l*p-_*a)*w,e[2]=(h*a-l*f)*w,e[3]=g*w,e[4]=(_*n-l*m)*w,e[5]=(l*c-h*n)*w,e[6]=S*w,e[7]=(a*m-p*n)*w,e[8]=(f*n-a*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};km.prototype.isMatrix3=!0;let ft=km;const Nh=new ft,Cx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fR(){const r={enabled:!0,workingColorSpace:Wu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===yr?qu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Wu]:{primaries:e,whitePoint:a,transfer:qu,toXYZ:Cx,fromXYZ:wx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:a,transfer:kt,toXYZ:Cx,fromXYZ:wx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),r}const At=fR();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let js;class dR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{js===void 0&&(js=ju("canvas")),js.width=e.width,js.height=e.height;const l=js.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=js}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ju("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Oa(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Oa(n[a]/255)*255):n[a]=Oa(n[a]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hR=0;class Bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Lh(l[f].image)):c.push(Lh(l[f]))}else c=Lh(l);a.url=c}return n||(e.images[this.uuid]=a),a}}function Lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dR.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let pR=0;const Uh=new ae;class Wn extends ds{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=La,l=La,c=Vn,f=as,h=Vi,m=Di,p=Wn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=Il(),this.name="",this.source=new Bm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==YS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Up:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Op:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Up:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Op:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=YS;Wn.DEFAULT_ANISOTROPY=1;const Xm=class Xm{constructor(e=0,n=0,a=0,l=1){this.x=e,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,l){return this.x=e,this.y=n,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],w=m[2],b=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(p+1)/2,N=(S+1)/2,O=(y+1)/2,L=(_+g)/4,B=(v+w)/4,T=(E+b)/4;return F>N&&F>O?F<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(F),l=L/a,c=B/a):N>O?N<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),a=L/l,c=T/l):O<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),a=B/c,l=T/c),this.set(a,l,c,n),this}let I=Math.sqrt((b-E)*(b-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(I)<.001&&(I=1),this.x=(b-E)/I,this.y=(v-w)/I,this.z=(g-_)/I,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this.w=Rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this.w=Rt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xm.prototype.isVector4=!0;let fn=Xm;class mR extends ds{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:a.depth},c=new Wn(l),f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new Bm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends mR{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class nb extends Wn{constructor(e=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gR extends Wn{constructor(e=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=class Ju{constructor(e,n,a,l,c,f,h,m,p,_,v,g,S,E,w,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,h,m,p,_,v,g,S,E,w,b)}set(e,n,a,l,c,f,h,m,p,_,v,g,S,E,w,b){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ju().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,l=1/Zs.setFromMatrixColumn(e,0).length(),c=1/Zs.setFromMatrixColumn(e,1).length(),f=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*v,E=h*_,w=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=S+E*p,n[5]=g-w*p,n[9]=-h*m,n[2]=w-g*p,n[6]=E+S*p,n[10]=f*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,w=p*v;n[0]=g+w*h,n[4]=E*h-S,n[8]=f*p,n[1]=f*v,n[5]=f*_,n[9]=-h,n[2]=S*h-E,n[6]=w+g*h,n[10]=f*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,w=p*v;n[0]=g-w*h,n[4]=-f*v,n[8]=E+S*h,n[1]=S+E*h,n[5]=f*_,n[9]=w-g*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(e.order==="ZYX"){const g=f*_,S=f*v,E=h*_,w=h*v;n[0]=m*_,n[4]=E*p-S,n[8]=g*p+w,n[1]=m*v,n[5]=w*p+g,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(e.order==="YZX"){const g=f*m,S=f*p,E=h*m,w=h*p;n[0]=m*_,n[4]=w-g*v,n[8]=E*v+S,n[1]=v,n[5]=f*_,n[9]=-h*_,n[2]=-p*_,n[6]=S*v+E,n[10]=g-w*v}else if(e.order==="XZY"){const g=f*m,S=f*p,E=h*m,w=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+w,n[5]=f*_,n[9]=S*v-E,n[2]=E*v-S,n[6]=h*_,n[10]=w*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vR,e,_R)}lookAt(e,n,a){const l=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pr.crossVectors(a,pi),pr.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pr.crossVectors(a,pi)),pr.normalize(),ru.crossVectors(pi,pr),l[0]=pr.x,l[4]=ru.x,l[8]=pi.x,l[1]=pr.y,l[5]=ru.y,l[9]=pi.y,l[2]=pr.z,l[6]=ru.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],S=a[13],E=a[2],w=a[6],b=a[10],y=a[14],I=a[3],F=a[7],N=a[11],O=a[15],L=l[0],B=l[4],T=l[8],z=l[12],q=l[1],V=l[5],j=l[9],he=l[13],pe=l[2],$=l[6],U=l[10],G=l[14],ee=l[3],me=l[7],Ee=l[11],D=l[15];return c[0]=f*L+h*q+m*pe+p*ee,c[4]=f*B+h*V+m*$+p*me,c[8]=f*T+h*j+m*U+p*Ee,c[12]=f*z+h*he+m*G+p*D,c[1]=_*L+v*q+g*pe+S*ee,c[5]=_*B+v*V+g*$+S*me,c[9]=_*T+v*j+g*U+S*Ee,c[13]=_*z+v*he+g*G+S*D,c[2]=E*L+w*q+b*pe+y*ee,c[6]=E*B+w*V+b*$+y*me,c[10]=E*T+w*j+b*U+y*Ee,c[14]=E*z+w*he+b*G+y*D,c[3]=I*L+F*q+N*pe+O*ee,c[7]=I*B+F*V+N*$+O*me,c[11]=I*T+F*j+N*U+O*Ee,c[15]=I*z+F*he+N*G+O*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],w=e[7],b=e[11],y=e[15],I=m*S-p*g,F=h*S-p*v,N=h*g-m*v,O=f*S-p*_,L=f*g-m*_,B=f*v-h*_;return n*(w*I-b*F+y*N)-a*(E*I-b*O+y*L)+l*(E*F-w*O+y*B)-c*(E*N-w*L+b*B)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return n*(f*_-h*p)-a*(c*_-h*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],w=e[13],b=e[14],y=e[15],I=n*h-a*f,F=n*m-l*f,N=n*p-c*f,O=a*m-l*h,L=a*p-c*h,B=l*p-c*m,T=_*w-v*E,z=_*b-g*E,q=_*y-S*E,V=v*b-g*w,j=v*y-S*w,he=g*y-S*b,pe=I*he-F*j+N*V+O*q-L*z+B*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/pe;return e[0]=(h*he-m*j+p*V)*$,e[1]=(l*j-a*he-c*V)*$,e[2]=(w*B-b*L+y*O)*$,e[3]=(g*L-v*B-S*O)*$,e[4]=(m*q-f*he-p*z)*$,e[5]=(n*he-l*q+c*z)*$,e[6]=(b*N-E*B-y*F)*$,e[7]=(_*B-g*N+S*F)*$,e[8]=(f*j-h*q+p*T)*$,e[9]=(a*q-n*j-c*T)*$,e[10]=(E*L-w*N+y*I)*$,e[11]=(v*N-_*L-S*I)*$,e[12]=(h*z-f*V-m*T)*$,e[13]=(n*V-a*z+l*T)*$,e[14]=(w*F-E*O-b*I)*$,e[15]=(_*O-v*F+g*I)*$,this}scale(e){const n=this.elements,a=e.x,l=e.y,c=e.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+a,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,a){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,E=c*v,w=f*_,b=f*v,y=h*v,I=m*p,F=m*_,N=m*v,O=a.x,L=a.y,B=a.z;return l[0]=(1-(w+y))*O,l[1]=(S+N)*O,l[2]=(E-F)*O,l[3]=0,l[4]=(S-N)*L,l[5]=(1-(g+y))*L,l[6]=(b+I)*L,l[7]=0,l[8]=(E+F)*B,l[9]=(b-I)*B,l[10]=(1-(g+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let f=Zs.set(l[0],l[1],l[2]).length();const h=Zs.set(l[4],l[5],l[6]).length(),m=Zs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),zi.copy(this);const p=1/f,_=1/h,v=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,n.setFromRotationMatrix(zi),a.x=f,a.y=h,a.z=m,this}makePerspective(e,n,a,l,c,f,h=ia,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(a-l),g=(n+e)/(n-e),S=(a+l)/(a-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===ia)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===Yu)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,l,c,f,h=ia,m=!1){const p=this.elements,_=2/(n-e),v=2/(a-l),g=-(n+e)/(n-e),S=-(a+l)/(a-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===ia)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===Yu)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Ju.prototype.isMatrix4=!0;let dn=Ju;const Zs=new ae,zi=new dn,vR=new ae(0,0,0),_R=new ae(1,1,1),pr=new ae,ru=new ae,pi=new ae,Dx=new dn,Nx=new So;class fs{constructor(e=0,n=0,a=0,l=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,l=this._order){return this._x=e,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dx,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class ib{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xR=0;const Lx=new ae,Ks=new So,Aa=new dn,su=new ae,vl=new ae,yR=new ae,SR=new So,Ux=new ae(1,0,0),Ox=new ae(0,1,0),Px=new ae(0,0,1),Ix={type:"added"},bR={type:"removed"},Qs={type:"childadded",child:null},Oh={type:"childremoved",child:null};class qn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xR++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ae,n=new fs,a=new So,l=new ae(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ft}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ib,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Ux,e)}rotateY(e){return this.rotateOnAxis(Ox,e)}rotateZ(e){return this.rotateOnAxis(Px,e)}translateOnAxis(e,n){return Lx.copy(e).applyQuaternion(this.quaternion),this.position.add(Lx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ux,e)}translateY(e){return this.translateOnAxis(Ox,e)}translateZ(e){return this.translateOnAxis(Px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?su.copy(e):su.set(e,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(vl,su,this.up):Aa.lookAt(su,vl,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Aa),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ix),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bR),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ix),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,yR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,SR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*l,c[13]+=a-c[1]*n-c[5]*a-c[9]*l,c[14]+=l-c[2]*n-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(n){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ae(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ou extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MR={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const b=n.getJointPose(w,a),y=this._getHandJoint(p,w);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=n.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(MR)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new ou;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const ab={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},lu={h:0,s:0,l:0};function Ih(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Et{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,a,l=At.workingColorSpace){return this.r=e,this.g=n,this.b=a,At.colorSpaceToWorking(this,l),this}setHSL(e,n,a,l=At.workingColorSpace){if(e=uR(e,1),n=Rt(n,0,1),a=Rt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Ih(f,c,e+1/3),this.g=Ih(f,c,e),this.b=Ih(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,n=Ci){function a(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ci){const a=ab[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return At.workingToColorSpace(Gn.copy(this),e),Math.round(Rt(Gn.r*255,0,255))*65536+Math.round(Rt(Gn.g*255,0,255))*256+Math.round(Rt(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Gn.copy(this),n);const a=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){At.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,a=Gn.g,l=Gn.b;return e!==Ci?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,n,a){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(lu);const a=wh(mr.h,lu.h,n),l=wh(mr.s,lu.s,n),c=wh(mr.l,lu.l,n);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Et;Et.NAMES=ab;class ER extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new ae,Ra=new ae,zh=new ae,Ca=new ae,Js=new ae,$s=new ae,zx=new ae,Fh=new ae,Bh=new ae,Hh=new ae,Gh=new fn,Vh=new fn,kh=new fn;class Hi{constructor(e=new ae,n=new ae,a=new ae){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,l){l.subVectors(a,n),Fi.subVectors(e,n),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,a,l,c){Fi.subVectors(l,n),Ra.subVectors(a,n),zh.subVectors(e,n);const f=Fi.dot(Fi),h=Fi.dot(Ra),m=Fi.dot(zh),p=Ra.dot(Ra),_=Ra.dot(zh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,n,a,l){return this.getBarycoord(e,n,a,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,n,a,l,c,f,h,m){return this.getBarycoord(e,n,a,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(f,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,n,a,l,c,f){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(e,n),Vh.fromBufferAttribute(e,a),kh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Gh,c.x),f.addScaledVector(Vh,c.y),f.addScaledVector(kh,c.z),f}static isFrontFacing(e,n,a,l){return Fi.subVectors(a,n),Ra.subVectors(e,n),Fi.cross(Ra).dot(l)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,l){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,a,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Fi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,n,a,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,l=this.b,c=this.c;let f,h;Js.subVectors(l,a),$s.subVectors(c,a),Fh.subVectors(e,a);const m=Js.dot(Fh),p=$s.dot(Fh);if(m<=0&&p<=0)return n.copy(a);Bh.subVectors(e,l);const _=Js.dot(Bh),v=$s.dot(Bh);if(_>=0&&v<=_)return n.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(a).addScaledVector(Js,f);Hh.subVectors(e,c);const S=Js.dot(Hh),E=$s.dot(Hh);if(E>=0&&S<=E)return n.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector($s,h);const b=_*E-S*v;if(b<=0&&v-_>=0&&S-E>=0)return zx.subVectors(c,l),h=(v-_)/(v-_+(S-E)),n.copy(l).addScaledVector(zx,h);const y=1/(b+w+g);return f=w*y,h=g*y,n.copy(a).addScaledVector(Js,f).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new ae(1/0,1/0,1/0),n=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),cu.copy(a.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),uu.subVectors(this.max,_l),eo.subVectors(e.a,_l),to.subVectors(e.b,_l),no.subVectors(e.c,_l),gr.subVectors(to,eo),vr.subVectors(no,to),Yr.subVectors(eo,no);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Yr.z,Yr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Yr.z,0,-Yr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Yr.y,Yr.x,0];return!Xh(n,eo,to,no,uu)||(n=[1,0,0,0,1,0,0,0,1],!Xh(n,eo,to,no,uu))?!1:(fu.crossVectors(gr,vr),n=[fu.x,fu.y,fu.z],Xh(n,eo,to,no,uu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Bi=new ae,cu=new zl,eo=new ae,to=new ae,no=new ae,gr=new ae,vr=new ae,Yr=new ae,_l=new ae,uu=new ae,fu=new ae,jr=new ae;function Xh(r,e,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){jr.fromArray(r,c);const h=l.x*Math.abs(jr.x)+l.y*Math.abs(jr.y)+l.z*Math.abs(jr.z),m=e.dot(jr),p=n.dot(jr),_=a.dot(jr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new ae,du=new Pt;let TR=0;class bn extends ds{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Mx,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)du.fromBufferAttribute(this,n),du.applyMatrix3(e),this.setXY(n,du.x,du.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=gl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,l){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),l=ei(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,n,a,l,c){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class rb extends bn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class sb extends bn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ki extends bn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const AR=new zl,xl=new ae,Wh=new ae;class Fl{constructor(e=new ae,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):AR.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const n=xl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(xl,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(Wh)),this.expandByPoint(xl.copy(e.center).sub(Wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RR=0;const Ri=new dn,qh=new qn,io=new ae,mi=new zl,yl=new zl,wn=new ae;class ni extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sR(e)?sb:rb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ft().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,n,a){return Ri.makeTranslation(e,n,a),this.applyMatrix4(Ri),this}scale(e,n,a){return Ri.makeScale(e,n,a),this.applyMatrix4(Ri),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(a,3))}else{const a=Math.min(e.length,n.count);for(let l=0;l<a;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,yl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,yl.max),mi.expandByPoint(wn)):(mi.expandByPoint(yl.min),mi.expandByPoint(yl.max))}mi.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(wn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)wn.fromBufferAttribute(h,p),m&&(io.fromBufferAttribute(e,p),wn.add(io)),l=Math.max(l,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new bn(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new ae,m[T]=new ae;const p=new ae,_=new ae,v=new ae,g=new Pt,S=new Pt,E=new Pt,w=new ae,b=new ae;function y(T,z,q){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,z),v.fromBufferAttribute(a,q),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,z),E.fromBufferAttribute(c,q),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),h[T].add(w),h[z].add(w),h[q].add(w),m[T].add(b),m[z].add(b),m[q].add(b))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,z=I.length;T<z;++T){const q=I[T],V=q.start,j=q.count;for(let he=V,pe=V+j;he<pe;he+=3)y(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const F=new ae,N=new ae,O=new ae,L=new ae;function B(T){O.fromBufferAttribute(l,T),L.copy(O);const z=h[T];F.copy(z),F.sub(O.multiplyScalar(O.dot(z))).normalize(),N.crossVectors(L,z);const V=N.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,V)}for(let T=0,z=I.length;T<z;++T){const q=I[T],V=q.start,j=q.count;for(let he=V,pe=V+j;he<pe;he+=3)B(e.getX(he+0)),B(e.getX(he+1)),B(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const l=new ae,c=new ae,f=new ae,h=new ae,m=new ae,p=new ae,_=new ae,v=new ae;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,w),p.fromBufferAttribute(a,b),h.add(_),m.add(_),p.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(w,m.x,m.y,m.z),a.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,b=m.length;w<b;w++){h.isInterleavedBufferAttribute?S=m[w]*h.data.stride+h.offset:S=m[w]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new bn(g,_,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,a);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let CR=0;class bo extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CR++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=fo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ep,this.blendDst=Tp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(a.blending=this.blending),this.side!==Tr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ep&&(a.blendSrc=this.blendSrc),this.blendDst!==Tp&&(a.blendDst=this.blendDst),this.blendEquation!==ts&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Pt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new ae,Yh=new ae,hu=new ae,_r=new ae,jh=new ae,pu=new ae,Zh=new ae;class Hm{constructor(e=new ae,n=new ae(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,a,l){Yh.copy(e).add(n).multiplyScalar(.5),hu.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Yh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(hu),h=_r.dot(this.direction),m=-_r.dot(hu),p=_r.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Yh).addScaledVector(hu,g),S}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const a=Da.dot(this.direction),l=Da.dot(Da)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,a,l,c){jh.subVectors(n,e),pu.subVectors(a,e),Zh.crossVectors(jh,pu);let f=this.direction.dot(Zh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;_r.subVectors(this.origin,e);const m=h*this.direction.dot(pu.crossVectors(_r,pu));if(m<0)return null;const p=h*this.direction.dot(jh.cross(_r));if(p<0||m+p>f)return null;const _=-h*_r.dot(Zh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ob extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=BS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fx=new dn,Zr=new Hm,mu=new Fl,Bx=new ae,gu=new ae,vu=new ae,_u=new ae,Kh=new ae,xu=new ae,Hx=new ae,yu=new ae;class Ba extends qn{constructor(e=new ni,n=new ob){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){xu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Kh.fromBufferAttribute(v,e),f?xu.addScaledVector(Kh,_):xu.addScaledVector(Kh.sub(n),_))}n.add(xu)}return n}raycast(e,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere),mu.applyMatrix4(c),Zr.copy(e.ray).recast(e.near),!(mu.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(mu,Bx)===null||Zr.origin.distanceToSquared(Bx)>(e.far-e.near)**2))&&(Fx.copy(c).invert(),Zr.copy(e.ray).applyMatrix4(Fx),!(a.boundingBox!==null&&Zr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const b=g[E],y=f[b.materialIndex],I=Math.max(b.start,S.start),F=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let N=I,O=F;N<O;N+=3){const L=h.getX(N),B=h.getX(N+1),T=h.getX(N+2);l=Su(this,y,e,a,p,_,v,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let b=E,y=w;b<y;b+=3){const I=h.getX(b),F=h.getX(b+1),N=h.getX(b+2);l=Su(this,f,e,a,p,_,v,I,F,N),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const b=g[E],y=f[b.materialIndex],I=Math.max(b.start,S.start),F=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let N=I,O=F;N<O;N+=3){const L=N,B=N+1,T=N+2;l=Su(this,y,e,a,p,_,v,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let b=E,y=w;b<y;b+=3){const I=b,F=b+1,N=b+2;l=Su(this,f,e,a,p,_,v,I,F,N),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}}}function wR(r,e,n,a,l,c,f,h){let m;if(e.side===ti?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,e.side===Tr,h),m===null)return null;yu.copy(h),yu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(yu);return p<n.near||p>n.far?null:{distance:p,point:yu.clone(),object:r}}function Su(r,e,n,a,l,c,f,h,m,p){r.getVertexPosition(h,gu),r.getVertexPosition(m,vu),r.getVertexPosition(p,_u);const _=wR(r,e,n,a,gu,vu,_u,Hx);if(_){const v=new ae;Hi.getBarycoord(Hx,gu,vu,_u,v),l&&(_.uv=Hi.getInterpolatedAttribute(l,h,m,p,v,new Pt)),c&&(_.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new Pt)),f&&(_.normal=Hi.getInterpolatedAttribute(f,h,m,p,v,new ae),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ae,materialIndex:0};Hi.getNormal(gu,vu,_u,g.normal),_.face=g,_.barycoord=v}return _}class DR extends Wn{constructor(e=null,n=1,a=1,l,c,f,h,m,p=Pn,_=Pn,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new ae,NR=new ae,LR=new ft;class $r{constructor(e=new ae(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,l){return this.normal.set(e,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const l=Qh.subVectors(a,n).cross(NR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const l=e.delta(Qh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||LR.getNormalMatrix(e),l=this.coplanarPoint(Qh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Fl,UR=new Pt(.5,.5),bu=new ae;class lb{constructor(e=new $r,n=new $r,a=new $r,l=new $r,c=new $r,f=new $r){this.planes=[e,n,a,l,c,f]}set(e,n,a,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ia,a=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],w=c[9],b=c[10],y=c[11],I=c[12],F=c[13],N=c[14],O=c[15];if(l[0].setComponents(p-f,S-_,y-E,O-I).normalize(),l[1].setComponents(p+f,S+_,y+E,O+I).normalize(),l[2].setComponents(p+h,S+v,y+w,O+F).normalize(),l[3].setComponents(p-h,S-v,y-w,O-F).normalize(),a)l[4].setComponents(m,g,b,N).normalize(),l[5].setComponents(p-m,S-g,y-b,O-N).normalize();else if(l[4].setComponents(p-m,S-g,y-b,O-N).normalize(),n===ia)l[5].setComponents(p+m,S+g,y+b,O+N).normalize();else if(n===Yu)l[5].setComponents(m,g,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=UR.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(bu.x=l.normal.x>0?e.max.x:e.min.x,bu.y=l.normal.y>0?e.max.y:e.min.y,bu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class OR extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zu=new ae,Ku=new ae,Gx=new dn,Sl=new Hm,Mu=new Fl,Jh=new ae,Vx=new ae;class PR extends qn{constructor(e=new ni,n=new OR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let l=1,c=n.count;l<c;l++)Zu.fromBufferAttribute(n,l-1),Ku.fromBufferAttribute(n,l),a[l]=a[l-1],a[l]+=Zu.distanceTo(Ku);e.setAttribute("lineDistance",new ki(a,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Mu.copy(a.boundingSphere),Mu.applyMatrix4(l),Mu.radius+=c,e.ray.intersectsSphere(Mu)===!1)return;Gx.copy(l).invert(),Sl.copy(e.ray).applyMatrix4(Gx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=S,b=E-1;w<b;w+=p){const y=_.getX(w),I=_.getX(w+1),F=Eu(this,e,Sl,m,y,I,w);F&&n.push(F)}if(this.isLineLoop){const w=_.getX(E-1),b=_.getX(S),y=Eu(this,e,Sl,m,w,b,E-1);y&&n.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let w=S,b=E-1;w<b;w+=p){const y=Eu(this,e,Sl,m,w,w+1,w);y&&n.push(y)}if(this.isLineLoop){const w=Eu(this,e,Sl,m,E-1,S,E-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Eu(r,e,n,a,l,c,f){const h=r.geometry.attributes.position;if(Zu.fromBufferAttribute(h,l),Ku.fromBufferAttribute(h,c),n.distanceSqToSegment(Zu,Ku,Jh,Vx)>a)return;Jh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Jh);if(!(p<e.near||p>e.far))return{distance:p,point:Vx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const kx=new ae,Xx=new ae;class IR extends PR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let l=0,c=n.count;l<c;l+=2)kx.fromBufferAttribute(n,l),Xx.fromBufferAttribute(n,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+kx.distanceTo(Xx);e.setAttribute("lineDistance",new ki(a,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zR extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wx=new dn,dm=new Hm,Tu=new Fl,Au=new ae;class qx extends qn{constructor(e=new ni,n=new zR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Tu.copy(a.boundingSphere),Tu.applyMatrix4(l),Tu.radius+=c,e.ray.intersectsSphere(Tu)===!1)return;Wx.copy(l).invert(),dm.copy(e.ray).applyMatrix4(Wx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,v=a.attributes.position;if(p!==null){const g=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=g,w=S;E<w;E++){const b=p.getX(E);Au.fromBufferAttribute(v,b),Yx(Au,b,m,l,e,n,this)}}else{const g=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=g,w=S;E<w;E++)Au.fromBufferAttribute(v,E),Yx(Au,E,m,l,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Yx(r,e,n,a,l,c,f){const h=dm.distanceSqToPoint(r);if(h<n){const m=new ae;dm.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class cb extends Wn{constructor(e=[],n=cs,a,l,c,f,h,m,p,_){super(e,n,a,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _o extends Wn{constructor(e,n,a=sa,l,c,f,h=Pn,m=Pn,p,_=Fa,v=1){if(_!==Fa&&_!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,l,c,f,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FR extends _o{constructor(e,n=sa,a=cs,l,c,f=Pn,h=Pn,m,p=Fa){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,a,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ub extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends ni{constructor(e=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,a,n,e,f,c,0),E("z","y","x",1,-1,a,n,-e,f,c,1),E("x","z","y",1,1,e,a,n,l,f,2),E("x","z","y",1,-1,e,a,-n,l,f,3),E("x","y","z",1,-1,e,n,a,l,c,4),E("x","y","z",-1,-1,e,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(v,2));function E(w,b,y,I,F,N,O,L,B,T,z){const q=N/B,V=O/T,j=N/2,he=O/2,pe=L/2,$=B+1,U=T+1;let G=0,ee=0;const me=new ae;for(let Ee=0;Ee<U;Ee++){const D=Ee*V-he;for(let k=0;k<$;k++){const Q=k*q-j;me[w]=Q*I,me[b]=D*F,me[y]=pe,p.push(me.x,me.y,me.z),me[w]=0,me[b]=0,me[y]=L>0?1:-1,_.push(me.x,me.y,me.z),v.push(k/B),v.push(1-Ee/T),G+=1}}for(let Ee=0;Ee<T;Ee++)for(let D=0;D<B;D++){const k=g+D+$*Ee,Q=g+D+$*(Ee+1),be=g+(D+1)+$*(Ee+1),Ae=g+(D+1)+$*Ee;m.push(k,Q,Ae),m.push(Q,be,Ae),ee+=6}h.addGroup(S,ee,z),S+=ee,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sf extends ni{constructor(e=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:l};const c=e/2,f=n/2,h=Math.floor(a),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=n/m,S=[],E=[],w=[],b=[];for(let y=0;y<_;y++){const I=y*g-f;for(let F=0;F<p;F++){const N=F*v-c;E.push(N,-I,0),w.push(0,0,1),b.push(F/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let I=0;I<h;I++){const F=I+p*y,N=I+p*(y+1),O=I+1+p*(y+1),L=I+1+p*y;S.push(F,N,L),S.push(N,O,L)}this.setIndex(S),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(w,3)),this.setAttribute("uv",new ki(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const l=r[n][a];if(jx(l))l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=l.clone();else if(Array.isArray(l))if(jx(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[n][a]=c}else e[n][a]=l.slice();else e[n][a]=l}}return e}function Xn(r){const e={};for(let n=0;n<r.length;n++){const a=xo(r[n]);for(const l in a)e[l]=a[l]}return e}function jx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function BR(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function fb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const HR={clone:xo,merge:Xn};var GR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GR,this.fragmentShader=VR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=BR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=n[l.value]||null;break;case"c":this.uniforms[a].value=new Et().setHex(l.value);break;case"v2":this.uniforms[a].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[a].value=new ae().fromArray(l.value);break;case"v4":this.uniforms[a].value=new fn().fromArray(l.value);break;case"m3":this.uniforms[a].value=new ft().fromArray(l.value);break;case"m4":this.uniforms[a].value=new dn().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class kR extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XR extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WR extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ru=new ae,Cu=new So,Qi=new ae;class db extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ru,Cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Cu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Ru,Cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Cu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ae,Zx=new Pt,Kx=new Pt;class wi extends db{constructor(e=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ch*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fm*2*Math.atan(Math.tan(Ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,Zx,Kx),n.subVectors(Kx,Zx)}setViewOffset(e,n,a,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ch*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class hb extends db{constructor(e=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ao=-90,ro=1;class qR extends qn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(ao,ro,e,n);l.layers=this.layers,this.add(l);const c=new wi(ao,ro,e,n);c.layers=this.layers,this.add(c);const f=new wi(ao,ro,e,n);f.layers=this.layers,this.add(f);const h=new wi(ao,ro,e,n);h.layers=this.layers,this.add(h);const m=new wi(ao,ro,e,n);m.layers=this.layers,this.add(m);const p=new wi(ao,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(e===ia)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Yu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(a,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=w,e.setRenderTarget(a,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class YR extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Wm=class Wm{constructor(e,n,a,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,l){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=l,this}};Wm.prototype.isMatrix2=!0;let Qx=Wm;function Jx(r,e,n,a){const l=ZR(a);switch(n){case JS:return r*e;case eb:return r*e/l.components*l.byteLength;case Om:return r*e/l.components*l.byteLength;case us:return r*e*2/l.components*l.byteLength;case Pm:return r*e*2/l.components*l.byteLength;case $S:return r*e*3/l.components*l.byteLength;case Vi:return r*e*4/l.components*l.byteLength;case Im:return r*e*4/l.components*l.byteLength;case Pu:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zu:case Fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ip:case Fp:return Math.max(r,16)*Math.max(e,8)/4;case Pp:case zp:return Math.max(r,8)*Math.max(e,8)/2;case Bp:case Hp:case Vp:case kp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gp:case ku:case Xp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $p:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case em:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case tm:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case nm:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case im:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case am:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rm:case sm:case om:return Math.ceil(r/4)*Math.ceil(e/4)*16;case lm:case cm:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xu:case um:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZR(r){switch(r){case Di:case jS:return{byteLength:1,components:1};case Nl:case ZS:case za:return{byteLength:2,components:1};case Lm:case Um:return{byteLength:2,components:4};case sa:case Nm:case na:return{byteLength:4,components:1};case KS:case QS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dm}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dm);function pb(){let r=null,e=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function KR(r){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var QR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JR=`#ifdef USE_ALPHAHASH
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
#endif`,$R=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iC=`#ifdef USE_AOMAP
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
#endif`,aC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rC=`#ifdef USE_BATCHING
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
#endif`,sC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uC=`#ifdef USE_IRIDESCENCE
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
#endif`,fC=`#ifdef USE_BUMPMAP
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
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_C=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yC=`#define PI 3.141592653589793
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
} // validated`,SC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bC=`vec3 transformedNormal = objectNormal;
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
#endif`,MC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RC="gl_FragColor = linearToOutputTexel( gl_FragColor );",CC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wC=`#ifdef USE_ENVMAP
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
#endif`,DC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NC=`#ifdef USE_ENVMAP
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
#endif`,LC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UC=`#ifdef USE_ENVMAP
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
#endif`,OC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FC=`#ifdef USE_GRADIENTMAP
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
}`,BC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kC=`#ifdef USE_ENVMAP
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
#endif`,XC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jC=`PhysicalMaterial material;
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
#endif`,ZC=`uniform sampler2D dfgLUT;
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
}`,KC=`
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
#endif`,QC=`#if defined( RE_IndirectDiffuse )
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
#endif`,JC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$C=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ow=`#if defined( USE_POINTS_UV )
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
#endif`,lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`#ifdef USE_MORPHTARGETS
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
#endif`,pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yw=`#ifdef USE_NORMALMAP
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
#endif`,Sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Aw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iw=`float getShadowMask() {
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
}`,zw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fw=`#ifdef USE_SKINNING
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
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hw=`#ifdef USE_SKINNING
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
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ww=`#ifdef USE_TRANSMISSION
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
#endif`,qw=`#ifdef USE_TRANSMISSION
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
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
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
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iD=`#include <common>
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
}`,aD=`#if DEPTH_PACKING == 3200
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
}`,rD=`#define DISTANCE
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
}`,sD=`#define DISTANCE
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
}`,oD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cD=`uniform float scale;
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
}`,uD=`uniform vec3 diffuse;
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
}`,fD=`#include <common>
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
}`,dD=`uniform vec3 diffuse;
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
}`,hD=`#define LAMBERT
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
}`,pD=`#define LAMBERT
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
}`,mD=`#define MATCAP
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
}`,gD=`#define MATCAP
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
}`,vD=`#define NORMAL
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
}`,_D=`#define NORMAL
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
}`,xD=`#define PHONG
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
}`,yD=`#define PHONG
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
}`,SD=`#define STANDARD
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
}`,bD=`#define STANDARD
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
}`,MD=`#define TOON
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
}`,ED=`#define TOON
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
}`,TD=`uniform float size;
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
}`,AD=`uniform vec3 diffuse;
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
}`,RD=`#include <common>
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
}`,CD=`uniform vec3 color;
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
}`,wD=`uniform float rotation;
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
}`,DD=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:QR,alphahash_pars_fragment:JR,alphamap_fragment:$R,alphamap_pars_fragment:eC,alphatest_fragment:tC,alphatest_pars_fragment:nC,aomap_fragment:iC,aomap_pars_fragment:aC,batching_pars_vertex:rC,batching_vertex:sC,begin_vertex:oC,beginnormal_vertex:lC,bsdfs:cC,iridescence_fragment:uC,bumpmap_pars_fragment:fC,clipping_planes_fragment:dC,clipping_planes_pars_fragment:hC,clipping_planes_pars_vertex:pC,clipping_planes_vertex:mC,color_fragment:gC,color_pars_fragment:vC,color_pars_vertex:_C,color_vertex:xC,common:yC,cube_uv_reflection_fragment:SC,defaultnormal_vertex:bC,displacementmap_pars_vertex:MC,displacementmap_vertex:EC,emissivemap_fragment:TC,emissivemap_pars_fragment:AC,colorspace_fragment:RC,colorspace_pars_fragment:CC,envmap_fragment:wC,envmap_common_pars_fragment:DC,envmap_pars_fragment:NC,envmap_pars_vertex:LC,envmap_physical_pars_fragment:kC,envmap_vertex:UC,fog_vertex:OC,fog_pars_vertex:PC,fog_fragment:IC,fog_pars_fragment:zC,gradientmap_pars_fragment:FC,lightmap_pars_fragment:BC,lights_lambert_fragment:HC,lights_lambert_pars_fragment:GC,lights_pars_begin:VC,lights_toon_fragment:XC,lights_toon_pars_fragment:WC,lights_phong_fragment:qC,lights_phong_pars_fragment:YC,lights_physical_fragment:jC,lights_physical_pars_fragment:ZC,lights_fragment_begin:KC,lights_fragment_maps:QC,lights_fragment_end:JC,lightprobes_pars_fragment:$C,logdepthbuf_fragment:ew,logdepthbuf_pars_fragment:tw,logdepthbuf_pars_vertex:nw,logdepthbuf_vertex:iw,map_fragment:aw,map_pars_fragment:rw,map_particle_fragment:sw,map_particle_pars_fragment:ow,metalnessmap_fragment:lw,metalnessmap_pars_fragment:cw,morphinstance_vertex:uw,morphcolor_vertex:fw,morphnormal_vertex:dw,morphtarget_pars_vertex:hw,morphtarget_vertex:pw,normal_fragment_begin:mw,normal_fragment_maps:gw,normal_pars_fragment:vw,normal_pars_vertex:_w,normal_vertex:xw,normalmap_pars_fragment:yw,clearcoat_normal_fragment_begin:Sw,clearcoat_normal_fragment_maps:bw,clearcoat_pars_fragment:Mw,iridescence_pars_fragment:Ew,opaque_fragment:Tw,packing:Aw,premultiplied_alpha_fragment:Rw,project_vertex:Cw,dithering_fragment:ww,dithering_pars_fragment:Dw,roughnessmap_fragment:Nw,roughnessmap_pars_fragment:Lw,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Ow,shadowmap_vertex:Pw,shadowmask_pars_fragment:Iw,skinbase_vertex:zw,skinning_pars_vertex:Fw,skinning_vertex:Bw,skinnormal_vertex:Hw,specularmap_fragment:Gw,specularmap_pars_fragment:Vw,tonemapping_fragment:kw,tonemapping_pars_fragment:Xw,transmission_fragment:Ww,transmission_pars_fragment:qw,uv_pars_fragment:Yw,uv_pars_vertex:jw,uv_vertex:Zw,worldpos_vertex:Kw,background_vert:Qw,background_frag:Jw,backgroundCube_vert:$w,backgroundCube_frag:eD,cube_vert:tD,cube_frag:nD,depth_vert:iD,depth_frag:aD,distance_vert:rD,distance_frag:sD,equirect_vert:oD,equirect_frag:lD,linedashed_vert:cD,linedashed_frag:uD,meshbasic_vert:fD,meshbasic_frag:dD,meshlambert_vert:hD,meshlambert_frag:pD,meshmatcap_vert:mD,meshmatcap_frag:gD,meshnormal_vert:vD,meshnormal_frag:_D,meshphong_vert:xD,meshphong_frag:yD,meshphysical_vert:SD,meshphysical_frag:bD,meshtoon_vert:MD,meshtoon_frag:ED,points_vert:TD,points_frag:AD,shadow_vert:RD,shadow_frag:CD,sprite_vert:wD,sprite_frag:DD},He={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ea={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ea.physical={uniforms:Xn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const wu={r:0,b:0,g:0},ND=new dn,mb=new ft;mb.set(-1,0,0,0,1,0,0,0,1);function LD(r,e,n,a,l,c){const f=new Et(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(I){let F=I.isScene===!0?I.background:null;if(F&&F.isTexture){const N=I.backgroundBlurriness>0;F=e.get(F,N)}return F}function E(I){let F=!1;const N=S(I);N===null?b(f,h):N&&N.isColor&&(b(N,1),F=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(I,F){const N=S(F);N&&(N.isCubeTexture||N.mapping===rf)?(p===void 0&&(p=new Ba(new Bl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:xo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ND.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(mb),p.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ba(new sf(2,2),new gi({name:"BackgroundMaterial",uniforms:xo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function b(I,F){I.getRGB(wu,fb(r)),n.buffers.color.setClear(wu.r,wu.g,wu.b,F,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,F=1){f.set(I),h=F,b(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,b(f,h)},render:E,addToRenderList:w,dispose:y}}function UD(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,f=!1;function h(V,j,he,pe,$){let U=!1;const G=v(V,pe,he,j);c!==G&&(c=G,p(c.object)),U=S(V,pe,he,$),U&&E(V,pe,he,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,N(V,j,he,pe),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function _(V){return r.deleteVertexArray(V)}function v(V,j,he,pe){const $=pe.wireframe===!0;let U=a[j.id];U===void 0&&(U={},a[j.id]=U);const G=V.isInstancedMesh===!0?V.id:0;let ee=U[G];ee===void 0&&(ee={},U[G]=ee);let me=ee[he.id];me===void 0&&(me={},ee[he.id]=me);let Ee=me[$];return Ee===void 0&&(Ee=g(m()),me[$]=Ee),Ee}function g(V){const j=[],he=[],pe=[];for(let $=0;$<n;$++)j[$]=0,he[$]=0,pe[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:he,attributeDivisors:pe,object:V,attributes:{},index:null}}function S(V,j,he,pe){const $=c.attributes,U=j.attributes;let G=0;const ee=he.getAttributes();for(const me in ee)if(ee[me].location>=0){const D=$[me];let k=U[me];if(k===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(k=V.instanceColor)),D===void 0||D.attribute!==k||k&&D.data!==k.data)return!0;G++}return c.attributesNum!==G||c.index!==pe}function E(V,j,he,pe){const $={},U=j.attributes;let G=0;const ee=he.getAttributes();for(const me in ee)if(ee[me].location>=0){let D=U[me];D===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const k={};k.attribute=D,D&&D.data&&(k.data=D.data),$[me]=k,G++}c.attributes=$,c.attributesNum=G,c.index=pe}function w(){const V=c.newAttributes;for(let j=0,he=V.length;j<he;j++)V[j]=0}function b(V){y(V,0)}function y(V,j){const he=c.newAttributes,pe=c.enabledAttributes,$=c.attributeDivisors;he[V]=1,pe[V]===0&&(r.enableVertexAttribArray(V),pe[V]=1),$[V]!==j&&(r.vertexAttribDivisor(V,j),$[V]=j)}function I(){const V=c.newAttributes,j=c.enabledAttributes;for(let he=0,pe=j.length;he<pe;he++)j[he]!==V[he]&&(r.disableVertexAttribArray(he),j[he]=0)}function F(V,j,he,pe,$,U,G){G===!0?r.vertexAttribIPointer(V,j,he,$,U):r.vertexAttribPointer(V,j,he,pe,$,U)}function N(V,j,he,pe){w();const $=pe.attributes,U=he.getAttributes(),G=j.defaultAttributeValues;for(const ee in U){const me=U[ee];if(me.location>=0){let Ee=$[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),Ee!==void 0){const D=Ee.normalized,k=Ee.itemSize,Q=e.get(Ee);if(Q===void 0)continue;const be=Q.buffer,Ae=Q.type,K=Q.bytesPerElement,oe=Ae===r.INT||Ae===r.UNSIGNED_INT||Ee.gpuType===Nm;if(Ee.isInterleavedBufferAttribute){const fe=Ee.data,we=fe.stride,Te=Ee.offset;if(fe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<me.locationSize;Ce++)y(me.location+Ce,fe.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<me.locationSize;Ce++)b(me.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Ce=0;Ce<me.locationSize;Ce++)F(me.location+Ce,k/me.locationSize,Ae,D,we*K,(Te+k/me.locationSize*Ce)*K,oe)}else{if(Ee.isInstancedBufferAttribute){for(let fe=0;fe<me.locationSize;fe++)y(me.location+fe,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let fe=0;fe<me.locationSize;fe++)b(me.location+fe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let fe=0;fe<me.locationSize;fe++)F(me.location+fe,k/me.locationSize,Ae,D,k*K,k/me.locationSize*fe*K,oe)}}else if(G!==void 0){const D=G[ee];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(me.location,D);break;case 3:r.vertexAttrib3fv(me.location,D);break;case 4:r.vertexAttrib4fv(me.location,D);break;default:r.vertexAttrib1fv(me.location,D)}}}}I()}function O(){z();for(const V in a){const j=a[V];for(const he in j){const pe=j[he];for(const $ in pe){const U=pe[$];for(const G in U)_(U[G].object),delete U[G];delete pe[$]}}delete a[V]}}function L(V){if(a[V.id]===void 0)return;const j=a[V.id];for(const he in j){const pe=j[he];for(const $ in pe){const U=pe[$];for(const G in U)_(U[G].object),delete U[G];delete pe[$]}}delete a[V.id]}function B(V){for(const j in a){const he=a[j];for(const pe in he){const $=he[pe];if($[V.id]===void 0)continue;const U=$[V.id];for(const G in U)_(U[G].object),delete U[G];delete $[V.id]}}}function T(V){for(const j in a){const he=a[j],pe=V.isInstancedMesh===!0?V.id:0,$=he[pe];if($!==void 0){for(const U in $){const G=$[U];for(const ee in G)_(G[ee].object),delete G[ee];delete $[U]}delete he[pe],Object.keys(he).length===0&&delete a[j]}}}function z(){q(),f=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:b,disableUnusedAttributes:I}}function OD(r,e,n){let a;function l(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];n.update(g,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function PD(r,e,n,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Vi&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Di&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(ot("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:N,maxSamples:O,samples:L}}function ID(r){const e=this;let n=null,a=0,l=!1,c=!1;const f=new $r,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||l;return l=g,a=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,b=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const I=c?0:a,F=I*4;let N=y.clippingState||null;m.value=N,N=_(E,g,F,S);for(let O=0;O!==F;++O)N[O]=n[O];y.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,S,E){const w=v!==null?v.length:0;let b=null;if(w!==0){if(b=m.value,E!==!0||b===null){const y=S+w*4,I=g.matrixWorldInverse;h.getNormalMatrix(I),(b===null||b.length<y)&&(b=new Float32Array(y));for(let F=0,N=S;F!==w;++F,N+=4)f.copy(v[F]).applyMatrix4(I,h),f.normal.toArray(b,N),b[N+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,b}}const Sr=4,$x=[.125,.215,.35,.446,.526,.582],ns=20,zD=256,bl=new hb,ey=new Et;let $h=null,ep=0,tp=0,np=!1;const FD=new ae;class ty{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,l=100,c={}){const{size:f=256,position:h=FD}=c;$h=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ay(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($h,ep,tp),this._renderer.xr.enabled=np,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$h=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:za,format:Vi,colorSpace:Wu,depthBuffer:!1},l=ny(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ny(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BD(c)),this._blurMaterial=GD(c,e,n),this._ggxMaterial=HD(c,e,n)}return l}_compileMaterial(e){const n=new Ba(new ni,e);this._renderer.compile(n,bl)}_sceneToCubeUV(e,n,a,l,c){const m=new wi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(ey),v.toneMapping=aa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new Bl,new ob({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,b=w.material;let y=!1;const I=e.background;I?I.isColor&&(b.color.copy(I),e.background=null,y=!0):(b.color.copy(ey),y=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):N===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const O=this._cubeSize;so(l,N*O,F>2?O:0,O,O),v.setRenderTarget(l),y&&v.render(w,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=I}_textureToCubeUV(e,n){const a=this._renderer,l=e.mapping===cs||e.mapping===vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ay()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iy());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;so(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,bl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,w=this._sizeLods[a],b=3*w*(a>E-Sr?a-E+Sr:0),y=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-n,so(c,b,y,3*w,2*w),l.setRenderTarget(c),l.render(h,bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,so(e,b,y,3*w,2*w),l.setRenderTarget(e),l.render(h,bl)}_blur(e,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,n,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ns-1),w=c/E,b=isFinite(c)?1+Math.floor(_*w):ns;b>ns&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ns}`);const y=[];let I=0;for(let B=0;B<ns;++B){const T=B/w,z=Math.exp(-T*T/2);y.push(z),B===0?I+=z:B<b&&(I+=2*z)}for(let B=0;B<y.length;B++)y[B]=y[B]/I;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=E,g.mipInt.value=F-a;const N=this._sizeLods[l],O=3*N*(l>F-Sr?l-F+Sr:0),L=4*(this._cubeSize-N);so(n,O,L,3*N,2*N),m.setRenderTarget(n),m.render(v,bl)}}function BD(r){const e=[],n=[],a=[];let l=r;const c=r-Sr+1+$x.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-Sr?m=$x[f-r+Sr-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,w=3,b=2,y=1,I=new Float32Array(w*E*S),F=new Float32Array(b*E*S),N=new Float32Array(y*E*S);for(let L=0;L<S;L++){const B=L%3*2/3-1,T=L>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];I.set(z,w*E*L),F.set(g,b*E*L);const q=[L,L,L,L,L,L];N.set(q,y*E*L)}const O=new ni;O.setAttribute("position",new bn(I,w)),O.setAttribute("uv",new bn(F,b)),O.setAttribute("faceIndex",new bn(N,y)),a.push(new Ba(O,null)),l>Sr&&l--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function ny(r,e,n){const a=new ra(r,e,n);return a.texture.mapping=rf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function so(r,e,n,a,l){r.viewport.set(e,n,a,l),r.scissor.set(e,n,a,l)}function HD(r,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:of(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function GD(r,e,n){const a=new Float32Array(ns),l=new ae(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:of(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function iy(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ay(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}class gb extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new cb(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:xo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Ua});c.uniforms.tEquirect.value=n;const f=new Ba(l,c),h=n.minFilter;return n.minFilter===as&&(n.minFilter=Vn),new qR(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,a,l);e.setRenderTarget(c)}}function VD(r){let e=new WeakMap,n=new WeakMap,a=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Th||S===Ah)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new gb(E.height);return w.fromEquirectangularTexture(r,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===Th||S===Ah,w=S===cs||S===vo;if(E||w){let b=n.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new ty(r)),b=E?a.fromEquirectangular(g,b):a.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),b.texture;if(b!==void 0)return b.texture;{const I=g.image;return E&&I&&I.height>0||w&&I&&m(I)?(a===null&&(a=new ty(r)),b=E?a.fromEquirectangular(g):a.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===Th?g.mapping=cs:S===Ah&&(g.mapping=vo),g}function m(g){let S=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=n.get(S);E!==void 0&&(n.delete(S),E.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function kD(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const l=r.getExtension(a);return e[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&ho("WebGLRenderer: "+a+" extension not supported."),l}}}function XD(r,e,n,a){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const I=S.array;w=S.version;for(let F=0,N=I.length;F<N;F+=3){const O=I[F+0],L=I[F+1],B=I[F+2];g.push(O,L,L,B,B,O)}}else{const I=E.array;w=E.version;for(let F=0,N=I.length/3-1;F<N;F+=3){const O=F+0,L=F+1,B=F+2;g.push(O,L,L,B,B,O)}}const b=new(E.count>=65535?sb:rb)(g,1);b.version=w;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function WD(r,e,n){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*f),n.update(g,a,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(a,g,c,v*f,S),n.update(g,a,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,S);let w=0;for(let b=0;b<S;b++)w+=g[b];n.update(w,a,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function qD(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:a}}function YD(r,e,n){const a=new WeakMap,l=new fn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let z=function(){B.dispose(),a.delete(h),h.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),E===!0&&(F=2),w===!0&&(F=3);let N=h.attributes.position.count*F,O=1;N>e.maxTextureSize&&(O=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*O*4*v),B=new nb(L,N,O,v);B.type=na,B.needsUpdate=!0;const T=F*4;for(let q=0;q<v;q++){const V=b[q],j=y[q],he=I[q],pe=N*O*4*q;for(let $=0;$<V.count;$++){const U=$*T;S===!0&&(l.fromBufferAttribute(V,$),L[pe+U+0]=l.x,L[pe+U+1]=l.y,L[pe+U+2]=l.z,L[pe+U+3]=0),E===!0&&(l.fromBufferAttribute(j,$),L[pe+U+4]=l.x,L[pe+U+5]=l.y,L[pe+U+6]=l.z,L[pe+U+7]=0),w===!0&&(l.fromBufferAttribute(he,$),L[pe+U+8]=l.x,L[pe+U+9]=l.y,L[pe+U+10]=l.z,L[pe+U+11]=he.itemSize===4?l.w:1)}}g={count:v,texture:B,size:new Pt(N,O)},a.set(h,g),h.addEventListener("dispose",z)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function jD(r,e,n,a,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:f,dispose:h}}const ZD={[HS]:"LINEAR_TONE_MAPPING",[GS]:"REINHARD_TONE_MAPPING",[VS]:"CINEON_TONE_MAPPING",[kS]:"ACES_FILMIC_TONE_MAPPING",[WS]:"AGX_TONE_MAPPING",[qS]:"NEUTRAL_TONE_MAPPING",[XS]:"CUSTOM_TONE_MAPPING"};function KD(r,e,n,a,l,c){const f=new ra(e,n,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new _o(e,n):void 0}),h=new ra(e,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new kR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ba(m,p),v=new hb(-1,1,1,-1,0,1);let g=null,S=null,E=!1,w,b=null,y=[],I=!1;this.setSize=function(F,N){f.setSize(F,N),h.setSize(F,N);for(let O=0;O<y.length;O++){const L=y[O];L.setSize&&L.setSize(F,N)}},this.setEffects=function(F){y=F,I=y.length>0&&y[0].isRenderPass===!0;const N=f.width,O=f.height;for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(N,O)}},this.begin=function(F,N){if(E||F.toneMapping===aa&&y.length===0)return!1;if(b=N,N!==null){const O=N.width,L=N.height;(f.width!==O||f.height!==L)&&this.setSize(O,L)}return I===!1&&F.setRenderTarget(f),w=F.toneMapping,F.toneMapping=aa,!0},this.hasRenderPass=function(){return I},this.end=function(F,N){F.toneMapping=w,E=!0;let O=f,L=h;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(F,L,O,N),T.needsSwap!==!1)){const z=O;O=L,L=z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},At.getTransfer(g)===kt&&(p.defines.SRGB_TRANSFER="");const B=ZD[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(b),F.render(_,v),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const vb=new Wn,hm=new _o(1,1),_b=new nb,xb=new gR,yb=new cb,ry=[],sy=[],oy=new Float32Array(16),ly=new Float32Array(9),cy=new Float32Array(4);function Mo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const l=e*n;let c=ry[l];if(c===void 0&&(c=new Float32Array(l),ry[l]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=n,r[f].toArray(c,h)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function An(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function lf(r,e){let n=sy[e];n===void 0&&(n=new Int32Array(e),sy[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function QD(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function JD(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2fv(this.addr,e),An(n,e)}}function $D(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;r.uniform3fv(this.addr,e),An(n,e)}}function eN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4fv(this.addr,e),An(n,e)}}function tN(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;cy.set(a),r.uniformMatrix2fv(this.addr,!1,cy),An(n,a)}}function nN(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;ly.set(a),r.uniformMatrix3fv(this.addr,!1,ly),An(n,a)}}function iN(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;oy.set(a),r.uniformMatrix4fv(this.addr,!1,oy),An(n,a)}}function aN(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function rN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2iv(this.addr,e),An(n,e)}}function sN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;r.uniform3iv(this.addr,e),An(n,e)}}function oN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4iv(this.addr,e),An(n,e)}}function lN(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function cN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2uiv(this.addr,e),An(n,e)}}function uN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;r.uniform3uiv(this.addr,e),An(n,e)}}function fN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4uiv(this.addr,e),An(n,e)}}function dN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(hm.compareFunction=n.isReversedDepthBuffer()?Fm:zm,c=hm):c=vb,n.setTexture2D(e||c,l)}function hN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(e||xb,l)}function pN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(e||yb,l)}function mN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(e||_b,l)}function gN(r){switch(r){case 5126:return QD;case 35664:return JD;case 35665:return $D;case 35666:return eN;case 35674:return tN;case 35675:return nN;case 35676:return iN;case 5124:case 35670:return aN;case 35667:case 35671:return rN;case 35668:case 35672:return sN;case 35669:case 35673:return oN;case 5125:return lN;case 36294:return cN;case 36295:return uN;case 36296:return fN;case 35678:case 36198:case 36298:case 36306:case 35682:return dN;case 35679:case 36299:case 36307:return hN;case 35680:case 36300:case 36308:case 36293:return pN;case 36289:case 36303:case 36311:case 36292:return mN}}function vN(r,e){r.uniform1fv(this.addr,e)}function _N(r,e){const n=Mo(e,this.size,2);r.uniform2fv(this.addr,n)}function xN(r,e){const n=Mo(e,this.size,3);r.uniform3fv(this.addr,n)}function yN(r,e){const n=Mo(e,this.size,4);r.uniform4fv(this.addr,n)}function SN(r,e){const n=Mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function bN(r,e){const n=Mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function MN(r,e){const n=Mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function EN(r,e){r.uniform1iv(this.addr,e)}function TN(r,e){r.uniform2iv(this.addr,e)}function AN(r,e){r.uniform3iv(this.addr,e)}function RN(r,e){r.uniform4iv(this.addr,e)}function CN(r,e){r.uniform1uiv(this.addr,e)}function wN(r,e){r.uniform2uiv(this.addr,e)}function DN(r,e){r.uniform3uiv(this.addr,e)}function NN(r,e){r.uniform4uiv(this.addr,e)}function LN(r,e,n){const a=this.cache,l=e.length,c=lf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=hm:f=vb;for(let h=0;h!==l;++h)n.setTexture2D(e[h]||f,c[h])}function UN(r,e,n){const a=this.cache,l=e.length,c=lf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||xb,c[f])}function ON(r,e,n){const a=this.cache,l=e.length,c=lf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||yb,c[f])}function PN(r,e,n){const a=this.cache,l=e.length,c=lf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||_b,c[f])}function IN(r){switch(r){case 5126:return vN;case 35664:return _N;case 35665:return xN;case 35666:return yN;case 35674:return SN;case 35675:return bN;case 35676:return MN;case 5124:case 35670:return EN;case 35667:case 35671:return TN;case 35668:case 35672:return AN;case 35669:case 35673:return RN;case 5125:return CN;case 36294:return wN;case 36295:return DN;case 36296:return NN;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return UN;case 35680:case 36300:case 36308:case 36293:return ON;case 36289:case 36303:case 36311:case 36292:return PN}}class zN{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=gN(n.type)}}class FN{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IN(n.type)}}class BN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,n[h.id],a)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function uy(r,e){r.seq.push(e),r.map[e.id]=e}function HN(r,e,n){const a=r.name,l=a.length;for(ip.lastIndex=0;;){const c=ip.exec(a),f=ip.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){uy(n,p===void 0?new zN(h,r,e):new FN(h,r,e));break}else{let v=n.map[h];v===void 0&&(v=new BN(h),uy(n,v)),n=v}}}class Bu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=e.getActiveUniform(n,f),m=e.getUniformLocation(n,h.name);HN(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(e,a,l)}setOptional(e,n,a){const l=n[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,n,a,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,n){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&a.push(f)}return a}}function fy(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const GN=37297;let VN=0;function kN(r,e){const n=r.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const dy=new ft;function XN(r){At._getMatrix(dy,At.workingColorSpace,r);const e=`mat3( ${dy.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(r)){case qu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hy(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+kN(r.getShaderSource(e),h)}else return c}function WN(r,e){const n=XN(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qN={[HS]:"Linear",[GS]:"Reinhard",[VS]:"Cineon",[kS]:"ACESFilmic",[WS]:"AgX",[qS]:"Neutral",[XS]:"Custom"};function YN(r,e){const n=qN[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Du=new ae;function jN(){At.getLuminanceCoefficients(Du);const r=Du.x.toFixed(4),e=Du.y.toFixed(4),n=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZN(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function KN(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function QN(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return n}function Al(r){return r!==""}function py(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function my(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JN=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(r){return r.replace(JN,eL)}const $N=new Map;function eL(r,e){let n=_t[e];if(n===void 0){const a=$N.get(e);if(a!==void 0)n=_t[a],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pm(n)}const tL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gy(r){return r.replace(tL,nL)}function nL(r,e,n,a){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vy(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iL={[Ou]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function aL(r){return iL[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rL={[cs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[rf]:"ENVMAP_TYPE_CUBE_UV"};function sL(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rL[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const oL={[vo]:"ENVMAP_MODE_REFRACTION"};function lL(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oL[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cL={[BS]:"ENVMAP_BLENDING_MULTIPLY",[Z3]:"ENVMAP_BLENDING_MIX",[K3]:"ENVMAP_BLENDING_ADD"};function uL(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cL[r.combine]||"ENVMAP_BLENDING_NONE"}function fL(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function dL(r,e,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=aL(n),p=sL(n),_=lL(n),v=uL(n),g=fL(n),S=ZN(n),E=KN(c),w=l.createProgram();let b,y,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Al).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Al).join(`
`),y.length>0&&(y+=`
`)):(b=[vy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),y=[vy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?_t.tonemapping_pars_fragment:"",n.toneMapping!==aa?YN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,WN("linearToOutputTexel",n.outputColorSpace),jN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),f=pm(f),f=py(f,n),f=my(f,n),h=pm(h),h=py(h,n),h=my(h,n),f=gy(f),h=gy(h),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",n.glslVersion===Ex?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ex?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=I+b+f,N=I+y+h,O=fy(l,l.VERTEX_SHADER,F),L=fy(l,l.FRAGMENT_SHADER,N);l.attachShader(w,O),l.attachShader(w,L),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(V){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",he=l.getShaderInfoLog(O)||"",pe=l.getShaderInfoLog(L)||"",$=j.trim(),U=he.trim(),G=pe.trim();let ee=!0,me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,O,L);else{const Ee=hy(l,O,"vertex"),D=hy(l,L,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+Ee+`
`+D)}else $!==""?ot("WebGLProgram: Program Info Log:",$):(U===""||G==="")&&(me=!1);me&&(V.diagnostics={runnable:ee,programLog:$,vertexShader:{log:U,prefix:b},fragmentShader:{log:G,prefix:y}})}l.deleteShader(O),l.deleteShader(L),T=new Bu(l,w),z=QN(l,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(w,GN)),q},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VN++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let hL=0;class pL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const l=this._getShaderCacheForMaterial(e);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new mL(e),n.set(e,a)),a}}class mL{constructor(e){this.id=hL++,this.code=e,this.usedTimes=0}}function gL(r){return r===us||r===ku||r===Xu}function vL(r,e,n,a,l,c){const f=new ib,h=new pL,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,z,q,V,j,he){const pe=V.fog,$=j.geometry,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||U,G),me=ee&&ee.mapping===rf?ee.image.height:null,Ee=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const D=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,k=D!==void 0?D.length:0;let Q=0;$.morphAttributes.position!==void 0&&(Q=1),$.morphAttributes.normal!==void 0&&(Q=2),$.morphAttributes.color!==void 0&&(Q=3);let be,Ae,K,oe;if(Ee){const qe=ea[Ee];be=qe.vertexShader,Ae=qe.fragmentShader}else{be=T.vertexShader,Ae=T.fragmentShader;const qe=h.getVertexShaderStage(T),an=h.getFragmentShaderStage(T);h.update(T,qe,an),K=qe.id,oe=an.id}const fe=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Te=j.isInstancedMesh===!0,Ce=j.isBatchedMesh===!0,mt=!!T.map,lt=!!T.matcap,gt=!!ee,dt=!!T.aoMap,$e=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,jt=!!T.normalMap,Jt=!!T.displacementMap,nn=!!T.emissiveMap,Qt=!!T.metalnessMap,ln=!!T.roughnessMap,Z=T.anisotropy>0,Xt=T.clearcoat>0,Ut=T.dispersion>0,P=T.iridescence>0,M=T.sheen>0,te=T.transmission>0,le=Z&&!!T.anisotropyMap,ve=Xt&&!!T.clearcoatMap,Ne=Xt&&!!T.clearcoatNormalMap,Pe=Xt&&!!T.clearcoatRoughnessMap,ge=P&&!!T.iridescenceMap,_e=P&&!!T.iridescenceThicknessMap,Ue=M&&!!T.sheenColorMap,Ve=M&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,Ie=!!T.specularColorMap,et=!!T.specularIntensityMap,tt=te&&!!T.transmissionMap,ct=te&&!!T.thicknessMap,W=!!T.gradientMap,Le=!!T.alphaMap,ye=T.alphaTest>0,Oe=!!T.alphaHash,Ge=!!T.extensions;let Re=aa;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Re=r.toneMapping);const Ke={shaderID:Ee,shaderType:T.type,shaderName:T.name,vertexShader:be,fragmentShader:Ae,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&j._colorsTexture!==null,instancing:Te,instancingColor:Te&&j.instanceColor!==null,instancingMorph:Te&&j.morphTexture!==null,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:mt,matcap:lt,envMap:gt,envMapMode:gt&&ee.mapping,envMapCubeUVHeight:me,aoMap:dt,lightMap:$e,bumpMap:Ct,normalMap:jt,displacementMap:Jt,emissiveMap:nn,normalMapObjectSpace:jt&&T.normalMapType===$3,normalMapTangentSpace:jt&&T.normalMapType===Sx,packedNormalMap:jt&&T.normalMapType===Sx&&gL(T.normalMap.format),metalnessMap:Qt,roughnessMap:ln,anisotropy:Z,anisotropyMap:le,clearcoat:Xt,clearcoatMap:ve,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Pe,dispersion:Ut,iridescence:P,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:M,sheenColorMap:Ue,sheenRoughnessMap:Ve,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:et,transmission:te,transmissionMap:tt,thicknessMap:ct,gradientMap:W,opaque:T.transparent===!1&&T.blending===fo&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:ye,alphaHash:Oe,combine:T.combine,mapUv:mt&&E(T.map.channel),aoMapUv:dt&&E(T.aoMap.channel),lightMapUv:$e&&E(T.lightMap.channel),bumpMapUv:Ct&&E(T.bumpMap.channel),normalMapUv:jt&&E(T.normalMap.channel),displacementMapUv:Jt&&E(T.displacementMap.channel),emissiveMapUv:nn&&E(T.emissiveMap.channel),metalnessMapUv:Qt&&E(T.metalnessMap.channel),roughnessMapUv:ln&&E(T.roughnessMap.channel),anisotropyMapUv:le&&E(T.anisotropyMap.channel),clearcoatMapUv:ve&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(T.sheenRoughnessMap.channel),specularMapUv:Fe&&E(T.specularMap.channel),specularColorMapUv:Ie&&E(T.specularColorMap.channel),specularIntensityMapUv:et&&E(T.specularIntensityMap.channel),transmissionMapUv:tt&&E(T.transmissionMap.channel),thicknessMapUv:ct&&E(T.thicknessMap.channel),alphaMapUv:Le&&E(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(jt||Z),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!$.attributes.uv&&(mt||Le),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Q,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:mt&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:nn&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Na,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function b(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)z.push(q),z.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(z,T),I(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function I(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),z.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const z=S[T.type];let q;if(z){const V=ea[z];q=HR.clone(V.uniforms)}else q=T.uniforms;return q}function N(T,z){let q=_.get(z);return q!==void 0?++q.usedTimes:(q=new dL(r,z,T,l),p.push(q),_.set(z,q)),q}function O(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:w,getProgramCacheKey:b,getUniforms:F,acquireProgram:N,releaseProgram:O,releaseShaderCache:L,programs:p,dispose:B}}function _L(){let r=new WeakMap;function e(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:l,dispose:c}}function xL(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function _y(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xy(){const r=[];let e=0;const n=[],a=[],l=[];function c(){e=0,n.length=0,a.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,w,b,y){let I=r[e];return I===void 0?(I={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:b,group:y},r[e]=I):(I.id=g.id,I.object=g,I.geometry=S,I.material=E,I.materialVariant=f(g),I.groupOrder=w,I.renderOrder=g.renderOrder,I.z=b,I.group=y),e++,I}function m(g,S,E,w,b,y){const I=h(g,S,E,w,b,y);E.transmission>0?a.push(I):E.transparent===!0?l.push(I):n.push(I)}function p(g,S,E,w,b,y){const I=h(g,S,E,w,b,y);E.transmission>0?a.unshift(I):E.transparent===!0?l.unshift(I):n.unshift(I)}function _(g,S,E){n.length>1&&n.sort(g||xL),a.length>1&&a.sort(S||_y),l.length>1&&l.sort(S||_y),E&&(n.reverse(),a.reverse(),l.reverse())}function v(){for(let g=e,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function yL(){let r=new WeakMap;function e(a,l){const c=r.get(a);let f;return c===void 0?(f=new xy,r.set(a,[f])):l>=c.length?(f=new xy,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:e,dispose:n}}function SL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ae,color:new Et};break;case"SpotLight":n={position:new ae,direction:new ae,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ae,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ae,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=n,n}}}function bL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let ML=0;function EL(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TL(r){const e=new SL,n=bL(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ae);const l=new ae,c=new dn,f=new dn;function h(p){let _=0,v=0,g=0;for(let z=0;z<9;z++)a.probe[z].set(0,0,0);let S=0,E=0,w=0,b=0,y=0,I=0,F=0,N=0,O=0,L=0,B=0;p.sort(EL);for(let z=0,q=p.length;z<q;z++){const V=p[z],j=V.color,he=V.intensity,pe=V.distance;let $=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===us?$=V.shadow.map.texture:$=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=j.r*he,v+=j.g*he,g+=j.b*he;else if(V.isLightProbe){for(let U=0;U<9;U++)a.probe[U].addScaledVector(V.sh.coefficients[U],he);B++}else if(V.isDirectionalLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ee=n.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,a.directionalShadow[S]=ee,a.directionalShadowMap[S]=$,a.directionalShadowMatrix[S]=V.shadow.matrix,I++}a.directional[S]=U,S++}else if(V.isSpotLight){const U=e.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(j).multiplyScalar(he),U.distance=pe,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,a.spot[w]=U;const G=V.shadow;if(V.map&&(a.spotLightMap[O]=V.map,O++,G.updateMatrices(V),V.castShadow&&L++),a.spotLightMatrix[w]=G.matrix,V.castShadow){const ee=n.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,a.spotShadow[w]=ee,a.spotShadowMap[w]=$,N++}w++}else if(V.isRectAreaLight){const U=e.get(V);U.color.copy(j).multiplyScalar(he),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),a.rectArea[b]=U,b++}else if(V.isPointLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const G=V.shadow,ee=n.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,a.pointShadow[E]=ee,a.pointShadowMap[E]=$,a.pointShadowMatrix[E]=V.shadow.matrix,F++}a.point[E]=U,E++}else if(V.isHemisphereLight){const U=e.get(V);U.skyColor.copy(V.color).multiplyScalar(he),U.groundColor.copy(V.groundColor).multiplyScalar(he),a.hemi[y]=U,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==b||T.hemiLength!==y||T.numDirectionalShadows!==I||T.numPointShadows!==F||T.numSpotShadows!==N||T.numSpotMaps!==O||T.numLightProbes!==B)&&(a.directional.length=S,a.spot.length=w,a.rectArea.length=b,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=F,a.pointShadowMap.length=F,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=F,a.spotLightMatrix.length=N+O-L,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=B,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=b,T.hemiLength=y,T.numDirectionalShadows=I,T.numPointShadows=F,T.numSpotShadows=N,T.numSpotMaps=O,T.numLightProbes=B,a.version=ML++)}function m(p,_){let v=0,g=0,S=0,E=0,w=0;const b=_.matrixWorldInverse;for(let y=0,I=p.length;y<I;y++){const F=p[y];if(F.isDirectionalLight){const N=a.directional[v];N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),v++}else if(F.isSpotLight){const N=a.spot[S];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),S++}else if(F.isRectAreaLight){const N=a.rectArea[E];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),f.identity(),c.copy(F.matrixWorld),c.premultiply(b),f.extractRotation(c),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(F.isPointLight){const N=a.point[g];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){const N=a.hemi[w];N.direction.setFromMatrixPosition(F.matrixWorld),N.direction.transformDirection(b),w++}}}return{setup:h,setupView:m,state:a}}function yy(r){const e=new TL(r),n=[],a=[],l=[];function c(g){v.camera=g,n.length=0,a.length=0,l.length=0}function f(g){n.push(g)}function h(g){a.push(g)}function m(g){l.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function AL(r){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new yy(r),e.set(l,[h])):c>=f.length?(h=new yy(r),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const RL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CL=`uniform sampler2D shadow_pass;
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
}`,wL=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],DL=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Sy=new dn,Ml=new ae,ap=new ae;function NL(r,e,n){let a=new lb;const l=new Pt,c=new Pt,f=new fn,h=new XR,m=new WR,p={},_=n.maxTextureSize,v={[Tr]:ti,[ti]:Tr,[Na]:Na},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:RL,fragmentShader:CL}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ba(E,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let y=this.type;this.render=function(L,B,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===D3&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ou);const z=r.getRenderTarget(),q=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ua),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const he=y!==this.type;he&&B.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach($=>$.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,$=L.length;pe<$;pe++){const U=L[pe],G=U.shadow;if(G===void 0){ot("WebGLShadowMap:",U,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();l.multiply(ee),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y));const me=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=me,G.map===null||he===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Tl){if(U.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ra(l.x,l.y,{format:us,type:za,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),G.map.texture.name=U.name+".shadowMap",G.map.depthTexture=new _o(l.x,l.y,na),G.map.depthTexture.name=U.name+".shadowMapDepth",G.map.depthTexture.format=Fa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn}else U.isPointLight?(G.map=new gb(l.x),G.map.depthTexture=new FR(l.x,sa)):(G.map=new ra(l.x,l.y),G.map.depthTexture=new _o(l.x,l.y,sa)),G.map.depthTexture.name=U.name+".shadowMap",G.map.depthTexture.format=Fa,this.type===Ou?(G.map.depthTexture.compareFunction=me?Fm:zm,G.map.depthTexture.minFilter=Vn,G.map.depthTexture.magFilter=Vn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn);G.camera.updateProjectionMatrix()}const Ee=G.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Ee;D++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,D),r.clear();else{D===0&&(r.setRenderTarget(G.map),r.clear());const k=G.getViewport(D);f.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),j.viewport(f)}if(U.isPointLight){const k=G.camera,Q=G.matrix,be=U.distance||k.far;be!==k.far&&(k.far=be,k.updateProjectionMatrix()),Ml.setFromMatrixPosition(U.matrixWorld),k.position.copy(Ml),ap.copy(k.position),ap.add(wL[D]),k.up.copy(DL[D]),k.lookAt(ap),k.updateMatrixWorld(),Q.makeTranslation(-Ml.x,-Ml.y,-Ml.z),Sy.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Sy,k.coordinateSystem,k.reversedDepth)}else G.updateMatrices(U);a=G.getFrustum(),N(B,T,G.camera,U,this.type)}G.isPointLightShadow!==!0&&this.type===Tl&&I(G,T),G.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(z,q,V)};function I(L,B){const T=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ra(l.x,l.y,{format:us,type:za})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,w,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(B,null,T,S,w,null)}function F(L,B,T,z){let q=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)q=V;else if(q=T.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=q.uuid,he=B.uuid;let pe=p[j];pe===void 0&&(pe={},p[j]=pe);let $=pe[he];$===void 0&&($=q.clone(),pe[he]=$,B.addEventListener("dispose",O)),q=$}if(q.visible=B.visible,q.wireframe=B.wireframe,z===Tl?q.side=B.shadowSide!==null?B.shadowSide:B.side:q.side=B.shadowSide!==null?B.shadowSide:v[B.side],q.alphaMap=B.alphaMap,q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,q.map=B.map,q.clipShadows=B.clipShadows,q.clippingPlanes=B.clippingPlanes,q.clipIntersection=B.clipIntersection,q.displacementMap=B.displacementMap,q.displacementScale=B.displacementScale,q.displacementBias=B.displacementBias,q.wireframeLinewidth=B.wireframeLinewidth,q.linewidth=B.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const j=r.properties.get(q);j.light=T}return q}function N(L,B,T,z,q){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Tl)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const he=e.update(L),pe=L.material;if(Array.isArray(pe)){const $=he.groups;for(let U=0,G=$.length;U<G;U++){const ee=$[U],me=pe[ee.materialIndex];if(me&&me.visible){const Ee=F(L,me,z,q);L.onBeforeShadow(r,L,B,T,he,Ee,ee),r.renderBufferDirect(T,null,he,Ee,L,ee),L.onAfterShadow(r,L,B,T,he,Ee,ee)}}}else if(pe.visible){const $=F(L,pe,z,q);L.onBeforeShadow(r,L,B,T,he,$,null),r.renderBufferDirect(T,null,he,$,L,null),L.onAfterShadow(r,L,B,T,he,$,null)}}const j=L.children;for(let he=0,pe=j.length;he<pe;he++)N(j[he],B,T,z,q)}function O(L){L.target.removeEventListener("dispose",O);for(const T in p){const z=p[T],q=L.target.uuid;q in z&&(z[q].dispose(),delete z[q])}}}function LL(r,e){function n(){let W=!1;const Le=new fn;let ye=null;const Oe=new fn(0,0,0,0);return{setMask:function(Ge){ye!==Ge&&!W&&(r.colorMask(Ge,Ge,Ge,Ge),ye=Ge)},setLocked:function(Ge){W=Ge},setClear:function(Ge,Re,Ke,qe,an){an===!0&&(Ge*=qe,Re*=qe,Ke*=qe),Le.set(Ge,Re,Ke,qe),Oe.equals(Le)===!1&&(r.clearColor(Ge,Re,Ke,qe),Oe.copy(Le))},reset:function(){W=!1,ye=null,Oe.set(-1,0,0,0)}}}function a(){let W=!1,Le=!1,ye=null,Oe=null,Ge=null;return{setReversed:function(Re){if(Le!==Re){const Ke=e.get("EXT_clip_control");Re?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Le=Re;const qe=Ge;Ge=null,this.setClear(qe)}},getReversed:function(){return Le},setTest:function(Re){Re?fe(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Re){ye!==Re&&!W&&(r.depthMask(Re),ye=Re)},setFunc:function(Re){if(Le&&(Re=cR[Re]),Oe!==Re){switch(Re){case Ap:r.depthFunc(r.NEVER);break;case Rp:r.depthFunc(r.ALWAYS);break;case Cp:r.depthFunc(r.LESS);break;case go:r.depthFunc(r.LEQUAL);break;case wp:r.depthFunc(r.EQUAL);break;case Dp:r.depthFunc(r.GEQUAL);break;case Np:r.depthFunc(r.GREATER);break;case Lp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Ge!==Re&&(Ge=Re,Le&&(Re=1-Re),r.clearDepth(Re))},reset:function(){W=!1,ye=null,Oe=null,Ge=null,Le=!1}}}function l(){let W=!1,Le=null,ye=null,Oe=null,Ge=null,Re=null,Ke=null,qe=null,an=null;return{setTest:function(zt){W||(zt?fe(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(zt){Le!==zt&&!W&&(r.stencilMask(zt),Le=zt)},setFunc:function(zt,ii,ai){(ye!==zt||Oe!==ii||Ge!==ai)&&(r.stencilFunc(zt,ii,ai),ye=zt,Oe=ii,Ge=ai)},setOp:function(zt,ii,ai){(Re!==zt||Ke!==ii||qe!==ai)&&(r.stencilOp(zt,ii,ai),Re=zt,Ke=ii,qe=ai)},setLocked:function(zt){W=zt},setClear:function(zt){an!==zt&&(r.clearStencil(zt),an=zt)},reset:function(){W=!1,Le=null,ye=null,Oe=null,Ge=null,Re=null,Ke=null,qe=null,an=null}}}const c=new n,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],w=null,b=!1,y=null,I=null,F=null,N=null,O=null,L=null,B=null,T=new Et(0,0,0),z=0,q=!1,V=null,j=null,he=null,pe=null,$=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const me=r.getParameter(r.VERSION);me.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(me)[1]),G=ee>=1):me.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),G=ee>=2);let Ee=null,D={};const k=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),be=new fn().fromArray(k),Ae=new fn().fromArray(Q);function K(W,Le,ye,Oe){const Ge=new Uint8Array(4),Re=r.createTexture();r.bindTexture(W,Re),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<ye;Ke++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(Le+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Re}const oe={};oe[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),fe(r.DEPTH_TEST),f.setFunc(go),Ct(!1),jt(vx),fe(r.CULL_FACE),dt(Ua);function fe(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function we(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Te(W,Le){return g[W]!==Le?(r.bindFramebuffer(W,Le),g[W]=Le,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ce(W,Le){let ye=E,Oe=!1;if(W){ye=S.get(Le),ye===void 0&&(ye=[],S.set(Le,ye));const Ge=W.textures;if(ye.length!==Ge.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Ke=Ge.length;Re<Ke;Re++)ye[Re]=r.COLOR_ATTACHMENT0+Re;ye.length=Ge.length,Oe=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(ye)}function mt(W){return w!==W?(r.useProgram(W),w=W,!0):!1}const lt={[ts]:r.FUNC_ADD,[L3]:r.FUNC_SUBTRACT,[U3]:r.FUNC_REVERSE_SUBTRACT};lt[O3]=r.MIN,lt[P3]=r.MAX;const gt={[I3]:r.ZERO,[z3]:r.ONE,[F3]:r.SRC_COLOR,[Ep]:r.SRC_ALPHA,[X3]:r.SRC_ALPHA_SATURATE,[V3]:r.DST_COLOR,[H3]:r.DST_ALPHA,[B3]:r.ONE_MINUS_SRC_COLOR,[Tp]:r.ONE_MINUS_SRC_ALPHA,[k3]:r.ONE_MINUS_DST_COLOR,[G3]:r.ONE_MINUS_DST_ALPHA,[W3]:r.CONSTANT_COLOR,[q3]:r.ONE_MINUS_CONSTANT_COLOR,[Y3]:r.CONSTANT_ALPHA,[j3]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(W,Le,ye,Oe,Ge,Re,Ke,qe,an,zt){if(W===Ua){b===!0&&(we(r.BLEND),b=!1);return}if(b===!1&&(fe(r.BLEND),b=!0),W!==N3){if(W!==y||zt!==q){if((I!==ts||O!==ts)&&(r.blendEquation(r.FUNC_ADD),I=ts,O=ts),zt)switch(W){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _x:r.blendFunc(r.ONE,r.ONE);break;case xx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _x:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xx:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yx:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}F=null,N=null,L=null,B=null,T.set(0,0,0),z=0,y=W,q=zt}return}Ge=Ge||Le,Re=Re||ye,Ke=Ke||Oe,(Le!==I||Ge!==O)&&(r.blendEquationSeparate(lt[Le],lt[Ge]),I=Le,O=Ge),(ye!==F||Oe!==N||Re!==L||Ke!==B)&&(r.blendFuncSeparate(gt[ye],gt[Oe],gt[Re],gt[Ke]),F=ye,N=Oe,L=Re,B=Ke),(qe.equals(T)===!1||an!==z)&&(r.blendColor(qe.r,qe.g,qe.b,an),T.copy(qe),z=an),y=W,q=!1}function $e(W,Le){W.side===Na?we(r.CULL_FACE):fe(r.CULL_FACE);let ye=W.side===ti;Le&&(ye=!ye),Ct(ye),W.blending===fo&&W.transparent===!1?dt(Ua):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Oe=W.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(W){V!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),V=W)}function jt(W){W!==C3?(fe(r.CULL_FACE),W!==j&&(W===vx?r.cullFace(r.BACK):W===w3?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),j=W}function Jt(W){W!==he&&(G&&r.lineWidth(W),he=W)}function nn(W,Le,ye){W?(fe(r.POLYGON_OFFSET_FILL),(pe!==Le||$!==ye)&&(pe=Le,$=ye,f.getReversed()&&(Le=-Le),r.polygonOffset(Le,ye))):we(r.POLYGON_OFFSET_FILL)}function Qt(W){W?fe(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function ln(W){W===void 0&&(W=r.TEXTURE0+U-1),Ee!==W&&(r.activeTexture(W),Ee=W)}function Z(W,Le,ye){ye===void 0&&(Ee===null?ye=r.TEXTURE0+U-1:ye=Ee);let Oe=D[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},D[ye]=Oe),(Oe.type!==W||Oe.texture!==Le)&&(Ee!==ye&&(r.activeTexture(ye),Ee=ye),r.bindTexture(W,Le||oe[W]),Oe.type=W,Oe.texture=Le)}function Xt(){const W=D[Ee];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ut(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function M(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function te(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ne(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Pe(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ge(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function _e(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ue(W){return v[W]!==void 0?v[W]:r.getParameter(W)}function Ve(W,Le){v[W]!==Le&&(r.pixelStorei(W,Le),v[W]=Le)}function Fe(W){be.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function Ie(W){Ae.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function et(W,Le){let ye=p.get(Le);ye===void 0&&(ye=new WeakMap,p.set(Le,ye));let Oe=ye.get(W);Oe===void 0&&(Oe=r.getUniformBlockIndex(Le,W.name),ye.set(W,Oe))}function tt(W,Le){const Oe=p.get(Le).get(W);m.get(Le)!==Oe&&(r.uniformBlockBinding(Le,Oe,W.__bindingPointIndex),m.set(Le,Oe))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},Ee=null,D={},g={},S=new WeakMap,E=[],w=null,b=!1,y=null,I=null,F=null,N=null,O=null,L=null,B=null,T=new Et(0,0,0),z=0,q=!1,V=null,j=null,he=null,pe=null,$=null,be.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:fe,disable:we,bindFramebuffer:Te,drawBuffers:Ce,useProgram:mt,setBlending:dt,setMaterial:$e,setFlipSided:Ct,setCullFace:jt,setLineWidth:Jt,setPolygonOffset:nn,setScissorTest:Qt,activeTexture:ln,bindTexture:Z,unbindTexture:Xt,compressedTexImage2D:Ut,compressedTexImage3D:P,texImage2D:ge,texImage3D:_e,pixelStorei:Ve,getParameter:Ue,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:te,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:Fe,viewport:Ie,reset:ct}}function UL(r,e,n,a,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,M){return E?new OffscreenCanvas(P,M):ju("canvas")}function b(P,M,te){let le=1;const ve=Ut(P);if((ve.width>te||ve.height>te)&&(le=te/Math.max(ve.width,ve.height)),le<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ne=Math.floor(le*ve.width),Pe=Math.floor(le*ve.height);g===void 0&&(g=w(Ne,Pe));const ge=M?w(Ne,Pe):g;return ge.width=Ne,ge.height=Pe,ge.getContext("2d").drawImage(P,0,0,Ne,Pe),ot("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ne+"x"+Pe+")."),ge}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function y(P){return P.generateMipmaps}function I(P){r.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,M,te,le,ve,Ne=!1){if(P!==null){if(r[P]!==void 0)return r[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;le&&(Pe=e.get("EXT_texture_norm16"),Pe||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=M;if(M===r.RED&&(te===r.FLOAT&&(ge=r.R32F),te===r.HALF_FLOAT&&(ge=r.R16F),te===r.UNSIGNED_BYTE&&(ge=r.R8),te===r.UNSIGNED_SHORT&&Pe&&(ge=Pe.R16_EXT),te===r.SHORT&&Pe&&(ge=Pe.R16_SNORM_EXT)),M===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(ge=r.R8UI),te===r.UNSIGNED_SHORT&&(ge=r.R16UI),te===r.UNSIGNED_INT&&(ge=r.R32UI),te===r.BYTE&&(ge=r.R8I),te===r.SHORT&&(ge=r.R16I),te===r.INT&&(ge=r.R32I)),M===r.RG&&(te===r.FLOAT&&(ge=r.RG32F),te===r.HALF_FLOAT&&(ge=r.RG16F),te===r.UNSIGNED_BYTE&&(ge=r.RG8),te===r.UNSIGNED_SHORT&&Pe&&(ge=Pe.RG16_EXT),te===r.SHORT&&Pe&&(ge=Pe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(ge=r.RG8UI),te===r.UNSIGNED_SHORT&&(ge=r.RG16UI),te===r.UNSIGNED_INT&&(ge=r.RG32UI),te===r.BYTE&&(ge=r.RG8I),te===r.SHORT&&(ge=r.RG16I),te===r.INT&&(ge=r.RG32I)),M===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(ge=r.RGB8UI),te===r.UNSIGNED_SHORT&&(ge=r.RGB16UI),te===r.UNSIGNED_INT&&(ge=r.RGB32UI),te===r.BYTE&&(ge=r.RGB8I),te===r.SHORT&&(ge=r.RGB16I),te===r.INT&&(ge=r.RGB32I)),M===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(ge=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(ge=r.RGBA16UI),te===r.UNSIGNED_INT&&(ge=r.RGBA32UI),te===r.BYTE&&(ge=r.RGBA8I),te===r.SHORT&&(ge=r.RGBA16I),te===r.INT&&(ge=r.RGBA32I)),M===r.RGB&&(te===r.UNSIGNED_SHORT&&Pe&&(ge=Pe.RGB16_EXT),te===r.SHORT&&Pe&&(ge=Pe.RGB16_SNORM_EXT),te===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(ge=r.R11F_G11F_B10F)),M===r.RGBA){const _e=Ne?qu:At.getTransfer(ve);te===r.FLOAT&&(ge=r.RGBA32F),te===r.HALF_FLOAT&&(ge=r.RGBA16F),te===r.UNSIGNED_BYTE&&(ge=_e===kt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT&&Pe&&(ge=Pe.RGBA16_EXT),te===r.SHORT&&Pe&&(ge=Pe.RGBA16_SNORM_EXT),te===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function O(P,M){let te;return P?M===null||M===sa||M===Ll?te=r.DEPTH24_STENCIL8:M===na?te=r.DEPTH32F_STENCIL8:M===Nl&&(te=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===Ll?te=r.DEPTH_COMPONENT24:M===na?te=r.DEPTH_COMPONENT32F:M===Nl&&(te=r.DEPTH_COMPONENT16),te}function L(P,M){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function B(P){const M=P.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(P){const M=P.target;M.removeEventListener("dispose",T),V(M)}function z(P){const M=a.get(P);if(M.__webglInit===void 0)return;const te=P.source,le=S.get(te);if(le){const ve=le[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&q(P),Object.keys(le).length===0&&S.delete(te)}a.remove(P)}function q(P){const M=a.get(P);r.deleteTexture(M.__webglTexture);const te=P.source,le=S.get(te);delete le[M.__cacheKey],f.memory.textures--}function V(P){const M=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let ve=0;ve<M.__webglFramebuffer[le].length;ve++)r.deleteFramebuffer(M.__webglFramebuffer[le][ve]);else r.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)r.deleteFramebuffer(M.__webglFramebuffer[le]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const te=P.textures;for(let le=0,ve=te.length;le<ve;le++){const Ne=a.get(te[le]);Ne.__webglTexture&&(r.deleteTexture(Ne.__webglTexture),f.memory.textures--),a.remove(te[le])}a.remove(P)}let j=0;function he(){j=0}function pe(){return j}function $(P){j=P}function U(){const P=j;return P>=l.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),j+=1,P}function G(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ee(P,M){const te=a.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&te.__version!==P.version){const le=P.image;if(le===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{we(te,P,M);return}}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+M)}function me(P,M){const te=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){we(te,P,M);return}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+M)}function Ee(P,M){const te=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){we(te,P,M);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+M)}function D(P,M){const te=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&te.__version!==P.version){Te(te,P,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+M)}const k={[Up]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[Op]:r.MIRRORED_REPEAT},Q={[Pn]:r.NEAREST,[Q3]:r.NEAREST_MIPMAP_NEAREST,[au]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Rh]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},be={[eR]:r.NEVER,[rR]:r.ALWAYS,[tR]:r.LESS,[zm]:r.LEQUAL,[nR]:r.EQUAL,[Fm]:r.GEQUAL,[iR]:r.GREATER,[aR]:r.NOTEQUAL};function Ae(P,M){if(M.type===na&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Rh||M.magFilter===au||M.magFilter===as||M.minFilter===Vn||M.minFilter===Rh||M.minFilter===au||M.minFilter===as)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,k[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,k[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,k[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Q[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==au&&M.minFilter!==as||M.type===na&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function K(P,M){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",B));const le=M.source;let ve=S.get(le);ve===void 0&&(ve={},S.set(le,ve));const Ne=G(M);if(Ne!==P.__cacheKey){ve[Ne]===void 0&&(ve[Ne]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,te=!0),ve[Ne].usedTimes++;const Pe=ve[P.__cacheKey];Pe!==void 0&&(ve[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&q(M)),P.__cacheKey=Ne,P.__webglTexture=ve[Ne].texture}return te}function oe(P,M,te){return Math.floor(Math.floor(P/te)/M)}function fe(P,M,te,le){const Ne=P.updateRanges;if(Ne.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,te,le,M.data);else{Ne.sort((Ve,Fe)=>Ve.start-Fe.start);let Pe=0;for(let Ve=1;Ve<Ne.length;Ve++){const Fe=Ne[Pe],Ie=Ne[Ve],et=Fe.start+Fe.count,tt=oe(Ie.start,M.width,4),ct=oe(Fe.start,M.width,4);Ie.start<=et+1&&tt===ct&&oe(Ie.start+Ie.count-1,M.width,4)===tt?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Pe,Ne[Pe]=Ie)}Ne.length=Pe+1;const ge=n.getParameter(r.UNPACK_ROW_LENGTH),_e=n.getParameter(r.UNPACK_SKIP_PIXELS),Ue=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ve=0,Fe=Ne.length;Ve<Fe;Ve++){const Ie=Ne[Ve],et=Math.floor(Ie.start/4),tt=Math.ceil(Ie.count/4),ct=et%M.width,W=Math.floor(et/M.width),Le=tt,ye=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,ct,W,Le,ye,te,le,M.data)}P.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ge),n.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(r.UNPACK_SKIP_ROWS,Ue)}}function we(P,M,te){let le=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=r.TEXTURE_3D);const ve=K(P,M),Ne=M.source;n.bindTexture(le,P.__webglTexture,r.TEXTURE0+te);const Pe=a.get(Ne);if(Ne.version!==Pe.__version||ve===!0){if(n.activeTexture(r.TEXTURE0+te),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=At.getPrimaries(At.workingColorSpace),Oe=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),Ge=M.colorSpace===yr||ye===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=b(M.image,!1,l.maxTextureSize);_e=Xt(M,_e);const Ue=c.convert(M.format,M.colorSpace),Ve=c.convert(M.type);let Fe=N(M.internalFormat,Ue,Ve,M.normalized,M.colorSpace,M.isVideoTexture);Ae(le,M);let Ie;const et=M.mipmaps,tt=M.isVideoTexture!==!0,ct=Pe.__version===void 0||ve===!0,W=Ne.dataReady,Le=L(M,_e);if(M.isDepthTexture)Fe=O(M.format===rs,M.type),ct&&(tt?n.texStorage2D(r.TEXTURE_2D,1,Fe,_e.width,_e.height):n.texImage2D(r.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ue,Ve,null));else if(M.isDataTexture)if(et.length>0){tt&&ct&&n.texStorage2D(r.TEXTURE_2D,Le,Fe,et[0].width,et[0].height);for(let ye=0,Oe=et.length;ye<Oe;ye++)Ie=et[ye],tt?W&&n.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Ue,Ve,Ie.data):n.texImage2D(r.TEXTURE_2D,ye,Fe,Ie.width,Ie.height,0,Ue,Ve,Ie.data);M.generateMipmaps=!1}else tt?(ct&&n.texStorage2D(r.TEXTURE_2D,Le,Fe,_e.width,_e.height),W&&fe(M,_e,Ue,Ve)):n.texImage2D(r.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ue,Ve,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&ct&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Fe,et[0].width,et[0].height,_e.depth);for(let ye=0,Oe=et.length;ye<Oe;ye++)if(Ie=et[ye],M.format!==Vi)if(Ue!==null)if(tt){if(W)if(M.layerUpdates.size>0){const Ge=Jx(Ie.width,Ie.height,M.format,M.type);for(const Re of M.layerUpdates){const Ke=Ie.data.subarray(Re*Ge/Ie.data.BYTES_PER_ELEMENT,(Re+1)*Ge/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Re,Ie.width,Ie.height,1,Ue,Ke)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,_e.depth,Ue,Ie.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Fe,Ie.width,Ie.height,_e.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?W&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,_e.depth,Ue,Ve,Ie.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ye,Fe,Ie.width,Ie.height,_e.depth,0,Ue,Ve,Ie.data)}else{tt&&ct&&n.texStorage2D(r.TEXTURE_2D,Le,Fe,et[0].width,et[0].height);for(let ye=0,Oe=et.length;ye<Oe;ye++)Ie=et[ye],M.format!==Vi?Ue!==null?tt?W&&n.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Ue,Ie.data):n.compressedTexImage2D(r.TEXTURE_2D,ye,Fe,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?W&&n.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Ue,Ve,Ie.data):n.texImage2D(r.TEXTURE_2D,ye,Fe,Ie.width,Ie.height,0,Ue,Ve,Ie.data)}else if(M.isDataArrayTexture)if(tt){if(ct&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Fe,_e.width,_e.height,_e.depth),W)if(M.layerUpdates.size>0){const ye=Jx(_e.width,_e.height,M.format,M.type);for(const Oe of M.layerUpdates){const Ge=_e.data.subarray(Oe*ye/_e.data.BYTES_PER_ELEMENT,(Oe+1)*ye/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,_e.width,_e.height,1,Ue,Ve,Ge)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ue,Ve,_e.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ue,Ve,_e.data);else if(M.isData3DTexture)tt?(ct&&n.texStorage3D(r.TEXTURE_3D,Le,Fe,_e.width,_e.height,_e.depth),W&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ue,Ve,_e.data)):n.texImage3D(r.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ue,Ve,_e.data);else if(M.isFramebufferTexture){if(ct)if(tt)n.texStorage2D(r.TEXTURE_2D,Le,Fe,_e.width,_e.height);else{let ye=_e.width,Oe=_e.height;for(let Ge=0;Ge<Le;Ge++)n.texImage2D(r.TEXTURE_2D,Ge,Fe,ye,Oe,0,Ue,Ve,null),ye>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),_e.parentNode!==ye){ye.appendChild(_e),v.add(M),ye.onpaint=Oe=>{const Ge=Oe.changedElements;for(const Re of v)Ge.includes(Re.image)&&(Re.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,_e);else{const Ge=r.RGBA,Re=r.RGBA,Ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Re,Ke,_e)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(et.length>0){if(tt&&ct){const ye=Ut(et[0]);n.texStorage2D(r.TEXTURE_2D,Le,Fe,ye.width,ye.height)}for(let ye=0,Oe=et.length;ye<Oe;ye++)Ie=et[ye],tt?W&&n.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue,Ve,Ie):n.texImage2D(r.TEXTURE_2D,ye,Fe,Ue,Ve,Ie);M.generateMipmaps=!1}else if(tt){if(ct){const ye=Ut(_e);n.texStorage2D(r.TEXTURE_2D,Le,Fe,ye.width,ye.height)}W&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Ve,_e)}else n.texImage2D(r.TEXTURE_2D,0,Fe,Ue,Ve,_e);y(M)&&I(le),Pe.__version=Ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Te(P,M,te){if(M.image.length!==6)return;const le=K(P,M),ve=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+te);const Ne=a.get(ve);if(ve.version!==Ne.__version||le===!0){n.activeTexture(r.TEXTURE0+te);const Pe=At.getPrimaries(At.workingColorSpace),ge=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),_e=M.colorSpace===yr||Pe===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Ve=M.image[0]&&M.image[0].isDataTexture,Fe=[];for(let Re=0;Re<6;Re++)!Ue&&!Ve?Fe[Re]=b(M.image[Re],!0,l.maxCubemapSize):Fe[Re]=Ve?M.image[Re].image:M.image[Re],Fe[Re]=Xt(M,Fe[Re]);const Ie=Fe[0],et=c.convert(M.format,M.colorSpace),tt=c.convert(M.type),ct=N(M.internalFormat,et,tt,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,Le=Ne.__version===void 0||le===!0,ye=ve.dataReady;let Oe=L(M,Ie);Ae(r.TEXTURE_CUBE_MAP,M);let Ge;if(Ue){W&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ct,Ie.width,Ie.height);for(let Re=0;Re<6;Re++){Ge=Fe[Re].mipmaps;for(let Ke=0;Ke<Ge.length;Ke++){const qe=Ge[Ke];M.format!==Vi?et!==null?W?ye&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke,0,0,qe.width,qe.height,et,qe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke,ct,qe.width,qe.height,0,qe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke,0,0,qe.width,qe.height,et,tt,qe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke,ct,qe.width,qe.height,0,et,tt,qe.data)}}}else{if(Ge=M.mipmaps,W&&Le){Ge.length>0&&Oe++;const Re=Ut(Fe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ct,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Ve){W?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Fe[Re].width,Fe[Re].height,et,tt,Fe[Re].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,Fe[Re].width,Fe[Re].height,0,et,tt,Fe[Re].data);for(let Ke=0;Ke<Ge.length;Ke++){const an=Ge[Ke].image[Re].image;W?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke+1,0,0,an.width,an.height,et,tt,an.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke+1,ct,an.width,an.height,0,et,tt,an.data)}}else{W?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,et,tt,Fe[Re]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,et,tt,Fe[Re]);for(let Ke=0;Ke<Ge.length;Ke++){const qe=Ge[Ke];W?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke+1,0,0,et,tt,qe.image[Re]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ke+1,ct,et,tt,qe.image[Re])}}}y(M)&&I(r.TEXTURE_CUBE_MAP),Ne.__version=ve.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ce(P,M,te,le,ve,Ne){const Pe=c.convert(te.format,te.colorSpace),ge=c.convert(te.type),_e=N(te.internalFormat,Pe,ge,te.normalized,te.colorSpace),Ue=a.get(M),Ve=a.get(te);if(Ve.__renderTarget=M,!Ue.__hasExternalTextures){const Fe=Math.max(1,M.width>>Ne),Ie=Math.max(1,M.height>>Ne);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?n.texImage3D(ve,Ne,_e,Fe,Ie,M.depth,0,Pe,ge,null):n.texImage2D(ve,Ne,_e,Fe,Ie,0,Pe,ge,null)}n.bindFramebuffer(r.FRAMEBUFFER,P),ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ve,Ve.__webglTexture,0,Qt(M)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,ve,Ve.__webglTexture,Ne),n.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(P,M,te){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const le=M.depthTexture,ve=le&&le.isDepthTexture?le.type:null,Ne=O(M.stencilBuffer,ve),Pe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),Ne,M.width,M.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),Ne,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,P)}else{const le=M.textures;for(let ve=0;ve<le.length;ve++){const Ne=le[ve],Pe=c.convert(Ne.format,Ne.colorSpace),ge=c.convert(Ne.type),_e=N(Ne.internalFormat,Pe,ge,Ne.normalized,Ne.colorSpace);ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),_e,M.width,M.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),_e,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,_e,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(P,M,te){const le=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=a.get(M.depthTexture);if(ve.__renderTarget=M,(!ve.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ue=c.convert(M.depthTexture.format),Ve=c.convert(M.depthTexture.type);let Fe;M.depthTexture.format===Fa?Fe=r.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(Fe=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,M.width,M.height,0,Ue,Ve,null)}}else ee(M.depthTexture,0);const Ne=ve.__webglTexture,Pe=Qt(M),ge=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+te:r.TEXTURE_2D,_e=M.depthTexture.format===rs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fa)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ge,Ne,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,_e,ge,Ne,0);else if(M.depthTexture.format===rs)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ge,Ne,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,_e,ge,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(P){const M=a.get(P),te=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const le=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const ve=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",ve)};le.addEventListener("dispose",ve),M.__depthDisposeCallback=ve}M.__boundDepthTexture=le}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(te)for(let le=0;le<6;le++)lt(M.__webglFramebuffer[le],P,le);else{const le=P.texture.mipmaps;le&&le.length>0?lt(M.__webglFramebuffer[0],P,0):lt(M.__webglFramebuffer,P,0)}else if(te){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=r.createRenderbuffer(),mt(M.__webglDepthbuffer[le],P,!1);else{const ve=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=M.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ne)}}else{const le=P.texture.mipmaps;if(le&&le.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),mt(M.__webglDepthbuffer,P,!1);else{const ve=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ne)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(P,M,te){const le=a.get(P);M!==void 0&&Ce(le.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&gt(P)}function $e(P){const M=P.texture,te=a.get(P),le=a.get(M);P.addEventListener("dispose",T);const ve=P.textures,Ne=P.isWebGLCubeRenderTarget===!0,Pe=ve.length>1;if(Pe||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=M.version,f.memory.textures++),Ne){te.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer[ge]=[];for(let _e=0;_e<M.mipmaps.length;_e++)te.__webglFramebuffer[ge][_e]=r.createFramebuffer()}else te.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)te.__webglFramebuffer[ge]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ge=0,_e=ve.length;ge<_e;ge++){const Ue=a.get(ve[ge]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&ln(P)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ge=0;ge<ve.length;ge++){const _e=ve[ge];te.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[ge]);const Ue=c.convert(_e.format,_e.colorSpace),Ve=c.convert(_e.type),Fe=N(_e.internalFormat,Ue,Ve,_e.normalized,_e.colorSpace,P.isXRRenderTarget===!0),Ie=Qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Fe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,te.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(te.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ne){n.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ce(te.__webglFramebuffer[ge][_e],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Ce(te.__webglFramebuffer[ge],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(M)&&I(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let ge=0,_e=ve.length;ge<_e;ge++){const Ue=ve[ge],Ve=a.get(Ue);let Fe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Fe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Fe,Ve.__webglTexture),Ae(Fe,Ue),Ce(te.__webglFramebuffer,P,Ue,r.COLOR_ATTACHMENT0+ge,Fe,0),y(Ue)&&I(Fe)}n.unbindTexture()}else{let ge=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ge,le.__webglTexture),Ae(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ce(te.__webglFramebuffer[_e],P,M,r.COLOR_ATTACHMENT0,ge,_e);else Ce(te.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,ge,0);y(M)&&I(ge),n.unbindTexture()}P.depthBuffer&&gt(P)}function Ct(P){const M=P.textures;for(let te=0,le=M.length;te<le;te++){const ve=M[te];if(y(ve)){const Ne=F(P),Pe=a.get(ve).__webglTexture;n.bindTexture(Ne,Pe),I(Ne),n.unbindTexture()}}}const jt=[],Jt=[];function nn(P){if(P.samples>0){if(ln(P)===!1){const M=P.textures,te=P.width,le=P.height;let ve=r.COLOR_BUFFER_BIT;const Ne=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=a.get(P),ge=M.length>1;if(ge)for(let Ue=0;Ue<M.length;Ue++)n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const _e=P.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Ve=a.get(M[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,te,le,0,0,te,le,ve,r.NEAREST),m===!0&&(jt.length=0,Jt.length=0,jt.push(r.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(jt.push(Ne),Jt.push(Ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Jt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Ue=0;Ue<M.length;Ue++){n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const Ve=a.get(M[Ue]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,Ve,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Qt(P){return Math.min(l.maxSamples,P.samples)}function ln(P){const M=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(P){const M=f.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function Xt(P,M){const te=P.colorSpace,le=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Wu&&te!==yr&&(At.getTransfer(te)===kt?(le!==Vi||ve!==Di)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",te)),M}function Ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=he,this.getTextureUnits=pe,this.setTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=me,this.setTexture3D=Ee,this.setTextureCube=D,this.rebindTextures=dt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function OL(r,e){function n(a,l=yr){let c;const f=At.getTransfer(l);if(a===Di)return r.UNSIGNED_BYTE;if(a===Lm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Um)return r.UNSIGNED_SHORT_5_5_5_1;if(a===KS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===QS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===jS)return r.BYTE;if(a===ZS)return r.SHORT;if(a===Nl)return r.UNSIGNED_SHORT;if(a===Nm)return r.INT;if(a===sa)return r.UNSIGNED_INT;if(a===na)return r.FLOAT;if(a===za)return r.HALF_FLOAT;if(a===JS)return r.ALPHA;if(a===$S)return r.RGB;if(a===Vi)return r.RGBA;if(a===Fa)return r.DEPTH_COMPONENT;if(a===rs)return r.DEPTH_STENCIL;if(a===eb)return r.RED;if(a===Om)return r.RED_INTEGER;if(a===us)return r.RG;if(a===Pm)return r.RG_INTEGER;if(a===Im)return r.RGBA_INTEGER;if(a===Pu||a===Iu||a===zu||a===Fu)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Pp||a===Ip||a===zp||a===Fp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Pp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ip)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===zp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Bp||a===Hp||a===Gp||a===Vp||a===kp||a===ku||a===Xp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Bp||a===Hp)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Gp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Vp)return c.COMPRESSED_R11_EAC;if(a===kp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===ku)return c.COMPRESSED_RG11_EAC;if(a===Xp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Wp||a===qp||a===Yp||a===jp||a===Zp||a===Kp||a===Qp||a===Jp||a===$p||a===em||a===tm||a===nm||a===im||a===am)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Wp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$p)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===em)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===tm)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===nm)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===im)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===am)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rm||a===sm||a===om)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===rm)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===sm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===om)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===lm||a===cm||a===Xu||a===um)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===lm)return c.COMPRESSED_RED_RGTC1_EXT;if(a===cm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Xu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===um)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ll?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const PL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IL=`
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

}`;class zL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new ub(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new gi({vertexShader:PL,fragmentShader:IL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ba(new sf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FL extends ds{constructor(e,n){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",b=new zL,y={},I=n.getContextAttributes();let F=null,N=null;const O=[],L=[],B=new Pt;let T=null;const z=new wi;z.viewport=new fn;const q=new wi;q.viewport=new fn;const V=[z,q],j=new YR;let he=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=O[K];return oe===void 0&&(oe=new Ph,O[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=O[K];return oe===void 0&&(oe=new Ph,O[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=O[K];return oe===void 0&&(oe=new Ph,O[K]=oe),oe.getHandSpace()};function $(K){const oe=L.indexOf(K.inputSource);if(oe===-1)return;const fe=O[oe];fe!==void 0&&(fe.update(K.inputSource,K.frame,p||f),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",G);for(let K=0;K<O.length;K++){const oe=L[K];oe!==null&&(L[K]=null,O[K].disconnect(oe))}he=null,pe=null,b.reset();for(const K in y)delete y[K];e.setRenderTarget(F),S=null,g=null,v=null,l=null,N=null,Ae.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,a.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,a.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",U),l.addEventListener("inputsourceschange",G),I.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,we=null,Te=null;I.depth&&(Te=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=I.stencil?rs:Fa,we=I.stencil?Ll:sa);const Ce={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Ce),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ra(g.textureWidth,g.textureHeight,{format:Vi,type:Di,depthTexture:new _o(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,fe),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ra(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(K){for(let oe=0;oe<K.removed.length;oe++){const fe=K.removed[oe],we=L.indexOf(fe);we>=0&&(L[we]=null,O[we].disconnect(fe))}for(let oe=0;oe<K.added.length;oe++){const fe=K.added[oe];let we=L.indexOf(fe);if(we===-1){for(let Ce=0;Ce<O.length;Ce++)if(Ce>=L.length){L.push(fe),we=Ce;break}else if(L[Ce]===null){L[Ce]=fe,we=Ce;break}if(we===-1)break}const Te=O[we];Te&&Te.connect(fe)}}const ee=new ae,me=new ae;function Ee(K,oe,fe){ee.setFromMatrixPosition(oe.matrixWorld),me.setFromMatrixPosition(fe.matrixWorld);const we=ee.distanceTo(me),Te=oe.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,mt=Te[14]/(Te[10]-1),lt=Te[14]/(Te[10]+1),gt=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],$e=(Te[8]-1)/Te[0],Ct=(Ce[8]+1)/Ce[0],jt=mt*$e,Jt=mt*Ct,nn=we/(-$e+Ct),Qt=nn*-$e;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qt),K.translateZ(nn),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ln=mt+nn,Z=lt+nn,Xt=jt-Qt,Ut=Jt+(we-Qt),P=gt*lt/Z*ln,M=dt*lt/Z*ln;K.projectionMatrix.makePerspective(Xt,Ut,P,M,ln,Z),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function D(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let oe=K.near,fe=K.far;b.texture!==null&&(b.depthNear>0&&(oe=b.depthNear),b.depthFar>0&&(fe=b.depthFar)),j.near=q.near=z.near=oe,j.far=q.far=z.far=fe,(he!==j.near||pe!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),he=j.near,pe=j.far),j.layers.mask=K.layers.mask|6,z.layers.mask=j.layers.mask&-5,q.layers.mask=j.layers.mask&-3;const we=K.parent,Te=j.cameras;D(j,we);for(let Ce=0;Ce<Te.length;Ce++)D(Te[Ce],we);Te.length===2?Ee(j,z,q):j.projectionMatrix.copy(z.projectionMatrix),k(K,j,we)};function k(K,oe,fe){fe===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fm*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(K){m=K,g!==null&&(g.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(j)},this.getCameraTexture=function(K){return y[K]};let Q=null;function be(K,oe){if(_=oe.getViewerPose(p||f),E=oe,_!==null){const fe=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let we=!1;fe.length!==j.cameras.length&&(j.cameras.length=0,we=!0);for(let lt=0;lt<fe.length;lt++){const gt=fe[lt];let dt=null;if(S!==null)dt=S.getViewport(gt);else{const Ct=v.getViewSubImage(g,gt);dt=Ct.viewport,lt===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(N))}let $e=V[lt];$e===void 0&&($e=new wi,$e.layers.enable(lt),$e.viewport=new fn,V[lt]=$e),$e.matrix.fromArray(gt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(gt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(dt.x,dt.y,dt.width,dt.height),lt===0&&(j.matrix.copy($e.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),we===!0&&j.cameras.push($e)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=a.getBinding();const lt=v.getDepthInformation(fe[0]);lt&&lt.isValid&&lt.texture&&b.init(lt,l.renderState)}if(Te&&Te.includes("camera-access")&&w){e.state.unbindTexture(),v=a.getBinding();for(let lt=0;lt<fe.length;lt++){const gt=fe[lt].camera;if(gt){let dt=y[gt];dt||(dt=new ub,y[gt]=dt);const $e=v.getCameraImage(gt);dt.sourceTexture=$e}}}}for(let fe=0;fe<O.length;fe++){const we=L[fe],Te=O[fe];we!==null&&Te!==void 0&&Te.update(we,oe,p||f)}Q&&Q(K,oe),oe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:oe}),E=null}const Ae=new pb;Ae.setAnimationLoop(be),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}}const BL=new dn,Sb=new ft;Sb.set(-1,0,0,0,1,0,0,0,1);function HL(r,e){function n(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function a(b,y){y.color.getRGB(b.fogColor.value,fb(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,I,F,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,N)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),w(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,I,F):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,n(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ti&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,n(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ti&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,n(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,n(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const I=e.get(y),F=I.envMap,N=I.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(BL.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(Sb),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,I,F){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*I,b.scale.value=F*.5,y.map&&(b.map.value=y.map,n(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,I){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=I.texture,b.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function w(b,y){const I=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(I.matrixWorld),b.nearDistance.value=I.shadow.camera.near,b.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function GL(r,e,n,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,O){const L=O.program;a.uniformBlockBinding(N,L)}function p(N,O){let L=l[N.id];L===void 0&&(b(N),L=_(N),l[N.id]=L,N.addEventListener("dispose",I));const B=O.program;a.updateUBOMapping(N,B);const T=e.render.frame;c[N.id]!==T&&(g(N),c[N.id]=T)}function _(N){const O=v();N.__bindingPointIndex=O;const L=r.createBuffer(),B=N.__size,T=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,L),L}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const O=l[N.id],L=N.uniforms,B=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,z=L.length;T<z;T++){const q=L[T];if(Array.isArray(q))for(let V=0,j=q.length;V<j;V++)S(q[V],T,V,B);else S(q,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,O,L,B){if(w(N,O,L,B)===!0){const T=N.__offset,z=N.value;if(Array.isArray(z)){let q=0;for(let V=0;V<z.length;V++){const j=z[V],he=y(j);E(j,N.__data,q),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(q+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(z,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,N.__data)}}function E(N,O,L){typeof N=="number"||typeof N=="boolean"?O[0]=N:N.isMatrix3?(O[0]=N.elements[0],O[1]=N.elements[1],O[2]=N.elements[2],O[3]=0,O[4]=N.elements[3],O[5]=N.elements[4],O[6]=N.elements[5],O[7]=0,O[8]=N.elements[6],O[9]=N.elements[7],O[10]=N.elements[8],O[11]=0):ArrayBuffer.isView(N)?O.set(new N.constructor(N.buffer,N.byteOffset,O.length)):N.toArray(O,L)}function w(N,O,L,B){const T=N.value,z=O+"_"+L;if(B[z]===void 0)return typeof T=="number"||typeof T=="boolean"?B[z]=T:ArrayBuffer.isView(T)?B[z]=T.slice():B[z]=T.clone(),!0;{const q=B[z];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return B[z]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function b(N){const O=N.uniforms;let L=0;const B=16;for(let z=0,q=O.length;z<q;z++){const V=Array.isArray(O[z])?O[z]:[O[z]];for(let j=0,he=V.length;j<he;j++){const pe=V[j],$=Array.isArray(pe.value)?pe.value:[pe.value];for(let U=0,G=$.length;U<G;U++){const ee=$[U],me=y(ee),Ee=L%B,D=Ee%me.boundary,k=Ee+D;L+=D,k!==0&&B-k<me.storage&&(L+=B-k),pe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=L,L+=me.storage}}}const T=L%B;return T>0&&(L+=B-T),N.__size=L,N.__cache={},this}function y(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(O.boundary=16,O.storage=N.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",N),O}function I(N){const O=N.target;O.removeEventListener("dispose",I);const L=f.indexOf(O.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function F(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:F}}const VL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function kL(){return Ji===null&&(Ji=new DR(VL,16,16,us,za),Ji.name="DFG_LUT",Ji.minFilter=Vn,Ji.magFilter=Vn,Ji.wrapS=La,Ji.wrapT=La,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class XL{constructor(e={}){const{canvas:n=oR(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Di}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const w=S,b=new Set([Im,Pm,Om]),y=new Set([Di,sa,Nl,Ll,Lm,Um]),I=new Uint32Array(4),F=new Int32Array(4),N=new ae;let O=null,L=null;const B=[],T=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let V=!1,j=null,he=null,pe=null,$=null;this._outputColorSpace=Ci;let U=0,G=0,ee=null,me=-1,Ee=null;const D=new fn,k=new fn;let Q=null;const be=new Et(0);let Ae=0,K=n.width,oe=n.height,fe=1,we=null,Te=null;const Ce=new fn(0,0,K,oe),mt=new fn(0,0,K,oe);let lt=!1;const gt=new lb;let dt=!1,$e=!1;const Ct=new dn,jt=new ae,Jt=new fn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ln(){return ee===null?fe:1}let Z=a;function Xt(A,Y){return n.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dm}`),n.addEventListener("webglcontextlost",an,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",ii,!1),Z===null){const Y="webgl2";if(Z=Xt(Y,A),Z===null)throw Xt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let Ut,P,M,te,le,ve,Ne,Pe,ge,_e,Ue,Ve,Fe,Ie,et,tt,ct,W,Le,ye,Oe,Ge,Re;function Ke(){Ut=new kD(Z),Ut.init(),Oe=new OL(Z,Ut),P=new PD(Z,Ut,e,Oe),M=new LL(Z,Ut),P.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),he=Z.createFramebuffer(),pe=Z.createFramebuffer(),$=Z.createFramebuffer(),te=new qD(Z),le=new _L,ve=new UL(Z,Ut,M,le,P,Oe,te),Ne=new VD(q),Pe=new KR(Z),Ge=new UD(Z,Pe),ge=new XD(Z,Pe,te,Ge),_e=new jD(Z,ge,Pe,Ge,te),W=new YD(Z,P,ve),et=new ID(le),Ue=new vL(q,Ne,Ut,P,Ge,et),Ve=new HL(q,le),Fe=new yL,Ie=new AL(Ut),ct=new LD(q,Ne,M,_e,E,m),tt=new NL(q,_e,P),Re=new GL(Z,te,P,M),Le=new OD(Z,Ut,te),ye=new WD(Z,Ut,te),te.programs=Ue.programs,q.capabilities=P,q.extensions=Ut,q.properties=le,q.renderLists=Fe,q.shadowMap=tt,q.state=M,q.info=te}Ke(),w!==Di&&(z=new KD(w,n.width,n.height,h,l,c));const qe=new FL(q,Z);this.xr=qe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(K,oe,!1))},this.getSize=function(A){return A.set(K,oe)},this.setSize=function(A,Y,ce=!0){if(qe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,oe=Y,n.width=Math.floor(A*fe),n.height=Math.floor(Y*fe),ce===!0&&(n.style.width=A+"px",n.style.height=Y+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(K*fe,oe*fe).floor()},this.setDrawingBufferSize=function(A,Y,ce){K=A,oe=Y,fe=ce,n.width=Math.floor(A*ce),n.height=Math.floor(Y*ce),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===Di){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Ce)},this.setViewport=function(A,Y,ce,re){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,Y,ce,re),M.viewport(D.copy(Ce).multiplyScalar(fe).round())},this.getScissor=function(A){return A.copy(mt)},this.setScissor=function(A,Y,ce,re){A.isVector4?mt.set(A.x,A.y,A.z,A.w):mt.set(A,Y,ce,re),M.scissor(k.copy(mt).multiplyScalar(fe).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){M.setScissorTest(lt=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ce=!0){let re=0;if(A){let se=!1;if(ee!==null){const Be=ee.texture.format;se=b.has(Be)}if(se){const Be=ee.texture.type,We=y.has(Be),ze=ct.getClearColor(),je=ct.getClearAlpha(),Ye=ze.r,nt=ze.g,ht=ze.b;We?(I[0]=Ye,I[1]=nt,I[2]=ht,I[3]=je,Z.clearBufferuiv(Z.COLOR,0,I)):(F[0]=Ye,F[1]=nt,F[2]=ht,F[3]=je,Z.clearBufferiv(Z.COLOR,0,F))}else re|=Z.COLOR_BUFFER_BIT}Y&&(re|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(re|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){n.removeEventListener("webglcontextlost",an,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",ii,!1),ct.dispose(),Fe.dispose(),Ie.dispose(),le.dispose(),Ne.dispose(),_e.dispose(),Ge.dispose(),Re.dispose(),Ue.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",mn),qe.removeEventListener("sessionend",Dn),Yn.stop()};function an(A){A.preventDefault(),Ax("WebGLRenderer: Context Lost."),V=!0}function zt(){Ax("WebGLRenderer: Context Restored."),V=!1;const A=te.autoReset,Y=tt.enabled,ce=tt.autoUpdate,re=tt.needsUpdate,se=tt.type;Ke(),te.autoReset=A,tt.enabled=Y,tt.autoUpdate=ce,tt.needsUpdate=re,tt.type=se}function ii(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ai(A){const Y=A.target;Y.removeEventListener("dispose",ai),Eo(Y)}function Eo(A){To(A),le.remove(A)}function To(A){const Y=le.get(A).programs;Y!==void 0&&(Y.forEach(function(ce){Ue.releaseProgram(ce)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ce,re,se,Be){Y===null&&(Y=nn);const We=se.isMesh&&se.matrixWorld.determinantAffine()<0,ze=ka(A,Y,ce,re,se);M.setMaterial(re,We);let je=ce.index,Ye=1;if(re.wireframe===!0){if(je=ge.getWireframeAttribute(ce),je===void 0)return;Ye=2}const nt=ce.drawRange,ht=ce.attributes.position;let Je=nt.start*Ye,Dt=(nt.start+nt.count)*Ye;Be!==null&&(Je=Math.max(Je,Be.start*Ye),Dt=Math.min(Dt,(Be.start+Be.count)*Ye)),je!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,je.count)):ht!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,ht.count));const rn=Dt-Je;if(rn<0||rn===1/0)return;Ge.setup(se,re,ze,ce,je);let Zt,Ft=Le;if(je!==null&&(Zt=Pe.get(je),Ft=ye,Ft.setIndex(Zt)),se.isMesh)re.wireframe===!0?(M.setLineWidth(re.wireframeLinewidth*ln()),Ft.setMode(Z.LINES)):Ft.setMode(Z.TRIANGLES);else if(se.isLine){let Bt=re.linewidth;Bt===void 0&&(Bt=1),M.setLineWidth(Bt*ln()),se.isLineSegments?Ft.setMode(Z.LINES):se.isLineLoop?Ft.setMode(Z.LINE_LOOP):Ft.setMode(Z.LINE_STRIP)}else se.isPoints?Ft.setMode(Z.POINTS):se.isSprite&&Ft.setMode(Z.TRIANGLES);if(se.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Bt=se._multiDrawStarts,ke=se._multiDrawCounts,Fn=se._multiDrawCount,xt=je?Pe.get(je).bytesPerElement:1,Mn=le.get(re).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)Mn.setValue(Z,"_gl_DrawID",ri),Ft.render(Bt[ri]/xt,ke[ri])}else if(se.isInstancedMesh)Ft.renderInstances(Je,rn,se.count);else if(ce.isInstancedBufferGeometry){const Bt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ke=Math.min(ce.instanceCount,Bt);Ft.renderInstances(Je,rn,ke)}else Ft.render(Je,rn)};function Ao(A,Y,ce){A.transparent===!0&&A.side===Na&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Va(A,Y,ce),A.side=Tr,A.needsUpdate=!0,Va(A,Y,ce),A.side=Na):Va(A,Y,ce)}this.compile=function(A,Y,ce=null){ce===null&&(ce=A),L=Ie.get(ce),L.init(Y),T.push(L),ce.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),A!==ce&&A.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),L.setupLights();const re=new Set;return A.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Be=se.material;if(Be)if(Array.isArray(Be))for(let We=0;We<Be.length;We++){const ze=Be[We];Ao(ze,ce,se),re.add(ze)}else Ao(Be,ce,se),re.add(Be)}),L=T.pop(),re},this.compileAsync=function(A,Y,ce=null){const re=this.compile(A,Y,ce);return new Promise(se=>{function Be(){if(re.forEach(function(We){le.get(We).currentProgram.isReady()&&re.delete(We)}),re.size===0){se(A);return}setTimeout(Be,10)}Ut.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let hs=null;function Wi(A){hs&&hs(A)}function mn(){Yn.stop()}function Dn(){Yn.start()}const Yn=new pb;Yn.setAnimationLoop(Wi),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){hs=A,qe.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},qe.addEventListener("sessionstart",mn),qe.addEventListener("sessionend",Dn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;j!==null&&j.renderStart(A,Y);const ce=qe.enabled===!0&&qe.isPresenting===!0,re=z!==null&&(ee===null||ce)&&z.begin(q,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(Y),Y=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(q,A,Y,ee),L=Ie.get(A,T.length),L.init(Y),L.state.textureUnits=ve.getTextureUnits(),T.push(L),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),gt.setFromProjectionMatrix(Ct,ia,Y.reversedDepth),$e=this.localClippingEnabled,dt=et.init(this.clippingPlanes,$e),O=Fe.get(A,B.length),O.init(),B.push(O),qe.enabled===!0&&qe.isPresenting===!0){const We=q.xr.getDepthSensingMesh();We!==null&&Ar(We,Y,-1/0,q.sortObjects)}Ar(A,Y,0,q.sortObjects),O.finish(),q.sortObjects===!0&&O.sort(we,Te,Y.reversedDepth),Qt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Qt&&ct.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&et.beginShadows();const se=L.state.shadowsArray;if(tt.render(se,A,Y),dt===!0&&et.endShadows(),(re&&z.hasRenderPass())===!1){const We=O.opaque,ze=O.transmissive;if(L.setupLights(),Y.isArrayCamera){const je=Y.cameras;if(ze.length>0)for(let Ye=0,nt=je.length;Ye<nt;Ye++){const ht=je[Ye];Gl(We,ze,A,ht)}Qt&&ct.render(A);for(let Ye=0,nt=je.length;Ye<nt;Ye++){const ht=je[Ye];Hl(O,A,ht,ht.viewport)}}else ze.length>0&&Gl(We,ze,A,Y),Qt&&ct.render(A),Hl(O,A,Y)}ee!==null&&G===0&&(ve.updateMultisampleRenderTarget(ee),ve.updateRenderTargetMipmap(ee)),re&&z.end(q),A.isScene===!0&&A.onAfterRender(q,A,Y),Ge.resetDefaultState(),me=-1,Ee=null,T.pop(),T.length>0?(L=T[T.length-1],ve.setTextureUnits(L.state.textureUnits),dt===!0&&et.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,j!==null&&j.renderEnd()};function Ar(A,Y,ce,re){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||gt.intersectsSprite(A)){re&&Jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const We=_e.update(A),ze=A.material;ze.visible&&O.push(A,We,ze,ce,Jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||gt.intersectsObject(A))){const We=_e.update(A),ze=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Jt.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Jt.copy(We.boundingSphere.center)),Jt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(ze)){const je=We.groups;for(let Ye=0,nt=je.length;Ye<nt;Ye++){const ht=je[Ye],Je=ze[ht.materialIndex];Je&&Je.visible&&O.push(A,We,Je,ce,Jt.z,ht)}}else ze.visible&&O.push(A,We,ze,ce,Jt.z,null)}}const Be=A.children;for(let We=0,ze=Be.length;We<ze;We++)Ar(Be[We],Y,ce,re)}function Hl(A,Y,ce,re){const{opaque:se,transmissive:Be,transparent:We}=A;L.setupLightsView(ce),dt===!0&&et.setGlobalState(q.clippingPlanes,ce),re&&M.viewport(D.copy(re)),se.length>0&&Rr(se,Y,ce),Be.length>0&&Rr(Be,Y,ce),We.length>0&&Rr(We,Y,ce),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Gl(A,Y,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[re.id]===void 0){const Je=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[re.id]=new ra(1,1,{generateMipmaps:!0,type:Je?za:Di,minFilter:as,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Be=L.state.transmissionRenderTarget[re.id],We=re.viewport||D;Be.setSize(We.z*q.transmissionResolutionScale,We.w*q.transmissionResolutionScale);const ze=q.getRenderTarget(),je=q.getActiveCubeFace(),Ye=q.getActiveMipmapLevel();q.setRenderTarget(Be),q.getClearColor(be),Ae=q.getClearAlpha(),Ae<1&&q.setClearColor(16777215,.5),q.clear(),Qt&&ct.render(ce);const nt=q.toneMapping;q.toneMapping=aa;const ht=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),L.setupLightsView(re),dt===!0&&et.setGlobalState(q.clippingPlanes,re),Rr(A,ce,re),ve.updateMultisampleRenderTarget(Be),ve.updateRenderTargetMipmap(Be),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,rn=Y.length;Dt<rn;Dt++){const Zt=Y[Dt],{object:Ft,geometry:Bt,material:ke,group:Fn}=Zt;if(ke.side===Na&&Ft.layers.test(re.layers)){const xt=ke.side;ke.side=ti,ke.needsUpdate=!0,Ga(Ft,ce,re,Bt,ke,Fn),ke.side=xt,ke.needsUpdate=!0,Je=!0}}Je===!0&&(ve.updateMultisampleRenderTarget(Be),ve.updateRenderTargetMipmap(Be))}q.setRenderTarget(ze,je,Ye),q.setClearColor(be,Ae),ht!==void 0&&(re.viewport=ht),q.toneMapping=nt}function Rr(A,Y,ce){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,Be=A.length;se<Be;se++){const We=A[se],{object:ze,geometry:je,group:Ye}=We;let nt=We.material;nt.allowOverride===!0&&re!==null&&(nt=re),ze.layers.test(ce.layers)&&Ga(ze,Y,ce,je,nt,Ye)}}function Ga(A,Y,ce,re,se,Be){A.onBeforeRender(q,Y,ce,re,se,Be),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(q,Y,ce,re,A,Be),se.transparent===!0&&se.side===Na&&se.forceSinglePass===!1?(se.side=ti,se.needsUpdate=!0,q.renderBufferDirect(ce,Y,re,se,A,Be),se.side=Tr,se.needsUpdate=!0,q.renderBufferDirect(ce,Y,re,se,A,Be),se.side=Na):q.renderBufferDirect(ce,Y,re,se,A,Be),A.onAfterRender(q,Y,ce,re,se,Be)}function Va(A,Y,ce){Y.isScene!==!0&&(Y=nn);const re=le.get(A),se=L.state.lights,Be=L.state.shadowsArray,We=se.state.version,ze=Ue.getParameters(A,se.state,Be,Y,ce,L.state.lightProbeGridArray),je=Ue.getProgramCacheKey(ze);let Ye=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,re.fog=Y.fog;const nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Ne.get(A.envMap||re.environment,nt),re.envMapRotation=re.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",ai),Ye=new Map,re.programs=Ye);let ht=Ye.get(je);if(ht!==void 0){if(re.currentProgram===ht&&re.lightsStateVersion===We)return la(A,ze),ht}else ze.uniforms=Ue.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,ce,ze),A.onBeforeCompile(ze,q),ht=Ue.acquireProgram(ze,je),Ye.set(je,ht),re.uniforms=ze.uniforms;const Je=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=et.uniform),la(A,ze),re.needsLights=Vl(A),re.lightsStateVersion=We,re.needsLights&&(Je.ambientLightColor.value=se.state.ambient,Je.lightProbe.value=se.state.probe,Je.directionalLights.value=se.state.directional,Je.directionalLightShadows.value=se.state.directionalShadow,Je.spotLights.value=se.state.spot,Je.spotLightShadows.value=se.state.spotShadow,Je.rectAreaLights.value=se.state.rectArea,Je.ltc_1.value=se.state.rectAreaLTC1,Je.ltc_2.value=se.state.rectAreaLTC2,Je.pointLights.value=se.state.point,Je.pointLightShadows.value=se.state.pointShadow,Je.hemisphereLights.value=se.state.hemi,Je.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Je.spotLightMatrix.value=se.state.spotLightMatrix,Je.spotLightMap.value=se.state.spotLightMap,Je.pointShadowMatrix.value=se.state.pointShadowMatrix),re.lightProbeGrid=L.state.lightProbeGridArray.length>0,re.currentProgram=ht,re.uniformsList=null,ht}function oa(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Bu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function la(A,Y){const ce=le.get(A);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function Cr(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;N.setFromMatrixPosition(Y.matrixWorld);for(let ce=0,re=A.length;ce<re;ce++){const se=A[ce];if(se.texture!==null&&se.boundingBox.containsPoint(N))return se}return null}function ka(A,Y,ce,re,se){Y.isScene!==!0&&(Y=nn),ve.resetTextureUnits();const Be=Y.fog,We=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?Y.environment:null,ze=ee===null?q.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:At.workingColorSpace,je=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ye=Ne.get(re.envMap||We,je),nt=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!ce.morphAttributes.position,Dt=!!ce.morphAttributes.normal,rn=!!ce.morphAttributes.color;let Zt=aa;re.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Zt=q.toneMapping);const Ft=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Bt=Ft!==void 0?Ft.length:0,ke=le.get(re),Fn=L.state.lights;if(dt===!0&&($e===!0||A!==Ee)){const It=A===Ee&&re.id===me;et.setState(re,A,It)}let xt=!1;re.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Fn.state.version||ke.outputColorSpace!==ze||se.isBatchedMesh&&ke.batching===!1||!se.isBatchedMesh&&ke.batching===!0||se.isBatchedMesh&&ke.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&ke.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&ke.instancing===!1||!se.isInstancedMesh&&ke.instancing===!0||se.isSkinnedMesh&&ke.skinning===!1||!se.isSkinnedMesh&&ke.skinning===!0||se.isInstancedMesh&&ke.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ke.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&ke.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&ke.instancingMorph===!1&&se.morphTexture!==null||ke.envMap!==Ye||re.fog===!0&&ke.fog!==Be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==et.numPlanes||ke.numIntersection!==et.numIntersection)||ke.vertexAlphas!==nt||ke.vertexTangents!==ht||ke.morphTargets!==Je||ke.morphNormals!==Dt||ke.morphColors!==rn||ke.toneMapping!==Zt||ke.morphTargetsCount!==Bt||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ke.__version=re.version);let Mn=ke.currentProgram;xt===!0&&(Mn=Va(re,Y,se),j&&re.isNodeMaterial&&j.onUpdateProgram(re,Mn,ke));let ri=!1,Ni=!1,si=!1;const Ht=Mn.getUniforms(),sn=ke.uniforms;if(M.useProgram(Mn.program)&&(ri=!0,Ni=!0,si=!0),re.id!==me&&(me=re.id,Ni=!0),ke.needsLights){const It=Cr(L.state.lightProbeGridArray,se);ke.lightProbeGrid!==It&&(ke.lightProbeGrid=It,Ni=!0)}if(ri||Ee!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ht.setValue(Z,"projectionMatrix",A.projectionMatrix),Ht.setValue(Z,"viewMatrix",A.matrixWorldInverse);const qi=Ht.map.cameraPosition;qi!==void 0&&qi.setValue(Z,jt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ht.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ht.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),Ee!==A&&(Ee=A,Ni=!0,si=!0)}if(ke.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ht.setValue(Z,"directionalShadowMap",Fn.state.directionalShadowMap,ve),Fn.state.spotShadowMap.length>0&&Ht.setValue(Z,"spotShadowMap",Fn.state.spotShadowMap,ve),Fn.state.pointShadowMap.length>0&&Ht.setValue(Z,"pointShadowMap",Fn.state.pointShadowMap,ve)),se.isSkinnedMesh){Ht.setOptional(Z,se,"bindMatrix"),Ht.setOptional(Z,se,"bindMatrixInverse");const It=se.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Ht.setValue(Z,"boneTexture",It.boneTexture,ve))}se.isBatchedMesh&&(Ht.setOptional(Z,se,"batchingTexture"),Ht.setValue(Z,"batchingTexture",se._matricesTexture,ve),Ht.setOptional(Z,se,"batchingIdTexture"),Ht.setValue(Z,"batchingIdTexture",se._indirectTexture,ve),Ht.setOptional(Z,se,"batchingColorTexture"),se._colorsTexture!==null&&Ht.setValue(Z,"batchingColorTexture",se._colorsTexture,ve));const Li=ce.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&W.update(se,ce,Mn),(Ni||ke.receiveShadow!==se.receiveShadow)&&(ke.receiveShadow=se.receiveShadow,Ht.setValue(Z,"receiveShadow",se.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&Y.environment!==null&&(sn.envMapIntensity.value=Y.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=kL()),Ni){if(Ht.setValue(Z,"toneMappingExposure",q.toneMappingExposure),ke.needsLights&&gn(sn,si),Be&&re.fog===!0&&Ve.refreshFogUniforms(sn,Be),Ve.refreshMaterialUniforms(sn,re,fe,oe,L.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const It=ke.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}Bu.upload(Z,oa(ke),sn,ve)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Bu.upload(Z,oa(ke),sn,ve),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ht.setValue(Z,"center",se.center),Ht.setValue(Z,"modelViewMatrix",se.modelViewMatrix),Ht.setValue(Z,"normalMatrix",se.normalMatrix),Ht.setValue(Z,"modelMatrix",se.matrixWorld),re.uniformsGroups!==void 0){const It=re.uniformsGroups;for(let qi=0,Xa=It.length;qi<Xa;qi++){const wr=It[qi];Re.update(wr,Mn),Re.bind(wr,Mn)}}return Mn}function gn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Vl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,Y,ce){const re=le.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),le.get(A.texture).__webglTexture=Y,le.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ce=le.get(A);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,ce=0){ee=A,U=Y,G=ce;let re=null,se=!1,Be=!1;if(A){const ze=le.get(A);if(ze.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Z.FRAMEBUFFER,ze.__webglFramebuffer),D.copy(A.viewport),k.copy(A.scissor),Q=A.scissorTest,M.viewport(D),M.scissor(k),M.setScissorTest(Q),me=-1;return}else if(ze.__webglFramebuffer===void 0)ve.setupRenderTarget(A);else if(ze.__hasExternalTextures)ve.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const nt=A.depthTexture;if(ze.__boundDepthTexture!==nt){if(nt!==null&&le.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Be=!0);const Ye=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?re=Ye[Y][ce]:re=Ye[Y],se=!0):A.samples>0&&ve.useMultisampledRTT(A)===!1?re=le.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?re=Ye[ce]:re=Ye,D.copy(A.viewport),k.copy(A.scissor),Q=A.scissorTest}else D.copy(Ce).multiplyScalar(fe).floor(),k.copy(mt).multiplyScalar(fe).floor(),Q=lt;if(ce!==0&&(re=he),M.bindFramebuffer(Z.FRAMEBUFFER,re)&&M.drawBuffers(A,re),M.viewport(D),M.scissor(k),M.setScissorTest(Q),se){const ze=le.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,ce)}else if(Be){const ze=Y;for(let je=0;je<A.textures.length;je++){const Ye=le.get(A.textures[je]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+je,Ye.__webglTexture,ce,ze)}}else if(A!==null&&ce!==0){const ze=le.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ze.__webglTexture,ce)}me=-1},this.readRenderTargetPixels=function(A,Y,ce,re,se,Be,We,ze=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){M.bindFramebuffer(Z.FRAMEBUFFER,je);try{const Ye=A.textures[ze],nt=Ye.format,ht=Ye.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!P.textureFormatReadable(nt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ht)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-re&&ce>=0&&ce<=A.height-se&&Z.readPixels(Y,ce,re,se,Oe.convert(nt),Oe.convert(ht),Be)}finally{const Ye=ee!==null?le.get(ee).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ce,re,se,Be,We,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je)if(Y>=0&&Y<=A.width-re&&ce>=0&&ce<=A.height-se){M.bindFramebuffer(Z.FRAMEBUFFER,je);const Ye=A.textures[ze],nt=Ye.format,ht=Ye.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!P.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Je),Z.bufferData(Z.PIXEL_PACK_BUFFER,Be.byteLength,Z.STREAM_READ),Z.readPixels(Y,ce,re,se,Oe.convert(nt),Oe.convert(ht),0);const Dt=ee!==null?le.get(ee).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Dt);const rn=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await lR(Z,rn,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Je),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Be),Z.deleteBuffer(Je),Z.deleteSync(rn),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ce=0){const re=Math.pow(2,-ce),se=Math.floor(A.image.width*re),Be=Math.floor(A.image.height*re),We=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;ve.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,We,ze,se,Be),M.unbindTexture()},this.copyTextureToTexture=function(A,Y,ce=null,re=null,se=0,Be=0){let We,ze,je,Ye,nt,ht,Je,Dt,rn;const Zt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(ce!==null)We=ce.max.x-ce.min.x,ze=ce.max.y-ce.min.y,je=ce.isBox3?ce.max.z-ce.min.z:1,Ye=ce.min.x,nt=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const sn=Math.pow(2,-se);We=Math.floor(Zt.width*sn),ze=Math.floor(Zt.height*sn),A.isDataArrayTexture?je=Zt.depth:A.isData3DTexture?je=Math.floor(Zt.depth*sn):je=1,Ye=0,nt=0,ht=0}re!==null?(Je=re.x,Dt=re.y,rn=re.z):(Je=0,Dt=0,rn=0);const Ft=Oe.convert(Y.format),Bt=Oe.convert(Y.type);let ke;Y.isData3DTexture?(ve.setTexture3D(Y,0),ke=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ve.setTexture2DArray(Y,0),ke=Z.TEXTURE_2D_ARRAY):(ve.setTexture2D(Y,0),ke=Z.TEXTURE_2D),M.activeTexture(Z.TEXTURE0),M.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Fn=M.getParameter(Z.UNPACK_ROW_LENGTH),xt=M.getParameter(Z.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(Z.UNPACK_SKIP_PIXELS),ri=M.getParameter(Z.UNPACK_SKIP_ROWS),Ni=M.getParameter(Z.UNPACK_SKIP_IMAGES);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Zt.width),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Zt.height),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ye),M.pixelStorei(Z.UNPACK_SKIP_ROWS,nt),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,ht);const si=A.isDataArrayTexture||A.isData3DTexture,Ht=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const sn=le.get(A),Li=le.get(Y),It=le.get(sn.__renderTarget),qi=le.get(Li.__renderTarget);M.bindFramebuffer(Z.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Xa=0;Xa<je;Xa++)si&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,le.get(A).__webglTexture,se,ht+Xa),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,le.get(Y).__webglTexture,Be,rn+Xa)),Z.blitFramebuffer(Ye,nt,We,ze,Je,Dt,We,ze,Z.DEPTH_BUFFER_BIT,Z.NEAREST);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(se!==0||A.isRenderTargetTexture||le.has(A)){const sn=le.get(A),Li=le.get(Y);M.bindFramebuffer(Z.READ_FRAMEBUFFER,pe),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,$);for(let It=0;It<je;It++)si?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,sn.__webglTexture,se,ht+It):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,sn.__webglTexture,se),Ht?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Li.__webglTexture,Be,rn+It):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Li.__webglTexture,Be),se!==0?Z.blitFramebuffer(Ye,nt,We,ze,Je,Dt,We,ze,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ht?Z.copyTexSubImage3D(ke,Be,Je,Dt,rn+It,Ye,nt,We,ze):Z.copyTexSubImage2D(ke,Be,Je,Dt,Ye,nt,We,ze);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ht?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(ke,Be,Je,Dt,rn,We,ze,je,Ft,Bt,Zt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(ke,Be,Je,Dt,rn,We,ze,je,Ft,Zt.data):Z.texSubImage3D(ke,Be,Je,Dt,rn,We,ze,je,Ft,Bt,Zt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Be,Je,Dt,We,ze,Ft,Bt,Zt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Be,Je,Dt,Zt.width,Zt.height,Ft,Zt.data):Z.texSubImage2D(Z.TEXTURE_2D,Be,Je,Dt,We,ze,Ft,Bt,Zt);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Fn),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,xt),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(Z.UNPACK_SKIP_ROWS,ri),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ni),Be===0&&Y.generateMipmaps&&Z.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&ve.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ve.setTextureCube(A,0):A.isData3DTexture?ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ve.setTexture2DArray(A,0):ve.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){U=0,G=0,ee=null,M.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}const WL=new Et(12764882),qL=new Et(13159638),co=4500,es=91,YL=42,jL=new Et(15253624),ZL=`
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
`,KL=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,QL=`
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
`,JL=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,$L=`
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
`,eU=`
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
`;function tU(){const r=new Float32Array(co*3),e=new Float32Array(co),n=new Float32Array(co);for(let a=0;a<co;a++){const l=24+Math.random()*36,c=Math.random()*Math.PI*2,f=(Math.random()-.5)*1.1;r[a*3]=l*Math.cos(c)*Math.cos(f),r[a*3+1]=l*Math.sin(f)*2.2,r[a*3+2]=l*Math.sin(c)*Math.cos(f)-18,e[a]=Math.random(),n[a]=.7+Math.random()*1.6}return{positions:r,phases:e,sizes:n}}function nU(){let r=1597463007;return()=>(r=r*1664525+1013904223>>>0,r/4294967296)}function iU(r,e,n){const a=(r.x-e.x)*n,l=r.y-e.y;return a*a+l*l}function aU(r){const e=nU(),n=[],a=48,l=.025;for(let c=0;c<es;c++){let f=null,h=-1;for(let m=0;m<a;m++){const p={x:l+e()*(1-l*2),y:l+e()*(1-l*2)};let _=Number.POSITIVE_INFINITY;for(const v of n){const g=iU(p,v,r);_=Math.min(_,g)}_>h&&(f=p,h=_)}f&&n.push(f)}return n}function bb(r,e){const n=aU(e);for(let a=0;a<n.length;a++){const l=n[a];r[a*3]=-.96+l.x*1.92,r[a*3+1]=-.9+l.y*1.8,r[a*3+2]=0}}function rU(r){const e=new Float32Array(es),n=new Float32Array(es*3),a=new Float32Array(es),l=new Float32Array(es);for(let c=0;c<es;c++){const f=c<YL;e[c]=f?1:0,a[c]=c/es,l[c]=f?32+c*29%7:12+c*17%4}return bb(n,r),{flares:e,positions:n,phases:a,sizes:l}}function sU(r,e,n={}){const{transparent:a=!1,threadAlpha:l}=n;let c;try{c=new XL({alpha:!0,antialias:!1,canvas:r,powerPreference:"high-performance"})}catch{return()=>{}}c.setPixelRatio(1);const f=new ER;f.background=a?null:new Et(328968);const h=new wi(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:_}=tU(),v=new ni;v.setAttribute("position",new bn(m,3)),v.setAttribute("phase",new bn(p,1)),v.setAttribute("size",new bn(_,1));const g=new gi({vertexShader:ZL,fragmentShader:KL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:WL}},transparent:!0,depthWrite:!1}),S=new qx(v,g);f.add(S);const E=r.clientWidth||window.innerWidth,w=r.clientHeight||window.innerHeight,b=rU(E/w),y=b.positions,I=new ni;I.setAttribute("position",new bn(y,3)),I.setAttribute("flare",new bn(b.flares,1)),I.setAttribute("phase",new bn(b.phases,1)),I.setAttribute("size",new bn(b.sizes,1));const F=new gi({vertexShader:$L,fragmentShader:eU,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:jL}},transparent:!0,depthTest:!1,depthWrite:!1}),N=new qx(I,F);f.add(N);const O=3400,L=new ni,B=new Float32Array(O*6),T=new Float32Array(O*2),z=new Float32Array(O*2);L.setAttribute("position",new bn(B,3)),L.setAttribute("lineUV",new bn(T,1)),L.setAttribute("segPhase",new bn(z,1)),L.setDrawRange(0,0);const q=new gi({vertexShader:QL,fragmentShader:JL,uniforms:{uTime:{value:0},uColor:{value:qL},uAlpha:{value:l??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),V=new IR(L,q);f.add(V);const j=e==="alive"?4.8:5.2,he=new Map;function pe(oe,fe,we){const Te=Math.floor(oe/j),Ce=Math.floor(fe/j),mt=Math.floor(we/j);return`${Te}:${Ce}:${mt}`}for(let oe=0;oe<co;oe++){const fe=m[oe*3],we=m[oe*3+1],Te=m[oe*3+2],Ce=pe(fe,we,Te),mt=he.get(Ce)??[];mt.push(oe),he.set(Ce,mt)}function $(oe){const fe=m[oe*3],we=m[oe*3+1],Te=m[oe*3+2],Ce=Math.floor(fe/j),mt=Math.floor(we/j),lt=Math.floor(Te/j),gt=[];for(let dt=-1;dt<=1;dt++)for(let $e=-1;$e<=1;$e++)for(let Ct=-1;Ct<=1;Ct++){const jt=`${Ce+dt}:${mt+$e}:${lt+Ct}`;gt.push(...he.get(jt)??[])}return gt}const U=()=>{const oe=new Set,fe=[],we=[],Te=[];for(let Ce=0;Ce<co&&fe.length<O*6;Ce++){const mt=m[Ce*3],lt=m[Ce*3+1],gt=m[Ce*3+2],dt=[];for(const $e of $(Ce)){if($e===Ce)continue;const Ct=m[$e*3]-mt,jt=m[$e*3+1]-lt,Jt=m[$e*3+2]-gt,nn=Ct*Ct+jt*jt+Jt*Jt;nn<j*j&&dt.push([$e,nn])}dt.sort(($e,Ct)=>$e[1]-Ct[1]);for(const[$e]of dt.slice(0,5)){if(fe.length>=O*6)break;const Ct=Ce<$e?`${Ce}-${$e}`:`${$e}-${Ce}`;oe.has(Ct)||(oe.add(Ct),fe.push(mt,lt,gt,m[$e*3],m[$e*3+1],m[$e*3+2]),we.push(0,1),Te.push(Math.random(),Math.random()))}}B.set(fe),T.set(we),z.set(Te),L.getAttribute("position").needsUpdate=!0,L.getAttribute("lineUV").needsUpdate=!0,L.getAttribute("segPhase").needsUpdate=!0,L.setDrawRange(0,fe.length/3)},G=()=>{for(let oe=0;oe<L.drawRange.count;oe++)z[oe]=Math.random();L.getAttribute("segPhase").needsUpdate=!0};U();const ee=new jR;let me=0,Ee=0,D=0,k=E/w;const Q=()=>{const oe=r.clientWidth||window.innerWidth,fe=r.clientHeight||window.innerHeight,we=oe/fe;c.setSize(oe,fe,!1),h.aspect=we,h.updateProjectionMatrix(),Math.abs(we-k)/k>=.08&&(bb(y,we),I.getAttribute("position").needsUpdate=!0,k=we)},be=()=>{window.cancelAnimationFrame(D),D=window.requestAnimationFrame(Q)};Q(),window.addEventListener("resize",be);let Ae=0;const K=oe=>{if(document.hidden||r.dataset.paused==="true"){me=requestAnimationFrame(K);return}const fe=ee.getElapsedTime();fe-Ae>=1/30&&(Ae=fe,g.uniforms.uTime.value=fe,q.uniforms.uTime.value=fe,F.uniforms.uTime.value=fe,e==="alive"&&(Ee+=1/30,Ee>3.2&&(Ee=0,G())),c.render(f,h)),me=requestAnimationFrame(K)};return me=requestAnimationFrame(K),()=>{cancelAnimationFrame(me),cancelAnimationFrame(D),window.removeEventListener("resize",be),v.dispose(),L.dispose(),I.dispose(),g.dispose(),q.dispose(),F.dispose(),c.dispose()}}function oU({mode:r,paused:e=!1,transparent:n=!1,threadAlpha:a,className:l="spell-bg"}){const c=Xe.useRef(null);return Xe.useEffect(()=>{const f=c.current;f&&(f.dataset.paused=String(e))},[e]),Xe.useEffect(()=>{const f=c.current;return f?sU(f,r,{transparent:n,threadAlpha:a}):void 0},[r,n,a]),C.jsx("canvas",{"aria-hidden":"true",className:l,ref:c})}function mm({className:r,compact:e=!1}){const n=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",r].filter(Boolean).join(" ");return C.jsx(zn,{"aria-hidden":"true",className:n,icon:D2})}const lU=["Today","Yesterday","Others"],by=[{description:"Today, yesterday, and older threads",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],cU=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function uU(r,e){if(e==="flat")return[{label:null,threads:r}];if(e==="date")return lU.map(a=>({label:a,threads:r.filter(l=>l.dateGroup===a)}));const n=new Map;for(const a of r){const l=a.volume==null?"Volume unknown":`Vol ${a.volume}`,c=n.get(l)??[];n.set(l,[...c,a])}return[...n.entries()].map(([a,l])=>({label:a,threads:l}))}function fU({activeThreadId:r,archivedOpen:e,collapsed:n,drawerOpen:a,onArchive:l,onClose:c,onCreate:f,onDelete:h,onOpen:m,onOpenSettings:p,onPin:_,onRename:v,onSelect:g,onSetArchivedOpen:S,readerStatus:E,threads:w}){const[b,y]=Xe.useState(null),[I,F]=Xe.useState(""),[N,O]=Xe.useState(null),[L,B]=Xe.useState("date"),[T,z]=Xe.useState(!1),[q,V]=Xe.useState(()=>new Set(["Yesterday","Others"])),j=Xe.useMemo(()=>w.filter(D=>D.archived===e).sort((D,k)=>Number(k.pinned)-Number(D.pinned)),[e,w]),he=uU(j,L),pe=w.filter(D=>D.archived).length,$=a||!n;function U(D){y(D.id),F(D.title)}function G(D){const k=I.trim();k&&v(D,k),y(null)}function ee(D){if(N===D){h(D),O(null);return}O(D),window.setTimeout(()=>{O(k=>k===D?null:k)},3e3)}function me(D){V(k=>{const Q=new Set(k);return Q.has(D)?Q.delete(D):Q.add(D),Q})}function Ee(D){const k=D.id===r;return C.jsxs("li",{className:`lab-thread-row ${k?"active":""}`,"data-testid":`thread-${D.id}`,children:[C.jsxs("div",{className:"lab-thread-main",children:[b===D.id?C.jsx("span",{className:"lab-thread-copy",children:C.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>G(D.id),onChange:Q=>F(Q.target.value),onClick:Q=>Q.stopPropagation(),onKeyDown:Q=>{Q.key==="Enter"&&(Q.preventDefault(),G(D.id)),Q.key==="Escape"&&y(null)},value:I})}):C.jsx("button",{"aria-current":k?"page":void 0,className:"lab-thread-select",onClick:()=>g(D.id),type:"button",children:C.jsx("span",{className:"lab-thread-copy",children:C.jsx("strong",{children:D.title})})}),N===D.id&&C.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),C.jsxs("div",{className:"lab-thread-actions",children:[C.jsx("button",{"aria-label":`${D.pinned?"Unpin":"Pin"} ${D.title}`,onClick:()=>_(D.id),type:"button",children:C.jsx(v3,{})}),C.jsx("button",{"aria-label":`Rename ${D.title}`,onClick:()=>U(D),type:"button",children:C.jsx(g3,{})}),C.jsx("button",{"aria-label":`${D.archived?"Restore":"Archive"} ${D.title}`,onClick:()=>l(D.id),type:"button",children:C.jsx(gx,{})}),C.jsx("button",{"aria-label":`Delete ${D.title}`,className:N===D.id?"confirming":"",onClick:()=>ee(D.id),type:"button",children:C.jsx(p3,{})})]})]},D.id)}return C.jsxs("aside",{className:"lab-rail",children:[C.jsxs("header",{className:"lab-brand",children:[C.jsx("span",{className:"lab-brand-mark",children:C.jsx(mm,{compact:!0})}),C.jsx("span",{children:C.jsx("strong",{children:"weaver"})}),C.jsx("button",{"aria-label":$?"Close threads":"Open threads",className:"lab-rail-close",onClick:$?c:m,type:"button",children:$?C.jsx(h3,{}):C.jsx(zS,{})})]}),C.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:f,type:"button",children:[C.jsx(c3,{}),C.jsx("span",{children:"New Weave"})]}),C.jsxs("div",{className:"lab-rail-scroll",children:[C.jsxs("section",{className:"lab-chat-section",children:[C.jsxs("header",{className:"lab-rail-section-head",children:[C.jsx("h2",{children:"Chats"}),C.jsxs("div",{className:"lab-grouping-picker",children:[C.jsxs("button",{"aria-expanded":T,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>z(D=>!D),type:"button",children:[by.find(D=>D.value===L)?.label,C.jsx(Mp,{})]}),T&&C.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[C.jsx("p",{children:"Organize threads"}),by.map(D=>C.jsxs("button",{"aria-checked":L===D.value,onClick:()=>{B(D.value),z(!1)},role:"menuitemradio",type:"button",children:[C.jsx("span",{"aria-hidden":"true",children:L===D.value?"✓":""}),C.jsx("strong",{children:D.label}),C.jsx("small",{children:D.description})]},D.value))]})]})]}),C.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[he.map(D=>{const k=D.label,Q=k?q.has(k):!1;return C.jsxs("section",{className:"lab-thread-group",children:[k&&C.jsxs("button",{"aria-expanded":!Q,className:"lab-thread-group-toggle",onClick:()=>me(k),type:"button",children:[C.jsx("span",{children:k}),C.jsx("small",{children:D.threads.length}),C.jsx(Mp,{})]}),C.jsx("div",{"aria-hidden":Q,className:`lab-thread-group-body ${Q?"collapsed":""}`,children:C.jsx("div",{children:C.jsx("ul",{className:"lab-thread-flat-list",children:D.threads.map(Ee)})})})]},k??"all")}),j.length===0&&C.jsxs("div",{className:"lab-thread-empty",children:[C.jsx("span",{"aria-hidden":"true"}),C.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),C.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[C.jsxs("header",{className:"lab-rail-section-head",children:[C.jsx("h2",{children:"Library"}),C.jsx("small",{children:"novels"})]}),C.jsx("div",{className:"lab-novel-list",children:cU.map(D=>C.jsxs("button",{"aria-current":D.active?"page":void 0,"aria-disabled":!D.active,className:D.active?"active":"upcoming",type:"button",children:[C.jsx(d3,{}),C.jsxs("span",{children:[C.jsx("strong",{children:D.label}),C.jsx("small",{children:D.active?"current shelf":"upcoming"})]})]},D.label))})]})]}),C.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>S(!e),type:"button",children:[C.jsx(gx,{}),C.jsx("span",{children:"Archived"}),C.jsx("em",{children:pe})]}),C.jsx("footer",{className:"lab-rail-footer",children:C.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:p,type:"button",children:[C.jsx(FS,{}),C.jsxs("span",{children:[C.jsx("strong",{children:"Settings"}),C.jsxs("small",{children:[E," · runes · appearance"]})]})]})})]})}const dU=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],hU=Array.from({length:20},(r,e)=>e);function pU(r){return{"--index":r}}function mU({announcement:r,eventKey:e,mode:n}){return C.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${n}`,children:[n==="particles"&&C.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:hU.map(a=>C.jsx("span",{style:pU(a)},a))}),n==="threads"&&C.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[C.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),C.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),C.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),C.jsx("p",{className:"rune-announcement",children:r})]},`${n}-${e}`)}const gU=Array.from({length:7},(r,e)=>e),vU=Array.from({length:8},(r,e)=>e),_U=Array.from({length:11},(r,e)=>e),Qu={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function rp(r){return{"--index":r}}function Mb({compact:r=!1,mode:e,state:n}){return C.jsxs("div",{"aria-label":`${Qu[e]}, ${n}`,className:`lab-soul-sea soul-${e} soul-state-${n} ${r?"soul-compact":""}`,role:"img",children:[C.jsxs("div",{className:"lab-soul-sky",children:[C.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[C.jsx("span",{}),C.jsx("span",{}),C.jsx("span",{})]}),C.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:gU.map(a=>C.jsx("span",{className:"lab-soul-sun",style:rp(a)},a))}),C.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:vU.map(a=>C.jsx("span",{className:"lab-memory-light",style:rp(a)},a))})]}),C.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:_U.map(a=>C.jsx("span",{className:"lab-shadow",style:rp(a)},a))}),C.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[C.jsx("span",{className:"water-plane water-plane-back"}),C.jsx("span",{className:"water-plane water-plane-middle"}),C.jsx("span",{className:"water-plane water-plane-front"}),C.jsx("span",{className:"water-flash"})]}),!r&&C.jsxs("p",{className:"lab-soul-caption",children:[C.jsx("span",{children:Qu[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const sp=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12}],xU={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},yU=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],SU=["still","living","mirror"],bU=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function MU({initial:r,onClose:e,onSave:n}){const[a,l]=Xe.useState(r),[c,f]=Xe.useState("customize"),h=Xe.useRef(null),m=Xe.useRef(null);Xe.useEffect(()=>{h.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function p(g){if(g.key!=="Tab"||!h.current)return;const S=h.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),E=S[0],w=S[S.length-1];g.shiftKey&&document.activeElement===E&&(g.preventDefault(),w?.focus()),!g.shiftKey&&document.activeElement===w&&(g.preventDefault(),E?.focus())}function _(g,S){l(E=>({...E,[g]:S}))}function v(g){const S=sp.find(b=>b.number===g);if(!S)return;const E=sp[g-2]?.end??0,w=Math.max(E+1,Math.min(a.chapter,S.end));l(b=>({...b,chapter:w,volume:g}))}return C.jsx("div",{className:"lab-settings-backdrop",onMouseDown:e,children:C.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:p,onMouseDown:g=>g.stopPropagation(),ref:h,role:"dialog",children:[C.jsxs("header",{className:"lab-settings-head",children:[C.jsxs("div",{children:[C.jsx("p",{children:"the sea within"}),C.jsx("h2",{children:"Soul Sea"})]}),C.jsx("button",{"aria-label":"Close settings",onClick:e,type:"button",children:"×"})]}),C.jsxs("div",{className:"lab-settings-layout",children:[C.jsxs("aside",{className:"lab-settings-nav",children:[C.jsx("p",{children:"Settings"}),C.jsx("nav",{"aria-label":"Settings sections",children:yU.map(g=>C.jsxs("button",{"aria-label":g.label,"aria-current":c===g.id?"page":void 0,className:c===g.id?"on":"",onClick:()=>f(g.id),type:"button",children:[C.jsx("strong",{children:g.label}),C.jsx("span",{children:g.hint})]},g.id))})]}),C.jsxs("div",{className:"lab-settings-main",children:[C.jsx(Mb,{compact:!0,mode:a.soulMode,state:"idle"}),C.jsxs("div",{className:"lab-settings-content",children:[c==="reader"&&C.jsxs("section",{className:"lab-settings-section",children:[C.jsxs("div",{className:"lab-setting-title",children:[C.jsx("h3",{children:"Reader position"}),C.jsx("span",{children:"The Spell will not read beyond this point."})]}),C.jsxs("div",{className:"lab-reader-grid",children:[C.jsxs("label",{children:[C.jsx("span",{children:"Volume"}),C.jsx("select",{"aria-label":"Reader volume",onChange:g=>v(Number(g.target.value)),ref:m,value:a.volume,children:sp.map(g=>C.jsxs("option",{value:g.number,children:["Vol ",g.number," · to ch ",g.end]},g.number))})]}),C.jsxs("label",{children:[C.jsx("span",{children:"Chapter"}),C.jsx("input",{max:3127,min:1,onChange:g=>_("chapter",Number(g.target.value)),type:"number",value:a.chapter})]})]})]}),c==="spoilers"&&C.jsxs("section",{className:"lab-settings-section",children:[C.jsxs("div",{className:"lab-setting-title",children:[C.jsx("h3",{children:"Spoilers"}),C.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),C.jsxs("div",{className:"lab-choice-grid two",children:[C.jsxs("button",{"aria-pressed":a.spoilerMode==="protect",className:a.spoilerMode==="protect"?"on":"",onClick:()=>_("spoilerMode","protect"),type:"button",children:[C.jsx("strong",{children:"Protect the story"}),C.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),C.jsxs("button",{"aria-pressed":a.spoilerMode==="none",className:a.spoilerMode==="none"?"on":"",onClick:()=>_("spoilerMode","none"),type:"button",children:[C.jsx("strong",{children:"No spoiler limits"}),C.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),c==="reading"&&C.jsxs("section",{className:"lab-settings-section",children:[C.jsxs("div",{className:"lab-setting-title",children:[C.jsx("h3",{children:"Reading tier"}),C.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),C.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(g=>C.jsxs("button",{"aria-pressed":a.tier===g,className:a.tier===g?"on":"",onClick:()=>_("tier",g),type:"button",children:[C.jsx("strong",{children:g}),C.jsx("span",{children:xU[g]})]},g))})]}),c==="customize"&&C.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[C.jsxs("div",{className:"lab-setting-title",children:[C.jsx("h3",{children:"Customize the Spell"}),C.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),C.jsxs("div",{className:"lab-customize-block",children:[C.jsx("h4",{children:"Surface theme"}),C.jsx("div",{className:"lab-theme-grid",children:bU.map(g=>C.jsxs("button",{"aria-label":g.label,"aria-pressed":a.theme===g.value,className:a.theme===g.value?"on":"",onClick:()=>_("theme",g.value),type:"button",children:[C.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:g.swatches.map(S=>C.jsx("i",{style:{background:S}},S))}),C.jsx("strong",{children:g.label}),C.jsx("span",{children:g.description})]},g.value))})]}),C.jsxs("div",{className:"lab-customize-block",children:[C.jsx("h4",{children:"Rune appearance"}),C.jsx("div",{className:"lab-choice-grid three",children:dU.map(g=>C.jsxs("button",{"aria-label":g.label,"aria-pressed":a.runeMode===g.mode,className:a.runeMode===g.mode?"on":"",onClick:()=>_("runeMode",g.mode),type:"button",children:[C.jsx("strong",{children:g.label}),C.jsx("span",{children:g.description})]},g.mode))})]}),C.jsxs("div",{className:"lab-customize-block",children:[C.jsx("h4",{children:"Soul Sea"}),C.jsx("div",{className:"lab-choice-grid three",children:SU.map(g=>C.jsxs("button",{"aria-label":Qu[g],"aria-pressed":a.soulMode===g,className:a.soulMode===g?"on":"",onClick:()=>_("soulMode",g),type:"button",children:[C.jsx("strong",{children:Qu[g]}),C.jsx("span",{children:g==="still"?"A calm horizon behind the conversation.":g==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},g))})]}),C.jsxs("div",{className:"lab-customize-block",children:[C.jsx("h4",{children:"Message transparency"}),C.jsxs("div",{className:"lab-choice-grid two",children:[C.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":a.glass==="subtle",className:a.glass==="subtle"?"on":"",onClick:()=>_("glass","subtle"),type:"button",children:[C.jsx("strong",{children:"Subtle glass"}),C.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),C.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":a.glass==="immersive",className:a.glass==="immersive"?"on":"",onClick:()=>_("glass","immersive"),type:"button",children:[C.jsx("strong",{children:"Immersive · no surface"}),C.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),C.jsxs("div",{className:"lab-customize-block",children:[C.jsx("h4",{children:"Star web"}),C.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(g=>C.jsx("button",{"aria-pressed":a.starIntensity===g,className:a.starIntensity===g?"on":"",onClick:()=>_("starIntensity",g),type:"button",children:g},g))})]}),C.jsxs("div",{className:"lab-customize-row",children:[C.jsxs("div",{children:[C.jsx("h4",{children:"Reading density"}),C.jsxs("div",{className:"lab-segmented-control",children:[C.jsx("button",{"aria-label":"Compact text","aria-pressed":a.density==="compact",className:a.density==="compact"?"on":"",onClick:()=>_("density","compact"),type:"button",children:"compact"}),C.jsx("button",{"aria-label":"Comfortable text","aria-pressed":a.density==="comfortable",className:a.density==="comfortable"?"on":"",onClick:()=>_("density","comfortable"),type:"button",children:"comfortable"})]})]}),C.jsxs("div",{children:[C.jsx("h4",{children:"Font size"}),C.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(g=>C.jsx("button",{"aria-pressed":a.fontSize===g,className:a.fontSize===g?"on":"",onClick:()=>_("fontSize",g),type:"button",children:g},g))})]})]})]}),c==="privacy"&&C.jsxs("section",{className:"lab-settings-section",children:[C.jsxs("div",{className:"lab-setting-title",children:[C.jsx("h3",{children:"Keyboard & privacy"}),C.jsx("span",{children:"Quick controls and where your reading data stays."})]}),C.jsxs("dl",{className:"lab-shortcuts",children:[C.jsxs("div",{children:[C.jsxs("dt",{children:[C.jsx("kbd",{children:"Ctrl"}),C.jsx("kbd",{children:","})]}),C.jsx("dd",{children:"open settings"})]}),C.jsxs("div",{children:[C.jsx("dt",{children:C.jsx("kbd",{children:"Esc"})}),C.jsx("dd",{children:"close this panel"})]}),C.jsxs("div",{children:[C.jsx("dt",{children:C.jsx("kbd",{children:"Enter"})}),C.jsx("dd",{children:"send a message"})]})]}),C.jsxs("aside",{className:"lab-privacy-note",children:[C.jsx("span",{"aria-hidden":"true",children:"◎"}),C.jsxs("div",{children:[C.jsx("strong",{children:"Everything stays on this machine."}),C.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]})]})]})]}),C.jsxs("footer",{className:"lab-settings-actions",children:[C.jsx("button",{onClick:e,type:"button",children:"Leave unchanged"}),C.jsx("button",{className:"primary",onClick:()=>n(a),type:"button",children:"Apply settings"})]})]})})}const $i={chapter:1e3,density:"comfortable",fontSize:"small",glass:"immersive",runeMode:"particles",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"void",tier:"ascended",volume:5},Eb="weaver.spell-surface";function Qr(r,e,n){return typeof r=="string"&&e.includes(r)?r:n}function EU(){try{const r=JSON.parse(window.localStorage.getItem(Eb)??"null");return r?{...$i,density:Qr(r.density,["compact","comfortable"],$i.density),fontSize:Qr(r.fontSize,["small","medium","large"],$i.fontSize),glass:Qr(r.glass,["subtle","immersive"],$i.glass),runeMode:Qr(r.runeMode,["particles","voice","threads"],$i.runeMode),soulMode:Qr(r.soulMode,["still","living","mirror"],$i.soulMode),starIntensity:Qr(r.starIntensity,["quiet","balanced","vivid"],$i.starIntensity),theme:Qr(r.theme,["crimson","cosmos","starlight","void"],$i.theme)}:$i}catch{return $i}}function TU(r){window.localStorage.setItem(Eb,JSON.stringify({density:r.density,fontSize:r.fontSize,glass:r.glass,runeMode:r.runeMode,soulMode:r.soulMode,starIntensity:r.starIntensity,theme:r.theme}))}const My=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127];function AU(r){const e=My.findIndex(n=>r<=n);return e===-1?My.length:e+1}function RU(r){if(!r)return"Others";const e=new Date(r);if(Number.isNaN(e.getTime()))return"Others";const n=new Date;n.setHours(0,0,0,0);const a=new Date(n);return a.setDate(a.getDate()-1),e>=n?"Today":e>=a?"Yesterday":"Others"}function Ey(r){return{reader_chapter:r.chapter,spoiler_mode:r.spoilerMode,tier:r.tier}}function CU({api:r,privacyLabel:e}){const n=b2(r,Ai),[a,l]=Xe.useState(EU),[c,f]=Xe.useState(!1),[h,m]=Xe.useState(!1),[p,_]=Xe.useState(!1),[v,g]=Xe.useState(!1),[S,E]=Xe.useState(new Set),[w,b]=Xe.useState(new Set),[y,I]=Xe.useState(new Map),[F,N]=Xe.useState("idle"),[O,L]=Xe.useState("[The Spell listens.]"),[B,T]=Xe.useState(0),[z,q]=Xe.useState(0),V=Xe.useRef(null),j=Xe.useRef(null),he=Xe.useRef(!1),pe=Xe.useRef(!1),$=Xe.useRef(null),U=Xe.useMemo(()=>n.conversations.map(Te=>({archived:S.has(Te.conversation_id),dateGroup:RU(Te.created_at),id:Te.conversation_id,pinned:w.has(Te.conversation_id),preview:"private reading thread",title:y.get(Te.conversation_id)??Te.title,volume:null})),[S,n.conversations,w,y]);Xe.useEffect(()=>{function Te(Ce){Ce.ctrlKey&&Ce.key===","&&(Ce.preventDefault(),me()),Ce.key==="Escape"&&(f(!1),m(!1))}return window.addEventListener("keydown",Te),()=>window.removeEventListener("keydown",Te)}),Xe.useEffect(()=>{const Te=j.current;Te&&(Te.scrollTop=Te.scrollHeight)},[n.activity,n.messages,n.recoveryMessage]),Xe.useEffect(()=>{if(n.turnActive){he.current=!0,N(n.activity.length>0?"weaving":"rippling");return}he.current&&(he.current=!1,N("complete"),ee("[The weave is complete.]"),$.current&&window.clearTimeout($.current),$.current=window.setTimeout(()=>N("idle"),900))},[n.activity.length,n.turnActive]),Xe.useEffect(()=>{const Te=n.activity.at(-1);if(!Te)return;const Ce=R2(Te);Ce&&ee(Ce)},[n.activity]);const G=n.messages.some(Te=>Te.role==="weaver"&&Te.streaming&&Te.content.length>0);Xe.useEffect(()=>{!n.turnActive||!G||pe.current||(pe.current=!0,ee("[Weaving the story.]"))},[n.turnActive,G]),Xe.useEffect(()=>()=>{$.current&&window.clearTimeout($.current)},[]);function ee(Te){L(Te),T(Ce=>Ce+1),q(Ce=>Ce+1)}async function me(){try{const Te=await r.getPreferences(),Ce=Te.reader_chapter??a.chapter;l(mt=>({...mt,chapter:Ce,spoilerMode:Te.spoiler_mode,tier:Te.tier,volume:AU(Ce)}))}finally{f(!0),ee("[The sea within opens.]")}}function Ee(){if(window.innerWidth<768){m(!0);return}_(!1)}function D(){if(window.innerWidth<768){m(!1);return}_(!0)}async function k(){await n.createConversation()&&(m(!1),ee("[An empty thread waits in the void.]"),window.setTimeout(()=>V.current?.focus(),0))}async function Q(Te){await n.selectConversation(Te),m(!1),ee("[The thread is recalled.]")}function be(Te,Ce){I(mt=>new Map(mt).set(Te,Ce)),ee("[The thread accepts a new name.]")}function Ae(Te,Ce){Te(mt=>{const lt=new Set(mt);return lt.has(Ce)?lt.delete(Ce):lt.add(Ce),lt})}function K(Te){pe.current=!1,N("rippling"),ee("[The Spell reaches for the first thread.]"),n.sendMessage(Te)}function oe(){pe.current=!1,N("weaving"),ee("[The Spell takes up the thread once more.]"),n.regenerateReply()}const fe=`Vol ${a.volume} · ch ${a.chapter} · ${a.tier}`,we=a.starIntensity==="quiet"?.2:a.starIntensity==="vivid"?.56:.36;return C.jsxs("div",{className:["spell-surface-lab","spell-surface-live",h?"lab-rail-open":"",p?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":a.density,"data-font-size":a.fontSize,"data-glass":a.glass,"data-runes":a.runeMode,"data-soul":a.soulMode,"data-star-intensity":a.starIntensity,"data-theme":a.theme,"data-testid":"spell-surface-live",children:[C.jsx(oU,{className:"lab-spell-background",mode:"alive",paused:c,threadAlpha:we}),C.jsx("div",{"aria-hidden":"true",className:"lab-galactic-band"}),C.jsx("div",{"aria-hidden":"true",className:"lab-purple-depth"}),C.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-one"}),C.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-two"}),C.jsxs("div",{"aria-hidden":"true",className:"lab-core-wake",children:[C.jsx("span",{}),C.jsx("span",{})]},z),C.jsx(Mb,{mode:a.soulMode,state:F}),C.jsx(fU,{activeThreadId:n.conversationId??"",archivedOpen:v,collapsed:p,drawerOpen:h,onArchive:Te=>Ae(E,Te),onClose:D,onCreate:()=>{k()},onDelete:Te=>{n.deleteConversation(Te)},onOpen:Ee,onOpenSettings:()=>{me()},onPin:Te=>Ae(b,Te),onRename:be,onSelect:Te=>{Q(Te)},onSetArchivedOpen:g,readerStatus:fe,threads:U}),C.jsxs("main",{className:"lab-chat-main",children:[C.jsxs("div",{className:"lab-chat-controls",children:[C.jsx("button",{"aria-label":"Open threads",className:"lab-mobile-rail",onClick:Ee,type:"button",children:C.jsx(zS,{})}),C.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{me()},type:"button",children:C.jsx(FS,{})})]}),C.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:j,children:C.jsxs("div",{className:"lab-transcript-column",children:[n.bootError&&C.jsx("div",{className:"boot-error",children:n.bootError}),!n.bootError&&n.messages.length===0&&C.jsxs("section",{className:"lab-empty-weave",children:[C.jsx("span",{className:"lab-empty-mark",children:C.jsx(mm,{})}),C.jsx("p",{children:"[An empty thread trembles in the void.]"}),C.jsx("h1",{children:"What are we reading?"}),C.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),n.messages.map(Te=>C.jsx(A3,{Mark:mm,assistantName:Ai.assistantName,message:Te,onQuote:Ce=>{n.setDraft(`"${Ce}" `),V.current?.focus()},onRegenerate:Te.id===n.lastReplyId&&n.turnState==="idle"?oe:void 0,regenerateLabel:Ai.regenerateLabel},Te.id)),n.recoveryMessage&&C.jsx(R3,{chooseLabel:Ai.recoveryChooseLabel,createLabel:Ai.recoveryCreateLabel,message:n.recoveryMessage,onChooseConversation:Ee,onCreateConversation:()=>{k()},onRetry:()=>{n.retryLastTurn()},retryLabel:Ai.recoveryRetryLabel,title:Ai.recoveryTitle})]})}),C.jsx(mU,{announcement:O,eventKey:B,mode:a.runeMode}),C.jsxs("footer",{className:"lab-composer-dock",children:[C.jsx(x3,{cancelling:n.turnState==="cancelling",draft:n.draft,inputLabel:Ai.inputLabel,onCancel:()=>{n.cancelTurn()},onDraftChange:n.setDraft,onSubmit:K,onTierChange:Te=>{const Ce={...a,tier:Te};l(Ce),r.savePreferences(Ey(Ce))},placeholder:Ai.composerPlaceholder,sendLabel:Ai.sendLabel,stopLabel:Ai.stopLabel,stoppingLabel:Ai.stoppingLabel,textareaRef:V,tier:a.tier,turnActive:n.turnActive}),C.jsxs("p",{children:[C.jsx("span",{})," ",e]})]})]}),h&&C.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:()=>m(!1),type:"button"}),c&&C.jsx(MU,{initial:a,onClose:()=>f(!1),onSave:Te=>{l(Te),TU(Te),f(!1),ee("[Your soul answers the change.]"),r.savePreferences(Ey(Te))}})]})}const Ty="weaver_device_id",wU="weaver_api_key";function DU(){let r=localStorage.getItem(Ty);return r||(r=crypto.randomUUID(),localStorage.setItem(Ty,r)),r}function NU(){return localStorage.getItem(wU)??""}function LU(r){const e={"X-Device-Id":DU()},n=NU();return n!==""&&(e["X-Weaver-Key"]=n),{...e,...r}}async function Jr(r,e){if(!r.ok)throw new Error(`${e} failed (${r.status})`);return await r.json()}function UU(r){const e=typeof r.data.text=="string"?r.data.text:"",n=typeof r.data.message=="string"?r.data.message:"";if(r.event==="delta")return{type:"delta",text:e};if(r.event==="completed")return{type:"completed",text:e,tokenCount:typeof r.data.token_count=="number"?r.data.token_count:void 0,tokenBudget:typeof r.data.token_budget=="number"?r.data.token_budget:void 0};if(r.event==="interrupted")return{type:"interrupted",message:n||"The turn was interrupted."};if(r.event==="failed")return{type:"failed",message:n||"The reply failed.",code:typeof r.data.code=="string"?r.data.code:void 0};if(r.event==="tool"){const a=Array.isArray(r.data.handles)?r.data.handles.filter(l=>typeof l=="string"):void 0;return{type:"tool",name:typeof r.data.name=="string"?r.data.name:"tool",status:typeof r.data.status=="string"?r.data.status:"start",detail:typeof r.data.detail=="string"?r.data.detail:"",preview:typeof r.data.preview=="string"?r.data.preview:void 0,handles:a&&a.length>0?a:void 0}}return null}async function*OU(r){const e=[];let n=[],a=null,l=0;const c=["delta","tool","completed","interrupted","failed"];for(const f of c)r.addEventListener(f,h=>{try{const m=UU({event:f,data:JSON.parse(h.data)});m&&(e.push(m),n.splice(0).forEach(p=>p()))}catch{}});r.onerror=()=>{l+=1,(r.readyState===EventSource.CLOSED||l>4)&&(a=new Error("The reply stream was interrupted."),n.splice(0).forEach(f=>f()))};try{for(;;)if(e.length>0)yield e.shift();else{if(a)throw a;await new Promise(f=>n.push(f))}}finally{r.close()}}async function*op(r){const e=new EventSource(`/api/conversations/${encodeURIComponent(r)}/stream`);let n=!1;for await(const a of OU(e))if(yield a,a.type==="completed"||a.type==="interrupted"||a.type==="failed"){n=!0;break}if(!n)throw new Error("The reply stream closed without finishing.")}function PU(r=fetch){const e=(n,a)=>e(n,{...a,headers:{...LU(),...a?.headers}});return{async getPreferences(){const n=await e("/api/preferences");return Jr(n,"Loading preferences")},async deleteConversation(n){const a=await e(`/api/conversations/${n}`,{method:"DELETE"});return Jr(a,"Deleting conversation")},async getPassage(n){const a=await e(`/api/passages?handle=${encodeURIComponent(n)}`);return Jr(a,"Loading passage")},async savePreferences(n){const a=await e("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return Jr(a,"Saving preferences")},async listConversations(){const n=await e("/api/conversations");return Jr(n,"Loading conversations")},async createConversation(){const n=await e("/api/conversations",{method:"POST"});return Jr(n,"Creating a conversation")},async loadMessages(n){const a=await e(`/api/conversations/${encodeURIComponent(n)}/messages`);return Jr(a,"Loading the conversation")},async*streamTurn(n,a){const l=await e(`/api/conversations/${encodeURIComponent(n)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:a})});if(!l.ok)throw new Error(`Sending the message failed (${l.status})`);yield*op(n)},async*retryTurn(n){const a=await e(`/api/conversations/${encodeURIComponent(n)}/retry`,{method:"POST"});if(!a.ok)throw new Error(`Retrying failed (${a.status})`);yield*op(n)},async*regenerateTurn(n){const a=await e(`/api/conversations/${encodeURIComponent(n)}/regenerate`,{method:"POST"});if(!a.ok)throw new Error(`Regenerating failed (${a.status})`);yield*op(n)},async cancelTurn(n){const a=await e(`/api/conversations/${encodeURIComponent(n)}/cancel`,{method:"POST"});if(a.status===202)return"cancelling";if(a.status===200)return"idle";throw new Error(`Stopping the reply failed (${a.status})`)}}}const IU=Xe.lazy(()=>DM(()=>import("./ThemeLab-CYiNUI6s.js"),[]).then(r=>({default:r.ThemeLab})));ls.autoAddCss=!1;function zU(r){return document.querySelector(`meta[name="${r}"]`)?.content??""}const Tb=document.getElementById("root");if(!Tb)throw new Error("Weaver root element is missing.");const FU=window.location.hash==="#theme-lab";y2.createRoot(Tb).render(FU?C.jsx(Xe.Suspense,{fallback:C.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:C.jsx(IU,{})}):C.jsx(CU,{api:PU(),privacyLabel:zU("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{l3 as A,mx as C,zS as R,oU as S,mm as W,Mb as a,fU as b,FS as c,u3 as d,mU as e,MU as f,C as j,Xe as r};

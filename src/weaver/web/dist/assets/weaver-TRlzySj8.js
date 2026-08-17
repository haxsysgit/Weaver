(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const OM="modulepreload",PM=function(a){return"/"+a},A_={},IM=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");o=m(n.map(p=>{if(p=PM(p),p in A_)return;A_[p]=!0;const x=p.endsWith(".css"),v=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=x?"stylesheet":OM,x||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),x)return new Promise((b,T)=>{g.addEventListener("load",b),g.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function zM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var hh={exports:{}},pl={};var R_;function FM(){if(R_)return pl;R_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return pl.Fragment=e,pl.jsx=n,pl.jsxs=n,pl}var C_;function BM(){return C_||(C_=1,hh.exports=FM()),hh.exports}var E=BM(),ph={exports:{}},pt={};var w_;function HM(){if(w_)return pt;w_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,_={};function y(O,q,ie){this.props=O,this.context=q,this.refs=_,this.updater=ie||T}y.prototype.isReactComponent={},y.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=y.prototype;function z(O,q,ie){this.props=O,this.context=q,this.refs=_,this.updater=ie||T}var D=z.prototype=new U;D.constructor=z,w(D,y.prototype),D.isPureReactComponent=!0;var P=Array.isArray;function N(){}var H={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function F(O,q,ie){var Ee=ie.ref;return{$$typeof:a,type:O,key:q,ref:Ee!==void 0?Ee:null,props:ie}}function W(O,q){return F(O.type,q,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function Z(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ie){return q[ie]})}var pe=/\/+/g;function de(O,q){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):q.toString(36)}function ee(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(q){O.status==="pending"&&(O.status="fulfilled",O.value=q)},function(q){O.status==="pending"&&(O.status="rejected",O.reason=q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,q,ie,Ee,Se){var B=typeof O;(B==="undefined"||B==="boolean")&&(O=null);var Q=!1;if(O===null)Q=!0;else switch(B){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(O.$$typeof){case a:case e:Q=!0;break;case x:return Q=O._init,L(Q(O._payload),q,ie,Ee,Se)}}if(Q)return Se=Se(O),Q=Ee===""?"."+de(O,0):Ee,P(Se)?(ie="",Q!=null&&(ie=Q.replace(pe,"$&/")+"/"),L(Se,q,ie,"",function(Qe){return Qe})):Se!=null&&(k(Se)&&(Se=W(Se,ie+(Se.key==null||O&&O.key===Se.key?"":(""+Se.key).replace(pe,"$&/")+"/")+Q)),q.push(Se)),1;Q=0;var ne=Ee===""?".":Ee+":";if(P(O))for(var Re=0;Re<O.length;Re++)Ee=O[Re],B=ne+de(Ee,Re),Q+=L(Ee,q,ie,B,Se);else if(Re=b(O),typeof Re=="function")for(O=Re.call(O),Re=0;!(Ee=O.next()).done;)Ee=Ee.value,B=ne+de(Ee,Re++),Q+=L(Ee,q,ie,B,Se);else if(B==="object"){if(typeof O.then=="function")return L(ee(O),q,ie,Ee,Se);throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Q}function V(O,q,ie){if(O==null)return O;var Ee=[],Se=0;return L(O,Ee,"","",function(B){return q.call(ie,B,Se++)}),Ee}function te(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=ie)},function(ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=ie)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var ge=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Me={map:V,forEach:function(O,q,ie){V(O,function(){q.apply(this,arguments)},ie)},count:function(O){var q=0;return V(O,function(){q++}),q},toArray:function(O){return V(O,function(q){return q})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return pt.Activity=v,pt.Children=Me,pt.Component=y,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=z,pt.StrictMode=r,pt.Suspense=m,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,pt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return H.H.useMemoCache(O)}},pt.cache=function(O){return function(){return O.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(O,q,ie){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ee=w({},O.props),Se=O.key;if(q!=null)for(B in q.key!==void 0&&(Se=""+q.key),q)!A.call(q,B)||B==="key"||B==="__self"||B==="__source"||B==="ref"&&q.ref===void 0||(Ee[B]=q[B]);var B=arguments.length-2;if(B===1)Ee.children=ie;else if(1<B){for(var Q=Array(B),ne=0;ne<B;ne++)Q[ne]=arguments[ne+2];Ee.children=Q}return F(O.type,Se,Ee)},pt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},pt.createElement=function(O,q,ie){var Ee,Se={},B=null;if(q!=null)for(Ee in q.key!==void 0&&(B=""+q.key),q)A.call(q,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Se[Ee]=q[Ee]);var Q=arguments.length-2;if(Q===1)Se.children=ie;else if(1<Q){for(var ne=Array(Q),Re=0;Re<Q;Re++)ne[Re]=arguments[Re+2];Se.children=ne}if(O&&O.defaultProps)for(Ee in Q=O.defaultProps,Q)Se[Ee]===void 0&&(Se[Ee]=Q[Ee]);return F(O,B,Se)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:h,render:O}},pt.isValidElement=k,pt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:te}},pt.memo=function(O,q){return{$$typeof:p,type:O,compare:q===void 0?null:q}},pt.startTransition=function(O){var q=H.T,ie={};H.T=ie;try{var Ee=O(),Se=H.S;Se!==null&&Se(ie,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(N,ge)}catch(B){ge(B)}finally{q!==null&&ie.types!==null&&(q.types=ie.types),H.T=q}},pt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},pt.use=function(O){return H.H.use(O)},pt.useActionState=function(O,q,ie){return H.H.useActionState(O,q,ie)},pt.useCallback=function(O,q){return H.H.useCallback(O,q)},pt.useContext=function(O){return H.H.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O,q){return H.H.useDeferredValue(O,q)},pt.useEffect=function(O,q){return H.H.useEffect(O,q)},pt.useEffectEvent=function(O){return H.H.useEffectEvent(O)},pt.useId=function(){return H.H.useId()},pt.useImperativeHandle=function(O,q,ie){return H.H.useImperativeHandle(O,q,ie)},pt.useInsertionEffect=function(O,q){return H.H.useInsertionEffect(O,q)},pt.useLayoutEffect=function(O,q){return H.H.useLayoutEffect(O,q)},pt.useMemo=function(O,q){return H.H.useMemo(O,q)},pt.useOptimistic=function(O,q){return H.H.useOptimistic(O,q)},pt.useReducer=function(O,q,ie){return H.H.useReducer(O,q,ie)},pt.useRef=function(O){return H.H.useRef(O)},pt.useState=function(O){return H.H.useState(O)},pt.useSyncExternalStore=function(O,q,ie){return H.H.useSyncExternalStore(O,q,ie)},pt.useTransition=function(){return H.H.useTransition()},pt.version="19.2.8",pt}var D_;function _m(){return D_||(D_=1,ph.exports=HM()),ph.exports}var Le=_m();const xm=zM(Le);function cp(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=Array(e);n<e;n++)r[n]=a[n];return r}function GM(a){if(Array.isArray(a))return a}function VM(a){if(Array.isArray(a))return cp(a)}function kM(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function XM(a,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,wy(r.key),r)}}function WM(a,e,n){return e&&XM(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function Lu(a,e){var n=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!n){if(Array.isArray(a)||(n=ym(a))||e){n&&(a=n);var r=0,o=function(){};return{s:o,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(m){throw m},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,u=!0,h=!1;return{s:function(){n=n.call(a)},n:function(){var m=n.next();return u=m.done,m},e:function(m){h=!0,c=m},f:function(){try{u||n.return==null||n.return()}finally{if(h)throw c}}}}function st(a,e,n){return(e=wy(e))in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function jM(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function qM(a,e){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var r,o,c,u,h=[],m=!0,p=!1;try{if(c=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(r=c.call(n)).done)&&(h.push(r.value),h.length!==e);m=!0);}catch(x){p=!0,o=x}finally{try{if(!m&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(p)throw o}}return h}}function YM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N_(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function Ce(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N_(Object(n),!0).forEach(function(r){st(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function ef(a,e){return GM(a)||qM(a,e)||ym(a,e)||YM()}function Xi(a){return VM(a)||jM(a)||ym(a)||KM()}function ZM(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function wy(a){var e=ZM(a,"string");return typeof e=="symbol"?e:e+""}function Gu(a){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(a)}function ym(a,e){if(a){if(typeof a=="string")return cp(a,e);var n={}.toString.call(a).slice(8,-1);return n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set"?Array.from(a):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cp(a,e):void 0}}var L_=function(){},Sm={},Dy={},Ny=null,Ly={mark:L_,measure:L_};try{typeof window<"u"&&(Sm=window),typeof document<"u"&&(Dy=document),typeof MutationObserver<"u"&&(Ny=MutationObserver),typeof performance<"u"&&(Ly=performance)}catch{}var QM=Sm.navigator||{},U_=QM.userAgent,O_=U_===void 0?"":U_,br=Sm,an=Dy,P_=Ny,$c=Ly;br.document;var Ha=!!an.documentElement&&!!an.head&&typeof an.addEventListener=="function"&&typeof an.createElement=="function",Uy=~O_.indexOf("MSIE")||~O_.indexOf("Trident/"),Jc,$M=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,JM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Oy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},eE={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Py=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",Ol="duotone",Iy="sharp",zy="sharp-duotone",Fy="chisel",By="etch",Hy="graphite",Gy="jelly",Vy="jelly-duo",ky="jelly-fill",Xy="mosaic",Wy="notdog",jy="notdog-duo",qy="pixel",Yy="slab",Ky="slab-duo",Zy="slab-press",Qy="slab-press-duo",$y="thumbprint",Jy="utility",eS="utility-duo",tS="utility-fill",nS="vellum",iS="whiteboard",tE="Classic",nE="Duotone",iE="Sharp",aE="Sharp Duotone",rE="Chisel",sE="Etch",oE="Graphite",lE="Jelly",cE="Jelly Duo",uE="Jelly Fill",fE="Mosaic",dE="Notdog",hE="Notdog Duo",pE="Pixel",mE="Slab",gE="Slab Duo",vE="Slab Press",_E="Slab Press Duo",xE="Thumbprint",yE="Utility",SE="Utility Duo",bE="Utility Fill",ME="Vellum",EE="Whiteboard",aS=[In,Ol,Iy,zy,Fy,By,Hy,Gy,Vy,ky,Xy,Wy,jy,qy,Yy,Ky,Zy,Qy,$y,Jy,eS,tS,nS,iS];Jc={},st(st(st(st(st(st(st(st(st(st(Jc,In,tE),Ol,nE),Iy,iE),zy,aE),Fy,rE),By,sE),Hy,oE),Gy,lE),Vy,cE),ky,uE),st(st(st(st(st(st(st(st(st(st(Jc,Xy,fE),Wy,dE),jy,hE),qy,pE),Yy,mE),Ky,gE),Zy,vE),Qy,_E),$y,xE),Jy,yE),st(st(st(st(Jc,eS,SE),tS,bE),nS,ME),iS,EE);var TE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},AE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},RE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),CE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},rS=["fak","fa-kit","fakd","fa-kit-duotone"],I_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wE=["kit"],DE="kit",NE="kit-duotone",LE="Kit",UE="Kit Duotone";st(st({},DE,LE),NE,UE);var OE={kit:{"fa-kit":"fak"}},PE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},IE={kit:{fak:"fa-kit"}},z_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},eu,tu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],FE="classic",BE="duotone",HE="sharp",GE="sharp-duotone",VE="chisel",kE="etch",XE="graphite",WE="jelly",jE="jelly-duo",qE="jelly-fill",YE="mosaic",KE="notdog",ZE="notdog-duo",QE="pixel",$E="slab",JE="slab-duo",eT="slab-press",tT="slab-press-duo",nT="thumbprint",iT="utility",aT="utility-duo",rT="utility-fill",sT="vellum",oT="whiteboard",lT="Classic",cT="Duotone",uT="Sharp",fT="Sharp Duotone",dT="Chisel",hT="Etch",pT="Graphite",mT="Jelly",gT="Jelly Duo",vT="Jelly Fill",_T="Mosaic",xT="Notdog",yT="Notdog Duo",ST="Pixel",bT="Slab",MT="Slab Duo",ET="Slab Press",TT="Slab Press Duo",AT="Thumbprint",RT="Utility",CT="Utility Duo",wT="Utility Fill",DT="Vellum",NT="Whiteboard";eu={},st(st(st(st(st(st(st(st(st(st(eu,FE,lT),BE,cT),HE,uT),GE,fT),VE,dT),kE,hT),XE,pT),WE,mT),jE,gT),qE,vT),st(st(st(st(st(st(st(st(st(st(eu,YE,_T),KE,xT),ZE,yT),QE,ST),$E,bT),JE,MT),eT,ET),tT,TT),nT,AT),iT,RT),st(st(st(st(eu,aT,CT),rT,wT),sT,DT),oT,NT);var LT="kit",UT="kit-duotone",OT="Kit",PT="Kit Duotone";st(st({},LT,OT),UT,PT);var IT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},zT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},up={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},FT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],sS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(zE,FT),BT=["solid","regular","light","thin","duotone","brands","semibold"],oS=[1,2,3,4,5,6,7,8,9,10],HT=oS.concat([11,12,13,14,15,16,17,18,19,20]),GT=["aw","fw","pull-left","pull-right"],VT=[].concat(Xi(Object.keys(zT)),BT,GT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",tu.GROUP,tu.SWAP_OPACITY,tu.PRIMARY,tu.SECONDARY]).concat(oS.map(function(a){return"".concat(a,"x")})).concat(HT.map(function(a){return"w-".concat(a)})),kT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Pa="___FONT_AWESOME___",fp=16,lS="fa",cS="svg-inline--fa",ss="data-fa-i2svg",dp="data-fa-pseudo-element",XT="data-fa-pseudo-element-pending",bm="data-prefix",Mm="data-icon",F_="fontawesome-i2svg",WT="async",jT=["HTML","HEAD","STYLE","SCRIPT"],uS=["::before","::after",":before",":after"],fS=(function(){try{return!0}catch{return!1}})();function Pl(a){return new Proxy(a,{get:function(n,r){return r in n?n[r]:n[In]}})}var dS=Ce({},Oy);dS[In]=Ce(Ce(Ce(Ce({},{"fa-duotone":"duotone"}),Oy[In]),I_.kit),I_["kit-duotone"]);var qT=Pl(dS),hp=Ce({},CE);hp[In]=Ce(Ce(Ce(Ce({},{duotone:"fad"}),hp[In]),z_.kit),z_["kit-duotone"]);var B_=Pl(hp),pp=Ce({},up);pp[In]=Ce(Ce({},pp[In]),IE.kit);var Em=Pl(pp),mp=Ce({},IT);mp[In]=Ce(Ce({},mp[In]),OE.kit);Pl(mp);var YT=$M,hS="fa-layers-text",KT=JM,ZT=Ce({},TE);Pl(ZT);var QT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mh=eE,$T=[].concat(Xi(wE),Xi(VT)),Rl=br.FontAwesomeConfig||{};function JT(a){var e=an.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function eA(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(an&&typeof an.querySelector=="function"){var tA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tA.forEach(function(a){var e=ef(a,2),n=e[0],r=e[1],o=eA(JT(n));o!=null&&(Rl[r]=o)})}var pS={styleDefault:"solid",familyDefault:In,cssPrefix:lS,replacementClass:cS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rl.familyPrefix&&(Rl.cssPrefix=Rl.familyPrefix);var mo=Ce(Ce({},pS),Rl);mo.autoReplaceSvg||(mo.observeMutations=!1);var rt={};Object.keys(pS).forEach(function(a){Object.defineProperty(rt,a,{enumerable:!0,set:function(n){mo[a]=n,Cl.forEach(function(r){return r(rt)})},get:function(){return mo[a]}})});Object.defineProperty(rt,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,Cl.forEach(function(n){return n(rt)})},get:function(){return mo.cssPrefix}});br.FontAwesomeConfig=rt;var Cl=[];function nA(a){return Cl.push(a),function(){Cl.splice(Cl.indexOf(a),1)}}var Ws=fp,ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iA(a){if(!(!a||!Ha)){var e=an.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var n=an.head.childNodes,r=null,o=n.length-1;o>-1;o--){var c=n[o],u=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(r=c)}return an.head.insertBefore(e,r),a}}var aA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function H_(){for(var a=12,e="";a-- >0;)e+=aA[Math.random()*62|0];return e}function yo(a){for(var e=[],n=(a||[]).length>>>0;n--;)e[n]=a[n];return e}function Tm(a){return a.classList?yo(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function mS(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rA(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(mS(a[n]),'" ')},"").trim()}function tf(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(a[n].trim(),";")},"")}function Am(a){return a.size!==ta.size||a.x!==ta.x||a.y!==ta.y||a.rotate!==ta.rotate||a.flipX||a.flipY}function sA(a){var e=a.transform,n=a.containerWidth,r=a.iconWidth,o={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(u," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:m,path:p}}function oA(a){var e=a.transform,n=a.width,r=n===void 0?fp:n,o=a.height,c=o===void 0?fp:o,u="";return Uy?u+="translate(".concat(e.x/Ws-r/2,"em, ").concat(e.y/Ws-c/2,"em) "):u+="translate(calc(-50% + ".concat(e.x/Ws,"em), calc(-50% + ").concat(e.y/Ws,"em)) "),u+="scale(".concat(e.size/Ws*(e.flipX?-1:1),", ").concat(e.size/Ws*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var lA=`:root, :host {
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
}`;function gS(){var a=lS,e=cS,n=rt.cssPrefix,r=rt.replacementClass,o=lA;if(n!==a||r!==e){var c=new RegExp("\\.".concat(a,"\\-"),"g"),u=new RegExp("\\--".concat(a,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");o=o.replace(c,".".concat(n,"-")).replace(u,"--".concat(n,"-")).replace(h,".".concat(r))}return o}var G_=!1;function gh(){rt.autoAddCss&&!G_&&(iA(gS()),G_=!0)}var cA={mixout:function(){return{dom:{css:gS,insertCss:gh}}},hooks:function(){return{beforeDOMElementCreation:function(){gh()},beforeI2svg:function(){gh()}}}},Ia=br||{};Ia[Pa]||(Ia[Pa]={});Ia[Pa].styles||(Ia[Pa].styles={});Ia[Pa].hooks||(Ia[Pa].hooks={});Ia[Pa].shims||(Ia[Pa].shims=[]);var Gi=Ia[Pa],vS=[],_S=function(){an.removeEventListener("DOMContentLoaded",_S),Vu=1,vS.map(function(e){return e()})},Vu=!1;Ha&&(Vu=(an.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(an.readyState),Vu||an.addEventListener("DOMContentLoaded",_S));function uA(a){Ha&&(Vu?setTimeout(a,0):vS.push(a))}function Il(a){var e=a.tag,n=a.attributes,r=n===void 0?{}:n,o=a.children,c=o===void 0?[]:o;return typeof a=="string"?mS(a):"<".concat(e," ").concat(rA(r),">").concat(c.map(Il).join(""),"</").concat(e,">")}function V_(a,e,n){if(a&&a[e]&&a[e][n])return{prefix:e,iconName:n,icon:a[e][n]}}var vh=function(e,n,r,o){var c=Object.keys(e),u=c.length,h=n,m,p,x;for(r===void 0?(m=1,x=e[c[0]]):(m=0,x=r);m<u;m++)p=c[m],x=h(x,e[p],p,e);return x};function xS(a){return Xi(a).length!==1?null:a.codePointAt(0).toString(16)}function k_(a){return Object.keys(a).reduce(function(e,n){var r=a[n],o=!!r.icon;return o?e[r.iconName]=r.icon:e[n]=r,e},{})}function gp(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,c=k_(e);typeof Gi.hooks.addPack=="function"&&!o?Gi.hooks.addPack(a,k_(e)):Gi.styles[a]=Ce(Ce({},Gi.styles[a]||{}),c),a==="fas"&&gp("fa",e)}var Dl=Gi.styles,fA=Gi.shims,yS=Object.keys(Em),dA=yS.reduce(function(a,e){return a[e]=Object.keys(Em[e]),a},{}),Rm=null,SS={},bS={},MS={},ES={},TS={};function hA(a){return~$T.indexOf(a)}function pA(a,e){var n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===a&&o!==""&&!hA(o)?o:null}var AS=function(){var e=function(c){return vh(Dl,function(u,h,m){return u[m]=vh(h,c,{}),u},{})};SS=e(function(o,c,u){if(c[3]&&(o[c[3]]=u),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){o[m.toString(16)]=u})}return o}),bS=e(function(o,c,u){if(o[u]=u,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){o[m]=u})}return o}),TS=e(function(o,c,u){var h=c[2];return o[u]=u,h.forEach(function(m){o[m]=u}),o});var n="far"in Dl||rt.autoFetchSvg,r=vh(fA,function(o,c){var u=c[0],h=c[1],m=c[2];return h==="far"&&!n&&(h="fas"),typeof u=="string"&&(o.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(o.unicodes[u.toString(16)]={prefix:h,iconName:m}),o},{names:{},unicodes:{}});MS=r.names,ES=r.unicodes,Rm=nf(rt.styleDefault,{family:rt.familyDefault})};nA(function(a){Rm=nf(a.styleDefault,{family:rt.familyDefault})});AS();function Cm(a,e){return(SS[a]||{})[e]}function mA(a,e){return(bS[a]||{})[e]}function is(a,e){return(TS[a]||{})[e]}function RS(a){return MS[a]||{prefix:null,iconName:null}}function gA(a){var e=ES[a],n=Cm("fas",a);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mr(){return Rm}var CS=function(){return{prefix:null,iconName:null,rest:[]}};function vA(a){var e=In,n=yS.reduce(function(r,o){return r[o]="".concat(rt.cssPrefix,"-").concat(o),r},{});return aS.forEach(function(r){(a.includes(n[r])||a.some(function(o){return dA[r].includes(o)}))&&(e=r)}),e}function nf(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?In:n,o=qT[r][a];if(r===Ol&&!a)return"fad";var c=B_[r][a]||B_[r][o],u=a in Gi.styles?a:null,h=c||u||null;return h}function _A(a){var e=[],n=null;return a.forEach(function(r){var o=pA(rt.cssPrefix,r);o?n=o:r&&e.push(r)}),{iconName:n,rest:e}}function X_(a){return a.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var W_=sS.concat(rS);function af(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,o=null,c=X_(a.filter(function(b){return W_.includes(b)})),u=X_(a.filter(function(b){return!W_.includes(b)})),h=c.filter(function(b){return o=b,!Py.includes(b)}),m=ef(h,1),p=m[0],x=p===void 0?null:p,v=vA(c),g=Ce(Ce({},_A(u)),{},{prefix:nf(x,{family:v})});return Ce(Ce(Ce({},g),bA({values:a,family:v,styles:Dl,config:rt,canonical:g,givenPrefix:o})),xA(r,o,g))}function xA(a,e,n){var r=n.prefix,o=n.iconName;if(a||!r||!o)return{prefix:r,iconName:o};var c=e==="fa"?RS(o):{},u=is(r,o);return o=c.iconName||u||o,r=c.prefix||r,r==="far"&&!Dl.far&&Dl.fas&&!rt.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}var yA=aS.filter(function(a){return a!==In||a!==Ol}),SA=Object.keys(up).filter(function(a){return a!==In}).map(function(a){return Object.keys(up[a])}).flat();function bA(a){var e=a.values,n=a.family,r=a.canonical,o=a.givenPrefix,c=o===void 0?"":o,u=a.styles,h=u===void 0?{}:u,m=a.config,p=m===void 0?{}:m,x=n===Ol,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",b=r.prefix==="fad"||r.prefix==="fa-duotone";if(!x&&(v||g||b)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&yA.includes(n)){var T=Object.keys(h).find(function(_){return SA.includes(_)});if(T||p.autoFetchSvg){var w=RE.get(n).defaultShortPrefixId;r.prefix=w,r.iconName=is(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||c==="fa")&&(r.prefix=Mr()||"fas"),r}var MA=(function(){function a(){kM(this,a),this.definitions={}}return WM(a,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var u=o.reduce(this._pullDefinitions,{});Object.keys(u).forEach(function(h){n.definitions[h]=Ce(Ce({},n.definitions[h]||{}),u[h]),gp(h,u[h]);var m=Em[In][h];m&&gp(m,u[h]),AS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(c){var u=o[c],h=u.prefix,m=u.iconName,p=u.icon,x=p[2];n[h]||(n[h]={}),x.length>0&&x.forEach(function(v){typeof v=="string"&&(n[h][v]=p)}),n[h][m]=p}),n}}])})(),j_=[],oo={},uo={},EA=Object.keys(uo);function TA(a,e){var n=e.mixoutsTo;return j_=a,oo={},Object.keys(uo).forEach(function(r){EA.indexOf(r)===-1&&delete uo[r]}),j_.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(u){typeof o[u]=="function"&&(n[u]=o[u]),Gu(o[u])==="object"&&Object.keys(o[u]).forEach(function(h){n[u]||(n[u]={}),n[u][h]=o[u][h]})}),r.hooks){var c=r.hooks();Object.keys(c).forEach(function(u){oo[u]||(oo[u]=[]),oo[u].push(c[u])})}r.provides&&r.provides(uo)}),n}function vp(a,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var c=oo[a]||[];return c.forEach(function(u){e=u.apply(null,[e].concat(r))}),e}function os(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=oo[a]||[];o.forEach(function(c){c.apply(null,n)})}function Er(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[a]?uo[a].apply(null,e):void 0}function _p(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,n=a.prefix||Mr();if(e)return e=is(n,e)||e,V_(wS.definitions,n,e)||V_(Gi.styles,n,e)}var wS=new MA,AA=function(){rt.autoReplaceSvg=!1,rt.observeMutations=!1,os("noAuto")},RA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ha?(os("beforeI2svg",e),Er("pseudoElements2svg",e),Er("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;rt.autoReplaceSvg===!1&&(rt.autoReplaceSvg=!0),rt.observeMutations=!0,uA(function(){wA({autoReplaceSvgRoot:n}),os("watch",e)})}},CA={icon:function(e){if(e===null)return null;if(Gu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:is(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=nf(e[0]);return{prefix:r,iconName:is(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(rt.cssPrefix,"-"))>-1||e.match(YT))){var o=af(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Mr(),iconName:is(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var c=Mr();return{prefix:c,iconName:is(c,e)||e}}}},vi={noAuto:AA,config:rt,dom:RA,parse:CA,library:wS,findIconDefinition:_p,toHtml:Il},wA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?an:n;(Object.keys(Gi.styles).length>0||rt.autoFetchSvg)&&Ha&&rt.autoReplaceSvg&&vi.dom.i2svg({node:r})};function rf(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return Il(r)})}}),Object.defineProperty(a,"node",{get:function(){if(Ha){var r=an.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function DA(a){var e=a.children,n=a.main,r=a.mask,o=a.attributes,c=a.styles,u=a.transform;if(Am(u)&&n.found&&!r.found){var h=n.width,m=n.height,p={x:h/m/2,y:.5};o.style=tf(Ce(Ce({},c),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function NA(a){var e=a.prefix,n=a.iconName,r=a.children,o=a.attributes,c=a.symbol,u=c===!0?"".concat(e,"-").concat(rt.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ce(Ce({},o),{},{id:u}),children:r}]}]}function LA(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in a})}function wm(a){var e=a.icons,n=e.main,r=e.mask,o=a.prefix,c=a.iconName,u=a.transform,h=a.symbol,m=a.maskId,p=a.extra,x=a.watchable,v=x===void 0?!1:x,g=r.found?r:n,b=g.width,T=g.height,w=[rt.replacementClass,c?"".concat(rt.cssPrefix,"-").concat(c):""].filter(function(P){return p.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(p.classes).join(" "),_={children:[],attributes:Ce(Ce({},p.attributes),{},{"data-prefix":o,"data-icon":c,class:w,role:p.attributes.role||"img",viewBox:"0 0 ".concat(b," ").concat(T)})};!LA(p.attributes)&&!p.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),v&&(_.attributes[ss]="");var y=Ce(Ce({},_),{},{prefix:o,iconName:c,main:n,mask:r,maskId:m,transform:u,symbol:h,styles:Ce({},p.styles)}),U=r.found&&n.found?Er("generateAbstractMask",y)||{children:[],attributes:{}}:Er("generateAbstractIcon",y)||{children:[],attributes:{}},z=U.children,D=U.attributes;return y.children=z,y.attributes=D,h?NA(y):DA(y)}function q_(a){var e=a.content,n=a.width,r=a.height,o=a.transform,c=a.extra,u=a.watchable,h=u===void 0?!1:u,m=Ce(Ce({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ss]="");var p=Ce({},c.styles);Am(o)&&(p.transform=oA({transform:o,width:n,height:r}),p["-webkit-transform"]=p.transform);var x=tf(p);x.length>0&&(m.style=x);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function UA(a){var e=a.content,n=a.extra,r=Ce(Ce({},n.attributes),{},{class:n.classes.join(" ")}),o=tf(n.styles);o.length>0&&(r.style=o);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),c}var _h=Gi.styles;function xp(a){var e=a[0],n=a[1],r=a.slice(4),o=ef(r,1),c=o[0],u=null;return Array.isArray(c)?u={tag:"g",attributes:{class:"".concat(rt.cssPrefix,"-").concat(mh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(mh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(mh.PRIMARY),fill:"currentColor",d:c[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:n,icon:u}}var OA={found:!1,width:512,height:512};function PA(a,e){!fS&&!rt.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function yp(a,e){var n=e;return e==="fa"&&rt.styleDefault!==null&&(e=Mr()),new Promise(function(r,o){if(n==="fa"){var c=RS(a)||{};a=c.iconName||a,e=c.prefix||e}if(a&&e&&_h[e]&&_h[e][a]){var u=_h[e][a];return r(xp(u))}PA(a,e),r(Ce(Ce({},OA),{},{icon:rt.showMissingIcons&&a?Er("missingIconAbstract")||{}:{}}))})}var Y_=function(){},Sp=rt.measurePerformance&&$c&&$c.mark&&$c.measure?$c:{mark:Y_,measure:Y_},El='FA "7.3.1"',IA=function(e){return Sp.mark("".concat(El," ").concat(e," begins")),function(){return DS(e)}},DS=function(e){Sp.mark("".concat(El," ").concat(e," ends")),Sp.measure("".concat(El," ").concat(e),"".concat(El," ").concat(e," begins"),"".concat(El," ").concat(e," ends"))},Dm={begin:IA,end:DS},Uu=function(){};function K_(a){var e=a.getAttribute?a.getAttribute(ss):null;return typeof e=="string"}function zA(a){var e=a.getAttribute?a.getAttribute(bm):null,n=a.getAttribute?a.getAttribute(Mm):null;return e&&n}function FA(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(rt.replacementClass)}function BA(){if(rt.autoReplaceSvg===!0)return Ou.replace;var a=Ou[rt.autoReplaceSvg];return a||Ou.replace}function HA(a){return an.createElementNS("http://www.w3.org/2000/svg",a)}function GA(a){return an.createElement(a)}function NS(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?a.tag==="svg"?HA:GA:n;if(typeof a=="string")return an.createTextNode(a);var o=r(a.tag);Object.keys(a.attributes||[]).forEach(function(u){o.setAttribute(u,a.attributes[u])});var c=a.children||[];return c.forEach(function(u){o.appendChild(NS(u,{ceFn:r}))}),o}function VA(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ou={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(o){n.parentNode.insertBefore(NS(o),n)}),n.getAttribute(ss)===null&&rt.keepOriginalSource){var r=an.createComment(VA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Tm(n).indexOf(rt.replacementClass))return Ou.replace(e);var o=new RegExp("".concat(rt.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var c=r[0].attributes.class.split(" ").reduce(function(h,m){return m===rt.replacementClass||m.match(o)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var u=r.map(function(h){return Il(h)}).join(`
`);n.setAttribute(ss,""),n.innerHTML=u}};function Z_(a){a()}function LS(a,e){var n=typeof e=="function"?e:Uu;if(a.length===0)n();else{var r=Z_;rt.mutateApproach===WT&&(r=br.requestAnimationFrame||Z_),r(function(){var o=BA(),c=Dm.begin("mutate");a.map(o),c(),n()})}}var Nm=!1;function US(){Nm=!0}function bp(){Nm=!1}var ku=null;function Q_(a){if(P_&&rt.observeMutations){var e=a.treeCallback,n=e===void 0?Uu:e,r=a.nodeCallback,o=r===void 0?Uu:r,c=a.pseudoElementsCallback,u=c===void 0?Uu:c,h=a.observeMutationsRoot,m=h===void 0?an:h;ku=new P_(function(p){if(!Nm){var x=Mr();yo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!K_(v.addedNodes[0])&&(rt.searchPseudoElements&&u(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&rt.searchPseudoElements&&u([v.target],!0),v.type==="attributes"&&K_(v.target)&&~QT.indexOf(v.attributeName))if(v.attributeName==="class"&&zA(v.target)){var g=af(Tm(v.target)),b=g.prefix,T=g.iconName;v.target.setAttribute(bm,b||x),T&&v.target.setAttribute(Mm,T)}else FA(v.target)&&o(v.target)})}}),Ha&&ku.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kA(){ku&&ku.disconnect()}function XA(a){var e=a.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,o){var c=o.split(":"),u=c[0],h=c.slice(1);return u&&h.length>0&&(r[u]=h.join(":").trim()),r},{})),n}function WA(a){var e=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",o=af(Tm(a));return o.prefix||(o.prefix=Mr()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=mA(o.prefix,a.innerText)||Cm(o.prefix,xS(a.innerText))),!o.iconName&&rt.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=a.firstChild.data)),o}function jA(a){var e=yo(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function qA(){return{iconName:null,prefix:null,transform:ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=WA(a),r=n.iconName,o=n.prefix,c=n.rest,u=jA(a),h=vp("parseNodeAttributes",{},a),m=e.styleParser?XA(a):[];return Ce({iconName:r,prefix:o,transform:ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:u}},h)}var YA=Gi.styles;function OS(a){var e=rt.autoReplaceSvg==="nest"?$_(a,{styleParser:!1}):$_(a);return~e.extra.classes.indexOf(hS)?Er("generateLayersText",a,e):Er("generateSvgReplacementMutation",a,e)}function KA(){return[].concat(Xi(rS),Xi(sS))}function J_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ha)return Promise.resolve();var n=an.documentElement.classList,r=function(v){return n.add("".concat(F_,"-").concat(v))},o=function(v){return n.remove("".concat(F_,"-").concat(v))},c=rt.autoFetchSvg?KA():Py.concat(Object.keys(YA));c.includes("fa")||c.push("fa");var u=[".".concat(hS,":not([").concat(ss,"])")].concat(c.map(function(x){return".".concat(x,":not([").concat(ss,"])")})).join(", ");if(u.length===0)return Promise.resolve();var h=[];try{h=yo(a.querySelectorAll(u))}catch{}if(h.length>0)r("pending"),o("complete");else return Promise.resolve();var m=Dm.begin("onTree"),p=h.reduce(function(x,v){try{var g=OS(v);g&&x.push(g)}catch(b){fS||b.name==="MissingIcon"&&console.error(b)}return x},[]);return new Promise(function(x,v){Promise.all(p).then(function(g){LS(g,function(){r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),m(),x()})}).catch(function(g){m(),v(g)})})}function ZA(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;OS(a).then(function(n){n&&LS([n],e)})}function QA(a){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:_p(e||{}),o=n.mask;return o&&(o=(o||{}).icon?o:_p(o||{})),a(r,Ce(Ce({},n),{},{mask:o}))}}var $A=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?ta:r,c=n.symbol,u=c===void 0?!1:c,h=n.mask,m=h===void 0?null:h,p=n.maskId,x=p===void 0?null:p,v=n.classes,g=v===void 0?[]:v,b=n.attributes,T=b===void 0?{}:b,w=n.styles,_=w===void 0?{}:w;if(e){var y=e.prefix,U=e.iconName,z=e.icon;return rf(Ce({type:"icon"},e),function(){return os("beforeDOMElementCreation",{iconDefinition:e,params:n}),wm({icons:{main:xp(z),mask:m?xp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:U,transform:Ce(Ce({},ta),o),symbol:u,maskId:x,extra:{attributes:T,styles:_,classes:g}})})}},JA={mixout:function(){return{icon:QA($A)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=J_,n.nodeCallback=ZA,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,o=r===void 0?an:r,c=n.callback,u=c===void 0?function(){}:c;return J_(o,u)},e.generateSvgReplacementMutation=function(n,r){var o=r.iconName,c=r.prefix,u=r.transform,h=r.symbol,m=r.mask,p=r.maskId,x=r.extra;return new Promise(function(v,g){Promise.all([yp(o,c),m.iconName?yp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var T=ef(b,2),w=T[0],_=T[1];v([n,wm({icons:{main:w,mask:_},prefix:c,iconName:o,transform:u,symbol:h,maskId:p,extra:x,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.transform,h=n.styles,m=tf(h);m.length>0&&(o.style=m);var p;return Am(u)&&(p=Er("generateAbstractTransformGrouping",{main:c,transform:u,containerWidth:c.width,iconWidth:c.width})),r.push(p||c.icon),{children:r,attributes:o}}}},e2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,c=o===void 0?[]:o;return rf({type:"layer"},function(){os("beforeDOMElementCreation",{assembler:n,params:r});var u=[];return n(function(h){Array.isArray(h)?h.map(function(m){u=u.concat(m.abstract)}):u=u.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(rt.cssPrefix,"-layers")].concat(Xi(c)).join(" ")},children:u}]})}}}},t2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var o=r.classes,c=o===void 0?[]:o,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return rf({type:"counter",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:r}),UA({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(rt.cssPrefix,"-layers-counter")].concat(Xi(c))}})})}}}},n2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,c=o===void 0?ta:o,u=r.classes,h=u===void 0?[]:u,m=r.attributes,p=m===void 0?{}:m,x=r.styles,v=x===void 0?{}:x;return rf({type:"text",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:r}),q_({content:n,transform:Ce(Ce({},ta),c),extra:{attributes:p,styles:v,classes:["".concat(rt.cssPrefix,"-layers-text")].concat(Xi(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var o=r.transform,c=r.extra,u=null,h=null;if(Uy){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();u=p.width/m,h=p.height/m}return Promise.resolve([n,q_({content:n.innerHTML,width:u,height:h,transform:o,extra:c,watchable:!0})])}}},PS=new RegExp('"',"ug"),ex=[1105920,1112319],tx=Ce(Ce(Ce(Ce({},{FontAwesome:{normal:"fas",400:"fas"}}),AE),kT),PE),Mp=Object.keys(tx).reduce(function(a,e){return a[e.toLowerCase()]=tx[e],a},{}),i2=Object.keys(Mp).reduce(function(a,e){var n=Mp[e];return a[e]=n[900]||Xi(Object.entries(n))[0][1],a},{});function a2(a){var e=a.replace(PS,"");return xS(Xi(e)[0]||"")}function r2(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),n=a.getPropertyValue("content"),r=n.replace(PS,""),o=r.codePointAt(0),c=o>=ex[0]&&o<=ex[1],u=r.length===2?r[0]===r[1]:!1;return c||u||e}function s2(a,e){var n=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return(Mp[n]||{})[o]||i2[n]}function nx(a,e){var n="".concat(XT).concat(e.replace(":","-"));return new Promise(function(r,o){if(a.getAttribute(n)!==null)return r();var c=yo(a.children),u=c.filter(function(N){return N.getAttribute(dp)===e})[0],h=br.getComputedStyle(a,e),m=h.getPropertyValue("font-family"),p=m.match(KT),x=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(u&&!p)return a.removeChild(u),r();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),b=s2(m,x),T=a2(g),w=p[0].startsWith("FontAwesome"),_=r2(h),y=Cm(b,T),U=y;if(w){var z=gA(T);z.iconName&&z.prefix&&(y=z.iconName,b=z.prefix)}if(y&&!_&&(!u||u.getAttribute(bm)!==b||u.getAttribute(Mm)!==U)){a.setAttribute(n,U),u&&a.removeChild(u);var D=qA(),P=D.extra;P.attributes[dp]=e,yp(y,b).then(function(N){var H=wm(Ce(Ce({},D),{},{icons:{main:N,mask:CS()},prefix:b,iconName:U,extra:P,watchable:!0})),A=an.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(A,a.firstChild):a.appendChild(A),A.outerHTML=H.map(function(F){return Il(F)}).join(`
`),a.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function o2(a){return Promise.all([nx(a,"::before"),nx(a,"::after")])}function l2(a){return a.parentNode!==document.head&&!~jT.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(dp)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var c2=function(e){return!!e&&uS.some(function(n){return e.includes(n)})},u2=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var o=Lu(r),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;if(c2(u)){var h=uS.reduce(function(m,p){return m.replace(p,"")},u);h!==""&&h!=="*"&&n.add(h)}}}catch(m){o.e(m)}finally{o.f()}return n};function ix(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ha){var n;if(e)n=a;else if(rt.searchPseudoElementsFullScan)n=a.querySelectorAll("*");else{var r=new Set,o=Lu(document.styleSheets),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;try{var h=Lu(u.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,x=u2(p.selectorText),v=Lu(x),g;try{for(v.s();!(g=v.n()).done;){var b=g.value;r.add(b)}}catch(w){v.e(w)}finally{v.f()}}}catch(w){h.e(w)}finally{h.f()}}catch(w){rt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(u.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){o.e(w)}finally{o.f()}if(!r.size)return;var T=Array.from(r).join(", ");try{n=a.querySelectorAll(T)}catch{}}return new Promise(function(w,_){var y=yo(n).filter(l2).map(o2),U=Dm.begin("searchPseudoElements");US(),Promise.all(y).then(function(){U(),bp(),w()}).catch(function(){U(),bp(),_()})})}}var f2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ix,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?an:r;rt.searchPseudoElements&&ix(o)}}},ax=!1,d2={mixout:function(){return{dom:{unwatch:function(){US(),ax=!0}}}},hooks:function(){return{bootstrap:function(){Q_(vp("mutationObserverCallbacks",{}))},noAuto:function(){kA()},watch:function(n){var r=n.observeMutationsRoot;ax?bp():Q_(vp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},rx=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,o){var c=o.toLowerCase().split("-"),u=c[0],h=c.slice(1).join("-");if(u&&h==="h")return r.flipX=!0,r;if(u&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(u){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},n)},h2={mixout:function(){return{parse:{transform:function(n){return rx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=rx(o)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,c=n.containerWidth,u=n.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),p="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),x="rotate(".concat(o.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(x)},g={transform:"translate(".concat(u/2*-1," -256)")},b={outer:h,inner:v,path:g};return{tag:"g",attributes:Ce({},b.outer),children:[{tag:"g",attributes:Ce({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Ce(Ce({},r.icon.attributes),b.path)}]}]}}}},xh={x:0,y:0,width:"100%",height:"100%"};function sx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function p2(a){return a.tag==="g"?a.children:[a]}var m2={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),c=o?af(o.split(" ").map(function(u){return u.trim()})):CS();return c.prefix||(c.prefix=Mr()),n.mask=c,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.mask,h=n.maskId,m=n.transform,p=c.width,x=c.icon,v=u.width,g=u.icon,b=sA({transform:m,containerWidth:v,iconWidth:p}),T={tag:"rect",attributes:Ce(Ce({},xh),{},{fill:"white"})},w=x.children?{children:x.children.map(sx)}:{},_={tag:"g",attributes:Ce({},b.inner),children:[sx(Ce({tag:x.tag,attributes:Ce(Ce({},x.attributes),b.path)},w))]},y={tag:"g",attributes:Ce({},b.outer),children:[_]},U="mask-".concat(h||H_()),z="clip-".concat(h||H_()),D={tag:"mask",attributes:Ce(Ce({},xh),{},{id:U,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,y]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:z},children:p2(g)},D]};return r.push(P,{tag:"rect",attributes:Ce({fill:"currentColor","clip-path":"url(#".concat(z,")"),mask:"url(#".concat(U,")")},xh)}),{children:r,attributes:o}}}},g2={provides:function(e){var n=!1;br.matchMedia&&(n=br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Ce(Ce({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var u=Ce(Ce({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Ce(Ce({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:Ce(Ce({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ce(Ce({},u),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:Ce(Ce({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Ce(Ce({},u),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Ce(Ce({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ce(Ce({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},v2={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),c=o===null?!1:o===""?!0:o;return n.symbol=c,n}}}},_2=[cA,JA,e2,t2,n2,f2,d2,h2,m2,g2,v2];TA(_2,{mixoutsTo:vi});vi.noAuto;var ls=vi.config;vi.library;vi.dom;var IS=vi.parse;vi.findIconDefinition;vi.toHtml;var x2=vi.icon;vi.layer;vi.text;vi.counter;var yh={exports:{}},ml={},Sh={exports:{}},bh={};var ox;function y2(){return ox||(ox=1,(function(a){function e(L,V){var te=L.length;L.push(V);e:for(;0<te;){var ge=te-1>>>1,Me=L[ge];if(0<o(Me,V))L[ge]=V,L[te]=Me,te=ge;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var V=L[0],te=L.pop();if(te!==V){L[0]=te;e:for(var ge=0,Me=L.length,O=Me>>>1;ge<O;){var q=2*(ge+1)-1,ie=L[q],Ee=q+1,Se=L[Ee];if(0>o(ie,te))Ee<Me&&0>o(Se,ie)?(L[ge]=Se,L[Ee]=te,ge=Ee):(L[ge]=ie,L[q]=te,ge=q);else if(Ee<Me&&0>o(Se,te))L[ge]=Se,L[Ee]=te,ge=Ee;else break e}}return V}function o(L,V){var te=L.sortIndex-V.sortIndex;return te!==0?te:L.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],x=1,v=null,g=3,b=!1,T=!1,w=!1,_=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var V=n(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=L)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=n(p)}}function P(L){if(w=!1,D(L),!T)if(n(m)!==null)T=!0,N||(N=!0,Z());else{var V=n(p);V!==null&&ee(P,V.startTime-L)}}var N=!1,H=-1,A=5,F=-1;function W(){return _?!0:!(a.unstable_now()-F<A)}function k(){if(_=!1,N){var L=a.unstable_now();F=L;var V=!0;try{e:{T=!1,w&&(w=!1,U(H),H=-1),b=!0;var te=g;try{t:{for(D(L),v=n(m);v!==null&&!(v.expirationTime>L&&W());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,g=v.priorityLevel;var Me=ge(v.expirationTime<=L);if(L=a.unstable_now(),typeof Me=="function"){v.callback=Me,D(L),V=!0;break t}v===n(m)&&r(m),D(L)}else r(m);v=n(m)}if(v!==null)V=!0;else{var O=n(p);O!==null&&ee(P,O.startTime-L),V=!1}}break e}finally{v=null,g=te,b=!1}V=void 0}}finally{V?Z():N=!1}}}var Z;if(typeof z=="function")Z=function(){z(k)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,de=pe.port2;pe.port1.onmessage=k,Z=function(){de.postMessage(null)}}else Z=function(){y(k,0)};function ee(L,V){H=y(function(){L(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(L){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var te=g;g=V;try{return L()}finally{g=te}},a.unstable_requestPaint=function(){_=!0},a.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var te=g;g=L;try{return V()}finally{g=te}},a.unstable_scheduleCallback=function(L,V,te){var ge=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ge+te:ge):te=ge,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=te+Me,L={id:x++,callback:V,priorityLevel:L,startTime:te,expirationTime:Me,sortIndex:-1},te>ge?(L.sortIndex=te,e(p,L),n(m)===null&&L===n(p)&&(w?(U(H),H=-1):w=!0,ee(P,te-ge))):(L.sortIndex=Me,e(m,L),T||b||(T=!0,N||(N=!0,Z()))),L},a.unstable_shouldYield=W,a.unstable_wrapCallback=function(L){var V=g;return function(){var te=g;g=V;try{return L.apply(this,arguments)}finally{g=te}}}})(bh)),bh}var lx;function S2(){return lx||(lx=1,Sh.exports=y2()),Sh.exports}var Mh={exports:{}},Bn={};var cx;function b2(){if(cx)return Bn;cx=1;var a=_m();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Bn.flushSync=function(m){var p=u.T,x=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=x,r.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:b}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Bn.requestFormReset=function(m){r.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,x){return u.H.useFormState(m,p,x)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var ux;function M2(){if(ux)return Mh.exports;ux=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Mh.exports=b2(),Mh.exports}var fx;function E2(){if(fx)return ml;fx=1;var a=S2(),e=_m(),n=M2();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var S=!1,C=f.child;C;){if(C===s){S=!0,s=f,l=d;break}if(C===l){S=!0,l=f,s=d;break}C=C.sibling}if(!S){for(C=d.child;C;){if(C===s){S=!0,s=d,l=f;break}if(C===l){S=!0,l=d,s=f;break}C=C.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function x(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=x(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),z=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case _:return"StrictMode";case P:return"Suspense";case N:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case z:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}var ee=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ge=[],Me=-1;function O(t){return{current:t}}function q(t){0>Me||(t.current=ge[Me],ge[Me]=null,Me--)}function ie(t,i){Me++,ge[Me]=t.current,t.current=i}var Ee=O(null),Se=O(null),B=O(null),Q=O(null);function ne(t,i){switch(ie(B,i),ie(Se,t),ie(Ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Kv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Kv(i),t=Zv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Ee),ie(Ee,t)}function Re(){q(Ee),q(Se),q(B)}function Qe(t){t.memoizedState!==null&&ie(Q,t);var i=Ee.current,s=Zv(i,t.type);i!==s&&(ie(Se,t),ie(Ee,s))}function Be(t){Se.current===t&&(q(Ee),q(Se)),Q.current===t&&(q(Q),ul._currentValue=te)}var yt,ft;function ht(t){if(yt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);yt=i&&i[1]||"",ft=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+ft}var dt=!1;function Je(t,i){if(!t||dt)return"";dt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(he){var fe=he}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(he){fe=he}t.call(Te.prototype)}}else{try{throw Error()}catch(he){fe=he}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(he){if(he&&fe&&typeof he.stack=="string")return[he.stack,fe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],C=d[1];if(S&&C){var G=S.split(`
`),re=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===re.length)for(l=G.length-1,f=re.length-1;1<=l&&0<=f&&G[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==re[f]){var xe=`
`+G[l].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=l&&0<=f);break}}}finally{dt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ht(s):""}function Et(t,i){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==i&&i!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return Je(t.type,!1);case 11:return Je(t.type.render,!1);case 1:return Je(t.type,!0);case 31:return ht("Activity");default:return""}}function Ht(t){try{var i="",s=null;do i+=Et(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Oe=Object.prototype.hasOwnProperty,lt=a.unstable_scheduleCallback,Lt=a.unstable_cancelCallback,$t=a.unstable_shouldYield,K=a.unstable_requestPaint,Yt=a.unstable_now,It=a.unstable_getCurrentPriorityLevel,I=a.unstable_ImmediatePriority,M=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,ce=a.unstable_LowPriority,ve=a.unstable_IdlePriority,we=a.log,Pe=a.unstable_setDisableYieldValue,me=null,_e=null;function Ne(t){if(typeof we=="function"&&Pe(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(me,t)}catch{}}var ke=Math.clz32?Math.clz32:tt,Fe=Math.log,Ie=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(Fe(t)/Ie|0)|0}var nt=256,ut=262144,j=4194304;function De(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=De(l):(S&=C,S!==0?f=De(S):s||(s=C&~t,s!==0&&(f=De(s))))):(C=l&~d,C!==0?f=De(C):S!==0?f=De(S):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ve(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=j;return j<<=1,(j&62914560)===0&&(j=4194304),t}function Ze(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function je(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rn(t,i,s,l,f,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,re=t.hiddenUpdates;for(s=S&~s;0<s;){var xe=31-ke(s),Te=1<<xe;C[xe]=0,G[xe]=-1;var fe=re[xe];if(fe!==null)for(re[xe]=null,xe=0;xe<fe.length;xe++){var he=fe[xe];he!==null&&(he.lane&=-536870913)}s&=~Te}l!==0&&Gt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~i))}function Gt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ke(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ii(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ke(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:Eo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function To(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ao(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:x_(t.type))}function hs(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var Wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Wi,Dn="__reactProps$"+Wi,qn="__reactContainer$"+Wi,Ar="__reactEvents$"+Wi,Gl="__reactListeners$"+Wi,Vl="__reactHandles$"+Wi,Rr="__reactResources$"+Wi,Ga="__reactMarker$"+Wi;function Va(t){delete t[mn],delete t[Dn],delete t[Ar],delete t[Gl],delete t[Vl]}function oa(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[qn]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=i_(t);t!==null;){if(s=t[mn])return s;t=i_(t)}return i}t=s,s=t.parentNode}return null}function la(t){if(t=t[mn]||t[qn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Cr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ka(t){var i=t[Rr];return i||(i=t[Rr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gn(t){t[Ga]=!0}var kl=new Set,R={};function Y(t,i){ue(t,i),ue(t+"Capture",i)}function ue(t,i){for(R[t]=i,t=0;t<i.length;t++)kl.add(i[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},He={};function We(t){return Oe.call(He,t)?!0:Oe.call(le,t)?!1:oe.test(t)?He[t]=!0:(le[t]=!0,!1)}function ze(t,i,s){if(We(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ye(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function qe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ut(t){if(!t._valueTracker){var i=gt(t)?"checked":"value";t._valueTracker=et(t,i,""+t[i])}}function sn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=gt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xe(t,i,s,l,f,d,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+it(i)):t.value!==""+it(i)&&(t.value=""+it(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?St(t,S,it(i)):s!=null?St(t,S,it(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+it(C):t.removeAttribute("name")}function Fn(t,i,s,l,f,d,S,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ut(t);return}s=s!=null?""+it(s):"",i=i!=null?""+it(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ut(t)}function St(t,i,s){i==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function ri(t,i,s){if(i!=null&&(i=""+it(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+it(s):""}function Ni(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ee(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=it(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ut(t)}function si(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Xt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Li(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&on(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&on(t,d,i[d])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return Xa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var uf=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ps=null,ms=null;function Ym(t){var i=la(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+kt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Dn]||null;if(!f)throw Error(r(90));Xe(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&sn(l)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Mn(t,!!s.multiple,i,!1)}}}var df=!1;function Km(t,i,s){if(df)return t(i,s);df=!0;try{var l=t(i);return l}finally{if(df=!1,(ps!==null||ms!==null)&&(Dc(),ps&&(i=ps,t=ms,ms=ps=null,Ym(i),t)))for(i=0;i<t.length;i++)Ym(t[i])}}function Ro(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Dn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=!1;if(ua)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){hf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{hf=!1}var Wa=null,pf=null,Xl=null;function Zm(){if(Xl)return Xl;var t,i=pf,s=i.length,l,f="value"in Wa?Wa.value:Wa.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[d-l];l++);return Xl=f.slice(t,1<l?1-l:void 0)}function Wl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function jl(){return!0}function Qm(){return!1}function Yn(t){function i(s,l,f,d,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?jl:Qm,this.isPropagationStopped=Qm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),i}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Yn(Dr),wo=v({},Dr,{view:0,detail:0}),Lb=Yn(wo),mf,gf,Do,Yl=v({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(mf=t.screenX-Do.screenX,gf=t.screenY-Do.screenY):gf=mf=0,Do=t),mf)},movementY:function(t){return"movementY"in t?t.movementY:gf}}),$m=Yn(Yl),Ub=v({},Yl,{dataTransfer:0}),Ob=Yn(Ub),Pb=v({},wo,{relatedTarget:0}),vf=Yn(Pb),Ib=v({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),zb=Yn(Ib),Fb=v({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bb=Yn(Fb),Hb=v({},Dr,{data:0}),Jm=Yn(Hb),Gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xb(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=kb[t])?!!i[t]:!1}function _f(){return Xb}var Wb=v({},wo,{key:function(t){if(t.key){var i=Gb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jb=Yn(Wb),qb=v({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Yn(qb),Yb=v({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),Kb=Yn(Yb),Zb=v({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qb=Yn(Zb),$b=v({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jb=Yn($b),e1=v({},Dr,{newState:0,oldState:0}),t1=Yn(e1),n1=[9,13,27,32],xf=ua&&"CompositionEvent"in window,No=null;ua&&"documentMode"in document&&(No=document.documentMode);var i1=ua&&"TextEvent"in window&&!No,tg=ua&&(!xf||No&&8<No&&11>=No),ng=" ",ig=!1;function ag(t,i){switch(t){case"keyup":return n1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function a1(t,i){switch(t){case"compositionend":return rg(i);case"keypress":return i.which!==32?null:(ig=!0,ng);case"textInput":return t=i.data,t===ng&&ig?null:t;default:return null}}function r1(t,i){if(gs)return t==="compositionend"||!xf&&ag(t,i)?(t=Zm(),Xl=pf=Wa=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return tg&&i.locale!=="ko"?null:i.data;default:return null}}var s1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!s1[t.type]:i==="textarea"}function og(t,i,s,l){ps?ms?ms.push(l):ms=[l]:ps=l,i=zc(i,"onChange"),0<i.length&&(s=new ql("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Lo=null,Uo=null;function o1(t){kv(t,0)}function Kl(t){var i=Cr(t);if(sn(i))return t}function lg(t,i){if(t==="change")return i}var cg=!1;if(ua){var yf;if(ua){var Sf="oninput"in document;if(!Sf){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Sf=typeof ug.oninput=="function"}yf=Sf}else yf=!1;cg=yf&&(!document.documentMode||9<document.documentMode)}function fg(){Lo&&(Lo.detachEvent("onpropertychange",dg),Uo=Lo=null)}function dg(t){if(t.propertyName==="value"&&Kl(Uo)){var i=[];og(i,Uo,t,ff(t)),Km(o1,i)}}function l1(t,i,s){t==="focusin"?(fg(),Lo=i,Uo=s,Lo.attachEvent("onpropertychange",dg)):t==="focusout"&&fg()}function c1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(Uo)}function u1(t,i){if(t==="click")return Kl(i)}function f1(t,i){if(t==="input"||t==="change")return Kl(i)}function d1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:d1;function Oo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Oe.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,i){var s=hg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=hg(s)}}function mg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?mg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function gg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Jt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Jt(t.document)}return i}function bf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var h1=ua&&"documentMode"in document&&11>=document.documentMode,vs=null,Mf=null,Po=null,Ef=!1;function vg(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ef||vs==null||vs!==Jt(l)||(l=vs,"selectionStart"in l&&bf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Po&&Oo(Po,l)||(Po=l,l=zc(Mf,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=vs)))}function Nr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var _s={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Tf={},_g={};ua&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Lr(t){if(Tf[t])return Tf[t];if(!_s[t])return t;var i=_s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in _g)return Tf[t]=i[s];return t}var xg=Lr("animationend"),yg=Lr("animationiteration"),Sg=Lr("animationstart"),p1=Lr("transitionrun"),m1=Lr("transitionstart"),g1=Lr("transitioncancel"),bg=Lr("transitionend"),Mg=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function Ui(t,i){Mg.set(t,i),Y(i,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],xs=0,Rf=0;function Ql(){for(var t=xs,i=Rf=xs=0;i<t;){var s=_i[i];_i[i++]=null;var l=_i[i];_i[i++]=null;var f=_i[i];_i[i++]=null;var d=_i[i];if(_i[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&Eg(s,f,d)}}function $l(t,i,s,l){_i[xs++]=t,_i[xs++]=i,_i[xs++]=s,_i[xs++]=l,Rf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Cf(t,i,s,l){return $l(t,i,s,l),Jl(t)}function Ur(t,i){return $l(t,null,null,i),Jl(t)}function Eg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-ke(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Jl(t){if(50<il)throw il=0,zd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ys={};function v1(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,l){return new v1(t,i,s,l)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Tg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ec(t,i,s,l,f,d){var S=0;if(l=t,typeof t=="function")wf(t)&&(S=1);else if(typeof t=="string")S=bM(t,s,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case F:return t=li(31,s,i,f),t.elementType=F,t.lanes=d,t;case w:return Or(s.children,f,d,i);case _:S=8,f|=24;break;case y:return t=li(12,s,i,f|2),t.elementType=y,t.lanes=d,t;case P:return t=li(13,s,i,f),t.elementType=P,t.lanes=d,t;case N:return t=li(19,s,i,f),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case U:S=9;break e;case D:S=11;break e;case H:S=14;break e;case A:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=li(S,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Or(t,i,s,l){return t=li(7,t,l,i),t.lanes=s,t}function Df(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Ag(t){var i=li(18,null,null,0);return i.stateNode=t,i}function Nf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Rg=new WeakMap;function xi(t,i){if(typeof t=="object"&&t!==null){var s=Rg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ht(i)},Rg.set(t,i),i)}return{value:t,source:i,stack:Ht(i)}}var Ss=[],bs=0,tc=null,Io=0,yi=[],Si=0,ja=null,qi=1,Yi="";function da(t,i){Ss[bs++]=Io,Ss[bs++]=tc,tc=t,Io=i}function Cg(t,i,s){yi[Si++]=qi,yi[Si++]=Yi,yi[Si++]=ja,ja=t;var l=qi;t=Yi;var f=32-ke(l)-1;l&=~(1<<f),s+=1;var d=32-ke(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,qi=1<<32-ke(i)+f|s<<f|l,Yi=d+t}else qi=1<<d|s<<f|l,Yi=t}function Lf(t){t.return!==null&&(da(t,1),Cg(t,1,0))}function Uf(t){for(;t===tc;)tc=Ss[--bs],Ss[bs]=null,Io=Ss[--bs],Ss[bs]=null;for(;t===ja;)ja=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null,qi=yi[--Si],yi[Si]=null}function wg(t,i){yi[Si++]=qi,yi[Si++]=Yi,yi[Si++]=ja,qi=i.id,Yi=i.overflow,ja=t}var Nn=null,tn=null,Ct=!1,qa=null,bi=!1,Of=Error(r(519));function Ya(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(xi(i,t)),Of}function Dg(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[mn]=t,i[Dn]=l,s){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(s=0;s<rl.length;s++)Mt(rl[s],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),Fn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Ni(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||qv(i.textContent,s)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||Ya(t,!0)}function Ng(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Ms(t){if(t!==Nn)return!1;if(!Ct)return Ng(t),Ct=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||$d(t.type,t.memoizedProps)),s=!s),s&&tn&&Ya(t),Ng(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=n_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=n_(t)}else i===27?(i=tn,lr(t.type)?(t=ih,ih=null,tn=t):tn=i):tn=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Pr(){tn=Nn=null,Ct=!1}function Pf(){var t=qa;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),qa=null),t}function zo(t){qa===null?qa=[t]:qa.push(t)}var If=O(null),Ir=null,ha=null;function Ka(t,i,s){ie(If,i._currentValue),i._currentValue=s}function pa(t){t._currentValue=If.current,q(If)}function zf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ff(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var G=0;G<i.length;G++)if(C.context===i[G]){d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),zf(d.return,s,t),l||(S=null);break e}d=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),zf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Es(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=f.type;oi(f.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(f===Q.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}f=f.return}t!==null&&Ff(i,t,s,l),i.flags|=262144}function nc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Ir=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Lg(Ir,t)}function ic(t,i){return Ir===null&&zr(t),Lg(t,i)}function Lg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(r(308));ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ha=ha.next=i;return s}var _1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},x1=a.unstable_scheduleCallback,y1=a.unstable_NormalPriority,vn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bf(){return{controller:new _1,data:new Map,refCount:0}}function Fo(t){t.refCount--,t.refCount===0&&x1(y1,function(){t.controller.abort()})}var Bo=null,Hf=0,Ts=0,As=null;function S1(t,i){if(Bo===null){var s=Bo=[];Hf=0,Ts=kd(),As={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Hf++,i.then(Ug,Ug),i}function Ug(){if(--Hf===0&&Bo!==null){As!==null&&(As.status="fulfilled");var t=Bo;Bo=null,Ts=0,As=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function b1(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Og=L.S;L.S=function(t,i){vv=Yt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&S1(t,i),Og!==null&&Og(t,i)};var Fr=O(null);function Gf(){var t=Fr.current;return t!==null?t:en.pooledCache}function ac(t,i){i===null?ie(Fr,Fr.current):ie(Fr,i.pool)}function Pg(){var t=Gf();return t===null?null:{parent:vn._currentValue,pool:t}}var Rs=Error(r(460)),Vf=Error(r(474)),rc=Error(r(542)),sc={then:function(){}};function Ig(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Bg(t),t;default:if(typeof i.status=="string")i.then(ca,ca);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Bg(t),t}throw Hr=i,Rs}}function Br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hr=s,Rs):s}}var Hr=null;function Fg(){if(Hr===null)throw Error(r(459));var t=Hr;return Hr=null,t}function Bg(t){if(t===Rs||t===rc)throw Error(r(483))}var Cs=null,Ho=0;function oc(t){var i=Ho;return Ho+=1,Cs===null&&(Cs=[]),zg(Cs,t,i)}function Go(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function lc(t,i){throw i.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Hg(t){function i($,X){if(t){var ae=$.deletions;ae===null?($.deletions=[X],$.flags|=16):ae.push(X)}}function s($,X){if(!t)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function l($){for(var X=new Map;$!==null;)$.key!==null?X.set($.key,$):X.set($.index,$),$=$.sibling;return X}function f($,X){return $=fa($,X),$.index=0,$.sibling=null,$}function d($,X,ae){return $.index=ae,t?(ae=$.alternate,ae!==null?(ae=ae.index,ae<X?($.flags|=67108866,X):ae):($.flags|=67108866,X)):($.flags|=1048576,X)}function S($){return t&&$.alternate===null&&($.flags|=67108866),$}function C($,X,ae,be){return X===null||X.tag!==6?(X=Df(ae,$.mode,be),X.return=$,X):(X=f(X,ae),X.return=$,X)}function G($,X,ae,be){var at=ae.type;return at===w?xe($,X,ae.props.children,be,ae.key):X!==null&&(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&Br(at)===X.type)?(X=f(X,ae.props),Go(X,ae),X.return=$,X):(X=ec(ae.type,ae.key,ae.props,null,$.mode,be),Go(X,ae),X.return=$,X)}function re($,X,ae,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=Nf(ae,$.mode,be),X.return=$,X):(X=f(X,ae.children||[]),X.return=$,X)}function xe($,X,ae,be,at){return X===null||X.tag!==7?(X=Or(ae,$.mode,be,at),X.return=$,X):(X=f(X,ae),X.return=$,X)}function Te($,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Df(""+X,$.mode,ae),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case b:return ae=ec(X.type,X.key,X.props,null,$.mode,ae),Go(ae,X),ae.return=$,ae;case T:return X=Nf(X,$.mode,ae),X.return=$,X;case A:return X=Br(X),Te($,X,ae)}if(ee(X)||Z(X))return X=Or(X,$.mode,ae,null),X.return=$,X;if(typeof X.then=="function")return Te($,oc(X),ae);if(X.$$typeof===z)return Te($,ic($,X),ae);lc($,X)}return null}function fe($,X,ae,be){var at=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return at!==null?null:C($,X,""+ae,be);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case b:return ae.key===at?G($,X,ae,be):null;case T:return ae.key===at?re($,X,ae,be):null;case A:return ae=Br(ae),fe($,X,ae,be)}if(ee(ae)||Z(ae))return at!==null?null:xe($,X,ae,be,null);if(typeof ae.then=="function")return fe($,X,oc(ae),be);if(ae.$$typeof===z)return fe($,X,ic($,ae),be);lc($,ae)}return null}function he($,X,ae,be,at){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return $=$.get(ae)||null,C(X,$,""+be,at);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case b:return $=$.get(be.key===null?ae:be.key)||null,G(X,$,be,at);case T:return $=$.get(be.key===null?ae:be.key)||null,re(X,$,be,at);case A:return be=Br(be),he($,X,ae,be,at)}if(ee(be)||Z(be))return $=$.get(ae)||null,xe(X,$,be,at,null);if(typeof be.then=="function")return he($,X,ae,oc(be),at);if(be.$$typeof===z)return he($,X,ae,ic(X,be),at);lc(X,be)}return null}function Ke($,X,ae,be){for(var at=null,Ot=null,$e=X,_t=X=0,At=null;$e!==null&&_t<ae.length;_t++){$e.index>_t?(At=$e,$e=null):At=$e.sibling;var Pt=fe($,$e,ae[_t],be);if(Pt===null){$e===null&&($e=At);break}t&&$e&&Pt.alternate===null&&i($,$e),X=d(Pt,X,_t),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt,$e=At}if(_t===ae.length)return s($,$e),Ct&&da($,_t),at;if($e===null){for(;_t<ae.length;_t++)$e=Te($,ae[_t],be),$e!==null&&(X=d($e,X,_t),Ot===null?at=$e:Ot.sibling=$e,Ot=$e);return Ct&&da($,_t),at}for($e=l($e);_t<ae.length;_t++)At=he($e,$,_t,ae[_t],be),At!==null&&(t&&At.alternate!==null&&$e.delete(At.key===null?_t:At.key),X=d(At,X,_t),Ot===null?at=At:Ot.sibling=At,Ot=At);return t&&$e.forEach(function(hr){return i($,hr)}),Ct&&da($,_t),at}function ot($,X,ae,be){if(ae==null)throw Error(r(151));for(var at=null,Ot=null,$e=X,_t=X=0,At=null,Pt=ae.next();$e!==null&&!Pt.done;_t++,Pt=ae.next()){$e.index>_t?(At=$e,$e=null):At=$e.sibling;var hr=fe($,$e,Pt.value,be);if(hr===null){$e===null&&($e=At);break}t&&$e&&hr.alternate===null&&i($,$e),X=d(hr,X,_t),Ot===null?at=hr:Ot.sibling=hr,Ot=hr,$e=At}if(Pt.done)return s($,$e),Ct&&da($,_t),at;if($e===null){for(;!Pt.done;_t++,Pt=ae.next())Pt=Te($,Pt.value,be),Pt!==null&&(X=d(Pt,X,_t),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return Ct&&da($,_t),at}for($e=l($e);!Pt.done;_t++,Pt=ae.next())Pt=he($e,$,_t,Pt.value,be),Pt!==null&&(t&&Pt.alternate!==null&&$e.delete(Pt.key===null?_t:Pt.key),X=d(Pt,X,_t),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return t&&$e.forEach(function(UM){return i($,UM)}),Ct&&da($,_t),at}function Qt($,X,ae,be){if(typeof ae=="object"&&ae!==null&&ae.type===w&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case b:e:{for(var at=ae.key;X!==null;){if(X.key===at){if(at=ae.type,at===w){if(X.tag===7){s($,X.sibling),be=f(X,ae.props.children),be.return=$,$=be;break e}}else if(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&Br(at)===X.type){s($,X.sibling),be=f(X,ae.props),Go(be,ae),be.return=$,$=be;break e}s($,X);break}else i($,X);X=X.sibling}ae.type===w?(be=Or(ae.props.children,$.mode,be,ae.key),be.return=$,$=be):(be=ec(ae.type,ae.key,ae.props,null,$.mode,be),Go(be,ae),be.return=$,$=be)}return S($);case T:e:{for(at=ae.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){s($,X.sibling),be=f(X,ae.children||[]),be.return=$,$=be;break e}else{s($,X);break}else i($,X);X=X.sibling}be=Nf(ae,$.mode,be),be.return=$,$=be}return S($);case A:return ae=Br(ae),Qt($,X,ae,be)}if(ee(ae))return Ke($,X,ae,be);if(Z(ae)){if(at=Z(ae),typeof at!="function")throw Error(r(150));return ae=at.call(ae),ot($,X,ae,be)}if(typeof ae.then=="function")return Qt($,X,oc(ae),be);if(ae.$$typeof===z)return Qt($,X,ic($,ae),be);lc($,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,X!==null&&X.tag===6?(s($,X.sibling),be=f(X,ae),be.return=$,$=be):(s($,X),be=Df(ae,$.mode,be),be.return=$,$=be),S($)):s($,X)}return function($,X,ae,be){try{Ho=0;var at=Qt($,X,ae,be);return Cs=null,at}catch($e){if($e===Rs||$e===rc)throw $e;var Ot=li(29,$e,null,$.mode);return Ot.lanes=be,Ot.return=$,Ot}}}var Gr=Hg(!0),Gg=Hg(!1),Za=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Jl(t),Eg(t,null,s),i}return $l(t,l,i,s),Jl(t)}function Vo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ii(t,s)}}function Wf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var jf=!1;function ko(){if(jf){var t=As;if(t!==null)throw t}}function Xo(t,i,s,l){jf=!1;var f=t.updateQueue;Za=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,re=G.next;G.next=null,S===null?d=re:S.next=re,S=G;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,C=xe.lastBaseUpdate,C!==S&&(C===null?xe.firstBaseUpdate=re:C.next=re,xe.lastBaseUpdate=G))}if(d!==null){var Te=f.baseState;S=0,xe=re=G=null,C=d;do{var fe=C.lane&-536870913,he=fe!==C.lane;if(he?(Tt&fe)===fe:(l&fe)===fe){fe!==0&&fe===Ts&&(jf=!0),xe!==null&&(xe=xe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ke=t,ot=C;fe=i;var Qt=s;switch(ot.tag){case 1:if(Ke=ot.payload,typeof Ke=="function"){Te=Ke.call(Qt,Te,fe);break e}Te=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ot.payload,fe=typeof Ke=="function"?Ke.call(Qt,Te,fe):Ke,fe==null)break e;Te=v({},Te,fe);break e;case 2:Za=!0}}fe=C.callback,fe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=f.callbacks,he===null?f.callbacks=[fe]:he.push(fe))}else he={lane:fe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},xe===null?(re=xe=he,G=Te):xe=xe.next=he,S|=fe;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;he=C,C=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);xe===null&&(G=Te),f.baseState=G,f.firstBaseUpdate=re,f.lastBaseUpdate=xe,d===null&&(f.shared.lanes=0),ir|=S,t.lanes=S,t.memoizedState=Te}}function Vg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function kg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Vg(s[t],i)}var ws=O(null),cc=O(0);function Xg(t,i){t=Ma,ie(cc,t),ie(ws,i),Ma=t|i.baseLanes}function qf(){ie(cc,Ma),ie(ws,ws.current)}function Yf(){Ma=cc.current,q(ws),q(cc)}var ci=O(null),Mi=null;function Ja(t){var i=t.alternate;ie(hn,hn.current&1),ie(ci,t),Mi===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(Mi=t)}function Kf(t){ie(hn,hn.current),ie(ci,t),Mi===null&&(Mi=t)}function Wg(t){t.tag===22?(ie(hn,hn.current),ie(ci,t),Mi===null&&(Mi=t)):er()}function er(){ie(hn,hn.current),ie(ci,ci.current)}function ui(t){q(ci),Mi===t&&(Mi=null),q(hn)}var hn=O(0);function uc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||th(s)||nh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,vt=null,Kt=null,_n=null,fc=!1,Ds=!1,Vr=!1,dc=0,Wo=0,Ns=null,M1=0;function cn(){throw Error(r(321))}function Zf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function Qf(t,i,s,l,f,d){return ma=d,vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=t===null||t.memoizedState===null?C0:dd,Vr=!1,d=s(l,f),Vr=!1,Ds&&(d=qg(i,s,l,f)),jg(t),d}function jg(t){L.H=Yo;var i=Kt!==null&&Kt.next!==null;if(ma=0,_n=Kt=vt=null,fc=!1,Wo=0,Ns=null,i)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&nc(t)&&(xn=!0))}function qg(t,i,s,l){vt=t;var f=0;do{if(Ds&&(Ns=null),Wo=0,Ds=!1,25<=f)throw Error(r(301));if(f+=1,_n=Kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=w0,d=i(s,l)}while(Ds);return d}function E1(){var t=L.H,i=t.useState()[0];return i=typeof i.then=="function"?jo(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(vt.flags|=1024),i}function $f(){var t=dc!==0;return dc=0,t}function Jf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function ed(t){if(fc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}fc=!1}ma=0,_n=Kt=vt=null,Ds=!1,Wo=dc=0,Ns=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?vt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Kt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=_n===null?vt.memoizedState:_n.next;if(i!==null)_n=i,Kt=t;else{if(t===null)throw vt.alternate===null?Error(r(467)):Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},_n===null?vt.memoizedState=_n=t:_n=_n.next=t}return _n}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(t){var i=Wo;return Wo+=1,Ns===null&&(Ns=[]),t=zg(Ns,t,i),i=vt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?C0:dd),t}function pc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return jo(t);if(t.$$typeof===z)return Ln(t)}throw Error(r(438,String(t)))}function td(t){var i=null,s=vt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=vt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=hc(),vt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=W;return i.index++,s}function ga(t,i){return typeof i=="function"?i(t):i}function mc(t){var i=pn();return nd(i,Kt,t)}function nd(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var C=S=null,G=null,re=i,xe=!1;do{var Te=re.lane&-536870913;if(Te!==re.lane?(Tt&Te)===Te:(ma&Te)===Te){var fe=re.revertLane;if(fe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Te===Ts&&(xe=!0);else if((ma&fe)===fe){re=re.next,fe===Ts&&(xe=!0);continue}else Te={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(C=G=Te,S=d):G=G.next=Te,vt.lanes|=fe,ir|=fe;Te=re.action,Vr&&s(d,Te),d=re.hasEagerState?re.eagerState:s(d,Te)}else fe={lane:Te,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(C=G=fe,S=d):G=G.next=fe,vt.lanes|=Te,ir|=Te;re=re.next}while(re!==null&&re!==i);if(G===null?S=d:G.next=C,!oi(d,t.memoizedState)&&(xn=!0,xe&&(s=As,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=G,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function id(t){var i=pn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do d=t(d,S.action),S=S.next;while(S!==f);oi(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Yg(t,i,s){var l=vt,f=pn(),d=Ct;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!oi((Kt||f).memoizedState,s);if(S&&(f.memoizedState=s,xn=!0),f=f.queue,sd(Qg.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Ls(9,{destroy:void 0},Zg.bind(null,l,f,s,i),null),en===null)throw Error(r(349));d||(ma&127)!==0||Kg(l,i,s)}return s}function Kg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=vt.updateQueue,i===null?(i=hc(),vt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Zg(t,i,s,l){i.value=s,i.getSnapshot=l,$g(i)&&Jg(t)}function Qg(t,i,s){return s(function(){$g(i)&&Jg(t)})}function $g(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function Jg(t){var i=Ur(t,2);i!==null&&Jn(i,t,2)}function ad(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Vr){Ne(!0);try{s()}finally{Ne(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i}function e0(t,i,s,l){return t.baseState=s,nd(t,Kt,typeof l=="function"?l:ga)}function T1(t,i,s,l,f){if(_c(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};L.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,t0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function t0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=L.T,S={};L.T=S;try{var C=s(f,l),G=L.S;G!==null&&G(S,C),n0(t,i,C)}catch(re){rd(t,i,re)}finally{d!==null&&S.types!==null&&(d.types=S.types),L.T=d}}else try{d=s(f,l),n0(t,i,d)}catch(re){rd(t,i,re)}}function n0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){i0(t,i,l)},function(l){return rd(t,i,l)}):i0(t,i,s)}function i0(t,i,s){i.status="fulfilled",i.value=s,a0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,t0(t,s)))}function rd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,a0(i),i=i.next;while(i!==l)}t.action=null}function a0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function r0(t,i){return i}function s0(t,i){if(Ct){var s=en.formState;if(s!==null){e:{var l=vt;if(Ct){if(tn){t:{for(var f=tn,d=bi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){tn=Ei(f.nextSibling),l=f.data==="F!";break e}}Ya(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:i},s.queue=l,s=T0.bind(null,vt,l),l.dispatch=s,l=ad(!1),d=fd.bind(null,vt,!1,l.queue),l=kn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=T1.bind(null,vt,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function o0(t){var i=pn();return l0(i,Kt,t)}function l0(t,i,s){if(i=nd(t,i,r0)[0],t=mc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=jo(i)}catch(S){throw S===Rs?rc:S}else l=i;i=pn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(vt.flags|=2048,Ls(9,{destroy:void 0},A1.bind(null,f,s),null)),[l,d,t]}function A1(t,i){t.action=i}function c0(t){var i=pn(),s=Kt;if(s!==null)return l0(i,s,t);pn(),i=i.memoizedState,s=pn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ls(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=vt.updateQueue,i===null&&(i=hc(),vt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function u0(){return pn().memoizedState}function gc(t,i,s,l){var f=kn();vt.flags|=t,f.memoizedState=Ls(1|i,{destroy:void 0},s,l===void 0?null:l)}function vc(t,i,s,l){var f=pn();l=l===void 0?null:l;var d=f.memoizedState.inst;Kt!==null&&l!==null&&Zf(l,Kt.memoizedState.deps)?f.memoizedState=Ls(i,d,s,l):(vt.flags|=t,f.memoizedState=Ls(1|i,d,s,l))}function f0(t,i){gc(8390656,8,t,i)}function sd(t,i){vc(2048,8,t,i)}function R1(t){vt.flags|=4;var i=vt.updateQueue;if(i===null)i=hc(),vt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function d0(t){var i=pn().memoizedState;return R1({ref:i,nextImpl:t}),function(){if((zt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function h0(t,i){return vc(4,2,t,i)}function p0(t,i){return vc(4,4,t,i)}function m0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function g0(t,i,s){s=s!=null?s.concat([t]):null,vc(4,4,m0.bind(null,i,t),s)}function od(){}function v0(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Zf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function _0(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Zf(i,l[1]))return l[0];if(l=t(),Vr){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,i],l}function ld(t,i,s){return s===void 0||(ma&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=xv(),vt.lanes|=t,ir|=t,s)}function x0(t,i,s,l){return oi(s,i)?s:ws.current!==null?(t=ld(t,s,l),oi(t,i)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(Tt&261930)===0?(xn=!0,t.memoizedState=s):(t=xv(),vt.lanes|=t,ir|=t,i)}function y0(t,i,s,l,f){var d=V.p;V.p=d!==0&&8>d?d:8;var S=L.T,C={};L.T=C,fd(t,!1,i,s);try{var G=f(),re=L.S;if(re!==null&&re(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xe=b1(G,l);qo(t,i,xe,hi(t))}else qo(t,i,l,hi(t))}catch(Te){qo(t,i,{then:function(){},status:"rejected",reason:Te},hi())}finally{V.p=d,S!==null&&C.types!==null&&(S.types=C.types),L.T=S}}function C1(){}function cd(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=S0(t).queue;y0(t,f,i,te,s===null?C1:function(){return b0(t),s(l)})}function S0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:te},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function b0(t){var i=S0(t);i.next===null&&(i=t.alternate.memoizedState),qo(t,i.next.queue,{},hi())}function ud(){return Ln(ul)}function M0(){return pn().memoizedState}function E0(){return pn().memoizedState}function w1(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=Qa(s);var l=$a(i,t,s);l!==null&&(Jn(l,i,s),Vo(l,i,s)),i={cache:Bf()},t.payload=i;return}i=i.return}}function D1(t,i,s){var l=hi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(t)?A0(i,s):(s=Cf(t,i,s,l),s!==null&&(Jn(s,t,l),R0(s,i,l)))}function T0(t,i,s){var l=hi();qo(t,i,s,l)}function qo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_c(t))A0(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,C=d(S,s);if(f.hasEagerState=!0,f.eagerState=C,oi(C,S))return $l(t,i,f,0),en===null&&Ql(),!1}catch{}if(s=Cf(t,i,f,l),s!==null)return Jn(s,t,l),R0(s,i,l),!0}return!1}function fd(t,i,s,l){if(l={lane:2,revertLane:kd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_c(t)){if(i)throw Error(r(479))}else i=Cf(t,s,l,2),i!==null&&Jn(i,t,2)}function _c(t){var i=t.alternate;return t===vt||i!==null&&i===vt}function A0(t,i){Ds=fc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function R0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ii(t,s)}}var Yo={readContext:Ln,use:pc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Yo.useEffectEvent=cn;var C0={readContext:Ln,use:pc,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:f0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,gc(4194308,4,m0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return gc(4194308,4,t,i)},useInsertionEffect:function(t,i){gc(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Vr){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var f=s(i);if(Vr){Ne(!0);try{s(i)}finally{Ne(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=D1.bind(null,vt,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=ad(t);var i=t.queue,s=T0.bind(null,vt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:od,useDeferredValue:function(t,i){var s=kn();return ld(s,t,i)},useTransition:function(){var t=ad(!1);return t=y0.bind(null,vt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=vt,f=kn();if(Ct){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),en===null)throw Error(r(349));(Tt&127)!==0||Kg(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,f0(Qg.bind(null,l,d,t),[t]),l.flags|=2048,Ls(9,{destroy:void 0},Zg.bind(null,l,d,s,i),null),s},useId:function(){var t=kn(),i=en.identifierPrefix;if(Ct){var s=Yi,l=qi;s=(l&~(1<<32-ke(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=dc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=M1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:ud,useFormState:s0,useActionState:s0,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=fd.bind(null,vt,!0,s),s.dispatch=i,[t,i]},useMemoCache:td,useCacheRefresh:function(){return kn().memoizedState=w1.bind(null,vt)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((zt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},dd={readContext:Ln,use:pc,useCallback:v0,useContext:Ln,useEffect:sd,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:_0,useReducer:mc,useRef:u0,useState:function(){return mc(ga)},useDebugValue:od,useDeferredValue:function(t,i){var s=pn();return x0(s,Kt.memoizedState,t,i)},useTransition:function(){var t=mc(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:jo(t),i]},useSyncExternalStore:Yg,useId:M0,useHostTransitionStatus:ud,useFormState:o0,useActionState:o0,useOptimistic:function(t,i){var s=pn();return e0(s,Kt,t,i)},useMemoCache:td,useCacheRefresh:E0};dd.useEffectEvent=d0;var w0={readContext:Ln,use:pc,useCallback:v0,useContext:Ln,useEffect:sd,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:_0,useReducer:id,useRef:u0,useState:function(){return id(ga)},useDebugValue:od,useDeferredValue:function(t,i){var s=pn();return Kt===null?ld(s,t,i):x0(s,Kt.memoizedState,t,i)},useTransition:function(){var t=id(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:jo(t),i]},useSyncExternalStore:Yg,useId:M0,useHostTransitionStatus:ud,useFormState:c0,useActionState:c0,useOptimistic:function(t,i){var s=pn();return Kt!==null?e0(s,Kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:td,useCacheRefresh:E0};w0.useEffectEvent=d0;function hd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var pd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=hi(),f=Qa(l);f.payload=i,s!=null&&(f.callback=s),i=$a(t,f,l),i!==null&&(Jn(i,t,l),Vo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=hi(),f=Qa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=$a(t,f,l),i!==null&&(Jn(i,t,l),Vo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),l=Qa(s);l.tag=2,i!=null&&(l.callback=i),i=$a(t,l,s),i!==null&&(Jn(i,t,s),Vo(i,t,s))}};function D0(t,i,s,l,f,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Oo(s,l)||!Oo(f,d):!0}function N0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&pd.enqueueReplaceState(i,i.state,null)}function kr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function L0(t){Zl(t)}function U0(t){console.error(t)}function O0(t){Zl(t)}function xc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function P0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function md(t,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){xc(t,i)},s}function I0(t){return t=Qa(t),t.tag=3,t}function z0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){P0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){P0(i,s,l),typeof f!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function N1(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Es(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Nc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Hd(t,l,f)),!1;case 22:return s.flags|=65536,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Hd(t,l,f)),!1}throw Error(r(435,s.tag))}return Hd(t,l,f),Nc(),!1}if(Ct)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Of&&(t=Error(r(422),{cause:l}),zo(xi(t,s)))):(l!==Of&&(i=Error(r(423),{cause:l}),zo(xi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=xi(l,s),f=md(t.stateNode,l,f),Wf(t,f),un!==4&&(un=2)),!1;var d=Error(r(520),{cause:l});if(d=xi(d,s),nl===null?nl=[d]:nl.push(d),un!==4&&(un=2),i===null)return!0;l=xi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=md(s.stateNode,l,t),Wf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=I0(f),z0(f,t,s,l),Wf(s,f),!1}s=s.return}while(s!==null);return!1}var gd=Error(r(461)),xn=!1;function Un(t,i,s,l){i.child=t===null?Gg(i,null,s,l):Gr(i,t.child,s,l)}function F0(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return zr(i),l=Qf(t,i,s,S,d,f),C=$f(),t!==null&&!xn?(Jf(t,i,f),va(t,i,f)):(Ct&&C&&Lf(i),i.flags|=1,Un(t,i,l,f),i.child)}function B0(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!wf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,H0(t,i,d,l,f)):(t=ec(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Ed(t,f)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(S,l)&&t.ref===i.ref)return va(t,i,f)}return i.flags|=1,t=fa(d,l),t.ref=i.ref,t.return=i,i.child=t}function H0(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(Oo(d,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=d,Ed(t,f))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,va(t,i,f)}return vd(t,i,s,l,f)}function G0(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return V0(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ac(i,d!==null?d.cachePool:null),d!==null?Xg(i,d):qf(),Wg(i);else return l=i.lanes=536870912,V0(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(ac(i,d.cachePool),Xg(i,d),er(),i.memoizedState=null):(t!==null&&ac(i,null),qf(),er());return Un(t,i,f,s),i.child}function Ko(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function V0(t,i,s,l,f){var d=Gf();return d=d===null?null:{parent:vn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ac(i,null),qf(),Wg(i),t!==null&&Es(t,i,l,!0),i.childLanes=f,null}function yc(t,i){return i=bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function k0(t,i,s){return Gr(i,t.child,null,s),t=yc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function L1(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ct){if(l.mode==="hidden")return t=yc(i,l),i.lanes=536870912,Ko(null,t);if(Kf(i),(t=tn)?(t=t_(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ja!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=Ag(t),s.return=i,i.child=s,Nn=i,tn=null)):t=null,t===null)throw Ya(i);return i.lanes=536870912,null}return yc(i,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(Kf(i),f)if(i.flags&256)i.flags&=-257,i=k0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(xn||Es(t,i,s,!1),f=(s&t.childLanes)!==0,xn||f){if(l=en,l!==null&&(S=ai(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,Ur(t,S),Jn(l,t,S),gd;Nc(),i=k0(t,i,s)}else t=d.treeContext,tn=Ei(S.nextSibling),Nn=i,Ct=!0,qa=null,bi=!1,t!==null&&wg(i,t),i=yc(i,l),i.flags|=4096;return i}return t=fa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Sc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function vd(t,i,s,l,f){return zr(i),s=Qf(t,i,s,l,void 0,f),l=$f(),t!==null&&!xn?(Jf(t,i,f),va(t,i,f)):(Ct&&l&&Lf(i),i.flags|=1,Un(t,i,s,f),i.child)}function X0(t,i,s,l,f,d){return zr(i),i.updateQueue=null,s=qg(i,l,s,f),jg(t),l=$f(),t!==null&&!xn?(Jf(t,i,d),va(t,i,d)):(Ct&&l&&Lf(i),i.flags|=1,Un(t,i,s,d),i.child)}function W0(t,i,s,l,f){if(zr(i),i.stateNode===null){var d=ys,S=s.contextType;typeof S=="object"&&S!==null&&(d=Ln(S)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=pd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},kf(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?Ln(S):ys,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(hd(i,s,S,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&pd.enqueueReplaceState(d,d.state,null),Xo(i,l,d,f),ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,G=kr(s,C);d.props=G;var re=d.context,xe=s.contextType;S=ys,typeof xe=="object"&&xe!==null&&(S=Ln(xe));var Te=s.getDerivedStateFromProps;xe=typeof Te=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||re!==S)&&N0(i,d,l,S),Za=!1;var fe=i.memoizedState;d.state=fe,Xo(i,l,d,f),ko(),re=i.memoizedState,C||fe!==re||Za?(typeof Te=="function"&&(hd(i,s,Te,l),re=i.memoizedState),(G=Za||D0(i,s,G,l,fe,re,S))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=re),d.props=l,d.state=re,d.context=S,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Xf(t,i),S=i.memoizedProps,xe=kr(s,S),d.props=xe,Te=i.pendingProps,fe=d.context,re=s.contextType,G=ys,typeof re=="object"&&re!==null&&(G=Ln(re)),C=s.getDerivedStateFromProps,(re=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Te||fe!==G)&&N0(i,d,l,G),Za=!1,fe=i.memoizedState,d.state=fe,Xo(i,l,d,f),ko();var he=i.memoizedState;S!==Te||fe!==he||Za||t!==null&&t.dependencies!==null&&nc(t.dependencies)?(typeof C=="function"&&(hd(i,s,C,l),he=i.memoizedState),(xe=Za||D0(i,s,xe,l,fe,he,G)||t!==null&&t.dependencies!==null&&nc(t.dependencies))?(re||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,he,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,he,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=he),d.props=l,d.state=he,d.context=G,l=xe):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Sc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Gr(i,t.child,null,f),i.child=Gr(i,null,s,f)):Un(t,i,s,f),i.memoizedState=d.state,t=i.child):t=va(t,i,f),t}function j0(t,i,s,l){return Pr(),i.flags|=256,Un(t,i,s,l),i.child}var _d={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xd(t){return{baseLanes:t,cachePool:Pg()}}function yd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function q0(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ct){if(f?Ja(i):er(),(t=tn)?(t=t_(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ja!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=Ag(t),s.return=i,i.child=s,Nn=i,tn=null)):t=null,t===null)throw Ya(i);return nh(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(er(),f=i.mode,C=bc({mode:"hidden",children:C},f),l=Or(l,f,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=xd(s),l.childLanes=yd(t,S,s),i.memoizedState=_d,Ko(null,l)):(Ja(i),Sd(i,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(d)i.flags&256?(Ja(i),i.flags&=-257,i=bd(t,i,s)):i.memoizedState!==null?(er(),i.child=t.child,i.flags|=128,i=null):(er(),C=l.fallback,f=i.mode,l=bc({mode:"visible",children:l.children},f),C=Or(C,f,s,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Gr(i,t.child,null,s),l=i.child,l.memoizedState=xd(s),l.childLanes=yd(t,S,s),i.memoizedState=_d,i=Ko(null,l));else if(Ja(i),nh(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var re=S.dgst;S=re,l=Error(r(419)),l.stack="",l.digest=S,zo({value:l,source:null,stack:null}),i=bd(t,i,s)}else if(xn||Es(t,i,s,!1),S=(s&t.childLanes)!==0,xn||S){if(S=en,S!==null&&(l=ai(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Ur(t,l),Jn(S,t,l),gd;th(C)||Nc(),i=bd(t,i,s)}else th(C)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,tn=Ei(C.nextSibling),Nn=i,Ct=!0,qa=null,bi=!1,t!==null&&wg(i,t),i=Sd(i,l.children),i.flags|=4096);return i}return f?(er(),C=l.fallback,f=i.mode,G=t.child,re=G.sibling,l=fa(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,re!==null?C=fa(re,C):(C=Or(C,f,s,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Ko(null,l),l=i.child,C=t.child.memoizedState,C===null?C=xd(s):(f=C.cachePool,f!==null?(G=vn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Pg(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=yd(t,S,s),i.memoizedState=_d,Ko(t.child,l)):(Ja(i),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function Sd(t,i){return i=bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function bc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function bd(t,i,s){return Gr(i,t.child,null,s),t=Sd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Y0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),zf(t.return,i,s)}function Md(t,i,s,l,f,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=d)}function K0(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=hn.current,C=(S&2)!==0;if(C?(S=S&1|2,i.flags|=128):S&=1,ie(hn,S),Un(t,i,l,s),l=Ct?Io:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y0(t,s,i);else if(t.tag===19)Y0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&uc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Md(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&uc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Md(i,!0,s,null,d,l);break;case"together":Md(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Es(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=fa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ed(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&nc(t)))}function U1(t,i,s){switch(i.tag){case 3:ne(i,i.stateNode.containerInfo),Ka(i,vn,t.memoizedState.cache),Pr();break;case 27:case 5:Qe(i);break;case 4:ne(i,i.stateNode.containerInfo);break;case 10:Ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Kf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?q0(t,i,s):(Ja(i),t=va(t,i,s),t!==null?t.sibling:null);Ja(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Es(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return K0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(hn,hn.current),l)break;return null;case 22:return i.lanes=0,G0(t,i,s,i.pendingProps);case 24:Ka(i,vn,t.memoizedState.cache)}return va(t,i,s)}function Z0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Ed(t,s)&&(i.flags&128)===0)return xn=!1,U1(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Ct&&(i.flags&1048576)!==0&&Cg(i,Io,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Br(i.elementType),i.type=t,typeof t=="function")wf(t)?(l=kr(t,l),i.tag=1,i=W0(null,i,t,l,s)):(i.tag=0,i=vd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=F0(null,i,t,l,s);break e}else if(f===H){i.tag=14,i=B0(null,i,t,l,s);break e}}throw i=de(t)||t,Error(r(306,i,""))}}return i;case 0:return vd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=kr(l,i.pendingProps),W0(t,i,l,f,s);case 3:e:{if(ne(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Xf(t,i),Xo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Ka(i,vn,l),l!==d.cache&&Ff(i,[vn],s,!0),ko(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=j0(t,i,l,s);break e}else if(l!==f){f=xi(Error(r(424)),i),zo(f),i=j0(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,tn=Ei(t.firstChild),Nn=i,Ct=!0,qa=null,bi=!0,s=Gg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Pr(),l===f){i=va(t,i,s);break e}Un(t,i,l,s)}i=i.child}return i;case 26:return Sc(t,i),t===null?(s=o_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ct||(s=i.type,t=i.pendingProps,l=Fc(B.current).createElement(s),l[mn]=i,l[Dn]=t,On(l,s,t),gn(l),i.stateNode=l):i.memoizedState=o_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Qe(i),t===null&&Ct&&(l=i.stateNode=a_(i.type,i.pendingProps,B.current),Nn=i,bi=!0,f=tn,lr(i.type)?(ih=f,tn=Ei(l.firstChild)):tn=f),Un(t,i,i.pendingProps.children,s),Sc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ct&&((f=l=tn)&&(l=cM(l,i.type,i.pendingProps,bi),l!==null?(i.stateNode=l,Nn=i,tn=Ei(l.firstChild),bi=!1,f=!0):f=!1),f||Ya(i)),Qe(i),f=i.type,d=i.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,$d(f,d)?l=null:S!==null&&$d(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Qf(t,i,E1,null,null,s),ul._currentValue=f),Sc(t,i),Un(t,i,l,s),i.child;case 6:return t===null&&Ct&&((t=s=tn)&&(s=uM(s,i.pendingProps,bi),s!==null?(i.stateNode=s,Nn=i,tn=null,t=!0):t=!1),t||Ya(i)),null;case 13:return q0(t,i,s);case 4:return ne(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Gr(i,null,l,s):Un(t,i,l,s),i.child;case 11:return F0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ka(i,i.type,l.value),Un(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,zr(i),f=Ln(f),l=l(f),i.flags|=1,Un(t,i,l,s),i.child;case 14:return B0(t,i,i.type,i.pendingProps,s);case 15:return H0(t,i,i.type,i.pendingProps,s);case 19:return K0(t,i,s);case 31:return L1(t,i,s);case 22:return G0(t,i,s,i.pendingProps);case 24:return zr(i),l=Ln(vn),t===null?(f=Gf(),f===null&&(f=en,d=Bf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},kf(i),Ka(i,vn,f)):((t.lanes&s)!==0&&(Xf(t,i),Xo(i,null,null,s),ko()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ka(i,vn,l)):(l=d.cache,Ka(i,vn,l),l!==f.cache&&Ff(i,[vn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function _a(t){t.flags|=4}function Td(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Mv())t.flags|=8192;else throw Hr=sc,Vf}else t.flags&=-16777217}function Q0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d_(i))if(Mv())t.flags|=8192;else throw Hr=sc,Vf}function Mc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ae():536870912,t.lanes|=i,Is|=i)}function Zo(t,i){if(!Ct)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function O1(t,i,s){var l=i.pendingProps;switch(Uf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(i),null;case 1:return nn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),pa(vn),Re(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ms(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pf())),nn(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(_a(i),d!==null?(nn(i),Q0(i,d)):(nn(i),Td(i,f,null,l,s))):d?d!==t.memoizedState?(_a(i),nn(i),Q0(i,d)):(nn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&_a(i),nn(i),Td(i,f,t,l,s)),null;case 27:if(Be(i),s=B.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return nn(i),null}t=Ee.current,Ms(i)?Dg(i):(t=a_(f,l,s),i.stateNode=t,_a(i))}return nn(i),null;case 5:if(Be(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return nn(i),null}if(d=Ee.current,Ms(i))Dg(i);else{var S=Fc(B.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[mn]=i,d[Dn]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;e:switch(On(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&_a(i)}}return nn(i),Td(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=B.current,Ms(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||qv(t.nodeValue,s)),t||Ya(i,!0)}else t=Fc(t).createTextNode(l),t[mn]=i,i.stateNode=t}return nn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ms(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),t=!1}else s=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(r(558))}return nn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ms(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),f=!1}else f=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Mc(i,i.updateQueue),nn(i),null);case 4:return Re(),t===null&&qd(i.stateNode.containerInfo),nn(i),null;case 10:return pa(i.type),nn(i),null;case 19:if(q(hn),l=i.memoizedState,l===null)return nn(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Zo(l,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=uc(t),d!==null){for(i.flags|=128,Zo(l,!1),t=d.updateQueue,i.updateQueue=t,Mc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Tg(s,t),s=s.sibling;return ie(hn,hn.current&1|2),Ct&&da(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Yt()>Cc&&(i.flags|=128,f=!0,Zo(l,!1),i.lanes=4194304)}else{if(!f)if(t=uc(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Mc(i,t),Zo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ct)return nn(i),null}else 2*Yt()-l.renderingStartTime>Cc&&s!==536870912&&(i.flags|=128,f=!0,Zo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Yt(),t.sibling=null,s=hn.current,ie(hn,f?s&1|2:s&1),Ct&&da(i,l.treeForkCount),t):(nn(i),null);case 22:case 23:return ui(i),Yf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(nn(i),i.subtreeFlags&6&&(i.flags|=8192)):nn(i),s=i.updateQueue,s!==null&&Mc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&q(Fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(vn),nn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function P1(t,i){switch(Uf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(vn),Re(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Be(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(r(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return q(hn),null;case 4:return Re(),null;case 10:return pa(i.type),null;case 22:case 23:return ui(i),Yf(),t!==null&&q(Fr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function $0(t,i){switch(Uf(i),i.tag){case 3:pa(vn),Re();break;case 26:case 27:case 5:Be(i);break;case 4:Re();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:q(hn);break;case 10:pa(i.type);break;case 22:case 23:ui(i),Yf(),t!==null&&q(Fr);break;case 24:pa(vn)}}function Qo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==f)}}catch(C){jt(i,i.return,C)}}function tr(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=i;var G=s,re=C;try{re()}catch(xe){jt(f,G,xe)}}}l=l.next}while(l!==d)}}catch(xe){jt(i,i.return,xe)}}function J0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{kg(i,s)}catch(l){jt(t,t.return,l)}}}function ev(t,i,s){s.props=kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){jt(t,i,l)}}function $o(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){jt(t,i,f)}}function Ki(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){jt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){jt(t,i,f)}else s.current=null}function tv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){jt(t,t.return,f)}}function Ad(t,i,s){try{var l=t.stateNode;iM(l,t.type,s,i),l[Dn]=i}catch(f){jt(t,t.return,f)}}function nv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Rd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(l===27&&lr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Cd(t,i,s),t=t.sibling;t!==null;)Cd(t,i,s),t=t.sibling}function Ec(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&lr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ec(t,i,s),t=t.sibling;t!==null;)Ec(t,i,s),t=t.sibling}function iv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);On(i,l,s),i[mn]=t,i[Dn]=s}catch(d){jt(t,t.return,d)}}var xa=!1,yn=!1,wd=!1,av=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function I1(t,i){if(t=t.containerInfo,Zd=Wc,t=gg(t),bf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,C=-1,G=-1,re=0,xe=0,Te=t,fe=null;t:for(;;){for(var he;Te!==s||f!==0&&Te.nodeType!==3||(C=S+f),Te!==d||l!==0&&Te.nodeType!==3||(G=S+l),Te.nodeType===3&&(S+=Te.nodeValue.length),(he=Te.firstChild)!==null;)fe=Te,Te=he;for(;;){if(Te===t)break t;if(fe===s&&++re===f&&(C=S),fe===d&&++xe===l&&(G=S),(he=Te.nextSibling)!==null)break;Te=fe,fe=Te.parentNode}Te=he}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qd={focusedElem:t,selectionRange:s},Wc=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Ke=kr(s.type,f);t=l.getSnapshotBeforeUpdate(Ke,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ot){jt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)eh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function rv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),l&4&&Qo(5,s);break;case 1:if(Sa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){jt(s,s.return,S)}else{var f=kr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){jt(s,s.return,S)}}l&64&&J0(s),l&512&&$o(s,s.return);break;case 3:if(Sa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{kg(t,i)}catch(S){jt(s,s.return,S)}}break;case 27:i===null&&l&4&&iv(s);case 26:case 5:Sa(t,s),i===null&&l&4&&tv(s),l&512&&$o(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),l&4&&lv(t,s);break;case 13:Sa(t,s),l&4&&cv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=W1.bind(null,s),fM(t,s))));break;case 22:if(l=s.memoizedState!==null||xa,!l){i=i!==null&&i.memoizedState!==null||yn,f=xa;var d=yn;xa=l,(yn=i)&&!d?ba(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=f,yn=d}break;case 30:break;default:Sa(t,s)}}function sv(t){var i=t.alternate;i!==null&&(t.alternate=null,sv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Va(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,Kn=!1;function ya(t,i,s){for(s=s.child;s!==null;)ov(t,i,s),s=s.sibling}function ov(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:yn||Ki(s,i),ya(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Ki(s,i);var l=ln,f=Kn;lr(s.type)&&(ln=s.stateNode,Kn=!1),ya(t,i,s),ol(s.stateNode),ln=l,Kn=f;break;case 5:yn||Ki(s,i);case 6:if(l=ln,f=Kn,ln=null,ya(t,i,s),ln=l,Kn=f,ln!==null)if(Kn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(d){jt(s,i,d)}else try{ln.removeChild(s.stateNode)}catch(d){jt(s,i,d)}break;case 18:ln!==null&&(Kn?(t=ln,Jv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xs(t)):Jv(ln,s.stateNode));break;case 4:l=ln,f=Kn,ln=s.stateNode.containerInfo,Kn=!0,ya(t,i,s),ln=l,Kn=f;break;case 0:case 11:case 14:case 15:tr(2,s,i),yn||tr(4,s,i),ya(t,i,s);break;case 1:yn||(Ki(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&ev(s,i,l)),ya(t,i,s);break;case 21:ya(t,i,s);break;case 22:yn=(l=yn)||s.memoizedState!==null,ya(t,i,s),yn=l;break;default:ya(t,i,s)}}function lv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(s){jt(i,i.return,s)}}}function cv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(s){jt(i,i.return,s)}}function z1(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new av),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new av),i;default:throw Error(r(435,t.tag))}}function Tc(t,i){var s=z1(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=j1.bind(null,t,l);l.then(f,f)}})}function Zn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,S=i,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(lr(C.type)){ln=C.stateNode,Kn=!1;break e}break;case 5:ln=C.stateNode,Kn=!1;break e;case 3:case 4:ln=C.stateNode.containerInfo,Kn=!0;break e}C=C.return}if(ln===null)throw Error(r(160));ov(d,S,f),ln=null,Kn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)uv(i,t),i=i.sibling}var Oi=null;function uv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(i,t),Qn(t),l&4&&(tr(3,t,t.return),Qo(3,t),tr(5,t,t.return));break;case 1:Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),l&64&&xa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Oi;if(Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ga]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),On(d,l,s),d[mn]=t,gn(d),l=d;break e;case"link":var S=u_("link","href",f).get(l+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(d=S[C],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break t}}d=f.createElement(l),On(d,l,s),f.head.appendChild(d);break;case"meta":if(S=u_("meta","content",f).get(l+(s.content||""))){for(C=0;C<S.length;C++)if(d=S[C],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break t}}d=f.createElement(l),On(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[mn]=t,gn(d),l=d}t.stateNode=l}else f_(f,t.type,t.stateNode);else t.stateNode=c_(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?f_(f,t.type,t.stateNode):c_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ad(t,t.memoizedProps,s.memoizedProps)}break;case 27:Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),s!==null&&l&4&&Ad(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),t.flags&32){f=t.stateNode;try{si(f,"")}catch(Ke){jt(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Ad(t,f,s!==null?s.memoizedProps:f)),l&1024&&(wd=!0);break;case 6:if(Zn(i,t),Qn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ke){jt(t,t.return,Ke)}}break;case 3:if(Gc=null,f=Oi,Oi=Bc(i.containerInfo),Zn(i,t),Oi=f,Qn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xs(i.containerInfo)}catch(Ke){jt(t,t.return,Ke)}wd&&(wd=!1,fv(t));break;case 4:l=Oi,Oi=Bc(t.stateNode.containerInfo),Zn(i,t),Qn(t),Oi=l;break;case 12:Zn(i,t),Qn(t);break;case 31:Zn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 13:Zn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=Yt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,re=xa,xe=yn;if(xa=re||f,yn=xe||G,Zn(i,t),yn=xe,xa=re,Qn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||xa||yn||Xr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(d=G.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var Te=G.memoizedProps.style,fe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;C.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Ke){jt(G,G.return,Ke)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Ke){jt(G,G.return,Ke)}}}else if(i.tag===18){if(s===null){G=i;try{var he=G.stateNode;f?e_(he,!0):e_(G.stateNode,!1)}catch(Ke){jt(G,G.return,Ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Tc(t,s))));break;case 19:Zn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 30:break;case 21:break;default:Zn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(nv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=Rd(t);Ec(t,d,f);break;case 5:var S=s.stateNode;s.flags&32&&(si(S,""),s.flags&=-33);var C=Rd(t);Ec(t,C,S);break;case 3:case 4:var G=s.stateNode.containerInfo,re=Rd(t);Cd(t,re,G);break;default:throw Error(r(161))}}catch(xe){jt(t,t.return,xe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function fv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;fv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)rv(t,i.alternate,i),i=i.sibling}function Xr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:tr(4,i,i.return),Xr(i);break;case 1:Ki(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&ev(i,i.return,s),Xr(i);break;case 27:ol(i.stateNode);case 26:case 5:Ki(i,i.return),Xr(i);break;case 22:i.memoizedState===null&&Xr(i);break;case 30:Xr(i);break;default:Xr(i)}t=t.sibling}}function ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:ba(f,d,s),Qo(4,d);break;case 1:if(ba(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){jt(l,l.return,re)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Vg(G[f],C)}catch(re){jt(l,l.return,re)}}s&&S&64&&J0(d),$o(d,d.return);break;case 27:iv(d);case 26:case 5:ba(f,d,s),s&&l===null&&S&4&&tv(d),$o(d,d.return);break;case 12:ba(f,d,s);break;case 31:ba(f,d,s),s&&S&4&&lv(f,d);break;case 13:ba(f,d,s),s&&S&4&&cv(f,d);break;case 22:d.memoizedState===null&&ba(f,d,s),$o(d,d.return);break;case 30:break;default:ba(f,d,s)}i=i.sibling}}function Dd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Fo(s))}function Nd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t))}function Pi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dv(t,i,s,l),i=i.sibling}function dv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,l),f&2048&&Qo(9,i);break;case 1:Pi(t,i,s,l);break;case 3:Pi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t)));break;case 12:if(f&2048){Pi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,S=d.id,C=d.onPostCommit;typeof C=="function"&&C(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){jt(i,i.return,G)}}else Pi(t,i,s,l);break;case 31:Pi(t,i,s,l);break;case 13:Pi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Pi(t,i,s,l):Jo(t,i):d._visibility&2?Pi(t,i,s,l):(d._visibility|=2,Us(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Dd(S,i);break;case 24:Pi(t,i,s,l),f&2048&&Nd(i.alternate,i);break;default:Pi(t,i,s,l)}}function Us(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,S=i,C=s,G=l,re=S.flags;switch(S.tag){case 0:case 11:case 15:Us(d,S,C,G,f),Qo(8,S);break;case 23:break;case 22:var xe=S.stateNode;S.memoizedState!==null?xe._visibility&2?Us(d,S,C,G,f):Jo(d,S):(xe._visibility|=2,Us(d,S,C,G,f)),f&&re&2048&&Dd(S.alternate,S);break;case 24:Us(d,S,C,G,f),f&&re&2048&&Nd(S.alternate,S);break;default:Us(d,S,C,G,f)}i=i.sibling}}function Jo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Jo(s,l),f&2048&&Dd(l.alternate,l);break;case 24:Jo(s,l),f&2048&&Nd(l.alternate,l);break;default:Jo(s,l)}i=i.sibling}}var el=8192;function Os(t,i,s){if(t.subtreeFlags&el)for(t=t.child;t!==null;)hv(t,i,s),t=t.sibling}function hv(t,i,s){switch(t.tag){case 26:Os(t,i,s),t.flags&el&&t.memoizedState!==null&&MM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Os(t,i,s);break;case 3:case 4:var l=Oi;Oi=Bc(t.stateNode.containerInfo),Os(t,i,s),Oi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=el,el=16777216,Os(t,i,s),el=l):Os(t,i,s));break;default:Os(t,i,s)}}function pv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function tl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,gv(l,t)}pv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mv(t),t=t.sibling}function mv(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&tr(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ac(t)):tl(t);break;default:tl(t)}}function Ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,gv(l,t)}pv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:tr(8,i,i.return),Ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ac(i));break;default:Ac(i)}t=t.sibling}}function gv(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:tr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Fo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Rn=l;else e:for(s=t;Rn!==null;){l=Rn;var f=l.sibling,d=l.return;if(sv(l),l===s){Rn=null;break e}if(f!==null){f.return=d,Rn=f;break e}Rn=d}}}var F1={getCacheForType:function(t){var i=Ln(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},B1=typeof WeakMap=="function"?WeakMap:Map,zt=0,en=null,bt=null,Tt=0,Wt=0,fi=null,nr=!1,Ps=!1,Ld=!1,Ma=0,un=0,ir=0,Wr=0,Ud=0,di=0,Is=0,nl=null,$n=null,Od=!1,Rc=0,vv=0,Cc=1/0,wc=null,ar=null,En=0,rr=null,zs=null,Ea=0,Pd=0,Id=null,_v=null,il=0,zd=null;function hi(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:L.T!==null?kd():Ao()}function xv(){if(di===0)if((Tt&536870912)===0||Ct){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function Jn(t,i,s){(t===en&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),sr(t,Tt,di,!1)),je(t,s),((zt&2)===0||t!==en)&&(t===en&&((zt&2)===0&&(Wr|=s),un===4&&sr(t,Tt,di,!1)),Zi(t))}function yv(t,i,s){if((zt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=l?V1(t,i):Bd(t,i,!0),d=l;do{if(f===0){Ps&&!l&&sr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!H1(s)){f=Bd(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var C=t;f=nl;var G=C.current.memoizedState.isDehydrated;if(G&&(Fs(C,S).flags|=256),S=Bd(C,S,!1),S!==2){if(Ld&&!G){C.errorRecoveryDisabledLanes|=d,Wr|=d,f=4;break e}d=$n,$n=f,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){Fs(t,0),sr(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:sr(l,i,di,!nr);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Rc+300-Yt(),10<f)){if(sr(l,i,di,!nr),ye(l,0,!0)!==0)break e;Ea=i,l.timeoutHandle=Qv(Sv.bind(null,l,s,$n,wc,Od,i,di,Wr,Is,nr,d,"Throttled",-0,0),f);break e}Sv(l,s,$n,wc,Od,i,di,Wr,Is,nr,d,null,-0,0)}}break}while(!0);Zi(t)}function Sv(t,i,s,l,f,d,S,C,G,re,xe,Te,fe,he){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},hv(i,d,Te);var Ke=(d&62914560)===d?Rc-Yt():(d&4194048)===d?vv-Yt():0;if(Ke=EM(Te,Ke),Ke!==null){Ea=d,t.cancelPendingCommit=Ke(wv.bind(null,t,i,d,s,l,f,S,C,G,xe,Te,null,fe,he)),sr(t,d,S,!re);return}}wv(t,i,d,s,l,f,S,C,G)}function H1(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!oi(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i,s,l){i&=~Ud,i&=~Wr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-ke(f),S=1<<d;l[d]=-1,f&=~S}s!==0&&Gt(t,s,i)}function Dc(){return(zt&6)===0?(al(0),!1):!0}function Fd(){if(bt!==null){if(Wt===0)var t=bt.return;else t=bt,ha=Ir=null,ed(t),Cs=null,Ho=0,t=bt;for(;t!==null;)$0(t.alternate,t),t=t.return;bt=null}}function Fs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,sM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Fd(),en=t,bt=s=fa(t.current,null),Tt=i,Wt=0,fi=null,nr=!1,Ps=Ue(t,i),Ld=!1,Is=di=Ud=Wr=ir=un=0,$n=nl=null,Od=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ke(l),d=1<<f;i|=t[f],l&=~d}return Ma=i,Ql(),s}function bv(t,i){vt=null,L.H=Yo,i===Rs||i===rc?(i=Fg(),Wt=3):i===Vf?(i=Fg(),Wt=4):Wt=i===gd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,bt===null&&(un=1,xc(t,xi(i,t.current)))}function Mv(){var t=ci.current;return t===null?!0:(Tt&4194048)===Tt?Mi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Mi:!1}function Ev(){var t=L.H;return L.H=Yo,t===null?Yo:t}function Tv(){var t=L.A;return L.A=F1,t}function Nc(){un=4,nr||(Tt&4194048)!==Tt&&ci.current!==null||(Ps=!0),(ir&134217727)===0&&(Wr&134217727)===0||en===null||sr(en,Tt,di,!1)}function Bd(t,i,s){var l=zt;zt|=2;var f=Ev(),d=Tv();(en!==t||Tt!==i)&&(wc=null,Fs(t,i)),i=!1;var S=un;e:do try{if(Wt!==0&&bt!==null){var C=bt,G=fi;switch(Wt){case 8:Fd(),S=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var re=Wt;if(Wt=0,fi=null,Bs(t,C,G,re),s&&Ps){S=0;break e}break;default:re=Wt,Wt=0,fi=null,Bs(t,C,G,re)}}G1(),S=un;break}catch(xe){bv(t,xe)}while(!0);return i&&t.shellSuspendCounter++,ha=Ir=null,zt=l,L.H=f,L.A=d,bt===null&&(en=null,Tt=0,Ql()),S}function G1(){for(;bt!==null;)Av(bt)}function V1(t,i){var s=zt;zt|=2;var l=Ev(),f=Tv();en!==t||Tt!==i?(wc=null,Cc=Yt()+500,Fs(t,i)):Ps=Ue(t,i);e:do try{if(Wt!==0&&bt!==null){i=bt;var d=fi;t:switch(Wt){case 1:Wt=0,fi=null,Bs(t,i,d,1);break;case 2:case 9:if(Ig(d)){Wt=0,fi=null,Rv(i);break}i=function(){Wt!==2&&Wt!==9||en!==t||(Wt=7),Zi(t)},d.then(i,i);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:Ig(d)?(Wt=0,fi=null,Rv(i)):(Wt=0,fi=null,Bs(t,i,d,7));break;case 5:var S=null;switch(bt.tag){case 26:S=bt.memoizedState;case 5:case 27:var C=bt;if(S?d_(S):C.stateNode.complete){Wt=0,fi=null;var G=C.sibling;if(G!==null)bt=G;else{var re=C.return;re!==null?(bt=re,Lc(re)):bt=null}break t}}Wt=0,fi=null,Bs(t,i,d,5);break;case 6:Wt=0,fi=null,Bs(t,i,d,6);break;case 8:Fd(),un=6;break e;default:throw Error(r(462))}}k1();break}catch(xe){bv(t,xe)}while(!0);return ha=Ir=null,L.H=l,L.A=f,zt=s,bt!==null?0:(en=null,Tt=0,Ql(),un)}function k1(){for(;bt!==null&&!$t();)Av(bt)}function Av(t){var i=Z0(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,i===null?Lc(t):bt=i}function Rv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=X0(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=X0(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:ed(i);default:$0(s,i),i=bt=Tg(i,Ma),i=Z0(s,i,Ma)}t.memoizedProps=t.pendingProps,i===null?Lc(t):bt=i}function Bs(t,i,s,l){ha=Ir=null,ed(i),Cs=null,Ho=0;var f=i.return;try{if(N1(t,f,i,s,Tt)){un=1,xc(t,xi(s,t.current)),bt=null;return}}catch(d){if(f!==null)throw bt=f,d;un=1,xc(t,xi(s,t.current)),bt=null;return}i.flags&32768?(Ct||l===1?t=!0:Ps||(Tt&536870912)!==0?t=!1:(nr=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cv(i,t)):Lc(i)}function Lc(t){var i=t;do{if((i.flags&32768)!==0){Cv(i,nr);return}t=i.return;var s=O1(i.alternate,i,Ma);if(s!==null){bt=s;return}if(i=i.sibling,i!==null){bt=i;return}bt=i=t}while(i!==null);un===0&&(un=5)}function Cv(t,i){do{var s=P1(t.alternate,t);if(s!==null){s.flags&=32767,bt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){bt=t;return}bt=t=s}while(t!==null);un=6,bt=null}function wv(t,i,s,l,f,d,S,C,G){t.cancelPendingCommit=null;do Uc();while(En!==0);if((zt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Rf,rn(t,s,d,S,C,G),t===en&&(bt=en=null,Tt=0),zs=i,rr=t,Ea=s,Pd=d,Id=f,_v=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,q1(J,function(){return Ov(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,f=V.p,V.p=2,S=zt,zt|=4;try{I1(t,i,s)}finally{zt=S,V.p=f,L.T=l}}En=1,Dv(),Nv(),Lv()}}function Dv(){if(En===1){En=0;var t=rr,i=zs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var l=V.p;V.p=2;var f=zt;zt|=4;try{uv(i,t);var d=Qd,S=gg(t.containerInfo),C=d.focusedElem,G=d.selectionRange;if(S!==C&&C&&C.ownerDocument&&mg(C.ownerDocument.documentElement,C)){if(G!==null&&bf(C)){var re=G.start,xe=G.end;if(xe===void 0&&(xe=re),"selectionStart"in C)C.selectionStart=re,C.selectionEnd=Math.min(xe,C.value.length);else{var Te=C.ownerDocument||document,fe=Te&&Te.defaultView||window;if(fe.getSelection){var he=fe.getSelection(),Ke=C.textContent.length,ot=Math.min(G.start,Ke),Qt=G.end===void 0?ot:Math.min(G.end,Ke);!he.extend&&ot>Qt&&(S=Qt,Qt=ot,ot=S);var $=pg(C,ot),X=pg(C,Qt);if($&&X&&(he.rangeCount!==1||he.anchorNode!==$.node||he.anchorOffset!==$.offset||he.focusNode!==X.node||he.focusOffset!==X.offset)){var ae=Te.createRange();ae.setStart($.node,$.offset),he.removeAllRanges(),ot>Qt?(he.addRange(ae),he.extend(X.node,X.offset)):(ae.setEnd(X.node,X.offset),he.addRange(ae))}}}}for(Te=[],he=C;he=he.parentNode;)he.nodeType===1&&Te.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Te.length;C++){var be=Te[C];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Wc=!!Zd,Qd=Zd=null}finally{zt=f,V.p=l,L.T=s}}t.current=i,En=2}}function Nv(){if(En===2){En=0;var t=rr,i=zs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var l=V.p;V.p=2;var f=zt;zt|=4;try{rv(t,i.alternate,i)}finally{zt=f,V.p=l,L.T=s}}En=3}}function Lv(){if(En===4||En===3){En=0,K();var t=rr,i=zs,s=Ea,l=_v;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,zs=rr=null,Uv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ar=null),To(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,f=V.p,V.p=2,L.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var C=l[S];d(C.value,{componentStack:C.stack})}}finally{L.T=i,V.p=f}}(Ea&3)!==0&&Uc(),Zi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===zd?il++:(il=0,zd=t):il=0,al(0)}}function Uv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Fo(i)))}function Uc(){return Dv(),Nv(),Lv(),Ov()}function Ov(){if(En!==5)return!1;var t=rr,i=Pd;Pd=0;var s=To(Ea),l=L.T,f=V.p;try{V.p=32>s?32:s,L.T=null,s=Id,Id=null;var d=rr,S=Ea;if(En=0,zs=rr=null,Ea=0,(zt&6)!==0)throw Error(r(331));var C=zt;if(zt|=4,mv(d.current),dv(d,d.current,S,s),zt=C,al(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{V.p=f,L.T=l,Uv(t,i)}}function Pv(t,i,s){i=xi(s,i),i=md(t.stateNode,i,2),t=$a(t,i,2),t!==null&&(je(t,2),Zi(t))}function jt(t,i,s){if(t.tag===3)Pv(t,t,s);else for(;i!==null;){if(i.tag===3){Pv(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=xi(s,t),s=I0(2),l=$a(i,s,2),l!==null&&(z0(s,l,i,t),je(l,2),Zi(l));break}}i=i.return}}function Hd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new B1;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Ld=!0,f.add(s),t=X1.bind(null,t,i,s),i.then(t,t))}function X1(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Tt&s)===s&&(un===4||un===3&&(Tt&62914560)===Tt&&300>Yt()-Rc?(zt&2)===0&&Fs(t,0):Ud|=s,Is===Tt&&(Is=0)),Zi(t)}function Iv(t,i){i===0&&(i=Ae()),t=Ur(t,i),t!==null&&(je(t,i),Zi(t))}function W1(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Iv(t,s)}function j1(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Iv(t,s)}function q1(t,i){return lt(t,i)}var Oc=null,Hs=null,Gd=!1,Pc=!1,Vd=!1,or=0;function Zi(t){t!==Hs&&t.next===null&&(Hs===null?Oc=Hs=t:Hs=Hs.next=t),Pc=!0,Gd||(Gd=!0,K1())}function al(t,i){if(!Vd&&Pc){Vd=!0;do for(var s=!1,l=Oc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-ke(42|t)+1)-1,d&=f&~(S&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Hv(l,d))}else d=Tt,d=ye(l,l===en?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ue(l,d)||(s=!0,Hv(l,d));l=l.next}while(s);Vd=!1}}function Y1(){zv()}function zv(){Pc=Gd=!1;var t=0;or!==0&&rM()&&(t=or);for(var i=Yt(),s=null,l=Oc;l!==null;){var f=l.next,d=Fv(l,i);d===0?(l.next=null,s===null?Oc=f:s.next=f,f===null&&(Hs=s)):(s=l,(t!==0||(d&3)!==0)&&(Pc=!0)),l=f}En!==0&&En!==5||al(t),or!==0&&(or=0)}function Fv(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-ke(d),C=1<<S,G=f[S];G===-1?((C&s)===0||(C&l)!==0)&&(f[S]=Ve(C,i)):G<=i&&(t.expiredLanes|=C),d&=~C}if(i=en,s=Tt,s=ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Lt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Lt(l),To(s)){case 2:case 8:s=M;break;case 32:s=J;break;case 268435456:s=ve;break;default:s=J}return l=Bv.bind(null,t),s=lt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Lt(l),t.callbackPriority=2,t.callbackNode=null,2}function Bv(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Uc()&&t.callbackNode!==s)return null;var l=Tt;return l=ye(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(yv(t,l,i),Fv(t,Yt()),t.callbackNode!=null&&t.callbackNode===s?Bv.bind(null,t):null)}function Hv(t,i){if(Uc())return null;yv(t,i,!0)}function K1(){oM(function(){(zt&6)!==0?lt(I,Y1):zv()})}function kd(){if(or===0){var t=Ts;t===0&&(t=nt,nt<<=1,(nt&261888)===0&&(nt=256)),or=t}return or}function Gv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function Vv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Z1(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=Gv((f[Dn]||null).action),S=l.submitter;S&&(i=(i=S[Dn]||null)?Gv(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var C=new ql("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(or!==0){var G=S?Vv(f,S):new FormData(f);cd(s,{pending:!0,data:G,method:f.method,action:d},null,G)}}else typeof d=="function"&&(C.preventDefault(),G=S?Vv(f,S):new FormData(f),cd(s,{pending:!0,data:G,method:f.method,action:d},d,G))},currentTarget:f}]})}}for(var Xd=0;Xd<Af.length;Xd++){var Wd=Af[Xd],Q1=Wd.toLowerCase(),$1=Wd[0].toUpperCase()+Wd.slice(1);Ui(Q1,"on"+$1)}Ui(xg,"onAnimationEnd"),Ui(yg,"onAnimationIteration"),Ui(Sg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(p1,"onTransitionRun"),Ui(m1,"onTransitionStart"),Ui(g1,"onTransitionCancel"),Ui(bg,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function kv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var C=l[S],G=C.instance,re=C.currentTarget;if(C=C.listener,G!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=re;try{d(f)}catch(xe){Zl(xe)}f.currentTarget=null,d=G}else for(S=0;S<l.length;S++){if(C=l[S],G=C.instance,re=C.currentTarget,C=C.listener,G!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=re;try{d(f)}catch(xe){Zl(xe)}f.currentTarget=null,d=G}}}}function Mt(t,i){var s=i[Ar];s===void 0&&(s=i[Ar]=new Set);var l=t+"__bubble";s.has(l)||(Xv(i,t,2,!1),s.add(l))}function jd(t,i,s){var l=0;i&&(l|=4),Xv(s,t,l,i)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function qd(t){if(!t[Ic]){t[Ic]=!0,kl.forEach(function(s){s!=="selectionchange"&&(J1.has(s)||jd(s,!1,t),jd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ic]||(i[Ic]=!0,jd("selectionchange",!1,i))}}function Xv(t,i,s,l){switch(x_(i)){case 2:var f=RM;break;case 8:f=CM;break;default:f=lh}s=f.bind(null,i,s,t),f=void 0,!hf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Yd(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=oa(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=d=S;continue e}C=C.parentNode}}l=l.return}Km(function(){var re=d,xe=ff(s),Te=[];e:{var fe=Mg.get(t);if(fe!==void 0){var he=ql,Ke=t;switch(t){case"keypress":if(Wl(s)===0)break e;case"keydown":case"keyup":he=jb;break;case"focusin":Ke="focus",he=vf;break;case"focusout":Ke="blur",he=vf;break;case"beforeblur":case"afterblur":he=vf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Kb;break;case xg:case yg:case Sg:he=zb;break;case bg:he=Qb;break;case"scroll":case"scrollend":he=Lb;break;case"wheel":he=Jb;break;case"copy":case"cut":case"paste":he=Bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=eg;break;case"toggle":case"beforetoggle":he=t1}var ot=(i&4)!==0,Qt=!ot&&(t==="scroll"||t==="scrollend"),$=ot?fe!==null?fe+"Capture":null:fe;ot=[];for(var X=re,ae;X!==null;){var be=X;if(ae=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||ae===null||$===null||(be=Ro(X,$),be!=null&&ot.push(sl(X,be,ae))),Qt)break;X=X.return}0<ot.length&&(fe=new he(fe,Ke,null,s,xe),Te.push({event:fe,listeners:ot}))}}if((i&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",fe&&s!==uf&&(Ke=s.relatedTarget||s.fromElement)&&(oa(Ke)||Ke[qn]))break e;if((he||fe)&&(fe=xe.window===xe?xe:(fe=xe.ownerDocument)?fe.defaultView||fe.parentWindow:window,he?(Ke=s.relatedTarget||s.toElement,he=re,Ke=Ke?oa(Ke):null,Ke!==null&&(Qt=c(Ke),ot=Ke.tag,Ke!==Qt||ot!==5&&ot!==27&&ot!==6)&&(Ke=null)):(he=null,Ke=re),he!==Ke)){if(ot=$m,be="onMouseLeave",$="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ot=eg,be="onPointerLeave",$="onPointerEnter",X="pointer"),Qt=he==null?fe:Cr(he),ae=Ke==null?fe:Cr(Ke),fe=new ot(be,X+"leave",he,s,xe),fe.target=Qt,fe.relatedTarget=ae,be=null,oa(xe)===re&&(ot=new ot($,X+"enter",Ke,s,xe),ot.target=ae,ot.relatedTarget=Qt,be=ot),Qt=be,he&&Ke)t:{for(ot=eM,$=he,X=Ke,ae=0,be=$;be;be=ot(be))ae++;be=0;for(var at=X;at;at=ot(at))be++;for(;0<ae-be;)$=ot($),ae--;for(;0<be-ae;)X=ot(X),be--;for(;ae--;){if($===X||X!==null&&$===X.alternate){ot=$;break t}$=ot($),X=ot(X)}ot=null}else ot=null;he!==null&&Wv(Te,fe,he,ot,!1),Ke!==null&&Qt!==null&&Wv(Te,Qt,Ke,ot,!0)}}e:{if(fe=re?Cr(re):window,he=fe.nodeName&&fe.nodeName.toLowerCase(),he==="select"||he==="input"&&fe.type==="file")var Ot=lg;else if(sg(fe))if(cg)Ot=f1;else{Ot=c1;var $e=l1}else he=fe.nodeName,!he||he.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?re&&Bt(re.elementType)&&(Ot=lg):Ot=u1;if(Ot&&(Ot=Ot(t,re))){og(Te,Ot,s,xe);break e}$e&&$e(t,fe,re),t==="focusout"&&re&&fe.type==="number"&&re.memoizedProps.value!=null&&St(fe,"number",fe.value)}switch($e=re?Cr(re):window,t){case"focusin":(sg($e)||$e.contentEditable==="true")&&(vs=$e,Mf=re,Po=null);break;case"focusout":Po=Mf=vs=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,vg(Te,s,xe);break;case"selectionchange":if(h1)break;case"keydown":case"keyup":vg(Te,s,xe)}var _t;if(xf)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else gs?ag(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(tg&&s.locale!=="ko"&&(gs||At!=="onCompositionStart"?At==="onCompositionEnd"&&gs&&(_t=Zm()):(Wa=xe,pf="value"in Wa?Wa.value:Wa.textContent,gs=!0)),$e=zc(re,At),0<$e.length&&(At=new Jm(At,t,null,s,xe),Te.push({event:At,listeners:$e}),_t?At.data=_t:(_t=rg(s),_t!==null&&(At.data=_t)))),(_t=i1?a1(t,s):r1(t,s))&&(At=zc(re,"onBeforeInput"),0<At.length&&($e=new Jm("onBeforeInput","beforeinput",null,s,xe),Te.push({event:$e,listeners:At}),$e.data=_t)),Z1(Te,t,re,s,xe)}kv(Te,i)})}function sl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function zc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ro(t,s),f!=null&&l.unshift(sl(t,f,d)),f=Ro(t,i),f!=null&&l.push(sl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function eM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wv(t,i,s,l,f){for(var d=i._reactName,S=[];s!==null&&s!==l;){var C=s,G=C.alternate,re=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||re===null||(G=re,f?(re=Ro(s,d),re!=null&&S.unshift(sl(s,re,G))):f||(re=Ro(s,d),re!=null&&S.push(sl(s,re,G)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var tM=/\r\n?/g,nM=/\u0000|\uFFFD/g;function jv(t){return(typeof t=="string"?t:""+t).replace(tM,`
`).replace(nM,"")}function qv(t,i){return i=jv(i),jv(t)===i}function Zt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||si(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&si(t,""+l);break;case"className":Ye(t,"class",l);break;case"tabIndex":Ye(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,s,l);break;case"style":Li(t,l,d);break;case"data":if(i!=="object"){Ye(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wr(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Zt(t,i,"name",f.name,f,null),Zt(t,i,"formEncType",f.formEncType,f,null),Zt(t,i,"formMethod",f.formMethod,f,null),Zt(t,i,"formTarget",f.formTarget,f,null)):(Zt(t,i,"encType",f.encType,f,null),Zt(t,i,"method",f.method,f,null),Zt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wr(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ca);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),ze(t,"popover",l);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ze(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ji.get(s)||s,ze(t,s,l))}}function Kd(t,i,s,l,f,d){switch(s){case"style":Li(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?si(t,l):(typeof l=="number"||typeof l=="bigint")&&si(t,""+l);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ze(t,s,l)}}}function On(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Zt(t,i,d,S,s,null)}}f&&Zt(t,i,"srcSet",s.srcSet,s,null),l&&Zt(t,i,"src",s.src,s,null);return;case"input":Mt("invalid",t);var C=d=S=f=null,G=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var xe=s[l];if(xe!=null)switch(l){case"name":f=xe;break;case"type":S=xe;break;case"checked":G=xe;break;case"defaultChecked":re=xe;break;case"value":d=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,i));break;default:Zt(t,i,l,xe,s,null)}}Fn(t,d,C,G,re,S,f,!1);return;case"select":Mt("invalid",t),l=S=d=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:Zt(t,i,f,C,s,null)}i=d,s=S,t.multiple=!!l,i!=null?Mn(t,!!l,i,!1):s!=null&&Mn(t,!!l,s,!0);return;case"textarea":Mt("invalid",t),d=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Zt(t,i,S,C,s,null)}Ni(t,l,f,d);return;case"option":for(G in s)s.hasOwnProperty(G)&&(l=s[G],l!=null)&&(G==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Zt(t,i,G,l,s,null));return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(l=0;l<rl.length;l++)Mt(rl[l],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Zt(t,i,re,l,s,null)}return;default:if(Bt(i)){for(xe in s)s.hasOwnProperty(xe)&&(l=s[xe],l!==void 0&&Kd(t,i,xe,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Zt(t,i,C,l,s,null))}function iM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,C=null,G=null,re=null,xe=null;for(he in s){var Te=s[he];if(s.hasOwnProperty(he)&&Te!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":G=Te;default:l.hasOwnProperty(he)||Zt(t,i,he,null,l,Te)}}for(var fe in l){var he=l[fe];if(Te=s[fe],l.hasOwnProperty(fe)&&(he!=null||Te!=null))switch(fe){case"type":d=he;break;case"name":f=he;break;case"checked":re=he;break;case"defaultChecked":xe=he;break;case"value":S=he;break;case"defaultValue":C=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,i));break;default:he!==Te&&Zt(t,i,fe,he,l,Te)}}Xe(t,S,C,G,re,xe,d,f);return;case"select":he=S=C=fe=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":he=G;default:l.hasOwnProperty(d)||Zt(t,i,d,null,l,G)}for(f in l)if(d=l[f],G=s[f],l.hasOwnProperty(f)&&(d!=null||G!=null))switch(f){case"value":fe=d;break;case"defaultValue":C=d;break;case"multiple":S=d;default:d!==G&&Zt(t,i,f,d,l,G)}i=C,s=S,l=he,fe!=null?Mn(t,!!s,fe,!1):!!l!=!!s&&(i!=null?Mn(t,!!s,i,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":he=fe=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Zt(t,i,C,null,l,f)}for(S in l)if(f=l[S],d=s[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":fe=f;break;case"defaultValue":he=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Zt(t,i,S,f,l,d)}ri(t,fe,he);return;case"option":for(var Ke in s)fe=s[Ke],s.hasOwnProperty(Ke)&&fe!=null&&!l.hasOwnProperty(Ke)&&(Ke==="selected"?t.selected=!1:Zt(t,i,Ke,null,l,fe));for(G in l)fe=l[G],he=s[G],l.hasOwnProperty(G)&&fe!==he&&(fe!=null||he!=null)&&(G==="selected"?t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol":Zt(t,i,G,fe,l,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)fe=s[ot],s.hasOwnProperty(ot)&&fe!=null&&!l.hasOwnProperty(ot)&&Zt(t,i,ot,null,l,fe);for(re in l)if(fe=l[re],he=s[re],l.hasOwnProperty(re)&&fe!==he&&(fe!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,i));break;default:Zt(t,i,re,fe,l,he)}return;default:if(Bt(i)){for(var Qt in s)fe=s[Qt],s.hasOwnProperty(Qt)&&fe!==void 0&&!l.hasOwnProperty(Qt)&&Kd(t,i,Qt,void 0,l,fe);for(xe in l)fe=l[xe],he=s[xe],!l.hasOwnProperty(xe)||fe===he||fe===void 0&&he===void 0||Kd(t,i,xe,fe,l,he);return}}for(var $ in s)fe=s[$],s.hasOwnProperty($)&&fe!=null&&!l.hasOwnProperty($)&&Zt(t,i,$,null,l,fe);for(Te in l)fe=l[Te],he=s[Te],!l.hasOwnProperty(Te)||fe===he||fe==null&&he==null||Zt(t,i,Te,fe,l,he)}function Yv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,S=f.initiatorType,C=f.duration;if(d&&C&&Yv(S)){for(S=0,C=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],re=G.startTime;if(re>C)break;var xe=G.transferSize,Te=G.initiatorType;xe&&Yv(Te)&&(G=G.responseEnd,S+=xe*(G<C?1:(C-re)/(G-re)))}if(--l,i+=8*(d+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zd=null,Qd=null;function Fc(t){return t.nodeType===9?t:t.ownerDocument}function Kv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function $d(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jd=null;function rM(){var t=window.event;return t&&t.type==="popstate"?t===Jd?!1:(Jd=t,!0):(Jd=null,!1)}var Qv=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,oM=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(t){return $v.resolve(null).then(t).catch(lM)}:Qv;function lM(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function Jv(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Xs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ol(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ol(s);for(var d=s.firstChild;d;){var S=d.nextSibling,C=d.nodeName;d[Ga]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&ol(t.ownerDocument.body);s=f}while(s);Xs(i)}function e_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function eh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":eh(s),Va(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function cM(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ga])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function uM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function t_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ei(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ei(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var ih=null;function n_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ei(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function i_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function a_(t,i,s){switch(i=Fc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ol(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Va(t)}var Ti=new Map,r_=new Set;function Bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=V.d;V.d={f:dM,r:hM,D:pM,C:mM,L:gM,m:vM,X:xM,S:_M,M:yM};function dM(){var t=Ta.f(),i=Dc();return t||i}function hM(t){var i=la(t);i!==null&&i.tag===5&&i.type==="form"?b0(i):Ta.r(t)}var Gs=typeof document>"u"?null:document;function s_(t,i,s){var l=Gs;if(l&&typeof i=="string"&&i){var f=kt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),r_.has(f)||(r_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),On(i,"link",t),gn(i),l.head.appendChild(i)))}}function pM(t){Ta.D(t),s_("dns-prefetch",t,null)}function mM(t,i){Ta.C(t,i),s_("preconnect",t,i)}function gM(t,i,s){Ta.L(t,i,s);var l=Gs;if(l&&t&&i){var f='link[rel="preload"][as="'+kt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+kt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+kt(s.imageSizes)+'"]')):f+='[href="'+kt(t)+'"]';var d=f;switch(i){case"style":d=Vs(t);break;case"script":d=ks(t)}Ti.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ti.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ll(d))||i==="script"&&l.querySelector(cl(d))||(i=l.createElement("link"),On(i,"link",t),gn(i),l.head.appendChild(i)))}}function vM(t,i){Ta.m(t,i);var s=Gs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ks(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},i),Ti.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(cl(d)))return}l=s.createElement("link"),On(l,"link",t),gn(l),s.head.appendChild(l)}}}function _M(t,i,s){Ta.S(t,i,s);var l=Gs;if(l&&t){var f=ka(l).hoistableStyles,d=Vs(t);i=i||"default";var S=f.get(d);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(ll(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ti.get(d))&&ah(t,s);var G=S=l.createElement("link");gn(G),On(G,"link",t),G._p=new Promise(function(re,xe){G.onload=re,G.onerror=xe}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Hc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(d,S)}}}function xM(t,i){Ta.X(t,i);var s=Gs;if(s&&t){var l=ka(s).hoistableScripts,f=ks(t),d=l.get(f);d||(d=s.querySelector(cl(f)),d||(t=v({src:t,async:!0},i),(i=Ti.get(f))&&rh(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function yM(t,i){Ta.M(t,i);var s=Gs;if(s&&t){var l=ka(s).hoistableScripts,f=ks(t),d=l.get(f);d||(d=s.querySelector(cl(f)),d||(t=v({src:t,async:!0,type:"module"},i),(i=Ti.get(f))&&rh(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function o_(t,i,s,l){var f=(f=B.current)?Bc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vs(s.href),s=ka(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vs(s.href);var d=ka(f).hoistableStyles,S=d.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=f.querySelector(ll(t)))&&!d._p&&(S.instance=d,S.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||SM(f,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ks(s),s=ka(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vs(t){return'href="'+kt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function l_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function SM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),On(i,"link",s),gn(i),t.head.appendChild(i))}function ks(t){return'[src="'+kt(t)+'"]'}function cl(t){return"script[async]"+t}function c_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+kt(s.href)+'"]');if(l)return i.instance=l,gn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gn(l),On(l,"style",f),Hc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Vs(s.href);var d=t.querySelector(ll(f));if(d)return i.state.loading|=4,i.instance=d,gn(d),d;l=l_(s),(f=Ti.get(f))&&ah(l,f),d=(t.ownerDocument||t).createElement("link"),gn(d);var S=d;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),On(d,"link",l),i.state.loading|=4,Hc(d,s.precedence,t),i.instance=d;case"script":return d=ks(s.src),(f=t.querySelector(cl(d)))?(i.instance=f,gn(f),f):(l=s,(f=Ti.get(d))&&(l=v({},s),rh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),gn(f),On(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hc(l,s.precedence,t));return i.instance}function Hc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function ah(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function rh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Gc=null;function u_(t,i,s){if(Gc===null){var l=new Map,f=Gc=new Map;f.set(s,l)}else f=Gc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Ga]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=t+S;var C=l.get(S);C?C.push(d):l.set(S,[d])}}return l}function f_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function bM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function d_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function MM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Vs(l.href),d=i.querySelector(ll(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Vc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=i.ownerDocument||i,l=l_(l),(f=Ti.get(f))&&ah(l,f),d=d.createElement("link"),gn(d);var S=d;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),On(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Vc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var sh=0;function EM(t,i){return t.stylesheets&&t.count===0&&Xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&sh===0&&(sh=62500*aM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>sh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kc=null;function Xc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kc=new Map,i.forEach(TM,t),kc=null,Vc.call(t))}function TM(t,i){if(!(i.state.loading&4)){var s=kc.get(t);if(s)var l=s.get(null);else{s=new Map,kc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,f),s.set(S,f),this.count++,l=Vc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var ul={$$typeof:z,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function AM(t,i,s,l,f,d,S,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function h_(t,i,s,l,f,d,S,C,G,re,xe,Te){return t=new AM(t,i,s,S,G,re,xe,Te,C),i=1,d===!0&&(i|=24),d=li(3,null,null,i),t.current=d,d.stateNode=t,i=Bf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},kf(d),t}function p_(t){return t?(t=ys,t):ys}function m_(t,i,s,l,f,d){f=p_(f),l.context===null?l.context=f:l.pendingContext=f,l=Qa(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=$a(t,l,i),s!==null&&(Jn(s,t,i),Vo(s,t,i))}function g_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function oh(t,i){g_(t,i),(t=t.alternate)&&g_(t,i)}function v_(t){if(t.tag===13||t.tag===31){var i=Ur(t,67108864);i!==null&&Jn(i,t,67108864),oh(t,67108864)}}function __(t){if(t.tag===13||t.tag===31){var i=hi();i=Eo(i);var s=Ur(t,i);s!==null&&Jn(s,t,i),oh(t,i)}}var Wc=!0;function RM(t,i,s,l){var f=L.T;L.T=null;var d=V.p;try{V.p=2,lh(t,i,s,l)}finally{V.p=d,L.T=f}}function CM(t,i,s,l){var f=L.T;L.T=null;var d=V.p;try{V.p=8,lh(t,i,s,l)}finally{V.p=d,L.T=f}}function lh(t,i,s,l){if(Wc){var f=ch(l);if(f===null)Yd(t,i,l,jc,s),y_(t,l);else if(DM(f,t,i,s,l))l.stopPropagation();else if(y_(t,l),i&4&&-1<wM.indexOf(t)){for(;f!==null;){var d=la(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=De(d.pendingLanes);if(S!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-ke(S);C.entanglements[1]|=G,S&=~G}Zi(d),(zt&6)===0&&(Cc=Yt()+500,al(0))}}break;case 31:case 13:C=Ur(d,2),C!==null&&Jn(C,d,2),Dc(),oh(d,2)}if(d=ch(l),d===null&&Yd(t,i,l,jc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Yd(t,i,l,null,s)}}function ch(t){return t=ff(t),uh(t)}var jc=null;function uh(t){if(jc=null,t=oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return jc=t,null}function x_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(It()){case I:return 2;case M:return 8;case J:case ce:return 32;case ve:return 268435456;default:return 32}default:return 32}}var fh=!1,cr=null,ur=null,fr=null,fl=new Map,dl=new Map,dr=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y_(t,i){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function hl(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=la(i),i!==null&&v_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function DM(t,i,s,l,f){switch(i){case"focusin":return cr=hl(cr,t,i,s,l,f),!0;case"dragenter":return ur=hl(ur,t,i,s,l,f),!0;case"mouseover":return fr=hl(fr,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return fl.set(d,hl(fl.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,dl.set(d,hl(dl.get(d)||null,t,i,s,l,f)),!0}return!1}function S_(t){var i=oa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,hs(t.priority,function(){__(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,hs(t.priority,function(){__(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ch(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);uf=l,s.target.dispatchEvent(l),uf=null}else return i=la(s),i!==null&&v_(i),t.blockedOn=s,!1;i.shift()}return!0}function b_(t,i,s){qc(t)&&s.delete(i)}function NM(){fh=!1,cr!==null&&qc(cr)&&(cr=null),ur!==null&&qc(ur)&&(ur=null),fr!==null&&qc(fr)&&(fr=null),fl.forEach(b_),dl.forEach(b_)}function Yc(t,i){t.blockedOn===i&&(t.blockedOn=null,fh||(fh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,NM)))}var Kc=null;function M_(t){Kc!==t&&(Kc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Kc===t&&(Kc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(uh(l||s)===null)continue;break}var d=la(s);d!==null&&(t.splice(i,3),i-=3,cd(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Xs(t){function i(G){return Yc(G,t)}cr!==null&&Yc(cr,t),ur!==null&&Yc(ur,t),fr!==null&&Yc(fr,t),fl.forEach(i),dl.forEach(i);for(var s=0;s<dr.length;s++){var l=dr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<dr.length&&(s=dr[0],s.blockedOn===null);)S_(s),s.blockedOn===null&&dr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],S=f[Dn]||null;if(typeof d=="function")S||M_(s);else if(S){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[Dn]||null)C=S.formAction;else if(uh(f)!==null)continue}else C=S.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),M_(s)}}}function E_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function dh(t){this._internalRoot=t}Zc.prototype.render=dh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=hi();m_(s,l,t,i,null,null)},Zc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;m_(t.current,2,null,t,null,null),Dc(),i[qn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ao();t={blockedOn:null,target:t,priority:i};for(var s=0;s<dr.length&&i!==0&&i<dr[s].priority;s++);dr.splice(s,0,t),s===0&&S_(t)}};var T_=e.version;if(T_!=="19.2.8")throw Error(r(527,T_,"19.2.8"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var LM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{me=Qc.inject(LM),_e=Qc}catch{}}return ml.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=L0,d=U0,S=O0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=h_(t,1,!1,null,null,s,l,null,f,d,S,E_),t[qn]=i.current,qd(t),new dh(i)},ml.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=L0,S=U0,C=O0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=h_(t,1,!0,i,s??null,l,f,G,d,S,C,E_),i.context=p_(null),s=i.current,l=hi(),l=Eo(l),f=Qa(l),f.callback=null,$a(s,f,l),s=l,i.current.lanes=s,je(i,s),Zi(i),t[qn]=i.current,qd(t),new Zc(i)},ml.version="19.2.8",ml}var dx;function T2(){if(dx)return yh.exports;dx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),yh.exports=E2(),yh.exports}var A2=T2();function nu(a){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${a}-${e}`}function hx(a){return{id:a.message_id,role:a.role,content:a.content}}function jr(a,e,n,r){return a.map(o=>o.id!==e?o:{...o,content:n,streaming:r})}function R2(a,e,n){return e?a.find(r=>r.conversation_id===e)?.title??n:n}function C2(a,e){const[n,r]=Le.useState([]),[o,c]=Le.useState(null),u=o,[h,m]=Le.useState([]),[p,x]=Le.useState(""),[v,g]=Le.useState("idle"),[b,T]=Le.useState(null),[w,_]=Le.useState(null),[y,U]=Le.useState(null),[z,D]=Le.useState(null),[P,N]=Le.useState([]),H=Le.useRef(0),A=Le.useRef(null);Le.useEffect(()=>()=>{A.current&&clearTimeout(A.current)},[]);const F=Le.useMemo(()=>R2(n,o,e.newConversationTitle),[o,n,e.newConversationTitle]),W=v!=="idle";Le.useEffect(()=>{let ie=!0;async function Ee(){try{let Se=await a.listConversations(),B=localStorage.getItem(e.storageKey);Se.some(Re=>Re.conversation_id===B)||(B=Se[0]?.conversation_id??null),B||(B=(await a.createConversation()).conversation_id,Se=await a.listConversations());const ne=await a.loadMessages(B);if(!ie)return;r(Se),c(B),m(ne.map(hx)),localStorage.setItem(e.storageKey,B)}catch(Se){ie&&D(Se instanceof Error?Se.message:e.wakeErrorMessage)}}return Ee(),()=>{ie=!1}},[a,e.storageKey,e.wakeErrorMessage]);async function k(){r(await a.listConversations())}async function Z(){if(W||h.length===0)return!1;const ie=await a.createConversation();return c(ie.conversation_id),m([]),_(null),T(null),U(null),localStorage.setItem(e.storageKey,ie.conversation_id),await k(),!0}async function pe(ie){if(!W){if(await a.deleteConversation(ie),ie===u){const Ee=(await a.listConversations()).filter(Se=>Se.conversation_id!==ie);Ee.length>0?await ee(Ee[0].conversation_id):await Z()}await k()}}async function de(ie){return a.getPassage(ie)}async function ee(ie){if(W||ie===o)return!1;const Ee=H.current+1;H.current=Ee;const Se=await a.loadMessages(ie);return H.current!==Ee?!1:(c(ie),m(Se.map(hx)),_(null),T(null),U(null),localStorage.setItem(e.storageKey,ie),!0)}function L(ie,Ee,Se){if(ie.type==="delta"){A.current&&clearTimeout(A.current),N([]);const B=Se+ie.text;return m(Q=>jr(Q,Ee,B,!0)),{text:B,terminal:!1}}return ie.type==="completed"?(m(B=>jr(B,Ee,ie.text,!1)),T(Ee),{text:ie.text,terminal:!0}):ie.type==="tool"?(N([{name:ie.name,status:ie.status,detail:ie.detail,preview:ie.preview,handles:ie.handles}]),A.current&&clearTimeout(A.current),A.current=setTimeout(()=>N([]),3500),{text:Se,terminal:!1}):(m(B=>jr(B,Ee,Se,!1)),U(ie.message),{text:Se,terminal:!0})}async function V(ie){if(!o||W)return;const Ee=nu("assistant");x(""),_(ie),T(null),U(null),N([]),g("streaming"),m(Q=>[...Q,{id:nu("owner"),role:"owner",content:ie},{id:Ee,role:"weaver",content:"",streaming:!0}]);let Se="",B=!1;try{for await(const Q of a.streamTurn(o,ie)){const ne=L(Q,Ee,Se);if(Se=ne.text,B=ne.terminal,ne.terminal)break}B||(m(Q=>jr(Q,Ee,Se,!1)),U(e.incompleteTurnMessage))}catch(Q){m(Re=>jr(Re,Ee,Se,!1));const ne=Q instanceof Error?Q.message:e.connectionLostMessage;U(Q instanceof Error?`${ne} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await k()}catch{}}}async function te(){if(!(!o||v!=="streaming")){g("cancelling");try{await a.cancelTurn(o)}catch(ie){U(ie instanceof Error?ie.message:e.cancelFailedMessage),g("streaming")}}}async function ge(){if(!o||v!=="idle"||!b)return;const ie=b,Ee=nu("assistant");T(null),U(null),N([]),g("streaming"),m(Se=>[...Se.filter(B=>B.id!==ie),{id:Ee,role:"weaver",content:"",streaming:!0}]),await O(Ee,a.regenerateTurn(o))}async function Me(){if(!o||v!=="idle"||!w)return;const ie=nu("assistant");T(null),U(null),N([]),g("streaming"),m(Ee=>[...Ee,{id:ie,role:"weaver",content:"",streaming:!0}]),await O(ie,a.retryTurn(o))}async function O(ie,Ee){let Se="",B=!1;try{for await(const Q of Ee){const ne=L(Q,ie,Se);if(Se=ne.text,B=ne.terminal,ne.terminal)break}B||(m(Q=>jr(Q,ie,Se,!1)),U(e.incompleteTurnMessage))}catch(Q){m(Re=>jr(Re,ie,Se,!1));const ne=Q instanceof Error?Q.message:e.connectionLostMessage;U(Q instanceof Error?`${ne} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await k()}catch{}}}const q=(()=>{const ie=h[h.length-1];return ie&&ie.role==="weaver"?ie.id:null})();return{activeTitle:F,activity:P,bootError:z,cancelTurn:te,conversationId:o,conversations:n,createConversation:Z,deleteConversation:pe,loadPassage:de,draft:p,lastReplyId:q,liveReplyId:b,messages:h,recoveryMessage:y,regenerateReply:ge,retryLastTurn:Me,selectConversation:ee,sendMessage:V,setDraft:x,turnActive:W,turnState:v}}const Ai={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."},w2=["[Searching the fate tapestry.]","[Following a silver thread through the void.]","[Tracing where this memory touches the chapters.]"],D2=["[Reading what the Spell remembers.]","[Drawing the found passage into the weave.]","[Listening for the truth between the lines.]"],N2=["[Binding the scattered threads.]","[Setting each echo in its proper place.]","[Joining memory to canon.]"],L2=["[The Spell turns the question in the dark.]","[The pattern is beginning to answer.]","[Following the next thread of fate.]"];function iu(a,e){let n=0;for(const r of a)n+=r.charCodeAt(0);return e[n%e.length]}function Eh(a,e){return e.some(n=>a.includes(n))}function U2(a){if(a.status!=="start")return null;const e=a.name.toLowerCase();return Eh(e,["search","find","locate","browse","grep","glob","who_is"])?iu(e,w2):Eh(e,["read","chapter","passage","inspect"])?iu(e,D2):Eh(e,["connect","related","compare","timeline","link"])?iu(e,N2):iu(e,L2)}const zS="weaver_first_nightmare";function O2(){const a=localStorage.getItem(zS);return a==="completed"||a==="deferred"?a:null}function px(a){localStorage.setItem(zS,a)}function P2(){return O2()===null}const mx="weaver_device_id",Ep="weaver_api_key";function I2(){let a=localStorage.getItem(mx);return a||(a=crypto.randomUUID(),localStorage.setItem(mx,a)),a}function Nl(){return localStorage.getItem(Ep)??""}function FS(a){a.trim()===""?localStorage.removeItem(Ep):localStorage.setItem(Ep,a.trim())}function z2(a){const e={"X-Device-Id":I2()},n=Nl();return n!==""&&(e["X-Weaver-Key"]=n),{...e,...a}}var F2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},B2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},H2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},G2={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},V2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},k2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},X2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},W2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},j2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},q2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},Y2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},K2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Z2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},Q2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},$2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},J2={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function e3(a){return a=a-0,a===a}function BS(a){return e3(a)?a:(a=a.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var t3=(a,e)=>xm.createElement("stop",{key:`${e}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function n3(a){return a.charAt(0).toUpperCase()+a.slice(1)}var js=new Map,i3=1e3;function a3(a){if(js.has(a))return js.get(a);const e={};let n=0;const r=a.length;for(;n<r;){const o=a.indexOf(";",n),c=o===-1?r:o,u=a.slice(n,c).trim();if(u){const h=u.indexOf(":");if(h>0){const m=u.slice(0,h).trim(),p=u.slice(h+1).trim();if(m&&p){const x=BS(m);e[x.startsWith("webkit")?n3(x):x]=p}}}n=c+1}if(js.size===i3){const o=js.keys().next().value;o&&js.delete(o)}return js.set(a,e),e}function HS(a,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(v=>{let g=v;return("fill"in n||n.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),HS(a,g)}),o=e.attributes||{},c={};for(const[v,g]of Object.entries(o))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=a3(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[BS(v)]=g}const{style:u,role:h,"aria-label":m,gradientFill:p,...x}=n;if(u&&(c.style=c.style?{...c.style,...u}:u),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...b}=p;r.unshift(a(v==="linear"?"linearGradient":"radialGradient",{...b,id:p.id},g.map(t3)))}return a(e.tag,{...c,...x},...r)}var r3=HS.bind(null,xm.createElement),gx=(a,e)=>{const n=Le.useId();return a||(e?n:void 0)},s3=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},o3="searchPseudoElementsFullScan"in ls&&typeof ls.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",l3=Number.parseInt(o3)>=7,c3=()=>l3,wl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},u3={left:"fa-pull-left",right:"fa-pull-right"},f3={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},d3={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ii={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function h3(a){const e=ls.cssPrefix||ls.familyPrefix||wl;return e===wl?a:a.replace(new RegExp(String.raw`(?<=^|\s)${wl}-`,"g"),`${e}-`)}function p3(a){const{beat:e,fade:n,beatFade:r,bounce:o,shake:c,spin:u,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:x,inverse:v,border:g,flip:b,size:T,rotation:w,pull:_,swapOpacity:y,rotateBy:U,widthAuto:z,canvasSquare:D,canvasRoomy:P,flip360:N,buzz:H,float:A,jello:F,spinSnap:W,spinSnap4:k,spinSnap8:Z,swing:pe,wag:de,className:ee}=a,L=[];return ee&&L.push(...ee.split(" ")),e&&L.push(Cn.beat),n&&L.push(Cn.fade),r&&L.push(Cn.beatFade),o&&L.push(Cn.bounce),c&&L.push(Cn.shake),u&&L.push(Cn.spin),m&&L.push(Cn.spinReverse),h&&L.push(Cn.spinPulse),p&&L.push(Cn.pulse),x&&L.push(Ii.fixedWidth),v&&L.push(Ii.inverse),g&&L.push(Ii.border),b===!0&&L.push(Ii.flip),(b==="horizontal"||b==="both")&&L.push(Ii.flipHorizontal),(b==="vertical"||b==="both")&&L.push(Ii.flipVertical),T!=null&&L.push(d3[T]),w!=null&&w!==0&&L.push(f3[w]),_!=null&&L.push(u3[_]),y&&L.push(Ii.swapOpacity),c3()?(U&&L.push(Ii.rotateBy),z&&L.push(Ii.widthAuto),D&&L.push(Ii.canvasSquare),P&&L.push(Ii.canvasRoomy),N&&L.push(Cn.flip360),H&&L.push(Cn.buzz),A&&L.push(Cn.float),F&&L.push(Cn.jello),W&&L.push(Cn.spinSnap),k&&L.push(Cn.spinSnap4),Z&&L.push(Cn.spinSnap8),pe&&L.push(Cn.swing),de&&L.push(Cn.wag),(ls.cssPrefix||ls.familyPrefix||wl)===wl?L:L.map(h3)):L}var m3=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function vx(a){if(a)return m3(a)?a:IS.icon(a)}function g3(a){return Object.keys(a)}var _x=new s3("FontAwesomeIcon"),GS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},v3=new Set(Object.keys(GS)),zn=xm.forwardRef((a,e)=>{const n={...GS,...a},{icon:r,mask:o,symbol:c,title:u,titleId:h,maskId:m,transform:p}=n,x=gx(m,!!o),v=gx(h,!!u),g=vx(r);if(!g)return _x.error("Icon lookup is undefined",r),null;const b=p3(n),T=typeof p=="string"?IS.transform(p):p,w=vx(o),_=x2(g,{...b.length>0&&{classes:b},...T&&{transform:T},...w&&{mask:w},symbol:c,title:u,titleId:v,maskId:x});if(!_)return _x.error("Could not find icon",g),null;const{abstract:y}=_,U={ref:e};for(const z of g3(n))v3.has(z)||(U[z]=n[z]);return r3(y[0],U)});zn.displayName="FontAwesomeIcon";function _3(a){return E.jsx(zn,{"aria-hidden":"true",icon:X2,...a})}function xx(a){return E.jsx(zn,{"aria-hidden":"true",icon:Q2,...a})}function x3(a){return E.jsx(zn,{"aria-hidden":"true",icon:Z2,...a})}function y3(a){return E.jsx(zn,{"aria-hidden":"true",icon:j2,...a})}function S3(a){return E.jsx(zn,{"aria-hidden":"true",icon:$2,...a})}function b3(a){return E.jsx(zn,{"aria-hidden":"true",icon:V2,...a})}function VS(a){return E.jsx(zn,{"aria-hidden":"true",icon:F2,...a})}function M3(a){return E.jsx(zn,{"aria-hidden":"true",icon:K2,...a})}function kS(a){return E.jsx(zn,{"aria-hidden":"true",icon:k2,...a})}function E3(a){return E.jsx(zn,{"aria-hidden":"true",icon:B2,...a})}function T3(a){return E.jsx(zn,{"aria-hidden":"true",icon:q2,...a})}function Tp(a){return E.jsx(zn,{"aria-hidden":"true",icon:Y2,...a})}function yx(a){return E.jsx(zn,{"aria-hidden":"true",icon:J2,...a})}function A3(a){return E.jsx(zn,{"aria-hidden":"true",icon:W2,...a})}function R3(a){return E.jsx(zn,{"aria-hidden":"true",icon:G2,...a})}const C3=["awakened","ascended","transcendent"];function w3({cancelling:a,draft:e,inputLabel:n="Message assistant",onCancel:r,onDraftChange:o,onSubmit:c,onTierChange:u,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:x="Stopping assistant",textareaRef:v,tier:g,turnActive:b}){const T=Le.useRef(null),w=v??T,_=Le.useRef(null),[y,U]=Le.useState(!1);Le.useEffect(()=>{const P=w.current;P&&(P.style.height="auto",P.style.height=`${Math.min(P.scrollHeight,160)}px`)},[e,w]),Le.useEffect(()=>{if(!y)return;function P(H){_.current&&!_.current.contains(H.target)&&U(!1)}function N(H){H.key==="Escape"&&U(!1)}return document.addEventListener("pointerdown",P),document.addEventListener("keydown",N),()=>{document.removeEventListener("pointerdown",P),document.removeEventListener("keydown",N)}},[y]);function z(){const P=e.trim();!P||b||c(P)}function D(P){P.key!=="Enter"||P.shiftKey||(P.preventDefault(),z())}return E.jsx("div",{className:"composer-wrap",children:E.jsxs("div",{className:"composer-shell",children:[E.jsx("textarea",{"aria-label":n,disabled:b,onChange:P=>o(P.target.value),onKeyDown:D,placeholder:h,ref:w,rows:1,value:e}),E.jsxs("div",{className:"composer-tier",ref:_,children:[E.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:b,onClick:()=>U(P=>!P),type:"button",children:[E.jsx("span",{className:"tier-pill-name",children:g}),E.jsx(Tp,{})]}),y&&E.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:C3.map(P=>E.jsx("li",{children:E.jsxs("button",{"aria-selected":P===g,onClick:()=>{u(P),U(!1)},role:"option",type:"button",children:[E.jsx("span",{className:"tier-menu-check",children:P===g?"✦":""}),P]})},P))})]}),b?E.jsx("button",{"aria-label":a?x:p,className:"composer-action composer-stop",disabled:a,onClick:r,type:"button",children:E.jsx(S3,{})}):E.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:z,type:"button",children:E.jsx(_3,{})})]})})}function XS({label:a="Weaver is weaving an answer"}={}){return E.jsx("div",{"aria-label":a,className:"fate-weaving-loader",role:"status",children:E.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 128 36",children:[E.jsx("path",{className:"fate-loader-thread fate-loader-thread-one",d:"M2 7 C30 7, 37 18, 64 18 S98 29, 126 29",pathLength:"1"}),E.jsx("path",{className:"fate-loader-thread fate-loader-thread-two",d:"M2 29 C30 29, 37 18, 64 18 S98 7, 126 7",pathLength:"1"}),E.jsx("path",{className:"fate-loader-thread fate-loader-thread-three",d:"M2 18 C32 18, 42 12, 64 18 S96 24, 126 18",pathLength:"1"}),E.jsx("circle",{className:"fate-loader-core fate-loader-core-one",cx:"40",cy:"15",r:"1.7"}),E.jsx("circle",{className:"fate-loader-core fate-loader-core-two",cx:"64",cy:"18",r:"2.3"}),E.jsx("circle",{className:"fate-loader-core fate-loader-core-three",cx:"89",cy:"21",r:"1.7"})]})})}const D3=[{x:-78,y:-20},{x:-60,y:-14},{x:-42,y:-8},{x:-24,y:-3},{x:-7,y:0},{x:12,y:2},{x:30,y:7},{x:48,y:13},{x:67,y:20},{x:-78,y:20},{x:-60,y:14},{x:-42,y:8},{x:-24,y:3},{x:-7,y:0},{x:12,y:-2},{x:30,y:-7},{x:48,y:-13},{x:67,y:-20},{x:-2,y:-27},{x:-1,y:-14},{x:0,y:14},{x:1,y:27}];function N3(a,e){return{"--fragment-index":e,"--fragment-x":`${a.x}px`,"--fragment-y":`${a.y}px`}}function L3({announcement:a,eventKey:e}){return E.jsxs("div",{"aria-live":"polite",className:"first-nightmare-rune-event",children:[E.jsxs("div",{"aria-hidden":"true",className:"first-nightmare-particles",children:[E.jsxs("svg",{className:"first-nightmare-thread",viewBox:"0 0 180 60",children:[E.jsx("path",{d:"M5 12 C48 12 53 48 90 30 S135 12 175 48"}),E.jsx("path",{d:"M5 48 C48 48 53 12 90 30 S135 48 175 12"})]}),D3.map((n,r)=>E.jsx("span",{style:N3(n,r)},r))]}),E.jsx("p",{children:a})]},e)}const U3=["a[href]","button:not(:disabled)","input:not(:disabled)"].join(", ");function O3(a){const e=a.closest(".spell-surface-lab");if(!e)return()=>{};const n=Array.from(e.children).filter(o=>o!==a),r=n.map(o=>({ariaHidden:o.getAttribute("aria-hidden"),element:o,inert:o.inert}));for(const o of n)o.inert=!0,o.setAttribute("aria-hidden","true");return()=>{for(const o of r)o.element.inert=o.inert,o.ariaHidden===null?o.element.removeAttribute("aria-hidden"):o.element.setAttribute("aria-hidden",o.ariaHidden)}}function P3({initialStep:a=1,onComplete:e,onDefer:n,onKeyStored:r}){const[o,c]=Le.useState(a),[u,h]=Le.useState(Nl),[m,p]=Le.useState(!1),x=Le.useRef(null),v=Le.useRef(document.activeElement instanceof HTMLElement?document.activeElement:null);Le.useEffect(()=>{const _=x.current;if(!_)return;const y=O3(_.parentElement??_);return()=>{y(),v.current?.focus()}},[]),Le.useEffect(()=>{x.current?.querySelector("[data-autofocus]")?.focus()},[o]);function g(){px("deferred"),n()}function b(){try{FS(u),px("completed"),p(!1),r(),c(4)}catch{p(!0)}}function T(_){if(_.key==="Escape"){_.preventDefault(),g();return}if(_.key!=="Tab"||!x.current)return;const y=x.current.querySelectorAll(U3),U=y[0],z=y[y.length-1];_.shiftKey&&document.activeElement===U&&(_.preventDefault(),z?.focus()),!_.shiftKey&&document.activeElement===z&&(_.preventDefault(),U?.focus())}const w=["","[The Nightmare Spell has found you.]","[The trial has taken shape.]","[Every Nightmare finds the vulnerable place.]","[Your preparation has been appraised.]"][o];return E.jsx("div",{className:"first-nightmare-backdrop",children:E.jsxs("section",{"aria-label":"First Nightmare setup","aria-modal":"true",className:"first-nightmare-panel",onKeyDown:T,ref:x,role:"dialog",children:[E.jsxs("header",{className:"first-nightmare-head",children:[E.jsx("span",{children:"First Nightmare"}),E.jsxs("small",{children:["· ",o," of 4"]})]}),E.jsx(L3,{announcement:w,eventKey:o}),E.jsxs("div",{className:"first-nightmare-content",children:[o===1&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"The Spell has found you"}),E.jsx("p",{children:"A thread has taken root in this browser. Before Weaver can read with you, there is one small trial."}),E.jsxs("div",{className:"first-nightmare-actions",children:[E.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:()=>c(2),type:"button",children:"Enter the First Nightmare"}),E.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===2&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"Bring your DeepSeek key"}),E.jsx("p",{children:"A DeepSeek API key is a private code that lets Weaver send your questions to DeepSeek and charge the model usage to your DeepSeek account."}),E.jsx("aside",{className:"first-nightmare-privacy",children:"Your key stays in this browser. Weaver sends it with each request and the server does not save it."}),E.jsxs("a",{href:"https://platform.deepseek.com/",rel:"noreferrer",target:"_blank",children:["Get a key from DeepSeek",E.jsx("span",{className:"sr-only",children:", opens the DeepSeek Platform in a new tab"})]}),E.jsxs("div",{className:"first-nightmare-actions",children:[E.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:()=>c(3),type:"button",children:"I have a key"}),E.jsx("button",{onClick:()=>c(1),type:"button",children:"Back"}),E.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===3&&E.jsxs("form",{onSubmit:_=>{_.preventDefault(),b()},children:[E.jsx("h1",{children:"Face the trial"}),E.jsx("label",{htmlFor:"first-nightmare-api-key",children:"Your DeepSeek API key"}),E.jsx("input",{autoCapitalize:"none",autoComplete:"off","data-autofocus":!0,id:"first-nightmare-api-key",onChange:_=>h(_.target.value),placeholder:"sk-...",spellCheck:!1,type:"password",value:u}),E.jsx("small",{children:"Stored only in this browser. You can replace or remove it later in Settings."}),m&&E.jsx("p",{className:"first-nightmare-error",role:"alert",children:"The key could not be stored in this browser. Check browser storage and try again."}),E.jsxs("div",{className:"first-nightmare-actions",children:[E.jsx("button",{className:"first-nightmare-primary",disabled:u.trim()==="",type:"submit",children:"Store key and continue"}),E.jsx("button",{onClick:()=>c(2),type:"button",children:"Back"}),E.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===4&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"first-nightmare-weaving",children:[E.jsx(XS,{label:"Fate threads draw together"}),E.jsx("span",{children:"[Fate threads draw together.]"})]}),E.jsxs("div",{"aria-label":"Appraisal: Glorious",className:"first-nightmare-appraisal",children:[E.jsx("span",{children:"Good"}),E.jsx("span",{children:"Exceptional"}),E.jsx("span",{children:"Remarkable"}),E.jsx("span",{children:"Glorious"})]}),E.jsx("h1",{children:"Your Aspect awakens"}),E.jsx("p",{children:"The key is stored in this browser. Weaver can now read, reread, and answer through your DeepSeek account."}),E.jsx("div",{className:"first-nightmare-actions",children:E.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:e,type:"button",children:"Enter Weaver"})})]})]},o)]})})}const I3=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function z3(a){try{const e=new URL(a);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function Th(a,e){if(!e)return;const n=a.at(-1);if(n?.type==="text"){n.value+=e;return}a.push({type:"text",value:e})}function au(a){const e=[];let n=0;for(const r of a.matchAll(I3)){const o=r.index??0;Th(e,a.slice(n,o));const c=r[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const u=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=u?.[2]??"";u&&z3(h)?e.push({type:"link",label:u[1],href:h}):Th(e,c)}n=o+c.length}return Th(e,a.slice(n)),e}function F3(a){const e=a.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function B3(a){const e=[],n=String(a??"").split(/\r?\n/);let r=0;for(;r<n.length;){const o=n[r].trim();if(!o){r+=1;continue}if(o.startsWith("```")){const p=[];for(r+=1;r<n.length&&!n[r].trimStart().startsWith("```");)p.push(n[r]),r+=1;r<n.length&&(r+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(o);if(c){e.push({type:"heading",level:c[1].length,children:au(c[2])}),r+=1;continue}if(o.startsWith(">")){e.push({type:"quote",children:au(o.replace(/^>\s?/,""))}),r+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(o)){e.push({type:"rule"}),r+=1;continue}const u=/^[-*]\s+/.test(o),h=/^\d+[.)]\s+/.test(o);if(u||h){const p=[];for(;r<n.length;){const x=n[r].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(x):/^[-*]\s+(.*)$/.exec(x);if(!v)break;p.push(au(v[1])),r+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;r<n.length;){const p=n[r].trim();if(!p||m.length>0&&F3(p))break;m.push(p),r+=1}e.push({type:"paragraph",children:au(m.join(" "))})}return e}function lo(a){return a.map((e,n)=>{const r=`${e.type}-${n}`;return e.type==="text"?E.jsx(Le.Fragment,{children:e.value},r):e.type==="strong"?E.jsx("strong",{children:lo(e.children)},r):e.type==="emphasis"?E.jsx("em",{children:lo(e.children)},r):e.type==="code"?E.jsx("code",{children:e.value},r):E.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},r)})}function H3({children:a}){return B3(a).map((n,r)=>{const o=`${n.type}-${r}`;if(n.type==="paragraph")return E.jsx("p",{children:lo(n.children)},o);if(n.type==="heading"){const u=`h${n.level}`;return E.jsx(u,{children:lo(n.children)},o)}if(n.type==="code")return E.jsx("pre",{children:E.jsx("code",{children:n.value})},o);if(n.type==="quote")return E.jsx("blockquote",{children:lo(n.children)},o);if(n.type==="rule")return E.jsx("hr",{},o);const c=n.ordered?"ol":"ul";return E.jsx(c,{children:n.items.map((u,h)=>E.jsx("li",{children:lo(u)},`${o}-${h}`))},o)})}function G3({Mark:a,assistantName:e,message:n,onQuote:r,onRegenerate:o,regenerateLabel:c}){const[u,h]=Le.useState(!1),[m,p]=Le.useState(null),[x,v]=Le.useState(null),g=Le.useRef(null);Le.useEffect(()=>{function T(){if(n.role!=="weaver"||!r||!g.current)return;const w=window.getSelection(),_=w?w.toString().trim():"",y=g.current,U=w&&w.rangeCount>0&&y.contains(w.getRangeAt(0).commonAncestorContainer);if(_.length>=2&&U){const z=w.getRangeAt(0).getBoundingClientRect();p(_),v({top:z.bottom+6,left:z.left})}else p(null),v(null)}return document.addEventListener("selectionchange",T),()=>document.removeEventListener("selectionchange",T)},[n.role,r]);async function b(){await navigator.clipboard?.writeText(n.content),h(!0),window.setTimeout(()=>h(!1),1400)}return n.role==="owner"?E.jsx("article",{className:"message message-owner",children:E.jsxs("div",{className:"owner-message-content",children:[E.jsx("div",{className:"owner-bubble",children:n.content}),E.jsx("div",{className:"message-actions",children:E.jsxs("button",{"aria-label":"Copy owner message",onClick:b,type:"button",children:[E.jsx(xx,{}),E.jsx("span",{children:u?"Copied":"Copy"})]})})]})}):E.jsxs("article",{className:`message message-weaver ${n.streaming?"message-streaming":""}`,children:[E.jsx("div",{className:"weaver-avatar",children:E.jsx(a,{compact:!0})}),E.jsxs("div",{className:"weaver-message-content",children:[E.jsx("div",{className:"message-role",children:e}),E.jsx("div",{className:"markdown-body",ref:g,children:n.content?E.jsx(H3,{children:n.content}):E.jsx(XS,{})}),!n.streaming&&n.content&&E.jsxs("div",{className:"message-actions",children:[E.jsxs("button",{"aria-label":"Copy reply",onClick:b,type:"button",children:[E.jsx(xx,{}),E.jsx("span",{children:u?"Copied":"Copy"})]}),o&&E.jsxs("button",{"aria-label":"Regenerate reply",onClick:o,type:"button",children:[E.jsx(y3,{}),E.jsx("span",{children:c})]})]})]}),m&&x&&E.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{r?.(m),p(null),v(null)},style:{top:x.top,left:x.left},type:"button",children:[E.jsx(T3,{}),E.jsx("span",{children:"ask about this"})]})]})}function V3({chooseLabel:a,createLabel:e,message:n,onChooseConversation:r,onCreateConversation:o,onRetry:c,retryLabel:u,title:h}){return E.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[E.jsx("span",{className:"recovery-knot"}),E.jsxs("div",{children:[E.jsx("strong",{children:h}),E.jsx("p",{children:n}),E.jsxs("div",{className:"recovery-actions",children:[c&&u&&E.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:u}),E.jsx("button",{onClick:o,type:"button",children:e}),E.jsx("button",{onClick:r,type:"button",children:a})]})]})]})}const Lm="185",k3=0,Sx=1,X3=2,Pu=1,W3=2,Tl=3,Tr=0,ti=1,Na=2,Ua=0,fo=1,bx=2,Mx=3,Ex=4,j3=5,ts=100,q3=101,Y3=102,K3=103,Z3=104,Q3=200,$3=201,J3=202,eR=203,Ap=204,Rp=205,tR=206,nR=207,iR=208,aR=209,rR=210,sR=211,oR=212,lR=213,cR=214,Cp=0,wp=1,Dp=2,go=3,Np=4,Lp=5,Up=6,Op=7,WS=0,uR=1,fR=2,aa=0,jS=1,qS=2,YS=3,KS=4,ZS=5,QS=6,$S=7,JS=300,cs=301,vo=302,Ah=303,Rh=304,sf=306,Pp=1e3,La=1001,Ip=1002,Pn=1003,dR=1004,ru=1005,Vn=1006,Ch=1007,as=1008,Di=1009,eb=1010,tb=1011,Ll=1012,Um=1013,sa=1014,na=1015,za=1016,Om=1017,Pm=1018,Ul=1020,nb=35902,ib=35899,ab=1021,rb=1022,Vi=1023,Fa=1026,rs=1027,sb=1028,Im=1029,us=1030,zm=1031,Fm=1033,Iu=33776,zu=33777,Fu=33778,Bu=33779,zp=35840,Fp=35841,Bp=35842,Hp=35843,Gp=36196,Vp=37492,kp=37496,Xp=37488,Wp=37489,Xu=37490,jp=37491,qp=37808,Yp=37809,Kp=37810,Zp=37811,Qp=37812,$p=37813,Jp=37814,em=37815,tm=37816,nm=37817,im=37818,am=37819,rm=37820,sm=37821,om=36492,lm=36494,cm=36495,um=36283,fm=36284,Wu=36285,dm=36286,hR=3200,Tx=0,pR=1,yr="",Ci="srgb",ju="srgb-linear",qu="linear",qt="srgb",qs=7680,Ax=519,mR=512,gR=513,vR=514,Bm=515,_R=516,xR=517,Hm=518,yR=519,Rx=35044,Cx="300 es",ia=2e3,Yu=2001;function SR(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ku(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function bR(){const a=Ku("canvas");return a.style.display="block",a}const wx={};function Dx(...a){const e="THREE."+a.shift();console.log(e,...a)}function ob(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ct(...a){a=ob(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Nt(...a){a=ob(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function ho(...a){const e=a.join(" ");e in wx||(wx[e]=!0,ct(...a))}function MR(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const ER={[Cp]:wp,[Dp]:Up,[Np]:Op,[go]:Lp,[wp]:Cp,[Up]:Dp,[Op]:Np,[Lp]:go};class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=Math.PI/180,hm=180/Math.PI;function zl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Dt(a,e,n){return Math.max(e,Math.min(n,a))}function TR(a,e){return(a%e+e)%e}function Dh(a,e,n){return(1-n)*a+n*e}function gl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const km=class km{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};km.prototype.isVector2=!0;let Ft=km;class So{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,h){let m=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3],g=c[u+0],b=c[u+1],T=c[u+2],w=c[u+3];if(v!==w||m!==g||p!==b||x!==T){let _=m*g+p*b+x*T+v*w;_<0&&(g=-g,b=-b,T=-T,w=-w,_=-_);let y=1-h;if(_<.9995){const U=Math.acos(_),z=Math.sin(U);y=Math.sin(y*U)/z,h=Math.sin(h*U)/z,m=m*y+g*h,p=p*y+b*h,x=x*y+T*h,v=v*y+w*h}else{m=m*y+g*h,p=p*y+b*h,x=x*y+T*h,v=v*y+w*h;const U=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=U,p*=U,x*=U,v*=U}}e[n]=m,e[n+1]=p,e[n+2]=x,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],x=r[o+3],v=c[u],g=c[u+1],b=c[u+2],T=c[u+3];return e[n]=h*T+x*v+m*b-p*g,e[n+1]=m*T+x*g+p*v-h*b,e[n+2]=p*T+x*b+h*g-m*v,e[n+3]=x*T-h*v-m*g-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(o/2),v=h(c/2),g=m(r/2),b=m(o/2),T=m(c/2);switch(u){case"XYZ":this._x=g*x*v+p*b*T,this._y=p*b*v-g*x*T,this._z=p*x*T+g*b*v,this._w=p*x*v-g*b*T;break;case"YXZ":this._x=g*x*v+p*b*T,this._y=p*b*v-g*x*T,this._z=p*x*T-g*b*v,this._w=p*x*v+g*b*T;break;case"ZXY":this._x=g*x*v-p*b*T,this._y=p*b*v+g*x*T,this._z=p*x*T+g*b*v,this._w=p*x*v-g*b*T;break;case"ZYX":this._x=g*x*v-p*b*T,this._y=p*b*v+g*x*T,this._z=p*x*T-g*b*v,this._w=p*x*v+g*b*T;break;case"YZX":this._x=g*x*v+p*b*T,this._y=p*b*v+g*x*T,this._z=p*x*T-g*b*v,this._w=p*x*v-g*b*T;break;case"XZY":this._x=g*x*v-p*b*T,this._y=p*b*v-g*x*T,this._z=p*x*T+g*b*v,this._w=p*x*v+g*b*T;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],x=n[6],v=n[10],g=r+h+v;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-p)*b,this._z=(u-o)*b}else if(r>h&&r>v){const b=2*Math.sqrt(1+r-h-v);this._w=(x-m)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(c+p)/b}else if(h>v){const b=2*Math.sqrt(1+h-r-v);this._w=(c-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+v-r-h);this._w=(u-o)/b,this._x=(c+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,x=n._w;return this._x=r*x+u*h+o*p-c*m,this._y=o*x+u*m+c*h-r*p,this._z=c*x+u*p+r*m-o*h,this._w=u*x-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,n=Math.sin(n*p)/x,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xm=class Xm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),x=2*(h*n-c*o),v=2*(c*r-u*n);return this.x=n+m*p+u*v-h*x,this.y=r+m*x+h*p-c*v,this.z=o+m*v+c*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this.z=Dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this.z=Dt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xm.prototype.isVector3=!0;let se=Xm;const Nh=new se,Nx=new So,Wm=class Wm{constructor(e,n,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p)}set(e,n,r,o,c,u,h,m,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=h,x[3]=n,x[4]=c,x[5]=m,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],x=r[4],v=r[7],g=r[2],b=r[5],T=r[8],w=o[0],_=o[3],y=o[6],U=o[1],z=o[4],D=o[7],P=o[2],N=o[5],H=o[8];return c[0]=u*w+h*U+m*P,c[3]=u*_+h*z+m*N,c[6]=u*y+h*D+m*H,c[1]=p*w+x*U+v*P,c[4]=p*_+x*z+v*N,c[7]=p*y+x*D+v*H,c[2]=g*w+b*U+T*P,c[5]=g*_+b*z+T*N,c[8]=g*y+b*D+T*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return n*u*x-n*h*p-r*c*x+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=x*u-h*p,g=h*m-x*c,b=p*c-u*m,T=n*v+r*g+o*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(o*p-x*r)*w,e[2]=(h*r-o*u)*w,e[3]=g*w,e[4]=(x*n-o*m)*w,e[5]=(o*c-h*n)*w,e[6]=b*w,e[7]=(r*m-p*n)*w,e[8]=(u*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wm.prototype.isMatrix3=!0;let mt=Wm;const Lh=new mt,Lx=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ux=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AR(){const a={enabled:!0,workingColorSpace:ju,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(o.r=Oa(o.r),o.g=Oa(o.g),o.b=Oa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=po(o.r),o.g=po(o.g),o.b=po(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===yr?qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[ju]:{primaries:e,whitePoint:r,transfer:qu,toXYZ:Lx,fromXYZ:Ux,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:Lx,fromXYZ:Ux,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),a}const wt=AR();function Oa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function po(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ys;class RR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ys===void 0&&(Ys=Ku("canvas")),Ys.width=e.width,Ys.height=e.height;const o=Ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ys}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ku("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Oa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oa(n[r]/255)*255):n[r]=Oa(n[r]);return{data:n,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CR=0;class Gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CR++}),this.uuid=zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Uh(o[u].image)):c.push(Uh(o[u]))}else c=Uh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Uh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?RR.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let wR=0;const Oh=new se;class Wn extends ds{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,r=La,o=La,c=Vn,u=as,h=Vi,m=Di,p=Wn.DEFAULT_ANISOTROPY,x=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=zl(),this.name="",this.source=new Gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==JS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pp:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pp:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=JS;Wn.DEFAULT_ANISOTROPY=1;const jm=class jm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],x=m[4],v=m[8],g=m[1],b=m[5],T=m[9],w=m[2],_=m[6],y=m[10];if(Math.abs(x-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+_)<.1&&Math.abs(p+b+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(p+1)/2,D=(b+1)/2,P=(y+1)/2,N=(x+g)/4,H=(v+w)/4,A=(T+_)/4;return z>D&&z>P?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=N/r,c=H/r):D>P?D<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),r=N/o,c=A/o):P<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),r=H/c,o=A/c),this.set(r,o,c,n),this}let U=Math.sqrt((_-T)*(_-T)+(v-w)*(v-w)+(g-x)*(g-x));return Math.abs(U)<.001&&(U=1),this.x=(_-T)/U,this.y=(v-w)/U,this.z=(g-x)/U,this.w=Math.acos((p+b+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this.z=Dt(this.z,e.z,n.z),this.w=Dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this.z=Dt(this.z,e,n),this.w=Dt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jm.prototype.isVector4=!0;let fn=jm;class DR extends ds{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Wn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Gm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends DR{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class lb extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NR extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=class Ju{constructor(e,n,r,o,c,u,h,m,p,x,v,g,b,T,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p,x,v,g,b,T,w,_)}set(e,n,r,o,c,u,h,m,p,x,v,g,b,T,w,_){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=x,y[10]=v,y[14]=g,y[3]=b,y[7]=T,y[11]=w,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ju().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),c=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*x,b=u*v,T=h*x,w=h*v;n[0]=m*x,n[4]=-m*v,n[8]=p,n[1]=b+T*p,n[5]=g-w*p,n[9]=-h*m,n[2]=w-g*p,n[6]=T+b*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*x,b=m*v,T=p*x,w=p*v;n[0]=g+w*h,n[4]=T*h-b,n[8]=u*p,n[1]=u*v,n[5]=u*x,n[9]=-h,n[2]=b*h-T,n[6]=w+g*h,n[10]=u*m}else if(e.order==="ZXY"){const g=m*x,b=m*v,T=p*x,w=p*v;n[0]=g-w*h,n[4]=-u*v,n[8]=T+b*h,n[1]=b+T*h,n[5]=u*x,n[9]=w-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const g=u*x,b=u*v,T=h*x,w=h*v;n[0]=m*x,n[4]=T*p-b,n[8]=g*p+w,n[1]=m*v,n[5]=w*p+g,n[9]=b*p-T,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,b=u*p,T=h*m,w=h*p;n[0]=m*x,n[4]=w-g*v,n[8]=T*v+b,n[1]=v,n[5]=u*x,n[9]=-h*x,n[2]=-p*x,n[6]=b*v+T,n[10]=g-w*v}else if(e.order==="XZY"){const g=u*m,b=u*p,T=h*m,w=h*p;n[0]=m*x,n[4]=-v,n[8]=p*x,n[1]=g*v+w,n[5]=u*x,n[9]=b*v-T,n[2]=T*v-b,n[6]=h*x,n[10]=w*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LR,e,UR)}lookAt(e,n,r){const o=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pr.crossVectors(r,pi),pr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pr.crossVectors(r,pi)),pr.normalize(),su.crossVectors(pi,pr),o[0]=pr.x,o[4]=su.x,o[8]=pi.x,o[1]=pr.y,o[5]=su.y,o[9]=pi.y,o[2]=pr.z,o[6]=su.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],x=r[1],v=r[5],g=r[9],b=r[13],T=r[2],w=r[6],_=r[10],y=r[14],U=r[3],z=r[7],D=r[11],P=r[15],N=o[0],H=o[4],A=o[8],F=o[12],W=o[1],k=o[5],Z=o[9],pe=o[13],de=o[2],ee=o[6],L=o[10],V=o[14],te=o[3],ge=o[7],Me=o[11],O=o[15];return c[0]=u*N+h*W+m*de+p*te,c[4]=u*H+h*k+m*ee+p*ge,c[8]=u*A+h*Z+m*L+p*Me,c[12]=u*F+h*pe+m*V+p*O,c[1]=x*N+v*W+g*de+b*te,c[5]=x*H+v*k+g*ee+b*ge,c[9]=x*A+v*Z+g*L+b*Me,c[13]=x*F+v*pe+g*V+b*O,c[2]=T*N+w*W+_*de+y*te,c[6]=T*H+w*k+_*ee+y*ge,c[10]=T*A+w*Z+_*L+y*Me,c[14]=T*F+w*pe+_*V+y*O,c[3]=U*N+z*W+D*de+P*te,c[7]=U*H+z*k+D*ee+P*ge,c[11]=U*A+z*Z+D*L+P*Me,c[15]=U*F+z*pe+D*V+P*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],x=e[2],v=e[6],g=e[10],b=e[14],T=e[3],w=e[7],_=e[11],y=e[15],U=m*b-p*g,z=h*b-p*v,D=h*g-m*v,P=u*b-p*x,N=u*g-m*x,H=u*v-h*x;return n*(w*U-_*z+y*D)-r*(T*U-_*P+y*N)+o*(T*z-w*P+y*H)-c*(T*D-w*N+_*H)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],x=e[10];return n*(u*x-h*p)-r*(c*x-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=e[9],g=e[10],b=e[11],T=e[12],w=e[13],_=e[14],y=e[15],U=n*h-r*u,z=n*m-o*u,D=n*p-c*u,P=r*m-o*h,N=r*p-c*h,H=o*p-c*m,A=x*w-v*T,F=x*_-g*T,W=x*y-b*T,k=v*_-g*w,Z=v*y-b*w,pe=g*y-b*_,de=U*pe-z*Z+D*k+P*W-N*F+H*A;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/de;return e[0]=(h*pe-m*Z+p*k)*ee,e[1]=(o*Z-r*pe-c*k)*ee,e[2]=(w*H-_*N+y*P)*ee,e[3]=(g*N-v*H-b*P)*ee,e[4]=(m*W-u*pe-p*F)*ee,e[5]=(n*pe-o*W+c*F)*ee,e[6]=(_*D-T*H-y*z)*ee,e[7]=(x*H-g*D+b*z)*ee,e[8]=(u*Z-h*W+p*A)*ee,e[9]=(r*W-n*Z-c*A)*ee,e[10]=(T*N-w*D+y*U)*ee,e[11]=(v*D-x*N-b*U)*ee,e[12]=(h*F-u*k-m*A)*ee,e[13]=(n*k-r*F+o*A)*ee,e[14]=(w*z-T*P-_*U)*ee,e[15]=(x*P-v*z+g*U)*ee,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,x=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,x*h+r,x*m-o*u,0,p*m-o*h,x*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,x=u+u,v=h+h,g=c*p,b=c*x,T=c*v,w=u*x,_=u*v,y=h*v,U=m*p,z=m*x,D=m*v,P=r.x,N=r.y,H=r.z;return o[0]=(1-(w+y))*P,o[1]=(b+D)*P,o[2]=(T-z)*P,o[3]=0,o[4]=(b-D)*N,o[5]=(1-(g+y))*N,o[6]=(_+U)*N,o[7]=0,o[8]=(T+z)*H,o[9]=(_-U)*H,o[10]=(1-(g+w))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Ks.set(o[0],o[1],o[2]).length();const h=Ks.set(o[4],o[5],o[6]).length(),m=Ks.set(o[8],o[9],o[10]).length();c<0&&(u=-u),zi.copy(this);const p=1/u,x=1/h,v=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=x,zi.elements[5]*=x,zi.elements[6]*=x,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,n.setFromRotationMatrix(zi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,n,r,o,c,u,h=ia,m=!1){const p=this.elements,x=2*c/(n-e),v=2*c/(r-o),g=(n+e)/(n-e),b=(r+o)/(r-o);let T,w;if(m)T=c/(u-c),w=u*c/(u-c);else if(h===ia)T=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===Yu)T=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,h=ia,m=!1){const p=this.elements,x=2/(n-e),v=2/(r-o),g=-(n+e)/(n-e),b=-(r+o)/(r-o);let T,w;if(m)T=1/(u-c),w=u/(u-c);else if(h===ia)T=-2/(u-c),w=-(u+c)/(u-c);else if(h===Yu)T=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Ju.prototype.isMatrix4=!0;let dn=Ju;const Ks=new se,zi=new dn,LR=new se(0,0,0),UR=new se(1,1,1),pr=new se,su=new se,pi=new se,Ox=new dn,Px=new So;class fs{constructor(e=0,n=0,r=0,o=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],x=o[9],v=o[2],g=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ox,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Px.setFromEuler(this),this.setFromQuaternion(Px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class cb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OR=0;const Ix=new se,Zs=new So,Aa=new dn,ou=new se,vl=new se,PR=new se,IR=new So,zx=new se(1,0,0),Fx=new se(0,1,0),Bx=new se(0,0,1),Hx={type:"added"},zR={type:"removed"},Qs={type:"childadded",child:null},Ph={type:"childremoved",child:null};class jn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new se,n=new fs,r=new So,o=new se(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new mt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(zx,e)}rotateY(e){return this.rotateOnAxis(Fx,e)}rotateZ(e){return this.rotateOnAxis(Bx,e)}translateOnAxis(e,n){return Ix.copy(e).applyQuaternion(this.quaternion),this.position.add(Ix.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zx,e)}translateY(e){return this.translateOnAxis(Fx,e)}translateZ(e){return this.translateOnAxis(Bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ou.copy(e):ou.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(vl,ou,this.up):Aa.lookAt(ou,vl,this.up),this.quaternion.setFromRotationMatrix(Aa),o&&(Aa.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(Aa),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zR),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,PR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,IR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),x=u(e.images),v=u(e.shapes),g=u(e.skeletons),b=u(e.animations),T=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}jn.DEFAULT_UP=new se(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lu extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FR={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,r),y=this._getHandJoint(p,w);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=x.position.distanceTo(v.position),b=.02,T=.005;p.inputState.pinching&&g>b+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=b-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(FR)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new lu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ub={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},cu={h:0,s:0,l:0};function zh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=TR(e,1),n=Dt(n,0,1),r=Dt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=zh(u,c,e+1/3),this.g=zh(u,c,e),this.b=zh(u,c,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,n=Ci){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ci){const r=ub[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return wt.workingToColorSpace(Gn.copy(this),e),Math.round(Dt(Gn.r*255,0,255))*65536+Math.round(Dt(Gn.g*255,0,255))*256+Math.round(Dt(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Gn.copy(this),n);const r=Gn.r,o=Gn.g,c=Gn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const x=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=x<=.5?v/(u+h):v/(2-u-h),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){wt.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,r=Gn.g,o=Gn.b;return e!==Ci?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(cu);const r=Dh(mr.h,cu.h,n),o=Dh(mr.s,cu.s,n),c=Dh(mr.l,cu.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Rt;Rt.NAMES=ub;class BR extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new se,Ra=new se,Fh=new se,Ca=new se,$s=new se,Js=new se,Gx=new se,Bh=new se,Hh=new se,Gh=new se,Vh=new fn,kh=new fn,Xh=new fn;class Hi{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Fi.subVectors(e,n),o.cross(Fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Fi.subVectors(o,n),Ra.subVectors(r,n),Fh.subVectors(e,n);const u=Fi.dot(Fi),h=Fi.dot(Ra),m=Fi.dot(Fh),p=Ra.dot(Ra),x=Ra.dot(Fh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,b=(p*m-h*x)*g,T=(u*x-h*m)*g;return c.set(1-b-T,T,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,n,r,o,c,u,h,m){return this.getBarycoord(e,n,r,o,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(u,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(e,n),kh.fromBufferAttribute(e,r),Xh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Vh,c.x),u.addScaledVector(kh,c.y),u.addScaledVector(Xh,c.z),u}static isFrontFacing(e,n,r,o){return Fi.subVectors(r,n),Ra.subVectors(e,n),Fi.cross(Ra).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Fi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,h;$s.subVectors(o,r),Js.subVectors(c,r),Bh.subVectors(e,r);const m=$s.dot(Bh),p=Js.dot(Bh);if(m<=0&&p<=0)return n.copy(r);Hh.subVectors(e,o);const x=$s.dot(Hh),v=Js.dot(Hh);if(x>=0&&v<=x)return n.copy(o);const g=m*v-x*p;if(g<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(r).addScaledVector($s,u);Gh.subVectors(e,c);const b=$s.dot(Gh),T=Js.dot(Gh);if(T>=0&&b<=T)return n.copy(c);const w=b*p-m*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),n.copy(r).addScaledVector(Js,h);const _=x*T-b*v;if(_<=0&&v-x>=0&&b-T>=0)return Gx.subVectors(c,o),h=(v-x)/(v-x+(b-T)),n.copy(o).addScaledVector(Gx,h);const y=1/(_+w+g);return u=w*y,h=g*y,n.copy(r).addScaledVector($s,u).addScaledVector(Js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fl{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Bi):Bi.fromBufferAttribute(c,u),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uu.copy(r.boundingBox)),uu.applyMatrix4(e.matrixWorld),this.union(uu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),fu.subVectors(this.max,_l),eo.subVectors(e.a,_l),to.subVectors(e.b,_l),no.subVectors(e.c,_l),gr.subVectors(to,eo),vr.subVectors(no,to),qr.subVectors(eo,no);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-qr.z,qr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,qr.z,0,-qr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-qr.y,qr.x,0];return!Wh(n,eo,to,no,fu)||(n=[1,0,0,0,1,0,0,0,1],!Wh(n,eo,to,no,fu))?!1:(du.crossVectors(gr,vr),n=[du.x,du.y,du.z],Wh(n,eo,to,no,fu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new se,new se,new se,new se,new se,new se,new se,new se],Bi=new se,uu=new Fl,eo=new se,to=new se,no=new se,gr=new se,vr=new se,qr=new se,_l=new se,fu=new se,du=new se,Yr=new se;function Wh(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Yr.fromArray(a,c);const h=o.x*Math.abs(Yr.x)+o.y*Math.abs(Yr.y)+o.z*Math.abs(Yr.z),m=e.dot(Yr),p=n.dot(Yr),x=r.dot(Yr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Sn=new se,hu=new Ft;let HR=0;class bn extends ds{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Rx,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hu.fromBufferAttribute(this,n),hu.applyMatrix3(e),this.setXY(n,hu.x,hu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=gl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),o=ei(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),o=ei(o,this.array),c=ei(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fb extends bn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class db extends bn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ki extends bn{constructor(e,n,r){super(new Float32Array(e),n,r)}}const GR=new Fl,xl=new se,jh=new se;class Bl{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):GR.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const n=xl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(xl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(jh)),this.expandByPoint(xl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let VR=0;const Ri=new dn,qh=new jn,io=new se,mi=new Fl,yl=new Fl,wn=new se;class ni extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SR(e)?db:fb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,n,r){return Ri.makeTranslation(e,n,r),this.applyMatrix4(Ri),this}scale(e,n,r){return Ri.makeScale(e,n,r),this.applyMatrix4(Ri),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,yl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,yl.max),mi.expandByPoint(wn)):(mi.expandByPoint(yl.min),mi.expandByPoint(yl.max))}mi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)wn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(wn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)wn.fromBufferAttribute(h,p),m&&(io.fromBufferAttribute(e,p),wn.add(io)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new bn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let A=0;A<r.count;A++)h[A]=new se,m[A]=new se;const p=new se,x=new se,v=new se,g=new Ft,b=new Ft,T=new Ft,w=new se,_=new se;function y(A,F,W){p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,F),v.fromBufferAttribute(r,W),g.fromBufferAttribute(c,A),b.fromBufferAttribute(c,F),T.fromBufferAttribute(c,W),x.sub(p),v.sub(p),b.sub(g),T.sub(g);const k=1/(b.x*T.y-T.x*b.y);isFinite(k)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(v,-b.y).multiplyScalar(k),_.copy(v).multiplyScalar(b.x).addScaledVector(x,-T.x).multiplyScalar(k),h[A].add(w),h[F].add(w),h[W].add(w),m[A].add(_),m[F].add(_),m[W].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let A=0,F=U.length;A<F;++A){const W=U[A],k=W.start,Z=W.count;for(let pe=k,de=k+Z;pe<de;pe+=3)y(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const z=new se,D=new se,P=new se,N=new se;function H(A){P.fromBufferAttribute(o,A),N.copy(P);const F=h[A];z.copy(F),z.sub(P.multiplyScalar(P.dot(F))).normalize(),D.crossVectors(N,F);const k=D.dot(m[A])<0?-1:1;u.setXYZW(A,z.x,z.y,z.z,k)}for(let A=0,F=U.length;A<F;++A){const W=U[A],k=W.start,Z=W.count;for(let pe=k,de=k+Z;pe<de;pe+=3)H(e.getX(pe+0)),H(e.getX(pe+1)),H(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const o=new se,c=new se,u=new se,h=new se,m=new se,p=new se,x=new se,v=new se;if(e)for(let g=0,b=e.count;g<b;g+=3){const T=e.getX(g+0),w=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,_),x.subVectors(u,c),v.subVectors(o,c),x.cross(v),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,_),h.add(x),m.add(x),p.add(x),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let g=0,b=n.count;g<b;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,c),v.subVectors(o,c),x.cross(v),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,v=h.normalized,g=new p.constructor(m.length*x);let b=0,T=0;for(let w=0,_=m.length;w<_;w++){h.isInterleavedBufferAttribute?b=m[w]*h.data.stride+h.offset:b=m[w]*x;for(let y=0;y<x;y++)g[T++]=p[b++]}return new bn(g,x,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,v=p.length;x<v;x++){const g=p[x],b=e(g,r);m.push(b)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,g=p.length;v<g;v++){const b=p[v];x.push(b.toJSON(e.data))}x.length>0&&(o[m]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const c=e.morphAttributes;for(const p in c){const x=[],v=c[p];for(let g=0,b=v.length;g<b;g++)x.push(v[g].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let kR=0;class bo extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=fo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Rp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ct(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ap&&(r.blendSrc=this.blendSrc),this.blendDst!==Rp&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ax&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new se,Yh=new se,pu=new se,_r=new se,Kh=new se,mu=new se,Zh=new se;class Vm{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Yh.copy(e).add(n).multiplyScalar(.5),pu.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Yh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(pu),h=_r.dot(this.direction),m=-_r.dot(pu),p=_r.lengthSq(),x=Math.abs(1-u*u);let v,g,b,T;if(x>0)if(v=u*m-h,g=u*h-m,T=c*x,v>=0)if(g>=-T)if(g<=T){const w=1/x;v*=w,g*=w,b=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),b=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),b=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),b=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),b=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),b=-v*v+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Yh).addScaledVector(pu,g),b}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),o=Da.dot(Da)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(c=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,r,o,c){Kh.subVectors(n,e),mu.subVectors(r,e),Zh.crossVectors(Kh,mu);let u=this.direction.dot(Zh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;_r.subVectors(this.origin,e);const m=h*this.direction.dot(mu.crossVectors(_r,mu));if(m<0)return null;const p=h*this.direction.dot(Kh.cross(_r));if(p<0||m+p>u)return null;const x=-h*_r.dot(Zh);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hb extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=WS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vx=new dn,Kr=new Vm,gu=new Bl,kx=new se,vu=new se,_u=new se,xu=new se,Qh=new se,yu=new se,Xx=new se,Su=new se;class Ba extends jn{constructor(e=new ni,n=new hb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){yu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],v=c[m];x!==0&&(Qh.fromBufferAttribute(v,e),u?yu.addScaledVector(Qh,x):yu.addScaledVector(Qh.sub(n),x))}n.add(yu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gu.copy(r.boundingSphere),gu.applyMatrix4(c),Kr.copy(e.ray).recast(e.near),!(gu.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(gu,kx)===null||Kr.origin.distanceToSquared(kx)>(e.far-e.near)**2))&&(Vx.copy(c).invert(),Kr.copy(e.ray).applyMatrix4(Vx),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,g=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(u))for(let T=0,w=g.length;T<w;T++){const _=g[T],y=u[_.materialIndex],U=Math.max(_.start,b.start),z=Math.min(h.count,Math.min(_.start+_.count,b.start+b.count));for(let D=U,P=z;D<P;D+=3){const N=h.getX(D),H=h.getX(D+1),A=h.getX(D+2);o=bu(this,y,e,r,p,x,v,N,H,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const T=Math.max(0,b.start),w=Math.min(h.count,b.start+b.count);for(let _=T,y=w;_<y;_+=3){const U=h.getX(_),z=h.getX(_+1),D=h.getX(_+2);o=bu(this,u,e,r,p,x,v,U,z,D),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,w=g.length;T<w;T++){const _=g[T],y=u[_.materialIndex],U=Math.max(_.start,b.start),z=Math.min(m.count,Math.min(_.start+_.count,b.start+b.count));for(let D=U,P=z;D<P;D+=3){const N=D,H=D+1,A=D+2;o=bu(this,y,e,r,p,x,v,N,H,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const T=Math.max(0,b.start),w=Math.min(m.count,b.start+b.count);for(let _=T,y=w;_<y;_+=3){const U=_,z=_+1,D=_+2;o=bu(this,u,e,r,p,x,v,U,z,D),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function XR(a,e,n,r,o,c,u,h){let m;if(e.side===ti?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Tr,h),m===null)return null;Su.copy(h),Su.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Su);return p<n.near||p>n.far?null:{distance:p,point:Su.clone(),object:a}}function bu(a,e,n,r,o,c,u,h,m,p){a.getVertexPosition(h,vu),a.getVertexPosition(m,_u),a.getVertexPosition(p,xu);const x=XR(a,e,n,r,vu,_u,xu,Xx);if(x){const v=new se;Hi.getBarycoord(Xx,vu,_u,xu,v),o&&(x.uv=Hi.getInterpolatedAttribute(o,h,m,p,v,new Ft)),c&&(x.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new Ft)),u&&(x.normal=Hi.getInterpolatedAttribute(u,h,m,p,v,new se),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new se,materialIndex:0};Hi.getNormal(vu,_u,xu,g.normal),x.face=g,x.barycoord=v}return x}class WR extends Wn{constructor(e=null,n=1,r=1,o,c,u,h,m,p=Pn,x=Pn,v,g){super(null,u,h,m,p,x,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new se,jR=new se,qR=new mt;class Jr{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=$h.subVectors(r,n).cross(jR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta($h),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||qR.getNormalMatrix(e),o=this.coplanarPoint($h).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Bl,YR=new Ft(.5,.5),Mu=new se;class pb{constructor(e=new Jr,n=new Jr,r=new Jr,o=new Jr,c=new Jr,u=new Jr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ia,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],x=c[4],v=c[5],g=c[6],b=c[7],T=c[8],w=c[9],_=c[10],y=c[11],U=c[12],z=c[13],D=c[14],P=c[15];if(o[0].setComponents(p-u,b-x,y-T,P-U).normalize(),o[1].setComponents(p+u,b+x,y+T,P+U).normalize(),o[2].setComponents(p+h,b+v,y+w,P+z).normalize(),o[3].setComponents(p-h,b-v,y-w,P-z).normalize(),r)o[4].setComponents(m,g,_,D).normalize(),o[5].setComponents(p-m,b-g,y-_,P-D).normalize();else if(o[4].setComponents(p-m,b-g,y-_,P-D).normalize(),n===ia)o[5].setComponents(p+m,b+g,y+_,P+D).normalize();else if(n===Yu)o[5].setComponents(m,g,_,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=YR.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Mu.x=o.normal.x>0?e.max.x:e.min.x,Mu.y=o.normal.y>0?e.max.y:e.min.y,Mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class KR extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zu=new se,Qu=new se,Wx=new dn,Sl=new Vm,Eu=new Bl,Jh=new se,jx=new se;class ZR extends jn{constructor(e=new ni,n=new KR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Zu.fromBufferAttribute(n,o-1),Qu.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Zu.distanceTo(Qu);e.setAttribute("lineDistance",new ki(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(o),Eu.radius+=c,e.ray.intersectsSphere(Eu)===!1)return;Wx.copy(o).invert(),Sl.copy(e.ray).applyMatrix4(Wx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const b=Math.max(0,u.start),T=Math.min(x.count,u.start+u.count);for(let w=b,_=T-1;w<_;w+=p){const y=x.getX(w),U=x.getX(w+1),z=Tu(this,e,Sl,m,y,U,w);z&&n.push(z)}if(this.isLineLoop){const w=x.getX(T-1),_=x.getX(b),y=Tu(this,e,Sl,m,w,_,T-1);y&&n.push(y)}}else{const b=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let w=b,_=T-1;w<_;w+=p){const y=Tu(this,e,Sl,m,w,w+1,w);y&&n.push(y)}if(this.isLineLoop){const w=Tu(this,e,Sl,m,T-1,b,T-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Tu(a,e,n,r,o,c,u){const h=a.geometry.attributes.position;if(Zu.fromBufferAttribute(h,o),Qu.fromBufferAttribute(h,c),n.distanceSqToSegment(Zu,Qu,Jh,jx)>r)return;Jh.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Jh);if(!(p<e.near||p>e.far))return{distance:p,point:jx.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const qx=new se,Yx=new se;class QR extends ZR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)qx.fromBufferAttribute(n,o),Yx.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+qx.distanceTo(Yx);e.setAttribute("lineDistance",new ki(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $R extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kx=new dn,pm=new Vm,Au=new Bl,Ru=new se;class Zx extends jn{constructor(e=new ni,n=new $R){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(o),Au.radius+=c,e.ray.intersectsSphere(Au)===!1)return;Kx.copy(o).invert(),pm.copy(e.ray).applyMatrix4(Kx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),b=Math.min(p.count,u.start+u.count);for(let T=g,w=b;T<w;T++){const _=p.getX(T);Ru.fromBufferAttribute(v,_),Qx(Ru,_,m,o,e,n,this)}}else{const g=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let T=g,w=b;T<w;T++)Ru.fromBufferAttribute(v,T),Qx(Ru,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Qx(a,e,n,r,o,c,u){const h=pm.distanceSqToPoint(a);if(h<n){const m=new se;pm.closestPointToPoint(a,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class mb extends Wn{constructor(e=[],n=cs,r,o,c,u,h,m,p,x){super(e,n,r,o,c,u,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _o extends Wn{constructor(e,n,r=sa,o,c,u,h=Pn,m=Pn,p,x=Fa,v=1){if(x!==Fa&&x!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,o,c,u,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class JR extends _o{constructor(e,n=sa,r=cs,o,c,u=Pn,h=Pn,m,p=Fa){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,n,r,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gb extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hl extends ni{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],x=[],v=[];let g=0,b=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(x,3)),this.setAttribute("uv",new ki(v,2));function T(w,_,y,U,z,D,P,N,H,A,F){const W=D/H,k=P/A,Z=D/2,pe=P/2,de=N/2,ee=H+1,L=A+1;let V=0,te=0;const ge=new se;for(let Me=0;Me<L;Me++){const O=Me*k-pe;for(let q=0;q<ee;q++){const ie=q*W-Z;ge[w]=ie*U,ge[_]=O*z,ge[y]=de,p.push(ge.x,ge.y,ge.z),ge[w]=0,ge[_]=0,ge[y]=N>0?1:-1,x.push(ge.x,ge.y,ge.z),v.push(q/H),v.push(1-Me/A),V+=1}}for(let Me=0;Me<A;Me++)for(let O=0;O<H;O++){const q=g+O+ee*Me,ie=g+O+ee*(Me+1),Ee=g+(O+1)+ee*(Me+1),Se=g+(O+1)+ee*Me;m.push(q,ie,Se),m.push(ie,Ee,Se),te+=6}h.addGroup(b,te,F),b+=te,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class of extends ni{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(r),m=Math.floor(o),p=h+1,x=m+1,v=e/h,g=n/m,b=[],T=[],w=[],_=[];for(let y=0;y<x;y++){const U=y*g-u;for(let z=0;z<p;z++){const D=z*v-c;T.push(D,-U,0),w.push(0,0,1),_.push(z/h),_.push(1-y/m)}}for(let y=0;y<m;y++)for(let U=0;U<h;U++){const z=U+p*y,D=U+p*(y+1),P=U+1+p*(y+1),N=U+1+p*y;b.push(z,D,N),b.push(D,P,N)}this.setIndex(b),this.setAttribute("position",new ki(T,3)),this.setAttribute("normal",new ki(w,3)),this.setAttribute("uv",new ki(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if($x(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if($x(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Xn(a){const e={};for(let n=0;n<a.length;n++){const r=xo(a[n]);for(const o in r)e[o]=r[o]}return e}function $x(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function eC(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function vb(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const tC={clone:xo,merge:Xn};var nC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nC,this.fragmentShader=iC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=eC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ft().fromArray(o.value);break;case"v3":this.uniforms[r].value=new se().fromArray(o.value);break;case"v4":this.uniforms[r].value=new fn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new dn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class aC extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rC extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sC extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cu=new se,wu=new So,Qi=new se;class _b extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cu,wu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cu,wu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Cu,wu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cu,wu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new se,Jx=new Ft,ey=new Ft;class wi extends _b{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hm*2*Math.atan(Math.tan(wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,Jx,ey),n.subVectors(ey,Jx)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class xb extends _b{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ao=-90,ro=1;class oC extends jn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(ao,ro,e,n);o.layers=this.layers,this.add(o);const c=new wi(ao,ro,e,n);c.layers=this.layers,this.add(c);const u=new wi(ao,ro,e,n);u.layers=this.layers,this.add(u);const h=new wi(ao,ro,e,n);h.layers=this.layers,this.add(h);const m=new wi(ao,ro,e,n);m.layers=this.layers,this.add(m);const p=new wi(ao,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,x]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(v,g,b),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class lC extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const qm=class qm{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};qm.prototype.isMatrix2=!0;let ty=qm;function ny(a,e,n,r){const o=uC(r);switch(n){case ab:return a*e;case sb:return a*e/o.components*o.byteLength;case Im:return a*e/o.components*o.byteLength;case us:return a*e*2/o.components*o.byteLength;case zm:return a*e*2/o.components*o.byteLength;case rb:return a*e*3/o.components*o.byteLength;case Vi:return a*e*4/o.components*o.byteLength;case Fm:return a*e*4/o.components*o.byteLength;case Iu:case zu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Fu:case Bu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fp:case Hp:return Math.max(a,16)*Math.max(e,8)/4;case zp:case Bp:return Math.max(a,8)*Math.max(e,8)/2;case Gp:case Vp:case Xp:case Wp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case kp:case Xu:case jp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Kp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case $p:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case em:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case tm:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case nm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case im:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case am:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case om:case lm:case cm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case um:case fm:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Wu:case dm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uC(a){switch(a){case Di:case eb:return{byteLength:1,components:1};case Ll:case tb:case za:return{byteLength:2,components:1};case Om:case Pm:return{byteLength:2,components:4};case sa:case Um:case na:return{byteLength:4,components:1};case nb:case ib:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);function yb(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function fC(a){const e=new WeakMap;function n(h,m){const p=h.array,x=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,x),h.onUploadCallback();let b;if(p instanceof Float32Array)b=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=a.SHORT;else if(p instanceof Uint32Array)b=a.UNSIGNED_INT;else if(p instanceof Int32Array)b=a.INT;else if(p instanceof Int8Array)b=a.BYTE;else if(p instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const x=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,x);else{v.sort((b,T)=>b.start-T.start);let g=0;for(let b=1;b<v.length;b++){const T=v[g],w=v[b];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let b=0,T=v.length;b<T;b++){const w=v[b];a.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var dC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hC=`#ifdef USE_ALPHAHASH
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
#endif`,pC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_C=`#ifdef USE_AOMAP
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
#endif`,xC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yC=`#ifdef USE_BATCHING
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
#endif`,SC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TC=`#ifdef USE_IRIDESCENCE
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
#endif`,AC=`#ifdef USE_BUMPMAP
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
#endif`,RC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PC=`#define PI 3.141592653589793
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
} // validated`,IC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zC=`vec3 transformedNormal = objectNormal;
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
#endif`,FC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VC="gl_FragColor = linearToOutputTexel( gl_FragColor );",kC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XC=`#ifdef USE_ENVMAP
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
#endif`,WC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jC=`#ifdef USE_ENVMAP
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
#endif`,qC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YC=`#ifdef USE_ENVMAP
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
#endif`,KC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$C=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JC=`#ifdef USE_GRADIENTMAP
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
}`,ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aw=`#ifdef USE_ENVMAP
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
#endif`,rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cw=`PhysicalMaterial material;
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
#endif`,uw=`uniform sampler2D dfgLUT;
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
}`,fw=`
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
#endif`,dw=`#if defined( RE_IndirectDiffuse )
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
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bw=`#if defined( USE_POINTS_UV )
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
#endif`,Mw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Aw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`#ifdef USE_MORPHTARGETS
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
#endif`,ww=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pw=`#ifdef USE_NORMALMAP
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
#endif`,Iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ww=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qw=`float getShadowMask() {
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
}`,$w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jw=`#ifdef USE_SKINNING
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
#endif`,eD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tD=`#ifdef USE_SKINNING
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
#endif`,nD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sD=`#ifdef USE_TRANSMISSION
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
#endif`,oD=`#ifdef USE_TRANSMISSION
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
#endif`,lD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hD=`uniform sampler2D t2D;
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
}`,pD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_D=`#include <common>
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
}`,xD=`#if DEPTH_PACKING == 3200
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
}`,yD=`#define DISTANCE
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
}`,SD=`#define DISTANCE
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
}`,bD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ED=`uniform float scale;
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
}`,TD=`uniform vec3 diffuse;
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
}`,AD=`#include <common>
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
}`,RD=`uniform vec3 diffuse;
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
}`,CD=`#define LAMBERT
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
}`,wD=`#define LAMBERT
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
}`,DD=`#define MATCAP
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
}`,ND=`#define MATCAP
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
}`,LD=`#define NORMAL
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
}`,UD=`#define NORMAL
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
}`,OD=`#define PHONG
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
}`,PD=`#define PHONG
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
}`,ID=`#define STANDARD
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
}`,zD=`#define STANDARD
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
}`,FD=`#define TOON
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
}`,BD=`#define TOON
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
}`,HD=`uniform float size;
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
}`,GD=`uniform vec3 diffuse;
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
}`,VD=`#include <common>
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
}`,kD=`uniform vec3 color;
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
}`,XD=`uniform float rotation;
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
}`,WD=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:dC,alphahash_pars_fragment:hC,alphamap_fragment:pC,alphamap_pars_fragment:mC,alphatest_fragment:gC,alphatest_pars_fragment:vC,aomap_fragment:_C,aomap_pars_fragment:xC,batching_pars_vertex:yC,batching_vertex:SC,begin_vertex:bC,beginnormal_vertex:MC,bsdfs:EC,iridescence_fragment:TC,bumpmap_pars_fragment:AC,clipping_planes_fragment:RC,clipping_planes_pars_fragment:CC,clipping_planes_pars_vertex:wC,clipping_planes_vertex:DC,color_fragment:NC,color_pars_fragment:LC,color_pars_vertex:UC,color_vertex:OC,common:PC,cube_uv_reflection_fragment:IC,defaultnormal_vertex:zC,displacementmap_pars_vertex:FC,displacementmap_vertex:BC,emissivemap_fragment:HC,emissivemap_pars_fragment:GC,colorspace_fragment:VC,colorspace_pars_fragment:kC,envmap_fragment:XC,envmap_common_pars_fragment:WC,envmap_pars_fragment:jC,envmap_pars_vertex:qC,envmap_physical_pars_fragment:aw,envmap_vertex:YC,fog_vertex:KC,fog_pars_vertex:ZC,fog_fragment:QC,fog_pars_fragment:$C,gradientmap_pars_fragment:JC,lightmap_pars_fragment:ew,lights_lambert_fragment:tw,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:rw,lights_toon_pars_fragment:sw,lights_phong_fragment:ow,lights_phong_pars_fragment:lw,lights_physical_fragment:cw,lights_physical_pars_fragment:uw,lights_fragment_begin:fw,lights_fragment_maps:dw,lights_fragment_end:hw,lightprobes_pars_fragment:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:vw,logdepthbuf_vertex:_w,map_fragment:xw,map_pars_fragment:yw,map_particle_fragment:Sw,map_particle_pars_fragment:bw,metalnessmap_fragment:Mw,metalnessmap_pars_fragment:Ew,morphinstance_vertex:Tw,morphcolor_vertex:Aw,morphnormal_vertex:Rw,morphtarget_pars_vertex:Cw,morphtarget_vertex:ww,normal_fragment_begin:Dw,normal_fragment_maps:Nw,normal_pars_fragment:Lw,normal_pars_vertex:Uw,normal_vertex:Ow,normalmap_pars_fragment:Pw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:zw,clearcoat_pars_fragment:Fw,iridescence_pars_fragment:Bw,opaque_fragment:Hw,packing:Gw,premultiplied_alpha_fragment:Vw,project_vertex:kw,dithering_fragment:Xw,dithering_pars_fragment:Ww,roughnessmap_fragment:jw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:Kw,shadowmap_vertex:Zw,shadowmask_pars_fragment:Qw,skinbase_vertex:$w,skinning_pars_vertex:Jw,skinning_vertex:eD,skinnormal_vertex:tD,specularmap_fragment:nD,specularmap_pars_fragment:iD,tonemapping_fragment:aD,tonemapping_pars_fragment:rD,transmission_fragment:sD,transmission_pars_fragment:oD,uv_pars_fragment:lD,uv_pars_vertex:cD,uv_vertex:uD,worldpos_vertex:fD,background_vert:dD,background_frag:hD,backgroundCube_vert:pD,backgroundCube_frag:mD,cube_vert:gD,cube_frag:vD,depth_vert:_D,depth_frag:xD,distance_vert:yD,distance_frag:SD,equirect_vert:bD,equirect_frag:MD,linedashed_vert:ED,linedashed_frag:TD,meshbasic_vert:AD,meshbasic_frag:RD,meshlambert_vert:CD,meshlambert_frag:wD,meshmatcap_vert:DD,meshmatcap_frag:ND,meshnormal_vert:LD,meshnormal_frag:UD,meshphong_vert:OD,meshphong_frag:PD,meshphysical_vert:ID,meshphysical_frag:zD,meshtoon_vert:FD,meshtoon_frag:BD,points_vert:HD,points_frag:GD,shadow_vert:VD,shadow_frag:kD,sprite_vert:XD,sprite_frag:WD},Ge={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new se},probesMax:{value:new se},probesResolution:{value:new se}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ea={basic:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Xn([Ge.points,Ge.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Xn([Ge.common,Ge.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Xn([Ge.sprite,Ge.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Xn([Ge.lights,Ge.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ea.physical={uniforms:Xn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Du={r:0,b:0,g:0},jD=new dn,Sb=new mt;Sb.set(-1,0,0,0,1,0,0,0,1);function qD(a,e,n,r,o,c){const u=new Rt(0);let h=o===!0?0:1,m,p,x=null,v=0,g=null;function b(U){let z=U.isScene===!0?U.background:null;if(z&&z.isTexture){const D=U.backgroundBlurriness>0;z=e.get(z,D)}return z}function T(U){let z=!1;const D=b(U);D===null?_(u,h):D&&D.isColor&&(_(D,1),z=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(U,z){const D=b(z);D&&(D.isCubeTexture||D.mapping===sf)?(p===void 0&&(p=new Ba(new Hl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:xo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=D,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(jD.makeRotationFromEuler(z.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Sb),p.material.toneMapped=wt.getTransfer(D.colorSpace)!==qt,(x!==D||v!==D.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,x=D,v=D.version,g=a.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ba(new of(2,2),new gi({name:"BackgroundMaterial",uniforms:xo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=wt.getTransfer(D.colorSpace)!==qt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||v!==D.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,x=D,v=D.version,g=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,z){U.getRGB(Du,vb(a)),n.buffers.color.setClear(Du.r,Du.g,Du.b,z,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,z=1){u.set(U),h=z,_(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,_(u,h)},render:T,addToRenderList:w,dispose:y}}function YD(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function h(k,Z,pe,de,ee){let L=!1;const V=v(k,de,pe,Z);c!==V&&(c=V,p(c.object)),L=b(k,de,pe,ee),L&&T(k,de,pe,ee),ee!==null&&e.update(ee,a.ELEMENT_ARRAY_BUFFER),(L||u)&&(u=!1,D(k,Z,pe,de),ee!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function m(){return a.createVertexArray()}function p(k){return a.bindVertexArray(k)}function x(k){return a.deleteVertexArray(k)}function v(k,Z,pe,de){const ee=de.wireframe===!0;let L=r[Z.id];L===void 0&&(L={},r[Z.id]=L);const V=k.isInstancedMesh===!0?k.id:0;let te=L[V];te===void 0&&(te={},L[V]=te);let ge=te[pe.id];ge===void 0&&(ge={},te[pe.id]=ge);let Me=ge[ee];return Me===void 0&&(Me=g(m()),ge[ee]=Me),Me}function g(k){const Z=[],pe=[],de=[];for(let ee=0;ee<n;ee++)Z[ee]=0,pe[ee]=0,de[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:pe,attributeDivisors:de,object:k,attributes:{},index:null}}function b(k,Z,pe,de){const ee=c.attributes,L=Z.attributes;let V=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){const O=ee[ge];let q=L[ge];if(q===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),O===void 0||O.attribute!==q||q&&O.data!==q.data)return!0;V++}return c.attributesNum!==V||c.index!==de}function T(k,Z,pe,de){const ee={},L=Z.attributes;let V=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){let O=L[ge];O===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const q={};q.attribute=O,O&&O.data&&(q.data=O.data),ee[ge]=q,V++}c.attributes=ee,c.attributesNum=V,c.index=de}function w(){const k=c.newAttributes;for(let Z=0,pe=k.length;Z<pe;Z++)k[Z]=0}function _(k){y(k,0)}function y(k,Z){const pe=c.newAttributes,de=c.enabledAttributes,ee=c.attributeDivisors;pe[k]=1,de[k]===0&&(a.enableVertexAttribArray(k),de[k]=1),ee[k]!==Z&&(a.vertexAttribDivisor(k,Z),ee[k]=Z)}function U(){const k=c.newAttributes,Z=c.enabledAttributes;for(let pe=0,de=Z.length;pe<de;pe++)Z[pe]!==k[pe]&&(a.disableVertexAttribArray(pe),Z[pe]=0)}function z(k,Z,pe,de,ee,L,V){V===!0?a.vertexAttribIPointer(k,Z,pe,ee,L):a.vertexAttribPointer(k,Z,pe,de,ee,L)}function D(k,Z,pe,de){w();const ee=de.attributes,L=pe.getAttributes(),V=Z.defaultAttributeValues;for(const te in L){const ge=L[te];if(ge.location>=0){let Me=ee[te];if(Me===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Me=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Me=k.instanceColor)),Me!==void 0){const O=Me.normalized,q=Me.itemSize,ie=e.get(Me);if(ie===void 0)continue;const Ee=ie.buffer,Se=ie.type,B=ie.bytesPerElement,Q=Se===a.INT||Se===a.UNSIGNED_INT||Me.gpuType===Um;if(Me.isInterleavedBufferAttribute){const ne=Me.data,Re=ne.stride,Qe=Me.offset;if(ne.isInstancedInterleavedBuffer){for(let Be=0;Be<ge.locationSize;Be++)y(ge.location+Be,ne.meshPerAttribute);k.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Be=0;Be<ge.locationSize;Be++)_(ge.location+Be);a.bindBuffer(a.ARRAY_BUFFER,Ee);for(let Be=0;Be<ge.locationSize;Be++)z(ge.location+Be,q/ge.locationSize,Se,O,Re*B,(Qe+q/ge.locationSize*Be)*B,Q)}else{if(Me.isInstancedBufferAttribute){for(let ne=0;ne<ge.locationSize;ne++)y(ge.location+ne,Me.meshPerAttribute);k.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ne=0;ne<ge.locationSize;ne++)_(ge.location+ne);a.bindBuffer(a.ARRAY_BUFFER,Ee);for(let ne=0;ne<ge.locationSize;ne++)z(ge.location+ne,q/ge.locationSize,Se,O,q*B,q/ge.locationSize*ne*B,Q)}}else if(V!==void 0){const O=V[te];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(ge.location,O);break;case 3:a.vertexAttrib3fv(ge.location,O);break;case 4:a.vertexAttrib4fv(ge.location,O);break;default:a.vertexAttrib1fv(ge.location,O)}}}}U()}function P(){F();for(const k in r){const Z=r[k];for(const pe in Z){const de=Z[pe];for(const ee in de){const L=de[ee];for(const V in L)x(L[V].object),delete L[V];delete de[ee]}}delete r[k]}}function N(k){if(r[k.id]===void 0)return;const Z=r[k.id];for(const pe in Z){const de=Z[pe];for(const ee in de){const L=de[ee];for(const V in L)x(L[V].object),delete L[V];delete de[ee]}}delete r[k.id]}function H(k){for(const Z in r){const pe=r[Z];for(const de in pe){const ee=pe[de];if(ee[k.id]===void 0)continue;const L=ee[k.id];for(const V in L)x(L[V].object),delete L[V];delete ee[k.id]}}}function A(k){for(const Z in r){const pe=r[Z],de=k.isInstancedMesh===!0?k.id:0,ee=pe[de];if(ee!==void 0){for(const L in ee){const V=ee[L];for(const te in V)x(V[te].object),delete V[te];delete ee[L]}delete pe[de],Object.keys(pe).length===0&&delete r[Z]}}}function F(){W(),u=!0,c!==o&&(c=o,p(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:F,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfObject:A,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:_,disableUnusedAttributes:U}}function KD(a,e,n){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),n.update(p,r,1)}function u(m,p,x){x!==0&&(a.drawArraysInstanced(r,m,p,x),n.update(p,r,x))}function h(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,x);let g=0;for(let b=0;b<x;b++)g+=p[b];n.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function ZD(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==Vi&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const A=H===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Di&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==na&&!A)}function m(H){if(H==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=m(p);x!==p&&(ct("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:U,maxVaryings:z,maxFragmentUniforms:D,maxSamples:P,samples:N}}function QD(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Jr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const b=v.length!==0||g||r!==0||o;return o=g,r=v.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=x(v,g,0)},this.setState=function(v,g,b){const T=v.clippingPlanes,w=v.clipIntersection,_=v.clipShadows,y=a.get(v);if(!o||T===null||T.length===0||c&&!_)c?x(null):p();else{const U=c?0:r,z=U*4;let D=y.clippingState||null;m.value=D,D=x(T,g,z,b);for(let P=0;P!==z;++P)D[P]=n[P];y.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,g,b,T){const w=v!==null?v.length:0;let _=null;if(w!==0){if(_=m.value,T!==!0||_===null){const y=b+w*4,U=g.matrixWorldInverse;h.getNormalMatrix(U),(_===null||_.length<y)&&(_=new Float32Array(y));for(let z=0,D=b;z!==w;++z,D+=4)u.copy(v[z]).applyMatrix4(U,h),u.normal.toArray(_,D),_[D+3]=u.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const Sr=4,iy=[.125,.215,.35,.446,.526,.582],ns=20,$D=256,bl=new xb,ay=new Rt;let ep=null,tp=0,np=0,ip=!1;const JD=new se;class ry{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=JD}=c;ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ly(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ep,tp,np),this._renderer.xr.enabled=ip,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:za,format:Vi,colorSpace:ju,depthBuffer:!1},o=sy(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sy(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eN(c)),this._blurMaterial=nN(c,e,n),this._ggxMaterial=tN(c,e,n)}return o}_compileMaterial(e){const n=new Ba(new ni,e);this._renderer.compile(n,bl)}_sceneToCubeUV(e,n,r,o,c){const m=new wi(90,1,n,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,b=v.toneMapping;v.getClearColor(ay),v.toneMapping=aa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new Hl,new hb({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let y=!1;const U=e.background;U?U.isColor&&(_.color.copy(U),e.background=null,y=!0):(_.color.copy(ay),y=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[z],c.y,c.z)):D===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[z]));const P=this._cubeSize;so(o,D*P,z>2?P:0,P,P),v.setRenderTarget(o),y&&v.render(w,m),v.render(e,m)}v.toneMapping=b,v.autoClear=g,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===cs||e.mapping===vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ly()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oy());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;so(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,bl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),g=0+p*1.25,b=v*g,{_lodMax:T}=this,w=this._sizeLods[r],_=3*w*(r>T-Sr?r-T+Sr:0),y=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=T-n,so(c,_,y,3*w,2*w),o.setRenderTarget(c),o.render(h,bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,so(e,_,y,3*w,2*w),o.setRenderTarget(e),o.render(h,bl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,b=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*ns-1),w=c/T,_=isFinite(c)?1+Math.floor(x*w):ns;_>ns&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ns}`);const y=[];let U=0;for(let H=0;H<ns;++H){const A=H/w,F=Math.exp(-A*A/2);y.push(F),H===0?U+=F:H<_&&(U+=2*F)}for(let H=0;H<y.length;H++)y[H]=y[H]/U;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:z}=this;g.dTheta.value=T,g.mipInt.value=z-r;const D=this._sizeLods[o],P=3*D*(o>z-Sr?o-z+Sr:0),N=4*(this._cubeSize-D);so(n,P,N,3*D,2*D),m.setRenderTarget(n),m.render(v,bl)}}function eN(a){const e=[],n=[],r=[];let o=a;const c=a-Sr+1+iy.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Sr?m=iy[u-a+Sr-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),x=-p,v=1+p,g=[x,x,v,x,v,v,x,x,v,v,x,v],b=6,T=6,w=3,_=2,y=1,U=new Float32Array(w*T*b),z=new Float32Array(_*T*b),D=new Float32Array(y*T*b);for(let N=0;N<b;N++){const H=N%3*2/3-1,A=N>2?0:-1,F=[H,A,0,H+2/3,A,0,H+2/3,A+1,0,H,A,0,H+2/3,A+1,0,H,A+1,0];U.set(F,w*T*N),z.set(g,_*T*N);const W=[N,N,N,N,N,N];D.set(W,y*T*N)}const P=new ni;P.setAttribute("position",new bn(U,w)),P.setAttribute("uv",new bn(z,_)),P.setAttribute("faceIndex",new bn(D,y)),r.push(new Ba(P,null)),o>Sr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function sy(a,e,n){const r=new ra(a,e,n);return r.texture.mapping=sf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function so(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function tN(a,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$D,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function nN(a,e,n){const r=new Float32Array(ns),o=new se(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function oy(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ly(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function lf(){return`

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
	`}class bb extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mb(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Ua});c.uniforms.tEquirect.value=n;const u=new Ba(o,c),h=n.minFilter;return n.minFilter===as&&(n.minFilter=Vn),new oC(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function iN(a){let e=new WeakMap,n=new WeakMap,r=null;function o(g,b=!1){return g==null?null:b?u(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===Ah||b===Rh)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new bb(T.height);return w.fromEquirectangularTexture(a,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const b=g.mapping,T=b===Ah||b===Rh,w=b===cs||b===vo;if(T||w){let _=n.get(g);const y=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new ry(a)),_=T?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const U=g.image;return T&&U&&U.height>0||w&&U&&m(U)?(r===null&&(r=new ry(a)),_=T?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function h(g,b){return b===Ah?g.mapping=cs:b===Rh&&(g.mapping=vo),g}function m(g){let b=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&b++;return b===T}function p(g){const b=g.target;b.removeEventListener("dispose",p);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function x(g){const b=g.target;b.removeEventListener("dispose",x);const T=n.get(b);T!==void 0&&(n.delete(b),T.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function aN(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ho("WebGLRenderer: "+r+" extension not supported."),o}}}function rN(a,e,n,r){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const b in g)e.update(g[b],a.ARRAY_BUFFER)}function p(v){const g=[],b=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(b!==null){const U=b.array;w=b.version;for(let z=0,D=U.length;z<D;z+=3){const P=U[z+0],N=U[z+1],H=U[z+2];g.push(P,N,N,H,H,P)}}else{const U=T.array;w=T.version;for(let z=0,D=U.length/3-1;z<D;z+=3){const P=z+0,N=z+1,H=z+2;g.push(P,N,N,H,H,P)}}const _=new(T.count>=65535?db:fb)(g,1);_.version=w;const y=c.get(v);y&&e.remove(y),c.set(v,_)}function x(v){const g=c.get(v);if(g){const b=v.index;b!==null&&g.version<b.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function sN(a,e,n){let r;function o(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){a.drawElements(r,g,c,v*u),n.update(g,r,1)}function p(v,g,b){b!==0&&(a.drawElementsInstanced(r,g,c,v*u,b),n.update(g,r,b))}function x(v,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,b);let w=0;for(let _=0;_<b;_++)w+=g[_];n.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function oN(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function lN(a,e,n){const r=new WeakMap,o=new fn;function c(u,h,m){const p=u.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let F=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",F)};g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let z=0;b===!0&&(z=1),T===!0&&(z=2),w===!0&&(z=3);let D=h.attributes.position.count*z,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const N=new Float32Array(D*P*4*v),H=new lb(N,D,P,v);H.type=na,H.needsUpdate=!0;const A=z*4;for(let W=0;W<v;W++){const k=_[W],Z=y[W],pe=U[W],de=D*P*4*W;for(let ee=0;ee<k.count;ee++){const L=ee*A;b===!0&&(o.fromBufferAttribute(k,ee),N[de+L+0]=o.x,N[de+L+1]=o.y,N[de+L+2]=o.z,N[de+L+3]=0),T===!0&&(o.fromBufferAttribute(Z,ee),N[de+L+4]=o.x,N[de+L+5]=o.y,N[de+L+6]=o.z,N[de+L+7]=0),w===!0&&(o.fromBufferAttribute(pe,ee),N[de+L+8]=o.x,N[de+L+9]=o.y,N[de+L+10]=o.z,N[de+L+11]=pe.itemSize===4?o.w:1)}}g={count:v,texture:H,size:new Ft(D,P)},r.set(h,g),h.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let b=0;for(let w=0;w<p.length;w++)b+=p[w];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function cN(a,e,n,r,o){let c=new WeakMap;function u(p){const x=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==x&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const b=p.skeleton;c.get(b)!==x&&(b.update(),c.set(b,x))}return g}function h(){c=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:h}}const uN={[jS]:"LINEAR_TONE_MAPPING",[qS]:"REINHARD_TONE_MAPPING",[YS]:"CINEON_TONE_MAPPING",[KS]:"ACES_FILMIC_TONE_MAPPING",[QS]:"AGX_TONE_MAPPING",[$S]:"NEUTRAL_TONE_MAPPING",[ZS]:"CUSTOM_TONE_MAPPING"};function fN(a,e,n,r,o,c){const u=new ra(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new _o(e,n):void 0}),h=new ra(e,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new aC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Ba(m,p),v=new xb(-1,1,1,-1,0,1);let g=null,b=null,T=!1,w,_=null,y=[],U=!1;this.setSize=function(z,D){u.setSize(z,D),h.setSize(z,D);for(let P=0;P<y.length;P++){const N=y[P];N.setSize&&N.setSize(z,D)}},this.setEffects=function(z){y=z,U=y.length>0&&y[0].isRenderPass===!0;const D=u.width,P=u.height;for(let N=0;N<y.length;N++){const H=y[N];H.setSize&&H.setSize(D,P)}},this.begin=function(z,D){if(T||z.toneMapping===aa&&y.length===0)return!1;if(_=D,D!==null){const P=D.width,N=D.height;(u.width!==P||u.height!==N)&&this.setSize(P,N)}return U===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=aa,!0},this.hasRenderPass=function(){return U},this.end=function(z,D){z.toneMapping=w,T=!0;let P=u,N=h;for(let H=0;H<y.length;H++){const A=y[H];if(A.enabled!==!1&&(A.render(z,N,P,D),A.needsSwap!==!1)){const F=P;P=N,N=F}}if(g!==z.outputColorSpace||b!==z.toneMapping){g=z.outputColorSpace,b=z.toneMapping,p.defines={},wt.getTransfer(g)===qt&&(p.defines.SRGB_TRANSFER="");const H=uN[b];H&&(p.defines[H]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,z.setRenderTarget(_),z.render(x,v),_=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const Mb=new Wn,mm=new _o(1,1),Eb=new lb,Tb=new NR,Ab=new mb,cy=[],uy=[],fy=new Float32Array(16),dy=new Float32Array(9),hy=new Float32Array(4);function Mo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=cy[o];if(c===void 0&&(c=new Float32Array(o),cy[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function Tn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function An(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function cf(a,e){let n=uy[e];n===void 0&&(n=new Int32Array(e),uy[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function dN(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function hN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2fv(this.addr,e),An(n,e)}}function pN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;a.uniform3fv(this.addr,e),An(n,e)}}function mN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4fv(this.addr,e),An(n,e)}}function gN(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;hy.set(r),a.uniformMatrix2fv(this.addr,!1,hy),An(n,r)}}function vN(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;dy.set(r),a.uniformMatrix3fv(this.addr,!1,dy),An(n,r)}}function _N(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;fy.set(r),a.uniformMatrix4fv(this.addr,!1,fy),An(n,r)}}function xN(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function yN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2iv(this.addr,e),An(n,e)}}function SN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3iv(this.addr,e),An(n,e)}}function bN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4iv(this.addr,e),An(n,e)}}function MN(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function EN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2uiv(this.addr,e),An(n,e)}}function TN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3uiv(this.addr,e),An(n,e)}}function AN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4uiv(this.addr,e),An(n,e)}}function RN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(mm.compareFunction=n.isReversedDepthBuffer()?Hm:Bm,c=mm):c=Mb,n.setTexture2D(e||c,o)}function CN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Tb,o)}function wN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Ab,o)}function DN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Eb,o)}function NN(a){switch(a){case 5126:return dN;case 35664:return hN;case 35665:return pN;case 35666:return mN;case 35674:return gN;case 35675:return vN;case 35676:return _N;case 5124:case 35670:return xN;case 35667:case 35671:return yN;case 35668:case 35672:return SN;case 35669:case 35673:return bN;case 5125:return MN;case 36294:return EN;case 36295:return TN;case 36296:return AN;case 35678:case 36198:case 36298:case 36306:case 35682:return RN;case 35679:case 36299:case 36307:return CN;case 35680:case 36300:case 36308:case 36293:return wN;case 36289:case 36303:case 36311:case 36292:return DN}}function LN(a,e){a.uniform1fv(this.addr,e)}function UN(a,e){const n=Mo(e,this.size,2);a.uniform2fv(this.addr,n)}function ON(a,e){const n=Mo(e,this.size,3);a.uniform3fv(this.addr,n)}function PN(a,e){const n=Mo(e,this.size,4);a.uniform4fv(this.addr,n)}function IN(a,e){const n=Mo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function zN(a,e){const n=Mo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function FN(a,e){const n=Mo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function BN(a,e){a.uniform1iv(this.addr,e)}function HN(a,e){a.uniform2iv(this.addr,e)}function GN(a,e){a.uniform3iv(this.addr,e)}function VN(a,e){a.uniform4iv(this.addr,e)}function kN(a,e){a.uniform1uiv(this.addr,e)}function XN(a,e){a.uniform2uiv(this.addr,e)}function WN(a,e){a.uniform3uiv(this.addr,e)}function jN(a,e){a.uniform4uiv(this.addr,e)}function qN(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=mm:u=Mb;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function YN(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Tb,c[u])}function KN(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Ab,c[u])}function ZN(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Eb,c[u])}function QN(a){switch(a){case 5126:return LN;case 35664:return UN;case 35665:return ON;case 35666:return PN;case 35674:return IN;case 35675:return zN;case 35676:return FN;case 5124:case 35670:return BN;case 35667:case 35671:return HN;case 35668:case 35672:return GN;case 35669:case 35673:return VN;case 5125:return kN;case 36294:return XN;case 36295:return WN;case 36296:return jN;case 35678:case 36198:case 36298:case 36306:case 35682:return qN;case 35679:case 36299:case 36307:return YN;case 35680:case 36300:case 36308:case 36293:return KN;case 36289:case 36303:case 36311:case 36292:return ZN}}class $N{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=NN(n.type)}}class JN{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=QN(n.type)}}class eL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],r)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function py(a,e){a.seq.push(e),a.map[e.id]=e}function tL(a,e,n){const r=a.name,o=r.length;for(ap.lastIndex=0;;){const c=ap.exec(r),u=ap.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){py(n,p===void 0?new $N(h,a,e):new JN(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new eL(h),py(n,v)),n=v}}}class Hu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);tL(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function my(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const nL=37297;let iL=0;function aL(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const gy=new mt;function rL(a){wt._getMatrix(gy,wt.workingColorSpace,a);const e=`mat3( ${gy.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(a)){case qu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function vy(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+aL(a.getShaderSource(e),h)}else return c}function sL(a,e){const n=rL(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const oL={[jS]:"Linear",[qS]:"Reinhard",[YS]:"Cineon",[KS]:"ACESFilmic",[QS]:"AgX",[$S]:"Neutral",[ZS]:"Custom"};function lL(a,e){const n=oL[e];return n===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nu=new se;function cL(){wt.getLuminanceCoefficients(Nu);const a=Nu.x.toFixed(4),e=Nu.y.toFixed(4),n=Nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uL(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function fL(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function dL(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function Al(a){return a!==""}function _y(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xy(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hL=/^[ \t]*#include +<([\w\d./]+)>/gm;function gm(a){return a.replace(hL,mL)}const pL=new Map;function mL(a,e){let n=xt[e];if(n===void 0){const r=pL.get(e);if(r!==void 0)n=xt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gm(n)}const gL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yy(a){return a.replace(gL,vL)}function vL(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Sy(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const _L={[Pu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function xL(a){return _L[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yL={[cs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[sf]:"ENVMAP_TYPE_CUBE_UV"};function SL(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":yL[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const bL={[vo]:"ENVMAP_MODE_REFRACTION"};function ML(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":bL[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EL={[WS]:"ENVMAP_BLENDING_MULTIPLY",[uR]:"ENVMAP_BLENDING_MIX",[fR]:"ENVMAP_BLENDING_ADD"};function TL(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":EL[a.combine]||"ENVMAP_BLENDING_NONE"}function AL(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function RL(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=xL(n),p=SL(n),x=ML(n),v=TL(n),g=AL(n),b=uL(n),T=fL(c),w=o.createProgram();let _,y,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Al).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Al).join(`
`),y.length>0&&(y+=`
`)):(_=[Sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),y=[Sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?xt.tonemapping_pars_fragment:"",n.toneMapping!==aa?lL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,sL("linearToOutputTexel",n.outputColorSpace),cL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),u=gm(u),u=_y(u,n),u=xy(u,n),h=gm(h),h=_y(h,n),h=xy(h,n),u=yy(u),h=yy(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,_=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",n.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=U+_+u,D=U+y+h,P=my(o,o.VERTEX_SHADER,z),N=my(o,o.FRAGMENT_SHADER,D);o.attachShader(w,P),o.attachShader(w,N),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function H(k){if(a.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w)||"",pe=o.getShaderInfoLog(P)||"",de=o.getShaderInfoLog(N)||"",ee=Z.trim(),L=pe.trim(),V=de.trim();let te=!0,ge=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,P,N);else{const Me=vy(o,P,"vertex"),O=vy(o,N,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+Me+`
`+O)}else ee!==""?ct("WebGLProgram: Program Info Log:",ee):(L===""||V==="")&&(ge=!1);ge&&(k.diagnostics={runnable:te,programLog:ee,vertexShader:{log:L,prefix:_},fragmentShader:{log:V,prefix:y}})}o.deleteShader(P),o.deleteShader(N),A=new Hu(o,w),F=dL(o,w)}let A;this.getUniforms=function(){return A===void 0&&H(this),A};let F;this.getAttributes=function(){return F===void 0&&H(this),F};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(w,nL)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iL++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=N,this}let CL=0;class wL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new DL(e),n.set(e,r)),r}}class DL{constructor(e){this.id=CL++,this.code=e,this.usedTimes=0}}function NL(a){return a===us||a===Xu||a===Wu}function LL(a,e,n,r,o,c){const u=new cb,h=new wL,m=new Set,p=[],x=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function w(A,F,W,k,Z,pe){const de=k.fog,ee=Z.geometry,L=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,V=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,te=e.get(A.envMap||L,V),ge=te&&te.mapping===sf?te.image.height:null,Me=b[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&ct("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const O=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,q=O!==void 0?O.length:0;let ie=0;ee.morphAttributes.position!==void 0&&(ie=1),ee.morphAttributes.normal!==void 0&&(ie=2),ee.morphAttributes.color!==void 0&&(ie=3);let Ee,Se,B,Q;if(Me){const je=ea[Me];Ee=je.vertexShader,Se=je.fragmentShader}else{Ee=A.vertexShader,Se=A.fragmentShader;const je=h.getVertexShaderStage(A),rn=h.getFragmentShaderStage(A);h.update(A,je,rn),B=je.id,Q=rn.id}const ne=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Qe=Z.isInstancedMesh===!0,Be=Z.isBatchedMesh===!0,yt=!!A.map,ft=!!A.matcap,ht=!!te,dt=!!A.aoMap,Je=!!A.lightMap,Et=!!A.bumpMap&&A.wireframe===!1,Ht=!!A.normalMap,Oe=!!A.displacementMap,lt=!!A.emissiveMap,Lt=!!A.metalnessMap,$t=!!A.roughnessMap,K=A.anisotropy>0,Yt=A.clearcoat>0,It=A.dispersion>0,I=A.iridescence>0,M=A.sheen>0,J=A.transmission>0,ce=K&&!!A.anisotropyMap,ve=Yt&&!!A.clearcoatMap,we=Yt&&!!A.clearcoatNormalMap,Pe=Yt&&!!A.clearcoatRoughnessMap,me=I&&!!A.iridescenceMap,_e=I&&!!A.iridescenceThicknessMap,Ne=M&&!!A.sheenColorMap,ke=M&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Ie=!!A.specularColorMap,tt=!!A.specularIntensityMap,nt=J&&!!A.transmissionMap,ut=J&&!!A.thicknessMap,j=!!A.gradientMap,De=!!A.alphaMap,ye=A.alphaTest>0,Ue=!!A.alphaHash,Ve=!!A.extensions;let Ae=aa;A.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const Ze={shaderID:Me,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:Se,defines:A.defines,customVertexShaderID:B,customFragmentShaderID:Q,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Be,batchingColor:Be&&Z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Z.instanceColor!==null,instancingMorph:Qe&&Z.morphTexture!==null,outputColorSpace:ne===null?a.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:yt,matcap:ft,envMap:ht,envMapMode:ht&&te.mapping,envMapCubeUVHeight:ge,aoMap:dt,lightMap:Je,bumpMap:Et,normalMap:Ht,displacementMap:Oe,emissiveMap:lt,normalMapObjectSpace:Ht&&A.normalMapType===pR,normalMapTangentSpace:Ht&&A.normalMapType===Tx,packedNormalMap:Ht&&A.normalMapType===Tx&&NL(A.normalMap.format),metalnessMap:Lt,roughnessMap:$t,anisotropy:K,anisotropyMap:ce,clearcoat:Yt,clearcoatMap:ve,clearcoatNormalMap:we,clearcoatRoughnessMap:Pe,dispersion:It,iridescence:I,iridescenceMap:me,iridescenceThicknessMap:_e,sheen:M,sheenColorMap:Ne,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:tt,transmission:J,transmissionMap:nt,thicknessMap:ut,gradientMap:j,opaque:A.transparent===!1&&A.blending===fo&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:Ue,combine:A.combine,mapUv:yt&&T(A.map.channel),aoMapUv:dt&&T(A.aoMap.channel),lightMapUv:Je&&T(A.lightMap.channel),bumpMapUv:Et&&T(A.bumpMap.channel),normalMapUv:Ht&&T(A.normalMap.channel),displacementMapUv:Oe&&T(A.displacementMap.channel),emissiveMapUv:lt&&T(A.emissiveMap.channel),metalnessMapUv:Lt&&T(A.metalnessMap.channel),roughnessMapUv:$t&&T(A.roughnessMap.channel),anisotropyMapUv:ce&&T(A.anisotropyMap.channel),clearcoatMapUv:ve&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(A.sheenRoughnessMap.channel),specularMapUv:Fe&&T(A.specularMap.channel),specularColorMapUv:Ie&&T(A.specularColorMap.channel),specularIntensityMapUv:tt&&T(A.specularIntensityMap.channel),transmissionMapUv:nt&&T(A.transmissionMap.channel),thicknessMapUv:ut&&T(A.thicknessMap.channel),alphaMapUv:De&&T(A.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ht||K),vertexNormals:!!ee.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ee.attributes.uv&&(yt||De),fog:!!de,useFog:A.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ee.attributes.normal===void 0&&Ht===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Re,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ie,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&W.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:yt&&A.map.isVideoTexture===!0&&wt.getTransfer(A.map.colorSpace)===qt,decodeVideoTextureEmissive:lt&&A.emissiveMap.isVideoTexture===!0&&wt.getTransfer(A.emissiveMap.colorSpace)===qt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Na,flipSided:A.side===ti,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function _(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const W in A.defines)F.push(W),F.push(A.defines[W]);return A.isRawShaderMaterial===!1&&(y(F,A),U(F,A),F.push(a.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function y(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function U(A,F){u.disableAll(),F.instancing&&u.enable(0),F.instancingColor&&u.enable(1),F.instancingMorph&&u.enable(2),F.matcap&&u.enable(3),F.envMap&&u.enable(4),F.normalMapObjectSpace&&u.enable(5),F.normalMapTangentSpace&&u.enable(6),F.clearcoat&&u.enable(7),F.iridescence&&u.enable(8),F.alphaTest&&u.enable(9),F.vertexColors&&u.enable(10),F.vertexAlphas&&u.enable(11),F.vertexUv1s&&u.enable(12),F.vertexUv2s&&u.enable(13),F.vertexUv3s&&u.enable(14),F.vertexTangents&&u.enable(15),F.anisotropy&&u.enable(16),F.alphaHash&&u.enable(17),F.batching&&u.enable(18),F.dispersion&&u.enable(19),F.batchingColor&&u.enable(20),F.gradientMap&&u.enable(21),F.packedNormalMap&&u.enable(22),F.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.reversedDepthBuffer&&u.enable(4),F.skinning&&u.enable(5),F.morphTargets&&u.enable(6),F.morphNormals&&u.enable(7),F.morphColors&&u.enable(8),F.premultipliedAlpha&&u.enable(9),F.shadowMapEnabled&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.transmission&&u.enable(15),F.sheen&&u.enable(16),F.opaque&&u.enable(17),F.pointsUvs&&u.enable(18),F.decodeVideoTexture&&u.enable(19),F.decodeVideoTextureEmissive&&u.enable(20),F.alphaToCoverage&&u.enable(21),F.numLightProbeGrids>0&&u.enable(22),F.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function z(A){const F=b[A.type];let W;if(F){const k=ea[F];W=tC.clone(k.uniforms)}else W=A.uniforms;return W}function D(A,F){let W=x.get(F);return W!==void 0?++W.usedTimes:(W=new RL(a,F,A,o),p.push(W),x.set(F,W)),W}function P(A){if(--A.usedTimes===0){const F=p.indexOf(A);p[F]=p[p.length-1],p.pop(),x.delete(A.cacheKey),A.destroy()}}function N(A){h.remove(A)}function H(){h.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:z,acquireProgram:D,releaseProgram:P,releaseShaderCache:N,programs:p,dispose:H}}function UL(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function OL(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function by(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function My(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function h(g,b,T,w,_,y){let U=a[e];return U===void 0?(U={id:g.id,object:g,geometry:b,material:T,materialVariant:u(g),groupOrder:w,renderOrder:g.renderOrder,z:_,group:y},a[e]=U):(U.id=g.id,U.object=g,U.geometry=b,U.material=T,U.materialVariant=u(g),U.groupOrder=w,U.renderOrder=g.renderOrder,U.z=_,U.group=y),e++,U}function m(g,b,T,w,_,y){const U=h(g,b,T,w,_,y);T.transmission>0?r.push(U):T.transparent===!0?o.push(U):n.push(U)}function p(g,b,T,w,_,y){const U=h(g,b,T,w,_,y);T.transmission>0?r.unshift(U):T.transparent===!0?o.unshift(U):n.unshift(U)}function x(g,b,T){n.length>1&&n.sort(g||OL),r.length>1&&r.sort(b||by),o.length>1&&o.sort(b||by),T&&(n.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,b=a.length;g<b;g++){const T=a[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:x}}function PL(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new My,a.set(r,[u])):o>=c.length?(u=new My,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function IL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Rt};break;case"SpotLight":n={position:new se,direction:new se,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new se,halfWidth:new se,halfHeight:new se};break}return a[e.id]=n,n}}}function zL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let FL=0;function BL(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function HL(a){const e=new IL,n=zL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new se);const o=new se,c=new dn,u=new dn;function h(p){let x=0,v=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let b=0,T=0,w=0,_=0,y=0,U=0,z=0,D=0,P=0,N=0,H=0;p.sort(BL);for(let F=0,W=p.length;F<W;F++){const k=p[F],Z=k.color,pe=k.intensity,de=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===us?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=Z.r*pe,v+=Z.g*pe,g+=Z.b*pe;else if(k.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],pe);H++}else if(k.isDirectionalLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,te=n.get(k);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.directionalShadow[b]=te,r.directionalShadowMap[b]=ee,r.directionalShadowMatrix[b]=k.shadow.matrix,U++}r.directional[b]=L,b++}else if(k.isSpotLight){const L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(Z).multiplyScalar(pe),L.distance=de,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[w]=L;const V=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,V.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[w]=V.matrix,k.castShadow){const te=n.get(k);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.spotShadow[w]=te,r.spotShadowMap[w]=ee,D++}w++}else if(k.isRectAreaLight){const L=e.get(k);L.color.copy(Z).multiplyScalar(pe),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=L,_++}else if(k.isPointLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const V=k.shadow,te=n.get(k);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,te.shadowCameraNear=V.camera.near,te.shadowCameraFar=V.camera.far,r.pointShadow[T]=te,r.pointShadowMap[T]=ee,r.pointShadowMatrix[T]=k.shadow.matrix,z++}r.point[T]=L,T++}else if(k.isHemisphereLight){const L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(pe),L.groundColor.copy(k.groundColor).multiplyScalar(pe),r.hemi[y]=L,y++}}_>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==b||A.pointLength!==T||A.spotLength!==w||A.rectAreaLength!==_||A.hemiLength!==y||A.numDirectionalShadows!==U||A.numPointShadows!==z||A.numSpotShadows!==D||A.numSpotMaps!==P||A.numLightProbes!==H)&&(r.directional.length=b,r.spot.length=w,r.rectArea.length=_,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=D+P-N,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=H,A.directionalLength=b,A.pointLength=T,A.spotLength=w,A.rectAreaLength=_,A.hemiLength=y,A.numDirectionalShadows=U,A.numPointShadows=z,A.numSpotShadows=D,A.numSpotMaps=P,A.numLightProbes=H,r.version=FL++)}function m(p,x){let v=0,g=0,b=0,T=0,w=0;const _=x.matrixWorldInverse;for(let y=0,U=p.length;y<U;y++){const z=p[y];if(z.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),v++}else if(z.isSpotLight){const D=r.spot[b];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),b++}else if(z.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(_),u.identity(),c.copy(z.matrixWorld),c.premultiply(_),u.extractRotation(c),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),T++}else if(z.isPointLight){const D=r.point[g];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(_),g++}else if(z.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(_),w++}}}return{setup:h,setupView:m,state:r}}function Ey(a){const e=new HL(a),n=[],r=[],o=[];function c(g){v.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function x(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:x,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function GL(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Ey(a),e.set(o,[h])):c>=u.length?(h=new Ey(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const VL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kL=`uniform sampler2D shadow_pass;
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
}`,XL=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],WL=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],Ty=new dn,Ml=new se,rp=new se;function jL(a,e,n){let r=new pb;const o=new Ft,c=new Ft,u=new fn,h=new rC,m=new sC,p={},x=n.maxTextureSize,v={[Tr]:ti,[ti]:Tr,[Na]:Na},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:VL,fragmentShader:kL}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const T=new ni;T.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ba(T,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let y=this.type;this.render=function(N,H,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;this.type===W3&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pu);const F=a.getRenderTarget(),W=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(Ua),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const pe=y!==this.type;pe&&H.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ee=>ee.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ee=N.length;de<ee;de++){const L=N[de],V=L.shadow;if(V===void 0){ct("WebGLShadowMap:",L,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const te=V.getFrameExtents();o.multiply(te),c.copy(V.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/te.x),o.x=c.x*te.x,V.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/te.y),o.y=c.y*te.y,V.mapSize.y=c.y));const ge=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ge,V.map===null||pe===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Tl){if(L.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ra(o.x,o.y,{format:us,type:za,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),V.map.texture.name=L.name+".shadowMap",V.map.depthTexture=new _o(o.x,o.y,na),V.map.depthTexture.name=L.name+".shadowMapDepth",V.map.depthTexture.format=Fa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn}else L.isPointLight?(V.map=new bb(o.x),V.map.depthTexture=new JR(o.x,sa)):(V.map=new ra(o.x,o.y),V.map.depthTexture=new _o(o.x,o.y,sa)),V.map.depthTexture.name=L.name+".shadowMap",V.map.depthTexture.format=Fa,this.type===Pu?(V.map.depthTexture.compareFunction=ge?Hm:Bm,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn);V.camera.updateProjectionMatrix()}const Me=V.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Me;O++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,O),a.clear();else{O===0&&(a.setRenderTarget(V.map),a.clear());const q=V.getViewport(O);u.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),Z.viewport(u)}if(L.isPointLight){const q=V.camera,ie=V.matrix,Ee=L.distance||q.far;Ee!==q.far&&(q.far=Ee,q.updateProjectionMatrix()),Ml.setFromMatrixPosition(L.matrixWorld),q.position.copy(Ml),rp.copy(q.position),rp.add(XL[O]),q.up.copy(WL[O]),q.lookAt(rp),q.updateMatrixWorld(),ie.makeTranslation(-Ml.x,-Ml.y,-Ml.z),Ty.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ty,q.coordinateSystem,q.reversedDepth)}else V.updateMatrices(L);r=V.getFrustum(),D(H,A,V.camera,L,this.type)}V.isPointLightShadow!==!0&&this.type===Tl&&U(V,A),V.needsUpdate=!1}y=this.type,_.needsUpdate=!1,a.setRenderTarget(F,W,k)};function U(N,H){const A=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ra(o.x,o.y,{format:us,type:za})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(H,null,A,g,w,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(H,null,A,b,w,null)}function z(N,H,A,F){let W=null;const k=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)W=k;else if(W=A.isPointLight===!0?m:h,a.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Z=W.uuid,pe=H.uuid;let de=p[Z];de===void 0&&(de={},p[Z]=de);let ee=de[pe];ee===void 0&&(ee=W.clone(),de[pe]=ee,H.addEventListener("dispose",P)),W=ee}if(W.visible=H.visible,W.wireframe=H.wireframe,F===Tl?W.side=H.shadowSide!==null?H.shadowSide:H.side:W.side=H.shadowSide!==null?H.shadowSide:v[H.side],W.alphaMap=H.alphaMap,W.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,W.map=H.map,W.clipShadows=H.clipShadows,W.clippingPlanes=H.clippingPlanes,W.clipIntersection=H.clipIntersection,W.displacementMap=H.displacementMap,W.displacementScale=H.displacementScale,W.displacementBias=H.displacementBias,W.wireframeLinewidth=H.wireframeLinewidth,W.linewidth=H.linewidth,A.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Z=a.properties.get(W);Z.light=A}return W}function D(N,H,A,F,W){if(N.visible===!1)return;if(N.layers.test(H.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===Tl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);const pe=e.update(N),de=N.material;if(Array.isArray(de)){const ee=pe.groups;for(let L=0,V=ee.length;L<V;L++){const te=ee[L],ge=de[te.materialIndex];if(ge&&ge.visible){const Me=z(N,ge,F,W);N.onBeforeShadow(a,N,H,A,pe,Me,te),a.renderBufferDirect(A,null,pe,Me,N,te),N.onAfterShadow(a,N,H,A,pe,Me,te)}}}else if(de.visible){const ee=z(N,de,F,W);N.onBeforeShadow(a,N,H,A,pe,ee,null),a.renderBufferDirect(A,null,pe,ee,N,null),N.onAfterShadow(a,N,H,A,pe,ee,null)}}const Z=N.children;for(let pe=0,de=Z.length;pe<de;pe++)D(Z[pe],H,A,F,W)}function P(N){N.target.removeEventListener("dispose",P);for(const A in p){const F=p[A],W=N.target.uuid;W in F&&(F[W].dispose(),delete F[W])}}}function qL(a,e){function n(){let j=!1;const De=new fn;let ye=null;const Ue=new fn(0,0,0,0);return{setMask:function(Ve){ye!==Ve&&!j&&(a.colorMask(Ve,Ve,Ve,Ve),ye=Ve)},setLocked:function(Ve){j=Ve},setClear:function(Ve,Ae,Ze,je,rn){rn===!0&&(Ve*=je,Ae*=je,Ze*=je),De.set(Ve,Ae,Ze,je),Ue.equals(De)===!1&&(a.clearColor(Ve,Ae,Ze,je),Ue.copy(De))},reset:function(){j=!1,ye=null,Ue.set(-1,0,0,0)}}}function r(){let j=!1,De=!1,ye=null,Ue=null,Ve=null;return{setReversed:function(Ae){if(De!==Ae){const Ze=e.get("EXT_clip_control");Ae?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;const je=Ve;Ve=null,this.setClear(je)}},getReversed:function(){return De},setTest:function(Ae){Ae?ne(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(Ae){ye!==Ae&&!j&&(a.depthMask(Ae),ye=Ae)},setFunc:function(Ae){if(De&&(Ae=ER[Ae]),Ue!==Ae){switch(Ae){case Cp:a.depthFunc(a.NEVER);break;case wp:a.depthFunc(a.ALWAYS);break;case Dp:a.depthFunc(a.LESS);break;case go:a.depthFunc(a.LEQUAL);break;case Np:a.depthFunc(a.EQUAL);break;case Lp:a.depthFunc(a.GEQUAL);break;case Up:a.depthFunc(a.GREATER);break;case Op:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ue=Ae}},setLocked:function(Ae){j=Ae},setClear:function(Ae){Ve!==Ae&&(Ve=Ae,De&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){j=!1,ye=null,Ue=null,Ve=null,De=!1}}}function o(){let j=!1,De=null,ye=null,Ue=null,Ve=null,Ae=null,Ze=null,je=null,rn=null;return{setTest:function(Gt){j||(Gt?ne(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(Gt){De!==Gt&&!j&&(a.stencilMask(Gt),De=Gt)},setFunc:function(Gt,ii,ai){(ye!==Gt||Ue!==ii||Ve!==ai)&&(a.stencilFunc(Gt,ii,ai),ye=Gt,Ue=ii,Ve=ai)},setOp:function(Gt,ii,ai){(Ae!==Gt||Ze!==ii||je!==ai)&&(a.stencilOp(Gt,ii,ai),Ae=Gt,Ze=ii,je=ai)},setLocked:function(Gt){j=Gt},setClear:function(Gt){rn!==Gt&&(a.clearStencil(Gt),rn=Gt)},reset:function(){j=!1,De=null,ye=null,Ue=null,Ve=null,Ae=null,Ze=null,je=null,rn=null}}}const c=new n,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let x={},v={},g={},b=new WeakMap,T=[],w=null,_=!1,y=null,U=null,z=null,D=null,P=null,N=null,H=null,A=new Rt(0,0,0),F=0,W=!1,k=null,Z=null,pe=null,de=null,ee=null;const L=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const ge=a.getParameter(a.VERSION);ge.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ge)[1]),V=te>=1):ge.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),V=te>=2);let Me=null,O={};const q=a.getParameter(a.SCISSOR_BOX),ie=a.getParameter(a.VIEWPORT),Ee=new fn().fromArray(q),Se=new fn().fromArray(ie);function B(j,De,ye,Ue){const Ve=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(j,Ae),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<ye;Ze++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Ue,0,a.RGBA,a.UNSIGNED_BYTE,Ve):a.texImage2D(De+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ve);return Ae}const Q={};Q[a.TEXTURE_2D]=B(a.TEXTURE_2D,a.TEXTURE_2D,1),Q[a.TEXTURE_CUBE_MAP]=B(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[a.TEXTURE_2D_ARRAY]=B(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Q[a.TEXTURE_3D]=B(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ne(a.DEPTH_TEST),u.setFunc(go),Et(!1),Ht(Sx),ne(a.CULL_FACE),dt(Ua);function ne(j){x[j]!==!0&&(a.enable(j),x[j]=!0)}function Re(j){x[j]!==!1&&(a.disable(j),x[j]=!1)}function Qe(j,De){return g[j]!==De?(a.bindFramebuffer(j,De),g[j]=De,j===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=De),j===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=De),!0):!1}function Be(j,De){let ye=T,Ue=!1;if(j){ye=b.get(De),ye===void 0&&(ye=[],b.set(De,ye));const Ve=j.textures;if(ye.length!==Ve.length||ye[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,Ze=Ve.length;Ae<Ze;Ae++)ye[Ae]=a.COLOR_ATTACHMENT0+Ae;ye.length=Ve.length,Ue=!0}}else ye[0]!==a.BACK&&(ye[0]=a.BACK,Ue=!0);Ue&&a.drawBuffers(ye)}function yt(j){return w!==j?(a.useProgram(j),w=j,!0):!1}const ft={[ts]:a.FUNC_ADD,[q3]:a.FUNC_SUBTRACT,[Y3]:a.FUNC_REVERSE_SUBTRACT};ft[K3]=a.MIN,ft[Z3]=a.MAX;const ht={[Q3]:a.ZERO,[$3]:a.ONE,[J3]:a.SRC_COLOR,[Ap]:a.SRC_ALPHA,[rR]:a.SRC_ALPHA_SATURATE,[iR]:a.DST_COLOR,[tR]:a.DST_ALPHA,[eR]:a.ONE_MINUS_SRC_COLOR,[Rp]:a.ONE_MINUS_SRC_ALPHA,[aR]:a.ONE_MINUS_DST_COLOR,[nR]:a.ONE_MINUS_DST_ALPHA,[sR]:a.CONSTANT_COLOR,[oR]:a.ONE_MINUS_CONSTANT_COLOR,[lR]:a.CONSTANT_ALPHA,[cR]:a.ONE_MINUS_CONSTANT_ALPHA};function dt(j,De,ye,Ue,Ve,Ae,Ze,je,rn,Gt){if(j===Ua){_===!0&&(Re(a.BLEND),_=!1);return}if(_===!1&&(ne(a.BLEND),_=!0),j!==j3){if(j!==y||Gt!==W){if((U!==ts||P!==ts)&&(a.blendEquation(a.FUNC_ADD),U=ts,P=ts),Gt)switch(j){case fo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case bx:a.blendFunc(a.ONE,a.ONE);break;case Mx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ex:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",j);break}else switch(j){case fo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case bx:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Mx:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ex:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",j);break}z=null,D=null,N=null,H=null,A.set(0,0,0),F=0,y=j,W=Gt}return}Ve=Ve||De,Ae=Ae||ye,Ze=Ze||Ue,(De!==U||Ve!==P)&&(a.blendEquationSeparate(ft[De],ft[Ve]),U=De,P=Ve),(ye!==z||Ue!==D||Ae!==N||Ze!==H)&&(a.blendFuncSeparate(ht[ye],ht[Ue],ht[Ae],ht[Ze]),z=ye,D=Ue,N=Ae,H=Ze),(je.equals(A)===!1||rn!==F)&&(a.blendColor(je.r,je.g,je.b,rn),A.copy(je),F=rn),y=j,W=!1}function Je(j,De){j.side===Na?Re(a.CULL_FACE):ne(a.CULL_FACE);let ye=j.side===ti;De&&(ye=!ye),Et(ye),j.blending===fo&&j.transparent===!1?dt(Ua):dt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ue=j.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),lt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ne(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function Et(j){k!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),k=j)}function Ht(j){j!==k3?(ne(a.CULL_FACE),j!==Z&&(j===Sx?a.cullFace(a.BACK):j===X3?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),Z=j}function Oe(j){j!==pe&&(V&&a.lineWidth(j),pe=j)}function lt(j,De,ye){j?(ne(a.POLYGON_OFFSET_FILL),(de!==De||ee!==ye)&&(de=De,ee=ye,u.getReversed()&&(De=-De),a.polygonOffset(De,ye))):Re(a.POLYGON_OFFSET_FILL)}function Lt(j){j?ne(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function $t(j){j===void 0&&(j=a.TEXTURE0+L-1),Me!==j&&(a.activeTexture(j),Me=j)}function K(j,De,ye){ye===void 0&&(Me===null?ye=a.TEXTURE0+L-1:ye=Me);let Ue=O[ye];Ue===void 0&&(Ue={type:void 0,texture:void 0},O[ye]=Ue),(Ue.type!==j||Ue.texture!==De)&&(Me!==ye&&(a.activeTexture(ye),Me=ye),a.bindTexture(j,De||Q[j]),Ue.type=j,Ue.texture=De)}function Yt(){const j=O[Me];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function It(){try{a.compressedTexImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function I(){try{a.compressedTexImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function M(){try{a.texSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function J(){try{a.texSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ce(){try{a.compressedTexSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ve(){try{a.compressedTexSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function we(){try{a.texStorage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Pe(){try{a.texStorage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function me(){try{a.texImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function _e(){try{a.texImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Ne(j){return v[j]!==void 0?v[j]:a.getParameter(j)}function ke(j,De){v[j]!==De&&(a.pixelStorei(j,De),v[j]=De)}function Fe(j){Ee.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),Ee.copy(j))}function Ie(j){Se.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Se.copy(j))}function tt(j,De){let ye=p.get(De);ye===void 0&&(ye=new WeakMap,p.set(De,ye));let Ue=ye.get(j);Ue===void 0&&(Ue=a.getUniformBlockIndex(De,j.name),ye.set(j,Ue))}function nt(j,De){const Ue=p.get(De).get(j);m.get(De)!==Ue&&(a.uniformBlockBinding(De,Ue,j.__bindingPointIndex),m.set(De,Ue))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),x={},v={},Me=null,O={},g={},b=new WeakMap,T=[],w=null,_=!1,y=null,U=null,z=null,D=null,P=null,N=null,H=null,A=new Rt(0,0,0),F=0,W=!1,k=null,Z=null,pe=null,de=null,ee=null,Ee.set(0,0,a.canvas.width,a.canvas.height),Se.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ne,disable:Re,bindFramebuffer:Qe,drawBuffers:Be,useProgram:yt,setBlending:dt,setMaterial:Je,setFlipSided:Et,setCullFace:Ht,setLineWidth:Oe,setPolygonOffset:lt,setScissorTest:Lt,activeTexture:$t,bindTexture:K,unbindTexture:Yt,compressedTexImage2D:It,compressedTexImage3D:I,texImage2D:me,texImage3D:_e,pixelStorei:ke,getParameter:Ne,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:we,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:J,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Fe,viewport:Ie,reset:ut}}function YL(a,e,n,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,x=new WeakMap,v=new Set;let g;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,M){return T?new OffscreenCanvas(I,M):Ku("canvas")}function _(I,M,J){let ce=1;const ve=It(I);if((ve.width>J||ve.height>J)&&(ce=J/Math.max(ve.width,ve.height)),ce<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const we=Math.floor(ce*ve.width),Pe=Math.floor(ce*ve.height);g===void 0&&(g=w(we,Pe));const me=M?w(we,Pe):g;return me.width=we,me.height=Pe,me.getContext("2d").drawImage(I,0,0,we,Pe),ct("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+we+"x"+Pe+")."),me}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function y(I){return I.generateMipmaps}function U(I){a.generateMipmap(I)}function z(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(I,M,J,ce,ve,we=!1){if(I!==null){if(a[I]!==void 0)return a[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;ce&&(Pe=e.get("EXT_texture_norm16"),Pe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===a.RED&&(J===a.FLOAT&&(me=a.R32F),J===a.HALF_FLOAT&&(me=a.R16F),J===a.UNSIGNED_BYTE&&(me=a.R8),J===a.UNSIGNED_SHORT&&Pe&&(me=Pe.R16_EXT),J===a.SHORT&&Pe&&(me=Pe.R16_SNORM_EXT)),M===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(me=a.R8UI),J===a.UNSIGNED_SHORT&&(me=a.R16UI),J===a.UNSIGNED_INT&&(me=a.R32UI),J===a.BYTE&&(me=a.R8I),J===a.SHORT&&(me=a.R16I),J===a.INT&&(me=a.R32I)),M===a.RG&&(J===a.FLOAT&&(me=a.RG32F),J===a.HALF_FLOAT&&(me=a.RG16F),J===a.UNSIGNED_BYTE&&(me=a.RG8),J===a.UNSIGNED_SHORT&&Pe&&(me=Pe.RG16_EXT),J===a.SHORT&&Pe&&(me=Pe.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(me=a.RG8UI),J===a.UNSIGNED_SHORT&&(me=a.RG16UI),J===a.UNSIGNED_INT&&(me=a.RG32UI),J===a.BYTE&&(me=a.RG8I),J===a.SHORT&&(me=a.RG16I),J===a.INT&&(me=a.RG32I)),M===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(me=a.RGB8UI),J===a.UNSIGNED_SHORT&&(me=a.RGB16UI),J===a.UNSIGNED_INT&&(me=a.RGB32UI),J===a.BYTE&&(me=a.RGB8I),J===a.SHORT&&(me=a.RGB16I),J===a.INT&&(me=a.RGB32I)),M===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(me=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(me=a.RGBA16UI),J===a.UNSIGNED_INT&&(me=a.RGBA32UI),J===a.BYTE&&(me=a.RGBA8I),J===a.SHORT&&(me=a.RGBA16I),J===a.INT&&(me=a.RGBA32I)),M===a.RGB&&(J===a.UNSIGNED_SHORT&&Pe&&(me=Pe.RGB16_EXT),J===a.SHORT&&Pe&&(me=Pe.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(me=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(me=a.R11F_G11F_B10F)),M===a.RGBA){const _e=we?qu:wt.getTransfer(ve);J===a.FLOAT&&(me=a.RGBA32F),J===a.HALF_FLOAT&&(me=a.RGBA16F),J===a.UNSIGNED_BYTE&&(me=_e===qt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Pe&&(me=Pe.RGBA16_EXT),J===a.SHORT&&Pe&&(me=Pe.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(me=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(me=a.RGB5_A1)}return(me===a.R16F||me===a.R32F||me===a.RG16F||me===a.RG32F||me===a.RGBA16F||me===a.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function P(I,M){let J;return I?M===null||M===sa||M===Ul?J=a.DEPTH24_STENCIL8:M===na?J=a.DEPTH32F_STENCIL8:M===Ll&&(J=a.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===Ul?J=a.DEPTH_COMPONENT24:M===na?J=a.DEPTH_COMPONENT32F:M===Ll&&(J=a.DEPTH_COMPONENT16),J}function N(I,M){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pn&&I.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function H(I){const M=I.target;M.removeEventListener("dispose",H),F(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&v.delete(M)}function A(I){const M=I.target;M.removeEventListener("dispose",A),k(M)}function F(I){const M=r.get(I);if(M.__webglInit===void 0)return;const J=I.source,ce=b.get(J);if(ce){const ve=ce[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&W(I),Object.keys(ce).length===0&&b.delete(J)}r.remove(I)}function W(I){const M=r.get(I);a.deleteTexture(M.__webglTexture);const J=I.source,ce=b.get(J);delete ce[M.__cacheKey],u.memory.textures--}function k(I){const M=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let ve=0;ve<M.__webglFramebuffer[ce].length;ve++)a.deleteFramebuffer(M.__webglFramebuffer[ce][ve]);else a.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)a.deleteFramebuffer(M.__webglFramebuffer[ce]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=I.textures;for(let ce=0,ve=J.length;ce<ve;ce++){const we=r.get(J[ce]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove(J[ce])}r.remove(I)}let Z=0;function pe(){Z=0}function de(){return Z}function ee(I){Z=I}function L(){const I=Z;return I>=o.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),Z+=1,I}function V(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function te(I,M){const J=r.get(I);if(I.isVideoTexture&&K(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const ce=I.image;if(ce===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,I,M);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+M)}function ge(I,M){const J=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){Re(J,I,M);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+M)}function Me(I,M){const J=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){Re(J,I,M);return}n.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+M)}function O(I,M){const J=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&J.__version!==I.version){Qe(J,I,M);return}n.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+M)}const q={[Pp]:a.REPEAT,[La]:a.CLAMP_TO_EDGE,[Ip]:a.MIRRORED_REPEAT},ie={[Pn]:a.NEAREST,[dR]:a.NEAREST_MIPMAP_NEAREST,[ru]:a.NEAREST_MIPMAP_LINEAR,[Vn]:a.LINEAR,[Ch]:a.LINEAR_MIPMAP_NEAREST,[as]:a.LINEAR_MIPMAP_LINEAR},Ee={[mR]:a.NEVER,[yR]:a.ALWAYS,[gR]:a.LESS,[Bm]:a.LEQUAL,[vR]:a.EQUAL,[Hm]:a.GEQUAL,[_R]:a.GREATER,[xR]:a.NOTEQUAL};function Se(I,M){if(M.type===na&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Ch||M.magFilter===ru||M.magFilter===as||M.minFilter===Vn||M.minFilter===Ch||M.minFilter===ru||M.minFilter===as)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,q[M.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,q[M.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,q[M.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,ie[M.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==ru&&M.minFilter!==as||M.type===na&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function B(I,M){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",H));const ce=M.source;let ve=b.get(ce);ve===void 0&&(ve={},b.set(ce,ve));const we=V(M);if(we!==I.__cacheKey){ve[we]===void 0&&(ve[we]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ve[we].usedTimes++;const Pe=ve[I.__cacheKey];Pe!==void 0&&(ve[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&W(M)),I.__cacheKey=we,I.__webglTexture=ve[we].texture}return J}function Q(I,M,J){return Math.floor(Math.floor(I/J)/M)}function ne(I,M,J,ce){const we=I.updateRanges;if(we.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,J,ce,M.data);else{we.sort((ke,Fe)=>ke.start-Fe.start);let Pe=0;for(let ke=1;ke<we.length;ke++){const Fe=we[Pe],Ie=we[ke],tt=Fe.start+Fe.count,nt=Q(Ie.start,M.width,4),ut=Q(Fe.start,M.width,4);Ie.start<=tt+1&&nt===ut&&Q(Ie.start+Ie.count-1,M.width,4)===nt?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Pe,we[Pe]=Ie)}we.length=Pe+1;const me=n.getParameter(a.UNPACK_ROW_LENGTH),_e=n.getParameter(a.UNPACK_SKIP_PIXELS),Ne=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let ke=0,Fe=we.length;ke<Fe;ke++){const Ie=we[ke],tt=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),ut=tt%M.width,j=Math.floor(tt/M.width),De=nt,ye=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(a.UNPACK_SKIP_ROWS,j),n.texSubImage2D(a.TEXTURE_2D,0,ut,j,De,ye,J,ce,M.data)}I.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,me),n.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(a.UNPACK_SKIP_ROWS,Ne)}}function Re(I,M,J){let ce=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=a.TEXTURE_3D);const ve=B(I,M),we=M.source;n.bindTexture(ce,I.__webglTexture,a.TEXTURE0+J);const Pe=r.get(we);if(we.version!==Pe.__version||ve===!0){if(n.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=wt.getPrimaries(wt.workingColorSpace),Ue=M.colorSpace===yr?null:wt.getPrimaries(M.colorSpace),Ve=M.colorSpace===yr||ye===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=_(M.image,!1,o.maxTextureSize);_e=Yt(M,_e);const Ne=c.convert(M.format,M.colorSpace),ke=c.convert(M.type);let Fe=D(M.internalFormat,Ne,ke,M.normalized,M.colorSpace,M.isVideoTexture);Se(ce,M);let Ie;const tt=M.mipmaps,nt=M.isVideoTexture!==!0,ut=Pe.__version===void 0||ve===!0,j=we.dataReady,De=N(M,_e);if(M.isDepthTexture)Fe=P(M.format===rs,M.type),ut&&(nt?n.texStorage2D(a.TEXTURE_2D,1,Fe,_e.width,_e.height):n.texImage2D(a.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ne,ke,null));else if(M.isDataTexture)if(tt.length>0){nt&&ut&&n.texStorage2D(a.TEXTURE_2D,De,Fe,tt[0].width,tt[0].height);for(let ye=0,Ue=tt.length;ye<Ue;ye++)Ie=tt[ye],nt?j&&n.texSubImage2D(a.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Ne,ke,Ie.data):n.texImage2D(a.TEXTURE_2D,ye,Fe,Ie.width,Ie.height,0,Ne,ke,Ie.data);M.generateMipmaps=!1}else nt?(ut&&n.texStorage2D(a.TEXTURE_2D,De,Fe,_e.width,_e.height),j&&ne(M,_e,Ne,ke)):n.texImage2D(a.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ne,ke,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&ut&&n.texStorage3D(a.TEXTURE_2D_ARRAY,De,Fe,tt[0].width,tt[0].height,_e.depth);for(let ye=0,Ue=tt.length;ye<Ue;ye++)if(Ie=tt[ye],M.format!==Vi)if(Ne!==null)if(nt){if(j)if(M.layerUpdates.size>0){const Ve=ny(Ie.width,Ie.height,M.format,M.type);for(const Ae of M.layerUpdates){const Ze=Ie.data.subarray(Ae*Ve/Ie.data.BYTES_PER_ELEMENT,(Ae+1)*Ve/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,Ae,Ie.width,Ie.height,1,Ne,Ze)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,_e.depth,Ne,Ie.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ye,Fe,Ie.width,Ie.height,_e.depth,0,Ie.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?j&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,_e.depth,Ne,ke,Ie.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ye,Fe,Ie.width,Ie.height,_e.depth,0,Ne,ke,Ie.data)}else{nt&&ut&&n.texStorage2D(a.TEXTURE_2D,De,Fe,tt[0].width,tt[0].height);for(let ye=0,Ue=tt.length;ye<Ue;ye++)Ie=tt[ye],M.format!==Vi?Ne!==null?nt?j&&n.compressedTexSubImage2D(a.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Ne,Ie.data):n.compressedTexImage2D(a.TEXTURE_2D,ye,Fe,Ie.width,Ie.height,0,Ie.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?j&&n.texSubImage2D(a.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Ne,ke,Ie.data):n.texImage2D(a.TEXTURE_2D,ye,Fe,Ie.width,Ie.height,0,Ne,ke,Ie.data)}else if(M.isDataArrayTexture)if(nt){if(ut&&n.texStorage3D(a.TEXTURE_2D_ARRAY,De,Fe,_e.width,_e.height,_e.depth),j)if(M.layerUpdates.size>0){const ye=ny(_e.width,_e.height,M.format,M.type);for(const Ue of M.layerUpdates){const Ve=_e.data.subarray(Ue*ye/_e.data.BYTES_PER_ELEMENT,(Ue+1)*ye/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ue,_e.width,_e.height,1,Ne,ke,Ve)}M.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,ke,_e.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ne,ke,_e.data);else if(M.isData3DTexture)nt?(ut&&n.texStorage3D(a.TEXTURE_3D,De,Fe,_e.width,_e.height,_e.depth),j&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,ke,_e.data)):n.texImage3D(a.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ne,ke,_e.data);else if(M.isFramebufferTexture){if(ut)if(nt)n.texStorage2D(a.TEXTURE_2D,De,Fe,_e.width,_e.height);else{let ye=_e.width,Ue=_e.height;for(let Ve=0;Ve<De;Ve++)n.texImage2D(a.TEXTURE_2D,Ve,Fe,ye,Ue,0,Ne,ke,null),ye>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){const ye=a.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),_e.parentNode!==ye){ye.appendChild(_e),v.add(M),ye.onpaint=Ue=>{const Ve=Ue.changedElements;for(const Ae of v)Ve.includes(Ae.image)&&(Ae.needsUpdate=!0)},ye.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,_e);else{const Ve=a.RGBA,Ae=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ve,Ae,Ze,_e)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(tt.length>0){if(nt&&ut){const ye=It(tt[0]);n.texStorage2D(a.TEXTURE_2D,De,Fe,ye.width,ye.height)}for(let ye=0,Ue=tt.length;ye<Ue;ye++)Ie=tt[ye],nt?j&&n.texSubImage2D(a.TEXTURE_2D,ye,0,0,Ne,ke,Ie):n.texImage2D(a.TEXTURE_2D,ye,Fe,Ne,ke,Ie);M.generateMipmaps=!1}else if(nt){if(ut){const ye=It(_e);n.texStorage2D(a.TEXTURE_2D,De,Fe,ye.width,ye.height)}j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ne,ke,_e)}else n.texImage2D(a.TEXTURE_2D,0,Fe,Ne,ke,_e);y(M)&&U(ce),Pe.__version=we.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Qe(I,M,J){if(M.image.length!==6)return;const ce=B(I,M),ve=M.source;n.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+J);const we=r.get(ve);if(ve.version!==we.__version||ce===!0){n.activeTexture(a.TEXTURE0+J);const Pe=wt.getPrimaries(wt.workingColorSpace),me=M.colorSpace===yr?null:wt.getPrimaries(M.colorSpace),_e=M.colorSpace===yr||Pe===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,Fe=[];for(let Ae=0;Ae<6;Ae++)!Ne&&!ke?Fe[Ae]=_(M.image[Ae],!0,o.maxCubemapSize):Fe[Ae]=ke?M.image[Ae].image:M.image[Ae],Fe[Ae]=Yt(M,Fe[Ae]);const Ie=Fe[0],tt=c.convert(M.format,M.colorSpace),nt=c.convert(M.type),ut=D(M.internalFormat,tt,nt,M.normalized,M.colorSpace),j=M.isVideoTexture!==!0,De=we.__version===void 0||ce===!0,ye=ve.dataReady;let Ue=N(M,Ie);Se(a.TEXTURE_CUBE_MAP,M);let Ve;if(Ne){j&&De&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ut,Ie.width,Ie.height);for(let Ae=0;Ae<6;Ae++){Ve=Fe[Ae].mipmaps;for(let Ze=0;Ze<Ve.length;Ze++){const je=Ve[Ze];M.format!==Vi?tt!==null?j?ye&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,je.width,je.height,tt,je.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,ut,je.width,je.height,0,je.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,je.width,je.height,tt,nt,je.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,ut,je.width,je.height,0,tt,nt,je.data)}}}else{if(Ve=M.mipmaps,j&&De){Ve.length>0&&Ue++;const Ae=It(Fe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ut,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ke){j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Fe[Ae].width,Fe[Ae].height,tt,nt,Fe[Ae].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Fe[Ae].width,Fe[Ae].height,0,tt,nt,Fe[Ae].data);for(let Ze=0;Ze<Ve.length;Ze++){const rn=Ve[Ze].image[Ae].image;j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,rn.width,rn.height,tt,nt,rn.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,ut,rn.width,rn.height,0,tt,nt,rn.data)}}else{j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,tt,nt,Fe[Ae]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,tt,nt,Fe[Ae]);for(let Ze=0;Ze<Ve.length;Ze++){const je=Ve[Ze];j?ye&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,tt,nt,je.image[Ae]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,ut,tt,nt,je.image[Ae])}}}y(M)&&U(a.TEXTURE_CUBE_MAP),we.__version=ve.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Be(I,M,J,ce,ve,we){const Pe=c.convert(J.format,J.colorSpace),me=c.convert(J.type),_e=D(J.internalFormat,Pe,me,J.normalized,J.colorSpace),Ne=r.get(M),ke=r.get(J);if(ke.__renderTarget=M,!Ne.__hasExternalTextures){const Fe=Math.max(1,M.width>>we),Ie=Math.max(1,M.height>>we);ve===a.TEXTURE_3D||ve===a.TEXTURE_2D_ARRAY?n.texImage3D(ve,we,_e,Fe,Ie,M.depth,0,Pe,me,null):n.texImage2D(ve,we,_e,Fe,Ie,0,Pe,me,null)}n.bindFramebuffer(a.FRAMEBUFFER,I),$t(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ce,ve,ke.__webglTexture,0,Lt(M)):(ve===a.TEXTURE_2D||ve>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ce,ve,ke.__webglTexture,we),n.bindFramebuffer(a.FRAMEBUFFER,null)}function yt(I,M,J){if(a.bindRenderbuffer(a.RENDERBUFFER,I),M.depthBuffer){const ce=M.depthTexture,ve=ce&&ce.isDepthTexture?ce.type:null,we=P(M.stencilBuffer,ve),Pe=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;$t(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(M),we,M.width,M.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(M),we,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,we,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,I)}else{const ce=M.textures;for(let ve=0;ve<ce.length;ve++){const we=ce[ve],Pe=c.convert(we.format,we.colorSpace),me=c.convert(we.type),_e=D(we.internalFormat,Pe,me,we.normalized,we.colorSpace);$t(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(M),_e,M.width,M.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(M),_e,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,_e,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ft(I,M,J){const ce=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=r.get(M.depthTexture);if(ve.__renderTarget=M,(!ve.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),ve.__webglTexture===void 0){ve.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),Se(a.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=c.convert(M.depthTexture.format),ke=c.convert(M.depthTexture.type);let Fe;M.depthTexture.format===Fa?Fe=a.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(Fe=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,M.width,M.height,0,Ne,ke,null)}}else te(M.depthTexture,0);const we=ve.__webglTexture,Pe=Lt(M),me=ce?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,_e=M.depthTexture.format===rs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fa)$t(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,me,we,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,me,we,0);else if(M.depthTexture.format===rs)$t(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,me,we,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,me,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(I){const M=r.get(I),J=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ce=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){const ve=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",ve)};ce.addEventListener("dispose",ve),M.__depthDisposeCallback=ve}M.__boundDepthTexture=ce}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(J)for(let ce=0;ce<6;ce++)ft(M.__webglFramebuffer[ce],I,ce);else{const ce=I.texture.mipmaps;ce&&ce.length>0?ft(M.__webglFramebuffer[0],I,0):ft(M.__webglFramebuffer,I,0)}else if(J){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=a.createRenderbuffer(),yt(M.__webglDepthbuffer[ce],I,!1);else{const ve=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer[ce];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,we)}}else{const ce=I.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),yt(M.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,we)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function dt(I,M,J){const ce=r.get(I);M!==void 0&&Be(ce.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&ht(I)}function Je(I){const M=I.texture,J=r.get(I),ce=r.get(M);I.addEventListener("dispose",A);const ve=I.textures,we=I.isWebGLCubeRenderTarget===!0,Pe=ve.length>1;if(Pe||(ce.__webglTexture===void 0&&(ce.__webglTexture=a.createTexture()),ce.__version=M.version,u.memory.textures++),we){J.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[me]=[];for(let _e=0;_e<M.mipmaps.length;_e++)J.__webglFramebuffer[me][_e]=a.createFramebuffer()}else J.__webglFramebuffer[me]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)J.__webglFramebuffer[me]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let me=0,_e=ve.length;me<_e;me++){const Ne=r.get(ve[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=a.createTexture(),u.memory.textures++)}if(I.samples>0&&$t(I)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let me=0;me<ve.length;me++){const _e=ve[me];J.__webglColorRenderbuffer[me]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[me]);const Ne=c.convert(_e.format,_e.colorSpace),ke=c.convert(_e.type),Fe=D(_e.internalFormat,Ne,ke,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),Ie=Lt(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Fe,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,J.__webglColorRenderbuffer[me])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),yt(J.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){n.bindTexture(a.TEXTURE_CUBE_MAP,ce.__webglTexture),Se(a.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Be(J.__webglFramebuffer[me][_e],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else Be(J.__webglFramebuffer[me],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(M)&&U(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let me=0,_e=ve.length;me<_e;me++){const Ne=ve[me],ke=r.get(Ne);let Fe=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Fe=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Fe,ke.__webglTexture),Se(Fe,Ne),Be(J.__webglFramebuffer,I,Ne,a.COLOR_ATTACHMENT0+me,Fe,0),y(Ne)&&U(Fe)}n.unbindTexture()}else{let me=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(me,ce.__webglTexture),Se(me,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Be(J.__webglFramebuffer[_e],I,M,a.COLOR_ATTACHMENT0,me,_e);else Be(J.__webglFramebuffer,I,M,a.COLOR_ATTACHMENT0,me,0);y(M)&&U(me),n.unbindTexture()}I.depthBuffer&&ht(I)}function Et(I){const M=I.textures;for(let J=0,ce=M.length;J<ce;J++){const ve=M[J];if(y(ve)){const we=z(I),Pe=r.get(ve).__webglTexture;n.bindTexture(we,Pe),U(we),n.unbindTexture()}}}const Ht=[],Oe=[];function lt(I){if(I.samples>0){if($t(I)===!1){const M=I.textures,J=I.width,ce=I.height;let ve=a.COLOR_BUFFER_BIT;const we=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=r.get(I),me=M.length>1;if(me)for(let Ne=0;Ne<M.length;Ne++)n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const _e=I.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=a.STENCIL_BUFFER_BIT)),me){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const ke=r.get(M[Ne]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ke,0)}a.blitFramebuffer(0,0,J,ce,0,0,J,ce,ve,a.NEAREST),m===!0&&(Ht.length=0,Oe.length=0,Ht.push(a.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ht.push(we),Oe.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Oe)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),me)for(let Ne=0;Ne<M.length;Ne++){n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const ke=r.get(M[Ne]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,ke,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const M=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Lt(I){return Math.min(o.maxSamples,I.samples)}function $t(I){const M=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function K(I){const M=u.render.frame;x.get(I)!==M&&(x.set(I,M),I.update())}function Yt(I,M){const J=I.colorSpace,ce=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==ju&&J!==yr&&(wt.getTransfer(J)===qt?(ce!==Vi||ve!==Di)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",J)),M}function It(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=L,this.resetTextureUnits=pe,this.getTextureUnits=de,this.setTextureUnits=ee,this.setTexture2D=te,this.setTexture2DArray=ge,this.setTexture3D=Me,this.setTextureCube=O,this.rebindTextures=dt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function KL(a,e){function n(r,o=yr){let c;const u=wt.getTransfer(o);if(r===Di)return a.UNSIGNED_BYTE;if(r===Om)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Pm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===nb)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ib)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===eb)return a.BYTE;if(r===tb)return a.SHORT;if(r===Ll)return a.UNSIGNED_SHORT;if(r===Um)return a.INT;if(r===sa)return a.UNSIGNED_INT;if(r===na)return a.FLOAT;if(r===za)return a.HALF_FLOAT;if(r===ab)return a.ALPHA;if(r===rb)return a.RGB;if(r===Vi)return a.RGBA;if(r===Fa)return a.DEPTH_COMPONENT;if(r===rs)return a.DEPTH_STENCIL;if(r===sb)return a.RED;if(r===Im)return a.RED_INTEGER;if(r===us)return a.RG;if(r===zm)return a.RG_INTEGER;if(r===Fm)return a.RGBA_INTEGER;if(r===Iu||r===zu||r===Fu||r===Bu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zp||r===Fp||r===Bp||r===Hp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===zp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===Xu||r===jp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Gp||r===Vp)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===kp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Xp)return c.COMPRESSED_R11_EAC;if(r===Wp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Xu)return c.COMPRESSED_RG11_EAC;if(r===jp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qp||r===Yp||r===Kp||r===Zp||r===Qp||r===$p||r===Jp||r===em||r===tm||r===nm||r===im||r===am||r===rm||r===sm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===qp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$p)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===em)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tm)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nm)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===im)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===am)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rm)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sm)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===om||r===lm||r===cm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===om)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===um||r===fm||r===Wu||r===dm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===um)return c.COMPRESSED_RED_RGTC1_EXT;if(r===fm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ul?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const ZL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QL=`
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

}`;class $L{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new gb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gi({vertexShader:ZL,fragmentShader:QL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ba(new of(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JL extends ds{constructor(e,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,x=null,v=null,g=null,b=null,T=null;const w=typeof XRWebGLBinding<"u",_=new $L,y={},U=n.getContextAttributes();let z=null,D=null;const P=[],N=[],H=new Ft;let A=null;const F=new wi;F.viewport=new fn;const W=new wi;W.viewport=new fn;const k=[F,W],Z=new lC;let pe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=P[B];return Q===void 0&&(Q=new Ih,P[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=P[B];return Q===void 0&&(Q=new Ih,P[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=P[B];return Q===void 0&&(Q=new Ih,P[B]=Q),Q.getHandSpace()};function ee(B){const Q=N.indexOf(B.inputSource);if(Q===-1)return;const ne=P[Q];ne!==void 0&&(ne.update(B.inputSource,B.frame,p||u),ne.dispatchEvent({type:B.type,data:B.inputSource}))}function L(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",L),o.removeEventListener("inputsourceschange",V);for(let B=0;B<P.length;B++){const Q=N[B];Q!==null&&(N[B]=null,P[B].disconnect(Q))}pe=null,de=null,_.reset();for(const B in y)delete y[B];e.setRenderTarget(z),b=null,g=null,v=null,o=null,D=null,Se.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){c=B,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){h=B,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(B){p=B},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(B){if(o=B,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",L),o.addEventListener("inputsourceschange",V),U.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(H),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Re=null,Qe=null;U.depth&&(Qe=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=U.stencil?rs:Fa,Re=U.stencil?Ul:sa);const Be={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Be),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new ra(g.textureWidth,g.textureHeight,{format:Vi,type:Di,depthTexture:new _o(g.textureWidth,g.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ne={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,ne),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new ra(b.framebufferWidth,b.framebufferHeight,{format:Vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Se.setContext(o),Se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(B){for(let Q=0;Q<B.removed.length;Q++){const ne=B.removed[Q],Re=N.indexOf(ne);Re>=0&&(N[Re]=null,P[Re].disconnect(ne))}for(let Q=0;Q<B.added.length;Q++){const ne=B.added[Q];let Re=N.indexOf(ne);if(Re===-1){for(let Be=0;Be<P.length;Be++)if(Be>=N.length){N.push(ne),Re=Be;break}else if(N[Be]===null){N[Be]=ne,Re=Be;break}if(Re===-1)break}const Qe=P[Re];Qe&&Qe.connect(ne)}}const te=new se,ge=new se;function Me(B,Q,ne){te.setFromMatrixPosition(Q.matrixWorld),ge.setFromMatrixPosition(ne.matrixWorld);const Re=te.distanceTo(ge),Qe=Q.projectionMatrix.elements,Be=ne.projectionMatrix.elements,yt=Qe[14]/(Qe[10]-1),ft=Qe[14]/(Qe[10]+1),ht=(Qe[9]+1)/Qe[5],dt=(Qe[9]-1)/Qe[5],Je=(Qe[8]-1)/Qe[0],Et=(Be[8]+1)/Be[0],Ht=yt*Je,Oe=yt*Et,lt=Re/(-Je+Et),Lt=lt*-Je;if(Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Lt),B.translateZ(lt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Qe[10]===-1)B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const $t=yt+lt,K=ft+lt,Yt=Ht-Lt,It=Oe+(Re-Lt),I=ht*ft/K*$t,M=dt*ft/K*$t;B.projectionMatrix.makePerspective(Yt,It,I,M,$t,K),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function O(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(o===null)return;let Q=B.near,ne=B.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),Z.near=W.near=F.near=Q,Z.far=W.far=F.far=ne,(pe!==Z.near||de!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),pe=Z.near,de=Z.far),Z.layers.mask=B.layers.mask|6,F.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;const Re=B.parent,Qe=Z.cameras;O(Z,Re);for(let Be=0;Be<Qe.length;Be++)O(Qe[Be],Re);Qe.length===2?Me(Z,F,W):Z.projectionMatrix.copy(F.projectionMatrix),q(B,Z,Re)};function q(B,Q,ne){ne===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(ne.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=hm*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(B){m=B,g!==null&&(g.fixedFoveation=B),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Z)},this.getCameraTexture=function(B){return y[B]};let ie=null;function Ee(B,Q){if(x=Q.getViewerPose(p||u),T=Q,x!==null){const ne=x.views;b!==null&&(e.setRenderTargetFramebuffer(D,b.framebuffer),e.setRenderTarget(D));let Re=!1;ne.length!==Z.cameras.length&&(Z.cameras.length=0,Re=!0);for(let ft=0;ft<ne.length;ft++){const ht=ne[ft];let dt=null;if(b!==null)dt=b.getViewport(ht);else{const Et=v.getViewSubImage(g,ht);dt=Et.viewport,ft===0&&(e.setRenderTargetTextures(D,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(D))}let Je=k[ft];Je===void 0&&(Je=new wi,Je.layers.enable(ft),Je.viewport=new fn,k[ft]=Je),Je.matrix.fromArray(ht.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(ht.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(dt.x,dt.y,dt.width,dt.height),ft===0&&(Z.matrix.copy(Je.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Re===!0&&Z.cameras.push(Je)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const ft=v.getDepthInformation(ne[0]);ft&&ft.isValid&&ft.texture&&_.init(ft,o.renderState)}if(Qe&&Qe.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<ne.length;ft++){const ht=ne[ft].camera;if(ht){let dt=y[ht];dt||(dt=new gb,y[ht]=dt);const Je=v.getCameraImage(ht);dt.sourceTexture=Je}}}}for(let ne=0;ne<P.length;ne++){const Re=N[ne],Qe=P[ne];Re!==null&&Qe!==void 0&&Qe.update(Re,Q,p||u)}ie&&ie(B,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),T=null}const Se=new yb;Se.setAnimationLoop(Ee),this.setAnimationLoop=function(B){ie=B},this.dispose=function(){}}}const eU=new dn,Rb=new mt;Rb.set(-1,0,0,0,1,0,0,0,1);function tU(a,e){function n(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function r(_,y){y.color.getRGB(_.fogColor.value,vb(a)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,U,z,D){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(_,y):y.isMeshLambertMaterial?(c(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(_,y),v(_,y)):y.isMeshPhongMaterial?(c(_,y),x(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(_,y),g(_,y),y.isMeshPhysicalMaterial&&b(_,y,D)):y.isMeshMatcapMaterial?(c(_,y),T(_,y)):y.isMeshDepthMaterial?c(_,y):y.isMeshDistanceMaterial?(c(_,y),w(_,y)):y.isMeshNormalMaterial?c(_,y):y.isLineBasicMaterial?(u(_,y),y.isLineDashedMaterial&&h(_,y)):y.isPointsMaterial?m(_,y,U,z):y.isSpriteMaterial?p(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,n(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,n(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,n(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===ti&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,n(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===ti&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,n(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,n(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const U=e.get(y),z=U.envMap,D=U.envMapRotation;z&&(_.envMap.value=z,_.envMapRotation.value.setFromMatrix4(eU.makeRotationFromEuler(D)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Rb),_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,_.aoMapTransform))}function u(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,n(y.map,_.mapTransform))}function h(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function m(_,y,U,z){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*U,_.scale.value=z*.5,y.map&&(_.map.value=y.map,n(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,n(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function p(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,n(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,n(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function x(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function v(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function b(_,y,U){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=U.texture,_.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,y){y.matcap&&(_.matcap.value=y.matcap)}function w(_,y){const U=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(U.matrixWorld),_.nearDistance.value=U.shadow.camera.near,_.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nU(a,e,n,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const N=P.program;r.uniformBlockBinding(D,N)}function p(D,P){let N=o[D.id];N===void 0&&(_(D),N=x(D),o[D.id]=N,D.addEventListener("dispose",U));const H=P.program;r.updateUBOMapping(D,H);const A=e.render.frame;c[D.id]!==A&&(g(D),c[D.id]=A)}function x(D){const P=v();D.__bindingPointIndex=P;const N=a.createBuffer(),H=D.__size,A=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,H,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,P,N),N}function v(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const P=o[D.id],N=D.uniforms,H=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,P);for(let A=0,F=N.length;A<F;A++){const W=N[A];if(Array.isArray(W))for(let k=0,Z=W.length;k<Z;k++)b(W[k],A,k,H);else b(W,A,0,H)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(D,P,N,H){if(w(D,P,N,H)===!0){const A=D.__offset,F=D.value;if(Array.isArray(F)){let W=0;for(let k=0;k<F.length;k++){const Z=F[k],pe=y(Z);T(Z,D.__data,W),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(W+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(F,D.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,D.__data)}}function T(D,P,N){typeof D=="number"||typeof D=="boolean"?P[0]=D:D.isMatrix3?(P[0]=D.elements[0],P[1]=D.elements[1],P[2]=D.elements[2],P[3]=0,P[4]=D.elements[3],P[5]=D.elements[4],P[6]=D.elements[5],P[7]=0,P[8]=D.elements[6],P[9]=D.elements[7],P[10]=D.elements[8],P[11]=0):ArrayBuffer.isView(D)?P.set(new D.constructor(D.buffer,D.byteOffset,P.length)):D.toArray(P,N)}function w(D,P,N,H){const A=D.value,F=P+"_"+N;if(H[F]===void 0)return typeof A=="number"||typeof A=="boolean"?H[F]=A:ArrayBuffer.isView(A)?H[F]=A.slice():H[F]=A.clone(),!0;{const W=H[F];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return H[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(W.equals(A)===!1)return W.copy(A),!0}}return!1}function _(D){const P=D.uniforms;let N=0;const H=16;for(let F=0,W=P.length;F<W;F++){const k=Array.isArray(P[F])?P[F]:[P[F]];for(let Z=0,pe=k.length;Z<pe;Z++){const de=k[Z],ee=Array.isArray(de.value)?de.value:[de.value];for(let L=0,V=ee.length;L<V;L++){const te=ee[L],ge=y(te),Me=N%H,O=Me%ge.boundary,q=Me+O;N+=O,q!==0&&H-q<ge.storage&&(N+=H-q),de.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=N,N+=ge.storage}}}const A=N%H;return A>0&&(N+=H-A),D.__size=N,D.__cache={},this}function y(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(P.boundary=16,P.storage=D.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",D),P}function U(D){const P=D.target;P.removeEventListener("dispose",U);const N=u.indexOf(P.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function z(){for(const D in o)a.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:m,update:p,dispose:z}}const iU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function aU(){return $i===null&&($i=new WR(iU,16,16,us,za),$i.name="DFG_LUT",$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=La,$i.wrapT=La,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class rU{constructor(e={}){const{canvas:n=bR(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:b=Di}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const w=b,_=new Set([Fm,zm,Im]),y=new Set([Di,sa,Ll,Ul,Om,Pm]),U=new Uint32Array(4),z=new Int32Array(4),D=new se;let P=null,N=null;const H=[],A=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let k=!1,Z=null,pe=null,de=null,ee=null;this._outputColorSpace=Ci;let L=0,V=0,te=null,ge=-1,Me=null;const O=new fn,q=new fn;let ie=null;const Ee=new Rt(0);let Se=0,B=n.width,Q=n.height,ne=1,Re=null,Qe=null;const Be=new fn(0,0,B,Q),yt=new fn(0,0,B,Q);let ft=!1;const ht=new pb;let dt=!1,Je=!1;const Et=new dn,Ht=new se,Oe=new fn,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function $t(){return te===null?ne:1}let K=r;function Yt(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lm}`),n.addEventListener("webglcontextlost",rn,!1),n.addEventListener("webglcontextrestored",Gt,!1),n.addEventListener("webglcontextcreationerror",ii,!1),K===null){const Y="webgl2";if(K=Yt(Y,R),K===null)throw Yt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Nt("WebGLRenderer: "+R.message),R}let It,I,M,J,ce,ve,we,Pe,me,_e,Ne,ke,Fe,Ie,tt,nt,ut,j,De,ye,Ue,Ve,Ae;function Ze(){It=new aN(K),It.init(),Ue=new KL(K,It),I=new ZD(K,It,e,Ue),M=new qL(K,It),I.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),pe=K.createFramebuffer(),de=K.createFramebuffer(),ee=K.createFramebuffer(),J=new oN(K),ce=new UL,ve=new YL(K,It,M,ce,I,Ue,J),we=new iN(W),Pe=new fC(K),Ve=new YD(K,Pe),me=new rN(K,Pe,J,Ve),_e=new cN(K,me,Pe,Ve,J),j=new lN(K,I,ve),tt=new QD(ce),Ne=new LL(W,we,It,I,Ve,tt),ke=new tU(W,ce),Fe=new PL,Ie=new GL(It),ut=new qD(W,we,M,_e,T,m),nt=new jL(W,_e,I),Ae=new nU(K,J,I,M),De=new KD(K,It,J),ye=new sN(K,It,J),J.programs=Ne.programs,W.capabilities=I,W.extensions=It,W.properties=ce,W.renderLists=Fe,W.shadowMap=nt,W.state=M,W.info=J}Ze(),w!==Di&&(F=new fN(w,n.width,n.height,h,o,c));const je=new JL(W,K);this.xr=je,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=It.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=It.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(B,Q,!1))},this.getSize=function(R){return R.set(B,Q)},this.setSize=function(R,Y,ue=!0){if(je.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Q=Y,n.width=Math.floor(R*ne),n.height=Math.floor(Y*ne),ue===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(B*ne,Q*ne).floor()},this.setDrawingBufferSize=function(R,Y,ue){B=R,Q=Y,ne=ue,n.width=Math.floor(R*ue),n.height=Math.floor(Y*ue),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===Di){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Be)},this.setViewport=function(R,Y,ue,oe){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,Y,ue,oe),M.viewport(O.copy(Be).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Y,ue,oe){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,ue,oe),M.scissor(q.copy(yt).multiplyScalar(ne).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){M.setScissorTest(ft=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){Qe=R},this.getClearColor=function(R){return R.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ue=!0){let oe=0;if(R){let le=!1;if(te!==null){const He=te.texture.format;le=_.has(He)}if(le){const He=te.texture.type,We=y.has(He),ze=ut.getClearColor(),Ye=ut.getClearAlpha(),qe=ze.r,it=ze.g,gt=ze.b;We?(U[0]=qe,U[1]=it,U[2]=gt,U[3]=Ye,K.clearBufferuiv(K.COLOR,0,U)):(z[0]=qe,z[1]=it,z[2]=gt,z[3]=Ye,K.clearBufferiv(K.COLOR,0,z))}else oe|=K.COLOR_BUFFER_BIT}Y&&(oe|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(oe|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&K.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Z=R},this.dispose=function(){n.removeEventListener("webglcontextlost",rn,!1),n.removeEventListener("webglcontextrestored",Gt,!1),n.removeEventListener("webglcontextcreationerror",ii,!1),ut.dispose(),Fe.dispose(),Ie.dispose(),ce.dispose(),we.dispose(),_e.dispose(),Ve.dispose(),Ae.dispose(),Ne.dispose(),je.dispose(),je.removeEventListener("sessionstart",mn),je.removeEventListener("sessionend",Dn),qn.stop()};function rn(R){R.preventDefault(),Dx("WebGLRenderer: Context Lost."),k=!0}function Gt(){Dx("WebGLRenderer: Context Restored."),k=!1;const R=J.autoReset,Y=nt.enabled,ue=nt.autoUpdate,oe=nt.needsUpdate,le=nt.type;Ze(),J.autoReset=R,nt.enabled=Y,nt.autoUpdate=ue,nt.needsUpdate=oe,nt.type=le}function ii(R){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const Y=R.target;Y.removeEventListener("dispose",ai),Eo(Y)}function Eo(R){To(R),ce.remove(R)}function To(R){const Y=ce.get(R).programs;Y!==void 0&&(Y.forEach(function(ue){Ne.releaseProgram(ue)}),R.isShaderMaterial&&Ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ue,oe,le,He){Y===null&&(Y=lt);const We=le.isMesh&&le.matrixWorld.determinantAffine()<0,ze=ka(R,Y,ue,oe,le);M.setMaterial(oe,We);let Ye=ue.index,qe=1;if(oe.wireframe===!0){if(Ye=me.getWireframeAttribute(ue),Ye===void 0)return;qe=2}const it=ue.drawRange,gt=ue.attributes.position;let et=it.start*qe,Ut=(it.start+it.count)*qe;He!==null&&(et=Math.max(et,He.start*qe),Ut=Math.min(Ut,(He.start+He.count)*qe)),Ye!==null?(et=Math.max(et,0),Ut=Math.min(Ut,Ye.count)):gt!=null&&(et=Math.max(et,0),Ut=Math.min(Ut,gt.count));const sn=Ut-et;if(sn<0||sn===1/0)return;Ve.setup(le,oe,ze,ue,Ye);let Jt,Vt=De;if(Ye!==null&&(Jt=Pe.get(Ye),Vt=ye,Vt.setIndex(Jt)),le.isMesh)oe.wireframe===!0?(M.setLineWidth(oe.wireframeLinewidth*$t()),Vt.setMode(K.LINES)):Vt.setMode(K.TRIANGLES);else if(le.isLine){let kt=oe.linewidth;kt===void 0&&(kt=1),M.setLineWidth(kt*$t()),le.isLineSegments?Vt.setMode(K.LINES):le.isLineLoop?Vt.setMode(K.LINE_LOOP):Vt.setMode(K.LINE_STRIP)}else le.isPoints?Vt.setMode(K.POINTS):le.isSprite&&Vt.setMode(K.TRIANGLES);if(le.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Vt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const kt=le._multiDrawStarts,Xe=le._multiDrawCounts,Fn=le._multiDrawCount,St=Ye?Pe.get(Ye).bytesPerElement:1,Mn=ce.get(oe).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)Mn.setValue(K,"_gl_DrawID",ri),Vt.render(kt[ri]/St,Xe[ri])}else if(le.isInstancedMesh)Vt.renderInstances(et,sn,le.count);else if(ue.isInstancedBufferGeometry){const kt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Xe=Math.min(ue.instanceCount,kt);Vt.renderInstances(et,sn,Xe)}else Vt.render(et,sn)};function Ao(R,Y,ue){R.transparent===!0&&R.side===Na&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,Va(R,Y,ue),R.side=Tr,R.needsUpdate=!0,Va(R,Y,ue),R.side=Na):Va(R,Y,ue)}this.compile=function(R,Y,ue=null){ue===null&&(ue=R),N=Ie.get(ue),N.init(Y),A.push(N),ue.traverseVisible(function(le){le.isLight&&le.layers.test(Y.layers)&&(N.pushLight(le),le.castShadow&&N.pushShadow(le))}),R!==ue&&R.traverseVisible(function(le){le.isLight&&le.layers.test(Y.layers)&&(N.pushLight(le),le.castShadow&&N.pushShadow(le))}),N.setupLights();const oe=new Set;return R.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const He=le.material;if(He)if(Array.isArray(He))for(let We=0;We<He.length;We++){const ze=He[We];Ao(ze,ue,le),oe.add(ze)}else Ao(He,ue,le),oe.add(He)}),N=A.pop(),oe},this.compileAsync=function(R,Y,ue=null){const oe=this.compile(R,Y,ue);return new Promise(le=>{function He(){if(oe.forEach(function(We){ce.get(We).currentProgram.isReady()&&oe.delete(We)}),oe.size===0){le(R);return}setTimeout(He,10)}It.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let hs=null;function Wi(R){hs&&hs(R)}function mn(){qn.stop()}function Dn(){qn.start()}const qn=new yb;qn.setAnimationLoop(Wi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(R){hs=R,je.setAnimationLoop(R),R===null?qn.stop():qn.start()},je.addEventListener("sessionstart",mn),je.addEventListener("sessionend",Dn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Z!==null&&Z.renderStart(R,Y);const ue=je.enabled===!0&&je.isPresenting===!0,oe=F!==null&&(te===null||ue)&&F.begin(W,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(Y),Y=je.getCamera()),R.isScene===!0&&R.onBeforeRender(W,R,Y,te),N=Ie.get(R,A.length),N.init(Y),N.state.textureUnits=ve.getTextureUnits(),A.push(N),Et.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ht.setFromProjectionMatrix(Et,ia,Y.reversedDepth),Je=this.localClippingEnabled,dt=tt.init(this.clippingPlanes,Je),P=Fe.get(R,H.length),P.init(),H.push(P),je.enabled===!0&&je.isPresenting===!0){const We=W.xr.getDepthSensingMesh();We!==null&&Ar(We,Y,-1/0,W.sortObjects)}Ar(R,Y,0,W.sortObjects),P.finish(),W.sortObjects===!0&&P.sort(Re,Qe,Y.reversedDepth),Lt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Lt&&ut.addToRenderList(P,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&tt.beginShadows();const le=N.state.shadowsArray;if(nt.render(le,R,Y),dt===!0&&tt.endShadows(),(oe&&F.hasRenderPass())===!1){const We=P.opaque,ze=P.transmissive;if(N.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(ze.length>0)for(let qe=0,it=Ye.length;qe<it;qe++){const gt=Ye[qe];Vl(We,ze,R,gt)}Lt&&ut.render(R);for(let qe=0,it=Ye.length;qe<it;qe++){const gt=Ye[qe];Gl(P,R,gt,gt.viewport)}}else ze.length>0&&Vl(We,ze,R,Y),Lt&&ut.render(R),Gl(P,R,Y)}te!==null&&V===0&&(ve.updateMultisampleRenderTarget(te),ve.updateRenderTargetMipmap(te)),oe&&F.end(W),R.isScene===!0&&R.onAfterRender(W,R,Y),Ve.resetDefaultState(),ge=-1,Me=null,A.pop(),A.length>0?(N=A[A.length-1],ve.setTextureUnits(N.state.textureUnits),dt===!0&&tt.setGlobalState(W.clippingPlanes,N.state.camera)):N=null,H.pop(),H.length>0?P=H[H.length-1]:P=null,Z!==null&&Z.renderEnd()};function Ar(R,Y,ue,oe){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){oe&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const We=_e.update(R),ze=R.material;ze.visible&&P.push(R,We,ze,ue,Oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const We=_e.update(R),ze=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Oe.copy(We.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(ze)){const Ye=We.groups;for(let qe=0,it=Ye.length;qe<it;qe++){const gt=Ye[qe],et=ze[gt.materialIndex];et&&et.visible&&P.push(R,We,et,ue,Oe.z,gt)}}else ze.visible&&P.push(R,We,ze,ue,Oe.z,null)}}const He=R.children;for(let We=0,ze=He.length;We<ze;We++)Ar(He[We],Y,ue,oe)}function Gl(R,Y,ue,oe){const{opaque:le,transmissive:He,transparent:We}=R;N.setupLightsView(ue),dt===!0&&tt.setGlobalState(W.clippingPlanes,ue),oe&&M.viewport(O.copy(oe)),le.length>0&&Rr(le,Y,ue),He.length>0&&Rr(He,Y,ue),We.length>0&&Rr(We,Y,ue),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Vl(R,Y,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[oe.id]===void 0){const et=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[oe.id]=new ra(1,1,{generateMipmaps:!0,type:et?za:Di,minFilter:as,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const He=N.state.transmissionRenderTarget[oe.id],We=oe.viewport||O;He.setSize(We.z*W.transmissionResolutionScale,We.w*W.transmissionResolutionScale);const ze=W.getRenderTarget(),Ye=W.getActiveCubeFace(),qe=W.getActiveMipmapLevel();W.setRenderTarget(He),W.getClearColor(Ee),Se=W.getClearAlpha(),Se<1&&W.setClearColor(16777215,.5),W.clear(),Lt&&ut.render(ue);const it=W.toneMapping;W.toneMapping=aa;const gt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),N.setupLightsView(oe),dt===!0&&tt.setGlobalState(W.clippingPlanes,oe),Rr(R,ue,oe),ve.updateMultisampleRenderTarget(He),ve.updateRenderTargetMipmap(He),It.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ut=0,sn=Y.length;Ut<sn;Ut++){const Jt=Y[Ut],{object:Vt,geometry:kt,material:Xe,group:Fn}=Jt;if(Xe.side===Na&&Vt.layers.test(oe.layers)){const St=Xe.side;Xe.side=ti,Xe.needsUpdate=!0,Ga(Vt,ue,oe,kt,Xe,Fn),Xe.side=St,Xe.needsUpdate=!0,et=!0}}et===!0&&(ve.updateMultisampleRenderTarget(He),ve.updateRenderTargetMipmap(He))}W.setRenderTarget(ze,Ye,qe),W.setClearColor(Ee,Se),gt!==void 0&&(oe.viewport=gt),W.toneMapping=it}function Rr(R,Y,ue){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let le=0,He=R.length;le<He;le++){const We=R[le],{object:ze,geometry:Ye,group:qe}=We;let it=We.material;it.allowOverride===!0&&oe!==null&&(it=oe),ze.layers.test(ue.layers)&&Ga(ze,Y,ue,Ye,it,qe)}}function Ga(R,Y,ue,oe,le,He){R.onBeforeRender(W,Y,ue,oe,le,He),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),le.onBeforeRender(W,Y,ue,oe,R,He),le.transparent===!0&&le.side===Na&&le.forceSinglePass===!1?(le.side=ti,le.needsUpdate=!0,W.renderBufferDirect(ue,Y,oe,le,R,He),le.side=Tr,le.needsUpdate=!0,W.renderBufferDirect(ue,Y,oe,le,R,He),le.side=Na):W.renderBufferDirect(ue,Y,oe,le,R,He),R.onAfterRender(W,Y,ue,oe,le,He)}function Va(R,Y,ue){Y.isScene!==!0&&(Y=lt);const oe=ce.get(R),le=N.state.lights,He=N.state.shadowsArray,We=le.state.version,ze=Ne.getParameters(R,le.state,He,Y,ue,N.state.lightProbeGridArray),Ye=Ne.getProgramCacheKey(ze);let qe=oe.programs;oe.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,oe.fog=Y.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;oe.envMap=we.get(R.envMap||oe.environment,it),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",ai),qe=new Map,oe.programs=qe);let gt=qe.get(Ye);if(gt!==void 0){if(oe.currentProgram===gt&&oe.lightsStateVersion===We)return la(R,ze),gt}else ze.uniforms=Ne.getUniforms(R),Z!==null&&R.isNodeMaterial&&Z.build(R,ue,ze),R.onBeforeCompile(ze,W),gt=Ne.acquireProgram(ze,Ye),qe.set(Ye,gt),oe.uniforms=ze.uniforms;const et=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=tt.uniform),la(R,ze),oe.needsLights=kl(R),oe.lightsStateVersion=We,oe.needsLights&&(et.ambientLightColor.value=le.state.ambient,et.lightProbe.value=le.state.probe,et.directionalLights.value=le.state.directional,et.directionalLightShadows.value=le.state.directionalShadow,et.spotLights.value=le.state.spot,et.spotLightShadows.value=le.state.spotShadow,et.rectAreaLights.value=le.state.rectArea,et.ltc_1.value=le.state.rectAreaLTC1,et.ltc_2.value=le.state.rectAreaLTC2,et.pointLights.value=le.state.point,et.pointLightShadows.value=le.state.pointShadow,et.hemisphereLights.value=le.state.hemi,et.directionalShadowMatrix.value=le.state.directionalShadowMatrix,et.spotLightMatrix.value=le.state.spotLightMatrix,et.spotLightMap.value=le.state.spotLightMap,et.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=N.state.lightProbeGridArray.length>0,oe.currentProgram=gt,oe.uniformsList=null,gt}function oa(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Hu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function la(R,Y){const ue=ce.get(R);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function Cr(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;D.setFromMatrixPosition(Y.matrixWorld);for(let ue=0,oe=R.length;ue<oe;ue++){const le=R[ue];if(le.texture!==null&&le.boundingBox.containsPoint(D))return le}return null}function ka(R,Y,ue,oe,le){Y.isScene!==!0&&(Y=lt),ve.resetTextureUnits();const He=Y.fog,We=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Y.environment:null,ze=te===null?W.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:wt.workingColorSpace,Ye=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,qe=we.get(oe.envMap||We,Ye),it=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,gt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!ue.morphAttributes.position,Ut=!!ue.morphAttributes.normal,sn=!!ue.morphAttributes.color;let Jt=aa;oe.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Jt=W.toneMapping);const Vt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,Xe=ce.get(oe),Fn=N.state.lights;if(dt===!0&&(Je===!0||R!==Me)){const Bt=R===Me&&oe.id===ge;tt.setState(oe,R,Bt)}let St=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Fn.state.version||Xe.outputColorSpace!==ze||le.isBatchedMesh&&Xe.batching===!1||!le.isBatchedMesh&&Xe.batching===!0||le.isBatchedMesh&&Xe.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Xe.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Xe.instancing===!1||!le.isInstancedMesh&&Xe.instancing===!0||le.isSkinnedMesh&&Xe.skinning===!1||!le.isSkinnedMesh&&Xe.skinning===!0||le.isInstancedMesh&&Xe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Xe.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Xe.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Xe.instancingMorph===!1&&le.morphTexture!==null||Xe.envMap!==qe||oe.fog===!0&&Xe.fog!==He||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==tt.numPlanes||Xe.numIntersection!==tt.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==gt||Xe.morphTargets!==et||Xe.morphNormals!==Ut||Xe.morphColors!==sn||Xe.toneMapping!==Jt||Xe.morphTargetsCount!==kt||!!Xe.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Xe.__version=oe.version);let Mn=Xe.currentProgram;St===!0&&(Mn=Va(oe,Y,le),Z&&oe.isNodeMaterial&&Z.onUpdateProgram(oe,Mn,Xe));let ri=!1,Ni=!1,si=!1;const Xt=Mn.getUniforms(),on=Xe.uniforms;if(M.useProgram(Mn.program)&&(ri=!0,Ni=!0,si=!0),oe.id!==ge&&(ge=oe.id,Ni=!0),Xe.needsLights){const Bt=Cr(N.state.lightProbeGridArray,le);Xe.lightProbeGrid!==Bt&&(Xe.lightProbeGrid=Bt,Ni=!0)}if(ri||Me!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xt.setValue(K,"projectionMatrix",R.projectionMatrix),Xt.setValue(K,"viewMatrix",R.matrixWorldInverse);const ji=Xt.map.cameraPosition;ji!==void 0&&ji.setValue(K,Ht.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Xt.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Xt.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),Me!==R&&(Me=R,Ni=!0,si=!0)}if(Xe.needsLights&&(Fn.state.directionalShadowMap.length>0&&Xt.setValue(K,"directionalShadowMap",Fn.state.directionalShadowMap,ve),Fn.state.spotShadowMap.length>0&&Xt.setValue(K,"spotShadowMap",Fn.state.spotShadowMap,ve),Fn.state.pointShadowMap.length>0&&Xt.setValue(K,"pointShadowMap",Fn.state.pointShadowMap,ve)),le.isSkinnedMesh){Xt.setOptional(K,le,"bindMatrix"),Xt.setOptional(K,le,"bindMatrixInverse");const Bt=le.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Xt.setValue(K,"boneTexture",Bt.boneTexture,ve))}le.isBatchedMesh&&(Xt.setOptional(K,le,"batchingTexture"),Xt.setValue(K,"batchingTexture",le._matricesTexture,ve),Xt.setOptional(K,le,"batchingIdTexture"),Xt.setValue(K,"batchingIdTexture",le._indirectTexture,ve),Xt.setOptional(K,le,"batchingColorTexture"),le._colorsTexture!==null&&Xt.setValue(K,"batchingColorTexture",le._colorsTexture,ve));const Li=ue.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&j.update(le,ue,Mn),(Ni||Xe.receiveShadow!==le.receiveShadow)&&(Xe.receiveShadow=le.receiveShadow,Xt.setValue(K,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Y.environment!==null&&(on.envMapIntensity.value=Y.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=aU()),Ni){if(Xt.setValue(K,"toneMappingExposure",W.toneMappingExposure),Xe.needsLights&&gn(on,si),He&&oe.fog===!0&&ke.refreshFogUniforms(on,He),ke.refreshMaterialUniforms(on,oe,ne,Q,N.state.transmissionRenderTarget[R.id]),Xe.needsLights&&Xe.lightProbeGrid){const Bt=Xe.lightProbeGrid;on.probesSH.value=Bt.texture,on.probesMin.value.copy(Bt.boundingBox.min),on.probesMax.value.copy(Bt.boundingBox.max),on.probesResolution.value.copy(Bt.resolution)}Hu.upload(K,oa(Xe),on,ve)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Hu.upload(K,oa(Xe),on,ve),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Xt.setValue(K,"center",le.center),Xt.setValue(K,"modelViewMatrix",le.modelViewMatrix),Xt.setValue(K,"normalMatrix",le.normalMatrix),Xt.setValue(K,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Bt=oe.uniformsGroups;for(let ji=0,Xa=Bt.length;ji<Xa;ji++){const wr=Bt[ji];Ae.update(wr,Mn),Ae.bind(wr,Mn)}}return Mn}function gn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function kl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,Y,ue){const oe=ce.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ce.get(R.texture).__webglTexture=Y,ce.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ue=ce.get(R);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ue=0){te=R,L=Y,V=ue;let oe=null,le=!1,He=!1;if(R){const ze=ce.get(R);if(ze.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(K.FRAMEBUFFER,ze.__webglFramebuffer),O.copy(R.viewport),q.copy(R.scissor),ie=R.scissorTest,M.viewport(O),M.scissor(q),M.setScissorTest(ie),ge=-1;return}else if(ze.__webglFramebuffer===void 0)ve.setupRenderTarget(R);else if(ze.__hasExternalTextures)ve.rebindTextures(R,ce.get(R.texture).__webglTexture,ce.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(ze.__boundDepthTexture!==it){if(it!==null&&ce.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(He=!0);const qe=ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?oe=qe[Y][ue]:oe=qe[Y],le=!0):R.samples>0&&ve.useMultisampledRTT(R)===!1?oe=ce.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?oe=qe[ue]:oe=qe,O.copy(R.viewport),q.copy(R.scissor),ie=R.scissorTest}else O.copy(Be).multiplyScalar(ne).floor(),q.copy(yt).multiplyScalar(ne).floor(),ie=ft;if(ue!==0&&(oe=pe),M.bindFramebuffer(K.FRAMEBUFFER,oe)&&M.drawBuffers(R,oe),M.viewport(O),M.scissor(q),M.setScissorTest(ie),le){const ze=ce.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,ue)}else if(He){const ze=Y;for(let Ye=0;Ye<R.textures.length;Ye++){const qe=ce.get(R.textures[Ye]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ye,qe.__webglTexture,ue,ze)}}else if(R!==null&&ue!==0){const ze=ce.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ze.__webglTexture,ue)}ge=-1},this.readRenderTargetPixels=function(R,Y,ue,oe,le,He,We,ze=0){if(!(R&&R.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){M.bindFramebuffer(K.FRAMEBUFFER,Ye);try{const qe=R.textures[ze],it=qe.format,gt=qe.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ze),!I.textureFormatReadable(it)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(gt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-oe&&ue>=0&&ue<=R.height-le&&K.readPixels(Y,ue,oe,le,Ue.convert(it),Ue.convert(gt),He)}finally{const qe=te!==null?ce.get(te).__webglFramebuffer:null;M.bindFramebuffer(K.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ue,oe,le,He,We,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye)if(Y>=0&&Y<=R.width-oe&&ue>=0&&ue<=R.height-le){M.bindFramebuffer(K.FRAMEBUFFER,Ye);const qe=R.textures[ze],it=qe.format,gt=qe.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ze),!I.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,et),K.bufferData(K.PIXEL_PACK_BUFFER,He.byteLength,K.STREAM_READ),K.readPixels(Y,ue,oe,le,Ue.convert(it),Ue.convert(gt),0);const Ut=te!==null?ce.get(te).__webglFramebuffer:null;M.bindFramebuffer(K.FRAMEBUFFER,Ut);const sn=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await MR(K,sn,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,et),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,He),K.deleteBuffer(et),K.deleteSync(sn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ue=0){const oe=Math.pow(2,-ue),le=Math.floor(R.image.width*oe),He=Math.floor(R.image.height*oe),We=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;ve.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,ue,0,0,We,ze,le,He),M.unbindTexture()},this.copyTextureToTexture=function(R,Y,ue=null,oe=null,le=0,He=0){let We,ze,Ye,qe,it,gt,et,Ut,sn;const Jt=R.isCompressedTexture?R.mipmaps[He]:R.image;if(ue!==null)We=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,Ye=ue.isBox3?ue.max.z-ue.min.z:1,qe=ue.min.x,it=ue.min.y,gt=ue.isBox3?ue.min.z:0;else{const on=Math.pow(2,-le);We=Math.floor(Jt.width*on),ze=Math.floor(Jt.height*on),R.isDataArrayTexture?Ye=Jt.depth:R.isData3DTexture?Ye=Math.floor(Jt.depth*on):Ye=1,qe=0,it=0,gt=0}oe!==null?(et=oe.x,Ut=oe.y,sn=oe.z):(et=0,Ut=0,sn=0);const Vt=Ue.convert(Y.format),kt=Ue.convert(Y.type);let Xe;Y.isData3DTexture?(ve.setTexture3D(Y,0),Xe=K.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ve.setTexture2DArray(Y,0),Xe=K.TEXTURE_2D_ARRAY):(ve.setTexture2D(Y,0),Xe=K.TEXTURE_2D),M.activeTexture(K.TEXTURE0),M.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const Fn=M.getParameter(K.UNPACK_ROW_LENGTH),St=M.getParameter(K.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(K.UNPACK_SKIP_PIXELS),ri=M.getParameter(K.UNPACK_SKIP_ROWS),Ni=M.getParameter(K.UNPACK_SKIP_IMAGES);M.pixelStorei(K.UNPACK_ROW_LENGTH,Jt.width),M.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Jt.height),M.pixelStorei(K.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(K.UNPACK_SKIP_ROWS,it),M.pixelStorei(K.UNPACK_SKIP_IMAGES,gt);const si=R.isDataArrayTexture||R.isData3DTexture,Xt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const on=ce.get(R),Li=ce.get(Y),Bt=ce.get(on.__renderTarget),ji=ce.get(Li.__renderTarget);M.bindFramebuffer(K.READ_FRAMEBUFFER,Bt.__webglFramebuffer),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Xa=0;Xa<Ye;Xa++)si&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ce.get(R).__webglTexture,le,gt+Xa),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ce.get(Y).__webglTexture,He,sn+Xa)),K.blitFramebuffer(qe,it,We,ze,et,Ut,We,ze,K.DEPTH_BUFFER_BIT,K.NEAREST);M.bindFramebuffer(K.READ_FRAMEBUFFER,null),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(le!==0||R.isRenderTargetTexture||ce.has(R)){const on=ce.get(R),Li=ce.get(Y);M.bindFramebuffer(K.READ_FRAMEBUFFER,de),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,ee);for(let Bt=0;Bt<Ye;Bt++)si?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,on.__webglTexture,le,gt+Bt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,on.__webglTexture,le),Xt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Li.__webglTexture,He,sn+Bt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Li.__webglTexture,He),le!==0?K.blitFramebuffer(qe,it,We,ze,et,Ut,We,ze,K.COLOR_BUFFER_BIT,K.NEAREST):Xt?K.copyTexSubImage3D(Xe,He,et,Ut,sn+Bt,qe,it,We,ze):K.copyTexSubImage2D(Xe,He,et,Ut,qe,it,We,ze);M.bindFramebuffer(K.READ_FRAMEBUFFER,null),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Xt?R.isDataTexture||R.isData3DTexture?K.texSubImage3D(Xe,He,et,Ut,sn,We,ze,Ye,Vt,kt,Jt.data):Y.isCompressedArrayTexture?K.compressedTexSubImage3D(Xe,He,et,Ut,sn,We,ze,Ye,Vt,Jt.data):K.texSubImage3D(Xe,He,et,Ut,sn,We,ze,Ye,Vt,kt,Jt):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,He,et,Ut,We,ze,Vt,kt,Jt.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,He,et,Ut,Jt.width,Jt.height,Vt,Jt.data):K.texSubImage2D(K.TEXTURE_2D,He,et,Ut,We,ze,Vt,kt,Jt);M.pixelStorei(K.UNPACK_ROW_LENGTH,Fn),M.pixelStorei(K.UNPACK_IMAGE_HEIGHT,St),M.pixelStorei(K.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(K.UNPACK_SKIP_ROWS,ri),M.pixelStorei(K.UNPACK_SKIP_IMAGES,Ni),He===0&&Y.generateMipmaps&&K.generateMipmap(Xe),M.unbindTexture()},this.initRenderTarget=function(R){ce.get(R).__webglFramebuffer===void 0&&ve.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ve.setTextureCube(R,0):R.isData3DTexture?ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ve.setTexture2DArray(R,0):ve.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){L=0,V=0,te=null,M.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const sU=new Rt(12764882),oU=new Rt(13159638),co=4500,es=91,lU=42,cU=new Rt(15253624),uU=`
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
`,fU=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,dU=`
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
`,hU=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,pU=`
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
`,mU=`
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
`;function gU(){const a=new Float32Array(co*3),e=new Float32Array(co),n=new Float32Array(co);for(let r=0;r<co;r++){const o=24+Math.random()*36,c=Math.random()*Math.PI*2,u=(Math.random()-.5)*1.1;a[r*3]=o*Math.cos(c)*Math.cos(u),a[r*3+1]=o*Math.sin(u)*2.2,a[r*3+2]=o*Math.sin(c)*Math.cos(u)-18,e[r]=Math.random(),n[r]=.7+Math.random()*1.6}return{positions:a,phases:e,sizes:n}}function vU(){let a=1597463007;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}function _U(a,e,n){const r=(a.x-e.x)*n,o=a.y-e.y;return r*r+o*o}function xU(a){const e=vU(),n=[],r=48,o=.025;for(let c=0;c<es;c++){let u=null,h=-1;for(let m=0;m<r;m++){const p={x:o+e()*(1-o*2),y:o+e()*(1-o*2)};let x=Number.POSITIVE_INFINITY;for(const v of n){const g=_U(p,v,a);x=Math.min(x,g)}x>h&&(u=p,h=x)}u&&n.push(u)}return n}function Cb(a,e){const n=xU(e);for(let r=0;r<n.length;r++){const o=n[r];a[r*3]=-.96+o.x*1.92,a[r*3+1]=-.9+o.y*1.8,a[r*3+2]=0}}function yU(a){const e=new Float32Array(es),n=new Float32Array(es*3),r=new Float32Array(es),o=new Float32Array(es);for(let c=0;c<es;c++){const u=c<lU;e[c]=u?1:0,r[c]=c/es,o[c]=u?32+c*29%7:12+c*17%4}return Cb(n,a),{flares:e,positions:n,phases:r,sizes:o}}function SU(a,e,n={}){const{transparent:r=!1,threadAlpha:o}=n;let c;try{c=new rU({alpha:!0,antialias:!1,canvas:a,powerPreference:"high-performance"})}catch{return()=>{}}c.setPixelRatio(1);const u=new BR;u.background=r?null:new Rt(328968);const h=new wi(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:x}=gU(),v=new ni;v.setAttribute("position",new bn(m,3)),v.setAttribute("phase",new bn(p,1)),v.setAttribute("size",new bn(x,1));const g=new gi({vertexShader:uU,fragmentShader:fU,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:sU}},transparent:!0,depthWrite:!1}),b=new Zx(v,g);u.add(b);const T=a.clientWidth||window.innerWidth,w=a.clientHeight||window.innerHeight,_=yU(T/w),y=_.positions,U=new ni;U.setAttribute("position",new bn(y,3)),U.setAttribute("flare",new bn(_.flares,1)),U.setAttribute("phase",new bn(_.phases,1)),U.setAttribute("size",new bn(_.sizes,1));const z=new gi({vertexShader:pU,fragmentShader:mU,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:cU}},transparent:!0,depthTest:!1,depthWrite:!1}),D=new Zx(U,z);u.add(D);const P=3400,N=new ni,H=new Float32Array(P*6),A=new Float32Array(P*2),F=new Float32Array(P*2);N.setAttribute("position",new bn(H,3)),N.setAttribute("lineUV",new bn(A,1)),N.setAttribute("segPhase",new bn(F,1)),N.setDrawRange(0,0);const W=new gi({vertexShader:dU,fragmentShader:hU,uniforms:{uTime:{value:0},uColor:{value:oU},uAlpha:{value:o??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),k=new QR(N,W);u.add(k);const Z=e==="alive"?4.8:5.2,pe=new Map;function de(Q,ne,Re){const Qe=Math.floor(Q/Z),Be=Math.floor(ne/Z),yt=Math.floor(Re/Z);return`${Qe}:${Be}:${yt}`}for(let Q=0;Q<co;Q++){const ne=m[Q*3],Re=m[Q*3+1],Qe=m[Q*3+2],Be=de(ne,Re,Qe),yt=pe.get(Be)??[];yt.push(Q),pe.set(Be,yt)}function ee(Q){const ne=m[Q*3],Re=m[Q*3+1],Qe=m[Q*3+2],Be=Math.floor(ne/Z),yt=Math.floor(Re/Z),ft=Math.floor(Qe/Z),ht=[];for(let dt=-1;dt<=1;dt++)for(let Je=-1;Je<=1;Je++)for(let Et=-1;Et<=1;Et++){const Ht=`${Be+dt}:${yt+Je}:${ft+Et}`;ht.push(...pe.get(Ht)??[])}return ht}const L=()=>{const Q=new Set,ne=[],Re=[],Qe=[];for(let Be=0;Be<co&&ne.length<P*6;Be++){const yt=m[Be*3],ft=m[Be*3+1],ht=m[Be*3+2],dt=[];for(const Je of ee(Be)){if(Je===Be)continue;const Et=m[Je*3]-yt,Ht=m[Je*3+1]-ft,Oe=m[Je*3+2]-ht,lt=Et*Et+Ht*Ht+Oe*Oe;lt<Z*Z&&dt.push([Je,lt])}dt.sort((Je,Et)=>Je[1]-Et[1]);for(const[Je]of dt.slice(0,5)){if(ne.length>=P*6)break;const Et=Be<Je?`${Be}-${Je}`:`${Je}-${Be}`;Q.has(Et)||(Q.add(Et),ne.push(yt,ft,ht,m[Je*3],m[Je*3+1],m[Je*3+2]),Re.push(0,1),Qe.push(Math.random(),Math.random()))}}H.set(ne),A.set(Re),F.set(Qe),N.getAttribute("position").needsUpdate=!0,N.getAttribute("lineUV").needsUpdate=!0,N.getAttribute("segPhase").needsUpdate=!0,N.setDrawRange(0,ne.length/3)},V=()=>{for(let Q=0;Q<N.drawRange.count;Q++)F[Q]=Math.random();N.getAttribute("segPhase").needsUpdate=!0};L();const te=new cC;let ge=0,Me=0,O=0,q=T/w;const ie=()=>{const Q=a.clientWidth||window.innerWidth,ne=a.clientHeight||window.innerHeight,Re=Q/ne;c.setSize(Q,ne,!1),h.aspect=Re,h.updateProjectionMatrix(),Math.abs(Re-q)/q>=.08&&(Cb(y,Re),U.getAttribute("position").needsUpdate=!0,q=Re)},Ee=()=>{window.cancelAnimationFrame(O),O=window.requestAnimationFrame(ie)};ie(),window.addEventListener("resize",Ee);let Se=0;const B=Q=>{if(document.hidden||a.dataset.paused==="true"){ge=requestAnimationFrame(B);return}const ne=te.getElapsedTime();ne-Se>=1/30&&(Se=ne,g.uniforms.uTime.value=ne,W.uniforms.uTime.value=ne,z.uniforms.uTime.value=ne,e==="alive"&&(Me+=1/30,Me>3.2&&(Me=0,V())),c.render(u,h)),ge=requestAnimationFrame(B)};return ge=requestAnimationFrame(B),()=>{cancelAnimationFrame(ge),cancelAnimationFrame(O),window.removeEventListener("resize",Ee),v.dispose(),N.dispose(),U.dispose(),g.dispose(),W.dispose(),z.dispose(),c.dispose()}}function bU({mode:a,paused:e=!1,transparent:n=!1,threadAlpha:r,className:o="spell-bg"}){const c=Le.useRef(null);return Le.useEffect(()=>{const u=c.current;u&&(u.dataset.paused=String(e))},[e]),Le.useEffect(()=>{const u=c.current;return u?SU(u,a,{transparent:n,threadAlpha:r}):void 0},[a,n,r]),E.jsx("canvas",{"aria-hidden":"true",className:o,ref:c})}function vm({className:a,compact:e=!1}){const n=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",a].filter(Boolean).join(" ");return E.jsx(zn,{"aria-hidden":"true",className:n,icon:H2})}const MU=["Today","Yesterday","Others"],Ay=[{description:"Today, yesterday, and older threads",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],EU=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function TU(a,e){if(e==="flat")return[{label:null,threads:a}];if(e==="date")return MU.map(r=>({label:r,threads:a.filter(o=>o.dateGroup===r)}));const n=new Map;for(const r of a){const o=r.volume==null?"Volume unknown":`Vol ${r.volume}`,c=n.get(o)??[];n.set(o,[...c,r])}return[...n.entries()].map(([r,o])=>({label:r,threads:o}))}function AU({activeThreadId:a,archivedOpen:e,collapsed:n,drawerOpen:r,hasApiKey:o=!0,onArchive:c,onClose:u,onCreate:h,onDelete:m,onOpen:p,onOpenKeySetup:x,onOpenSettings:v,onPin:g,onRename:b,onSelect:T,onSetArchivedOpen:w,readerStatus:_,threads:y}){const[U,z]=Le.useState(null),[D,P]=Le.useState(""),[N,H]=Le.useState(null),[A,F]=Le.useState("date"),[W,k]=Le.useState(!1),[Z,pe]=Le.useState(()=>new Set(["Yesterday","Others"])),[de,ee]=Le.useState(()=>window.matchMedia("(max-width: 767px)").matches),L=Le.useRef(null);Le.useEffect(()=>{const B=window.matchMedia("(max-width: 767px)");function Q(ne){ee(ne.matches)}return ee(B.matches),B.addEventListener("change",Q),()=>B.removeEventListener("change",Q)},[]),Le.useEffect(()=>{de&&r&&L.current?.focus()},[r,de]);const V=Le.useMemo(()=>y.filter(B=>B.archived===e).sort((B,Q)=>Number(Q.pinned)-Number(B.pinned)),[e,y]),te=TU(V,A),ge=y.filter(B=>B.archived).length,Me=de?r:!n;function O(B){z(B.id),P(B.title)}function q(B){const Q=D.trim();Q&&b(B,Q),z(null)}function ie(B){if(N===B){m(B),H(null);return}H(B),window.setTimeout(()=>{H(Q=>Q===B?null:Q)},3e3)}function Ee(B){pe(Q=>{const ne=new Set(Q);return ne.has(B)?ne.delete(B):ne.add(B),ne})}function Se(B){const Q=B.id===a;return E.jsxs("li",{className:`lab-thread-row ${Q?"active":""}`,"data-testid":`thread-${B.id}`,children:[E.jsxs("div",{className:"lab-thread-main",children:[U===B.id?E.jsx("span",{className:"lab-thread-copy",children:E.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>q(B.id),onChange:ne=>P(ne.target.value),onClick:ne=>ne.stopPropagation(),onKeyDown:ne=>{ne.key==="Enter"&&(ne.preventDefault(),q(B.id)),ne.key==="Escape"&&z(null)},value:D})}):E.jsx("button",{"aria-current":Q?"page":void 0,className:"lab-thread-select",onClick:()=>T(B.id),type:"button",children:E.jsx("span",{className:"lab-thread-copy",children:E.jsx("strong",{children:B.title})})}),N===B.id&&E.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),E.jsxs("div",{className:"lab-thread-actions",children:[E.jsx("button",{"aria-label":`${B.pinned?"Unpin":"Pin"} ${B.title}`,onClick:()=>g(B.id),type:"button",children:E.jsx(R3,{})}),E.jsx("button",{"aria-label":`Rename ${B.title}`,onClick:()=>O(B),type:"button",children:E.jsx(A3,{})}),E.jsx("button",{"aria-label":`${B.archived?"Restore":"Archive"} ${B.title}`,onClick:()=>c(B.id),type:"button",children:E.jsx(yx,{})}),E.jsx("button",{"aria-label":`Delete ${B.title}`,className:N===B.id?"confirming":"",onClick:()=>ie(B.id),type:"button",children:E.jsx(E3,{})})]})]},B.id)}return E.jsxs("aside",{"aria-hidden":!Me,"aria-label":de?"Threads":void 0,"aria-modal":de&&r?!0:void 0,className:"lab-rail",id:"spell-surface-rail",inert:!Me,role:de?"dialog":void 0,children:[E.jsxs("header",{className:"lab-brand",children:[E.jsx("span",{className:"lab-brand-mark",children:E.jsx(vm,{compact:!0})}),E.jsx("span",{children:E.jsx("strong",{children:"weaver"})}),E.jsx("button",{"aria-label":Me?"Close threads":"Open threads",className:"lab-rail-close",onClick:Me?u:p,ref:L,type:"button",children:Me?E.jsx(M3,{}):E.jsx(VS,{})})]}),E.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:h,type:"button",children:[E.jsx(x3,{}),E.jsx("span",{children:"New Weave"})]}),E.jsxs("div",{className:"lab-rail-scroll",children:[E.jsxs("section",{className:"lab-chat-section",children:[E.jsxs("header",{className:"lab-rail-section-head",children:[E.jsx("h2",{children:"Chats"}),E.jsxs("div",{className:"lab-grouping-picker",children:[E.jsxs("button",{"aria-expanded":W,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>k(B=>!B),type:"button",children:[Ay.find(B=>B.value===A)?.label,E.jsx(Tp,{})]}),W&&E.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[E.jsx("p",{children:"Organize threads"}),Ay.map(B=>E.jsxs("button",{"aria-checked":A===B.value,onClick:()=>{F(B.value),k(!1)},role:"menuitemradio",type:"button",children:[E.jsx("span",{"aria-hidden":"true",children:A===B.value?"✓":""}),E.jsx("strong",{children:B.label}),E.jsx("small",{children:B.description})]},B.value))]})]})]}),E.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[te.map(B=>{const Q=B.label,ne=Q?Z.has(Q):!1;return E.jsxs("section",{className:"lab-thread-group",children:[Q&&E.jsxs("button",{"aria-expanded":!ne,className:"lab-thread-group-toggle",onClick:()=>Ee(Q),type:"button",children:[E.jsx("span",{children:Q}),E.jsx("small",{children:B.threads.length}),E.jsx(Tp,{})]}),E.jsx("div",{"aria-hidden":ne,className:`lab-thread-group-body ${ne?"collapsed":""}`,children:E.jsx("div",{children:E.jsx("ul",{className:"lab-thread-flat-list",children:B.threads.map(Se)})})})]},Q??"all")}),V.length===0&&E.jsxs("div",{className:"lab-thread-empty",children:[E.jsx("span",{"aria-hidden":"true"}),E.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),E.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[E.jsxs("header",{className:"lab-rail-section-head",children:[E.jsx("h2",{children:"Library"}),E.jsx("small",{children:"novels"})]}),E.jsx("div",{className:"lab-novel-list",children:EU.map(B=>E.jsxs("button",{"aria-current":B.active?"page":void 0,"aria-disabled":!B.active,className:B.active?"active":"upcoming",type:"button",children:[E.jsx(b3,{}),E.jsxs("span",{children:[E.jsx("strong",{children:B.label}),E.jsx("small",{children:B.active?"current shelf":"upcoming"})]})]},B.label))})]})]}),E.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>w(!e),type:"button",children:[E.jsx(yx,{}),E.jsx("span",{children:"Archived"}),E.jsx("em",{children:ge})]}),E.jsxs("footer",{className:"lab-rail-footer",children:[E.jsxs("button",{"aria-label":o?"DeepSeek key · stored in this browser":"DeepSeek key · missing",className:`lab-key-status ${o?"stored":"missing"}`,onClick:o?v:x??v,type:"button",children:[E.jsx("span",{"aria-hidden":"true",className:"lab-key-status-dot"}),E.jsxs("span",{children:[E.jsx("strong",{children:"DeepSeek key"}),E.jsx("small",{children:o?"stored in this browser":"missing"})]})]}),E.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:v,type:"button",children:[E.jsx(kS,{}),E.jsxs("span",{children:[E.jsx("strong",{children:"Settings"}),E.jsxs("small",{children:[_," · runes · appearance"]})]})]})]})]})}const RU=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],CU=Array.from({length:20},(a,e)=>e);function wU(a){return{"--index":a}}function DU({announcement:a,eventKey:e,mode:n}){return E.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${n}`,children:[n==="particles"&&E.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:CU.map(r=>E.jsx("span",{style:wU(r)},r))}),n==="threads"&&E.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[E.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),E.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),E.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),E.jsx("p",{className:"rune-announcement",children:a})]},`${n}-${e}`)}const NU=Array.from({length:7},(a,e)=>e),LU=Array.from({length:8},(a,e)=>e),UU=Array.from({length:11},(a,e)=>e),$u={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function sp(a){return{"--index":a}}function wb({compact:a=!1,mode:e,state:n}){return E.jsxs("div",{"aria-label":`${$u[e]}, ${n}`,className:`lab-soul-sea soul-${e} soul-state-${n} ${a?"soul-compact":""}`,role:"img",children:[E.jsxs("div",{className:"lab-soul-sky",children:[E.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{})]}),E.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:NU.map(r=>E.jsx("span",{className:"lab-soul-sun",style:sp(r)},r))}),E.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:LU.map(r=>E.jsx("span",{className:"lab-memory-light",style:sp(r)},r))})]}),E.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:UU.map(r=>E.jsx("span",{className:"lab-shadow",style:sp(r)},r))}),E.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[E.jsx("span",{className:"water-plane water-plane-back"}),E.jsx("span",{className:"water-plane water-plane-middle"}),E.jsx("span",{className:"water-plane water-plane-front"}),E.jsx("span",{className:"water-flash"})]}),!a&&E.jsxs("p",{className:"lab-soul-caption",children:[E.jsx("span",{children:$u[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const op=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12}],OU={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},PU=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],IU=["still","living","mirror"],zU=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function FU({initial:a,onApiKeyChange:e,onClose:n,onSave:r}){const[o,c]=Le.useState(a),[u,h]=Le.useState(Nl),[m,p]=Le.useState("customize"),x=Le.useRef(null),v=Le.useRef(null);Le.useEffect(()=>{x.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function g(_){if(_.key!=="Tab"||!x.current)return;const y=x.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),U=y[0],z=y[y.length-1];_.shiftKey&&document.activeElement===U&&(_.preventDefault(),z?.focus()),!_.shiftKey&&document.activeElement===z&&(_.preventDefault(),U?.focus())}function b(_,y){c(U=>({...U,[_]:y}))}function T(){FS(u),e?.(Nl()!==""),r(o)}function w(_){const y=op.find(D=>D.number===_);if(!y)return;const U=op[_-2]?.end??0,z=Math.max(U+1,Math.min(o.chapter,y.end));c(D=>({...D,chapter:z,volume:_}))}return E.jsx("div",{className:"lab-settings-backdrop",onMouseDown:n,children:E.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:g,onMouseDown:_=>_.stopPropagation(),ref:x,role:"dialog",children:[E.jsxs("header",{className:"lab-settings-head",children:[E.jsxs("div",{children:[E.jsx("p",{children:"the sea within"}),E.jsx("h2",{children:"Soul Sea"})]}),E.jsx("button",{"aria-label":"Close settings",onClick:n,type:"button",children:"×"})]}),E.jsxs("div",{className:"lab-settings-layout",children:[E.jsxs("aside",{className:"lab-settings-nav",children:[E.jsx("p",{children:"Settings"}),E.jsx("nav",{"aria-label":"Settings sections",children:PU.map(_=>E.jsxs("button",{"aria-label":_.label,"aria-current":m===_.id?"page":void 0,className:m===_.id?"on":"",onClick:()=>p(_.id),type:"button",children:[E.jsx("strong",{children:_.label}),E.jsx("span",{children:_.hint})]},_.id))})]}),E.jsxs("div",{className:"lab-settings-main",children:[E.jsx(wb,{compact:!0,mode:o.soulMode,state:"idle"}),E.jsxs("div",{className:"lab-settings-content",children:[m==="reader"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Reader position"}),E.jsx("span",{children:"The Spell will not read beyond this point."})]}),E.jsxs("div",{className:"lab-reader-grid",children:[E.jsxs("label",{children:[E.jsx("span",{children:"Volume"}),E.jsx("select",{"aria-label":"Reader volume",onChange:_=>w(Number(_.target.value)),ref:v,value:o.volume,children:op.map(_=>E.jsxs("option",{value:_.number,children:["Vol ",_.number," · to ch ",_.end]},_.number))})]}),E.jsxs("label",{children:[E.jsx("span",{children:"Chapter"}),E.jsx("input",{max:3127,min:1,onChange:_=>b("chapter",Number(_.target.value)),type:"number",value:o.chapter})]})]})]}),m==="spoilers"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Spoilers"}),E.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),E.jsxs("div",{className:"lab-choice-grid two",children:[E.jsxs("button",{"aria-pressed":o.spoilerMode==="protect",className:o.spoilerMode==="protect"?"on":"",onClick:()=>b("spoilerMode","protect"),type:"button",children:[E.jsx("strong",{children:"Protect the story"}),E.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),E.jsxs("button",{"aria-pressed":o.spoilerMode==="none",className:o.spoilerMode==="none"?"on":"",onClick:()=>b("spoilerMode","none"),type:"button",children:[E.jsx("strong",{children:"No spoiler limits"}),E.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),m==="reading"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Reading tier"}),E.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),E.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(_=>E.jsxs("button",{"aria-pressed":o.tier===_,className:o.tier===_?"on":"",onClick:()=>b("tier",_),type:"button",children:[E.jsx("strong",{children:_}),E.jsx("span",{children:OU[_]})]},_))})]}),m==="customize"&&E.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Customize the Spell"}),E.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Surface theme"}),E.jsx("div",{className:"lab-theme-grid",children:zU.map(_=>E.jsxs("button",{"aria-label":_.label,"aria-pressed":o.theme===_.value,className:o.theme===_.value?"on":"",onClick:()=>b("theme",_.value),type:"button",children:[E.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:_.swatches.map(y=>E.jsx("i",{style:{background:y}},y))}),E.jsx("strong",{children:_.label}),E.jsx("span",{children:_.description})]},_.value))})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Rune appearance"}),E.jsx("div",{className:"lab-choice-grid three",children:RU.map(_=>E.jsxs("button",{"aria-label":_.label,"aria-pressed":o.runeMode===_.mode,className:o.runeMode===_.mode?"on":"",onClick:()=>b("runeMode",_.mode),type:"button",children:[E.jsx("strong",{children:_.label}),E.jsx("span",{children:_.description})]},_.mode))})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Soul Sea"}),E.jsx("div",{className:"lab-choice-grid three",children:IU.map(_=>E.jsxs("button",{"aria-label":$u[_],"aria-pressed":o.soulMode===_,className:o.soulMode===_?"on":"",onClick:()=>b("soulMode",_),type:"button",children:[E.jsx("strong",{children:$u[_]}),E.jsx("span",{children:_==="still"?"A calm horizon behind the conversation.":_==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},_))})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Message transparency"}),E.jsxs("div",{className:"lab-choice-grid two",children:[E.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":o.glass==="subtle",className:o.glass==="subtle"?"on":"",onClick:()=>b("glass","subtle"),type:"button",children:[E.jsx("strong",{children:"Subtle glass"}),E.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),E.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":o.glass==="immersive",className:o.glass==="immersive"?"on":"",onClick:()=>b("glass","immersive"),type:"button",children:[E.jsx("strong",{children:"Immersive · no surface"}),E.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Star web"}),E.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(_=>E.jsx("button",{"aria-pressed":o.starIntensity===_,className:o.starIntensity===_?"on":"",onClick:()=>b("starIntensity",_),type:"button",children:_},_))})]}),E.jsxs("div",{className:"lab-customize-row",children:[E.jsxs("div",{children:[E.jsx("h4",{children:"Reading density"}),E.jsxs("div",{className:"lab-segmented-control",children:[E.jsx("button",{"aria-label":"Compact text","aria-pressed":o.density==="compact",className:o.density==="compact"?"on":"",onClick:()=>b("density","compact"),type:"button",children:"compact"}),E.jsx("button",{"aria-label":"Comfortable text","aria-pressed":o.density==="comfortable",className:o.density==="comfortable"?"on":"",onClick:()=>b("density","comfortable"),type:"button",children:"comfortable"})]})]}),E.jsxs("div",{children:[E.jsx("h4",{children:"Font size"}),E.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(_=>E.jsx("button",{"aria-pressed":o.fontSize===_,className:o.fontSize===_?"on":"",onClick:()=>b("fontSize",_),type:"button",children:_},_))})]})]})]}),m==="privacy"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Keyboard & privacy"}),E.jsx("span",{children:"Quick controls and where your reading data stays."})]}),E.jsxs("dl",{className:"lab-shortcuts",children:[E.jsxs("div",{children:[E.jsxs("dt",{children:[E.jsx("kbd",{children:"Ctrl"}),E.jsx("kbd",{children:","})]}),E.jsx("dd",{children:"open settings"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:E.jsx("kbd",{children:"Esc"})}),E.jsx("dd",{children:"close this panel"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:E.jsx("kbd",{children:"Enter"})}),E.jsx("dd",{children:"send a message"})]})]}),E.jsxs("aside",{className:"lab-privacy-note",children:[E.jsx("span",{"aria-hidden":"true",children:"◎"}),E.jsxs("div",{children:[E.jsx("strong",{children:"Everything stays on this machine."}),E.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]}),E.jsxs("div",{className:"lab-api-key-setting",children:[E.jsx("label",{htmlFor:"spell-surface-api-key",children:"Your DeepSeek key"}),E.jsx("input",{autoCapitalize:"none",autoComplete:"off",id:"spell-surface-api-key",onChange:_=>h(_.target.value),placeholder:"sk-...",spellCheck:!1,type:"password",value:u}),E.jsx("small",{children:"Stored only in this browser. Sent with each request and never saved by the server. Leave empty to remove it."})]})]})]})]})]}),E.jsxs("footer",{className:"lab-settings-actions",children:[E.jsx("button",{onClick:n,type:"button",children:"Leave unchanged"}),E.jsx("button",{className:"primary",onClick:T,type:"button",children:"Apply settings"})]})]})})}const Ji={chapter:1e3,density:"comfortable",fontSize:"small",glass:"immersive",runeMode:"particles",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"void",tier:"ascended",volume:5},Db="weaver.spell-surface";function Qr(a,e,n){return typeof a=="string"&&e.includes(a)?a:n}function BU(){try{const a=JSON.parse(window.localStorage.getItem(Db)??"null");return a?{...Ji,density:Qr(a.density,["compact","comfortable"],Ji.density),fontSize:Qr(a.fontSize,["small","medium","large"],Ji.fontSize),glass:Qr(a.glass,["subtle","immersive"],Ji.glass),runeMode:Qr(a.runeMode,["particles","voice","threads"],Ji.runeMode),soulMode:Qr(a.soulMode,["still","living","mirror"],Ji.soulMode),starIntensity:Qr(a.starIntensity,["quiet","balanced","vivid"],Ji.starIntensity),theme:Qr(a.theme,["crimson","cosmos","starlight","void"],Ji.theme)}:Ji}catch{return Ji}}function HU(a){window.localStorage.setItem(Db,JSON.stringify({density:a.density,fontSize:a.fontSize,glass:a.glass,runeMode:a.runeMode,soulMode:a.soulMode,starIntensity:a.starIntensity,theme:a.theme}))}const Ry=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127];function GU(a){const e=Ry.findIndex(n=>a<=n);return e===-1?Ry.length:e+1}function VU(a){if(!a)return"Others";const e=new Date(a);if(Number.isNaN(e.getTime()))return"Others";const n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),e>=n?"Today":e>=r?"Yesterday":"Others"}function Cy(a){return{reader_chapter:a.chapter,spoiler_mode:a.spoilerMode,tier:a.tier}}function kU({api:a,privacyLabel:e}){const n=C2(a,Ai),[r,o]=Le.useState(BU),[c,u]=Le.useState(!1),[h,m]=Le.useState(P2),[p,x]=Le.useState(1),[v,g]=Le.useState(()=>Nl()!==""),[b,T]=Le.useState(!1),[w,_]=Le.useState(!1),[y,U]=Le.useState(!1),[z,D]=Le.useState(new Set),[P,N]=Le.useState(new Set),[H,A]=Le.useState(new Map),[F,W]=Le.useState("idle"),[k,Z]=Le.useState("[The Spell listens.]"),[pe,de]=Le.useState(0),[ee,L]=Le.useState(0),V=Le.useRef(null),te=Le.useRef(null),ge=Le.useRef(null),Me=Le.useRef(!1),O=Le.useRef(!1),q=Le.useRef(null),ie=Le.useMemo(()=>n.conversations.map(Oe=>({archived:z.has(Oe.conversation_id),dateGroup:VU(Oe.created_at),id:Oe.conversation_id,pinned:P.has(Oe.conversation_id),preview:"private reading thread",title:H.get(Oe.conversation_id)??Oe.title,volume:null})),[z,n.conversations,P,H]);Le.useEffect(()=>{function Oe(lt){lt.ctrlKey&&lt.key===","&&(lt.preventDefault(),B()),lt.key==="Escape"&&!h&&(u(!1),b&&ne())}return window.addEventListener("keydown",Oe),()=>window.removeEventListener("keydown",Oe)},[b,h]),Le.useEffect(()=>{if(!b)return;const Oe=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=Oe}},[b]),Le.useEffect(()=>{const Oe=ge.current;Oe&&(Oe.scrollTop=Oe.scrollHeight)},[n.activity,n.messages,n.recoveryMessage]),Le.useEffect(()=>{if(n.turnActive){Me.current=!0,W(n.activity.length>0?"weaving":"rippling");return}Me.current&&(Me.current=!1,W("complete"),Se("[The weave is complete.]"),q.current&&window.clearTimeout(q.current),q.current=window.setTimeout(()=>W("idle"),900))},[n.activity.length,n.turnActive]),Le.useEffect(()=>{const Oe=n.activity.at(-1);if(!Oe)return;const lt=U2(Oe);lt&&Se(lt)},[n.activity]);const Ee=n.messages.some(Oe=>Oe.role==="weaver"&&Oe.streaming&&Oe.content.length>0);Le.useEffect(()=>{!n.turnActive||!Ee||O.current||(O.current=!0,Se("[Weaving the story.]"))},[n.turnActive,Ee]),Le.useEffect(()=>()=>{q.current&&window.clearTimeout(q.current)},[]);function Se(Oe){Z(Oe),de(lt=>lt+1),L(lt=>lt+1)}async function B(){try{const Oe=await a.getPreferences(),lt=Oe.reader_chapter??r.chapter;o(Lt=>({...Lt,chapter:lt,spoilerMode:Oe.spoiler_mode,tier:Oe.tier,volume:GU(lt)}))}finally{u(!0),Se("[The sea within opens.]")}}function Q(){if(window.innerWidth<768){T(!0);return}_(!1)}function ne(){if(window.innerWidth<768){T(!1),window.setTimeout(()=>te.current?.focus(),0);return}_(!0)}function Re(){if(v){B();return}x(2),m(!0)}function Qe(){m(!1),window.setTimeout(()=>V.current?.focus(),0)}async function Be(){await n.createConversation()&&(T(!1),Se("[An empty thread waits in the void.]"),window.setTimeout(()=>V.current?.focus(),0))}async function yt(Oe){await n.selectConversation(Oe),T(!1),Se("[The thread is recalled.]")}function ft(Oe,lt){A(Lt=>new Map(Lt).set(Oe,lt)),Se("[The thread accepts a new name.]")}function ht(Oe,lt){Oe(Lt=>{const $t=new Set(Lt);return $t.has(lt)?$t.delete(lt):$t.add(lt),$t})}function dt(Oe){O.current=!1,W("rippling"),Se("[The Spell reaches for the first thread.]"),n.sendMessage(Oe)}function Je(){O.current=!1,W("weaving"),Se("[The Spell takes up the thread once more.]"),n.regenerateReply()}const Et=`Vol ${r.volume} · ch ${r.chapter} · ${r.tier}`,Ht=r.starIntensity==="quiet"?.2:r.starIntensity==="vivid"?.56:.36;return E.jsxs("div",{className:["spell-surface-lab","spell-surface-live",b?"lab-rail-open":"",w?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":r.density,"data-font-size":r.fontSize,"data-glass":r.glass,"data-runes":r.runeMode,"data-soul":r.soulMode,"data-star-intensity":r.starIntensity,"data-theme":r.theme,"data-testid":"spell-surface-live",children:[E.jsx(bU,{className:"lab-spell-background",mode:"alive",paused:c||h,threadAlpha:Ht}),E.jsx("div",{"aria-hidden":"true",className:"lab-galactic-band"}),E.jsx("div",{"aria-hidden":"true",className:"lab-purple-depth"}),E.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-one"}),E.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-two"}),E.jsxs("div",{"aria-hidden":"true",className:"lab-core-wake",children:[E.jsx("span",{}),E.jsx("span",{})]},ee),E.jsx(wb,{mode:r.soulMode,state:F}),E.jsx(AU,{activeThreadId:n.conversationId??"",archivedOpen:y,collapsed:w,drawerOpen:b,hasApiKey:v,onArchive:Oe=>ht(D,Oe),onClose:ne,onCreate:()=>{Be()},onDelete:Oe=>{n.deleteConversation(Oe)},onOpen:Q,onOpenKeySetup:Re,onOpenSettings:()=>{B()},onPin:Oe=>ht(N,Oe),onRename:ft,onSelect:Oe=>{yt(Oe)},onSetArchivedOpen:U,readerStatus:Et,threads:ie}),E.jsxs("main",{"aria-hidden":b?!0:void 0,className:"lab-chat-main",inert:b,children:[E.jsxs("div",{className:"lab-chat-controls",children:[E.jsx("button",{"aria-controls":"spell-surface-rail","aria-expanded":b,"aria-label":"Open threads",className:"lab-mobile-rail",onClick:Q,ref:te,type:"button",children:E.jsx(VS,{})}),E.jsxs("button",{"aria-label":v?"DeepSeek key stored in this browser":"DeepSeek key missing from this browser",className:`lab-key-status-header ${v?"stored":"missing"}`,onClick:Re,type:"button",children:[E.jsx("span",{"aria-hidden":"true"}),v?"key stored":"key missing"]}),E.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{B()},type:"button",children:E.jsx(kS,{})})]}),E.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:ge,children:E.jsxs("div",{className:"lab-transcript-column",children:[n.bootError&&E.jsx("div",{className:"boot-error",children:n.bootError}),!n.bootError&&n.messages.length===0&&E.jsxs("section",{className:"lab-empty-weave",children:[E.jsx("span",{className:"lab-empty-mark",children:E.jsx(vm,{})}),E.jsx("p",{children:"[An empty thread trembles in the void.]"}),E.jsx("h1",{children:"What are we reading?"}),E.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),n.messages.map(Oe=>E.jsx(G3,{Mark:vm,assistantName:Ai.assistantName,message:Oe,onQuote:lt=>{n.setDraft(`"${lt}" `),V.current?.focus()},onRegenerate:Oe.id===n.lastReplyId&&n.turnState==="idle"?Je:void 0,regenerateLabel:Ai.regenerateLabel},Oe.id)),n.recoveryMessage&&E.jsx(V3,{chooseLabel:Ai.recoveryChooseLabel,createLabel:Ai.recoveryCreateLabel,message:n.recoveryMessage,onChooseConversation:Q,onCreateConversation:()=>{Be()},onRetry:()=>{n.retryLastTurn()},retryLabel:Ai.recoveryRetryLabel,title:Ai.recoveryTitle})]})}),E.jsx(DU,{announcement:k,eventKey:pe,mode:r.runeMode}),E.jsxs("footer",{className:"lab-composer-dock",children:[E.jsx(w3,{cancelling:n.turnState==="cancelling",draft:n.draft,inputLabel:Ai.inputLabel,onCancel:()=>{n.cancelTurn()},onDraftChange:n.setDraft,onSubmit:dt,onTierChange:Oe=>{const lt={...r,tier:Oe};o(lt),a.savePreferences(Cy(lt))},placeholder:Ai.composerPlaceholder,sendLabel:Ai.sendLabel,stopLabel:Ai.stopLabel,stoppingLabel:Ai.stoppingLabel,textareaRef:V,tier:r.tier,turnActive:n.turnActive}),E.jsxs("p",{children:[E.jsx("span",{})," ",e]})]})]}),b&&E.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:ne,type:"button"}),c&&E.jsx(FU,{initial:r,onApiKeyChange:g,onClose:()=>u(!1),onSave:Oe=>{o(Oe),HU(Oe),u(!1),Se("[Your soul answers the change.]"),a.savePreferences(Cy(Oe))}}),h&&E.jsx(P3,{initialStep:p,onComplete:Qe,onDefer:Qe,onKeyStored:()=>g(!0)})]})}async function $r(a,e){if(!a.ok)throw new Error(`${e} failed (${a.status})`);return await a.json()}function XU(a){const e=typeof a.data.text=="string"?a.data.text:"",n=typeof a.data.message=="string"?a.data.message:"";if(a.event==="delta")return{type:"delta",text:e};if(a.event==="completed")return{type:"completed",text:e,tokenCount:typeof a.data.token_count=="number"?a.data.token_count:void 0,tokenBudget:typeof a.data.token_budget=="number"?a.data.token_budget:void 0};if(a.event==="interrupted")return{type:"interrupted",message:n||"The turn was interrupted."};if(a.event==="failed")return{type:"failed",message:n||"The reply failed.",code:typeof a.data.code=="string"?a.data.code:void 0};if(a.event==="tool"){const r=Array.isArray(a.data.handles)?a.data.handles.filter(o=>typeof o=="string"):void 0;return{type:"tool",name:typeof a.data.name=="string"?a.data.name:"tool",status:typeof a.data.status=="string"?a.data.status:"start",detail:typeof a.data.detail=="string"?a.data.detail:"",preview:typeof a.data.preview=="string"?a.data.preview:void 0,handles:r&&r.length>0?r:void 0}}return null}async function*WU(a){const e=[];let n=[],r=null,o=0;const c=["delta","tool","completed","interrupted","failed"];for(const u of c)a.addEventListener(u,h=>{try{const m=XU({event:u,data:JSON.parse(h.data)});m&&(e.push(m),n.splice(0).forEach(p=>p()))}catch{}});a.onerror=()=>{o+=1,(a.readyState===EventSource.CLOSED||o>4)&&(r=new Error("The reply stream was interrupted."),n.splice(0).forEach(u=>u()))};try{for(;;)if(e.length>0)yield e.shift();else{if(r)throw r;await new Promise(u=>n.push(u))}}finally{a.close()}}async function*lp(a){const e=new EventSource(`/api/conversations/${encodeURIComponent(a)}/stream`);let n=!1;for await(const r of WU(e))if(yield r,r.type==="completed"||r.type==="interrupted"||r.type==="failed"){n=!0;break}if(!n)throw new Error("The reply stream closed without finishing.")}function jU(a=fetch){const e=(n,r)=>a(n,{...r,headers:{...z2(),...r?.headers}});return{async getPreferences(){const n=await e("/api/preferences");return $r(n,"Loading preferences")},async deleteConversation(n){const r=await e(`/api/conversations/${n}`,{method:"DELETE"});return $r(r,"Deleting conversation")},async getPassage(n){const r=await e(`/api/passages?handle=${encodeURIComponent(n)}`);return $r(r,"Loading passage")},async savePreferences(n){const r=await e("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return $r(r,"Saving preferences")},async listConversations(){const n=await e("/api/conversations");return $r(n,"Loading conversations")},async createConversation(){const n=await e("/api/conversations",{method:"POST"});return $r(n,"Creating a conversation")},async loadMessages(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/messages`);return $r(r,"Loading the conversation")},async*streamTurn(n,r){const o=await e(`/api/conversations/${encodeURIComponent(n)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r})});if(!o.ok)throw new Error(`Sending the message failed (${o.status})`);yield*lp(n)},async*retryTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/retry`,{method:"POST"});if(!r.ok)throw new Error(`Retrying failed (${r.status})`);yield*lp(n)},async*regenerateTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/regenerate`,{method:"POST"});if(!r.ok)throw new Error(`Regenerating failed (${r.status})`);yield*lp(n)},async cancelTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/cancel`,{method:"POST"});if(r.status===202)return"cancelling";if(r.status===200)return"idle";throw new Error(`Stopping the reply failed (${r.status})`)}}}const qU=Le.lazy(()=>IM(()=>import("./ThemeLab-3tsYf-U6.js"),[]).then(a=>({default:a.ThemeLab})));ls.autoAddCss=!1;function YU(a){return document.querySelector(`meta[name="${a}"]`)?.content??""}const Nb=document.getElementById("root");if(!Nb)throw new Error("Weaver root element is missing.");const KU=window.location.hash==="#theme-lab";A2.createRoot(Nb).render(KU?E.jsx(Le.Suspense,{fallback:E.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:E.jsx(qU,{})}):E.jsx(kU,{api:jU(),privacyLabel:YU("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{_3 as A,xx as C,VS as R,bU as S,vm as W,wb as a,AU as b,kS as c,y3 as d,DU as e,FU as f,E as j,Le as r};

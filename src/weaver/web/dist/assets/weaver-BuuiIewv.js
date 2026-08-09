(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();const MM="modulepreload",EM=function(r){return"/"+r},__={},TM=function(e,i,a){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(i.map(p=>{if(p=EM(p),p in __)return;__[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":MM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,E)=>{g.addEventListener("load",S),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function AM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lh={exports:{}},dl={};var x_;function RM(){if(x_)return dl;x_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return dl.Fragment=e,dl.jsx=i,dl.jsxs=i,dl}var y_;function CM(){return y_||(y_=1,lh.exports=RM()),lh.exports}var A=CM(),ch={exports:{}},ht={};var S_;function wM(){if(S_)return ht;S_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,b={};function y(N,k,pe){this.props=N,this.context=k,this.refs=b,this.updater=pe||E}y.prototype.isReactComponent={},y.prototype.setState=function(N,k){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,k,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=y.prototype;function F(N,k,pe){this.props=N,this.context=k,this.refs=b,this.updater=pe||E}var L=F.prototype=new P;L.constructor=F,D(L,y.prototype),L.isPureReactComponent=!0;var O=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(N,k,pe){var be=pe.ref;return{$$typeof:r,type:N,key:k,ref:be!==void 0?be:null,props:pe}}function q(N,k){return z(N.type,k,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Z(N){var k={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(pe){return k[pe]})}var fe=/\/+/g;function de(N,k){return typeof N=="object"&&N!==null&&N.key!=null?Z(""+N.key):k.toString(36)}function $(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(U,U):(N.status="pending",N.then(function(k){N.status==="pending"&&(N.status="fulfilled",N.value=k)},function(k){N.status==="pending"&&(N.status="rejected",N.reason=k)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function C(N,k,pe,be,Ae){var ee=typeof N;(ee==="undefined"||ee==="boolean")&&(N=null);var ce=!1;if(N===null)ce=!0;else switch(ee){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(N.$$typeof){case r:case e:ce=!0;break;case _:return ce=N._init,C(ce(N._payload),k,pe,be,Ae)}}if(ce)return Ae=Ae(N),ce=be===""?"."+de(N,0):be,O(Ae)?(pe="",ce!=null&&(pe=ce.replace(fe,"$&/")+"/"),C(Ae,k,pe,"",function(Je){return Je})):Ae!=null&&(V(Ae)&&(Ae=q(Ae,pe+(Ae.key==null||N&&N.key===Ae.key?"":(""+Ae.key).replace(fe,"$&/")+"/")+ce)),k.push(Ae)),1;ce=0;var _e=be===""?".":be+":";if(O(N))for(var Le=0;Le<N.length;Le++)be=N[Le],ee=_e+de(be,Le),ce+=C(be,k,pe,ee,Ae);else if(Le=S(N),typeof Le=="function")for(N=Le.call(N),Le=0;!(be=N.next()).done;)be=be.value,ee=_e+de(be,Le++),ce+=C(be,k,pe,ee,Ae);else if(ee==="object"){if(typeof N.then=="function")return C($(N),k,pe,be,Ae);throw k=String(N),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(N,k,pe){if(N==null)return N;var be=[],Ae=0;return C(N,be,"","",function(ee){return k.call(pe,ee,Ae++)}),be}function J(N){if(N._status===-1){var k=N._result;k=k(),k.then(function(pe){(N._status===0||N._status===-1)&&(N._status=1,N._result=pe)},function(pe){(N._status===0||N._status===-1)&&(N._status=2,N._result=pe)}),N._status===-1&&(N._status=0,N._result=k)}if(N._status===1)return N._result.default;throw N._result}var he=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Ee={map:H,forEach:function(N,k,pe){H(N,function(){k.apply(this,arguments)},pe)},count:function(N){var k=0;return H(N,function(){k++}),k},toArray:function(N){return H(N,function(k){return k})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ht.Activity=v,ht.Children=Ee,ht.Component=y,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=F,ht.StrictMode=a,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ht.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},ht.cache=function(N){return function(){return N.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(N,k,pe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var be=D({},N.props),Ae=N.key;if(k!=null)for(ee in k.key!==void 0&&(Ae=""+k.key),k)!T.call(k,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&k.ref===void 0||(be[ee]=k[ee]);var ee=arguments.length-2;if(ee===1)be.children=pe;else if(1<ee){for(var ce=Array(ee),_e=0;_e<ee;_e++)ce[_e]=arguments[_e+2];be.children=ce}return z(N.type,Ae,be)},ht.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ht.createElement=function(N,k,pe){var be,Ae={},ee=null;if(k!=null)for(be in k.key!==void 0&&(ee=""+k.key),k)T.call(k,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ae[be]=k[be]);var ce=arguments.length-2;if(ce===1)Ae.children=pe;else if(1<ce){for(var _e=Array(ce),Le=0;Le<ce;Le++)_e[Le]=arguments[Le+2];Ae.children=_e}if(N&&N.defaultProps)for(be in ce=N.defaultProps,ce)Ae[be]===void 0&&(Ae[be]=ce[be]);return z(N,ee,Ae)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:h,render:N}},ht.isValidElement=V,ht.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:J}},ht.memo=function(N,k){return{$$typeof:p,type:N,compare:k===void 0?null:k}},ht.startTransition=function(N){var k=B.T,pe={};B.T=pe;try{var be=N(),Ae=B.S;Ae!==null&&Ae(pe,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(U,he)}catch(ee){he(ee)}finally{k!==null&&pe.types!==null&&(k.types=pe.types),B.T=k}},ht.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ht.use=function(N){return B.H.use(N)},ht.useActionState=function(N,k,pe){return B.H.useActionState(N,k,pe)},ht.useCallback=function(N,k){return B.H.useCallback(N,k)},ht.useContext=function(N){return B.H.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N,k){return B.H.useDeferredValue(N,k)},ht.useEffect=function(N,k){return B.H.useEffect(N,k)},ht.useEffectEvent=function(N){return B.H.useEffectEvent(N)},ht.useId=function(){return B.H.useId()},ht.useImperativeHandle=function(N,k,pe){return B.H.useImperativeHandle(N,k,pe)},ht.useInsertionEffect=function(N,k){return B.H.useInsertionEffect(N,k)},ht.useLayoutEffect=function(N,k){return B.H.useLayoutEffect(N,k)},ht.useMemo=function(N,k){return B.H.useMemo(N,k)},ht.useOptimistic=function(N,k){return B.H.useOptimistic(N,k)},ht.useReducer=function(N,k,pe){return B.H.useReducer(N,k,pe)},ht.useRef=function(N){return B.H.useRef(N)},ht.useState=function(N){return B.H.useState(N)},ht.useSyncExternalStore=function(N,k,pe){return B.H.useSyncExternalStore(N,k,pe)},ht.useTransition=function(){return B.H.useTransition()},ht.version="19.2.8",ht}var b_;function um(){return b_||(b_=1,ch.exports=wM()),ch.exports}var Xe=um();const fm=AM(Xe);function ip(r,e){(e==null||e>r.length)&&(e=r.length);for(var i=0,a=Array(e);i<e;i++)a[i]=r[i];return a}function DM(r){if(Array.isArray(r))return r}function NM(r){if(Array.isArray(r))return ip(r)}function LM(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function UM(r,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,Sy(a.key),a)}}function OM(r,e,i){return e&&UM(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ru(r,e){var i=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!i){if(Array.isArray(r)||(i=dm(r))||e){i&&(r=i);var a=0,l=function(){};return{s:l,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,f=!0,h=!1;return{s:function(){i=i.call(r)},n:function(){var m=i.next();return f=m.done,m},e:function(m){h=!0,c=m},f:function(){try{f||i.return==null||i.return()}finally{if(h)throw c}}}}function ot(r,e,i){return(e=Sy(e))in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function PM(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function IM(r,e){var i=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var a,l,c,f,h=[],m=!0,p=!1;try{if(c=(i=i.call(r)).next,e===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(a=c.call(i)).done)&&(h.push(a.value),h.length!==e);m=!0);}catch(_){p=!0,l=_}finally{try{if(!m&&i.return!=null&&(f=i.return(),Object(f)!==f))return}finally{if(p)throw l}}return h}}function zM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M_(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,a)}return i}function Re(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?M_(Object(i),!0).forEach(function(a){ot(r,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):M_(Object(i)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(i,a))})}return r}function Zu(r,e){return DM(r)||IM(r,e)||dm(r,e)||zM()}function Xi(r){return NM(r)||PM(r)||dm(r)||FM()}function BM(r,e){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var a=i.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Sy(r){var e=BM(r,"string");return typeof e=="symbol"?e:e+""}function Iu(r){"@babel/helpers - typeof";return Iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Iu(r)}function dm(r,e){if(r){if(typeof r=="string")return ip(r,e);var i={}.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ip(r,e):void 0}}var E_=function(){},hm={},by={},My=null,Ey={mark:E_,measure:E_};try{typeof window<"u"&&(hm=window),typeof document<"u"&&(by=document),typeof MutationObserver<"u"&&(My=MutationObserver),typeof performance<"u"&&(Ey=performance)}catch{}var HM=hm.navigator||{},T_=HM.userAgent,A_=T_===void 0?"":T_,Sr=hm,tn=by,R_=My,Zc=Ey;Sr.document;var Ba=!!tn.documentElement&&!!tn.head&&typeof tn.addEventListener=="function"&&typeof tn.createElement=="function",Ty=~A_.indexOf("MSIE")||~A_.indexOf("Trident/"),Kc,GM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,VM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ay={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},kM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ry=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",Nl="duotone",Cy="sharp",wy="sharp-duotone",Dy="chisel",Ny="etch",Ly="graphite",Uy="jelly",Oy="jelly-duo",Py="jelly-fill",Iy="mosaic",zy="notdog",Fy="notdog-duo",By="pixel",Hy="slab",Gy="slab-duo",Vy="slab-press",ky="slab-press-duo",Xy="thumbprint",Wy="utility",qy="utility-duo",jy="utility-fill",Yy="vellum",Zy="whiteboard",XM="Classic",WM="Duotone",qM="Sharp",jM="Sharp Duotone",YM="Chisel",ZM="Etch",KM="Graphite",QM="Jelly",$M="Jelly Duo",JM="Jelly Fill",eE="Mosaic",tE="Notdog",nE="Notdog Duo",iE="Pixel",aE="Slab",rE="Slab Duo",sE="Slab Press",oE="Slab Press Duo",lE="Thumbprint",cE="Utility",uE="Utility Duo",fE="Utility Fill",dE="Vellum",hE="Whiteboard",Ky=[In,Nl,Cy,wy,Dy,Ny,Ly,Uy,Oy,Py,Iy,zy,Fy,By,Hy,Gy,Vy,ky,Xy,Wy,qy,jy,Yy,Zy];Kc={},ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(Kc,In,XM),Nl,WM),Cy,qM),wy,jM),Dy,YM),Ny,ZM),Ly,KM),Uy,QM),Oy,$M),Py,JM),ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(Kc,Iy,eE),zy,tE),Fy,nE),By,iE),Hy,aE),Gy,rE),Vy,sE),ky,oE),Xy,lE),Wy,cE),ot(ot(ot(ot(Kc,qy,uE),jy,fE),Yy,dE),Zy,hE);var pE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},mE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},gE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),vE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Qy=["fak","fa-kit","fakd","fa-kit-duotone"],C_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_E=["kit"],xE="kit",yE="kit-duotone",SE="Kit",bE="Kit Duotone";ot(ot({},xE,SE),yE,bE);var ME={kit:{"fa-kit":"fak"}},EE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},TE={kit:{fak:"fa-kit"}},w_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Qc,$c={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},AE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],RE="classic",CE="duotone",wE="sharp",DE="sharp-duotone",NE="chisel",LE="etch",UE="graphite",OE="jelly",PE="jelly-duo",IE="jelly-fill",zE="mosaic",FE="notdog",BE="notdog-duo",HE="pixel",GE="slab",VE="slab-duo",kE="slab-press",XE="slab-press-duo",WE="thumbprint",qE="utility",jE="utility-duo",YE="utility-fill",ZE="vellum",KE="whiteboard",QE="Classic",$E="Duotone",JE="Sharp",eT="Sharp Duotone",tT="Chisel",nT="Etch",iT="Graphite",aT="Jelly",rT="Jelly Duo",sT="Jelly Fill",oT="Mosaic",lT="Notdog",cT="Notdog Duo",uT="Pixel",fT="Slab",dT="Slab Duo",hT="Slab Press",pT="Slab Press Duo",mT="Thumbprint",gT="Utility",vT="Utility Duo",_T="Utility Fill",xT="Vellum",yT="Whiteboard";Qc={},ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(Qc,RE,QE),CE,$E),wE,JE),DE,eT),NE,tT),LE,nT),UE,iT),OE,aT),PE,rT),IE,sT),ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(Qc,zE,oT),FE,lT),BE,cT),HE,uT),GE,fT),VE,dT),kE,hT),XE,pT),WE,mT),qE,gT),ot(ot(ot(ot(Qc,jE,vT),YE,_T),ZE,xT),KE,yT);var ST="kit",bT="kit-duotone",MT="Kit",ET="Kit Duotone";ot(ot({},ST,MT),bT,ET);var TT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},AT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ap={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},RT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],$y=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(AE,RT),CT=["solid","regular","light","thin","duotone","brands","semibold"],Jy=[1,2,3,4,5,6,7,8,9,10],wT=Jy.concat([11,12,13,14,15,16,17,18,19,20]),DT=["aw","fw","pull-left","pull-right"],NT=[].concat(Xi(Object.keys(AT)),CT,DT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",$c.GROUP,$c.SWAP_OPACITY,$c.PRIMARY,$c.SECONDARY]).concat(Jy.map(function(r){return"".concat(r,"x")})).concat(wT.map(function(r){return"w-".concat(r)})),LT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Oa="___FONT_AWESOME___",rp=16,eS="fa",tS="svg-inline--fa",as="data-fa-i2svg",sp="data-fa-pseudo-element",UT="data-fa-pseudo-element-pending",pm="data-prefix",mm="data-icon",D_="fontawesome-i2svg",OT="async",PT=["HTML","HEAD","STYLE","SCRIPT"],nS=["::before","::after",":before",":after"],iS=(function(){try{return!0}catch{return!1}})();function Ll(r){return new Proxy(r,{get:function(i,a){return a in i?i[a]:i[In]}})}var aS=Re({},Ay);aS[In]=Re(Re(Re(Re({},{"fa-duotone":"duotone"}),Ay[In]),C_.kit),C_["kit-duotone"]);var IT=Ll(aS),op=Re({},vE);op[In]=Re(Re(Re(Re({},{duotone:"fad"}),op[In]),w_.kit),w_["kit-duotone"]);var N_=Ll(op),lp=Re({},ap);lp[In]=Re(Re({},lp[In]),TE.kit);var gm=Ll(lp),cp=Re({},TT);cp[In]=Re(Re({},cp[In]),ME.kit);Ll(cp);var zT=GM,rS="fa-layers-text",FT=VM,BT=Re({},pE);Ll(BT);var HT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],uh=kM,GT=[].concat(Xi(_E),Xi(NT)),Tl=Sr.FontAwesomeConfig||{};function VT(r){var e=tn.querySelector("script["+r+"]");if(e)return e.getAttribute(r)}function kT(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(tn&&typeof tn.querySelector=="function"){var XT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];XT.forEach(function(r){var e=Zu(r,2),i=e[0],a=e[1],l=kT(VT(i));l!=null&&(Tl[a]=l)})}var sS={styleDefault:"solid",familyDefault:In,cssPrefix:eS,replacementClass:tS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tl.familyPrefix&&(Tl.cssPrefix=Tl.familyPrefix);var ho=Re(Re({},sS),Tl);ho.autoReplaceSvg||(ho.observeMutations=!1);var st={};Object.keys(sS).forEach(function(r){Object.defineProperty(st,r,{enumerable:!0,set:function(i){ho[r]=i,Al.forEach(function(a){return a(st)})},get:function(){return ho[r]}})});Object.defineProperty(st,"familyPrefix",{enumerable:!0,set:function(e){ho.cssPrefix=e,Al.forEach(function(i){return i(st)})},get:function(){return ho.cssPrefix}});Sr.FontAwesomeConfig=st;var Al=[];function WT(r){return Al.push(r),function(){Al.splice(Al.indexOf(r),1)}}var ks=rp,ea={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qT(r){if(!(!r||!Ba)){var e=tn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=r;for(var i=tn.head.childNodes,a=null,l=i.length-1;l>-1;l--){var c=i[l],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=c)}return tn.head.insertBefore(e,a),r}}var jT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function L_(){for(var r=12,e="";r-- >0;)e+=jT[Math.random()*62|0];return e}function _o(r){for(var e=[],i=(r||[]).length>>>0;i--;)e[i]=r[i];return e}function vm(r){return r.classList?_o(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(e){return e})}function oS(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function YT(r){return Object.keys(r||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(oS(r[i]),'" ')},"").trim()}function Ku(r){return Object.keys(r||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(r[i].trim(),";")},"")}function _m(r){return r.size!==ea.size||r.x!==ea.x||r.y!==ea.y||r.rotate!==ea.rotate||r.flipX||r.flipY}function ZT(r){var e=r.transform,i=r.containerWidth,a=r.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(h)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:l,inner:m,path:p}}function KT(r){var e=r.transform,i=r.width,a=i===void 0?rp:i,l=r.height,c=l===void 0?rp:l,f="";return Ty?f+="translate(".concat(e.x/ks-a/2,"em, ").concat(e.y/ks-c/2,"em) "):f+="translate(calc(-50% + ".concat(e.x/ks,"em), calc(-50% + ").concat(e.y/ks,"em)) "),f+="scale(".concat(e.size/ks*(e.flipX?-1:1),", ").concat(e.size/ks*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var QT=`:root, :host {
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
}`;function lS(){var r=eS,e=tS,i=st.cssPrefix,a=st.replacementClass,l=QT;if(i!==r||a!==e){var c=new RegExp("\\.".concat(r,"\\-"),"g"),f=new RegExp("\\--".concat(r,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");l=l.replace(c,".".concat(i,"-")).replace(f,"--".concat(i,"-")).replace(h,".".concat(a))}return l}var U_=!1;function fh(){st.autoAddCss&&!U_&&(qT(lS()),U_=!0)}var $T={mixout:function(){return{dom:{css:lS,insertCss:fh}}},hooks:function(){return{beforeDOMElementCreation:function(){fh()},beforeI2svg:function(){fh()}}}},Pa=Sr||{};Pa[Oa]||(Pa[Oa]={});Pa[Oa].styles||(Pa[Oa].styles={});Pa[Oa].hooks||(Pa[Oa].hooks={});Pa[Oa].shims||(Pa[Oa].shims=[]);var Gi=Pa[Oa],cS=[],uS=function(){tn.removeEventListener("DOMContentLoaded",uS),zu=1,cS.map(function(e){return e()})},zu=!1;Ba&&(zu=(tn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tn.readyState),zu||tn.addEventListener("DOMContentLoaded",uS));function JT(r){Ba&&(zu?setTimeout(r,0):cS.push(r))}function Ul(r){var e=r.tag,i=r.attributes,a=i===void 0?{}:i,l=r.children,c=l===void 0?[]:l;return typeof r=="string"?oS(r):"<".concat(e," ").concat(YT(a),">").concat(c.map(Ul).join(""),"</").concat(e,">")}function O_(r,e,i){if(r&&r[e]&&r[e][i])return{prefix:e,iconName:i,icon:r[e][i]}}var dh=function(e,i,a,l){var c=Object.keys(e),f=c.length,h=i,m,p,_;for(a===void 0?(m=1,_=e[c[0]]):(m=0,_=a);m<f;m++)p=c[m],_=h(_,e[p],p,e);return _};function fS(r){return Xi(r).length!==1?null:r.codePointAt(0).toString(16)}function P_(r){return Object.keys(r).reduce(function(e,i){var a=r[i],l=!!a.icon;return l?e[a.iconName]=a.icon:e[i]=a,e},{})}function up(r,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.skipHooks,l=a===void 0?!1:a,c=P_(e);typeof Gi.hooks.addPack=="function"&&!l?Gi.hooks.addPack(r,P_(e)):Gi.styles[r]=Re(Re({},Gi.styles[r]||{}),c),r==="fas"&&up("fa",e)}var Cl=Gi.styles,eA=Gi.shims,dS=Object.keys(gm),tA=dS.reduce(function(r,e){return r[e]=Object.keys(gm[e]),r},{}),xm=null,hS={},pS={},mS={},gS={},vS={};function nA(r){return~GT.indexOf(r)}function iA(r,e){var i=e.split("-"),a=i[0],l=i.slice(1).join("-");return a===r&&l!==""&&!nA(l)?l:null}var _S=function(){var e=function(c){return dh(Cl,function(f,h,m){return f[m]=dh(h,c,{}),f},{})};hS=e(function(l,c,f){if(c[3]&&(l[c[3]]=f),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=f})}return l}),pS=e(function(l,c,f){if(l[f]=f,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=f})}return l}),vS=e(function(l,c,f){var h=c[2];return l[f]=f,h.forEach(function(m){l[m]=f}),l});var i="far"in Cl||st.autoFetchSvg,a=dh(eA,function(l,c){var f=c[0],h=c[1],m=c[2];return h==="far"&&!i&&(h="fas"),typeof f=="string"&&(l.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(l.unicodes[f.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});mS=a.names,gS=a.unicodes,xm=Qu(st.styleDefault,{family:st.familyDefault})};WT(function(r){xm=Qu(r.styleDefault,{family:st.familyDefault})});_S();function ym(r,e){return(hS[r]||{})[e]}function aA(r,e){return(pS[r]||{})[e]}function ts(r,e){return(vS[r]||{})[e]}function xS(r){return mS[r]||{prefix:null,iconName:null}}function rA(r){var e=gS[r],i=ym("fas",r);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function br(){return xm}var yS=function(){return{prefix:null,iconName:null,rest:[]}};function sA(r){var e=In,i=dS.reduce(function(a,l){return a[l]="".concat(st.cssPrefix,"-").concat(l),a},{});return Ky.forEach(function(a){(r.includes(i[a])||r.some(function(l){return tA[a].includes(l)}))&&(e=a)}),e}function Qu(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,a=i===void 0?In:i,l=IT[a][r];if(a===Nl&&!r)return"fad";var c=N_[a][r]||N_[a][l],f=r in Gi.styles?r:null,h=c||f||null;return h}function oA(r){var e=[],i=null;return r.forEach(function(a){var l=iA(st.cssPrefix,a);l?i=l:a&&e.push(a)}),{iconName:i,rest:e}}function I_(r){return r.sort().filter(function(e,i,a){return a.indexOf(e)===i})}var z_=$y.concat(Qy);function $u(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,a=i===void 0?!1:i,l=null,c=I_(r.filter(function(S){return z_.includes(S)})),f=I_(r.filter(function(S){return!z_.includes(S)})),h=c.filter(function(S){return l=S,!Ry.includes(S)}),m=Zu(h,1),p=m[0],_=p===void 0?null:p,v=sA(c),g=Re(Re({},oA(f)),{},{prefix:Qu(_,{family:v})});return Re(Re(Re({},g),fA({values:r,family:v,styles:Cl,config:st,canonical:g,givenPrefix:l})),lA(a,l,g))}function lA(r,e,i){var a=i.prefix,l=i.iconName;if(r||!a||!l)return{prefix:a,iconName:l};var c=e==="fa"?xS(l):{},f=ts(a,l);return l=c.iconName||f||l,a=c.prefix||a,a==="far"&&!Cl.far&&Cl.fas&&!st.autoFetchSvg&&(a="fas"),{prefix:a,iconName:l}}var cA=Ky.filter(function(r){return r!==In||r!==Nl}),uA=Object.keys(ap).filter(function(r){return r!==In}).map(function(r){return Object.keys(ap[r])}).flat();function fA(r){var e=r.values,i=r.family,a=r.canonical,l=r.givenPrefix,c=l===void 0?"":l,f=r.styles,h=f===void 0?{}:f,m=r.config,p=m===void 0?{}:m,_=i===Nl,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=a.prefix==="fad"||a.prefix==="fa-duotone";if(!_&&(v||g||S)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&cA.includes(i)){var E=Object.keys(h).find(function(b){return uA.includes(b)});if(E||p.autoFetchSvg){var D=gE.get(i).defaultShortPrefixId;a.prefix=D,a.iconName=ts(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||c==="fa")&&(a.prefix=br()||"fas"),a}var dA=(function(){function r(){LM(this,r),this.definitions={}}return OM(r,[{key:"add",value:function(){for(var i=this,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){i.definitions[h]=Re(Re({},i.definitions[h]||{}),f[h]),up(h,f[h]);var m=gm[In][h];m&&up(m,f[h]),_S()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,a){var l=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(l).map(function(c){var f=l[c],h=f.prefix,m=f.iconName,p=f.icon,_=p[2];i[h]||(i[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(i[h][v]=p)}),i[h][m]=p}),i}}])})(),F_=[],ro={},lo={},hA=Object.keys(lo);function pA(r,e){var i=e.mixoutsTo;return F_=r,ro={},Object.keys(lo).forEach(function(a){hA.indexOf(a)===-1&&delete lo[a]}),F_.forEach(function(a){var l=a.mixout?a.mixout():{};if(Object.keys(l).forEach(function(f){typeof l[f]=="function"&&(i[f]=l[f]),Iu(l[f])==="object"&&Object.keys(l[f]).forEach(function(h){i[f]||(i[f]={}),i[f][h]=l[f][h]})}),a.hooks){var c=a.hooks();Object.keys(c).forEach(function(f){ro[f]||(ro[f]=[]),ro[f].push(c[f])})}a.provides&&a.provides(lo)}),i}function fp(r,e){for(var i=arguments.length,a=new Array(i>2?i-2:0),l=2;l<i;l++)a[l-2]=arguments[l];var c=ro[r]||[];return c.forEach(function(f){e=f.apply(null,[e].concat(a))}),e}function rs(r){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var l=ro[r]||[];l.forEach(function(c){c.apply(null,i)})}function Mr(){var r=arguments[0],e=Array.prototype.slice.call(arguments,1);return lo[r]?lo[r].apply(null,e):void 0}function dp(r){r.prefix==="fa"&&(r.prefix="fas");var e=r.iconName,i=r.prefix||br();if(e)return e=ts(i,e)||e,O_(SS.definitions,i,e)||O_(Gi.styles,i,e)}var SS=new dA,mA=function(){st.autoReplaceSvg=!1,st.observeMutations=!1,rs("noAuto")},gA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ba?(rs("beforeI2svg",e),Mr("pseudoElements2svg",e),Mr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;st.autoReplaceSvg===!1&&(st.autoReplaceSvg=!0),st.observeMutations=!0,JT(function(){_A({autoReplaceSvgRoot:i}),rs("watch",e)})}},vA={icon:function(e){if(e===null)return null;if(Iu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ts(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Qu(e[0]);return{prefix:a,iconName:ts(a,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(st.cssPrefix,"-"))>-1||e.match(zT))){var l=$u(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||br(),iconName:ts(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var c=br();return{prefix:c,iconName:ts(c,e)||e}}}},vi={noAuto:mA,config:st,dom:gA,parse:vA,library:SS,findIconDefinition:dp,toHtml:Ul},_A=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,a=i===void 0?tn:i;(Object.keys(Gi.styles).length>0||st.autoFetchSvg)&&Ba&&st.autoReplaceSvg&&vi.dom.i2svg({node:a})};function Ju(r,e){return Object.defineProperty(r,"abstract",{get:e}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(a){return Ul(a)})}}),Object.defineProperty(r,"node",{get:function(){if(Ba){var a=tn.createElement("div");return a.innerHTML=r.html,a.children}}}),r}function xA(r){var e=r.children,i=r.main,a=r.mask,l=r.attributes,c=r.styles,f=r.transform;if(_m(f)&&i.found&&!a.found){var h=i.width,m=i.height,p={x:h/m/2,y:.5};l.style=Ku(Re(Re({},c),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function yA(r){var e=r.prefix,i=r.iconName,a=r.children,l=r.attributes,c=r.symbol,f=c===!0?"".concat(e,"-").concat(st.cssPrefix,"-").concat(i):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Re(Re({},l),{},{id:f}),children:a}]}]}function SA(r){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(i){return i in r})}function Sm(r){var e=r.icons,i=e.main,a=e.mask,l=r.prefix,c=r.iconName,f=r.transform,h=r.symbol,m=r.maskId,p=r.extra,_=r.watchable,v=_===void 0?!1:_,g=a.found?a:i,S=g.width,E=g.height,D=[st.replacementClass,c?"".concat(st.cssPrefix,"-").concat(c):""].filter(function(O){return p.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(p.classes).join(" "),b={children:[],attributes:Re(Re({},p.attributes),{},{"data-prefix":l,"data-icon":c,class:D,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(E)})};!SA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[as]="");var y=Re(Re({},b),{},{prefix:l,iconName:c,main:i,mask:a,maskId:m,transform:f,symbol:h,styles:Re({},p.styles)}),P=a.found&&i.found?Mr("generateAbstractMask",y)||{children:[],attributes:{}}:Mr("generateAbstractIcon",y)||{children:[],attributes:{}},F=P.children,L=P.attributes;return y.children=F,y.attributes=L,h?yA(y):xA(y)}function B_(r){var e=r.content,i=r.width,a=r.height,l=r.transform,c=r.extra,f=r.watchable,h=f===void 0?!1:f,m=Re(Re({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[as]="");var p=Re({},c.styles);_m(l)&&(p.transform=KT({transform:l,width:i,height:a}),p["-webkit-transform"]=p.transform);var _=Ku(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function bA(r){var e=r.content,i=r.extra,a=Re(Re({},i.attributes),{},{class:i.classes.join(" ")}),l=Ku(i.styles);l.length>0&&(a.style=l);var c=[];return c.push({tag:"span",attributes:a,children:[e]}),c}var hh=Gi.styles;function hp(r){var e=r[0],i=r[1],a=r.slice(4),l=Zu(a,1),c=l[0],f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat(st.cssPrefix,"-").concat(uh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(uh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(uh.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:i,icon:f}}var MA={found:!1,width:512,height:512};function EA(r,e){!iS&&!st.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(e,'" is missing.'))}function pp(r,e){var i=e;return e==="fa"&&st.styleDefault!==null&&(e=br()),new Promise(function(a,l){if(i==="fa"){var c=xS(r)||{};r=c.iconName||r,e=c.prefix||e}if(r&&e&&hh[e]&&hh[e][r]){var f=hh[e][r];return a(hp(f))}EA(r,e),a(Re(Re({},MA),{},{icon:st.showMissingIcons&&r?Mr("missingIconAbstract")||{}:{}}))})}var H_=function(){},mp=st.measurePerformance&&Zc&&Zc.mark&&Zc.measure?Zc:{mark:H_,measure:H_},bl='FA "7.3.1"',TA=function(e){return mp.mark("".concat(bl," ").concat(e," begins")),function(){return bS(e)}},bS=function(e){mp.mark("".concat(bl," ").concat(e," ends")),mp.measure("".concat(bl," ").concat(e),"".concat(bl," ").concat(e," begins"),"".concat(bl," ").concat(e," ends"))},bm={begin:TA,end:bS},Cu=function(){};function G_(r){var e=r.getAttribute?r.getAttribute(as):null;return typeof e=="string"}function AA(r){var e=r.getAttribute?r.getAttribute(pm):null,i=r.getAttribute?r.getAttribute(mm):null;return e&&i}function RA(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(st.replacementClass)}function CA(){if(st.autoReplaceSvg===!0)return wu.replace;var r=wu[st.autoReplaceSvg];return r||wu.replace}function wA(r){return tn.createElementNS("http://www.w3.org/2000/svg",r)}function DA(r){return tn.createElement(r)}function MS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,a=i===void 0?r.tag==="svg"?wA:DA:i;if(typeof r=="string")return tn.createTextNode(r);var l=a(r.tag);Object.keys(r.attributes||[]).forEach(function(f){l.setAttribute(f,r.attributes[f])});var c=r.children||[];return c.forEach(function(f){l.appendChild(MS(f,{ceFn:a}))}),l}function NA(r){var e=" ".concat(r.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wu={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(l){i.parentNode.insertBefore(MS(l),i)}),i.getAttribute(as)===null&&st.keepOriginalSource){var a=tn.createComment(NA(i));i.parentNode.replaceChild(a,i)}else i.remove()},nest:function(e){var i=e[0],a=e[1];if(~vm(i).indexOf(st.replacementClass))return wu.replace(e);var l=new RegExp("".concat(st.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var c=a[0].attributes.class.split(" ").reduce(function(h,m){return m===st.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});a[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",c.toNode.join(" "))}var f=a.map(function(h){return Ul(h)}).join(`
`);i.setAttribute(as,""),i.innerHTML=f}};function V_(r){r()}function ES(r,e){var i=typeof e=="function"?e:Cu;if(r.length===0)i();else{var a=V_;st.mutateApproach===OT&&(a=Sr.requestAnimationFrame||V_),a(function(){var l=CA(),c=bm.begin("mutate");r.map(l),c(),i()})}}var Mm=!1;function TS(){Mm=!0}function gp(){Mm=!1}var Fu=null;function k_(r){if(R_&&st.observeMutations){var e=r.treeCallback,i=e===void 0?Cu:e,a=r.nodeCallback,l=a===void 0?Cu:a,c=r.pseudoElementsCallback,f=c===void 0?Cu:c,h=r.observeMutationsRoot,m=h===void 0?tn:h;Fu=new R_(function(p){if(!Mm){var _=br();_o(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!G_(v.addedNodes[0])&&(st.searchPseudoElements&&f(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&st.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&G_(v.target)&&~HT.indexOf(v.attributeName))if(v.attributeName==="class"&&AA(v.target)){var g=$u(vm(v.target)),S=g.prefix,E=g.iconName;v.target.setAttribute(pm,S||_),E&&v.target.setAttribute(mm,E)}else RA(v.target)&&l(v.target)})}}),Ba&&Fu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function LA(){Fu&&Fu.disconnect()}function UA(r){var e=r.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(a,l){var c=l.split(":"),f=c[0],h=c.slice(1);return f&&h.length>0&&(a[f]=h.join(":").trim()),a},{})),i}function OA(r){var e=r.getAttribute("data-prefix"),i=r.getAttribute("data-icon"),a=r.innerText!==void 0?r.innerText.trim():"",l=$u(vm(r));return l.prefix||(l.prefix=br()),e&&i&&(l.prefix=e,l.iconName=i),l.iconName&&l.prefix||(l.prefix&&a.length>0&&(l.iconName=aA(l.prefix,r.innerText)||ym(l.prefix,fS(r.innerText))),!l.iconName&&st.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=r.firstChild.data)),l}function PA(r){var e=_o(r.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{});return e}function IA(){return{iconName:null,prefix:null,transform:ea,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function X_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=OA(r),a=i.iconName,l=i.prefix,c=i.rest,f=PA(r),h=fp("parseNodeAttributes",{},r),m=e.styleParser?UA(r):[];return Re({iconName:a,prefix:l,transform:ea,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:f}},h)}var zA=Gi.styles;function AS(r){var e=st.autoReplaceSvg==="nest"?X_(r,{styleParser:!1}):X_(r);return~e.extra.classes.indexOf(rS)?Mr("generateLayersText",r,e):Mr("generateSvgReplacementMutation",r,e)}function FA(){return[].concat(Xi(Qy),Xi($y))}function W_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ba)return Promise.resolve();var i=tn.documentElement.classList,a=function(v){return i.add("".concat(D_,"-").concat(v))},l=function(v){return i.remove("".concat(D_,"-").concat(v))},c=st.autoFetchSvg?FA():Ry.concat(Object.keys(zA));c.includes("fa")||c.push("fa");var f=[".".concat(rS,":not([").concat(as,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(as,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=_o(r.querySelectorAll(f))}catch{}if(h.length>0)a("pending"),l("complete");else return Promise.resolve();var m=bm.begin("onTree"),p=h.reduce(function(_,v){try{var g=AS(v);g&&_.push(g)}catch(S){iS||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){ES(g,function(){a("active"),a("complete"),l("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function BA(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;AS(r).then(function(i){i&&ES([i],e)})}function HA(r){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:dp(e||{}),l=i.mask;return l&&(l=(l||{}).icon?l:dp(l||{})),r(a,Re(Re({},i),{},{mask:l}))}}var GA=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,l=a===void 0?ea:a,c=i.symbol,f=c===void 0?!1:c,h=i.mask,m=h===void 0?null:h,p=i.maskId,_=p===void 0?null:p,v=i.classes,g=v===void 0?[]:v,S=i.attributes,E=S===void 0?{}:S,D=i.styles,b=D===void 0?{}:D;if(e){var y=e.prefix,P=e.iconName,F=e.icon;return Ju(Re({type:"icon"},e),function(){return rs("beforeDOMElementCreation",{iconDefinition:e,params:i}),Sm({icons:{main:hp(F),mask:m?hp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:P,transform:Re(Re({},ea),l),symbol:f,maskId:_,extra:{attributes:E,styles:b,classes:g}})})}},VA={mixout:function(){return{icon:HA(GA)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=W_,i.nodeCallback=BA,i}}},provides:function(e){e.i2svg=function(i){var a=i.node,l=a===void 0?tn:a,c=i.callback,f=c===void 0?function(){}:c;return W_(l,f)},e.generateSvgReplacementMutation=function(i,a){var l=a.iconName,c=a.prefix,f=a.transform,h=a.symbol,m=a.mask,p=a.maskId,_=a.extra;return new Promise(function(v,g){Promise.all([pp(l,c),m.iconName?pp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=Zu(S,2),D=E[0],b=E[1];v([i,Sm({icons:{main:D,mask:b},prefix:c,iconName:l,transform:f,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(i){var a=i.children,l=i.attributes,c=i.main,f=i.transform,h=i.styles,m=Ku(h);m.length>0&&(l.style=m);var p;return _m(f)&&(p=Mr("generateAbstractTransformGrouping",{main:c,transform:f,containerWidth:c.width,iconWidth:c.width})),a.push(p||c.icon),{children:a,attributes:l}}}},kA={mixout:function(){return{layer:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.classes,c=l===void 0?[]:l;return Ju({type:"layer"},function(){rs("beforeDOMElementCreation",{assembler:i,params:a});var f=[];return i(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(st.cssPrefix,"-layers")].concat(Xi(c)).join(" ")},children:f}]})}}}},XA={mixout:function(){return{counter:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var l=a.classes,c=l===void 0?[]:l,f=a.attributes,h=f===void 0?{}:f,m=a.styles,p=m===void 0?{}:m;return Ju({type:"counter",content:i},function(){return rs("beforeDOMElementCreation",{content:i,params:a}),bA({content:i.toString(),extra:{attributes:h,styles:p,classes:["".concat(st.cssPrefix,"-layers-counter")].concat(Xi(c))}})})}}}},WA={mixout:function(){return{text:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,c=l===void 0?ea:l,f=a.classes,h=f===void 0?[]:f,m=a.attributes,p=m===void 0?{}:m,_=a.styles,v=_===void 0?{}:_;return Ju({type:"text",content:i},function(){return rs("beforeDOMElementCreation",{content:i,params:a}),B_({content:i,transform:Re(Re({},ea),c),extra:{attributes:p,styles:v,classes:["".concat(st.cssPrefix,"-layers-text")].concat(Xi(h))}})})}}},provides:function(e){e.generateLayersText=function(i,a){var l=a.transform,c=a.extra,f=null,h=null;if(Ty){var m=parseInt(getComputedStyle(i).fontSize,10),p=i.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([i,B_({content:i.innerHTML,width:f,height:h,transform:l,extra:c,watchable:!0})])}}},RS=new RegExp('"',"ug"),q_=[1105920,1112319],j_=Re(Re(Re(Re({},{FontAwesome:{normal:"fas",400:"fas"}}),mE),LT),EE),vp=Object.keys(j_).reduce(function(r,e){return r[e.toLowerCase()]=j_[e],r},{}),qA=Object.keys(vp).reduce(function(r,e){var i=vp[e];return r[e]=i[900]||Xi(Object.entries(i))[0][1],r},{});function jA(r){var e=r.replace(RS,"");return fS(Xi(e)[0]||"")}function YA(r){var e=r.getPropertyValue("font-feature-settings").includes("ss01"),i=r.getPropertyValue("content"),a=i.replace(RS,""),l=a.codePointAt(0),c=l>=q_[0]&&l<=q_[1],f=a.length===2?a[0]===a[1]:!1;return c||f||e}function ZA(r,e){var i=r.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),l=isNaN(a)?"normal":a;return(vp[i]||{})[l]||qA[i]}function Y_(r,e){var i="".concat(UT).concat(e.replace(":","-"));return new Promise(function(a,l){if(r.getAttribute(i)!==null)return a();var c=_o(r.children),f=c.filter(function(U){return U.getAttribute(sp)===e})[0],h=Sr.getComputedStyle(r,e),m=h.getPropertyValue("font-family"),p=m.match(FT),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return r.removeChild(f),a();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=ZA(m,_),E=jA(g),D=p[0].startsWith("FontAwesome"),b=YA(h),y=ym(S,E),P=y;if(D){var F=rA(E);F.iconName&&F.prefix&&(y=F.iconName,S=F.prefix)}if(y&&!b&&(!f||f.getAttribute(pm)!==S||f.getAttribute(mm)!==P)){r.setAttribute(i,P),f&&r.removeChild(f);var L=IA(),O=L.extra;O.attributes[sp]=e,pp(y,S).then(function(U){var B=Sm(Re(Re({},L),{},{icons:{main:U,mask:yS()},prefix:S,iconName:P,extra:O,watchable:!0})),T=tn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?r.insertBefore(T,r.firstChild):r.appendChild(T),T.outerHTML=B.map(function(z){return Ul(z)}).join(`
`),r.removeAttribute(i),a()}).catch(l)}else a()}else a()})}function KA(r){return Promise.all([Y_(r,"::before"),Y_(r,"::after")])}function QA(r){return r.parentNode!==document.head&&!~PT.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(sp)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var $A=function(e){return!!e&&nS.some(function(i){return e.includes(i)})},JA=function(e){if(!e)return[];var i=new Set,a=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=Ru(a),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;if($A(f)){var h=nS.reduce(function(m,p){return m.replace(p,"")},f);h!==""&&h!=="*"&&i.add(h)}}}catch(m){l.e(m)}finally{l.f()}return i};function Z_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ba){var i;if(e)i=r;else if(st.searchPseudoElementsFullScan)i=r.querySelectorAll("*");else{var a=new Set,l=Ru(document.styleSheets),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;try{var h=Ru(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=JA(p.selectorText),v=Ru(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;a.add(S)}}catch(D){v.e(D)}finally{v.f()}}}catch(D){h.e(D)}finally{h.f()}}catch(D){st.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(D.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(D){l.e(D)}finally{l.f()}if(!a.size)return;var E=Array.from(a).join(", ");try{i=r.querySelectorAll(E)}catch{}}return new Promise(function(D,b){var y=_o(i).filter(QA).map(KA),P=bm.begin("searchPseudoElements");TS(),Promise.all(y).then(function(){P(),gp(),D()}).catch(function(){P(),gp(),b()})})}}var e2={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=Z_,i}}},provides:function(e){e.pseudoElements2svg=function(i){var a=i.node,l=a===void 0?tn:a;st.searchPseudoElements&&Z_(l)}}},K_=!1,t2={mixout:function(){return{dom:{unwatch:function(){TS(),K_=!0}}}},hooks:function(){return{bootstrap:function(){k_(fp("mutationObserverCallbacks",{}))},noAuto:function(){LA()},watch:function(i){var a=i.observeMutationsRoot;K_?gp():k_(fp("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Q_=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,l){var c=l.toLowerCase().split("-"),f=c[0],h=c.slice(1).join("-");if(f&&h==="h")return a.flipX=!0,a;if(f&&h==="v")return a.flipY=!0,a;if(h=parseFloat(h),isNaN(h))return a;switch(f){case"grow":a.size=a.size+h;break;case"shrink":a.size=a.size-h;break;case"left":a.x=a.x-h;break;case"right":a.x=a.x+h;break;case"up":a.y=a.y-h;break;case"down":a.y=a.y+h;break;case"rotate":a.rotate=a.rotate+h;break}return a},i)},n2={mixout:function(){return{parse:{transform:function(i){return Q_(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-transform");return l&&(i.transform=Q_(l)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var a=i.main,l=i.transform,c=i.containerWidth,f=i.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),_="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(f/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:Re({},S.outer),children:[{tag:"g",attributes:Re({},S.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:Re(Re({},a.icon.attributes),S.path)}]}]}}}},ph={x:0,y:0,width:"100%",height:"100%"};function $_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||e)&&(r.attributes.fill="black"),r}function i2(r){return r.tag==="g"?r.children:[r]}var a2={hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-mask"),c=l?$u(l.split(" ").map(function(f){return f.trim()})):yS();return c.prefix||(c.prefix=br()),i.mask=c,i.maskId=a.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var a=i.children,l=i.attributes,c=i.main,f=i.mask,h=i.maskId,m=i.transform,p=c.width,_=c.icon,v=f.width,g=f.icon,S=ZT({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:Re(Re({},ph),{},{fill:"white"})},D=_.children?{children:_.children.map($_)}:{},b={tag:"g",attributes:Re({},S.inner),children:[$_(Re({tag:_.tag,attributes:Re(Re({},_.attributes),S.path)},D))]},y={tag:"g",attributes:Re({},S.outer),children:[b]},P="mask-".concat(h||L_()),F="clip-".concat(h||L_()),L={tag:"mask",attributes:Re(Re({},ph),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:i2(g)},L]};return a.push(O,{tag:"rect",attributes:Re({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(P,")")},ph)}),{children:a,attributes:l}}}},r2={provides:function(e){var i=!1;Sr.matchMedia&&(i=Sr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],l={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:Re(Re({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=Re(Re({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Re(Re({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||h.children.push({tag:"animate",attributes:Re(Re({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Re(Re({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(h),a.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:Re(Re({},f),{},{values:"1;0;0;0;0;1;"})}]}),i||a.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Re(Re({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},s2={hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-symbol"),c=l===null?!1:l===""?!0:l;return i.symbol=c,i}}}},o2=[$T,VA,kA,XA,WA,e2,t2,n2,a2,r2,s2];pA(o2,{mixoutsTo:vi});vi.noAuto;var ss=vi.config;vi.library;vi.dom;var CS=vi.parse;vi.findIconDefinition;vi.toHtml;var l2=vi.icon;vi.layer;vi.text;vi.counter;var mh={exports:{}},hl={},gh={exports:{}},vh={};var J_;function c2(){return J_||(J_=1,(function(r){function e(C,H){var J=C.length;C.push(H);e:for(;0<J;){var he=J-1>>>1,Ee=C[he];if(0<l(Ee,H))C[he]=H,C[J]=Ee,J=he;else break e}}function i(C){return C.length===0?null:C[0]}function a(C){if(C.length===0)return null;var H=C[0],J=C.pop();if(J!==H){C[0]=J;e:for(var he=0,Ee=C.length,N=Ee>>>1;he<N;){var k=2*(he+1)-1,pe=C[k],be=k+1,Ae=C[be];if(0>l(pe,J))be<Ee&&0>l(Ae,pe)?(C[he]=Ae,C[be]=J,he=be):(C[he]=pe,C[k]=J,he=k);else if(be<Ee&&0>l(Ae,J))C[he]=Ae,C[be]=J,he=be;else break e}}return H}function l(C,H){var J=C.sortIndex-H.sortIndex;return J!==0?J:C.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,D=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function L(C){for(var H=i(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=C)a(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function O(C){if(D=!1,L(C),!E)if(i(m)!==null)E=!0,U||(U=!0,Z());else{var H=i(p);H!==null&&$(O,H.startTime-C)}}var U=!1,B=-1,T=5,z=-1;function q(){return b?!0:!(r.unstable_now()-z<T)}function V(){if(b=!1,U){var C=r.unstable_now();z=C;var H=!0;try{e:{E=!1,D&&(D=!1,P(B),B=-1),S=!0;var J=g;try{t:{for(L(C),v=i(m);v!==null&&!(v.expirationTime>C&&q());){var he=v.callback;if(typeof he=="function"){v.callback=null,g=v.priorityLevel;var Ee=he(v.expirationTime<=C);if(C=r.unstable_now(),typeof Ee=="function"){v.callback=Ee,L(C),H=!0;break t}v===i(m)&&a(m),L(C)}else a(m);v=i(m)}if(v!==null)H=!0;else{var N=i(p);N!==null&&$(O,N.startTime-C),H=!1}}break e}finally{v=null,g=J,S=!1}H=void 0}}finally{H?Z():U=!1}}}var Z;if(typeof F=="function")Z=function(){F(V)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,de=fe.port2;fe.port1.onmessage=V,Z=function(){de.postMessage(null)}}else Z=function(){y(V,0)};function $(C,H){B=y(function(){C(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(C){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var J=g;g=H;try{return C()}finally{g=J}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var J=g;g=C;try{return H()}finally{g=J}},r.unstable_scheduleCallback=function(C,H,J){var he=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,C){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=J+Ee,C={id:_++,callback:H,priorityLevel:C,startTime:J,expirationTime:Ee,sortIndex:-1},J>he?(C.sortIndex=J,e(p,C),i(m)===null&&C===i(p)&&(D?(P(B),B=-1):D=!0,$(O,J-he))):(C.sortIndex=Ee,e(m,C),E||S||(E=!0,U||(U=!0,Z()))),C},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(C){var H=g;return function(){var J=g;g=H;try{return C.apply(this,arguments)}finally{g=J}}}})(vh)),vh}var ex;function u2(){return ex||(ex=1,gh.exports=c2()),gh.exports}var _h={exports:{}},Bn={};var tx;function f2(){if(tx)return Bn;tx=1;var r=um();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=_,a.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Bn.requestFormReset=function(m){a.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var nx;function d2(){if(nx)return _h.exports;nx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_h.exports=f2(),_h.exports}var ix;function h2(){if(ix)return hl;ix=1;var r=u2(),e=um(),i=d2();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var s=t,o=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var x=!1,w=u.child;w;){if(w===s){x=!0,s=u,o=d;break}if(w===o){x=!0,o=u,s=d;break}w=w.sibling}if(!x){for(w=d.child;w;){if(w===s){x=!0,s=d,o=u;break}if(w===o){x=!0,o=d,s=u;break}w=w.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),F=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case U:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var $=Array.isArray,C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},he=[],Ee=-1;function N(t){return{current:t}}function k(t){0>Ee||(t.current=he[Ee],he[Ee]=null,Ee--)}function pe(t,n){Ee++,he[Ee]=t.current,t.current=n}var be=N(null),Ae=N(null),ee=N(null),ce=N(null);function _e(t,n){switch(pe(ee,n),pe(Ae,t),pe(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Gv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Gv(n),t=Vv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(be),pe(be,t)}function Le(){k(be),k(Ae),k(ee)}function Je(t){t.memoizedState!==null&&pe(ce,t);var n=be.current,s=Vv(n,t.type);n!==s&&(pe(Ae,t),pe(be,s))}function Be(t){Ae.current===t&&(k(be),k(Ae)),ce.current===t&&(k(ce),ll._currentValue=J)}var Ne,qe;function ft(t){if(Ne===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Ne=n&&n[1]||"",qe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+t+qe}var ut=!1;function tt(t,n){if(!t||ut)return"";ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ue){var le=ue}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ue){le=ue}t.call(Me.prototype)}}else{try{throw Error()}catch(ue){le=ue}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],w=d[1];if(x&&w){var G=x.split(`
`),ne=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ne.length)for(o=G.length-1,u=ne.length-1;1<=o&&0<=u&&G[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ne[u]){var xe=`
`+G[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ft(s):""}function Ct(t,n){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return ft("Activity");default:return""}}function Yt(t){try{var n="",s=null;do n+=Ct(t,s),s=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,nn=r.unstable_scheduleCallback,Qt=r.unstable_cancelCallback,ln=r.unstable_shouldYield,Y=r.unstable_requestPaint,Xt=r.unstable_now,Ut=r.unstable_getCurrentPriorityLevel,I=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,se=r.unstable_LowPriority,ge=r.unstable_IdlePriority,Ce=r.log,Oe=r.unstable_setDisableYieldValue,me=null,ve=null;function De(t){if(typeof Ce=="function"&&Oe(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(me,t)}catch{}}var Ve=Math.clz32?Math.clz32:nt,ze=Math.log,Pe=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(ze(t)/Pe|0)|0}var it=256,dt=262144,W=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=we(o):(x&=w,x!==0?u=we(x):s||(s=w&~t,s!==0&&(u=we(s))))):(w=o&~d,w!==0?u=we(w):x!==0?u=we(x):s||(s=o&~t,s!==0&&(u=we(s)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Qe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,s,o,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,ne=t.hiddenUpdates;for(s=x&~s;0<s;){var xe=31-Ve(s),Me=1<<xe;w[xe]=0,G[xe]=-1;var le=ne[xe];if(le!==null)for(ne[xe]=null,xe=0;xe<le.length;xe++){var ue=le[xe];ue!==null&&(ue.lane&=-536870913)}s&=~Me}o!==0&&zt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function zt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ii(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var o=31-Ve(s),u=1<<o;u&n|t[o]&n&&(t[o]|=n),s&=~u}}function ai(t,n){var s=n&-n;return s=(s&42)!==0?1:bo(s),(s&(t.suspendedLanes|n))!==0?0:s}function bo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Eo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:f_(t.type))}function fs(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var Wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Wi,Dn="__reactProps$"+Wi,jn="__reactContainer$"+Wi,Tr="__reactEvents$"+Wi,Fl="__reactListeners$"+Wi,Bl="__reactHandles$"+Wi,Ar="__reactResources$"+Wi,Ha="__reactMarker$"+Wi;function Ga(t){delete t[mn],delete t[Dn],delete t[Tr],delete t[Fl],delete t[Bl]}function sa(t){var n=t[mn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[jn]||s[mn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Zv(t);t!==null;){if(s=t[mn])return s;t=Zv(t)}return n}t=s,s=t.parentNode}return null}function oa(t){if(t=t[mn]||t[jn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Rr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Va(t){var n=t[Ar];return n||(n=t[Ar]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Ha]=!0}var Hl=new Set,R={};function j(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)Hl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Fe={};function We(t){return $t.call(Fe,t)?!0:$t.call(re,t)?!1:ae.test(t)?Fe[t]=!0:(re[t]=!0,!1)}function Ie(t,n,s){if(We(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ze(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ye(t,n,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dt(t){if(!t._valueTracker){var n=mt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return t&&(o=mt(t)?t.checked?"true":"false":t.value),t=o,t!==s?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Bt(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,s,o,u,d,x,w){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?xt(t,x,at(n)):s!=null?xt(t,x,at(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+at(w):t.removeAttribute("name")}function Fn(t,n,s,o,u,d,x,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Dt(t);return}s=s!=null?""+at(s):"",n=n!=null?""+at(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Dt(t)}function xt(t,n,s){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,n,s,o){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+at(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ri(t,n,s){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+at(s):""}function Ni(t,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if($(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=at(n),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Dt(t)}function si(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,s):typeof s!="number"||s===0||Ht.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Li(t,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&s[u]!==o&&sn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cr(t){return ka.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function la(){}var rf=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ds=null,hs=null;function Hm(t){var n=oa(t);if(n&&(t=n.stateNode)){var s=t[Dn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Bt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==t&&o.form===t.form){var u=o[Dn]||null;if(!u)throw Error(a(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===t.form&&rn(o)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Mn(t,!!s.multiple,n,!1)}}}var of=!1;function Gm(t,n,s){if(of)return t(n,s);of=!0;try{var o=t(n);return o}finally{if(of=!1,(ds!==null||hs!==null)&&(Rc(),ds&&(n=ds,t=hs,hs=ds=null,Hm(n),t)))for(n=0;n<t.length;n++)Hm(t[n])}}function To(t,n){var s=t.stateNode;if(s===null)return null;var o=s[Dn]||null;if(o===null)return null;s=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(ca)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{lf=!1}var Xa=null,cf=null,Gl=null;function Vm(){if(Gl)return Gl;var t,n=cf,s=n.length,o,u="value"in Xa?Xa.value:Xa.textContent,d=u.length;for(t=0;t<s&&n[t]===u[t];t++);var x=s-t;for(o=1;o<=x&&n[s-o]===u[d-o];o++);return Gl=u.slice(t,1<o?1-o:void 0)}function Vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function km(){return!1}function Yn(t){function n(s,o,u,d,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?kl:km,this.isPropagationStopped=km,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),n}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Yn(wr),Ro=v({},wr,{view:0,detail:0}),Sb=Yn(Ro),uf,ff,Co,Wl=v({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(uf=t.screenX-Co.screenX,ff=t.screenY-Co.screenY):ff=uf=0,Co=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Xm=Yn(Wl),bb=v({},Wl,{dataTransfer:0}),Mb=Yn(bb),Eb=v({},Ro,{relatedTarget:0}),df=Yn(Eb),Tb=v({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ab=Yn(Tb),Rb=v({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cb=Yn(Rb),wb=v({},wr,{data:0}),Wm=Yn(wb),Db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ub(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Lb[t])?!!n[t]:!1}function hf(){return Ub}var Ob=v({},Ro,{key:function(t){if(t.key){var n=Db[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pb=Yn(Ob),Ib=v({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qm=Yn(Ib),zb=v({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),Fb=Yn(zb),Bb=v({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hb=Yn(Bb),Gb=v({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vb=Yn(Gb),kb=v({},wr,{newState:0,oldState:0}),Xb=Yn(kb),Wb=[9,13,27,32],pf=ca&&"CompositionEvent"in window,wo=null;ca&&"documentMode"in document&&(wo=document.documentMode);var qb=ca&&"TextEvent"in window&&!wo,jm=ca&&(!pf||wo&&8<wo&&11>=wo),Ym=" ",Zm=!1;function Km(t,n){switch(t){case"keyup":return Wb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function jb(t,n){switch(t){case"compositionend":return Qm(n);case"keypress":return n.which!==32?null:(Zm=!0,Ym);case"textInput":return t=n.data,t===Ym&&Zm?null:t;default:return null}}function Yb(t,n){if(ps)return t==="compositionend"||!pf&&Km(t,n)?(t=Vm(),Gl=cf=Xa=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jm&&n.locale!=="ko"?null:n.data;default:return null}}var Zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zb[t.type]:n==="textarea"}function Jm(t,n,s,o){ds?hs?hs.push(o):hs=[o]:ds=o,n=Oc(n,"onChange"),0<n.length&&(s=new Xl("onChange","change",null,s,o),t.push({event:s,listeners:n}))}var Do=null,No=null;function Kb(t){Pv(t,0)}function ql(t){var n=Rr(t);if(rn(n))return t}function eg(t,n){if(t==="change")return n}var tg=!1;if(ca){var mf;if(ca){var gf="oninput"in document;if(!gf){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),gf=typeof ng.oninput=="function"}mf=gf}else mf=!1;tg=mf&&(!document.documentMode||9<document.documentMode)}function ig(){Do&&(Do.detachEvent("onpropertychange",ag),No=Do=null)}function ag(t){if(t.propertyName==="value"&&ql(No)){var n=[];Jm(n,No,t,sf(t)),Gm(Kb,n)}}function Qb(t,n,s){t==="focusin"?(ig(),Do=n,No=s,Do.attachEvent("onpropertychange",ag)):t==="focusout"&&ig()}function $b(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(No)}function Jb(t,n){if(t==="click")return ql(n)}function e1(t,n){if(t==="input"||t==="change")return ql(n)}function t1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:t1;function Lo(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!$t.call(n,u)||!oi(t[u],n[u]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,n){var s=rg(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=n&&o>=n)return{node:s,offset:n-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=rg(s)}}function og(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?og(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Zt(t.document)}return n}function vf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var n1=ca&&"documentMode"in document&&11>=document.documentMode,ms=null,_f=null,Uo=null,xf=!1;function cg(t,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;xf||ms==null||ms!==Zt(o)||(o=ms,"selectionStart"in o&&vf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Uo&&Lo(Uo,o)||(Uo=o,o=Oc(_f,"onSelect"),0<o.length&&(n=new Xl("onSelect","select",null,n,s),t.push({event:n,listeners:o}),n.target=ms)))}function Dr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var gs={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},yf={},ug={};ca&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Nr(t){if(yf[t])return yf[t];if(!gs[t])return t;var n=gs[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in ug)return yf[t]=n[s];return t}var fg=Nr("animationend"),dg=Nr("animationiteration"),hg=Nr("animationstart"),i1=Nr("transitionrun"),a1=Nr("transitionstart"),r1=Nr("transitioncancel"),pg=Nr("transitionend"),mg=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function Ui(t,n){mg.set(t,n),j(n,[t])}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],vs=0,bf=0;function Yl(){for(var t=vs,n=bf=vs=0;n<t;){var s=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&gg(s,u,d)}}function Zl(t,n,s,o){_i[vs++]=t,_i[vs++]=n,_i[vs++]=s,_i[vs++]=o,bf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Mf(t,n,s,o){return Zl(t,n,s,o),Kl(t)}function Lr(t,n){return Zl(t,null,null,n),Kl(t)}function gg(t,n,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ve(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=s|536870912),d):null}function Kl(t){if(50<tl)throw tl=0,Ld=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _s={};function s1(t,n,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,s,o){return new s1(t,n,s,o)}function Ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var s=t.alternate;return s===null?(s=li(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function vg(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ql(t,n,s,o,u,d){var x=0;if(o=t,typeof t=="function")Ef(t)&&(x=1);else if(typeof t=="string")x=fM(t,s,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=li(31,s,n,u),t.elementType=z,t.lanes=d,t;case D:return Ur(s.children,u,d,n);case b:x=8,u|=24;break;case y:return t=li(12,s,n,u|2),t.elementType=y,t.lanes=d,t;case O:return t=li(13,s,n,u),t.elementType=O,t.lanes=d,t;case U:return t=li(19,s,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break e;case P:x=9;break e;case L:x=11;break e;case B:x=14;break e;case T:x=16,o=null;break e}x=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=li(x,s,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ur(t,n,s,o){return t=li(7,t,o,n),t.lanes=s,t}function Tf(t,n,s){return t=li(6,t,null,n),t.lanes=s,t}function _g(t){var n=li(18,null,null,0);return n.stateNode=t,n}function Af(t,n,s){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xg=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var s=xg.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Yt(n)},xg.set(t,n),n)}return{value:t,source:n,stack:Yt(n)}}var xs=[],ys=0,$l=null,Oo=0,yi=[],Si=0,Wa=null,ji=1,Yi="";function fa(t,n){xs[ys++]=Oo,xs[ys++]=$l,$l=t,Oo=n}function yg(t,n,s){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=Wa,Wa=t;var o=ji;t=Yi;var u=32-Ve(o)-1;o&=~(1<<u),s+=1;var d=32-Ve(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ji=1<<32-Ve(n)+u|s<<u|o,Yi=d+t}else ji=1<<d|s<<u|o,Yi=t}function Rf(t){t.return!==null&&(fa(t,1),yg(t,1,0))}function Cf(t){for(;t===$l;)$l=xs[--ys],xs[ys]=null,Oo=xs[--ys],xs[ys]=null;for(;t===Wa;)Wa=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null,ji=yi[--Si],yi[Si]=null}function Sg(t,n){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=Wa,ji=n.id,Yi=n.overflow,Wa=t}var Nn=null,Jt=null,Tt=!1,qa=null,bi=!1,wf=Error(a(519));function ja(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(xi(n,t)),wf}function bg(t){var n=t.stateNode,s=t.type,o=t.memoizedProps;switch(n[mn]=t,n[Dn]=o,s){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(s=0;s<il.length;s++)St(il[s],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||Bv(n.textContent,s)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||ja(t,!0)}function Mg(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Ss(t){if(t!==Nn)return!1;if(!Tt)return Mg(t),Tt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||jd(t.type,t.memoizedProps)),s=!s),s&&Jt&&ja(t),Mg(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=Yv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=Yv(t)}else n===27?(n=Jt,or(t.type)?(t=$d,$d=null,Jt=t):Jt=n):Jt=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Or(){Jt=Nn=null,Tt=!1}function Df(){var t=qa;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),qa=null),t}function Po(t){qa===null?qa=[t]:qa.push(t)}var Nf=N(null),Pr=null,da=null;function Ya(t,n,s){pe(Nf,n._currentValue),n._currentValue=s}function ha(t){t._currentValue=Nf.current,k(Nf)}function Lf(t,n,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===s)break;t=t.return}}function Uf(t,n,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),Lf(d.return,s,t),o||(x=null);break e}d=w.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Lf(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function bs(t,n,s,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var w=u.type;oi(u.pendingProps.value,x.value)||(t!==null?t.push(w):t=[w])}}else if(u===ce.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ll):t=[ll])}u=u.return}t!==null&&Uf(n,t,s,o),n.flags|=262144}function Jl(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ir(t){Pr=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Eg(Pr,t)}function ec(t,n){return Pr===null&&Ir(t),Eg(t,n)}function Eg(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},da===null){if(t===null)throw Error(a(308));da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else da=da.next=n;return s}var o1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},l1=r.unstable_scheduleCallback,c1=r.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Of(){return{controller:new o1,data:new Map,refCount:0}}function Io(t){t.refCount--,t.refCount===0&&l1(c1,function(){t.controller.abort()})}var zo=null,Pf=0,Ms=0,Es=null;function u1(t,n){if(zo===null){var s=zo=[];Pf=0,Ms=Fd(),Es={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Pf++,n.then(Tg,Tg),n}function Tg(){if(--Pf===0&&zo!==null){Es!==null&&(Es.status="fulfilled");var t=zo;zo=null,Ms=0,Es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function f1(t,n){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Ag=C.S;C.S=function(t,n){cv=Xt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&u1(t,n),Ag!==null&&Ag(t,n)};var zr=N(null);function If(){var t=zr.current;return t!==null?t:Kt.pooledCache}function tc(t,n){n===null?pe(zr,zr.current):pe(zr,n.pool)}function Rg(){var t=If();return t===null?null:{parent:vn._currentValue,pool:t}}var Ts=Error(a(460)),zf=Error(a(474)),nc=Error(a(542)),ic={then:function(){}};function Cg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wg(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(la,la),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ng(t),t;default:if(typeof n.status=="string")n.then(la,la);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ng(t),t}throw Br=n,Ts}}function Fr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Br=s,Ts):s}}var Br=null;function Dg(){if(Br===null)throw Error(a(459));var t=Br;return Br=null,t}function Ng(t){if(t===Ts||t===nc)throw Error(a(483))}var As=null,Fo=0;function ac(t){var n=Fo;return Fo+=1,As===null&&(As=[]),wg(As,t,n)}function Bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function rc(t,n){throw n.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lg(t){function n(K,X){if(t){var te=K.deletions;te===null?(K.deletions=[X],K.flags|=16):te.push(X)}}function s(K,X){if(!t)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=ua(K,X),K.index=0,K.sibling=null,K}function d(K,X,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<X?(K.flags|=67108866,X):te):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function x(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function w(K,X,te,Se){return X===null||X.tag!==6?(X=Tf(te,K.mode,Se),X.return=K,X):(X=u(X,te),X.return=K,X)}function G(K,X,te,Se){var rt=te.type;return rt===D?xe(K,X,te.props.children,Se,te.key):X!==null&&(X.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Fr(rt)===X.type)?(X=u(X,te.props),Bo(X,te),X.return=K,X):(X=Ql(te.type,te.key,te.props,null,K.mode,Se),Bo(X,te),X.return=K,X)}function ne(K,X,te,Se){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Af(te,K.mode,Se),X.return=K,X):(X=u(X,te.children||[]),X.return=K,X)}function xe(K,X,te,Se,rt){return X===null||X.tag!==7?(X=Ur(te,K.mode,Se,rt),X.return=K,X):(X=u(X,te),X.return=K,X)}function Me(K,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tf(""+X,K.mode,te),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return te=Ql(X.type,X.key,X.props,null,K.mode,te),Bo(te,X),te.return=K,te;case E:return X=Af(X,K.mode,te),X.return=K,X;case T:return X=Fr(X),Me(K,X,te)}if($(X)||Z(X))return X=Ur(X,K.mode,te,null),X.return=K,X;if(typeof X.then=="function")return Me(K,ac(X),te);if(X.$$typeof===F)return Me(K,ec(K,X),te);rc(K,X)}return null}function le(K,X,te,Se){var rt=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return rt!==null?null:w(K,X,""+te,Se);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===rt?G(K,X,te,Se):null;case E:return te.key===rt?ne(K,X,te,Se):null;case T:return te=Fr(te),le(K,X,te,Se)}if($(te)||Z(te))return rt!==null?null:xe(K,X,te,Se,null);if(typeof te.then=="function")return le(K,X,ac(te),Se);if(te.$$typeof===F)return le(K,X,ec(K,te),Se);rc(K,te)}return null}function ue(K,X,te,Se,rt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return K=K.get(te)||null,w(X,K,""+Se,rt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case S:return K=K.get(Se.key===null?te:Se.key)||null,G(X,K,Se,rt);case E:return K=K.get(Se.key===null?te:Se.key)||null,ne(X,K,Se,rt);case T:return Se=Fr(Se),ue(K,X,te,Se,rt)}if($(Se)||Z(Se))return K=K.get(te)||null,xe(X,K,Se,rt,null);if(typeof Se.then=="function")return ue(K,X,te,ac(Se),rt);if(Se.$$typeof===F)return ue(K,X,te,ec(X,Se),rt);rc(X,Se)}return null}function Ke(K,X,te,Se){for(var rt=null,Nt=null,$e=X,vt=X=0,Mt=null;$e!==null&&vt<te.length;vt++){$e.index>vt?(Mt=$e,$e=null):Mt=$e.sibling;var Lt=le(K,$e,te[vt],Se);if(Lt===null){$e===null&&($e=Mt);break}t&&$e&&Lt.alternate===null&&n(K,$e),X=d(Lt,X,vt),Nt===null?rt=Lt:Nt.sibling=Lt,Nt=Lt,$e=Mt}if(vt===te.length)return s(K,$e),Tt&&fa(K,vt),rt;if($e===null){for(;vt<te.length;vt++)$e=Me(K,te[vt],Se),$e!==null&&(X=d($e,X,vt),Nt===null?rt=$e:Nt.sibling=$e,Nt=$e);return Tt&&fa(K,vt),rt}for($e=o($e);vt<te.length;vt++)Mt=ue($e,K,vt,te[vt],Se),Mt!==null&&(t&&Mt.alternate!==null&&$e.delete(Mt.key===null?vt:Mt.key),X=d(Mt,X,vt),Nt===null?rt=Mt:Nt.sibling=Mt,Nt=Mt);return t&&$e.forEach(function(dr){return n(K,dr)}),Tt&&fa(K,vt),rt}function lt(K,X,te,Se){if(te==null)throw Error(a(151));for(var rt=null,Nt=null,$e=X,vt=X=0,Mt=null,Lt=te.next();$e!==null&&!Lt.done;vt++,Lt=te.next()){$e.index>vt?(Mt=$e,$e=null):Mt=$e.sibling;var dr=le(K,$e,Lt.value,Se);if(dr===null){$e===null&&($e=Mt);break}t&&$e&&dr.alternate===null&&n(K,$e),X=d(dr,X,vt),Nt===null?rt=dr:Nt.sibling=dr,Nt=dr,$e=Mt}if(Lt.done)return s(K,$e),Tt&&fa(K,vt),rt;if($e===null){for(;!Lt.done;vt++,Lt=te.next())Lt=Me(K,Lt.value,Se),Lt!==null&&(X=d(Lt,X,vt),Nt===null?rt=Lt:Nt.sibling=Lt,Nt=Lt);return Tt&&fa(K,vt),rt}for($e=o($e);!Lt.done;vt++,Lt=te.next())Lt=ue($e,K,vt,Lt.value,Se),Lt!==null&&(t&&Lt.alternate!==null&&$e.delete(Lt.key===null?vt:Lt.key),X=d(Lt,X,vt),Nt===null?rt=Lt:Nt.sibling=Lt,Nt=Lt);return t&&$e.forEach(function(bM){return n(K,bM)}),Tt&&fa(K,vt),rt}function jt(K,X,te,Se){if(typeof te=="object"&&te!==null&&te.type===D&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var rt=te.key;X!==null;){if(X.key===rt){if(rt=te.type,rt===D){if(X.tag===7){s(K,X.sibling),Se=u(X,te.props.children),Se.return=K,K=Se;break e}}else if(X.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Fr(rt)===X.type){s(K,X.sibling),Se=u(X,te.props),Bo(Se,te),Se.return=K,K=Se;break e}s(K,X);break}else n(K,X);X=X.sibling}te.type===D?(Se=Ur(te.props.children,K.mode,Se,te.key),Se.return=K,K=Se):(Se=Ql(te.type,te.key,te.props,null,K.mode,Se),Bo(Se,te),Se.return=K,K=Se)}return x(K);case E:e:{for(rt=te.key;X!==null;){if(X.key===rt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(K,X.sibling),Se=u(X,te.children||[]),Se.return=K,K=Se;break e}else{s(K,X);break}else n(K,X);X=X.sibling}Se=Af(te,K.mode,Se),Se.return=K,K=Se}return x(K);case T:return te=Fr(te),jt(K,X,te,Se)}if($(te))return Ke(K,X,te,Se);if(Z(te)){if(rt=Z(te),typeof rt!="function")throw Error(a(150));return te=rt.call(te),lt(K,X,te,Se)}if(typeof te.then=="function")return jt(K,X,ac(te),Se);if(te.$$typeof===F)return jt(K,X,ec(K,te),Se);rc(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(s(K,X.sibling),Se=u(X,te),Se.return=K,K=Se):(s(K,X),Se=Tf(te,K.mode,Se),Se.return=K,K=Se),x(K)):s(K,X)}return function(K,X,te,Se){try{Fo=0;var rt=jt(K,X,te,Se);return As=null,rt}catch($e){if($e===Ts||$e===nc)throw $e;var Nt=li(29,$e,null,K.mode);return Nt.lanes=Se,Nt.return=K,Nt}}}var Hr=Lg(!0),Ug=Lg(!1),Za=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Kl(t),gg(t,null,s),n}return Zl(t,o,n,s),Kl(t)}function Ho(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ii(t,s)}}function Hf(t,n){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Gf=!1;function Go(){if(Gf){var t=Es;if(t!==null)throw t}}function Vo(t,n,s,o){Gf=!1;var u=t.updateQueue;Za=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,ne=G.next;G.next=null,x===null?d=ne:x.next=ne,x=G;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,w=xe.lastBaseUpdate,w!==x&&(w===null?xe.firstBaseUpdate=ne:w.next=ne,xe.lastBaseUpdate=G))}if(d!==null){var Me=u.baseState;x=0,xe=ne=G=null,w=d;do{var le=w.lane&-536870913,ue=le!==w.lane;if(ue?(bt&le)===le:(o&le)===le){le!==0&&le===Ms&&(Gf=!0),xe!==null&&(xe=xe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ke=t,lt=w;le=n;var jt=s;switch(lt.tag){case 1:if(Ke=lt.payload,typeof Ke=="function"){Me=Ke.call(jt,Me,le);break e}Me=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=lt.payload,le=typeof Ke=="function"?Ke.call(jt,Me,le):Ke,le==null)break e;Me=v({},Me,le);break e;case 2:Za=!0}}le=w.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xe===null?(ne=xe=ue,G=Me):xe=xe.next=ue,x|=le;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ue=w,w=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);xe===null&&(G=Me),u.baseState=G,u.firstBaseUpdate=ne,u.lastBaseUpdate=xe,d===null&&(u.shared.lanes=0),nr|=x,t.lanes=x,t.memoizedState=Me}}function Og(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function Pg(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Og(s[t],n)}var Rs=N(null),sc=N(0);function Ig(t,n){t=ba,pe(sc,t),pe(Rs,n),ba=t|n.baseLanes}function Vf(){pe(sc,ba),pe(Rs,Rs.current)}function kf(){ba=sc.current,k(Rs),k(sc)}var ci=N(null),Mi=null;function $a(t){var n=t.alternate;pe(hn,hn.current&1),pe(ci,t),Mi===null&&(n===null||Rs.current!==null||n.memoizedState!==null)&&(Mi=t)}function Xf(t){pe(hn,hn.current),pe(ci,t),Mi===null&&(Mi=t)}function zg(t){t.tag===22?(pe(hn,hn.current),pe(ci,t),Mi===null&&(Mi=t)):Ja()}function Ja(){pe(hn,hn.current),pe(ci,ci.current)}function ui(t){k(ci),Mi===t&&(Mi=null),k(hn)}var hn=N(0);function oc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Kd(s)||Qd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,gt=null,Wt=null,_n=null,lc=!1,Cs=!1,Gr=!1,cc=0,ko=0,ws=null,d1=0;function cn(){throw Error(a(321))}function Wf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!oi(t[s],n[s]))return!1;return!0}function qf(t,n,s,o,u,d){return pa=d,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?y0:od,Gr=!1,d=s(o,u),Gr=!1,Cs&&(d=Bg(n,s,o,u)),Fg(t),d}function Fg(t){C.H=qo;var n=Wt!==null&&Wt.next!==null;if(pa=0,_n=Wt=gt=null,lc=!1,ko=0,ws=null,n)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&Jl(t)&&(xn=!0))}function Bg(t,n,s,o){gt=t;var u=0;do{if(Cs&&(ws=null),ko=0,Cs=!1,25<=u)throw Error(a(301));if(u+=1,_n=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}C.H=S0,d=n(s,o)}while(Cs);return d}function h1(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(gt.flags|=1024),n}function jf(){var t=cc!==0;return cc=0,t}function Yf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Zf(t){if(lc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}lc=!1}pa=0,_n=Wt=gt=null,Cs=!1,ko=cc=0,ws=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?gt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Wt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=_n===null?gt.memoizedState:_n.next;if(n!==null)_n=n,Wt=t;else{if(t===null)throw gt.alternate===null?Error(a(467)):Error(a(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},_n===null?gt.memoizedState=_n=t:_n=_n.next=t}return _n}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=ko;return ko+=1,ws===null&&(ws=[]),t=wg(ws,t,n),n=gt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?y0:od),t}function fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===F)return Ln(t)}throw Error(a(438,String(t)))}function Kf(t){var n=null,s=gt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=uc(),gt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),o=0;o<t;o++)s[o]=q;return n.index++,s}function ma(t,n){return typeof n=="function"?n(t):n}function dc(t){var n=pn();return Qf(n,Wt,t)}function Qf(t,n,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=x=null,G=null,ne=n,xe=!1;do{var Me=ne.lane&-536870913;if(Me!==ne.lane?(bt&Me)===Me:(pa&Me)===Me){var le=ne.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Me===Ms&&(xe=!0);else if((pa&le)===le){ne=ne.next,le===Ms&&(xe=!0);continue}else Me={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(w=G=Me,x=d):G=G.next=Me,gt.lanes|=le,nr|=le;Me=ne.action,Gr&&s(d,Me),d=ne.hasEagerState?ne.eagerState:s(d,Me)}else le={lane:Me,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(w=G=le,x=d):G=G.next=le,gt.lanes|=Me,nr|=Me;ne=ne.next}while(ne!==null&&ne!==n);if(G===null?x=d:G.next=w,!oi(d,t.memoizedState)&&(xn=!0,xe&&(s=Es,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function $f(t){var n=pn(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);oi(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,o]}function Hg(t,n,s){var o=gt,u=pn(),d=Tt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var x=!oi((Wt||u).memoizedState,s);if(x&&(u.memoizedState=s,xn=!0),u=u.queue,td(kg.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Ds(9,{destroy:void 0},Vg.bind(null,o,u,s,n),null),Kt===null)throw Error(a(349));d||(pa&127)!==0||Gg(o,n,s)}return s}function Gg(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=gt.updateQueue,n===null?(n=uc(),gt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Vg(t,n,s,o){n.value=s,n.getSnapshot=o,Xg(n)&&Wg(t)}function kg(t,n,s){return s(function(){Xg(n)&&Wg(t)})}function Xg(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!oi(t,s)}catch{return!0}}function Wg(t){var n=Lr(t,2);n!==null&&Jn(n,t,2)}function Jf(t){var n=kn();if(typeof t=="function"){var s=t;if(t=s(),Gr){De(!0);try{s()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},n}function qg(t,n,s,o){return t.baseState=s,Qf(t,Wt,typeof o=="function"?o:ma)}function p1(t,n,s,o,u){if(mc(t))throw Error(a(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};C.T!==null?s(!0):d.isTransition=!1,o(d),s=n.pending,s===null?(d.next=n.pending=d,jg(n,d)):(d.next=s.next,n.pending=s.next=d)}}function jg(t,n){var s=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=C.T,x={};C.T=x;try{var w=s(u,o),G=C.S;G!==null&&G(x,w),Yg(t,n,w)}catch(ne){ed(t,n,ne)}finally{d!==null&&x.types!==null&&(d.types=x.types),C.T=d}}else try{d=s(u,o),Yg(t,n,d)}catch(ne){ed(t,n,ne)}}function Yg(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Zg(t,n,o)},function(o){return ed(t,n,o)}):Zg(t,n,s)}function Zg(t,n,s){n.status="fulfilled",n.value=s,Kg(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,jg(t,s)))}function ed(t,n,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,Kg(n),n=n.next;while(n!==o)}t.action=null}function Kg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Qg(t,n){return n}function $g(t,n){if(Tt){var s=Kt.formState;if(s!==null){e:{var o=gt;if(Tt){if(Jt){t:{for(var u=Jt,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Jt=Ei(u.nextSibling),o=u.data==="F!";break e}}ja(o)}o=!1}o&&(n=s[0])}}return s=kn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qg,lastRenderedState:n},s.queue=o,s=v0.bind(null,gt,o),o.dispatch=s,o=Jf(!1),d=sd.bind(null,gt,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,s=p1.bind(null,gt,u,d,s),u.dispatch=s,o.memoizedState=t,[n,s,!1]}function Jg(t){var n=pn();return e0(n,Wt,t)}function e0(t,n,s){if(n=Qf(t,n,Qg)[0],t=dc(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Xo(n)}catch(x){throw x===Ts?nc:x}else o=n;n=pn();var u=n.queue,d=u.dispatch;return s!==n.memoizedState&&(gt.flags|=2048,Ds(9,{destroy:void 0},m1.bind(null,u,s),null)),[o,d,t]}function m1(t,n){t.action=n}function t0(t){var n=pn(),s=Wt;if(s!==null)return e0(n,s,t);pn(),n=n.memoizedState,s=pn();var o=s.queue.dispatch;return s.memoizedState=t,[n,o,!1]}function Ds(t,n,s,o){return t={tag:t,create:s,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=uc(),gt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,n.lastEffect=t),t}function n0(){return pn().memoizedState}function hc(t,n,s,o){var u=kn();gt.flags|=t,u.memoizedState=Ds(1|n,{destroy:void 0},s,o===void 0?null:o)}function pc(t,n,s,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&Wf(o,Wt.memoizedState.deps)?u.memoizedState=Ds(n,d,s,o):(gt.flags|=t,u.memoizedState=Ds(1|n,d,s,o))}function i0(t,n){hc(8390656,8,t,n)}function td(t,n){pc(2048,8,t,n)}function g1(t){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=uc(),gt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function a0(t){var n=pn().memoizedState;return g1({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function r0(t,n){return pc(4,2,t,n)}function s0(t,n){return pc(4,4,t,n)}function o0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function l0(t,n,s){s=s!=null?s.concat([t]):null,pc(4,4,o0.bind(null,n,t),s)}function nd(){}function c0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Wf(n,o[1])?o[0]:(s.memoizedState=[t,n],t)}function u0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Wf(n,o[1]))return o[0];if(o=t(),Gr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,n],o}function id(t,n,s){return s===void 0||(pa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=fv(),gt.lanes|=t,nr|=t,s)}function f0(t,n,s,o){return oi(s,n)?s:Rs.current!==null?(t=id(t,s,o),oi(t,n)||(xn=!0),t):(pa&42)===0||(pa&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=s):(t=fv(),gt.lanes|=t,nr|=t,n)}function d0(t,n,s,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var x=C.T,w={};C.T=w,sd(t,!1,n,s);try{var G=u(),ne=C.S;if(ne!==null&&ne(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xe=f1(G,o);Wo(t,n,xe,hi(t))}else Wo(t,n,o,hi(t))}catch(Me){Wo(t,n,{then:function(){},status:"rejected",reason:Me},hi())}finally{H.p=d,x!==null&&w.types!==null&&(x.types=w.types),C.T=x}}function v1(){}function ad(t,n,s,o){if(t.tag!==5)throw Error(a(476));var u=h0(t).queue;d0(t,u,n,J,s===null?v1:function(){return p0(t),s(o)})}function h0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:J},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function p0(t){var n=h0(t);n.next===null&&(n=t.alternate.memoizedState),Wo(t,n.next.queue,{},hi())}function rd(){return Ln(ll)}function m0(){return pn().memoizedState}function g0(){return pn().memoizedState}function _1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=hi();t=Ka(s);var o=Qa(n,t,s);o!==null&&(Jn(o,n,s),Ho(o,n,s)),n={cache:Of()},t.payload=n;return}n=n.return}}function x1(t,n,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},mc(t)?_0(n,s):(s=Mf(t,n,s,o),s!==null&&(Jn(s,t,o),x0(s,n,o)))}function v0(t,n,s){var o=hi();Wo(t,n,s,o)}function Wo(t,n,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(mc(t))_0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,w=d(x,s);if(u.hasEagerState=!0,u.eagerState=w,oi(w,x))return Zl(t,n,u,0),Kt===null&&Yl(),!1}catch{}if(s=Mf(t,n,u,o),s!==null)return Jn(s,t,o),x0(s,n,o),!0}return!1}function sd(t,n,s,o){if(o={lane:2,revertLane:Fd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},mc(t)){if(n)throw Error(a(479))}else n=Mf(t,s,o,2),n!==null&&Jn(n,t,2)}function mc(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function _0(t,n){Cs=lc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function x0(t,n,s){if((s&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ii(t,s)}}var qo={readContext:Ln,use:fc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};qo.useEffectEvent=cn;var y0={readContext:Ln,use:fc,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:i0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,hc(4194308,4,o0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return hc(4194308,4,t,n)},useInsertionEffect:function(t,n){hc(4,2,t,n)},useMemo:function(t,n){var s=kn();n=n===void 0?null:n;var o=t();if(Gr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,n],o},useReducer:function(t,n,s){var o=kn();if(s!==void 0){var u=s(n);if(Gr){De(!0);try{s(n)}finally{De(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=x1.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=Jf(t);var n=t.queue,s=v0.bind(null,gt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:nd,useDeferredValue:function(t,n){var s=kn();return id(s,t,n)},useTransition:function(){var t=Jf(!1);return t=d0.bind(null,gt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var o=gt,u=kn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Kt===null)throw Error(a(349));(bt&127)!==0||Gg(o,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,i0(kg.bind(null,o,d,t),[t]),o.flags|=2048,Ds(9,{destroy:void 0},Vg.bind(null,o,d,s,n),null),s},useId:function(){var t=kn(),n=Kt.identifierPrefix;if(Tt){var s=Yi,o=ji;s=(o&~(1<<32-Ve(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=cc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=d1++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rd,useFormState:$g,useActionState:$g,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=sd.bind(null,gt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Kf,useCacheRefresh:function(){return kn().memoizedState=_1.bind(null,gt)},useEffectEvent:function(t){var n=kn(),s={impl:t};return n.memoizedState=s,function(){if((Ot&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},od={readContext:Ln,use:fc,useCallback:c0,useContext:Ln,useEffect:td,useImperativeHandle:l0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:u0,useReducer:dc,useRef:n0,useState:function(){return dc(ma)},useDebugValue:nd,useDeferredValue:function(t,n){var s=pn();return f0(s,Wt.memoizedState,t,n)},useTransition:function(){var t=dc(ma)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:Hg,useId:m0,useHostTransitionStatus:rd,useFormState:Jg,useActionState:Jg,useOptimistic:function(t,n){var s=pn();return qg(s,Wt,t,n)},useMemoCache:Kf,useCacheRefresh:g0};od.useEffectEvent=a0;var S0={readContext:Ln,use:fc,useCallback:c0,useContext:Ln,useEffect:td,useImperativeHandle:l0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:u0,useReducer:$f,useRef:n0,useState:function(){return $f(ma)},useDebugValue:nd,useDeferredValue:function(t,n){var s=pn();return Wt===null?id(s,t,n):f0(s,Wt.memoizedState,t,n)},useTransition:function(){var t=$f(ma)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:Hg,useId:m0,useHostTransitionStatus:rd,useFormState:t0,useActionState:t0,useOptimistic:function(t,n){var s=pn();return Wt!==null?qg(s,Wt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Kf,useCacheRefresh:g0};S0.useEffectEvent=a0;function ld(t,n,s,o){n=t.memoizedState,s=s(o,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var cd={enqueueSetState:function(t,n,s){t=t._reactInternals;var o=hi(),u=Ka(o);u.payload=n,s!=null&&(u.callback=s),n=Qa(t,u,o),n!==null&&(Jn(n,t,o),Ho(n,t,o))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var o=hi(),u=Ka(o);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Qa(t,u,o),n!==null&&(Jn(n,t,o),Ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=hi(),o=Ka(s);o.tag=2,n!=null&&(o.callback=n),n=Qa(t,o,s),n!==null&&(Jn(n,t,s),Ho(n,t,s))}};function b0(t,n,s,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!Lo(s,o)||!Lo(u,d):!0}function M0(t,n,s,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==t&&cd.enqueueReplaceState(n,n.state,null)}function Vr(t,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function E0(t){jl(t)}function T0(t){console.error(t)}function A0(t){jl(t)}function gc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function R0(t,n,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ud(t,n,s){return s=Ka(s),s.tag=3,s.payload={element:null},s.callback=function(){gc(t,n)},s}function C0(t){return t=Ka(t),t.tag=3,t}function w0(t,n,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){R0(n,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){R0(n,s,o),typeof u!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function y1(t,n,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&bs(n,s,u,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Cc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===ic?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),Pd(t,o,u)),!1;case 22:return s.flags|=65536,o===ic?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),Pd(t,o,u)),!1}throw Error(a(435,s.tag))}return Pd(t,o,u),Cc(),!1}if(Tt)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==wf&&(t=Error(a(422),{cause:o}),Po(xi(t,s)))):(o!==wf&&(n=Error(a(423),{cause:o}),Po(xi(n,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,s),u=ud(t.stateNode,o,u),Hf(t,u),un!==4&&(un=2)),!1;var d=Error(a(520),{cause:o});if(d=xi(d,s),el===null?el=[d]:el.push(d),un!==4&&(un=2),n===null)return!0;o=xi(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=ud(s.stateNode,o,t),Hf(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ir===null||!ir.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=C0(u),w0(u,t,s,o),Hf(s,u),!1}s=s.return}while(s!==null);return!1}var fd=Error(a(461)),xn=!1;function Un(t,n,s,o){n.child=t===null?Ug(n,null,s,o):Hr(n,t.child,s,o)}function D0(t,n,s,o,u){s=s.render;var d=n.ref;if("ref"in o){var x={};for(var w in o)w!=="ref"&&(x[w]=o[w])}else x=o;return Ir(n),o=qf(t,n,s,x,d,u),w=jf(),t!==null&&!xn?(Yf(t,n,u),ga(t,n,u)):(Tt&&w&&Rf(n),n.flags|=1,Un(t,n,o,u),n.child)}function N0(t,n,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!Ef(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,L0(t,n,d,o,u)):(t=Ql(s.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!xd(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Lo,s(x,o)&&t.ref===n.ref)return ga(t,n,u)}return n.flags|=1,t=ua(d,o),t.ref=n.ref,t.return=n,n.child=t}function L0(t,n,s,o,u){if(t!==null){var d=t.memoizedProps;if(Lo(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,xd(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ga(t,n,u)}return dd(t,n,s,o,u)}function U0(t,n,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return O0(t,n,d,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tc(n,d!==null?d.cachePool:null),d!==null?Ig(n,d):Vf(),zg(n);else return o=n.lanes=536870912,O0(t,n,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(tc(n,d.cachePool),Ig(n,d),Ja(),n.memoizedState=null):(t!==null&&tc(n,null),Vf(),Ja());return Un(t,n,u,s),n.child}function jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function O0(t,n,s,o,u){var d=If();return d=d===null?null:{parent:vn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&tc(n,null),Vf(),zg(n),t!==null&&bs(t,n,o,!0),n.childLanes=u,null}function vc(t,n){return n=xc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function P0(t,n,s){return Hr(n,t.child,null,s),t=vc(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function S1(t,n,s){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=vc(n,o),n.lanes=536870912,jo(null,t);if(Xf(n),(t=Jt)?(t=jv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=_g(t),s.return=n,n.child=s,Nn=n,Jt=null)):t=null,t===null)throw ja(n);return n.lanes=536870912,null}return vc(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(Xf(n),u)if(n.flags&256)n.flags&=-257,n=P0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(xn||bs(t,n,s,!1),u=(s&t.childLanes)!==0,xn||u){if(o=Kt,o!==null&&(x=ai(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Lr(t,x),Jn(o,t,x),fd;Cc(),n=P0(t,n,s)}else t=d.treeContext,Jt=Ei(x.nextSibling),Nn=n,Tt=!0,qa=null,bi=!1,t!==null&&Sg(n,t),n=vc(n,o),n.flags|=4096;return n}return t=ua(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _c(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function dd(t,n,s,o,u){return Ir(n),s=qf(t,n,s,o,void 0,u),o=jf(),t!==null&&!xn?(Yf(t,n,u),ga(t,n,u)):(Tt&&o&&Rf(n),n.flags|=1,Un(t,n,s,u),n.child)}function I0(t,n,s,o,u,d){return Ir(n),n.updateQueue=null,s=Bg(n,o,s,u),Fg(t),o=jf(),t!==null&&!xn?(Yf(t,n,d),ga(t,n,d)):(Tt&&o&&Rf(n),n.flags|=1,Un(t,n,s,d),n.child)}function z0(t,n,s,o,u){if(Ir(n),n.stateNode===null){var d=_s,x=s.contextType;typeof x=="object"&&x!==null&&(d=Ln(x)),d=new s(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cd,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ff(n),x=s.contextType,d.context=typeof x=="object"&&x!==null?Ln(x):_s,d.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(ld(n,s,x,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&cd.enqueueReplaceState(d,d.state,null),Vo(n,o,d,u),Go(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,G=Vr(s,w);d.props=G;var ne=d.context,xe=s.contextType;x=_s,typeof xe=="object"&&xe!==null&&(x=Ln(xe));var Me=s.getDerivedStateFromProps;xe=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||ne!==x)&&M0(n,d,o,x),Za=!1;var le=n.memoizedState;d.state=le,Vo(n,o,d,u),Go(),ne=n.memoizedState,w||le!==ne||Za?(typeof Me=="function"&&(ld(n,s,Me,o),ne=n.memoizedState),(G=Za||b0(n,s,G,o,le,ne,x))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=x,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Bf(t,n),x=n.memoizedProps,xe=Vr(s,x),d.props=xe,Me=n.pendingProps,le=d.context,ne=s.contextType,G=_s,typeof ne=="object"&&ne!==null&&(G=Ln(ne)),w=s.getDerivedStateFromProps,(ne=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Me||le!==G)&&M0(n,d,o,G),Za=!1,le=n.memoizedState,d.state=le,Vo(n,o,d,u),Go();var ue=n.memoizedState;x!==Me||le!==ue||Za||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof w=="function"&&(ld(n,s,w,o),ue=n.memoizedState),(xe=Za||b0(n,s,xe,o,le,ue,G)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ue,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ue,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=G,o=xe):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,_c(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Hr(n,t.child,null,u),n.child=Hr(n,null,s,u)):Un(t,n,s,u),n.memoizedState=d.state,t=n.child):t=ga(t,n,u),t}function F0(t,n,s,o){return Or(),n.flags|=256,Un(t,n,s,o),n.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pd(t){return{baseLanes:t,cachePool:Rg()}}function md(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=di),t}function B0(t,n,s){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?$a(n):Ja(),(t=Jt)?(t=jv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=_g(t),s.return=n,n.child=s,Nn=n,Jt=null)):t=null,t===null)throw ja(n);return Qd(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Ja(),u=n.mode,w=xc({mode:"hidden",children:w},u),o=Ur(o,u,s,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=pd(s),o.childLanes=md(t,x,s),n.memoizedState=hd,jo(null,o)):($a(n),gd(n,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(d)n.flags&256?($a(n),n.flags&=-257,n=vd(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),w=o.fallback,u=n.mode,o=xc({mode:"visible",children:o.children},u),w=Ur(w,u,s,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Hr(n,t.child,null,s),o=n.child,o.memoizedState=pd(s),o.childLanes=md(t,x,s),n.memoizedState=hd,n=jo(null,o));else if($a(n),Qd(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var ne=x.dgst;x=ne,o=Error(a(419)),o.stack="",o.digest=x,Po({value:o,source:null,stack:null}),n=vd(t,n,s)}else if(xn||bs(t,n,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=Kt,x!==null&&(o=ai(x,s),o!==0&&o!==G.retryLane))throw G.retryLane=o,Lr(t,o),Jn(x,t,o),fd;Kd(w)||Cc(),n=vd(t,n,s)}else Kd(w)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,Jt=Ei(w.nextSibling),Nn=n,Tt=!0,qa=null,bi=!1,t!==null&&Sg(n,t),n=gd(n,o.children),n.flags|=4096);return n}return u?(Ja(),w=o.fallback,u=n.mode,G=t.child,ne=G.sibling,o=ua(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ne!==null?w=ua(ne,w):(w=Ur(w,u,s,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,jo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=pd(s):(u=w.cachePool,u!==null?(G=vn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Rg(),w={baseLanes:w.baseLanes|s,cachePool:u}),o.memoizedState=w,o.childLanes=md(t,x,s),n.memoizedState=hd,jo(t.child,o)):($a(n),s=t.child,t=s.sibling,s=ua(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function gd(t,n){return n=xc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xc(t,n){return t=li(22,t,null,n),t.lanes=0,t}function vd(t,n,s){return Hr(n,t.child,null,s),t=gd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function H0(t,n,s){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Lf(t.return,n,s)}function _d(t,n,s,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function G0(t,n,s){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=hn.current,w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,pe(hn,x),Un(t,n,o,s),o=Tt?Oo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&H0(t,s,n);else if(t.tag===19)H0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)t=s.alternate,t!==null&&oc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),_d(n,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&oc(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}_d(n,!0,s,null,d,o);break;case"together":_d(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ga(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),nr|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(bs(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,s=ua(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=ua(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function xd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function b1(t,n,s){switch(n.tag){case 3:_e(n,n.stateNode.containerInfo),Ya(n,vn,t.memoizedState.cache),Or();break;case 27:case 5:Je(n);break;case 4:_e(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?($a(n),n.flags|=128,null):(s&n.child.childLanes)!==0?B0(t,n,s):($a(n),t=ga(t,n,s),t!==null?t.sibling:null);$a(n);break;case 19:var u=(t.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(bs(t,n,s,!1),o=(s&n.childLanes)!==0),u){if(o)return G0(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pe(hn,hn.current),o)break;return null;case 22:return n.lanes=0,U0(t,n,s,n.pendingProps);case 24:Ya(n,vn,t.memoizedState.cache)}return ga(t,n,s)}function V0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!xd(t,s)&&(n.flags&128)===0)return xn=!1,b1(t,n,s);xn=(t.flags&131072)!==0}else xn=!1,Tt&&(n.flags&1048576)!==0&&yg(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Fr(n.elementType),n.type=t,typeof t=="function")Ef(t)?(o=Vr(t,o),n.tag=1,n=z0(null,n,t,o,s)):(n.tag=0,n=dd(null,n,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=D0(null,n,t,o,s);break e}else if(u===B){n.tag=14,n=N0(null,n,t,o,s);break e}}throw n=de(t)||t,Error(a(306,n,""))}}return n;case 0:return dd(t,n,n.type,n.pendingProps,s);case 1:return o=n.type,u=Vr(o,n.pendingProps),z0(t,n,o,u,s);case 3:e:{if(_e(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Bf(t,n),Vo(n,o,null,s);var x=n.memoizedState;if(o=x.cache,Ya(n,vn,o),o!==d.cache&&Uf(n,[vn],s,!0),Go(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=F0(t,n,o,s);break e}else if(o!==u){u=xi(Error(a(424)),n),Po(u),n=F0(t,n,o,s);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Ei(t.firstChild),Nn=n,Tt=!0,qa=null,bi=!0,s=Ug(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Or(),o===u){n=ga(t,n,s);break e}Un(t,n,o,s)}n=n.child}return n;case 26:return _c(t,n),t===null?(s=Jv(n.type,null,n.pendingProps,null))?n.memoizedState=s:Tt||(s=n.type,t=n.pendingProps,o=Pc(ee.current).createElement(s),o[mn]=n,o[Dn]=t,On(o,s,t),gn(o),n.stateNode=o):n.memoizedState=Jv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&Tt&&(o=n.stateNode=Kv(n.type,n.pendingProps,ee.current),Nn=n,bi=!0,u=Jt,or(n.type)?($d=u,Jt=Ei(o.firstChild)):Jt=u),Un(t,n,n.pendingProps.children,s),_c(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Jt)&&(o=$1(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Nn=n,Jt=Ei(o.firstChild),bi=!1,u=!0):u=!1),u||ja(n)),Je(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,jd(u,d)?o=null:x!==null&&jd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=qf(t,n,h1,null,null,s),ll._currentValue=u),_c(t,n),Un(t,n,o,s),n.child;case 6:return t===null&&Tt&&((t=s=Jt)&&(s=J1(s,n.pendingProps,bi),s!==null?(n.stateNode=s,Nn=n,Jt=null,t=!0):t=!1),t||ja(n)),null;case 13:return B0(t,n,s);case 4:return _e(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Hr(n,null,o,s):Un(t,n,o,s),n.child;case 11:return D0(t,n,n.type,n.pendingProps,s);case 7:return Un(t,n,n.pendingProps,s),n.child;case 8:return Un(t,n,n.pendingProps.children,s),n.child;case 12:return Un(t,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),Un(t,n,o.children,s),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ir(n),u=Ln(u),o=o(u),n.flags|=1,Un(t,n,o,s),n.child;case 14:return N0(t,n,n.type,n.pendingProps,s);case 15:return L0(t,n,n.type,n.pendingProps,s);case 19:return G0(t,n,s);case 31:return S1(t,n,s);case 22:return U0(t,n,s,n.pendingProps);case 24:return Ir(n),o=Ln(vn),t===null?(u=If(),u===null&&(u=Kt,d=Of(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),n.memoizedState={parent:o,cache:u},Ff(n),Ya(n,vn,u)):((t.lanes&s)!==0&&(Bf(t,n),Vo(n,null,null,s),Go()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,vn,o)):(o=d.cache,Ya(n,vn,o),o!==u.cache&&Uf(n,[vn],s,!0))),Un(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function va(t){t.flags|=4}function yd(t,n,s,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(mv())t.flags|=8192;else throw Br=ic,zf}else t.flags&=-16777217}function k0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!a_(n))if(mv())t.flags|=8192;else throw Br=ic,zf}function yc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,Os|=n)}function Yo(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,n}function M1(t,n,s){var o=n.pendingProps;switch(Cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return s=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ha(vn),Le(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ss(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Df())),en(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(va(n),d!==null?(en(n),k0(n,d)):(en(n),yd(n,u,null,o,s))):d?d!==t.memoizedState?(va(n),en(n),k0(n,d)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&va(n),en(n),yd(n,u,t,o,s)),null;case 27:if(Be(n),s=ee.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return en(n),null}t=be.current,Ss(n)?bg(n):(t=Kv(u,o,s),n.stateNode=t,va(n))}return en(n),null;case 5:if(Be(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return en(n),null}if(d=be.current,Ss(n))bg(n);else{var x=Pc(ee.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[mn]=n,d[Dn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(n)}}return en(n),yd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=ee.current,Ss(n)){if(t=n.stateNode,s=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Bv(t.nodeValue,s)),t||ja(n,!0)}else t=Pc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return en(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ss(n),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[mn]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else s=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(a(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ss(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[mn]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),yc(n,n.updateQueue),en(n),null);case 4:return Le(),t===null&&Vd(n.stateNode.containerInfo),en(n),null;case 10:return ha(n.type),en(n),null;case 19:if(k(hn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Yo(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=oc(t),d!==null){for(n.flags|=128,Yo(o,!1),t=d.updateQueue,n.updateQueue=t,yc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)vg(s,t),s=s.sibling;return pe(hn,hn.current&1|2),Tt&&fa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Xt()>Tc&&(n.flags|=128,u=!0,Yo(o,!1),n.lanes=4194304)}else{if(!u)if(t=oc(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,yc(n,t),Yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return en(n),null}else 2*Xt()-o.renderingStartTime>Tc&&s!==536870912&&(n.flags|=128,u=!0,Yo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xt(),t.sibling=null,s=hn.current,pe(hn,u?s&1|2:s&1),Tt&&fa(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return ui(n),kf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),s=n.updateQueue,s!==null&&yc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),t!==null&&k(zr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ha(vn),en(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function E1(t,n){switch(Cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(vn),Le(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Be(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(a(340));Or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return k(hn),null;case 4:return Le(),null;case 10:return ha(n.type),null;case 22:case 23:return ui(n),kf(),t!==null&&k(zr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(vn),null;case 25:return null;default:return null}}function X0(t,n){switch(Cf(n),n.tag){case 3:ha(vn),Le();break;case 26:case 27:case 5:Be(n);break;case 4:Le();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:k(hn);break;case 10:ha(n.type);break;case 22:case 23:ui(n),kf(),t!==null&&k(zr);break;case 24:ha(vn)}}function Zo(t,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==u)}}catch(w){Vt(n,n.return,w)}}function er(t,n,s){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,u=n;var G=s,ne=w;try{ne()}catch(xe){Vt(u,G,xe)}}}o=o.next}while(o!==d)}}catch(xe){Vt(n,n.return,xe)}}function W0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Pg(n,s)}catch(o){Vt(t,t.return,o)}}}function q0(t,n,s){s.props=Vr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Ko(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Vt(t,n,u)}}function Zi(t,n){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Vt(t,n,u)}else s.current=null}function j0(t){var n=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Vt(t,t.return,u)}}function Sd(t,n,s){try{var o=t.stateNode;q1(o,t.type,s,n),o[Dn]=n}catch(u){Vt(t,t.return,u)}}function Y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function bd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=la));else if(o!==4&&(o===27&&or(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Md(t,n,s),t=t.sibling;t!==null;)Md(t,n,s),t=t.sibling}function Sc(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(o!==4&&(o===27&&or(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Sc(t,n,s),t=t.sibling;t!==null;)Sc(t,n,s),t=t.sibling}function Z0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,s),n[mn]=t,n[Dn]=s}catch(d){Vt(t,t.return,d)}}var _a=!1,yn=!1,Ed=!1,K0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function T1(t,n){if(t=t.containerInfo,Wd=Vc,t=lg(t),vf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,w=-1,G=-1,ne=0,xe=0,Me=t,le=null;t:for(;;){for(var ue;Me!==s||u!==0&&Me.nodeType!==3||(w=x+u),Me!==d||o!==0&&Me.nodeType!==3||(G=x+o),Me.nodeType===3&&(x+=Me.nodeValue.length),(ue=Me.firstChild)!==null;)le=Me,Me=ue;for(;;){if(Me===t)break t;if(le===s&&++ne===u&&(w=x),le===d&&++xe===o&&(G=x),(ue=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=ue}s=w===-1||G===-1?null:{start:w,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(qd={focusedElem:t,selectionRange:s},Vc=!1,Rn=n;Rn!==null;)if(n=Rn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rn=t;else for(;Rn!==null;){switch(n=Rn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Ke=Vr(s.type,u);t=o.getSnapshotBeforeUpdate(Ke,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Vt(s,s.return,lt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Zd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Rn=t;break}Rn=n.return}}function Q0(t,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ya(t,s),o&4&&Zo(5,s);break;case 1:if(ya(t,s),o&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){Vt(s,s.return,x)}else{var u=Vr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Vt(s,s.return,x)}}o&64&&W0(s),o&512&&Ko(s,s.return);break;case 3:if(ya(t,s),o&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Pg(t,n)}catch(x){Vt(s,s.return,x)}}break;case 27:n===null&&o&4&&Z0(s);case 26:case 5:ya(t,s),n===null&&o&4&&j0(s),o&512&&Ko(s,s.return);break;case 12:ya(t,s);break;case 31:ya(t,s),o&4&&ev(t,s);break;case 13:ya(t,s),o&4&&tv(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=O1.bind(null,s),eM(t,s))));break;case 22:if(o=s.memoizedState!==null||_a,!o){n=n!==null&&n.memoizedState!==null||yn,u=_a;var d=yn;_a=o,(yn=n)&&!d?Sa(t,s,(s.subtreeFlags&8772)!==0):ya(t,s),_a=u,yn=d}break;case 30:break;default:ya(t,s)}}function $0(t){var n=t.alternate;n!==null&&(t.alternate=null,$0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ga(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Zn=!1;function xa(t,n,s){for(s=s.child;s!==null;)J0(t,n,s),s=s.sibling}function J0(t,n,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:yn||Zi(s,n),xa(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Zi(s,n);var o=on,u=Zn;or(s.type)&&(on=s.stateNode,Zn=!1),xa(t,n,s),rl(s.stateNode),on=o,Zn=u;break;case 5:yn||Zi(s,n);case 6:if(o=on,u=Zn,on=null,xa(t,n,s),on=o,Zn=u,on!==null)if(Zn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){Vt(s,n,d)}else try{on.removeChild(s.stateNode)}catch(d){Vt(s,n,d)}break;case 18:on!==null&&(Zn?(t=on,Wv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Vs(t)):Wv(on,s.stateNode));break;case 4:o=on,u=Zn,on=s.stateNode.containerInfo,Zn=!0,xa(t,n,s),on=o,Zn=u;break;case 0:case 11:case 14:case 15:er(2,s,n),yn||er(4,s,n),xa(t,n,s);break;case 1:yn||(Zi(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&q0(s,n,o)),xa(t,n,s);break;case 21:xa(t,n,s);break;case 22:yn=(o=yn)||s.memoizedState!==null,xa(t,n,s),yn=o;break;default:xa(t,n,s)}}function ev(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Vs(t)}catch(s){Vt(n,n.return,s)}}}function tv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vs(t)}catch(s){Vt(n,n.return,s)}}function A1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new K0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new K0),n;default:throw Error(a(435,t.tag))}}function bc(t,n){var s=A1(t);n.forEach(function(o){if(!s.has(o)){s.add(o);var u=P1.bind(null,t,o);o.then(u,u)}})}function Kn(t,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,x=n,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(or(w.type)){on=w.stateNode,Zn=!1;break e}break;case 5:on=w.stateNode,Zn=!1;break e;case 3:case 4:on=w.stateNode.containerInfo,Zn=!0;break e}w=w.return}if(on===null)throw Error(a(160));J0(d,x,u),on=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)nv(n,t),n=n.sibling}var Oi=null;function nv(t,n){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(er(3,t,t.return),Zo(3,t),er(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&64&&_a&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Oi;if(Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ha]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,s),d[mn]=t,gn(d),o=d;break e;case"link":var x=n_("link","href",u).get(o+(s.href||""));if(x){for(var w=0;w<x.length;w++)if(d=x[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(w,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;case"meta":if(x=n_("meta","content",u).get(o+(s.content||""))){for(w=0;w<x.length;w++)if(d=x[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(w,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else i_(u,t.type,t.stateNode);else t.stateNode=t_(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?i_(u,t.type,t.stateNode):t_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Sd(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),s!==null&&o&4&&Sd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(Ke){Vt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Sd(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Ed=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(Ke){Vt(t,t.return,Ke)}}break;case 3:if(Fc=null,u=Oi,Oi=Ic(n.containerInfo),Kn(n,t),Oi=u,Qn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Vs(n.containerInfo)}catch(Ke){Vt(t,t.return,Ke)}Ed&&(Ed=!1,iv(t));break;case 4:o=Oi,Oi=Ic(t.stateNode.containerInfo),Kn(n,t),Qn(t),Oi=o;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bc(t,o)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ec=Xt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bc(t,o)));break;case 22:u=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ne=_a,xe=yn;if(_a=ne||u,yn=xe||G,Kn(n,t),yn=xe,_a=ne,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||G||_a||yn||kr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(d=G.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=G.stateNode;var Me=G.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;w.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ke){Vt(G,G.return,Ke)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ke){Vt(G,G.return,Ke)}}}else if(n.tag===18){if(s===null){G=n;try{var ue=G.stateNode;u?qv(ue,!0):qv(G.stateNode,!1)}catch(Ke){Vt(G,G.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,bc(t,s))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bc(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var s,o=t.return;o!==null;){if(Y0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=bd(t);Sc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(si(x,""),s.flags&=-33);var w=bd(t);Sc(t,w,x);break;case 3:case 4:var G=s.stateNode.containerInfo,ne=bd(t);Md(t,ne,G);break;default:throw Error(a(161))}}catch(xe){Vt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function iv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;iv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ya(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Q0(t,n.alternate,n),n=n.sibling}function kr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:er(4,n,n.return),kr(n);break;case 1:Zi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&q0(n,n.return,s),kr(n);break;case 27:rl(n.stateNode);case 26:case 5:Zi(n,n.return),kr(n);break;case 22:n.memoizedState===null&&kr(n);break;case 30:kr(n);break;default:kr(n)}t=t.sibling}}function Sa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Sa(u,d,s),Zo(4,d);break;case 1:if(Sa(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Vt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Og(G[u],w)}catch(ne){Vt(o,o.return,ne)}}s&&x&64&&W0(d),Ko(d,d.return);break;case 27:Z0(d);case 26:case 5:Sa(u,d,s),s&&o===null&&x&4&&j0(d),Ko(d,d.return);break;case 12:Sa(u,d,s);break;case 31:Sa(u,d,s),s&&x&4&&ev(u,d);break;case 13:Sa(u,d,s),s&&x&4&&tv(u,d);break;case 22:d.memoizedState===null&&Sa(u,d,s),Ko(d,d.return);break;case 30:break;default:Sa(u,d,s)}n=n.sibling}}function Td(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Io(s))}function Ad(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Io(t))}function Pi(t,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)av(t,n,s,o),n=n.sibling}function av(t,n,s,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,s,o),u&2048&&Zo(9,n);break;case 1:Pi(t,n,s,o);break;case 3:Pi(t,n,s,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Io(t)));break;case 12:if(u&2048){Pi(t,n,s,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,w=d.onPostCommit;typeof w=="function"&&w(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Vt(n,n.return,G)}}else Pi(t,n,s,o);break;case 31:Pi(t,n,s,o);break;case 13:Pi(t,n,s,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(t,n,s,o):Qo(t,n):d._visibility&2?Pi(t,n,s,o):(d._visibility|=2,Ns(t,n,s,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Td(x,n);break;case 24:Pi(t,n,s,o),u&2048&&Ad(n.alternate,n);break;default:Pi(t,n,s,o)}}function Ns(t,n,s,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,w=s,G=o,ne=x.flags;switch(x.tag){case 0:case 11:case 15:Ns(d,x,w,G,u),Zo(8,x);break;case 23:break;case 22:var xe=x.stateNode;x.memoizedState!==null?xe._visibility&2?Ns(d,x,w,G,u):Qo(d,x):(xe._visibility|=2,Ns(d,x,w,G,u)),u&&ne&2048&&Td(x.alternate,x);break;case 24:Ns(d,x,w,G,u),u&&ne&2048&&Ad(x.alternate,x);break;default:Ns(d,x,w,G,u)}n=n.sibling}}function Qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,o=n,u=o.flags;switch(o.tag){case 22:Qo(s,o),u&2048&&Td(o.alternate,o);break;case 24:Qo(s,o),u&2048&&Ad(o.alternate,o);break;default:Qo(s,o)}n=n.sibling}}var $o=8192;function Ls(t,n,s){if(t.subtreeFlags&$o)for(t=t.child;t!==null;)rv(t,n,s),t=t.sibling}function rv(t,n,s){switch(t.tag){case 26:Ls(t,n,s),t.flags&$o&&t.memoizedState!==null&&dM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Ls(t,n,s);break;case 3:case 4:var o=Oi;Oi=Ic(t.stateNode.containerInfo),Ls(t,n,s),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=$o,$o=16777216,Ls(t,n,s),$o=o):Ls(t,n,s));break;default:Ls(t,n,s)}}function sv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Rn=o,lv(o,t)}sv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ov(t),t=t.sibling}function ov(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&er(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Mc(t)):Jo(t);break;default:Jo(t)}}function Mc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Rn=o,lv(o,t)}sv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:er(8,n,n.return),Mc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Mc(n));break;default:Mc(n)}t=t.sibling}}function lv(t,n){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:er(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Io(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Rn=o;else e:for(s=t;Rn!==null;){o=Rn;var u=o.sibling,d=o.return;if($0(o),o===s){Rn=null;break e}if(u!==null){u.return=d,Rn=u;break e}Rn=d}}}var R1={getCacheForType:function(t){var n=Ln(vn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},C1=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Kt=null,yt=null,bt=0,Gt=0,fi=null,tr=!1,Us=!1,Rd=!1,ba=0,un=0,nr=0,Xr=0,Cd=0,di=0,Os=0,el=null,$n=null,wd=!1,Ec=0,cv=0,Tc=1/0,Ac=null,ir=null,En=0,ar=null,Ps=null,Ma=0,Dd=0,Nd=null,uv=null,tl=0,Ld=null;function hi(){return(Ot&2)!==0&&bt!==0?bt&-bt:C.T!==null?Fd():Eo()}function fv(){if(di===0)if((bt&536870912)===0||Tt){var t=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function Jn(t,n,s){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Is(t,0),rr(t,bt,di,!1)),je(t,s),((Ot&2)===0||t!==Kt)&&(t===Kt&&((Ot&2)===0&&(Xr|=s),un===4&&rr(t,bt,di,!1)),Ki(t))}function dv(t,n,s){if((Ot&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?N1(t,n):Od(t,n,!0),d=o;do{if(u===0){Us&&!o&&rr(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!w1(s)){u=Od(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var w=t;u=el;var G=w.current.memoizedState.isDehydrated;if(G&&(Is(w,x).flags|=256),x=Od(w,x,!1),x!==2){if(Rd&&!G){w.errorRecoveryDisabledLanes|=d,Xr|=d,u=4;break e}d=$n,$n=u,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Is(t,0),rr(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:rr(o,n,di,!tr);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Ec+300-Xt(),10<u)){if(rr(o,n,di,!tr),ye(o,0,!0)!==0)break e;Ma=n,o.timeoutHandle=kv(hv.bind(null,o,s,$n,Ac,wd,n,di,Xr,Os,tr,d,"Throttled",-0,0),u);break e}hv(o,s,$n,Ac,wd,n,di,Xr,Os,tr,d,null,-0,0)}}break}while(!0);Ki(t)}function hv(t,n,s,o,u,d,x,w,G,ne,xe,Me,le,ue){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},rv(n,d,Me);var Ke=(d&62914560)===d?Ec-Xt():(d&4194048)===d?cv-Xt():0;if(Ke=hM(Me,Ke),Ke!==null){Ma=d,t.cancelPendingCommit=Ke(Sv.bind(null,t,n,d,s,o,u,x,w,G,xe,Me,null,le,ue)),rr(t,d,x,!ne);return}}Sv(t,n,d,s,o,u,x,w,G)}function w1(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!oi(d(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(t,n,s,o){n&=~Cd,n&=~Xr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ve(u),x=1<<d;o[d]=-1,u&=~x}s!==0&&zt(t,s,n)}function Rc(){return(Ot&6)===0?(nl(0),!1):!0}function Ud(){if(yt!==null){if(Gt===0)var t=yt.return;else t=yt,da=Pr=null,Zf(t),As=null,Fo=0,t=yt;for(;t!==null;)X0(t.alternate,t),t=t.return;yt=null}}function Is(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Z1(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ma=0,Ud(),Kt=t,yt=s=ua(t.current,null),bt=n,Gt=0,fi=null,tr=!1,Us=Ue(t,n),Rd=!1,Os=di=Cd=Xr=nr=un=0,$n=el=null,wd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),d=1<<u;n|=t[u],o&=~d}return ba=n,Yl(),s}function pv(t,n){gt=null,C.H=qo,n===Ts||n===nc?(n=Dg(),Gt=3):n===zf?(n=Dg(),Gt=4):Gt=n===fd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,yt===null&&(un=1,gc(t,xi(n,t.current)))}function mv(){var t=ci.current;return t===null?!0:(bt&4194048)===bt?Mi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Mi:!1}function gv(){var t=C.H;return C.H=qo,t===null?qo:t}function vv(){var t=C.A;return C.A=R1,t}function Cc(){un=4,tr||(bt&4194048)!==bt&&ci.current!==null||(Us=!0),(nr&134217727)===0&&(Xr&134217727)===0||Kt===null||rr(Kt,bt,di,!1)}function Od(t,n,s){var o=Ot;Ot|=2;var u=gv(),d=vv();(Kt!==t||bt!==n)&&(Ac=null,Is(t,n)),n=!1;var x=un;e:do try{if(Gt!==0&&yt!==null){var w=yt,G=fi;switch(Gt){case 8:Ud(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ne=Gt;if(Gt=0,fi=null,zs(t,w,G,ne),s&&Us){x=0;break e}break;default:ne=Gt,Gt=0,fi=null,zs(t,w,G,ne)}}D1(),x=un;break}catch(xe){pv(t,xe)}while(!0);return n&&t.shellSuspendCounter++,da=Pr=null,Ot=o,C.H=u,C.A=d,yt===null&&(Kt=null,bt=0,Yl()),x}function D1(){for(;yt!==null;)_v(yt)}function N1(t,n){var s=Ot;Ot|=2;var o=gv(),u=vv();Kt!==t||bt!==n?(Ac=null,Tc=Xt()+500,Is(t,n)):Us=Ue(t,n);e:do try{if(Gt!==0&&yt!==null){n=yt;var d=fi;t:switch(Gt){case 1:Gt=0,fi=null,zs(t,n,d,1);break;case 2:case 9:if(Cg(d)){Gt=0,fi=null,xv(n);break}n=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Ki(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Cg(d)?(Gt=0,fi=null,xv(n)):(Gt=0,fi=null,zs(t,n,d,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var w=yt;if(x?a_(x):w.stateNode.complete){Gt=0,fi=null;var G=w.sibling;if(G!==null)yt=G;else{var ne=w.return;ne!==null?(yt=ne,wc(ne)):yt=null}break t}}Gt=0,fi=null,zs(t,n,d,5);break;case 6:Gt=0,fi=null,zs(t,n,d,6);break;case 8:Ud(),un=6;break e;default:throw Error(a(462))}}L1();break}catch(xe){pv(t,xe)}while(!0);return da=Pr=null,C.H=o,C.A=u,Ot=s,yt!==null?0:(Kt=null,bt=0,Yl(),un)}function L1(){for(;yt!==null&&!ln();)_v(yt)}function _v(t){var n=V0(t.alternate,t,ba);t.memoizedProps=t.pendingProps,n===null?wc(t):yt=n}function xv(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=I0(s,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=I0(s,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Zf(n);default:X0(s,n),n=yt=vg(n,ba),n=V0(s,n,ba)}t.memoizedProps=t.pendingProps,n===null?wc(t):yt=n}function zs(t,n,s,o){da=Pr=null,Zf(n),As=null,Fo=0;var u=n.return;try{if(y1(t,u,n,s,bt)){un=1,gc(t,xi(s,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;un=1,gc(t,xi(s,t.current)),yt=null;return}n.flags&32768?(Tt||o===1?t=!0:Us||(bt&536870912)!==0?t=!1:(tr=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),yv(n,t)):wc(n)}function wc(t){var n=t;do{if((n.flags&32768)!==0){yv(n,tr);return}t=n.return;var s=M1(n.alternate,n,ba);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);un===0&&(un=5)}function yv(t,n){do{var s=E1(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);un=6,yt=null}function Sv(t,n,s,o,u,d,x,w,G){t.cancelPendingCommit=null;do Dc();while(En!==0);if((Ot&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=bf,an(t,s,d,x,w,G),t===Kt&&(yt=Kt=null,bt=0),Ps=n,ar=t,Ma=s,Dd=d,Nd=u,uv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,I1(Q,function(){return Av(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=C.T,C.T=null,u=H.p,H.p=2,x=Ot,Ot|=4;try{T1(t,n,s)}finally{Ot=x,H.p=u,C.T=o}}En=1,bv(),Mv(),Ev()}}function bv(){if(En===1){En=0;var t=ar,n=Ps,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=C.T,C.T=null;var o=H.p;H.p=2;var u=Ot;Ot|=4;try{nv(n,t);var d=qd,x=lg(t.containerInfo),w=d.focusedElem,G=d.selectionRange;if(x!==w&&w&&w.ownerDocument&&og(w.ownerDocument.documentElement,w)){if(G!==null&&vf(w)){var ne=G.start,xe=G.end;if(xe===void 0&&(xe=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(xe,w.value.length);else{var Me=w.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var ue=le.getSelection(),Ke=w.textContent.length,lt=Math.min(G.start,Ke),jt=G.end===void 0?lt:Math.min(G.end,Ke);!ue.extend&&lt>jt&&(x=jt,jt=lt,lt=x);var K=sg(w,lt),X=sg(w,jt);if(K&&X&&(ue.rangeCount!==1||ue.anchorNode!==K.node||ue.anchorOffset!==K.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var te=Me.createRange();te.setStart(K.node,K.offset),ue.removeAllRanges(),lt>jt?(ue.addRange(te),ue.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),ue.addRange(te))}}}}for(Me=[],ue=w;ue=ue.parentNode;)ue.nodeType===1&&Me.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Me.length;w++){var Se=Me[w];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Vc=!!Wd,qd=Wd=null}finally{Ot=u,H.p=o,C.T=s}}t.current=n,En=2}}function Mv(){if(En===2){En=0;var t=ar,n=Ps,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=C.T,C.T=null;var o=H.p;H.p=2;var u=Ot;Ot|=4;try{Q0(t,n.alternate,n)}finally{Ot=u,H.p=o,C.T=s}}En=3}}function Ev(){if(En===4||En===3){En=0,Y();var t=ar,n=Ps,s=Ma,o=uv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Ps=ar=null,Tv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ir=null),Mo(s),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=C.T,u=H.p,H.p=2,C.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var w=o[x];d(w.value,{componentStack:w.stack})}}finally{C.T=n,H.p=u}}(Ma&3)!==0&&Dc(),Ki(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Ld?tl++:(tl=0,Ld=t):tl=0,nl(0)}}function Tv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Io(n)))}function Dc(){return bv(),Mv(),Ev(),Av()}function Av(){if(En!==5)return!1;var t=ar,n=Dd;Dd=0;var s=Mo(Ma),o=C.T,u=H.p;try{H.p=32>s?32:s,C.T=null,s=Nd,Nd=null;var d=ar,x=Ma;if(En=0,Ps=ar=null,Ma=0,(Ot&6)!==0)throw Error(a(331));var w=Ot;if(Ot|=4,ov(d.current),av(d,d.current,x,s),Ot=w,nl(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{H.p=u,C.T=o,Tv(t,n)}}function Rv(t,n,s){n=xi(s,n),n=ud(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(je(t,2),Ki(t))}function Vt(t,n,s){if(t.tag===3)Rv(t,t,s);else for(;n!==null;){if(n.tag===3){Rv(n,t,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ir===null||!ir.has(o))){t=xi(s,t),s=C0(2),o=Qa(n,s,2),o!==null&&(w0(s,o,n,t),je(o,2),Ki(o));break}}n=n.return}}function Pd(t,n,s){var o=t.pingCache;if(o===null){o=t.pingCache=new C1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(s)||(Rd=!0,u.add(s),t=U1.bind(null,t,n,s),n.then(t,t))}function U1(t,n,s){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(bt&s)===s&&(un===4||un===3&&(bt&62914560)===bt&&300>Xt()-Ec?(Ot&2)===0&&Is(t,0):Cd|=s,Os===bt&&(Os=0)),Ki(t)}function Cv(t,n){n===0&&(n=Te()),t=Lr(t,n),t!==null&&(je(t,n),Ki(t))}function O1(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Cv(t,s)}function P1(t,n){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Cv(t,s)}function I1(t,n){return nn(t,n)}var Nc=null,Fs=null,Id=!1,Lc=!1,zd=!1,sr=0;function Ki(t){t!==Fs&&t.next===null&&(Fs===null?Nc=Fs=t:Fs=Fs.next=t),Lc=!0,Id||(Id=!0,F1())}function nl(t,n){if(!zd&&Lc){zd=!0;do for(var s=!1,o=Nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Ve(42|t)+1)-1,d&=u&~(x&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Lv(o,d))}else d=bt,d=ye(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ue(o,d)||(s=!0,Lv(o,d));o=o.next}while(s);zd=!1}}function z1(){wv()}function wv(){Lc=Id=!1;var t=0;sr!==0&&Y1()&&(t=sr);for(var n=Xt(),s=null,o=Nc;o!==null;){var u=o.next,d=Dv(o,n);d===0?(o.next=null,s===null?Nc=u:s.next=u,u===null&&(Fs=s)):(s=o,(t!==0||(d&3)!==0)&&(Lc=!0)),o=u}En!==0&&En!==5||nl(t),sr!==0&&(sr=0)}function Dv(t,n){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ve(d),w=1<<x,G=u[x];G===-1?((w&s)===0||(w&o)!==0)&&(u[x]=Ge(w,n)):G<=n&&(t.expiredLanes|=w),d&=~w}if(n=Kt,s=bt,s=ye(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(o!==null&&Qt(o),Mo(s)){case 2:case 8:s=M;break;case 32:s=Q;break;case 268435456:s=ge;break;default:s=Q}return o=Nv.bind(null,t),s=nn(s,o),t.callbackPriority=n,t.callbackNode=s,n}return o!==null&&o!==null&&Qt(o),t.callbackPriority=2,t.callbackNode=null,2}function Nv(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Dc()&&t.callbackNode!==s)return null;var o=bt;return o=ye(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(dv(t,o,n),Dv(t,Xt()),t.callbackNode!=null&&t.callbackNode===s?Nv.bind(null,t):null)}function Lv(t,n){if(Dc())return null;dv(t,n,!0)}function F1(){K1(function(){(Ot&6)!==0?nn(I,z1):wv()})}function Fd(){if(sr===0){var t=Ms;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),sr=t}return sr}function Uv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cr(""+t)}function Ov(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function B1(t,n,s,o,u){if(n==="submit"&&s&&s.stateNode===u){var d=Uv((u[Dn]||null).action),x=o.submitter;x&&(n=(n=x[Dn]||null)?Uv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var w=new Xl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(sr!==0){var G=x?Ov(u,x):new FormData(u);ad(s,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(w.preventDefault(),G=x?Ov(u,x):new FormData(u),ad(s,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Bd=0;Bd<Sf.length;Bd++){var Hd=Sf[Bd],H1=Hd.toLowerCase(),G1=Hd[0].toUpperCase()+Hd.slice(1);Ui(H1,"on"+G1)}Ui(fg,"onAnimationEnd"),Ui(dg,"onAnimationIteration"),Ui(hg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(i1,"onTransitionRun"),Ui(a1,"onTransitionStart"),Ui(r1,"onTransitionCancel"),Ui(pg,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Pv(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var w=o[x],G=w.instance,ne=w.currentTarget;if(w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(xe){jl(xe)}u.currentTarget=null,d=G}else for(x=0;x<o.length;x++){if(w=o[x],G=w.instance,ne=w.currentTarget,w=w.listener,G!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(xe){jl(xe)}u.currentTarget=null,d=G}}}}function St(t,n){var s=n[Tr];s===void 0&&(s=n[Tr]=new Set);var o=t+"__bubble";s.has(o)||(Iv(n,t,2,!1),s.add(o))}function Gd(t,n,s){var o=0;n&&(o|=4),Iv(s,t,o,n)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[Uc]){t[Uc]=!0,Hl.forEach(function(s){s!=="selectionchange"&&(V1.has(s)||Gd(s,!1,t),Gd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Uc]||(n[Uc]=!0,Gd("selectionchange",!1,n))}}function Iv(t,n,s,o){switch(f_(n)){case 2:var u=gM;break;case 8:u=vM;break;default:u=ih}s=u.bind(null,n,s,t),u=void 0,!lf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function kd(t,n,s,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var w=o.stateNode.containerInfo;if(w===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;w!==null;){if(x=sa(w),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=d=x;continue e}w=w.parentNode}}o=o.return}Gm(function(){var ne=d,xe=sf(s),Me=[];e:{var le=mg.get(t);if(le!==void 0){var ue=Xl,Ke=t;switch(t){case"keypress":if(Vl(s)===0)break e;case"keydown":case"keyup":ue=Pb;break;case"focusin":Ke="focus",ue=df;break;case"focusout":Ke="blur",ue=df;break;case"beforeblur":case"afterblur":ue=df;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Fb;break;case fg:case dg:case hg:ue=Ab;break;case pg:ue=Hb;break;case"scroll":case"scrollend":ue=Sb;break;case"wheel":ue=Vb;break;case"copy":case"cut":case"paste":ue=Cb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=qm;break;case"toggle":case"beforetoggle":ue=Xb}var lt=(n&4)!==0,jt=!lt&&(t==="scroll"||t==="scrollend"),K=lt?le!==null?le+"Capture":null:le;lt=[];for(var X=ne,te;X!==null;){var Se=X;if(te=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||te===null||K===null||(Se=To(X,K),Se!=null&&lt.push(al(X,Se,te))),jt)break;X=X.return}0<lt.length&&(le=new ue(le,Ke,null,s,xe),Me.push({event:le,listeners:lt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&s!==rf&&(Ke=s.relatedTarget||s.fromElement)&&(sa(Ke)||Ke[jn]))break e;if((ue||le)&&(le=xe.window===xe?xe:(le=xe.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(Ke=s.relatedTarget||s.toElement,ue=ne,Ke=Ke?sa(Ke):null,Ke!==null&&(jt=c(Ke),lt=Ke.tag,Ke!==jt||lt!==5&&lt!==27&&lt!==6)&&(Ke=null)):(ue=null,Ke=ne),ue!==Ke)){if(lt=Xm,Se="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(lt=qm,Se="onPointerLeave",K="onPointerEnter",X="pointer"),jt=ue==null?le:Rr(ue),te=Ke==null?le:Rr(Ke),le=new lt(Se,X+"leave",ue,s,xe),le.target=jt,le.relatedTarget=te,Se=null,sa(xe)===ne&&(lt=new lt(K,X+"enter",Ke,s,xe),lt.target=te,lt.relatedTarget=jt,Se=lt),jt=Se,ue&&Ke)t:{for(lt=k1,K=ue,X=Ke,te=0,Se=K;Se;Se=lt(Se))te++;Se=0;for(var rt=X;rt;rt=lt(rt))Se++;for(;0<te-Se;)K=lt(K),te--;for(;0<Se-te;)X=lt(X),Se--;for(;te--;){if(K===X||X!==null&&K===X.alternate){lt=K;break t}K=lt(K),X=lt(X)}lt=null}else lt=null;ue!==null&&zv(Me,le,ue,lt,!1),Ke!==null&&jt!==null&&zv(Me,jt,Ke,lt,!0)}}e:{if(le=ne?Rr(ne):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var Nt=eg;else if($m(le))if(tg)Nt=e1;else{Nt=$b;var $e=Qb}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&It(ne.elementType)&&(Nt=eg):Nt=Jb;if(Nt&&(Nt=Nt(t,ne))){Jm(Me,Nt,s,xe);break e}$e&&$e(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&xt(le,"number",le.value)}switch($e=ne?Rr(ne):window,t){case"focusin":($m($e)||$e.contentEditable==="true")&&(ms=$e,_f=ne,Uo=null);break;case"focusout":Uo=_f=ms=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,cg(Me,s,xe);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":cg(Me,s,xe)}var vt;if(pf)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else ps?Km(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(jm&&s.locale!=="ko"&&(ps||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&ps&&(vt=Vm()):(Xa=xe,cf="value"in Xa?Xa.value:Xa.textContent,ps=!0)),$e=Oc(ne,Mt),0<$e.length&&(Mt=new Wm(Mt,t,null,s,xe),Me.push({event:Mt,listeners:$e}),vt?Mt.data=vt:(vt=Qm(s),vt!==null&&(Mt.data=vt)))),(vt=qb?jb(t,s):Yb(t,s))&&(Mt=Oc(ne,"onBeforeInput"),0<Mt.length&&($e=new Wm("onBeforeInput","beforeinput",null,s,xe),Me.push({event:$e,listeners:Mt}),$e.data=vt)),B1(Me,t,ne,s,xe)}Pv(Me,n)})}function al(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Oc(t,n){for(var s=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=To(t,s),u!=null&&o.unshift(al(t,u,d)),u=To(t,n),u!=null&&o.push(al(t,u,d))),t.tag===3)return o;t=t.return}return[]}function k1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zv(t,n,s,o,u){for(var d=n._reactName,x=[];s!==null&&s!==o;){var w=s,G=w.alternate,ne=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||ne===null||(G=ne,u?(ne=To(s,d),ne!=null&&x.unshift(al(s,ne,G))):u||(ne=To(s,d),ne!=null&&x.push(al(s,ne,G)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var X1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function Fv(t){return(typeof t=="string"?t:""+t).replace(X1,`
`).replace(W1,"")}function Bv(t,n){return n=Fv(n),Fv(t)===n}function qt(t,n,s,o,u,d){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&si(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,s,o);break;case"style":Li(t,o,d);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Cr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Cr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=la);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=Cr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,Ie(t,s,o))}}function Xd(t,n,s,o,u,d){switch(s){case"style":Li(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Ie(t,s,o)}}}function On(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(t,n,d,x,s,null)}}u&&qt(t,n,"srcSet",s.srcSet,s,null),o&&qt(t,n,"src",s.src,s,null);return;case"input":St("invalid",t);var w=d=x=u=null,G=null,ne=null;for(o in s)if(s.hasOwnProperty(o)){var xe=s[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":x=xe;break;case"checked":G=xe;break;case"defaultChecked":ne=xe;break;case"value":d=xe;break;case"defaultValue":w=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,n));break;default:qt(t,n,o,xe,s,null)}}Fn(t,d,w,G,ne,x,u,!1);return;case"select":St("invalid",t),o=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(w=s[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":x=w;break;case"multiple":o=w;default:qt(t,n,u,w,s,null)}n=d,s=x,t.multiple=!!o,n!=null?Mn(t,!!o,n,!1):s!=null&&Mn(t,!!o,s,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(w=s[x],w!=null))switch(x){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:qt(t,n,x,w,s,null)}Ni(t,o,u,d);return;case"option":for(G in s)s.hasOwnProperty(G)&&(o=s[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,G,o,s,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<il.length;o++)St(il[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(o=s[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(t,n,ne,o,s,null)}return;default:if(It(n)){for(xe in s)s.hasOwnProperty(xe)&&(o=s[xe],o!==void 0&&Xd(t,n,xe,o,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(o=s[w],o!=null&&qt(t,n,w,o,s,null))}function q1(t,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,w=null,G=null,ne=null,xe=null;for(ue in s){var Me=s[ue];if(s.hasOwnProperty(ue)&&Me!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":G=Me;default:o.hasOwnProperty(ue)||qt(t,n,ue,null,o,Me)}}for(var le in o){var ue=o[le];if(Me=s[le],o.hasOwnProperty(le)&&(ue!=null||Me!=null))switch(le){case"type":d=ue;break;case"name":u=ue;break;case"checked":ne=ue;break;case"defaultChecked":xe=ue;break;case"value":x=ue;break;case"defaultValue":w=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,n));break;default:ue!==Me&&qt(t,n,le,ue,o,Me)}}ke(t,x,w,G,ne,xe,d,u);return;case"select":ue=x=w=le=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ue=G;default:o.hasOwnProperty(d)||qt(t,n,d,null,o,G)}for(u in o)if(d=o[u],G=s[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":le=d;break;case"defaultValue":w=d;break;case"multiple":x=d;default:d!==G&&qt(t,n,u,d,o,G)}n=w,s=x,o=ue,le!=null?Mn(t,!!s,le,!1):!!o!=!!s&&(n!=null?Mn(t,!!s,n,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":ue=le=null;for(w in s)if(u=s[w],s.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:qt(t,n,w,null,o,u)}for(x in o)if(u=o[x],d=s[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":le=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&qt(t,n,x,u,o,d)}ri(t,le,ue);return;case"option":for(var Ke in s)le=s[Ke],s.hasOwnProperty(Ke)&&le!=null&&!o.hasOwnProperty(Ke)&&(Ke==="selected"?t.selected=!1:qt(t,n,Ke,null,o,le));for(G in o)le=o[G],ue=s[G],o.hasOwnProperty(G)&&le!==ue&&(le!=null||ue!=null)&&(G==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":qt(t,n,G,le,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)le=s[lt],s.hasOwnProperty(lt)&&le!=null&&!o.hasOwnProperty(lt)&&qt(t,n,lt,null,o,le);for(ne in o)if(le=o[ne],ue=s[ne],o.hasOwnProperty(ne)&&le!==ue&&(le!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,n));break;default:qt(t,n,ne,le,o,ue)}return;default:if(It(n)){for(var jt in s)le=s[jt],s.hasOwnProperty(jt)&&le!==void 0&&!o.hasOwnProperty(jt)&&Xd(t,n,jt,void 0,o,le);for(xe in o)le=o[xe],ue=s[xe],!o.hasOwnProperty(xe)||le===ue||le===void 0&&ue===void 0||Xd(t,n,xe,le,o,ue);return}}for(var K in s)le=s[K],s.hasOwnProperty(K)&&le!=null&&!o.hasOwnProperty(K)&&qt(t,n,K,null,o,le);for(Me in o)le=o[Me],ue=s[Me],!o.hasOwnProperty(Me)||le===ue||le==null&&ue==null||qt(t,n,Me,le,o,ue)}function Hv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function j1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,x=u.initiatorType,w=u.duration;if(d&&w&&Hv(x)){for(x=0,w=u.responseEnd,o+=1;o<s.length;o++){var G=s[o],ne=G.startTime;if(ne>w)break;var xe=G.transferSize,Me=G.initiatorType;xe&&Hv(Me)&&(G=G.responseEnd,x+=xe*(G<w?1:(w-ne)/(G-ne)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wd=null,qd=null;function Pc(t){return t.nodeType===9?t:t.ownerDocument}function Gv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Y1(){var t=window.event;return t&&t.type==="popstate"?t===Yd?!1:(Yd=t,!0):(Yd=null,!1)}var kv=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,Xv=typeof Promise=="function"?Promise:void 0,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xv<"u"?function(t){return Xv.resolve(null).then(t).catch(Q1)}:kv;function Q1(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function Wv(t,n){var s=n,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Vs(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")rl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,rl(s);for(var d=s.firstChild;d;){var x=d.nextSibling,w=d.nodeName;d[Ha]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&rl(t.ownerDocument.body);s=u}while(s);Vs(n)}function qv(t,n){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function Zd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Zd(s),Ga(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function $1(t,n,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ha])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function J1(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function jv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function Kd(t){return t.data==="$?"||t.data==="$~"}function Qd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $d=null;function Yv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Ei(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Zv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Kv(t,n,s){switch(n=Pc(s),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function rl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ga(t)}var Ti=new Map,Qv=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ea=H.d;H.d={f:tM,r:nM,D:iM,C:aM,L:rM,m:sM,X:lM,S:oM,M:cM};function tM(){var t=Ea.f(),n=Rc();return t||n}function nM(t){var n=oa(t);n!==null&&n.tag===5&&n.type==="form"?p0(n):Ea.r(t)}var Bs=typeof document>"u"?null:document;function $v(t,n,s){var o=Bs;if(o&&typeof n=="string"&&n){var u=Bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Qv.has(u)||(Qv.add(u),t={rel:t,crossOrigin:s,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function iM(t){Ea.D(t),$v("dns-prefetch",t,null)}function aM(t,n){Ea.C(t,n),$v("preconnect",t,n)}function rM(t,n,s){Ea.L(t,n,s);var o=Bs;if(o&&t&&n){var u='link[rel="preload"][as="'+Bt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Bt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Bt(s.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var d=u;switch(n){case"style":d=Hs(t);break;case"script":d=Gs(t)}Ti.has(d)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ti.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(sl(d))||n==="script"&&o.querySelector(ol(d))||(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function sM(t,n){Ea.m(t,n);var s=Bs;if(s&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Gs(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ti.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ol(d)))return}o=s.createElement("link"),On(o,"link",t),gn(o),s.head.appendChild(o)}}}function oM(t,n,s){Ea.S(t,n,s);var o=Bs;if(o&&t){var u=Va(o).hoistableStyles,d=Hs(t);n=n||"default";var x=u.get(d);if(!x){var w={loading:0,preload:null};if(x=o.querySelector(sl(d)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ti.get(d))&&Jd(t,s);var G=x=o.createElement("link");gn(G),On(G,"link",t),G._p=new Promise(function(ne,xe){G.onload=ne,G.onerror=xe}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,zc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:w},u.set(d,x)}}}function lM(t,n){Ea.X(t,n);var s=Bs;if(s&&t){var o=Va(s).hoistableScripts,u=Gs(t),d=o.get(u);d||(d=s.querySelector(ol(u)),d||(t=v({src:t,async:!0},n),(n=Ti.get(u))&&eh(t,n),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function cM(t,n){Ea.M(t,n);var s=Bs;if(s&&t){var o=Va(s).hoistableScripts,u=Gs(t),d=o.get(u);d||(d=s.querySelector(ol(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&eh(t,n),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Jv(t,n,s,o){var u=(u=ee.current)?Ic(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Hs(s.href),s=Va(u).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Hs(s.href);var d=Va(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(sl(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||uM(u,t,s,x.state))),n&&o===null)throw Error(a(528,""));return x}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Gs(s),s=Va(u).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Hs(t){return'href="'+Bt(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function e_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function uM(t,n,s,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",s),gn(n),t.head.appendChild(n))}function Gs(t){return'[src="'+Bt(t)+'"]'}function ol(t){return"script[async]"+t}function t_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(s.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),On(o,"style",u),zc(o,s.precedence,t),n.instance=o;case"stylesheet":u=Hs(s.href);var d=t.querySelector(sl(u));if(d)return n.state.loading|=4,n.instance=d,gn(d),d;o=e_(s),(u=Ti.get(u))&&Jd(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),On(d,"link",o),n.state.loading|=4,zc(d,s.precedence,t),n.instance=d;case"script":return d=Gs(s.src),(u=t.querySelector(ol(d)))?(n.instance=u,gn(u),u):(o=s,(u=Ti.get(d))&&(o=v({},s),eh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),On(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,zc(o,s.precedence,t));return n.instance}function zc(t,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var w=o[x];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fc=null;function n_(t,n,s){if(Fc===null){var o=new Map,u=Fc=new Map;u.set(s,o)}else u=Fc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ha]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var w=o.get(x);w?w.push(d):o.set(x,[d])}}return o}function i_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function fM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function a_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dM(t,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Hs(o.href),d=n.querySelector(sl(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Bc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=n.ownerDocument||n,o=e_(o),(u=Ti.get(u))&&Jd(o,u),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),On(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Bc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var th=0;function hM(t,n){return t.stylesheets&&t.count===0&&Gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&Gc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&th===0&&(th=62500*j1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>th?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hc=null;function Gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hc=new Map,n.forEach(pM,t),Hc=null,Bc.call(t))}function pM(t,n){if(!(n.state.loading&4)){var s=Hc.get(t);if(s)var o=s.get(null);else{s=new Map,Hc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,u),s.set(x,u),this.count++,o=Bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ll={$$typeof:F,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function mM(t,n,s,o,u,d,x,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function r_(t,n,s,o,u,d,x,w,G,ne,xe,Me){return t=new mM(t,n,s,x,G,ne,xe,Me,w),n=1,d===!0&&(n|=24),d=li(3,null,null,n),t.current=d,d.stateNode=t,n=Of(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:n},Ff(d),t}function s_(t){return t?(t=_s,t):_s}function o_(t,n,s,o,u,d){u=s_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ka(n),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Qa(t,o,n),s!==null&&(Jn(s,t,n),Ho(s,t,n))}function l_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function nh(t,n){l_(t,n),(t=t.alternate)&&l_(t,n)}function c_(t){if(t.tag===13||t.tag===31){var n=Lr(t,67108864);n!==null&&Jn(n,t,67108864),nh(t,67108864)}}function u_(t){if(t.tag===13||t.tag===31){var n=hi();n=bo(n);var s=Lr(t,n);s!==null&&Jn(s,t,n),nh(t,n)}}var Vc=!0;function gM(t,n,s,o){var u=C.T;C.T=null;var d=H.p;try{H.p=2,ih(t,n,s,o)}finally{H.p=d,C.T=u}}function vM(t,n,s,o){var u=C.T;C.T=null;var d=H.p;try{H.p=8,ih(t,n,s,o)}finally{H.p=d,C.T=u}}function ih(t,n,s,o){if(Vc){var u=ah(o);if(u===null)kd(t,n,o,kc,s),d_(t,o);else if(xM(u,t,n,s,o))o.stopPropagation();else if(d_(t,o),n&4&&-1<_M.indexOf(t)){for(;u!==null;){var d=oa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=we(d.pendingLanes);if(x!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var G=1<<31-Ve(x);w.entanglements[1]|=G,x&=~G}Ki(d),(Ot&6)===0&&(Tc=Xt()+500,nl(0))}}break;case 31:case 13:w=Lr(d,2),w!==null&&Jn(w,d,2),Rc(),nh(d,2)}if(d=ah(o),d===null&&kd(t,n,o,kc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else kd(t,n,o,null,s)}}function ah(t){return t=sf(t),rh(t)}var kc=null;function rh(t){if(kc=null,t=sa(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=f(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kc=t,null}function f_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case I:return 2;case M:return 8;case Q:case se:return 32;case ge:return 268435456;default:return 32}default:return 32}}var sh=!1,lr=null,cr=null,ur=null,cl=new Map,ul=new Map,fr=[],_M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d_(t,n){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function fl(t,n,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&c_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xM(t,n,s,o,u){switch(n){case"focusin":return lr=fl(lr,t,n,s,o,u),!0;case"dragenter":return cr=fl(cr,t,n,s,o,u),!0;case"mouseover":return ur=fl(ur,t,n,s,o,u),!0;case"pointerover":var d=u.pointerId;return cl.set(d,fl(cl.get(d)||null,t,n,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ul.set(d,fl(ul.get(d)||null,t,n,s,o,u)),!0}return!1}function h_(t){var n=sa(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){t.blockedOn=n,fs(t.priority,function(){u_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,fs(t.priority,function(){u_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=ah(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);rf=o,s.target.dispatchEvent(o),rf=null}else return n=oa(s),n!==null&&c_(n),t.blockedOn=s,!1;n.shift()}return!0}function p_(t,n,s){Xc(t)&&s.delete(n)}function yM(){sh=!1,lr!==null&&Xc(lr)&&(lr=null),cr!==null&&Xc(cr)&&(cr=null),ur!==null&&Xc(ur)&&(ur=null),cl.forEach(p_),ul.forEach(p_)}function Wc(t,n){t.blockedOn===n&&(t.blockedOn=null,sh||(sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yM)))}var qc=null;function m_(t){qc!==t&&(qc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(rh(o||s)===null)continue;break}var d=oa(s);d!==null&&(t.splice(n,3),n-=3,ad(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Vs(t){function n(G){return Wc(G,t)}lr!==null&&Wc(lr,t),cr!==null&&Wc(cr,t),ur!==null&&Wc(ur,t),cl.forEach(n),ul.forEach(n);for(var s=0;s<fr.length;s++){var o=fr[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<fr.length&&(s=fr[0],s.blockedOn===null);)h_(s),s.blockedOn===null&&fr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],x=u[Dn]||null;if(typeof d=="function")x||m_(s);else if(x){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Dn]||null)w=x.formAction;else if(rh(u)!==null)continue}else w=x.action;typeof w=="function"?s[o+1]=w:(s.splice(o,3),o-=3),m_(s)}}}function g_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function oh(t){this._internalRoot=t}jc.prototype.render=oh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=hi();o_(s,o,t,n,null,null)},jc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;o_(t.current,2,null,t,null,null),Rc(),n[jn]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Eo();t={blockedOn:null,target:t,priority:n};for(var s=0;s<fr.length&&n!==0&&n<fr[s].priority;s++);fr.splice(s,0,t),s===0&&h_(t)}};var v_=e.version;if(v_!=="19.2.8")throw Error(a(527,v_,"19.2.8"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var SM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{me=Yc.inject(SM),ve=Yc}catch{}}return hl.createRoot=function(t,n){if(!l(t))throw Error(a(299));var s=!1,o="",u=E0,d=T0,x=A0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=r_(t,1,!1,null,null,s,o,null,u,d,x,g_),t[jn]=n.current,Vd(t),new oh(n)},hl.hydrateRoot=function(t,n,s){if(!l(t))throw Error(a(299));var o=!1,u="",d=E0,x=T0,w=A0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=r_(t,1,!0,n,s??null,o,u,G,d,x,w,g_),n.context=s_(null),s=n.current,o=hi(),o=bo(o),u=Ka(o),u.callback=null,Qa(s,u,o),s=o,n.current.lanes=s,je(n,s),Ki(n),t[jn]=n.current,Vd(t),new jc(n)},hl.version="19.2.8",hl}var ax;function p2(){if(ax)return mh.exports;ax=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),mh.exports=h2(),mh.exports}var m2=p2();function xh(r){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${r}-${e}`}function rx(r){return{id:r.message_id,role:r.role,content:r.content}}function Wr(r,e,i,a){return r.map(l=>l.id!==e?l:{...l,content:i,streaming:a})}function g2(r,e,i){return e?r.find(a=>a.conversation_id===e)?.title??i:i}function v2(r,e){const[i,a]=Xe.useState([]),[l,c]=Xe.useState(null),f=l,[h,m]=Xe.useState([]),[p,_]=Xe.useState(""),[v,g]=Xe.useState("idle"),[S,E]=Xe.useState(null),[D,b]=Xe.useState(null),[y,P]=Xe.useState(null),[F,L]=Xe.useState(null),[O,U]=Xe.useState([]),B=Xe.useRef(0),T=Xe.useRef(null);Xe.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const z=Xe.useMemo(()=>g2(i,l,e.newConversationTitle),[l,i,e.newConversationTitle]),q=v!=="idle";Xe.useEffect(()=>{let N=!0;async function k(){try{let pe=await r.listConversations(),be=localStorage.getItem(e.storageKey);pe.some(ce=>ce.conversation_id===be)||(be=pe[0]?.conversation_id??null),be||(be=(await r.createConversation()).conversation_id,pe=await r.listConversations());const ee=await r.loadMessages(be);if(!N)return;a(pe),c(be),m(ee.map(rx)),localStorage.setItem(e.storageKey,be)}catch(pe){N&&L(pe instanceof Error?pe.message:e.wakeErrorMessage)}}return k(),()=>{N=!1}},[r,e.storageKey,e.wakeErrorMessage]);async function V(){a(await r.listConversations())}async function Z(){if(q||h.length===0)return!1;const N=await r.createConversation();return c(N.conversation_id),m([]),b(null),E(null),P(null),localStorage.setItem(e.storageKey,N.conversation_id),await V(),!0}async function fe(N){if(!q){if(await r.deleteConversation(N),N===f){const k=(await r.listConversations()).filter(pe=>pe.conversation_id!==N);k.length>0?await $(k[0].conversation_id):await Z()}await V()}}async function de(N){return r.getPassage(N)}async function $(N){if(q||N===l)return!1;const k=B.current+1;B.current=k;const pe=await r.loadMessages(N);return B.current!==k?!1:(c(N),m(pe.map(rx)),b(null),E(null),P(null),localStorage.setItem(e.storageKey,N),!0)}function C(N,k,pe){if(N.type==="delta"){T.current&&clearTimeout(T.current),U([]);const be=pe+N.text;return m(Ae=>Wr(Ae,k,be,!0)),{text:be,terminal:!1}}return N.type==="completed"?(m(be=>Wr(be,k,N.text,!1)),E(k),{text:N.text,terminal:!0}):N.type==="tool"?(U([{name:N.name,status:N.status,detail:N.detail,preview:N.preview,handles:N.handles}]),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>U([]),3500),{text:pe,terminal:!1}):(m(be=>Wr(be,k,pe,!1)),P(N.message),{text:pe,terminal:!0})}async function H(N){if(!l||q)return;const k=xh("assistant");_(""),b(N),E(null),P(null),U([]),g("streaming"),m(Ae=>[...Ae,{id:xh("owner"),role:"owner",content:N},{id:k,role:"weaver",content:"",streaming:!0}]);let pe="",be=!1;try{for await(const Ae of r.streamTurn(l,N)){const ee=C(Ae,k,pe);if(pe=ee.text,be=ee.terminal,ee.terminal)break}be||(m(Ae=>Wr(Ae,k,pe,!1)),P(e.incompleteTurnMessage))}catch(Ae){m(ce=>Wr(ce,k,pe,!1));const ee=Ae instanceof Error?Ae.message:e.connectionLostMessage;P(Ae instanceof Error?`${ee} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}async function J(){if(!(!l||v!=="streaming")){g("cancelling");try{await r.cancelTurn(l)}catch(N){P(N instanceof Error?N.message:e.cancelFailedMessage),g("streaming")}}}function he(){D&&v==="idle"&&H(D)}async function Ee(){if(!l||v!=="idle"||!D)return;const N=xh("assistant");E(null),P(null),U([]),g("streaming"),m(be=>[...be,{id:N,role:"weaver",content:"",streaming:!0}]);let k="",pe=!1;try{for await(const be of r.retryTurn(l)){const Ae=C(be,N,k);if(k=Ae.text,pe=Ae.terminal,Ae.terminal)break}pe||(m(be=>Wr(be,N,k,!1)),P(e.incompleteTurnMessage))}catch(be){m(ee=>Wr(ee,N,k,!1));const Ae=be instanceof Error?be.message:e.connectionLostMessage;P(be instanceof Error?`${Ae} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}return{activeTitle:z,activity:O,bootError:F,cancelTurn:J,conversationId:l,conversations:i,createConversation:Z,deleteConversation:fe,loadPassage:de,draft:p,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:he,retryLastTurn:Ee,selectConversation:$,sendMessage:H,setDraft:_,turnActive:q,turnState:v}}const Ai={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."};var _2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},x2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},y2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},S2={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},b2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},M2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},E2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},T2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},A2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},R2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},C2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},w2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},D2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},N2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},L2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},U2={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function O2(r){return r=r-0,r===r}function wS(r){return O2(r)?r:(r=r.replace(/[_-]+(.)?/g,(e,i)=>i?i.toUpperCase():""),r.charAt(0).toLowerCase()+r.slice(1))}var P2=(r,e)=>fm.createElement("stop",{key:`${e}-${r.offset}`,offset:r.offset,stopColor:r.color,...r.opacity!==void 0&&{stopOpacity:r.opacity}});function I2(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Xs=new Map,z2=1e3;function F2(r){if(Xs.has(r))return Xs.get(r);const e={};let i=0;const a=r.length;for(;i<a;){const l=r.indexOf(";",i),c=l===-1?a:l,f=r.slice(i,c).trim();if(f){const h=f.indexOf(":");if(h>0){const m=f.slice(0,h).trim(),p=f.slice(h+1).trim();if(m&&p){const _=wS(m);e[_.startsWith("webkit")?I2(_):_]=p}}}i=c+1}if(Xs.size===z2){const l=Xs.keys().next().value;l&&Xs.delete(l)}return Xs.set(r,e),e}function DS(r,e,i={}){if(typeof e=="string")return e;const a=(e.children||[]).map(v=>{let g=v;return("fill"in i||i.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),DS(r,g)}),l=e.attributes||{},c={};for(const[v,g]of Object.entries(l))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=F2(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[wS(v)]=g}const{style:f,role:h,"aria-label":m,gradientFill:p,..._}=i;if(f&&(c.style=c.style?{...c.style,...f}:f),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;a.unshift(r(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(P2)))}return r(e.tag,{...c,..._},...a)}var B2=DS.bind(null,fm.createElement),sx=(r,e)=>{const i=Xe.useId();return r||(e?i:void 0)},H2=class{constructor(r="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=r,this.enabled=e}log(...r){this.enabled&&console.log(`[${this.scope}]`,...r)}warn(...r){this.enabled&&console.warn(`[${this.scope}]`,...r)}error(...r){this.enabled&&console.error(`[${this.scope}]`,...r)}},G2="searchPseudoElementsFullScan"in ss&&typeof ss.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",V2=Number.parseInt(G2)>=7,k2=()=>V2,Rl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},X2={left:"fa-pull-left",right:"fa-pull-right"},W2={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},q2={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ii={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function j2(r){const e=ss.cssPrefix||ss.familyPrefix||Rl;return e===Rl?r:r.replace(new RegExp(String.raw`(?<=^|\s)${Rl}-`,"g"),`${e}-`)}function Y2(r){const{beat:e,fade:i,beatFade:a,bounce:l,shake:c,spin:f,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:E,rotation:D,pull:b,swapOpacity:y,rotateBy:P,widthAuto:F,canvasSquare:L,canvasRoomy:O,flip360:U,buzz:B,float:T,jello:z,spinSnap:q,spinSnap4:V,spinSnap8:Z,swing:fe,wag:de,className:$}=r,C=[];return $&&C.push(...$.split(" ")),e&&C.push(Cn.beat),i&&C.push(Cn.fade),a&&C.push(Cn.beatFade),l&&C.push(Cn.bounce),c&&C.push(Cn.shake),f&&C.push(Cn.spin),m&&C.push(Cn.spinReverse),h&&C.push(Cn.spinPulse),p&&C.push(Cn.pulse),_&&C.push(Ii.fixedWidth),v&&C.push(Ii.inverse),g&&C.push(Ii.border),S===!0&&C.push(Ii.flip),(S==="horizontal"||S==="both")&&C.push(Ii.flipHorizontal),(S==="vertical"||S==="both")&&C.push(Ii.flipVertical),E!=null&&C.push(q2[E]),D!=null&&D!==0&&C.push(W2[D]),b!=null&&C.push(X2[b]),y&&C.push(Ii.swapOpacity),k2()?(P&&C.push(Ii.rotateBy),F&&C.push(Ii.widthAuto),L&&C.push(Ii.canvasSquare),O&&C.push(Ii.canvasRoomy),U&&C.push(Cn.flip360),B&&C.push(Cn.buzz),T&&C.push(Cn.float),z&&C.push(Cn.jello),q&&C.push(Cn.spinSnap),V&&C.push(Cn.spinSnap4),Z&&C.push(Cn.spinSnap8),fe&&C.push(Cn.swing),de&&C.push(Cn.wag),(ss.cssPrefix||ss.familyPrefix||Rl)===Rl?C:C.map(j2)):C}var Z2=r=>typeof r=="object"&&"icon"in r&&!!r.icon;function ox(r){if(r)return Z2(r)?r:CS.icon(r)}function K2(r){return Object.keys(r)}var lx=new H2("FontAwesomeIcon"),NS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Q2=new Set(Object.keys(NS)),zn=fm.forwardRef((r,e)=>{const i={...NS,...r},{icon:a,mask:l,symbol:c,title:f,titleId:h,maskId:m,transform:p}=i,_=sx(m,!!l),v=sx(h,!!f),g=ox(a);if(!g)return lx.error("Icon lookup is undefined",a),null;const S=Y2(i),E=typeof p=="string"?CS.transform(p):p,D=ox(l),b=l2(g,{...S.length>0&&{classes:S},...E&&{transform:E},...D&&{mask:D},symbol:c,title:f,titleId:v,maskId:_});if(!b)return lx.error("Could not find icon",g),null;const{abstract:y}=b,P={ref:e};for(const F of K2(i))Q2.has(F)||(P[F]=i[F]);return B2(y[0],P)});zn.displayName="FontAwesomeIcon";function $2(r){return A.jsx(zn,{"aria-hidden":"true",icon:E2,...r})}function cx(r){return A.jsx(zn,{"aria-hidden":"true",icon:N2,...r})}function J2(r){return A.jsx(zn,{"aria-hidden":"true",icon:D2,...r})}function e3(r){return A.jsx(zn,{"aria-hidden":"true",icon:A2,...r})}function t3(r){return A.jsx(zn,{"aria-hidden":"true",icon:L2,...r})}function n3(r){return A.jsx(zn,{"aria-hidden":"true",icon:b2,...r})}function LS(r){return A.jsx(zn,{"aria-hidden":"true",icon:_2,...r})}function i3(r){return A.jsx(zn,{"aria-hidden":"true",icon:w2,...r})}function US(r){return A.jsx(zn,{"aria-hidden":"true",icon:M2,...r})}function a3(r){return A.jsx(zn,{"aria-hidden":"true",icon:x2,...r})}function r3(r){return A.jsx(zn,{"aria-hidden":"true",icon:R2,...r})}function OS(r){return A.jsx(zn,{"aria-hidden":"true",icon:C2,...r})}function ux(r){return A.jsx(zn,{"aria-hidden":"true",icon:U2,...r})}function s3(r){return A.jsx(zn,{"aria-hidden":"true",icon:T2,...r})}function o3(r){return A.jsx(zn,{"aria-hidden":"true",icon:S2,...r})}const l3=["awakened","ascended","transcendent"];function c3({cancelling:r,draft:e,inputLabel:i="Message assistant",onCancel:a,onDraftChange:l,onSubmit:c,onTierChange:f,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const E=Xe.useRef(null),D=v??E,b=Xe.useRef(null),[y,P]=Xe.useState(!1);Xe.useEffect(()=>{const O=D.current;O&&(O.style.height="auto",O.style.height=`${Math.min(O.scrollHeight,160)}px`)},[e,D]),Xe.useEffect(()=>{if(!y)return;function O(B){b.current&&!b.current.contains(B.target)&&P(!1)}function U(B){B.key==="Escape"&&P(!1)}return document.addEventListener("pointerdown",O),document.addEventListener("keydown",U),()=>{document.removeEventListener("pointerdown",O),document.removeEventListener("keydown",U)}},[y]);function F(){const O=e.trim();!O||S||c(O)}function L(O){O.key!=="Enter"||O.shiftKey||(O.preventDefault(),F())}return A.jsx("div",{className:"composer-wrap",children:A.jsxs("div",{className:"composer-shell",children:[A.jsx("textarea",{"aria-label":i,disabled:S,onChange:O=>l(O.target.value),onKeyDown:L,placeholder:h,ref:D,rows:1,value:e}),A.jsxs("div",{className:"composer-tier",ref:b,children:[A.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>P(O=>!O),type:"button",children:[A.jsx("span",{className:"tier-pill-name",children:g}),A.jsx(OS,{})]}),y&&A.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:l3.map(O=>A.jsx("li",{children:A.jsxs("button",{"aria-selected":O===g,onClick:()=>{f(O),P(!1)},role:"option",type:"button",children:[A.jsx("span",{className:"tier-menu-check",children:O===g?"✦":""}),O]})},O))})]}),S?A.jsx("button",{"aria-label":r?_:p,className:"composer-action composer-stop",disabled:r,onClick:a,type:"button",children:A.jsx(t3,{})}):A.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:F,type:"button",children:A.jsx($2,{})})]})})}const u3=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function f3(r){try{const e=new URL(r);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function yh(r,e){if(!e)return;const i=r.at(-1);if(i?.type==="text"){i.value+=e;return}r.push({type:"text",value:e})}function Jc(r){const e=[];let i=0;for(const a of r.matchAll(u3)){const l=a.index??0;yh(e,r.slice(i,l));const c=a[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const f=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=f?.[2]??"";f&&f3(h)?e.push({type:"link",label:f[1],href:h}):yh(e,c)}i=l+c.length}return yh(e,r.slice(i)),e}function d3(r){const e=r.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function h3(r){const e=[],i=String(r??"").split(/\r?\n/);let a=0;for(;a<i.length;){const l=i[a].trim();if(!l){a+=1;continue}if(l.startsWith("```")){const p=[];for(a+=1;a<i.length&&!i[a].trimStart().startsWith("```");)p.push(i[a]),a+=1;a<i.length&&(a+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(l);if(c){e.push({type:"heading",level:c[1].length,children:Jc(c[2])}),a+=1;continue}if(l.startsWith(">")){e.push({type:"quote",children:Jc(l.replace(/^>\s?/,""))}),a+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){e.push({type:"rule"}),a+=1;continue}const f=/^[-*]\s+/.test(l),h=/^\d+[.)]\s+/.test(l);if(f||h){const p=[];for(;a<i.length;){const _=i[a].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(Jc(v[1])),a+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;a<i.length;){const p=i[a].trim();if(!p||m.length>0&&d3(p))break;m.push(p),a+=1}e.push({type:"paragraph",children:Jc(m.join(" "))})}return e}function so(r){return r.map((e,i)=>{const a=`${e.type}-${i}`;return e.type==="text"?A.jsx(Xe.Fragment,{children:e.value},a):e.type==="strong"?A.jsx("strong",{children:so(e.children)},a):e.type==="emphasis"?A.jsx("em",{children:so(e.children)},a):e.type==="code"?A.jsx("code",{children:e.value},a):A.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},a)})}function p3({children:r}){return h3(r).map((i,a)=>{const l=`${i.type}-${a}`;if(i.type==="paragraph")return A.jsx("p",{children:so(i.children)},l);if(i.type==="heading"){const f=`h${i.level}`;return A.jsx(f,{children:so(i.children)},l)}if(i.type==="code")return A.jsx("pre",{children:A.jsx("code",{children:i.value})},l);if(i.type==="quote")return A.jsx("blockquote",{children:so(i.children)},l);if(i.type==="rule")return A.jsx("hr",{},l);const c=i.ordered?"ol":"ul";return A.jsx(c,{children:i.items.map((f,h)=>A.jsx("li",{children:so(f)},`${l}-${h}`))},l)})}const m3={semantic_search:{doing:"searching the library",done:"searched the library"},read_chapters:{doing:"recalling a passage",done:"recalled a passage"},find_text:{doing:"finding the words",done:"found the words"},browse_chapters:{doing:"browsing the chapters",done:"browsed the chapters"},who_is:{doing:"consulting the notebook",done:"consulted the notebook"}};function g3(r,e,i){const a=m3[r];return a?e==="start"?`weaver is ${a.doing}`:`weaver has ${a.done}`:e==="start"?`${r} ${i||"started"}`.trim():`${r} ${i||"done"}`.trim()}function v3({Mark:r,activity:e,assistantName:i,message:a,onQuote:l,onRegenerate:c,onViewPassage:f,regenerateLabel:h}){const[m,p]=Xe.useState(!1),[_,v]=Xe.useState(null),[g,S]=Xe.useState(null),E=Xe.useRef(null);Xe.useEffect(()=>{function b(){if(a.role!=="weaver"||!l||!E.current)return;const y=window.getSelection(),P=y?y.toString().trim():"",F=E.current,L=y&&y.rangeCount>0&&F.contains(y.getRangeAt(0).commonAncestorContainer);if(P.length>=2&&L){const O=y.getRangeAt(0).getBoundingClientRect();v(P),S({top:O.bottom+6,left:O.left})}else v(null),S(null)}return document.addEventListener("selectionchange",b),()=>document.removeEventListener("selectionchange",b)},[a.role,l]);async function D(){await navigator.clipboard?.writeText(a.content),p(!0),window.setTimeout(()=>p(!1),1400)}return a.role==="owner"?A.jsx("article",{className:"message message-owner",children:A.jsxs("div",{className:"owner-message-content",children:[A.jsx("div",{className:"owner-bubble",children:a.content}),A.jsx("div",{className:"message-actions",children:A.jsxs("button",{"aria-label":"Copy owner message",onClick:D,type:"button",children:[A.jsx(cx,{}),A.jsx("span",{children:m?"Copied":"Copy"})]})})]})}):A.jsxs("article",{className:`message message-weaver ${a.streaming?"message-streaming":""}`,children:[A.jsx("div",{className:"weaver-avatar",children:A.jsx(r,{compact:!0})}),A.jsxs("div",{className:"weaver-message-content",children:[A.jsx("div",{className:"message-role",children:i}),e&&A.jsxs("p",{className:`spell-line spell-line-${e.status}`,children:[A.jsx("span",{className:"spell-bracket",children:"["}),g3(e.name,e.status,e.detail),e.preview&&A.jsxs("span",{className:"spell-preview",children:[" ",e.preview,"…"]}),e.handles&&e.handles.length>0&&A.jsx("button",{"aria-label":"View the recalled passage",className:"spell-view",onClick:()=>f?.(e.handles[0]),type:"button",children:"view passage"}),A.jsx("span",{className:"spell-bracket",children:"]"})]}),A.jsx("div",{className:"markdown-body",ref:E,children:a.content?A.jsx(p3,{children:a.content}):A.jsx("span",{className:"thinking-thread"})}),!a.streaming&&a.content&&A.jsxs("div",{className:"message-actions",children:[A.jsxs("button",{"aria-label":"Copy reply",onClick:D,type:"button",children:[A.jsx(cx,{}),A.jsx("span",{children:m?"Copied":"Copy"})]}),c&&A.jsxs("button",{"aria-label":"Regenerate reply",onClick:c,type:"button",children:[A.jsx(e3,{}),A.jsx("span",{children:h})]})]})]}),_&&g&&A.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{l?.(_),v(null),S(null)},style:{top:g.top,left:g.left},type:"button",children:[A.jsx(r3,{}),A.jsx("span",{children:"ask about this"})]})]})}function _3({handle:r,loadPassage:e,onClose:i}){const[a,l]=Xe.useState(null),[c,f]=Xe.useState(null);return Xe.useEffect(()=>{let h=!0;e(r).then(p=>{h&&l(p)}).catch(p=>{h&&f(p instanceof Error?p.message:"could not summon the passage")});function m(p){p.key==="Escape"&&i()}return window.addEventListener("keydown",m),()=>{h=!1,window.removeEventListener("keydown",m)}},[r,e,i]),A.jsx("div",{"aria-label":"Summoned passage","aria-modal":"true",className:"passage-backdrop",role:"dialog",children:A.jsxs("div",{className:"passage-panel",children:[A.jsxs("header",{className:"passage-header",children:[A.jsx("h2",{className:"passage-title",children:a?A.jsxs(A.Fragment,{children:["chapter ",a.chapter,A.jsxs("span",{className:"passage-lines",children:[", lines ",a.line_start,"-",a.line_end," · volume"," ",a.volume]})]}):"summoning…"}),A.jsx("button",{"aria-label":"Close passage",className:"icon-button passage-close",onClick:i,type:"button",children:"×"})]}),a&&a.beats.length>0&&A.jsx("div",{className:"passage-beats",children:a.beats.map(h=>A.jsx("span",{className:"passage-beat",children:h},h))}),c?A.jsx("p",{className:"passage-error",children:c}):A.jsx("pre",{className:"passage-text",children:a?a.text:"…"})]})})}function x3({chooseLabel:r,createLabel:e,message:i,onChooseConversation:a,onCreateConversation:l,onRetry:c,retryLabel:f,title:h}){return A.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[A.jsx("span",{className:"recovery-knot"}),A.jsxs("div",{children:[A.jsx("strong",{children:h}),A.jsx("p",{children:i}),A.jsxs("div",{className:"recovery-actions",children:[c&&f&&A.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:f}),A.jsx("button",{onClick:l,type:"button",children:e}),A.jsx("button",{onClick:a,type:"button",children:r})]})]})]})}const Em="185",y3=0,fx=1,S3=2,Du=1,b3=2,Ml=3,Er=0,ti=1,Da=2,La=0,co=1,dx=2,hx=3,px=4,M3=5,Jr=100,E3=101,T3=102,A3=103,R3=104,C3=200,w3=201,D3=202,N3=203,_p=204,xp=205,L3=206,U3=207,O3=208,P3=209,I3=210,z3=211,F3=212,B3=213,H3=214,yp=0,Sp=1,bp=2,po=3,Mp=4,Ep=5,Tp=6,Ap=7,PS=0,G3=1,V3=2,ia=0,IS=1,zS=2,FS=3,BS=4,HS=5,GS=6,VS=7,kS=300,os=301,mo=302,Sh=303,bh=304,ef=306,Rp=1e3,Na=1001,Cp=1002,Pn=1003,k3=1004,eu=1005,Vn=1006,Mh=1007,ns=1008,Di=1009,XS=1010,WS=1011,wl=1012,Tm=1013,ra=1014,ta=1015,Ia=1016,Am=1017,Rm=1018,Dl=1020,qS=35902,jS=35899,YS=1021,ZS=1022,Vi=1023,za=1026,is=1027,KS=1028,Cm=1029,ls=1030,wm=1031,Dm=1033,Nu=33776,Lu=33777,Uu=33778,Ou=33779,wp=35840,Dp=35841,Np=35842,Lp=35843,Up=36196,Op=37492,Pp=37496,Ip=37488,zp=37489,Bu=37490,Fp=37491,Bp=37808,Hp=37809,Gp=37810,Vp=37811,kp=37812,Xp=37813,Wp=37814,qp=37815,jp=37816,Yp=37817,Zp=37818,Kp=37819,Qp=37820,$p=37821,Jp=36492,em=36494,tm=36495,nm=36283,im=36284,Hu=36285,am=36286,X3=3200,mx=0,W3=1,xr="",Ci="srgb",Gu="srgb-linear",Vu="linear",kt="srgb",Ws=7680,gx=519,q3=512,j3=513,Y3=514,Nm=515,Z3=516,K3=517,Lm=518,Q3=519,vx=35044,_x="300 es",na=2e3,ku=2001;function $3(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function J3(){const r=Xu("canvas");return r.style.display="block",r}const xx={};function yx(...r){const e="THREE."+r.shift();console.log(e,...r)}function QS(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ct(...r){r=QS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=QS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function uo(...r){const e=r.join(" ");e in xx||(xx[e]=!0,ct(...r))}function eR(r,e,i){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const tR={[yp]:Sp,[bp]:Tp,[Mp]:Ap,[po]:Ep,[Sp]:yp,[Tp]:bp,[Ap]:Mp,[Ep]:po};class us{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=Math.PI/180,rm=180/Math.PI;function Ol(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Rt(r,e,i){return Math.max(e,Math.min(i,r))}function nR(r,e){return(r%e+e)%e}function Th(r,e,i){return(1-i)*r+i*e}function pl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pm=class Pm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pm.prototype.isVector2=!0;let Pt=Pm;class xo{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,h){let m=a[l+0],p=a[l+1],_=a[l+2],v=a[l+3],g=c[f+0],S=c[f+1],E=c[f+2],D=c[f+3];if(v!==D||m!==g||p!==S||_!==E){let b=m*g+p*S+_*E+v*D;b<0&&(g=-g,S=-S,E=-E,D=-D,b=-b);let y=1-h;if(b<.9995){const P=Math.acos(b),F=Math.sin(P);y=Math.sin(y*P)/F,h=Math.sin(h*P)/F,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+D*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+D*h;const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],_=a[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return e[i]=h*E+_*v+m*S-p*g,e[i+1]=m*E+_*g+p*v-h*S,e[i+2]=p*E+_*S+h*g-m*v,e[i+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(l/2),v=h(c/2),g=m(a/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=a+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=a*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-a*p,this._z=c*_+f*p+a*m-l*h,this._w=f*_-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let a=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(a=-a,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Im=class Im{constructor(e=0,i=0,a=0){this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Sx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Sx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*a),_=2*(h*i-c*l),v=2*(c*a-f*i);return this.x=i+m*p+f*v-h*_,this.y=a+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ah.copy(this).projectOnVector(e),this.sub(Ah)}reflect(e){return this.sub(Ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Im.prototype.isVector3=!0;let ie=Im;const Ah=new ie,Sx=new xo,zm=class zm{constructor(e,i,a,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p)}set(e,i,a,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],S=a[5],E=a[8],D=l[0],b=l[3],y=l[6],P=l[1],F=l[4],L=l[7],O=l[2],U=l[5],B=l[8];return c[0]=f*D+h*P+m*O,c[3]=f*b+h*F+m*U,c[6]=f*y+h*L+m*B,c[1]=p*D+_*P+v*O,c[4]=p*b+_*F+v*U,c[7]=p*y+_*L+v*B,c[2]=g*D+S*P+E*O,c[5]=g*b+S*F+E*U,c[8]=g*y+S*L+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-a*c*_+a*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,E=i*v+a*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/E;return e[0]=v*D,e[1]=(l*p-_*a)*D,e[2]=(h*a-l*f)*D,e[3]=g*D,e[4]=(_*i-l*m)*D,e[5]=(l*c-h*i)*D,e[6]=S*D,e[7]=(a*m-p*i)*D,e[8]=(f*i-a*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rh.makeScale(e,i)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rh.makeRotation(-e)),this}translate(e,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zm.prototype.isMatrix3=!0;let pt=zm;const Rh=new pt,bx=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iR(){const r={enabled:!0,workingColorSpace:Gu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=fo(l.r),l.g=fo(l.g),l.b=fo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===xr?Vu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Gu]:{primaries:e,whitePoint:a,transfer:Vu,toXYZ:bx,fromXYZ:Mx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:a,transfer:kt,toXYZ:bx,fromXYZ:Mx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),r}const At=iR();function Ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qs;class aR{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{qs===void 0&&(qs=Xu("canvas")),qs.width=e.width,qs.height=e.height;const l=qs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=qs}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xu("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ua(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Ua(i[a]/255)*255):i[a]=Ua(i[a]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rR=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=Ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ch(l[f].image)):c.push(Ch(l[f]))}else c=Ch(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?aR.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let sR=0;const wh=new ie;class Wn extends us{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,a=Na,l=Na,c=Vn,f=ns,h=Vi,m=Di,p=Wn.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=Ol(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rp:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case Cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rp:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case Cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=kS;Wn.DEFAULT_ANISOTROPY=1;const Fm=class Fm{constructor(e=0,i=0,a=0,l=1){this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],D=m[2],b=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(p+1)/2,L=(S+1)/2,O=(y+1)/2,U=(_+g)/4,B=(v+D)/4,T=(E+b)/4;return F>L&&F>O?F<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(F),l=U/a,c=B/a):L>O?L<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),a=U/l,c=T/l):O<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),a=B/c,l=T/c),this.set(a,l,c,i),this}let P=Math.sqrt((b-E)*(b-E)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(b-E)/P,this.y=(v-D)/P,this.z=(g-_)/P,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fm.prototype.isVector4=!0;let fn=Fm;class oR extends us{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:a.depth},c=new Wn(l),f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Um(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends oR{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class $S extends Wn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lR extends Wn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yu=class Yu{constructor(e,i,a,l,c,f,h,m,p,_,v,g,S,E,D,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p,_,v,g,S,E,D,b)}set(e,i,a,l,c,f,h,m,p,_,v,g,S,E,D,b){const y=this.elements;return y[0]=e,y[4]=i,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=D,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yu().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,a=e.elements,l=1/js.setFromMatrixColumn(e,0).length(),c=1/js.setFromMatrixColumn(e,1).length(),f=1/js.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*v,E=h*_,D=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-D*p,i[9]=-h*m,i[2]=D-g*p,i[6]=E+S*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,D=p*v;i[0]=g+D*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-E,i[6]=D+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,D=p*v;i[0]=g-D*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*_,i[9]=D-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,S=f*v,E=h*_,D=h*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+D,i[1]=m*v,i[5]=D*p+g,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,S=f*p,E=h*m,D=h*p;i[0]=m*_,i[4]=D-g*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-D*v}else if(e.order==="XZY"){const g=f*m,S=f*p,E=h*m,D=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+D,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*_,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cR,e,uR)}lookAt(e,i,a){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),hr.crossVectors(a,pi),hr.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),hr.crossVectors(a,pi)),hr.normalize(),tu.crossVectors(pi,hr),l[0]=hr.x,l[4]=tu.x,l[8]=pi.x,l[1]=hr.y,l[5]=tu.y,l[9]=pi.y,l[2]=hr.z,l[6]=tu.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],S=a[13],E=a[2],D=a[6],b=a[10],y=a[14],P=a[3],F=a[7],L=a[11],O=a[15],U=l[0],B=l[4],T=l[8],z=l[12],q=l[1],V=l[5],Z=l[9],fe=l[13],de=l[2],$=l[6],C=l[10],H=l[14],J=l[3],he=l[7],Ee=l[11],N=l[15];return c[0]=f*U+h*q+m*de+p*J,c[4]=f*B+h*V+m*$+p*he,c[8]=f*T+h*Z+m*C+p*Ee,c[12]=f*z+h*fe+m*H+p*N,c[1]=_*U+v*q+g*de+S*J,c[5]=_*B+v*V+g*$+S*he,c[9]=_*T+v*Z+g*C+S*Ee,c[13]=_*z+v*fe+g*H+S*N,c[2]=E*U+D*q+b*de+y*J,c[6]=E*B+D*V+b*$+y*he,c[10]=E*T+D*Z+b*C+y*Ee,c[14]=E*z+D*fe+b*H+y*N,c[3]=P*U+F*q+L*de+O*J,c[7]=P*B+F*V+L*$+O*he,c[11]=P*T+F*Z+L*C+O*Ee,c[15]=P*z+F*fe+L*H+O*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],D=e[7],b=e[11],y=e[15],P=m*S-p*g,F=h*S-p*v,L=h*g-m*v,O=f*S-p*_,U=f*g-m*_,B=f*v-h*_;return i*(D*P-b*F+y*L)-a*(E*P-b*O+y*U)+l*(E*F-D*O+y*B)-c*(E*L-D*U+b*B)}determinantAffine(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return i*(f*_-h*p)-a*(c*_-h*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],D=e[13],b=e[14],y=e[15],P=i*h-a*f,F=i*m-l*f,L=i*p-c*f,O=a*m-l*h,U=a*p-c*h,B=l*p-c*m,T=_*D-v*E,z=_*b-g*E,q=_*y-S*E,V=v*b-g*D,Z=v*y-S*D,fe=g*y-S*b,de=P*fe-F*Z+L*V+O*q-U*z+B*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/de;return e[0]=(h*fe-m*Z+p*V)*$,e[1]=(l*Z-a*fe-c*V)*$,e[2]=(D*B-b*U+y*O)*$,e[3]=(g*U-v*B-S*O)*$,e[4]=(m*q-f*fe-p*z)*$,e[5]=(i*fe-l*q+c*z)*$,e[6]=(b*L-E*B-y*F)*$,e[7]=(_*B-g*L+S*F)*$,e[8]=(f*Z-h*q+p*T)*$,e[9]=(a*q-i*Z-c*T)*$,e[10]=(E*U-D*L+y*P)*$,e[11]=(v*L-_*U-S*P)*$,e[12]=(h*z-f*V-m*T)*$,e[13]=(i*V-a*z+l*T)*$,e[14]=(D*F-E*O-b*P)*$,e[15]=(_*O-v*F+g*P)*$,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+a,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,E=c*v,D=f*_,b=f*v,y=h*v,P=m*p,F=m*_,L=m*v,O=a.x,U=a.y,B=a.z;return l[0]=(1-(D+y))*O,l[1]=(S+L)*O,l[2]=(E-F)*O,l[3]=0,l[4]=(S-L)*U,l[5]=(1-(g+y))*U,l[6]=(b+P)*U,l[7]=0,l[8]=(E+F)*B,l[9]=(b-P)*B,l[10]=(1-(g+D))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),i.identity(),this;let f=js.set(l[0],l[1],l[2]).length();const h=js.set(l[4],l[5],l[6]).length(),m=js.set(l[8],l[9],l[10]).length();c<0&&(f=-f),zi.copy(this);const p=1/f,_=1/h,v=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,i.setFromRotationMatrix(zi),a.x=f,a.y=h,a.z=m,this}makePerspective(e,i,a,l,c,f,h=na,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(a-l),g=(i+e)/(i-e),S=(a+l)/(a-l);let E,D;if(m)E=c/(f-c),D=f*c/(f-c);else if(h===na)E=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(h===ku)E=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,a,l,c,f,h=na,m=!1){const p=this.elements,_=2/(i-e),v=2/(a-l),g=-(i+e)/(i-e),S=-(a+l)/(a-l);let E,D;if(m)E=1/(f-c),D=f/(f-c);else if(h===na)E=-2/(f-c),D=-(f+c)/(f-c);else if(h===ku)E=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}};Yu.prototype.isMatrix4=!0;let dn=Yu;const js=new ie,zi=new dn,cR=new ie(0,0,0),uR=new ie(1,1,1),hr=new ie,tu=new ie,pi=new ie,Ex=new dn,Tx=new xo;class cs{constructor(e=0,i=0,a=0,l=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return Ex.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ex,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Tx.setFromEuler(this),this.setFromQuaternion(Tx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class JS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fR=0;const Ax=new ie,Ys=new xo,Ta=new dn,nu=new ie,ml=new ie,dR=new ie,hR=new xo,Rx=new ie(1,0,0),Cx=new ie(0,1,0),wx=new ie(0,0,1),Dx={type:"added"},pR={type:"removed"},Zs={type:"childadded",child:null},Dh={type:"childremoved",child:null};class qn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=Ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ie,i=new cs,a=new xo,l=new ie(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new pt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new JS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ys.setFromAxisAngle(e,i),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,i){return Ys.setFromAxisAngle(e,i),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Rx,e)}rotateY(e){return this.rotateOnAxis(Cx,e)}rotateZ(e){return this.rotateOnAxis(wx,e)}translateOnAxis(e,i){return Ax.copy(e).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rx,e)}translateY(e){return this.translateOnAxis(Cx,e)}translateZ(e){return this.translateOnAxis(wx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?nu.copy(e):nu.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(ml,nu,this.up):Ta.lookAt(nu,ml,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),Ys.setFromRotationMatrix(Ta),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dx),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pR),Dh.child=e,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dx),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,dR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,hR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*a-c[8]*l,c[13]+=a-c[1]*i-c[5]*a-c[9]*l,c[14]+=l-c[2]*i-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ie(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class iu extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mR={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const D of e.hand.values()){const b=i.getJointPose(D,a),y=this._getHandJoint(p,D);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(mR)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new iu;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}const eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},au={h:0,s:0,l:0};function Lh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Et{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=a,At.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=At.workingColorSpace){if(e=nR(e,1),i=Rt(i,0,1),a=Rt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Lh(f,c,e+1/3),this.g=Lh(f,c,e),this.b=Lh(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=Ci){function a(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ci){const a=eb[e.toLowerCase()];return a!==void 0?this.setHex(a,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return At.workingToColorSpace(Gn.copy(this),e),Math.round(Rt(Gn.r*255,0,255))*65536+Math.round(Rt(Gn.g*255,0,255))*256+Math.round(Rt(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Gn.copy(this),i);const a=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){At.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,a=Gn.g,l=Gn.b;return e!==Ci?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+i,pr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(pr),e.getHSL(au);const a=Th(pr.h,au.h,i),l=Th(pr.s,au.s,i),c=Th(pr.l,au.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Et;Et.NAMES=eb;class gR extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new ie,Aa=new ie,Uh=new ie,Ra=new ie,Ks=new ie,Qs=new ie,Nx=new ie,Oh=new ie,Ph=new ie,Ih=new ie,zh=new fn,Fh=new fn,Bh=new fn;class Hi{constructor(e=new ie,i=new ie,a=new ie){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Fi.subVectors(l,i),Aa.subVectors(a,i),Uh.subVectors(e,i);const f=Fi.dot(Fi),h=Fi.dot(Aa),m=Fi.dot(Uh),p=Aa.dot(Aa),_=Aa.dot(Uh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,a,l,c,f,h,m){return this.getBarycoord(e,i,a,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(f,Ra.y),m.addScaledVector(h,Ra.z),m)}static getInterpolatedAttribute(e,i,a,l,c,f){return zh.setScalar(0),Fh.setScalar(0),Bh.setScalar(0),zh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,a),Bh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(zh,c.x),f.addScaledVector(Fh,c.y),f.addScaledVector(Bh,c.z),f}static isFrontFacing(e,i,a,l){return Fi.subVectors(a,i),Aa.subVectors(e,i),Fi.cross(Aa).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Fi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,h;Ks.subVectors(l,a),Qs.subVectors(c,a),Oh.subVectors(e,a);const m=Ks.dot(Oh),p=Qs.dot(Oh);if(m<=0&&p<=0)return i.copy(a);Ph.subVectors(e,l);const _=Ks.dot(Ph),v=Qs.dot(Ph);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(a).addScaledVector(Ks,f);Ih.subVectors(e,c);const S=Ks.dot(Ih),E=Qs.dot(Ih);if(E>=0&&S<=E)return i.copy(c);const D=S*p-m*E;if(D<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(a).addScaledVector(Qs,h);const b=_*E-S*v;if(b<=0&&v-_>=0&&S-E>=0)return Nx.subVectors(c,l),h=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(Nx,h);const y=1/(b+D+g);return f=D*y,h=g*y,i.copy(a).addScaledVector(Ks,f).addScaledVector(Qs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pl{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ru.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ru.copy(a.boundingBox)),ru.applyMatrix4(e.matrixWorld),this.union(ru)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),su.subVectors(this.max,gl),$s.subVectors(e.a,gl),Js.subVectors(e.b,gl),eo.subVectors(e.c,gl),mr.subVectors(Js,$s),gr.subVectors(eo,Js),qr.subVectors($s,eo);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-qr.z,qr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,qr.z,0,-qr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-qr.y,qr.x,0];return!Hh(i,$s,Js,eo,su)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,$s,Js,eo,su))?!1:(ou.crossVectors(mr,gr),i=[ou.x,ou.y,ou.z],Hh(i,$s,Js,eo,su))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Bi=new ie,ru=new Pl,$s=new ie,Js=new ie,eo=new ie,mr=new ie,gr=new ie,qr=new ie,gl=new ie,su=new ie,ou=new ie,jr=new ie;function Hh(r,e,i,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){jr.fromArray(r,c);const h=l.x*Math.abs(jr.x)+l.y*Math.abs(jr.y)+l.z*Math.abs(jr.z),m=e.dot(jr),p=i.dot(jr),_=a.dot(jr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new ie,lu=new Pt;let vR=0;class bn extends us{constructor(e,i,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vR++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=vx,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)lu.fromBufferAttribute(this,i),lu.applyMatrix3(e),this.setXY(i,lu.x,lu.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=pl(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=pl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=pl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=pl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=pl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array),l=ei(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tb extends bn{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class nb extends bn{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class ki extends bn{constructor(e,i,a){super(new Float32Array(e),i,a)}}const _R=new Pl,vl=new ie,Gh=new ie;class Il{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):_R.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(vl,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Gh)),this.expandByPoint(vl.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xR=0;const Ri=new dn,Vh=new qn,to=new ie,mi=new Pl,_l=new Pl,wn=new ie;class ni extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xR++}),this.uuid=Ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($3(e)?nb:tb)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,a){return Ri.makeTranslation(e,i,a),this.applyMatrix4(Ri),this}scale(e,i,a){return Ri.makeScale(e,i,a),this.applyMatrix4(Ri),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];_l.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,_l.min),mi.expandByPoint(wn),wn.addVectors(mi.max,_l.max),mi.expandByPoint(wn)):(mi.expandByPoint(_l.min),mi.expandByPoint(_l.max))}mi.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(wn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)wn.fromBufferAttribute(h,p),m&&(to.fromBufferAttribute(e,p),wn.add(to)),l=Math.max(l,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new bn(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new ie,m[T]=new ie;const p=new ie,_=new ie,v=new ie,g=new Pt,S=new Pt,E=new Pt,D=new ie,b=new ie;function y(T,z,q){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,z),v.fromBufferAttribute(a,q),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,z),E.fromBufferAttribute(c,q),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(D.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),h[T].add(D),h[z].add(D),h[q].add(D),m[T].add(b),m[z].add(b),m[q].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,z=P.length;T<z;++T){const q=P[T],V=q.start,Z=q.count;for(let fe=V,de=V+Z;fe<de;fe+=3)y(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const F=new ie,L=new ie,O=new ie,U=new ie;function B(T){O.fromBufferAttribute(l,T),U.copy(O);const z=h[T];F.copy(z),F.sub(O.multiplyScalar(O.dot(z))).normalize(),L.crossVectors(U,z);const V=L.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,V)}for(let T=0,z=P.length;T<z;++T){const q=P[T],V=q.start,Z=q.count;for(let fe=V,de=V+Z;fe<de;fe+=3)B(e.getX(fe+0)),B(e.getX(fe+1)),B(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==i.count)a=new bn(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const l=new ie,c=new ie,f=new ie,h=new ie,m=new ie,p=new ie,_=new ie,v=new ie;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),D=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,b),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,D),p.fromBufferAttribute(a,b),h.add(_),m.add(_),p.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(D,m.x,m.y,m.z),a.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let D=0,b=m.length;D<b;D++){h.isInterleavedBufferAttribute?S=m[D]*h.data.stride+h.offset:S=m[D]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new bn(g,_,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,a);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let yR=0;class yo extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=Ol(),this.name="",this.type="Material",this.blending=co,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_p,this.blendDst=xp,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(a.blending=this.blending),this.side!==Er&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==_p&&(a.blendSrc=this.blendSrc),this.blendDst!==xp&&(a.blendDst=this.blendDst),this.blendEquation!==Jr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Pt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wa=new ie,kh=new ie,cu=new ie,vr=new ie,Xh=new ie,uu=new ie,Wh=new ie;class Om{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=wa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){kh.copy(e).add(i).multiplyScalar(.5),cu.copy(i).sub(e).normalize(),vr.copy(this.origin).sub(kh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(cu),h=vr.dot(this.direction),m=-vr.dot(cu),p=vr.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const D=1/_;v*=D,g*=D,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(kh).addScaledVector(cu,g),S}intersectSphere(e,i){wa.subVectors(e.center,this.origin);const a=wa.dot(this.direction),l=wa.dot(wa)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,i,a,l,c){Xh.subVectors(i,e),uu.subVectors(a,e),Wh.crossVectors(Xh,uu);let f=this.direction.dot(Wh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;vr.subVectors(this.origin,e);const m=h*this.direction.dot(uu.crossVectors(vr,uu));if(m<0)return null;const p=h*this.direction.dot(Xh.cross(vr));if(p<0||m+p>f)return null;const _=-h*vr.dot(Wh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ib extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=PS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lx=new dn,Yr=new Om,fu=new Il,Ux=new ie,du=new ie,hu=new ie,pu=new ie,qh=new ie,mu=new ie,Ox=new ie,gu=new ie;class Fa extends qn{constructor(e=new ni,i=new ib){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){mu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(qh.fromBufferAttribute(v,e),f?mu.addScaledVector(qh,_):mu.addScaledVector(qh.sub(i),_))}i.add(mu)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),fu.copy(a.boundingSphere),fu.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(fu.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(fu,Ux)===null||Yr.origin.distanceToSquared(Ux)>(e.far-e.near)**2))&&(Lx.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(Lx),!(a.boundingBox!==null&&Yr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,Yr)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,D=g.length;E<D;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let L=P,O=F;L<O;L+=3){const U=h.getX(L),B=h.getX(L+1),T=h.getX(L+2);l=vu(this,y,e,a,p,_,v,U,B,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),D=Math.min(h.count,S.start+S.count);for(let b=E,y=D;b<y;b+=3){const P=h.getX(b),F=h.getX(b+1),L=h.getX(b+2);l=vu(this,f,e,a,p,_,v,P,F,L),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,D=g.length;E<D;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let L=P,O=F;L<O;L+=3){const U=L,B=L+1,T=L+2;l=vu(this,y,e,a,p,_,v,U,B,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let b=E,y=D;b<y;b+=3){const P=b,F=b+1,L=b+2;l=vu(this,f,e,a,p,_,v,P,F,L),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function SR(r,e,i,a,l,c,f,h){let m;if(e.side===ti?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,e.side===Er,h),m===null)return null;gu.copy(h),gu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(gu);return p<i.near||p>i.far?null:{distance:p,point:gu.clone(),object:r}}function vu(r,e,i,a,l,c,f,h,m,p){r.getVertexPosition(h,du),r.getVertexPosition(m,hu),r.getVertexPosition(p,pu);const _=SR(r,e,i,a,du,hu,pu,Ox);if(_){const v=new ie;Hi.getBarycoord(Ox,du,hu,pu,v),l&&(_.uv=Hi.getInterpolatedAttribute(l,h,m,p,v,new Pt)),c&&(_.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new Pt)),f&&(_.normal=Hi.getInterpolatedAttribute(f,h,m,p,v,new ie),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ie,materialIndex:0};Hi.getNormal(du,hu,pu,g.normal),_.face=g,_.barycoord=v}return _}class bR extends Wn{constructor(e=null,i=1,a=1,l,c,f,h,m,p=Pn,_=Pn,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new ie,MR=new ie,ER=new pt;class Qr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=jh.subVectors(a,i).cross(MR.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,a=!0){const l=e.delta(jh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||ER.getNormalMatrix(e),l=this.coplanarPoint(jh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Il,TR=new Pt(.5,.5),_u=new ie;class ab{constructor(e=new Qr,i=new Qr,a=new Qr,l=new Qr,c=new Qr,f=new Qr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=na,a=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],D=c[9],b=c[10],y=c[11],P=c[12],F=c[13],L=c[14],O=c[15];if(l[0].setComponents(p-f,S-_,y-E,O-P).normalize(),l[1].setComponents(p+f,S+_,y+E,O+P).normalize(),l[2].setComponents(p+h,S+v,y+D,O+F).normalize(),l[3].setComponents(p-h,S-v,y-D,O-F).normalize(),a)l[4].setComponents(m,g,b,L).normalize(),l[5].setComponents(p-m,S-g,y-b,O-L).normalize();else if(l[4].setComponents(p-m,S-g,y-b,O-L).normalize(),i===na)l[5].setComponents(p+m,S+g,y+b,O+L).normalize();else if(i===ku)l[5].setComponents(m,g,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const i=TR.distanceTo(e.center);return Zr.radius=.7071067811865476+i,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(_u.x=l.normal.x>0?e.max.x:e.min.x,_u.y=l.normal.y>0?e.max.y:e.min.y,_u.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AR extends yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new ie,qu=new ie,Px=new dn,xl=new Om,xu=new Il,Yh=new ie,Ix=new ie;class RR extends qn{constructor(e=new ni,i=new AR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)Wu.fromBufferAttribute(i,l-1),qu.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=Wu.distanceTo(qu);e.setAttribute("lineDistance",new ki(a,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),xu.copy(a.boundingSphere),xu.applyMatrix4(l),xu.radius+=c,e.ray.intersectsSphere(xu)===!1)return;Px.copy(l).invert(),xl.copy(e.ray).applyMatrix4(Px);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let D=S,b=E-1;D<b;D+=p){const y=_.getX(D),P=_.getX(D+1),F=yu(this,e,xl,m,y,P,D);F&&i.push(F)}if(this.isLineLoop){const D=_.getX(E-1),b=_.getX(S),y=yu(this,e,xl,m,D,b,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let D=S,b=E-1;D<b;D+=p){const y=yu(this,e,xl,m,D,D+1,D);y&&i.push(y)}if(this.isLineLoop){const D=yu(this,e,xl,m,E-1,S,E-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function yu(r,e,i,a,l,c,f){const h=r.geometry.attributes.position;if(Wu.fromBufferAttribute(h,l),qu.fromBufferAttribute(h,c),i.distanceSqToSegment(Wu,qu,Yh,Ix)>a)return;Yh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Yh);if(!(p<e.near||p>e.far))return{distance:p,point:Ix.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const zx=new ie,Fx=new ie;class CR extends RR{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[];for(let l=0,c=i.count;l<c;l+=2)zx.fromBufferAttribute(i,l),Fx.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+zx.distanceTo(Fx);e.setAttribute("lineDistance",new ki(a,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wR extends yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bx=new dn,sm=new Om,Su=new Il,bu=new ie;class Hx extends qn{constructor(e=new ni,i=new wR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere),Su.applyMatrix4(l),Su.radius+=c,e.ray.intersectsSphere(Su)===!1)return;Bx.copy(l).invert(),sm.copy(e.ray).applyMatrix4(Bx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,v=a.attributes.position;if(p!==null){const g=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=g,D=S;E<D;E++){const b=p.getX(E);bu.fromBufferAttribute(v,b),Gx(bu,b,m,l,e,i,this)}}else{const g=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=g,D=S;E<D;E++)bu.fromBufferAttribute(v,E),Gx(bu,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gx(r,e,i,a,l,c,f){const h=sm.distanceSqToPoint(r);if(h<i){const m=new ie;sm.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class rb extends Wn{constructor(e=[],i=os,a,l,c,f,h,m,p,_){super(e,i,a,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class go extends Wn{constructor(e,i,a=ra,l,c,f,h=Pn,m=Pn,p,_=za,v=1){if(_!==za&&_!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,f,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class DR extends go{constructor(e,i=ra,a=os,l,c,f=Pn,h=Pn,m,p=za){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,a,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sb extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zl extends ni{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,a,i,e,f,c,0),E("z","y","x",1,-1,a,i,-e,f,c,1),E("x","z","y",1,1,e,a,i,l,f,2),E("x","z","y",1,-1,e,a,-i,l,f,3),E("x","y","z",1,-1,e,i,a,l,c,4),E("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(v,2));function E(D,b,y,P,F,L,O,U,B,T,z){const q=L/B,V=O/T,Z=L/2,fe=O/2,de=U/2,$=B+1,C=T+1;let H=0,J=0;const he=new ie;for(let Ee=0;Ee<C;Ee++){const N=Ee*V-fe;for(let k=0;k<$;k++){const pe=k*q-Z;he[D]=pe*P,he[b]=N*F,he[y]=de,p.push(he.x,he.y,he.z),he[D]=0,he[b]=0,he[y]=U>0?1:-1,_.push(he.x,he.y,he.z),v.push(k/B),v.push(1-Ee/T),H+=1}}for(let Ee=0;Ee<T;Ee++)for(let N=0;N<B;N++){const k=g+N+$*Ee,pe=g+N+$*(Ee+1),be=g+(N+1)+$*(Ee+1),Ae=g+(N+1)+$*Ee;m.push(k,pe,Ae),m.push(pe,be,Ae),J+=6}h.addGroup(S,J,z),S+=J,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tf extends ni{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(a),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=i/m,S=[],E=[],D=[],b=[];for(let y=0;y<_;y++){const P=y*g-f;for(let F=0;F<p;F++){const L=F*v-c;E.push(L,-P,0),D.push(0,0,1),b.push(F/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<h;P++){const F=P+p*y,L=P+p*(y+1),O=P+1+p*(y+1),U=P+1+p*y;S.push(F,L,U),S.push(L,O,U)}this.setIndex(S),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(D,3)),this.setAttribute("uv",new ki(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.width,e.height,e.widthSegments,e.heightSegments)}}function vo(r){const e={};for(const i in r){e[i]={};for(const a in r[i]){const l=r[i][a];if(Vx(l))l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone();else if(Array.isArray(l))if(Vx(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][a]=c}else e[i][a]=l.slice();else e[i][a]=l}}return e}function Xn(r){const e={};for(let i=0;i<r.length;i++){const a=vo(r[i]);for(const l in a)e[l]=a[l]}return e}function Vx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function NR(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function ob(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const LR={clone:vo,merge:Xn};var UR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UR,this.fragmentShader=OR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=NR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=i[l.value]||null;break;case"c":this.uniforms[a].value=new Et().setHex(l.value);break;case"v2":this.uniforms[a].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[a].value=new ie().fromArray(l.value);break;case"v4":this.uniforms[a].value=new fn().fromArray(l.value);break;case"m3":this.uniforms[a].value=new pt().fromArray(l.value);break;case"m4":this.uniforms[a].value=new dn().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class PR extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IR extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zR extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mu=new ie,Eu=new xo,Qi=new ie;class lb extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mu,Eu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,Eu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i,a=!1){super.updateWorldMatrix(e,i,a),this.matrixWorld.decompose(Mu,Eu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,Eu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new ie,kx=new Pt,Xx=new Pt;class wi extends lb{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,i){return this.getViewBounds(e,kx,Xx),i.subVectors(Xx,kx)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Eh*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cb extends lb{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const no=-90,io=1;class FR extends qn{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(no,io,e,i);l.layers=this.layers,this.add(l);const c=new wi(no,io,e,i);c.layers=this.layers,this.add(c);const f=new wi(no,io,e,i);f.layers=this.layers,this.add(f);const h=new wi(no,io,e,i);h.layers=this.layers,this.add(h);const m=new wi(no,io,e,i);m.layers=this.layers,this.add(m);const p=new wi(no,io,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===na)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ku)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const D=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(a,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(a,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(a,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(a,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),a.texture.generateMipmaps=D,e.setRenderTarget(a,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class BR extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class HR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Bm=class Bm{constructor(e,i,a,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let a=0;a<4;a++)this.elements[a]=e[a+i];return this}set(e,i,a,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=a,c[3]=l,this}};Bm.prototype.isMatrix2=!0;let Wx=Bm;function qx(r,e,i,a){const l=GR(a);switch(i){case YS:return r*e;case KS:return r*e/l.components*l.byteLength;case Cm:return r*e/l.components*l.byteLength;case ls:return r*e*2/l.components*l.byteLength;case wm:return r*e*2/l.components*l.byteLength;case ZS:return r*e*3/l.components*l.byteLength;case Vi:return r*e*4/l.components*l.byteLength;case Dm:return r*e*4/l.components*l.byteLength;case Nu:case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dp:case Lp:return Math.max(r,16)*Math.max(e,8)/4;case wp:case Np:return Math.max(r,8)*Math.max(e,8)/2;case Up:case Op:case Ip:case zp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pp:case Bu:case Fp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $p:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Jp:case em:case tm:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nm:case im:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hu:case am:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GR(r){switch(r){case Di:case XS:return{byteLength:1,components:1};case wl:case WS:case Ia:return{byteLength:2,components:1};case Am:case Rm:return{byteLength:2,components:4};case ra:case Tm:case ta:return{byteLength:4,components:1};case qS:case jS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Em}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Em);function ub(){let r=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(a=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function VR(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],D=v[S];D.start<=E.start+E.count+1?E.count=Math.max(E.count,D.start+D.count-E.start):(++g,v[g]=D)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const D=v[S];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var kR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XR=`#ifdef USE_ALPHAHASH
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
#endif`,WR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZR=`#ifdef USE_AOMAP
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
#endif`,KR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QR=`#ifdef USE_BATCHING
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
#endif`,$R=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nC=`#ifdef USE_IRIDESCENCE
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
#endif`,iC=`#ifdef USE_BUMPMAP
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
#endif`,aC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dC=`#define PI 3.141592653589793
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
} // validated`,hC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pC=`vec3 transformedNormal = objectNormal;
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
#endif`,mC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_C=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xC="gl_FragColor = linearToOutputTexel( gl_FragColor );",yC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SC=`#ifdef USE_ENVMAP
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
#endif`,bC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MC=`#ifdef USE_ENVMAP
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
#endif`,EC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TC=`#ifdef USE_ENVMAP
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
#endif`,AC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DC=`#ifdef USE_GRADIENTMAP
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
}`,NC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,PC=`#ifdef USE_ENVMAP
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
#endif`,IC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HC=`PhysicalMaterial material;
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
#endif`,GC=`uniform sampler2D dfgLUT;
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
}`,VC=`
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
#endif`,kC=`#if defined( RE_IndirectDiffuse )
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
#endif`,XC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$C=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JC=`#if defined( USE_POINTS_UV )
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
#endif`,ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
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
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dw=`#ifdef USE_NORMALMAP
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
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cw=`float getShadowMask() {
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
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
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
#endif`,Nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
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
#endif`,Uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zw=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#ifdef USE_TRANSMISSION
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
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xw=`uniform sampler2D t2D;
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`#include <common>
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
}`,Kw=`#if DEPTH_PACKING == 3200
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
}`,Qw=`#define DISTANCE
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
}`,$w=`#define DISTANCE
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
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tD=`uniform float scale;
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
}`,nD=`uniform vec3 diffuse;
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
}`,iD=`#include <common>
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
}`,aD=`uniform vec3 diffuse;
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
}`,rD=`#define LAMBERT
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
}`,sD=`#define LAMBERT
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
}`,oD=`#define MATCAP
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
}`,lD=`#define MATCAP
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
}`,cD=`#define NORMAL
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
}`,uD=`#define NORMAL
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
}`,fD=`#define PHONG
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
}`,dD=`#define PHONG
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
}`,hD=`#define STANDARD
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
}`,pD=`#define STANDARD
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
}`,mD=`#define TOON
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
}`,gD=`#define TOON
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
}`,vD=`uniform float size;
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
}`,_D=`uniform vec3 diffuse;
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
}`,xD=`#include <common>
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
}`,yD=`uniform vec3 color;
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
}`,SD=`uniform float rotation;
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
}`,bD=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:kR,alphahash_pars_fragment:XR,alphamap_fragment:WR,alphamap_pars_fragment:qR,alphatest_fragment:jR,alphatest_pars_fragment:YR,aomap_fragment:ZR,aomap_pars_fragment:KR,batching_pars_vertex:QR,batching_vertex:$R,begin_vertex:JR,beginnormal_vertex:eC,bsdfs:tC,iridescence_fragment:nC,bumpmap_pars_fragment:iC,clipping_planes_fragment:aC,clipping_planes_pars_fragment:rC,clipping_planes_pars_vertex:sC,clipping_planes_vertex:oC,color_fragment:lC,color_pars_fragment:cC,color_pars_vertex:uC,color_vertex:fC,common:dC,cube_uv_reflection_fragment:hC,defaultnormal_vertex:pC,displacementmap_pars_vertex:mC,displacementmap_vertex:gC,emissivemap_fragment:vC,emissivemap_pars_fragment:_C,colorspace_fragment:xC,colorspace_pars_fragment:yC,envmap_fragment:SC,envmap_common_pars_fragment:bC,envmap_pars_fragment:MC,envmap_pars_vertex:EC,envmap_physical_pars_fragment:PC,envmap_vertex:TC,fog_vertex:AC,fog_pars_vertex:RC,fog_fragment:CC,fog_pars_fragment:wC,gradientmap_pars_fragment:DC,lightmap_pars_fragment:NC,lights_lambert_fragment:LC,lights_lambert_pars_fragment:UC,lights_pars_begin:OC,lights_toon_fragment:IC,lights_toon_pars_fragment:zC,lights_phong_fragment:FC,lights_phong_pars_fragment:BC,lights_physical_fragment:HC,lights_physical_pars_fragment:GC,lights_fragment_begin:VC,lights_fragment_maps:kC,lights_fragment_end:XC,lightprobes_pars_fragment:WC,logdepthbuf_fragment:qC,logdepthbuf_pars_fragment:jC,logdepthbuf_pars_vertex:YC,logdepthbuf_vertex:ZC,map_fragment:KC,map_pars_fragment:QC,map_particle_fragment:$C,map_particle_pars_fragment:JC,metalnessmap_fragment:ew,metalnessmap_pars_fragment:tw,morphinstance_vertex:nw,morphcolor_vertex:iw,morphnormal_vertex:aw,morphtarget_pars_vertex:rw,morphtarget_vertex:sw,normal_fragment_begin:ow,normal_fragment_maps:lw,normal_pars_fragment:cw,normal_pars_vertex:uw,normal_vertex:fw,normalmap_pars_fragment:dw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,opaque_fragment:vw,packing:_w,premultiplied_alpha_fragment:xw,project_vertex:yw,dithering_fragment:Sw,dithering_pars_fragment:bw,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:Ew,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:Aw,shadowmap_vertex:Rw,shadowmask_pars_fragment:Cw,skinbase_vertex:ww,skinning_pars_vertex:Dw,skinning_vertex:Nw,skinnormal_vertex:Lw,specularmap_fragment:Uw,specularmap_pars_fragment:Ow,tonemapping_fragment:Pw,tonemapping_pars_fragment:Iw,transmission_fragment:zw,transmission_pars_fragment:Fw,uv_pars_fragment:Bw,uv_pars_vertex:Hw,uv_vertex:Gw,worldpos_vertex:Vw,background_vert:kw,background_frag:Xw,backgroundCube_vert:Ww,backgroundCube_frag:qw,cube_vert:jw,cube_frag:Yw,depth_vert:Zw,depth_frag:Kw,distance_vert:Qw,distance_frag:$w,equirect_vert:Jw,equirect_frag:eD,linedashed_vert:tD,linedashed_frag:nD,meshbasic_vert:iD,meshbasic_frag:aD,meshlambert_vert:rD,meshlambert_frag:sD,meshmatcap_vert:oD,meshmatcap_frag:lD,meshnormal_vert:cD,meshnormal_frag:uD,meshphong_vert:fD,meshphong_frag:dD,meshphysical_vert:hD,meshphysical_frag:pD,meshtoon_vert:mD,meshtoon_frag:gD,points_vert:vD,points_frag:_D,shadow_vert:xD,shadow_frag:yD,sprite_vert:SD,sprite_frag:bD},He={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ji={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ji.physical={uniforms:Xn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Tu={r:0,b:0,g:0},MD=new dn,fb=new pt;fb.set(-1,0,0,0,1,0,0,0,1);function ED(r,e,i,a,l,c){const f=new Et(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const L=P.backgroundBlurriness>0;F=e.get(F,L)}return F}function E(P){let F=!1;const L=S(P);L===null?b(f,h):L&&L.isColor&&(b(L,1),F=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(P,F){const L=S(F);L&&(L.isCubeTexture||L.mapping===ef)?(p===void 0&&(p=new Fa(new zl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:vo(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(MD.makeRotationFromEuler(F.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(fb),p.material.toneMapped=At.getTransfer(L.colorSpace)!==kt,(_!==L||v!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=L,v=L.version,g=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Fa(new tf(2,2),new gi({name:"BackgroundMaterial",uniforms:vo(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=At.getTransfer(L.colorSpace)!==kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=L,v=L.version,g=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,F){P.getRGB(Tu,ob(r)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,F,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,F=1){f.set(P),h=F,b(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,b(f,h)},render:E,addToRenderList:D,dispose:y}}function TD(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,f=!1;function h(V,Z,fe,de,$){let C=!1;const H=v(V,de,fe,Z);c!==H&&(c=H,p(c.object)),C=S(V,de,fe,$),C&&E(V,de,fe,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(C||f)&&(f=!1,L(V,Z,fe,de),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function _(V){return r.deleteVertexArray(V)}function v(V,Z,fe,de){const $=de.wireframe===!0;let C=a[Z.id];C===void 0&&(C={},a[Z.id]=C);const H=V.isInstancedMesh===!0?V.id:0;let J=C[H];J===void 0&&(J={},C[H]=J);let he=J[fe.id];he===void 0&&(he={},J[fe.id]=he);let Ee=he[$];return Ee===void 0&&(Ee=g(m()),he[$]=Ee),Ee}function g(V){const Z=[],fe=[],de=[];for(let $=0;$<i;$++)Z[$]=0,fe[$]=0,de[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:fe,attributeDivisors:de,object:V,attributes:{},index:null}}function S(V,Z,fe,de){const $=c.attributes,C=Z.attributes;let H=0;const J=fe.getAttributes();for(const he in J)if(J[he].location>=0){const N=$[he];let k=C[he];if(k===void 0&&(he==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),he==="instanceColor"&&V.instanceColor&&(k=V.instanceColor)),N===void 0||N.attribute!==k||k&&N.data!==k.data)return!0;H++}return c.attributesNum!==H||c.index!==de}function E(V,Z,fe,de){const $={},C=Z.attributes;let H=0;const J=fe.getAttributes();for(const he in J)if(J[he].location>=0){let N=C[he];N===void 0&&(he==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),he==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const k={};k.attribute=N,N&&N.data&&(k.data=N.data),$[he]=k,H++}c.attributes=$,c.attributesNum=H,c.index=de}function D(){const V=c.newAttributes;for(let Z=0,fe=V.length;Z<fe;Z++)V[Z]=0}function b(V){y(V,0)}function y(V,Z){const fe=c.newAttributes,de=c.enabledAttributes,$=c.attributeDivisors;fe[V]=1,de[V]===0&&(r.enableVertexAttribArray(V),de[V]=1),$[V]!==Z&&(r.vertexAttribDivisor(V,Z),$[V]=Z)}function P(){const V=c.newAttributes,Z=c.enabledAttributes;for(let fe=0,de=Z.length;fe<de;fe++)Z[fe]!==V[fe]&&(r.disableVertexAttribArray(fe),Z[fe]=0)}function F(V,Z,fe,de,$,C,H){H===!0?r.vertexAttribIPointer(V,Z,fe,$,C):r.vertexAttribPointer(V,Z,fe,de,$,C)}function L(V,Z,fe,de){D();const $=de.attributes,C=fe.getAttributes(),H=Z.defaultAttributeValues;for(const J in C){const he=C[J];if(he.location>=0){let Ee=$[J];if(Ee===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),Ee!==void 0){const N=Ee.normalized,k=Ee.itemSize,pe=e.get(Ee);if(pe===void 0)continue;const be=pe.buffer,Ae=pe.type,ee=pe.bytesPerElement,ce=Ae===r.INT||Ae===r.UNSIGNED_INT||Ee.gpuType===Tm;if(Ee.isInterleavedBufferAttribute){const _e=Ee.data,Le=_e.stride,Je=Ee.offset;if(_e.isInstancedInterleavedBuffer){for(let Be=0;Be<he.locationSize;Be++)y(he.location+Be,_e.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<he.locationSize;Be++)b(he.location+Be);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Be=0;Be<he.locationSize;Be++)F(he.location+Be,k/he.locationSize,Ae,N,Le*ee,(Je+k/he.locationSize*Be)*ee,ce)}else{if(Ee.isInstancedBufferAttribute){for(let _e=0;_e<he.locationSize;_e++)y(he.location+_e,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let _e=0;_e<he.locationSize;_e++)b(he.location+_e);r.bindBuffer(r.ARRAY_BUFFER,be);for(let _e=0;_e<he.locationSize;_e++)F(he.location+_e,k/he.locationSize,Ae,N,k*ee,k/he.locationSize*_e*ee,ce)}}else if(H!==void 0){const N=H[J];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(he.location,N);break;case 3:r.vertexAttrib3fv(he.location,N);break;case 4:r.vertexAttrib4fv(he.location,N);break;default:r.vertexAttrib1fv(he.location,N)}}}}P()}function O(){z();for(const V in a){const Z=a[V];for(const fe in Z){const de=Z[fe];for(const $ in de){const C=de[$];for(const H in C)_(C[H].object),delete C[H];delete de[$]}}delete a[V]}}function U(V){if(a[V.id]===void 0)return;const Z=a[V.id];for(const fe in Z){const de=Z[fe];for(const $ in de){const C=de[$];for(const H in C)_(C[H].object),delete C[H];delete de[$]}}delete a[V.id]}function B(V){for(const Z in a){const fe=a[Z];for(const de in fe){const $=fe[de];if($[V.id]===void 0)continue;const C=$[V.id];for(const H in C)_(C[H].object),delete C[H];delete $[V.id]}}}function T(V){for(const Z in a){const fe=a[Z],de=V.isInstancedMesh===!0?V.id:0,$=fe[de];if($!==void 0){for(const C in $){const H=$[C];for(const J in H)_(H[J].object),delete H[J];delete $[C]}delete fe[de],Object.keys(fe).length===0&&delete a[Z]}}}function z(){q(),f=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:b,disableUnusedAttributes:P}}function AD(r,e,i){let a;function l(m){a=m}function c(m,p){r.drawArrays(a,m,p),i.update(p,a,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),i.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];i.update(g,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function RD(r,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Vi&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Di&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ta&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:D,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:L,maxSamples:O,samples:U}}function CD(r){const e=this;let i=null,a=0,l=!1,c=!1;const f=new Qr,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||l;return l=g,a=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,D=v.clipIntersection,b=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const P=c?0:a,F=P*4;let L=y.clippingState||null;m.value=L,L=_(E,g,F,S);for(let O=0;O!==F;++O)L[O]=i[O];y.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,S,E){const D=v!==null?v.length:0;let b=null;if(D!==0){if(b=m.value,E!==!0||b===null){const y=S+D*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<y)&&(b=new Float32Array(y));for(let F=0,L=S;F!==D;++F,L+=4)f.copy(v[F]).applyMatrix4(P,h),f.normal.toArray(b,L),b[L+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,b}}const yr=4,jx=[.125,.215,.35,.446,.526,.582],es=20,wD=256,yl=new cb,Yx=new Et;let Zh=null,Kh=0,Qh=0,$h=!1;const DD=new ie;class Zx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:h=DD}=c;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=$h,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===os||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Ia,format:Vi,colorSpace:Gu,depthBuffer:!1},l=Kx(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kx(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ND(c)),this._blurMaterial=UD(c,e,i),this._ggxMaterial=LD(c,e,i)}return l}_compileMaterial(e){const i=new Fa(new ni,e);this._renderer.compile(i,yl)}_sceneToCubeUV(e,i,a,l,c){const m=new wi(90,1,i,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Yx),v.toneMapping=ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fa(new zl,new ib({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,b=D.material;let y=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,y=!0):(b.color.copy(Yx),y=!0);for(let F=0;F<6;F++){const L=F%3;L===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):L===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const O=this._cubeSize;ao(l,L*O,F>2?O:0,O,O),v.setRenderTarget(l),y&&v.render(D,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=P}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===os||e.mapping===mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$x()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;ao(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,yl)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,D=this._sizeLods[a],b=3*D*(a>E-yr?a-E+yr:0),y=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,ao(c,b,y,3*D,2*D),l.setRenderTarget(c),l.render(h,yl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,ao(e,b,y,3*D,2*D),l.setRenderTarget(e),l.render(h,yl)}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*es-1),D=c/E,b=isFinite(c)?1+Math.floor(_*D):es;b>es&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${es}`);const y=[];let P=0;for(let B=0;B<es;++B){const T=B/D,z=Math.exp(-T*T/2);y.push(z),B===0?P+=z:B<b&&(P+=2*z)}for(let B=0;B<y.length;B++)y[B]=y[B]/P;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=E,g.mipInt.value=F-a;const L=this._sizeLods[l],O=3*L*(l>F-yr?l-F+yr:0),U=4*(this._cubeSize-L);ao(i,O,U,3*L,2*L),m.setRenderTarget(i),m.render(v,yl)}}function ND(r){const e=[],i=[],a=[];let l=r;const c=r-yr+1+jx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-yr?m=jx[f-r+yr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,D=3,b=2,y=1,P=new Float32Array(D*E*S),F=new Float32Array(b*E*S),L=new Float32Array(y*E*S);for(let U=0;U<S;U++){const B=U%3*2/3-1,T=U>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];P.set(z,D*E*U),F.set(g,b*E*U);const q=[U,U,U,U,U,U];L.set(q,y*E*U)}const O=new ni;O.setAttribute("position",new bn(P,D)),O.setAttribute("uv",new bn(F,b)),O.setAttribute("faceIndex",new bn(L,y)),a.push(new Fa(O,null)),l>yr&&l--}return{lodMeshes:a,sizeLods:e,sigmas:i}}function Kx(r,e,i){const a=new aa(r,e,i);return a.texture.mapping=ef,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function ao(r,e,i,a,l){r.viewport.set(e,i,a,l),r.scissor.set(e,i,a,l)}function LD(r,e,i){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nf(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function UD(r,e,i){const a=new Float32Array(es),l=new ie(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nf(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Qx(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function $x(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function nf(){return`

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
	`}class db extends aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new rb(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:vo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:La});c.uniforms.tEquirect.value=i;const f=new Fa(l,c),h=i.minFilter;return i.minFilter===ns&&(i.minFilter=Vn),new FR(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}function OD(r){let e=new WeakMap,i=new WeakMap,a=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Sh||S===bh)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const D=new db(E.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===Sh||S===bh,D=S===os||S===mo;if(E||D){let b=i.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new Zx(r)),b=E?a.fromEquirectangular(g,b):a.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const P=g.image;return E&&P&&P.height>0||D&&P&&m(P)?(a===null&&(a=new Zx(r)),b=E?a.fromEquirectangular(g):a.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===Sh?g.mapping=os:S===bh&&(g.mapping=mo),g}function m(g){let S=0;const E=6;for(let D=0;D<E;D++)g[D]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function PD(r){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=r.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&uo("WebGLRenderer: "+a+" extension not supported."),l}}}function ID(r,e,i,a){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let D=0;if(E===void 0)return;if(S!==null){const P=S.array;D=S.version;for(let F=0,L=P.length;F<L;F+=3){const O=P[F+0],U=P[F+1],B=P[F+2];g.push(O,U,U,B,B,O)}}else{const P=E.array;D=E.version;for(let F=0,L=P.length/3-1;F<L;F+=3){const O=F+0,U=F+1,B=F+2;g.push(O,U,U,B,B,O)}}const b=new(E.count>=65535?nb:tb)(g,1);b.version=D;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function zD(r,e,i){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*f),i.update(g,a,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(a,g,c,v*f,S),i.update(g,a,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,S);let D=0;for(let b=0;b<S;b++)D+=g[b];i.update(D,a,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function FD(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function BD(r,e,i){const a=new WeakMap,l=new fn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let z=function(){B.dispose(),a.delete(h),h.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),E===!0&&(F=2),D===!0&&(F=3);let L=h.attributes.position.count*F,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*O*4*v),B=new $S(U,L,O,v);B.type=ta,B.needsUpdate=!0;const T=F*4;for(let q=0;q<v;q++){const V=b[q],Z=y[q],fe=P[q],de=L*O*4*q;for(let $=0;$<V.count;$++){const C=$*T;S===!0&&(l.fromBufferAttribute(V,$),U[de+C+0]=l.x,U[de+C+1]=l.y,U[de+C+2]=l.z,U[de+C+3]=0),E===!0&&(l.fromBufferAttribute(Z,$),U[de+C+4]=l.x,U[de+C+5]=l.y,U[de+C+6]=l.z,U[de+C+7]=0),D===!0&&(l.fromBufferAttribute(fe,$),U[de+C+8]=l.x,U[de+C+9]=l.y,U[de+C+10]=l.z,U[de+C+11]=fe.itemSize===4?l.w:1)}}g={count:v,texture:B,size:new Pt(L,O)},a.set(h,g),h.addEventListener("dispose",z)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let S=0;for(let D=0;D<p.length;D++)S+=p[D];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function HD(r,e,i,a,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const GD={[IS]:"LINEAR_TONE_MAPPING",[zS]:"REINHARD_TONE_MAPPING",[FS]:"CINEON_TONE_MAPPING",[BS]:"ACES_FILMIC_TONE_MAPPING",[GS]:"AGX_TONE_MAPPING",[VS]:"NEUTRAL_TONE_MAPPING",[HS]:"CUSTOM_TONE_MAPPING"};function VD(r,e,i,a,l,c){const f=new aa(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new go(e,i):void 0}),h=new aa(e,i,{type:Ia,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new PR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Fa(m,p),v=new cb(-1,1,1,-1,0,1);let g=null,S=null,E=!1,D,b=null,y=[],P=!1;this.setSize=function(F,L){f.setSize(F,L),h.setSize(F,L);for(let O=0;O<y.length;O++){const U=y[O];U.setSize&&U.setSize(F,L)}},this.setEffects=function(F){y=F,P=y.length>0&&y[0].isRenderPass===!0;const L=f.width,O=f.height;for(let U=0;U<y.length;U++){const B=y[U];B.setSize&&B.setSize(L,O)}},this.begin=function(F,L){if(E||F.toneMapping===ia&&y.length===0)return!1;if(b=L,L!==null){const O=L.width,U=L.height;(f.width!==O||f.height!==U)&&this.setSize(O,U)}return P===!1&&F.setRenderTarget(f),D=F.toneMapping,F.toneMapping=ia,!0},this.hasRenderPass=function(){return P},this.end=function(F,L){F.toneMapping=D,E=!0;let O=f,U=h;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(F,U,O,L),T.needsSwap!==!1)){const z=O;O=U,U=z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},At.getTransfer(g)===kt&&(p.defines.SRGB_TRANSFER="");const B=GD[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(b),F.render(_,v),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const hb=new Wn,om=new go(1,1),pb=new $S,mb=new lR,gb=new rb,Jx=[],ey=[],ty=new Float32Array(16),ny=new Float32Array(9),iy=new Float32Array(4);function So(r,e,i){const a=r[0];if(a<=0||a>0)return r;const l=e*i;let c=Jx[l];if(c===void 0&&(c=new Float32Array(l),Jx[l]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let i=0,a=r.length;i<a;i++)if(r[i]!==e[i])return!1;return!0}function An(r,e){for(let i=0,a=e.length;i<a;i++)r[i]=e[i]}function af(r,e){let i=ey[e];i===void 0&&(i=new Int32Array(e),ey[e]=i);for(let a=0;a!==e;++a)i[a]=r.allocateTextureUnit();return i}function kD(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function XD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2fv(this.addr,e),An(i,e)}}function WD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;r.uniform3fv(this.addr,e),An(i,e)}}function qD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4fv(this.addr,e),An(i,e)}}function jD(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(Tn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,a))return;iy.set(a),r.uniformMatrix2fv(this.addr,!1,iy),An(i,a)}}function YD(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(Tn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,a))return;ny.set(a),r.uniformMatrix3fv(this.addr,!1,ny),An(i,a)}}function ZD(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(Tn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,a))return;ty.set(a),r.uniformMatrix4fv(this.addr,!1,ty),An(i,a)}}function KD(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function QD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2iv(this.addr,e),An(i,e)}}function $D(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3iv(this.addr,e),An(i,e)}}function JD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4iv(this.addr,e),An(i,e)}}function eN(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function tN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2uiv(this.addr,e),An(i,e)}}function nN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3uiv(this.addr,e),An(i,e)}}function iN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4uiv(this.addr,e),An(i,e)}}function aN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(om.compareFunction=i.isReversedDepthBuffer()?Lm:Nm,c=om):c=hb,i.setTexture2D(e||c,l)}function rN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||mb,l)}function sN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||gb,l)}function oN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||pb,l)}function lN(r){switch(r){case 5126:return kD;case 35664:return XD;case 35665:return WD;case 35666:return qD;case 35674:return jD;case 35675:return YD;case 35676:return ZD;case 5124:case 35670:return KD;case 35667:case 35671:return QD;case 35668:case 35672:return $D;case 35669:case 35673:return JD;case 5125:return eN;case 36294:return tN;case 36295:return nN;case 36296:return iN;case 35678:case 36198:case 36298:case 36306:case 35682:return aN;case 35679:case 36299:case 36307:return rN;case 35680:case 36300:case 36308:case 36293:return sN;case 36289:case 36303:case 36311:case 36292:return oN}}function cN(r,e){r.uniform1fv(this.addr,e)}function uN(r,e){const i=So(e,this.size,2);r.uniform2fv(this.addr,i)}function fN(r,e){const i=So(e,this.size,3);r.uniform3fv(this.addr,i)}function dN(r,e){const i=So(e,this.size,4);r.uniform4fv(this.addr,i)}function hN(r,e){const i=So(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function pN(r,e){const i=So(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function mN(r,e){const i=So(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function gN(r,e){r.uniform1iv(this.addr,e)}function vN(r,e){r.uniform2iv(this.addr,e)}function _N(r,e){r.uniform3iv(this.addr,e)}function xN(r,e){r.uniform4iv(this.addr,e)}function yN(r,e){r.uniform1uiv(this.addr,e)}function SN(r,e){r.uniform2uiv(this.addr,e)}function bN(r,e){r.uniform3uiv(this.addr,e)}function MN(r,e){r.uniform4uiv(this.addr,e)}function EN(r,e,i){const a=this.cache,l=e.length,c=af(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=om:f=hb;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function TN(r,e,i){const a=this.cache,l=e.length,c=af(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||mb,c[f])}function AN(r,e,i){const a=this.cache,l=e.length,c=af(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||gb,c[f])}function RN(r,e,i){const a=this.cache,l=e.length,c=af(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||pb,c[f])}function CN(r){switch(r){case 5126:return cN;case 35664:return uN;case 35665:return fN;case 35666:return dN;case 35674:return hN;case 35675:return pN;case 35676:return mN;case 5124:case 35670:return gN;case 35667:case 35671:return vN;case 35668:case 35672:return _N;case 35669:case 35673:return xN;case 5125:return yN;case 36294:return SN;case 36295:return bN;case 36296:return MN;case 35678:case 36198:case 36298:case 36306:case 35682:return EN;case 35679:case 36299:case 36307:return TN;case 35680:case 36300:case 36308:case 36293:return AN;case 36289:case 36303:case 36311:case 36292:return RN}}class wN{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=lN(i.type)}}class DN{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CN(i.type)}}class NN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],a)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function ay(r,e){r.seq.push(e),r.map[e.id]=e}function LN(r,e,i){const a=r.name,l=a.length;for(Jh.lastIndex=0;;){const c=Jh.exec(a),f=Jh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ay(i,p===void 0?new wN(h,r,e):new DN(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new NN(h),ay(i,v)),i=v}}}class Pu{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);LN(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function ry(r,e,i){const a=r.createShader(e);return r.shaderSource(a,i),r.compileShader(a),a}const UN=37297;let ON=0;function PN(r,e){const i=r.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const sy=new pt;function IN(r){At._getMatrix(sy,At.workingColorSpace,r);const e=`mat3( ${sy.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(r)){case Vu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function oy(r,e,i){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+PN(r.getShaderSource(e),h)}else return c}function zN(r,e){const i=IN(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const FN={[IS]:"Linear",[zS]:"Reinhard",[FS]:"Cineon",[BS]:"ACESFilmic",[GS]:"AgX",[VS]:"Neutral",[HS]:"Custom"};function BN(r,e){const i=FN[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Au=new ie;function HN(){At.getLuminanceCoefficients(Au);const r=Au.x.toFixed(4),e=Au.y.toFixed(4),i=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GN(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function VN(r){const e=[];for(const i in r){const a=r[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function kN(r,e){const i={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function El(r){return r!==""}function ly(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XN=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(r){return r.replace(XN,qN)}const WN=new Map;function qN(r,e){let i=_t[e];if(i===void 0){const a=WN.get(e);if(a!==void 0)i=_t[a],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lm(i)}const jN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uy(r){return r.replace(jN,YN)}function YN(r,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function fy(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const ZN={[Du]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function KN(r){return ZN[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QN={[os]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[ef]:"ENVMAP_TYPE_CUBE_UV"};function $N(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":QN[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const JN={[mo]:"ENVMAP_MODE_REFRACTION"};function eL(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":JN[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tL={[PS]:"ENVMAP_BLENDING_MULTIPLY",[G3]:"ENVMAP_BLENDING_MIX",[V3]:"ENVMAP_BLENDING_ADD"};function nL(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":tL[r.combine]||"ENVMAP_BLENDING_NONE"}function iL(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function aL(r,e,i,a){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=KN(i),p=$N(i),_=eL(i),v=nL(i),g=iL(i),S=GN(i),E=VN(c),D=l.createProgram();let b,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(El).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(El).join(`
`),y.length>0&&(y+=`
`)):(b=[fy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),y=[fy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?_t.tonemapping_pars_fragment:"",i.toneMapping!==ia?BN("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,zN("linearToOutputTexel",i.outputColorSpace),HN(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(El).join(`
`)),f=lm(f),f=ly(f,i),f=cy(f,i),h=lm(h),h=ly(h,i),h=cy(h,i),f=uy(f),h=uy(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===_x?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=P+b+f,L=P+y+h,O=ry(l,l.VERTEX_SHADER,F),U=ry(l,l.FRAGMENT_SHADER,L);l.attachShader(D,O),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function B(V){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(D)||"",fe=l.getShaderInfoLog(O)||"",de=l.getShaderInfoLog(U)||"",$=Z.trim(),C=fe.trim(),H=de.trim();let J=!0,he=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,O,U);else{const Ee=oy(l,O,"vertex"),N=oy(l,U,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+Ee+`
`+N)}else $!==""?ct("WebGLProgram: Program Info Log:",$):(C===""||H==="")&&(he=!1);he&&(V.diagnostics={runnable:J,programLog:$,vertexShader:{log:C,prefix:b},fragmentShader:{log:H,prefix:y}})}l.deleteShader(O),l.deleteShader(U),T=new Pu(l,D),z=kN(l,D)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(D,UN)),q},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ON++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=O,this.fragmentShader=U,this}let rL=0;class sL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,a){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new oL(e),i.set(e,a)),a}}class oL{constructor(e){this.id=rL++,this.code=e,this.usedTimes=0}}function lL(r){return r===ls||r===Bu||r===Hu}function cL(r,e,i,a,l,c){const f=new JS,h=new sL,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,z,q,V,Z,fe){const de=V.fog,$=Z.geometry,C=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=e.get(T.envMap||C,H),he=J&&J.mapping===ef?J.image.height:null,Ee=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,k=N!==void 0?N.length:0;let pe=0;$.morphAttributes.position!==void 0&&(pe=1),$.morphAttributes.normal!==void 0&&(pe=2),$.morphAttributes.color!==void 0&&(pe=3);let be,Ae,ee,ce;if(Ee){const je=Ji[Ee];be=je.vertexShader,Ae=je.fragmentShader}else{be=T.vertexShader,Ae=T.fragmentShader;const je=h.getVertexShaderStage(T),an=h.getFragmentShaderStage(T);h.update(T,je,an),ee=je.id,ce=an.id}const _e=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Je=Z.isInstancedMesh===!0,Be=Z.isBatchedMesh===!0,Ne=!!T.map,qe=!!T.matcap,ft=!!J,ut=!!T.aoMap,tt=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,Yt=!!T.normalMap,$t=!!T.displacementMap,nn=!!T.emissiveMap,Qt=!!T.metalnessMap,ln=!!T.roughnessMap,Y=T.anisotropy>0,Xt=T.clearcoat>0,Ut=T.dispersion>0,I=T.iridescence>0,M=T.sheen>0,Q=T.transmission>0,se=Y&&!!T.anisotropyMap,ge=Xt&&!!T.clearcoatMap,Ce=Xt&&!!T.clearcoatNormalMap,Oe=Xt&&!!T.clearcoatRoughnessMap,me=I&&!!T.iridescenceMap,ve=I&&!!T.iridescenceThicknessMap,De=M&&!!T.sheenColorMap,Ve=M&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Pe=!!T.specularColorMap,nt=!!T.specularIntensityMap,it=Q&&!!T.transmissionMap,dt=Q&&!!T.thicknessMap,W=!!T.gradientMap,we=!!T.alphaMap,ye=T.alphaTest>0,Ue=!!T.alphaHash,Ge=!!T.extensions;let Te=ia;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Te=r.toneMapping);const Qe={shaderID:Ee,shaderType:T.type,shaderName:T.name,vertexShader:be,fragmentShader:Ae,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Be,batchingColor:Be&&Z._colorsTexture!==null,instancing:Je,instancingColor:Je&&Z.instanceColor!==null,instancingMorph:Je&&Z.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ne,matcap:qe,envMap:ft,envMapMode:ft&&J.mapping,envMapCubeUVHeight:he,aoMap:ut,lightMap:tt,bumpMap:Ct,normalMap:Yt,displacementMap:$t,emissiveMap:nn,normalMapObjectSpace:Yt&&T.normalMapType===W3,normalMapTangentSpace:Yt&&T.normalMapType===mx,packedNormalMap:Yt&&T.normalMapType===mx&&lL(T.normalMap.format),metalnessMap:Qt,roughnessMap:ln,anisotropy:Y,anisotropyMap:se,clearcoat:Xt,clearcoatMap:ge,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Oe,dispersion:Ut,iridescence:I,iridescenceMap:me,iridescenceThicknessMap:ve,sheen:M,sheenColorMap:De,sheenRoughnessMap:Ve,specularMap:ze,specularColorMap:Pe,specularIntensityMap:nt,transmission:Q,transmissionMap:it,thicknessMap:dt,gradientMap:W,opaque:T.transparent===!1&&T.blending===co&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:ye,alphaHash:Ue,combine:T.combine,mapUv:Ne&&E(T.map.channel),aoMapUv:ut&&E(T.aoMap.channel),lightMapUv:tt&&E(T.lightMap.channel),bumpMapUv:Ct&&E(T.bumpMap.channel),normalMapUv:Yt&&E(T.normalMap.channel),displacementMapUv:$t&&E(T.displacementMap.channel),emissiveMapUv:nn&&E(T.emissiveMap.channel),metalnessMapUv:Qt&&E(T.metalnessMap.channel),roughnessMapUv:ln&&E(T.roughnessMap.channel),anisotropyMapUv:se&&E(T.anisotropyMap.channel),clearcoatMapUv:ge&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(T.sheenRoughnessMap.channel),specularMapUv:ze&&E(T.specularMap.channel),specularColorMapUv:Pe&&E(T.specularColorMap.channel),specularIntensityMapUv:nt&&E(T.specularIntensityMap.channel),transmissionMapUv:it&&E(T.transmissionMap.channel),thicknessMapUv:dt&&E(T.thicknessMap.channel),alphaMapUv:we&&E(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Yt||Y),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!$.attributes.uv&&(Ne||we),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&Yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Le,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:pe,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ne&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:nn&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Da,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function b(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)z.push(q),z.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(z,T),P(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function P(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),z.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const z=S[T.type];let q;if(z){const V=Ji[z];q=LR.clone(V.uniforms)}else q=T.uniforms;return q}function L(T,z){let q=_.get(z);return q!==void 0?++q.usedTimes:(q=new aL(r,z,T,l),p.push(q),_.set(z,q)),q}function O(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function B(){h.dispose()}return{getParameters:D,getProgramCacheKey:b,getUniforms:F,acquireProgram:L,releaseProgram:O,releaseShaderCache:U,programs:p,dispose:B}}function uL(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function fL(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function dy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hy(){const r=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,D,b,y){let P=r[e];return P===void 0?(P={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:b,group:y},r[e]=P):(P.id=g.id,P.object=g,P.geometry=S,P.material=E,P.materialVariant=f(g),P.groupOrder=D,P.renderOrder=g.renderOrder,P.z=b,P.group=y),e++,P}function m(g,S,E,D,b,y){const P=h(g,S,E,D,b,y);E.transmission>0?a.push(P):E.transparent===!0?l.push(P):i.push(P)}function p(g,S,E,D,b,y){const P=h(g,S,E,D,b,y);E.transmission>0?a.unshift(P):E.transparent===!0?l.unshift(P):i.unshift(P)}function _(g,S,E){i.length>1&&i.sort(g||fL),a.length>1&&a.sort(S||dy),l.length>1&&l.sort(S||dy),E&&(i.reverse(),a.reverse(),l.reverse())}function v(){for(let g=e,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function dL(){let r=new WeakMap;function e(a,l){const c=r.get(a);let f;return c===void 0?(f=new hy,r.set(a,[f])):l>=c.length?(f=new hy,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function hL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Et};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function pL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let mL=0;function gL(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vL(r){const e=new hL,i=pL(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ie);const l=new ie,c=new dn,f=new dn;function h(p){let _=0,v=0,g=0;for(let z=0;z<9;z++)a.probe[z].set(0,0,0);let S=0,E=0,D=0,b=0,y=0,P=0,F=0,L=0,O=0,U=0,B=0;p.sort(gL);for(let z=0,q=p.length;z<q;z++){const V=p[z],Z=V.color,fe=V.intensity,de=V.distance;let $=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ls?$=V.shadow.map.texture:$=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=Z.r*fe,v+=Z.g*fe,g+=Z.b*fe;else if(V.isLightProbe){for(let C=0;C<9;C++)a.probe[C].addScaledVector(V.sh.coefficients[C],fe);B++}else if(V.isDirectionalLight){const C=e.get(V);if(C.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,J=i.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[S]=J,a.directionalShadowMap[S]=$,a.directionalShadowMatrix[S]=V.shadow.matrix,P++}a.directional[S]=C,S++}else if(V.isSpotLight){const C=e.get(V);C.position.setFromMatrixPosition(V.matrixWorld),C.color.copy(Z).multiplyScalar(fe),C.distance=de,C.coneCos=Math.cos(V.angle),C.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),C.decay=V.decay,a.spot[D]=C;const H=V.shadow;if(V.map&&(a.spotLightMap[O]=V.map,O++,H.updateMatrices(V),V.castShadow&&U++),a.spotLightMatrix[D]=H.matrix,V.castShadow){const J=i.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[D]=J,a.spotShadowMap[D]=$,L++}D++}else if(V.isRectAreaLight){const C=e.get(V);C.color.copy(Z).multiplyScalar(fe),C.halfWidth.set(V.width*.5,0,0),C.halfHeight.set(0,V.height*.5,0),a.rectArea[b]=C,b++}else if(V.isPointLight){const C=e.get(V);if(C.color.copy(V.color).multiplyScalar(V.intensity),C.distance=V.distance,C.decay=V.decay,V.castShadow){const H=V.shadow,J=i.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[E]=J,a.pointShadowMap[E]=$,a.pointShadowMatrix[E]=V.shadow.matrix,F++}a.point[E]=C,E++}else if(V.isHemisphereLight){const C=e.get(V);C.skyColor.copy(V.color).multiplyScalar(fe),C.groundColor.copy(V.groundColor).multiplyScalar(fe),a.hemi[y]=C,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==D||T.rectAreaLength!==b||T.hemiLength!==y||T.numDirectionalShadows!==P||T.numPointShadows!==F||T.numSpotShadows!==L||T.numSpotMaps!==O||T.numLightProbes!==B)&&(a.directional.length=S,a.spot.length=D,a.rectArea.length=b,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=F,a.pointShadowMap.length=F,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=F,a.spotLightMatrix.length=L+O-U,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=B,T.directionalLength=S,T.pointLength=E,T.spotLength=D,T.rectAreaLength=b,T.hemiLength=y,T.numDirectionalShadows=P,T.numPointShadows=F,T.numSpotShadows=L,T.numSpotMaps=O,T.numLightProbes=B,a.version=mL++)}function m(p,_){let v=0,g=0,S=0,E=0,D=0;const b=_.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const F=p[y];if(F.isDirectionalLight){const L=a.directional[v];L.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(b),v++}else if(F.isSpotLight){const L=a.spot[S];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(b),L.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(b),S++}else if(F.isRectAreaLight){const L=a.rectArea[E];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(b),f.identity(),c.copy(F.matrixWorld),c.premultiply(b),f.extractRotation(c),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),E++}else if(F.isPointLight){const L=a.point[g];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){const L=a.hemi[D];L.direction.setFromMatrixPosition(F.matrixWorld),L.direction.transformDirection(b),D++}}}return{setup:h,setupView:m,state:a}}function py(r){const e=new vL(r),i=[],a=[],l=[];function c(g){v.camera=g,i.length=0,a.length=0,l.length=0}function f(g){i.push(g)}function h(g){a.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function _L(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new py(r),e.set(l,[h])):c>=f.length?(h=new py(r),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:i,dispose:a}}const xL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yL=`uniform sampler2D shadow_pass;
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
}`,SL=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],bL=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],my=new dn,Sl=new ie,ep=new ie;function ML(r,e,i){let a=new ab;const l=new Pt,c=new Pt,f=new fn,h=new IR,m=new zR,p={},_=i.maxTextureSize,v={[Er]:ti,[ti]:Er,[Da]:Da},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:xL,fragmentShader:yL}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Fa(E,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let y=this.type;this.render=function(U,B,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||U.length===0)return;this.type===b3&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Du);const z=r.getRenderTarget(),q=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(La),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const fe=y!==this.type;fe&&B.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach($=>$.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,$=U.length;de<$;de++){const C=U[de],H=C.shadow;if(H===void 0){ct("WebGLShadowMap:",C,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const J=H.getFrameExtents();l.multiply(J),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,H.mapSize.y=c.y));const he=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=he,H.map===null||fe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ml){if(C.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new aa(l.x,l.y,{format:ls,type:Ia,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),H.map.texture.name=C.name+".shadowMap",H.map.depthTexture=new go(l.x,l.y,ta),H.map.depthTexture.name=C.name+".shadowMapDepth",H.map.depthTexture.format=za,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else C.isPointLight?(H.map=new db(l.x),H.map.depthTexture=new DR(l.x,ra)):(H.map=new aa(l.x,l.y),H.map.depthTexture=new go(l.x,l.y,ra)),H.map.depthTexture.name=C.name+".shadowMap",H.map.depthTexture.format=za,this.type===Du?(H.map.depthTexture.compareFunction=he?Lm:Nm,H.map.depthTexture.minFilter=Vn,H.map.depthTexture.magFilter=Vn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn);H.camera.updateProjectionMatrix()}const Ee=H.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<Ee;N++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,N),r.clear();else{N===0&&(r.setRenderTarget(H.map),r.clear());const k=H.getViewport(N);f.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),Z.viewport(f)}if(C.isPointLight){const k=H.camera,pe=H.matrix,be=C.distance||k.far;be!==k.far&&(k.far=be,k.updateProjectionMatrix()),Sl.setFromMatrixPosition(C.matrixWorld),k.position.copy(Sl),ep.copy(k.position),ep.add(SL[N]),k.up.copy(bL[N]),k.lookAt(ep),k.updateMatrixWorld(),pe.makeTranslation(-Sl.x,-Sl.y,-Sl.z),my.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H._frustum.setFromProjectionMatrix(my,k.coordinateSystem,k.reversedDepth)}else H.updateMatrices(C);a=H.getFrustum(),L(B,T,H.camera,C,this.type)}H.isPointLightShadow!==!0&&this.type===Ml&&P(H,T),H.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(z,q,V)};function P(U,B){const T=e.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new aa(l.x,l.y,{format:ls,type:Ia})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,D,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(B,null,T,S,D,null)}function F(U,B,T,z){let q=null;const V=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)q=V;else if(q=T.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=q.uuid,fe=B.uuid;let de=p[Z];de===void 0&&(de={},p[Z]=de);let $=de[fe];$===void 0&&($=q.clone(),de[fe]=$,B.addEventListener("dispose",O)),q=$}if(q.visible=B.visible,q.wireframe=B.wireframe,z===Ml?q.side=B.shadowSide!==null?B.shadowSide:B.side:q.side=B.shadowSide!==null?B.shadowSide:v[B.side],q.alphaMap=B.alphaMap,q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,q.map=B.map,q.clipShadows=B.clipShadows,q.clippingPlanes=B.clippingPlanes,q.clipIntersection=B.clipIntersection,q.displacementMap=B.displacementMap,q.displacementScale=B.displacementScale,q.displacementBias=B.displacementBias,q.wireframeLinewidth=B.wireframeLinewidth,q.linewidth=B.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Z=r.properties.get(q);Z.light=T}return q}function L(U,B,T,z,q){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&q===Ml)&&(!U.frustumCulled||a.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const fe=e.update(U),de=U.material;if(Array.isArray(de)){const $=fe.groups;for(let C=0,H=$.length;C<H;C++){const J=$[C],he=de[J.materialIndex];if(he&&he.visible){const Ee=F(U,he,z,q);U.onBeforeShadow(r,U,B,T,fe,Ee,J),r.renderBufferDirect(T,null,fe,Ee,U,J),U.onAfterShadow(r,U,B,T,fe,Ee,J)}}}else if(de.visible){const $=F(U,de,z,q);U.onBeforeShadow(r,U,B,T,fe,$,null),r.renderBufferDirect(T,null,fe,$,U,null),U.onAfterShadow(r,U,B,T,fe,$,null)}}const Z=U.children;for(let fe=0,de=Z.length;fe<de;fe++)L(Z[fe],B,T,z,q)}function O(U){U.target.removeEventListener("dispose",O);for(const T in p){const z=p[T],q=U.target.uuid;q in z&&(z[q].dispose(),delete z[q])}}}function EL(r,e){function i(){let W=!1;const we=new fn;let ye=null;const Ue=new fn(0,0,0,0);return{setMask:function(Ge){ye!==Ge&&!W&&(r.colorMask(Ge,Ge,Ge,Ge),ye=Ge)},setLocked:function(Ge){W=Ge},setClear:function(Ge,Te,Qe,je,an){an===!0&&(Ge*=je,Te*=je,Qe*=je),we.set(Ge,Te,Qe,je),Ue.equals(we)===!1&&(r.clearColor(Ge,Te,Qe,je),Ue.copy(we))},reset:function(){W=!1,ye=null,Ue.set(-1,0,0,0)}}}function a(){let W=!1,we=!1,ye=null,Ue=null,Ge=null;return{setReversed:function(Te){if(we!==Te){const Qe=e.get("EXT_clip_control");Te?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),we=Te;const je=Ge;Ge=null,this.setClear(je)}},getReversed:function(){return we},setTest:function(Te){Te?_e(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Te){ye!==Te&&!W&&(r.depthMask(Te),ye=Te)},setFunc:function(Te){if(we&&(Te=tR[Te]),Ue!==Te){switch(Te){case yp:r.depthFunc(r.NEVER);break;case Sp:r.depthFunc(r.ALWAYS);break;case bp:r.depthFunc(r.LESS);break;case po:r.depthFunc(r.LEQUAL);break;case Mp:r.depthFunc(r.EQUAL);break;case Ep:r.depthFunc(r.GEQUAL);break;case Tp:r.depthFunc(r.GREATER);break;case Ap:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=Te}},setLocked:function(Te){W=Te},setClear:function(Te){Ge!==Te&&(Ge=Te,we&&(Te=1-Te),r.clearDepth(Te))},reset:function(){W=!1,ye=null,Ue=null,Ge=null,we=!1}}}function l(){let W=!1,we=null,ye=null,Ue=null,Ge=null,Te=null,Qe=null,je=null,an=null;return{setTest:function(zt){W||(zt?_e(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(zt){we!==zt&&!W&&(r.stencilMask(zt),we=zt)},setFunc:function(zt,ii,ai){(ye!==zt||Ue!==ii||Ge!==ai)&&(r.stencilFunc(zt,ii,ai),ye=zt,Ue=ii,Ge=ai)},setOp:function(zt,ii,ai){(Te!==zt||Qe!==ii||je!==ai)&&(r.stencilOp(zt,ii,ai),Te=zt,Qe=ii,je=ai)},setLocked:function(zt){W=zt},setClear:function(zt){an!==zt&&(r.clearStencil(zt),an=zt)},reset:function(){W=!1,we=null,ye=null,Ue=null,Ge=null,Te=null,Qe=null,je=null,an=null}}}const c=new i,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],D=null,b=!1,y=null,P=null,F=null,L=null,O=null,U=null,B=null,T=new Et(0,0,0),z=0,q=!1,V=null,Z=null,fe=null,de=null,$=null;const C=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(he)[1]),H=J>=1):he.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),H=J>=2);let Ee=null,N={};const k=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),be=new fn().fromArray(k),Ae=new fn().fromArray(pe);function ee(W,we,ye,Ue){const Ge=new Uint8Array(4),Te=r.createTexture();r.bindTexture(W,Te),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<ye;Qe++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(we+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Te}const ce={};ce[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),_e(r.DEPTH_TEST),f.setFunc(po),Ct(!1),Yt(fx),_e(r.CULL_FACE),ut(La);function _e(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Le(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Je(W,we){return g[W]!==we?(r.bindFramebuffer(W,we),g[W]=we,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=we),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=we),!0):!1}function Be(W,we){let ye=E,Ue=!1;if(W){ye=S.get(we),ye===void 0&&(ye=[],S.set(we,ye));const Ge=W.textures;if(ye.length!==Ge.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,Qe=Ge.length;Te<Qe;Te++)ye[Te]=r.COLOR_ATTACHMENT0+Te;ye.length=Ge.length,Ue=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(ye)}function Ne(W){return D!==W?(r.useProgram(W),D=W,!0):!1}const qe={[Jr]:r.FUNC_ADD,[E3]:r.FUNC_SUBTRACT,[T3]:r.FUNC_REVERSE_SUBTRACT};qe[A3]=r.MIN,qe[R3]=r.MAX;const ft={[C3]:r.ZERO,[w3]:r.ONE,[D3]:r.SRC_COLOR,[_p]:r.SRC_ALPHA,[I3]:r.SRC_ALPHA_SATURATE,[O3]:r.DST_COLOR,[L3]:r.DST_ALPHA,[N3]:r.ONE_MINUS_SRC_COLOR,[xp]:r.ONE_MINUS_SRC_ALPHA,[P3]:r.ONE_MINUS_DST_COLOR,[U3]:r.ONE_MINUS_DST_ALPHA,[z3]:r.CONSTANT_COLOR,[F3]:r.ONE_MINUS_CONSTANT_COLOR,[B3]:r.CONSTANT_ALPHA,[H3]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(W,we,ye,Ue,Ge,Te,Qe,je,an,zt){if(W===La){b===!0&&(Le(r.BLEND),b=!1);return}if(b===!1&&(_e(r.BLEND),b=!0),W!==M3){if(W!==y||zt!==q){if((P!==Jr||O!==Jr)&&(r.blendEquation(r.FUNC_ADD),P=Jr,O=Jr),zt)switch(W){case co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dx:r.blendFunc(r.ONE,r.ONE);break;case hx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case px:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hx:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case px:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}F=null,L=null,U=null,B=null,T.set(0,0,0),z=0,y=W,q=zt}return}Ge=Ge||we,Te=Te||ye,Qe=Qe||Ue,(we!==P||Ge!==O)&&(r.blendEquationSeparate(qe[we],qe[Ge]),P=we,O=Ge),(ye!==F||Ue!==L||Te!==U||Qe!==B)&&(r.blendFuncSeparate(ft[ye],ft[Ue],ft[Te],ft[Qe]),F=ye,L=Ue,U=Te,B=Qe),(je.equals(T)===!1||an!==z)&&(r.blendColor(je.r,je.g,je.b,an),T.copy(je),z=an),y=W,q=!1}function tt(W,we){W.side===Da?Le(r.CULL_FACE):_e(r.CULL_FACE);let ye=W.side===ti;we&&(ye=!ye),Ct(ye),W.blending===co&&W.transparent===!1?ut(La):ut(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ue=W.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(W){V!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),V=W)}function Yt(W){W!==y3?(_e(r.CULL_FACE),W!==Z&&(W===fx?r.cullFace(r.BACK):W===S3?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),Z=W}function $t(W){W!==fe&&(H&&r.lineWidth(W),fe=W)}function nn(W,we,ye){W?(_e(r.POLYGON_OFFSET_FILL),(de!==we||$!==ye)&&(de=we,$=ye,f.getReversed()&&(we=-we),r.polygonOffset(we,ye))):Le(r.POLYGON_OFFSET_FILL)}function Qt(W){W?_e(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function ln(W){W===void 0&&(W=r.TEXTURE0+C-1),Ee!==W&&(r.activeTexture(W),Ee=W)}function Y(W,we,ye){ye===void 0&&(Ee===null?ye=r.TEXTURE0+C-1:ye=Ee);let Ue=N[ye];Ue===void 0&&(Ue={type:void 0,texture:void 0},N[ye]=Ue),(Ue.type!==W||Ue.texture!==we)&&(Ee!==ye&&(r.activeTexture(ye),Ee=ye),r.bindTexture(W,we||ce[W]),Ue.type=W,Ue.texture=we)}function Xt(){const W=N[Ee];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ut(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function M(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Q(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ce(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Oe(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function me(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ve(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function De(W){return v[W]!==void 0?v[W]:r.getParameter(W)}function Ve(W,we){v[W]!==we&&(r.pixelStorei(W,we),v[W]=we)}function ze(W){be.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function Pe(W){Ae.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function nt(W,we){let ye=p.get(we);ye===void 0&&(ye=new WeakMap,p.set(we,ye));let Ue=ye.get(W);Ue===void 0&&(Ue=r.getUniformBlockIndex(we,W.name),ye.set(W,Ue))}function it(W,we){const Ue=p.get(we).get(W);m.get(we)!==Ue&&(r.uniformBlockBinding(we,Ue,W.__bindingPointIndex),m.set(we,Ue))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},Ee=null,N={},g={},S=new WeakMap,E=[],D=null,b=!1,y=null,P=null,F=null,L=null,O=null,U=null,B=null,T=new Et(0,0,0),z=0,q=!1,V=null,Z=null,fe=null,de=null,$=null,be.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:_e,disable:Le,bindFramebuffer:Je,drawBuffers:Be,useProgram:Ne,setBlending:ut,setMaterial:tt,setFlipSided:Ct,setCullFace:Yt,setLineWidth:$t,setPolygonOffset:nn,setScissorTest:Qt,activeTexture:ln,bindTexture:Y,unbindTexture:Xt,compressedTexImage2D:Ut,compressedTexImage3D:I,texImage2D:me,texImage3D:ve,pixelStorei:Ve,getParameter:De,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Oe,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:se,compressedTexSubImage3D:ge,scissor:ze,viewport:Pe,reset:dt}}function TL(r,e,i,a,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(I,M){return E?new OffscreenCanvas(I,M):Xu("canvas")}function b(I,M,Q){let se=1;const ge=Ut(I);if((ge.width>Q||ge.height>Q)&&(se=Q/Math.max(ge.width,ge.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ce=Math.floor(se*ge.width),Oe=Math.floor(se*ge.height);g===void 0&&(g=D(Ce,Oe));const me=M?D(Ce,Oe):g;return me.width=Ce,me.height=Oe,me.getContext("2d").drawImage(I,0,0,Ce,Oe),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ce+"x"+Oe+")."),me}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function y(I){return I.generateMipmaps}function P(I){r.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,M,Q,se,ge,Ce=!1){if(I!==null){if(r[I]!==void 0)return r[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Oe;se&&(Oe=e.get("EXT_texture_norm16"),Oe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===r.RED&&(Q===r.FLOAT&&(me=r.R32F),Q===r.HALF_FLOAT&&(me=r.R16F),Q===r.UNSIGNED_BYTE&&(me=r.R8),Q===r.UNSIGNED_SHORT&&Oe&&(me=Oe.R16_EXT),Q===r.SHORT&&Oe&&(me=Oe.R16_SNORM_EXT)),M===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(me=r.R8UI),Q===r.UNSIGNED_SHORT&&(me=r.R16UI),Q===r.UNSIGNED_INT&&(me=r.R32UI),Q===r.BYTE&&(me=r.R8I),Q===r.SHORT&&(me=r.R16I),Q===r.INT&&(me=r.R32I)),M===r.RG&&(Q===r.FLOAT&&(me=r.RG32F),Q===r.HALF_FLOAT&&(me=r.RG16F),Q===r.UNSIGNED_BYTE&&(me=r.RG8),Q===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RG16_EXT),Q===r.SHORT&&Oe&&(me=Oe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(me=r.RG8UI),Q===r.UNSIGNED_SHORT&&(me=r.RG16UI),Q===r.UNSIGNED_INT&&(me=r.RG32UI),Q===r.BYTE&&(me=r.RG8I),Q===r.SHORT&&(me=r.RG16I),Q===r.INT&&(me=r.RG32I)),M===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(me=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(me=r.RGB16UI),Q===r.UNSIGNED_INT&&(me=r.RGB32UI),Q===r.BYTE&&(me=r.RGB8I),Q===r.SHORT&&(me=r.RGB16I),Q===r.INT&&(me=r.RGB32I)),M===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),Q===r.UNSIGNED_INT&&(me=r.RGBA32UI),Q===r.BYTE&&(me=r.RGBA8I),Q===r.SHORT&&(me=r.RGBA16I),Q===r.INT&&(me=r.RGBA32I)),M===r.RGB&&(Q===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGB16_EXT),Q===r.SHORT&&Oe&&(me=Oe.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(me=r.R11F_G11F_B10F)),M===r.RGBA){const ve=Ce?Vu:At.getTransfer(ge);Q===r.FLOAT&&(me=r.RGBA32F),Q===r.HALF_FLOAT&&(me=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(me=ve===kt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGBA16_EXT),Q===r.SHORT&&Oe&&(me=Oe.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function O(I,M){let Q;return I?M===null||M===ra||M===Dl?Q=r.DEPTH24_STENCIL8:M===ta?Q=r.DEPTH32F_STENCIL8:M===wl&&(Q=r.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ra||M===Dl?Q=r.DEPTH_COMPONENT24:M===ta?Q=r.DEPTH_COMPONENT32F:M===wl&&(Q=r.DEPTH_COMPONENT16),Q}function U(I,M){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pn&&I.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function B(I){const M=I.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(I){const M=I.target;M.removeEventListener("dispose",T),V(M)}function z(I){const M=a.get(I);if(M.__webglInit===void 0)return;const Q=I.source,se=S.get(Q);if(se){const ge=se[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&q(I),Object.keys(se).length===0&&S.delete(Q)}a.remove(I)}function q(I){const M=a.get(I);r.deleteTexture(M.__webglTexture);const Q=I.source,se=S.get(Q);delete se[M.__cacheKey],f.memory.textures--}function V(I){const M=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ge=0;ge<M.__webglFramebuffer[se].length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[se][ge]);else r.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)r.deleteFramebuffer(M.__webglFramebuffer[se]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=I.textures;for(let se=0,ge=Q.length;se<ge;se++){const Ce=a.get(Q[se]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),f.memory.textures--),a.remove(Q[se])}a.remove(I)}let Z=0;function fe(){Z=0}function de(){return Z}function $(I){Z=I}function C(){const I=Z;return I>=l.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),Z+=1,I}function H(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function J(I,M){const Q=a.get(I);if(I.isVideoTexture&&Y(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const se=I.image;if(se===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(Q,I,M);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+M)}function he(I,M){const Q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Le(Q,I,M);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+M)}function Ee(I,M){const Q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Le(Q,I,M);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+M)}function N(I,M){const Q=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){Je(Q,I,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+M)}const k={[Rp]:r.REPEAT,[Na]:r.CLAMP_TO_EDGE,[Cp]:r.MIRRORED_REPEAT},pe={[Pn]:r.NEAREST,[k3]:r.NEAREST_MIPMAP_NEAREST,[eu]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Mh]:r.LINEAR_MIPMAP_NEAREST,[ns]:r.LINEAR_MIPMAP_LINEAR},be={[q3]:r.NEVER,[Q3]:r.ALWAYS,[j3]:r.LESS,[Nm]:r.LEQUAL,[Y3]:r.EQUAL,[Lm]:r.GEQUAL,[Z3]:r.GREATER,[K3]:r.NOTEQUAL};function Ae(I,M){if(M.type===ta&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Mh||M.magFilter===eu||M.magFilter===ns||M.minFilter===Vn||M.minFilter===Mh||M.minFilter===eu||M.minFilter===ns)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,k[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,k[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,k[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,pe[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==eu&&M.minFilter!==ns||M.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function ee(I,M){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",B));const se=M.source;let ge=S.get(se);ge===void 0&&(ge={},S.set(se,ge));const Ce=H(M);if(Ce!==I.__cacheKey){ge[Ce]===void 0&&(ge[Ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),ge[Ce].usedTimes++;const Oe=ge[I.__cacheKey];Oe!==void 0&&(ge[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&q(M)),I.__cacheKey=Ce,I.__webglTexture=ge[Ce].texture}return Q}function ce(I,M,Q){return Math.floor(Math.floor(I/Q)/M)}function _e(I,M,Q,se){const Ce=I.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Q,se,M.data);else{Ce.sort((Ve,ze)=>Ve.start-ze.start);let Oe=0;for(let Ve=1;Ve<Ce.length;Ve++){const ze=Ce[Oe],Pe=Ce[Ve],nt=ze.start+ze.count,it=ce(Pe.start,M.width,4),dt=ce(ze.start,M.width,4);Pe.start<=nt+1&&it===dt&&ce(Pe.start+Pe.count-1,M.width,4)===it?ze.count=Math.max(ze.count,Pe.start+Pe.count-ze.start):(++Oe,Ce[Oe]=Pe)}Ce.length=Oe+1;const me=i.getParameter(r.UNPACK_ROW_LENGTH),ve=i.getParameter(r.UNPACK_SKIP_PIXELS),De=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ve=0,ze=Ce.length;Ve<ze;Ve++){const Pe=Ce[Ve],nt=Math.floor(Pe.start/4),it=Math.ceil(Pe.count/4),dt=nt%M.width,W=Math.floor(nt/M.width),we=it,ye=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,dt,W,we,ye,Q,se,M.data)}I.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,me),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Le(I,M,Q){let se=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=r.TEXTURE_3D);const ge=ee(I,M),Ce=M.source;i.bindTexture(se,I.__webglTexture,r.TEXTURE0+Q);const Oe=a.get(Ce);if(Ce.version!==Oe.__version||ge===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=At.getPrimaries(At.workingColorSpace),Ue=M.colorSpace===xr?null:At.getPrimaries(M.colorSpace),Ge=M.colorSpace===xr||ye===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ve=b(M.image,!1,l.maxTextureSize);ve=Xt(M,ve);const De=c.convert(M.format,M.colorSpace),Ve=c.convert(M.type);let ze=L(M.internalFormat,De,Ve,M.normalized,M.colorSpace,M.isVideoTexture);Ae(se,M);let Pe;const nt=M.mipmaps,it=M.isVideoTexture!==!0,dt=Oe.__version===void 0||ge===!0,W=Ce.dataReady,we=U(M,ve);if(M.isDepthTexture)ze=O(M.format===is,M.type),dt&&(it?i.texStorage2D(r.TEXTURE_2D,1,ze,ve.width,ve.height):i.texImage2D(r.TEXTURE_2D,0,ze,ve.width,ve.height,0,De,Ve,null));else if(M.isDataTexture)if(nt.length>0){it&&dt&&i.texStorage2D(r.TEXTURE_2D,we,ze,nt[0].width,nt[0].height);for(let ye=0,Ue=nt.length;ye<Ue;ye++)Pe=nt[ye],it?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,De,Ve,Pe.data):i.texImage2D(r.TEXTURE_2D,ye,ze,Pe.width,Pe.height,0,De,Ve,Pe.data);M.generateMipmaps=!1}else it?(dt&&i.texStorage2D(r.TEXTURE_2D,we,ze,ve.width,ve.height),W&&_e(M,ve,De,Ve)):i.texImage2D(r.TEXTURE_2D,0,ze,ve.width,ve.height,0,De,Ve,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,we,ze,nt[0].width,nt[0].height,ve.depth);for(let ye=0,Ue=nt.length;ye<Ue;ye++)if(Pe=nt[ye],M.format!==Vi)if(De!==null)if(it){if(W)if(M.layerUpdates.size>0){const Ge=qx(Pe.width,Pe.height,M.format,M.type);for(const Te of M.layerUpdates){const Qe=Pe.data.subarray(Te*Ge/Pe.data.BYTES_PER_ELEMENT,(Te+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Te,Pe.width,Pe.height,1,De,Qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,ve.depth,De,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,ze,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,ve.depth,De,Ve,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,ze,Pe.width,Pe.height,ve.depth,0,De,Ve,Pe.data)}else{it&&dt&&i.texStorage2D(r.TEXTURE_2D,we,ze,nt[0].width,nt[0].height);for(let ye=0,Ue=nt.length;ye<Ue;ye++)Pe=nt[ye],M.format!==Vi?De!==null?it?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,ze,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,De,Ve,Pe.data):i.texImage2D(r.TEXTURE_2D,ye,ze,Pe.width,Pe.height,0,De,Ve,Pe.data)}else if(M.isDataArrayTexture)if(it){if(dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,we,ze,ve.width,ve.height,ve.depth),W)if(M.layerUpdates.size>0){const ye=qx(ve.width,ve.height,M.format,M.type);for(const Ue of M.layerUpdates){const Ge=ve.data.subarray(Ue*ye/ve.data.BYTES_PER_ELEMENT,(Ue+1)*ye/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,ve.width,ve.height,1,De,Ve,Ge)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,Ve,ve.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,De,Ve,ve.data);else if(M.isData3DTexture)it?(dt&&i.texStorage3D(r.TEXTURE_3D,we,ze,ve.width,ve.height,ve.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,Ve,ve.data)):i.texImage3D(r.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,De,Ve,ve.data);else if(M.isFramebufferTexture){if(dt)if(it)i.texStorage2D(r.TEXTURE_2D,we,ze,ve.width,ve.height);else{let ye=ve.width,Ue=ve.height;for(let Ge=0;Ge<we;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,ze,ye,Ue,0,De,Ve,null),ye>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ve.parentNode!==ye){ye.appendChild(ve),v.add(M),ye.onpaint=Ue=>{const Ge=Ue.changedElements;for(const Te of v)Ge.includes(Te.image)&&(Te.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ve);else{const Ge=r.RGBA,Te=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Te,Qe,ve)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&dt){const ye=Ut(nt[0]);i.texStorage2D(r.TEXTURE_2D,we,ze,ye.width,ye.height)}for(let ye=0,Ue=nt.length;ye<Ue;ye++)Pe=nt[ye],it?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,De,Ve,Pe):i.texImage2D(r.TEXTURE_2D,ye,ze,De,Ve,Pe);M.generateMipmaps=!1}else if(it){if(dt){const ye=Ut(ve);i.texStorage2D(r.TEXTURE_2D,we,ze,ye.width,ye.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Ve,ve)}else i.texImage2D(r.TEXTURE_2D,0,ze,De,Ve,ve);y(M)&&P(se),Oe.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Je(I,M,Q){if(M.image.length!==6)return;const se=ee(I,M),ge=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Q);const Ce=a.get(ge);if(ge.version!==Ce.__version||se===!0){i.activeTexture(r.TEXTURE0+Q);const Oe=At.getPrimaries(At.workingColorSpace),me=M.colorSpace===xr?null:At.getPrimaries(M.colorSpace),ve=M.colorSpace===xr||Oe===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Ve=M.image[0]&&M.image[0].isDataTexture,ze=[];for(let Te=0;Te<6;Te++)!De&&!Ve?ze[Te]=b(M.image[Te],!0,l.maxCubemapSize):ze[Te]=Ve?M.image[Te].image:M.image[Te],ze[Te]=Xt(M,ze[Te]);const Pe=ze[0],nt=c.convert(M.format,M.colorSpace),it=c.convert(M.type),dt=L(M.internalFormat,nt,it,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,we=Ce.__version===void 0||se===!0,ye=ge.dataReady;let Ue=U(M,Pe);Ae(r.TEXTURE_CUBE_MAP,M);let Ge;if(De){W&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,dt,Pe.width,Pe.height);for(let Te=0;Te<6;Te++){Ge=ze[Te].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const je=Ge[Qe];M.format!==Vi?nt!==null?W?ye&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,je.width,je.height,nt,je.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,dt,je.width,je.height,0,je.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,je.width,je.height,nt,it,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,dt,je.width,je.height,0,nt,it,je.data)}}}else{if(Ge=M.mipmaps,W&&we){Ge.length>0&&Ue++;const Te=Ut(ze[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,dt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ve){W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ze[Te].width,ze[Te].height,nt,it,ze[Te].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,dt,ze[Te].width,ze[Te].height,0,nt,it,ze[Te].data);for(let Qe=0;Qe<Ge.length;Qe++){const an=Ge[Qe].image[Te].image;W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,an.width,an.height,nt,it,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,dt,an.width,an.height,0,nt,it,an.data)}}else{W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,nt,it,ze[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,dt,nt,it,ze[Te]);for(let Qe=0;Qe<Ge.length;Qe++){const je=Ge[Qe];W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,nt,it,je.image[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,dt,nt,it,je.image[Te])}}}y(M)&&P(r.TEXTURE_CUBE_MAP),Ce.__version=ge.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Be(I,M,Q,se,ge,Ce){const Oe=c.convert(Q.format,Q.colorSpace),me=c.convert(Q.type),ve=L(Q.internalFormat,Oe,me,Q.normalized,Q.colorSpace),De=a.get(M),Ve=a.get(Q);if(Ve.__renderTarget=M,!De.__hasExternalTextures){const ze=Math.max(1,M.width>>Ce),Pe=Math.max(1,M.height>>Ce);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?i.texImage3D(ge,Ce,ve,ze,Pe,M.depth,0,Oe,me,null):i.texImage2D(ge,Ce,ve,ze,Pe,0,Oe,me,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ge,Ve.__webglTexture,0,Qt(M)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ge,Ve.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(I,M,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){const se=M.depthTexture,ge=se&&se.isDepthTexture?se.type:null,Ce=O(M.stencilBuffer,ge),Oe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),Ce,M.width,M.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),Ce,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,I)}else{const se=M.textures;for(let ge=0;ge<se.length;ge++){const Ce=se[ge],Oe=c.convert(Ce.format,Ce.colorSpace),me=c.convert(Ce.type),ve=L(Ce.internalFormat,Oe,me,Ce.normalized,Ce.colorSpace);ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),ve,M.width,M.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),ve,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ve,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(I,M,Q){const se=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=a.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M.depthTexture);const De=c.convert(M.depthTexture.format),Ve=c.convert(M.depthTexture.type);let ze;M.depthTexture.format===za?ze=r.DEPTH_COMPONENT24:M.depthTexture.format===is&&(ze=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ze,M.width,M.height,0,De,Ve,null)}}else J(M.depthTexture,0);const Ce=ge.__webglTexture,Oe=Qt(M),me=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,ve=M.depthTexture.format===is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===za)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,me,Ce,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,me,Ce,0);else if(M.depthTexture.format===is)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,me,Ce,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,me,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(I){const M=a.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const se=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ge)};se.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=se}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let se=0;se<6;se++)qe(M.__webglFramebuffer[se],I,se);else{const se=I.texture.mipmaps;se&&se.length>0?qe(M.__webglFramebuffer[0],I,0):qe(M.__webglFramebuffer,I,0)}else if(Q){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=r.createRenderbuffer(),Ne(M.__webglDepthbuffer[se],I,!1);else{const ge=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ce)}}else{const se=I.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ne(M.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(I,M,Q){const se=a.get(I);M!==void 0&&Be(se.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ft(I)}function tt(I){const M=I.texture,Q=a.get(I),se=a.get(M);I.addEventListener("dispose",T);const ge=I.textures,Ce=I.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=M.version,f.memory.textures++),Ce){Q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[me]=[];for(let ve=0;ve<M.mipmaps.length;ve++)Q.__webglFramebuffer[me][ve]=r.createFramebuffer()}else Q.__webglFramebuffer[me]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)Q.__webglFramebuffer[me]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let me=0,ve=ge.length;me<ve;me++){const De=a.get(ge[me]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&ln(I)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let me=0;me<ge.length;me++){const ve=ge[me];Q.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[me]);const De=c.convert(ve.format,ve.colorSpace),Ve=c.convert(ve.type),ze=L(ve.internalFormat,De,Ve,ve.normalized,ve.colorSpace,I.isXRRenderTarget===!0),Pe=Qt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ze,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,Q.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(Q.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Be(Q.__webglFramebuffer[me][ve],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else Be(Q.__webglFramebuffer[me],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(M)&&P(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let me=0,ve=ge.length;me<ve;me++){const De=ge[me],Ve=a.get(De);let ze=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ze=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ze,Ve.__webglTexture),Ae(ze,De),Be(Q.__webglFramebuffer,I,De,r.COLOR_ATTACHMENT0+me,ze,0),y(De)&&P(ze)}i.unbindTexture()}else{let me=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(me,se.__webglTexture),Ae(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Be(Q.__webglFramebuffer[ve],I,M,r.COLOR_ATTACHMENT0,me,ve);else Be(Q.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,me,0);y(M)&&P(me),i.unbindTexture()}I.depthBuffer&&ft(I)}function Ct(I){const M=I.textures;for(let Q=0,se=M.length;Q<se;Q++){const ge=M[Q];if(y(ge)){const Ce=F(I),Oe=a.get(ge).__webglTexture;i.bindTexture(Ce,Oe),P(Ce),i.unbindTexture()}}}const Yt=[],$t=[];function nn(I){if(I.samples>0){if(ln(I)===!1){const M=I.textures,Q=I.width,se=I.height;let ge=r.COLOR_BUFFER_BIT;const Ce=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=a.get(I),me=M.length>1;if(me)for(let De=0;De<M.length;De++)i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ve=I.texture.mipmaps;ve&&ve.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let De=0;De<M.length;De++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Ve=a.get(M[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,Q,se,0,0,Q,se,ge,r.NEAREST),m===!0&&(Yt.length=0,$t.length=0,Yt.push(r.COLOR_ATTACHMENT0+De),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Yt.push(Ce),$t.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let De=0;De<M.length;De++){i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const Ve=a.get(M[De]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Ve,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Qt(I){return Math.min(l.maxSamples,I.samples)}function ln(I){const M=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(I){const M=f.render.frame;_.get(I)!==M&&(_.set(I,M),I.update())}function Xt(I,M){const Q=I.colorSpace,se=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Gu&&Q!==xr&&(At.getTransfer(Q)===kt?(se!==Vi||ge!==Di)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",Q)),M}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=C,this.resetTextureUnits=fe,this.getTextureUnits=de,this.setTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=he,this.setTexture3D=Ee,this.setTextureCube=N,this.rebindTextures=ut,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function AL(r,e){function i(a,l=xr){let c;const f=At.getTransfer(l);if(a===Di)return r.UNSIGNED_BYTE;if(a===Am)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Rm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===qS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===jS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===XS)return r.BYTE;if(a===WS)return r.SHORT;if(a===wl)return r.UNSIGNED_SHORT;if(a===Tm)return r.INT;if(a===ra)return r.UNSIGNED_INT;if(a===ta)return r.FLOAT;if(a===Ia)return r.HALF_FLOAT;if(a===YS)return r.ALPHA;if(a===ZS)return r.RGB;if(a===Vi)return r.RGBA;if(a===za)return r.DEPTH_COMPONENT;if(a===is)return r.DEPTH_STENCIL;if(a===KS)return r.RED;if(a===Cm)return r.RED_INTEGER;if(a===ls)return r.RG;if(a===wm)return r.RG_INTEGER;if(a===Dm)return r.RGBA_INTEGER;if(a===Nu||a===Lu||a===Uu||a===Ou)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wp||a===Dp||a===Np||a===Lp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Dp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Lp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Up||a===Op||a===Pp||a===Ip||a===zp||a===Bu||a===Fp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Up||a===Op)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Pp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Ip)return c.COMPRESSED_R11_EAC;if(a===zp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Bu)return c.COMPRESSED_RG11_EAC;if(a===Fp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Bp||a===Hp||a===Gp||a===Vp||a===kp||a===Xp||a===Wp||a===qp||a===jp||a===Yp||a===Zp||a===Kp||a===Qp||a===$p)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Bp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Gp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Vp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Wp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Zp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===$p)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Jp||a===em||a===tm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Jp)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===em)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===tm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nm||a===im||a===Hu||a===am)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===nm)return c.COMPRESSED_RED_RGTC1_EXT;if(a===im)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Hu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===am)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Dl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:i}}const RL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CL=`
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

}`;class wL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new sb(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new gi({vertexShader:RL,fragmentShader:CL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fa(new tf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DL extends us{constructor(e,i){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const D=typeof XRWebGLBinding<"u",b=new wL,y={},P=i.getContextAttributes();let F=null,L=null;const O=[],U=[],B=new Pt;let T=null;const z=new wi;z.viewport=new fn;const q=new wi;q.viewport=new fn;const V=[z,q],Z=new BR;let fe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=O[ee];return ce===void 0&&(ce=new Nh,O[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=O[ee];return ce===void 0&&(ce=new Nh,O[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=O[ee];return ce===void 0&&(ce=new Nh,O[ee]=ce),ce.getHandSpace()};function $(ee){const ce=U.indexOf(ee.inputSource);if(ce===-1)return;const _e=O[ce];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,p||f),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function C(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",C),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<O.length;ee++){const ce=U[ee];ce!==null&&(U[ee]=null,O[ee].disconnect(ce))}fe=null,de=null,b.reset();for(const ee in y)delete y[ee];e.setRenderTarget(F),S=null,g=null,v=null,l=null,L=null,Ae.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,a.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,a.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",C),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,Je=null;P.depth&&(Je=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=P.stencil?is:za,Le=P.stencil?Dl:ra);const Be={colorFormat:i.RGBA8,depthFormat:Je,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Be),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new aa(g.textureWidth,g.textureHeight,{format:Vi,type:Di,depthTexture:new go(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const _e={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new aa(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function H(ee){for(let ce=0;ce<ee.removed.length;ce++){const _e=ee.removed[ce],Le=U.indexOf(_e);Le>=0&&(U[Le]=null,O[Le].disconnect(_e))}for(let ce=0;ce<ee.added.length;ce++){const _e=ee.added[ce];let Le=U.indexOf(_e);if(Le===-1){for(let Be=0;Be<O.length;Be++)if(Be>=U.length){U.push(_e),Le=Be;break}else if(U[Be]===null){U[Be]=_e,Le=Be;break}if(Le===-1)break}const Je=O[Le];Je&&Je.connect(_e)}}const J=new ie,he=new ie;function Ee(ee,ce,_e){J.setFromMatrixPosition(ce.matrixWorld),he.setFromMatrixPosition(_e.matrixWorld);const Le=J.distanceTo(he),Je=ce.projectionMatrix.elements,Be=_e.projectionMatrix.elements,Ne=Je[14]/(Je[10]-1),qe=Je[14]/(Je[10]+1),ft=(Je[9]+1)/Je[5],ut=(Je[9]-1)/Je[5],tt=(Je[8]-1)/Je[0],Ct=(Be[8]+1)/Be[0],Yt=Ne*tt,$t=Ne*Ct,nn=Le/(-tt+Ct),Qt=nn*-tt;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Qt),ee.translateZ(nn),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Je[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ln=Ne+nn,Y=qe+nn,Xt=Yt-Qt,Ut=$t+(Le-Qt),I=ft*qe/Y*ln,M=ut*qe/Y*ln;ee.projectionMatrix.makePerspective(Xt,Ut,I,M,ln,Y),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function N(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let ce=ee.near,_e=ee.far;b.texture!==null&&(b.depthNear>0&&(ce=b.depthNear),b.depthFar>0&&(_e=b.depthFar)),Z.near=q.near=z.near=ce,Z.far=q.far=z.far=_e,(fe!==Z.near||de!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),fe=Z.near,de=Z.far),Z.layers.mask=ee.layers.mask|6,z.layers.mask=Z.layers.mask&-5,q.layers.mask=Z.layers.mask&-3;const Le=ee.parent,Je=Z.cameras;N(Z,Le);for(let Be=0;Be<Je.length;Be++)N(Je[Be],Le);Je.length===2?Ee(Z,z,q):Z.projectionMatrix.copy(z.projectionMatrix),k(ee,Z,Le)};function k(ee,ce,_e){_e===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=rm*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Z)},this.getCameraTexture=function(ee){return y[ee]};let pe=null;function be(ee,ce){if(_=ce.getViewerPose(p||f),E=ce,_!==null){const _e=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Le=!1;_e.length!==Z.cameras.length&&(Z.cameras.length=0,Le=!0);for(let qe=0;qe<_e.length;qe++){const ft=_e[qe];let ut=null;if(S!==null)ut=S.getViewport(ft);else{const Ct=v.getViewSubImage(g,ft);ut=Ct.viewport,qe===0&&(e.setRenderTargetTextures(L,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(L))}let tt=V[qe];tt===void 0&&(tt=new wi,tt.layers.enable(qe),tt.viewport=new fn,V[qe]=tt),tt.matrix.fromArray(ft.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ft.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ut.x,ut.y,ut.width,ut.height),qe===0&&(Z.matrix.copy(tt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Le===!0&&Z.cameras.push(tt)}const Je=l.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=a.getBinding();const qe=v.getDepthInformation(_e[0]);qe&&qe.isValid&&qe.texture&&b.init(qe,l.renderState)}if(Je&&Je.includes("camera-access")&&D){e.state.unbindTexture(),v=a.getBinding();for(let qe=0;qe<_e.length;qe++){const ft=_e[qe].camera;if(ft){let ut=y[ft];ut||(ut=new sb,y[ft]=ut);const tt=v.getCameraImage(ft);ut.sourceTexture=tt}}}}for(let _e=0;_e<O.length;_e++){const Le=U[_e],Je=O[_e];Le!==null&&Je!==void 0&&Je.update(Le,ce,p||f)}pe&&pe(ee,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Ae=new ub;Ae.setAnimationLoop(be),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}}const NL=new dn,vb=new pt;vb.set(-1,0,0,0,1,0,0,0,1);function LL(r,e){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function a(b,y){y.color.getRGB(b.fogColor.value,ob(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,P,F,L){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,L)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),D(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,P,F):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ti&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ti&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y),F=P.envMap,L=P.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(NL.makeRotationFromEuler(L)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(vb),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,P,F){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=F*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function D(b,y){const P=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function UL(r,e,i,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,O){const U=O.program;a.uniformBlockBinding(L,U)}function p(L,O){let U=l[L.id];U===void 0&&(b(L),U=_(L),l[L.id]=U,L.addEventListener("dispose",P));const B=O.program;a.updateUBOMapping(L,B);const T=e.render.frame;c[L.id]!==T&&(g(L),c[L.id]=T)}function _(L){const O=v();L.__bindingPointIndex=O;const U=r.createBuffer(),B=L.__size,T=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,U),U}function v(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const O=l[L.id],U=L.uniforms,B=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,z=U.length;T<z;T++){const q=U[T];if(Array.isArray(q))for(let V=0,Z=q.length;V<Z;V++)S(q[V],T,V,B);else S(q,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,O,U,B){if(D(L,O,U,B)===!0){const T=L.__offset,z=L.value;if(Array.isArray(z)){let q=0;for(let V=0;V<z.length;V++){const Z=z[V],fe=y(Z);E(Z,L.__data,q),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(q+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(z,L.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,L.__data)}}function E(L,O,U){typeof L=="number"||typeof L=="boolean"?O[0]=L:L.isMatrix3?(O[0]=L.elements[0],O[1]=L.elements[1],O[2]=L.elements[2],O[3]=0,O[4]=L.elements[3],O[5]=L.elements[4],O[6]=L.elements[5],O[7]=0,O[8]=L.elements[6],O[9]=L.elements[7],O[10]=L.elements[8],O[11]=0):ArrayBuffer.isView(L)?O.set(new L.constructor(L.buffer,L.byteOffset,O.length)):L.toArray(O,U)}function D(L,O,U,B){const T=L.value,z=O+"_"+U;if(B[z]===void 0)return typeof T=="number"||typeof T=="boolean"?B[z]=T:ArrayBuffer.isView(T)?B[z]=T.slice():B[z]=T.clone(),!0;{const q=B[z];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return B[z]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function b(L){const O=L.uniforms;let U=0;const B=16;for(let z=0,q=O.length;z<q;z++){const V=Array.isArray(O[z])?O[z]:[O[z]];for(let Z=0,fe=V.length;Z<fe;Z++){const de=V[Z],$=Array.isArray(de.value)?de.value:[de.value];for(let C=0,H=$.length;C<H;C++){const J=$[C],he=y(J),Ee=U%B,N=Ee%he.boundary,k=Ee+N;U+=N,k!==0&&B-k<he.storage&&(U+=B-k),de.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=U,U+=he.storage}}}const T=U%B;return T>0&&(U+=B-T),L.__size=U,L.__cache={},this}function y(L){const O={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(O.boundary=4,O.storage=4):L.isVector2?(O.boundary=8,O.storage=8):L.isVector3||L.isColor?(O.boundary=16,O.storage=12):L.isVector4?(O.boundary=16,O.storage=16):L.isMatrix3?(O.boundary=48,O.storage=48):L.isMatrix4?(O.boundary=64,O.storage=64):L.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(O.boundary=16,O.storage=L.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",L),O}function P(L){const O=L.target;O.removeEventListener("dispose",P);const U=f.indexOf(O.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function F(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:F}}const OL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function PL(){return $i===null&&($i=new bR(OL,16,16,ls,Ia),$i.name="DFG_LUT",$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=Na,$i.wrapT=Na,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class IL{constructor(e={}){const{canvas:i=J3(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Di}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const D=S,b=new Set([Dm,wm,Cm]),y=new Set([Di,ra,wl,Dl,Am,Rm]),P=new Uint32Array(4),F=new Int32Array(4),L=new ie;let O=null,U=null;const B=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let V=!1,Z=null,fe=null,de=null,$=null;this._outputColorSpace=Ci;let C=0,H=0,J=null,he=-1,Ee=null;const N=new fn,k=new fn;let pe=null;const be=new Et(0);let Ae=0,ee=i.width,ce=i.height,_e=1,Le=null,Je=null;const Be=new fn(0,0,ee,ce),Ne=new fn(0,0,ee,ce);let qe=!1;const ft=new ab;let ut=!1,tt=!1;const Ct=new dn,Yt=new ie,$t=new fn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ln(){return J===null?_e:1}let Y=a;function Xt(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Em}`),i.addEventListener("webglcontextlost",an,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",ii,!1),Y===null){const j="webgl2";if(Y=Xt(j,R),Y===null)throw Xt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let Ut,I,M,Q,se,ge,Ce,Oe,me,ve,De,Ve,ze,Pe,nt,it,dt,W,we,ye,Ue,Ge,Te;function Qe(){Ut=new PD(Y),Ut.init(),Ue=new AL(Y,Ut),I=new RD(Y,Ut,e,Ue),M=new EL(Y,Ut),I.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),fe=Y.createFramebuffer(),de=Y.createFramebuffer(),$=Y.createFramebuffer(),Q=new FD(Y),se=new uL,ge=new TL(Y,Ut,M,se,I,Ue,Q),Ce=new OD(q),Oe=new VR(Y),Ge=new TD(Y,Oe),me=new ID(Y,Oe,Q,Ge),ve=new HD(Y,me,Oe,Ge,Q),W=new BD(Y,I,ge),nt=new CD(se),De=new cL(q,Ce,Ut,I,Ge,nt),Ve=new LL(q,se),ze=new dL,Pe=new _L(Ut),dt=new ED(q,Ce,M,ve,E,m),it=new ML(q,ve,I),Te=new UL(Y,Q,I,M),we=new AD(Y,Ut,Q),ye=new zD(Y,Ut,Q),Q.programs=De.programs,q.capabilities=I,q.extensions=Ut,q.properties=se,q.renderLists=ze,q.shadowMap=it,q.state=M,q.info=Q}Qe(),D!==Di&&(z=new VD(D,i.width,i.height,h,l,c));const je=new DL(q,Y);this.xr=je,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(ee,ce,!1))},this.getSize=function(R){return R.set(ee,ce)},this.setSize=function(R,j,oe=!0){if(je.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,ce=j,i.width=Math.floor(R*_e),i.height=Math.floor(j*_e),oe===!0&&(i.style.width=R+"px",i.style.height=j+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ee*_e,ce*_e).floor()},this.setDrawingBufferSize=function(R,j,oe){ee=R,ce=j,_e=oe,i.width=Math.floor(R*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(D===Di){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(Be)},this.setViewport=function(R,j,oe,ae){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,j,oe,ae),M.viewport(N.copy(Be).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(Ne)},this.setScissor=function(R,j,oe,ae){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,j,oe,ae),M.scissor(k.copy(Ne).multiplyScalar(_e).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(R){M.setScissorTest(qe=R)},this.setOpaqueSort=function(R){Le=R},this.setTransparentSort=function(R){Je=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,oe=!0){let ae=0;if(R){let re=!1;if(J!==null){const Fe=J.texture.format;re=b.has(Fe)}if(re){const Fe=J.texture.type,We=y.has(Fe),Ie=dt.getClearColor(),Ze=dt.getClearAlpha(),Ye=Ie.r,at=Ie.g,mt=Ie.b;We?(P[0]=Ye,P[1]=at,P[2]=mt,P[3]=Ze,Y.clearBufferuiv(Y.COLOR,0,P)):(F[0]=Ye,F[1]=at,F[2]=mt,F[3]=Ze,Y.clearBufferiv(Y.COLOR,0,F))}else ae|=Y.COLOR_BUFFER_BIT}j&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Z=R},this.dispose=function(){i.removeEventListener("webglcontextlost",an,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",ii,!1),dt.dispose(),ze.dispose(),Pe.dispose(),se.dispose(),Ce.dispose(),ve.dispose(),Ge.dispose(),Te.dispose(),De.dispose(),je.dispose(),je.removeEventListener("sessionstart",mn),je.removeEventListener("sessionend",Dn),jn.stop()};function an(R){R.preventDefault(),yx("WebGLRenderer: Context Lost."),V=!0}function zt(){yx("WebGLRenderer: Context Restored."),V=!1;const R=Q.autoReset,j=it.enabled,oe=it.autoUpdate,ae=it.needsUpdate,re=it.type;Qe(),Q.autoReset=R,it.enabled=j,it.autoUpdate=oe,it.needsUpdate=ae,it.type=re}function ii(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const j=R.target;j.removeEventListener("dispose",ai),bo(j)}function bo(R){Mo(R),se.remove(R)}function Mo(R){const j=se.get(R).programs;j!==void 0&&(j.forEach(function(oe){De.releaseProgram(oe)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,oe,ae,re,Fe){j===null&&(j=nn);const We=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ie=Va(R,j,oe,ae,re);M.setMaterial(ae,We);let Ze=oe.index,Ye=1;if(ae.wireframe===!0){if(Ze=me.getWireframeAttribute(oe),Ze===void 0)return;Ye=2}const at=oe.drawRange,mt=oe.attributes.position;let et=at.start*Ye,Dt=(at.start+at.count)*Ye;Fe!==null&&(et=Math.max(et,Fe.start*Ye),Dt=Math.min(Dt,(Fe.start+Fe.count)*Ye)),Ze!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ze.count)):mt!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,mt.count));const rn=Dt-et;if(rn<0||rn===1/0)return;Ge.setup(re,ae,Ie,oe,Ze);let Zt,Ft=we;if(Ze!==null&&(Zt=Oe.get(Ze),Ft=ye,Ft.setIndex(Zt)),re.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*ln()),Ft.setMode(Y.LINES)):Ft.setMode(Y.TRIANGLES);else if(re.isLine){let Bt=ae.linewidth;Bt===void 0&&(Bt=1),M.setLineWidth(Bt*ln()),re.isLineSegments?Ft.setMode(Y.LINES):re.isLineLoop?Ft.setMode(Y.LINE_LOOP):Ft.setMode(Y.LINE_STRIP)}else re.isPoints?Ft.setMode(Y.POINTS):re.isSprite&&Ft.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Bt=re._multiDrawStarts,ke=re._multiDrawCounts,Fn=re._multiDrawCount,xt=Ze?Oe.get(Ze).bytesPerElement:1,Mn=se.get(ae).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)Mn.setValue(Y,"_gl_DrawID",ri),Ft.render(Bt[ri]/xt,ke[ri])}else if(re.isInstancedMesh)Ft.renderInstances(et,rn,re.count);else if(oe.isInstancedBufferGeometry){const Bt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,Bt);Ft.renderInstances(et,rn,ke)}else Ft.render(et,rn)};function Eo(R,j,oe){R.transparent===!0&&R.side===Da&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,Ga(R,j,oe),R.side=Er,R.needsUpdate=!0,Ga(R,j,oe),R.side=Da):Ga(R,j,oe)}this.compile=function(R,j,oe=null){oe===null&&(oe=R),U=Pe.get(oe),U.init(j),T.push(U),oe.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),R!==oe&&R.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights();const ae=new Set;return R.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){const Ie=Fe[We];Eo(Ie,oe,re),ae.add(Ie)}else Eo(Fe,oe,re),ae.add(Fe)}),U=T.pop(),ae},this.compileAsync=function(R,j,oe=null){const ae=this.compile(R,j,oe);return new Promise(re=>{function Fe(){if(ae.forEach(function(We){se.get(We).currentProgram.isReady()&&ae.delete(We)}),ae.size===0){re(R);return}setTimeout(Fe,10)}Ut.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let fs=null;function Wi(R){fs&&fs(R)}function mn(){jn.stop()}function Dn(){jn.start()}const jn=new ub;jn.setAnimationLoop(Wi),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(R){fs=R,je.setAnimationLoop(R),R===null?jn.stop():jn.start()},je.addEventListener("sessionstart",mn),je.addEventListener("sessionend",Dn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(R,j);const oe=je.enabled===!0&&je.isPresenting===!0,ae=z!==null&&(J===null||oe)&&z.begin(q,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(j),j=je.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,j,J),U=Pe.get(R,T.length),U.init(j),U.state.textureUnits=ge.getTextureUnits(),T.push(U),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ft.setFromProjectionMatrix(Ct,na,j.reversedDepth),tt=this.localClippingEnabled,ut=nt.init(this.clippingPlanes,tt),O=ze.get(R,B.length),O.init(),B.push(O),je.enabled===!0&&je.isPresenting===!0){const We=q.xr.getDepthSensingMesh();We!==null&&Tr(We,j,-1/0,q.sortObjects)}Tr(R,j,0,q.sortObjects),O.finish(),q.sortObjects===!0&&O.sort(Le,Je,j.reversedDepth),Qt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Qt&&dt.addToRenderList(O,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&nt.beginShadows();const re=U.state.shadowsArray;if(it.render(re,R,j),ut===!0&&nt.endShadows(),(ae&&z.hasRenderPass())===!1){const We=O.opaque,Ie=O.transmissive;if(U.setupLights(),j.isArrayCamera){const Ze=j.cameras;if(Ie.length>0)for(let Ye=0,at=Ze.length;Ye<at;Ye++){const mt=Ze[Ye];Bl(We,Ie,R,mt)}Qt&&dt.render(R);for(let Ye=0,at=Ze.length;Ye<at;Ye++){const mt=Ze[Ye];Fl(O,R,mt,mt.viewport)}}else Ie.length>0&&Bl(We,Ie,R,j),Qt&&dt.render(R),Fl(O,R,j)}J!==null&&H===0&&(ge.updateMultisampleRenderTarget(J),ge.updateRenderTargetMipmap(J)),ae&&z.end(q),R.isScene===!0&&R.onAfterRender(q,R,j),Ge.resetDefaultState(),he=-1,Ee=null,T.pop(),T.length>0?(U=T[T.length-1],ge.setTextureUnits(U.state.textureUnits),ut===!0&&nt.setGlobalState(q.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,Z!==null&&Z.renderEnd()};function Tr(R,j,oe,ae){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ft.intersectsSprite(R)){ae&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const We=ve.update(R),Ie=R.material;Ie.visible&&O.push(R,We,Ie,oe,$t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ft.intersectsObject(R))){const We=ve.update(R),Ie=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),$t.copy(We.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ie)){const Ze=We.groups;for(let Ye=0,at=Ze.length;Ye<at;Ye++){const mt=Ze[Ye],et=Ie[mt.materialIndex];et&&et.visible&&O.push(R,We,et,oe,$t.z,mt)}}else Ie.visible&&O.push(R,We,Ie,oe,$t.z,null)}}const Fe=R.children;for(let We=0,Ie=Fe.length;We<Ie;We++)Tr(Fe[We],j,oe,ae)}function Fl(R,j,oe,ae){const{opaque:re,transmissive:Fe,transparent:We}=R;U.setupLightsView(oe),ut===!0&&nt.setGlobalState(q.clippingPlanes,oe),ae&&M.viewport(N.copy(ae)),re.length>0&&Ar(re,j,oe),Fe.length>0&&Ar(Fe,j,oe),We.length>0&&Ar(We,j,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Bl(R,j,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const et=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new aa(1,1,{generateMipmaps:!0,type:et?Ia:Di,minFilter:ns,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Fe=U.state.transmissionRenderTarget[ae.id],We=ae.viewport||N;Fe.setSize(We.z*q.transmissionResolutionScale,We.w*q.transmissionResolutionScale);const Ie=q.getRenderTarget(),Ze=q.getActiveCubeFace(),Ye=q.getActiveMipmapLevel();q.setRenderTarget(Fe),q.getClearColor(be),Ae=q.getClearAlpha(),Ae<1&&q.setClearColor(16777215,.5),q.clear(),Qt&&dt.render(oe);const at=q.toneMapping;q.toneMapping=ia;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),ut===!0&&nt.setGlobalState(q.clippingPlanes,ae),Ar(R,oe,ae),ge.updateMultisampleRenderTarget(Fe),ge.updateRenderTargetMipmap(Fe),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,rn=j.length;Dt<rn;Dt++){const Zt=j[Dt],{object:Ft,geometry:Bt,material:ke,group:Fn}=Zt;if(ke.side===Da&&Ft.layers.test(ae.layers)){const xt=ke.side;ke.side=ti,ke.needsUpdate=!0,Ha(Ft,oe,ae,Bt,ke,Fn),ke.side=xt,ke.needsUpdate=!0,et=!0}}et===!0&&(ge.updateMultisampleRenderTarget(Fe),ge.updateRenderTargetMipmap(Fe))}q.setRenderTarget(Ie,Ze,Ye),q.setClearColor(be,Ae),mt!==void 0&&(ae.viewport=mt),q.toneMapping=at}function Ar(R,j,oe){const ae=j.isScene===!0?j.overrideMaterial:null;for(let re=0,Fe=R.length;re<Fe;re++){const We=R[re],{object:Ie,geometry:Ze,group:Ye}=We;let at=We.material;at.allowOverride===!0&&ae!==null&&(at=ae),Ie.layers.test(oe.layers)&&Ha(Ie,j,oe,Ze,at,Ye)}}function Ha(R,j,oe,ae,re,Fe){R.onBeforeRender(q,j,oe,ae,re,Fe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(q,j,oe,ae,R,Fe),re.transparent===!0&&re.side===Da&&re.forceSinglePass===!1?(re.side=ti,re.needsUpdate=!0,q.renderBufferDirect(oe,j,ae,re,R,Fe),re.side=Er,re.needsUpdate=!0,q.renderBufferDirect(oe,j,ae,re,R,Fe),re.side=Da):q.renderBufferDirect(oe,j,ae,re,R,Fe),R.onAfterRender(q,j,oe,ae,re,Fe)}function Ga(R,j,oe){j.isScene!==!0&&(j=nn);const ae=se.get(R),re=U.state.lights,Fe=U.state.shadowsArray,We=re.state.version,Ie=De.getParameters(R,re.state,Fe,j,oe,U.state.lightProbeGridArray),Ze=De.getProgramCacheKey(Ie);let Ye=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,ae.fog=j.fog;const at=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=Ce.get(R.envMap||ae.environment,at),ae.envMapRotation=ae.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",ai),Ye=new Map,ae.programs=Ye);let mt=Ye.get(Ze);if(mt!==void 0){if(ae.currentProgram===mt&&ae.lightsStateVersion===We)return oa(R,Ie),mt}else Ie.uniforms=De.getUniforms(R),Z!==null&&R.isNodeMaterial&&Z.build(R,oe,Ie),R.onBeforeCompile(Ie,q),mt=De.acquireProgram(Ie,Ze),Ye.set(Ze,mt),ae.uniforms=Ie.uniforms;const et=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=nt.uniform),oa(R,Ie),ae.needsLights=Hl(R),ae.lightsStateVersion=We,ae.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=U.state.lightProbeGridArray.length>0,ae.currentProgram=mt,ae.uniformsList=null,mt}function sa(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Pu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function oa(R,j){const oe=se.get(R);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function Rr(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;L.setFromMatrixPosition(j.matrixWorld);for(let oe=0,ae=R.length;oe<ae;oe++){const re=R[oe];if(re.texture!==null&&re.boundingBox.containsPoint(L))return re}return null}function Va(R,j,oe,ae,re){j.isScene!==!0&&(j=nn),ge.resetTextureUnits();const Fe=j.fog,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?j.environment:null,Ie=J===null?q.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:At.workingColorSpace,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ye=Ce.get(ae.envMap||We,Ze),at=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,mt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!oe.morphAttributes.position,Dt=!!oe.morphAttributes.normal,rn=!!oe.morphAttributes.color;let Zt=ia;ae.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Zt=q.toneMapping);const Ft=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Bt=Ft!==void 0?Ft.length:0,ke=se.get(ae),Fn=U.state.lights;if(ut===!0&&(tt===!0||R!==Ee)){const It=R===Ee&&ae.id===he;nt.setState(ae,R,It)}let xt=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Fn.state.version||ke.outputColorSpace!==Ie||re.isBatchedMesh&&ke.batching===!1||!re.isBatchedMesh&&ke.batching===!0||re.isBatchedMesh&&ke.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&ke.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&ke.instancing===!1||!re.isInstancedMesh&&ke.instancing===!0||re.isSkinnedMesh&&ke.skinning===!1||!re.isSkinnedMesh&&ke.skinning===!0||re.isInstancedMesh&&ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&ke.instancingMorph===!1&&re.morphTexture!==null||ke.envMap!==Ye||ae.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==nt.numPlanes||ke.numIntersection!==nt.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==mt||ke.morphTargets!==et||ke.morphNormals!==Dt||ke.morphColors!==rn||ke.toneMapping!==Zt||ke.morphTargetsCount!==Bt||!!ke.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ke.__version=ae.version);let Mn=ke.currentProgram;xt===!0&&(Mn=Ga(ae,j,re),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Mn,ke));let ri=!1,Ni=!1,si=!1;const Ht=Mn.getUniforms(),sn=ke.uniforms;if(M.useProgram(Mn.program)&&(ri=!0,Ni=!0,si=!0),ae.id!==he&&(he=ae.id,Ni=!0),ke.needsLights){const It=Rr(U.state.lightProbeGridArray,re);ke.lightProbeGrid!==It&&(ke.lightProbeGrid=It,Ni=!0)}if(ri||Ee!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ht.setValue(Y,"projectionMatrix",R.projectionMatrix),Ht.setValue(Y,"viewMatrix",R.matrixWorldInverse);const qi=Ht.map.cameraPosition;qi!==void 0&&qi.setValue(Y,Yt.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Ht.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),Ee!==R&&(Ee=R,Ni=!0,si=!0)}if(ke.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ht.setValue(Y,"directionalShadowMap",Fn.state.directionalShadowMap,ge),Fn.state.spotShadowMap.length>0&&Ht.setValue(Y,"spotShadowMap",Fn.state.spotShadowMap,ge),Fn.state.pointShadowMap.length>0&&Ht.setValue(Y,"pointShadowMap",Fn.state.pointShadowMap,ge)),re.isSkinnedMesh){Ht.setOptional(Y,re,"bindMatrix"),Ht.setOptional(Y,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Ht.setValue(Y,"boneTexture",It.boneTexture,ge))}re.isBatchedMesh&&(Ht.setOptional(Y,re,"batchingTexture"),Ht.setValue(Y,"batchingTexture",re._matricesTexture,ge),Ht.setOptional(Y,re,"batchingIdTexture"),Ht.setValue(Y,"batchingIdTexture",re._indirectTexture,ge),Ht.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&Ht.setValue(Y,"batchingColorTexture",re._colorsTexture,ge));const Li=oe.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&W.update(re,oe,Mn),(Ni||ke.receiveShadow!==re.receiveShadow)&&(ke.receiveShadow=re.receiveShadow,Ht.setValue(Y,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&j.environment!==null&&(sn.envMapIntensity.value=j.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=PL()),Ni){if(Ht.setValue(Y,"toneMappingExposure",q.toneMappingExposure),ke.needsLights&&gn(sn,si),Fe&&ae.fog===!0&&Ve.refreshFogUniforms(sn,Fe),Ve.refreshMaterialUniforms(sn,ae,_e,ce,U.state.transmissionRenderTarget[R.id]),ke.needsLights&&ke.lightProbeGrid){const It=ke.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}Pu.upload(Y,sa(ke),sn,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Pu.upload(Y,sa(ke),sn,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(Y,"center",re.center),Ht.setValue(Y,"modelViewMatrix",re.modelViewMatrix),Ht.setValue(Y,"normalMatrix",re.normalMatrix),Ht.setValue(Y,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const It=ae.uniformsGroups;for(let qi=0,ka=It.length;qi<ka;qi++){const Cr=It[qi];Te.update(Cr,Mn),Te.bind(Cr,Mn)}}return Mn}function gn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Hl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,j,oe){const ae=se.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(R.texture).__webglTexture=j,se.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const oe=se.get(R);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,oe=0){J=R,C=j,H=oe;let ae=null,re=!1,Fe=!1;if(R){const Ie=se.get(R);if(Ie.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Ie.__webglFramebuffer),N.copy(R.viewport),k.copy(R.scissor),pe=R.scissorTest,M.viewport(N),M.scissor(k),M.setScissorTest(pe),he=-1;return}else if(Ie.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(Ie.__hasExternalTextures)ge.rebindTextures(R,se.get(R.texture).__webglTexture,se.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const at=R.depthTexture;if(Ie.__boundDepthTexture!==at){if(at!==null&&se.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Fe=!0);const Ye=se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[j])?ae=Ye[j][oe]:ae=Ye[j],re=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?ae=se.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[oe]:ae=Ye,N.copy(R.viewport),k.copy(R.scissor),pe=R.scissorTest}else N.copy(Be).multiplyScalar(_e).floor(),k.copy(Ne).multiplyScalar(_e).floor(),pe=qe;if(oe!==0&&(ae=fe),M.bindFramebuffer(Y.FRAMEBUFFER,ae)&&M.drawBuffers(R,ae),M.viewport(N),M.scissor(k),M.setScissorTest(pe),re){const Ie=se.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,oe)}else if(Fe){const Ie=j;for(let Ze=0;Ze<R.textures.length;Ze++){const Ye=se.get(R.textures[Ze]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ze,Ye.__webglTexture,oe,Ie)}}else if(R!==null&&oe!==0){const Ie=se.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ie.__webglTexture,oe)}he=-1},this.readRenderTargetPixels=function(R,j,oe,ae,re,Fe,We,Ie=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze){M.bindFramebuffer(Y.FRAMEBUFFER,Ze);try{const Ye=R.textures[Ie],at=Ye.format,mt=Ye.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(at)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(mt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ae&&oe>=0&&oe<=R.height-re&&Y.readPixels(j,oe,ae,re,Ue.convert(at),Ue.convert(mt),Fe)}finally{const Ye=J!==null?se.get(J).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,j,oe,ae,re,Fe,We,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze)if(j>=0&&j<=R.width-ae&&oe>=0&&oe<=R.height-re){M.bindFramebuffer(Y.FRAMEBUFFER,Ze);const Ye=R.textures[Ie],at=Ye.format,mt=Ye.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,et),Y.bufferData(Y.PIXEL_PACK_BUFFER,Fe.byteLength,Y.STREAM_READ),Y.readPixels(j,oe,ae,re,Ue.convert(at),Ue.convert(mt),0);const Dt=J!==null?se.get(J).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,Dt);const rn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await eR(Y,rn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,et),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Fe),Y.deleteBuffer(et),Y.deleteSync(rn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(R.image.width*ae),Fe=Math.floor(R.image.height*ae),We=j!==null?j.x:0,Ie=j!==null?j.y:0;ge.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,We,Ie,re,Fe),M.unbindTexture()},this.copyTextureToTexture=function(R,j,oe=null,ae=null,re=0,Fe=0){let We,Ie,Ze,Ye,at,mt,et,Dt,rn;const Zt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(oe!==null)We=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,Ze=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,at=oe.min.y,mt=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-re);We=Math.floor(Zt.width*sn),Ie=Math.floor(Zt.height*sn),R.isDataArrayTexture?Ze=Zt.depth:R.isData3DTexture?Ze=Math.floor(Zt.depth*sn):Ze=1,Ye=0,at=0,mt=0}ae!==null?(et=ae.x,Dt=ae.y,rn=ae.z):(et=0,Dt=0,rn=0);const Ft=Ue.convert(j.format),Bt=Ue.convert(j.type);let ke;j.isData3DTexture?(ge.setTexture3D(j,0),ke=Y.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ge.setTexture2DArray(j,0),ke=Y.TEXTURE_2D_ARRAY):(ge.setTexture2D(j,0),ke=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment);const Fn=M.getParameter(Y.UNPACK_ROW_LENGTH),xt=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(Y.UNPACK_SKIP_PIXELS),ri=M.getParameter(Y.UNPACK_SKIP_ROWS),Ni=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Zt.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Zt.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ye),M.pixelStorei(Y.UNPACK_SKIP_ROWS,at),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);const si=R.isDataArrayTexture||R.isData3DTexture,Ht=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const sn=se.get(R),Li=se.get(j),It=se.get(sn.__renderTarget),qi=se.get(Li.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ka=0;ka<Ze;ka++)si&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(R).__webglTexture,re,mt+ka),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(j).__webglTexture,Fe,rn+ka)),Y.blitFramebuffer(Ye,at,We,Ie,et,Dt,We,Ie,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||R.isRenderTargetTexture||se.has(R)){const sn=se.get(R),Li=se.get(j);M.bindFramebuffer(Y.READ_FRAMEBUFFER,de),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,$);for(let It=0;It<Ze;It++)si?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,sn.__webglTexture,re,mt+It):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,sn.__webglTexture,re),Ht?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Li.__webglTexture,Fe,rn+It):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Li.__webglTexture,Fe),re!==0?Y.blitFramebuffer(Ye,at,We,Ie,et,Dt,We,Ie,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ht?Y.copyTexSubImage3D(ke,Fe,et,Dt,rn+It,Ye,at,We,Ie):Y.copyTexSubImage2D(ke,Fe,et,Dt,Ye,at,We,Ie);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ht?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(ke,Fe,et,Dt,rn,We,Ie,Ze,Ft,Bt,Zt.data):j.isCompressedArrayTexture?Y.compressedTexSubImage3D(ke,Fe,et,Dt,rn,We,Ie,Ze,Ft,Zt.data):Y.texSubImage3D(ke,Fe,et,Dt,rn,We,Ie,Ze,Ft,Bt,Zt):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Fe,et,Dt,We,Ie,Ft,Bt,Zt.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Fe,et,Dt,Zt.width,Zt.height,Ft,Zt.data):Y.texSubImage2D(Y.TEXTURE_2D,Fe,et,Dt,We,Ie,Ft,Bt,Zt);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Fn),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(Y.UNPACK_SKIP_ROWS,ri),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ni),Fe===0&&j.generateMipmaps&&Y.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(R){se.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){C=0,H=0,J=null,M.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const zL=new Et(12764882),FL=new Et(13159638),oo=4500,$r=91,BL=42,HL=new Et(15253624),GL=`
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
`,VL=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,kL=`
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
`,XL=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,WL=`
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
`,qL=`
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
`;function jL(){const r=new Float32Array(oo*3),e=new Float32Array(oo),i=new Float32Array(oo);for(let a=0;a<oo;a++){const l=24+Math.random()*36,c=Math.random()*Math.PI*2,f=(Math.random()-.5)*1.1;r[a*3]=l*Math.cos(c)*Math.cos(f),r[a*3+1]=l*Math.sin(f)*2.2,r[a*3+2]=l*Math.sin(c)*Math.cos(f)-18,e[a]=Math.random(),i[a]=.7+Math.random()*1.6}return{positions:r,phases:e,sizes:i}}function YL(){let r=1597463007;return()=>(r=r*1664525+1013904223>>>0,r/4294967296)}function ZL(r,e,i){const a=(r.x-e.x)*i,l=r.y-e.y;return a*a+l*l}function KL(r){const e=YL(),i=[],a=48,l=.025;for(let c=0;c<$r;c++){let f=null,h=-1;for(let m=0;m<a;m++){const p={x:l+e()*(1-l*2),y:l+e()*(1-l*2)};let _=Number.POSITIVE_INFINITY;for(const v of i){const g=ZL(p,v,r);_=Math.min(_,g)}_>h&&(f=p,h=_)}f&&i.push(f)}return i}function _b(r,e){const i=KL(e);for(let a=0;a<i.length;a++){const l=i[a];r[a*3]=-.96+l.x*1.92,r[a*3+1]=-.9+l.y*1.8,r[a*3+2]=0}}function QL(r){const e=new Float32Array($r),i=new Float32Array($r*3),a=new Float32Array($r),l=new Float32Array($r);for(let c=0;c<$r;c++){const f=c<BL;e[c]=f?1:0,a[c]=c/$r,l[c]=f?32+c*29%7:12+c*17%4}return _b(i,r),{flares:e,positions:i,phases:a,sizes:l}}function $L(r,e,i={}){const{transparent:a=!1,threadAlpha:l}=i;let c;try{c=new IL({canvas:r,antialias:!1,alpha:!0})}catch{return()=>{}}c.setPixelRatio(1);const f=new gR;f.background=a?null:new Et(328968);const h=new wi(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:_}=jL(),v=new ni;v.setAttribute("position",new bn(m,3)),v.setAttribute("phase",new bn(p,1)),v.setAttribute("size",new bn(_,1));const g=new gi({vertexShader:GL,fragmentShader:VL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:zL}},transparent:!0,depthWrite:!1}),S=new Hx(v,g);f.add(S);const E=r.clientWidth||window.innerWidth,D=r.clientHeight||window.innerHeight,b=QL(E/D),y=b.positions,P=new ni;P.setAttribute("position",new bn(y,3)),P.setAttribute("flare",new bn(b.flares,1)),P.setAttribute("phase",new bn(b.phases,1)),P.setAttribute("size",new bn(b.sizes,1));const F=new gi({vertexShader:WL,fragmentShader:qL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:HL}},transparent:!0,depthTest:!1,depthWrite:!1}),L=new Hx(P,F);f.add(L);const O=3400,U=new ni,B=new Float32Array(O*6),T=new Float32Array(O*2),z=new Float32Array(O*2);U.setAttribute("position",new bn(B,3)),U.setAttribute("lineUV",new bn(T,1)),U.setAttribute("segPhase",new bn(z,1)),U.setDrawRange(0,0);const q=new gi({vertexShader:kL,fragmentShader:XL,uniforms:{uTime:{value:0},uColor:{value:FL},uAlpha:{value:l??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),V=new CR(U,q);f.add(V);const Z=e==="alive"?4.8:5.2,fe=new Map;function de(ce,_e,Le){const Je=Math.floor(ce/Z),Be=Math.floor(_e/Z),Ne=Math.floor(Le/Z);return`${Je}:${Be}:${Ne}`}for(let ce=0;ce<oo;ce++){const _e=m[ce*3],Le=m[ce*3+1],Je=m[ce*3+2],Be=de(_e,Le,Je),Ne=fe.get(Be)??[];Ne.push(ce),fe.set(Be,Ne)}function $(ce){const _e=m[ce*3],Le=m[ce*3+1],Je=m[ce*3+2],Be=Math.floor(_e/Z),Ne=Math.floor(Le/Z),qe=Math.floor(Je/Z),ft=[];for(let ut=-1;ut<=1;ut++)for(let tt=-1;tt<=1;tt++)for(let Ct=-1;Ct<=1;Ct++){const Yt=`${Be+ut}:${Ne+tt}:${qe+Ct}`;ft.push(...fe.get(Yt)??[])}return ft}const C=()=>{const ce=new Set,_e=[],Le=[],Je=[];for(let Be=0;Be<oo&&_e.length<O*6;Be++){const Ne=m[Be*3],qe=m[Be*3+1],ft=m[Be*3+2],ut=[];for(const tt of $(Be)){if(tt===Be)continue;const Ct=m[tt*3]-Ne,Yt=m[tt*3+1]-qe,$t=m[tt*3+2]-ft,nn=Ct*Ct+Yt*Yt+$t*$t;nn<Z*Z&&ut.push([tt,nn])}ut.sort((tt,Ct)=>tt[1]-Ct[1]);for(const[tt]of ut.slice(0,5)){if(_e.length>=O*6)break;const Ct=Be<tt?`${Be}-${tt}`:`${tt}-${Be}`;ce.has(Ct)||(ce.add(Ct),_e.push(Ne,qe,ft,m[tt*3],m[tt*3+1],m[tt*3+2]),Le.push(0,1),Je.push(Math.random(),Math.random()))}}B.set(_e),T.set(Le),z.set(Je),U.getAttribute("position").needsUpdate=!0,U.getAttribute("lineUV").needsUpdate=!0,U.getAttribute("segPhase").needsUpdate=!0,U.setDrawRange(0,_e.length/3)},H=()=>{for(let ce=0;ce<U.drawRange.count;ce++)z[ce]=Math.random();U.getAttribute("segPhase").needsUpdate=!0};C();const J=new HR;let he=0,Ee=0,N=0,k=E/D;const pe=()=>{const ce=r.clientWidth||window.innerWidth,_e=r.clientHeight||window.innerHeight,Le=ce/_e;c.setSize(ce,_e,!1),h.aspect=Le,h.updateProjectionMatrix(),Math.abs(Le-k)/k>=.08&&(_b(y,Le),P.getAttribute("position").needsUpdate=!0,k=Le)},be=()=>{window.cancelAnimationFrame(N),N=window.requestAnimationFrame(pe)};pe(),window.addEventListener("resize",be);let Ae=0;const ee=ce=>{const _e=J.getElapsedTime();_e-Ae>=1/30&&(Ae=_e,g.uniforms.uTime.value=_e,q.uniforms.uTime.value=_e,F.uniforms.uTime.value=_e,e==="alive"&&(Ee+=1/30,Ee>3.2&&(Ee=0,H())),c.render(f,h)),he=requestAnimationFrame(ee)};return he=requestAnimationFrame(ee),()=>{cancelAnimationFrame(he),cancelAnimationFrame(N),window.removeEventListener("resize",be),v.dispose(),U.dispose(),P.dispose(),g.dispose(),q.dispose(),F.dispose(),c.dispose()}}function JL({mode:r,transparent:e=!1,threadAlpha:i,className:a="spell-bg"}){const l=Xe.useRef(null);return Xe.useEffect(()=>{const c=l.current;return c?$L(c,r,{transparent:e,threadAlpha:i}):void 0},[r,e,i]),A.jsx("canvas",{"aria-hidden":"true",className:a,ref:l})}function cm({className:r,compact:e=!1}){const i=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",r].filter(Boolean).join(" ");return A.jsx(zn,{"aria-hidden":"true",className:i,icon:y2})}const gy=[{description:"Today, yesterday, and this week",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],eU=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function tU(r,e){if(e==="flat")return[{label:null,threads:r}];const i=new Map;for(const a of r){const l=e==="date"?a.dateGroup:a.volume==null?"Volume unknown":`Vol ${a.volume}`,c=i.get(l)??[];i.set(l,[...c,a])}return[...i.entries()].map(([a,l])=>({label:a,threads:l}))}function nU({activeThreadId:r,archivedOpen:e,collapsed:i,onArchive:a,onClose:l,onCreate:c,onDelete:f,onOpen:h,onOpenSettings:m,onPin:p,onRename:_,onSelect:v,onSetArchivedOpen:g,readerStatus:S,threads:E}){const[D,b]=Xe.useState(null),[y,P]=Xe.useState(""),[F,L]=Xe.useState(null),[O,U]=Xe.useState("date"),[B,T]=Xe.useState(!1),z=Xe.useMemo(()=>E.filter(C=>C.archived===e).sort((C,H)=>Number(H.pinned)-Number(C.pinned)),[e,E]),q=tU(z,O),V=E.filter(C=>C.archived).length;function Z(C){b(C.id),P(C.title)}function fe(C){const H=y.trim();H&&_(C,H),b(null)}function de(C){if(F===C){f(C),L(null);return}L(C),window.setTimeout(()=>{L(H=>H===C?null:H)},3e3)}function $(C){const H=C.id===r;return A.jsxs("li",{className:`lab-thread-row ${H?"active":""}`,"data-testid":`thread-${C.id}`,children:[A.jsxs("div",{className:"lab-thread-main",children:[D===C.id?A.jsx("span",{className:"lab-thread-copy",children:A.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>fe(C.id),onChange:J=>P(J.target.value),onClick:J=>J.stopPropagation(),onKeyDown:J=>{J.key==="Enter"&&(J.preventDefault(),fe(C.id)),J.key==="Escape"&&b(null)},value:y})}):A.jsx("button",{"aria-current":H?"page":void 0,className:"lab-thread-select",onClick:()=>v(C.id),type:"button",children:A.jsx("span",{className:"lab-thread-copy",children:A.jsx("strong",{children:C.title})})}),F===C.id&&A.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),A.jsxs("div",{className:"lab-thread-actions",children:[A.jsx("button",{"aria-label":`${C.pinned?"Unpin":"Pin"} ${C.title}`,onClick:()=>p(C.id),type:"button",children:A.jsx(o3,{})}),A.jsx("button",{"aria-label":`Rename ${C.title}`,onClick:()=>Z(C),type:"button",children:A.jsx(s3,{})}),A.jsx("button",{"aria-label":`${C.archived?"Restore":"Archive"} ${C.title}`,onClick:()=>a(C.id),type:"button",children:A.jsx(ux,{})}),A.jsx("button",{"aria-label":`Delete ${C.title}`,className:F===C.id?"confirming":"",onClick:()=>de(C.id),type:"button",children:A.jsx(a3,{})})]})]},C.id)}return A.jsxs("aside",{className:"lab-rail",children:[A.jsxs("header",{className:"lab-brand",children:[A.jsx("span",{className:"lab-brand-mark",children:A.jsx(cm,{compact:!0})}),A.jsx("span",{children:A.jsx("strong",{children:"weaver"})}),A.jsx("button",{"aria-label":i?"Open threads":"Close threads",className:"lab-rail-close",onClick:i?h:l,type:"button",children:i?A.jsx(LS,{}):A.jsx(i3,{})})]}),A.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:c,type:"button",children:[A.jsx(J2,{}),A.jsx("span",{children:"New Weave"})]}),A.jsxs("div",{className:"lab-rail-scroll",children:[A.jsxs("section",{className:"lab-chat-section",children:[A.jsxs("header",{className:"lab-rail-section-head",children:[A.jsx("h2",{children:"Chats"}),A.jsxs("div",{className:"lab-grouping-picker",children:[A.jsxs("button",{"aria-expanded":B,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>T(C=>!C),type:"button",children:[gy.find(C=>C.value===O)?.label,A.jsx(OS,{})]}),B&&A.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[A.jsx("p",{children:"Organize threads"}),gy.map(C=>A.jsxs("button",{"aria-checked":O===C.value,onClick:()=>{U(C.value),T(!1)},role:"menuitemradio",type:"button",children:[A.jsx("span",{"aria-hidden":"true",children:O===C.value?"✓":""}),A.jsx("strong",{children:C.label}),A.jsx("small",{children:C.description})]},C.value))]})]})]}),A.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[q.map(C=>A.jsxs("section",{className:"lab-thread-group",children:[C.label&&A.jsx("h3",{children:C.label}),A.jsx("ul",{className:"lab-thread-flat-list",children:C.threads.map($)})]},C.label??"all")),z.length===0&&A.jsxs("div",{className:"lab-thread-empty",children:[A.jsx("span",{"aria-hidden":"true"}),A.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),A.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[A.jsxs("header",{className:"lab-rail-section-head",children:[A.jsx("h2",{children:"Library"}),A.jsx("small",{children:"novels"})]}),A.jsx("div",{className:"lab-novel-list",children:eU.map(C=>A.jsxs("button",{"aria-current":C.active?"page":void 0,"aria-disabled":!C.active,className:C.active?"active":"upcoming",type:"button",children:[A.jsx(n3,{}),A.jsxs("span",{children:[A.jsx("strong",{children:C.label}),A.jsx("small",{children:C.active?"current shelf":"upcoming"})]})]},C.label))})]})]}),A.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>g(!e),type:"button",children:[A.jsx(ux,{}),A.jsx("span",{children:"Archived"}),A.jsx("em",{children:V})]}),A.jsx("footer",{className:"lab-rail-footer",children:A.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:m,type:"button",children:[A.jsx(US,{}),A.jsxs("span",{children:[A.jsx("strong",{children:"Settings"}),A.jsxs("small",{children:[S," · runes · appearance"]})]})]})})]})}const iU=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],aU=Array.from({length:20},(r,e)=>e);function rU(r){return{"--index":r}}function sU({announcement:r,eventKey:e,mode:i}){return A.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${i}`,children:[i==="particles"&&A.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:aU.map(a=>A.jsx("span",{style:rU(a)},a))}),i==="threads"&&A.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[A.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),A.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),A.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),A.jsx("p",{className:"rune-announcement",children:r})]},`${i}-${e}`)}const oU=Array.from({length:7},(r,e)=>e),lU=Array.from({length:8},(r,e)=>e),cU=Array.from({length:11},(r,e)=>e),ju={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function tp(r){return{"--index":r}}function xb({compact:r=!1,mode:e,state:i}){return A.jsxs("div",{"aria-label":`${ju[e]}, ${i}`,className:`lab-soul-sea soul-${e} soul-state-${i} ${r?"soul-compact":""}`,role:"img",children:[A.jsxs("div",{className:"lab-soul-sky",children:[A.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]}),A.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:oU.map(a=>A.jsx("span",{className:"lab-soul-sun",style:tp(a)},a))}),A.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:lU.map(a=>A.jsx("span",{className:"lab-memory-light",style:tp(a)},a))})]}),A.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:cU.map(a=>A.jsx("span",{className:"lab-shadow",style:tp(a)},a))}),A.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[A.jsx("span",{className:"water-plane water-plane-back"}),A.jsx("span",{className:"water-plane water-plane-middle"}),A.jsx("span",{className:"water-plane water-plane-front"}),A.jsx("span",{className:"water-flash"})]}),!r&&A.jsxs("p",{className:"lab-soul-caption",children:[A.jsx("span",{children:ju[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const np=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12}],uU={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},fU=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],dU=["still","living","mirror"],hU=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function pU({initial:r,onClose:e,onSave:i}){const[a,l]=Xe.useState(r),[c,f]=Xe.useState("customize"),h=Xe.useRef(null),m=Xe.useRef(null);Xe.useEffect(()=>{h.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function p(g){if(g.key!=="Tab"||!h.current)return;const S=h.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),E=S[0],D=S[S.length-1];g.shiftKey&&document.activeElement===E&&(g.preventDefault(),D?.focus()),!g.shiftKey&&document.activeElement===D&&(g.preventDefault(),E?.focus())}function _(g,S){l(E=>({...E,[g]:S}))}function v(g){const S=np.find(b=>b.number===g);if(!S)return;const E=np[g-2]?.end??0,D=Math.max(E+1,Math.min(a.chapter,S.end));l(b=>({...b,chapter:D,volume:g}))}return A.jsx("div",{className:"lab-settings-backdrop",onMouseDown:e,children:A.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:p,onMouseDown:g=>g.stopPropagation(),ref:h,role:"dialog",children:[A.jsxs("header",{className:"lab-settings-head",children:[A.jsxs("div",{children:[A.jsx("p",{children:"the sea within"}),A.jsx("h2",{children:"Soul Sea"})]}),A.jsx("button",{"aria-label":"Close settings",onClick:e,type:"button",children:"×"})]}),A.jsxs("div",{className:"lab-settings-layout",children:[A.jsxs("aside",{className:"lab-settings-nav",children:[A.jsx("p",{children:"Settings"}),A.jsx("nav",{"aria-label":"Settings sections",children:fU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-current":c===g.id?"page":void 0,className:c===g.id?"on":"",onClick:()=>f(g.id),type:"button",children:[A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.hint})]},g.id))})]}),A.jsxs("div",{className:"lab-settings-main",children:[A.jsx(xb,{compact:!0,mode:a.soulMode,state:"idle"}),A.jsxs("div",{className:"lab-settings-content",children:[c==="reader"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Reader position"}),A.jsx("span",{children:"The Spell will not read beyond this point."})]}),A.jsxs("div",{className:"lab-reader-grid",children:[A.jsxs("label",{children:[A.jsx("span",{children:"Volume"}),A.jsx("select",{"aria-label":"Reader volume",onChange:g=>v(Number(g.target.value)),ref:m,value:a.volume,children:np.map(g=>A.jsxs("option",{value:g.number,children:["Vol ",g.number," · to ch ",g.end]},g.number))})]}),A.jsxs("label",{children:[A.jsx("span",{children:"Chapter"}),A.jsx("input",{max:3127,min:1,onChange:g=>_("chapter",Number(g.target.value)),type:"number",value:a.chapter})]})]})]}),c==="spoilers"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Spoilers"}),A.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),A.jsxs("div",{className:"lab-choice-grid two",children:[A.jsxs("button",{"aria-pressed":a.spoilerMode==="protect",className:a.spoilerMode==="protect"?"on":"",onClick:()=>_("spoilerMode","protect"),type:"button",children:[A.jsx("strong",{children:"Protect the story"}),A.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),A.jsxs("button",{"aria-pressed":a.spoilerMode==="none",className:a.spoilerMode==="none"?"on":"",onClick:()=>_("spoilerMode","none"),type:"button",children:[A.jsx("strong",{children:"No spoiler limits"}),A.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),c==="reading"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Reading tier"}),A.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),A.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(g=>A.jsxs("button",{"aria-pressed":a.tier===g,className:a.tier===g?"on":"",onClick:()=>_("tier",g),type:"button",children:[A.jsx("strong",{children:g}),A.jsx("span",{children:uU[g]})]},g))})]}),c==="customize"&&A.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Customize the Spell"}),A.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Surface theme"}),A.jsx("div",{className:"lab-theme-grid",children:hU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-pressed":a.theme===g.value,className:a.theme===g.value?"on":"",onClick:()=>_("theme",g.value),type:"button",children:[A.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:g.swatches.map(S=>A.jsx("i",{style:{background:S}},S))}),A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.description})]},g.value))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Rune appearance"}),A.jsx("div",{className:"lab-choice-grid three",children:iU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-pressed":a.runeMode===g.mode,className:a.runeMode===g.mode?"on":"",onClick:()=>_("runeMode",g.mode),type:"button",children:[A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.description})]},g.mode))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Soul Sea"}),A.jsx("div",{className:"lab-choice-grid three",children:dU.map(g=>A.jsxs("button",{"aria-label":ju[g],"aria-pressed":a.soulMode===g,className:a.soulMode===g?"on":"",onClick:()=>_("soulMode",g),type:"button",children:[A.jsx("strong",{children:ju[g]}),A.jsx("span",{children:g==="still"?"A calm horizon behind the conversation.":g==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},g))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Message transparency"}),A.jsxs("div",{className:"lab-choice-grid two",children:[A.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":a.glass==="subtle",className:a.glass==="subtle"?"on":"",onClick:()=>_("glass","subtle"),type:"button",children:[A.jsx("strong",{children:"Subtle glass"}),A.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),A.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":a.glass==="immersive",className:a.glass==="immersive"?"on":"",onClick:()=>_("glass","immersive"),type:"button",children:[A.jsx("strong",{children:"Immersive · no surface"}),A.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Star web"}),A.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(g=>A.jsx("button",{"aria-pressed":a.starIntensity===g,className:a.starIntensity===g?"on":"",onClick:()=>_("starIntensity",g),type:"button",children:g},g))})]}),A.jsxs("div",{className:"lab-customize-row",children:[A.jsxs("div",{children:[A.jsx("h4",{children:"Reading density"}),A.jsxs("div",{className:"lab-segmented-control",children:[A.jsx("button",{"aria-label":"Compact text","aria-pressed":a.density==="compact",className:a.density==="compact"?"on":"",onClick:()=>_("density","compact"),type:"button",children:"compact"}),A.jsx("button",{"aria-label":"Comfortable text","aria-pressed":a.density==="comfortable",className:a.density==="comfortable"?"on":"",onClick:()=>_("density","comfortable"),type:"button",children:"comfortable"})]})]}),A.jsxs("div",{children:[A.jsx("h4",{children:"Font size"}),A.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(g=>A.jsx("button",{"aria-pressed":a.fontSize===g,className:a.fontSize===g?"on":"",onClick:()=>_("fontSize",g),type:"button",children:g},g))})]})]})]}),c==="privacy"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Keyboard & privacy"}),A.jsx("span",{children:"Quick controls and where your reading data stays."})]}),A.jsxs("dl",{className:"lab-shortcuts",children:[A.jsxs("div",{children:[A.jsxs("dt",{children:[A.jsx("kbd",{children:"Ctrl"}),A.jsx("kbd",{children:","})]}),A.jsx("dd",{children:"open settings"})]}),A.jsxs("div",{children:[A.jsx("dt",{children:A.jsx("kbd",{children:"Esc"})}),A.jsx("dd",{children:"close this panel"})]}),A.jsxs("div",{children:[A.jsx("dt",{children:A.jsx("kbd",{children:"Enter"})}),A.jsx("dd",{children:"send a message"})]})]}),A.jsxs("aside",{className:"lab-privacy-note",children:[A.jsx("span",{"aria-hidden":"true",children:"◎"}),A.jsxs("div",{children:[A.jsx("strong",{children:"Everything stays on this machine."}),A.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]})]})]})]}),A.jsxs("footer",{className:"lab-settings-actions",children:[A.jsx("button",{onClick:e,type:"button",children:"Leave unchanged"}),A.jsx("button",{className:"primary",onClick:()=>i(a),type:"button",children:"Apply settings"})]})]})})}const mU={chapter:1e3,density:"comfortable",fontSize:"medium",glass:"subtle",runeMode:"voice",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"crimson",tier:"ascended",volume:5},vy=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127];function gU(r){const e=vy.findIndex(i=>r<=i);return e===-1?vy.length:e+1}function vU(r){if(!r)return"This week";const e=new Date(r);if(Number.isNaN(e.getTime()))return"This week";const i=Math.floor((Date.now()-e.getTime())/864e5);return i<=0?"Today":i===1?"Yesterday":"This week"}function _y(r){return{reader_chapter:r.chapter,spoiler_mode:r.spoilerMode,tier:r.tier}}function _U({api:r,modeLabel:e,privacyLabel:i}){const a=v2(r,Ai),[l,c]=Xe.useState(mU),[f,h]=Xe.useState(!1),[m,p]=Xe.useState(!1),[_,v]=Xe.useState(!1),[g,S]=Xe.useState(!1),[E,D]=Xe.useState(new Set),[b,y]=Xe.useState(new Set),[P,F]=Xe.useState(new Map),[L,O]=Xe.useState(null),[U,B]=Xe.useState("idle"),[T,z]=Xe.useState("[The Spell listens.]"),[q,V]=Xe.useState(0),[Z,fe]=Xe.useState(0),de=Xe.useRef(null),$=Xe.useRef(null),C=Xe.useRef(!1),H=Xe.useRef(null),J=Xe.useMemo(()=>a.conversations.map(Ne=>({archived:E.has(Ne.conversation_id),dateGroup:vU(Ne.created_at),id:Ne.conversation_id,pinned:b.has(Ne.conversation_id),preview:"private reading thread",title:P.get(Ne.conversation_id)??Ne.title,volume:null})),[E,a.conversations,b,P]);Xe.useEffect(()=>{function Ne(qe){qe.ctrlKey&&qe.key===","&&(qe.preventDefault(),Ee()),qe.key==="Escape"&&(h(!1),p(!1))}return window.addEventListener("keydown",Ne),()=>window.removeEventListener("keydown",Ne)}),Xe.useEffect(()=>{const Ne=$.current;Ne&&(Ne.scrollTop=Ne.scrollHeight)},[a.activity,a.messages,a.recoveryMessage]),Xe.useEffect(()=>{if(a.turnActive){C.current=!0,B(a.activity.length>0?"weaving":"rippling");return}C.current&&(C.current=!1,B("complete"),he("[The weave is complete.]"),H.current&&window.clearTimeout(H.current),H.current=window.setTimeout(()=>B("idle"),900))},[a.activity.length,a.turnActive]),Xe.useEffect(()=>{const Ne=a.activity.at(-1);Ne&&he(xU(Ne))},[a.activity]),Xe.useEffect(()=>()=>{H.current&&window.clearTimeout(H.current)},[]);function he(Ne){z(Ne),V(qe=>qe+1),fe(qe=>qe+1)}async function Ee(){try{const Ne=await r.getPreferences(),qe=Ne.reader_chapter??l.chapter;c(ft=>({...ft,chapter:qe,spoilerMode:Ne.spoiler_mode,tier:Ne.tier,volume:gU(qe)}))}finally{h(!0),he("[The sea within opens.]")}}function N(){if(window.innerWidth<768){p(!0);return}v(!1)}function k(){if(window.innerWidth<768){p(!1);return}v(!0)}async function pe(){await a.createConversation()&&(p(!1),he("[An empty thread waits in the void.]"),window.setTimeout(()=>de.current?.focus(),0))}async function be(Ne){await a.selectConversation(Ne),p(!1),he("[The thread is recalled.]")}function Ae(Ne,qe){F(ft=>new Map(ft).set(Ne,qe)),he("[The thread accepts a new name.]")}function ee(Ne,qe){Ne(ft=>{const ut=new Set(ft);return ut.has(qe)?ut.delete(qe):ut.add(qe),ut})}function ce(Ne){B("rippling"),he("[The Spell is weaving an answer.]"),a.sendMessage(Ne)}function _e(){B("weaving"),he("[The Spell takes up the thread once more.]"),a.regenerateReply()}const Le=`Vol ${l.volume} · ch ${l.chapter} · ${l.tier}`,Je=l.starIntensity==="quiet"?.2:l.starIntensity==="vivid"?.56:.36,Be=a.activity.at(-1)??null;return A.jsxs("div",{className:["spell-surface-lab","spell-surface-live",m?"lab-rail-open":"",_?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":l.density,"data-font-size":l.fontSize,"data-glass":l.glass,"data-runes":l.runeMode,"data-soul":l.soulMode,"data-star-intensity":l.starIntensity,"data-theme":l.theme,"data-testid":"spell-surface-live",children:[A.jsx(JL,{className:"lab-spell-background",mode:"alive",threadAlpha:Je}),A.jsx("div",{"aria-hidden":"true",className:"lab-galactic-band"}),A.jsx("div",{"aria-hidden":"true",className:"lab-purple-depth"}),A.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-one"}),A.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-two"}),A.jsxs("div",{"aria-hidden":"true",className:"lab-core-wake",children:[A.jsx("span",{}),A.jsx("span",{})]},Z),A.jsx(xb,{mode:l.soulMode,state:U}),A.jsx(nU,{activeThreadId:a.conversationId??"",archivedOpen:g,collapsed:_,onArchive:Ne=>ee(D,Ne),onClose:k,onCreate:()=>{pe()},onDelete:Ne=>{a.deleteConversation(Ne)},onOpen:N,onOpenSettings:()=>{Ee()},onPin:Ne=>ee(y,Ne),onRename:Ae,onSelect:Ne=>{be(Ne)},onSetArchivedOpen:S,readerStatus:Le,threads:J}),A.jsxs("main",{className:"lab-chat-main",children:[A.jsxs("div",{className:"lab-chat-controls",children:[A.jsx("button",{"aria-label":"Open threads",className:"lab-mobile-rail",onClick:N,type:"button",children:A.jsx(LS,{})}),A.jsx("span",{className:"lab-live-mode",children:e}),A.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{Ee()},type:"button",children:A.jsx(US,{})})]}),A.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:$,children:A.jsxs("div",{className:"lab-transcript-column",children:[a.bootError&&A.jsx("div",{className:"boot-error",children:a.bootError}),!a.bootError&&a.messages.length===0&&A.jsxs("section",{className:"lab-empty-weave",children:[A.jsx("span",{className:"lab-empty-mark",children:A.jsx(cm,{})}),A.jsx("p",{children:"[An empty thread trembles in the void.]"}),A.jsx("h1",{children:"What are we reading?"}),A.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),a.messages.map(Ne=>A.jsx(v3,{Mark:cm,activity:Ne.streaming?Be:null,assistantName:Ai.assistantName,message:Ne,onQuote:qe=>{a.setDraft(`"${qe}" `),de.current?.focus()},onRegenerate:Ne.id===a.liveReplyId&&a.turnState==="idle"?_e:void 0,onViewPassage:O,regenerateLabel:Ai.regenerateLabel},Ne.id)),a.recoveryMessage&&A.jsx(x3,{chooseLabel:Ai.recoveryChooseLabel,createLabel:Ai.recoveryCreateLabel,message:a.recoveryMessage,onChooseConversation:N,onCreateConversation:()=>{pe()},onRetry:()=>{a.retryLastTurn()},retryLabel:Ai.recoveryRetryLabel,title:Ai.recoveryTitle})]})}),A.jsx(sU,{announcement:T,eventKey:q,mode:l.runeMode}),A.jsxs("footer",{className:"lab-composer-dock",children:[A.jsx(c3,{cancelling:a.turnState==="cancelling",draft:a.draft,inputLabel:Ai.inputLabel,onCancel:()=>{a.cancelTurn()},onDraftChange:a.setDraft,onSubmit:ce,onTierChange:Ne=>{const qe={...l,tier:Ne};c(qe),r.savePreferences(_y(qe))},placeholder:Ai.composerPlaceholder,sendLabel:Ai.sendLabel,stopLabel:Ai.stopLabel,stoppingLabel:Ai.stoppingLabel,textareaRef:de,tier:l.tier,turnActive:a.turnActive}),A.jsxs("p",{children:[A.jsx("span",{})," ",i]})]})]}),m&&A.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:()=>p(!1),type:"button"}),f&&A.jsx(pU,{initial:l,onClose:()=>h(!1),onSave:Ne=>{c(Ne),h(!1),he("[Your soul answers the change.]"),r.savePreferences(_y(Ne))}}),L&&A.jsx(_3,{handle:L,loadPassage:a.loadPassage,onClose:()=>O(null)})]})}function xU(r){return`[The Spell is ${r.status==="start"?r.detail||r.name:"done"}.]`}async function Kr(r,e){if(!r.ok)throw new Error(`${e} failed (${r.status})`);return await r.json()}function yU(r){const e=typeof r.data.text=="string"?r.data.text:"",i=typeof r.data.message=="string"?r.data.message:"";if(r.event==="delta")return{type:"delta",text:e};if(r.event==="completed")return{type:"completed",text:e,tokenCount:typeof r.data.token_count=="number"?r.data.token_count:void 0,tokenBudget:typeof r.data.token_budget=="number"?r.data.token_budget:void 0};if(r.event==="interrupted")return{type:"interrupted",message:i||"The turn was interrupted."};if(r.event==="failed")return{type:"failed",message:i||"The reply failed.",code:typeof r.data.code=="string"?r.data.code:void 0};if(r.event==="tool"){const a=Array.isArray(r.data.handles)?r.data.handles.filter(l=>typeof l=="string"):void 0;return{type:"tool",name:typeof r.data.name=="string"?r.data.name:"tool",status:typeof r.data.status=="string"?r.data.status:"start",detail:typeof r.data.detail=="string"?r.data.detail:"",preview:typeof r.data.preview=="string"?r.data.preview:void 0,handles:a&&a.length>0?a:void 0}}return null}async function*SU(r){const e=[];let i=[],a=null,l=0;const c=["delta","tool","completed","interrupted","failed"];for(const f of c)r.addEventListener(f,h=>{try{const m=yU({event:f,data:JSON.parse(h.data)});m&&(e.push(m),i.splice(0).forEach(p=>p()))}catch{}});r.onerror=()=>{l+=1,(r.readyState===EventSource.CLOSED||l>4)&&(a=new Error("The reply stream was interrupted."),i.splice(0).forEach(f=>f()))};try{for(;;)if(e.length>0)yield e.shift();else{if(a)throw a;await new Promise(f=>i.push(f))}}finally{r.close()}}async function*xy(r){const e=new EventSource(`/api/conversations/${encodeURIComponent(r)}/stream`);let i=!1;for await(const a of SU(e))if(yield a,a.type==="completed"||a.type==="interrupted"||a.type==="failed"){i=!0;break}if(!i)throw new Error("The reply stream closed without finishing.")}function bU(r=fetch){return{async getPreferences(){const e=await r("/api/preferences");return Kr(e,"Loading preferences")},async deleteConversation(e){const i=await r(`/api/conversations/${e}`,{method:"DELETE"});return Kr(i,"Deleting conversation")},async getPassage(e){const i=await r(`/api/passages?handle=${encodeURIComponent(e)}`);return Kr(i,"Loading passage")},async savePreferences(e){const i=await r("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return Kr(i,"Saving preferences")},async listConversations(){const e=await r("/api/conversations");return Kr(e,"Loading conversations")},async createConversation(){const e=await r("/api/conversations",{method:"POST"});return Kr(e,"Creating a conversation")},async loadMessages(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/messages`);return Kr(i,"Loading the conversation")},async*streamTurn(e,i){const a=await r(`/api/conversations/${encodeURIComponent(e)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:i})});if(!a.ok)throw new Error(`Sending the message failed (${a.status})`);yield*xy(e)},async*retryTurn(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/retry`,{method:"POST"});if(!i.ok)throw new Error(`Retrying failed (${i.status})`);yield*xy(e)},async cancelTurn(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/cancel`,{method:"POST"});if(i.status===202)return"cancelling";if(i.status===200)return"idle";throw new Error(`Stopping the reply failed (${i.status})`)}}}const MU=Xe.lazy(()=>TM(()=>import("./ThemeLab-CpYl-75Z.js"),[]).then(r=>({default:r.ThemeLab})));ss.autoAddCss=!1;function yy(r){return document.querySelector(`meta[name="${r}"]`)?.content??""}const yb=document.getElementById("root");if(!yb)throw new Error("Weaver root element is missing.");const EU=window.location.hash==="#theme-lab";m2.createRoot(yb).render(EU?A.jsx(Xe.Suspense,{fallback:A.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:A.jsx(MU,{})}):A.jsx(_U,{api:bU(),modeLabel:yy("weaver-mode"),privacyLabel:yy("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{$2 as A,cx as C,LS as R,JL as S,cm as W,xb as a,nU as b,US as c,e3 as d,sU as e,pU as f,A as j,Xe as r};

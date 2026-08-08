(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();const cM="modulepreload",uM=function(r){return"/"+r},d_={},fM=function(e,i,a){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(i.map(p=>{if(p=uM(p),p in d_)return;d_[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":cM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,E)=>{g.addEventListener("load",S),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function dM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sh={exports:{}},cl={};var h_;function hM(){if(h_)return cl;h_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return cl.Fragment=e,cl.jsx=i,cl.jsxs=i,cl}var p_;function pM(){return p_||(p_=1,sh.exports=hM()),sh.exports}var V=pM(),oh={exports:{}},lt={};var m_;function mM(){if(m_)return lt;m_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function y(N,W,ve){this.props=N,this.context=W,this.refs=b,this.updater=ve||E}y.prototype.isReactComponent={},y.prototype.setState=function(N,W){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,W,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=y.prototype;function z(N,W,ve){this.props=N,this.context=W,this.refs=b,this.updater=ve||E}var w=z.prototype=new P;w.constructor=z,C(w,y.prototype),w.isPureReactComponent=!0;var U=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function I(N,W,ve){var Se=ve.ref;return{$$typeof:r,type:N,key:W,ref:Se!==void 0?Se:null,props:ve}}function k(N,W){return I(N.type,W,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function K(N){var W={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ve){return W[ve]})}var ce=/\/+/g;function de(N,W){return typeof N=="object"&&N!==null&&N.key!=null?K(""+N.key):W.toString(36)}function q(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(W){N.status==="pending"&&(N.status="fulfilled",N.value=W)},function(W){N.status==="pending"&&(N.status="rejected",N.reason=W)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function D(N,W,ve,Se,Ae){var ee=typeof N;(ee==="undefined"||ee==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(ee){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case r:case e:Me=!0;break;case _:return Me=N._init,D(Me(N._payload),W,ve,Se,Ae)}}if(Me)return Ae=Ae(N),Me=Se===""?"."+de(N,0):Se,U(Ae)?(ve="",Me!=null&&(ve=Me.replace(ce,"$&/")+"/"),D(Ae,W,ve,"",function(st){return st})):Ae!=null&&(H(Ae)&&(Ae=k(Ae,ve+(Ae.key==null||N&&N.key===Ae.key?"":(""+Ae.key).replace(ce,"$&/")+"/")+Me)),W.push(Ae)),1;Me=0;var Ee=Se===""?".":Se+":";if(U(N))for(var Ge=0;Ge<N.length;Ge++)Se=N[Ge],ee=Ee+de(Se,Ge),Me+=D(Se,W,ve,ee,Ae);else if(Ge=S(N),typeof Ge=="function")for(N=Ge.call(N),Ge=0;!(Se=N.next()).done;)Se=Se.value,ee=Ee+de(Se,Ge++),Me+=D(Se,W,ve,ee,Ae);else if(ee==="object"){if(typeof N.then=="function")return D(q(N),W,ve,Se,Ae);throw W=String(N),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Me}function G(N,W,ve){if(N==null)return N;var Se=[],Ae=0;return D(N,Se,"","",function(ee){return W.call(ve,ee,Ae++)}),Se}function $(N){if(N._status===-1){var W=N._result;W=W(),W.then(function(ve){(N._status===0||N._status===-1)&&(N._status=1,N._result=ve)},function(ve){(N._status===0||N._status===-1)&&(N._status=2,N._result=ve)}),N._status===-1&&(N._status=0,N._result=W)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ue={map:G,forEach:function(N,W,ve){G(N,function(){W.apply(this,arguments)},ve)},count:function(N){var W=0;return G(N,function(){W++}),W},toArray:function(N){return G(N,function(W){return W})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return lt.Activity=v,lt.Children=ue,lt.Component=y,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=z,lt.StrictMode=a,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},lt.cache=function(N){return function(){return N.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(N,W,ve){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Se=C({},N.props),Ae=N.key;if(W!=null)for(ee in W.key!==void 0&&(Ae=""+W.key),W)!T.call(W,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&W.ref===void 0||(Se[ee]=W[ee]);var ee=arguments.length-2;if(ee===1)Se.children=ve;else if(1<ee){for(var Me=Array(ee),Ee=0;Ee<ee;Ee++)Me[Ee]=arguments[Ee+2];Se.children=Me}return I(N.type,Ae,Se)},lt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},lt.createElement=function(N,W,ve){var Se,Ae={},ee=null;if(W!=null)for(Se in W.key!==void 0&&(ee=""+W.key),W)T.call(W,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ae[Se]=W[Se]);var Me=arguments.length-2;if(Me===1)Ae.children=ve;else if(1<Me){for(var Ee=Array(Me),Ge=0;Ge<Me;Ge++)Ee[Ge]=arguments[Ge+2];Ae.children=Ee}if(N&&N.defaultProps)for(Se in Me=N.defaultProps,Me)Ae[Se]===void 0&&(Ae[Se]=Me[Se]);return I(N,ee,Ae)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(N){return{$$typeof:h,render:N}},lt.isValidElement=H,lt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:$}},lt.memo=function(N,W){return{$$typeof:p,type:N,compare:W===void 0?null:W}},lt.startTransition=function(N){var W=F.T,ve={};F.T=ve;try{var Se=N(),Ae=F.S;Ae!==null&&Ae(ve,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(L,pe)}catch(ee){pe(ee)}finally{W!==null&&ve.types!==null&&(W.types=ve.types),F.T=W}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(N){return F.H.use(N)},lt.useActionState=function(N,W,ve){return F.H.useActionState(N,W,ve)},lt.useCallback=function(N,W){return F.H.useCallback(N,W)},lt.useContext=function(N){return F.H.useContext(N)},lt.useDebugValue=function(){},lt.useDeferredValue=function(N,W){return F.H.useDeferredValue(N,W)},lt.useEffect=function(N,W){return F.H.useEffect(N,W)},lt.useEffectEvent=function(N){return F.H.useEffectEvent(N)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(N,W,ve){return F.H.useImperativeHandle(N,W,ve)},lt.useInsertionEffect=function(N,W){return F.H.useInsertionEffect(N,W)},lt.useLayoutEffect=function(N,W){return F.H.useLayoutEffect(N,W)},lt.useMemo=function(N,W){return F.H.useMemo(N,W)},lt.useOptimistic=function(N,W){return F.H.useOptimistic(N,W)},lt.useReducer=function(N,W,ve){return F.H.useReducer(N,W,ve)},lt.useRef=function(N){return F.H.useRef(N)},lt.useState=function(N){return F.H.useState(N)},lt.useSyncExternalStore=function(N,W,ve){return F.H.useSyncExternalStore(N,W,ve)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.8",lt}var g_;function am(){return g_||(g_=1,oh.exports=mM()),oh.exports}var Ke=am();const rm=dM(Ke);function Jh(r,e){(e==null||e>r.length)&&(e=r.length);for(var i=0,a=Array(e);i<e;i++)a[i]=r[i];return a}function gM(r){if(Array.isArray(r))return r}function vM(r){if(Array.isArray(r))return Jh(r)}function _M(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function xM(r,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,dy(a.key),a)}}function yM(r,e,i){return e&&xM(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Au(r,e){var i=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!i){if(Array.isArray(r)||(i=sm(r))||e){i&&(r=i);var a=0,l=function(){};return{s:l,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,f=!0,h=!1;return{s:function(){i=i.call(r)},n:function(){var m=i.next();return f=m.done,m},e:function(m){h=!0,c=m},f:function(){try{f||i.return==null||i.return()}finally{if(h)throw c}}}}function it(r,e,i){return(e=dy(e))in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function SM(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function bM(r,e){var i=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var a,l,c,f,h=[],m=!0,p=!1;try{if(c=(i=i.call(r)).next,e===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(a=c.call(i)).done)&&(h.push(a.value),h.length!==e);m=!0);}catch(_){p=!0,l=_}finally{try{if(!m&&i.return!=null&&(f=i.return(),Object(f)!==f))return}finally{if(p)throw l}}return h}}function MM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v_(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,a)}return i}function Re(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?v_(Object(i),!0).forEach(function(a){it(r,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):v_(Object(i)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(i,a))})}return r}function Yu(r,e){return gM(r)||bM(r,e)||sm(r,e)||MM()}function ki(r){return vM(r)||SM(r)||sm(r)||EM()}function TM(r,e){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var a=i.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function dy(r){var e=TM(r,"string");return typeof e=="symbol"?e:e+""}function Pu(r){"@babel/helpers - typeof";return Pu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pu(r)}function sm(r,e){if(r){if(typeof r=="string")return Jh(r,e);var i={}.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Jh(r,e):void 0}}var __=function(){},om={},hy={},py=null,my={mark:__,measure:__};try{typeof window<"u"&&(om=window),typeof document<"u"&&(hy=document),typeof MutationObserver<"u"&&(py=MutationObserver),typeof performance<"u"&&(my=performance)}catch{}var AM=om.navigator||{},x_=AM.userAgent,y_=x_===void 0?"":x_,yr=om,Jt=hy,S_=py,Yc=my;yr.document;var Fa=!!Jt.documentElement&&!!Jt.head&&typeof Jt.addEventListener=="function"&&typeof Jt.createElement=="function",gy=~y_.indexOf("MSIE")||~y_.indexOf("Trident/"),jc,RM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,CM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,vy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},wM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},_y=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Pn="classic",wl="duotone",xy="sharp",yy="sharp-duotone",Sy="chisel",by="etch",My="graphite",Ey="jelly",Ty="jelly-duo",Ay="jelly-fill",Ry="mosaic",Cy="notdog",wy="notdog-duo",Dy="pixel",Ny="slab",Ly="slab-duo",Uy="slab-press",Oy="slab-press-duo",Py="thumbprint",Iy="utility",zy="utility-duo",Fy="utility-fill",By="vellum",Hy="whiteboard",DM="Classic",NM="Duotone",LM="Sharp",UM="Sharp Duotone",OM="Chisel",PM="Etch",IM="Graphite",zM="Jelly",FM="Jelly Duo",BM="Jelly Fill",HM="Mosaic",GM="Notdog",VM="Notdog Duo",kM="Pixel",XM="Slab",WM="Slab Duo",qM="Slab Press",YM="Slab Press Duo",jM="Thumbprint",ZM="Utility",KM="Utility Duo",QM="Utility Fill",JM="Vellum",$M="Whiteboard",Gy=[Pn,wl,xy,yy,Sy,by,My,Ey,Ty,Ay,Ry,Cy,wy,Dy,Ny,Ly,Uy,Oy,Py,Iy,zy,Fy,By,Hy];jc={},it(it(it(it(it(it(it(it(it(it(jc,Pn,DM),wl,NM),xy,LM),yy,UM),Sy,OM),by,PM),My,IM),Ey,zM),Ty,FM),Ay,BM),it(it(it(it(it(it(it(it(it(it(jc,Ry,HM),Cy,GM),wy,VM),Dy,kM),Ny,XM),Ly,WM),Uy,qM),Oy,YM),Py,jM),Iy,ZM),it(it(it(it(jc,zy,KM),Fy,QM),By,JM),Hy,$M);var eE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},tE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},nE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),iE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Vy=["fak","fa-kit","fakd","fa-kit-duotone"],b_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},aE=["kit"],rE="kit",sE="kit-duotone",oE="Kit",lE="Kit Duotone";it(it({},rE,oE),sE,lE);var cE={kit:{"fa-kit":"fak"}},uE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fE={kit:{fak:"fa-kit"}},M_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Zc,Kc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],hE="classic",pE="duotone",mE="sharp",gE="sharp-duotone",vE="chisel",_E="etch",xE="graphite",yE="jelly",SE="jelly-duo",bE="jelly-fill",ME="mosaic",EE="notdog",TE="notdog-duo",AE="pixel",RE="slab",CE="slab-duo",wE="slab-press",DE="slab-press-duo",NE="thumbprint",LE="utility",UE="utility-duo",OE="utility-fill",PE="vellum",IE="whiteboard",zE="Classic",FE="Duotone",BE="Sharp",HE="Sharp Duotone",GE="Chisel",VE="Etch",kE="Graphite",XE="Jelly",WE="Jelly Duo",qE="Jelly Fill",YE="Mosaic",jE="Notdog",ZE="Notdog Duo",KE="Pixel",QE="Slab",JE="Slab Duo",$E="Slab Press",eT="Slab Press Duo",tT="Thumbprint",nT="Utility",iT="Utility Duo",aT="Utility Fill",rT="Vellum",sT="Whiteboard";Zc={},it(it(it(it(it(it(it(it(it(it(Zc,hE,zE),pE,FE),mE,BE),gE,HE),vE,GE),_E,VE),xE,kE),yE,XE),SE,WE),bE,qE),it(it(it(it(it(it(it(it(it(it(Zc,ME,YE),EE,jE),TE,ZE),AE,KE),RE,QE),CE,JE),wE,$E),DE,eT),NE,tT),LE,nT),it(it(it(it(Zc,UE,iT),OE,aT),PE,rT),IE,sT);var oT="kit",lT="kit-duotone",cT="Kit",uT="Kit Duotone";it(it({},oT,cT),lT,uT);var fT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},dT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},$h={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},hT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ky=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(dE,hT),pT=["solid","regular","light","thin","duotone","brands","semibold"],Xy=[1,2,3,4,5,6,7,8,9,10],mT=Xy.concat([11,12,13,14,15,16,17,18,19,20]),gT=["aw","fw","pull-left","pull-right"],vT=[].concat(ki(Object.keys(dT)),pT,gT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Kc.GROUP,Kc.SWAP_OPACITY,Kc.PRIMARY,Kc.SECONDARY]).concat(Xy.map(function(r){return"".concat(r,"x")})).concat(mT.map(function(r){return"w-".concat(r)})),_T={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ua="___FONT_AWESOME___",ep=16,Wy="fa",qy="svg-inline--fa",ts="data-fa-i2svg",tp="data-fa-pseudo-element",xT="data-fa-pseudo-element-pending",lm="data-prefix",cm="data-icon",E_="fontawesome-i2svg",yT="async",ST=["HTML","HEAD","STYLE","SCRIPT"],Yy=["::before","::after",":before",":after"],jy=(function(){try{return!0}catch{return!1}})();function Dl(r){return new Proxy(r,{get:function(i,a){return a in i?i[a]:i[Pn]}})}var Zy=Re({},vy);Zy[Pn]=Re(Re(Re(Re({},{"fa-duotone":"duotone"}),vy[Pn]),b_.kit),b_["kit-duotone"]);var bT=Dl(Zy),np=Re({},iE);np[Pn]=Re(Re(Re(Re({},{duotone:"fad"}),np[Pn]),M_.kit),M_["kit-duotone"]);var T_=Dl(np),ip=Re({},$h);ip[Pn]=Re(Re({},ip[Pn]),fE.kit);var um=Dl(ip),ap=Re({},fT);ap[Pn]=Re(Re({},ap[Pn]),cE.kit);Dl(ap);var MT=RM,Ky="fa-layers-text",ET=CM,TT=Re({},eE);Dl(TT);var AT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lh=wM,RT=[].concat(ki(aE),ki(vT)),Ml=yr.FontAwesomeConfig||{};function CT(r){var e=Jt.querySelector("script["+r+"]");if(e)return e.getAttribute(r)}function wT(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(Jt&&typeof Jt.querySelector=="function"){var DT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DT.forEach(function(r){var e=Yu(r,2),i=e[0],a=e[1],l=wT(CT(i));l!=null&&(Ml[a]=l)})}var Qy={styleDefault:"solid",familyDefault:Pn,cssPrefix:Wy,replacementClass:qy,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ml.familyPrefix&&(Ml.cssPrefix=Ml.familyPrefix);var co=Re(Re({},Qy),Ml);co.autoReplaceSvg||(co.observeMutations=!1);var nt={};Object.keys(Qy).forEach(function(r){Object.defineProperty(nt,r,{enumerable:!0,set:function(i){co[r]=i,El.forEach(function(a){return a(nt)})},get:function(){return co[r]}})});Object.defineProperty(nt,"familyPrefix",{enumerable:!0,set:function(e){co.cssPrefix=e,El.forEach(function(i){return i(nt)})},get:function(){return co.cssPrefix}});yr.FontAwesomeConfig=nt;var El=[];function NT(r){return El.push(r),function(){El.splice(El.indexOf(r),1)}}var Hs=ep,$i={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LT(r){if(!(!r||!Fa)){var e=Jt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=r;for(var i=Jt.head.childNodes,a=null,l=i.length-1;l>-1;l--){var c=i[l],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=c)}return Jt.head.insertBefore(e,a),r}}var UT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A_(){for(var r=12,e="";r-- >0;)e+=UT[Math.random()*62|0];return e}function mo(r){for(var e=[],i=(r||[]).length>>>0;i--;)e[i]=r[i];return e}function fm(r){return r.classList?mo(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Jy(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OT(r){return Object.keys(r||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(Jy(r[i]),'" ')},"").trim()}function ju(r){return Object.keys(r||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(r[i].trim(),";")},"")}function dm(r){return r.size!==$i.size||r.x!==$i.x||r.y!==$i.y||r.rotate!==$i.rotate||r.flipX||r.flipY}function PT(r){var e=r.transform,i=r.containerWidth,a=r.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(h)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:l,inner:m,path:p}}function IT(r){var e=r.transform,i=r.width,a=i===void 0?ep:i,l=r.height,c=l===void 0?ep:l,f="";return gy?f+="translate(".concat(e.x/Hs-a/2,"em, ").concat(e.y/Hs-c/2,"em) "):f+="translate(calc(-50% + ".concat(e.x/Hs,"em), calc(-50% + ").concat(e.y/Hs,"em)) "),f+="scale(".concat(e.size/Hs*(e.flipX?-1:1),", ").concat(e.size/Hs*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var zT=`:root, :host {
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
}`;function $y(){var r=Wy,e=qy,i=nt.cssPrefix,a=nt.replacementClass,l=zT;if(i!==r||a!==e){var c=new RegExp("\\.".concat(r,"\\-"),"g"),f=new RegExp("\\--".concat(r,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");l=l.replace(c,".".concat(i,"-")).replace(f,"--".concat(i,"-")).replace(h,".".concat(a))}return l}var R_=!1;function ch(){nt.autoAddCss&&!R_&&(LT($y()),R_=!0)}var FT={mixout:function(){return{dom:{css:$y,insertCss:ch}}},hooks:function(){return{beforeDOMElementCreation:function(){ch()},beforeI2svg:function(){ch()}}}},Oa=yr||{};Oa[Ua]||(Oa[Ua]={});Oa[Ua].styles||(Oa[Ua].styles={});Oa[Ua].hooks||(Oa[Ua].hooks={});Oa[Ua].shims||(Oa[Ua].shims=[]);var Hi=Oa[Ua],eS=[],tS=function(){Jt.removeEventListener("DOMContentLoaded",tS),Iu=1,eS.map(function(e){return e()})},Iu=!1;Fa&&(Iu=(Jt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Jt.readyState),Iu||Jt.addEventListener("DOMContentLoaded",tS));function BT(r){Fa&&(Iu?setTimeout(r,0):eS.push(r))}function Nl(r){var e=r.tag,i=r.attributes,a=i===void 0?{}:i,l=r.children,c=l===void 0?[]:l;return typeof r=="string"?Jy(r):"<".concat(e," ").concat(OT(a),">").concat(c.map(Nl).join(""),"</").concat(e,">")}function C_(r,e,i){if(r&&r[e]&&r[e][i])return{prefix:e,iconName:i,icon:r[e][i]}}var uh=function(e,i,a,l){var c=Object.keys(e),f=c.length,h=i,m,p,_;for(a===void 0?(m=1,_=e[c[0]]):(m=0,_=a);m<f;m++)p=c[m],_=h(_,e[p],p,e);return _};function nS(r){return ki(r).length!==1?null:r.codePointAt(0).toString(16)}function w_(r){return Object.keys(r).reduce(function(e,i){var a=r[i],l=!!a.icon;return l?e[a.iconName]=a.icon:e[i]=a,e},{})}function rp(r,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.skipHooks,l=a===void 0?!1:a,c=w_(e);typeof Hi.hooks.addPack=="function"&&!l?Hi.hooks.addPack(r,w_(e)):Hi.styles[r]=Re(Re({},Hi.styles[r]||{}),c),r==="fas"&&rp("fa",e)}var Al=Hi.styles,HT=Hi.shims,iS=Object.keys(um),GT=iS.reduce(function(r,e){return r[e]=Object.keys(um[e]),r},{}),hm=null,aS={},rS={},sS={},oS={},lS={};function VT(r){return~RT.indexOf(r)}function kT(r,e){var i=e.split("-"),a=i[0],l=i.slice(1).join("-");return a===r&&l!==""&&!VT(l)?l:null}var cS=function(){var e=function(c){return uh(Al,function(f,h,m){return f[m]=uh(h,c,{}),f},{})};aS=e(function(l,c,f){if(c[3]&&(l[c[3]]=f),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=f})}return l}),rS=e(function(l,c,f){if(l[f]=f,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=f})}return l}),lS=e(function(l,c,f){var h=c[2];return l[f]=f,h.forEach(function(m){l[m]=f}),l});var i="far"in Al||nt.autoFetchSvg,a=uh(HT,function(l,c){var f=c[0],h=c[1],m=c[2];return h==="far"&&!i&&(h="fas"),typeof f=="string"&&(l.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(l.unicodes[f.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});sS=a.names,oS=a.unicodes,hm=Zu(nt.styleDefault,{family:nt.familyDefault})};NT(function(r){hm=Zu(r.styleDefault,{family:nt.familyDefault})});cS();function pm(r,e){return(aS[r]||{})[e]}function XT(r,e){return(rS[r]||{})[e]}function Jr(r,e){return(lS[r]||{})[e]}function uS(r){return sS[r]||{prefix:null,iconName:null}}function WT(r){var e=oS[r],i=pm("fas",r);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Sr(){return hm}var fS=function(){return{prefix:null,iconName:null,rest:[]}};function qT(r){var e=Pn,i=iS.reduce(function(a,l){return a[l]="".concat(nt.cssPrefix,"-").concat(l),a},{});return Gy.forEach(function(a){(r.includes(i[a])||r.some(function(l){return GT[a].includes(l)}))&&(e=a)}),e}function Zu(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,a=i===void 0?Pn:i,l=bT[a][r];if(a===wl&&!r)return"fad";var c=T_[a][r]||T_[a][l],f=r in Hi.styles?r:null,h=c||f||null;return h}function YT(r){var e=[],i=null;return r.forEach(function(a){var l=kT(nt.cssPrefix,a);l?i=l:a&&e.push(a)}),{iconName:i,rest:e}}function D_(r){return r.sort().filter(function(e,i,a){return a.indexOf(e)===i})}var N_=ky.concat(Vy);function Ku(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,a=i===void 0?!1:i,l=null,c=D_(r.filter(function(S){return N_.includes(S)})),f=D_(r.filter(function(S){return!N_.includes(S)})),h=c.filter(function(S){return l=S,!_y.includes(S)}),m=Yu(h,1),p=m[0],_=p===void 0?null:p,v=qT(c),g=Re(Re({},YT(f)),{},{prefix:Zu(_,{family:v})});return Re(Re(Re({},g),QT({values:r,family:v,styles:Al,config:nt,canonical:g,givenPrefix:l})),jT(a,l,g))}function jT(r,e,i){var a=i.prefix,l=i.iconName;if(r||!a||!l)return{prefix:a,iconName:l};var c=e==="fa"?uS(l):{},f=Jr(a,l);return l=c.iconName||f||l,a=c.prefix||a,a==="far"&&!Al.far&&Al.fas&&!nt.autoFetchSvg&&(a="fas"),{prefix:a,iconName:l}}var ZT=Gy.filter(function(r){return r!==Pn||r!==wl}),KT=Object.keys($h).filter(function(r){return r!==Pn}).map(function(r){return Object.keys($h[r])}).flat();function QT(r){var e=r.values,i=r.family,a=r.canonical,l=r.givenPrefix,c=l===void 0?"":l,f=r.styles,h=f===void 0?{}:f,m=r.config,p=m===void 0?{}:m,_=i===wl,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=a.prefix==="fad"||a.prefix==="fa-duotone";if(!_&&(v||g||S)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ZT.includes(i)){var E=Object.keys(h).find(function(b){return KT.includes(b)});if(E||p.autoFetchSvg){var C=nE.get(i).defaultShortPrefixId;a.prefix=C,a.iconName=Jr(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||c==="fa")&&(a.prefix=Sr()||"fas"),a}var JT=(function(){function r(){_M(this,r),this.definitions={}}return yM(r,[{key:"add",value:function(){for(var i=this,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){i.definitions[h]=Re(Re({},i.definitions[h]||{}),f[h]),rp(h,f[h]);var m=um[Pn][h];m&&rp(m,f[h]),cS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,a){var l=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(l).map(function(c){var f=l[c],h=f.prefix,m=f.iconName,p=f.icon,_=p[2];i[h]||(i[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(i[h][v]=p)}),i[h][m]=p}),i}}])})(),L_=[],no={},ro={},$T=Object.keys(ro);function eA(r,e){var i=e.mixoutsTo;return L_=r,no={},Object.keys(ro).forEach(function(a){$T.indexOf(a)===-1&&delete ro[a]}),L_.forEach(function(a){var l=a.mixout?a.mixout():{};if(Object.keys(l).forEach(function(f){typeof l[f]=="function"&&(i[f]=l[f]),Pu(l[f])==="object"&&Object.keys(l[f]).forEach(function(h){i[f]||(i[f]={}),i[f][h]=l[f][h]})}),a.hooks){var c=a.hooks();Object.keys(c).forEach(function(f){no[f]||(no[f]=[]),no[f].push(c[f])})}a.provides&&a.provides(ro)}),i}function sp(r,e){for(var i=arguments.length,a=new Array(i>2?i-2:0),l=2;l<i;l++)a[l-2]=arguments[l];var c=no[r]||[];return c.forEach(function(f){e=f.apply(null,[e].concat(a))}),e}function ns(r){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var l=no[r]||[];l.forEach(function(c){c.apply(null,i)})}function br(){var r=arguments[0],e=Array.prototype.slice.call(arguments,1);return ro[r]?ro[r].apply(null,e):void 0}function op(r){r.prefix==="fa"&&(r.prefix="fas");var e=r.iconName,i=r.prefix||Sr();if(e)return e=Jr(i,e)||e,C_(dS.definitions,i,e)||C_(Hi.styles,i,e)}var dS=new JT,tA=function(){nt.autoReplaceSvg=!1,nt.observeMutations=!1,ns("noAuto")},nA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fa?(ns("beforeI2svg",e),br("pseudoElements2svg",e),br("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;nt.autoReplaceSvg===!1&&(nt.autoReplaceSvg=!0),nt.observeMutations=!0,BT(function(){aA({autoReplaceSvgRoot:i}),ns("watch",e)})}},iA={icon:function(e){if(e===null)return null;if(Pu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Jr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Zu(e[0]);return{prefix:a,iconName:Jr(a,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(nt.cssPrefix,"-"))>-1||e.match(MT))){var l=Ku(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||Sr(),iconName:Jr(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var c=Sr();return{prefix:c,iconName:Jr(c,e)||e}}}},gi={noAuto:tA,config:nt,dom:nA,parse:iA,library:dS,findIconDefinition:op,toHtml:Nl},aA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,a=i===void 0?Jt:i;(Object.keys(Hi.styles).length>0||nt.autoFetchSvg)&&Fa&&nt.autoReplaceSvg&&gi.dom.i2svg({node:a})};function Qu(r,e){return Object.defineProperty(r,"abstract",{get:e}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(a){return Nl(a)})}}),Object.defineProperty(r,"node",{get:function(){if(Fa){var a=Jt.createElement("div");return a.innerHTML=r.html,a.children}}}),r}function rA(r){var e=r.children,i=r.main,a=r.mask,l=r.attributes,c=r.styles,f=r.transform;if(dm(f)&&i.found&&!a.found){var h=i.width,m=i.height,p={x:h/m/2,y:.5};l.style=ju(Re(Re({},c),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function sA(r){var e=r.prefix,i=r.iconName,a=r.children,l=r.attributes,c=r.symbol,f=c===!0?"".concat(e,"-").concat(nt.cssPrefix,"-").concat(i):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Re(Re({},l),{},{id:f}),children:a}]}]}function oA(r){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(i){return i in r})}function mm(r){var e=r.icons,i=e.main,a=e.mask,l=r.prefix,c=r.iconName,f=r.transform,h=r.symbol,m=r.maskId,p=r.extra,_=r.watchable,v=_===void 0?!1:_,g=a.found?a:i,S=g.width,E=g.height,C=[nt.replacementClass,c?"".concat(nt.cssPrefix,"-").concat(c):""].filter(function(U){return p.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(p.classes).join(" "),b={children:[],attributes:Re(Re({},p.attributes),{},{"data-prefix":l,"data-icon":c,class:C,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(E)})};!oA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ts]="");var y=Re(Re({},b),{},{prefix:l,iconName:c,main:i,mask:a,maskId:m,transform:f,symbol:h,styles:Re({},p.styles)}),P=a.found&&i.found?br("generateAbstractMask",y)||{children:[],attributes:{}}:br("generateAbstractIcon",y)||{children:[],attributes:{}},z=P.children,w=P.attributes;return y.children=z,y.attributes=w,h?sA(y):rA(y)}function U_(r){var e=r.content,i=r.width,a=r.height,l=r.transform,c=r.extra,f=r.watchable,h=f===void 0?!1:f,m=Re(Re({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ts]="");var p=Re({},c.styles);dm(l)&&(p.transform=IT({transform:l,width:i,height:a}),p["-webkit-transform"]=p.transform);var _=ju(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function lA(r){var e=r.content,i=r.extra,a=Re(Re({},i.attributes),{},{class:i.classes.join(" ")}),l=ju(i.styles);l.length>0&&(a.style=l);var c=[];return c.push({tag:"span",attributes:a,children:[e]}),c}var fh=Hi.styles;function lp(r){var e=r[0],i=r[1],a=r.slice(4),l=Yu(a,1),c=l[0],f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat(nt.cssPrefix,"-").concat(lh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(nt.cssPrefix,"-").concat(lh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(nt.cssPrefix,"-").concat(lh.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:i,icon:f}}var cA={found:!1,width:512,height:512};function uA(r,e){!jy&&!nt.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(e,'" is missing.'))}function cp(r,e){var i=e;return e==="fa"&&nt.styleDefault!==null&&(e=Sr()),new Promise(function(a,l){if(i==="fa"){var c=uS(r)||{};r=c.iconName||r,e=c.prefix||e}if(r&&e&&fh[e]&&fh[e][r]){var f=fh[e][r];return a(lp(f))}uA(r,e),a(Re(Re({},cA),{},{icon:nt.showMissingIcons&&r?br("missingIconAbstract")||{}:{}}))})}var O_=function(){},up=nt.measurePerformance&&Yc&&Yc.mark&&Yc.measure?Yc:{mark:O_,measure:O_},yl='FA "7.3.1"',fA=function(e){return up.mark("".concat(yl," ").concat(e," begins")),function(){return hS(e)}},hS=function(e){up.mark("".concat(yl," ").concat(e," ends")),up.measure("".concat(yl," ").concat(e),"".concat(yl," ").concat(e," begins"),"".concat(yl," ").concat(e," ends"))},gm={begin:fA,end:hS},Ru=function(){};function P_(r){var e=r.getAttribute?r.getAttribute(ts):null;return typeof e=="string"}function dA(r){var e=r.getAttribute?r.getAttribute(lm):null,i=r.getAttribute?r.getAttribute(cm):null;return e&&i}function hA(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(nt.replacementClass)}function pA(){if(nt.autoReplaceSvg===!0)return Cu.replace;var r=Cu[nt.autoReplaceSvg];return r||Cu.replace}function mA(r){return Jt.createElementNS("http://www.w3.org/2000/svg",r)}function gA(r){return Jt.createElement(r)}function pS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,a=i===void 0?r.tag==="svg"?mA:gA:i;if(typeof r=="string")return Jt.createTextNode(r);var l=a(r.tag);Object.keys(r.attributes||[]).forEach(function(f){l.setAttribute(f,r.attributes[f])});var c=r.children||[];return c.forEach(function(f){l.appendChild(pS(f,{ceFn:a}))}),l}function vA(r){var e=" ".concat(r.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Cu={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(l){i.parentNode.insertBefore(pS(l),i)}),i.getAttribute(ts)===null&&nt.keepOriginalSource){var a=Jt.createComment(vA(i));i.parentNode.replaceChild(a,i)}else i.remove()},nest:function(e){var i=e[0],a=e[1];if(~fm(i).indexOf(nt.replacementClass))return Cu.replace(e);var l=new RegExp("".concat(nt.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var c=a[0].attributes.class.split(" ").reduce(function(h,m){return m===nt.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});a[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",c.toNode.join(" "))}var f=a.map(function(h){return Nl(h)}).join(`
`);i.setAttribute(ts,""),i.innerHTML=f}};function I_(r){r()}function mS(r,e){var i=typeof e=="function"?e:Ru;if(r.length===0)i();else{var a=I_;nt.mutateApproach===yT&&(a=yr.requestAnimationFrame||I_),a(function(){var l=pA(),c=gm.begin("mutate");r.map(l),c(),i()})}}var vm=!1;function gS(){vm=!0}function fp(){vm=!1}var zu=null;function z_(r){if(S_&&nt.observeMutations){var e=r.treeCallback,i=e===void 0?Ru:e,a=r.nodeCallback,l=a===void 0?Ru:a,c=r.pseudoElementsCallback,f=c===void 0?Ru:c,h=r.observeMutationsRoot,m=h===void 0?Jt:h;zu=new S_(function(p){if(!vm){var _=Sr();mo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!P_(v.addedNodes[0])&&(nt.searchPseudoElements&&f(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&nt.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&P_(v.target)&&~AT.indexOf(v.attributeName))if(v.attributeName==="class"&&dA(v.target)){var g=Ku(fm(v.target)),S=g.prefix,E=g.iconName;v.target.setAttribute(lm,S||_),E&&v.target.setAttribute(cm,E)}else hA(v.target)&&l(v.target)})}}),Fa&&zu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _A(){zu&&zu.disconnect()}function xA(r){var e=r.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(a,l){var c=l.split(":"),f=c[0],h=c.slice(1);return f&&h.length>0&&(a[f]=h.join(":").trim()),a},{})),i}function yA(r){var e=r.getAttribute("data-prefix"),i=r.getAttribute("data-icon"),a=r.innerText!==void 0?r.innerText.trim():"",l=Ku(fm(r));return l.prefix||(l.prefix=Sr()),e&&i&&(l.prefix=e,l.iconName=i),l.iconName&&l.prefix||(l.prefix&&a.length>0&&(l.iconName=XT(l.prefix,r.innerText)||pm(l.prefix,nS(r.innerText))),!l.iconName&&nt.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=r.firstChild.data)),l}function SA(r){var e=mo(r.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{});return e}function bA(){return{iconName:null,prefix:null,transform:$i,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function F_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=yA(r),a=i.iconName,l=i.prefix,c=i.rest,f=SA(r),h=sp("parseNodeAttributes",{},r),m=e.styleParser?xA(r):[];return Re({iconName:a,prefix:l,transform:$i,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:f}},h)}var MA=Hi.styles;function vS(r){var e=nt.autoReplaceSvg==="nest"?F_(r,{styleParser:!1}):F_(r);return~e.extra.classes.indexOf(Ky)?br("generateLayersText",r,e):br("generateSvgReplacementMutation",r,e)}function EA(){return[].concat(ki(Vy),ki(ky))}function B_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fa)return Promise.resolve();var i=Jt.documentElement.classList,a=function(v){return i.add("".concat(E_,"-").concat(v))},l=function(v){return i.remove("".concat(E_,"-").concat(v))},c=nt.autoFetchSvg?EA():_y.concat(Object.keys(MA));c.includes("fa")||c.push("fa");var f=[".".concat(Ky,":not([").concat(ts,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ts,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=mo(r.querySelectorAll(f))}catch{}if(h.length>0)a("pending"),l("complete");else return Promise.resolve();var m=gm.begin("onTree"),p=h.reduce(function(_,v){try{var g=vS(v);g&&_.push(g)}catch(S){jy||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){mS(g,function(){a("active"),a("complete"),l("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function TA(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vS(r).then(function(i){i&&mS([i],e)})}function AA(r){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:op(e||{}),l=i.mask;return l&&(l=(l||{}).icon?l:op(l||{})),r(a,Re(Re({},i),{},{mask:l}))}}var RA=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,l=a===void 0?$i:a,c=i.symbol,f=c===void 0?!1:c,h=i.mask,m=h===void 0?null:h,p=i.maskId,_=p===void 0?null:p,v=i.classes,g=v===void 0?[]:v,S=i.attributes,E=S===void 0?{}:S,C=i.styles,b=C===void 0?{}:C;if(e){var y=e.prefix,P=e.iconName,z=e.icon;return Qu(Re({type:"icon"},e),function(){return ns("beforeDOMElementCreation",{iconDefinition:e,params:i}),mm({icons:{main:lp(z),mask:m?lp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:P,transform:Re(Re({},$i),l),symbol:f,maskId:_,extra:{attributes:E,styles:b,classes:g}})})}},CA={mixout:function(){return{icon:AA(RA)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=B_,i.nodeCallback=TA,i}}},provides:function(e){e.i2svg=function(i){var a=i.node,l=a===void 0?Jt:a,c=i.callback,f=c===void 0?function(){}:c;return B_(l,f)},e.generateSvgReplacementMutation=function(i,a){var l=a.iconName,c=a.prefix,f=a.transform,h=a.symbol,m=a.mask,p=a.maskId,_=a.extra;return new Promise(function(v,g){Promise.all([cp(l,c),m.iconName?cp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=Yu(S,2),C=E[0],b=E[1];v([i,mm({icons:{main:C,mask:b},prefix:c,iconName:l,transform:f,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(i){var a=i.children,l=i.attributes,c=i.main,f=i.transform,h=i.styles,m=ju(h);m.length>0&&(l.style=m);var p;return dm(f)&&(p=br("generateAbstractTransformGrouping",{main:c,transform:f,containerWidth:c.width,iconWidth:c.width})),a.push(p||c.icon),{children:a,attributes:l}}}},wA={mixout:function(){return{layer:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.classes,c=l===void 0?[]:l;return Qu({type:"layer"},function(){ns("beforeDOMElementCreation",{assembler:i,params:a});var f=[];return i(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(nt.cssPrefix,"-layers")].concat(ki(c)).join(" ")},children:f}]})}}}},DA={mixout:function(){return{counter:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var l=a.classes,c=l===void 0?[]:l,f=a.attributes,h=f===void 0?{}:f,m=a.styles,p=m===void 0?{}:m;return Qu({type:"counter",content:i},function(){return ns("beforeDOMElementCreation",{content:i,params:a}),lA({content:i.toString(),extra:{attributes:h,styles:p,classes:["".concat(nt.cssPrefix,"-layers-counter")].concat(ki(c))}})})}}}},NA={mixout:function(){return{text:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,c=l===void 0?$i:l,f=a.classes,h=f===void 0?[]:f,m=a.attributes,p=m===void 0?{}:m,_=a.styles,v=_===void 0?{}:_;return Qu({type:"text",content:i},function(){return ns("beforeDOMElementCreation",{content:i,params:a}),U_({content:i,transform:Re(Re({},$i),c),extra:{attributes:p,styles:v,classes:["".concat(nt.cssPrefix,"-layers-text")].concat(ki(h))}})})}}},provides:function(e){e.generateLayersText=function(i,a){var l=a.transform,c=a.extra,f=null,h=null;if(gy){var m=parseInt(getComputedStyle(i).fontSize,10),p=i.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([i,U_({content:i.innerHTML,width:f,height:h,transform:l,extra:c,watchable:!0})])}}},_S=new RegExp('"',"ug"),H_=[1105920,1112319],G_=Re(Re(Re(Re({},{FontAwesome:{normal:"fas",400:"fas"}}),tE),_T),uE),dp=Object.keys(G_).reduce(function(r,e){return r[e.toLowerCase()]=G_[e],r},{}),LA=Object.keys(dp).reduce(function(r,e){var i=dp[e];return r[e]=i[900]||ki(Object.entries(i))[0][1],r},{});function UA(r){var e=r.replace(_S,"");return nS(ki(e)[0]||"")}function OA(r){var e=r.getPropertyValue("font-feature-settings").includes("ss01"),i=r.getPropertyValue("content"),a=i.replace(_S,""),l=a.codePointAt(0),c=l>=H_[0]&&l<=H_[1],f=a.length===2?a[0]===a[1]:!1;return c||f||e}function PA(r,e){var i=r.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),l=isNaN(a)?"normal":a;return(dp[i]||{})[l]||LA[i]}function V_(r,e){var i="".concat(xT).concat(e.replace(":","-"));return new Promise(function(a,l){if(r.getAttribute(i)!==null)return a();var c=mo(r.children),f=c.filter(function(L){return L.getAttribute(tp)===e})[0],h=yr.getComputedStyle(r,e),m=h.getPropertyValue("font-family"),p=m.match(ET),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return r.removeChild(f),a();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=PA(m,_),E=UA(g),C=p[0].startsWith("FontAwesome"),b=OA(h),y=pm(S,E),P=y;if(C){var z=WT(E);z.iconName&&z.prefix&&(y=z.iconName,S=z.prefix)}if(y&&!b&&(!f||f.getAttribute(lm)!==S||f.getAttribute(cm)!==P)){r.setAttribute(i,P),f&&r.removeChild(f);var w=bA(),U=w.extra;U.attributes[tp]=e,cp(y,S).then(function(L){var F=mm(Re(Re({},w),{},{icons:{main:L,mask:fS()},prefix:S,iconName:P,extra:U,watchable:!0})),T=Jt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?r.insertBefore(T,r.firstChild):r.appendChild(T),T.outerHTML=F.map(function(I){return Nl(I)}).join(`
`),r.removeAttribute(i),a()}).catch(l)}else a()}else a()})}function IA(r){return Promise.all([V_(r,"::before"),V_(r,"::after")])}function zA(r){return r.parentNode!==document.head&&!~ST.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(tp)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var FA=function(e){return!!e&&Yy.some(function(i){return e.includes(i)})},BA=function(e){if(!e)return[];var i=new Set,a=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=Au(a),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;if(FA(f)){var h=Yy.reduce(function(m,p){return m.replace(p,"")},f);h!==""&&h!=="*"&&i.add(h)}}}catch(m){l.e(m)}finally{l.f()}return i};function k_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Fa){var i;if(e)i=r;else if(nt.searchPseudoElementsFullScan)i=r.querySelectorAll("*");else{var a=new Set,l=Au(document.styleSheets),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;try{var h=Au(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=BA(p.selectorText),v=Au(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;a.add(S)}}catch(C){v.e(C)}finally{v.f()}}}catch(C){h.e(C)}finally{h.f()}}catch(C){nt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){l.e(C)}finally{l.f()}if(!a.size)return;var E=Array.from(a).join(", ");try{i=r.querySelectorAll(E)}catch{}}return new Promise(function(C,b){var y=mo(i).filter(zA).map(IA),P=gm.begin("searchPseudoElements");gS(),Promise.all(y).then(function(){P(),fp(),C()}).catch(function(){P(),fp(),b()})})}}var HA={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=k_,i}}},provides:function(e){e.pseudoElements2svg=function(i){var a=i.node,l=a===void 0?Jt:a;nt.searchPseudoElements&&k_(l)}}},X_=!1,GA={mixout:function(){return{dom:{unwatch:function(){gS(),X_=!0}}}},hooks:function(){return{bootstrap:function(){z_(sp("mutationObserverCallbacks",{}))},noAuto:function(){_A()},watch:function(i){var a=i.observeMutationsRoot;X_?fp():z_(sp("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},W_=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,l){var c=l.toLowerCase().split("-"),f=c[0],h=c.slice(1).join("-");if(f&&h==="h")return a.flipX=!0,a;if(f&&h==="v")return a.flipY=!0,a;if(h=parseFloat(h),isNaN(h))return a;switch(f){case"grow":a.size=a.size+h;break;case"shrink":a.size=a.size-h;break;case"left":a.x=a.x-h;break;case"right":a.x=a.x+h;break;case"up":a.y=a.y-h;break;case"down":a.y=a.y+h;break;case"rotate":a.rotate=a.rotate+h;break}return a},i)},VA={mixout:function(){return{parse:{transform:function(i){return W_(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-transform");return l&&(i.transform=W_(l)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var a=i.main,l=i.transform,c=i.containerWidth,f=i.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),_="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(f/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:Re({},S.outer),children:[{tag:"g",attributes:Re({},S.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:Re(Re({},a.icon.attributes),S.path)}]}]}}}},dh={x:0,y:0,width:"100%",height:"100%"};function q_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||e)&&(r.attributes.fill="black"),r}function kA(r){return r.tag==="g"?r.children:[r]}var XA={hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-mask"),c=l?Ku(l.split(" ").map(function(f){return f.trim()})):fS();return c.prefix||(c.prefix=Sr()),i.mask=c,i.maskId=a.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var a=i.children,l=i.attributes,c=i.main,f=i.mask,h=i.maskId,m=i.transform,p=c.width,_=c.icon,v=f.width,g=f.icon,S=PT({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:Re(Re({},dh),{},{fill:"white"})},C=_.children?{children:_.children.map(q_)}:{},b={tag:"g",attributes:Re({},S.inner),children:[q_(Re({tag:_.tag,attributes:Re(Re({},_.attributes),S.path)},C))]},y={tag:"g",attributes:Re({},S.outer),children:[b]},P="mask-".concat(h||A_()),z="clip-".concat(h||A_()),w={tag:"mask",attributes:Re(Re({},dh),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:z},children:kA(g)},w]};return a.push(U,{tag:"rect",attributes:Re({fill:"currentColor","clip-path":"url(#".concat(z,")"),mask:"url(#".concat(P,")")},dh)}),{children:a,attributes:l}}}},WA={provides:function(e){var i=!1;yr.matchMedia&&(i=yr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],l={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:Re(Re({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=Re(Re({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Re(Re({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||h.children.push({tag:"animate",attributes:Re(Re({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Re(Re({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(h),a.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:Re(Re({},f),{},{values:"1;0;0;0;0;1;"})}]}),i||a.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Re(Re({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},qA={hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-symbol"),c=l===null?!1:l===""?!0:l;return i.symbol=c,i}}}},YA=[FT,CA,wA,DA,NA,HA,GA,VA,XA,WA,qA];eA(YA,{mixoutsTo:gi});gi.noAuto;var is=gi.config;gi.library;gi.dom;var xS=gi.parse;gi.findIconDefinition;gi.toHtml;var jA=gi.icon;gi.layer;gi.text;gi.counter;var hh={exports:{}},ul={},ph={exports:{}},mh={};var Y_;function ZA(){return Y_||(Y_=1,(function(r){function e(D,G){var $=D.length;D.push(G);e:for(;0<$;){var pe=$-1>>>1,ue=D[pe];if(0<l(ue,G))D[pe]=G,D[$]=ue,$=pe;else break e}}function i(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var G=D[0],$=D.pop();if($!==G){D[0]=$;e:for(var pe=0,ue=D.length,N=ue>>>1;pe<N;){var W=2*(pe+1)-1,ve=D[W],Se=W+1,Ae=D[Se];if(0>l(ve,$))Se<ue&&0>l(Ae,ve)?(D[pe]=Ae,D[Se]=$,pe=Se):(D[pe]=ve,D[W]=$,pe=W);else if(Se<ue&&0>l(Ae,$))D[pe]=Ae,D[Se]=$,pe=Se;else break e}}return G}function l(D,G){var $=D.sortIndex-G.sortIndex;return $!==0?$:D.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,C=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function w(D){for(var G=i(p);G!==null;){if(G.callback===null)a(p);else if(G.startTime<=D)a(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function U(D){if(C=!1,w(D),!E)if(i(m)!==null)E=!0,L||(L=!0,K());else{var G=i(p);G!==null&&q(U,G.startTime-D)}}var L=!1,F=-1,T=5,I=-1;function k(){return b?!0:!(r.unstable_now()-I<T)}function H(){if(b=!1,L){var D=r.unstable_now();I=D;var G=!0;try{e:{E=!1,C&&(C=!1,P(F),F=-1),S=!0;var $=g;try{t:{for(w(D),v=i(m);v!==null&&!(v.expirationTime>D&&k());){var pe=v.callback;if(typeof pe=="function"){v.callback=null,g=v.priorityLevel;var ue=pe(v.expirationTime<=D);if(D=r.unstable_now(),typeof ue=="function"){v.callback=ue,w(D),G=!0;break t}v===i(m)&&a(m),w(D)}else a(m);v=i(m)}if(v!==null)G=!0;else{var N=i(p);N!==null&&q(U,N.startTime-D),G=!1}}break e}finally{v=null,g=$,S=!1}G=void 0}}finally{G?K():L=!1}}}var K;if(typeof z=="function")K=function(){z(H)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=H,K=function(){de.postMessage(null)}}else K=function(){y(H,0)};function q(D,G){F=y(function(){D(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(D){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var $=g;g=G;try{return D()}finally{g=$}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=g;g=D;try{return G()}finally{g=$}},r.unstable_scheduleCallback=function(D,G,$){var pe=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?pe+$:pe):$=pe,D){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=$+ue,D={id:_++,callback:G,priorityLevel:D,startTime:$,expirationTime:ue,sortIndex:-1},$>pe?(D.sortIndex=$,e(p,D),i(m)===null&&D===i(p)&&(C?(P(F),F=-1):C=!0,q(U,$-pe))):(D.sortIndex=ue,e(m,D),E||S||(E=!0,L||(L=!0,K()))),D},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(D){var G=g;return function(){var $=g;g=G;try{return D.apply(this,arguments)}finally{g=$}}}})(mh)),mh}var j_;function KA(){return j_||(j_=1,ph.exports=ZA()),ph.exports}var gh={exports:{}},zn={};var Z_;function QA(){if(Z_)return zn;Z_=1;var r=am();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},zn.flushSync=function(m){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=_,a.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},zn.requestFormReset=function(m){a.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.8",zn}var K_;function JA(){if(K_)return gh.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gh.exports=QA(),gh.exports}var Q_;function $A(){if(Q_)return ul;Q_=1;var r=KA(),e=am(),i=JA();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var s=t,o=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var x=!1,R=u.child;R;){if(R===s){x=!0,s=u,o=d;break}if(R===o){x=!0,o=u,s=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===s){x=!0,s=d,o=u;break}if(R===o){x=!0,o=d,s=u;break}R=R.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),z=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case z:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var q=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},pe=[],ue=-1;function N(t){return{current:t}}function W(t){0>ue||(t.current=pe[ue],pe[ue]=null,ue--)}function ve(t,n){ue++,pe[ue]=t.current,t.current=n}var Se=N(null),Ae=N(null),ee=N(null),Me=N(null);function Ee(t,n){switch(ve(ee,n),ve(Ae,t),ve(Se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pv(n),t=Iv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Se),ve(Se,t)}function Ge(){W(Se),W(Ae),W(ee)}function st(t){t.memoizedState!==null&&ve(Me,t);var n=Se.current,s=Iv(n,t.type);n!==s&&(ve(Ae,t),ve(Se,s))}function Je(t){Ae.current===t&&(W(Se),W(Ae)),Me.current===t&&(W(Me),rl._currentValue=$)}var Zt,pt;function St(t){if(Zt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",pt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+pt}var bt=!1;function mt(t,n){if(!t||bt)return"";bt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(fe){var le=fe}Reflect.construct(t,[],be)}else{try{be.call()}catch(fe){le=fe}t.call(be.prototype)}}else{try{throw Error()}catch(fe){le=fe}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var B=x.split(`
`),ne=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ne.length)for(o=B.length-1,u=ne.length-1;1<=o&&0<=u&&B[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ne[u]){var _e=`
`+B[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{bt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?St(s):""}function an(t,n){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return mt(t.type,!1);case 11:return mt(t.type.render,!1);case 1:return mt(t.type,!0);case 31:return St("Activity");default:return""}}function rn(t){try{var n="",s=null;do n+=an(t,s),s=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var sn=Object.prototype.hasOwnProperty,dn=r.unstable_scheduleCallback,jt=r.unstable_cancelCallback,on=r.unstable_shouldYield,Z=r.unstable_requestPaint,Vt=r.unstable_now,Nt=r.unstable_getCurrentPriorityLevel,O=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,se=r.unstable_LowPriority,me=r.unstable_IdlePriority,Ce=r.log,Le=r.unstable_setDisableYieldValue,he=null,ge=null;function De(t){if(typeof Ce=="function"&&Le(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(he,t)}catch{}}var Be=Math.clz32?Math.clz32:Qe,Pe=Math.log,Ue=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Pe(t)/Ue|0)|0}var $e=256,ot=262144,Y=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=we(o):(x&=R,x!==0?u=we(x):s||(s=R&~t,s!==0&&(u=we(s))))):(R=o&~d,R!==0?u=we(R):x!==0?u=we(x):s||(s=o&~t,s!==0&&(u=we(s)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Ye(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $t(t,n,s,o,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,ne=t.hiddenUpdates;for(s=x&~s;0<s;){var _e=31-Be(s),be=1<<_e;R[_e]=0,B[_e]=-1;var le=ne[_e];if(le!==null)for(ne[_e]=null,_e=0;_e<le.length;_e++){var fe=le[_e];fe!==null&&(fe.lane&=-536870913)}s&=~be}o!==0&&Pt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Pt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ni(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var o=31-Be(s),u=1<<o;u&n|t[o]&n&&(t[o]|=n),s&=~u}}function ii(t,n){var s=n&-n;return s=(s&42)!==0?1:xo(s),(s&(t.suspendedLanes|n))!==0?0:s}function xo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function So(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:r_(t.type))}function ls(t,n){var s=G.p;try{return G.p=t,n()}finally{G.p=s}}var Xi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Xi,wn="__reactProps$"+Xi,qn="__reactContainer$"+Xi,Er="__reactEvents$"+Xi,Il="__reactListeners$"+Xi,zl="__reactHandles$"+Xi,Tr="__reactResources$"+Xi,Ba="__reactMarker$"+Xi;function Ha(t){delete t[mn],delete t[wn],delete t[Er],delete t[Il],delete t[zl]}function ra(t){var n=t[mn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[qn]||s[mn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=kv(t);t!==null;){if(s=t[mn])return s;t=kv(t)}return n}t=s,s=t.parentNode}return null}function sa(t){if(t=t[mn]||t[qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ar(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Ga(t){var n=t[Tr];return n||(n=t[Tr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Ba]=!0}var Fl=new Set,A={};function j(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)Fl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ie={};function Ve(t){return sn.call(Ie,t)?!0:sn.call(re,t)?!1:ae.test(t)?Ie[t]=!0:(re[t]=!0,!1)}function Oe(t,n,s){if(Ve(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function We(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Xe(t,n,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=ut(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return t&&(o=ut(t)?t.checked?"true":"false":t.value),t=o,t!==s?(n.setValue(t),!0):!1}function qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function zt(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(t,n,s,o,u,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?gt(t,x,et(n)):s!=null?gt(t,x,et(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function In(t,n,s,o,u,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ct(t);return}s=s!=null?""+et(s):"",n=n!=null?""+et(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ct(t)}function gt(t,n,s){n==="number"&&qt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function bn(t,n,s,o){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+et(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ai(t,n,s){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+et(s):""}function Di(t,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(q(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=et(n),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Ct(t)}function ri(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,s):typeof s!="number"||s===0||Ft.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Ni(t,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&s[u]!==o&&tn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&tn(t,d,n[d])}function Ot(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rr(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var nf=null;function af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cs=null,us=null;function Om(t){var n=sa(t);if(n&&(t=n.stateNode)){var s=t[wn]||null;e:switch(t=n.stateNode,n.type){case"input":if(He(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==t&&o.form===t.form){var u=o[wn]||null;if(!u)throw Error(a(90));He(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===t.form&&en(o)}break e;case"textarea":ai(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&bn(t,!!s.multiple,n,!1)}}}var rf=!1;function Pm(t,n,s){if(rf)return t(n,s);rf=!0;try{var o=t(n);return o}finally{if(rf=!1,(cs!==null||us!==null)&&(Tc(),cs&&(n=cs,t=us,us=cs=null,Om(n),t)))for(n=0;n<t.length;n++)Om(t[n])}}function bo(t,n){var s=t.stateNode;if(s===null)return null;var o=s[wn]||null;if(o===null)return null;s=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=!1;if(la)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{sf=!1}var ka=null,of=null,Bl=null;function Im(){if(Bl)return Bl;var t,n=of,s=n.length,o,u="value"in ka?ka.value:ka.textContent,d=u.length;for(t=0;t<s&&n[t]===u[t];t++);var x=s-t;for(o=1;o<=x&&n[s-o]===u[d-o];o++);return Bl=u.slice(t,1<o?1-o:void 0)}function Hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function zm(){return!1}function Yn(t){function n(s,o,u,d,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Gl:zm,this.isPropagationStopped=zm,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),n}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Yn(Cr),Eo=v({},Cr,{view:0,detail:0}),ob=Yn(Eo),lf,cf,To,kl=v({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(lf=t.screenX-To.screenX,cf=t.screenY-To.screenY):cf=lf=0,To=t),lf)},movementY:function(t){return"movementY"in t?t.movementY:cf}}),Fm=Yn(kl),lb=v({},kl,{dataTransfer:0}),cb=Yn(lb),ub=v({},Eo,{relatedTarget:0}),uf=Yn(ub),fb=v({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),db=Yn(fb),hb=v({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pb=Yn(hb),mb=v({},Cr,{data:0}),Bm=Yn(mb),gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xb(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=_b[t])?!!n[t]:!1}function ff(){return xb}var yb=v({},Eo,{key:function(t){if(t.key){var n=gb[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sb=Yn(yb),bb=v({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=Yn(bb),Mb=v({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),Eb=Yn(Mb),Tb=v({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ab=Yn(Tb),Rb=v({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cb=Yn(Rb),wb=v({},Cr,{newState:0,oldState:0}),Db=Yn(wb),Nb=[9,13,27,32],df=la&&"CompositionEvent"in window,Ao=null;la&&"documentMode"in document&&(Ao=document.documentMode);var Lb=la&&"TextEvent"in window&&!Ao,Gm=la&&(!df||Ao&&8<Ao&&11>=Ao),Vm=" ",km=!1;function Xm(t,n){switch(t){case"keyup":return Nb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Ub(t,n){switch(t){case"compositionend":return Wm(n);case"keypress":return n.which!==32?null:(km=!0,Vm);case"textInput":return t=n.data,t===Vm&&km?null:t;default:return null}}function Ob(t,n){if(fs)return t==="compositionend"||!df&&Xm(t,n)?(t=Im(),Bl=of=ka=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gm&&n.locale!=="ko"?null:n.data;default:return null}}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Pb[t.type]:n==="textarea"}function Ym(t,n,s,o){cs?us?us.push(o):us=[o]:cs=o,n=Lc(n,"onChange"),0<n.length&&(s=new Vl("onChange","change",null,s,o),t.push({event:s,listeners:n}))}var Ro=null,Co=null;function Ib(t){wv(t,0)}function Xl(t){var n=Ar(t);if(en(n))return t}function jm(t,n){if(t==="change")return n}var Zm=!1;if(la){var hf;if(la){var pf="oninput"in document;if(!pf){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),pf=typeof Km.oninput=="function"}hf=pf}else hf=!1;Zm=hf&&(!document.documentMode||9<document.documentMode)}function Qm(){Ro&&(Ro.detachEvent("onpropertychange",Jm),Co=Ro=null)}function Jm(t){if(t.propertyName==="value"&&Xl(Co)){var n=[];Ym(n,Co,t,af(t)),Pm(Ib,n)}}function zb(t,n,s){t==="focusin"?(Qm(),Ro=n,Co=s,Ro.attachEvent("onpropertychange",Jm)):t==="focusout"&&Qm()}function Fb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Co)}function Bb(t,n){if(t==="click")return Xl(n)}function Hb(t,n){if(t==="input"||t==="change")return Xl(n)}function Gb(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:Gb;function wo(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!sn.call(n,u)||!si(t[u],n[u]))return!1}return!0}function $m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eg(t,n){var s=$m(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=n&&o>=n)return{node:s,offset:n-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=$m(s)}}function tg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ng(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=qt(t.document)}return n}function mf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Vb=la&&"documentMode"in document&&11>=document.documentMode,ds=null,gf=null,Do=null,vf=!1;function ig(t,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vf||ds==null||ds!==qt(o)||(o=ds,"selectionStart"in o&&mf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Do&&wo(Do,o)||(Do=o,o=Lc(gf,"onSelect"),0<o.length&&(n=new Vl("onSelect","select",null,n,s),t.push({event:n,listeners:o}),n.target=ds)))}function wr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var hs={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},_f={},ag={};la&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Dr(t){if(_f[t])return _f[t];if(!hs[t])return t;var n=hs[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in ag)return _f[t]=n[s];return t}var rg=Dr("animationend"),sg=Dr("animationiteration"),og=Dr("animationstart"),kb=Dr("transitionrun"),Xb=Dr("transitionstart"),Wb=Dr("transitioncancel"),lg=Dr("transitionend"),cg=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function Li(t,n){cg.set(t,n),j(n,[t])}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],ps=0,yf=0;function ql(){for(var t=ps,n=yf=ps=0;n<t;){var s=vi[n];vi[n++]=null;var o=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var d=vi[n];if(vi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&ug(s,u,d)}}function Yl(t,n,s,o){vi[ps++]=t,vi[ps++]=n,vi[ps++]=s,vi[ps++]=o,yf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Sf(t,n,s,o){return Yl(t,n,s,o),jl(t)}function Nr(t,n){return Yl(t,null,null,n),jl(t)}function ug(t,n,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Be(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=s|536870912),d):null}function jl(t){if(50<Jo)throw Jo=0,Dd=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ms={};function qb(t,n,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,n,s,o){return new qb(t,n,s,o)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var s=t.alternate;return s===null?(s=oi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function fg(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zl(t,n,s,o,u,d){var x=0;if(o=t,typeof t=="function")bf(t)&&(x=1);else if(typeof t=="string")x=Q1(t,s,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=oi(31,s,n,u),t.elementType=I,t.lanes=d,t;case C:return Lr(s.children,u,d,n);case b:x=8,u|=24;break;case y:return t=oi(12,s,n,u|2),t.elementType=y,t.lanes=d,t;case U:return t=oi(13,s,n,u),t.elementType=U,t.lanes=d,t;case L:return t=oi(19,s,n,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:x=10;break e;case P:x=9;break e;case w:x=11;break e;case F:x=14;break e;case T:x=16,o=null;break e}x=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=oi(x,s,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Lr(t,n,s,o){return t=oi(7,t,o,n),t.lanes=s,t}function Mf(t,n,s){return t=oi(6,t,null,n),t.lanes=s,t}function dg(t){var n=oi(18,null,null,0);return n.stateNode=t,n}function Ef(t,n,s){return n=oi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hg=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var s=hg.get(t);return s!==void 0?s:(n={value:t,source:n,stack:rn(n)},hg.set(t,n),n)}return{value:t,source:n,stack:rn(n)}}var gs=[],vs=0,Kl=null,No=0,xi=[],yi=0,Xa=null,qi=1,Yi="";function ua(t,n){gs[vs++]=No,gs[vs++]=Kl,Kl=t,No=n}function pg(t,n,s){xi[yi++]=qi,xi[yi++]=Yi,xi[yi++]=Xa,Xa=t;var o=qi;t=Yi;var u=32-Be(o)-1;o&=~(1<<u),s+=1;var d=32-Be(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,qi=1<<32-Be(n)+u|s<<u|o,Yi=d+t}else qi=1<<d|s<<u|o,Yi=t}function Tf(t){t.return!==null&&(ua(t,1),pg(t,1,0))}function Af(t){for(;t===Kl;)Kl=gs[--vs],gs[vs]=null,No=gs[--vs],gs[vs]=null;for(;t===Xa;)Xa=xi[--yi],xi[yi]=null,Yi=xi[--yi],xi[yi]=null,qi=xi[--yi],xi[yi]=null}function mg(t,n){xi[yi++]=qi,xi[yi++]=Yi,xi[yi++]=Xa,qi=n.id,Yi=n.overflow,Xa=t}var Dn=null,Kt=null,Mt=!1,Wa=null,Si=!1,Rf=Error(a(519));function qa(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(_i(n,t)),Rf}function gg(t){var n=t.stateNode,s=t.type,o=t.memoizedProps;switch(n[mn]=t,n[wn]=o,s){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(s=0;s<el.length;s++)_t(el[s],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Di(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||Uv(n.textContent,s)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||qa(t,!0)}function vg(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function _s(t){if(t!==Dn)return!1;if(!Mt)return vg(t),Mt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Wd(t.type,t.memoizedProps)),s=!s),s&&Kt&&qa(t),vg(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Kt=Vv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Kt=Vv(t)}else n===27?(n=Kt,sr(t.type)?(t=Kd,Kd=null,Kt=t):Kt=n):Kt=Dn?Mi(t.stateNode.nextSibling):null;return!0}function Ur(){Kt=Dn=null,Mt=!1}function Cf(){var t=Wa;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Wa=null),t}function Lo(t){Wa===null?Wa=[t]:Wa.push(t)}var wf=N(null),Or=null,fa=null;function Ya(t,n,s){ve(wf,n._currentValue),n._currentValue=s}function da(t){t._currentValue=wf.current,W(wf)}function Df(t,n,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===s)break;t=t.return}}function Nf(t,n,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),Df(d.return,s,t),o||(x=null);break e}d=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Df(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function xs(t,n,s,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var R=u.type;si(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(rl):t=[rl])}u=u.return}t!==null&&Nf(n,t,s,o),n.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Or=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return _g(Or,t)}function Jl(t,n){return Or===null&&Pr(t),_g(t,n)}function _g(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},fa===null){if(t===null)throw Error(a(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return s}var Yb=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},jb=r.unstable_scheduleCallback,Zb=r.unstable_NormalPriority,vn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lf(){return{controller:new Yb,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&jb(Zb,function(){t.controller.abort()})}var Oo=null,Uf=0,ys=0,Ss=null;function Kb(t,n){if(Oo===null){var s=Oo=[];Uf=0,ys=Id(),Ss={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Uf++,n.then(xg,xg),n}function xg(){if(--Uf===0&&Oo!==null){Ss!==null&&(Ss.status="fulfilled");var t=Oo;Oo=null,ys=0,Ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Qb(t,n){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var yg=D.S;D.S=function(t,n){iv=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kb(t,n),yg!==null&&yg(t,n)};var Ir=N(null);function Of(){var t=Ir.current;return t!==null?t:Yt.pooledCache}function $l(t,n){n===null?ve(Ir,Ir.current):ve(Ir,n.pool)}function Sg(){var t=Of();return t===null?null:{parent:vn._currentValue,pool:t}}var bs=Error(a(460)),Pf=Error(a(474)),ec=Error(a(542)),tc={then:function(){}};function bg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mg(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(oa,oa),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tg(t),t;default:if(typeof n.status=="string")n.then(oa,oa);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tg(t),t}throw Fr=n,bs}}function zr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fr=s,bs):s}}var Fr=null;function Eg(){if(Fr===null)throw Error(a(459));var t=Fr;return Fr=null,t}function Tg(t){if(t===bs||t===ec)throw Error(a(483))}var Ms=null,Po=0;function nc(t){var n=Po;return Po+=1,Ms===null&&(Ms=[]),Mg(Ms,t,n)}function Io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ic(t,n){throw n.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ag(t){function n(Q,X){if(t){var te=Q.deletions;te===null?(Q.deletions=[X],Q.flags|=16):te.push(X)}}function s(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ca(Q,X),Q.index=0,Q.sibling=null,Q}function d(Q,X,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<X?(Q.flags|=67108866,X):te):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,te,ye){return X===null||X.tag!==6?(X=Mf(te,Q.mode,ye),X.return=Q,X):(X=u(X,te),X.return=Q,X)}function B(Q,X,te,ye){var tt=te.type;return tt===C?_e(Q,X,te.props.children,ye,te.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&zr(tt)===X.type)?(X=u(X,te.props),Io(X,te),X.return=Q,X):(X=Zl(te.type,te.key,te.props,null,Q.mode,ye),Io(X,te),X.return=Q,X)}function ne(Q,X,te,ye){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Ef(te,Q.mode,ye),X.return=Q,X):(X=u(X,te.children||[]),X.return=Q,X)}function _e(Q,X,te,ye,tt){return X===null||X.tag!==7?(X=Lr(te,Q.mode,ye,tt),X.return=Q,X):(X=u(X,te),X.return=Q,X)}function be(Q,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Mf(""+X,Q.mode,te),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return te=Zl(X.type,X.key,X.props,null,Q.mode,te),Io(te,X),te.return=Q,te;case E:return X=Ef(X,Q.mode,te),X.return=Q,X;case T:return X=zr(X),be(Q,X,te)}if(q(X)||K(X))return X=Lr(X,Q.mode,te,null),X.return=Q,X;if(typeof X.then=="function")return be(Q,nc(X),te);if(X.$$typeof===z)return be(Q,Jl(Q,X),te);ic(Q,X)}return null}function le(Q,X,te,ye){var tt=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return tt!==null?null:R(Q,X,""+te,ye);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===tt?B(Q,X,te,ye):null;case E:return te.key===tt?ne(Q,X,te,ye):null;case T:return te=zr(te),le(Q,X,te,ye)}if(q(te)||K(te))return tt!==null?null:_e(Q,X,te,ye,null);if(typeof te.then=="function")return le(Q,X,nc(te),ye);if(te.$$typeof===z)return le(Q,X,Jl(Q,te),ye);ic(Q,te)}return null}function fe(Q,X,te,ye,tt){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Q=Q.get(te)||null,R(X,Q,""+ye,tt);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case S:return Q=Q.get(ye.key===null?te:ye.key)||null,B(X,Q,ye,tt);case E:return Q=Q.get(ye.key===null?te:ye.key)||null,ne(X,Q,ye,tt);case T:return ye=zr(ye),fe(Q,X,te,ye,tt)}if(q(ye)||K(ye))return Q=Q.get(te)||null,_e(X,Q,ye,tt,null);if(typeof ye.then=="function")return fe(Q,X,te,nc(ye),tt);if(ye.$$typeof===z)return fe(Q,X,te,Jl(X,ye),tt);ic(X,ye)}return null}function qe(Q,X,te,ye){for(var tt=null,wt=null,je=X,dt=X=0,yt=null;je!==null&&dt<te.length;dt++){je.index>dt?(yt=je,je=null):yt=je.sibling;var Dt=le(Q,je,te[dt],ye);if(Dt===null){je===null&&(je=yt);break}t&&je&&Dt.alternate===null&&n(Q,je),X=d(Dt,X,dt),wt===null?tt=Dt:wt.sibling=Dt,wt=Dt,je=yt}if(dt===te.length)return s(Q,je),Mt&&ua(Q,dt),tt;if(je===null){for(;dt<te.length;dt++)je=be(Q,te[dt],ye),je!==null&&(X=d(je,X,dt),wt===null?tt=je:wt.sibling=je,wt=je);return Mt&&ua(Q,dt),tt}for(je=o(je);dt<te.length;dt++)yt=fe(je,Q,dt,te[dt],ye),yt!==null&&(t&&yt.alternate!==null&&je.delete(yt.key===null?dt:yt.key),X=d(yt,X,dt),wt===null?tt=yt:wt.sibling=yt,wt=yt);return t&&je.forEach(function(fr){return n(Q,fr)}),Mt&&ua(Q,dt),tt}function at(Q,X,te,ye){if(te==null)throw Error(a(151));for(var tt=null,wt=null,je=X,dt=X=0,yt=null,Dt=te.next();je!==null&&!Dt.done;dt++,Dt=te.next()){je.index>dt?(yt=je,je=null):yt=je.sibling;var fr=le(Q,je,Dt.value,ye);if(fr===null){je===null&&(je=yt);break}t&&je&&fr.alternate===null&&n(Q,je),X=d(fr,X,dt),wt===null?tt=fr:wt.sibling=fr,wt=fr,je=yt}if(Dt.done)return s(Q,je),Mt&&ua(Q,dt),tt;if(je===null){for(;!Dt.done;dt++,Dt=te.next())Dt=be(Q,Dt.value,ye),Dt!==null&&(X=d(Dt,X,dt),wt===null?tt=Dt:wt.sibling=Dt,wt=Dt);return Mt&&ua(Q,dt),tt}for(je=o(je);!Dt.done;dt++,Dt=te.next())Dt=fe(je,Q,dt,Dt.value,ye),Dt!==null&&(t&&Dt.alternate!==null&&je.delete(Dt.key===null?dt:Dt.key),X=d(Dt,X,dt),wt===null?tt=Dt:wt.sibling=Dt,wt=Dt);return t&&je.forEach(function(lM){return n(Q,lM)}),Mt&&ua(Q,dt),tt}function Wt(Q,X,te,ye){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var tt=te.key;X!==null;){if(X.key===tt){if(tt=te.type,tt===C){if(X.tag===7){s(Q,X.sibling),ye=u(X,te.props.children),ye.return=Q,Q=ye;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&zr(tt)===X.type){s(Q,X.sibling),ye=u(X,te.props),Io(ye,te),ye.return=Q,Q=ye;break e}s(Q,X);break}else n(Q,X);X=X.sibling}te.type===C?(ye=Lr(te.props.children,Q.mode,ye,te.key),ye.return=Q,Q=ye):(ye=Zl(te.type,te.key,te.props,null,Q.mode,ye),Io(ye,te),ye.return=Q,Q=ye)}return x(Q);case E:e:{for(tt=te.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(Q,X.sibling),ye=u(X,te.children||[]),ye.return=Q,Q=ye;break e}else{s(Q,X);break}else n(Q,X);X=X.sibling}ye=Ef(te,Q.mode,ye),ye.return=Q,Q=ye}return x(Q);case T:return te=zr(te),Wt(Q,X,te,ye)}if(q(te))return qe(Q,X,te,ye);if(K(te)){if(tt=K(te),typeof tt!="function")throw Error(a(150));return te=tt.call(te),at(Q,X,te,ye)}if(typeof te.then=="function")return Wt(Q,X,nc(te),ye);if(te.$$typeof===z)return Wt(Q,X,Jl(Q,te),ye);ic(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(s(Q,X.sibling),ye=u(X,te),ye.return=Q,Q=ye):(s(Q,X),ye=Mf(te,Q.mode,ye),ye.return=Q,Q=ye),x(Q)):s(Q,X)}return function(Q,X,te,ye){try{Po=0;var tt=Wt(Q,X,te,ye);return Ms=null,tt}catch(je){if(je===bs||je===ec)throw je;var wt=oi(29,je,null,Q.mode);return wt.lanes=ye,wt.return=Q,wt}}}var Br=Ag(!0),Rg=Ag(!1),ja=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=jl(t),ug(t,null,s),n}return Yl(t,o,n,s),jl(t)}function zo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ni(t,s)}}function Ff(t,n){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Bf=!1;function Fo(){if(Bf){var t=Ss;if(t!==null)throw t}}function Bo(t,n,s,o){Bf=!1;var u=t.updateQueue;ja=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,ne=B.next;B.next=null,x===null?d=ne:x.next=ne,x=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==x&&(R===null?_e.firstBaseUpdate=ne:R.next=ne,_e.lastBaseUpdate=B))}if(d!==null){var be=u.baseState;x=0,_e=ne=B=null,R=d;do{var le=R.lane&-536870913,fe=le!==R.lane;if(fe?(xt&le)===le:(o&le)===le){le!==0&&le===ys&&(Bf=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,at=R;le=n;var Wt=s;switch(at.tag){case 1:if(qe=at.payload,typeof qe=="function"){be=qe.call(Wt,be,le);break e}be=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=at.payload,le=typeof qe=="function"?qe.call(Wt,be,le):qe,le==null)break e;be=v({},be,le);break e;case 2:ja=!0}}le=R.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ne=_e=fe,B=be):_e=_e.next=fe,x|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);_e===null&&(B=be),u.baseState=B,u.firstBaseUpdate=ne,u.lastBaseUpdate=_e,d===null&&(u.shared.lanes=0),tr|=x,t.lanes=x,t.memoizedState=be}}function Cg(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function wg(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Cg(s[t],n)}var Es=N(null),ac=N(0);function Dg(t,n){t=Sa,ve(ac,t),ve(Es,n),Sa=t|n.baseLanes}function Hf(){ve(ac,Sa),ve(Es,Es.current)}function Gf(){Sa=ac.current,W(Es),W(ac)}var li=N(null),bi=null;function Qa(t){var n=t.alternate;ve(hn,hn.current&1),ve(li,t),bi===null&&(n===null||Es.current!==null||n.memoizedState!==null)&&(bi=t)}function Vf(t){ve(hn,hn.current),ve(li,t),bi===null&&(bi=t)}function Ng(t){t.tag===22?(ve(hn,hn.current),ve(li,t),bi===null&&(bi=t)):Ja()}function Ja(){ve(hn,hn.current),ve(li,li.current)}function ci(t){W(li),bi===t&&(bi=null),W(hn)}var hn=N(0);function rc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||jd(s)||Zd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,ft=null,kt=null,_n=null,sc=!1,Ts=!1,Hr=!1,oc=0,Ho=0,As=null,Jb=0;function ln(){throw Error(a(321))}function kf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!si(t[s],n[s]))return!1;return!0}function Xf(t,n,s,o,u,d){return ha=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?p0:rd,Hr=!1,d=s(o,u),Hr=!1,Ts&&(d=Ug(n,s,o,u)),Lg(t),d}function Lg(t){D.H=ko;var n=kt!==null&&kt.next!==null;if(ha=0,_n=kt=ft=null,sc=!1,Ho=0,As=null,n)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&Ql(t)&&(xn=!0))}function Ug(t,n,s,o){ft=t;var u=0;do{if(Ts&&(As=null),Ho=0,Ts=!1,25<=u)throw Error(a(301));if(u+=1,_n=kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}D.H=m0,d=n(s,o)}while(Ts);return d}function $b(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?Go(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Wf(){var t=oc!==0;return oc=0,t}function qf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Yf(t){if(sc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sc=!1}ha=0,_n=kt=ft=null,Ts=!1,Ho=oc=0,As=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ft.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(kt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=_n===null?ft.memoizedState:_n.next;if(n!==null)_n=n,kt=t;else{if(t===null)throw ft.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},_n===null?ft.memoizedState=_n=t:_n=_n.next=t}return _n}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var n=Ho;return Ho+=1,As===null&&(As=[]),t=Mg(As,t,n),n=ft,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?p0:rd),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===z)return Nn(t)}throw Error(a(438,String(t)))}function jf(t){var n=null,s=ft.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=lc(),ft.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),o=0;o<t;o++)s[o]=k;return n.index++,s}function pa(t,n){return typeof n=="function"?n(t):n}function uc(t){var n=pn();return Zf(n,kt,t)}function Zf(t,n,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=x=null,B=null,ne=n,_e=!1;do{var be=ne.lane&-536870913;if(be!==ne.lane?(xt&be)===be:(ha&be)===be){var le=ne.revertLane;if(le===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),be===ys&&(_e=!0);else if((ha&le)===le){ne=ne.next,le===ys&&(_e=!0);continue}else be={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(R=B=be,x=d):B=B.next=be,ft.lanes|=le,tr|=le;be=ne.action,Hr&&s(d,be),d=ne.hasEagerState?ne.eagerState:s(d,be)}else le={lane:be,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(R=B=le,x=d):B=B.next=le,ft.lanes|=be,tr|=be;ne=ne.next}while(ne!==null&&ne!==n);if(B===null?x=d:B.next=R,!si(d,t.memoizedState)&&(xn=!0,_e&&(s=Ss,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Kf(t){var n=pn(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);si(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,o]}function Og(t,n,s){var o=ft,u=pn(),d=Mt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var x=!si((kt||u).memoizedState,s);if(x&&(u.memoizedState=s,xn=!0),u=u.queue,$f(zg.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Rs(9,{destroy:void 0},Ig.bind(null,o,u,s,n),null),Yt===null)throw Error(a(349));d||(ha&127)!==0||Pg(o,n,s)}return s}function Pg(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ft.updateQueue,n===null?(n=lc(),ft.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Ig(t,n,s,o){n.value=s,n.getSnapshot=o,Fg(n)&&Bg(t)}function zg(t,n,s){return s(function(){Fg(n)&&Bg(t)})}function Fg(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!si(t,s)}catch{return!0}}function Bg(t){var n=Nr(t,2);n!==null&&Jn(n,t,2)}function Qf(t){var n=Vn();if(typeof t=="function"){var s=t;if(t=s(),Hr){De(!0);try{s()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function Hg(t,n,s,o){return t.baseState=s,Zf(t,kt,typeof o=="function"?o:pa)}function e1(t,n,s,o,u){if(hc(t))throw Error(a(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};D.T!==null?s(!0):d.isTransition=!1,o(d),s=n.pending,s===null?(d.next=n.pending=d,Gg(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Gg(t,n){var s=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=D.T,x={};D.T=x;try{var R=s(u,o),B=D.S;B!==null&&B(x,R),Vg(t,n,R)}catch(ne){Jf(t,n,ne)}finally{d!==null&&x.types!==null&&(d.types=x.types),D.T=d}}else try{d=s(u,o),Vg(t,n,d)}catch(ne){Jf(t,n,ne)}}function Vg(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){kg(t,n,o)},function(o){return Jf(t,n,o)}):kg(t,n,s)}function kg(t,n,s){n.status="fulfilled",n.value=s,Xg(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Gg(t,s)))}function Jf(t,n,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,Xg(n),n=n.next;while(n!==o)}t.action=null}function Xg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Wg(t,n){return n}function qg(t,n){if(Mt){var s=Yt.formState;if(s!==null){e:{var o=ft;if(Mt){if(Kt){t:{for(var u=Kt,d=Si;u.nodeType!==8;){if(!d){u=null;break t}if(u=Mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=Mi(u.nextSibling),o=u.data==="F!";break e}}qa(o)}o=!1}o&&(n=s[0])}}return s=Vn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wg,lastRenderedState:n},s.queue=o,s=f0.bind(null,ft,o),o.dispatch=s,o=Qf(!1),d=ad.bind(null,ft,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,s=e1.bind(null,ft,u,d,s),u.dispatch=s,o.memoizedState=t,[n,s,!1]}function Yg(t){var n=pn();return jg(n,kt,t)}function jg(t,n,s){if(n=Zf(t,n,Wg)[0],t=uc(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Go(n)}catch(x){throw x===bs?ec:x}else o=n;n=pn();var u=n.queue,d=u.dispatch;return s!==n.memoizedState&&(ft.flags|=2048,Rs(9,{destroy:void 0},t1.bind(null,u,s),null)),[o,d,t]}function t1(t,n){t.action=n}function Zg(t){var n=pn(),s=kt;if(s!==null)return jg(n,s,t);pn(),n=n.memoizedState,s=pn();var o=s.queue.dispatch;return s.memoizedState=t,[n,o,!1]}function Rs(t,n,s,o){return t={tag:t,create:s,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=lc(),ft.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,n.lastEffect=t),t}function Kg(){return pn().memoizedState}function fc(t,n,s,o){var u=Vn();ft.flags|=t,u.memoizedState=Rs(1|n,{destroy:void 0},s,o===void 0?null:o)}function dc(t,n,s,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;kt!==null&&o!==null&&kf(o,kt.memoizedState.deps)?u.memoizedState=Rs(n,d,s,o):(ft.flags|=t,u.memoizedState=Rs(1|n,d,s,o))}function Qg(t,n){fc(8390656,8,t,n)}function $f(t,n){dc(2048,8,t,n)}function n1(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=lc(),ft.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function Jg(t){var n=pn().memoizedState;return n1({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function $g(t,n){return dc(4,2,t,n)}function e0(t,n){return dc(4,4,t,n)}function t0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function n0(t,n,s){s=s!=null?s.concat([t]):null,dc(4,4,t0.bind(null,n,t),s)}function ed(){}function i0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&kf(n,o[1])?o[0]:(s.memoizedState=[t,n],t)}function a0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&kf(n,o[1]))return o[0];if(o=t(),Hr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,n],o}function td(t,n,s){return s===void 0||(ha&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=rv(),ft.lanes|=t,tr|=t,s)}function r0(t,n,s,o){return si(s,n)?s:Es.current!==null?(t=td(t,s,o),si(t,n)||(xn=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(xt&261930)===0?(xn=!0,t.memoizedState=s):(t=rv(),ft.lanes|=t,tr|=t,n)}function s0(t,n,s,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var x=D.T,R={};D.T=R,ad(t,!1,n,s);try{var B=u(),ne=D.S;if(ne!==null&&ne(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var _e=Qb(B,o);Vo(t,n,_e,di(t))}else Vo(t,n,o,di(t))}catch(be){Vo(t,n,{then:function(){},status:"rejected",reason:be},di())}finally{G.p=d,x!==null&&R.types!==null&&(x.types=R.types),D.T=x}}function i1(){}function nd(t,n,s,o){if(t.tag!==5)throw Error(a(476));var u=o0(t).queue;s0(t,u,n,$,s===null?i1:function(){return l0(t),s(o)})}function o0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function l0(t){var n=o0(t);n.next===null&&(n=t.alternate.memoizedState),Vo(t,n.next.queue,{},di())}function id(){return Nn(rl)}function c0(){return pn().memoizedState}function u0(){return pn().memoizedState}function a1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=di();t=Za(s);var o=Ka(n,t,s);o!==null&&(Jn(o,n,s),zo(o,n,s)),n={cache:Lf()},t.payload=n;return}n=n.return}}function r1(t,n,s){var o=di();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hc(t)?d0(n,s):(s=Sf(t,n,s,o),s!==null&&(Jn(s,t,o),h0(s,n,o)))}function f0(t,n,s){var o=di();Vo(t,n,s,o)}function Vo(t,n,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(hc(t))d0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,s);if(u.hasEagerState=!0,u.eagerState=R,si(R,x))return Yl(t,n,u,0),Yt===null&&ql(),!1}catch{}if(s=Sf(t,n,u,o),s!==null)return Jn(s,t,o),h0(s,n,o),!0}return!1}function ad(t,n,s,o){if(o={lane:2,revertLane:Id(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(n)throw Error(a(479))}else n=Sf(t,s,o,2),n!==null&&Jn(n,t,2)}function hc(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function d0(t,n){Ts=sc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function h0(t,n,s){if((s&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ni(t,s)}}var ko={readContext:Nn,use:cc,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};ko.useEffectEvent=ln;var p0={readContext:Nn,use:cc,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:Qg,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,fc(4194308,4,t0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return fc(4194308,4,t,n)},useInsertionEffect:function(t,n){fc(4,2,t,n)},useMemo:function(t,n){var s=Vn();n=n===void 0?null:n;var o=t();if(Hr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,n],o},useReducer:function(t,n,s){var o=Vn();if(s!==void 0){var u=s(n);if(Hr){De(!0);try{s(n)}finally{De(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=r1.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=Qf(t);var n=t.queue,s=f0.bind(null,ft,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:ed,useDeferredValue:function(t,n){var s=Vn();return td(s,t,n)},useTransition:function(){var t=Qf(!1);return t=s0.bind(null,ft,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var o=ft,u=Vn();if(Mt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Yt===null)throw Error(a(349));(xt&127)!==0||Pg(o,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,Qg(zg.bind(null,o,d,t),[t]),o.flags|=2048,Rs(9,{destroy:void 0},Ig.bind(null,o,d,s,n),null),s},useId:function(){var t=Vn(),n=Yt.identifierPrefix;if(Mt){var s=Yi,o=qi;s=(o&~(1<<32-Be(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=oc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=Jb++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:id,useFormState:qg,useActionState:qg,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ad.bind(null,ft,!0,s),s.dispatch=n,[t,n]},useMemoCache:jf,useCacheRefresh:function(){return Vn().memoizedState=a1.bind(null,ft)},useEffectEvent:function(t){var n=Vn(),s={impl:t};return n.memoizedState=s,function(){if((Lt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},rd={readContext:Nn,use:cc,useCallback:i0,useContext:Nn,useEffect:$f,useImperativeHandle:n0,useInsertionEffect:$g,useLayoutEffect:e0,useMemo:a0,useReducer:uc,useRef:Kg,useState:function(){return uc(pa)},useDebugValue:ed,useDeferredValue:function(t,n){var s=pn();return r0(s,kt.memoizedState,t,n)},useTransition:function(){var t=uc(pa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:Og,useId:c0,useHostTransitionStatus:id,useFormState:Yg,useActionState:Yg,useOptimistic:function(t,n){var s=pn();return Hg(s,kt,t,n)},useMemoCache:jf,useCacheRefresh:u0};rd.useEffectEvent=Jg;var m0={readContext:Nn,use:cc,useCallback:i0,useContext:Nn,useEffect:$f,useImperativeHandle:n0,useInsertionEffect:$g,useLayoutEffect:e0,useMemo:a0,useReducer:Kf,useRef:Kg,useState:function(){return Kf(pa)},useDebugValue:ed,useDeferredValue:function(t,n){var s=pn();return kt===null?td(s,t,n):r0(s,kt.memoizedState,t,n)},useTransition:function(){var t=Kf(pa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:Og,useId:c0,useHostTransitionStatus:id,useFormState:Zg,useActionState:Zg,useOptimistic:function(t,n){var s=pn();return kt!==null?Hg(s,kt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:jf,useCacheRefresh:u0};m0.useEffectEvent=Jg;function sd(t,n,s,o){n=t.memoizedState,s=s(o,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var od={enqueueSetState:function(t,n,s){t=t._reactInternals;var o=di(),u=Za(o);u.payload=n,s!=null&&(u.callback=s),n=Ka(t,u,o),n!==null&&(Jn(n,t,o),zo(n,t,o))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var o=di(),u=Za(o);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Ka(t,u,o),n!==null&&(Jn(n,t,o),zo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=di(),o=Za(s);o.tag=2,n!=null&&(o.callback=n),n=Ka(t,o,s),n!==null&&(Jn(n,t,s),zo(n,t,s))}};function g0(t,n,s,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!wo(s,o)||!wo(u,d):!0}function v0(t,n,s,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==t&&od.enqueueReplaceState(n,n.state,null)}function Gr(t,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function _0(t){Wl(t)}function x0(t){console.error(t)}function y0(t){Wl(t)}function pc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function S0(t,n,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ld(t,n,s){return s=Za(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(t,n)},s}function b0(t){return t=Za(t),t.tag=3,t}function M0(t,n,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){S0(n,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){S0(n,s,o),typeof u!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function s1(t,n,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&xs(n,s,u,!0),s=li.current,s!==null){switch(s.tag){case 31:case 13:return bi===null?Ac():s.alternate===null&&cn===0&&(cn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===tc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),Ud(t,o,u)),!1;case 22:return s.flags|=65536,o===tc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),Ud(t,o,u)),!1}throw Error(a(435,s.tag))}return Ud(t,o,u),Ac(),!1}if(Mt)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Rf&&(t=Error(a(422),{cause:o}),Lo(_i(t,s)))):(o!==Rf&&(n=Error(a(423),{cause:o}),Lo(_i(n,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=_i(o,s),u=ld(t.stateNode,o,u),Ff(t,u),cn!==4&&(cn=2)),!1;var d=Error(a(520),{cause:o});if(d=_i(d,s),Qo===null?Qo=[d]:Qo.push(d),cn!==4&&(cn=2),n===null)return!0;o=_i(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=ld(s.stateNode,o,t),Ff(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(nr===null||!nr.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=b0(u),M0(u,t,s,o),Ff(s,u),!1}s=s.return}while(s!==null);return!1}var cd=Error(a(461)),xn=!1;function Ln(t,n,s,o){n.child=t===null?Rg(n,null,s,o):Br(n,t.child,s,o)}function E0(t,n,s,o,u){s=s.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Pr(n),o=Xf(t,n,s,x,d,u),R=Wf(),t!==null&&!xn?(qf(t,n,u),ma(t,n,u)):(Mt&&R&&Tf(n),n.flags|=1,Ln(t,n,o,u),n.child)}function T0(t,n,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!bf(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,A0(t,n,d,o,u)):(t=Zl(s.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!vd(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:wo,s(x,o)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ca(d,o),t.ref=n.ref,t.return=n,n.child=t}function A0(t,n,s,o,u){if(t!==null){var d=t.memoizedProps;if(wo(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,vd(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ma(t,n,u)}return ud(t,n,s,o,u)}function R0(t,n,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return C0(t,n,d,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(n,d!==null?d.cachePool:null),d!==null?Dg(n,d):Hf(),Ng(n);else return o=n.lanes=536870912,C0(t,n,d!==null?d.baseLanes|s:s,s,o)}else d!==null?($l(n,d.cachePool),Dg(n,d),Ja(),n.memoizedState=null):(t!==null&&$l(n,null),Hf(),Ja());return Ln(t,n,u,s),n.child}function Xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function C0(t,n,s,o,u){var d=Of();return d=d===null?null:{parent:vn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&$l(n,null),Hf(),Ng(n),t!==null&&xs(t,n,o,!0),n.childLanes=u,null}function mc(t,n){return n=vc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function w0(t,n,s){return Br(n,t.child,null,s),t=mc(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function o1(t,n,s){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=mc(n,o),n.lanes=536870912,Xo(null,t);if(Vf(n),(t=Kt)?(t=Gv(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=dg(t),s.return=n,n.child=s,Dn=n,Kt=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return mc(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(Vf(n),u)if(n.flags&256)n.flags&=-257,n=w0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(xn||xs(t,n,s,!1),u=(s&t.childLanes)!==0,xn||u){if(o=Yt,o!==null&&(x=ii(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Nr(t,x),Jn(o,t,x),cd;Ac(),n=w0(t,n,s)}else t=d.treeContext,Kt=Mi(x.nextSibling),Dn=n,Mt=!0,Wa=null,Si=!1,t!==null&&mg(n,t),n=mc(n,o),n.flags|=4096;return n}return t=ca(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function ud(t,n,s,o,u){return Pr(n),s=Xf(t,n,s,o,void 0,u),o=Wf(),t!==null&&!xn?(qf(t,n,u),ma(t,n,u)):(Mt&&o&&Tf(n),n.flags|=1,Ln(t,n,s,u),n.child)}function D0(t,n,s,o,u,d){return Pr(n),n.updateQueue=null,s=Ug(n,o,s,u),Lg(t),o=Wf(),t!==null&&!xn?(qf(t,n,d),ma(t,n,d)):(Mt&&o&&Tf(n),n.flags|=1,Ln(t,n,s,d),n.child)}function N0(t,n,s,o,u){if(Pr(n),n.stateNode===null){var d=ms,x=s.contextType;typeof x=="object"&&x!==null&&(d=Nn(x)),d=new s(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=od,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},If(n),x=s.contextType,d.context=typeof x=="object"&&x!==null?Nn(x):ms,d.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(sd(n,s,x,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&od.enqueueReplaceState(d,d.state,null),Bo(n,o,d,u),Fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,B=Gr(s,R);d.props=B;var ne=d.context,_e=s.contextType;x=ms,typeof _e=="object"&&_e!==null&&(x=Nn(_e));var be=s.getDerivedStateFromProps;_e=typeof be=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ne!==x)&&v0(n,d,o,x),ja=!1;var le=n.memoizedState;d.state=le,Bo(n,o,d,u),Fo(),ne=n.memoizedState,R||le!==ne||ja?(typeof be=="function"&&(sd(n,s,be,o),ne=n.memoizedState),(B=ja||g0(n,s,B,o,le,ne,x))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=x,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,zf(t,n),x=n.memoizedProps,_e=Gr(s,x),d.props=_e,be=n.pendingProps,le=d.context,ne=s.contextType,B=ms,typeof ne=="object"&&ne!==null&&(B=Nn(ne)),R=s.getDerivedStateFromProps,(ne=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==be||le!==B)&&v0(n,d,o,B),ja=!1,le=n.memoizedState,d.state=le,Bo(n,o,d,u),Fo();var fe=n.memoizedState;x!==be||le!==fe||ja||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof R=="function"&&(sd(n,s,R,o),fe=n.memoizedState),(_e=ja||g0(n,s,_e,o,le,fe,B)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,fe,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,fe,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),d.props=o,d.state=fe,d.context=B,o=_e):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,gc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Br(n,t.child,null,u),n.child=Br(n,null,s,u)):Ln(t,n,s,u),n.memoizedState=d.state,t=n.child):t=ma(t,n,u),t}function L0(t,n,s,o){return Ur(),n.flags|=256,Ln(t,n,s,o),n.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(t){return{baseLanes:t,cachePool:Sg()}}function hd(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=fi),t}function U0(t,n,s){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?Qa(n):Ja(),(t=Kt)?(t=Gv(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=dg(t),s.return=n,n.child=s,Dn=n,Kt=null)):t=null,t===null)throw qa(n);return Zd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ja(),u=n.mode,R=vc({mode:"hidden",children:R},u),o=Lr(o,u,s,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=dd(s),o.childLanes=hd(t,x,s),n.memoizedState=fd,Xo(null,o)):(Qa(n),pd(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=md(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=o.fallback,u=n.mode,o=vc({mode:"visible",children:o.children},u),R=Lr(R,u,s,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Br(n,t.child,null,s),o=n.child,o.memoizedState=dd(s),o.childLanes=hd(t,x,s),n.memoizedState=fd,n=Xo(null,o));else if(Qa(n),Zd(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ne=x.dgst;x=ne,o=Error(a(419)),o.stack="",o.digest=x,Lo({value:o,source:null,stack:null}),n=md(t,n,s)}else if(xn||xs(t,n,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=Yt,x!==null&&(o=ii(x,s),o!==0&&o!==B.retryLane))throw B.retryLane=o,Nr(t,o),Jn(x,t,o),cd;jd(R)||Ac(),n=md(t,n,s)}else jd(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Kt=Mi(R.nextSibling),Dn=n,Mt=!0,Wa=null,Si=!1,t!==null&&mg(n,t),n=pd(n,o.children),n.flags|=4096);return n}return u?(Ja(),R=o.fallback,u=n.mode,B=t.child,ne=B.sibling,o=ca(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ne!==null?R=ca(ne,R):(R=Lr(R,u,s,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Xo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=dd(s):(u=R.cachePool,u!==null?(B=vn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Sg(),R={baseLanes:R.baseLanes|s,cachePool:u}),o.memoizedState=R,o.childLanes=hd(t,x,s),n.memoizedState=fd,Xo(t.child,o)):(Qa(n),s=t.child,t=s.sibling,s=ca(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function pd(t,n){return n=vc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vc(t,n){return t=oi(22,t,null,n),t.lanes=0,t}function md(t,n,s){return Br(n,t.child,null,s),t=pd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function O0(t,n,s){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Df(t.return,n,s)}function gd(t,n,s,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function P0(t,n,s){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=hn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,ve(hn,x),Ln(t,n,o,s),o=Mt?No:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O0(t,s,n);else if(t.tag===19)O0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),gd(n,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&rc(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}gd(n,!0,s,null,d,o);break;case"together":gd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),tr|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(xs(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,s=ca(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=ca(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function vd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function l1(t,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ya(n,vn,t.memoizedState.cache),Ur();break;case 27:case 5:st(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?U0(t,n,s):(Qa(n),t=ma(t,n,s),t!==null?t.sibling:null);Qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(xs(t,n,s,!1),o=(s&n.childLanes)!==0),u){if(o)return P0(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(hn,hn.current),o)break;return null;case 22:return n.lanes=0,R0(t,n,s,n.pendingProps);case 24:Ya(n,vn,t.memoizedState.cache)}return ma(t,n,s)}function I0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!vd(t,s)&&(n.flags&128)===0)return xn=!1,l1(t,n,s);xn=(t.flags&131072)!==0}else xn=!1,Mt&&(n.flags&1048576)!==0&&pg(n,No,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=zr(n.elementType),n.type=t,typeof t=="function")bf(t)?(o=Gr(t,o),n.tag=1,n=N0(null,n,t,o,s)):(n.tag=0,n=ud(null,n,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=E0(null,n,t,o,s);break e}else if(u===F){n.tag=14,n=T0(null,n,t,o,s);break e}}throw n=de(t)||t,Error(a(306,n,""))}}return n;case 0:return ud(t,n,n.type,n.pendingProps,s);case 1:return o=n.type,u=Gr(o,n.pendingProps),N0(t,n,o,u,s);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,zf(t,n),Bo(n,o,null,s);var x=n.memoizedState;if(o=x.cache,Ya(n,vn,o),o!==d.cache&&Nf(n,[vn],s,!0),Fo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=L0(t,n,o,s);break e}else if(o!==u){u=_i(Error(a(424)),n),Lo(u),n=L0(t,n,o,s);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=Mi(t.firstChild),Dn=n,Mt=!0,Wa=null,Si=!0,s=Rg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ur(),o===u){n=ma(t,n,s);break e}Ln(t,n,o,s)}n=n.child}return n;case 26:return gc(t,n),t===null?(s=Yv(n.type,null,n.pendingProps,null))?n.memoizedState=s:Mt||(s=n.type,t=n.pendingProps,o=Uc(ee.current).createElement(s),o[mn]=n,o[wn]=t,Un(o,s,t),gn(o),n.stateNode=o):n.memoizedState=Yv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&Mt&&(o=n.stateNode=Xv(n.type,n.pendingProps,ee.current),Dn=n,Si=!0,u=Kt,sr(n.type)?(Kd=u,Kt=Mi(o.firstChild)):Kt=u),Ln(t,n,n.pendingProps.children,s),gc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Kt)&&(o=F1(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Dn=n,Kt=Mi(o.firstChild),Si=!1,u=!0):u=!1),u||qa(n)),st(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,Wd(u,d)?o=null:x!==null&&Wd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Xf(t,n,$b,null,null,s),rl._currentValue=u),gc(t,n),Ln(t,n,o,s),n.child;case 6:return t===null&&Mt&&((t=s=Kt)&&(s=B1(s,n.pendingProps,Si),s!==null?(n.stateNode=s,Dn=n,Kt=null,t=!0):t=!1),t||qa(n)),null;case 13:return U0(t,n,s);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Br(n,null,o,s):Ln(t,n,o,s),n.child;case 11:return E0(t,n,n.type,n.pendingProps,s);case 7:return Ln(t,n,n.pendingProps,s),n.child;case 8:return Ln(t,n,n.pendingProps.children,s),n.child;case 12:return Ln(t,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),Ln(t,n,o.children,s),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Pr(n),u=Nn(u),o=o(u),n.flags|=1,Ln(t,n,o,s),n.child;case 14:return T0(t,n,n.type,n.pendingProps,s);case 15:return A0(t,n,n.type,n.pendingProps,s);case 19:return P0(t,n,s);case 31:return o1(t,n,s);case 22:return R0(t,n,s,n.pendingProps);case 24:return Pr(n),o=Nn(vn),t===null?(u=Of(),u===null&&(u=Yt,d=Lf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),n.memoizedState={parent:o,cache:u},If(n),Ya(n,vn,u)):((t.lanes&s)!==0&&(zf(t,n),Bo(n,null,null,s),Fo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,vn,o)):(o=d.cache,Ya(n,vn,o),o!==u.cache&&Nf(n,[vn],s,!0))),Ln(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ga(t){t.flags|=4}function _d(t,n,s,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(cv())t.flags|=8192;else throw Fr=tc,Pf}else t.flags&=-16777217}function z0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jv(n))if(cv())t.flags|=8192;else throw Fr=tc,Pf}function _c(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,Ns|=n)}function Wo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,n}function c1(t,n,s){var o=n.pendingProps;switch(Af(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return s=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(vn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(_s(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cf())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ga(n),d!==null?(Qt(n),z0(n,d)):(Qt(n),_d(n,u,null,o,s))):d?d!==t.memoizedState?(ga(n),Qt(n),z0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),Qt(n),_d(n,u,t,o,s)),null;case 27:if(Je(n),s=ee.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Qt(n),null}t=Se.current,_s(n)?gg(n):(t=Xv(u,o,s),n.stateNode=t,ga(n))}return Qt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Qt(n),null}if(d=Se.current,_s(n))gg(n);else{var x=Uc(ee.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[mn]=n,d[wn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Un(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return Qt(n),_d(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=ee.current,_s(n)){if(t=n.stateNode,s=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Uv(t.nodeValue,s)),t||qa(n,!0)}else t=Uc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return Qt(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(o=_s(n),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[mn]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else s=Cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=_s(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[mn]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),_c(n,n.updateQueue),Qt(n),null);case 4:return Ge(),t===null&&Hd(n.stateNode.containerInfo),Qt(n),null;case 10:return da(n.type),Qt(n),null;case 19:if(W(hn),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Wo(o,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=rc(t),d!==null){for(n.flags|=128,Wo(o,!1),t=d.updateQueue,n.updateQueue=t,_c(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)fg(s,t),s=s.sibling;return ve(hn,hn.current&1|2),Mt&&ua(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Vt()>Mc&&(n.flags|=128,u=!0,Wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=rc(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,_c(n,t),Wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Mt)return Qt(n),null}else 2*Vt()-o.renderingStartTime>Mc&&s!==536870912&&(n.flags|=128,u=!0,Wo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Vt(),t.sibling=null,s=hn.current,ve(hn,u?s&1|2:s&1),Mt&&ua(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ci(n),Gf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),s=n.updateQueue,s!==null&&_c(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),t!==null&&W(Ir),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),da(vn),Qt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function u1(t,n){switch(Af(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(vn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(a(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(hn),null;case 4:return Ge(),null;case 10:return da(n.type),null;case 22:case 23:return ci(n),Gf(),t!==null&&W(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(vn),null;case 25:return null;default:return null}}function F0(t,n){switch(Af(n),n.tag){case 3:da(vn),Ge();break;case 26:case 27:case 5:Je(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:W(hn);break;case 10:da(n.type);break;case 22:case 23:ci(n),Gf(),t!==null&&W(Ir);break;case 24:da(vn)}}function qo(t,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==u)}}catch(R){Ht(n,n.return,R)}}function $a(t,n,s){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var B=s,ne=R;try{ne()}catch(_e){Ht(u,B,_e)}}}o=o.next}while(o!==d)}}catch(_e){Ht(n,n.return,_e)}}function B0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{wg(n,s)}catch(o){Ht(t,t.return,o)}}}function H0(t,n,s){s.props=Gr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Ht(t,n,o)}}function Yo(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Ht(t,n,u)}}function ji(t,n){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ht(t,n,u)}else s.current=null}function G0(t){var n=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Ht(t,t.return,u)}}function xd(t,n,s){try{var o=t.stateNode;L1(o,t.type,s,n),o[wn]=n}catch(u){Ht(t,t.return,u)}}function V0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function yd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&sr(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Sd(t,n,s),t=t.sibling;t!==null;)Sd(t,n,s),t=t.sibling}function xc(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(o!==4&&(o===27&&sr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(xc(t,n,s),t=t.sibling;t!==null;)xc(t,n,s),t=t.sibling}function k0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,s),n[mn]=t,n[wn]=s}catch(d){Ht(t,t.return,d)}}var va=!1,yn=!1,bd=!1,X0=typeof WeakSet=="function"?WeakSet:Set,An=null;function f1(t,n){if(t=t.containerInfo,kd=Hc,t=ng(t),mf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,R=-1,B=-1,ne=0,_e=0,be=t,le=null;t:for(;;){for(var fe;be!==s||u!==0&&be.nodeType!==3||(R=x+u),be!==d||o!==0&&be.nodeType!==3||(B=x+o),be.nodeType===3&&(x+=be.nodeValue.length),(fe=be.firstChild)!==null;)le=be,be=fe;for(;;){if(be===t)break t;if(le===s&&++ne===u&&(R=x),le===d&&++_e===o&&(B=x),(fe=be.nextSibling)!==null)break;be=le,le=be.parentNode}be=fe}s=R===-1||B===-1?null:{start:R,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xd={focusedElem:t,selectionRange:s},Hc=!1,An=n;An!==null;)if(n=An,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,An=t;else for(;An!==null;){switch(n=An,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var qe=Gr(s.type,u);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Ht(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Yd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Yd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,An=t;break}An=n.return}}function W0(t,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:xa(t,s),o&4&&qo(5,s);break;case 1:if(xa(t,s),o&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){Ht(s,s.return,x)}else{var u=Gr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ht(s,s.return,x)}}o&64&&B0(s),o&512&&Yo(s,s.return);break;case 3:if(xa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{wg(t,n)}catch(x){Ht(s,s.return,x)}}break;case 27:n===null&&o&4&&k0(s);case 26:case 5:xa(t,s),n===null&&o&4&&G0(s),o&512&&Yo(s,s.return);break;case 12:xa(t,s);break;case 31:xa(t,s),o&4&&j0(t,s);break;case 13:xa(t,s),o&4&&Z0(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=y1.bind(null,s),H1(t,s))));break;case 22:if(o=s.memoizedState!==null||va,!o){n=n!==null&&n.memoizedState!==null||yn,u=va;var d=yn;va=o,(yn=n)&&!d?ya(t,s,(s.subtreeFlags&8772)!==0):xa(t,s),va=u,yn=d}break;case 30:break;default:xa(t,s)}}function q0(t){var n=t.alternate;n!==null&&(t.alternate=null,q0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,jn=!1;function _a(t,n,s){for(s=s.child;s!==null;)Y0(t,n,s),s=s.sibling}function Y0(t,n,s){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:yn||ji(s,n),_a(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||ji(s,n);var o=nn,u=jn;sr(s.type)&&(nn=s.stateNode,jn=!1),_a(t,n,s),nl(s.stateNode),nn=o,jn=u;break;case 5:yn||ji(s,n);case 6:if(o=nn,u=jn,nn=null,_a(t,n,s),nn=o,jn=u,nn!==null)if(jn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(s.stateNode)}catch(d){Ht(s,n,d)}else try{nn.removeChild(s.stateNode)}catch(d){Ht(s,n,d)}break;case 18:nn!==null&&(jn?(t=nn,Bv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Bs(t)):Bv(nn,s.stateNode));break;case 4:o=nn,u=jn,nn=s.stateNode.containerInfo,jn=!0,_a(t,n,s),nn=o,jn=u;break;case 0:case 11:case 14:case 15:$a(2,s,n),yn||$a(4,s,n),_a(t,n,s);break;case 1:yn||(ji(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&H0(s,n,o)),_a(t,n,s);break;case 21:_a(t,n,s);break;case 22:yn=(o=yn)||s.memoizedState!==null,_a(t,n,s),yn=o;break;default:_a(t,n,s)}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bs(t)}catch(s){Ht(n,n.return,s)}}}function Z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bs(t)}catch(s){Ht(n,n.return,s)}}function d1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new X0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new X0),n;default:throw Error(a(435,t.tag))}}function yc(t,n){var s=d1(t);n.forEach(function(o){if(!s.has(o)){s.add(o);var u=S1.bind(null,t,o);o.then(u,u)}})}function Zn(t,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(sr(R.type)){nn=R.stateNode,jn=!1;break e}break;case 5:nn=R.stateNode,jn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(nn===null)throw Error(a(160));Y0(d,x,u),nn=null,jn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)K0(n,t),n=n.sibling}var Ui=null;function K0(t,n){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(n,t),Kn(t),o&4&&($a(3,t,t.return),qo(3,t),$a(5,t,t.return));break;case 1:Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),o&64&&va&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Ui;if(Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ba]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Un(d,o,s),d[mn]=t,gn(d),o=d;break e;case"link":var x=Kv("link","href",u).get(o+(s.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(R,1);break t}}d=u.createElement(o),Un(d,o,s),u.head.appendChild(d);break;case"meta":if(x=Kv("meta","content",u).get(o+(s.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(R,1);break t}}d=u.createElement(o),Un(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else Qv(u,t.type,t.stateNode);else t.stateNode=Zv(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?Qv(u,t.type,t.stateNode):Zv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&xd(t,t.memoizedProps,s.memoizedProps)}break;case 27:Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),s!==null&&o&4&&xd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Zn(n,t),Kn(t),o&512&&(yn||s===null||ji(s,s.return)),t.flags&32){u=t.stateNode;try{ri(u,"")}catch(qe){Ht(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,xd(t,u,s!==null?s.memoizedProps:u)),o&1024&&(bd=!0);break;case 6:if(Zn(n,t),Kn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(qe){Ht(t,t.return,qe)}}break;case 3:if(Ic=null,u=Ui,Ui=Oc(n.containerInfo),Zn(n,t),Ui=u,Kn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Bs(n.containerInfo)}catch(qe){Ht(t,t.return,qe)}bd&&(bd=!1,Q0(t));break;case 4:o=Ui,Ui=Oc(t.stateNode.containerInfo),Zn(n,t),Kn(t),Ui=o;break;case 12:Zn(n,t),Kn(t);break;case 31:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 13:Zn(n,t),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(bc=Vt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 22:u=t.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,ne=va,_e=yn;if(va=ne||u,yn=_e||B,Zn(n,t),yn=_e,va=ne,Kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||B||va||yn||Vr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){B=s=n;try{if(d=B.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=B.stateNode;var be=B.memoizedProps.style,le=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){Ht(B,B.return,qe)}}}else if(n.tag===6){if(s===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(qe){Ht(B,B.return,qe)}}}else if(n.tag===18){if(s===null){B=n;try{var fe=B.stateNode;u?Hv(fe,!0):Hv(B.stateNode,!1)}catch(qe){Ht(B,B.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,yc(t,s))));break;case 19:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 30:break;case 21:break;default:Zn(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var s,o=t.return;o!==null;){if(V0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=yd(t);xc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(ri(x,""),s.flags&=-33);var R=yd(t);xc(t,R,x);break;case 3:case 4:var B=s.stateNode.containerInfo,ne=yd(t);Sd(t,ne,B);break;default:throw Error(a(161))}}catch(_e){Ht(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)W0(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Vr(n);break;case 1:ji(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&H0(n,n.return,s),Vr(n);break;case 27:nl(n.stateNode);case 26:case 5:ji(n,n.return),Vr(n);break;case 22:n.memoizedState===null&&Vr(n);break;case 30:Vr(n);break;default:Vr(n)}t=t.sibling}}function ya(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ya(u,d,s),qo(4,d);break;case 1:if(ya(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Ht(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Cg(B[u],R)}catch(ne){Ht(o,o.return,ne)}}s&&x&64&&B0(d),Yo(d,d.return);break;case 27:k0(d);case 26:case 5:ya(u,d,s),s&&o===null&&x&4&&G0(d),Yo(d,d.return);break;case 12:ya(u,d,s);break;case 31:ya(u,d,s),s&&x&4&&j0(u,d);break;case 13:ya(u,d,s),s&&x&4&&Z0(u,d);break;case 22:d.memoizedState===null&&ya(u,d,s),Yo(d,d.return);break;case 30:break;default:ya(u,d,s)}n=n.sibling}}function Md(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Uo(s))}function Ed(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Uo(t))}function Oi(t,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)J0(t,n,s,o),n=n.sibling}function J0(t,n,s,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,s,o),u&2048&&qo(9,n);break;case 1:Oi(t,n,s,o);break;case 3:Oi(t,n,s,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Uo(t)));break;case 12:if(u&2048){Oi(t,n,s,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ht(n,n.return,B)}}else Oi(t,n,s,o);break;case 31:Oi(t,n,s,o);break;case 13:Oi(t,n,s,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Oi(t,n,s,o):jo(t,n):d._visibility&2?Oi(t,n,s,o):(d._visibility|=2,Cs(t,n,s,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Md(x,n);break;case 24:Oi(t,n,s,o),u&2048&&Ed(n.alternate,n);break;default:Oi(t,n,s,o)}}function Cs(t,n,s,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=s,B=o,ne=x.flags;switch(x.tag){case 0:case 11:case 15:Cs(d,x,R,B,u),qo(8,x);break;case 23:break;case 22:var _e=x.stateNode;x.memoizedState!==null?_e._visibility&2?Cs(d,x,R,B,u):jo(d,x):(_e._visibility|=2,Cs(d,x,R,B,u)),u&&ne&2048&&Md(x.alternate,x);break;case 24:Cs(d,x,R,B,u),u&&ne&2048&&Ed(x.alternate,x);break;default:Cs(d,x,R,B,u)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,o=n,u=o.flags;switch(o.tag){case 22:jo(s,o),u&2048&&Md(o.alternate,o);break;case 24:jo(s,o),u&2048&&Ed(o.alternate,o);break;default:jo(s,o)}n=n.sibling}}var Zo=8192;function ws(t,n,s){if(t.subtreeFlags&Zo)for(t=t.child;t!==null;)$0(t,n,s),t=t.sibling}function $0(t,n,s){switch(t.tag){case 26:ws(t,n,s),t.flags&Zo&&t.memoizedState!==null&&J1(s,Ui,t.memoizedState,t.memoizedProps);break;case 5:ws(t,n,s);break;case 3:case 4:var o=Ui;Ui=Oc(t.stateNode.containerInfo),ws(t,n,s),Ui=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Zo,Zo=16777216,ws(t,n,s),Zo=o):ws(t,n,s));break;default:ws(t,n,s)}}function ev(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];An=o,nv(o,t)}ev(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tv(t),t=t.sibling}function tv(t){switch(t.tag){case 0:case 11:case 15:Ko(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Ko(t);break;case 12:Ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sc(t)):Ko(t);break;default:Ko(t)}}function Sc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];An=o,nv(o,t)}ev(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Sc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Sc(n));break;default:Sc(n)}t=t.sibling}}function nv(t,n){for(;An!==null;){var s=An;switch(s.tag){case 0:case 11:case 15:$a(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Uo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,An=o;else e:for(s=t;An!==null;){o=An;var u=o.sibling,d=o.return;if(q0(o),o===s){An=null;break e}if(u!==null){u.return=d,An=u;break e}An=d}}}var h1={getCacheForType:function(t){var n=Nn(vn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Nn(vn).controller.signal}},p1=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Yt=null,vt=null,xt=0,Bt=0,ui=null,er=!1,Ds=!1,Td=!1,Sa=0,cn=0,tr=0,kr=0,Ad=0,fi=0,Ns=0,Qo=null,Qn=null,Rd=!1,bc=0,iv=0,Mc=1/0,Ec=null,nr=null,Mn=0,ir=null,Ls=null,ba=0,Cd=0,wd=null,av=null,Jo=0,Dd=null;function di(){return(Lt&2)!==0&&xt!==0?xt&-xt:D.T!==null?Id():So()}function rv(){if(fi===0)if((xt&536870912)===0||Mt){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function Jn(t,n,s){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Us(t,0),ar(t,xt,fi,!1)),ke(t,s),((Lt&2)===0||t!==Yt)&&(t===Yt&&((Lt&2)===0&&(kr|=s),cn===4&&ar(t,xt,fi,!1)),Zi(t))}function sv(t,n,s){if((Lt&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?v1(t,n):Ld(t,n,!0),d=o;do{if(u===0){Ds&&!o&&ar(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!m1(s)){u=Ld(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;u=Qo;var B=R.current.memoizedState.isDehydrated;if(B&&(Us(R,x).flags|=256),x=Ld(R,x,!1),x!==2){if(Td&&!B){R.errorRecoveryDisabledLanes|=d,kr|=d,u=4;break e}d=Qn,Qn=u,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Us(t,0),ar(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:ar(o,n,fi,!er);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=bc+300-Vt(),10<u)){if(ar(o,n,fi,!er),xe(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=zv(ov.bind(null,o,s,Qn,Ec,Rd,n,fi,kr,Ns,er,d,"Throttled",-0,0),u);break e}ov(o,s,Qn,Ec,Rd,n,fi,kr,Ns,er,d,null,-0,0)}}break}while(!0);Zi(t)}function ov(t,n,s,o,u,d,x,R,B,ne,_e,be,le,fe){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},$0(n,d,be);var qe=(d&62914560)===d?bc-Vt():(d&4194048)===d?iv-Vt():0;if(qe=$1(be,qe),qe!==null){ba=d,t.cancelPendingCommit=qe(mv.bind(null,t,n,d,s,o,u,x,R,B,_e,be,null,le,fe)),ar(t,d,x,!ne);return}}mv(t,n,d,s,o,u,x,R,B)}function m1(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!si(d(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,s,o){n&=~Ad,n&=~kr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Be(u),x=1<<d;o[d]=-1,u&=~x}s!==0&&Pt(t,s,n)}function Tc(){return(Lt&6)===0?($o(0),!1):!0}function Nd(){if(vt!==null){if(Bt===0)var t=vt.return;else t=vt,fa=Or=null,Yf(t),Ms=null,Po=0,t=vt;for(;t!==null;)F0(t.alternate,t),t=t.return;vt=null}}function Us(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,P1(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ba=0,Nd(),Yt=t,vt=s=ca(t.current,null),xt=n,Bt=0,ui=null,er=!1,Ds=Ne(t,n),Td=!1,Ns=fi=Ad=kr=tr=cn=0,Qn=Qo=null,Rd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),d=1<<u;n|=t[u],o&=~d}return Sa=n,ql(),s}function lv(t,n){ft=null,D.H=ko,n===bs||n===ec?(n=Eg(),Bt=3):n===Pf?(n=Eg(),Bt=4):Bt=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,vt===null&&(cn=1,pc(t,_i(n,t.current)))}function cv(){var t=li.current;return t===null?!0:(xt&4194048)===xt?bi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===bi:!1}function uv(){var t=D.H;return D.H=ko,t===null?ko:t}function fv(){var t=D.A;return D.A=h1,t}function Ac(){cn=4,er||(xt&4194048)!==xt&&li.current!==null||(Ds=!0),(tr&134217727)===0&&(kr&134217727)===0||Yt===null||ar(Yt,xt,fi,!1)}function Ld(t,n,s){var o=Lt;Lt|=2;var u=uv(),d=fv();(Yt!==t||xt!==n)&&(Ec=null,Us(t,n)),n=!1;var x=cn;e:do try{if(Bt!==0&&vt!==null){var R=vt,B=ui;switch(Bt){case 8:Nd(),x=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var ne=Bt;if(Bt=0,ui=null,Os(t,R,B,ne),s&&Ds){x=0;break e}break;default:ne=Bt,Bt=0,ui=null,Os(t,R,B,ne)}}g1(),x=cn;break}catch(_e){lv(t,_e)}while(!0);return n&&t.shellSuspendCounter++,fa=Or=null,Lt=o,D.H=u,D.A=d,vt===null&&(Yt=null,xt=0,ql()),x}function g1(){for(;vt!==null;)dv(vt)}function v1(t,n){var s=Lt;Lt|=2;var o=uv(),u=fv();Yt!==t||xt!==n?(Ec=null,Mc=Vt()+500,Us(t,n)):Ds=Ne(t,n);e:do try{if(Bt!==0&&vt!==null){n=vt;var d=ui;t:switch(Bt){case 1:Bt=0,ui=null,Os(t,n,d,1);break;case 2:case 9:if(bg(d)){Bt=0,ui=null,hv(n);break}n=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Zi(t)},d.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:bg(d)?(Bt=0,ui=null,hv(n)):(Bt=0,ui=null,Os(t,n,d,7));break;case 5:var x=null;switch(vt.tag){case 26:x=vt.memoizedState;case 5:case 27:var R=vt;if(x?Jv(x):R.stateNode.complete){Bt=0,ui=null;var B=R.sibling;if(B!==null)vt=B;else{var ne=R.return;ne!==null?(vt=ne,Rc(ne)):vt=null}break t}}Bt=0,ui=null,Os(t,n,d,5);break;case 6:Bt=0,ui=null,Os(t,n,d,6);break;case 8:Nd(),cn=6;break e;default:throw Error(a(462))}}_1();break}catch(_e){lv(t,_e)}while(!0);return fa=Or=null,D.H=o,D.A=u,Lt=s,vt!==null?0:(Yt=null,xt=0,ql(),cn)}function _1(){for(;vt!==null&&!on();)dv(vt)}function dv(t){var n=I0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Rc(t):vt=n}function hv(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=D0(s,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=D0(s,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Yf(n);default:F0(s,n),n=vt=fg(n,Sa),n=I0(s,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Rc(t):vt=n}function Os(t,n,s,o){fa=Or=null,Yf(n),Ms=null,Po=0;var u=n.return;try{if(s1(t,u,n,s,xt)){cn=1,pc(t,_i(s,t.current)),vt=null;return}}catch(d){if(u!==null)throw vt=u,d;cn=1,pc(t,_i(s,t.current)),vt=null;return}n.flags&32768?(Mt||o===1?t=!0:Ds||(xt&536870912)!==0?t=!1:(er=t=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),pv(n,t)):Rc(n)}function Rc(t){var n=t;do{if((n.flags&32768)!==0){pv(n,er);return}t=n.return;var s=c1(n.alternate,n,Sa);if(s!==null){vt=s;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);cn===0&&(cn=5)}function pv(t,n){do{var s=u1(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);cn=6,vt=null}function mv(t,n,s,o,u,d,x,R,B){t.cancelPendingCommit=null;do Cc();while(Mn!==0);if((Lt&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=yf,$t(t,s,d,x,R,B),t===Yt&&(vt=Yt=null,xt=0),Ls=n,ir=t,ba=s,Cd=d,wd=u,av=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,b1(J,function(){return yv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,u=G.p,G.p=2,x=Lt,Lt|=4;try{f1(t,n,s)}finally{Lt=x,G.p=u,D.T=o}}Mn=1,gv(),vv(),_v()}}function gv(){if(Mn===1){Mn=0;var t=ir,n=Ls,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{K0(n,t);var d=Xd,x=ng(t.containerInfo),R=d.focusedElem,B=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&tg(R.ownerDocument.documentElement,R)){if(B!==null&&mf(R)){var ne=B.start,_e=B.end;if(_e===void 0&&(_e=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(_e,R.value.length);else{var be=R.ownerDocument||document,le=be&&be.defaultView||window;if(le.getSelection){var fe=le.getSelection(),qe=R.textContent.length,at=Math.min(B.start,qe),Wt=B.end===void 0?at:Math.min(B.end,qe);!fe.extend&&at>Wt&&(x=Wt,Wt=at,at=x);var Q=eg(R,at),X=eg(R,Wt);if(Q&&X&&(fe.rangeCount!==1||fe.anchorNode!==Q.node||fe.anchorOffset!==Q.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var te=be.createRange();te.setStart(Q.node,Q.offset),fe.removeAllRanges(),at>Wt?(fe.addRange(te),fe.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),fe.addRange(te))}}}}for(be=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&be.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var ye=be[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Hc=!!kd,Xd=kd=null}finally{Lt=u,G.p=o,D.T=s}}t.current=n,Mn=2}}function vv(){if(Mn===2){Mn=0;var t=ir,n=Ls,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{W0(t,n.alternate,n)}finally{Lt=u,G.p=o,D.T=s}}Mn=3}}function _v(){if(Mn===4||Mn===3){Mn=0,Z();var t=ir,n=Ls,s=ba,o=av;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Ls=ir=null,xv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(nr=null),yo(s),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,u=G.p,G.p=2,D.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{D.T=n,G.p=u}}(ba&3)!==0&&Cc(),Zi(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Dd?Jo++:(Jo=0,Dd=t):Jo=0,$o(0)}}function xv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Uo(n)))}function Cc(){return gv(),vv(),_v(),yv()}function yv(){if(Mn!==5)return!1;var t=ir,n=Cd;Cd=0;var s=yo(ba),o=D.T,u=G.p;try{G.p=32>s?32:s,D.T=null,s=wd,wd=null;var d=ir,x=ba;if(Mn=0,Ls=ir=null,ba=0,(Lt&6)!==0)throw Error(a(331));var R=Lt;if(Lt|=4,tv(d.current),J0(d,d.current,x,s),Lt=R,$o(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(he,d)}catch{}return!0}finally{G.p=u,D.T=o,xv(t,n)}}function Sv(t,n,s){n=_i(s,n),n=ld(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(ke(t,2),Zi(t))}function Ht(t,n,s){if(t.tag===3)Sv(t,t,s);else for(;n!==null;){if(n.tag===3){Sv(n,t,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(nr===null||!nr.has(o))){t=_i(s,t),s=b0(2),o=Ka(n,s,2),o!==null&&(M0(s,o,n,t),ke(o,2),Zi(o));break}}n=n.return}}function Ud(t,n,s){var o=t.pingCache;if(o===null){o=t.pingCache=new p1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(s)||(Td=!0,u.add(s),t=x1.bind(null,t,n,s),n.then(t,t))}function x1(t,n,s){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(xt&s)===s&&(cn===4||cn===3&&(xt&62914560)===xt&&300>Vt()-bc?(Lt&2)===0&&Us(t,0):Ad|=s,Ns===xt&&(Ns=0)),Zi(t)}function bv(t,n){n===0&&(n=Te()),t=Nr(t,n),t!==null&&(ke(t,n),Zi(t))}function y1(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),bv(t,s)}function S1(t,n){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),bv(t,s)}function b1(t,n){return dn(t,n)}var wc=null,Ps=null,Od=!1,Dc=!1,Pd=!1,rr=0;function Zi(t){t!==Ps&&t.next===null&&(Ps===null?wc=Ps=t:Ps=Ps.next=t),Dc=!0,Od||(Od=!0,E1())}function $o(t,n){if(!Pd&&Dc){Pd=!0;do for(var s=!1,o=wc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=u&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Av(o,d))}else d=xt,d=xe(o,o===Yt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ne(o,d)||(s=!0,Av(o,d));o=o.next}while(s);Pd=!1}}function M1(){Mv()}function Mv(){Dc=Od=!1;var t=0;rr!==0&&O1()&&(t=rr);for(var n=Vt(),s=null,o=wc;o!==null;){var u=o.next,d=Ev(o,n);d===0?(o.next=null,s===null?wc=u:s.next=u,u===null&&(Ps=s)):(s=o,(t!==0||(d&3)!==0)&&(Dc=!0)),o=u}Mn!==0&&Mn!==5||$o(t),rr!==0&&(rr=0)}function Ev(t,n){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Be(d),R=1<<x,B=u[x];B===-1?((R&s)===0||(R&o)!==0)&&(u[x]=Fe(R,n)):B<=n&&(t.expiredLanes|=R),d&=~R}if(n=Yt,s=xt,s=xe(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&jt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ne(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(o!==null&&jt(o),yo(s)){case 2:case 8:s=M;break;case 32:s=J;break;case 268435456:s=me;break;default:s=J}return o=Tv.bind(null,t),s=dn(s,o),t.callbackPriority=n,t.callbackNode=s,n}return o!==null&&o!==null&&jt(o),t.callbackPriority=2,t.callbackNode=null,2}function Tv(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Cc()&&t.callbackNode!==s)return null;var o=xt;return o=xe(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(sv(t,o,n),Ev(t,Vt()),t.callbackNode!=null&&t.callbackNode===s?Tv.bind(null,t):null)}function Av(t,n){if(Cc())return null;sv(t,n,!0)}function E1(){I1(function(){(Lt&6)!==0?dn(O,M1):Mv()})}function Id(){if(rr===0){var t=ys;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),rr=t}return rr}function Rv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rr(""+t)}function Cv(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function T1(t,n,s,o,u){if(n==="submit"&&s&&s.stateNode===u){var d=Rv((u[wn]||null).action),x=o.submitter;x&&(n=(n=x[wn]||null)?Rv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new Vl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rr!==0){var B=x?Cv(u,x):new FormData(u);nd(s,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=x?Cv(u,x):new FormData(u),nd(s,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var zd=0;zd<xf.length;zd++){var Fd=xf[zd],A1=Fd.toLowerCase(),R1=Fd[0].toUpperCase()+Fd.slice(1);Li(A1,"on"+R1)}Li(rg,"onAnimationEnd"),Li(sg,"onAnimationIteration"),Li(og,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(kb,"onTransitionRun"),Li(Xb,"onTransitionStart"),Li(Wb,"onTransitionCancel"),Li(lg,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function wv(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],B=R.instance,ne=R.currentTarget;if(R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ne;try{d(u)}catch(_e){Wl(_e)}u.currentTarget=null,d=B}else for(x=0;x<o.length;x++){if(R=o[x],B=R.instance,ne=R.currentTarget,R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ne;try{d(u)}catch(_e){Wl(_e)}u.currentTarget=null,d=B}}}}function _t(t,n){var s=n[Er];s===void 0&&(s=n[Er]=new Set);var o=t+"__bubble";s.has(o)||(Dv(n,t,2,!1),s.add(o))}function Bd(t,n,s){var o=0;n&&(o|=4),Dv(s,t,o,n)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Hd(t){if(!t[Nc]){t[Nc]=!0,Fl.forEach(function(s){s!=="selectionchange"&&(C1.has(s)||Bd(s,!1,t),Bd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nc]||(n[Nc]=!0,Bd("selectionchange",!1,n))}}function Dv(t,n,s,o){switch(r_(n)){case 2:var u=nM;break;case 8:u=iM;break;default:u=th}s=u.bind(null,n,s,t),u=void 0,!sf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function Gd(t,n,s,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=ra(R),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=d=x;continue e}R=R.parentNode}}o=o.return}Pm(function(){var ne=d,_e=af(s),be=[];e:{var le=cg.get(t);if(le!==void 0){var fe=Vl,qe=t;switch(t){case"keypress":if(Hl(s)===0)break e;case"keydown":case"keyup":fe=Sb;break;case"focusin":qe="focus",fe=uf;break;case"focusout":qe="blur",fe=uf;break;case"beforeblur":case"afterblur":fe=uf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=cb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Eb;break;case rg:case sg:case og:fe=db;break;case lg:fe=Ab;break;case"scroll":case"scrollend":fe=ob;break;case"wheel":fe=Cb;break;case"copy":case"cut":case"paste":fe=pb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Hm;break;case"toggle":case"beforetoggle":fe=Db}var at=(n&4)!==0,Wt=!at&&(t==="scroll"||t==="scrollend"),Q=at?le!==null?le+"Capture":null:le;at=[];for(var X=ne,te;X!==null;){var ye=X;if(te=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||te===null||Q===null||(ye=bo(X,Q),ye!=null&&at.push(tl(X,ye,te))),Wt)break;X=X.return}0<at.length&&(le=new fe(le,qe,null,s,_e),be.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&s!==nf&&(qe=s.relatedTarget||s.fromElement)&&(ra(qe)||qe[qn]))break e;if((fe||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(qe=s.relatedTarget||s.toElement,fe=ne,qe=qe?ra(qe):null,qe!==null&&(Wt=c(qe),at=qe.tag,qe!==Wt||at!==5&&at!==27&&at!==6)&&(qe=null)):(fe=null,qe=ne),fe!==qe)){if(at=Fm,ye="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(at=Hm,ye="onPointerLeave",Q="onPointerEnter",X="pointer"),Wt=fe==null?le:Ar(fe),te=qe==null?le:Ar(qe),le=new at(ye,X+"leave",fe,s,_e),le.target=Wt,le.relatedTarget=te,ye=null,ra(_e)===ne&&(at=new at(Q,X+"enter",qe,s,_e),at.target=te,at.relatedTarget=Wt,ye=at),Wt=ye,fe&&qe)t:{for(at=w1,Q=fe,X=qe,te=0,ye=Q;ye;ye=at(ye))te++;ye=0;for(var tt=X;tt;tt=at(tt))ye++;for(;0<te-ye;)Q=at(Q),te--;for(;0<ye-te;)X=at(X),ye--;for(;te--;){if(Q===X||X!==null&&Q===X.alternate){at=Q;break t}Q=at(Q),X=at(X)}at=null}else at=null;fe!==null&&Nv(be,le,fe,at,!1),qe!==null&&Wt!==null&&Nv(be,Wt,qe,at,!0)}}e:{if(le=ne?Ar(ne):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var wt=jm;else if(qm(le))if(Zm)wt=Hb;else{wt=Fb;var je=zb}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&Ot(ne.elementType)&&(wt=jm):wt=Bb;if(wt&&(wt=wt(t,ne))){Ym(be,wt,s,_e);break e}je&&je(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&gt(le,"number",le.value)}switch(je=ne?Ar(ne):window,t){case"focusin":(qm(je)||je.contentEditable==="true")&&(ds=je,gf=ne,Do=null);break;case"focusout":Do=gf=ds=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,ig(be,s,_e);break;case"selectionchange":if(Vb)break;case"keydown":case"keyup":ig(be,s,_e)}var dt;if(df)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else fs?Xm(t,s)&&(yt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(yt="onCompositionStart");yt&&(Gm&&s.locale!=="ko"&&(fs||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&fs&&(dt=Im()):(ka=_e,of="value"in ka?ka.value:ka.textContent,fs=!0)),je=Lc(ne,yt),0<je.length&&(yt=new Bm(yt,t,null,s,_e),be.push({event:yt,listeners:je}),dt?yt.data=dt:(dt=Wm(s),dt!==null&&(yt.data=dt)))),(dt=Lb?Ub(t,s):Ob(t,s))&&(yt=Lc(ne,"onBeforeInput"),0<yt.length&&(je=new Bm("onBeforeInput","beforeinput",null,s,_e),be.push({event:je,listeners:yt}),je.data=dt)),T1(be,t,ne,s,_e)}wv(be,n)})}function tl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Lc(t,n){for(var s=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=bo(t,s),u!=null&&o.unshift(tl(t,u,d)),u=bo(t,n),u!=null&&o.push(tl(t,u,d))),t.tag===3)return o;t=t.return}return[]}function w1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Nv(t,n,s,o,u){for(var d=n._reactName,x=[];s!==null&&s!==o;){var R=s,B=R.alternate,ne=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||ne===null||(B=ne,u?(ne=bo(s,d),ne!=null&&x.unshift(tl(s,ne,B))):u||(ne=bo(s,d),ne!=null&&x.push(tl(s,ne,B)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var D1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function Lv(t){return(typeof t=="string"?t:""+t).replace(D1,`
`).replace(N1,"")}function Uv(t,n){return n=Lv(n),Lv(t)===n}function Xt(t,n,s,o,u,d){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ri(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ri(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,s,o);break;case"style":Ni(t,o,d);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Rr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Rr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=oa);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=Rr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Wi.get(s)||s,Oe(t,s,o))}}function Vd(t,n,s,o,u,d){switch(s){case"style":Ni(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?ri(t,o):(typeof o=="number"||typeof o=="bigint")&&ri(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),d=t[wn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Oe(t,s,o)}}}function Un(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xt(t,n,d,x,s,null)}}u&&Xt(t,n,"srcSet",s.srcSet,s,null),o&&Xt(t,n,"src",s.src,s,null);return;case"input":_t("invalid",t);var R=d=x=u=null,B=null,ne=null;for(o in s)if(s.hasOwnProperty(o)){var _e=s[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":x=_e;break;case"checked":B=_e;break;case"defaultChecked":ne=_e;break;case"value":d=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,n));break;default:Xt(t,n,o,_e,s,null)}}In(t,d,R,B,ne,x,u,!1);return;case"select":_t("invalid",t),o=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Xt(t,n,u,R,s,null)}n=d,s=x,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):s!=null&&bn(t,!!o,s,!0);return;case"textarea":_t("invalid",t),d=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(R=s[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Xt(t,n,x,R,s,null)}Di(t,o,u,d);return;case"option":for(B in s)s.hasOwnProperty(B)&&(o=s[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Xt(t,n,B,o,s,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<el.length;o++)_t(el[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(o=s[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xt(t,n,ne,o,s,null)}return;default:if(Ot(n)){for(_e in s)s.hasOwnProperty(_e)&&(o=s[_e],o!==void 0&&Vd(t,n,_e,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Xt(t,n,R,o,s,null))}function L1(t,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,R=null,B=null,ne=null,_e=null;for(fe in s){var be=s[fe];if(s.hasOwnProperty(fe)&&be!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":B=be;default:o.hasOwnProperty(fe)||Xt(t,n,fe,null,o,be)}}for(var le in o){var fe=o[le];if(be=s[le],o.hasOwnProperty(le)&&(fe!=null||be!=null))switch(le){case"type":d=fe;break;case"name":u=fe;break;case"checked":ne=fe;break;case"defaultChecked":_e=fe;break;case"value":x=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,n));break;default:fe!==be&&Xt(t,n,le,fe,o,be)}}He(t,x,R,B,ne,_e,d,u);return;case"select":fe=x=R=le=null;for(d in s)if(B=s[d],s.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":fe=B;default:o.hasOwnProperty(d)||Xt(t,n,d,null,o,B)}for(u in o)if(d=o[u],B=s[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==B&&Xt(t,n,u,d,o,B)}n=R,s=x,o=fe,le!=null?bn(t,!!s,le,!1):!!o!=!!s&&(n!=null?bn(t,!!s,n,!0):bn(t,!!s,s?[]:"",!1));return;case"textarea":fe=le=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xt(t,n,R,null,o,u)}for(x in o)if(u=o[x],d=s[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":le=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Xt(t,n,x,u,o,d)}ai(t,le,fe);return;case"option":for(var qe in s)le=s[qe],s.hasOwnProperty(qe)&&le!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Xt(t,n,qe,null,o,le));for(B in o)le=o[B],fe=s[B],o.hasOwnProperty(B)&&le!==fe&&(le!=null||fe!=null)&&(B==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Xt(t,n,B,le,o,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)le=s[at],s.hasOwnProperty(at)&&le!=null&&!o.hasOwnProperty(at)&&Xt(t,n,at,null,o,le);for(ne in o)if(le=o[ne],fe=s[ne],o.hasOwnProperty(ne)&&le!==fe&&(le!=null||fe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,n));break;default:Xt(t,n,ne,le,o,fe)}return;default:if(Ot(n)){for(var Wt in s)le=s[Wt],s.hasOwnProperty(Wt)&&le!==void 0&&!o.hasOwnProperty(Wt)&&Vd(t,n,Wt,void 0,o,le);for(_e in o)le=o[_e],fe=s[_e],!o.hasOwnProperty(_e)||le===fe||le===void 0&&fe===void 0||Vd(t,n,_e,le,o,fe);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&Xt(t,n,Q,null,o,le);for(be in o)le=o[be],fe=s[be],!o.hasOwnProperty(be)||le===fe||le==null&&fe==null||Xt(t,n,be,le,o,fe)}function Ov(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,x=u.initiatorType,R=u.duration;if(d&&R&&Ov(x)){for(x=0,R=u.responseEnd,o+=1;o<s.length;o++){var B=s[o],ne=B.startTime;if(ne>R)break;var _e=B.transferSize,be=B.initiatorType;_e&&Ov(be)&&(B=B.responseEnd,x+=_e*(B<R?1:(R-ne)/(B-ne)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kd=null,Xd=null;function Uc(t){return t.nodeType===9?t:t.ownerDocument}function Pv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Iv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qd=null;function O1(){var t=window.event;return t&&t.type==="popstate"?t===qd?!1:(qd=t,!0):(qd=null,!1)}var zv=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,I1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(t){return Fv.resolve(null).then(t).catch(z1)}:zv;function z1(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function Bv(t,n){var s=n,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Bs(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")nl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,nl(s);for(var d=s.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[Ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&nl(t.ownerDocument.body);s=u}while(s);Bs(n)}function Hv(t,n){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function Yd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Yd(s),Ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function F1(t,n,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function B1(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Mi(t.nextSibling),t===null))return null;return t}function Gv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function jd(t){return t.data==="$?"||t.data==="$~"}function Zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function H1(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kd=null;function Vv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Mi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function kv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Xv(t,n,s){switch(n=Uc(s),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function nl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var Ei=new Map,Wv=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=G.d;G.d={f:G1,r:V1,D:k1,C:X1,L:W1,m:q1,X:j1,S:Y1,M:Z1};function G1(){var t=Ma.f(),n=Tc();return t||n}function V1(t){var n=sa(t);n!==null&&n.tag===5&&n.type==="form"?l0(n):Ma.r(t)}var Is=typeof document>"u"?null:document;function qv(t,n,s){var o=Is;if(o&&typeof n=="string"&&n){var u=zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Wv.has(u)||(Wv.add(u),t={rel:t,crossOrigin:s,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",t),gn(n),o.head.appendChild(n)))}}function k1(t){Ma.D(t),qv("dns-prefetch",t,null)}function X1(t,n){Ma.C(t,n),qv("preconnect",t,n)}function W1(t,n,s){Ma.L(t,n,s);var o=Is;if(o&&t&&n){var u='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+zt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+zt(s.imageSizes)+'"]')):u+='[href="'+zt(t)+'"]';var d=u;switch(n){case"style":d=zs(t);break;case"script":d=Fs(t)}Ei.has(d)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ei.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(il(d))||n==="script"&&o.querySelector(al(d))||(n=o.createElement("link"),Un(n,"link",t),gn(n),o.head.appendChild(n)))}}function q1(t,n){Ma.m(t,n);var s=Is;if(s&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zt(o)+'"][href="'+zt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Fs(t)}if(!Ei.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ei.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(al(d)))return}o=s.createElement("link"),Un(o,"link",t),gn(o),s.head.appendChild(o)}}}function Y1(t,n,s){Ma.S(t,n,s);var o=Is;if(o&&t){var u=Ga(o).hoistableStyles,d=zs(t);n=n||"default";var x=u.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(il(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ei.get(d))&&Qd(t,s);var B=x=o.createElement("link");gn(B),Un(B,"link",t),B._p=new Promise(function(ne,_e){B.onload=ne,B.onerror=_e}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Pc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(d,x)}}}function j1(t,n){Ma.X(t,n);var s=Is;if(s&&t){var o=Ga(s).hoistableScripts,u=Fs(t),d=o.get(u);d||(d=s.querySelector(al(u)),d||(t=v({src:t,async:!0},n),(n=Ei.get(u))&&Jd(t,n),d=s.createElement("script"),gn(d),Un(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Z1(t,n){Ma.M(t,n);var s=Is;if(s&&t){var o=Ga(s).hoistableScripts,u=Fs(t),d=o.get(u);d||(d=s.querySelector(al(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ei.get(u))&&Jd(t,n),d=s.createElement("script"),gn(d),Un(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Yv(t,n,s,o){var u=(u=ee.current)?Oc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=zs(s.href),s=Ga(u).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=zs(s.href);var d=Ga(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(il(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ei.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(t,s),d||K1(u,t,s,x.state))),n&&o===null)throw Error(a(528,""));return x}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fs(s),s=Ga(u).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function zs(t){return'href="'+zt(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function jv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function K1(t,n,s,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",s),gn(n),t.head.appendChild(n))}function Fs(t){return'[src="'+zt(t)+'"]'}function al(t){return"script[async]"+t}function Zv(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+zt(s.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),Un(o,"style",u),Pc(o,s.precedence,t),n.instance=o;case"stylesheet":u=zs(s.href);var d=t.querySelector(il(u));if(d)return n.state.loading|=4,n.instance=d,gn(d),d;o=jv(s),(u=Ei.get(u))&&Qd(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),Un(d,"link",o),n.state.loading|=4,Pc(d,s.precedence,t),n.instance=d;case"script":return d=Fs(s.src),(u=t.querySelector(al(d)))?(n.instance=u,gn(u),u):(o=s,(u=Ei.get(d))&&(o=v({},s),Jd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),Un(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Pc(o,s.precedence,t));return n.instance}function Pc(t,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Qd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ic=null;function Kv(t,n,s){if(Ic===null){var o=new Map,u=Ic=new Map;u.set(s,o)}else u=Ic,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ba]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function Qv(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function Q1(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function J1(t,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=zs(o.href),d=n.querySelector(il(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=zc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=n.ownerDocument||n,o=jv(o),(u=Ei.get(u))&&Qd(o,u),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),Un(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=zc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var $d=0;function $1(t,n){return t.stylesheets&&t.count===0&&Bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&$d===0&&($d=62500*U1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>$d?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function Bc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,n.forEach(eM,t),Fc=null,zc.call(t))}function eM(t,n){if(!(n.state.loading&4)){var s=Fc.get(t);if(s)var o=s.get(null);else{s=new Map,Fc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,u),s.set(x,u),this.count++,o=zc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var rl={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function tM(t,n,s,o,u,d,x,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function $v(t,n,s,o,u,d,x,R,B,ne,_e,be){return t=new tM(t,n,s,x,B,ne,_e,be,R),n=1,d===!0&&(n|=24),d=oi(3,null,null,n),t.current=d,d.stateNode=t,n=Lf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:n},If(d),t}function e_(t){return t?(t=ms,t):ms}function t_(t,n,s,o,u,d){u=e_(u),o.context===null?o.context=u:o.pendingContext=u,o=Za(n),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Ka(t,o,n),s!==null&&(Jn(s,t,n),zo(s,t,n))}function n_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function eh(t,n){n_(t,n),(t=t.alternate)&&n_(t,n)}function i_(t){if(t.tag===13||t.tag===31){var n=Nr(t,67108864);n!==null&&Jn(n,t,67108864),eh(t,67108864)}}function a_(t){if(t.tag===13||t.tag===31){var n=di();n=xo(n);var s=Nr(t,n);s!==null&&Jn(s,t,n),eh(t,n)}}var Hc=!0;function nM(t,n,s,o){var u=D.T;D.T=null;var d=G.p;try{G.p=2,th(t,n,s,o)}finally{G.p=d,D.T=u}}function iM(t,n,s,o){var u=D.T;D.T=null;var d=G.p;try{G.p=8,th(t,n,s,o)}finally{G.p=d,D.T=u}}function th(t,n,s,o){if(Hc){var u=nh(o);if(u===null)Gd(t,n,o,Gc,s),s_(t,o);else if(rM(u,t,n,s,o))o.stopPropagation();else if(s_(t,o),n&4&&-1<aM.indexOf(t)){for(;u!==null;){var d=sa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=we(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var B=1<<31-Be(x);R.entanglements[1]|=B,x&=~B}Zi(d),(Lt&6)===0&&(Mc=Vt()+500,$o(0))}}break;case 31:case 13:R=Nr(d,2),R!==null&&Jn(R,d,2),Tc(),eh(d,2)}if(d=nh(o),d===null&&Gd(t,n,o,Gc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Gd(t,n,o,null,s)}}function nh(t){return t=af(t),ih(t)}var Gc=null;function ih(t){if(Gc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=f(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gc=t,null}function r_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case O:return 2;case M:return 8;case J:case se:return 32;case me:return 268435456;default:return 32}default:return 32}}var ah=!1,or=null,lr=null,cr=null,sl=new Map,ol=new Map,ur=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s_(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(n.pointerId)}}function ll(t,n,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=sa(n),n!==null&&i_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function rM(t,n,s,o,u){switch(n){case"focusin":return or=ll(or,t,n,s,o,u),!0;case"dragenter":return lr=ll(lr,t,n,s,o,u),!0;case"mouseover":return cr=ll(cr,t,n,s,o,u),!0;case"pointerover":var d=u.pointerId;return sl.set(d,ll(sl.get(d)||null,t,n,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ol.set(d,ll(ol.get(d)||null,t,n,s,o,u)),!0}return!1}function o_(t){var n=ra(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){t.blockedOn=n,ls(t.priority,function(){a_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,ls(t.priority,function(){a_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=nh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);nf=o,s.target.dispatchEvent(o),nf=null}else return n=sa(s),n!==null&&i_(n),t.blockedOn=s,!1;n.shift()}return!0}function l_(t,n,s){Vc(t)&&s.delete(n)}function sM(){ah=!1,or!==null&&Vc(or)&&(or=null),lr!==null&&Vc(lr)&&(lr=null),cr!==null&&Vc(cr)&&(cr=null),sl.forEach(l_),ol.forEach(l_)}function kc(t,n){t.blockedOn===n&&(t.blockedOn=null,ah||(ah=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sM)))}var Xc=null;function c_(t){Xc!==t&&(Xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Xc===t&&(Xc=null);for(var n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ih(o||s)===null)continue;break}var d=sa(s);d!==null&&(t.splice(n,3),n-=3,nd(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Bs(t){function n(B){return kc(B,t)}or!==null&&kc(or,t),lr!==null&&kc(lr,t),cr!==null&&kc(cr,t),sl.forEach(n),ol.forEach(n);for(var s=0;s<ur.length;s++){var o=ur[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ur.length&&(s=ur[0],s.blockedOn===null);)o_(s),s.blockedOn===null&&ur.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],x=u[wn]||null;if(typeof d=="function")x||c_(s);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[wn]||null)R=x.formAction;else if(ih(u)!==null)continue}else R=x.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),c_(s)}}}function u_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rh(t){this._internalRoot=t}Wc.prototype.render=rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=di();t_(s,o,t,n,null,null)},Wc.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t_(t.current,2,null,t,null,null),Tc(),n[qn]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var n=So();t={blockedOn:null,target:t,priority:n};for(var s=0;s<ur.length&&n!==0&&n<ur[s].priority;s++);ur.splice(s,0,t),s===0&&o_(t)}};var f_=e.version;if(f_!=="19.2.8")throw Error(a(527,f_,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var oM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{he=qc.inject(oM),ge=qc}catch{}}return ul.createRoot=function(t,n){if(!l(t))throw Error(a(299));var s=!1,o="",u=_0,d=x0,x=y0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=$v(t,1,!1,null,null,s,o,null,u,d,x,u_),t[qn]=n.current,Hd(t),new rh(n)},ul.hydrateRoot=function(t,n,s){if(!l(t))throw Error(a(299));var o=!1,u="",d=_0,x=x0,R=y0,B=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(B=s.formState)),n=$v(t,1,!0,n,s??null,o,u,B,d,x,R,u_),n.context=e_(null),s=n.current,o=di(),o=xo(o),u=Za(o),u.callback=null,Ka(s,u,o),s=o,n.current.lanes=s,ke(n,s),Zi(n),t[qn]=n.current,Hd(t),new Wc(n)},ul.version="19.2.8",ul}var J_;function e2(){if(J_)return hh.exports;J_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hh.exports=$A(),hh.exports}var t2=e2();function $_(r){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${r}-${e}`}function ex(r){return{id:r.message_id,role:r.role,content:r.content}}function fl(r,e,i,a){return r.map(l=>l.id!==e?l:{...l,content:i,streaming:a})}function n2(r,e,i){return e?r.find(a=>a.conversation_id===e)?.title??i:i}function i2(r,e){const[i,a]=Ke.useState([]),[l,c]=Ke.useState(null),f=l,[h,m]=Ke.useState([]),[p,_]=Ke.useState(""),[v,g]=Ke.useState("idle"),[S,E]=Ke.useState(null),[C,b]=Ke.useState(null),[y,P]=Ke.useState(null),[z,w]=Ke.useState(null),[U,L]=Ke.useState([]),F=Ke.useRef(0),T=Ke.useRef(null);Ke.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const I=Ke.useMemo(()=>n2(i,l,e.newConversationTitle),[l,i,e.newConversationTitle]),k=v!=="idle";Ke.useEffect(()=>{let ue=!0;async function N(){try{let W=await r.listConversations(),ve=localStorage.getItem(e.storageKey);W.some(ee=>ee.conversation_id===ve)||(ve=W[0]?.conversation_id??null),ve||(ve=(await r.createConversation()).conversation_id,W=await r.listConversations());const Ae=await r.loadMessages(ve);if(!ue)return;a(W),c(ve),m(Ae.map(ex)),localStorage.setItem(e.storageKey,ve)}catch(W){ue&&w(W instanceof Error?W.message:e.wakeErrorMessage)}}return N(),()=>{ue=!1}},[r,e.storageKey,e.wakeErrorMessage]);async function H(){a(await r.listConversations())}async function K(){if(k||h.length===0)return!1;const ue=await r.createConversation();return c(ue.conversation_id),m([]),b(null),E(null),P(null),localStorage.setItem(e.storageKey,ue.conversation_id),await H(),!0}async function ce(ue){if(!k){if(await r.deleteConversation(ue),ue===f){const N=(await r.listConversations()).filter(W=>W.conversation_id!==ue);N.length>0?await q(N[0].conversation_id):await K()}await H()}}async function de(ue){return r.getPassage(ue)}async function q(ue){if(k||ue===l)return!1;const N=F.current+1;F.current=N;const W=await r.loadMessages(ue);return F.current!==N?!1:(c(ue),m(W.map(ex)),b(null),E(null),P(null),localStorage.setItem(e.storageKey,ue),!0)}function D(ue,N,W){if(ue.type==="delta"){T.current&&clearTimeout(T.current),L([]);const ve=W+ue.text;return m(Se=>fl(Se,N,ve,!0)),{text:ve,terminal:!1}}return ue.type==="completed"?(m(ve=>fl(ve,N,ue.text,!1)),E(N),{text:ue.text,terminal:!0}):ue.type==="tool"?(L([{name:ue.name,status:ue.status,detail:ue.detail,preview:ue.preview,handles:ue.handles}]),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>L([]),3500),{text:W,terminal:!1}):(m(ve=>fl(ve,N,W,!1)),P(ue.message),{text:W,terminal:!0})}async function G(ue){if(!l||k)return;const N=$_("assistant");_(""),b(ue),E(null),P(null),L([]),g("streaming"),m(Se=>[...Se,{id:$_("owner"),role:"owner",content:ue},{id:N,role:"weaver",content:"",streaming:!0}]);let W="",ve=!1;try{for await(const Se of r.streamTurn(l,ue)){const Ae=D(Se,N,W);if(W=Ae.text,ve=Ae.terminal,Ae.terminal)break}ve||(m(Se=>fl(Se,N,W,!1)),P(e.incompleteTurnMessage))}catch(Se){m(ee=>fl(ee,N,W,!1));const Ae=Se instanceof Error?Se.message:e.connectionLostMessage;P(Se instanceof Error?`${Ae} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await H()}catch{}}}async function $(){if(!(!l||v!=="streaming")){g("cancelling");try{await r.cancelTurn(l)}catch(ue){P(ue instanceof Error?ue.message:e.cancelFailedMessage),g("streaming")}}}function pe(){C&&v==="idle"&&G(C)}return{activeTitle:I,activity:U,bootError:z,cancelTurn:$,conversationId:l,conversations:i,createConversation:K,deleteConversation:ce,loadPassage:de,draft:p,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:pe,selectConversation:q,sendMessage:G,setDraft:_,turnActive:k,turnState:v}}const a2={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."};var r2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},s2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},o2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},l2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},c2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},u2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},f2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},d2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},h2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},p2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},m2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},g2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},v2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]};function _2(r){return r=r-0,r===r}function yS(r){return _2(r)?r:(r=r.replace(/[_-]+(.)?/g,(e,i)=>i?i.toUpperCase():""),r.charAt(0).toLowerCase()+r.slice(1))}var x2=(r,e)=>rm.createElement("stop",{key:`${e}-${r.offset}`,offset:r.offset,stopColor:r.color,...r.opacity!==void 0&&{stopOpacity:r.opacity}});function y2(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Gs=new Map,S2=1e3;function b2(r){if(Gs.has(r))return Gs.get(r);const e={};let i=0;const a=r.length;for(;i<a;){const l=r.indexOf(";",i),c=l===-1?a:l,f=r.slice(i,c).trim();if(f){const h=f.indexOf(":");if(h>0){const m=f.slice(0,h).trim(),p=f.slice(h+1).trim();if(m&&p){const _=yS(m);e[_.startsWith("webkit")?y2(_):_]=p}}}i=c+1}if(Gs.size===S2){const l=Gs.keys().next().value;l&&Gs.delete(l)}return Gs.set(r,e),e}function SS(r,e,i={}){if(typeof e=="string")return e;const a=(e.children||[]).map(v=>{let g=v;return("fill"in i||i.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),SS(r,g)}),l=e.attributes||{},c={};for(const[v,g]of Object.entries(l))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=b2(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[yS(v)]=g}const{style:f,role:h,"aria-label":m,gradientFill:p,..._}=i;if(f&&(c.style=c.style?{...c.style,...f}:f),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;a.unshift(r(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(x2)))}return r(e.tag,{...c,..._},...a)}var M2=SS.bind(null,rm.createElement),tx=(r,e)=>{const i=Ke.useId();return r||(e?i:void 0)},E2=class{constructor(r="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=r,this.enabled=e}log(...r){this.enabled&&console.log(`[${this.scope}]`,...r)}warn(...r){this.enabled&&console.warn(`[${this.scope}]`,...r)}error(...r){this.enabled&&console.error(`[${this.scope}]`,...r)}},T2="searchPseudoElementsFullScan"in is&&typeof is.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",A2=Number.parseInt(T2)>=7,R2=()=>A2,Tl="fa",Rn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},C2={left:"fa-pull-left",right:"fa-pull-right"},w2={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},D2={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Pi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function N2(r){const e=is.cssPrefix||is.familyPrefix||Tl;return e===Tl?r:r.replace(new RegExp(String.raw`(?<=^|\s)${Tl}-`,"g"),`${e}-`)}function L2(r){const{beat:e,fade:i,beatFade:a,bounce:l,shake:c,spin:f,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:E,rotation:C,pull:b,swapOpacity:y,rotateBy:P,widthAuto:z,canvasSquare:w,canvasRoomy:U,flip360:L,buzz:F,float:T,jello:I,spinSnap:k,spinSnap4:H,spinSnap8:K,swing:ce,wag:de,className:q}=r,D=[];return q&&D.push(...q.split(" ")),e&&D.push(Rn.beat),i&&D.push(Rn.fade),a&&D.push(Rn.beatFade),l&&D.push(Rn.bounce),c&&D.push(Rn.shake),f&&D.push(Rn.spin),m&&D.push(Rn.spinReverse),h&&D.push(Rn.spinPulse),p&&D.push(Rn.pulse),_&&D.push(Pi.fixedWidth),v&&D.push(Pi.inverse),g&&D.push(Pi.border),S===!0&&D.push(Pi.flip),(S==="horizontal"||S==="both")&&D.push(Pi.flipHorizontal),(S==="vertical"||S==="both")&&D.push(Pi.flipVertical),E!=null&&D.push(D2[E]),C!=null&&C!==0&&D.push(w2[C]),b!=null&&D.push(C2[b]),y&&D.push(Pi.swapOpacity),R2()?(P&&D.push(Pi.rotateBy),z&&D.push(Pi.widthAuto),w&&D.push(Pi.canvasSquare),U&&D.push(Pi.canvasRoomy),L&&D.push(Rn.flip360),F&&D.push(Rn.buzz),T&&D.push(Rn.float),I&&D.push(Rn.jello),k&&D.push(Rn.spinSnap),H&&D.push(Rn.spinSnap4),K&&D.push(Rn.spinSnap8),ce&&D.push(Rn.swing),de&&D.push(Rn.wag),(is.cssPrefix||is.familyPrefix||Tl)===Tl?D:D.map(N2)):D}var U2=r=>typeof r=="object"&&"icon"in r&&!!r.icon;function nx(r){if(r)return U2(r)?r:xS.icon(r)}function O2(r){return Object.keys(r)}var ix=new E2("FontAwesomeIcon"),bS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},P2=new Set(Object.keys(bS)),ti=rm.forwardRef((r,e)=>{const i={...bS,...r},{icon:a,mask:l,symbol:c,title:f,titleId:h,maskId:m,transform:p}=i,_=tx(m,!!l),v=tx(h,!!f),g=nx(a);if(!g)return ix.error("Icon lookup is undefined",a),null;const S=L2(i),E=typeof p=="string"?xS.transform(p):p,C=nx(l),b=jA(g,{...S.length>0&&{classes:S},...E&&{transform:E},...C&&{mask:C},symbol:c,title:f,titleId:v,maskId:_});if(!b)return ix.error("Could not find icon",g),null;const{abstract:y}=b,P={ref:e};for(const z of O2(i))P2.has(z)||(P[z]=i[z]);return M2(y[0],P)});ti.displayName="FontAwesomeIcon";function I2(r){return V.jsx(ti,{"aria-hidden":"true",icon:u2,...r})}function ax(r){return V.jsx(ti,{"aria-hidden":"true",icon:g2,...r})}function z2(r){return V.jsx(ti,{"aria-hidden":"true",icon:m2,...r})}function F2(r){return V.jsx(ti,{"aria-hidden":"true",icon:f2,...r})}function B2(r){return V.jsx(ti,{"aria-hidden":"true",icon:v2,...r})}function Qc(r){return V.jsx(ti,{"aria-hidden":"true",icon:l2,...r})}function H2(r){return V.jsx(ti,{"aria-hidden":"true",icon:r2,...r})}function G2(r){return V.jsx(ti,{"aria-hidden":"true",icon:p2,...r})}function V2(r){return V.jsx(ti,{"aria-hidden":"true",icon:c2,...r})}function k2(r){return V.jsx(ti,{"aria-hidden":"true",icon:s2,...r})}function X2(r){return V.jsx(ti,{"aria-hidden":"true",icon:d2,...r})}function W2(r){return V.jsx(ti,{"aria-hidden":"true",icon:h2,...r})}const q2=["awakened","ascended","transcendent"];function Y2({cancelling:r,draft:e,inputLabel:i="Message assistant",onCancel:a,onDraftChange:l,onSubmit:c,onTierChange:f,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const E=Ke.useRef(null),C=v??E,b=Ke.useRef(null),[y,P]=Ke.useState(!1);Ke.useEffect(()=>{const U=C.current;U&&(U.style.height="auto",U.style.height=`${Math.min(U.scrollHeight,160)}px`)},[e,C]),Ke.useEffect(()=>{if(!y)return;function U(F){b.current&&!b.current.contains(F.target)&&P(!1)}function L(F){F.key==="Escape"&&P(!1)}return document.addEventListener("pointerdown",U),document.addEventListener("keydown",L),()=>{document.removeEventListener("pointerdown",U),document.removeEventListener("keydown",L)}},[y]);function z(){const U=e.trim();!U||S||c(U)}function w(U){U.key!=="Enter"||U.shiftKey||(U.preventDefault(),z())}return V.jsx("div",{className:"composer-wrap",children:V.jsxs("div",{className:"composer-shell",children:[V.jsx("textarea",{"aria-label":i,disabled:S,onChange:U=>l(U.target.value),onKeyDown:w,placeholder:h,ref:C,rows:1,value:e}),V.jsxs("div",{className:"composer-tier",ref:b,children:[V.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>P(U=>!U),type:"button",children:[V.jsx("span",{className:"tier-pill-name",children:g}),V.jsx(W2,{})]}),y&&V.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:q2.map(U=>V.jsx("li",{children:V.jsxs("button",{"aria-selected":U===g,onClick:()=>{f(U),P(!1)},role:"option",type:"button",children:[V.jsx("span",{className:"tier-menu-check",children:U===g?"✦":""}),U]})},U))})]}),S?V.jsx("button",{"aria-label":r?_:p,className:"composer-action composer-stop",disabled:r,onClick:a,type:"button",children:V.jsx(B2,{})}):V.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:z,type:"button",children:V.jsx(I2,{})})]})})}function j2(r){return(r||"").slice(0,10)}function Z2(r){const e=new Date,i=new Date;i.setDate(e.getDate()-1);const a=new Date;a.setDate(e.getDate()-7);const l=f=>new Date(j2(f)+"T00:00:00"),c=[{label:"Today",conversations:[]},{label:"Yesterday",conversations:[]},{label:"This week",conversations:[]},{label:"Older",conversations:[]}];for(const f of r){const h=l(f.created_at||""),m=h>=l(e.toISOString())?"Today":h>=l(i.toISOString())?"Yesterday":h>=l(a.toISOString())?"This week":"Older";c.find(p=>p.label===m)?.conversations.push(f)}return c.filter(f=>f.conversations.length>0)}function K2({Mark:r,activeConversationId:e,conversations:i,desktopCollapsed:a,disabled:l,interactionHidden:c,mobileLayout:f,mobileOpen:h,onClose:m,onCreate:p,onDelete:_,onOpenSettings:v,onSelect:g,product:S,readerChapter:E,spoilerMode:C,tier:b}){const y=Ke.useRef(null),[P,z]=Ke.useState(new Set),[w,U]=Ke.useState(null);Ke.useEffect(()=>{h&&y.current?.focus()},[h]);function L(k){z(H=>{const K=new Set(H);return K.has(k)?K.delete(k):K.add(k),K})}function F(k){if(w===k){U(null),_(k);return}U(k),window.setTimeout(()=>{U(H=>H===k?null:H)},3e3)}const T=Z2(i),I=[E?`ch ${E}`:"reader unknown",b,C==="protect"?"spoilers protected":"no spoiler care"].join(" · ");return V.jsxs(V.Fragment,{children:[V.jsx("button",{"aria-hidden":"true","aria-label":S.closeRailLabel,className:`drawer-scrim ${h?"drawer-scrim-open":""}`,onClick:m,tabIndex:-1,type:"button"}),V.jsxs("aside",{"aria-hidden":c,"aria-label":f?S.navigationLabel:void 0,"aria-modal":f&&h?!0:void 0,className:["conversation-rail",a?"conversation-rail-collapsed":"",h?"conversation-rail-open":""].filter(Boolean).join(" "),id:"conversation-rail",inert:c,role:f?"dialog":void 0,children:[V.jsxs("header",{className:"rail-brand",children:[V.jsxs("div",{className:"brand-lockup",children:[V.jsx("div",{className:"brand-mark-seal",children:V.jsx(r,{className:"brand-mark",compact:!0})}),V.jsxs("div",{children:[V.jsx("strong",{children:S.assistantName}),V.jsx("span",{children:S.brandLine})]})]}),V.jsx("button",{"aria-label":S.closeRailLabel,className:"icon-button rail-close",onClick:m,ref:y,type:"button",children:V.jsx(G2,{})})]}),V.jsxs("button",{className:"new-weave-button",disabled:l,onClick:p,type:"button",children:[V.jsx(z2,{}),V.jsx("span",{children:S.newConversationLabel})]}),V.jsxs("div",{className:"rail-scroll",children:[V.jsxs("section",{"aria-label":"Threads",className:"rail-section",children:[V.jsxs("div",{className:"rail-section-label",children:[V.jsx("span",{children:S.recentConversationsLabel}),V.jsx("span",{className:"thread-count",children:i.length})]}),V.jsxs("nav",{"aria-label":S.navigationLabel,className:"conversation-list",children:[T.map(k=>V.jsxs("div",{className:"conversation-group",children:[V.jsxs("button",{"aria-expanded":!P.has(k.label),className:"conversation-group-toggle",onClick:()=>L(k.label),type:"button",children:[V.jsx("span",{className:"group-caret",children:P.has(k.label)?"▸":"▾"}),V.jsx("span",{children:k.label}),V.jsx("span",{className:"group-count",children:k.conversations.length})]}),!P.has(k.label)&&V.jsx("ul",{className:"conversation-group-list",children:k.conversations.map(H=>{const K=H.conversation_id===e;return V.jsxs("li",{className:"conversation-row",children:[V.jsxs("button",{"aria-current":K?"page":void 0,"aria-label":`${H.title} ${S.conversationNoun}`,className:`conversation-item ${K?"conversation-item-active":""}`,disabled:l,onClick:()=>g(H.conversation_id),type:"button",children:[V.jsx(Qc,{}),V.jsx("span",{className:"conversation-title",children:H.title})]}),V.jsx("button",{"aria-label":`Delete ${H.title}`,className:"conversation-delete",disabled:l,onClick:()=>F(H.conversation_id),title:w===H.conversation_id?"Sure?":"Delete",type:"button",children:V.jsx(k2,{})})]},H.conversation_id)})})]},k.label)),T.length===0&&V.jsx("p",{className:"conversation-empty",children:"No threads yet."})]})]}),V.jsxs("section",{"aria-label":"Library",className:"rail-section rail-section-library",children:[V.jsx("div",{className:"rail-section-label",children:V.jsx("span",{children:"Library"})}),V.jsxs("ul",{className:"library-list",children:[V.jsxs("li",{className:"library-row",title:"Not yet woven",children:[V.jsx(Qc,{}),V.jsx("span",{children:"What-ifs"}),V.jsx("span",{className:"library-soon",children:"not yet woven"})]}),V.jsxs("li",{className:"library-row",title:"Not yet woven",children:[V.jsx(Qc,{}),V.jsx("span",{children:"Your takes"}),V.jsx("span",{className:"library-soon",children:"not yet woven"})]}),V.jsxs("li",{className:"library-row",title:"Not yet woven",children:[V.jsx(Qc,{}),V.jsx("span",{children:"Arc recaps"}),V.jsx("span",{className:"library-soon",children:"not yet woven"})]})]})]})]}),V.jsxs("footer",{className:"rail-footer",children:[V.jsxs("button",{"aria-label":"Reader status and settings",className:"reader-status",onClick:v,type:"button",children:[V.jsx("span",{className:"reader-status-line",children:I}),V.jsx(V2,{})]}),V.jsx("p",{className:"footer-line",children:S.footerLine})]})]})]})}function Q2({onClose:r,onSave:e,initial:i}){const[a,l]=Ke.useState(i.reader_chapter==null?"":String(i.reader_chapter)),[c,f]=Ke.useState(i.spoiler_mode),[h,m]=Ke.useState(i.tier),[p,_]=Ke.useState(!1),v=Ke.useRef(null);Ke.useEffect(()=>{v.current?.focus()},[]);async function g(){_(!0);const E=a.trim()===""?null:Number(a);await e({reader_chapter:E&&E>=1&&E<=3127?E:null,spoiler_mode:c,tier:h}),_(!1),r()}const S=a.trim()===""?"?":a;return V.jsx("div",{"aria-label":"Chat settings","aria-modal":"true",className:"settings-backdrop",role:"dialog",children:V.jsxs("div",{className:"soul-sea-panel",children:[V.jsxs("div",{className:"soul-sea-sky",children:[V.jsx("div",{"aria-hidden":"true",className:"soul-sun"}),V.jsx("div",{"aria-hidden":"true",className:"soul-sun-glow"}),V.jsxs("div",{className:"soul-core",role:"img","aria-label":`At chapter ${S}`,children:[V.jsx("span",{className:"soul-core-star"}),V.jsx("strong",{className:"soul-core-chapter",children:S})]}),V.jsx("p",{className:"soul-sea-caption",children:a.trim()===""?"your soul core hangs unanchored — name your chapter, and Weaver orients her answers around it":`your soul core · ch ${S} · weaver weaves her answers around this position`})]}),V.jsxs("div",{className:"soul-spheres",children:[V.jsxs("div",{className:"soul-sphere",children:[V.jsxs("label",{className:"soul-sphere-label",htmlFor:"reader-chapter",children:[V.jsx("span",{className:"soul-sphere-name",children:"I'm at chapter"}),V.jsx("input",{className:"settings-input",id:"reader-chapter",inputMode:"numeric",onChange:E=>l(E.target.value),placeholder:"unknown",ref:v,type:"number",value:a})]}),V.jsx("span",{className:"settings-hint",children:"1-3127. Leave empty if you do not want to say."})]}),V.jsxs("fieldset",{className:"soul-sphere",children:[V.jsx("legend",{className:"soul-sphere-label",children:V.jsx("span",{className:"soul-sphere-name",children:"Spoilers"})}),V.jsxs("label",{className:"settings-option",children:[V.jsx("input",{checked:c==="protect",name:"spoiler-mode",onChange:()=>f("protect"),type:"radio"}),"Protect the story"]}),V.jsxs("label",{className:"settings-option",children:[V.jsx("input",{checked:c==="none",name:"spoiler-mode",onChange:()=>f("none"),type:"radio"}),"No spoiler care (spoil me freely)"]})]}),V.jsxs("fieldset",{className:"soul-sphere",children:[V.jsx("legend",{className:"soul-sphere-label",children:V.jsx("span",{className:"soul-sphere-name",children:"Reading tier"})}),V.jsxs("label",{className:"settings-option",children:[V.jsx("input",{checked:h==="awakened",name:"reading-tier",onChange:()=>m("awakened"),type:"radio"}),"Awakened (fast, 50 tool steps)"]}),V.jsxs("label",{className:"settings-option",children:[V.jsx("input",{checked:h==="ascended",name:"reading-tier",onChange:()=>m("ascended"),type:"radio"}),"Ascended (default, 70 tool steps)"]}),V.jsxs("label",{className:"settings-option",children:[V.jsx("input",{checked:h==="transcendent",name:"reading-tier",onChange:()=>m("transcendent"),type:"radio"}),"Transcendent (deep, 90 tool steps)"]})]})]}),V.jsxs("div",{className:"soul-sea-actions",children:[V.jsx("button",{className:"settings-button",onClick:r,type:"button",children:"Cancel"}),V.jsx("button",{className:"settings-button settings-button-primary",disabled:p,onClick:()=>{g()},type:"button",children:p?"Saving…":"Save"})]})]})})}const J2=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function $2(r){try{const e=new URL(r);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function vh(r,e){if(!e)return;const i=r.at(-1);if(i?.type==="text"){i.value+=e;return}r.push({type:"text",value:e})}function Jc(r){const e=[];let i=0;for(const a of r.matchAll(J2)){const l=a.index??0;vh(e,r.slice(i,l));const c=a[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const f=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=f?.[2]??"";f&&$2(h)?e.push({type:"link",label:f[1],href:h}):vh(e,c)}i=l+c.length}return vh(e,r.slice(i)),e}function e3(r){const e=r.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function t3(r){const e=[],i=String(r??"").split(/\r?\n/);let a=0;for(;a<i.length;){const l=i[a].trim();if(!l){a+=1;continue}if(l.startsWith("```")){const p=[];for(a+=1;a<i.length&&!i[a].trimStart().startsWith("```");)p.push(i[a]),a+=1;a<i.length&&(a+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(l);if(c){e.push({type:"heading",level:c[1].length,children:Jc(c[2])}),a+=1;continue}if(l.startsWith(">")){e.push({type:"quote",children:Jc(l.replace(/^>\s?/,""))}),a+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){e.push({type:"rule"}),a+=1;continue}const f=/^[-*]\s+/.test(l),h=/^\d+[.)]\s+/.test(l);if(f||h){const p=[];for(;a<i.length;){const _=i[a].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(Jc(v[1])),a+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;a<i.length;){const p=i[a].trim();if(!p||m.length>0&&e3(p))break;m.push(p),a+=1}e.push({type:"paragraph",children:Jc(m.join(" "))})}return e}function io(r){return r.map((e,i)=>{const a=`${e.type}-${i}`;return e.type==="text"?V.jsx(Ke.Fragment,{children:e.value},a):e.type==="strong"?V.jsx("strong",{children:io(e.children)},a):e.type==="emphasis"?V.jsx("em",{children:io(e.children)},a):e.type==="code"?V.jsx("code",{children:e.value},a):V.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},a)})}function n3({children:r}){return t3(r).map((i,a)=>{const l=`${i.type}-${a}`;if(i.type==="paragraph")return V.jsx("p",{children:io(i.children)},l);if(i.type==="heading"){const f=`h${i.level}`;return V.jsx(f,{children:io(i.children)},l)}if(i.type==="code")return V.jsx("pre",{children:V.jsx("code",{children:i.value})},l);if(i.type==="quote")return V.jsx("blockquote",{children:io(i.children)},l);if(i.type==="rule")return V.jsx("hr",{},l);const c=i.ordered?"ol":"ul";return V.jsx(c,{children:i.items.map((f,h)=>V.jsx("li",{children:io(f)},`${l}-${h}`))},l)})}const i3={search_story:{doing:"searching the library",done:"searched the library"},read_chapters:{doing:"recalling a passage",done:"recalled a passage"},find_text:{doing:"finding the words",done:"found the words"},browse_chapters:{doing:"browsing the chapters",done:"browsed the chapters"},who_is:{doing:"consulting the notebook",done:"consulted the notebook"}};function a3(r,e,i){const a=i3[r];return a?e==="start"?`weaver is ${a.doing}`:`weaver has ${a.done}`:e==="start"?`${r} ${i||"started"}`.trim():`${r} ${i||"done"}`.trim()}function r3({Mark:r,activity:e,assistantName:i,message:a,onQuote:l,onRegenerate:c,onViewPassage:f,regenerateLabel:h}){const[m,p]=Ke.useState(!1),[_,v]=Ke.useState(null),[g,S]=Ke.useState(null),E=Ke.useRef(null);Ke.useEffect(()=>{function b(){if(a.role!=="weaver"||!l||!E.current)return;const y=window.getSelection(),P=y?y.toString().trim():"",z=E.current,w=y&&y.rangeCount>0&&z.contains(y.getRangeAt(0).commonAncestorContainer);if(P.length>=2&&w){const U=y.getRangeAt(0).getBoundingClientRect();v(P),S({top:U.bottom+6,left:U.left})}else v(null),S(null)}return document.addEventListener("selectionchange",b),()=>document.removeEventListener("selectionchange",b)},[a.role,l]);async function C(){await navigator.clipboard?.writeText(a.content),p(!0),window.setTimeout(()=>p(!1),1400)}return a.role==="owner"?V.jsx("article",{className:"message message-owner",children:V.jsxs("div",{className:"owner-message-content",children:[V.jsx("div",{className:"owner-bubble",children:a.content}),V.jsx("div",{className:"message-actions",children:V.jsxs("button",{"aria-label":"Copy owner message",onClick:C,type:"button",children:[V.jsx(ax,{}),V.jsx("span",{children:m?"Copied":"Copy"})]})})]})}):V.jsxs("article",{className:`message message-weaver ${a.streaming?"message-streaming":""}`,children:[V.jsx("div",{className:"weaver-avatar",children:V.jsx(r,{compact:!0})}),V.jsxs("div",{className:"weaver-message-content",children:[V.jsx("div",{className:"message-role",children:i}),e&&V.jsxs("p",{className:`spell-line spell-line-${e.status}`,children:[V.jsx("span",{className:"spell-bracket",children:"["}),a3(e.name,e.status,e.detail),e.preview&&V.jsxs("span",{className:"spell-preview",children:[" ",e.preview,"…"]}),e.handles&&e.handles.length>0&&V.jsx("button",{"aria-label":"View the recalled passage",className:"spell-view",onClick:()=>f?.(e.handles[0]),type:"button",children:"view passage"}),V.jsx("span",{className:"spell-bracket",children:"]"})]}),V.jsx("div",{className:"markdown-body",ref:E,children:a.content?V.jsx(n3,{children:a.content}):V.jsx("span",{className:"thinking-thread"})}),!a.streaming&&a.content&&V.jsxs("div",{className:"message-actions",children:[V.jsxs("button",{"aria-label":"Copy reply",onClick:C,type:"button",children:[V.jsx(ax,{}),V.jsx("span",{children:m?"Copied":"Copy"})]}),c&&V.jsxs("button",{"aria-label":"Regenerate reply",onClick:c,type:"button",children:[V.jsx(F2,{}),V.jsx("span",{children:h})]})]})]}),_&&g&&V.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{l?.(_),v(null),S(null)},style:{top:g.top,left:g.left},type:"button",children:[V.jsx(X2,{}),V.jsx("span",{children:"ask about this"})]})]})}const _m="185",s3=0,rx=1,o3=2,wu=1,l3=2,Sl=3,Mr=0,ei=1,wa=2,Na=0,so=1,sx=2,ox=3,lx=4,c3=5,Kr=100,u3=101,f3=102,d3=103,h3=104,p3=200,m3=201,g3=202,v3=203,hp=204,pp=205,_3=206,x3=207,y3=208,S3=209,b3=210,M3=211,E3=212,T3=213,A3=214,mp=0,gp=1,vp=2,uo=3,_p=4,xp=5,yp=6,Sp=7,MS=0,R3=1,C3=2,na=0,ES=1,TS=2,AS=3,RS=4,CS=5,wS=6,DS=7,NS=300,as=301,fo=302,_h=303,xh=304,Ju=306,bp=1e3,Da=1001,Mp=1002,On=1003,w3=1004,$c=1005,Gn=1006,yh=1007,$r=1008,Ci=1009,LS=1010,US=1011,Rl=1012,xm=1013,aa=1014,ea=1015,Pa=1016,ym=1017,Sm=1018,Cl=1020,OS=35902,PS=35899,IS=1021,zS=1022,Gi=1023,Ia=1026,es=1027,FS=1028,bm=1029,rs=1030,Mm=1031,Em=1033,Du=33776,Nu=33777,Lu=33778,Uu=33779,Ep=35840,Tp=35841,Ap=35842,Rp=35843,Cp=36196,wp=37492,Dp=37496,Np=37488,Lp=37489,Fu=37490,Up=37491,Op=37808,Pp=37809,Ip=37810,zp=37811,Fp=37812,Bp=37813,Hp=37814,Gp=37815,Vp=37816,kp=37817,Xp=37818,Wp=37819,qp=37820,Yp=37821,jp=36492,Zp=36494,Kp=36495,Qp=36283,Jp=36284,Bu=36285,$p=36286,D3=3200,cx=0,N3=1,_r="",Ai="srgb",Hu="srgb-linear",Gu="linear",Gt="srgb",Vs=7680,ux=519,L3=512,U3=513,O3=514,Tm=515,P3=516,I3=517,Am=518,z3=519,fx=35044,dx="300 es",ta=2e3,Vu=2001;function F3(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ku(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function B3(){const r=ku("canvas");return r.style.display="block",r}const hx={};function px(...r){const e="THREE."+r.shift();console.log(e,...r)}function BS(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=BS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Rt(...r){r=BS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function oo(...r){const e=r.join(" ");e in hx||(hx[e]=!0,rt(...r))}function H3(r,e,i){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const G3={[mp]:gp,[vp]:yp,[_p]:Sp,[uo]:xp,[gp]:mp,[yp]:vp,[Sp]:_p,[xp]:uo};class os{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,em=180/Math.PI;function Ll(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function V3(r,e){return(r%e+e)%e}function bh(r,e,i){return(1-i)*r+i*e}function dl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wm=class wm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wm.prototype.isVector2=!0;let Ut=wm;class go{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,h){let m=a[l+0],p=a[l+1],_=a[l+2],v=a[l+3],g=c[f+0],S=c[f+1],E=c[f+2],C=c[f+3];if(v!==C||m!==g||p!==S||_!==E){let b=m*g+p*S+_*E+v*C;b<0&&(g=-g,S=-S,E=-E,C=-C,b=-b);let y=1-h;if(b<.9995){const P=Math.acos(b),z=Math.sin(P);y=Math.sin(y*P)/z,h=Math.sin(h*P)/z,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+C*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+C*h;const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],_=a[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return e[i]=h*E+_*v+m*S-p*g,e[i+1]=m*E+_*g+p*v-h*S,e[i+2]=p*E+_*S+h*g-m*v,e[i+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(l/2),v=h(c/2),g=m(a/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=a+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=a*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-a*p,this._z=c*_+f*p+a*m-l*h,this._w=f*_-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let a=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(a=-a,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dm=class Dm{constructor(e=0,i=0,a=0){this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(mx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(mx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*a),_=2*(h*i-c*l),v=2*(c*a-f*i);return this.x=i+m*p+f*v-h*_,this.y=a+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dm.prototype.isVector3=!0;let ie=Dm;const Mh=new ie,mx=new go,Nm=class Nm{constructor(e,i,a,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p)}set(e,i,a,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],S=a[5],E=a[8],C=l[0],b=l[3],y=l[6],P=l[1],z=l[4],w=l[7],U=l[2],L=l[5],F=l[8];return c[0]=f*C+h*P+m*U,c[3]=f*b+h*z+m*L,c[6]=f*y+h*w+m*F,c[1]=p*C+_*P+v*U,c[4]=p*b+_*z+v*L,c[7]=p*y+_*w+v*F,c[2]=g*C+S*P+E*U,c[5]=g*b+S*z+E*L,c[8]=g*y+S*w+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-a*c*_+a*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,E=i*v+a*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(l*p-_*a)*C,e[2]=(h*a-l*f)*C,e[3]=g*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=S*C,e[7]=(a*m-p*i)*C,e[8]=(f*i-a*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,i)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,i){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nm.prototype.isMatrix3=!0;let ct=Nm;const Eh=new ct,gx=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vx=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k3(){const r={enabled:!0,workingColorSpace:Hu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Gt&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Gt&&(l.r=lo(l.r),l.g=lo(l.g),l.b=lo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_r?Gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Hu]:{primaries:e,whitePoint:a,transfer:Gu,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:a,transfer:Gt,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),r}const Et=k3();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class X3{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ks===void 0&&(ks=ku("canvas")),ks.width=e.width,ks.height=e.height;const l=ks.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=ks}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ku("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=La(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(La(i[a]/255)*255):i[a]=La(i[a]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W3=0;class Rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W3++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Th(l[f].image)):c.push(Th(l[f]))}else c=Th(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Th(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?X3.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let q3=0;const Ah=new ie;class Xn extends os{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,a=Da,l=Da,c=Gn,f=$r,h=Gi,m=Ci,p=Xn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q3++}),this.uuid=Ll(),this.name="",this.source=new Rm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==NS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bp:e.x=e.x-Math.floor(e.x);break;case Da:e.x=e.x<0?0:1;break;case Mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bp:e.y=e.y-Math.floor(e.y);break;case Da:e.y=e.y<0?0:1;break;case Mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=NS;Xn.DEFAULT_ANISOTROPY=1;const Lm=class Lm{constructor(e=0,i=0,a=0,l=1){this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],C=m[2],b=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,w=(S+1)/2,U=(y+1)/2,L=(_+g)/4,F=(v+C)/4,T=(E+b)/4;return z>w&&z>U?z<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(z),l=L/a,c=F/a):w>U?w<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),a=L/l,c=T/l):U<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(U),a=F/c,l=T/c),this.set(a,l,c,i),this}let P=Math.sqrt((b-E)*(b-E)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(b-E)/P,this.y=(v-C)/P,this.z=(g-_)/P,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lm.prototype.isVector4=!0;let un=Lm;class Y3 extends os{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:a.depth},c=new Xn(l),f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Rm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends Y3{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class HS extends Xn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j3 extends Xn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qu=class qu{constructor(e,i,a,l,c,f,h,m,p,_,v,g,S,E,C,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p,_,v,g,S,E,C,b)}set(e,i,a,l,c,f,h,m,p,_,v,g,S,E,C,b){const y=this.elements;return y[0]=e,y[4]=i,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=C,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qu().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,a=e.elements,l=1/Xs.setFromMatrixColumn(e,0).length(),c=1/Xs.setFromMatrixColumn(e,1).length(),f=1/Xs.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*v,E=h*_,C=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-C*p,i[9]=-h*m,i[2]=C-g*p,i[6]=E+S*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,C=p*v;i[0]=g+C*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-E,i[6]=C+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,C=p*v;i[0]=g-C*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*_,i[9]=C-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,S=f*v,E=h*_,C=h*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+C,i[1]=m*v,i[5]=C*p+g,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,S=f*p,E=h*m,C=h*p;i[0]=m*_,i[4]=C-g*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-C*v}else if(e.order==="XZY"){const g=f*m,S=f*p,E=h*m,C=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+C,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z3,e,K3)}lookAt(e,i,a){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),dr.crossVectors(a,hi),dr.lengthSq()===0&&(Math.abs(a.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),dr.crossVectors(a,hi)),dr.normalize(),eu.crossVectors(hi,dr),l[0]=dr.x,l[4]=eu.x,l[8]=hi.x,l[1]=dr.y,l[5]=eu.y,l[9]=hi.y,l[2]=dr.z,l[6]=eu.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],S=a[13],E=a[2],C=a[6],b=a[10],y=a[14],P=a[3],z=a[7],w=a[11],U=a[15],L=l[0],F=l[4],T=l[8],I=l[12],k=l[1],H=l[5],K=l[9],ce=l[13],de=l[2],q=l[6],D=l[10],G=l[14],$=l[3],pe=l[7],ue=l[11],N=l[15];return c[0]=f*L+h*k+m*de+p*$,c[4]=f*F+h*H+m*q+p*pe,c[8]=f*T+h*K+m*D+p*ue,c[12]=f*I+h*ce+m*G+p*N,c[1]=_*L+v*k+g*de+S*$,c[5]=_*F+v*H+g*q+S*pe,c[9]=_*T+v*K+g*D+S*ue,c[13]=_*I+v*ce+g*G+S*N,c[2]=E*L+C*k+b*de+y*$,c[6]=E*F+C*H+b*q+y*pe,c[10]=E*T+C*K+b*D+y*ue,c[14]=E*I+C*ce+b*G+y*N,c[3]=P*L+z*k+w*de+U*$,c[7]=P*F+z*H+w*q+U*pe,c[11]=P*T+z*K+w*D+U*ue,c[15]=P*I+z*ce+w*G+U*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],C=e[7],b=e[11],y=e[15],P=m*S-p*g,z=h*S-p*v,w=h*g-m*v,U=f*S-p*_,L=f*g-m*_,F=f*v-h*_;return i*(C*P-b*z+y*w)-a*(E*P-b*U+y*L)+l*(E*z-C*U+y*F)-c*(E*w-C*L+b*F)}determinantAffine(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return i*(f*_-h*p)-a*(c*_-h*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],C=e[13],b=e[14],y=e[15],P=i*h-a*f,z=i*m-l*f,w=i*p-c*f,U=a*m-l*h,L=a*p-c*h,F=l*p-c*m,T=_*C-v*E,I=_*b-g*E,k=_*y-S*E,H=v*b-g*C,K=v*y-S*C,ce=g*y-S*b,de=P*ce-z*K+w*H+U*k-L*I+F*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/de;return e[0]=(h*ce-m*K+p*H)*q,e[1]=(l*K-a*ce-c*H)*q,e[2]=(C*F-b*L+y*U)*q,e[3]=(g*L-v*F-S*U)*q,e[4]=(m*k-f*ce-p*I)*q,e[5]=(i*ce-l*k+c*I)*q,e[6]=(b*w-E*F-y*z)*q,e[7]=(_*F-g*w+S*z)*q,e[8]=(f*K-h*k+p*T)*q,e[9]=(a*k-i*K-c*T)*q,e[10]=(E*L-C*w+y*P)*q,e[11]=(v*w-_*L-S*P)*q,e[12]=(h*I-f*H-m*T)*q,e[13]=(i*H-a*I+l*T)*q,e[14]=(C*z-E*U-b*P)*q,e[15]=(_*U-v*z+g*P)*q,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+a,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,E=c*v,C=f*_,b=f*v,y=h*v,P=m*p,z=m*_,w=m*v,U=a.x,L=a.y,F=a.z;return l[0]=(1-(C+y))*U,l[1]=(S+w)*U,l[2]=(E-z)*U,l[3]=0,l[4]=(S-w)*L,l[5]=(1-(g+y))*L,l[6]=(b+P)*L,l[7]=0,l[8]=(E+z)*F,l[9]=(b-P)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),i.identity(),this;let f=Xs.set(l[0],l[1],l[2]).length();const h=Xs.set(l[4],l[5],l[6]).length(),m=Xs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ii.copy(this);const p=1/f,_=1/h,v=1/m;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,i.setFromRotationMatrix(Ii),a.x=f,a.y=h,a.z=m,this}makePerspective(e,i,a,l,c,f,h=ta,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(a-l),g=(i+e)/(i-e),S=(a+l)/(a-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(h===ta)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(h===Vu)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,a,l,c,f,h=ta,m=!1){const p=this.elements,_=2/(i-e),v=2/(a-l),g=-(i+e)/(i-e),S=-(a+l)/(a-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(h===ta)E=-2/(f-c),C=-(f+c)/(f-c);else if(h===Vu)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}};qu.prototype.isMatrix4=!0;let fn=qu;const Xs=new ie,Ii=new fn,Z3=new ie(0,0,0),K3=new ie(1,1,1),dr=new ie,eu=new ie,hi=new ie,_x=new fn,xx=new go;class ss{constructor(e=0,i=0,a=0,l=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return _x.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_x,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return xx.setFromEuler(this),this.setFromQuaternion(xx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class GS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q3=0;const yx=new ie,Ws=new go,Ea=new fn,tu=new ie,hl=new ie,J3=new ie,$3=new go,Sx=new ie(1,0,0),bx=new ie(0,1,0),Mx=new ie(0,0,1),Ex={type:"added"},eR={type:"removed"},qs={type:"childadded",child:null},Rh={type:"childremoved",child:null};class Wn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q3++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ie,i=new ss,a=new go,l=new ie(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ct}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new GS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ws.setFromAxisAngle(e,i),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,i){return Ws.setFromAxisAngle(e,i),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(bx,e)}rotateZ(e){return this.rotateOnAxis(Mx,e)}translateOnAxis(e,i){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(bx,e)}translateZ(e){return this.translateOnAxis(Mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?tu.copy(e):tu.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(hl,tu,this.up):Ea.lookAt(tu,hl,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Ws.setFromRotationMatrix(Ea),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ex),qs.child=e,this.dispatchEvent(qs),qs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eR),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ex),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,J3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,$3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*a-c[8]*l,c[13]+=a-c[1]*i-c[5]*a-c[9]*l,c[14]+=l-c[2]*i-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new ie(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nu extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tR={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const C of e.hand.values()){const b=i.getJointPose(C,a),y=this._getHandJoint(p,C);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tR)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new nu;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}const VS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},iu={h:0,s:0,l:0};function wh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class At{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=a,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Et.workingColorSpace){if(e=V3(e,1),i=Tt(i,0,1),a=Tt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=wh(f,c,e+1/3),this.g=wh(f,c,e),this.b=wh(f,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=Ai){function a(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ai){const a=VS[e.toLowerCase()];return a!==void 0?this.setHex(a,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return Et.workingToColorSpace(Bn.copy(this),e),Math.round(Tt(Bn.r*255,0,255))*65536+Math.round(Tt(Bn.g*255,0,255))*256+Math.round(Tt(Bn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(Bn.copy(this),i);const a=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Ai){Et.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,a=Bn.g,l=Bn.b;return e!==Ai?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(iu);const a=bh(hr.h,iu.h,i),l=bh(hr.s,iu.s,i),c=bh(hr.l,iu.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new At;At.NAMES=VS;class nR extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new ie,Ta=new ie,Dh=new ie,Aa=new ie,Ys=new ie,js=new ie,Tx=new ie,Nh=new ie,Lh=new ie,Uh=new ie,Oh=new un,Ph=new un,Ih=new un;class Bi{constructor(e=new ie,i=new ie,a=new ie){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),zi.subVectors(e,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){zi.subVectors(l,i),Ta.subVectors(a,i),Dh.subVectors(e,i);const f=zi.dot(zi),h=zi.dot(Ta),m=zi.dot(Dh),p=Ta.dot(Ta),_=Ta.dot(Dh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,a,l,c,f,h,m){return this.getBarycoord(e,i,a,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(h,Aa.z),m)}static getInterpolatedAttribute(e,i,a,l,c,f){return Oh.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Oh.fromBufferAttribute(e,i),Ph.fromBufferAttribute(e,a),Ih.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Oh,c.x),f.addScaledVector(Ph,c.y),f.addScaledVector(Ih,c.z),f}static isFrontFacing(e,i,a,l){return zi.subVectors(a,i),Ta.subVectors(e,i),zi.cross(Ta).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),zi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,h;Ys.subVectors(l,a),js.subVectors(c,a),Nh.subVectors(e,a);const m=Ys.dot(Nh),p=js.dot(Nh);if(m<=0&&p<=0)return i.copy(a);Lh.subVectors(e,l);const _=Ys.dot(Lh),v=js.dot(Lh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(a).addScaledVector(Ys,f);Uh.subVectors(e,c);const S=Ys.dot(Uh),E=js.dot(Uh);if(E>=0&&S<=E)return i.copy(c);const C=S*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(a).addScaledVector(js,h);const b=_*E-S*v;if(b<=0&&v-_>=0&&S-E>=0)return Tx.subVectors(c,l),h=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(Tx,h);const y=1/(b+C+g);return f=C*y,h=g*y,i.copy(a).addScaledVector(Ys,f).addScaledVector(js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ul{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Fi):Fi.fromBufferAttribute(c,f),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),au.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),au.copy(a.boundingBox)),au.applyMatrix4(e.matrixWorld),this.union(au)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),ru.subVectors(this.max,pl),Zs.subVectors(e.a,pl),Ks.subVectors(e.b,pl),Qs.subVectors(e.c,pl),pr.subVectors(Ks,Zs),mr.subVectors(Qs,Ks),Xr.subVectors(Zs,Qs);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Xr.z,Xr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Xr.z,0,-Xr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Xr.y,Xr.x,0];return!zh(i,Zs,Ks,Qs,ru)||(i=[1,0,0,0,1,0,0,0,1],!zh(i,Zs,Ks,Qs,ru))?!1:(su.crossVectors(pr,mr),i=[su.x,su.y,su.z],zh(i,Zs,Ks,Qs,ru))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Fi=new ie,au=new Ul,Zs=new ie,Ks=new ie,Qs=new ie,pr=new ie,mr=new ie,Xr=new ie,pl=new ie,ru=new ie,su=new ie,Wr=new ie;function zh(r,e,i,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){Wr.fromArray(r,c);const h=l.x*Math.abs(Wr.x)+l.y*Math.abs(Wr.y)+l.z*Math.abs(Wr.z),m=e.dot(Wr),p=i.dot(Wr),_=a.dot(Wr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new ie,ou=new Ut;let iR=0;class Hn extends os{constructor(e,i,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iR++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=fx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)ou.fromBufferAttribute(this,i),ou.applyMatrix3(e),this.setXY(i,ou.x,ou.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=dl(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=$n(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=dl(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=dl(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=dl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=dl(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),a=$n(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),a=$n(a,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),a=$n(a,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kS extends Hn{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class XS extends Hn{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Vi extends Hn{constructor(e,i,a){super(new Float32Array(e),i,a)}}const aR=new Ul,ml=new ie,Fh=new ie;class Ol{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):aR.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(ml,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(Fh)),this.expandByPoint(ml.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rR=0;const Ti=new fn,Bh=new Wn,Js=new ie,pi=new Ul,gl=new Ul,Cn=new ie;class mi extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F3(e)?XS:kS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ct().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,a){return Ti.makeTranslation(e,i,a),this.applyMatrix4(Ti),this}scale(e,i,a){return Ti.makeScale(e,i,a),this.applyMatrix4(Ti),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Vi(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const a=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];gl.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(pi.min,gl.min),pi.expandByPoint(Cn),Cn.addVectors(pi.max,gl.max),pi.expandByPoint(Cn)):(pi.expandByPoint(gl.min),pi.expandByPoint(gl.max))}pi.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)Cn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Cn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Cn.fromBufferAttribute(h,p),m&&(Js.fromBufferAttribute(e,p),Cn.add(Js)),l=Math.max(l,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new Hn(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new ie,m[T]=new ie;const p=new ie,_=new ie,v=new ie,g=new Ut,S=new Ut,E=new Ut,C=new ie,b=new ie;function y(T,I,k){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,I),v.fromBufferAttribute(a,k),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,I),E.fromBufferAttribute(c,k),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(H),h[T].add(C),h[I].add(C),h[k].add(C),m[T].add(b),m[I].add(b),m[k].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,I=P.length;T<I;++T){const k=P[T],H=k.start,K=k.count;for(let ce=H,de=H+K;ce<de;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const z=new ie,w=new ie,U=new ie,L=new ie;function F(T){U.fromBufferAttribute(l,T),L.copy(U);const I=h[T];z.copy(I),z.sub(U.multiplyScalar(U.dot(I))).normalize(),w.crossVectors(L,I);const H=w.dot(m[T])<0?-1:1;f.setXYZW(T,z.x,z.y,z.z,H)}for(let T=0,I=P.length;T<I;++T){const k=P[T],H=k.start,K=k.count;for(let ce=H,de=H+K;ce<de;ce+=3)F(e.getX(ce+0)),F(e.getX(ce+1)),F(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==i.count)a=new Hn(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const l=new ie,c=new ie,f=new ie,h=new ie,m=new ie,p=new ie,_=new ie,v=new ie;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),C=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,b),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,C),p.fromBufferAttribute(a,b),h.add(_),m.add(_),p.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(C,m.x,m.y,m.z),a.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?S=m[C]*h.data.stride+h.offset:S=m[C]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new Hn(g,_,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,a);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sR=0;class vo extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=so,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hp,this.blendDst=pp,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(a.blending=this.blending),this.side!==Mr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==hp&&(a.blendSrc=this.blendSrc),this.blendDst!==pp&&(a.blendDst=this.blendDst),this.blendEquation!==Kr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ux&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Ut().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new ie,Hh=new ie,lu=new ie,gr=new ie,Gh=new ie,cu=new ie,Vh=new ie;class Cm{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Hh.copy(e).add(i).multiplyScalar(.5),lu.copy(i).sub(e).normalize(),gr.copy(this.origin).sub(Hh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(lu),h=gr.dot(this.direction),m=-gr.dot(lu),p=gr.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const C=1/_;v*=C,g*=C,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Hh).addScaledVector(lu,g),S}intersectSphere(e,i){Ca.subVectors(e.center,this.origin);const a=Ca.dot(this.direction),l=Ca.dot(Ca)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,a,l,c){Gh.subVectors(i,e),cu.subVectors(a,e),Vh.crossVectors(Gh,cu);let f=this.direction.dot(Vh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;gr.subVectors(this.origin,e);const m=h*this.direction.dot(cu.crossVectors(gr,cu));if(m<0)return null;const p=h*this.direction.dot(Gh.cross(gr));if(p<0||m+p>f)return null;const _=-h*gr.dot(Vh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class WS extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=MS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ax=new fn,qr=new Cm,uu=new Ol,Rx=new ie,fu=new ie,du=new ie,hu=new ie,kh=new ie,pu=new ie,Cx=new ie,mu=new ie;class za extends Wn{constructor(e=new mi,i=new WS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){pu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(kh.fromBufferAttribute(v,e),f?pu.addScaledVector(kh,_):pu.addScaledVector(kh.sub(i),_))}i.add(pu)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),uu.copy(a.boundingSphere),uu.applyMatrix4(c),qr.copy(e.ray).recast(e.near),!(uu.containsPoint(qr.origin)===!1&&(qr.intersectSphere(uu,Rx)===null||qr.origin.distanceToSquared(Rx)>(e.far-e.near)**2))&&(Ax.copy(c).invert(),qr.copy(e.ray).applyMatrix4(Ax),!(a.boundingBox!==null&&qr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,qr)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),z=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let w=P,U=z;w<U;w+=3){const L=h.getX(w),F=h.getX(w+1),T=h.getX(w+2);l=gu(this,y,e,a,p,_,v,L,F,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let b=E,y=C;b<y;b+=3){const P=h.getX(b),z=h.getX(b+1),w=h.getX(b+2);l=gu(this,f,e,a,p,_,v,P,z,w),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),z=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let w=P,U=z;w<U;w+=3){const L=w,F=w+1,T=w+2;l=gu(this,y,e,a,p,_,v,L,F,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let b=E,y=C;b<y;b+=3){const P=b,z=b+1,w=b+2;l=gu(this,f,e,a,p,_,v,P,z,w),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function oR(r,e,i,a,l,c,f,h){let m;if(e.side===ei?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,e.side===Mr,h),m===null)return null;mu.copy(h),mu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(mu);return p<i.near||p>i.far?null:{distance:p,point:mu.clone(),object:r}}function gu(r,e,i,a,l,c,f,h,m,p){r.getVertexPosition(h,fu),r.getVertexPosition(m,du),r.getVertexPosition(p,hu);const _=oR(r,e,i,a,fu,du,hu,Cx);if(_){const v=new ie;Bi.getBarycoord(Cx,fu,du,hu,v),l&&(_.uv=Bi.getInterpolatedAttribute(l,h,m,p,v,new Ut)),c&&(_.uv1=Bi.getInterpolatedAttribute(c,h,m,p,v,new Ut)),f&&(_.normal=Bi.getInterpolatedAttribute(f,h,m,p,v,new ie),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ie,materialIndex:0};Bi.getNormal(fu,du,hu,g.normal),_.face=g,_.barycoord=v}return _}class lR extends Xn{constructor(e=null,i=1,a=1,l,c,f,h,m,p=On,_=On,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new ie,cR=new ie,uR=new ct;class Zr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=Xh.subVectors(a,i).cross(cR.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,a=!0){const l=e.delta(Xh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||uR.getNormalMatrix(e),l=this.coplanarPoint(Xh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Ol,fR=new Ut(.5,.5),vu=new ie;class qS{constructor(e=new Zr,i=new Zr,a=new Zr,l=new Zr,c=new Zr,f=new Zr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=ta,a=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],C=c[9],b=c[10],y=c[11],P=c[12],z=c[13],w=c[14],U=c[15];if(l[0].setComponents(p-f,S-_,y-E,U-P).normalize(),l[1].setComponents(p+f,S+_,y+E,U+P).normalize(),l[2].setComponents(p+h,S+v,y+C,U+z).normalize(),l[3].setComponents(p-h,S-v,y-C,U-z).normalize(),a)l[4].setComponents(m,g,b,w).normalize(),l[5].setComponents(p-m,S-g,y-b,U-w).normalize();else if(l[4].setComponents(p-m,S-g,y-b,U-w).normalize(),i===ta)l[5].setComponents(p+m,S+g,y+b,U+w).normalize();else if(i===Vu)l[5].setComponents(m,g,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const i=fR.distanceTo(e.center);return Yr.radius=.7071067811865476+i,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(vu.x=l.normal.x>0?e.max.x:e.min.x,vu.y=l.normal.y>0?e.max.y:e.min.y,vu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dR extends vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new ie,Wu=new ie,wx=new fn,vl=new Cm,_u=new Ol,Wh=new ie,Dx=new ie;class hR extends Wn{constructor(e=new mi,i=new dR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)Xu.fromBufferAttribute(i,l-1),Wu.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=Xu.distanceTo(Wu);e.setAttribute("lineDistance",new Vi(a,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),_u.copy(a.boundingSphere),_u.applyMatrix4(l),_u.radius+=c,e.ray.intersectsSphere(_u)===!1)return;wx.copy(l).invert(),vl.copy(e.ray).applyMatrix4(wx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let C=S,b=E-1;C<b;C+=p){const y=_.getX(C),P=_.getX(C+1),z=xu(this,e,vl,m,y,P,C);z&&i.push(z)}if(this.isLineLoop){const C=_.getX(E-1),b=_.getX(S),y=xu(this,e,vl,m,C,b,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let C=S,b=E-1;C<b;C+=p){const y=xu(this,e,vl,m,C,C+1,C);y&&i.push(y)}if(this.isLineLoop){const C=xu(this,e,vl,m,E-1,S,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function xu(r,e,i,a,l,c,f){const h=r.geometry.attributes.position;if(Xu.fromBufferAttribute(h,l),Wu.fromBufferAttribute(h,c),i.distanceSqToSegment(Xu,Wu,Wh,Dx)>a)return;Wh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Wh);if(!(p<e.near||p>e.far))return{distance:p,point:Dx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Nx=new ie,Lx=new ie;class pR extends hR{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[];for(let l=0,c=i.count;l<c;l+=2)Nx.fromBufferAttribute(i,l),Lx.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+Nx.distanceTo(Lx);e.setAttribute("lineDistance",new Vi(a,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mR extends vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ux=new fn,tm=new Cm,yu=new Ol,Su=new ie;class gR extends Wn{constructor(e=new mi,i=new mR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),yu.copy(a.boundingSphere),yu.applyMatrix4(l),yu.radius+=c,e.ray.intersectsSphere(yu)===!1)return;Ux.copy(l).invert(),tm.copy(e.ray).applyMatrix4(Ux);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,v=a.attributes.position;if(p!==null){const g=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=g,C=S;E<C;E++){const b=p.getX(E);Su.fromBufferAttribute(v,b),Ox(Su,b,m,l,e,i,this)}}else{const g=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=g,C=S;E<C;E++)Su.fromBufferAttribute(v,E),Ox(Su,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ox(r,e,i,a,l,c,f){const h=tm.distanceSqToPoint(r);if(h<i){const m=new ie;tm.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class YS extends Xn{constructor(e=[],i=as,a,l,c,f,h,m,p,_){super(e,i,a,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends Xn{constructor(e,i,a=aa,l,c,f,h=On,m=On,p,_=Ia,v=1){if(_!==Ia&&_!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,f,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class vR extends ho{constructor(e,i=aa,a=as,l,c,f=On,h=On,m,p=Ia){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,a,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jS extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pl extends mi{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,a,i,e,f,c,0),E("z","y","x",1,-1,a,i,-e,f,c,1),E("x","z","y",1,1,e,a,i,l,f,2),E("x","z","y",1,-1,e,a,-i,l,f,3),E("x","y","z",1,-1,e,i,a,l,c,4),E("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new Vi(p,3)),this.setAttribute("normal",new Vi(_,3)),this.setAttribute("uv",new Vi(v,2));function E(C,b,y,P,z,w,U,L,F,T,I){const k=w/F,H=U/T,K=w/2,ce=U/2,de=L/2,q=F+1,D=T+1;let G=0,$=0;const pe=new ie;for(let ue=0;ue<D;ue++){const N=ue*H-ce;for(let W=0;W<q;W++){const ve=W*k-K;pe[C]=ve*P,pe[b]=N*z,pe[y]=de,p.push(pe.x,pe.y,pe.z),pe[C]=0,pe[b]=0,pe[y]=L>0?1:-1,_.push(pe.x,pe.y,pe.z),v.push(W/F),v.push(1-ue/T),G+=1}}for(let ue=0;ue<T;ue++)for(let N=0;N<F;N++){const W=g+N+q*ue,ve=g+N+q*(ue+1),Se=g+(N+1)+q*(ue+1),Ae=g+(N+1)+q*ue;m.push(W,ve,Ae),m.push(ve,Se,Ae),$+=6}h.addGroup(S,$,I),S+=$,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $u extends mi{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(a),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=i/m,S=[],E=[],C=[],b=[];for(let y=0;y<_;y++){const P=y*g-f;for(let z=0;z<p;z++){const w=z*v-c;E.push(w,-P,0),C.push(0,0,1),b.push(z/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<h;P++){const z=P+p*y,w=P+p*(y+1),U=P+1+p*(y+1),L=P+1+p*y;S.push(z,w,L),S.push(w,U,L)}this.setIndex(S),this.setAttribute("position",new Vi(E,3)),this.setAttribute("normal",new Vi(C,3)),this.setAttribute("uv",new Vi(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}function po(r){const e={};for(const i in r){e[i]={};for(const a in r[i]){const l=r[i][a];if(Px(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone();else if(Array.isArray(l))if(Px(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][a]=c}else e[i][a]=l.slice();else e[i][a]=l}}return e}function kn(r){const e={};for(let i=0;i<r.length;i++){const a=po(r[i]);for(const l in a)e[l]=a[l]}return e}function Px(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function _R(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function ZS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const xR={clone:po,merge:kn};var yR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yR,this.fragmentShader=SR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=_R(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=i[l.value]||null;break;case"c":this.uniforms[a].value=new At().setHex(l.value);break;case"v2":this.uniforms[a].value=new Ut().fromArray(l.value);break;case"v3":this.uniforms[a].value=new ie().fromArray(l.value);break;case"v4":this.uniforms[a].value=new un().fromArray(l.value);break;case"m3":this.uniforms[a].value=new ct().fromArray(l.value);break;case"m4":this.uniforms[a].value=new fn().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bR extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MR extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ER extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bu=new ie,Mu=new go,Ki=new ie;class KS extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bu,Mu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Mu,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,i,a=!1){super.updateWorldMatrix(e,i,a),this.matrixWorld.decompose(bu,Mu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Mu,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vr=new ie,Ix=new Ut,zx=new Ut;class Ri extends KS{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=em*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return em*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,i){return this.getViewBounds(e,Ix,zx),i.subVectors(zx,Ix)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Sh*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class QS extends KS{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const $s=-90,eo=1;class TR extends Wn{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri($s,eo,e,i);l.layers=this.layers,this.add(l);const c=new Ri($s,eo,e,i);c.layers=this.layers,this.add(c);const f=new Ri($s,eo,e,i);f.layers=this.layers,this.add(f);const h=new Ri($s,eo,e,i);h.layers=this.layers,this.add(h);const m=new Ri($s,eo,e,i);m.layers=this.layers,this.add(m);const p=new Ri($s,eo,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===ta)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(a,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(a,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(a,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(a,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),a.texture.generateMipmaps=C,e.setRenderTarget(a,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class AR extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class RR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Um=class Um{constructor(e,i,a,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let a=0;a<4;a++)this.elements[a]=e[a+i];return this}set(e,i,a,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=a,c[3]=l,this}};Um.prototype.isMatrix2=!0;let Fx=Um;function Bx(r,e,i,a){const l=CR(a);switch(i){case IS:return r*e;case FS:return r*e/l.components*l.byteLength;case bm:return r*e/l.components*l.byteLength;case rs:return r*e*2/l.components*l.byteLength;case Mm:return r*e*2/l.components*l.byteLength;case zS:return r*e*3/l.components*l.byteLength;case Gi:return r*e*4/l.components*l.byteLength;case Em:return r*e*4/l.components*l.byteLength;case Du:case Nu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lu:case Uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tp:case Rp:return Math.max(r,16)*Math.max(e,8)/4;case Ep:case Ap:return Math.max(r,8)*Math.max(e,8)/2;case Cp:case wp:case Np:case Lp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dp:case Fu:case Up:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case kp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jp:case Zp:case Kp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qp:case Jp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bu:case $p:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CR(r){switch(r){case Ci:case LS:return{byteLength:1,components:1};case Rl:case US:case Pa:return{byteLength:2,components:1};case ym:case Sm:return{byteLength:2,components:4};case aa:case xm:case ea:return{byteLength:4,components:1};case OS:case PS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_m}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_m);function JS(){let r=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(a=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function wR(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],C=v[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,v[g]=C)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const C=v[S];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var DR=`#ifdef USE_ALPHAHASH
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
}`,ht={alphahash_fragment:DR,alphahash_pars_fragment:NR,alphamap_fragment:LR,alphamap_pars_fragment:UR,alphatest_fragment:OR,alphatest_pars_fragment:PR,aomap_fragment:IR,aomap_pars_fragment:zR,batching_pars_vertex:FR,batching_vertex:BR,begin_vertex:HR,beginnormal_vertex:GR,bsdfs:VR,iridescence_fragment:kR,bumpmap_pars_fragment:XR,clipping_planes_fragment:WR,clipping_planes_pars_fragment:qR,clipping_planes_pars_vertex:YR,clipping_planes_vertex:jR,color_fragment:ZR,color_pars_fragment:KR,color_pars_vertex:QR,color_vertex:JR,common:$R,cube_uv_reflection_fragment:eC,defaultnormal_vertex:tC,displacementmap_pars_vertex:nC,displacementmap_vertex:iC,emissivemap_fragment:aC,emissivemap_pars_fragment:rC,colorspace_fragment:sC,colorspace_pars_fragment:oC,envmap_fragment:lC,envmap_common_pars_fragment:cC,envmap_pars_fragment:uC,envmap_pars_vertex:fC,envmap_physical_pars_fragment:bC,envmap_vertex:dC,fog_vertex:hC,fog_pars_vertex:pC,fog_fragment:mC,fog_pars_fragment:gC,gradientmap_pars_fragment:vC,lightmap_pars_fragment:_C,lights_lambert_fragment:xC,lights_lambert_pars_fragment:yC,lights_pars_begin:SC,lights_toon_fragment:MC,lights_toon_pars_fragment:EC,lights_phong_fragment:TC,lights_phong_pars_fragment:AC,lights_physical_fragment:RC,lights_physical_pars_fragment:CC,lights_fragment_begin:wC,lights_fragment_maps:DC,lights_fragment_end:NC,lightprobes_pars_fragment:LC,logdepthbuf_fragment:UC,logdepthbuf_pars_fragment:OC,logdepthbuf_pars_vertex:PC,logdepthbuf_vertex:IC,map_fragment:zC,map_pars_fragment:FC,map_particle_fragment:BC,map_particle_pars_fragment:HC,metalnessmap_fragment:GC,metalnessmap_pars_fragment:VC,morphinstance_vertex:kC,morphcolor_vertex:XC,morphnormal_vertex:WC,morphtarget_pars_vertex:qC,morphtarget_vertex:YC,normal_fragment_begin:jC,normal_fragment_maps:ZC,normal_pars_fragment:KC,normal_pars_vertex:QC,normal_vertex:JC,normalmap_pars_fragment:$C,clearcoat_normal_fragment_begin:ew,clearcoat_normal_fragment_maps:tw,clearcoat_pars_fragment:nw,iridescence_pars_fragment:iw,opaque_fragment:aw,packing:rw,premultiplied_alpha_fragment:sw,project_vertex:ow,dithering_fragment:lw,dithering_pars_fragment:cw,roughnessmap_fragment:uw,roughnessmap_pars_fragment:fw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:hw,shadowmap_vertex:pw,shadowmask_pars_fragment:mw,skinbase_vertex:gw,skinning_pars_vertex:vw,skinning_vertex:_w,skinnormal_vertex:xw,specularmap_fragment:yw,specularmap_pars_fragment:Sw,tonemapping_fragment:bw,tonemapping_pars_fragment:Mw,transmission_fragment:Ew,transmission_pars_fragment:Tw,uv_pars_fragment:Aw,uv_pars_vertex:Rw,uv_vertex:Cw,worldpos_vertex:ww,background_vert:Dw,background_frag:Nw,backgroundCube_vert:Lw,backgroundCube_frag:Uw,cube_vert:Ow,cube_frag:Pw,depth_vert:Iw,depth_frag:zw,distance_vert:Fw,distance_frag:Bw,equirect_vert:Hw,equirect_frag:Gw,linedashed_vert:Vw,linedashed_frag:kw,meshbasic_vert:Xw,meshbasic_frag:Ww,meshlambert_vert:qw,meshlambert_frag:Yw,meshmatcap_vert:jw,meshmatcap_frag:Zw,meshnormal_vert:Kw,meshnormal_frag:Qw,meshphong_vert:Jw,meshphong_frag:$w,meshphysical_vert:eD,meshphysical_frag:tD,meshtoon_vert:nD,meshtoon_frag:iD,points_vert:aD,points_frag:rD,shadow_vert:sD,shadow_frag:oD,sprite_vert:lD,sprite_frag:cD},ze={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ji={basic:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:kn([ze.points,ze.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:kn([ze.common,ze.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:kn([ze.sprite,ze.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:kn([ze.common,ze.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:kn([ze.lights,ze.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ji.physical={uniforms:kn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Eu={r:0,b:0,g:0},uD=new fn,$S=new ct;$S.set(-1,0,0,0,1,0,0,0,1);function fD(r,e,i,a,l,c){const f=new At(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(P){let z=P.isScene===!0?P.background:null;if(z&&z.isTexture){const w=P.backgroundBlurriness>0;z=e.get(z,w)}return z}function E(P){let z=!1;const w=S(P);w===null?b(f,h):w&&w.isColor&&(b(w,1),z=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(P,z){const w=S(z);w&&(w.isCubeTexture||w.mapping===Ju)?(p===void 0&&(p=new za(new Pl(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:po(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uD.makeRotationFromEuler(z.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply($S),p.material.toneMapped=Et.getTransfer(w.colorSpace)!==Gt,(_!==w||v!==w.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new za(new $u(2,2),new wi({name:"BackgroundMaterial",uniforms:po(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Et.getTransfer(w.colorSpace)!==Gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,z){P.getRGB(Eu,ZS(r)),i.buffers.color.setClear(Eu.r,Eu.g,Eu.b,z,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,z=1){f.set(P),h=z,b(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,b(f,h)},render:E,addToRenderList:C,dispose:y}}function dD(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,f=!1;function h(H,K,ce,de,q){let D=!1;const G=v(H,de,ce,K);c!==G&&(c=G,p(c.object)),D=S(H,de,ce,q),D&&E(H,de,ce,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(D||f)&&(f=!1,w(H,K,ce,de),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function v(H,K,ce,de){const q=de.wireframe===!0;let D=a[K.id];D===void 0&&(D={},a[K.id]=D);const G=H.isInstancedMesh===!0?H.id:0;let $=D[G];$===void 0&&($={},D[G]=$);let pe=$[ce.id];pe===void 0&&(pe={},$[ce.id]=pe);let ue=pe[q];return ue===void 0&&(ue=g(m()),pe[q]=ue),ue}function g(H){const K=[],ce=[],de=[];for(let q=0;q<i;q++)K[q]=0,ce[q]=0,de[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ce,attributeDivisors:de,object:H,attributes:{},index:null}}function S(H,K,ce,de){const q=c.attributes,D=K.attributes;let G=0;const $=ce.getAttributes();for(const pe in $)if($[pe].location>=0){const N=q[pe];let W=D[pe];if(W===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),N===void 0||N.attribute!==W||W&&N.data!==W.data)return!0;G++}return c.attributesNum!==G||c.index!==de}function E(H,K,ce,de){const q={},D=K.attributes;let G=0;const $=ce.getAttributes();for(const pe in $)if($[pe].location>=0){let N=D[pe];N===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(N=H.instanceColor));const W={};W.attribute=N,N&&N.data&&(W.data=N.data),q[pe]=W,G++}c.attributes=q,c.attributesNum=G,c.index=de}function C(){const H=c.newAttributes;for(let K=0,ce=H.length;K<ce;K++)H[K]=0}function b(H){y(H,0)}function y(H,K){const ce=c.newAttributes,de=c.enabledAttributes,q=c.attributeDivisors;ce[H]=1,de[H]===0&&(r.enableVertexAttribArray(H),de[H]=1),q[H]!==K&&(r.vertexAttribDivisor(H,K),q[H]=K)}function P(){const H=c.newAttributes,K=c.enabledAttributes;for(let ce=0,de=K.length;ce<de;ce++)K[ce]!==H[ce]&&(r.disableVertexAttribArray(ce),K[ce]=0)}function z(H,K,ce,de,q,D,G){G===!0?r.vertexAttribIPointer(H,K,ce,q,D):r.vertexAttribPointer(H,K,ce,de,q,D)}function w(H,K,ce,de){C();const q=de.attributes,D=ce.getAttributes(),G=K.defaultAttributeValues;for(const $ in D){const pe=D[$];if(pe.location>=0){let ue=q[$];if(ue===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor)),ue!==void 0){const N=ue.normalized,W=ue.itemSize,ve=e.get(ue);if(ve===void 0)continue;const Se=ve.buffer,Ae=ve.type,ee=ve.bytesPerElement,Me=Ae===r.INT||Ae===r.UNSIGNED_INT||ue.gpuType===xm;if(ue.isInterleavedBufferAttribute){const Ee=ue.data,Ge=Ee.stride,st=ue.offset;if(Ee.isInstancedInterleavedBuffer){for(let Je=0;Je<pe.locationSize;Je++)y(pe.location+Je,Ee.meshPerAttribute);H.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Je=0;Je<pe.locationSize;Je++)b(pe.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Je=0;Je<pe.locationSize;Je++)z(pe.location+Je,W/pe.locationSize,Ae,N,Ge*ee,(st+W/pe.locationSize*Je)*ee,Me)}else{if(ue.isInstancedBufferAttribute){for(let Ee=0;Ee<pe.locationSize;Ee++)y(pe.location+Ee,ue.meshPerAttribute);H.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ee=0;Ee<pe.locationSize;Ee++)b(pe.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Ee=0;Ee<pe.locationSize;Ee++)z(pe.location+Ee,W/pe.locationSize,Ae,N,W*ee,W/pe.locationSize*Ee*ee,Me)}}else if(G!==void 0){const N=G[$];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(pe.location,N);break;case 3:r.vertexAttrib3fv(pe.location,N);break;case 4:r.vertexAttrib4fv(pe.location,N);break;default:r.vertexAttrib1fv(pe.location,N)}}}}P()}function U(){I();for(const H in a){const K=a[H];for(const ce in K){const de=K[ce];for(const q in de){const D=de[q];for(const G in D)_(D[G].object),delete D[G];delete de[q]}}delete a[H]}}function L(H){if(a[H.id]===void 0)return;const K=a[H.id];for(const ce in K){const de=K[ce];for(const q in de){const D=de[q];for(const G in D)_(D[G].object),delete D[G];delete de[q]}}delete a[H.id]}function F(H){for(const K in a){const ce=a[K];for(const de in ce){const q=ce[de];if(q[H.id]===void 0)continue;const D=q[H.id];for(const G in D)_(D[G].object),delete D[G];delete q[H.id]}}}function T(H){for(const K in a){const ce=a[K],de=H.isInstancedMesh===!0?H.id:0,q=ce[de];if(q!==void 0){for(const D in q){const G=q[D];for(const $ in G)_(G[$].object),delete G[$];delete q[D]}delete ce[de],Object.keys(ce).length===0&&delete a[K]}}}function I(){k(),f=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:b,disableUnusedAttributes:P}}function hD(r,e,i){let a;function l(m){a=m}function c(m,p){r.drawArrays(a,m,p),i.update(p,a,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),i.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];i.update(g,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function pD(r,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Gi&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ci&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ea&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(rt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),z=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:w,maxSamples:U,samples:L}}function mD(r){const e=this;let i=null,a=0,l=!1,c=!1;const f=new Zr,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||l;return l=g,a=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,C=v.clipIntersection,b=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const P=c?0:a,z=P*4;let w=y.clippingState||null;m.value=w,w=_(E,g,z,S);for(let U=0;U!==z;++U)w[U]=i[U];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,S,E){const C=v!==null?v.length:0;let b=null;if(C!==0){if(b=m.value,E!==!0||b===null){const y=S+C*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<y)&&(b=new Float32Array(y));for(let z=0,w=S;z!==C;++z,w+=4)f.copy(v[z]).applyMatrix4(P,h),f.normal.toArray(b,w),b[w+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,b}}const xr=4,Hx=[.125,.215,.35,.446,.526,.582],Qr=20,gD=256,_l=new QS,Gx=new At;let qh=null,Yh=0,jh=0,Zh=!1;const vD=new ie;class Vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:h=vD}=c;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,jh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===as||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Pa,format:Gi,colorSpace:Hu,depthBuffer:!1},l=kx(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kx(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_D(c)),this._blurMaterial=yD(c,e,i),this._ggxMaterial=xD(c,e,i)}return l}_compileMaterial(e){const i=new za(new mi,e);this._renderer.compile(i,_l)}_sceneToCubeUV(e,i,a,l,c){const m=new Ri(90,1,i,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Gx),v.toneMapping=na,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new za(new Pl,new WS({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let y=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,y=!0):(b.color.copy(Gx),y=!0);for(let z=0;z<6;z++){const w=z%3;w===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[z],c.y,c.z)):w===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[z]));const U=this._cubeSize;to(l,w*U,z>2?U:0,U,U),v.setRenderTarget(l),y&&v.render(C,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=P}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===as||e.mapping===fo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;to(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,_l)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,C=this._sizeLods[a],b=3*C*(a>E-xr?a-E+xr:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,to(c,b,y,3*C,2*C),l.setRenderTarget(c),l.render(h,_l),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,to(e,b,y,3*C,2*C),l.setRenderTarget(e),l.render(h,_l)}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),C=c/E,b=isFinite(c)?1+Math.floor(_*C):Qr;b>Qr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Qr}`);const y=[];let P=0;for(let F=0;F<Qr;++F){const T=F/C,I=Math.exp(-T*T/2);y.push(I),F===0?P+=I:F<b&&(P+=2*I)}for(let F=0;F<y.length;F++)y[F]=y[F]/P;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:z}=this;g.dTheta.value=E,g.mipInt.value=z-a;const w=this._sizeLods[l],U=3*w*(l>z-xr?l-z+xr:0),L=4*(this._cubeSize-w);to(i,U,L,3*w,2*w),m.setRenderTarget(i),m.render(v,_l)}}function _D(r){const e=[],i=[],a=[];let l=r;const c=r-xr+1+Hx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-xr?m=Hx[f-r+xr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,C=3,b=2,y=1,P=new Float32Array(C*E*S),z=new Float32Array(b*E*S),w=new Float32Array(y*E*S);for(let L=0;L<S;L++){const F=L%3*2/3-1,T=L>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];P.set(I,C*E*L),z.set(g,b*E*L);const k=[L,L,L,L,L,L];w.set(k,y*E*L)}const U=new mi;U.setAttribute("position",new Hn(P,C)),U.setAttribute("uv",new Hn(z,b)),U.setAttribute("faceIndex",new Hn(w,y)),a.push(new za(U,null)),l>xr&&l--}return{lodMeshes:a,sizeLods:e,sigmas:i}}function kx(r,e,i){const a=new ia(r,e,i);return a.texture.mapping=Ju,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function to(r,e,i,a,l){r.viewport.set(e,i,a,l),r.scissor.set(e,i,a,l)}function xD(r,e,i){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function yD(r,e,i){const a=new Float32Array(Qr),l=new ie(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Xx(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Wx(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}class eb extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new YS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Pl(5,5,5),c=new wi({name:"CubemapFromEquirect",uniforms:po(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:Na});c.uniforms.tEquirect.value=i;const f=new za(l,c),h=i.minFilter;return i.minFilter===$r&&(i.minFilter=Gn),new TR(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}function SD(r){let e=new WeakMap,i=new WeakMap,a=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===_h||S===xh)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new eb(E.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===_h||S===xh,C=S===as||S===fo;if(E||C){let b=i.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new Vx(r)),b=E?a.fromEquirectangular(g,b):a.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const P=g.image;return E&&P&&P.height>0||C&&P&&m(P)?(a===null&&(a=new Vx(r)),b=E?a.fromEquirectangular(g):a.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===_h?g.mapping=as:S===xh&&(g.mapping=fo),g}function m(g){let S=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function bD(r){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=r.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&oo("WebGLRenderer: "+a+" extension not supported."),l}}}function MD(r,e,i,a){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(S!==null){const P=S.array;C=S.version;for(let z=0,w=P.length;z<w;z+=3){const U=P[z+0],L=P[z+1],F=P[z+2];g.push(U,L,L,F,F,U)}}else{const P=E.array;C=E.version;for(let z=0,w=P.length/3-1;z<w;z+=3){const U=z+0,L=z+1,F=z+2;g.push(U,L,L,F,F,U)}}const b=new(E.count>=65535?XS:kS)(g,1);b.version=C;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function ED(r,e,i){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*f),i.update(g,a,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(a,g,c,v*f,S),i.update(g,a,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,S);let C=0;for(let b=0;b<S;b++)C+=g[b];i.update(C,a,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function TD(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function AD(r,e,i){const a=new WeakMap,l=new un;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let I=function(){F.dispose(),a.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let z=0;S===!0&&(z=1),E===!0&&(z=2),C===!0&&(z=3);let w=h.attributes.position.count*z,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const L=new Float32Array(w*U*4*v),F=new HS(L,w,U,v);F.type=ea,F.needsUpdate=!0;const T=z*4;for(let k=0;k<v;k++){const H=b[k],K=y[k],ce=P[k],de=w*U*4*k;for(let q=0;q<H.count;q++){const D=q*T;S===!0&&(l.fromBufferAttribute(H,q),L[de+D+0]=l.x,L[de+D+1]=l.y,L[de+D+2]=l.z,L[de+D+3]=0),E===!0&&(l.fromBufferAttribute(K,q),L[de+D+4]=l.x,L[de+D+5]=l.y,L[de+D+6]=l.z,L[de+D+7]=0),C===!0&&(l.fromBufferAttribute(ce,q),L[de+D+8]=l.x,L[de+D+9]=l.y,L[de+D+10]=l.z,L[de+D+11]=ce.itemSize===4?l.w:1)}}g={count:v,texture:F,size:new Ut(w,U)},a.set(h,g),h.addEventListener("dispose",I)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let S=0;for(let C=0;C<p.length;C++)S+=p[C];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function RD(r,e,i,a,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const CD={[ES]:"LINEAR_TONE_MAPPING",[TS]:"REINHARD_TONE_MAPPING",[AS]:"CINEON_TONE_MAPPING",[RS]:"ACES_FILMIC_TONE_MAPPING",[wS]:"AGX_TONE_MAPPING",[DS]:"NEUTRAL_TONE_MAPPING",[CS]:"CUSTOM_TONE_MAPPING"};function wD(r,e,i,a,l,c){const f=new ia(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new ho(e,i):void 0}),h=new ia(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new mi;m.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Vi([0,2,0,0,2,0],2));const p=new bR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new za(m,p),v=new QS(-1,1,1,-1,0,1);let g=null,S=null,E=!1,C,b=null,y=[],P=!1;this.setSize=function(z,w){f.setSize(z,w),h.setSize(z,w);for(let U=0;U<y.length;U++){const L=y[U];L.setSize&&L.setSize(z,w)}},this.setEffects=function(z){y=z,P=y.length>0&&y[0].isRenderPass===!0;const w=f.width,U=f.height;for(let L=0;L<y.length;L++){const F=y[L];F.setSize&&F.setSize(w,U)}},this.begin=function(z,w){if(E||z.toneMapping===na&&y.length===0)return!1;if(b=w,w!==null){const U=w.width,L=w.height;(f.width!==U||f.height!==L)&&this.setSize(U,L)}return P===!1&&z.setRenderTarget(f),C=z.toneMapping,z.toneMapping=na,!0},this.hasRenderPass=function(){return P},this.end=function(z,w){z.toneMapping=C,E=!0;let U=f,L=h;for(let F=0;F<y.length;F++){const T=y[F];if(T.enabled!==!1&&(T.render(z,L,U,w),T.needsSwap!==!1)){const I=U;U=L,L=I}}if(g!==z.outputColorSpace||S!==z.toneMapping){g=z.outputColorSpace,S=z.toneMapping,p.defines={},Et.getTransfer(g)===Gt&&(p.defines.SRGB_TRANSFER="");const F=CD[S];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,z.setRenderTarget(b),z.render(_,v),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const tb=new Xn,nm=new ho(1,1),nb=new HS,ib=new j3,ab=new YS,qx=[],Yx=[],jx=new Float32Array(16),Zx=new Float32Array(9),Kx=new Float32Array(4);function _o(r,e,i){const a=r[0];if(a<=0||a>0)return r;const l=e*i;let c=qx[l];if(c===void 0&&(c=new Float32Array(l),qx[l]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function En(r,e){if(r.length!==e.length)return!1;for(let i=0,a=r.length;i<a;i++)if(r[i]!==e[i])return!1;return!0}function Tn(r,e){for(let i=0,a=e.length;i<a;i++)r[i]=e[i]}function tf(r,e){let i=Yx[e];i===void 0&&(i=new Int32Array(e),Yx[e]=i);for(let a=0;a!==e;++a)i[a]=r.allocateTextureUnit();return i}function DD(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function ND(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2fv(this.addr,e),Tn(i,e)}}function LD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;r.uniform3fv(this.addr,e),Tn(i,e)}}function UD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4fv(this.addr,e),Tn(i,e)}}function OD(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(En(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,a))return;Kx.set(a),r.uniformMatrix2fv(this.addr,!1,Kx),Tn(i,a)}}function PD(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(En(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,a))return;Zx.set(a),r.uniformMatrix3fv(this.addr,!1,Zx),Tn(i,a)}}function ID(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(En(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,a))return;jx.set(a),r.uniformMatrix4fv(this.addr,!1,jx),Tn(i,a)}}function zD(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function FD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2iv(this.addr,e),Tn(i,e)}}function BD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3iv(this.addr,e),Tn(i,e)}}function HD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4iv(this.addr,e),Tn(i,e)}}function GD(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function VD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2uiv(this.addr,e),Tn(i,e)}}function kD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3uiv(this.addr,e),Tn(i,e)}}function XD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4uiv(this.addr,e),Tn(i,e)}}function WD(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(nm.compareFunction=i.isReversedDepthBuffer()?Am:Tm,c=nm):c=tb,i.setTexture2D(e||c,l)}function qD(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||ib,l)}function YD(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||ab,l)}function jD(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||nb,l)}function ZD(r){switch(r){case 5126:return DD;case 35664:return ND;case 35665:return LD;case 35666:return UD;case 35674:return OD;case 35675:return PD;case 35676:return ID;case 5124:case 35670:return zD;case 35667:case 35671:return FD;case 35668:case 35672:return BD;case 35669:case 35673:return HD;case 5125:return GD;case 36294:return VD;case 36295:return kD;case 36296:return XD;case 35678:case 36198:case 36298:case 36306:case 35682:return WD;case 35679:case 36299:case 36307:return qD;case 35680:case 36300:case 36308:case 36293:return YD;case 36289:case 36303:case 36311:case 36292:return jD}}function KD(r,e){r.uniform1fv(this.addr,e)}function QD(r,e){const i=_o(e,this.size,2);r.uniform2fv(this.addr,i)}function JD(r,e){const i=_o(e,this.size,3);r.uniform3fv(this.addr,i)}function $D(r,e){const i=_o(e,this.size,4);r.uniform4fv(this.addr,i)}function eN(r,e){const i=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function tN(r,e){const i=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function nN(r,e){const i=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function iN(r,e){r.uniform1iv(this.addr,e)}function aN(r,e){r.uniform2iv(this.addr,e)}function rN(r,e){r.uniform3iv(this.addr,e)}function sN(r,e){r.uniform4iv(this.addr,e)}function oN(r,e){r.uniform1uiv(this.addr,e)}function lN(r,e){r.uniform2uiv(this.addr,e)}function cN(r,e){r.uniform3uiv(this.addr,e)}function uN(r,e){r.uniform4uiv(this.addr,e)}function fN(r,e,i){const a=this.cache,l=e.length,c=tf(i,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=nm:f=tb;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function dN(r,e,i){const a=this.cache,l=e.length,c=tf(i,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||ib,c[f])}function hN(r,e,i){const a=this.cache,l=e.length,c=tf(i,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||ab,c[f])}function pN(r,e,i){const a=this.cache,l=e.length,c=tf(i,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||nb,c[f])}function mN(r){switch(r){case 5126:return KD;case 35664:return QD;case 35665:return JD;case 35666:return $D;case 35674:return eN;case 35675:return tN;case 35676:return nN;case 5124:case 35670:return iN;case 35667:case 35671:return aN;case 35668:case 35672:return rN;case 35669:case 35673:return sN;case 5125:return oN;case 36294:return lN;case 36295:return cN;case 36296:return uN;case 35678:case 36198:case 36298:case 36306:case 35682:return fN;case 35679:case 36299:case 36307:return dN;case 35680:case 36300:case 36308:case 36293:return hN;case 36289:case 36303:case 36311:case 36292:return pN}}class gN{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=ZD(i.type)}}class vN{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mN(i.type)}}class _N{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],a)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function Qx(r,e){r.seq.push(e),r.map[e.id]=e}function xN(r,e,i){const a=r.name,l=a.length;for(Kh.lastIndex=0;;){const c=Kh.exec(a),f=Kh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Qx(i,p===void 0?new gN(h,r,e):new vN(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new _N(h),Qx(i,v)),i=v}}}class Ou{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);xN(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function Jx(r,e,i){const a=r.createShader(e);return r.shaderSource(a,i),r.compileShader(a),a}const yN=37297;let SN=0;function bN(r,e){const i=r.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const $x=new ct;function MN(r){Et._getMatrix($x,Et.workingColorSpace,r);const e=`mat3( ${$x.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(r)){case Gu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ey(r,e,i){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+bN(r.getShaderSource(e),h)}else return c}function EN(r,e){const i=MN(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TN={[ES]:"Linear",[TS]:"Reinhard",[AS]:"Cineon",[RS]:"ACESFilmic",[wS]:"AgX",[DS]:"Neutral",[CS]:"Custom"};function AN(r,e){const i=TN[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tu=new ie;function RN(){Et.getLuminanceCoefficients(Tu);const r=Tu.x.toFixed(4),e=Tu.y.toFixed(4),i=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CN(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function wN(r){const e=[];for(const i in r){const a=r[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function DN(r,e){const i={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function bl(r){return r!==""}function ty(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ny(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NN=/^[ \t]*#include +<([\w\d./]+)>/gm;function im(r){return r.replace(NN,UN)}const LN=new Map;function UN(r,e){let i=ht[e];if(i===void 0){const a=LN.get(e);if(a!==void 0)i=ht[a],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return im(i)}const ON=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iy(r){return r.replace(ON,PN)}function PN(r,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ay(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const IN={[wu]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function zN(r){return IN[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FN={[as]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[Ju]:"ENVMAP_TYPE_CUBE_UV"};function BN(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":FN[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const HN={[fo]:"ENVMAP_MODE_REFRACTION"};function GN(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":HN[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VN={[MS]:"ENVMAP_BLENDING_MULTIPLY",[R3]:"ENVMAP_BLENDING_MIX",[C3]:"ENVMAP_BLENDING_ADD"};function kN(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":VN[r.combine]||"ENVMAP_BLENDING_NONE"}function XN(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function WN(r,e,i,a){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=zN(i),p=BN(i),_=GN(i),v=kN(i),g=XN(i),S=CN(i),E=wN(c),C=l.createProgram();let b,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),y.length>0&&(y+=`
`)):(b=[ay(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),y=[ay(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?ht.tonemapping_pars_fragment:"",i.toneMapping!==na?AN("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,EN("linearToOutputTexel",i.outputColorSpace),RN(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bl).join(`
`)),f=im(f),f=ty(f,i),f=ny(f,i),h=im(h),h=ty(h,i),h=ny(h,i),f=iy(f),h=iy(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=P+b+f,w=P+y+h,U=Jx(l,l.VERTEX_SHADER,z),L=Jx(l,l.FRAGMENT_SHADER,w);l.attachShader(C,U),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(U)||"",de=l.getShaderInfoLog(L)||"",q=K.trim(),D=ce.trim(),G=de.trim();let $=!0,pe=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,U,L);else{const ue=ey(l,U,"vertex"),N=ey(l,L,"fragment");Rt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+ue+`
`+N)}else q!==""?rt("WebGLProgram: Program Info Log:",q):(D===""||G==="")&&(pe=!1);pe&&(H.diagnostics={runnable:$,programLog:q,vertexShader:{log:D,prefix:b},fragmentShader:{log:G,prefix:y}})}l.deleteShader(U),l.deleteShader(L),T=new Ou(l,C),I=DN(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(C,yN)),k},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SN++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=L,this}let qN=0;class YN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,a){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new jN(e),i.set(e,a)),a}}class jN{constructor(e){this.id=qN++,this.code=e,this.usedTimes=0}}function ZN(r){return r===rs||r===Fu||r===Bu}function KN(r,e,i,a,l,c){const f=new GS,h=new YN,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,I,k,H,K,ce){const de=H.fog,q=K.geometry,D=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||D,G),pe=$&&$.mapping===Ju?$.image.height:null,ue=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,W=N!==void 0?N.length:0;let ve=0;q.morphAttributes.position!==void 0&&(ve=1),q.morphAttributes.normal!==void 0&&(ve=2),q.morphAttributes.color!==void 0&&(ve=3);let Se,Ae,ee,Me;if(ue){const ke=Ji[ue];Se=ke.vertexShader,Ae=ke.fragmentShader}else{Se=T.vertexShader,Ae=T.fragmentShader;const ke=h.getVertexShaderStage(T),$t=h.getFragmentShaderStage(T);h.update(T,ke,$t),ee=ke.id,Me=$t.id}const Ee=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),st=K.isInstancedMesh===!0,Je=K.isBatchedMesh===!0,Zt=!!T.map,pt=!!T.matcap,St=!!$,bt=!!T.aoMap,mt=!!T.lightMap,an=!!T.bumpMap&&T.wireframe===!1,rn=!!T.normalMap,sn=!!T.displacementMap,dn=!!T.emissiveMap,jt=!!T.metalnessMap,on=!!T.roughnessMap,Z=T.anisotropy>0,Vt=T.clearcoat>0,Nt=T.dispersion>0,O=T.iridescence>0,M=T.sheen>0,J=T.transmission>0,se=Z&&!!T.anisotropyMap,me=Vt&&!!T.clearcoatMap,Ce=Vt&&!!T.clearcoatNormalMap,Le=Vt&&!!T.clearcoatRoughnessMap,he=O&&!!T.iridescenceMap,ge=O&&!!T.iridescenceThicknessMap,De=M&&!!T.sheenColorMap,Be=M&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Ue=!!T.specularColorMap,Qe=!!T.specularIntensityMap,$e=J&&!!T.transmissionMap,ot=J&&!!T.thicknessMap,Y=!!T.gradientMap,we=!!T.alphaMap,xe=T.alphaTest>0,Ne=!!T.alphaHash,Fe=!!T.extensions;let Te=na;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Te=r.toneMapping);const Ye={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Se,fragmentShader:Ae,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Je,batchingColor:Je&&K._colorsTexture!==null,instancing:st,instancingColor:st&&K.instanceColor!==null,instancingMorph:st&&K.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:pt,envMap:St,envMapMode:St&&$.mapping,envMapCubeUVHeight:pe,aoMap:bt,lightMap:mt,bumpMap:an,normalMap:rn,displacementMap:sn,emissiveMap:dn,normalMapObjectSpace:rn&&T.normalMapType===N3,normalMapTangentSpace:rn&&T.normalMapType===cx,packedNormalMap:rn&&T.normalMapType===cx&&ZN(T.normalMap.format),metalnessMap:jt,roughnessMap:on,anisotropy:Z,anisotropyMap:se,clearcoat:Vt,clearcoatMap:me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:Nt,iridescence:O,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:M,sheenColorMap:De,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:Qe,transmission:J,transmissionMap:$e,thicknessMap:ot,gradientMap:Y,opaque:T.transparent===!1&&T.blending===so&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:xe,alphaHash:Ne,combine:T.combine,mapUv:Zt&&E(T.map.channel),aoMapUv:bt&&E(T.aoMap.channel),lightMapUv:mt&&E(T.lightMap.channel),bumpMapUv:an&&E(T.bumpMap.channel),normalMapUv:rn&&E(T.normalMap.channel),displacementMapUv:sn&&E(T.displacementMap.channel),emissiveMapUv:dn&&E(T.emissiveMap.channel),metalnessMapUv:jt&&E(T.metalnessMap.channel),roughnessMapUv:on&&E(T.roughnessMap.channel),anisotropyMapUv:se&&E(T.anisotropyMap.channel),clearcoatMapUv:me&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(T.sheenRoughnessMap.channel),specularMapUv:Pe&&E(T.specularMap.channel),specularColorMapUv:Ue&&E(T.specularColorMap.channel),specularIntensityMapUv:Qe&&E(T.specularIntensityMap.channel),transmissionMapUv:$e&&E(T.transmissionMap.channel),thicknessMapUv:ot&&E(T.thicknessMap.channel),alphaMapUv:we&&E(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rn||Z),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!q.attributes.uv&&(Zt||we),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&rn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ve,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Gt,decodeVideoTextureEmissive:dn&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wa,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function b(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)I.push(k),I.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(y(I,T),P(I,T),I.push(r.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function y(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function P(T,I){f.disableAll(),I.instancing&&f.enable(0),I.instancingColor&&f.enable(1),I.instancingMorph&&f.enable(2),I.matcap&&f.enable(3),I.envMap&&f.enable(4),I.normalMapObjectSpace&&f.enable(5),I.normalMapTangentSpace&&f.enable(6),I.clearcoat&&f.enable(7),I.iridescence&&f.enable(8),I.alphaTest&&f.enable(9),I.vertexColors&&f.enable(10),I.vertexAlphas&&f.enable(11),I.vertexUv1s&&f.enable(12),I.vertexUv2s&&f.enable(13),I.vertexUv3s&&f.enable(14),I.vertexTangents&&f.enable(15),I.anisotropy&&f.enable(16),I.alphaHash&&f.enable(17),I.batching&&f.enable(18),I.dispersion&&f.enable(19),I.batchingColor&&f.enable(20),I.gradientMap&&f.enable(21),I.packedNormalMap&&f.enable(22),I.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),I.fog&&f.enable(0),I.useFog&&f.enable(1),I.flatShading&&f.enable(2),I.logarithmicDepthBuffer&&f.enable(3),I.reversedDepthBuffer&&f.enable(4),I.skinning&&f.enable(5),I.morphTargets&&f.enable(6),I.morphNormals&&f.enable(7),I.morphColors&&f.enable(8),I.premultipliedAlpha&&f.enable(9),I.shadowMapEnabled&&f.enable(10),I.doubleSided&&f.enable(11),I.flipSided&&f.enable(12),I.useDepthPacking&&f.enable(13),I.dithering&&f.enable(14),I.transmission&&f.enable(15),I.sheen&&f.enable(16),I.opaque&&f.enable(17),I.pointsUvs&&f.enable(18),I.decodeVideoTexture&&f.enable(19),I.decodeVideoTextureEmissive&&f.enable(20),I.alphaToCoverage&&f.enable(21),I.numLightProbeGrids>0&&f.enable(22),I.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function z(T){const I=S[T.type];let k;if(I){const H=Ji[I];k=xR.clone(H.uniforms)}else k=T.uniforms;return k}function w(T,I){let k=_.get(I);return k!==void 0?++k.usedTimes:(k=new WN(r,I,T,l),p.push(k),_.set(I,k)),k}function U(T){if(--T.usedTimes===0){const I=p.indexOf(T);p[I]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function F(){h.dispose()}return{getParameters:C,getProgramCacheKey:b,getUniforms:z,acquireProgram:w,releaseProgram:U,releaseShaderCache:L,programs:p,dispose:F}}function QN(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function JN(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ry(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sy(){const r=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,C,b,y){let P=r[e];return P===void 0?(P={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:b,group:y},r[e]=P):(P.id=g.id,P.object=g,P.geometry=S,P.material=E,P.materialVariant=f(g),P.groupOrder=C,P.renderOrder=g.renderOrder,P.z=b,P.group=y),e++,P}function m(g,S,E,C,b,y){const P=h(g,S,E,C,b,y);E.transmission>0?a.push(P):E.transparent===!0?l.push(P):i.push(P)}function p(g,S,E,C,b,y){const P=h(g,S,E,C,b,y);E.transmission>0?a.unshift(P):E.transparent===!0?l.unshift(P):i.unshift(P)}function _(g,S,E){i.length>1&&i.sort(g||JN),a.length>1&&a.sort(S||ry),l.length>1&&l.sort(S||ry),E&&(i.reverse(),a.reverse(),l.reverse())}function v(){for(let g=e,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function $N(){let r=new WeakMap;function e(a,l){const c=r.get(a);let f;return c===void 0?(f=new sy,r.set(a,[f])):l>=c.length?(f=new sy,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function eL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new At};break;case"SpotLight":i={position:new ie,direction:new ie,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function tL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let nL=0;function iL(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aL(r){const e=new eL,i=tL(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ie);const l=new ie,c=new fn,f=new fn;function h(p){let _=0,v=0,g=0;for(let I=0;I<9;I++)a.probe[I].set(0,0,0);let S=0,E=0,C=0,b=0,y=0,P=0,z=0,w=0,U=0,L=0,F=0;p.sort(iL);for(let I=0,k=p.length;I<k;I++){const H=p[I],K=H.color,ce=H.intensity,de=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===rs?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=K.r*ce,v+=K.g*ce,g+=K.b*ce;else if(H.isLightProbe){for(let D=0;D<9;D++)a.probe[D].addScaledVector(H.sh.coefficients[D],ce);F++}else if(H.isDirectionalLight){const D=e.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,$=i.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,a.directionalShadow[S]=$,a.directionalShadowMap[S]=q,a.directionalShadowMatrix[S]=H.shadow.matrix,P++}a.directional[S]=D,S++}else if(H.isSpotLight){const D=e.get(H);D.position.setFromMatrixPosition(H.matrixWorld),D.color.copy(K).multiplyScalar(ce),D.distance=de,D.coneCos=Math.cos(H.angle),D.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),D.decay=H.decay,a.spot[C]=D;const G=H.shadow;if(H.map&&(a.spotLightMap[U]=H.map,U++,G.updateMatrices(H),H.castShadow&&L++),a.spotLightMatrix[C]=G.matrix,H.castShadow){const $=i.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,a.spotShadow[C]=$,a.spotShadowMap[C]=q,w++}C++}else if(H.isRectAreaLight){const D=e.get(H);D.color.copy(K).multiplyScalar(ce),D.halfWidth.set(H.width*.5,0,0),D.halfHeight.set(0,H.height*.5,0),a.rectArea[b]=D,b++}else if(H.isPointLight){const D=e.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),D.distance=H.distance,D.decay=H.decay,H.castShadow){const G=H.shadow,$=i.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,a.pointShadow[E]=$,a.pointShadowMap[E]=q,a.pointShadowMatrix[E]=H.shadow.matrix,z++}a.point[E]=D,E++}else if(H.isHemisphereLight){const D=e.get(H);D.skyColor.copy(H.color).multiplyScalar(ce),D.groundColor.copy(H.groundColor).multiplyScalar(ce),a.hemi[y]=D,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==b||T.hemiLength!==y||T.numDirectionalShadows!==P||T.numPointShadows!==z||T.numSpotShadows!==w||T.numSpotMaps!==U||T.numLightProbes!==F)&&(a.directional.length=S,a.spot.length=C,a.rectArea.length=b,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=z,a.pointShadowMap.length=z,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=z,a.spotLightMatrix.length=w+U-L,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=F,T.directionalLength=S,T.pointLength=E,T.spotLength=C,T.rectAreaLength=b,T.hemiLength=y,T.numDirectionalShadows=P,T.numPointShadows=z,T.numSpotShadows=w,T.numSpotMaps=U,T.numLightProbes=F,a.version=nL++)}function m(p,_){let v=0,g=0,S=0,E=0,C=0;const b=_.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const z=p[y];if(z.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(b),v++}else if(z.isSpotLight){const w=a.spot[S];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(b),w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(b),S++}else if(z.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(b),f.identity(),c.copy(z.matrixWorld),c.premultiply(b),f.extractRotation(c),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(z.isPointLight){const w=a.point[g];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(b),g++}else if(z.isHemisphereLight){const w=a.hemi[C];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:a}}function oy(r){const e=new aL(r),i=[],a=[],l=[];function c(g){v.camera=g,i.length=0,a.length=0,l.length=0}function f(g){i.push(g)}function h(g){a.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function rL(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new oy(r),e.set(l,[h])):c>=f.length?(h=new oy(r),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:i,dispose:a}}const sL=`void main() {
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
}`,lL=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],cL=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],ly=new fn,xl=new ie,Qh=new ie;function uL(r,e,i){let a=new qS;const l=new Ut,c=new Ut,f=new un,h=new MR,m=new ER,p={},_=i.maxTextureSize,v={[Mr]:ei,[ei]:Mr,[wa]:wa},g=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:sL,fragmentShader:oL}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new mi;E.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new za(E,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let y=this.type;this.render=function(L,F,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===l3&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wu);const I=r.getRenderTarget(),k=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Na),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ce=y!==this.type;ce&&F.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(q=>q.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,q=L.length;de<q;de++){const D=L[de],G=D.shadow;if(G===void 0){rt("WebGLShadowMap:",D,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const $=G.getFrameExtents();l.multiply($),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,G.mapSize.y=c.y));const pe=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=pe,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Sl){if(D.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ia(l.x,l.y,{format:rs,type:Pa,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),G.map.texture.name=D.name+".shadowMap",G.map.depthTexture=new ho(l.x,l.y,ea),G.map.depthTexture.name=D.name+".shadowMapDepth",G.map.depthTexture.format=Ia,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else D.isPointLight?(G.map=new eb(l.x),G.map.depthTexture=new vR(l.x,aa)):(G.map=new ia(l.x,l.y),G.map.depthTexture=new ho(l.x,l.y,aa)),G.map.depthTexture.name=D.name+".shadowMap",G.map.depthTexture.format=Ia,this.type===wu?(G.map.depthTexture.compareFunction=pe?Am:Tm,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On);G.camera.updateProjectionMatrix()}const ue=G.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<ue;N++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,N),r.clear();else{N===0&&(r.setRenderTarget(G.map),r.clear());const W=G.getViewport(N);f.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),K.viewport(f)}if(D.isPointLight){const W=G.camera,ve=G.matrix,Se=D.distance||W.far;Se!==W.far&&(W.far=Se,W.updateProjectionMatrix()),xl.setFromMatrixPosition(D.matrixWorld),W.position.copy(xl),Qh.copy(W.position),Qh.add(lL[N]),W.up.copy(cL[N]),W.lookAt(Qh),W.updateMatrixWorld(),ve.makeTranslation(-xl.x,-xl.y,-xl.z),ly.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ly,W.coordinateSystem,W.reversedDepth)}else G.updateMatrices(D);a=G.getFrustum(),w(F,T,G.camera,D,this.type)}G.isPointLightShadow!==!0&&this.type===Sl&&P(G,T),G.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(I,k,H)};function P(L,F){const T=e.update(C);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ia(l.x,l.y,{format:rs,type:Pa})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,C,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(F,null,T,S,C,null)}function z(L,F,T,I){let k=null;const H=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)k=H;else if(k=T.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=k.uuid,ce=F.uuid;let de=p[K];de===void 0&&(de={},p[K]=de);let q=de[ce];q===void 0&&(q=k.clone(),de[ce]=q,F.addEventListener("dispose",U)),k=q}if(k.visible=F.visible,k.wireframe=F.wireframe,I===Sl?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:v[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const K=r.properties.get(k);K.light=T}return k}function w(L,F,T,I,k){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Sl)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),de=L.material;if(Array.isArray(de)){const q=ce.groups;for(let D=0,G=q.length;D<G;D++){const $=q[D],pe=de[$.materialIndex];if(pe&&pe.visible){const ue=z(L,pe,I,k);L.onBeforeShadow(r,L,F,T,ce,ue,$),r.renderBufferDirect(T,null,ce,ue,L,$),L.onAfterShadow(r,L,F,T,ce,ue,$)}}}else if(de.visible){const q=z(L,de,I,k);L.onBeforeShadow(r,L,F,T,ce,q,null),r.renderBufferDirect(T,null,ce,q,L,null),L.onAfterShadow(r,L,F,T,ce,q,null)}}const K=L.children;for(let ce=0,de=K.length;ce<de;ce++)w(K[ce],F,T,I,k)}function U(L){L.target.removeEventListener("dispose",U);for(const T in p){const I=p[T],k=L.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function fL(r,e){function i(){let Y=!1;const we=new un;let xe=null;const Ne=new un(0,0,0,0);return{setMask:function(Fe){xe!==Fe&&!Y&&(r.colorMask(Fe,Fe,Fe,Fe),xe=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Te,Ye,ke,$t){$t===!0&&(Fe*=ke,Te*=ke,Ye*=ke),we.set(Fe,Te,Ye,ke),Ne.equals(we)===!1&&(r.clearColor(Fe,Te,Ye,ke),Ne.copy(we))},reset:function(){Y=!1,xe=null,Ne.set(-1,0,0,0)}}}function a(){let Y=!1,we=!1,xe=null,Ne=null,Fe=null;return{setReversed:function(Te){if(we!==Te){const Ye=e.get("EXT_clip_control");Te?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),we=Te;const ke=Fe;Fe=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(Te){Te?Ee(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(Te){xe!==Te&&!Y&&(r.depthMask(Te),xe=Te)},setFunc:function(Te){if(we&&(Te=G3[Te]),Ne!==Te){switch(Te){case mp:r.depthFunc(r.NEVER);break;case gp:r.depthFunc(r.ALWAYS);break;case vp:r.depthFunc(r.LESS);break;case uo:r.depthFunc(r.LEQUAL);break;case _p:r.depthFunc(r.EQUAL);break;case xp:r.depthFunc(r.GEQUAL);break;case yp:r.depthFunc(r.GREATER);break;case Sp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=Te}},setLocked:function(Te){Y=Te},setClear:function(Te){Fe!==Te&&(Fe=Te,we&&(Te=1-Te),r.clearDepth(Te))},reset:function(){Y=!1,xe=null,Ne=null,Fe=null,we=!1}}}function l(){let Y=!1,we=null,xe=null,Ne=null,Fe=null,Te=null,Ye=null,ke=null,$t=null;return{setTest:function(Pt){Y||(Pt?Ee(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(Pt){we!==Pt&&!Y&&(r.stencilMask(Pt),we=Pt)},setFunc:function(Pt,ni,ii){(xe!==Pt||Ne!==ni||Fe!==ii)&&(r.stencilFunc(Pt,ni,ii),xe=Pt,Ne=ni,Fe=ii)},setOp:function(Pt,ni,ii){(Te!==Pt||Ye!==ni||ke!==ii)&&(r.stencilOp(Pt,ni,ii),Te=Pt,Ye=ni,ke=ii)},setLocked:function(Pt){Y=Pt},setClear:function(Pt){$t!==Pt&&(r.clearStencil(Pt),$t=Pt)},reset:function(){Y=!1,we=null,xe=null,Ne=null,Fe=null,Te=null,Ye=null,ke=null,$t=null}}}const c=new i,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],C=null,b=!1,y=null,P=null,z=null,w=null,U=null,L=null,F=null,T=new At(0,0,0),I=0,k=!1,H=null,K=null,ce=null,de=null,q=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(pe)[1]),G=$>=1):pe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),G=$>=2);let ue=null,N={};const W=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Se=new un().fromArray(W),Ae=new un().fromArray(ve);function ee(Y,we,xe,Ne){const Fe=new Uint8Array(4),Te=r.createTexture();r.bindTexture(Y,Te),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<xe;Ye++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(we+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Te}const Me={};Me[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ee(r.DEPTH_TEST),f.setFunc(uo),an(!1),rn(rx),Ee(r.CULL_FACE),bt(Na);function Ee(Y){_[Y]!==!0&&(r.enable(Y),_[Y]=!0)}function Ge(Y){_[Y]!==!1&&(r.disable(Y),_[Y]=!1)}function st(Y,we){return g[Y]!==we?(r.bindFramebuffer(Y,we),g[Y]=we,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=we),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=we),!0):!1}function Je(Y,we){let xe=E,Ne=!1;if(Y){xe=S.get(we),xe===void 0&&(xe=[],S.set(we,xe));const Fe=Y.textures;if(xe.length!==Fe.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,Ye=Fe.length;Te<Ye;Te++)xe[Te]=r.COLOR_ATTACHMENT0+Te;xe.length=Fe.length,Ne=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(xe)}function Zt(Y){return C!==Y?(r.useProgram(Y),C=Y,!0):!1}const pt={[Kr]:r.FUNC_ADD,[u3]:r.FUNC_SUBTRACT,[f3]:r.FUNC_REVERSE_SUBTRACT};pt[d3]=r.MIN,pt[h3]=r.MAX;const St={[p3]:r.ZERO,[m3]:r.ONE,[g3]:r.SRC_COLOR,[hp]:r.SRC_ALPHA,[b3]:r.SRC_ALPHA_SATURATE,[y3]:r.DST_COLOR,[_3]:r.DST_ALPHA,[v3]:r.ONE_MINUS_SRC_COLOR,[pp]:r.ONE_MINUS_SRC_ALPHA,[S3]:r.ONE_MINUS_DST_COLOR,[x3]:r.ONE_MINUS_DST_ALPHA,[M3]:r.CONSTANT_COLOR,[E3]:r.ONE_MINUS_CONSTANT_COLOR,[T3]:r.CONSTANT_ALPHA,[A3]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(Y,we,xe,Ne,Fe,Te,Ye,ke,$t,Pt){if(Y===Na){b===!0&&(Ge(r.BLEND),b=!1);return}if(b===!1&&(Ee(r.BLEND),b=!0),Y!==c3){if(Y!==y||Pt!==k){if((P!==Kr||U!==Kr)&&(r.blendEquation(r.FUNC_ADD),P=Kr,U=Kr),Pt)switch(Y){case so:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sx:r.blendFunc(r.ONE,r.ONE);break;case ox:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case so:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ox:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lx:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",Y);break}z=null,w=null,L=null,F=null,T.set(0,0,0),I=0,y=Y,k=Pt}return}Fe=Fe||we,Te=Te||xe,Ye=Ye||Ne,(we!==P||Fe!==U)&&(r.blendEquationSeparate(pt[we],pt[Fe]),P=we,U=Fe),(xe!==z||Ne!==w||Te!==L||Ye!==F)&&(r.blendFuncSeparate(St[xe],St[Ne],St[Te],St[Ye]),z=xe,w=Ne,L=Te,F=Ye),(ke.equals(T)===!1||$t!==I)&&(r.blendColor(ke.r,ke.g,ke.b,$t),T.copy(ke),I=$t),y=Y,k=!1}function mt(Y,we){Y.side===wa?Ge(r.CULL_FACE):Ee(r.CULL_FACE);let xe=Y.side===ei;we&&(xe=!xe),an(xe),Y.blending===so&&Y.transparent===!1?bt(Na):bt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ne=Y.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),dn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function an(Y){H!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),H=Y)}function rn(Y){Y!==s3?(Ee(r.CULL_FACE),Y!==K&&(Y===rx?r.cullFace(r.BACK):Y===o3?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),K=Y}function sn(Y){Y!==ce&&(G&&r.lineWidth(Y),ce=Y)}function dn(Y,we,xe){Y?(Ee(r.POLYGON_OFFSET_FILL),(de!==we||q!==xe)&&(de=we,q=xe,f.getReversed()&&(we=-we),r.polygonOffset(we,xe))):Ge(r.POLYGON_OFFSET_FILL)}function jt(Y){Y?Ee(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function on(Y){Y===void 0&&(Y=r.TEXTURE0+D-1),ue!==Y&&(r.activeTexture(Y),ue=Y)}function Z(Y,we,xe){xe===void 0&&(ue===null?xe=r.TEXTURE0+D-1:xe=ue);let Ne=N[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},N[xe]=Ne),(Ne.type!==Y||Ne.texture!==we)&&(ue!==xe&&(r.activeTexture(xe),ue=xe),r.bindTexture(Y,we||Me[Y]),Ne.type=Y,Ne.texture=we)}function Vt(){const Y=N[ue];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Nt(){try{r.compressedTexImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function M(){try{r.texSubImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function J(){try{r.texSubImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function me(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function Ce(){try{r.texStorage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function Le(){try{r.texStorage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function he(){try{r.texImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function ge(){try{r.texImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function De(Y){return v[Y]!==void 0?v[Y]:r.getParameter(Y)}function Be(Y,we){v[Y]!==we&&(r.pixelStorei(Y,we),v[Y]=we)}function Pe(Y){Se.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Se.copy(Y))}function Ue(Y){Ae.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Ae.copy(Y))}function Qe(Y,we){let xe=p.get(we);xe===void 0&&(xe=new WeakMap,p.set(we,xe));let Ne=xe.get(Y);Ne===void 0&&(Ne=r.getUniformBlockIndex(we,Y.name),xe.set(Y,Ne))}function $e(Y,we){const Ne=p.get(we).get(Y);m.get(we)!==Ne&&(r.uniformBlockBinding(we,Ne,Y.__bindingPointIndex),m.set(we,Ne))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},ue=null,N={},g={},S=new WeakMap,E=[],C=null,b=!1,y=null,P=null,z=null,w=null,U=null,L=null,F=null,T=new At(0,0,0),I=0,k=!1,H=null,K=null,ce=null,de=null,q=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ee,disable:Ge,bindFramebuffer:st,drawBuffers:Je,useProgram:Zt,setBlending:bt,setMaterial:mt,setFlipSided:an,setCullFace:rn,setLineWidth:sn,setPolygonOffset:dn,setScissorTest:jt,activeTexture:on,bindTexture:Z,unbindTexture:Vt,compressedTexImage2D:Nt,compressedTexImage3D:O,texImage2D:he,texImage3D:ge,pixelStorei:Be,getParameter:De,updateUBOMapping:Qe,uniformBlockBinding:$e,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:M,texSubImage3D:J,compressedTexSubImage2D:se,compressedTexSubImage3D:me,scissor:Pe,viewport:Ue,reset:ot}}function dL(r,e,i,a,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,M){return E?new OffscreenCanvas(O,M):ku("canvas")}function b(O,M,J){let se=1;const me=Nt(O);if((me.width>J||me.height>J)&&(se=J/Math.max(me.width,me.height)),se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ce=Math.floor(se*me.width),Le=Math.floor(se*me.height);g===void 0&&(g=C(Ce,Le));const he=M?C(Ce,Le):g;return he.width=Ce,he.height=Le,he.getContext("2d").drawImage(O,0,0,Ce,Le),rt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ce+"x"+Le+")."),he}else return"data"in O&&rt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function y(O){return O.generateMipmaps}function P(O){r.generateMipmap(O)}function z(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(O,M,J,se,me,Ce=!1){if(O!==null){if(r[O]!==void 0)return r[O];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Le;se&&(Le=e.get("EXT_texture_norm16"),Le||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=M;if(M===r.RED&&(J===r.FLOAT&&(he=r.R32F),J===r.HALF_FLOAT&&(he=r.R16F),J===r.UNSIGNED_BYTE&&(he=r.R8),J===r.UNSIGNED_SHORT&&Le&&(he=Le.R16_EXT),J===r.SHORT&&Le&&(he=Le.R16_SNORM_EXT)),M===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.R8UI),J===r.UNSIGNED_SHORT&&(he=r.R16UI),J===r.UNSIGNED_INT&&(he=r.R32UI),J===r.BYTE&&(he=r.R8I),J===r.SHORT&&(he=r.R16I),J===r.INT&&(he=r.R32I)),M===r.RG&&(J===r.FLOAT&&(he=r.RG32F),J===r.HALF_FLOAT&&(he=r.RG16F),J===r.UNSIGNED_BYTE&&(he=r.RG8),J===r.UNSIGNED_SHORT&&Le&&(he=Le.RG16_EXT),J===r.SHORT&&Le&&(he=Le.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RG8UI),J===r.UNSIGNED_SHORT&&(he=r.RG16UI),J===r.UNSIGNED_INT&&(he=r.RG32UI),J===r.BYTE&&(he=r.RG8I),J===r.SHORT&&(he=r.RG16I),J===r.INT&&(he=r.RG32I)),M===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGB8UI),J===r.UNSIGNED_SHORT&&(he=r.RGB16UI),J===r.UNSIGNED_INT&&(he=r.RGB32UI),J===r.BYTE&&(he=r.RGB8I),J===r.SHORT&&(he=r.RGB16I),J===r.INT&&(he=r.RGB32I)),M===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),J===r.UNSIGNED_INT&&(he=r.RGBA32UI),J===r.BYTE&&(he=r.RGBA8I),J===r.SHORT&&(he=r.RGBA16I),J===r.INT&&(he=r.RGBA32I)),M===r.RGB&&(J===r.UNSIGNED_SHORT&&Le&&(he=Le.RGB16_EXT),J===r.SHORT&&Le&&(he=Le.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),M===r.RGBA){const ge=Ce?Gu:Et.getTransfer(me);J===r.FLOAT&&(he=r.RGBA32F),J===r.HALF_FLOAT&&(he=r.RGBA16F),J===r.UNSIGNED_BYTE&&(he=ge===Gt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Le&&(he=Le.RGBA16_EXT),J===r.SHORT&&Le&&(he=Le.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function U(O,M){let J;return O?M===null||M===aa||M===Cl?J=r.DEPTH24_STENCIL8:M===ea?J=r.DEPTH32F_STENCIL8:M===Rl&&(J=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===aa||M===Cl?J=r.DEPTH_COMPONENT24:M===ea?J=r.DEPTH_COMPONENT32F:M===Rl&&(J=r.DEPTH_COMPONENT16),J}function L(O,M){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==On&&O.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function F(O){const M=O.target;M.removeEventListener("dispose",F),I(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(O){const M=O.target;M.removeEventListener("dispose",T),H(M)}function I(O){const M=a.get(O);if(M.__webglInit===void 0)return;const J=O.source,se=S.get(J);if(se){const me=se[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&k(O),Object.keys(se).length===0&&S.delete(J)}a.remove(O)}function k(O){const M=a.get(O);r.deleteTexture(M.__webglTexture);const J=O.source,se=S.get(J);delete se[M.__cacheKey],f.memory.textures--}function H(O){const M=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let me=0;me<M.__webglFramebuffer[se].length;me++)r.deleteFramebuffer(M.__webglFramebuffer[se][me]);else r.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)r.deleteFramebuffer(M.__webglFramebuffer[se]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=O.textures;for(let se=0,me=J.length;se<me;se++){const Ce=a.get(J[se]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),f.memory.textures--),a.remove(J[se])}a.remove(O)}let K=0;function ce(){K=0}function de(){return K}function q(O){K=O}function D(){const O=K;return O>=l.maxTextures&&rt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),K+=1,O}function G(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function $(O,M){const J=a.get(O);if(O.isVideoTexture&&Z(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const se=O.image;if(se===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(J,O,M);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+M)}function pe(O,M){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){Ge(J,O,M);return}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+M)}function ue(O,M){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){Ge(J,O,M);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+M)}function N(O,M){const J=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&J.__version!==O.version){st(J,O,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+M)}const W={[bp]:r.REPEAT,[Da]:r.CLAMP_TO_EDGE,[Mp]:r.MIRRORED_REPEAT},ve={[On]:r.NEAREST,[w3]:r.NEAREST_MIPMAP_NEAREST,[$c]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},Se={[L3]:r.NEVER,[z3]:r.ALWAYS,[U3]:r.LESS,[Tm]:r.LEQUAL,[O3]:r.EQUAL,[Am]:r.GEQUAL,[P3]:r.GREATER,[I3]:r.NOTEQUAL};function Ae(O,M){if(M.type===ea&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===yh||M.magFilter===$c||M.magFilter===$r||M.minFilter===Gn||M.minFilter===yh||M.minFilter===$c||M.minFilter===$r)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,W[M.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,W[M.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,W[M.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,ve[M.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==$c&&M.minFilter!==$r||M.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function ee(O,M){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",F));const se=M.source;let me=S.get(se);me===void 0&&(me={},S.set(se,me));const Ce=G(M);if(Ce!==O.__cacheKey){me[Ce]===void 0&&(me[Ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),me[Ce].usedTimes++;const Le=me[O.__cacheKey];Le!==void 0&&(me[O.__cacheKey].usedTimes--,Le.usedTimes===0&&k(M)),O.__cacheKey=Ce,O.__webglTexture=me[Ce].texture}return J}function Me(O,M,J){return Math.floor(Math.floor(O/J)/M)}function Ee(O,M,J,se){const Ce=O.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,J,se,M.data);else{Ce.sort((Be,Pe)=>Be.start-Pe.start);let Le=0;for(let Be=1;Be<Ce.length;Be++){const Pe=Ce[Le],Ue=Ce[Be],Qe=Pe.start+Pe.count,$e=Me(Ue.start,M.width,4),ot=Me(Pe.start,M.width,4);Ue.start<=Qe+1&&$e===ot&&Me(Ue.start+Ue.count-1,M.width,4)===$e?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++Le,Ce[Le]=Ue)}Ce.length=Le+1;const he=i.getParameter(r.UNPACK_ROW_LENGTH),ge=i.getParameter(r.UNPACK_SKIP_PIXELS),De=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Pe=Ce.length;Be<Pe;Be++){const Ue=Ce[Be],Qe=Math.floor(Ue.start/4),$e=Math.ceil(Ue.count/4),ot=Qe%M.width,Y=Math.floor(Qe/M.width),we=$e,xe=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,ot,Y,we,xe,J,se,M.data)}O.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,he),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Ge(O,M,J){let se=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=r.TEXTURE_3D);const me=ee(O,M),Ce=M.source;i.bindTexture(se,O.__webglTexture,r.TEXTURE0+J);const Le=a.get(Ce);if(Ce.version!==Le.__version||me===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const xe=Et.getPrimaries(Et.workingColorSpace),Ne=M.colorSpace===_r?null:Et.getPrimaries(M.colorSpace),Fe=M.colorSpace===_r||xe===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=b(M.image,!1,l.maxTextureSize);ge=Vt(M,ge);const De=c.convert(M.format,M.colorSpace),Be=c.convert(M.type);let Pe=w(M.internalFormat,De,Be,M.normalized,M.colorSpace,M.isVideoTexture);Ae(se,M);let Ue;const Qe=M.mipmaps,$e=M.isVideoTexture!==!0,ot=Le.__version===void 0||me===!0,Y=Ce.dataReady,we=L(M,ge);if(M.isDepthTexture)Pe=U(M.format===es,M.type),ot&&($e?i.texStorage2D(r.TEXTURE_2D,1,Pe,ge.width,ge.height):i.texImage2D(r.TEXTURE_2D,0,Pe,ge.width,ge.height,0,De,Be,null));else if(M.isDataTexture)if(Qe.length>0){$e&&ot&&i.texStorage2D(r.TEXTURE_2D,we,Pe,Qe[0].width,Qe[0].height);for(let xe=0,Ne=Qe.length;xe<Ne;xe++)Ue=Qe[xe],$e?Y&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,De,Be,Ue.data):i.texImage2D(r.TEXTURE_2D,xe,Pe,Ue.width,Ue.height,0,De,Be,Ue.data);M.generateMipmaps=!1}else $e?(ot&&i.texStorage2D(r.TEXTURE_2D,we,Pe,ge.width,ge.height),Y&&Ee(M,ge,De,Be)):i.texImage2D(r.TEXTURE_2D,0,Pe,ge.width,ge.height,0,De,Be,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,we,Pe,Qe[0].width,Qe[0].height,ge.depth);for(let xe=0,Ne=Qe.length;xe<Ne;xe++)if(Ue=Qe[xe],M.format!==Gi)if(De!==null)if($e){if(Y)if(M.layerUpdates.size>0){const Fe=Bx(Ue.width,Ue.height,M.format,M.type);for(const Te of M.layerUpdates){const Ye=Ue.data.subarray(Te*Fe/Ue.data.BYTES_PER_ELEMENT,(Te+1)*Fe/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,Te,Ue.width,Ue.height,1,De,Ye)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Ue.width,Ue.height,ge.depth,De,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,Pe,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Ue.width,Ue.height,ge.depth,De,Be,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xe,Pe,Ue.width,Ue.height,ge.depth,0,De,Be,Ue.data)}else{$e&&ot&&i.texStorage2D(r.TEXTURE_2D,we,Pe,Qe[0].width,Qe[0].height);for(let xe=0,Ne=Qe.length;xe<Ne;xe++)Ue=Qe[xe],M.format!==Gi?De!==null?$e?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,De,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,xe,Pe,Ue.width,Ue.height,0,Ue.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Y&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,De,Be,Ue.data):i.texImage2D(r.TEXTURE_2D,xe,Pe,Ue.width,Ue.height,0,De,Be,Ue.data)}else if(M.isDataArrayTexture)if($e){if(ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,we,Pe,ge.width,ge.height,ge.depth),Y)if(M.layerUpdates.size>0){const xe=Bx(ge.width,ge.height,M.format,M.type);for(const Ne of M.layerUpdates){const Fe=ge.data.subarray(Ne*xe/ge.data.BYTES_PER_ELEMENT,(Ne+1)*xe/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ne,ge.width,ge.height,1,De,Be,Fe)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,De,Be,ge.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,De,Be,ge.data);else if(M.isData3DTexture)$e?(ot&&i.texStorage3D(r.TEXTURE_3D,we,Pe,ge.width,ge.height,ge.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,De,Be,ge.data)):i.texImage3D(r.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,De,Be,ge.data);else if(M.isFramebufferTexture){if(ot)if($e)i.texStorage2D(r.TEXTURE_2D,we,Pe,ge.width,ge.height);else{let xe=ge.width,Ne=ge.height;for(let Fe=0;Fe<we;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Pe,xe,Ne,0,De,Be,null),xe>>=1,Ne>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const xe=r.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ge.parentNode!==xe){xe.appendChild(ge),v.add(M),xe.onpaint=Ne=>{const Fe=Ne.changedElements;for(const Te of v)Fe.includes(Te.image)&&(Te.needsUpdate=!0)},xe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ge);else{const Fe=r.RGBA,Te=r.RGBA,Ye=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Fe,Te,Ye,ge)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Qe.length>0){if($e&&ot){const xe=Nt(Qe[0]);i.texStorage2D(r.TEXTURE_2D,we,Pe,xe.width,xe.height)}for(let xe=0,Ne=Qe.length;xe<Ne;xe++)Ue=Qe[xe],$e?Y&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,De,Be,Ue):i.texImage2D(r.TEXTURE_2D,xe,Pe,De,Be,Ue);M.generateMipmaps=!1}else if($e){if(ot){const xe=Nt(ge);i.texStorage2D(r.TEXTURE_2D,we,Pe,xe.width,xe.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Be,ge)}else i.texImage2D(r.TEXTURE_2D,0,Pe,De,Be,ge);y(M)&&P(se),Le.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function st(O,M,J){if(M.image.length!==6)return;const se=ee(O,M),me=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+J);const Ce=a.get(me);if(me.version!==Ce.__version||se===!0){i.activeTexture(r.TEXTURE0+J);const Le=Et.getPrimaries(Et.workingColorSpace),he=M.colorSpace===_r?null:Et.getPrimaries(M.colorSpace),ge=M.colorSpace===_r||Le===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let Te=0;Te<6;Te++)!De&&!Be?Pe[Te]=b(M.image[Te],!0,l.maxCubemapSize):Pe[Te]=Be?M.image[Te].image:M.image[Te],Pe[Te]=Vt(M,Pe[Te]);const Ue=Pe[0],Qe=c.convert(M.format,M.colorSpace),$e=c.convert(M.type),ot=w(M.internalFormat,Qe,$e,M.normalized,M.colorSpace),Y=M.isVideoTexture!==!0,we=Ce.__version===void 0||se===!0,xe=me.dataReady;let Ne=L(M,Ue);Ae(r.TEXTURE_CUBE_MAP,M);let Fe;if(De){Y&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ot,Ue.width,Ue.height);for(let Te=0;Te<6;Te++){Fe=Pe[Te].mipmaps;for(let Ye=0;Ye<Fe.length;Ye++){const ke=Fe[Ye];M.format!==Gi?Qe!==null?Y?xe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,0,0,ke.width,ke.height,Qe,ke.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,ot,ke.width,ke.height,0,ke.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,0,0,ke.width,ke.height,Qe,$e,ke.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,ot,ke.width,ke.height,0,Qe,$e,ke.data)}}}else{if(Fe=M.mipmaps,Y&&we){Fe.length>0&&Ne++;const Te=Nt(Pe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ot,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Be){Y?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Pe[Te].width,Pe[Te].height,Qe,$e,Pe[Te].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ot,Pe[Te].width,Pe[Te].height,0,Qe,$e,Pe[Te].data);for(let Ye=0;Ye<Fe.length;Ye++){const $t=Fe[Ye].image[Te].image;Y?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,0,0,$t.width,$t.height,Qe,$e,$t.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,ot,$t.width,$t.height,0,Qe,$e,$t.data)}}else{Y?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Qe,$e,Pe[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ot,Qe,$e,Pe[Te]);for(let Ye=0;Ye<Fe.length;Ye++){const ke=Fe[Ye];Y?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,0,0,Qe,$e,ke.image[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,ot,Qe,$e,ke.image[Te])}}}y(M)&&P(r.TEXTURE_CUBE_MAP),Ce.__version=me.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Je(O,M,J,se,me,Ce){const Le=c.convert(J.format,J.colorSpace),he=c.convert(J.type),ge=w(J.internalFormat,Le,he,J.normalized,J.colorSpace),De=a.get(M),Be=a.get(J);if(Be.__renderTarget=M,!De.__hasExternalTextures){const Pe=Math.max(1,M.width>>Ce),Ue=Math.max(1,M.height>>Ce);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?i.texImage3D(me,Ce,ge,Pe,Ue,M.depth,0,Le,he,null):i.texImage2D(me,Ce,ge,Pe,Ue,0,Le,he,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),on(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,me,Be.__webglTexture,0,jt(M)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,me,Be.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(O,M,J){if(r.bindRenderbuffer(r.RENDERBUFFER,O),M.depthBuffer){const se=M.depthTexture,me=se&&se.isDepthTexture?se.type:null,Ce=U(M.stencilBuffer,me),Le=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;on(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt(M),Ce,M.width,M.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt(M),Ce,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,O)}else{const se=M.textures;for(let me=0;me<se.length;me++){const Ce=se[me],Le=c.convert(Ce.format,Ce.colorSpace),he=c.convert(Ce.type),ge=w(Ce.internalFormat,Le,he,Ce.normalized,Ce.colorSpace);on(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt(M),ge,M.width,M.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt(M),ge,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ge,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(O,M,J){const se=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=a.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M.depthTexture);const De=c.convert(M.depthTexture.format),Be=c.convert(M.depthTexture.type);let Pe;M.depthTexture.format===Ia?Pe=r.DEPTH_COMPONENT24:M.depthTexture.format===es&&(Pe=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,M.width,M.height,0,De,Be,null)}}else $(M.depthTexture,0);const Ce=me.__webglTexture,Le=jt(M),he=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ge=M.depthTexture.format===es?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ia)on(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,he,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ge,he,Ce,0);else if(M.depthTexture.format===es)on(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,he,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ge,he,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(O){const M=a.get(O),J=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const se=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",me)};se.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=se}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(J)for(let se=0;se<6;se++)pt(M.__webglFramebuffer[se],O,se);else{const se=O.texture.mipmaps;se&&se.length>0?pt(M.__webglFramebuffer[0],O,0):pt(M.__webglFramebuffer,O,0)}else if(J){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=r.createRenderbuffer(),Zt(M.__webglDepthbuffer[se],O,!1);else{const me=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,Ce)}}else{const se=O.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Zt(M.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(O,M,J){const se=a.get(O);M!==void 0&&Je(se.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&St(O)}function mt(O){const M=O.texture,J=a.get(O),se=a.get(M);O.addEventListener("dispose",T);const me=O.textures,Ce=O.isWebGLCubeRenderTarget===!0,Le=me.length>1;if(Le||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=M.version,f.memory.textures++),Ce){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let ge=0;ge<M.mipmaps.length;ge++)J.__webglFramebuffer[he][ge]=r.createFramebuffer()}else J.__webglFramebuffer[he]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)J.__webglFramebuffer[he]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Le)for(let he=0,ge=me.length;he<ge;he++){const De=a.get(me[he]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&on(O)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<me.length;he++){const ge=me[he];J.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const De=c.convert(ge.format,ge.colorSpace),Be=c.convert(ge.type),Pe=w(ge.internalFormat,De,Be,ge.normalized,ge.colorSpace,O.isXRRenderTarget===!0),Ue=jt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Pe,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,J.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Zt(J.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Je(J.__webglFramebuffer[he][ge],O,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Je(J.__webglFramebuffer[he],O,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(M)&&P(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let he=0,ge=me.length;he<ge;he++){const De=me[he],Be=a.get(De);let Pe=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pe=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Be.__webglTexture),Ae(Pe,De),Je(J.__webglFramebuffer,O,De,r.COLOR_ATTACHMENT0+he,Pe,0),y(De)&&P(Pe)}i.unbindTexture()}else{let he=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(he=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(he,se.__webglTexture),Ae(he,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Je(J.__webglFramebuffer[ge],O,M,r.COLOR_ATTACHMENT0,he,ge);else Je(J.__webglFramebuffer,O,M,r.COLOR_ATTACHMENT0,he,0);y(M)&&P(he),i.unbindTexture()}O.depthBuffer&&St(O)}function an(O){const M=O.textures;for(let J=0,se=M.length;J<se;J++){const me=M[J];if(y(me)){const Ce=z(O),Le=a.get(me).__webglTexture;i.bindTexture(Ce,Le),P(Ce),i.unbindTexture()}}}const rn=[],sn=[];function dn(O){if(O.samples>0){if(on(O)===!1){const M=O.textures,J=O.width,se=O.height;let me=r.COLOR_BUFFER_BIT;const Ce=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=a.get(O),he=M.length>1;if(he)for(let De=0;De<M.length;De++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const ge=O.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let De=0;De<M.length;De++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[De]);const Be=a.get(M[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,J,se,0,0,J,se,me,r.NEAREST),m===!0&&(rn.length=0,sn.length=0,rn.push(r.COLOR_ATTACHMENT0+De),O.depthBuffer&&O.resolveDepthBuffer===!1&&(rn.push(Ce),sn.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,sn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<M.length;De++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Le.__webglColorRenderbuffer[De]);const Be=a.get(M[De]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const M=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function jt(O){return Math.min(l.maxSamples,O.samples)}function on(O){const M=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(O){const M=f.render.frame;_.get(O)!==M&&(_.set(O,M),O.update())}function Vt(O,M){const J=O.colorSpace,se=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==Hu&&J!==_r&&(Et.getTransfer(J)===Gt?(se!==Gi||me!==Ci)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",J)),M}function Nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=D,this.resetTextureUnits=ce,this.getTextureUnits=de,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=pe,this.setTexture3D=ue,this.setTextureCube=N,this.rebindTextures=bt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hL(r,e){function i(a,l=_r){let c;const f=Et.getTransfer(l);if(a===Ci)return r.UNSIGNED_BYTE;if(a===ym)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Sm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===OS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===PS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===LS)return r.BYTE;if(a===US)return r.SHORT;if(a===Rl)return r.UNSIGNED_SHORT;if(a===xm)return r.INT;if(a===aa)return r.UNSIGNED_INT;if(a===ea)return r.FLOAT;if(a===Pa)return r.HALF_FLOAT;if(a===IS)return r.ALPHA;if(a===zS)return r.RGB;if(a===Gi)return r.RGBA;if(a===Ia)return r.DEPTH_COMPONENT;if(a===es)return r.DEPTH_STENCIL;if(a===FS)return r.RED;if(a===bm)return r.RED_INTEGER;if(a===rs)return r.RG;if(a===Mm)return r.RG_INTEGER;if(a===Em)return r.RGBA_INTEGER;if(a===Du||a===Nu||a===Lu||a===Uu)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ep||a===Tp||a===Ap||a===Rp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Tp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ap)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Rp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cp||a===wp||a===Dp||a===Np||a===Lp||a===Fu||a===Up)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Cp||a===wp)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Dp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Np)return c.COMPRESSED_R11_EAC;if(a===Lp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Fu)return c.COMPRESSED_RG11_EAC;if(a===Up)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Op||a===Pp||a===Ip||a===zp||a===Fp||a===Bp||a===Hp||a===Gp||a===Vp||a===kp||a===Xp||a===Wp||a===qp||a===Yp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Op)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Pp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ip)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Bp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Vp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===kp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Xp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===qp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Yp)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===jp||a===Zp||a===Kp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===jp)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qp||a===Jp||a===Bu||a===$p)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Jp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Cl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:i}}const pL=`
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

}`;class gL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new jS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new wi({vertexShader:pL,fragmentShader:mL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new za(new $u(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vL extends os{constructor(e,i){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const C=typeof XRWebGLBinding<"u",b=new gL,y={},P=i.getContextAttributes();let z=null,w=null;const U=[],L=[],F=new Ut;let T=null;const I=new Ri;I.viewport=new un;const k=new Ri;k.viewport=new un;const H=[I,k],K=new AR;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Me=U[ee];return Me===void 0&&(Me=new Ch,U[ee]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ee){let Me=U[ee];return Me===void 0&&(Me=new Ch,U[ee]=Me),Me.getGripSpace()},this.getHand=function(ee){let Me=U[ee];return Me===void 0&&(Me=new Ch,U[ee]=Me),Me.getHandSpace()};function q(ee){const Me=L.indexOf(ee.inputSource);if(Me===-1)return;const Ee=U[Me];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,p||f),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function D(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",G);for(let ee=0;ee<U.length;ee++){const Me=L[ee];Me!==null&&(L[ee]=null,U[ee].disconnect(Me))}ce=null,de=null,b.reset();for(const ee in y)delete y[ee];e.setRenderTarget(z),S=null,g=null,v=null,l=null,w=null,Ae.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,a.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,a.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",D),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ge=null,st=null;P.depth&&(st=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=P.stencil?es:Ia,Ge=P.stencil?Cl:aa);const Je={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new ia(g.textureWidth,g.textureHeight,{format:Gi,type:Ci,depthTexture:new ho(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new ia(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(ee){for(let Me=0;Me<ee.removed.length;Me++){const Ee=ee.removed[Me],Ge=L.indexOf(Ee);Ge>=0&&(L[Ge]=null,U[Ge].disconnect(Ee))}for(let Me=0;Me<ee.added.length;Me++){const Ee=ee.added[Me];let Ge=L.indexOf(Ee);if(Ge===-1){for(let Je=0;Je<U.length;Je++)if(Je>=L.length){L.push(Ee),Ge=Je;break}else if(L[Je]===null){L[Je]=Ee,Ge=Je;break}if(Ge===-1)break}const st=U[Ge];st&&st.connect(Ee)}}const $=new ie,pe=new ie;function ue(ee,Me,Ee){$.setFromMatrixPosition(Me.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const Ge=$.distanceTo(pe),st=Me.projectionMatrix.elements,Je=Ee.projectionMatrix.elements,Zt=st[14]/(st[10]-1),pt=st[14]/(st[10]+1),St=(st[9]+1)/st[5],bt=(st[9]-1)/st[5],mt=(st[8]-1)/st[0],an=(Je[8]+1)/Je[0],rn=Zt*mt,sn=Zt*an,dn=Ge/(-mt+an),jt=dn*-mt;if(Me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(jt),ee.translateZ(dn),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),st[10]===-1)ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const on=Zt+dn,Z=pt+dn,Vt=rn-jt,Nt=sn+(Ge-jt),O=St*pt/Z*on,M=bt*pt/Z*on;ee.projectionMatrix.makePerspective(Vt,Nt,O,M,on,Z),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function N(ee,Me){Me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let Me=ee.near,Ee=ee.far;b.texture!==null&&(b.depthNear>0&&(Me=b.depthNear),b.depthFar>0&&(Ee=b.depthFar)),K.near=k.near=I.near=Me,K.far=k.far=I.far=Ee,(ce!==K.near||de!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ce=K.near,de=K.far),K.layers.mask=ee.layers.mask|6,I.layers.mask=K.layers.mask&-5,k.layers.mask=K.layers.mask&-3;const Ge=ee.parent,st=K.cameras;N(K,Ge);for(let Je=0;Je<st.length;Je++)N(st[Je],Ge);st.length===2?ue(K,I,k):K.projectionMatrix.copy(I.projectionMatrix),W(ee,K,Ge)};function W(ee,Me,Ee){Ee===null?ee.matrix.copy(Me.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=em*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(K)},this.getCameraTexture=function(ee){return y[ee]};let ve=null;function Se(ee,Me){if(_=Me.getViewerPose(p||f),E=Me,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Ge=!1;Ee.length!==K.cameras.length&&(K.cameras.length=0,Ge=!0);for(let pt=0;pt<Ee.length;pt++){const St=Ee[pt];let bt=null;if(S!==null)bt=S.getViewport(St);else{const an=v.getViewSubImage(g,St);bt=an.viewport,pt===0&&(e.setRenderTargetTextures(w,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(w))}let mt=H[pt];mt===void 0&&(mt=new Ri,mt.layers.enable(pt),mt.viewport=new un,H[pt]=mt),mt.matrix.fromArray(St.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(St.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(bt.x,bt.y,bt.width,bt.height),pt===0&&(K.matrix.copy(mt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ge===!0&&K.cameras.push(mt)}const st=l.enabledFeatures;if(st&&st.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=a.getBinding();const pt=v.getDepthInformation(Ee[0]);pt&&pt.isValid&&pt.texture&&b.init(pt,l.renderState)}if(st&&st.includes("camera-access")&&C){e.state.unbindTexture(),v=a.getBinding();for(let pt=0;pt<Ee.length;pt++){const St=Ee[pt].camera;if(St){let bt=y[St];bt||(bt=new jS,y[St]=bt);const mt=v.getCameraImage(St);bt.sourceTexture=mt}}}}for(let Ee=0;Ee<U.length;Ee++){const Ge=L[Ee],st=U[Ee];Ge!==null&&st!==void 0&&st.update(Ge,Me,p||f)}ve&&ve(ee,Me),Me.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Me}),E=null}const Ae=new JS;Ae.setAnimationLoop(Se),this.setAnimationLoop=function(ee){ve=ee},this.dispose=function(){}}}const _L=new fn,rb=new ct;rb.set(-1,0,0,0,1,0,0,0,1);function xL(r,e){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function a(b,y){y.color.getRGB(b.fogColor.value,ZS(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,P,z,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,w)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),C(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,P,z):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ei&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ei&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y),z=P.envMap,w=P.envMapRotation;z&&(b.envMap.value=z,b.envMapRotation.value.setFromMatrix4(_L.makeRotationFromEuler(w)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(rb),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,P,z){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=z*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function C(b,y){const P=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function yL(r,e,i,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const L=U.program;a.uniformBlockBinding(w,L)}function p(w,U){let L=l[w.id];L===void 0&&(b(w),L=_(w),l[w.id]=L,w.addEventListener("dispose",P));const F=U.program;a.updateUBOMapping(w,F);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function _(w){const U=v();w.__bindingPointIndex=U;const L=r.createBuffer(),F=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,F,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function v(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const U=l[w.id],L=w.uniforms,F=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let T=0,I=L.length;T<I;T++){const k=L[T];if(Array.isArray(k))for(let H=0,K=k.length;H<K;H++)S(k[H],T,H,F);else S(k,T,0,F)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(w,U,L,F){if(C(w,U,L,F)===!0){const T=w.__offset,I=w.value;if(Array.isArray(I)){let k=0;for(let H=0;H<I.length;H++){const K=I[H],ce=y(K);E(K,w.__data,k),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function E(w,U,L){typeof w=="number"||typeof w=="boolean"?U[0]=w:w.isMatrix3?(U[0]=w.elements[0],U[1]=w.elements[1],U[2]=w.elements[2],U[3]=0,U[4]=w.elements[3],U[5]=w.elements[4],U[6]=w.elements[5],U[7]=0,U[8]=w.elements[6],U[9]=w.elements[7],U[10]=w.elements[8],U[11]=0):ArrayBuffer.isView(w)?U.set(new w.constructor(w.buffer,w.byteOffset,U.length)):w.toArray(U,L)}function C(w,U,L,F){const T=w.value,I=U+"_"+L;if(F[I]===void 0)return typeof T=="number"||typeof T=="boolean"?F[I]=T:ArrayBuffer.isView(T)?F[I]=T.slice():F[I]=T.clone(),!0;{const k=F[I];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return F[I]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function b(w){const U=w.uniforms;let L=0;const F=16;for(let I=0,k=U.length;I<k;I++){const H=Array.isArray(U[I])?U[I]:[U[I]];for(let K=0,ce=H.length;K<ce;K++){const de=H[K],q=Array.isArray(de.value)?de.value:[de.value];for(let D=0,G=q.length;D<G;D++){const $=q[D],pe=y($),ue=L%F,N=ue%pe.boundary,W=ue+N;L+=N,W!==0&&F-W<pe.storage&&(L+=F-W),de.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=L,L+=pe.storage}}}const T=L%F;return T>0&&(L+=F-T),w.__size=L,w.__cache={},this}function y(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(U.boundary=16,U.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),U}function P(w){const U=w.target;U.removeEventListener("dispose",P);const L=f.indexOf(U.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function z(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:z}}const SL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function bL(){return Qi===null&&(Qi=new lR(SL,16,16,rs,Pa),Qi.name="DFG_LUT",Qi.minFilter=Gn,Qi.magFilter=Gn,Qi.wrapS=Da,Qi.wrapT=Da,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class ML{constructor(e={}){const{canvas:i=B3(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Ci}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const C=S,b=new Set([Em,Mm,bm]),y=new Set([Ci,aa,Rl,Cl,ym,Sm]),P=new Uint32Array(4),z=new Int32Array(4),w=new ie;let U=null,L=null;const F=[],T=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let H=!1,K=null,ce=null,de=null,q=null;this._outputColorSpace=Ai;let D=0,G=0,$=null,pe=-1,ue=null;const N=new un,W=new un;let ve=null;const Se=new At(0);let Ae=0,ee=i.width,Me=i.height,Ee=1,Ge=null,st=null;const Je=new un(0,0,ee,Me),Zt=new un(0,0,ee,Me);let pt=!1;const St=new qS;let bt=!1,mt=!1;const an=new fn,rn=new ie,sn=new un,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function on(){return $===null?Ee:1}let Z=a;function Vt(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_m}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",ni,!1),Z===null){const j="webgl2";if(Z=Vt(j,A),Z===null)throw Vt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let Nt,O,M,J,se,me,Ce,Le,he,ge,De,Be,Pe,Ue,Qe,$e,ot,Y,we,xe,Ne,Fe,Te;function Ye(){Nt=new bD(Z),Nt.init(),Ne=new hL(Z,Nt),O=new pD(Z,Nt,e,Ne),M=new fL(Z,Nt),O.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),de=Z.createFramebuffer(),q=Z.createFramebuffer(),J=new TD(Z),se=new QN,me=new dL(Z,Nt,M,se,O,Ne,J),Ce=new SD(k),Le=new wR(Z),Fe=new dD(Z,Le),he=new MD(Z,Le,J,Fe),ge=new RD(Z,he,Le,Fe,J),Y=new AD(Z,O,me),Qe=new mD(se),De=new KN(k,Ce,Nt,O,Fe,Qe),Be=new xL(k,se),Pe=new $N,Ue=new rL(Nt),ot=new fD(k,Ce,M,ge,E,m),$e=new uL(k,ge,O),Te=new yL(Z,J,O,M),we=new hD(Z,Nt,J),xe=new ED(Z,Nt,J),J.programs=De.programs,k.capabilities=O,k.extensions=Nt,k.properties=se,k.renderLists=Pe,k.shadowMap=$e,k.state=M,k.info=J}Ye(),C!==Ci&&(I=new wD(C,i.width,i.height,h,l,c));const ke=new vL(k,Z);this.xr=ke,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ee,Me,!1))},this.getSize=function(A){return A.set(ee,Me)},this.setSize=function(A,j,oe=!0){if(ke.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,Me=j,i.width=Math.floor(A*Ee),i.height=Math.floor(j*Ee),oe===!0&&(i.style.width=A+"px",i.style.height=j+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ee*Ee,Me*Ee).floor()},this.setDrawingBufferSize=function(A,j,oe){ee=A,Me=j,Ee=oe,i.width=Math.floor(A*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===Ci){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Je)},this.setViewport=function(A,j,oe,ae){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,j,oe,ae),M.viewport(N.copy(Je).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Zt)},this.setScissor=function(A,j,oe,ae){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,j,oe,ae),M.scissor(W.copy(Zt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){M.setScissorTest(pt=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,oe=!0){let ae=0;if(A){let re=!1;if($!==null){const Ie=$.texture.format;re=b.has(Ie)}if(re){const Ie=$.texture.type,Ve=y.has(Ie),Oe=ot.getClearColor(),We=ot.getClearAlpha(),Xe=Oe.r,et=Oe.g,ut=Oe.b;Ve?(P[0]=Xe,P[1]=et,P[2]=ut,P[3]=We,Z.clearBufferuiv(Z.COLOR,0,P)):(z[0]=Xe,z[1]=et,z[2]=ut,z[3]=We,Z.clearBufferiv(Z.COLOR,0,z))}else ae|=Z.COLOR_BUFFER_BIT}j&&(ae|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),ot.dispose(),Pe.dispose(),Ue.dispose(),se.dispose(),Ce.dispose(),ge.dispose(),Fe.dispose(),Te.dispose(),De.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",mn),ke.removeEventListener("sessionend",wn),qn.stop()};function $t(A){A.preventDefault(),px("WebGLRenderer: Context Lost."),H=!0}function Pt(){px("WebGLRenderer: Context Restored."),H=!1;const A=J.autoReset,j=$e.enabled,oe=$e.autoUpdate,ae=$e.needsUpdate,re=$e.type;Ye(),J.autoReset=A,$e.enabled=j,$e.autoUpdate=oe,$e.needsUpdate=ae,$e.type=re}function ni(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ii(A){const j=A.target;j.removeEventListener("dispose",ii),xo(j)}function xo(A){yo(A),se.remove(A)}function yo(A){const j=se.get(A).programs;j!==void 0&&(j.forEach(function(oe){De.releaseProgram(oe)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,oe,ae,re,Ie){j===null&&(j=dn);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=Ga(A,j,oe,ae,re);M.setMaterial(ae,Ve);let We=oe.index,Xe=1;if(ae.wireframe===!0){if(We=he.getWireframeAttribute(oe),We===void 0)return;Xe=2}const et=oe.drawRange,ut=oe.attributes.position;let Ze=et.start*Xe,Ct=(et.start+et.count)*Xe;Ie!==null&&(Ze=Math.max(Ze,Ie.start*Xe),Ct=Math.min(Ct,(Ie.start+Ie.count)*Xe)),We!==null?(Ze=Math.max(Ze,0),Ct=Math.min(Ct,We.count)):ut!=null&&(Ze=Math.max(Ze,0),Ct=Math.min(Ct,ut.count));const en=Ct-Ze;if(en<0||en===1/0)return;Fe.setup(re,ae,Oe,oe,We);let qt,It=we;if(We!==null&&(qt=Le.get(We),It=xe,It.setIndex(qt)),re.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*on()),It.setMode(Z.LINES)):It.setMode(Z.TRIANGLES);else if(re.isLine){let zt=ae.linewidth;zt===void 0&&(zt=1),M.setLineWidth(zt*on()),re.isLineSegments?It.setMode(Z.LINES):re.isLineLoop?It.setMode(Z.LINE_LOOP):It.setMode(Z.LINE_STRIP)}else re.isPoints?It.setMode(Z.POINTS):re.isSprite&&It.setMode(Z.TRIANGLES);if(re.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))It.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const zt=re._multiDrawStarts,He=re._multiDrawCounts,In=re._multiDrawCount,gt=We?Le.get(We).bytesPerElement:1,bn=se.get(ae).currentProgram.getUniforms();for(let ai=0;ai<In;ai++)bn.setValue(Z,"_gl_DrawID",ai),It.render(zt[ai]/gt,He[ai])}else if(re.isInstancedMesh)It.renderInstances(Ze,en,re.count);else if(oe.isInstancedBufferGeometry){const zt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,He=Math.min(oe.instanceCount,zt);It.renderInstances(Ze,en,He)}else It.render(Ze,en)};function So(A,j,oe){A.transparent===!0&&A.side===wa&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,Ha(A,j,oe),A.side=Mr,A.needsUpdate=!0,Ha(A,j,oe),A.side=wa):Ha(A,j,oe)}this.compile=function(A,j,oe=null){oe===null&&(oe=A),L=Ue.get(oe),L.init(j),T.push(L),oe.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),L.setupLights();const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Oe=Ie[Ve];So(Oe,oe,re),ae.add(Oe)}else So(Ie,oe,re),ae.add(Ie)}),L=T.pop(),ae},this.compileAsync=function(A,j,oe=null){const ae=this.compile(A,j,oe);return new Promise(re=>{function Ie(){if(ae.forEach(function(Ve){se.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){re(A);return}setTimeout(Ie,10)}Nt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ls=null;function Xi(A){ls&&ls(A)}function mn(){qn.stop()}function wn(){qn.start()}const qn=new JS;qn.setAnimationLoop(Xi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){ls=A,ke.setAnimationLoop(A),A===null?qn.stop():qn.start()},ke.addEventListener("sessionstart",mn),ke.addEventListener("sessionend",wn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;K!==null&&K.renderStart(A,j);const oe=ke.enabled===!0&&ke.isPresenting===!0,ae=I!==null&&($===null||oe)&&I.begin(k,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(j),j=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,j,$),L=Ue.get(A,T.length),L.init(j),L.state.textureUnits=me.getTextureUnits(),T.push(L),an.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),St.setFromProjectionMatrix(an,ta,j.reversedDepth),mt=this.localClippingEnabled,bt=Qe.init(this.clippingPlanes,mt),U=Pe.get(A,F.length),U.init(),F.push(U),ke.enabled===!0&&ke.isPresenting===!0){const Ve=k.xr.getDepthSensingMesh();Ve!==null&&Er(Ve,j,-1/0,k.sortObjects)}Er(A,j,0,k.sortObjects),U.finish(),k.sortObjects===!0&&U.sort(Ge,st,j.reversedDepth),jt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,jt&&ot.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Qe.beginShadows();const re=L.state.shadowsArray;if($e.render(re,A,j),bt===!0&&Qe.endShadows(),(ae&&I.hasRenderPass())===!1){const Ve=U.opaque,Oe=U.transmissive;if(L.setupLights(),j.isArrayCamera){const We=j.cameras;if(Oe.length>0)for(let Xe=0,et=We.length;Xe<et;Xe++){const ut=We[Xe];zl(Ve,Oe,A,ut)}jt&&ot.render(A);for(let Xe=0,et=We.length;Xe<et;Xe++){const ut=We[Xe];Il(U,A,ut,ut.viewport)}}else Oe.length>0&&zl(Ve,Oe,A,j),jt&&ot.render(A),Il(U,A,j)}$!==null&&G===0&&(me.updateMultisampleRenderTarget($),me.updateRenderTargetMipmap($)),ae&&I.end(k),A.isScene===!0&&A.onAfterRender(k,A,j),Fe.resetDefaultState(),pe=-1,ue=null,T.pop(),T.length>0?(L=T[T.length-1],me.setTextureUnits(L.state.textureUnits),bt===!0&&Qe.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?U=F[F.length-1]:U=null,K!==null&&K.renderEnd()};function Er(A,j,oe,ae){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||St.intersectsSprite(A)){ae&&sn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(an);const Ve=ge.update(A),Oe=A.material;Oe.visible&&U.push(A,Ve,Oe,oe,sn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||St.intersectsObject(A))){const Ve=ge.update(A),Oe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),sn.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),sn.copy(Ve.boundingSphere.center)),sn.applyMatrix4(A.matrixWorld).applyMatrix4(an)),Array.isArray(Oe)){const We=Ve.groups;for(let Xe=0,et=We.length;Xe<et;Xe++){const ut=We[Xe],Ze=Oe[ut.materialIndex];Ze&&Ze.visible&&U.push(A,Ve,Ze,oe,sn.z,ut)}}else Oe.visible&&U.push(A,Ve,Oe,oe,sn.z,null)}}const Ie=A.children;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++)Er(Ie[Ve],j,oe,ae)}function Il(A,j,oe,ae){const{opaque:re,transmissive:Ie,transparent:Ve}=A;L.setupLightsView(oe),bt===!0&&Qe.setGlobalState(k.clippingPlanes,oe),ae&&M.viewport(N.copy(ae)),re.length>0&&Tr(re,j,oe),Ie.length>0&&Tr(Ie,j,oe),Ve.length>0&&Tr(Ve,j,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function zl(A,j,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const Ze=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new ia(1,1,{generateMipmaps:!0,type:Ze?Pa:Ci,minFilter:$r,samples:Math.max(4,O.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||N;Ie.setSize(Ve.z*k.transmissionResolutionScale,Ve.w*k.transmissionResolutionScale);const Oe=k.getRenderTarget(),We=k.getActiveCubeFace(),Xe=k.getActiveMipmapLevel();k.setRenderTarget(Ie),k.getClearColor(Se),Ae=k.getClearAlpha(),Ae<1&&k.setClearColor(16777215,.5),k.clear(),jt&&ot.render(oe);const et=k.toneMapping;k.toneMapping=na;const ut=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),bt===!0&&Qe.setGlobalState(k.clippingPlanes,ae),Tr(A,oe,ae),me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ct=0,en=j.length;Ct<en;Ct++){const qt=j[Ct],{object:It,geometry:zt,material:He,group:In}=qt;if(He.side===wa&&It.layers.test(ae.layers)){const gt=He.side;He.side=ei,He.needsUpdate=!0,Ba(It,oe,ae,zt,He,In),He.side=gt,He.needsUpdate=!0,Ze=!0}}Ze===!0&&(me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie))}k.setRenderTarget(Oe,We,Xe),k.setClearColor(Se,Ae),ut!==void 0&&(ae.viewport=ut),k.toneMapping=et}function Tr(A,j,oe){const ae=j.isScene===!0?j.overrideMaterial:null;for(let re=0,Ie=A.length;re<Ie;re++){const Ve=A[re],{object:Oe,geometry:We,group:Xe}=Ve;let et=Ve.material;et.allowOverride===!0&&ae!==null&&(et=ae),Oe.layers.test(oe.layers)&&Ba(Oe,j,oe,We,et,Xe)}}function Ba(A,j,oe,ae,re,Ie){A.onBeforeRender(k,j,oe,ae,re,Ie),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(k,j,oe,ae,A,Ie),re.transparent===!0&&re.side===wa&&re.forceSinglePass===!1?(re.side=ei,re.needsUpdate=!0,k.renderBufferDirect(oe,j,ae,re,A,Ie),re.side=Mr,re.needsUpdate=!0,k.renderBufferDirect(oe,j,ae,re,A,Ie),re.side=wa):k.renderBufferDirect(oe,j,ae,re,A,Ie),A.onAfterRender(k,j,oe,ae,re,Ie)}function Ha(A,j,oe){j.isScene!==!0&&(j=dn);const ae=se.get(A),re=L.state.lights,Ie=L.state.shadowsArray,Ve=re.state.version,Oe=De.getParameters(A,re.state,Ie,j,oe,L.state.lightProbeGridArray),We=De.getProgramCacheKey(Oe);let Xe=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,ae.fog=j.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Ce.get(A.envMap||ae.environment,et),ae.envMapRotation=ae.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",ii),Xe=new Map,ae.programs=Xe);let ut=Xe.get(We);if(ut!==void 0){if(ae.currentProgram===ut&&ae.lightsStateVersion===Ve)return sa(A,Oe),ut}else Oe.uniforms=De.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,oe,Oe),A.onBeforeCompile(Oe,k),ut=De.acquireProgram(Oe,We),Xe.set(We,ut),ae.uniforms=Oe.uniforms;const Ze=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Qe.uniform),sa(A,Oe),ae.needsLights=Fl(A),ae.lightsStateVersion=Ve,ae.needsLights&&(Ze.ambientLightColor.value=re.state.ambient,Ze.lightProbe.value=re.state.probe,Ze.directionalLights.value=re.state.directional,Ze.directionalLightShadows.value=re.state.directionalShadow,Ze.spotLights.value=re.state.spot,Ze.spotLightShadows.value=re.state.spotShadow,Ze.rectAreaLights.value=re.state.rectArea,Ze.ltc_1.value=re.state.rectAreaLTC1,Ze.ltc_2.value=re.state.rectAreaLTC2,Ze.pointLights.value=re.state.point,Ze.pointLightShadows.value=re.state.pointShadow,Ze.hemisphereLights.value=re.state.hemi,Ze.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ze.spotLightMatrix.value=re.state.spotLightMatrix,Ze.spotLightMap.value=re.state.spotLightMap,Ze.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=ut,ae.uniformsList=null,ut}function ra(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ou.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function sa(A,j){const oe=se.get(A);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function Ar(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(j.matrixWorld);for(let oe=0,ae=A.length;oe<ae;oe++){const re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function Ga(A,j,oe,ae,re){j.isScene!==!0&&(j=dn),me.resetTextureUnits();const Ie=j.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?j.environment:null,Oe=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Et.workingColorSpace,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Xe=Ce.get(ae.envMap||Ve,We),et=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!oe.morphAttributes.position,Ct=!!oe.morphAttributes.normal,en=!!oe.morphAttributes.color;let qt=na;ae.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(qt=k.toneMapping);const It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=It!==void 0?It.length:0,He=se.get(ae),In=L.state.lights;if(bt===!0&&(mt===!0||A!==ue)){const Ot=A===ue&&ae.id===pe;Qe.setState(ae,A,Ot)}let gt=!1;ae.version===He.__version?(He.needsLights&&He.lightsStateVersion!==In.state.version||He.outputColorSpace!==Oe||re.isBatchedMesh&&He.batching===!1||!re.isBatchedMesh&&He.batching===!0||re.isBatchedMesh&&He.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&He.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&He.instancing===!1||!re.isInstancedMesh&&He.instancing===!0||re.isSkinnedMesh&&He.skinning===!1||!re.isSkinnedMesh&&He.skinning===!0||re.isInstancedMesh&&He.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&He.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&He.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&He.instancingMorph===!1&&re.morphTexture!==null||He.envMap!==Xe||ae.fog===!0&&He.fog!==Ie||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Qe.numPlanes||He.numIntersection!==Qe.numIntersection)||He.vertexAlphas!==et||He.vertexTangents!==ut||He.morphTargets!==Ze||He.morphNormals!==Ct||He.morphColors!==en||He.toneMapping!==qt||He.morphTargetsCount!==zt||!!He.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,He.__version=ae.version);let bn=He.currentProgram;gt===!0&&(bn=Ha(ae,j,re),K&&ae.isNodeMaterial&&K.onUpdateProgram(ae,bn,He));let ai=!1,Di=!1,ri=!1;const Ft=bn.getUniforms(),tn=He.uniforms;if(M.useProgram(bn.program)&&(ai=!0,Di=!0,ri=!0),ae.id!==pe&&(pe=ae.id,Di=!0),He.needsLights){const Ot=Ar(L.state.lightProbeGridArray,re);He.lightProbeGrid!==Ot&&(He.lightProbeGrid=Ot,Di=!0)}if(ai||ue!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(Z,"projectionMatrix",A.projectionMatrix),Ft.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Wi=Ft.map.cameraPosition;Wi!==void 0&&Wi.setValue(Z,rn.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&Ft.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),ue!==A&&(ue=A,Di=!0,ri=!0)}if(He.needsLights&&(In.state.directionalShadowMap.length>0&&Ft.setValue(Z,"directionalShadowMap",In.state.directionalShadowMap,me),In.state.spotShadowMap.length>0&&Ft.setValue(Z,"spotShadowMap",In.state.spotShadowMap,me),In.state.pointShadowMap.length>0&&Ft.setValue(Z,"pointShadowMap",In.state.pointShadowMap,me)),re.isSkinnedMesh){Ft.setOptional(Z,re,"bindMatrix"),Ft.setOptional(Z,re,"bindMatrixInverse");const Ot=re.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ft.setValue(Z,"boneTexture",Ot.boneTexture,me))}re.isBatchedMesh&&(Ft.setOptional(Z,re,"batchingTexture"),Ft.setValue(Z,"batchingTexture",re._matricesTexture,me),Ft.setOptional(Z,re,"batchingIdTexture"),Ft.setValue(Z,"batchingIdTexture",re._indirectTexture,me),Ft.setOptional(Z,re,"batchingColorTexture"),re._colorsTexture!==null&&Ft.setValue(Z,"batchingColorTexture",re._colorsTexture,me));const Ni=oe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Y.update(re,oe,bn),(Di||He.receiveShadow!==re.receiveShadow)&&(He.receiveShadow=re.receiveShadow,Ft.setValue(Z,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&j.environment!==null&&(tn.envMapIntensity.value=j.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=bL()),Di){if(Ft.setValue(Z,"toneMappingExposure",k.toneMappingExposure),He.needsLights&&gn(tn,ri),Ie&&ae.fog===!0&&Be.refreshFogUniforms(tn,Ie),Be.refreshMaterialUniforms(tn,ae,Ee,Me,L.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Ot=He.lightProbeGrid;tn.probesSH.value=Ot.texture,tn.probesMin.value.copy(Ot.boundingBox.min),tn.probesMax.value.copy(Ot.boundingBox.max),tn.probesResolution.value.copy(Ot.resolution)}Ou.upload(Z,ra(He),tn,me)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ou.upload(Z,ra(He),tn,me),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(Z,"center",re.center),Ft.setValue(Z,"modelViewMatrix",re.modelViewMatrix),Ft.setValue(Z,"normalMatrix",re.normalMatrix),Ft.setValue(Z,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const Ot=ae.uniformsGroups;for(let Wi=0,Va=Ot.length;Wi<Va;Wi++){const Rr=Ot[Wi];Te.update(Rr,bn),Te.bind(Rr,bn)}}return bn}function gn(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Fl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,j,oe){const ae=se.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=j,se.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const oe=se.get(A);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,oe=0){$=A,D=j,G=oe;let ae=null,re=!1,Ie=!1;if(A){const Oe=se.get(A);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Z.FRAMEBUFFER,Oe.__webglFramebuffer),N.copy(A.viewport),W.copy(A.scissor),ve=A.scissorTest,M.viewport(N),M.scissor(W),M.setScissorTest(ve),pe=-1;return}else if(Oe.__webglFramebuffer===void 0)me.setupRenderTarget(A);else if(Oe.__hasExternalTextures)me.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&se.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Xe=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[j])?ae=Xe[j][oe]:ae=Xe[j],re=!0):A.samples>0&&me.useMultisampledRTT(A)===!1?ae=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?ae=Xe[oe]:ae=Xe,N.copy(A.viewport),W.copy(A.scissor),ve=A.scissorTest}else N.copy(Je).multiplyScalar(Ee).floor(),W.copy(Zt).multiplyScalar(Ee).floor(),ve=pt;if(oe!==0&&(ae=ce),M.bindFramebuffer(Z.FRAMEBUFFER,ae)&&M.drawBuffers(A,ae),M.viewport(N),M.scissor(W),M.setScissorTest(ve),re){const Oe=se.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,oe)}else if(Ie){const Oe=j;for(let We=0;We<A.textures.length;We++){const Xe=se.get(A.textures[We]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+We,Xe.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=se.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Oe.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(A,j,oe,ae,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){M.bindFramebuffer(Z.FRAMEBUFFER,We);try{const Xe=A.textures[Oe],et=Xe.format,ut=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Oe),!O.textureFormatReadable(et)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ut)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ae&&oe>=0&&oe<=A.height-re&&Z.readPixels(j,oe,ae,re,Ne.convert(et),Ne.convert(ut),Ie)}finally{const Xe=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,j,oe,ae,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(j>=0&&j<=A.width-ae&&oe>=0&&oe<=A.height-re){M.bindFramebuffer(Z.FRAMEBUFFER,We);const Xe=A.textures[Oe],et=Xe.format,ut=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Oe),!O.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ie.byteLength,Z.STREAM_READ),Z.readPixels(j,oe,ae,re,Ne.convert(et),Ne.convert(ut),0);const Ct=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Ct);const en=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await H3(Z,en,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ie),Z.deleteBuffer(Ze),Z.deleteSync(en),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(A.image.width*ae),Ie=Math.floor(A.image.height*ae),Ve=j!==null?j.x:0,Oe=j!==null?j.y:0;me.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,oe,0,0,Ve,Oe,re,Ie),M.unbindTexture()},this.copyTextureToTexture=function(A,j,oe=null,ae=null,re=0,Ie=0){let Ve,Oe,We,Xe,et,ut,Ze,Ct,en;const qt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,et=oe.min.y,ut=oe.isBox3?oe.min.z:0;else{const tn=Math.pow(2,-re);Ve=Math.floor(qt.width*tn),Oe=Math.floor(qt.height*tn),A.isDataArrayTexture?We=qt.depth:A.isData3DTexture?We=Math.floor(qt.depth*tn):We=1,Xe=0,et=0,ut=0}ae!==null?(Ze=ae.x,Ct=ae.y,en=ae.z):(Ze=0,Ct=0,en=0);const It=Ne.convert(j.format),zt=Ne.convert(j.type);let He;j.isData3DTexture?(me.setTexture3D(j,0),He=Z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(me.setTexture2DArray(j,0),He=Z.TEXTURE_2D_ARRAY):(me.setTexture2D(j,0),He=Z.TEXTURE_2D),M.activeTexture(Z.TEXTURE0),M.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),M.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),M.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment);const In=M.getParameter(Z.UNPACK_ROW_LENGTH),gt=M.getParameter(Z.UNPACK_IMAGE_HEIGHT),bn=M.getParameter(Z.UNPACK_SKIP_PIXELS),ai=M.getParameter(Z.UNPACK_SKIP_ROWS),Di=M.getParameter(Z.UNPACK_SKIP_IMAGES);M.pixelStorei(Z.UNPACK_ROW_LENGTH,qt.width),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,qt.height),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xe),M.pixelStorei(Z.UNPACK_SKIP_ROWS,et),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,ut);const ri=A.isDataArrayTexture||A.isData3DTexture,Ft=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const tn=se.get(A),Ni=se.get(j),Ot=se.get(tn.__renderTarget),Wi=se.get(Ni.__renderTarget);M.bindFramebuffer(Z.READ_FRAMEBUFFER,Ot.__webglFramebuffer),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Va=0;Va<We;Va++)ri&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(A).__webglTexture,re,ut+Va),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(j).__webglTexture,Ie,en+Va)),Z.blitFramebuffer(Xe,et,Ve,Oe,Ze,Ct,Ve,Oe,Z.DEPTH_BUFFER_BIT,Z.NEAREST);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||se.has(A)){const tn=se.get(A),Ni=se.get(j);M.bindFramebuffer(Z.READ_FRAMEBUFFER,de),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Ot=0;Ot<We;Ot++)ri?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,tn.__webglTexture,re,ut+Ot):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,tn.__webglTexture,re),Ft?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ni.__webglTexture,Ie,en+Ot):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ni.__webglTexture,Ie),re!==0?Z.blitFramebuffer(Xe,et,Ve,Oe,Ze,Ct,Ve,Oe,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ft?Z.copyTexSubImage3D(He,Ie,Ze,Ct,en+Ot,Xe,et,Ve,Oe):Z.copyTexSubImage2D(He,Ie,Ze,Ct,Xe,et,Ve,Oe);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(He,Ie,Ze,Ct,en,Ve,Oe,We,It,zt,qt.data):j.isCompressedArrayTexture?Z.compressedTexSubImage3D(He,Ie,Ze,Ct,en,Ve,Oe,We,It,qt.data):Z.texSubImage3D(He,Ie,Ze,Ct,en,Ve,Oe,We,It,zt,qt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ie,Ze,Ct,Ve,Oe,It,zt,qt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ie,Ze,Ct,qt.width,qt.height,It,qt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ie,Ze,Ct,Ve,Oe,It,zt,qt);M.pixelStorei(Z.UNPACK_ROW_LENGTH,In),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,gt),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,bn),M.pixelStorei(Z.UNPACK_SKIP_ROWS,ai),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,Di),Ie===0&&j.generateMipmaps&&Z.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){D=0,G=0,$=null,M.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const EL=new At(11053240),TL=new At(9409448),ao=4500,AL=`
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
`,RL=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,CL=`
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
`,wL=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`;function DL(){const r=new Float32Array(ao*3),e=new Float32Array(ao),i=new Float32Array(ao);for(let a=0;a<ao;a++){const l=24+Math.random()*36,c=Math.random()*Math.PI*2,f=(Math.random()-.5)*1.1;r[a*3]=l*Math.cos(c)*Math.cos(f),r[a*3+1]=l*Math.sin(f)*2.2,r[a*3+2]=l*Math.sin(c)*Math.cos(f)-18,e[a]=Math.random(),i[a]=.7+Math.random()*1.6}return{positions:r,phases:e,sizes:i}}function NL(r,e,i={}){const{transparent:a=!1,threadAlpha:l}=i,c=new ML({canvas:r,antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2));const f=new nR;f.background=a?null:new At(328968);const h=new Ri(62,1,.1,200);h.position.set(0,0,6);const{positions:m,phases:p,sizes:_}=DL(),v=new mi;v.setAttribute("position",new Hn(m,3)),v.setAttribute("phase",new Hn(p,1)),v.setAttribute("size",new Hn(_,1));const g=new wi({vertexShader:AL,fragmentShader:RL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:EL}},transparent:!0,depthWrite:!1}),S=new gR(v,g);f.add(S);const E=2600,C=new mi,b=new Float32Array(E*6),y=new Float32Array(E*2),P=new Float32Array(E*2);C.setAttribute("position",new Hn(b,3)),C.setAttribute("lineUV",new Hn(y,1)),C.setAttribute("segPhase",new Hn(P,1)),C.setDrawRange(0,0);const z=new wi({vertexShader:CL,fragmentShader:wL,uniforms:{uTime:{value:0},uColor:{value:TL},uAlpha:{value:l??(e==="alive"?.5:.16)}},transparent:!0,depthWrite:!1}),w=new pR(C,z);f.add(w);const U=(ce,de=!1)=>{if(e==="subtle"&&!de)return;const q=new Set,D=[],G=[],$=[];for(let pe=0;pe<ao&&D.length<E*6;pe++){const ue=m[pe*3],N=m[pe*3+1],W=m[pe*3+2],ve=[];for(let Se=0;Se<ao;Se++){if(Se===pe)continue;const Ae=m[Se*3]-ue,ee=m[Se*3+1]-N,Me=m[Se*3+2]-W,Ee=Ae*Ae+ee*ee+Me*Me;Ee<ce*ce&&ve.push([Se,Ee])}ve.sort((Se,Ae)=>Se[1]-Ae[1]);for(const[Se]of ve.slice(0,3)){if(D.length>=E*6)break;const Ae=pe<Se?`${pe}-${Se}`:`${Se}-${pe}`;q.has(Ae)||(q.add(Ae),D.push(ue,N,W,m[Se*3],m[Se*3+1],m[Se*3+2]),G.push(0,1),$.push(Math.random(),Math.random()))}}b.set(D),y.set(G),P.set($),C.getAttribute("position").needsUpdate=!0,C.getAttribute("lineUV").needsUpdate=!0,C.getAttribute("segPhase").needsUpdate=!0,C.setDrawRange(0,D.length/3)};U(e==="alive"?7.5:8.5,!0);const L=new RR;let F=0,T=0;const I=()=>{const ce=r.clientWidth||window.innerWidth,de=r.clientHeight||window.innerHeight;c.setSize(ce,de,!1),h.aspect=ce/de,h.updateProjectionMatrix()};I(),window.addEventListener("resize",I);const k={x:0,y:0},H=ce=>{k.x=(ce.clientX/window.innerWidth-.5)*2,k.y=(ce.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",H);const K=()=>{const ce=L.getElapsedTime();g.uniforms.uTime.value=ce,z.uniforms.uTime.value=ce,e==="alive"&&(T+=1/60,T>3.2&&(T=0,U(7.5))),h.position.x=Math.sin(ce*.05)*.7+k.x*.6,h.position.y=Math.cos(ce*.04)*.5+k.y*.4,h.lookAt(0,0,-10),c.render(f,h),F=requestAnimationFrame(K)};return K(),()=>{cancelAnimationFrame(F),window.removeEventListener("resize",I),window.removeEventListener("pointermove",H),v.dispose(),C.dispose(),g.dispose(),z.dispose(),c.dispose()}}function LL({mode:r,transparent:e=!1,threadAlpha:i,className:a="spell-bg"}){const l=Ke.useRef(null);return Ke.useEffect(()=>{const c=l.current;return c?NL(c,r,{transparent:e,threadAlpha:i}):void 0},[r,e,i]),V.jsx("canvas",{"aria-hidden":"true",className:a,ref:l})}function UL({handle:r,loadPassage:e,onClose:i}){const[a,l]=Ke.useState(null),[c,f]=Ke.useState(null);return Ke.useEffect(()=>{let h=!0;e(r).then(p=>{h&&l(p)}).catch(p=>{h&&f(p instanceof Error?p.message:"could not summon the passage")});function m(p){p.key==="Escape"&&i()}return window.addEventListener("keydown",m),()=>{h=!1,window.removeEventListener("keydown",m)}},[r,e,i]),V.jsx("div",{"aria-label":"Summoned passage","aria-modal":"true",className:"passage-backdrop",role:"dialog",children:V.jsxs("div",{className:"passage-panel",children:[V.jsxs("header",{className:"passage-header",children:[V.jsx("h2",{className:"passage-title",children:a?V.jsxs(V.Fragment,{children:["chapter ",a.chapter,V.jsxs("span",{className:"passage-lines",children:[", lines ",a.line_start,"-",a.line_end," · volume"," ",a.volume]})]}):"summoning…"}),V.jsx("button",{"aria-label":"Close passage",className:"icon-button passage-close",onClick:i,type:"button",children:"×"})]}),a&&a.beats.length>0&&V.jsx("div",{className:"passage-beats",children:a.beats.map(h=>V.jsx("span",{className:"passage-beat",children:h},h))}),c?V.jsx("p",{className:"passage-error",children:c}):V.jsx("pre",{className:"passage-text",children:a?a.text:"…"})]})})}function OL({chooseLabel:r,createLabel:e,message:i,onChooseConversation:a,onCreateConversation:l,title:c}){return V.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[V.jsx("span",{className:"recovery-knot"}),V.jsxs("div",{children:[V.jsx("strong",{children:c}),V.jsx("p",{children:i}),V.jsxs("div",{className:"recovery-actions",children:[V.jsx("button",{onClick:l,type:"button",children:e}),V.jsx("button",{onClick:a,type:"button",children:r})]})]})]})}function PL({className:r,compact:e=!1}){const i=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",r].filter(Boolean).join(" ");return V.jsx(ti,{"aria-hidden":"true",className:i,icon:o2})}function IL({api:r,Mark:e=PL,modeLabel:i,privacyLabel:a,product:l=a2}){const c=i2(r,l),[f,h]=Ke.useState(!1),[m,p]=Ke.useState(!1),[_,v]=Ke.useState(()=>window.innerWidth<768),[g,S]=Ke.useState(!1),[E,C]=Ke.useState({reader_chapter:null,spoiler_mode:"protect",tier:"ascended"}),[b,y]=Ke.useState(null),P=Ke.useRef(!1),z=Ke.useRef(null),w=Ke.useRef(null),U=Ke.useRef(null),L=_?!m:f,F=_&&m;Ke.useEffect(()=>{function q(){v(window.innerWidth<768)}return window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]),Ke.useEffect(()=>{!L||!P.current||(z.current?.focus(),P.current=!1)},[L]),Ke.useEffect(()=>{const q=w.current;q&&(q.scrollTop=q.scrollHeight)},[c.messages,c.recoveryMessage,c.activity]);function T(){r.getPreferences().then(q=>{C(q),S(!0)}).catch(()=>S(!0))}function I(q){c.setDraft(`"${q}" `),U.current?.focus()}async function k(){await c.createConversation()&&p(!1)}async function H(q){await c.selectConversation(q),p(!1)}function K(){if(_){p(!0);return}h(!1)}function ce(){if(P.current=!0,_){p(!1);return}h(!0)}const de=c.activity.length>0?c.activity[c.activity.length-1]:null;return V.jsxs("div",{className:`chat-app ${f?"chat-app-rail-collapsed":""}`,children:[V.jsx(LL,{mode:"subtle",threadAlpha:.22,transparent:!0}),V.jsx(K2,{Mark:e,activeConversationId:c.conversationId,conversations:c.conversations,desktopCollapsed:f,disabled:c.turnActive,interactionHidden:L,mobileLayout:_,mobileOpen:m,onClose:ce,onCreate:()=>{k()},onDelete:q=>{c.deleteConversation(q)},onOpenSettings:T,onSelect:q=>{H(q)},product:l,readerChapter:E.reader_chapter,spoilerMode:E.spoiler_mode,tier:E.tier}),V.jsxs("main",{"aria-hidden":F,className:"chat-main",inert:F,children:[V.jsxs("header",{className:"chat-header",children:[V.jsx("button",{"aria-controls":"conversation-rail","aria-expanded":!L,"aria-label":l.openRailLabel,className:"icon-button rail-toggle-main",onClick:K,ref:z,type:"button",children:V.jsx(H2,{})}),V.jsxs("div",{className:"active-thread",children:[V.jsx("span",{className:"active-thread-kicker",children:l.currentConversationLabel}),V.jsx("strong",{children:c.activeTitle})]}),V.jsx("span",{className:"mode-seal",children:i})]}),V.jsx("div",{"aria-live":"polite",className:"transcript",ref:w,children:V.jsxs("div",{className:"transcript-column",children:[c.bootError&&V.jsx("div",{className:"boot-error",children:c.bootError}),!c.bootError&&c.messages.length===0&&V.jsxs("section",{className:"empty-weave",children:[V.jsx("div",{className:"empty-mark-wrap",children:V.jsx(e,{className:"empty-mark"})}),V.jsxs("div",{className:"empty-copy",children:[V.jsx("p",{className:"empty-eyebrow",children:l.emptyEyebrow}),V.jsx("h1",{children:l.emptyTitle}),V.jsx("p",{children:l.emptyHint})]})]}),c.messages.map(q=>V.jsx(r3,{Mark:e,activity:q.streaming?de:null,assistantName:l.assistantName,message:q,onQuote:I,onRegenerate:q.id===c.liveReplyId&&c.turnState==="idle"?c.regenerateReply:void 0,onViewPassage:D=>y(D),regenerateLabel:l.regenerateLabel},q.id)),c.recoveryMessage&&V.jsx(OL,{chooseLabel:l.recoveryChooseLabel,createLabel:l.recoveryCreateLabel,message:c.recoveryMessage,onChooseConversation:K,onCreateConversation:()=>{k()},title:l.recoveryTitle})]})}),V.jsxs("footer",{className:"composer-dock",children:[V.jsx(Y2,{cancelling:c.turnState==="cancelling",draft:c.draft,inputLabel:l.inputLabel,onCancel:()=>{c.cancelTurn()},onDraftChange:c.setDraft,onSubmit:q=>{c.sendMessage(q)},onTierChange:q=>{C(D=>({...D,tier:q})),r.savePreferences({...E,tier:q})},placeholder:l.composerPlaceholder,sendLabel:l.sendLabel,stopLabel:l.stopLabel,stoppingLabel:l.stoppingLabel,tier:E.tier,turnActive:c.turnActive,textareaRef:U}),V.jsxs("p",{className:"privacy-line",children:[V.jsx("span",{className:"privacy-dot"}),a]})]})]}),g&&V.jsx(Q2,{initial:E,onClose:()=>S(!1),onSave:async q=>{await r.savePreferences(q),C(q)}}),b&&V.jsx(UL,{handle:b,loadPassage:c.loadPassage,onClose:()=>y(null)})]})}async function jr(r,e){if(!r.ok)throw new Error(`${e} failed (${r.status})`);return await r.json()}function cy(r){const e=r.split(/\r?\n/),i=e.find(l=>l.startsWith("event:")),a=e.find(l=>l.startsWith("data:"));if(!i||!a)return null;try{return{event:i.slice(6).trim(),data:JSON.parse(a.slice(5).trim())}}catch{return null}}function uy(r){const e=typeof r.data.text=="string"?r.data.text:"",i=typeof r.data.message=="string"?r.data.message:"";if(r.event==="delta")return{type:"delta",text:e};if(r.event==="completed")return{type:"completed",text:e,tokenCount:typeof r.data.token_count=="number"?r.data.token_count:void 0,tokenBudget:typeof r.data.token_budget=="number"?r.data.token_budget:void 0};if(r.event==="interrupted")return{type:"interrupted",message:i||"The turn was interrupted."};if(r.event==="failed")return{type:"failed",message:i||"The reply failed.",code:typeof r.data.code=="string"?r.data.code:void 0};if(r.event==="tool"){const a=Array.isArray(r.data.handles)?r.data.handles.filter(l=>typeof l=="string"):void 0;return{type:"tool",name:typeof r.data.name=="string"?r.data.name:"tool",status:typeof r.data.status=="string"?r.data.status:"start",detail:typeof r.data.detail=="string"?r.data.detail:"",preview:typeof r.data.preview=="string"?r.data.preview:void 0,handles:a&&a.length>0?a:void 0}}return null}async function*zL(r){if(!r.body)throw new Error("The reply stream was empty.");const e=r.body.getReader(),i=new TextDecoder;let a="";for(;;){const{done:c,value:f}=await e.read();a+=i.decode(f,{stream:!c});let h=a.search(/\r?\n\r?\n/);for(;h>=0;){const m=a.slice(0,h),p=a.slice(h).match(/^\r?\n\r?\n/)?.[0];a=a.slice(h+(p?.length??2));const _=cy(m);if(_){const v=uy(_);v&&(yield v)}h=a.search(/\r?\n\r?\n/)}if(c)break}const l=cy(a);if(l){const c=uy(l);c&&(yield c)}}function FL(r=fetch){return{async getPreferences(){const e=await r("/api/preferences");return jr(e,"Loading preferences")},async deleteConversation(e){const i=await r(`/api/conversations/${e}`,{method:"DELETE"});return jr(i,"Deleting conversation")},async getPassage(e){const i=await r(`/api/passages?handle=${encodeURIComponent(e)}`);return jr(i,"Loading passage")},async savePreferences(e){const i=await r("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return jr(i,"Saving preferences")},async listConversations(){const e=await r("/api/conversations");return jr(e,"Loading conversations")},async createConversation(){const e=await r("/api/conversations",{method:"POST"});return jr(e,"Creating a conversation")},async loadMessages(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/messages`);return jr(i,"Loading the conversation")},async*streamTurn(e,i){const a=await r(`/api/conversations/${encodeURIComponent(e)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:i})});if(!a.ok)throw new Error(`Sending the message failed (${a.status})`);yield*zL(a)},async cancelTurn(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/cancel`,{method:"POST"});if(i.status===202)return"cancelling";if(i.status===200)return"idle";throw new Error(`Stopping the reply failed (${i.status})`)}}}const BL=Ke.lazy(()=>fM(()=>import("./ThemeLab-BwA7Sz7t.js"),[]).then(r=>({default:r.ThemeLab})));is.autoAddCss=!1;function fy(r){return document.querySelector(`meta[name="${r}"]`)?.content??""}const sb=document.getElementById("root");if(!sb)throw new Error("Weaver root element is missing.");const HL=window.location.hash==="#theme-lab";t2.createRoot(sb).render(HL?V.jsx(Ke.Suspense,{fallback:V.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:V.jsx(BL,{})}):V.jsx(IL,{api:FL(),modeLabel:fy("weaver-mode"),privacyLabel:fy("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{LL as S,V as j,Ke as r};

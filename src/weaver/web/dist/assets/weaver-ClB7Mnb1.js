(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();const TM="modulepreload",AM=function(a){return"/"+a},b_={},RM=function(e,n,r){let l=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(n.map(p=>{if(p=AM(p),p in b_)return;b_[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":TM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,E)=>{g.addEventListener("load",S),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function CM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var fh={exports:{}},pl={};var M_;function wM(){if(M_)return pl;M_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:c}}return pl.Fragment=e,pl.jsx=n,pl.jsxs=n,pl}var E_;function DM(){return E_||(E_=1,fh.exports=wM()),fh.exports}var A=DM(),dh={exports:{}},dt={};var T_;function NM(){if(T_)return dt;T_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function y(D,k,Q){this.props=D,this.context=k,this.refs=b,this.updater=Q||E}y.prototype.isReactComponent={},y.prototype.setState=function(D,k){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,k,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=y.prototype;function F(D,k,Q){this.props=D,this.context=k,this.refs=b,this.updater=Q||E}var N=F.prototype=new P;N.constructor=F,w(N,y.prototype),N.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(D,k,Q){var Me=Q.ref;return{$$typeof:a,type:D,key:k,ref:Me!==void 0?Me:null,props:Q}}function q(D,k){return z(D.type,k,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===a}function Z(D){var k={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Q){return k[Q]})}var he=/\/+/g;function pe(D,k){return typeof D=="object"&&D!==null&&D.key!=null?Z(""+D.key):k.toString(36)}function J(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(L,L):(D.status="pending",D.then(function(k){D.status==="pending"&&(D.status="fulfilled",D.value=k)},function(k){D.status==="pending"&&(D.status="rejected",D.reason=k)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function U(D,k,Q,Me,Ae){var K=typeof D;(K==="undefined"||K==="boolean")&&(D=null);var oe=!1;if(D===null)oe=!0;else switch(K){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(D.$$typeof){case a:case e:oe=!0;break;case _:return oe=D._init,U(oe(D._payload),k,Q,Me,Ae)}}if(oe)return Ae=Ae(D),oe=Me===""?"."+pe(D,0):Me,O(Ae)?(Q="",oe!=null&&(Q=oe.replace(he,"$&/")+"/"),U(Ae,k,Q,"",function(Qe){return Qe})):Ae!=null&&(V(Ae)&&(Ae=q(Ae,Q+(Ae.key==null||D&&D.key===Ae.key?"":(""+Ae.key).replace(he,"$&/")+"/")+oe)),k.push(Ae)),1;oe=0;var fe=Me===""?".":Me+":";if(O(D))for(var Ce=0;Ce<D.length;Ce++)Me=D[Ce],K=fe+pe(Me,Ce),oe+=U(Me,k,Q,K,Ae);else if(Ce=S(D),typeof Ce=="function")for(D=Ce.call(D),Ce=0;!(Me=D.next()).done;)Me=Me.value,K=fe+pe(Me,Ce++),oe+=U(Me,k,Q,K,Ae);else if(K==="object"){if(typeof D.then=="function")return U(J(D),k,Q,Me,Ae);throw k=String(D),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return oe}function G(D,k,Q){if(D==null)return D;var Me=[],Ae=0;return U(D,Me,"","",function(K){return k.call(Q,K,Ae++)}),Me}function te(D){if(D._status===-1){var k=D._result;k=k(),k.then(function(Q){(D._status===0||D._status===-1)&&(D._status=1,D._result=Q)},function(Q){(D._status===0||D._status===-1)&&(D._status=2,D._result=Q)}),D._status===-1&&(D._status=0,D._result=k)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Te={map:G,forEach:function(D,k,Q){G(D,function(){k.apply(this,arguments)},Q)},count:function(D){var k=0;return G(D,function(){k++}),k},toArray:function(D){return G(D,function(k){return k})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return dt.Activity=v,dt.Children=Te,dt.Component=y,dt.Fragment=n,dt.Profiler=l,dt.PureComponent=F,dt.StrictMode=r,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,dt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},dt.cache=function(D){return function(){return D.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(D,k,Q){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Me=w({},D.props),Ae=D.key;if(k!=null)for(K in k.key!==void 0&&(Ae=""+k.key),k)!T.call(k,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&k.ref===void 0||(Me[K]=k[K]);var K=arguments.length-2;if(K===1)Me.children=Q;else if(1<K){for(var oe=Array(K),fe=0;fe<K;fe++)oe[fe]=arguments[fe+2];Me.children=oe}return z(D.type,Ae,Me)},dt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},dt.createElement=function(D,k,Q){var Me,Ae={},K=null;if(k!=null)for(Me in k.key!==void 0&&(K=""+k.key),k)T.call(k,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ae[Me]=k[Me]);var oe=arguments.length-2;if(oe===1)Ae.children=Q;else if(1<oe){for(var fe=Array(oe),Ce=0;Ce<oe;Ce++)fe[Ce]=arguments[Ce+2];Ae.children=fe}if(D&&D.defaultProps)for(Me in oe=D.defaultProps,oe)Ae[Me]===void 0&&(Ae[Me]=oe[Me]);return z(D,K,Ae)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(D){return{$$typeof:h,render:D}},dt.isValidElement=V,dt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:te}},dt.memo=function(D,k){return{$$typeof:p,type:D,compare:k===void 0?null:k}},dt.startTransition=function(D){var k=B.T,Q={};B.T=Q;try{var Me=D(),Ae=B.S;Ae!==null&&Ae(Q,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(L,me)}catch(K){me(K)}finally{k!==null&&Q.types!==null&&(k.types=Q.types),B.T=k}},dt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},dt.use=function(D){return B.H.use(D)},dt.useActionState=function(D,k,Q){return B.H.useActionState(D,k,Q)},dt.useCallback=function(D,k){return B.H.useCallback(D,k)},dt.useContext=function(D){return B.H.useContext(D)},dt.useDebugValue=function(){},dt.useDeferredValue=function(D,k){return B.H.useDeferredValue(D,k)},dt.useEffect=function(D,k){return B.H.useEffect(D,k)},dt.useEffectEvent=function(D){return B.H.useEffectEvent(D)},dt.useId=function(){return B.H.useId()},dt.useImperativeHandle=function(D,k,Q){return B.H.useImperativeHandle(D,k,Q)},dt.useInsertionEffect=function(D,k){return B.H.useInsertionEffect(D,k)},dt.useLayoutEffect=function(D,k){return B.H.useLayoutEffect(D,k)},dt.useMemo=function(D,k){return B.H.useMemo(D,k)},dt.useOptimistic=function(D,k){return B.H.useOptimistic(D,k)},dt.useReducer=function(D,k,Q){return B.H.useReducer(D,k,Q)},dt.useRef=function(D){return B.H.useRef(D)},dt.useState=function(D){return B.H.useState(D)},dt.useSyncExternalStore=function(D,k,Q){return B.H.useSyncExternalStore(D,k,Q)},dt.useTransition=function(){return B.H.useTransition()},dt.version="19.2.8",dt}var A_;function pm(){return A_||(A_=1,dh.exports=NM()),dh.exports}var ke=pm();const mm=CM(ke);function sp(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=Array(e);n<e;n++)r[n]=a[n];return r}function LM(a){if(Array.isArray(a))return a}function UM(a){if(Array.isArray(a))return sp(a)}function OM(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function PM(a,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,My(r.key),r)}}function IM(a,e,n){return e&&PM(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function Du(a,e){var n=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!n){if(Array.isArray(a)||(n=gm(a))||e){n&&(a=n);var r=0,l=function(){};return{s:l,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,f=!0,h=!1;return{s:function(){n=n.call(a)},n:function(){var m=n.next();return f=m.done,m},e:function(m){h=!0,c=m},f:function(){try{f||n.return==null||n.return()}finally{if(h)throw c}}}}function st(a,e,n){return(e=My(e))in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function zM(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function FM(a,e){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var r,l,c,f,h=[],m=!0,p=!1;try{if(c=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(r=c.call(n)).done)&&(h.push(r.value),h.length!==e);m=!0);}catch(_){p=!0,l=_}finally{try{if(!m&&n.return!=null&&(f=n.return(),Object(f)!==f))return}finally{if(p)throw l}}return h}}function BM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R_(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),n.push.apply(n,r)}return n}function we(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R_(Object(n),!0).forEach(function(r){st(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):R_(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function $u(a,e){return LM(a)||FM(a,e)||gm(a,e)||BM()}function Xi(a){return UM(a)||zM(a)||gm(a)||HM()}function GM(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function My(a){var e=GM(a,"string");return typeof e=="symbol"?e:e+""}function Bu(a){"@babel/helpers - typeof";return Bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bu(a)}function gm(a,e){if(a){if(typeof a=="string")return sp(a,e);var n={}.toString.call(a).slice(8,-1);return n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set"?Array.from(a):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?sp(a,e):void 0}}var C_=function(){},vm={},Ey={},Ty=null,Ay={mark:C_,measure:C_};try{typeof window<"u"&&(vm=window),typeof document<"u"&&(Ey=document),typeof MutationObserver<"u"&&(Ty=MutationObserver),typeof performance<"u"&&(Ay=performance)}catch{}var VM=vm.navigator||{},w_=VM.userAgent,D_=w_===void 0?"":w_,br=vm,tn=Ey,N_=Ty,Qc=Ay;br.document;var Ha=!!tn.documentElement&&!!tn.head&&typeof tn.addEventListener=="function"&&typeof tn.createElement=="function",Ry=~D_.indexOf("MSIE")||~D_.indexOf("Trident/"),$c,kM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,XM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Cy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},WM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},wy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",Ul="duotone",Dy="sharp",Ny="sharp-duotone",Ly="chisel",Uy="etch",Oy="graphite",Py="jelly",Iy="jelly-duo",zy="jelly-fill",Fy="mosaic",By="notdog",Hy="notdog-duo",Gy="pixel",Vy="slab",ky="slab-duo",Xy="slab-press",Wy="slab-press-duo",qy="thumbprint",jy="utility",Yy="utility-duo",Zy="utility-fill",Ky="vellum",Qy="whiteboard",qM="Classic",jM="Duotone",YM="Sharp",ZM="Sharp Duotone",KM="Chisel",QM="Etch",$M="Graphite",JM="Jelly",eE="Jelly Duo",tE="Jelly Fill",nE="Mosaic",iE="Notdog",aE="Notdog Duo",rE="Pixel",sE="Slab",oE="Slab Duo",lE="Slab Press",cE="Slab Press Duo",uE="Thumbprint",fE="Utility",dE="Utility Duo",hE="Utility Fill",pE="Vellum",mE="Whiteboard",$y=[In,Ul,Dy,Ny,Ly,Uy,Oy,Py,Iy,zy,Fy,By,Hy,Gy,Vy,ky,Xy,Wy,qy,jy,Yy,Zy,Ky,Qy];$c={},st(st(st(st(st(st(st(st(st(st($c,In,qM),Ul,jM),Dy,YM),Ny,ZM),Ly,KM),Uy,QM),Oy,$M),Py,JM),Iy,eE),zy,tE),st(st(st(st(st(st(st(st(st(st($c,Fy,nE),By,iE),Hy,aE),Gy,rE),Vy,sE),ky,oE),Xy,lE),Wy,cE),qy,uE),jy,fE),st(st(st(st($c,Yy,dE),Zy,hE),Ky,pE),Qy,mE);var gE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},vE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},_E=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),xE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Jy=["fak","fa-kit","fakd","fa-kit-duotone"],L_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},yE=["kit"],SE="kit",bE="kit-duotone",ME="Kit",EE="Kit Duotone";st(st({},SE,ME),bE,EE);var TE={kit:{"fa-kit":"fak"}},AE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},RE={kit:{fak:"fa-kit"}},U_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Jc,eu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},CE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],wE="classic",DE="duotone",NE="sharp",LE="sharp-duotone",UE="chisel",OE="etch",PE="graphite",IE="jelly",zE="jelly-duo",FE="jelly-fill",BE="mosaic",HE="notdog",GE="notdog-duo",VE="pixel",kE="slab",XE="slab-duo",WE="slab-press",qE="slab-press-duo",jE="thumbprint",YE="utility",ZE="utility-duo",KE="utility-fill",QE="vellum",$E="whiteboard",JE="Classic",eT="Duotone",tT="Sharp",nT="Sharp Duotone",iT="Chisel",aT="Etch",rT="Graphite",sT="Jelly",oT="Jelly Duo",lT="Jelly Fill",cT="Mosaic",uT="Notdog",fT="Notdog Duo",dT="Pixel",hT="Slab",pT="Slab Duo",mT="Slab Press",gT="Slab Press Duo",vT="Thumbprint",_T="Utility",xT="Utility Duo",yT="Utility Fill",ST="Vellum",bT="Whiteboard";Jc={},st(st(st(st(st(st(st(st(st(st(Jc,wE,JE),DE,eT),NE,tT),LE,nT),UE,iT),OE,aT),PE,rT),IE,sT),zE,oT),FE,lT),st(st(st(st(st(st(st(st(st(st(Jc,BE,cT),HE,uT),GE,fT),VE,dT),kE,hT),XE,pT),WE,mT),qE,gT),jE,vT),YE,_T),st(st(st(st(Jc,ZE,xT),KE,yT),QE,ST),$E,bT);var MT="kit",ET="kit-duotone",TT="Kit",AT="Kit Duotone";st(st({},MT,TT),ET,AT);var RT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},CT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},op={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},wT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],eS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(CE,wT),DT=["solid","regular","light","thin","duotone","brands","semibold"],tS=[1,2,3,4,5,6,7,8,9,10],NT=tS.concat([11,12,13,14,15,16,17,18,19,20]),LT=["aw","fw","pull-left","pull-right"],UT=[].concat(Xi(Object.keys(CT)),DT,LT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",eu.GROUP,eu.SWAP_OPACITY,eu.PRIMARY,eu.SECONDARY]).concat(tS.map(function(a){return"".concat(a,"x")})).concat(NT.map(function(a){return"w-".concat(a)})),OT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Pa="___FONT_AWESOME___",lp=16,nS="fa",iS="svg-inline--fa",ss="data-fa-i2svg",cp="data-fa-pseudo-element",PT="data-fa-pseudo-element-pending",_m="data-prefix",xm="data-icon",O_="fontawesome-i2svg",IT="async",zT=["HTML","HEAD","STYLE","SCRIPT"],aS=["::before","::after",":before",":after"],rS=(function(){try{return!0}catch{return!1}})();function Ol(a){return new Proxy(a,{get:function(n,r){return r in n?n[r]:n[In]}})}var sS=we({},Cy);sS[In]=we(we(we(we({},{"fa-duotone":"duotone"}),Cy[In]),L_.kit),L_["kit-duotone"]);var FT=Ol(sS),up=we({},xE);up[In]=we(we(we(we({},{duotone:"fad"}),up[In]),U_.kit),U_["kit-duotone"]);var P_=Ol(up),fp=we({},op);fp[In]=we(we({},fp[In]),RE.kit);var ym=Ol(fp),dp=we({},RT);dp[In]=we(we({},dp[In]),TE.kit);Ol(dp);var BT=kM,oS="fa-layers-text",HT=XM,GT=we({},gE);Ol(GT);var VT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hh=WM,kT=[].concat(Xi(yE),Xi(UT)),Rl=br.FontAwesomeConfig||{};function XT(a){var e=tn.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function WT(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(tn&&typeof tn.querySelector=="function"){var qT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qT.forEach(function(a){var e=$u(a,2),n=e[0],r=e[1],l=WT(XT(n));l!=null&&(Rl[r]=l)})}var lS={styleDefault:"solid",familyDefault:In,cssPrefix:nS,replacementClass:iS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rl.familyPrefix&&(Rl.cssPrefix=Rl.familyPrefix);var mo=we(we({},lS),Rl);mo.autoReplaceSvg||(mo.observeMutations=!1);var rt={};Object.keys(lS).forEach(function(a){Object.defineProperty(rt,a,{enumerable:!0,set:function(n){mo[a]=n,Cl.forEach(function(r){return r(rt)})},get:function(){return mo[a]}})});Object.defineProperty(rt,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,Cl.forEach(function(n){return n(rt)})},get:function(){return mo.cssPrefix}});br.FontAwesomeConfig=rt;var Cl=[];function jT(a){return Cl.push(a),function(){Cl.splice(Cl.indexOf(a),1)}}var Ws=lp,ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function YT(a){if(!(!a||!Ha)){var e=tn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var n=tn.head.childNodes,r=null,l=n.length-1;l>-1;l--){var c=n[l],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=c)}return tn.head.insertBefore(e,r),a}}var ZT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function I_(){for(var a=12,e="";a-- >0;)e+=ZT[Math.random()*62|0];return e}function yo(a){for(var e=[],n=(a||[]).length>>>0;n--;)e[n]=a[n];return e}function Sm(a){return a.classList?yo(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cS(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function KT(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(cS(a[n]),'" ')},"").trim()}function Ju(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(a[n].trim(),";")},"")}function bm(a){return a.size!==ta.size||a.x!==ta.x||a.y!==ta.y||a.rotate!==ta.rotate||a.flipX||a.flipY}function QT(a){var e=a.transform,n=a.containerWidth,r=a.iconWidth,l={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:l,inner:m,path:p}}function $T(a){var e=a.transform,n=a.width,r=n===void 0?lp:n,l=a.height,c=l===void 0?lp:l,f="";return Ry?f+="translate(".concat(e.x/Ws-r/2,"em, ").concat(e.y/Ws-c/2,"em) "):f+="translate(calc(-50% + ".concat(e.x/Ws,"em), calc(-50% + ").concat(e.y/Ws,"em)) "),f+="scale(".concat(e.size/Ws*(e.flipX?-1:1),", ").concat(e.size/Ws*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var JT=`:root, :host {
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
}`;function uS(){var a=nS,e=iS,n=rt.cssPrefix,r=rt.replacementClass,l=JT;if(n!==a||r!==e){var c=new RegExp("\\.".concat(a,"\\-"),"g"),f=new RegExp("\\--".concat(a,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");l=l.replace(c,".".concat(n,"-")).replace(f,"--".concat(n,"-")).replace(h,".".concat(r))}return l}var z_=!1;function ph(){rt.autoAddCss&&!z_&&(YT(uS()),z_=!0)}var eA={mixout:function(){return{dom:{css:uS,insertCss:ph}}},hooks:function(){return{beforeDOMElementCreation:function(){ph()},beforeI2svg:function(){ph()}}}},Ia=br||{};Ia[Pa]||(Ia[Pa]={});Ia[Pa].styles||(Ia[Pa].styles={});Ia[Pa].hooks||(Ia[Pa].hooks={});Ia[Pa].shims||(Ia[Pa].shims=[]);var Gi=Ia[Pa],fS=[],dS=function(){tn.removeEventListener("DOMContentLoaded",dS),Hu=1,fS.map(function(e){return e()})},Hu=!1;Ha&&(Hu=(tn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tn.readyState),Hu||tn.addEventListener("DOMContentLoaded",dS));function tA(a){Ha&&(Hu?setTimeout(a,0):fS.push(a))}function Pl(a){var e=a.tag,n=a.attributes,r=n===void 0?{}:n,l=a.children,c=l===void 0?[]:l;return typeof a=="string"?cS(a):"<".concat(e," ").concat(KT(r),">").concat(c.map(Pl).join(""),"</").concat(e,">")}function F_(a,e,n){if(a&&a[e]&&a[e][n])return{prefix:e,iconName:n,icon:a[e][n]}}var mh=function(e,n,r,l){var c=Object.keys(e),f=c.length,h=n,m,p,_;for(r===void 0?(m=1,_=e[c[0]]):(m=0,_=r);m<f;m++)p=c[m],_=h(_,e[p],p,e);return _};function hS(a){return Xi(a).length!==1?null:a.codePointAt(0).toString(16)}function B_(a){return Object.keys(a).reduce(function(e,n){var r=a[n],l=!!r.icon;return l?e[r.iconName]=r.icon:e[n]=r,e},{})}function hp(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,l=r===void 0?!1:r,c=B_(e);typeof Gi.hooks.addPack=="function"&&!l?Gi.hooks.addPack(a,B_(e)):Gi.styles[a]=we(we({},Gi.styles[a]||{}),c),a==="fas"&&hp("fa",e)}var Dl=Gi.styles,nA=Gi.shims,pS=Object.keys(ym),iA=pS.reduce(function(a,e){return a[e]=Object.keys(ym[e]),a},{}),Mm=null,mS={},gS={},vS={},_S={},xS={};function aA(a){return~kT.indexOf(a)}function rA(a,e){var n=e.split("-"),r=n[0],l=n.slice(1).join("-");return r===a&&l!==""&&!aA(l)?l:null}var yS=function(){var e=function(c){return mh(Dl,function(f,h,m){return f[m]=mh(h,c,{}),f},{})};mS=e(function(l,c,f){if(c[3]&&(l[c[3]]=f),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=f})}return l}),gS=e(function(l,c,f){if(l[f]=f,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=f})}return l}),xS=e(function(l,c,f){var h=c[2];return l[f]=f,h.forEach(function(m){l[m]=f}),l});var n="far"in Dl||rt.autoFetchSvg,r=mh(nA,function(l,c){var f=c[0],h=c[1],m=c[2];return h==="far"&&!n&&(h="fas"),typeof f=="string"&&(l.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(l.unicodes[f.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});vS=r.names,_S=r.unicodes,Mm=ef(rt.styleDefault,{family:rt.familyDefault})};jT(function(a){Mm=ef(a.styleDefault,{family:rt.familyDefault})});yS();function Em(a,e){return(mS[a]||{})[e]}function sA(a,e){return(gS[a]||{})[e]}function is(a,e){return(xS[a]||{})[e]}function SS(a){return vS[a]||{prefix:null,iconName:null}}function oA(a){var e=_S[a],n=Em("fas",a);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mr(){return Mm}var bS=function(){return{prefix:null,iconName:null,rest:[]}};function lA(a){var e=In,n=pS.reduce(function(r,l){return r[l]="".concat(rt.cssPrefix,"-").concat(l),r},{});return $y.forEach(function(r){(a.includes(n[r])||a.some(function(l){return iA[r].includes(l)}))&&(e=r)}),e}function ef(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?In:n,l=FT[r][a];if(r===Ul&&!a)return"fad";var c=P_[r][a]||P_[r][l],f=a in Gi.styles?a:null,h=c||f||null;return h}function cA(a){var e=[],n=null;return a.forEach(function(r){var l=rA(rt.cssPrefix,r);l?n=l:r&&e.push(r)}),{iconName:n,rest:e}}function H_(a){return a.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var G_=eS.concat(Jy);function tf(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,l=null,c=H_(a.filter(function(S){return G_.includes(S)})),f=H_(a.filter(function(S){return!G_.includes(S)})),h=c.filter(function(S){return l=S,!wy.includes(S)}),m=$u(h,1),p=m[0],_=p===void 0?null:p,v=lA(c),g=we(we({},cA(f)),{},{prefix:ef(_,{family:v})});return we(we(we({},g),hA({values:a,family:v,styles:Dl,config:rt,canonical:g,givenPrefix:l})),uA(r,l,g))}function uA(a,e,n){var r=n.prefix,l=n.iconName;if(a||!r||!l)return{prefix:r,iconName:l};var c=e==="fa"?SS(l):{},f=is(r,l);return l=c.iconName||f||l,r=c.prefix||r,r==="far"&&!Dl.far&&Dl.fas&&!rt.autoFetchSvg&&(r="fas"),{prefix:r,iconName:l}}var fA=$y.filter(function(a){return a!==In||a!==Ul}),dA=Object.keys(op).filter(function(a){return a!==In}).map(function(a){return Object.keys(op[a])}).flat();function hA(a){var e=a.values,n=a.family,r=a.canonical,l=a.givenPrefix,c=l===void 0?"":l,f=a.styles,h=f===void 0?{}:f,m=a.config,p=m===void 0?{}:m,_=n===Ul,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=r.prefix==="fad"||r.prefix==="fa-duotone";if(!_&&(v||g||S)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&fA.includes(n)){var E=Object.keys(h).find(function(b){return dA.includes(b)});if(E||p.autoFetchSvg){var w=_E.get(n).defaultShortPrefixId;r.prefix=w,r.iconName=is(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||c==="fa")&&(r.prefix=Mr()||"fas"),r}var pA=(function(){function a(){OM(this,a),this.definitions={}}return IM(a,[{key:"add",value:function(){for(var n=this,r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){n.definitions[h]=we(we({},n.definitions[h]||{}),f[h]),hp(h,f[h]);var m=ym[In][h];m&&hp(m,f[h]),yS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var l=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(l).map(function(c){var f=l[c],h=f.prefix,m=f.iconName,p=f.icon,_=p[2];n[h]||(n[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(n[h][v]=p)}),n[h][m]=p}),n}}])})(),V_=[],oo={},uo={},mA=Object.keys(uo);function gA(a,e){var n=e.mixoutsTo;return V_=a,oo={},Object.keys(uo).forEach(function(r){mA.indexOf(r)===-1&&delete uo[r]}),V_.forEach(function(r){var l=r.mixout?r.mixout():{};if(Object.keys(l).forEach(function(f){typeof l[f]=="function"&&(n[f]=l[f]),Bu(l[f])==="object"&&Object.keys(l[f]).forEach(function(h){n[f]||(n[f]={}),n[f][h]=l[f][h]})}),r.hooks){var c=r.hooks();Object.keys(c).forEach(function(f){oo[f]||(oo[f]=[]),oo[f].push(c[f])})}r.provides&&r.provides(uo)}),n}function pp(a,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),l=2;l<n;l++)r[l-2]=arguments[l];var c=oo[a]||[];return c.forEach(function(f){e=f.apply(null,[e].concat(r))}),e}function os(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=oo[a]||[];l.forEach(function(c){c.apply(null,n)})}function Er(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[a]?uo[a].apply(null,e):void 0}function mp(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,n=a.prefix||Mr();if(e)return e=is(n,e)||e,F_(MS.definitions,n,e)||F_(Gi.styles,n,e)}var MS=new pA,vA=function(){rt.autoReplaceSvg=!1,rt.observeMutations=!1,os("noAuto")},_A={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ha?(os("beforeI2svg",e),Er("pseudoElements2svg",e),Er("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;rt.autoReplaceSvg===!1&&(rt.autoReplaceSvg=!0),rt.observeMutations=!0,tA(function(){yA({autoReplaceSvgRoot:n}),os("watch",e)})}},xA={icon:function(e){if(e===null)return null;if(Bu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:is(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ef(e[0]);return{prefix:r,iconName:is(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(rt.cssPrefix,"-"))>-1||e.match(BT))){var l=tf(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||Mr(),iconName:is(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var c=Mr();return{prefix:c,iconName:is(c,e)||e}}}},vi={noAuto:vA,config:rt,dom:_A,parse:xA,library:MS,findIconDefinition:mp,toHtml:Pl},yA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?tn:n;(Object.keys(Gi.styles).length>0||rt.autoFetchSvg)&&Ha&&rt.autoReplaceSvg&&vi.dom.i2svg({node:r})};function nf(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return Pl(r)})}}),Object.defineProperty(a,"node",{get:function(){if(Ha){var r=tn.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function SA(a){var e=a.children,n=a.main,r=a.mask,l=a.attributes,c=a.styles,f=a.transform;if(bm(f)&&n.found&&!r.found){var h=n.width,m=n.height,p={x:h/m/2,y:.5};l.style=Ju(we(we({},c),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function bA(a){var e=a.prefix,n=a.iconName,r=a.children,l=a.attributes,c=a.symbol,f=c===!0?"".concat(e,"-").concat(rt.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:we(we({},l),{},{id:f}),children:r}]}]}function MA(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in a})}function Tm(a){var e=a.icons,n=e.main,r=e.mask,l=a.prefix,c=a.iconName,f=a.transform,h=a.symbol,m=a.maskId,p=a.extra,_=a.watchable,v=_===void 0?!1:_,g=r.found?r:n,S=g.width,E=g.height,w=[rt.replacementClass,c?"".concat(rt.cssPrefix,"-").concat(c):""].filter(function(O){return p.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(p.classes).join(" "),b={children:[],attributes:we(we({},p.attributes),{},{"data-prefix":l,"data-icon":c,class:w,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(E)})};!MA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ss]="");var y=we(we({},b),{},{prefix:l,iconName:c,main:n,mask:r,maskId:m,transform:f,symbol:h,styles:we({},p.styles)}),P=r.found&&n.found?Er("generateAbstractMask",y)||{children:[],attributes:{}}:Er("generateAbstractIcon",y)||{children:[],attributes:{}},F=P.children,N=P.attributes;return y.children=F,y.attributes=N,h?bA(y):SA(y)}function k_(a){var e=a.content,n=a.width,r=a.height,l=a.transform,c=a.extra,f=a.watchable,h=f===void 0?!1:f,m=we(we({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ss]="");var p=we({},c.styles);bm(l)&&(p.transform=$T({transform:l,width:n,height:r}),p["-webkit-transform"]=p.transform);var _=Ju(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function EA(a){var e=a.content,n=a.extra,r=we(we({},n.attributes),{},{class:n.classes.join(" ")}),l=Ju(n.styles);l.length>0&&(r.style=l);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),c}var gh=Gi.styles;function gp(a){var e=a[0],n=a[1],r=a.slice(4),l=$u(r,1),c=l[0],f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat(rt.cssPrefix,"-").concat(hh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(hh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(hh.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:n,icon:f}}var TA={found:!1,width:512,height:512};function AA(a,e){!rS&&!rt.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function vp(a,e){var n=e;return e==="fa"&&rt.styleDefault!==null&&(e=Mr()),new Promise(function(r,l){if(n==="fa"){var c=SS(a)||{};a=c.iconName||a,e=c.prefix||e}if(a&&e&&gh[e]&&gh[e][a]){var f=gh[e][a];return r(gp(f))}AA(a,e),r(we(we({},TA),{},{icon:rt.showMissingIcons&&a?Er("missingIconAbstract")||{}:{}}))})}var X_=function(){},_p=rt.measurePerformance&&Qc&&Qc.mark&&Qc.measure?Qc:{mark:X_,measure:X_},El='FA "7.3.1"',RA=function(e){return _p.mark("".concat(El," ").concat(e," begins")),function(){return ES(e)}},ES=function(e){_p.mark("".concat(El," ").concat(e," ends")),_p.measure("".concat(El," ").concat(e),"".concat(El," ").concat(e," begins"),"".concat(El," ").concat(e," ends"))},Am={begin:RA,end:ES},Nu=function(){};function W_(a){var e=a.getAttribute?a.getAttribute(ss):null;return typeof e=="string"}function CA(a){var e=a.getAttribute?a.getAttribute(_m):null,n=a.getAttribute?a.getAttribute(xm):null;return e&&n}function wA(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(rt.replacementClass)}function DA(){if(rt.autoReplaceSvg===!0)return Lu.replace;var a=Lu[rt.autoReplaceSvg];return a||Lu.replace}function NA(a){return tn.createElementNS("http://www.w3.org/2000/svg",a)}function LA(a){return tn.createElement(a)}function TS(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?a.tag==="svg"?NA:LA:n;if(typeof a=="string")return tn.createTextNode(a);var l=r(a.tag);Object.keys(a.attributes||[]).forEach(function(f){l.setAttribute(f,a.attributes[f])});var c=a.children||[];return c.forEach(function(f){l.appendChild(TS(f,{ceFn:r}))}),l}function UA(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Lu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(l){n.parentNode.insertBefore(TS(l),n)}),n.getAttribute(ss)===null&&rt.keepOriginalSource){var r=tn.createComment(UA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Sm(n).indexOf(rt.replacementClass))return Lu.replace(e);var l=new RegExp("".concat(rt.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var c=r[0].attributes.class.split(" ").reduce(function(h,m){return m===rt.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var f=r.map(function(h){return Pl(h)}).join(`
`);n.setAttribute(ss,""),n.innerHTML=f}};function q_(a){a()}function AS(a,e){var n=typeof e=="function"?e:Nu;if(a.length===0)n();else{var r=q_;rt.mutateApproach===IT&&(r=br.requestAnimationFrame||q_),r(function(){var l=DA(),c=Am.begin("mutate");a.map(l),c(),n()})}}var Rm=!1;function RS(){Rm=!0}function xp(){Rm=!1}var Gu=null;function j_(a){if(N_&&rt.observeMutations){var e=a.treeCallback,n=e===void 0?Nu:e,r=a.nodeCallback,l=r===void 0?Nu:r,c=a.pseudoElementsCallback,f=c===void 0?Nu:c,h=a.observeMutationsRoot,m=h===void 0?tn:h;Gu=new N_(function(p){if(!Rm){var _=Mr();yo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!W_(v.addedNodes[0])&&(rt.searchPseudoElements&&f(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&rt.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&W_(v.target)&&~VT.indexOf(v.attributeName))if(v.attributeName==="class"&&CA(v.target)){var g=tf(Sm(v.target)),S=g.prefix,E=g.iconName;v.target.setAttribute(_m,S||_),E&&v.target.setAttribute(xm,E)}else wA(v.target)&&l(v.target)})}}),Ha&&Gu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function OA(){Gu&&Gu.disconnect()}function PA(a){var e=a.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,l){var c=l.split(":"),f=c[0],h=c.slice(1);return f&&h.length>0&&(r[f]=h.join(":").trim()),r},{})),n}function IA(a){var e=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",l=tf(Sm(a));return l.prefix||(l.prefix=Mr()),e&&n&&(l.prefix=e,l.iconName=n),l.iconName&&l.prefix||(l.prefix&&r.length>0&&(l.iconName=sA(l.prefix,a.innerText)||Em(l.prefix,hS(a.innerText))),!l.iconName&&rt.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=a.firstChild.data)),l}function zA(a){var e=yo(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function FA(){return{iconName:null,prefix:null,transform:ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=IA(a),r=n.iconName,l=n.prefix,c=n.rest,f=zA(a),h=pp("parseNodeAttributes",{},a),m=e.styleParser?PA(a):[];return we({iconName:r,prefix:l,transform:ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:f}},h)}var BA=Gi.styles;function CS(a){var e=rt.autoReplaceSvg==="nest"?Y_(a,{styleParser:!1}):Y_(a);return~e.extra.classes.indexOf(oS)?Er("generateLayersText",a,e):Er("generateSvgReplacementMutation",a,e)}function HA(){return[].concat(Xi(Jy),Xi(eS))}function Z_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ha)return Promise.resolve();var n=tn.documentElement.classList,r=function(v){return n.add("".concat(O_,"-").concat(v))},l=function(v){return n.remove("".concat(O_,"-").concat(v))},c=rt.autoFetchSvg?HA():wy.concat(Object.keys(BA));c.includes("fa")||c.push("fa");var f=[".".concat(oS,":not([").concat(ss,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ss,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=yo(a.querySelectorAll(f))}catch{}if(h.length>0)r("pending"),l("complete");else return Promise.resolve();var m=Am.begin("onTree"),p=h.reduce(function(_,v){try{var g=CS(v);g&&_.push(g)}catch(S){rS||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){AS(g,function(){r("active"),r("complete"),l("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function GA(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;CS(a).then(function(n){n&&AS([n],e)})}function VA(a){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:mp(e||{}),l=n.mask;return l&&(l=(l||{}).icon?l:mp(l||{})),a(r,we(we({},n),{},{mask:l}))}}var kA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,l=r===void 0?ta:r,c=n.symbol,f=c===void 0?!1:c,h=n.mask,m=h===void 0?null:h,p=n.maskId,_=p===void 0?null:p,v=n.classes,g=v===void 0?[]:v,S=n.attributes,E=S===void 0?{}:S,w=n.styles,b=w===void 0?{}:w;if(e){var y=e.prefix,P=e.iconName,F=e.icon;return nf(we({type:"icon"},e),function(){return os("beforeDOMElementCreation",{iconDefinition:e,params:n}),Tm({icons:{main:gp(F),mask:m?gp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:P,transform:we(we({},ta),l),symbol:f,maskId:_,extra:{attributes:E,styles:b,classes:g}})})}},XA={mixout:function(){return{icon:VA(kA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Z_,n.nodeCallback=GA,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,l=r===void 0?tn:r,c=n.callback,f=c===void 0?function(){}:c;return Z_(l,f)},e.generateSvgReplacementMutation=function(n,r){var l=r.iconName,c=r.prefix,f=r.transform,h=r.symbol,m=r.mask,p=r.maskId,_=r.extra;return new Promise(function(v,g){Promise.all([vp(l,c),m.iconName?vp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=$u(S,2),w=E[0],b=E[1];v([n,Tm({icons:{main:w,mask:b},prefix:c,iconName:l,transform:f,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,l=n.attributes,c=n.main,f=n.transform,h=n.styles,m=Ju(h);m.length>0&&(l.style=m);var p;return bm(f)&&(p=Er("generateAbstractTransformGrouping",{main:c,transform:f,containerWidth:c.width,iconWidth:c.width})),r.push(p||c.icon),{children:r,attributes:l}}}},WA={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=r.classes,c=l===void 0?[]:l;return nf({type:"layer"},function(){os("beforeDOMElementCreation",{assembler:n,params:r});var f=[];return n(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(rt.cssPrefix,"-layers")].concat(Xi(c)).join(" ")},children:f}]})}}}},qA={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var l=r.classes,c=l===void 0?[]:l,f=r.attributes,h=f===void 0?{}:f,m=r.styles,p=m===void 0?{}:m;return nf({type:"counter",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:r}),EA({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(rt.cssPrefix,"-layers-counter")].concat(Xi(c))}})})}}}},jA={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=r.transform,c=l===void 0?ta:l,f=r.classes,h=f===void 0?[]:f,m=r.attributes,p=m===void 0?{}:m,_=r.styles,v=_===void 0?{}:_;return nf({type:"text",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:r}),k_({content:n,transform:we(we({},ta),c),extra:{attributes:p,styles:v,classes:["".concat(rt.cssPrefix,"-layers-text")].concat(Xi(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var l=r.transform,c=r.extra,f=null,h=null;if(Ry){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([n,k_({content:n.innerHTML,width:f,height:h,transform:l,extra:c,watchable:!0})])}}},wS=new RegExp('"',"ug"),K_=[1105920,1112319],Q_=we(we(we(we({},{FontAwesome:{normal:"fas",400:"fas"}}),vE),OT),AE),yp=Object.keys(Q_).reduce(function(a,e){return a[e.toLowerCase()]=Q_[e],a},{}),YA=Object.keys(yp).reduce(function(a,e){var n=yp[e];return a[e]=n[900]||Xi(Object.entries(n))[0][1],a},{});function ZA(a){var e=a.replace(wS,"");return hS(Xi(e)[0]||"")}function KA(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),n=a.getPropertyValue("content"),r=n.replace(wS,""),l=r.codePointAt(0),c=l>=K_[0]&&l<=K_[1],f=r.length===2?r[0]===r[1]:!1;return c||f||e}function QA(a,e){var n=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),l=isNaN(r)?"normal":r;return(yp[n]||{})[l]||YA[n]}function $_(a,e){var n="".concat(PT).concat(e.replace(":","-"));return new Promise(function(r,l){if(a.getAttribute(n)!==null)return r();var c=yo(a.children),f=c.filter(function(L){return L.getAttribute(cp)===e})[0],h=br.getComputedStyle(a,e),m=h.getPropertyValue("font-family"),p=m.match(HT),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return a.removeChild(f),r();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=QA(m,_),E=ZA(g),w=p[0].startsWith("FontAwesome"),b=KA(h),y=Em(S,E),P=y;if(w){var F=oA(E);F.iconName&&F.prefix&&(y=F.iconName,S=F.prefix)}if(y&&!b&&(!f||f.getAttribute(_m)!==S||f.getAttribute(xm)!==P)){a.setAttribute(n,P),f&&a.removeChild(f);var N=FA(),O=N.extra;O.attributes[cp]=e,vp(y,S).then(function(L){var B=Tm(we(we({},N),{},{icons:{main:L,mask:bS()},prefix:S,iconName:P,extra:O,watchable:!0})),T=tn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(T,a.firstChild):a.appendChild(T),T.outerHTML=B.map(function(z){return Pl(z)}).join(`
`),a.removeAttribute(n),r()}).catch(l)}else r()}else r()})}function $A(a){return Promise.all([$_(a,"::before"),$_(a,"::after")])}function JA(a){return a.parentNode!==document.head&&!~zT.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(cp)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var e2=function(e){return!!e&&aS.some(function(n){return e.includes(n)})},t2=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=Du(r),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;if(e2(f)){var h=aS.reduce(function(m,p){return m.replace(p,"")},f);h!==""&&h!=="*"&&n.add(h)}}}catch(m){l.e(m)}finally{l.f()}return n};function J_(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ha){var n;if(e)n=a;else if(rt.searchPseudoElementsFullScan)n=a.querySelectorAll("*");else{var r=new Set,l=Du(document.styleSheets),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;try{var h=Du(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=t2(p.selectorText),v=Du(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;r.add(S)}}catch(w){v.e(w)}finally{v.f()}}}catch(w){h.e(w)}finally{h.f()}}catch(w){rt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){l.e(w)}finally{l.f()}if(!r.size)return;var E=Array.from(r).join(", ");try{n=a.querySelectorAll(E)}catch{}}return new Promise(function(w,b){var y=yo(n).filter(JA).map($A),P=Am.begin("searchPseudoElements");RS(),Promise.all(y).then(function(){P(),xp(),w()}).catch(function(){P(),xp(),b()})})}}var n2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=J_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,l=r===void 0?tn:r;rt.searchPseudoElements&&J_(l)}}},ex=!1,i2={mixout:function(){return{dom:{unwatch:function(){RS(),ex=!0}}}},hooks:function(){return{bootstrap:function(){j_(pp("mutationObserverCallbacks",{}))},noAuto:function(){OA()},watch:function(n){var r=n.observeMutationsRoot;ex?xp():j_(pp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},tx=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,l){var c=l.toLowerCase().split("-"),f=c[0],h=c.slice(1).join("-");if(f&&h==="h")return r.flipX=!0,r;if(f&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(f){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},n)},a2={mixout:function(){return{parse:{transform:function(n){return tx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var l=r.getAttribute("data-fa-transform");return l&&(n.transform=tx(l)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,l=n.transform,c=n.containerWidth,f=n.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),_="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(f/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:we({},S.outer),children:[{tag:"g",attributes:we({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:we(we({},r.icon.attributes),S.path)}]}]}}}},vh={x:0,y:0,width:"100%",height:"100%"};function nx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function r2(a){return a.tag==="g"?a.children:[a]}var s2={hooks:function(){return{parseNodeAttributes:function(n,r){var l=r.getAttribute("data-fa-mask"),c=l?tf(l.split(" ").map(function(f){return f.trim()})):bS();return c.prefix||(c.prefix=Mr()),n.mask=c,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,l=n.attributes,c=n.main,f=n.mask,h=n.maskId,m=n.transform,p=c.width,_=c.icon,v=f.width,g=f.icon,S=QT({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:we(we({},vh),{},{fill:"white"})},w=_.children?{children:_.children.map(nx)}:{},b={tag:"g",attributes:we({},S.inner),children:[nx(we({tag:_.tag,attributes:we(we({},_.attributes),S.path)},w))]},y={tag:"g",attributes:we({},S.outer),children:[b]},P="mask-".concat(h||I_()),F="clip-".concat(h||I_()),N={tag:"mask",attributes:we(we({},vh),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:r2(g)},N]};return r.push(O,{tag:"rect",attributes:we({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(P,")")},vh)}),{children:r,attributes:l}}}},o2={provides:function(e){var n=!1;br.matchMedia&&(n=br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],l={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:we(we({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=we(we({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:we(we({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:we(we({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:we(we({},f),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:we(we({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:we(we({},f),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:we(we({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:we(we({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},l2={hooks:function(){return{parseNodeAttributes:function(n,r){var l=r.getAttribute("data-fa-symbol"),c=l===null?!1:l===""?!0:l;return n.symbol=c,n}}}},c2=[eA,XA,WA,qA,jA,n2,i2,a2,s2,o2,l2];gA(c2,{mixoutsTo:vi});vi.noAuto;var ls=vi.config;vi.library;vi.dom;var DS=vi.parse;vi.findIconDefinition;vi.toHtml;var u2=vi.icon;vi.layer;vi.text;vi.counter;var _h={exports:{}},ml={},xh={exports:{}},yh={};var ix;function f2(){return ix||(ix=1,(function(a){function e(U,G){var te=U.length;U.push(G);e:for(;0<te;){var me=te-1>>>1,Te=U[me];if(0<l(Te,G))U[me]=G,U[te]=Te,te=me;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var G=U[0],te=U.pop();if(te!==G){U[0]=te;e:for(var me=0,Te=U.length,D=Te>>>1;me<D;){var k=2*(me+1)-1,Q=U[k],Me=k+1,Ae=U[Me];if(0>l(Q,te))Me<Te&&0>l(Ae,Q)?(U[me]=Ae,U[Me]=te,me=Me):(U[me]=Q,U[k]=te,me=k);else if(Me<Te&&0>l(Ae,te))U[me]=Ae,U[Me]=te,me=Me;else break e}}return G}function l(U,G){var te=U.sortIndex-G.sortIndex;return te!==0?te:U.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var G=n(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=U)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=n(p)}}function O(U){if(w=!1,N(U),!E)if(n(m)!==null)E=!0,L||(L=!0,Z());else{var G=n(p);G!==null&&J(O,G.startTime-U)}}var L=!1,B=-1,T=5,z=-1;function q(){return b?!0:!(a.unstable_now()-z<T)}function V(){if(b=!1,L){var U=a.unstable_now();z=U;var G=!0;try{e:{E=!1,w&&(w=!1,P(B),B=-1),S=!0;var te=g;try{t:{for(N(U),v=n(m);v!==null&&!(v.expirationTime>U&&q());){var me=v.callback;if(typeof me=="function"){v.callback=null,g=v.priorityLevel;var Te=me(v.expirationTime<=U);if(U=a.unstable_now(),typeof Te=="function"){v.callback=Te,N(U),G=!0;break t}v===n(m)&&r(m),N(U)}else r(m);v=n(m)}if(v!==null)G=!0;else{var D=n(p);D!==null&&J(O,D.startTime-U),G=!1}}break e}finally{v=null,g=te,S=!1}G=void 0}}finally{G?Z():L=!1}}}var Z;if(typeof F=="function")Z=function(){F(V)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,pe=he.port2;he.port1.onmessage=V,Z=function(){pe.postMessage(null)}}else Z=function(){y(V,0)};function J(U,G){B=y(function(){U(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(U){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var te=g;g=G;try{return U()}finally{g=te}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=g;g=U;try{return G()}finally{g=te}},a.unstable_scheduleCallback=function(U,G,te){var me=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?me+te:me):te=me,U){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=te+Te,U={id:_++,callback:G,priorityLevel:U,startTime:te,expirationTime:Te,sortIndex:-1},te>me?(U.sortIndex=te,e(p,U),n(m)===null&&U===n(p)&&(w?(P(B),B=-1):w=!0,J(O,te-me))):(U.sortIndex=Te,e(m,U),E||S||(E=!0,L||(L=!0,Z()))),U},a.unstable_shouldYield=q,a.unstable_wrapCallback=function(U){var G=g;return function(){var te=g;g=G;try{return U.apply(this,arguments)}finally{g=te}}}})(yh)),yh}var ax;function d2(){return ax||(ax=1,xh.exports=f2()),xh.exports}var Sh={exports:{}},Bn={};var rx;function h2(){if(rx)return Bn;rx=1;var a=pm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Bn.requestFormReset=function(m){r.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var sx;function p2(){if(sx)return Sh.exports;sx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Sh.exports=h2(),Sh.exports}var ox;function m2(){if(ox)return ml;ox=1;var a=d2(),e=pm(),n=p2();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===o)return m(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==o.return)s=u,o=d;else{for(var x=!1,C=u.child;C;){if(C===s){x=!0,s=u,o=d;break}if(C===o){x=!0,o=u,s=d;break}C=C.sibling}if(!x){for(C=d.child;C;){if(C===s){x=!0,s=d,o=u;break}if(C===o){x=!0,o=d,s=u;break}C=C.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),F=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var J=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},me=[],Te=-1;function D(t){return{current:t}}function k(t){0>Te||(t.current=me[Te],me[Te]=null,Te--)}function Q(t,i){Te++,me[Te]=t.current,t.current=i}var Me=D(null),Ae=D(null),K=D(null),oe=D(null);function fe(t,i){switch(Q(K,i),Q(Ae,t),Q(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Wv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Wv(i),t=qv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(Me),Q(Me,t)}function Ce(){k(Me),k(Ae),k(K)}function Qe(t){t.memoizedState!==null&&Q(oe,t);var i=Me.current,s=qv(i,t.type);i!==s&&(Q(Ae,t),Q(Me,s))}function ye(t){Ae.current===t&&(k(Me),k(Ae)),oe.current===t&&(k(oe),ul._currentValue=te)}var $e,lt;function ft(t){if($e===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$e=i&&i[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+lt}var pt=!1;function et(t,i){if(!t||pt)return"";pt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(de){var ue=de}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(de){ue=de}t.call(Ee.prototype)}}else{try{throw Error()}catch(de){ue=de}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(de){if(de&&ue&&typeof de.stack=="string")return[de.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],C=d[1];if(x&&C){var H=x.split(`
`),ie=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var xe=`
`+H[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ft(s):""}function Ct(t,i){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==i&&i!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return et(t.type,!1);case 11:return et(t.type.render,!1);case 1:return et(t.type,!0);case 31:return ft("Activity");default:return""}}function Yt(t){try{var i="",s=null;do i+=Ct(t,s),s=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,nn=a.unstable_scheduleCallback,Qt=a.unstable_cancelCallback,ln=a.unstable_shouldYield,Y=a.unstable_requestPaint,Xt=a.unstable_now,Ut=a.unstable_getCurrentPriorityLevel,I=a.unstable_ImmediatePriority,M=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,le=a.unstable_LowPriority,ve=a.unstable_IdlePriority,De=a.log,Oe=a.unstable_setDisableYieldValue,ge=null,_e=null;function Le(t){if(typeof De=="function"&&Oe(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ge,t)}catch{}}var Ge=Math.clz32?Math.clz32:tt,ze=Math.log,Pe=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(ze(t)/Pe|0)|0}var nt=256,ut=262144,W=4194304;function Ne(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=Ne(o):(x&=C,x!==0?u=Ne(x):s||(s=C&~t,s!==0&&(u=Ne(s))))):(C=o&~d,C!==0?u=Ne(C):x!==0?u=Ne(x):s||(s=o&~t,s!==0&&(u=Ne(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ze(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function We(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,i,s,o,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(s=x&~s;0<s;){var xe=31-Ge(s),Ee=1<<xe;C[xe]=0,H[xe]=-1;var ue=ie[xe];if(ue!==null)for(ie[xe]=null,xe=0;xe<ue.length;xe++){var de=ue[xe];de!==null&&(de.lane&=-536870913)}s&=~Ee}o!==0&&zt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~i))}function zt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ge(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ii(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-Ge(s),u=1<<o;u&i|t[o]&i&&(t[o]|=i),s&=~u}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:Eo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function To(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ao(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:m_(t.type))}function hs(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Wi,Dn="__reactProps$"+Wi,jn="__reactContainer$"+Wi,Ar="__reactEvents$"+Wi,Hl="__reactListeners$"+Wi,Gl="__reactHandles$"+Wi,Rr="__reactResources$"+Wi,Ga="__reactMarker$"+Wi;function Va(t){delete t[mn],delete t[Dn],delete t[Ar],delete t[Hl],delete t[Gl]}function oa(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[jn]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Jv(t);t!==null;){if(s=t[mn])return s;t=Jv(t)}return i}t=s,s=t.parentNode}return null}function la(t){if(t=t[mn]||t[jn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Cr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ka(t){var i=t[Rr];return i||(i=t[Rr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gn(t){t[Ga]=!0}var Vl=new Set,R={};function j(t,i){ce(t,i),ce(t+"Capture",i)}function ce(t,i){for(R[t]=i,t=0;t<i.length;t++)Vl.add(i[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Fe={};function Xe(t){return $t.call(Fe,t)?!0:$t.call(se,t)?!1:re.test(t)?Fe[t]=!0:(se[t]=!0,!1)}function Ie(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function qe(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t,i,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Dt(t){if(!t._valueTracker){var i=mt(t)?"checked":"value";t._valueTracker=Je(t,i,""+t[i])}}function rn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=mt(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Bt(t){return t.replace(Ft,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(t,i,s,o,u,d,x,C){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),i!=null?x==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+it(i)):t.value!==""+it(i)&&(t.value=""+it(i)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),i!=null?xt(t,x,it(i)):s!=null?xt(t,x,it(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+it(C):t.removeAttribute("name")}function Fn(t,i,s,o,u,d,x,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Dt(t);return}s=s!=null?""+it(s):"",i=i!=null?""+it(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Dt(t)}function xt(t,i,s){i==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,i,s,o){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ri(t,i,s){if(i!=null&&(i=""+it(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+it(s):""}function Ni(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(r(92));if(J(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=it(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Dt(t)}function si(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||Ht.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Li(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&sn(t,u,o)}else for(var d in i)i.hasOwnProperty(d)&&sn(t,d,i[d])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return Xa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var lf=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ps=null,ms=null;function Xm(t){var i=la(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ve(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Bt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var u=o[Dn]||null;if(!u)throw Error(r(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&rn(o)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Mn(t,!!s.multiple,i,!1)}}}var uf=!1;function Wm(t,i,s){if(uf)return t(i,s);uf=!0;try{var o=t(i);return o}finally{if(uf=!1,(ps!==null||ms!==null)&&(wc(),ps&&(i=ps,t=ms,ms=ps=null,Xm(i),t)))for(i=0;i<t.length;i++)Xm(t[i])}}function Ro(t,i){var s=t.stateNode;if(s===null)return null;var o=s[Dn]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=!1;if(ua)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){ff=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{ff=!1}var Wa=null,df=null,kl=null;function qm(){if(kl)return kl;var t,i=df,s=i.length,o,u="value"in Wa?Wa.value:Wa.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var x=s-t;for(o=1;o<=x&&i[s-o]===u[d-o];o++);return kl=u.slice(t,1<o?1-o:void 0)}function Xl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function jm(){return!1}function Yn(t){function i(s,o,u,d,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wl:jm,this.isPropagationStopped=jm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),i}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Yn(Dr),wo=v({},Dr,{view:0,detail:0}),Mb=Yn(wo),hf,pf,Do,jl=v({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(hf=t.screenX-Do.screenX,pf=t.screenY-Do.screenY):pf=hf=0,Do=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:pf}}),Ym=Yn(jl),Eb=v({},jl,{dataTransfer:0}),Tb=Yn(Eb),Ab=v({},wo,{relatedTarget:0}),mf=Yn(Ab),Rb=v({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=Yn(Rb),wb=v({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Db=Yn(wb),Nb=v({},Dr,{data:0}),Zm=Yn(Nb),Lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pb(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ob[t])?!!i[t]:!1}function gf(){return Pb}var Ib=v({},wo,{key:function(t){if(t.key){var i=Lb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ub[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zb=Yn(Ib),Fb=v({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Yn(Fb),Bb=v({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),Hb=Yn(Bb),Gb=v({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=Yn(Gb),kb=v({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xb=Yn(kb),Wb=v({},Dr,{newState:0,oldState:0}),qb=Yn(Wb),jb=[9,13,27,32],vf=ua&&"CompositionEvent"in window,No=null;ua&&"documentMode"in document&&(No=document.documentMode);var Yb=ua&&"TextEvent"in window&&!No,Qm=ua&&(!vf||No&&8<No&&11>=No),$m=" ",Jm=!1;function eg(t,i){switch(t){case"keyup":return jb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Zb(t,i){switch(t){case"compositionend":return tg(i);case"keypress":return i.which!==32?null:(Jm=!0,$m);case"textInput":return t=i.data,t===$m&&Jm?null:t;default:return null}}function Kb(t,i){if(gs)return t==="compositionend"||!vf&&eg(t,i)?(t=qm(),kl=df=Wa=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qm&&i.locale!=="ko"?null:i.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qb[t.type]:i==="textarea"}function ig(t,i,s,o){ps?ms?ms.push(o):ms=[o]:ps=o,i=Ic(i,"onChange"),0<i.length&&(s=new ql("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var Lo=null,Uo=null;function $b(t){Bv(t,0)}function Yl(t){var i=Cr(t);if(rn(i))return t}function ag(t,i){if(t==="change")return i}var rg=!1;if(ua){var _f;if(ua){var xf="oninput"in document;if(!xf){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),xf=typeof sg.oninput=="function"}_f=xf}else _f=!1;rg=_f&&(!document.documentMode||9<document.documentMode)}function og(){Lo&&(Lo.detachEvent("onpropertychange",lg),Uo=Lo=null)}function lg(t){if(t.propertyName==="value"&&Yl(Uo)){var i=[];ig(i,Uo,t,cf(t)),Wm($b,i)}}function Jb(t,i,s){t==="focusin"?(og(),Lo=i,Uo=s,Lo.attachEvent("onpropertychange",lg)):t==="focusout"&&og()}function e1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Uo)}function t1(t,i){if(t==="click")return Yl(i)}function n1(t,i){if(t==="input"||t==="change")return Yl(i)}function i1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:i1;function Oo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!$t.call(i,u)||!oi(t[u],i[u]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,i){var s=cg(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=cg(s)}}function fg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?fg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Zt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Zt(t.document)}return i}function yf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var a1=ua&&"documentMode"in document&&11>=document.documentMode,vs=null,Sf=null,Po=null,bf=!1;function hg(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;bf||vs==null||vs!==Zt(o)||(o=vs,"selectionStart"in o&&yf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=Ic(Sf,"onSelect"),0<o.length&&(i=new ql("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=vs)))}function Nr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var _s={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Mf={},pg={};ua&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Lr(t){if(Mf[t])return Mf[t];if(!_s[t])return t;var i=_s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in pg)return Mf[t]=i[s];return t}var mg=Lr("animationend"),gg=Lr("animationiteration"),vg=Lr("animationstart"),r1=Lr("transitionrun"),s1=Lr("transitionstart"),o1=Lr("transitioncancel"),_g=Lr("transitionend"),xg=new Map,Ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ef.push("scrollEnd");function Ui(t,i){xg.set(t,i),j(i,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],xs=0,Tf=0;function Kl(){for(var t=xs,i=Tf=xs=0;i<t;){var s=_i[i];_i[i++]=null;var o=_i[i];_i[i++]=null;var u=_i[i];_i[i++]=null;var d=_i[i];if(_i[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&yg(s,u,d)}}function Ql(t,i,s,o){_i[xs++]=t,_i[xs++]=i,_i[xs++]=s,_i[xs++]=o,Tf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Af(t,i,s,o){return Ql(t,i,s,o),$l(t)}function Ur(t,i){return Ql(t,null,null,i),$l(t)}function yg(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ge(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=s|536870912),d):null}function $l(t){if(50<il)throw il=0,Pd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ys={};function l1(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,o){return new l1(t,i,s,o)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Sg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Jl(t,i,s,o,u,d){var x=0;if(o=t,typeof t=="function")Rf(t)&&(x=1);else if(typeof t=="string")x=hM(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=li(31,s,i,u),t.elementType=z,t.lanes=d,t;case w:return Or(s.children,u,d,i);case b:x=8,u|=24;break;case y:return t=li(12,s,i,u|2),t.elementType=y,t.lanes=d,t;case O:return t=li(13,s,i,u),t.elementType=O,t.lanes=d,t;case L:return t=li(19,s,i,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break e;case P:x=9;break e;case N:x=11;break e;case B:x=14;break e;case T:x=16,o=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),o=null}return i=li(x,s,i,u),i.elementType=t,i.type=o,i.lanes=d,i}function Or(t,i,s,o){return t=li(7,t,o,i),t.lanes=s,t}function Cf(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function bg(t){var i=li(18,null,null,0);return i.stateNode=t,i}function wf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Mg=new WeakMap;function xi(t,i){if(typeof t=="object"&&t!==null){var s=Mg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Yt(i)},Mg.set(t,i),i)}return{value:t,source:i,stack:Yt(i)}}var Ss=[],bs=0,ec=null,Io=0,yi=[],Si=0,qa=null,ji=1,Yi="";function da(t,i){Ss[bs++]=Io,Ss[bs++]=ec,ec=t,Io=i}function Eg(t,i,s){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=qa,qa=t;var o=ji;t=Yi;var u=32-Ge(o)-1;o&=~(1<<u),s+=1;var d=32-Ge(i)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ji=1<<32-Ge(i)+u|s<<u|o,Yi=d+t}else ji=1<<d|s<<u|o,Yi=t}function Df(t){t.return!==null&&(da(t,1),Eg(t,1,0))}function Nf(t){for(;t===ec;)ec=Ss[--bs],Ss[bs]=null,Io=Ss[--bs],Ss[bs]=null;for(;t===qa;)qa=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null,ji=yi[--Si],yi[Si]=null}function Tg(t,i){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=qa,ji=i.id,Yi=i.overflow,qa=t}var Nn=null,Jt=null,Tt=!1,ja=null,bi=!1,Lf=Error(r(519));function Ya(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(xi(i,t)),Lf}function Ag(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[mn]=t,i[Dn]=o,s){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(s=0;s<rl.length;s++)St(rl[s],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":St("invalid",i),Fn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",i);break;case"textarea":St("invalid",i),Ni(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||kv(i.textContent,s)?(o.popover!=null&&(St("beforetoggle",i),St("toggle",i)),o.onScroll!=null&&St("scroll",i),o.onScrollEnd!=null&&St("scrollend",i),o.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||Ya(t,!0)}function Rg(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Ms(t){if(t!==Nn)return!1;if(!Tt)return Rg(t),Tt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Kd(t.type,t.memoizedProps)),s=!s),s&&Jt&&Ya(t),Rg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=$v(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=$v(t)}else i===27?(i=Jt,lr(t.type)?(t=th,th=null,Jt=t):Jt=i):Jt=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Pr(){Jt=Nn=null,Tt=!1}function Uf(){var t=ja;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),ja=null),t}function zo(t){ja===null?ja=[t]:ja.push(t)}var Of=D(null),Ir=null,ha=null;function Za(t,i,s){Q(Of,i._currentValue),i._currentValue=s}function pa(t){t._currentValue=Of.current,k(Of)}function Pf(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function If(t,i,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=u;for(var H=0;H<i.length;H++)if(C.context===i[H]){d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),Pf(d.return,s,t),o||(x=null);break e}d=C.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Pf(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Es(t,i,s,o){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var C=u.type;oi(u.pendingProps.value,x.value)||(t!==null?t.push(C):t=[C])}}else if(u===oe.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}u=u.return}t!==null&&If(i,t,s,o),i.flags|=262144}function tc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Ir=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Cg(Ir,t)}function nc(t,i){return Ir===null&&zr(t),Cg(t,i)}function Cg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(r(308));ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ha=ha.next=i;return s}var c1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},u1=a.unstable_scheduleCallback,f1=a.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zf(){return{controller:new c1,data:new Map,refCount:0}}function Fo(t){t.refCount--,t.refCount===0&&u1(f1,function(){t.controller.abort()})}var Bo=null,Ff=0,Ts=0,As=null;function d1(t,i){if(Bo===null){var s=Bo=[];Ff=0,Ts=Gd(),As={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Ff++,i.then(wg,wg),i}function wg(){if(--Ff===0&&Bo!==null){As!==null&&(As.status="fulfilled");var t=Bo;Bo=null,Ts=0,As=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function h1(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Dg=U.S;U.S=function(t,i){hv=Xt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&d1(t,i),Dg!==null&&Dg(t,i)};var Fr=D(null);function Bf(){var t=Fr.current;return t!==null?t:Kt.pooledCache}function ic(t,i){i===null?Q(Fr,Fr.current):Q(Fr,i.pool)}function Ng(){var t=Bf();return t===null?null:{parent:vn._currentValue,pool:t}}var Rs=Error(r(460)),Hf=Error(r(474)),ac=Error(r(542)),rc={then:function(){}};function Lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ug(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pg(t),t;default:if(typeof i.status=="string")i.then(ca,ca);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pg(t),t}throw Hr=i,Rs}}function Br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hr=s,Rs):s}}var Hr=null;function Og(){if(Hr===null)throw Error(r(459));var t=Hr;return Hr=null,t}function Pg(t){if(t===Rs||t===ac)throw Error(r(483))}var Cs=null,Ho=0;function sc(t){var i=Ho;return Ho+=1,Cs===null&&(Cs=[]),Ug(Cs,t,i)}function Go(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function oc(t,i){throw i.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ig(t){function i($,X){if(t){var ne=$.deletions;ne===null?($.deletions=[X],$.flags|=16):ne.push(X)}}function s($,X){if(!t)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function o($){for(var X=new Map;$!==null;)$.key!==null?X.set($.key,$):X.set($.index,$),$=$.sibling;return X}function u($,X){return $=fa($,X),$.index=0,$.sibling=null,$}function d($,X,ne){return $.index=ne,t?(ne=$.alternate,ne!==null?(ne=ne.index,ne<X?($.flags|=67108866,X):ne):($.flags|=67108866,X)):($.flags|=1048576,X)}function x($){return t&&$.alternate===null&&($.flags|=67108866),$}function C($,X,ne,be){return X===null||X.tag!==6?(X=Cf(ne,$.mode,be),X.return=$,X):(X=u(X,ne),X.return=$,X)}function H($,X,ne,be){var at=ne.type;return at===w?xe($,X,ne.props.children,be,ne.key):X!==null&&(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&Br(at)===X.type)?(X=u(X,ne.props),Go(X,ne),X.return=$,X):(X=Jl(ne.type,ne.key,ne.props,null,$.mode,be),Go(X,ne),X.return=$,X)}function ie($,X,ne,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=wf(ne,$.mode,be),X.return=$,X):(X=u(X,ne.children||[]),X.return=$,X)}function xe($,X,ne,be,at){return X===null||X.tag!==7?(X=Or(ne,$.mode,be,at),X.return=$,X):(X=u(X,ne),X.return=$,X)}function Ee($,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cf(""+X,$.mode,ne),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ne=Jl(X.type,X.key,X.props,null,$.mode,ne),Go(ne,X),ne.return=$,ne;case E:return X=wf(X,$.mode,ne),X.return=$,X;case T:return X=Br(X),Ee($,X,ne)}if(J(X)||Z(X))return X=Or(X,$.mode,ne,null),X.return=$,X;if(typeof X.then=="function")return Ee($,sc(X),ne);if(X.$$typeof===F)return Ee($,nc($,X),ne);oc($,X)}return null}function ue($,X,ne,be){var at=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return at!==null?null:C($,X,""+ne,be);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ne.key===at?H($,X,ne,be):null;case E:return ne.key===at?ie($,X,ne,be):null;case T:return ne=Br(ne),ue($,X,ne,be)}if(J(ne)||Z(ne))return at!==null?null:xe($,X,ne,be,null);if(typeof ne.then=="function")return ue($,X,sc(ne),be);if(ne.$$typeof===F)return ue($,X,nc($,ne),be);oc($,ne)}return null}function de($,X,ne,be,at){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return $=$.get(ne)||null,C(X,$,""+be,at);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case S:return $=$.get(be.key===null?ne:be.key)||null,H(X,$,be,at);case E:return $=$.get(be.key===null?ne:be.key)||null,ie(X,$,be,at);case T:return be=Br(be),de($,X,ne,be,at)}if(J(be)||Z(be))return $=$.get(ne)||null,xe(X,$,be,at,null);if(typeof be.then=="function")return de($,X,ne,sc(be),at);if(be.$$typeof===F)return de($,X,ne,nc(X,be),at);oc(X,be)}return null}function Ye($,X,ne,be){for(var at=null,Nt=null,Ke=X,vt=X=0,Mt=null;Ke!==null&&vt<ne.length;vt++){Ke.index>vt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Lt=ue($,Ke,ne[vt],be);if(Lt===null){Ke===null&&(Ke=Mt);break}t&&Ke&&Lt.alternate===null&&i($,Ke),X=d(Lt,X,vt),Nt===null?at=Lt:Nt.sibling=Lt,Nt=Lt,Ke=Mt}if(vt===ne.length)return s($,Ke),Tt&&da($,vt),at;if(Ke===null){for(;vt<ne.length;vt++)Ke=Ee($,ne[vt],be),Ke!==null&&(X=d(Ke,X,vt),Nt===null?at=Ke:Nt.sibling=Ke,Nt=Ke);return Tt&&da($,vt),at}for(Ke=o(Ke);vt<ne.length;vt++)Mt=de(Ke,$,vt,ne[vt],be),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?vt:Mt.key),X=d(Mt,X,vt),Nt===null?at=Mt:Nt.sibling=Mt,Nt=Mt);return t&&Ke.forEach(function(hr){return i($,hr)}),Tt&&da($,vt),at}function ot($,X,ne,be){if(ne==null)throw Error(r(151));for(var at=null,Nt=null,Ke=X,vt=X=0,Mt=null,Lt=ne.next();Ke!==null&&!Lt.done;vt++,Lt=ne.next()){Ke.index>vt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var hr=ue($,Ke,Lt.value,be);if(hr===null){Ke===null&&(Ke=Mt);break}t&&Ke&&hr.alternate===null&&i($,Ke),X=d(hr,X,vt),Nt===null?at=hr:Nt.sibling=hr,Nt=hr,Ke=Mt}if(Lt.done)return s($,Ke),Tt&&da($,vt),at;if(Ke===null){for(;!Lt.done;vt++,Lt=ne.next())Lt=Ee($,Lt.value,be),Lt!==null&&(X=d(Lt,X,vt),Nt===null?at=Lt:Nt.sibling=Lt,Nt=Lt);return Tt&&da($,vt),at}for(Ke=o(Ke);!Lt.done;vt++,Lt=ne.next())Lt=de(Ke,$,vt,Lt.value,be),Lt!==null&&(t&&Lt.alternate!==null&&Ke.delete(Lt.key===null?vt:Lt.key),X=d(Lt,X,vt),Nt===null?at=Lt:Nt.sibling=Lt,Nt=Lt);return t&&Ke.forEach(function(EM){return i($,EM)}),Tt&&da($,vt),at}function jt($,X,ne,be){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:e:{for(var at=ne.key;X!==null;){if(X.key===at){if(at=ne.type,at===w){if(X.tag===7){s($,X.sibling),be=u(X,ne.props.children),be.return=$,$=be;break e}}else if(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&Br(at)===X.type){s($,X.sibling),be=u(X,ne.props),Go(be,ne),be.return=$,$=be;break e}s($,X);break}else i($,X);X=X.sibling}ne.type===w?(be=Or(ne.props.children,$.mode,be,ne.key),be.return=$,$=be):(be=Jl(ne.type,ne.key,ne.props,null,$.mode,be),Go(be,ne),be.return=$,$=be)}return x($);case E:e:{for(at=ne.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){s($,X.sibling),be=u(X,ne.children||[]),be.return=$,$=be;break e}else{s($,X);break}else i($,X);X=X.sibling}be=wf(ne,$.mode,be),be.return=$,$=be}return x($);case T:return ne=Br(ne),jt($,X,ne,be)}if(J(ne))return Ye($,X,ne,be);if(Z(ne)){if(at=Z(ne),typeof at!="function")throw Error(r(150));return ne=at.call(ne),ot($,X,ne,be)}if(typeof ne.then=="function")return jt($,X,sc(ne),be);if(ne.$$typeof===F)return jt($,X,nc($,ne),be);oc($,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(s($,X.sibling),be=u(X,ne),be.return=$,$=be):(s($,X),be=Cf(ne,$.mode,be),be.return=$,$=be),x($)):s($,X)}return function($,X,ne,be){try{Ho=0;var at=jt($,X,ne,be);return Cs=null,at}catch(Ke){if(Ke===Rs||Ke===ac)throw Ke;var Nt=li(29,Ke,null,$.mode);return Nt.lanes=be,Nt.return=$,Nt}}}var Gr=Ig(!0),zg=Ig(!1),Ka=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=$l(t),yg(t,null,s),i}return Ql(t,o,i,s),$l(t)}function Vo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ii(t,s)}}function kf(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Xf=!1;function ko(){if(Xf){var t=As;if(t!==null)throw t}}function Xo(t,i,s,o){Xf=!1;var u=t.updateQueue;Ka=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ie=H.next;H.next=null,x===null?d=ie:x.next=ie,x=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,C=xe.lastBaseUpdate,C!==x&&(C===null?xe.firstBaseUpdate=ie:C.next=ie,xe.lastBaseUpdate=H))}if(d!==null){var Ee=u.baseState;x=0,xe=ie=H=null,C=d;do{var ue=C.lane&-536870913,de=ue!==C.lane;if(de?(bt&ue)===ue:(o&ue)===ue){ue!==0&&ue===Ts&&(Xf=!0),xe!==null&&(xe=xe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ye=t,ot=C;ue=i;var jt=s;switch(ot.tag){case 1:if(Ye=ot.payload,typeof Ye=="function"){Ee=Ye.call(jt,Ee,ue);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=ot.payload,ue=typeof Ye=="function"?Ye.call(jt,Ee,ue):Ye,ue==null)break e;Ee=v({},Ee,ue);break e;case 2:Ka=!0}}ue=C.callback,ue!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ue]:de.push(ue))}else de={lane:ue,tag:C.tag,payload:C.payload,callback:C.callback,next:null},xe===null?(ie=xe=de,H=Ee):xe=xe.next=de,x|=ue;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;de=C,C=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);xe===null&&(H=Ee),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=xe,d===null&&(u.shared.lanes=0),ir|=x,t.lanes=x,t.memoizedState=Ee}}function Fg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Bg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Fg(s[t],i)}var ws=D(null),lc=D(0);function Hg(t,i){t=Ma,Q(lc,t),Q(ws,i),Ma=t|i.baseLanes}function Wf(){Q(lc,Ma),Q(ws,ws.current)}function qf(){Ma=lc.current,k(ws),k(lc)}var ci=D(null),Mi=null;function Ja(t){var i=t.alternate;Q(hn,hn.current&1),Q(ci,t),Mi===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(Mi=t)}function jf(t){Q(hn,hn.current),Q(ci,t),Mi===null&&(Mi=t)}function Gg(t){t.tag===22?(Q(hn,hn.current),Q(ci,t),Mi===null&&(Mi=t)):er()}function er(){Q(hn,hn.current),Q(ci,ci.current)}function ui(t){k(ci),Mi===t&&(Mi=null),k(hn)}var hn=D(0);function cc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Jd(s)||eh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,gt=null,Wt=null,_n=null,uc=!1,Ds=!1,Vr=!1,fc=0,Wo=0,Ns=null,p1=0;function cn(){throw Error(r(321))}function Yf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function Zf(t,i,s,o,u,d){return ma=d,gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,U.H=t===null||t.memoizedState===null?E0:ud,Vr=!1,d=s(o,u),Vr=!1,Ds&&(d=kg(i,s,o,u)),Vg(t),d}function Vg(t){U.H=Yo;var i=Wt!==null&&Wt.next!==null;if(ma=0,_n=Wt=gt=null,uc=!1,Wo=0,Ns=null,i)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&tc(t)&&(xn=!0))}function kg(t,i,s,o){gt=t;var u=0;do{if(Ds&&(Ns=null),Wo=0,Ds=!1,25<=u)throw Error(r(301));if(u+=1,_n=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=T0,d=i(s,o)}while(Ds);return d}function m1(){var t=U.H,i=t.useState()[0];return i=typeof i.then=="function"?qo(i):i,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(gt.flags|=1024),i}function Kf(){var t=fc!==0;return fc=0,t}function Qf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function $f(t){if(uc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uc=!1}ma=0,_n=Wt=gt=null,Ds=!1,Wo=fc=0,Ns=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?gt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Wt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=_n===null?gt.memoizedState:_n.next;if(i!==null)_n=i,Wt=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},_n===null?gt.memoizedState=_n=t:_n=_n.next=t}return _n}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(t){var i=Wo;return Wo+=1,Ns===null&&(Ns=[]),t=Ug(Ns,t,i),i=gt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,U.H=i===null||i.memoizedState===null?E0:ud),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qo(t);if(t.$$typeof===F)return Ln(t)}throw Error(r(438,String(t)))}function Jf(t){var i=null,s=gt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=dc(),gt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=q;return i.index++,s}function ga(t,i){return typeof i=="function"?i(t):i}function pc(t){var i=pn();return ed(i,Wt,t)}function ed(t,i,s){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}i.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var C=x=null,H=null,ie=i,xe=!1;do{var Ee=ie.lane&-536870913;if(Ee!==ie.lane?(bt&Ee)===Ee:(ma&Ee)===Ee){var ue=ie.revertLane;if(ue===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Ee===Ts&&(xe=!0);else if((ma&ue)===ue){ie=ie.next,ue===Ts&&(xe=!0);continue}else Ee={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=Ee,x=d):H=H.next=Ee,gt.lanes|=ue,ir|=ue;Ee=ie.action,Vr&&s(d,Ee),d=ie.hasEagerState?ie.eagerState:s(d,Ee)}else ue={lane:Ee,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=ue,x=d):H=H.next=ue,gt.lanes|=Ee,ir|=Ee;ie=ie.next}while(ie!==null&&ie!==i);if(H===null?x=d:H.next=C,!oi(d,t.memoizedState)&&(xn=!0,xe&&(s=As,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function td(t){var i=pn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);oi(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function Xg(t,i,s){var o=gt,u=pn(),d=Tt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var x=!oi((Wt||u).memoizedState,s);if(x&&(u.memoizedState=s,xn=!0),u=u.queue,ad(jg.bind(null,o,u,t),[t]),u.getSnapshot!==i||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Ls(9,{destroy:void 0},qg.bind(null,o,u,s,i),null),Kt===null)throw Error(r(349));d||(ma&127)!==0||Wg(o,i,s)}return s}function Wg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=gt.updateQueue,i===null?(i=dc(),gt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function qg(t,i,s,o){i.value=s,i.getSnapshot=o,Yg(i)&&Zg(t)}function jg(t,i,s){return s(function(){Yg(i)&&Zg(t)})}function Yg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function Zg(t){var i=Ur(t,2);i!==null&&Jn(i,t,2)}function nd(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Vr){Le(!0);try{s()}finally{Le(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i}function Kg(t,i,s,o){return t.baseState=s,ed(t,Wt,typeof o=="function"?o:ga)}function g1(t,i,s,o,u){if(vc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};U.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,Qg(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Qg(t,i){var s=i.action,o=i.payload,u=t.state;if(i.isTransition){var d=U.T,x={};U.T=x;try{var C=s(u,o),H=U.S;H!==null&&H(x,C),$g(t,i,C)}catch(ie){id(t,i,ie)}finally{d!==null&&x.types!==null&&(d.types=x.types),U.T=d}}else try{d=s(u,o),$g(t,i,d)}catch(ie){id(t,i,ie)}}function $g(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Jg(t,i,o)},function(o){return id(t,i,o)}):Jg(t,i,s)}function Jg(t,i,s){i.status="fulfilled",i.value=s,e0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Qg(t,s)))}function id(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,e0(i),i=i.next;while(i!==o)}t.action=null}function e0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function t0(t,i){return i}function n0(t,i){if(Tt){var s=Kt.formState;if(s!==null){e:{var o=gt;if(Tt){if(Jt){t:{for(var u=Jt,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Jt=Ei(u.nextSibling),o=u.data==="F!";break e}}Ya(o)}o=!1}o&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t0,lastRenderedState:i},s.queue=o,s=S0.bind(null,gt,o),o.dispatch=s,o=nd(!1),d=cd.bind(null,gt,!1,o.queue),o=kn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,s=g1.bind(null,gt,u,d,s),u.dispatch=s,o.memoizedState=t,[i,s,!1]}function i0(t){var i=pn();return a0(i,Wt,t)}function a0(t,i,s){if(i=ed(t,i,t0)[0],t=pc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=qo(i)}catch(x){throw x===Rs?ac:x}else o=i;i=pn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(gt.flags|=2048,Ls(9,{destroy:void 0},v1.bind(null,u,s),null)),[o,d,t]}function v1(t,i){t.action=i}function r0(t){var i=pn(),s=Wt;if(s!==null)return a0(i,s,t);pn(),i=i.memoizedState,s=pn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function Ls(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=gt.updateQueue,i===null&&(i=dc(),gt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function s0(){return pn().memoizedState}function mc(t,i,s,o){var u=kn();gt.flags|=t,u.memoizedState=Ls(1|i,{destroy:void 0},s,o===void 0?null:o)}function gc(t,i,s,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&Yf(o,Wt.memoizedState.deps)?u.memoizedState=Ls(i,d,s,o):(gt.flags|=t,u.memoizedState=Ls(1|i,d,s,o))}function o0(t,i){mc(8390656,8,t,i)}function ad(t,i){gc(2048,8,t,i)}function _1(t){gt.flags|=4;var i=gt.updateQueue;if(i===null)i=dc(),gt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function l0(t){var i=pn().memoizedState;return _1({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function c0(t,i){return gc(4,2,t,i)}function u0(t,i){return gc(4,4,t,i)}function f0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function d0(t,i,s){s=s!=null?s.concat([t]):null,gc(4,4,f0.bind(null,i,t),s)}function rd(){}function h0(t,i){var s=pn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Yf(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function p0(t,i){var s=pn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Yf(i,o[1]))return o[0];if(o=t(),Vr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[o,i],o}function sd(t,i,s){return s===void 0||(ma&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=mv(),gt.lanes|=t,ir|=t,s)}function m0(t,i,s,o){return oi(s,i)?s:ws.current!==null?(t=sd(t,s,o),oi(t,i)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=s):(t=mv(),gt.lanes|=t,ir|=t,i)}function g0(t,i,s,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var x=U.T,C={};U.T=C,cd(t,!1,i,s);try{var H=u(),ie=U.S;if(ie!==null&&ie(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xe=h1(H,o);jo(t,i,xe,hi(t))}else jo(t,i,o,hi(t))}catch(Ee){jo(t,i,{then:function(){},status:"rejected",reason:Ee},hi())}finally{G.p=d,x!==null&&C.types!==null&&(x.types=C.types),U.T=x}}function x1(){}function od(t,i,s,o){if(t.tag!==5)throw Error(r(476));var u=v0(t).queue;g0(t,u,i,te,s===null?x1:function(){return _0(t),s(o)})}function v0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:te},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _0(t){var i=v0(t);i.next===null&&(i=t.alternate.memoizedState),jo(t,i.next.queue,{},hi())}function ld(){return Ln(ul)}function x0(){return pn().memoizedState}function y0(){return pn().memoizedState}function y1(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=Qa(s);var o=$a(i,t,s);o!==null&&(Jn(o,i,s),Vo(o,i,s)),i={cache:zf()},t.payload=i;return}i=i.return}}function S1(t,i,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(t)?b0(i,s):(s=Af(t,i,s,o),s!==null&&(Jn(s,t,o),M0(s,i,o)))}function S0(t,i,s){var o=hi();jo(t,i,s,o)}function jo(t,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(t))b0(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,C=d(x,s);if(u.hasEagerState=!0,u.eagerState=C,oi(C,x))return Ql(t,i,u,0),Kt===null&&Kl(),!1}catch{}if(s=Af(t,i,u,o),s!==null)return Jn(s,t,o),M0(s,i,o),!0}return!1}function cd(t,i,s,o){if(o={lane:2,revertLane:Gd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vc(t)){if(i)throw Error(r(479))}else i=Af(t,s,o,2),i!==null&&Jn(i,t,2)}function vc(t){var i=t.alternate;return t===gt||i!==null&&i===gt}function b0(t,i){Ds=uc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function M0(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ii(t,s)}}var Yo={readContext:Ln,use:hc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Yo.useEffectEvent=cn;var E0={readContext:Ln,use:hc,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:o0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,mc(4194308,4,f0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return mc(4194308,4,t,i)},useInsertionEffect:function(t,i){mc(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var o=t();if(Vr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=kn();if(s!==void 0){var u=s(i);if(Vr){Le(!0);try{s(i)}finally{Le(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=S1.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=nd(t);var i=t.queue,s=S0.bind(null,gt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:rd,useDeferredValue:function(t,i){var s=kn();return sd(s,t,i)},useTransition:function(){var t=nd(!1);return t=g0.bind(null,gt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=gt,u=kn();if(Tt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Kt===null)throw Error(r(349));(bt&127)!==0||Wg(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,o0(jg.bind(null,o,d,t),[t]),o.flags|=2048,Ls(9,{destroy:void 0},qg.bind(null,o,d,s,i),null),s},useId:function(){var t=kn(),i=Kt.identifierPrefix;if(Tt){var s=Yi,o=ji;s=(o&~(1<<32-Ge(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=p1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:ld,useFormState:n0,useActionState:n0,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=cd.bind(null,gt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Jf,useCacheRefresh:function(){return kn().memoizedState=y1.bind(null,gt)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((Ot&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},ud={readContext:Ln,use:hc,useCallback:h0,useContext:Ln,useEffect:ad,useImperativeHandle:d0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:pc,useRef:s0,useState:function(){return pc(ga)},useDebugValue:rd,useDeferredValue:function(t,i){var s=pn();return m0(s,Wt.memoizedState,t,i)},useTransition:function(){var t=pc(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),i]},useSyncExternalStore:Xg,useId:x0,useHostTransitionStatus:ld,useFormState:i0,useActionState:i0,useOptimistic:function(t,i){var s=pn();return Kg(s,Wt,t,i)},useMemoCache:Jf,useCacheRefresh:y0};ud.useEffectEvent=l0;var T0={readContext:Ln,use:hc,useCallback:h0,useContext:Ln,useEffect:ad,useImperativeHandle:d0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:td,useRef:s0,useState:function(){return td(ga)},useDebugValue:rd,useDeferredValue:function(t,i){var s=pn();return Wt===null?sd(s,t,i):m0(s,Wt.memoizedState,t,i)},useTransition:function(){var t=td(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),i]},useSyncExternalStore:Xg,useId:x0,useHostTransitionStatus:ld,useFormState:r0,useActionState:r0,useOptimistic:function(t,i){var s=pn();return Wt!==null?Kg(s,Wt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Jf,useCacheRefresh:y0};T0.useEffectEvent=l0;function fd(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var dd={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.payload=i,s!=null&&(u.callback=s),i=$a(t,u,o),i!==null&&(Jn(i,t,o),Vo(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=$a(t,u,o),i!==null&&(Jn(i,t,o),Vo(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),o=Qa(s);o.tag=2,i!=null&&(o.callback=i),i=$a(t,o,s),i!==null&&(Jn(i,t,s),Vo(i,t,s))}};function A0(t,i,s,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):i.prototype&&i.prototype.isPureReactComponent?!Oo(s,o)||!Oo(u,d):!0}function R0(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&dd.enqueueReplaceState(i,i.state,null)}function kr(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function C0(t){Zl(t)}function w0(t){console.error(t)}function D0(t){Zl(t)}function _c(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function N0(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hd(t,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(t,i)},s}function L0(t){return t=Qa(t),t.tag=3,t}function U0(t,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){N0(i,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){N0(i,s,o),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function b1(t,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&Es(i,s,u,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Dc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===rc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Fd(t,o,u)),!1;case 22:return s.flags|=65536,o===rc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Fd(t,o,u)),!1}throw Error(r(435,s.tag))}return Fd(t,o,u),Dc(),!1}if(Tt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Lf&&(t=Error(r(422),{cause:o}),zo(xi(t,s)))):(o!==Lf&&(i=Error(r(423),{cause:o}),zo(xi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,s),u=hd(t.stateNode,o,u),kf(t,u),un!==4&&(un=2)),!1;var d=Error(r(520),{cause:o});if(d=xi(d,s),nl===null?nl=[d]:nl.push(d),un!==4&&(un=2),i===null)return!0;o=xi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=hd(s.stateNode,o,t),kf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=L0(u),U0(u,t,s,o),kf(s,u),!1}s=s.return}while(s!==null);return!1}var pd=Error(r(461)),xn=!1;function Un(t,i,s,o){i.child=t===null?zg(i,null,s,o):Gr(i,t.child,s,o)}function O0(t,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var x={};for(var C in o)C!=="ref"&&(x[C]=o[C])}else x=o;return zr(i),o=Zf(t,i,s,x,d,u),C=Kf(),t!==null&&!xn?(Qf(t,i,u),va(t,i,u)):(Tt&&C&&Df(i),i.flags|=1,Un(t,i,o,u),i.child)}function P0(t,i,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!Rf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,I0(t,i,d,o,u)):(t=Jl(s.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!bd(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(x,o)&&t.ref===i.ref)return va(t,i,u)}return i.flags|=1,t=fa(d,o),t.ref=i.ref,t.return=i,i.child=t}function I0(t,i,s,o,u){if(t!==null){var d=t.memoizedProps;if(Oo(d,o)&&t.ref===i.ref)if(xn=!1,i.pendingProps=o=d,bd(t,u))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,va(t,i,u)}return md(t,i,s,o,u)}function z0(t,i,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=i.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return F0(t,i,d,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(i,d!==null?d.cachePool:null),d!==null?Hg(i,d):Wf(),Gg(i);else return o=i.lanes=536870912,F0(t,i,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(ic(i,d.cachePool),Hg(i,d),er(),i.memoizedState=null):(t!==null&&ic(i,null),Wf(),er());return Un(t,i,u,s),i.child}function Zo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function F0(t,i,s,o,u){var d=Bf();return d=d===null?null:{parent:vn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ic(i,null),Wf(),Gg(i),t!==null&&Es(t,i,o,!0),i.childLanes=u,null}function xc(t,i){return i=Sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function B0(t,i,s){return Gr(i,t.child,null,s),t=xc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function M1(t,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=xc(i,o),i.lanes=536870912,Zo(null,t);if(jf(i),(t=Jt)?(t=Qv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=bg(t),s.return=i,i.child=s,Nn=i,Jt=null)):t=null,t===null)throw Ya(i);return i.lanes=536870912,null}return xc(i,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(jf(i),u)if(i.flags&256)i.flags&=-257,i=B0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(xn||Es(t,i,s,!1),u=(s&t.childLanes)!==0,xn||u){if(o=Kt,o!==null&&(x=ai(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ur(t,x),Jn(o,t,x),pd;Dc(),i=B0(t,i,s)}else t=d.treeContext,Jt=Ei(x.nextSibling),Nn=i,Tt=!0,ja=null,bi=!1,t!==null&&Tg(i,t),i=xc(i,o),i.flags|=4096;return i}return t=fa(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function yc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function md(t,i,s,o,u){return zr(i),s=Zf(t,i,s,o,void 0,u),o=Kf(),t!==null&&!xn?(Qf(t,i,u),va(t,i,u)):(Tt&&o&&Df(i),i.flags|=1,Un(t,i,s,u),i.child)}function H0(t,i,s,o,u,d){return zr(i),i.updateQueue=null,s=kg(i,o,s,u),Vg(t),o=Kf(),t!==null&&!xn?(Qf(t,i,d),va(t,i,d)):(Tt&&o&&Df(i),i.flags|=1,Un(t,i,s,d),i.child)}function G0(t,i,s,o,u){if(zr(i),i.stateNode===null){var d=ys,x=s.contextType;typeof x=="object"&&x!==null&&(d=Ln(x)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=dd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Gf(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?Ln(x):ys,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(fd(i,s,x,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&dd.enqueueReplaceState(d,d.state,null),Xo(i,o,d,u),ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,H=kr(s,C);d.props=H;var ie=d.context,xe=s.contextType;x=ys,typeof xe=="object"&&xe!==null&&(x=Ln(xe));var Ee=s.getDerivedStateFromProps;xe=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ie!==x)&&R0(i,d,o,x),Ka=!1;var ue=i.memoizedState;d.state=ue,Xo(i,o,d,u),ko(),ie=i.memoizedState,C||ue!==ie||Ka?(typeof Ee=="function"&&(fd(i,s,Ee,o),ie=i.memoizedState),(H=Ka||A0(i,s,H,o,ue,ie,x))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ie),d.props=o,d.state=ie,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Vf(t,i),x=i.memoizedProps,xe=kr(s,x),d.props=xe,Ee=i.pendingProps,ue=d.context,ie=s.contextType,H=ys,typeof ie=="object"&&ie!==null&&(H=Ln(ie)),C=s.getDerivedStateFromProps,(ie=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Ee||ue!==H)&&R0(i,d,o,H),Ka=!1,ue=i.memoizedState,d.state=ue,Xo(i,o,d,u),ko();var de=i.memoizedState;x!==Ee||ue!==de||Ka||t!==null&&t.dependencies!==null&&tc(t.dependencies)?(typeof C=="function"&&(fd(i,s,C,o),de=i.memoizedState),(xe=Ka||A0(i,s,xe,o,ue,de,H)||t!==null&&t.dependencies!==null&&tc(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,de,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,de,H)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=de),d.props=o,d.state=de,d.context=H,o=xe):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,yc(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=Gr(i,t.child,null,u),i.child=Gr(i,null,s,u)):Un(t,i,s,u),i.memoizedState=d.state,t=i.child):t=va(t,i,u),t}function V0(t,i,s,o){return Pr(),i.flags|=256,Un(t,i,s,o),i.child}var gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vd(t){return{baseLanes:t,cachePool:Ng()}}function _d(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function k0(t,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(u?Ja(i):er(),(t=Jt)?(t=Qv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=bg(t),s.return=i,i.child=s,Nn=i,Jt=null)):t=null,t===null)throw Ya(i);return eh(t)?i.lanes=32:i.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(er(),u=i.mode,C=Sc({mode:"hidden",children:C},u),o=Or(o,u,s,null),C.return=i,o.return=i,C.sibling=o,i.child=C,o=i.child,o.memoizedState=vd(s),o.childLanes=_d(t,x,s),i.memoizedState=gd,Zo(null,o)):(Ja(i),xd(i,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(d)i.flags&256?(Ja(i),i.flags&=-257,i=yd(t,i,s)):i.memoizedState!==null?(er(),i.child=t.child,i.flags|=128,i=null):(er(),C=o.fallback,u=i.mode,o=Sc({mode:"visible",children:o.children},u),C=Or(C,u,s,null),C.flags|=2,o.return=i,C.return=i,o.sibling=C,i.child=o,Gr(i,t.child,null,s),o=i.child,o.memoizedState=vd(s),o.childLanes=_d(t,x,s),i.memoizedState=gd,i=Zo(null,o));else if(Ja(i),eh(C)){if(x=C.nextSibling&&C.nextSibling.dataset,x)var ie=x.dgst;x=ie,o=Error(r(419)),o.stack="",o.digest=x,zo({value:o,source:null,stack:null}),i=yd(t,i,s)}else if(xn||Es(t,i,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=Kt,x!==null&&(o=ai(x,s),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ur(t,o),Jn(x,t,o),pd;Jd(C)||Dc(),i=yd(t,i,s)}else Jd(C)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,Jt=Ei(C.nextSibling),Nn=i,Tt=!0,ja=null,bi=!1,t!==null&&Tg(i,t),i=xd(i,o.children),i.flags|=4096);return i}return u?(er(),C=o.fallback,u=i.mode,H=t.child,ie=H.sibling,o=fa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?C=fa(ie,C):(C=Or(C,u,s,null),C.flags|=2),C.return=i,o.return=i,o.sibling=C,i.child=o,Zo(null,o),o=i.child,C=t.child.memoizedState,C===null?C=vd(s):(u=C.cachePool,u!==null?(H=vn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Ng(),C={baseLanes:C.baseLanes|s,cachePool:u}),o.memoizedState=C,o.childLanes=_d(t,x,s),i.memoizedState=gd,Zo(t.child,o)):(Ja(i),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(x=i.deletions,x===null?(i.deletions=[t],i.flags|=16):x.push(t)),i.child=s,i.memoizedState=null,s)}function xd(t,i){return i=Sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Sc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function yd(t,i,s){return Gr(i,t.child,null,s),t=xd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function X0(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Pf(t.return,i,s)}function Sd(t,i,s,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function W0(t,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=hn.current,C=(x&2)!==0;if(C?(x=x&1|2,i.flags|=128):x&=1,Q(hn,x),Un(t,i,o,s),o=Tt?Io:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&X0(t,s,i);else if(t.tag===19)X0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Sd(i,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&cc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Sd(i,!0,s,null,d,o);break;case"together":Sd(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Es(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=fa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function bd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&tc(t)))}function E1(t,i,s){switch(i.tag){case 3:fe(i,i.stateNode.containerInfo),Za(i,vn,t.memoizedState.cache),Pr();break;case 27:case 5:Qe(i);break;case 4:fe(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,jf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?k0(t,i,s):(Ja(i),t=va(t,i,s),t!==null?t.sibling:null);Ja(i);break;case 19:var u=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(Es(t,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return W0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Q(hn,hn.current),o)break;return null;case 22:return i.lanes=0,z0(t,i,s,i.pendingProps);case 24:Za(i,vn,t.memoizedState.cache)}return va(t,i,s)}function q0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!bd(t,s)&&(i.flags&128)===0)return xn=!1,E1(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Tt&&(i.flags&1048576)!==0&&Eg(i,Io,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=Br(i.elementType),i.type=t,typeof t=="function")Rf(t)?(o=kr(t,o),i.tag=1,i=G0(null,i,t,o,s)):(i.tag=0,i=md(null,i,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===N){i.tag=11,i=O0(null,i,t,o,s);break e}else if(u===B){i.tag=14,i=P0(null,i,t,o,s);break e}}throw i=pe(t)||t,Error(r(306,i,""))}}return i;case 0:return md(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=kr(o,i.pendingProps),G0(t,i,o,u,s);case 3:e:{if(fe(i,i.stateNode.containerInfo),t===null)throw Error(r(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Vf(t,i),Xo(i,o,null,s);var x=i.memoizedState;if(o=x.cache,Za(i,vn,o),o!==d.cache&&If(i,[vn],s,!0),ko(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=V0(t,i,o,s);break e}else if(o!==u){u=xi(Error(r(424)),i),zo(u),i=V0(t,i,o,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Ei(t.firstChild),Nn=i,Tt=!0,ja=null,bi=!0,s=zg(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Pr(),o===u){i=va(t,i,s);break e}Un(t,i,o,s)}i=i.child}return i;case 26:return yc(t,i),t===null?(s=i_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,t=i.pendingProps,o=zc(K.current).createElement(s),o[mn]=i,o[Dn]=t,On(o,s,t),gn(o),i.stateNode=o):i.memoizedState=i_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Qe(i),t===null&&Tt&&(o=i.stateNode=e_(i.type,i.pendingProps,K.current),Nn=i,bi=!0,u=Jt,lr(i.type)?(th=u,Jt=Ei(o.firstChild)):Jt=u),Un(t,i,i.pendingProps.children,s),yc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((u=o=Jt)&&(o=eM(o,i.type,i.pendingProps,bi),o!==null?(i.stateNode=o,Nn=i,Jt=Ei(o.firstChild),bi=!1,u=!0):u=!1),u||Ya(i)),Qe(i),u=i.type,d=i.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,Kd(u,d)?o=null:x!==null&&Kd(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=Zf(t,i,m1,null,null,s),ul._currentValue=u),yc(t,i),Un(t,i,o,s),i.child;case 6:return t===null&&Tt&&((t=s=Jt)&&(s=tM(s,i.pendingProps,bi),s!==null?(i.stateNode=s,Nn=i,Jt=null,t=!0):t=!1),t||Ya(i)),null;case 13:return k0(t,i,s);case 4:return fe(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=Gr(i,null,o,s):Un(t,i,o,s),i.child;case 11:return O0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Za(i,i.type,o.value),Un(t,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,zr(i),u=Ln(u),o=o(u),i.flags|=1,Un(t,i,o,s),i.child;case 14:return P0(t,i,i.type,i.pendingProps,s);case 15:return I0(t,i,i.type,i.pendingProps,s);case 19:return W0(t,i,s);case 31:return M1(t,i,s);case 22:return z0(t,i,s,i.pendingProps);case 24:return zr(i),o=Ln(vn),t===null?(u=Bf(),u===null&&(u=Kt,d=zf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Gf(i),Za(i,vn,u)):((t.lanes&s)!==0&&(Vf(t,i),Xo(i,null,null,s),ko()),u=t.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Za(i,vn,o)):(o=d.cache,Za(i,vn,o),o!==u.cache&&If(i,[vn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function _a(t){t.flags|=4}function Md(t,i,s,o,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(xv())t.flags|=8192;else throw Hr=rc,Hf}else t.flags&=-16777217}function j0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!l_(i))if(xv())t.flags|=8192;else throw Hr=rc,Hf}function bc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Re():536870912,t.lanes|=i,Is|=i)}function Ko(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function T1(t,i,s){var o=i.pendingProps;switch(Nf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),pa(vn),Ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ms(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Uf())),en(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(_a(i),d!==null?(en(i),j0(i,d)):(en(i),Md(i,u,null,o,s))):d?d!==t.memoizedState?(_a(i),en(i),j0(i,d)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&_a(i),en(i),Md(i,u,t,o,s)),null;case 27:if(ye(i),s=K.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return en(i),null}t=Me.current,Ms(i)?Ag(i):(t=e_(u,o,s),i.stateNode=t,_a(i))}return en(i),null;case 5:if(ye(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return en(i),null}if(d=Me.current,Ms(i))Ag(i);else{var x=zc(K.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[mn]=i,d[Dn]=o;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&_a(i)}}return en(i),Md(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(t=K.current,Ms(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||kv(t.nodeValue,s)),t||Ya(i,!0)}else t=zc(t).createTextNode(o),t[mn]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(o=Ms(i),s!==null){if(t===null){if(!o)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(r(558))}return en(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ms(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),u=!1}else u=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),bc(i,i.updateQueue),en(i),null);case 4:return Ce(),t===null&&Wd(i.stateNode.containerInfo),en(i),null;case 10:return pa(i.type),en(i),null;case 19:if(k(hn),o=i.memoizedState,o===null)return en(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)Ko(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=cc(t),d!==null){for(i.flags|=128,Ko(o,!1),t=d.updateQueue,i.updateQueue=t,bc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Sg(s,t),s=s.sibling;return Q(hn,hn.current&1|2),Tt&&da(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&Xt()>Rc&&(i.flags|=128,u=!0,Ko(o,!1),i.lanes=4194304)}else{if(!u)if(t=cc(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,bc(i,t),Ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return en(i),null}else 2*Xt()-o.renderingStartTime>Rc&&s!==536870912&&(i.flags|=128,u=!0,Ko(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(t=o.last,t!==null?t.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xt(),t.sibling=null,s=hn.current,Q(hn,u?s&1|2:s&1),Tt&&da(i,o.treeForkCount),t):(en(i),null);case 22:case 23:return ui(i),qf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&bc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&k(Fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(vn),en(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function A1(t,i){switch(Nf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(vn),Ce(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ye(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(r(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return k(hn),null;case 4:return Ce(),null;case 10:return pa(i.type),null;case 22:case 23:return ui(i),qf(),t!==null&&k(Fr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function Y0(t,i){switch(Nf(i),i.tag){case 3:pa(vn),Ce();break;case 26:case 27:case 5:ye(i);break;case 4:Ce();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:k(hn);break;case 10:pa(i.type);break;case 22:case 23:ui(i),qf(),t!==null&&k(Fr);break;case 24:pa(vn)}}function Qo(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==u)}}catch(C){Vt(i,i.return,C)}}function tr(t,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,u=i;var H=s,ie=C;try{ie()}catch(xe){Vt(u,H,xe)}}}o=o.next}while(o!==d)}}catch(xe){Vt(i,i.return,xe)}}function Z0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Bg(i,s)}catch(o){Vt(t,t.return,o)}}}function K0(t,i,s){s.props=kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Vt(t,i,o)}}function $o(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Vt(t,i,u)}}function Zi(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Vt(t,i,u)}else s.current=null}function Q0(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Vt(t,t.return,u)}}function Ed(t,i,s){try{var o=t.stateNode;Y1(o,t.type,s,i),o[Dn]=i}catch(u){Vt(t,t.return,u)}}function $0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Ad(t,i,s),t=t.sibling;t!==null;)Ad(t,i,s),t=t.sibling}function Mc(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mc(t,i,s),t=t.sibling;t!==null;)Mc(t,i,s),t=t.sibling}function J0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);On(i,o,s),i[mn]=t,i[Dn]=s}catch(d){Vt(t,t.return,d)}}var xa=!1,yn=!1,Rd=!1,ev=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function R1(t,i){if(t=t.containerInfo,Yd=Xc,t=dg(t),yf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,C=-1,H=-1,ie=0,xe=0,Ee=t,ue=null;t:for(;;){for(var de;Ee!==s||u!==0&&Ee.nodeType!==3||(C=x+u),Ee!==d||o!==0&&Ee.nodeType!==3||(H=x+o),Ee.nodeType===3&&(x+=Ee.nodeValue.length),(de=Ee.firstChild)!==null;)ue=Ee,Ee=de;for(;;){if(Ee===t)break t;if(ue===s&&++ie===u&&(C=x),ue===d&&++xe===o&&(H=x),(de=Ee.nextSibling)!==null)break;Ee=ue,ue=Ee.parentNode}Ee=de}s=C===-1||H===-1?null:{start:C,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zd={focusedElem:t,selectionRange:s},Xc=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Ye=kr(s.type,u);t=o.getSnapshotBeforeUpdate(Ye,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Vt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)$d(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$d(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function tv(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),o&4&&Qo(5,s);break;case 1:if(Sa(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(x){Vt(s,s.return,x)}else{var u=kr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Vt(s,s.return,x)}}o&64&&Z0(s),o&512&&$o(s,s.return);break;case 3:if(Sa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Bg(t,i)}catch(x){Vt(s,s.return,x)}}break;case 27:i===null&&o&4&&J0(s);case 26:case 5:Sa(t,s),i===null&&o&4&&Q0(s),o&512&&$o(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),o&4&&av(t,s);break;case 13:Sa(t,s),o&4&&rv(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=I1.bind(null,s),nM(t,s))));break;case 22:if(o=s.memoizedState!==null||xa,!o){i=i!==null&&i.memoizedState!==null||yn,u=xa;var d=yn;xa=o,(yn=i)&&!d?ba(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=u,yn=d}break;case 30:break;default:Sa(t,s)}}function nv(t){var i=t.alternate;i!==null&&(t.alternate=null,nv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Va(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Zn=!1;function ya(t,i,s){for(s=s.child;s!==null;)iv(t,i,s),s=s.sibling}function iv(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:yn||Zi(s,i),ya(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Zi(s,i);var o=on,u=Zn;lr(s.type)&&(on=s.stateNode,Zn=!1),ya(t,i,s),ol(s.stateNode),on=o,Zn=u;break;case 5:yn||Zi(s,i);case 6:if(o=on,u=Zn,on=null,ya(t,i,s),on=o,Zn=u,on!==null)if(Zn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){Vt(s,i,d)}else try{on.removeChild(s.stateNode)}catch(d){Vt(s,i,d)}break;case 18:on!==null&&(Zn?(t=on,Zv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xs(t)):Zv(on,s.stateNode));break;case 4:o=on,u=Zn,on=s.stateNode.containerInfo,Zn=!0,ya(t,i,s),on=o,Zn=u;break;case 0:case 11:case 14:case 15:tr(2,s,i),yn||tr(4,s,i),ya(t,i,s);break;case 1:yn||(Zi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&K0(s,i,o)),ya(t,i,s);break;case 21:ya(t,i,s);break;case 22:yn=(o=yn)||s.memoizedState!==null,ya(t,i,s),yn=o;break;default:ya(t,i,s)}}function av(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(s){Vt(i,i.return,s)}}}function rv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(s){Vt(i,i.return,s)}}function C1(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ev),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ev),i;default:throw Error(r(435,t.tag))}}function Ec(t,i){var s=C1(t);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=z1.bind(null,t,o);o.then(u,u)}})}function Kn(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,x=i,C=x;e:for(;C!==null;){switch(C.tag){case 27:if(lr(C.type)){on=C.stateNode,Zn=!1;break e}break;case 5:on=C.stateNode,Zn=!1;break e;case 3:case 4:on=C.stateNode.containerInfo,Zn=!0;break e}C=C.return}if(on===null)throw Error(r(160));iv(d,x,u),on=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)sv(i,t),i=i.sibling}var Oi=null;function sv(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(i,t),Qn(t),o&4&&(tr(3,t,t.return),Qo(3,t),tr(5,t,t.return));break;case 1:Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Oi;if(Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ga]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,s),d[mn]=t,gn(d),o=d;break e;case"link":var x=s_("link","href",u).get(o+(s.href||""));if(x){for(var C=0;C<x.length;C++)if(d=x[C],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(C,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;case"meta":if(x=s_("meta","content",u).get(o+(s.content||""))){for(C=0;C<x.length;C++)if(d=x[C],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(C,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else o_(u,t.type,t.stateNode);else t.stateNode=r_(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?o_(u,t.type,t.stateNode):r_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),s!==null&&o&4&&Ed(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(Ye){Vt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ed(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Rd=!0);break;case 6:if(Kn(i,t),Qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(Ye){Vt(t,t.return,Ye)}}break;case 3:if(Hc=null,u=Oi,Oi=Fc(i.containerInfo),Kn(i,t),Oi=u,Qn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Xs(i.containerInfo)}catch(Ye){Vt(t,t.return,Ye)}Rd&&(Rd=!1,ov(t));break;case 4:o=Oi,Oi=Fc(t.stateNode.containerInfo),Kn(i,t),Qn(t),Oi=o;break;case 12:Kn(i,t),Qn(t);break;case 31:Kn(i,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 13:Kn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=Xt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 22:u=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ie=xa,xe=yn;if(xa=ie||u,yn=xe||H,Kn(i,t),yn=xe,xa=ie,Qn(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||H||xa||yn||Xr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{C=H.stateNode;var Ee=H.memoizedProps.style,ue=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;C.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Ye){Vt(H,H.return,Ye)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ye){Vt(H,H.return,Ye)}}}else if(i.tag===18){if(s===null){H=i;try{var de=H.stateNode;u?Kv(de,!0):Kv(H.stateNode,!1)}catch(Ye){Vt(H,H.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Ec(t,s))));break;case 19:Kn(i,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 30:break;case 21:break;default:Kn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if($0(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=Td(t);Mc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(si(x,""),s.flags&=-33);var C=Td(t);Mc(t,C,x);break;case 3:case 4:var H=s.stateNode.containerInfo,ie=Td(t);Ad(t,ie,H);break;default:throw Error(r(161))}}catch(xe){Vt(t,t.return,xe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ov(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;ov(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)tv(t,i.alternate,i),i=i.sibling}function Xr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:tr(4,i,i.return),Xr(i);break;case 1:Zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&K0(i,i.return,s),Xr(i);break;case 27:ol(i.stateNode);case 26:case 5:Zi(i,i.return),Xr(i);break;case 22:i.memoizedState===null&&Xr(i);break;case 30:Xr(i);break;default:Xr(i)}t=t.sibling}}function ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:ba(u,d,s),Qo(4,d);break;case 1:if(ba(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Vt(o,o.return,ie)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Fg(H[u],C)}catch(ie){Vt(o,o.return,ie)}}s&&x&64&&Z0(d),$o(d,d.return);break;case 27:J0(d);case 26:case 5:ba(u,d,s),s&&o===null&&x&4&&Q0(d),$o(d,d.return);break;case 12:ba(u,d,s);break;case 31:ba(u,d,s),s&&x&4&&av(u,d);break;case 13:ba(u,d,s),s&&x&4&&rv(u,d);break;case 22:d.memoizedState===null&&ba(u,d,s),$o(d,d.return);break;case 30:break;default:ba(u,d,s)}i=i.sibling}}function Cd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Fo(s))}function wd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t))}function Pi(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)lv(t,i,s,o),i=i.sibling}function lv(t,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,o),u&2048&&Qo(9,i);break;case 1:Pi(t,i,s,o);break;case 3:Pi(t,i,s,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t)));break;case 12:if(u&2048){Pi(t,i,s,o),t=i.stateNode;try{var d=i.memoizedProps,x=d.id,C=d.onPostCommit;typeof C=="function"&&C(x,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Vt(i,i.return,H)}}else Pi(t,i,s,o);break;case 31:Pi(t,i,s,o);break;case 13:Pi(t,i,s,o);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?Pi(t,i,s,o):Jo(t,i):d._visibility&2?Pi(t,i,s,o):(d._visibility|=2,Us(t,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Cd(x,i);break;case 24:Pi(t,i,s,o),u&2048&&wd(i.alternate,i);break;default:Pi(t,i,s,o)}}function Us(t,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,x=i,C=s,H=o,ie=x.flags;switch(x.tag){case 0:case 11:case 15:Us(d,x,C,H,u),Qo(8,x);break;case 23:break;case 22:var xe=x.stateNode;x.memoizedState!==null?xe._visibility&2?Us(d,x,C,H,u):Jo(d,x):(xe._visibility|=2,Us(d,x,C,H,u)),u&&ie&2048&&Cd(x.alternate,x);break;case 24:Us(d,x,C,H,u),u&&ie&2048&&wd(x.alternate,x);break;default:Us(d,x,C,H,u)}i=i.sibling}}function Jo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,u=o.flags;switch(o.tag){case 22:Jo(s,o),u&2048&&Cd(o.alternate,o);break;case 24:Jo(s,o),u&2048&&wd(o.alternate,o);break;default:Jo(s,o)}i=i.sibling}}var el=8192;function Os(t,i,s){if(t.subtreeFlags&el)for(t=t.child;t!==null;)cv(t,i,s),t=t.sibling}function cv(t,i,s){switch(t.tag){case 26:Os(t,i,s),t.flags&el&&t.memoizedState!==null&&pM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Os(t,i,s);break;case 3:case 4:var o=Oi;Oi=Fc(t.stateNode.containerInfo),Os(t,i,s),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=el,el=16777216,Os(t,i,s),el=o):Os(t,i,s));break;default:Os(t,i,s)}}function uv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function tl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,dv(o,t)}uv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fv(t),t=t.sibling}function fv(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&tr(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Tc(t)):tl(t);break;default:tl(t)}}function Tc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,dv(o,t)}uv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:tr(8,i,i.return),Tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(i));break;default:Tc(i)}t=t.sibling}}function dv(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:tr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Rn=o;else e:for(s=t;Rn!==null;){o=Rn;var u=o.sibling,d=o.return;if(nv(o),o===s){Rn=null;break e}if(u!==null){u.return=d,Rn=u;break e}Rn=d}}}var w1={getCacheForType:function(t){var i=Ln(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},D1=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Kt=null,yt=null,bt=0,Gt=0,fi=null,nr=!1,Ps=!1,Dd=!1,Ma=0,un=0,ir=0,Wr=0,Nd=0,di=0,Is=0,nl=null,$n=null,Ld=!1,Ac=0,hv=0,Rc=1/0,Cc=null,ar=null,En=0,rr=null,zs=null,Ea=0,Ud=0,Od=null,pv=null,il=0,Pd=null;function hi(){return(Ot&2)!==0&&bt!==0?bt&-bt:U.T!==null?Gd():Ao()}function mv(){if(di===0)if((bt&536870912)===0||Tt){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function Jn(t,i,s){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),sr(t,bt,di,!1)),We(t,s),((Ot&2)===0||t!==Kt)&&(t===Kt&&((Ot&2)===0&&(Wr|=s),un===4&&sr(t,bt,di,!1)),Ki(t))}function gv(t,i,s){if((Ot&6)!==0)throw Error(r(327));var o=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),u=o?U1(t,i):zd(t,i,!0),d=o;do{if(u===0){Ps&&!o&&sr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!N1(s)){u=zd(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var C=t;u=nl;var H=C.current.memoizedState.isDehydrated;if(H&&(Fs(C,x).flags|=256),x=zd(C,x,!1),x!==2){if(Dd&&!H){C.errorRecoveryDisabledLanes|=d,Wr|=d,u=4;break e}d=$n,$n=u,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Fs(t,0),sr(t,i,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:sr(o,i,di,!nr);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Ac+300-Xt(),10<u)){if(sr(o,i,di,!nr),Se(o,0,!0)!==0)break e;Ea=i,o.timeoutHandle=jv(vv.bind(null,o,s,$n,Cc,Ld,i,di,Wr,Is,nr,d,"Throttled",-0,0),u);break e}vv(o,s,$n,Cc,Ld,i,di,Wr,Is,nr,d,null,-0,0)}}break}while(!0);Ki(t)}function vv(t,i,s,o,u,d,x,C,H,ie,xe,Ee,ue,de){if(t.timeoutHandle=-1,Ee=i.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},cv(i,d,Ee);var Ye=(d&62914560)===d?Ac-Xt():(d&4194048)===d?hv-Xt():0;if(Ye=mM(Ee,Ye),Ye!==null){Ea=d,t.cancelPendingCommit=Ye(Tv.bind(null,t,i,d,s,o,u,x,C,H,xe,Ee,null,ue,de)),sr(t,d,x,!ie);return}}Tv(t,i,d,s,o,u,x,C,H)}function N1(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!oi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i,s,o){i&=~Nd,i&=~Wr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var d=31-Ge(u),x=1<<d;o[d]=-1,u&=~x}s!==0&&zt(t,s,i)}function wc(){return(Ot&6)===0?(al(0),!1):!0}function Id(){if(yt!==null){if(Gt===0)var t=yt.return;else t=yt,ha=Ir=null,$f(t),Cs=null,Ho=0,t=yt;for(;t!==null;)Y0(t.alternate,t),t=t.return;yt=null}}function Fs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Q1(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Id(),Kt=t,yt=s=fa(t.current,null),bt=i,Gt=0,fi=null,nr=!1,Ps=Ue(t,i),Dd=!1,Is=di=Nd=Wr=ir=un=0,$n=nl=null,Ld=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Ge(o),d=1<<u;i|=t[u],o&=~d}return Ma=i,Kl(),s}function _v(t,i){gt=null,U.H=Yo,i===Rs||i===ac?(i=Og(),Gt=3):i===Hf?(i=Og(),Gt=4):Gt=i===pd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,yt===null&&(un=1,_c(t,xi(i,t.current)))}function xv(){var t=ci.current;return t===null?!0:(bt&4194048)===bt?Mi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Mi:!1}function yv(){var t=U.H;return U.H=Yo,t===null?Yo:t}function Sv(){var t=U.A;return U.A=w1,t}function Dc(){un=4,nr||(bt&4194048)!==bt&&ci.current!==null||(Ps=!0),(ir&134217727)===0&&(Wr&134217727)===0||Kt===null||sr(Kt,bt,di,!1)}function zd(t,i,s){var o=Ot;Ot|=2;var u=yv(),d=Sv();(Kt!==t||bt!==i)&&(Cc=null,Fs(t,i)),i=!1;var x=un;e:do try{if(Gt!==0&&yt!==null){var C=yt,H=fi;switch(Gt){case 8:Id(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var ie=Gt;if(Gt=0,fi=null,Bs(t,C,H,ie),s&&Ps){x=0;break e}break;default:ie=Gt,Gt=0,fi=null,Bs(t,C,H,ie)}}L1(),x=un;break}catch(xe){_v(t,xe)}while(!0);return i&&t.shellSuspendCounter++,ha=Ir=null,Ot=o,U.H=u,U.A=d,yt===null&&(Kt=null,bt=0,Kl()),x}function L1(){for(;yt!==null;)bv(yt)}function U1(t,i){var s=Ot;Ot|=2;var o=yv(),u=Sv();Kt!==t||bt!==i?(Cc=null,Rc=Xt()+500,Fs(t,i)):Ps=Ue(t,i);e:do try{if(Gt!==0&&yt!==null){i=yt;var d=fi;t:switch(Gt){case 1:Gt=0,fi=null,Bs(t,i,d,1);break;case 2:case 9:if(Lg(d)){Gt=0,fi=null,Mv(i);break}i=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Ki(t)},d.then(i,i);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Lg(d)?(Gt=0,fi=null,Mv(i)):(Gt=0,fi=null,Bs(t,i,d,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var C=yt;if(x?l_(x):C.stateNode.complete){Gt=0,fi=null;var H=C.sibling;if(H!==null)yt=H;else{var ie=C.return;ie!==null?(yt=ie,Nc(ie)):yt=null}break t}}Gt=0,fi=null,Bs(t,i,d,5);break;case 6:Gt=0,fi=null,Bs(t,i,d,6);break;case 8:Id(),un=6;break e;default:throw Error(r(462))}}O1();break}catch(xe){_v(t,xe)}while(!0);return ha=Ir=null,U.H=o,U.A=u,Ot=s,yt!==null?0:(Kt=null,bt=0,Kl(),un)}function O1(){for(;yt!==null&&!ln();)bv(yt)}function bv(t){var i=q0(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,i===null?Nc(t):yt=i}function Mv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=H0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=H0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:$f(i);default:Y0(s,i),i=yt=Sg(i,Ma),i=q0(s,i,Ma)}t.memoizedProps=t.pendingProps,i===null?Nc(t):yt=i}function Bs(t,i,s,o){ha=Ir=null,$f(i),Cs=null,Ho=0;var u=i.return;try{if(b1(t,u,i,s,bt)){un=1,_c(t,xi(s,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;un=1,_c(t,xi(s,t.current)),yt=null;return}i.flags&32768?(Tt||o===1?t=!0:Ps||(bt&536870912)!==0?t=!1:(nr=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ev(i,t)):Nc(i)}function Nc(t){var i=t;do{if((i.flags&32768)!==0){Ev(i,nr);return}t=i.return;var s=T1(i.alternate,i,Ma);if(s!==null){yt=s;return}if(i=i.sibling,i!==null){yt=i;return}yt=i=t}while(i!==null);un===0&&(un=5)}function Ev(t,i){do{var s=A1(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);un=6,yt=null}function Tv(t,i,s,o,u,d,x,C,H){t.cancelPendingCommit=null;do Lc();while(En!==0);if((Ot&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Tf,an(t,s,d,x,C,H),t===Kt&&(yt=Kt=null,bt=0),zs=i,rr=t,Ea=s,Ud=d,Od=u,pv=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,F1(ee,function(){return Dv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=G.p,G.p=2,x=Ot,Ot|=4;try{R1(t,i,s)}finally{Ot=x,G.p=u,U.T=o}}En=1,Av(),Rv(),Cv()}}function Av(){if(En===1){En=0;var t=rr,i=zs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=U.T,U.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{sv(i,t);var d=Zd,x=dg(t.containerInfo),C=d.focusedElem,H=d.selectionRange;if(x!==C&&C&&C.ownerDocument&&fg(C.ownerDocument.documentElement,C)){if(H!==null&&yf(C)){var ie=H.start,xe=H.end;if(xe===void 0&&(xe=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(xe,C.value.length);else{var Ee=C.ownerDocument||document,ue=Ee&&Ee.defaultView||window;if(ue.getSelection){var de=ue.getSelection(),Ye=C.textContent.length,ot=Math.min(H.start,Ye),jt=H.end===void 0?ot:Math.min(H.end,Ye);!de.extend&&ot>jt&&(x=jt,jt=ot,ot=x);var $=ug(C,ot),X=ug(C,jt);if($&&X&&(de.rangeCount!==1||de.anchorNode!==$.node||de.anchorOffset!==$.offset||de.focusNode!==X.node||de.focusOffset!==X.offset)){var ne=Ee.createRange();ne.setStart($.node,$.offset),de.removeAllRanges(),ot>jt?(de.addRange(ne),de.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),de.addRange(ne))}}}}for(Ee=[],de=C;de=de.parentNode;)de.nodeType===1&&Ee.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ee.length;C++){var be=Ee[C];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Xc=!!Yd,Zd=Yd=null}finally{Ot=u,G.p=o,U.T=s}}t.current=i,En=2}}function Rv(){if(En===2){En=0;var t=rr,i=zs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=U.T,U.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{tv(t,i.alternate,i)}finally{Ot=u,G.p=o,U.T=s}}En=3}}function Cv(){if(En===4||En===3){En=0,Y();var t=rr,i=zs,s=Ea,o=pv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,zs=rr=null,wv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ar=null),To(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ge,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=U.T,u=G.p,G.p=2,U.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var C=o[x];d(C.value,{componentStack:C.stack})}}finally{U.T=i,G.p=u}}(Ea&3)!==0&&Lc(),Ki(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Pd?il++:(il=0,Pd=t):il=0,al(0)}}function wv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Fo(i)))}function Lc(){return Av(),Rv(),Cv(),Dv()}function Dv(){if(En!==5)return!1;var t=rr,i=Ud;Ud=0;var s=To(Ea),o=U.T,u=G.p;try{G.p=32>s?32:s,U.T=null,s=Od,Od=null;var d=rr,x=Ea;if(En=0,zs=rr=null,Ea=0,(Ot&6)!==0)throw Error(r(331));var C=Ot;if(Ot|=4,fv(d.current),lv(d,d.current,x,s),Ot=C,al(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ge,d)}catch{}return!0}finally{G.p=u,U.T=o,wv(t,i)}}function Nv(t,i,s){i=xi(s,i),i=hd(t.stateNode,i,2),t=$a(t,i,2),t!==null&&(We(t,2),Ki(t))}function Vt(t,i,s){if(t.tag===3)Nv(t,t,s);else for(;i!==null;){if(i.tag===3){Nv(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){t=xi(s,t),s=L0(2),o=$a(i,s,2),o!==null&&(U0(s,o,i,t),We(o,2),Ki(o));break}}i=i.return}}function Fd(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new D1;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Dd=!0,u.add(s),t=P1.bind(null,t,i,s),i.then(t,t))}function P1(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(bt&s)===s&&(un===4||un===3&&(bt&62914560)===bt&&300>Xt()-Ac?(Ot&2)===0&&Fs(t,0):Nd|=s,Is===bt&&(Is=0)),Ki(t)}function Lv(t,i){i===0&&(i=Re()),t=Ur(t,i),t!==null&&(We(t,i),Ki(t))}function I1(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Lv(t,s)}function z1(t,i){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),Lv(t,s)}function F1(t,i){return nn(t,i)}var Uc=null,Hs=null,Bd=!1,Oc=!1,Hd=!1,or=0;function Ki(t){t!==Hs&&t.next===null&&(Hs===null?Uc=Hs=t:Hs=Hs.next=t),Oc=!0,Bd||(Bd=!0,H1())}function al(t,i){if(!Hd&&Oc){Hd=!0;do for(var s=!1,o=Uc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Ge(42|t)+1)-1,d&=u&~(x&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Iv(o,d))}else d=bt,d=Se(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ue(o,d)||(s=!0,Iv(o,d));o=o.next}while(s);Hd=!1}}function B1(){Uv()}function Uv(){Oc=Bd=!1;var t=0;or!==0&&K1()&&(t=or);for(var i=Xt(),s=null,o=Uc;o!==null;){var u=o.next,d=Ov(o,i);d===0?(o.next=null,s===null?Uc=u:s.next=u,u===null&&(Hs=s)):(s=o,(t!==0||(d&3)!==0)&&(Oc=!0)),o=u}En!==0&&En!==5||al(t),or!==0&&(or=0)}function Ov(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ge(d),C=1<<x,H=u[x];H===-1?((C&s)===0||(C&o)!==0)&&(u[x]=He(C,i)):H<=i&&(t.expiredLanes|=C),d&=~C}if(i=Kt,s=bt,s=Se(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&Qt(o),To(s)){case 2:case 8:s=M;break;case 32:s=ee;break;case 268435456:s=ve;break;default:s=ee}return o=Pv.bind(null,t),s=nn(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&Qt(o),t.callbackPriority=2,t.callbackNode=null,2}function Pv(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Lc()&&t.callbackNode!==s)return null;var o=bt;return o=Se(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(gv(t,o,i),Ov(t,Xt()),t.callbackNode!=null&&t.callbackNode===s?Pv.bind(null,t):null)}function Iv(t,i){if(Lc())return null;gv(t,i,!0)}function H1(){$1(function(){(Ot&6)!==0?nn(I,B1):Uv()})}function Gd(){if(or===0){var t=Ts;t===0&&(t=nt,nt<<=1,(nt&261888)===0&&(nt=256)),or=t}return or}function zv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function Fv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function G1(t,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=zv((u[Dn]||null).action),x=o.submitter;x&&(i=(i=x[Dn]||null)?zv(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var C=new ql("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var H=x?Fv(u,x):new FormData(u);od(s,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(C.preventDefault(),H=x?Fv(u,x):new FormData(u),od(s,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Vd=0;Vd<Ef.length;Vd++){var kd=Ef[Vd],V1=kd.toLowerCase(),k1=kd[0].toUpperCase()+kd.slice(1);Ui(V1,"on"+k1)}Ui(mg,"onAnimationEnd"),Ui(gg,"onAnimationIteration"),Ui(vg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(r1,"onTransitionRun"),Ui(s1,"onTransitionStart"),Ui(o1,"onTransitionCancel"),Ui(_g,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Bv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var x=o.length-1;0<=x;x--){var C=o[x],H=C.instance,ie=C.currentTarget;if(C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ie;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(C=o[x],H=C.instance,ie=C.currentTarget,C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ie;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}}}}function St(t,i){var s=i[Ar];s===void 0&&(s=i[Ar]=new Set);var o=t+"__bubble";s.has(o)||(Hv(i,t,2,!1),s.add(o))}function Xd(t,i,s){var o=0;i&&(o|=4),Hv(s,t,o,i)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Wd(t){if(!t[Pc]){t[Pc]=!0,Vl.forEach(function(s){s!=="selectionchange"&&(X1.has(s)||Xd(s,!1,t),Xd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Pc]||(i[Pc]=!0,Xd("selectionchange",!1,i))}}function Hv(t,i,s,o){switch(m_(i)){case 2:var u=_M;break;case 8:u=xM;break;default:u=sh}s=u.bind(null,i,s,t),u=void 0,!ff||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function qd(t,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var C=o.stateNode.containerInfo;if(C===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;C!==null;){if(x=oa(C),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}C=C.parentNode}}o=o.return}Wm(function(){var ie=d,xe=cf(s),Ee=[];e:{var ue=xg.get(t);if(ue!==void 0){var de=ql,Ye=t;switch(t){case"keypress":if(Xl(s)===0)break e;case"keydown":case"keyup":de=zb;break;case"focusin":Ye="focus",de=mf;break;case"focusout":Ye="blur",de=mf;break;case"beforeblur":case"afterblur":de=mf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Hb;break;case mg:case gg:case vg:de=Cb;break;case _g:de=Vb;break;case"scroll":case"scrollend":de=Mb;break;case"wheel":de=Xb;break;case"copy":case"cut":case"paste":de=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Km;break;case"toggle":case"beforetoggle":de=qb}var ot=(i&4)!==0,jt=!ot&&(t==="scroll"||t==="scrollend"),$=ot?ue!==null?ue+"Capture":null:ue;ot=[];for(var X=ie,ne;X!==null;){var be=X;if(ne=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||ne===null||$===null||(be=Ro(X,$),be!=null&&ot.push(sl(X,be,ne))),jt)break;X=X.return}0<ot.length&&(ue=new de(ue,Ye,null,s,xe),Ee.push({event:ue,listeners:ot}))}}if((i&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ue&&s!==lf&&(Ye=s.relatedTarget||s.fromElement)&&(oa(Ye)||Ye[jn]))break e;if((de||ue)&&(ue=xe.window===xe?xe:(ue=xe.ownerDocument)?ue.defaultView||ue.parentWindow:window,de?(Ye=s.relatedTarget||s.toElement,de=ie,Ye=Ye?oa(Ye):null,Ye!==null&&(jt=c(Ye),ot=Ye.tag,Ye!==jt||ot!==5&&ot!==27&&ot!==6)&&(Ye=null)):(de=null,Ye=ie),de!==Ye)){if(ot=Ym,be="onMouseLeave",$="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Km,be="onPointerLeave",$="onPointerEnter",X="pointer"),jt=de==null?ue:Cr(de),ne=Ye==null?ue:Cr(Ye),ue=new ot(be,X+"leave",de,s,xe),ue.target=jt,ue.relatedTarget=ne,be=null,oa(xe)===ie&&(ot=new ot($,X+"enter",Ye,s,xe),ot.target=ne,ot.relatedTarget=jt,be=ot),jt=be,de&&Ye)t:{for(ot=W1,$=de,X=Ye,ne=0,be=$;be;be=ot(be))ne++;be=0;for(var at=X;at;at=ot(at))be++;for(;0<ne-be;)$=ot($),ne--;for(;0<be-ne;)X=ot(X),be--;for(;ne--;){if($===X||X!==null&&$===X.alternate){ot=$;break t}$=ot($),X=ot(X)}ot=null}else ot=null;de!==null&&Gv(Ee,ue,de,ot,!1),Ye!==null&&jt!==null&&Gv(Ee,jt,Ye,ot,!0)}}e:{if(ue=ie?Cr(ie):window,de=ue.nodeName&&ue.nodeName.toLowerCase(),de==="select"||de==="input"&&ue.type==="file")var Nt=ag;else if(ng(ue))if(rg)Nt=n1;else{Nt=e1;var Ke=Jb}else de=ue.nodeName,!de||de.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?ie&&It(ie.elementType)&&(Nt=ag):Nt=t1;if(Nt&&(Nt=Nt(t,ie))){ig(Ee,Nt,s,xe);break e}Ke&&Ke(t,ue,ie),t==="focusout"&&ie&&ue.type==="number"&&ie.memoizedProps.value!=null&&xt(ue,"number",ue.value)}switch(Ke=ie?Cr(ie):window,t){case"focusin":(ng(Ke)||Ke.contentEditable==="true")&&(vs=Ke,Sf=ie,Po=null);break;case"focusout":Po=Sf=vs=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,hg(Ee,s,xe);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":hg(Ee,s,xe)}var vt;if(vf)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else gs?eg(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(Qm&&s.locale!=="ko"&&(gs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&gs&&(vt=qm()):(Wa=xe,df="value"in Wa?Wa.value:Wa.textContent,gs=!0)),Ke=Ic(ie,Mt),0<Ke.length&&(Mt=new Zm(Mt,t,null,s,xe),Ee.push({event:Mt,listeners:Ke}),vt?Mt.data=vt:(vt=tg(s),vt!==null&&(Mt.data=vt)))),(vt=Yb?Zb(t,s):Kb(t,s))&&(Mt=Ic(ie,"onBeforeInput"),0<Mt.length&&(Ke=new Zm("onBeforeInput","beforeinput",null,s,xe),Ee.push({event:Ke,listeners:Mt}),Ke.data=vt)),G1(Ee,t,ie,s,xe)}Bv(Ee,i)})}function sl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ic(t,i){for(var s=i+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ro(t,s),u!=null&&o.unshift(sl(t,u,d)),u=Ro(t,i),u!=null&&o.push(sl(t,u,d))),t.tag===3)return o;t=t.return}return[]}function W1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gv(t,i,s,o,u){for(var d=i._reactName,x=[];s!==null&&s!==o;){var C=s,H=C.alternate,ie=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||ie===null||(H=ie,u?(ie=Ro(s,d),ie!=null&&x.unshift(sl(s,ie,H))):u||(ie=Ro(s,d),ie!=null&&x.push(sl(s,ie,H)))),s=s.return}x.length!==0&&t.push({event:i,listeners:x})}var q1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(q1,`
`).replace(j1,"")}function kv(t,i){return i=Vv(i),Vv(t)===i}function qt(t,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&si(t,""+o);break;case"className":je(t,"class",o);break;case"tabIndex":je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,s,o);break;case"style":Li(t,o,d);break;case"data":if(i!=="object"){je(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&qt(t,i,"name",u.name,u,null),qt(t,i,"formEncType",u.formEncType,u,null),qt(t,i,"formMethod",u.formMethod,u,null),qt(t,i,"formTarget",u.formTarget,u,null)):(qt(t,i,"encType",u.encType,u,null),qt(t,i,"method",u.method,u,null),qt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=ca);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=wr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,Ie(t,s,o))}}function jd(t,i,s,o,u,d){switch(s){case"style":Li(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Ie(t,s,o)}}}function On(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:qt(t,i,d,x,s,null)}}u&&qt(t,i,"srcSet",s.srcSet,s,null),o&&qt(t,i,"src",s.src,s,null);return;case"input":St("invalid",t);var C=d=x=u=null,H=null,ie=null;for(o in s)if(s.hasOwnProperty(o)){var xe=s[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":x=xe;break;case"checked":H=xe;break;case"defaultChecked":ie=xe;break;case"value":d=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,i));break;default:qt(t,i,o,xe,s,null)}}Fn(t,d,C,H,ie,x,u,!1);return;case"select":St("invalid",t),o=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(C=s[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":x=C;break;case"multiple":o=C;default:qt(t,i,u,C,s,null)}i=d,s=x,t.multiple=!!o,i!=null?Mn(t,!!o,i,!1):s!=null&&Mn(t,!!o,s,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(C=s[x],C!=null))switch(x){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:qt(t,i,x,C,s,null)}Ni(t,o,u,d);return;case"option":for(H in s)s.hasOwnProperty(H)&&(o=s[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,i,H,o,s,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<rl.length;o++)St(rl[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in s)if(s.hasOwnProperty(ie)&&(o=s[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:qt(t,i,ie,o,s,null)}return;default:if(It(i)){for(xe in s)s.hasOwnProperty(xe)&&(o=s[xe],o!==void 0&&jd(t,i,xe,o,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(o=s[C],o!=null&&qt(t,i,C,o,s,null))}function Y1(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,C=null,H=null,ie=null,xe=null;for(de in s){var Ee=s[de];if(s.hasOwnProperty(de)&&Ee!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":H=Ee;default:o.hasOwnProperty(de)||qt(t,i,de,null,o,Ee)}}for(var ue in o){var de=o[ue];if(Ee=s[ue],o.hasOwnProperty(ue)&&(de!=null||Ee!=null))switch(ue){case"type":d=de;break;case"name":u=de;break;case"checked":ie=de;break;case"defaultChecked":xe=de;break;case"value":x=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:de!==Ee&&qt(t,i,ue,de,o,Ee)}}Ve(t,x,C,H,ie,xe,d,u);return;case"select":de=x=C=ue=null;for(d in s)if(H=s[d],s.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":de=H;default:o.hasOwnProperty(d)||qt(t,i,d,null,o,H)}for(u in o)if(d=o[u],H=s[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ue=d;break;case"defaultValue":C=d;break;case"multiple":x=d;default:d!==H&&qt(t,i,u,d,o,H)}i=C,s=x,o=de,ue!=null?Mn(t,!!s,ue,!1):!!o!=!!s&&(i!=null?Mn(t,!!s,i,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":de=ue=null;for(C in s)if(u=s[C],s.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qt(t,i,C,null,o,u)}for(x in o)if(u=o[x],d=s[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ue=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&qt(t,i,x,u,o,d)}ri(t,ue,de);return;case"option":for(var Ye in s)ue=s[Ye],s.hasOwnProperty(Ye)&&ue!=null&&!o.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:qt(t,i,Ye,null,o,ue));for(H in o)ue=o[H],de=s[H],o.hasOwnProperty(H)&&ue!==de&&(ue!=null||de!=null)&&(H==="selected"?t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol":qt(t,i,H,ue,o,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)ue=s[ot],s.hasOwnProperty(ot)&&ue!=null&&!o.hasOwnProperty(ot)&&qt(t,i,ot,null,o,ue);for(ie in o)if(ue=o[ie],de=s[ie],o.hasOwnProperty(ie)&&ue!==de&&(ue!=null||de!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,i));break;default:qt(t,i,ie,ue,o,de)}return;default:if(It(i)){for(var jt in s)ue=s[jt],s.hasOwnProperty(jt)&&ue!==void 0&&!o.hasOwnProperty(jt)&&jd(t,i,jt,void 0,o,ue);for(xe in o)ue=o[xe],de=s[xe],!o.hasOwnProperty(xe)||ue===de||ue===void 0&&de===void 0||jd(t,i,xe,ue,o,de);return}}for(var $ in s)ue=s[$],s.hasOwnProperty($)&&ue!=null&&!o.hasOwnProperty($)&&qt(t,i,$,null,o,ue);for(Ee in o)ue=o[Ee],de=s[Ee],!o.hasOwnProperty(Ee)||ue===de||ue==null&&de==null||qt(t,i,Ee,ue,o,de)}function Xv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,x=u.initiatorType,C=u.duration;if(d&&C&&Xv(x)){for(x=0,C=u.responseEnd,o+=1;o<s.length;o++){var H=s[o],ie=H.startTime;if(ie>C)break;var xe=H.transferSize,Ee=H.initiatorType;xe&&Xv(Ee)&&(H=H.responseEnd,x+=xe*(H<C?1:(C-ie)/(H-ie)))}if(--o,i+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yd=null,Zd=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function Wv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Kd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qd=null;function K1(){var t=window.event;return t&&t.type==="popstate"?t===Qd?!1:(Qd=t,!0):(Qd=null,!1)}var jv=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,$1=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(t){return Yv.resolve(null).then(t).catch(J1)}:jv;function J1(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function Zv(t,i){var s=i,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Xs(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")ol(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ol(s);for(var d=s.firstChild;d;){var x=d.nextSibling,C=d.nodeName;d[Ga]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&ol(t.ownerDocument.body);s=u}while(s);Xs(i)}function Kv(t,i){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function $d(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":$d(s),Va(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function eM(t,i,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ga])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function tM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function Qv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ei(t.nextSibling),t===null))return null;return t}function Jd(t){return t.data==="$?"||t.data==="$~"}function eh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var th=null;function $v(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ei(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Jv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function e_(t,i,s){switch(i=zc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ol(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Va(t)}var Ti=new Map,t_=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=G.d;G.d={f:iM,r:aM,D:rM,C:sM,L:oM,m:lM,X:uM,S:cM,M:fM};function iM(){var t=Ta.f(),i=wc();return t||i}function aM(t){var i=la(t);i!==null&&i.tag===5&&i.type==="form"?_0(i):Ta.r(t)}var Gs=typeof document>"u"?null:document;function n_(t,i,s){var o=Gs;if(o&&typeof i=="string"&&i){var u=Bt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),t_.has(u)||(t_.add(u),t={rel:t,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),On(i,"link",t),gn(i),o.head.appendChild(i)))}}function rM(t){Ta.D(t),n_("dns-prefetch",t,null)}function sM(t,i){Ta.C(t,i),n_("preconnect",t,i)}function oM(t,i,s){Ta.L(t,i,s);var o=Gs;if(o&&t&&i){var u='link[rel="preload"][as="'+Bt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Bt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Bt(s.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var d=u;switch(i){case"style":d=Vs(t);break;case"script":d=ks(t)}Ti.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ti.set(d,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(ll(d))||i==="script"&&o.querySelector(cl(d))||(i=o.createElement("link"),On(i,"link",t),gn(i),o.head.appendChild(i)))}}function lM(t,i){Ta.m(t,i);var s=Gs;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ks(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},i),Ti.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(cl(d)))return}o=s.createElement("link"),On(o,"link",t),gn(o),s.head.appendChild(o)}}}function cM(t,i,s){Ta.S(t,i,s);var o=Gs;if(o&&t){var u=ka(o).hoistableStyles,d=Vs(t);i=i||"default";var x=u.get(d);if(!x){var C={loading:0,preload:null};if(x=o.querySelector(ll(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ti.get(d))&&nh(t,s);var H=x=o.createElement("link");gn(H),On(H,"link",t),H._p=new Promise(function(ie,xe){H.onload=ie,H.onerror=xe}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Bc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:C},u.set(d,x)}}}function uM(t,i){Ta.X(t,i);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0},i),(i=Ti.get(u))&&ih(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function fM(t,i){Ta.M(t,i);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0,type:"module"},i),(i=Ti.get(u))&&ih(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function i_(t,i,s,o){var u=(u=K.current)?Fc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vs(s.href),s=ka(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vs(s.href);var d=ka(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(ll(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||dM(u,t,s,x.state))),i&&o===null)throw Error(r(528,""));return x}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ks(s),s=ka(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vs(t){return'href="'+Bt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function a_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function dM(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),On(i,"link",s),gn(i),t.head.appendChild(i))}function ks(t){return'[src="'+Bt(t)+'"]'}function cl(t){return"script[async]"+t}function r_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(s.href)+'"]');if(o)return i.instance=o,gn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),On(o,"style",u),Bc(o,s.precedence,t),i.instance=o;case"stylesheet":u=Vs(s.href);var d=t.querySelector(ll(u));if(d)return i.state.loading|=4,i.instance=d,gn(d),d;o=a_(s),(u=Ti.get(u))&&nh(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(C,H){x.onload=C,x.onerror=H}),On(d,"link",o),i.state.loading|=4,Bc(d,s.precedence,t),i.instance=d;case"script":return d=ks(s.src),(u=t.querySelector(cl(d)))?(i.instance=u,gn(u),u):(o=s,(u=Ti.get(d))&&(o=v({},s),ih(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),On(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Bc(o,s.precedence,t));return i.instance}function Bc(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var C=o[x];if(C.dataset.precedence===i)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function nh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ih(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Hc=null;function s_(t,i,s){if(Hc===null){var o=new Map,u=Hc=new Map;u.set(s,o)}else u=Hc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ga]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=t+x;var C=o.get(x);C?C.push(d):o.set(x,[d])}}return o}function o_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function hM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function l_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function pM(t,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Vs(o.href),d=i.querySelector(ll(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Gc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=i.ownerDocument||i,o=a_(o),(u=Ti.get(u))&&nh(o,u),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(C,H){x.onload=C,x.onerror=H}),On(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Gc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var ah=0;function mM(t,i){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&ah===0&&(ah=62500*Z1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>ah?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function kc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,i.forEach(gM,t),Vc=null,Gc.call(t))}function gM(t,i){if(!(i.state.loading&4)){var s=Vc.get(t);if(s)var o=s.get(null);else{s=new Map,Vc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,u),s.set(x,u),this.count++,o=Gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var ul={$$typeof:F,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function vM(t,i,s,o,u,d,x,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function c_(t,i,s,o,u,d,x,C,H,ie,xe,Ee){return t=new vM(t,i,s,x,H,ie,xe,Ee,C),i=1,d===!0&&(i|=24),d=li(3,null,null,i),t.current=d,d.stateNode=t,i=zf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Gf(d),t}function u_(t){return t?(t=ys,t):ys}function f_(t,i,s,o,u,d){u=u_(u),o.context===null?o.context=u:o.pendingContext=u,o=Qa(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=$a(t,o,i),s!==null&&(Jn(s,t,i),Vo(s,t,i))}function d_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function rh(t,i){d_(t,i),(t=t.alternate)&&d_(t,i)}function h_(t){if(t.tag===13||t.tag===31){var i=Ur(t,67108864);i!==null&&Jn(i,t,67108864),rh(t,67108864)}}function p_(t){if(t.tag===13||t.tag===31){var i=hi();i=Eo(i);var s=Ur(t,i);s!==null&&Jn(s,t,i),rh(t,i)}}var Xc=!0;function _M(t,i,s,o){var u=U.T;U.T=null;var d=G.p;try{G.p=2,sh(t,i,s,o)}finally{G.p=d,U.T=u}}function xM(t,i,s,o){var u=U.T;U.T=null;var d=G.p;try{G.p=8,sh(t,i,s,o)}finally{G.p=d,U.T=u}}function sh(t,i,s,o){if(Xc){var u=oh(o);if(u===null)qd(t,i,o,Wc,s),g_(t,o);else if(SM(u,t,i,s,o))o.stopPropagation();else if(g_(t,o),i&4&&-1<yM.indexOf(t)){for(;u!==null;){var d=la(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ne(d.pendingLanes);if(x!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var H=1<<31-Ge(x);C.entanglements[1]|=H,x&=~H}Ki(d),(Ot&6)===0&&(Rc=Xt()+500,al(0))}}break;case 31:case 13:C=Ur(d,2),C!==null&&Jn(C,d,2),wc(),rh(d,2)}if(d=oh(o),d===null&&qd(t,i,o,Wc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else qd(t,i,o,null,s)}}function oh(t){return t=cf(t),lh(t)}var Wc=null;function lh(t){if(Wc=null,t=oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Wc=t,null}function m_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case I:return 2;case M:return 8;case ee:case le:return 32;case ve:return 268435456;default:return 32}default:return 32}}var ch=!1,cr=null,ur=null,fr=null,fl=new Map,dl=new Map,dr=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(t,i){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function hl(t,i,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=la(i),i!==null&&h_(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function SM(t,i,s,o,u){switch(i){case"focusin":return cr=hl(cr,t,i,s,o,u),!0;case"dragenter":return ur=hl(ur,t,i,s,o,u),!0;case"mouseover":return fr=hl(fr,t,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return fl.set(d,hl(fl.get(d)||null,t,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,dl.set(d,hl(dl.get(d)||null,t,i,s,o,u)),!0}return!1}function v_(t){var i=oa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,hs(t.priority,function(){p_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,hs(t.priority,function(){p_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=oh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);lf=o,s.target.dispatchEvent(o),lf=null}else return i=la(s),i!==null&&h_(i),t.blockedOn=s,!1;i.shift()}return!0}function __(t,i,s){qc(t)&&s.delete(i)}function bM(){ch=!1,cr!==null&&qc(cr)&&(cr=null),ur!==null&&qc(ur)&&(ur=null),fr!==null&&qc(fr)&&(fr=null),fl.forEach(__),dl.forEach(__)}function jc(t,i){t.blockedOn===i&&(t.blockedOn=null,ch||(ch=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,bM)))}var Yc=null;function x_(t){Yc!==t&&(Yc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(lh(o||s)===null)continue;break}var d=la(s);d!==null&&(t.splice(i,3),i-=3,od(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Xs(t){function i(H){return jc(H,t)}cr!==null&&jc(cr,t),ur!==null&&jc(ur,t),fr!==null&&jc(fr,t),fl.forEach(i),dl.forEach(i);for(var s=0;s<dr.length;s++){var o=dr[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<dr.length&&(s=dr[0],s.blockedOn===null);)v_(s),s.blockedOn===null&&dr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],x=u[Dn]||null;if(typeof d=="function")x||x_(s);else if(x){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Dn]||null)C=x.formAction;else if(lh(u)!==null)continue}else C=x.action;typeof C=="function"?s[o+1]=C:(s.splice(o,3),o-=3),x_(s)}}}function y_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function uh(t){this._internalRoot=t}Zc.prototype.render=uh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,o=hi();f_(s,o,t,i,null,null)},Zc.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;f_(t.current,2,null,t,null,null),wc(),i[jn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ao();t={blockedOn:null,target:t,priority:i};for(var s=0;s<dr.length&&i!==0&&i<dr[s].priority;s++);dr.splice(s,0,t),s===0&&v_(t)}};var S_=e.version;if(S_!=="19.2.8")throw Error(r(527,S_,"19.2.8"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var MM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{ge=Kc.inject(MM),_e=Kc}catch{}}return ml.createRoot=function(t,i){if(!l(t))throw Error(r(299));var s=!1,o="",u=C0,d=w0,x=D0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=c_(t,1,!1,null,null,s,o,null,u,d,x,y_),t[jn]=i.current,Wd(t),new uh(i)},ml.hydrateRoot=function(t,i,s){if(!l(t))throw Error(r(299));var o=!1,u="",d=C0,x=w0,C=D0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=c_(t,1,!0,i,s??null,o,u,H,d,x,C,y_),i.context=u_(null),s=i.current,o=hi(),o=Eo(o),u=Qa(o),u.callback=null,$a(s,u,o),s=o,i.current.lanes=s,We(i,s),Ki(i),t[jn]=i.current,Wd(t),new Zc(i)},ml.version="19.2.8",ml}var lx;function g2(){if(lx)return _h.exports;lx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),_h.exports=m2(),_h.exports}var v2=g2();function tu(a){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${a}-${e}`}function cx(a){return{id:a.message_id,role:a.role,content:a.content}}function qr(a,e,n,r){return a.map(l=>l.id!==e?l:{...l,content:n,streaming:r})}function _2(a,e,n){return e?a.find(r=>r.conversation_id===e)?.title??n:n}function x2(a,e){const[n,r]=ke.useState([]),[l,c]=ke.useState(null),f=l,[h,m]=ke.useState([]),[p,_]=ke.useState(""),[v,g]=ke.useState("idle"),[S,E]=ke.useState(null),[w,b]=ke.useState(null),[y,P]=ke.useState(null),[F,N]=ke.useState(null),[O,L]=ke.useState([]),B=ke.useRef(0),T=ke.useRef(null);ke.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const z=ke.useMemo(()=>_2(n,l,e.newConversationTitle),[l,n,e.newConversationTitle]),q=v!=="idle";ke.useEffect(()=>{let Q=!0;async function Me(){try{let Ae=await a.listConversations(),K=localStorage.getItem(e.storageKey);Ae.some(Ce=>Ce.conversation_id===K)||(K=Ae[0]?.conversation_id??null),K||(K=(await a.createConversation()).conversation_id,Ae=await a.listConversations());const fe=await a.loadMessages(K);if(!Q)return;r(Ae),c(K),m(fe.map(cx)),localStorage.setItem(e.storageKey,K)}catch(Ae){Q&&N(Ae instanceof Error?Ae.message:e.wakeErrorMessage)}}return Me(),()=>{Q=!1}},[a,e.storageKey,e.wakeErrorMessage]);async function V(){r(await a.listConversations())}async function Z(){if(q||h.length===0)return!1;const Q=await a.createConversation();return c(Q.conversation_id),m([]),b(null),E(null),P(null),localStorage.setItem(e.storageKey,Q.conversation_id),await V(),!0}async function he(Q){if(!q){if(await a.deleteConversation(Q),Q===f){const Me=(await a.listConversations()).filter(Ae=>Ae.conversation_id!==Q);Me.length>0?await J(Me[0].conversation_id):await Z()}await V()}}async function pe(Q){return a.getPassage(Q)}async function J(Q){if(q||Q===l)return!1;const Me=B.current+1;B.current=Me;const Ae=await a.loadMessages(Q);return B.current!==Me?!1:(c(Q),m(Ae.map(cx)),b(null),E(null),P(null),localStorage.setItem(e.storageKey,Q),!0)}function U(Q,Me,Ae){if(Q.type==="delta"){T.current&&clearTimeout(T.current),L([]);const K=Ae+Q.text;return m(oe=>qr(oe,Me,K,!0)),{text:K,terminal:!1}}return Q.type==="completed"?(m(K=>qr(K,Me,Q.text,!1)),E(Me),{text:Q.text,terminal:!0}):Q.type==="tool"?(L([{name:Q.name,status:Q.status,detail:Q.detail,preview:Q.preview,handles:Q.handles}]),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>L([]),3500),{text:Ae,terminal:!1}):(m(K=>qr(K,Me,Ae,!1)),P(Q.message),{text:Ae,terminal:!0})}async function G(Q){if(!l||q)return;const Me=tu("assistant");_(""),b(Q),E(null),P(null),L([]),g("streaming"),m(oe=>[...oe,{id:tu("owner"),role:"owner",content:Q},{id:Me,role:"weaver",content:"",streaming:!0}]);let Ae="",K=!1;try{for await(const oe of a.streamTurn(l,Q)){const fe=U(oe,Me,Ae);if(Ae=fe.text,K=fe.terminal,fe.terminal)break}K||(m(oe=>qr(oe,Me,Ae,!1)),P(e.incompleteTurnMessage))}catch(oe){m(Ce=>qr(Ce,Me,Ae,!1));const fe=oe instanceof Error?oe.message:e.connectionLostMessage;P(oe instanceof Error?`${fe} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}async function te(){if(!(!l||v!=="streaming")){g("cancelling");try{await a.cancelTurn(l)}catch(Q){P(Q instanceof Error?Q.message:e.cancelFailedMessage),g("streaming")}}}async function me(){if(!l||v!=="idle"||!S)return;const Q=S,Me=tu("assistant");E(null),P(null),L([]),g("streaming"),m(Ae=>[...Ae.filter(K=>K.id!==Q),{id:Me,role:"weaver",content:"",streaming:!0}]),await D(Me,a.regenerateTurn(l))}async function Te(){if(!l||v!=="idle"||!w)return;const Q=tu("assistant");E(null),P(null),L([]),g("streaming"),m(Me=>[...Me,{id:Q,role:"weaver",content:"",streaming:!0}]),await D(Q,a.retryTurn(l))}async function D(Q,Me){let Ae="",K=!1;try{for await(const oe of Me){const fe=U(oe,Q,Ae);if(Ae=fe.text,K=fe.terminal,fe.terminal)break}K||(m(oe=>qr(oe,Q,Ae,!1)),P(e.incompleteTurnMessage))}catch(oe){m(Ce=>qr(Ce,Q,Ae,!1));const fe=oe instanceof Error?oe.message:e.connectionLostMessage;P(oe instanceof Error?`${fe} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}const k=(()=>{const Q=h[h.length-1];return Q&&Q.role==="weaver"?Q.id:null})();return{activeTitle:z,activity:O,bootError:F,cancelTurn:te,conversationId:l,conversations:n,createConversation:Z,deleteConversation:he,loadPassage:pe,draft:p,lastReplyId:k,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:me,retryLastTurn:Te,selectConversation:J,sendMessage:G,setDraft:_,turnActive:q,turnState:v}}const Ai={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."};var y2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},S2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},b2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},M2={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},E2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},T2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},A2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},R2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},C2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},w2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},D2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},N2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},L2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},U2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},O2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},P2={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function I2(a){return a=a-0,a===a}function NS(a){return I2(a)?a:(a=a.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var z2=(a,e)=>mm.createElement("stop",{key:`${e}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function F2(a){return a.charAt(0).toUpperCase()+a.slice(1)}var qs=new Map,B2=1e3;function H2(a){if(qs.has(a))return qs.get(a);const e={};let n=0;const r=a.length;for(;n<r;){const l=a.indexOf(";",n),c=l===-1?r:l,f=a.slice(n,c).trim();if(f){const h=f.indexOf(":");if(h>0){const m=f.slice(0,h).trim(),p=f.slice(h+1).trim();if(m&&p){const _=NS(m);e[_.startsWith("webkit")?F2(_):_]=p}}}n=c+1}if(qs.size===B2){const l=qs.keys().next().value;l&&qs.delete(l)}return qs.set(a,e),e}function LS(a,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(v=>{let g=v;return("fill"in n||n.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),LS(a,g)}),l=e.attributes||{},c={};for(const[v,g]of Object.entries(l))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=H2(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[NS(v)]=g}const{style:f,role:h,"aria-label":m,gradientFill:p,..._}=n;if(f&&(c.style=c.style?{...c.style,...f}:f),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;r.unshift(a(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(z2)))}return a(e.tag,{...c,..._},...r)}var G2=LS.bind(null,mm.createElement),ux=(a,e)=>{const n=ke.useId();return a||(e?n:void 0)},V2=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},k2="searchPseudoElementsFullScan"in ls&&typeof ls.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",X2=Number.parseInt(k2)>=7,W2=()=>X2,wl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},q2={left:"fa-pull-left",right:"fa-pull-right"},j2={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Y2={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ii={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function Z2(a){const e=ls.cssPrefix||ls.familyPrefix||wl;return e===wl?a:a.replace(new RegExp(String.raw`(?<=^|\s)${wl}-`,"g"),`${e}-`)}function K2(a){const{beat:e,fade:n,beatFade:r,bounce:l,shake:c,spin:f,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:E,rotation:w,pull:b,swapOpacity:y,rotateBy:P,widthAuto:F,canvasSquare:N,canvasRoomy:O,flip360:L,buzz:B,float:T,jello:z,spinSnap:q,spinSnap4:V,spinSnap8:Z,swing:he,wag:pe,className:J}=a,U=[];return J&&U.push(...J.split(" ")),e&&U.push(Cn.beat),n&&U.push(Cn.fade),r&&U.push(Cn.beatFade),l&&U.push(Cn.bounce),c&&U.push(Cn.shake),f&&U.push(Cn.spin),m&&U.push(Cn.spinReverse),h&&U.push(Cn.spinPulse),p&&U.push(Cn.pulse),_&&U.push(Ii.fixedWidth),v&&U.push(Ii.inverse),g&&U.push(Ii.border),S===!0&&U.push(Ii.flip),(S==="horizontal"||S==="both")&&U.push(Ii.flipHorizontal),(S==="vertical"||S==="both")&&U.push(Ii.flipVertical),E!=null&&U.push(Y2[E]),w!=null&&w!==0&&U.push(j2[w]),b!=null&&U.push(q2[b]),y&&U.push(Ii.swapOpacity),W2()?(P&&U.push(Ii.rotateBy),F&&U.push(Ii.widthAuto),N&&U.push(Ii.canvasSquare),O&&U.push(Ii.canvasRoomy),L&&U.push(Cn.flip360),B&&U.push(Cn.buzz),T&&U.push(Cn.float),z&&U.push(Cn.jello),q&&U.push(Cn.spinSnap),V&&U.push(Cn.spinSnap4),Z&&U.push(Cn.spinSnap8),he&&U.push(Cn.swing),pe&&U.push(Cn.wag),(ls.cssPrefix||ls.familyPrefix||wl)===wl?U:U.map(Z2)):U}var Q2=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function fx(a){if(a)return Q2(a)?a:DS.icon(a)}function $2(a){return Object.keys(a)}var dx=new V2("FontAwesomeIcon"),US={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},J2=new Set(Object.keys(US)),zn=mm.forwardRef((a,e)=>{const n={...US,...a},{icon:r,mask:l,symbol:c,title:f,titleId:h,maskId:m,transform:p}=n,_=ux(m,!!l),v=ux(h,!!f),g=fx(r);if(!g)return dx.error("Icon lookup is undefined",r),null;const S=K2(n),E=typeof p=="string"?DS.transform(p):p,w=fx(l),b=u2(g,{...S.length>0&&{classes:S},...E&&{transform:E},...w&&{mask:w},symbol:c,title:f,titleId:v,maskId:_});if(!b)return dx.error("Could not find icon",g),null;const{abstract:y}=b,P={ref:e};for(const F of $2(n))J2.has(F)||(P[F]=n[F]);return G2(y[0],P)});zn.displayName="FontAwesomeIcon";function e3(a){return A.jsx(zn,{"aria-hidden":"true",icon:A2,...a})}function hx(a){return A.jsx(zn,{"aria-hidden":"true",icon:U2,...a})}function t3(a){return A.jsx(zn,{"aria-hidden":"true",icon:L2,...a})}function n3(a){return A.jsx(zn,{"aria-hidden":"true",icon:C2,...a})}function i3(a){return A.jsx(zn,{"aria-hidden":"true",icon:O2,...a})}function a3(a){return A.jsx(zn,{"aria-hidden":"true",icon:E2,...a})}function OS(a){return A.jsx(zn,{"aria-hidden":"true",icon:y2,...a})}function r3(a){return A.jsx(zn,{"aria-hidden":"true",icon:N2,...a})}function PS(a){return A.jsx(zn,{"aria-hidden":"true",icon:T2,...a})}function s3(a){return A.jsx(zn,{"aria-hidden":"true",icon:S2,...a})}function o3(a){return A.jsx(zn,{"aria-hidden":"true",icon:w2,...a})}function Sp(a){return A.jsx(zn,{"aria-hidden":"true",icon:D2,...a})}function px(a){return A.jsx(zn,{"aria-hidden":"true",icon:P2,...a})}function l3(a){return A.jsx(zn,{"aria-hidden":"true",icon:R2,...a})}function c3(a){return A.jsx(zn,{"aria-hidden":"true",icon:M2,...a})}const u3=["awakened","ascended","transcendent"];function f3({cancelling:a,draft:e,inputLabel:n="Message assistant",onCancel:r,onDraftChange:l,onSubmit:c,onTierChange:f,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const E=ke.useRef(null),w=v??E,b=ke.useRef(null),[y,P]=ke.useState(!1);ke.useEffect(()=>{const O=w.current;O&&(O.style.height="auto",O.style.height=`${Math.min(O.scrollHeight,160)}px`)},[e,w]),ke.useEffect(()=>{if(!y)return;function O(B){b.current&&!b.current.contains(B.target)&&P(!1)}function L(B){B.key==="Escape"&&P(!1)}return document.addEventListener("pointerdown",O),document.addEventListener("keydown",L),()=>{document.removeEventListener("pointerdown",O),document.removeEventListener("keydown",L)}},[y]);function F(){const O=e.trim();!O||S||c(O)}function N(O){O.key!=="Enter"||O.shiftKey||(O.preventDefault(),F())}return A.jsx("div",{className:"composer-wrap",children:A.jsxs("div",{className:"composer-shell",children:[A.jsx("textarea",{"aria-label":n,disabled:S,onChange:O=>l(O.target.value),onKeyDown:N,placeholder:h,ref:w,rows:1,value:e}),A.jsxs("div",{className:"composer-tier",ref:b,children:[A.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>P(O=>!O),type:"button",children:[A.jsx("span",{className:"tier-pill-name",children:g}),A.jsx(Sp,{})]}),y&&A.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:u3.map(O=>A.jsx("li",{children:A.jsxs("button",{"aria-selected":O===g,onClick:()=>{f(O),P(!1)},role:"option",type:"button",children:[A.jsx("span",{className:"tier-menu-check",children:O===g?"✦":""}),O]})},O))})]}),S?A.jsx("button",{"aria-label":a?_:p,className:"composer-action composer-stop",disabled:a,onClick:r,type:"button",children:A.jsx(i3,{})}):A.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:F,type:"button",children:A.jsx(e3,{})})]})})}const d3=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function h3(a){try{const e=new URL(a);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function bh(a,e){if(!e)return;const n=a.at(-1);if(n?.type==="text"){n.value+=e;return}a.push({type:"text",value:e})}function nu(a){const e=[];let n=0;for(const r of a.matchAll(d3)){const l=r.index??0;bh(e,a.slice(n,l));const c=r[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const f=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=f?.[2]??"";f&&h3(h)?e.push({type:"link",label:f[1],href:h}):bh(e,c)}n=l+c.length}return bh(e,a.slice(n)),e}function p3(a){const e=a.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function m3(a){const e=[],n=String(a??"").split(/\r?\n/);let r=0;for(;r<n.length;){const l=n[r].trim();if(!l){r+=1;continue}if(l.startsWith("```")){const p=[];for(r+=1;r<n.length&&!n[r].trimStart().startsWith("```");)p.push(n[r]),r+=1;r<n.length&&(r+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(l);if(c){e.push({type:"heading",level:c[1].length,children:nu(c[2])}),r+=1;continue}if(l.startsWith(">")){e.push({type:"quote",children:nu(l.replace(/^>\s?/,""))}),r+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){e.push({type:"rule"}),r+=1;continue}const f=/^[-*]\s+/.test(l),h=/^\d+[.)]\s+/.test(l);if(f||h){const p=[];for(;r<n.length;){const _=n[r].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(nu(v[1])),r+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;r<n.length;){const p=n[r].trim();if(!p||m.length>0&&p3(p))break;m.push(p),r+=1}e.push({type:"paragraph",children:nu(m.join(" "))})}return e}function lo(a){return a.map((e,n)=>{const r=`${e.type}-${n}`;return e.type==="text"?A.jsx(ke.Fragment,{children:e.value},r):e.type==="strong"?A.jsx("strong",{children:lo(e.children)},r):e.type==="emphasis"?A.jsx("em",{children:lo(e.children)},r):e.type==="code"?A.jsx("code",{children:e.value},r):A.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},r)})}function g3({children:a}){return m3(a).map((n,r)=>{const l=`${n.type}-${r}`;if(n.type==="paragraph")return A.jsx("p",{children:lo(n.children)},l);if(n.type==="heading"){const f=`h${n.level}`;return A.jsx(f,{children:lo(n.children)},l)}if(n.type==="code")return A.jsx("pre",{children:A.jsx("code",{children:n.value})},l);if(n.type==="quote")return A.jsx("blockquote",{children:lo(n.children)},l);if(n.type==="rule")return A.jsx("hr",{},l);const c=n.ordered?"ol":"ul";return A.jsx(c,{children:n.items.map((f,h)=>A.jsx("li",{children:lo(f)},`${l}-${h}`))},l)})}const v3={semantic_search:{doing:"searching the library",done:"searched the library"},read_chapters:{doing:"recalling a passage",done:"recalled a passage"},find_text:{doing:"finding the words",done:"found the words"},browse_chapters:{doing:"browsing the chapters",done:"browsed the chapters"},who_is:{doing:"consulting the notebook",done:"consulted the notebook"}};function _3(a,e,n){const r=v3[a];return r?e==="start"?`weaver is ${r.doing}`:`weaver has ${r.done}`:e==="start"?`${a} ${n||"started"}`.trim():`${a} ${n||"done"}`.trim()}function x3({Mark:a,activity:e,assistantName:n,message:r,onQuote:l,onRegenerate:c,onViewPassage:f,regenerateLabel:h}){const[m,p]=ke.useState(!1),[_,v]=ke.useState(null),[g,S]=ke.useState(null),E=ke.useRef(null);ke.useEffect(()=>{function b(){if(r.role!=="weaver"||!l||!E.current)return;const y=window.getSelection(),P=y?y.toString().trim():"",F=E.current,N=y&&y.rangeCount>0&&F.contains(y.getRangeAt(0).commonAncestorContainer);if(P.length>=2&&N){const O=y.getRangeAt(0).getBoundingClientRect();v(P),S({top:O.bottom+6,left:O.left})}else v(null),S(null)}return document.addEventListener("selectionchange",b),()=>document.removeEventListener("selectionchange",b)},[r.role,l]);async function w(){await navigator.clipboard?.writeText(r.content),p(!0),window.setTimeout(()=>p(!1),1400)}return r.role==="owner"?A.jsx("article",{className:"message message-owner",children:A.jsxs("div",{className:"owner-message-content",children:[A.jsx("div",{className:"owner-bubble",children:r.content}),A.jsx("div",{className:"message-actions",children:A.jsxs("button",{"aria-label":"Copy owner message",onClick:w,type:"button",children:[A.jsx(hx,{}),A.jsx("span",{children:m?"Copied":"Copy"})]})})]})}):A.jsxs("article",{className:`message message-weaver ${r.streaming?"message-streaming":""}`,children:[A.jsx("div",{className:"weaver-avatar",children:A.jsx(a,{compact:!0})}),A.jsxs("div",{className:"weaver-message-content",children:[A.jsx("div",{className:"message-role",children:n}),e&&A.jsxs("p",{className:`spell-line spell-line-${e.status}`,children:[A.jsx("span",{className:"spell-bracket",children:"["}),_3(e.name,e.status,e.detail),e.preview&&A.jsxs("span",{className:"spell-preview",children:[" ",e.preview,"…"]}),e.handles&&e.handles.length>0&&A.jsx("button",{"aria-label":"View the recalled passage",className:"spell-view",onClick:()=>f?.(e.handles[0]),type:"button",children:"view passage"}),A.jsx("span",{className:"spell-bracket",children:"]"})]}),A.jsx("div",{className:"markdown-body",ref:E,children:r.content?A.jsx(g3,{children:r.content}):A.jsx("span",{className:"thinking-thread"})}),!r.streaming&&r.content&&A.jsxs("div",{className:"message-actions",children:[A.jsxs("button",{"aria-label":"Copy reply",onClick:w,type:"button",children:[A.jsx(hx,{}),A.jsx("span",{children:m?"Copied":"Copy"})]}),c&&A.jsxs("button",{"aria-label":"Regenerate reply",onClick:c,type:"button",children:[A.jsx(n3,{}),A.jsx("span",{children:h})]})]})]}),_&&g&&A.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{l?.(_),v(null),S(null)},style:{top:g.top,left:g.left},type:"button",children:[A.jsx(o3,{}),A.jsx("span",{children:"ask about this"})]})]})}function y3({handle:a,loadPassage:e,onClose:n}){const[r,l]=ke.useState(null),[c,f]=ke.useState(null);return ke.useEffect(()=>{let h=!0;e(a).then(p=>{h&&l(p)}).catch(p=>{h&&f(p instanceof Error?p.message:"could not summon the passage")});function m(p){p.key==="Escape"&&n()}return window.addEventListener("keydown",m),()=>{h=!1,window.removeEventListener("keydown",m)}},[a,e,n]),A.jsx("div",{"aria-label":"Summoned passage","aria-modal":"true",className:"passage-backdrop",role:"dialog",children:A.jsxs("div",{className:"passage-panel",children:[A.jsxs("header",{className:"passage-header",children:[A.jsx("h2",{className:"passage-title",children:r?A.jsxs(A.Fragment,{children:["chapter ",r.chapter,A.jsxs("span",{className:"passage-lines",children:[", lines ",r.line_start,"-",r.line_end," · volume"," ",r.volume]})]}):"summoning…"}),A.jsx("button",{"aria-label":"Close passage",className:"icon-button passage-close",onClick:n,type:"button",children:"×"})]}),r&&r.beats.length>0&&A.jsx("div",{className:"passage-beats",children:r.beats.map(h=>A.jsx("span",{className:"passage-beat",children:h},h))}),c?A.jsx("p",{className:"passage-error",children:c}):A.jsx("pre",{className:"passage-text",children:r?r.text:"…"})]})})}function S3({chooseLabel:a,createLabel:e,message:n,onChooseConversation:r,onCreateConversation:l,onRetry:c,retryLabel:f,title:h}){return A.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[A.jsx("span",{className:"recovery-knot"}),A.jsxs("div",{children:[A.jsx("strong",{children:h}),A.jsx("p",{children:n}),A.jsxs("div",{className:"recovery-actions",children:[c&&f&&A.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:f}),A.jsx("button",{onClick:l,type:"button",children:e}),A.jsx("button",{onClick:r,type:"button",children:a})]})]})]})}const Cm="185",b3=0,mx=1,M3=2,Uu=1,E3=2,Tl=3,Tr=0,ti=1,Na=2,Ua=0,fo=1,gx=2,vx=3,_x=4,T3=5,ts=100,A3=101,R3=102,C3=103,w3=104,D3=200,N3=201,L3=202,U3=203,bp=204,Mp=205,O3=206,P3=207,I3=208,z3=209,F3=210,B3=211,H3=212,G3=213,V3=214,Ep=0,Tp=1,Ap=2,go=3,Rp=4,Cp=5,wp=6,Dp=7,IS=0,k3=1,X3=2,aa=0,zS=1,FS=2,BS=3,HS=4,GS=5,VS=6,kS=7,XS=300,cs=301,vo=302,Mh=303,Eh=304,af=306,Np=1e3,La=1001,Lp=1002,Pn=1003,W3=1004,iu=1005,Vn=1006,Th=1007,as=1008,Di=1009,WS=1010,qS=1011,Nl=1012,wm=1013,sa=1014,na=1015,za=1016,Dm=1017,Nm=1018,Ll=1020,jS=35902,YS=35899,ZS=1021,KS=1022,Vi=1023,Fa=1026,rs=1027,QS=1028,Lm=1029,us=1030,Um=1031,Om=1033,Ou=33776,Pu=33777,Iu=33778,zu=33779,Up=35840,Op=35841,Pp=35842,Ip=35843,zp=36196,Fp=37492,Bp=37496,Hp=37488,Gp=37489,Vu=37490,Vp=37491,kp=37808,Xp=37809,Wp=37810,qp=37811,jp=37812,Yp=37813,Zp=37814,Kp=37815,Qp=37816,$p=37817,Jp=37818,em=37819,tm=37820,nm=37821,im=36492,am=36494,rm=36495,sm=36283,om=36284,ku=36285,lm=36286,q3=3200,xx=0,j3=1,yr="",Ci="srgb",Xu="srgb-linear",Wu="linear",kt="srgb",js=7680,yx=519,Y3=512,Z3=513,K3=514,Pm=515,Q3=516,$3=517,Im=518,J3=519,Sx=35044,bx="300 es",ia=2e3,qu=2001;function eR(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ju(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function tR(){const a=ju("canvas");return a.style.display="block",a}const Mx={};function Ex(...a){const e="THREE."+a.shift();console.log(e,...a)}function $S(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ct(...a){a=$S(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function wt(...a){a=$S(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function ho(...a){const e=a.join(" ");e in Mx||(Mx[e]=!0,ct(...a))}function nR(a,e,n){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const iR={[Ep]:Tp,[Ap]:wp,[Rp]:Dp,[go]:Cp,[Tp]:Ep,[wp]:Ap,[Dp]:Rp,[Cp]:go};class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=Math.PI/180,cm=180/Math.PI;function Il(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Rt(a,e,n){return Math.max(e,Math.min(n,a))}function aR(a,e){return(a%e+e)%e}function Rh(a,e,n){return(1-n)*a+n*e}function gl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Bm=class Bm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bm.prototype.isVector2=!0;let Pt=Bm;class So{constructor(e=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=l}static slerpFlat(e,n,r,l,c,f,h){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3],g=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==E){let b=m*g+p*S+_*E+v*w;b<0&&(g=-g,S=-S,E=-E,w=-w,b=-b);let y=1-h;if(b<.9995){const P=Math.acos(b),F=Math.sin(P);y=Math.sin(y*P)/F,h=Math.sin(h*P)/F,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h;const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return e[n]=h*E+_*v+m*S-p*g,e[n+1]=m*E+_*g+p*v-h*S,e[n+2]=p*E+_*S+h*g-m*v,e[n+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,l){return this._x=e,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),v=h(c/2),g=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,l=e._y,c=e._z,f=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-r*p,this._z=c*_+f*p+r*m-l*h,this._w=f*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+r*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hm=class Hm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*l,this.y=c[1]*n+c[4]*r+c[7]*l,this.z=c[2]*n+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),_=2*(h*n-c*l),v=2*(c*r-f*n);return this.x=n+m*p+f*v-h*_,this.y=r+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*l,this.y=c[1]*n+c[5]*r+c[9]*l,this.z=c[2]*n+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,l=e.y,c=e.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return n*n+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const l=Math.sin(n)*e;return this.x=l*Math.sin(r),this.y=Math.cos(n)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hm.prototype.isVector3=!0;let ae=Hm;const Ch=new ae,Tx=new So,Gm=class Gm{constructor(e,n,r,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,l,c,f,h,m,p)}set(e,n,r,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],_=r[4],v=r[7],g=r[2],S=r[5],E=r[8],w=l[0],b=l[3],y=l[6],P=l[1],F=l[4],N=l[7],O=l[2],L=l[5],B=l[8];return c[0]=f*w+h*P+m*O,c[3]=f*b+h*F+m*L,c[6]=f*y+h*N+m*B,c[1]=p*w+_*P+v*O,c[4]=p*b+_*F+v*L,c[7]=p*y+_*N+v*B,c[2]=g*w+S*P+E*O,c[5]=g*b+S*F+E*L,c[8]=g*y+S*N+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*f*_-n*h*p-r*c*_+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,E=n*v+r*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(l*p-_*r)*w,e[2]=(h*r-l*f)*w,e[3]=g*w,e[4]=(_*n-l*m)*w,e[5]=(l*c-h*n)*w,e[6]=S*w,e[7]=(r*m-p*n)*w,e[8]=(f*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gm.prototype.isMatrix3=!0;let ht=Gm;const wh=new ht,Ax=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rR(){const a={enabled:!0,workingColorSpace:Xu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===yr?Wu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Xu]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),a}const At=rR();function Oa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function po(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ys;class sR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ys===void 0&&(Ys=ju("canvas")),Ys.width=e.width,Ys.height=e.height;const l=Ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ys}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ju("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Oa(c[f]/255)*255;return r.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oa(n[r]/255)*255):n[r]=Oa(n[r]);return{data:n,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oR=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Dh(l[f].image)):c.push(Dh(l[f]))}else c=Dh(l);r.url=c}return n||(e.images[this.uuid]=r),r}}function Dh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?sR.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let lR=0;const Nh=new ae;class Wn extends ds{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,r=La,l=La,c=Vn,f=as,h=Vi,m=Di,p=Wn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Il(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ct(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Np:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Np:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=XS;Wn.DEFAULT_ANISOTROPY=1;const Vm=class Vm{constructor(e=0,n=0,r=0,l=1){this.x=e,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,l){return this.x=e,this.y=n,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],w=m[2],b=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(p+1)/2,N=(S+1)/2,O=(y+1)/2,L=(_+g)/4,B=(v+w)/4,T=(E+b)/4;return F>N&&F>O?F<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(F),l=L/r,c=B/r):N>O?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=L/l,c=T/l):O<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),r=B/c,l=T/c),this.set(r,l,c,n),this}let P=Math.sqrt((b-E)*(b-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(b-E)/P,this.y=(v-w)/P,this.z=(g-_)/P,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this.w=Rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this.w=Rt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vm.prototype.isVector4=!0;let fn=Vm;class cR extends ds{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:r.depth},c=new Wn(l),f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new zm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends cR{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class JS extends Wn{constructor(e=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uR extends Wn{constructor(e=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=class Qu{constructor(e,n,r,l,c,f,h,m,p,_,v,g,S,E,w,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,l,c,f,h,m,p,_,v,g,S,E,w,b)}set(e,n,r,l,c,f,h,m,p,_,v,g,S,E,w,b){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,l=1/Zs.setFromMatrixColumn(e,0).length(),c=1/Zs.setFromMatrixColumn(e,1).length(),f=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*v,E=h*_,w=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=S+E*p,n[5]=g-w*p,n[9]=-h*m,n[2]=w-g*p,n[6]=E+S*p,n[10]=f*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,w=p*v;n[0]=g+w*h,n[4]=E*h-S,n[8]=f*p,n[1]=f*v,n[5]=f*_,n[9]=-h,n[2]=S*h-E,n[6]=w+g*h,n[10]=f*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,w=p*v;n[0]=g-w*h,n[4]=-f*v,n[8]=E+S*h,n[1]=S+E*h,n[5]=f*_,n[9]=w-g*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(e.order==="ZYX"){const g=f*_,S=f*v,E=h*_,w=h*v;n[0]=m*_,n[4]=E*p-S,n[8]=g*p+w,n[1]=m*v,n[5]=w*p+g,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(e.order==="YZX"){const g=f*m,S=f*p,E=h*m,w=h*p;n[0]=m*_,n[4]=w-g*v,n[8]=E*v+S,n[1]=v,n[5]=f*_,n[9]=-h*_,n[2]=-p*_,n[6]=S*v+E,n[10]=g-w*v}else if(e.order==="XZY"){const g=f*m,S=f*p,E=h*m,w=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+w,n[5]=f*_,n[9]=S*v-E,n[2]=E*v-S,n[6]=h*_,n[10]=w*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fR,e,dR)}lookAt(e,n,r){const l=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pr.crossVectors(r,pi),pr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pr.crossVectors(r,pi)),pr.normalize(),au.crossVectors(pi,pr),l[0]=pr.x,l[4]=au.x,l[8]=pi.x,l[1]=pr.y,l[5]=au.y,l[9]=pi.y,l[2]=pr.z,l[6]=au.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],_=r[1],v=r[5],g=r[9],S=r[13],E=r[2],w=r[6],b=r[10],y=r[14],P=r[3],F=r[7],N=r[11],O=r[15],L=l[0],B=l[4],T=l[8],z=l[12],q=l[1],V=l[5],Z=l[9],he=l[13],pe=l[2],J=l[6],U=l[10],G=l[14],te=l[3],me=l[7],Te=l[11],D=l[15];return c[0]=f*L+h*q+m*pe+p*te,c[4]=f*B+h*V+m*J+p*me,c[8]=f*T+h*Z+m*U+p*Te,c[12]=f*z+h*he+m*G+p*D,c[1]=_*L+v*q+g*pe+S*te,c[5]=_*B+v*V+g*J+S*me,c[9]=_*T+v*Z+g*U+S*Te,c[13]=_*z+v*he+g*G+S*D,c[2]=E*L+w*q+b*pe+y*te,c[6]=E*B+w*V+b*J+y*me,c[10]=E*T+w*Z+b*U+y*Te,c[14]=E*z+w*he+b*G+y*D,c[3]=P*L+F*q+N*pe+O*te,c[7]=P*B+F*V+N*J+O*me,c[11]=P*T+F*Z+N*U+O*Te,c[15]=P*z+F*he+N*G+O*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],w=e[7],b=e[11],y=e[15],P=m*S-p*g,F=h*S-p*v,N=h*g-m*v,O=f*S-p*_,L=f*g-m*_,B=f*v-h*_;return n*(w*P-b*F+y*N)-r*(E*P-b*O+y*L)+l*(E*F-w*O+y*B)-c*(E*N-w*L+b*B)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],l=e[8],c=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return n*(f*_-h*p)-r*(c*_-h*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],w=e[13],b=e[14],y=e[15],P=n*h-r*f,F=n*m-l*f,N=n*p-c*f,O=r*m-l*h,L=r*p-c*h,B=l*p-c*m,T=_*w-v*E,z=_*b-g*E,q=_*y-S*E,V=v*b-g*w,Z=v*y-S*w,he=g*y-S*b,pe=P*he-F*Z+N*V+O*q-L*z+B*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/pe;return e[0]=(h*he-m*Z+p*V)*J,e[1]=(l*Z-r*he-c*V)*J,e[2]=(w*B-b*L+y*O)*J,e[3]=(g*L-v*B-S*O)*J,e[4]=(m*q-f*he-p*z)*J,e[5]=(n*he-l*q+c*z)*J,e[6]=(b*N-E*B-y*F)*J,e[7]=(_*B-g*N+S*F)*J,e[8]=(f*Z-h*q+p*T)*J,e[9]=(r*q-n*Z-c*T)*J,e[10]=(E*L-w*N+y*P)*J,e[11]=(v*N-_*L-S*P)*J,e[12]=(h*z-f*V-m*T)*J,e[13]=(n*V-r*z+l*T)*J,e[14]=(w*F-E*O-b*P)*J,e[15]=(_*O-v*F+g*P)*J,this}scale(e){const n=this.elements,r=e.x,l=e.y,c=e.z;return n[0]*=r,n[4]*=l,n[8]*=c,n[1]*=r,n[5]*=l,n[9]*=c,n[2]*=r,n[6]*=l,n[10]*=c,n[3]*=r,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),l=Math.sin(n),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,r){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,E=c*v,w=f*_,b=f*v,y=h*v,P=m*p,F=m*_,N=m*v,O=r.x,L=r.y,B=r.z;return l[0]=(1-(w+y))*O,l[1]=(S+N)*O,l[2]=(E-F)*O,l[3]=0,l[4]=(S-N)*L,l[5]=(1-(g+y))*L,l[6]=(b+P)*L,l[7]=0,l[8]=(E+F)*B,l[9]=(b-P)*B,l[10]=(1-(g+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let f=Zs.set(l[0],l[1],l[2]).length();const h=Zs.set(l[4],l[5],l[6]).length(),m=Zs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),zi.copy(this);const p=1/f,_=1/h,v=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,n.setFromRotationMatrix(zi),r.x=f,r.y=h,r.z=m,this}makePerspective(e,n,r,l,c,f,h=ia,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(r-l),g=(n+e)/(n-e),S=(r+l)/(r-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===ia)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===qu)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,l,c,f,h=ia,m=!1){const p=this.elements,_=2/(n-e),v=2/(r-l),g=-(n+e)/(n-e),S=-(r+l)/(r-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===ia)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===qu)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Qu.prototype.isMatrix4=!0;let dn=Qu;const Zs=new ae,zi=new dn,fR=new ae(0,0,0),dR=new ae(1,1,1),pr=new ae,au=new ae,pi=new ae,Cx=new dn,wx=new So;class fs{constructor(e=0,n=0,r=0,l=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,l=this._order){return this._x=e,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Cx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cx,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wx.setFromEuler(this),this.setFromQuaternion(wx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class eb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hR=0;const Dx=new ae,Ks=new So,Aa=new dn,ru=new ae,vl=new ae,pR=new ae,mR=new So,Nx=new ae(1,0,0),Lx=new ae(0,1,0),Ux=new ae(0,0,1),Ox={type:"added"},gR={type:"removed"},Qs={type:"childadded",child:null},Lh={type:"childremoved",child:null};class qn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ae,n=new fs,r=new So,l=new ae(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ht}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Nx,e)}rotateY(e){return this.rotateOnAxis(Lx,e)}rotateZ(e){return this.rotateOnAxis(Ux,e)}translateOnAxis(e,n){return Dx.copy(e).applyQuaternion(this.quaternion),this.position.add(Dx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nx,e)}translateY(e){return this.translateOnAxis(Lx,e)}translateZ(e){return this.translateOnAxis(Ux,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ru.copy(e):ru.set(e,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(vl,ru,this.up):Aa.lookAt(ru,vl,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Aa),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ox),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gR),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ox),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,pR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,mR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*l,c[13]+=r-c[1]*n-c[5]*r-c[9]*l,c[14]+=l-c[2]*n-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(n){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ae(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class su extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vR={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const b=n.getJointPose(w,r),y=this._getHandJoint(p,w);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=n.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(vR)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new su;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const tb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Oh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,r,l=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,n,r,l=At.workingColorSpace){if(e=aR(e,1),n=Rt(n,0,1),r=Rt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Oh(f,c,e+1/3),this.g=Oh(f,c,e),this.b=Oh(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,n=Ci){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ci){const r=tb[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return At.workingToColorSpace(Gn.copy(this),e),Math.round(Rt(Gn.r*255,0,255))*65536+Math.round(Rt(Gn.g*255,0,255))*256+Math.round(Rt(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Gn.copy(this),n);const r=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){At.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,r=Gn.g,l=Gn.b;return e!==Ci?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(ou);const r=Rh(mr.h,ou.h,n),l=Rh(mr.s,ou.s,n),c=Rh(mr.l,ou.l,n);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*l,this.g=c[1]*n+c[4]*r+c[7]*l,this.b=c[2]*n+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Et;Et.NAMES=tb;class _R extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new ae,Ra=new ae,Ph=new ae,Ca=new ae,$s=new ae,Js=new ae,Px=new ae,Ih=new ae,zh=new ae,Fh=new ae,Bh=new fn,Hh=new fn,Gh=new fn;class Hi{constructor(e=new ae,n=new ae,r=new ae){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,l){l.subVectors(r,n),Fi.subVectors(e,n),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,r,l,c){Fi.subVectors(l,n),Ra.subVectors(r,n),Ph.subVectors(e,n);const f=Fi.dot(Fi),h=Fi.dot(Ra),m=Fi.dot(Ph),p=Ra.dot(Ra),_=Ra.dot(Ph),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,l){return this.getBarycoord(e,n,r,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,n,r,l,c,f,h,m){return this.getBarycoord(e,n,r,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(f,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,n,r,l,c,f){return Bh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Bh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,r),Gh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Bh,c.x),f.addScaledVector(Hh,c.y),f.addScaledVector(Gh,c.z),f}static isFrontFacing(e,n,r,l){return Fi.subVectors(r,n),Ra.subVectors(e,n),Fi.cross(Ra).dot(l)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,l){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,r,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Fi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,n,r,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,l=this.b,c=this.c;let f,h;$s.subVectors(l,r),Js.subVectors(c,r),Ih.subVectors(e,r);const m=$s.dot(Ih),p=Js.dot(Ih);if(m<=0&&p<=0)return n.copy(r);zh.subVectors(e,l);const _=$s.dot(zh),v=Js.dot(zh);if(_>=0&&v<=_)return n.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(r).addScaledVector($s,f);Fh.subVectors(e,c);const S=$s.dot(Fh),E=Js.dot(Fh);if(E>=0&&S<=E)return n.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(r).addScaledVector(Js,h);const b=_*E-S*v;if(b<=0&&v-_>=0&&S-E>=0)return Px.subVectors(c,l),h=(v-_)/(v-_+(S-E)),n.copy(l).addScaledVector(Px,h);const y=1/(b+w+g);return f=w*y,h=g*y,n.copy(r).addScaledVector($s,f).addScaledVector(Js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new ae(1/0,1/0,1/0),n=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lu.copy(r.boundingBox)),lu.applyMatrix4(e.matrixWorld),this.union(lu)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),cu.subVectors(this.max,_l),eo.subVectors(e.a,_l),to.subVectors(e.b,_l),no.subVectors(e.c,_l),gr.subVectors(to,eo),vr.subVectors(no,to),jr.subVectors(eo,no);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-jr.z,jr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,jr.z,0,-jr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-jr.y,jr.x,0];return!Vh(n,eo,to,no,cu)||(n=[1,0,0,0,1,0,0,0,1],!Vh(n,eo,to,no,cu))?!1:(uu.crossVectors(gr,vr),n=[uu.x,uu.y,uu.z],Vh(n,eo,to,no,cu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Bi=new ae,lu=new zl,eo=new ae,to=new ae,no=new ae,gr=new ae,vr=new ae,jr=new ae,_l=new ae,cu=new ae,uu=new ae,Yr=new ae;function Vh(a,e,n,r,l){for(let c=0,f=a.length-3;c<=f;c+=3){Yr.fromArray(a,c);const h=l.x*Math.abs(Yr.x)+l.y*Math.abs(Yr.y)+l.z*Math.abs(Yr.z),m=e.dot(Yr),p=n.dot(Yr),_=r.dot(Yr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new ae,fu=new Pt;let xR=0;class bn extends ds{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Sx,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fu.fromBufferAttribute(this,n),fu.applyMatrix3(e),this.setXY(n,fu.x,fu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=gl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,l){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),l=ei(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,n,r,l,c){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nb extends bn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ib extends bn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ki extends bn{constructor(e,n,r){super(new Float32Array(e),n,r)}}const yR=new zl,xl=new ae,kh=new ae;class Fl{constructor(e=new ae,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):yR.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const n=xl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(xl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(kh)),this.expandByPoint(xl.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SR=0;const Ri=new dn,Xh=new qn,io=new ae,mi=new zl,yl=new zl,wn=new ae;class ni extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eR(e)?ib:nb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,n,r){return Ri.makeTranslation(e,n,r),this.applyMatrix4(Ri),this}scale(e,n,r){return Ri.makeScale(e,n,r),this.applyMatrix4(Ri),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(e.length,n.count);for(let l=0;l<r;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,l=n.length;r<l;r++){const c=n[r];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,yl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,yl.max),mi.expandByPoint(wn)):(mi.expandByPoint(yl.min),mi.expandByPoint(yl.max))}mi.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(wn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)wn.fromBufferAttribute(h,p),m&&(io.fromBufferAttribute(e,p),wn.add(io)),l=Math.max(l,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new bn(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ae,m[T]=new ae;const p=new ae,_=new ae,v=new ae,g=new Pt,S=new Pt,E=new Pt,w=new ae,b=new ae;function y(T,z,q){p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,z),v.fromBufferAttribute(r,q),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,z),E.fromBufferAttribute(c,q),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),h[T].add(w),h[z].add(w),h[q].add(w),m[T].add(b),m[z].add(b),m[q].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,z=P.length;T<z;++T){const q=P[T],V=q.start,Z=q.count;for(let he=V,pe=V+Z;he<pe;he+=3)y(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const F=new ae,N=new ae,O=new ae,L=new ae;function B(T){O.fromBufferAttribute(l,T),L.copy(O);const z=h[T];F.copy(z),F.sub(O.multiplyScalar(O.dot(z))).normalize(),N.crossVectors(L,z);const V=N.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,V)}for(let T=0,z=P.length;T<z;++T){const q=P[T],V=q.start,Z=q.count;for(let he=V,pe=V+Z;he<pe;he+=3)B(e.getX(he+0)),B(e.getX(he+1)),B(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const l=new ae,c=new ae,f=new ae,h=new ae,m=new ae,p=new ae,_=new ae,v=new ae;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),h.add(_),m.add(_),p.add(_),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,b=m.length;w<b;w++){h.isInterleavedBufferAttribute?S=m[w]*h.data.stride+h.offset:S=m[w]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new bn(g,_,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,r);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bR=0;class bo extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=fo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Mp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ct(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bp&&(r.blendSrc=this.blendSrc),this.blendDst!==Mp&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Pt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new ae,Wh=new ae,du=new ae,_r=new ae,qh=new ae,hu=new ae,jh=new ae;class Fm{constructor(e=new ae,n=new ae(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,r,l){Wh.copy(e).add(n).multiplyScalar(.5),du.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Wh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(du),h=_r.dot(this.direction),m=-_r.dot(du),p=_r.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wh).addScaledVector(du,g),S}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),l=Da.dot(Da)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,r,l,c){qh.subVectors(n,e),hu.subVectors(r,e),jh.crossVectors(qh,hu);let f=this.direction.dot(jh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;_r.subVectors(this.origin,e);const m=h*this.direction.dot(hu.crossVectors(_r,hu));if(m<0)return null;const p=h*this.direction.dot(qh.cross(_r));if(p<0||m+p>f)return null;const _=-h*_r.dot(jh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ab extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=IS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ix=new dn,Zr=new Fm,pu=new Fl,zx=new ae,mu=new ae,gu=new ae,vu=new ae,Yh=new ae,_u=new ae,Fx=new ae,xu=new ae;class Ba extends qn{constructor(e=new ni,n=new ab){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){_u.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Yh.fromBufferAttribute(v,e),f?_u.addScaledVector(Yh,_):_u.addScaledVector(Yh.sub(n),_))}n.add(_u)}return n}raycast(e,n){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pu.copy(r.boundingSphere),pu.applyMatrix4(c),Zr.copy(e.ray).recast(e.near),!(pu.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(pu,zx)===null||Zr.origin.distanceToSquared(zx)>(e.far-e.near)**2))&&(Ix.copy(c).invert(),Zr.copy(e.ray).applyMatrix4(Ix),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let N=P,O=F;N<O;N+=3){const L=h.getX(N),B=h.getX(N+1),T=h.getX(N+2);l=yu(this,y,e,r,p,_,v,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let b=E,y=w;b<y;b+=3){const P=h.getX(b),F=h.getX(b+1),N=h.getX(b+2);l=yu(this,f,e,r,p,_,v,P,F,N),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let N=P,O=F;N<O;N+=3){const L=N,B=N+1,T=N+2;l=yu(this,y,e,r,p,_,v,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let b=E,y=w;b<y;b+=3){const P=b,F=b+1,N=b+2;l=yu(this,f,e,r,p,_,v,P,F,N),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}}}function MR(a,e,n,r,l,c,f,h){let m;if(e.side===ti?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===Tr,h),m===null)return null;xu.copy(h),xu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(xu);return p<n.near||p>n.far?null:{distance:p,point:xu.clone(),object:a}}function yu(a,e,n,r,l,c,f,h,m,p){a.getVertexPosition(h,mu),a.getVertexPosition(m,gu),a.getVertexPosition(p,vu);const _=MR(a,e,n,r,mu,gu,vu,Fx);if(_){const v=new ae;Hi.getBarycoord(Fx,mu,gu,vu,v),l&&(_.uv=Hi.getInterpolatedAttribute(l,h,m,p,v,new Pt)),c&&(_.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new Pt)),f&&(_.normal=Hi.getInterpolatedAttribute(f,h,m,p,v,new ae),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ae,materialIndex:0};Hi.getNormal(mu,gu,vu,g.normal),_.face=g,_.barycoord=v}return _}class ER extends Wn{constructor(e=null,n=1,r=1,l,c,f,h,m,p=Pn,_=Pn,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new ae,TR=new ae,AR=new ht;class Jr{constructor(e=new ae(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,l){return this.normal.set(e,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const l=Zh.subVectors(r,n).cross(TR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const l=e.delta(Zh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||AR.getNormalMatrix(e),l=this.coplanarPoint(Zh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Fl,RR=new Pt(.5,.5),Su=new ae;class rb{constructor(e=new Jr,n=new Jr,r=new Jr,l=new Jr,c=new Jr,f=new Jr){this.planes=[e,n,r,l,c,f]}set(e,n,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ia,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],w=c[9],b=c[10],y=c[11],P=c[12],F=c[13],N=c[14],O=c[15];if(l[0].setComponents(p-f,S-_,y-E,O-P).normalize(),l[1].setComponents(p+f,S+_,y+E,O+P).normalize(),l[2].setComponents(p+h,S+v,y+w,O+F).normalize(),l[3].setComponents(p-h,S-v,y-w,O-F).normalize(),r)l[4].setComponents(m,g,b,N).normalize(),l[5].setComponents(p-m,S-g,y-b,O-N).normalize();else if(l[4].setComponents(p-m,S-g,y-b,O-N).normalize(),n===ia)l[5].setComponents(p+m,S+g,y+b,O+N).normalize();else if(n===qu)l[5].setComponents(m,g,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=RR.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(Su.x=l.normal.x>0?e.max.x:e.min.x,Su.y=l.normal.y>0?e.max.y:e.min.y,Su.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Su)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CR extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yu=new ae,Zu=new ae,Bx=new dn,Sl=new Fm,bu=new Fl,Kh=new ae,Hx=new ae;class wR extends qn{constructor(e=new ni,n=new CR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let l=1,c=n.count;l<c;l++)Yu.fromBufferAttribute(n,l-1),Zu.fromBufferAttribute(n,l),r[l]=r[l-1],r[l]+=Yu.distanceTo(Zu);e.setAttribute("lineDistance",new ki(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(l),bu.radius+=c,e.ray.intersectsSphere(bu)===!1)return;Bx.copy(l).invert(),Sl.copy(e.ray).applyMatrix4(Bx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=S,b=E-1;w<b;w+=p){const y=_.getX(w),P=_.getX(w+1),F=Mu(this,e,Sl,m,y,P,w);F&&n.push(F)}if(this.isLineLoop){const w=_.getX(E-1),b=_.getX(S),y=Mu(this,e,Sl,m,w,b,E-1);y&&n.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let w=S,b=E-1;w<b;w+=p){const y=Mu(this,e,Sl,m,w,w+1,w);y&&n.push(y)}if(this.isLineLoop){const w=Mu(this,e,Sl,m,E-1,S,E-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Mu(a,e,n,r,l,c,f){const h=a.geometry.attributes.position;if(Yu.fromBufferAttribute(h,l),Zu.fromBufferAttribute(h,c),n.distanceSqToSegment(Yu,Zu,Kh,Hx)>r)return;Kh.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Kh);if(!(p<e.near||p>e.far))return{distance:p,point:Hx.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const Gx=new ae,Vx=new ae;class DR extends wR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let l=0,c=n.count;l<c;l+=2)Gx.fromBufferAttribute(n,l),Vx.fromBufferAttribute(n,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Gx.distanceTo(Vx);e.setAttribute("lineDistance",new ki(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NR extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kx=new dn,um=new Fm,Eu=new Fl,Tu=new ae;class Xx extends qn{constructor(e=new ni,n=new NR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(l),Eu.radius+=c,e.ray.intersectsSphere(Eu)===!1)return;kx.copy(l).invert(),um.copy(e.ray).applyMatrix4(kx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=g,w=S;E<w;E++){const b=p.getX(E);Tu.fromBufferAttribute(v,b),Wx(Tu,b,m,l,e,n,this)}}else{const g=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=g,w=S;E<w;E++)Tu.fromBufferAttribute(v,E),Wx(Tu,E,m,l,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Wx(a,e,n,r,l,c,f){const h=um.distanceSqToPoint(a);if(h<n){const m=new ae;um.closestPointToPoint(a,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class sb extends Wn{constructor(e=[],n=cs,r,l,c,f,h,m,p,_){super(e,n,r,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _o extends Wn{constructor(e,n,r=sa,l,c,f,h=Pn,m=Pn,p,_=Fa,v=1){if(_!==Fa&&_!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,l,c,f,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class LR extends _o{constructor(e,n=sa,r=cs,l,c,f=Pn,h=Pn,m,p=Fa){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,r,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ob extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends ni{constructor(e=1,n=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,r,n,e,f,c,0),E("z","y","x",1,-1,r,n,-e,f,c,1),E("x","z","y",1,1,e,r,n,l,f,2),E("x","z","y",1,-1,e,r,-n,l,f,3),E("x","y","z",1,-1,e,n,r,l,c,4),E("x","y","z",-1,-1,e,n,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(v,2));function E(w,b,y,P,F,N,O,L,B,T,z){const q=N/B,V=O/T,Z=N/2,he=O/2,pe=L/2,J=B+1,U=T+1;let G=0,te=0;const me=new ae;for(let Te=0;Te<U;Te++){const D=Te*V-he;for(let k=0;k<J;k++){const Q=k*q-Z;me[w]=Q*P,me[b]=D*F,me[y]=pe,p.push(me.x,me.y,me.z),me[w]=0,me[b]=0,me[y]=L>0?1:-1,_.push(me.x,me.y,me.z),v.push(k/B),v.push(1-Te/T),G+=1}}for(let Te=0;Te<T;Te++)for(let D=0;D<B;D++){const k=g+D+J*Te,Q=g+D+J*(Te+1),Me=g+(D+1)+J*(Te+1),Ae=g+(D+1)+J*Te;m.push(k,Q,Ae),m.push(Q,Me,Ae),te+=6}h.addGroup(S,te,z),S+=te,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rf extends ni{constructor(e=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:l};const c=e/2,f=n/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=n/m,S=[],E=[],w=[],b=[];for(let y=0;y<_;y++){const P=y*g-f;for(let F=0;F<p;F++){const N=F*v-c;E.push(N,-P,0),w.push(0,0,1),b.push(F/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<h;P++){const F=P+p*y,N=P+p*(y+1),O=P+1+p*(y+1),L=P+1+p*y;S.push(F,N,L),S.push(N,O,L)}this.setIndex(S),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(w,3)),this.setAttribute("uv",new ki(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const l=a[n][r];if(qx(l))l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=l.clone();else if(Array.isArray(l))if(qx(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[n][r]=c}else e[n][r]=l.slice();else e[n][r]=l}}return e}function Xn(a){const e={};for(let n=0;n<a.length;n++){const r=xo(a[n]);for(const l in r)e[l]=r[l]}return e}function qx(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function UR(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function lb(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const OR={clone:xo,merge:Xn};var PR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PR,this.fragmentShader=IR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=UR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=n[l.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(l.value);break;case"v2":this.uniforms[r].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new ae().fromArray(l.value);break;case"v4":this.uniforms[r].value=new fn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[r].value=new dn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zR extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FR extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BR extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Au=new ae,Ru=new So,Qi=new ae;class cb extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Au,Ru,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Au,Ru,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ae,jx=new Pt,Yx=new Pt;class wi extends cb{constructor(e=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cm*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,jx,Yx),n.subVectors(Yx,jx)}setViewOffset(e,n,r,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ah*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ub extends cb{constructor(e=-1,n=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ao=-90,ro=1;class HR extends qn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(ao,ro,e,n);l.layers=this.layers,this.add(l);const c=new wi(ao,ro,e,n);c.layers=this.layers,this.add(c);const f=new wi(ao,ro,e,n);f.layers=this.layers,this.add(f);const h=new wi(ao,ro,e,n);h.layers=this.layers,this.add(h);const m=new wi(ao,ro,e,n);m.layers=this.layers,this.add(m);const p=new wi(ao,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class GR extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class VR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const km=class km{constructor(e,n,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,l){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=l,this}};km.prototype.isMatrix2=!0;let Zx=km;function Kx(a,e,n,r){const l=kR(r);switch(n){case ZS:return a*e;case QS:return a*e/l.components*l.byteLength;case Lm:return a*e/l.components*l.byteLength;case us:return a*e*2/l.components*l.byteLength;case Um:return a*e*2/l.components*l.byteLength;case KS:return a*e*3/l.components*l.byteLength;case Vi:return a*e*4/l.components*l.byteLength;case Om:return a*e*4/l.components*l.byteLength;case Ou:case Pu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Iu:case zu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Op:case Ip:return Math.max(a,16)*Math.max(e,8)/4;case Up:case Pp:return Math.max(a,8)*Math.max(e,8)/2;case zp:case Fp:case Hp:case Gp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Bp:case Vu:case Vp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case kp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case qp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case jp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Qp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case $p:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case em:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case tm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case nm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case im:case am:case rm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case sm:case om:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ku:case lm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kR(a){switch(a){case Di:case WS:return{byteLength:1,components:1};case Nl:case qS:case za:return{byteLength:2,components:1};case Dm:case Nm:return{byteLength:2,components:4};case sa:case wm:case na:return{byteLength:4,components:1};case jS:case YS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cm}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cm);function fb(){let a=null,e=!1,n=null,r=null;function l(c,f){n(c,f),r=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(l),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function XR(a){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const _=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];a.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var WR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qR=`#ifdef USE_ALPHAHASH
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
#endif`,jR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
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
#endif`,$R=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JR=`#ifdef USE_BATCHING
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
#endif`,eC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aC=`#ifdef USE_IRIDESCENCE
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
#endif`,rC=`#ifdef USE_BUMPMAP
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
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pC=`#define PI 3.141592653589793
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
} // validated`,mC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gC=`vec3 transformedNormal = objectNormal;
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
#endif`,vC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_C=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SC="gl_FragColor = linearToOutputTexel( gl_FragColor );",bC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MC=`#ifdef USE_ENVMAP
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
#endif`,EC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TC=`#ifdef USE_ENVMAP
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
#endif`,AC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RC=`#ifdef USE_ENVMAP
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
#endif`,CC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LC=`#ifdef USE_GRADIENTMAP
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
}`,UC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zC=`#ifdef USE_ENVMAP
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
#endif`,FC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VC=`PhysicalMaterial material;
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
#endif`,kC=`uniform sampler2D dfgLUT;
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
}`,XC=`
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
#endif`,WC=`#if defined( RE_IndirectDiffuse )
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
#endif`,qC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,YC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$C=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ew=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tw=`#if defined( USE_POINTS_UV )
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
#endif`,nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`#ifdef USE_MORPHTARGETS
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
#endif`,lw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pw=`#ifdef USE_NORMALMAP
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
#endif`,mw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dw=`float getShadowMask() {
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
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lw=`#ifdef USE_SKINNING
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
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ow=`#ifdef USE_SKINNING
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
#endif`,Pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bw=`#ifdef USE_TRANSMISSION
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
#endif`,Hw=`#ifdef USE_TRANSMISSION
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qw=`uniform sampler2D t2D;
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`#include <common>
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
}`,$w=`#if DEPTH_PACKING == 3200
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
}`,Jw=`#define DISTANCE
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
}`,eD=`#define DISTANCE
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
}`,tD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iD=`uniform float scale;
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
}`,aD=`uniform vec3 diffuse;
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
}`,rD=`#include <common>
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
}`,sD=`uniform vec3 diffuse;
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
}`,oD=`#define LAMBERT
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
}`,lD=`#define LAMBERT
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
}`,cD=`#define MATCAP
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
}`,uD=`#define MATCAP
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
}`,fD=`#define NORMAL
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
}`,dD=`#define NORMAL
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
}`,hD=`#define PHONG
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
}`,pD=`#define PHONG
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
}`,mD=`#define STANDARD
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
}`,gD=`#define STANDARD
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
}`,vD=`#define TOON
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
}`,_D=`#define TOON
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
}`,xD=`uniform float size;
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
}`,yD=`uniform vec3 diffuse;
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
}`,SD=`#include <common>
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
}`,bD=`uniform vec3 color;
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
}`,MD=`uniform float rotation;
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
}`,ED=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:WR,alphahash_pars_fragment:qR,alphamap_fragment:jR,alphamap_pars_fragment:YR,alphatest_fragment:ZR,alphatest_pars_fragment:KR,aomap_fragment:QR,aomap_pars_fragment:$R,batching_pars_vertex:JR,batching_vertex:eC,begin_vertex:tC,beginnormal_vertex:nC,bsdfs:iC,iridescence_fragment:aC,bumpmap_pars_fragment:rC,clipping_planes_fragment:sC,clipping_planes_pars_fragment:oC,clipping_planes_pars_vertex:lC,clipping_planes_vertex:cC,color_fragment:uC,color_pars_fragment:fC,color_pars_vertex:dC,color_vertex:hC,common:pC,cube_uv_reflection_fragment:mC,defaultnormal_vertex:gC,displacementmap_pars_vertex:vC,displacementmap_vertex:_C,emissivemap_fragment:xC,emissivemap_pars_fragment:yC,colorspace_fragment:SC,colorspace_pars_fragment:bC,envmap_fragment:MC,envmap_common_pars_fragment:EC,envmap_pars_fragment:TC,envmap_pars_vertex:AC,envmap_physical_pars_fragment:zC,envmap_vertex:RC,fog_vertex:CC,fog_pars_vertex:wC,fog_fragment:DC,fog_pars_fragment:NC,gradientmap_pars_fragment:LC,lightmap_pars_fragment:UC,lights_lambert_fragment:OC,lights_lambert_pars_fragment:PC,lights_pars_begin:IC,lights_toon_fragment:FC,lights_toon_pars_fragment:BC,lights_phong_fragment:HC,lights_phong_pars_fragment:GC,lights_physical_fragment:VC,lights_physical_pars_fragment:kC,lights_fragment_begin:XC,lights_fragment_maps:WC,lights_fragment_end:qC,lightprobes_pars_fragment:jC,logdepthbuf_fragment:YC,logdepthbuf_pars_fragment:ZC,logdepthbuf_pars_vertex:KC,logdepthbuf_vertex:QC,map_fragment:$C,map_pars_fragment:JC,map_particle_fragment:ew,map_particle_pars_fragment:tw,metalnessmap_fragment:nw,metalnessmap_pars_fragment:iw,morphinstance_vertex:aw,morphcolor_vertex:rw,morphnormal_vertex:sw,morphtarget_pars_vertex:ow,morphtarget_vertex:lw,normal_fragment_begin:cw,normal_fragment_maps:uw,normal_pars_fragment:fw,normal_pars_vertex:dw,normal_vertex:hw,normalmap_pars_fragment:pw,clearcoat_normal_fragment_begin:mw,clearcoat_normal_fragment_maps:gw,clearcoat_pars_fragment:vw,iridescence_pars_fragment:_w,opaque_fragment:xw,packing:yw,premultiplied_alpha_fragment:Sw,project_vertex:bw,dithering_fragment:Mw,dithering_pars_fragment:Ew,roughnessmap_fragment:Tw,roughnessmap_pars_fragment:Aw,shadowmap_pars_fragment:Rw,shadowmap_pars_vertex:Cw,shadowmap_vertex:ww,shadowmask_pars_fragment:Dw,skinbase_vertex:Nw,skinning_pars_vertex:Lw,skinning_vertex:Uw,skinnormal_vertex:Ow,specularmap_fragment:Pw,specularmap_pars_fragment:Iw,tonemapping_fragment:zw,tonemapping_pars_fragment:Fw,transmission_fragment:Bw,transmission_pars_fragment:Hw,uv_pars_fragment:Gw,uv_pars_vertex:Vw,uv_vertex:kw,worldpos_vertex:Xw,background_vert:Ww,background_frag:qw,backgroundCube_vert:jw,backgroundCube_frag:Yw,cube_vert:Zw,cube_frag:Kw,depth_vert:Qw,depth_frag:$w,distance_vert:Jw,distance_frag:eD,equirect_vert:tD,equirect_frag:nD,linedashed_vert:iD,linedashed_frag:aD,meshbasic_vert:rD,meshbasic_frag:sD,meshlambert_vert:oD,meshlambert_frag:lD,meshmatcap_vert:cD,meshmatcap_frag:uD,meshnormal_vert:fD,meshnormal_frag:dD,meshphong_vert:hD,meshphong_frag:pD,meshphysical_vert:mD,meshphysical_frag:gD,meshtoon_vert:vD,meshtoon_frag:_D,points_vert:xD,points_frag:yD,shadow_vert:SD,shadow_frag:bD,sprite_vert:MD,sprite_frag:ED},Be={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ea={basic:{uniforms:Xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Xn([Be.common,Be.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Xn([Be.lights,Be.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ea.physical={uniforms:Xn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Cu={r:0,b:0,g:0},TD=new dn,db=new ht;db.set(-1,0,0,0,1,0,0,0,1);function AD(a,e,n,r,l,c){const f=new Et(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const N=P.backgroundBlurriness>0;F=e.get(F,N)}return F}function E(P){let F=!1;const N=S(P);N===null?b(f,h):N&&N.isColor&&(b(N,1),F=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(P,F){const N=S(F);N&&(N.isCubeTexture||N.mapping===af)?(p===void 0&&(p=new Ba(new Bl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:xo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TD.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(db),p.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,(_!==N||v!==N.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=a.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ba(new rf(2,2),new gi({name:"BackgroundMaterial",uniforms:xo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=a.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,F){P.getRGB(Cu,lb(a)),n.buffers.color.setClear(Cu.r,Cu.g,Cu.b,F,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,F=1){f.set(P),h=F,b(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,b(f,h)},render:E,addToRenderList:w,dispose:y}}function RD(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function h(V,Z,he,pe,J){let U=!1;const G=v(V,pe,he,Z);c!==G&&(c=G,p(c.object)),U=S(V,pe,he,J),U&&E(V,pe,he,J),J!==null&&e.update(J,a.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,N(V,Z,he,pe),J!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return a.createVertexArray()}function p(V){return a.bindVertexArray(V)}function _(V){return a.deleteVertexArray(V)}function v(V,Z,he,pe){const J=pe.wireframe===!0;let U=r[Z.id];U===void 0&&(U={},r[Z.id]=U);const G=V.isInstancedMesh===!0?V.id:0;let te=U[G];te===void 0&&(te={},U[G]=te);let me=te[he.id];me===void 0&&(me={},te[he.id]=me);let Te=me[J];return Te===void 0&&(Te=g(m()),me[J]=Te),Te}function g(V){const Z=[],he=[],pe=[];for(let J=0;J<n;J++)Z[J]=0,he[J]=0,pe[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:he,attributeDivisors:pe,object:V,attributes:{},index:null}}function S(V,Z,he,pe){const J=c.attributes,U=Z.attributes;let G=0;const te=he.getAttributes();for(const me in te)if(te[me].location>=0){const D=J[me];let k=U[me];if(k===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(k=V.instanceColor)),D===void 0||D.attribute!==k||k&&D.data!==k.data)return!0;G++}return c.attributesNum!==G||c.index!==pe}function E(V,Z,he,pe){const J={},U=Z.attributes;let G=0;const te=he.getAttributes();for(const me in te)if(te[me].location>=0){let D=U[me];D===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const k={};k.attribute=D,D&&D.data&&(k.data=D.data),J[me]=k,G++}c.attributes=J,c.attributesNum=G,c.index=pe}function w(){const V=c.newAttributes;for(let Z=0,he=V.length;Z<he;Z++)V[Z]=0}function b(V){y(V,0)}function y(V,Z){const he=c.newAttributes,pe=c.enabledAttributes,J=c.attributeDivisors;he[V]=1,pe[V]===0&&(a.enableVertexAttribArray(V),pe[V]=1),J[V]!==Z&&(a.vertexAttribDivisor(V,Z),J[V]=Z)}function P(){const V=c.newAttributes,Z=c.enabledAttributes;for(let he=0,pe=Z.length;he<pe;he++)Z[he]!==V[he]&&(a.disableVertexAttribArray(he),Z[he]=0)}function F(V,Z,he,pe,J,U,G){G===!0?a.vertexAttribIPointer(V,Z,he,J,U):a.vertexAttribPointer(V,Z,he,pe,J,U)}function N(V,Z,he,pe){w();const J=pe.attributes,U=he.getAttributes(),G=Z.defaultAttributeValues;for(const te in U){const me=U[te];if(me.location>=0){let Te=J[te];if(Te===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(Te=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(Te=V.instanceColor)),Te!==void 0){const D=Te.normalized,k=Te.itemSize,Q=e.get(Te);if(Q===void 0)continue;const Me=Q.buffer,Ae=Q.type,K=Q.bytesPerElement,oe=Ae===a.INT||Ae===a.UNSIGNED_INT||Te.gpuType===wm;if(Te.isInterleavedBufferAttribute){const fe=Te.data,Ce=fe.stride,Qe=Te.offset;if(fe.isInstancedInterleavedBuffer){for(let ye=0;ye<me.locationSize;ye++)y(me.location+ye,fe.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<me.locationSize;ye++)b(me.location+ye);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let ye=0;ye<me.locationSize;ye++)F(me.location+ye,k/me.locationSize,Ae,D,Ce*K,(Qe+k/me.locationSize*ye)*K,oe)}else{if(Te.isInstancedBufferAttribute){for(let fe=0;fe<me.locationSize;fe++)y(me.location+fe,Te.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let fe=0;fe<me.locationSize;fe++)b(me.location+fe);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let fe=0;fe<me.locationSize;fe++)F(me.location+fe,k/me.locationSize,Ae,D,k*K,k/me.locationSize*fe*K,oe)}}else if(G!==void 0){const D=G[te];if(D!==void 0)switch(D.length){case 2:a.vertexAttrib2fv(me.location,D);break;case 3:a.vertexAttrib3fv(me.location,D);break;case 4:a.vertexAttrib4fv(me.location,D);break;default:a.vertexAttrib1fv(me.location,D)}}}}P()}function O(){z();for(const V in r){const Z=r[V];for(const he in Z){const pe=Z[he];for(const J in pe){const U=pe[J];for(const G in U)_(U[G].object),delete U[G];delete pe[J]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const Z=r[V.id];for(const he in Z){const pe=Z[he];for(const J in pe){const U=pe[J];for(const G in U)_(U[G].object),delete U[G];delete pe[J]}}delete r[V.id]}function B(V){for(const Z in r){const he=r[Z];for(const pe in he){const J=he[pe];if(J[V.id]===void 0)continue;const U=J[V.id];for(const G in U)_(U[G].object),delete U[G];delete J[V.id]}}}function T(V){for(const Z in r){const he=r[Z],pe=V.isInstancedMesh===!0?V.id:0,J=he[pe];if(J!==void 0){for(const U in J){const G=J[U];for(const te in G)_(G[te].object),delete G[te];delete J[U]}delete he[pe],Object.keys(he).length===0&&delete r[Z]}}}function z(){q(),f=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:b,disableUnusedAttributes:P}}function CD(a,e,n){let r;function l(m){r=m}function c(m,p){a.drawArrays(r,m,p),n.update(p,r,1)}function f(m,p,_){_!==0&&(a.drawArraysInstanced(r,m,p,_),n.update(p,r,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];n.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function wD(a,e,n,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Vi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Di&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:N,maxSamples:O,samples:L}}function DD(a){const e=this;let n=null,r=0,l=!1,c=!1;const f=new Jr,h=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||l;return l=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,b=v.clipShadows,y=a.get(v);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const P=c?0:r,F=P*4;let N=y.clippingState||null;m.value=N,N=_(E,g,F,S);for(let O=0;O!==F;++O)N[O]=n[O];y.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,E){const w=v!==null?v.length:0;let b=null;if(w!==0){if(b=m.value,E!==!0||b===null){const y=S+w*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<y)&&(b=new Float32Array(y));for(let F=0,N=S;F!==w;++F,N+=4)f.copy(v[F]).applyMatrix4(P,h),f.normal.toArray(b,N),b[N+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,b}}const Sr=4,Qx=[.125,.215,.35,.446,.526,.582],ns=20,ND=256,bl=new ub,$x=new Et;let Qh=null,$h=0,Jh=0,ep=!1;const LD=new ae;class Jx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,l=100,c={}){const{size:f=256,position:h=LD}=c;Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ny(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ty(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,$h,Jh),this._renderer.xr.enabled=ep,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:za,format:Vi,colorSpace:Xu,depthBuffer:!1},l=ey(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ey(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UD(c)),this._blurMaterial=PD(c,e,n),this._ggxMaterial=OD(c,e,n)}return l}_compileMaterial(e){const n=new Ba(new ni,e);this._renderer.compile(n,bl)}_sceneToCubeUV(e,n,r,l,c){const m=new wi(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor($x),v.toneMapping=aa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new Bl,new ab({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,b=w.material;let y=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,y=!0):(b.color.copy($x),y=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):N===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const O=this._cubeSize;so(l,N*O,F>2?O:0,O,O),v.setRenderTarget(l),y&&v.render(w,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=P}_textureToCubeUV(e,n){const r=this._renderer,l=e.mapping===cs||e.mapping===vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ny()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ty());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;so(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,bl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,w=this._sizeLods[r],b=3*w*(r>E-Sr?r-E+Sr:0),y=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-n,so(c,b,y,3*w,2*w),l.setRenderTarget(c),l.render(h,bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,so(e,b,y,3*w,2*w),l.setRenderTarget(e),l.render(h,bl)}_blur(e,n,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,n,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ns-1),w=c/E,b=isFinite(c)?1+Math.floor(_*w):ns;b>ns&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ns}`);const y=[];let P=0;for(let B=0;B<ns;++B){const T=B/w,z=Math.exp(-T*T/2);y.push(z),B===0?P+=z:B<b&&(P+=2*z)}for(let B=0;B<y.length;B++)y[B]=y[B]/P;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=E,g.mipInt.value=F-r;const N=this._sizeLods[l],O=3*N*(l>F-Sr?l-F+Sr:0),L=4*(this._cubeSize-N);so(n,O,L,3*N,2*N),m.setRenderTarget(n),m.render(v,bl)}}function UD(a){const e=[],n=[],r=[];let l=a;const c=a-Sr+1+Qx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>a-Sr?m=Qx[f-a+Sr-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,w=3,b=2,y=1,P=new Float32Array(w*E*S),F=new Float32Array(b*E*S),N=new Float32Array(y*E*S);for(let L=0;L<S;L++){const B=L%3*2/3-1,T=L>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];P.set(z,w*E*L),F.set(g,b*E*L);const q=[L,L,L,L,L,L];N.set(q,y*E*L)}const O=new ni;O.setAttribute("position",new bn(P,w)),O.setAttribute("uv",new bn(F,b)),O.setAttribute("faceIndex",new bn(N,y)),r.push(new Ba(O,null)),l>Sr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function ey(a,e,n){const r=new ra(a,e,n);return r.texture.mapping=af,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function so(a,e,n,r,l){a.viewport.set(e,n,r,l),a.scissor.set(e,n,r,l)}function OD(a,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ND,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function PD(a,e,n){const r=new Float32Array(ns),l=new ae(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ty(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ny(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function sf(){return`

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
	`}class hb extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new sb(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Ua});c.uniforms.tEquirect.value=n;const f=new Ba(l,c),h=n.minFilter;return n.minFilter===as&&(n.minFilter=Vn),new HR(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,l);e.setRenderTarget(c)}}function ID(a){let e=new WeakMap,n=new WeakMap,r=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Mh||S===Eh)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new hb(E.height);return w.fromEquirectangularTexture(a,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===Mh||S===Eh,w=S===cs||S===vo;if(E||w){let b=n.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new Jx(a)),b=E?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),b.texture;if(b!==void 0)return b.texture;{const P=g.image;return E&&P&&P.height>0||w&&P&&m(P)?(r===null&&(r=new Jx(a)),b=E?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===Mh?g.mapping=cs:S===Eh&&(g.mapping=vo),g}function m(g){let S=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=n.get(S);E!==void 0&&(n.delete(S),E.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function zD(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const l=a.getExtension(r);return e[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&ho("WebGLRenderer: "+r+" extension not supported."),l}}}function FD(a,e,n,r){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const P=S.array;w=S.version;for(let F=0,N=P.length;F<N;F+=3){const O=P[F+0],L=P[F+1],B=P[F+2];g.push(O,L,L,B,B,O)}}else{const P=E.array;w=E.version;for(let F=0,N=P.length/3-1;F<N;F+=3){const O=F+0,L=F+1,B=F+2;g.push(O,L,L,B,B,O)}}const b=new(E.count>=65535?ib:nb)(g,1);b.version=w;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function BD(a,e,n){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,g){a.drawElements(r,g,c,v*f),n.update(g,r,1)}function p(v,g,S){S!==0&&(a.drawElementsInstanced(r,g,c,v*f,S),n.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let w=0;for(let b=0;b<S;b++)w+=g[b];n.update(w,r,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function HD(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:r}}function GD(a,e,n){const r=new WeakMap,l=new fn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let z=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),E===!0&&(F=2),w===!0&&(F=3);let N=h.attributes.position.count*F,O=1;N>e.maxTextureSize&&(O=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*O*4*v),B=new JS(L,N,O,v);B.type=na,B.needsUpdate=!0;const T=F*4;for(let q=0;q<v;q++){const V=b[q],Z=y[q],he=P[q],pe=N*O*4*q;for(let J=0;J<V.count;J++){const U=J*T;S===!0&&(l.fromBufferAttribute(V,J),L[pe+U+0]=l.x,L[pe+U+1]=l.y,L[pe+U+2]=l.z,L[pe+U+3]=0),E===!0&&(l.fromBufferAttribute(Z,J),L[pe+U+4]=l.x,L[pe+U+5]=l.y,L[pe+U+6]=l.z,L[pe+U+7]=0),w===!0&&(l.fromBufferAttribute(he,J),L[pe+U+8]=l.x,L[pe+U+9]=l.y,L[pe+U+10]=l.z,L[pe+U+11]=he.itemSize===4?l.w:1)}}g={count:v,texture:B,size:new Pt(N,O)},r.set(h,g),h.addEventListener("dispose",z)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(a,"morphTargetBaseInfluence",E),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function VD(a,e,n,r,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:f,dispose:h}}const kD={[zS]:"LINEAR_TONE_MAPPING",[FS]:"REINHARD_TONE_MAPPING",[BS]:"CINEON_TONE_MAPPING",[HS]:"ACES_FILMIC_TONE_MAPPING",[VS]:"AGX_TONE_MAPPING",[kS]:"NEUTRAL_TONE_MAPPING",[GS]:"CUSTOM_TONE_MAPPING"};function XD(a,e,n,r,l,c){const f=new ra(e,n,{type:a,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new _o(e,n):void 0}),h=new ra(e,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new zR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ba(m,p),v=new ub(-1,1,1,-1,0,1);let g=null,S=null,E=!1,w,b=null,y=[],P=!1;this.setSize=function(F,N){f.setSize(F,N),h.setSize(F,N);for(let O=0;O<y.length;O++){const L=y[O];L.setSize&&L.setSize(F,N)}},this.setEffects=function(F){y=F,P=y.length>0&&y[0].isRenderPass===!0;const N=f.width,O=f.height;for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(N,O)}},this.begin=function(F,N){if(E||F.toneMapping===aa&&y.length===0)return!1;if(b=N,N!==null){const O=N.width,L=N.height;(f.width!==O||f.height!==L)&&this.setSize(O,L)}return P===!1&&F.setRenderTarget(f),w=F.toneMapping,F.toneMapping=aa,!0},this.hasRenderPass=function(){return P},this.end=function(F,N){F.toneMapping=w,E=!0;let O=f,L=h;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(F,L,O,N),T.needsSwap!==!1)){const z=O;O=L,L=z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},At.getTransfer(g)===kt&&(p.defines.SRGB_TRANSFER="");const B=kD[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(b),F.render(_,v),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const pb=new Wn,fm=new _o(1,1),mb=new JS,gb=new uR,vb=new sb,iy=[],ay=[],ry=new Float32Array(16),sy=new Float32Array(9),oy=new Float32Array(4);function Mo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const l=e*n;let c=iy[l];if(c===void 0&&(c=new Float32Array(l),iy[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=n,a[f].toArray(c,h)}return c}function Tn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function An(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function of(a,e){let n=ay[e];n===void 0&&(n=new Int32Array(e),ay[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function WD(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function qD(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2fv(this.addr,e),An(n,e)}}function jD(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;a.uniform3fv(this.addr,e),An(n,e)}}function YD(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4fv(this.addr,e),An(n,e)}}function ZD(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;oy.set(r),a.uniformMatrix2fv(this.addr,!1,oy),An(n,r)}}function KD(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;sy.set(r),a.uniformMatrix3fv(this.addr,!1,sy),An(n,r)}}function QD(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;ry.set(r),a.uniformMatrix4fv(this.addr,!1,ry),An(n,r)}}function $D(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function JD(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2iv(this.addr,e),An(n,e)}}function eN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3iv(this.addr,e),An(n,e)}}function tN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4iv(this.addr,e),An(n,e)}}function nN(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function iN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2uiv(this.addr,e),An(n,e)}}function aN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3uiv(this.addr,e),An(n,e)}}function rN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4uiv(this.addr,e),An(n,e)}}function sN(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(fm.compareFunction=n.isReversedDepthBuffer()?Im:Pm,c=fm):c=pb,n.setTexture2D(e||c,l)}function oN(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(e||gb,l)}function lN(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(e||vb,l)}function cN(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(e||mb,l)}function uN(a){switch(a){case 5126:return WD;case 35664:return qD;case 35665:return jD;case 35666:return YD;case 35674:return ZD;case 35675:return KD;case 35676:return QD;case 5124:case 35670:return $D;case 35667:case 35671:return JD;case 35668:case 35672:return eN;case 35669:case 35673:return tN;case 5125:return nN;case 36294:return iN;case 36295:return aN;case 36296:return rN;case 35678:case 36198:case 36298:case 36306:case 35682:return sN;case 35679:case 36299:case 36307:return oN;case 35680:case 36300:case 36308:case 36293:return lN;case 36289:case 36303:case 36311:case 36292:return cN}}function fN(a,e){a.uniform1fv(this.addr,e)}function dN(a,e){const n=Mo(e,this.size,2);a.uniform2fv(this.addr,n)}function hN(a,e){const n=Mo(e,this.size,3);a.uniform3fv(this.addr,n)}function pN(a,e){const n=Mo(e,this.size,4);a.uniform4fv(this.addr,n)}function mN(a,e){const n=Mo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function gN(a,e){const n=Mo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function vN(a,e){const n=Mo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function _N(a,e){a.uniform1iv(this.addr,e)}function xN(a,e){a.uniform2iv(this.addr,e)}function yN(a,e){a.uniform3iv(this.addr,e)}function SN(a,e){a.uniform4iv(this.addr,e)}function bN(a,e){a.uniform1uiv(this.addr,e)}function MN(a,e){a.uniform2uiv(this.addr,e)}function EN(a,e){a.uniform3uiv(this.addr,e)}function TN(a,e){a.uniform4uiv(this.addr,e)}function AN(a,e,n){const r=this.cache,l=e.length,c=of(n,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=fm:f=pb;for(let h=0;h!==l;++h)n.setTexture2D(e[h]||f,c[h])}function RN(a,e,n){const r=this.cache,l=e.length,c=of(n,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||gb,c[f])}function CN(a,e,n){const r=this.cache,l=e.length,c=of(n,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||vb,c[f])}function wN(a,e,n){const r=this.cache,l=e.length,c=of(n,l);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||mb,c[f])}function DN(a){switch(a){case 5126:return fN;case 35664:return dN;case 35665:return hN;case 35666:return pN;case 35674:return mN;case 35675:return gN;case 35676:return vN;case 5124:case 35670:return _N;case 35667:case 35671:return xN;case 35668:case 35672:return yN;case 35669:case 35673:return SN;case 5125:return bN;case 36294:return MN;case 36295:return EN;case 36296:return TN;case 35678:case 36198:case 36298:case 36306:case 35682:return AN;case 35679:case 36299:case 36307:return RN;case 35680:case 36300:case 36308:case 36293:return CN;case 36289:case 36303:case 36311:case 36292:return wN}}class NN{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=uN(n.type)}}class LN{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DN(n.type)}}class UN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,n[h.id],r)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function ly(a,e){a.seq.push(e),a.map[e.id]=e}function ON(a,e,n){const r=a.name,l=r.length;for(tp.lastIndex=0;;){const c=tp.exec(r),f=tp.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ly(n,p===void 0?new NN(h,a,e):new LN(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new UN(h),ly(n,v)),n=v}}}class Fu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(n,f),m=e.getUniformLocation(n,h.name);ON(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,r,l){const c=this.map[n];c!==void 0&&c.setValue(e,r,l)}setOptional(e,n,r){const l=n[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,n,r,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,n){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&r.push(f)}return r}}function cy(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const PN=37297;let IN=0;function zN(a,e){const n=a.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const uy=new ht;function FN(a){At._getMatrix(uy,At.workingColorSpace,a);const e=`mat3( ${uy.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(a)){case Wu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function fy(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+zN(a.getShaderSource(e),h)}else return c}function BN(a,e){const n=FN(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HN={[zS]:"Linear",[FS]:"Reinhard",[BS]:"Cineon",[HS]:"ACESFilmic",[VS]:"AgX",[kS]:"Neutral",[GS]:"Custom"};function GN(a,e){const n=HN[e];return n===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wu=new ae;function VN(){At.getLuminanceCoefficients(wu);const a=wu.x.toFixed(4),e=wu.y.toFixed(4),n=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kN(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function XN(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function WN(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(e,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:h}}return n}function Al(a){return a!==""}function dy(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hy(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qN=/^[ \t]*#include +<([\w\d./]+)>/gm;function dm(a){return a.replace(qN,YN)}const jN=new Map;function YN(a,e){let n=_t[e];if(n===void 0){const r=jN.get(e);if(r!==void 0)n=_t[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dm(n)}const ZN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function py(a){return a.replace(ZN,KN)}function KN(a,e,n,r){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function my(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const QN={[Uu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function $N(a){return QN[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JN={[cs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[af]:"ENVMAP_TYPE_CUBE_UV"};function eL(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":JN[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const tL={[vo]:"ENVMAP_MODE_REFRACTION"};function nL(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":tL[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iL={[IS]:"ENVMAP_BLENDING_MULTIPLY",[k3]:"ENVMAP_BLENDING_MIX",[X3]:"ENVMAP_BLENDING_ADD"};function aL(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":iL[a.combine]||"ENVMAP_BLENDING_NONE"}function rL(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function sL(a,e,n,r){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=$N(n),p=eL(n),_=nL(n),v=aL(n),g=rL(n),S=kN(n),E=XN(c),w=l.createProgram();let b,y,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Al).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Al).join(`
`),y.length>0&&(y+=`
`)):(b=[my(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),y=[my(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?_t.tonemapping_pars_fragment:"",n.toneMapping!==aa?GN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,BN("linearToOutputTexel",n.outputColorSpace),VN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),f=dm(f),f=dy(f,n),f=hy(f,n),h=dm(h),h=dy(h,n),h=hy(h,n),f=py(f),h=py(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",n.glslVersion===bx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=P+b+f,N=P+y+h,O=cy(l,l.VERTEX_SHADER,F),L=cy(l,l.FRAGMENT_SHADER,N);l.attachShader(w,O),l.attachShader(w,L),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(V){if(a.debug.checkShaderErrors){const Z=l.getProgramInfoLog(w)||"",he=l.getShaderInfoLog(O)||"",pe=l.getShaderInfoLog(L)||"",J=Z.trim(),U=he.trim(),G=pe.trim();let te=!0,me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,w,O,L);else{const Te=fy(l,O,"vertex"),D=fy(l,L,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+Te+`
`+D)}else J!==""?ct("WebGLProgram: Program Info Log:",J):(U===""||G==="")&&(me=!1);me&&(V.diagnostics={runnable:te,programLog:J,vertexShader:{log:U,prefix:b},fragmentShader:{log:G,prefix:y}})}l.deleteShader(O),l.deleteShader(L),T=new Fu(l,w),z=WN(l,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(w,PN)),q},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IN++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let oL=0;class lL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const l=this._getShaderCacheForMaterial(e);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new cL(e),n.set(e,r)),r}}class cL{constructor(e){this.id=oL++,this.code=e,this.usedTimes=0}}function uL(a){return a===us||a===Vu||a===ku}function fL(a,e,n,r,l,c){const f=new eb,h=new lL,m=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,z,q,V,Z,he){const pe=V.fog,J=Z.geometry,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||U,G),me=te&&te.mapping===af?te.image.height:null,Te=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const D=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,k=D!==void 0?D.length:0;let Q=0;J.morphAttributes.position!==void 0&&(Q=1),J.morphAttributes.normal!==void 0&&(Q=2),J.morphAttributes.color!==void 0&&(Q=3);let Me,Ae,K,oe;if(Te){const We=ea[Te];Me=We.vertexShader,Ae=We.fragmentShader}else{Me=T.vertexShader,Ae=T.fragmentShader;const We=h.getVertexShaderStage(T),an=h.getFragmentShaderStage(T);h.update(T,We,an),K=We.id,oe=an.id}const fe=a.getRenderTarget(),Ce=a.state.buffers.depth.getReversed(),Qe=Z.isInstancedMesh===!0,ye=Z.isBatchedMesh===!0,$e=!!T.map,lt=!!T.matcap,ft=!!te,pt=!!T.aoMap,et=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,Yt=!!T.normalMap,$t=!!T.displacementMap,nn=!!T.emissiveMap,Qt=!!T.metalnessMap,ln=!!T.roughnessMap,Y=T.anisotropy>0,Xt=T.clearcoat>0,Ut=T.dispersion>0,I=T.iridescence>0,M=T.sheen>0,ee=T.transmission>0,le=Y&&!!T.anisotropyMap,ve=Xt&&!!T.clearcoatMap,De=Xt&&!!T.clearcoatNormalMap,Oe=Xt&&!!T.clearcoatRoughnessMap,ge=I&&!!T.iridescenceMap,_e=I&&!!T.iridescenceThicknessMap,Le=M&&!!T.sheenColorMap,Ge=M&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Pe=!!T.specularColorMap,tt=!!T.specularIntensityMap,nt=ee&&!!T.transmissionMap,ut=ee&&!!T.thicknessMap,W=!!T.gradientMap,Ne=!!T.alphaMap,Se=T.alphaTest>0,Ue=!!T.alphaHash,He=!!T.extensions;let Re=aa;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Re=a.toneMapping);const Ze={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:Me,fragmentShader:Ae,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ye,batchingColor:ye&&Z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Z.instanceColor!==null,instancingMorph:Qe&&Z.morphTexture!==null,outputColorSpace:fe===null?a.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:lt,envMap:ft,envMapMode:ft&&te.mapping,envMapCubeUVHeight:me,aoMap:pt,lightMap:et,bumpMap:Ct,normalMap:Yt,displacementMap:$t,emissiveMap:nn,normalMapObjectSpace:Yt&&T.normalMapType===j3,normalMapTangentSpace:Yt&&T.normalMapType===xx,packedNormalMap:Yt&&T.normalMapType===xx&&uL(T.normalMap.format),metalnessMap:Qt,roughnessMap:ln,anisotropy:Y,anisotropyMap:le,clearcoat:Xt,clearcoatMap:ve,clearcoatNormalMap:De,clearcoatRoughnessMap:Oe,dispersion:Ut,iridescence:I,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:M,sheenColorMap:Le,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Pe,specularIntensityMap:tt,transmission:ee,transmissionMap:nt,thicknessMap:ut,gradientMap:W,opaque:T.transparent===!1&&T.blending===fo&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Se,alphaHash:Ue,combine:T.combine,mapUv:$e&&E(T.map.channel),aoMapUv:pt&&E(T.aoMap.channel),lightMapUv:et&&E(T.lightMap.channel),bumpMapUv:Ct&&E(T.bumpMap.channel),normalMapUv:Yt&&E(T.normalMap.channel),displacementMapUv:$t&&E(T.displacementMap.channel),emissiveMapUv:nn&&E(T.emissiveMap.channel),metalnessMapUv:Qt&&E(T.metalnessMap.channel),roughnessMapUv:ln&&E(T.roughnessMap.channel),anisotropyMapUv:le&&E(T.anisotropyMap.channel),clearcoatMapUv:ve&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&E(T.sheenRoughnessMap.channel),specularMapUv:ze&&E(T.specularMap.channel),specularColorMapUv:Pe&&E(T.specularColorMap.channel),specularIntensityMapUv:tt&&E(T.specularIntensityMap.channel),transmissionMapUv:nt&&E(T.transmissionMap.channel),thicknessMapUv:ut&&E(T.thicknessMap.channel),alphaMapUv:Ne&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Yt||Y),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!J.attributes.uv&&($e||Ne),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ce,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Q,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.length>0,shadowMapType:a.shadowMap.type,toneMapping:Re,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:nn&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Na,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function b(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)z.push(q),z.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(z,T),P(z,T),z.push(a.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function P(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),z.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const z=S[T.type];let q;if(z){const V=ea[z];q=OR.clone(V.uniforms)}else q=T.uniforms;return q}function N(T,z){let q=_.get(z);return q!==void 0?++q.usedTimes:(q=new sL(a,z,T,l),p.push(q),_.set(z,q)),q}function O(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:w,getProgramCacheKey:b,getUniforms:F,acquireProgram:N,releaseProgram:O,releaseShaderCache:L,programs:p,dispose:B}}function dL(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function l(f,h,m){a.get(f)[h]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:l,dispose:c}}function hL(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function gy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function vy(){const a=[];let e=0;const n=[],r=[],l=[];function c(){e=0,n.length=0,r.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,w,b,y){let P=a[e];return P===void 0?(P={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:b,group:y},a[e]=P):(P.id=g.id,P.object=g,P.geometry=S,P.material=E,P.materialVariant=f(g),P.groupOrder=w,P.renderOrder=g.renderOrder,P.z=b,P.group=y),e++,P}function m(g,S,E,w,b,y){const P=h(g,S,E,w,b,y);E.transmission>0?r.push(P):E.transparent===!0?l.push(P):n.push(P)}function p(g,S,E,w,b,y){const P=h(g,S,E,w,b,y);E.transmission>0?r.unshift(P):E.transparent===!0?l.unshift(P):n.unshift(P)}function _(g,S,E){n.length>1&&n.sort(g||hL),r.length>1&&r.sort(S||gy),l.length>1&&l.sort(S||gy),E&&(n.reverse(),r.reverse(),l.reverse())}function v(){for(let g=e,S=a.length;g<S;g++){const E=a[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function pL(){let a=new WeakMap;function e(r,l){const c=a.get(r);let f;return c===void 0?(f=new vy,a.set(r,[f])):l>=c.length?(f=new vy,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function mL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ae,color:new Et};break;case"SpotLight":n={position:new ae,direction:new ae,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ae,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ae,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=n,n}}}function gL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let vL=0;function _L(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function xL(a){const e=new mL,n=gL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ae);const l=new ae,c=new dn,f=new dn;function h(p){let _=0,v=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let S=0,E=0,w=0,b=0,y=0,P=0,F=0,N=0,O=0,L=0,B=0;p.sort(_L);for(let z=0,q=p.length;z<q;z++){const V=p[z],Z=V.color,he=V.intensity,pe=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===us?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=Z.r*he,v+=Z.g*he,g+=Z.b*he;else if(V.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(V.sh.coefficients[U],he);B++}else if(V.isDirectionalLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,te=n.get(V);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,r.directionalShadow[S]=te,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=V.shadow.matrix,P++}r.directional[S]=U,S++}else if(V.isSpotLight){const U=e.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(Z).multiplyScalar(he),U.distance=pe,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,r.spot[w]=U;const G=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,G.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[w]=G.matrix,V.castShadow){const te=n.get(V);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,r.spotShadow[w]=te,r.spotShadowMap[w]=J,N++}w++}else if(V.isRectAreaLight){const U=e.get(V);U.color.copy(Z).multiplyScalar(he),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),r.rectArea[b]=U,b++}else if(V.isPointLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const G=V.shadow,te=n.get(V);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,r.pointShadow[E]=te,r.pointShadowMap[E]=J,r.pointShadowMatrix[E]=V.shadow.matrix,F++}r.point[E]=U,E++}else if(V.isHemisphereLight){const U=e.get(V);U.skyColor.copy(V.color).multiplyScalar(he),U.groundColor.copy(V.groundColor).multiplyScalar(he),r.hemi[y]=U,y++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==b||T.hemiLength!==y||T.numDirectionalShadows!==P||T.numPointShadows!==F||T.numSpotShadows!==N||T.numSpotMaps!==O||T.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=b,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=N+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=b,T.hemiLength=y,T.numDirectionalShadows=P,T.numPointShadows=F,T.numSpotShadows=N,T.numSpotMaps=O,T.numLightProbes=B,r.version=vL++)}function m(p,_){let v=0,g=0,S=0,E=0,w=0;const b=_.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const F=p[y];if(F.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),v++}else if(F.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),S++}else if(F.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),f.identity(),c.copy(F.matrixWorld),c.premultiply(b),f.extractRotation(c),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(F.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){const N=r.hemi[w];N.direction.setFromMatrixPosition(F.matrixWorld),N.direction.transformDirection(b),w++}}}return{setup:h,setupView:m,state:r}}function _y(a){const e=new xL(a),n=[],r=[],l=[];function c(g){v.camera=g,n.length=0,r.length=0,l.length=0}function f(g){n.push(g)}function h(g){r.push(g)}function m(g){l.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function yL(a){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new _y(a),e.set(l,[h])):c>=f.length?(h=new _y(a),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const SL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bL=`uniform sampler2D shadow_pass;
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
}`,ML=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],EL=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],xy=new dn,Ml=new ae,np=new ae;function TL(a,e,n){let r=new rb;const l=new Pt,c=new Pt,f=new fn,h=new FR,m=new BR,p={},_=n.maxTextureSize,v={[Tr]:ti,[ti]:Tr,[Na]:Na},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:SL,fragmentShader:bL}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ba(E,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let y=this.type;this.render=function(L,B,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===E3&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uu);const z=a.getRenderTarget(),q=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(Ua),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const he=y!==this.type;he&&B.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(J=>J.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,J=L.length;pe<J;pe++){const U=L[pe],G=U.shadow;if(G===void 0){ct("WebGLShadowMap:",U,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const te=G.getFrameExtents();l.multiply(te),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/te.x),l.x=c.x*te.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/te.y),l.y=c.y*te.y,G.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=me,G.map===null||he===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Tl){if(U.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ra(l.x,l.y,{format:us,type:za,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),G.map.texture.name=U.name+".shadowMap",G.map.depthTexture=new _o(l.x,l.y,na),G.map.depthTexture.name=U.name+".shadowMapDepth",G.map.depthTexture.format=Fa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn}else U.isPointLight?(G.map=new hb(l.x),G.map.depthTexture=new LR(l.x,sa)):(G.map=new ra(l.x,l.y),G.map.depthTexture=new _o(l.x,l.y,sa)),G.map.depthTexture.name=U.name+".shadowMap",G.map.depthTexture.format=Fa,this.type===Uu?(G.map.depthTexture.compareFunction=me?Im:Pm,G.map.depthTexture.minFilter=Vn,G.map.depthTexture.magFilter=Vn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn);G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Te;D++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,D),a.clear();else{D===0&&(a.setRenderTarget(G.map),a.clear());const k=G.getViewport(D);f.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),Z.viewport(f)}if(U.isPointLight){const k=G.camera,Q=G.matrix,Me=U.distance||k.far;Me!==k.far&&(k.far=Me,k.updateProjectionMatrix()),Ml.setFromMatrixPosition(U.matrixWorld),k.position.copy(Ml),np.copy(k.position),np.add(ML[D]),k.up.copy(EL[D]),k.lookAt(np),k.updateMatrixWorld(),Q.makeTranslation(-Ml.x,-Ml.y,-Ml.z),xy.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xy,k.coordinateSystem,k.reversedDepth)}else G.updateMatrices(U);r=G.getFrustum(),N(B,T,G.camera,U,this.type)}G.isPointLightShadow!==!0&&this.type===Tl&&P(G,T),G.needsUpdate=!1}y=this.type,b.needsUpdate=!1,a.setRenderTarget(z,q,V)};function P(L,B){const T=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ra(l.x,l.y,{format:us,type:za})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,T,g,w,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,T,S,w,null)}function F(L,B,T,z){let q=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)q=V;else if(q=T.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=q.uuid,he=B.uuid;let pe=p[Z];pe===void 0&&(pe={},p[Z]=pe);let J=pe[he];J===void 0&&(J=q.clone(),pe[he]=J,B.addEventListener("dispose",O)),q=J}if(q.visible=B.visible,q.wireframe=B.wireframe,z===Tl?q.side=B.shadowSide!==null?B.shadowSide:B.side:q.side=B.shadowSide!==null?B.shadowSide:v[B.side],q.alphaMap=B.alphaMap,q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,q.map=B.map,q.clipShadows=B.clipShadows,q.clippingPlanes=B.clippingPlanes,q.clipIntersection=B.clipIntersection,q.displacementMap=B.displacementMap,q.displacementScale=B.displacementScale,q.displacementBias=B.displacementBias,q.wireframeLinewidth=B.wireframeLinewidth,q.linewidth=B.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Z=a.properties.get(q);Z.light=T}return q}function N(L,B,T,z,q){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Tl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const he=e.update(L),pe=L.material;if(Array.isArray(pe)){const J=he.groups;for(let U=0,G=J.length;U<G;U++){const te=J[U],me=pe[te.materialIndex];if(me&&me.visible){const Te=F(L,me,z,q);L.onBeforeShadow(a,L,B,T,he,Te,te),a.renderBufferDirect(T,null,he,Te,L,te),L.onAfterShadow(a,L,B,T,he,Te,te)}}}else if(pe.visible){const J=F(L,pe,z,q);L.onBeforeShadow(a,L,B,T,he,J,null),a.renderBufferDirect(T,null,he,J,L,null),L.onAfterShadow(a,L,B,T,he,J,null)}}const Z=L.children;for(let he=0,pe=Z.length;he<pe;he++)N(Z[he],B,T,z,q)}function O(L){L.target.removeEventListener("dispose",O);for(const T in p){const z=p[T],q=L.target.uuid;q in z&&(z[q].dispose(),delete z[q])}}}function AL(a,e){function n(){let W=!1;const Ne=new fn;let Se=null;const Ue=new fn(0,0,0,0);return{setMask:function(He){Se!==He&&!W&&(a.colorMask(He,He,He,He),Se=He)},setLocked:function(He){W=He},setClear:function(He,Re,Ze,We,an){an===!0&&(He*=We,Re*=We,Ze*=We),Ne.set(He,Re,Ze,We),Ue.equals(Ne)===!1&&(a.clearColor(He,Re,Ze,We),Ue.copy(Ne))},reset:function(){W=!1,Se=null,Ue.set(-1,0,0,0)}}}function r(){let W=!1,Ne=!1,Se=null,Ue=null,He=null;return{setReversed:function(Re){if(Ne!==Re){const Ze=e.get("EXT_clip_control");Re?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ne=Re;const We=He;He=null,this.setClear(We)}},getReversed:function(){return Ne},setTest:function(Re){Re?fe(a.DEPTH_TEST):Ce(a.DEPTH_TEST)},setMask:function(Re){Se!==Re&&!W&&(a.depthMask(Re),Se=Re)},setFunc:function(Re){if(Ne&&(Re=iR[Re]),Ue!==Re){switch(Re){case Ep:a.depthFunc(a.NEVER);break;case Tp:a.depthFunc(a.ALWAYS);break;case Ap:a.depthFunc(a.LESS);break;case go:a.depthFunc(a.LEQUAL);break;case Rp:a.depthFunc(a.EQUAL);break;case Cp:a.depthFunc(a.GEQUAL);break;case wp:a.depthFunc(a.GREATER);break;case Dp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ue=Re}},setLocked:function(Re){W=Re},setClear:function(Re){He!==Re&&(He=Re,Ne&&(Re=1-Re),a.clearDepth(Re))},reset:function(){W=!1,Se=null,Ue=null,He=null,Ne=!1}}}function l(){let W=!1,Ne=null,Se=null,Ue=null,He=null,Re=null,Ze=null,We=null,an=null;return{setTest:function(zt){W||(zt?fe(a.STENCIL_TEST):Ce(a.STENCIL_TEST))},setMask:function(zt){Ne!==zt&&!W&&(a.stencilMask(zt),Ne=zt)},setFunc:function(zt,ii,ai){(Se!==zt||Ue!==ii||He!==ai)&&(a.stencilFunc(zt,ii,ai),Se=zt,Ue=ii,He=ai)},setOp:function(zt,ii,ai){(Re!==zt||Ze!==ii||We!==ai)&&(a.stencilOp(zt,ii,ai),Re=zt,Ze=ii,We=ai)},setLocked:function(zt){W=zt},setClear:function(zt){an!==zt&&(a.clearStencil(zt),an=zt)},reset:function(){W=!1,Ne=null,Se=null,Ue=null,He=null,Re=null,Ze=null,We=null,an=null}}}const c=new n,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],w=null,b=!1,y=null,P=null,F=null,N=null,O=null,L=null,B=null,T=new Et(0,0,0),z=0,q=!1,V=null,Z=null,he=null,pe=null,J=null;const U=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(me)[1]),G=te>=1):me.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),G=te>=2);let Te=null,D={};const k=a.getParameter(a.SCISSOR_BOX),Q=a.getParameter(a.VIEWPORT),Me=new fn().fromArray(k),Ae=new fn().fromArray(Q);function K(W,Ne,Se,Ue){const He=new Uint8Array(4),Re=a.createTexture();a.bindTexture(W,Re),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<Se;Ze++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Ue,0,a.RGBA,a.UNSIGNED_BYTE,He):a.texImage2D(Ne+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,He);return Re}const oe={};oe[a.TEXTURE_2D]=K(a.TEXTURE_2D,a.TEXTURE_2D,1),oe[a.TEXTURE_CUBE_MAP]=K(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[a.TEXTURE_2D_ARRAY]=K(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),oe[a.TEXTURE_3D]=K(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),fe(a.DEPTH_TEST),f.setFunc(go),Ct(!1),Yt(mx),fe(a.CULL_FACE),pt(Ua);function fe(W){_[W]!==!0&&(a.enable(W),_[W]=!0)}function Ce(W){_[W]!==!1&&(a.disable(W),_[W]=!1)}function Qe(W,Ne){return g[W]!==Ne?(a.bindFramebuffer(W,Ne),g[W]=Ne,W===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ne),W===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ye(W,Ne){let Se=E,Ue=!1;if(W){Se=S.get(Ne),Se===void 0&&(Se=[],S.set(Ne,Se));const He=W.textures;if(Se.length!==He.length||Se[0]!==a.COLOR_ATTACHMENT0){for(let Re=0,Ze=He.length;Re<Ze;Re++)Se[Re]=a.COLOR_ATTACHMENT0+Re;Se.length=He.length,Ue=!0}}else Se[0]!==a.BACK&&(Se[0]=a.BACK,Ue=!0);Ue&&a.drawBuffers(Se)}function $e(W){return w!==W?(a.useProgram(W),w=W,!0):!1}const lt={[ts]:a.FUNC_ADD,[A3]:a.FUNC_SUBTRACT,[R3]:a.FUNC_REVERSE_SUBTRACT};lt[C3]=a.MIN,lt[w3]=a.MAX;const ft={[D3]:a.ZERO,[N3]:a.ONE,[L3]:a.SRC_COLOR,[bp]:a.SRC_ALPHA,[F3]:a.SRC_ALPHA_SATURATE,[I3]:a.DST_COLOR,[O3]:a.DST_ALPHA,[U3]:a.ONE_MINUS_SRC_COLOR,[Mp]:a.ONE_MINUS_SRC_ALPHA,[z3]:a.ONE_MINUS_DST_COLOR,[P3]:a.ONE_MINUS_DST_ALPHA,[B3]:a.CONSTANT_COLOR,[H3]:a.ONE_MINUS_CONSTANT_COLOR,[G3]:a.CONSTANT_ALPHA,[V3]:a.ONE_MINUS_CONSTANT_ALPHA};function pt(W,Ne,Se,Ue,He,Re,Ze,We,an,zt){if(W===Ua){b===!0&&(Ce(a.BLEND),b=!1);return}if(b===!1&&(fe(a.BLEND),b=!0),W!==T3){if(W!==y||zt!==q){if((P!==ts||O!==ts)&&(a.blendEquation(a.FUNC_ADD),P=ts,O=ts),zt)switch(W){case fo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case gx:a.blendFunc(a.ONE,a.ONE);break;case vx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case _x:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case fo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case gx:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case vx:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _x:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}F=null,N=null,L=null,B=null,T.set(0,0,0),z=0,y=W,q=zt}return}He=He||Ne,Re=Re||Se,Ze=Ze||Ue,(Ne!==P||He!==O)&&(a.blendEquationSeparate(lt[Ne],lt[He]),P=Ne,O=He),(Se!==F||Ue!==N||Re!==L||Ze!==B)&&(a.blendFuncSeparate(ft[Se],ft[Ue],ft[Re],ft[Ze]),F=Se,N=Ue,L=Re,B=Ze),(We.equals(T)===!1||an!==z)&&(a.blendColor(We.r,We.g,We.b,an),T.copy(We),z=an),y=W,q=!1}function et(W,Ne){W.side===Na?Ce(a.CULL_FACE):fe(a.CULL_FACE);let Se=W.side===ti;Ne&&(Se=!Se),Ct(Se),W.blending===fo&&W.transparent===!1?pt(Ua):pt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ue=W.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(a.SAMPLE_ALPHA_TO_COVERAGE):Ce(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(W){V!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),V=W)}function Yt(W){W!==b3?(fe(a.CULL_FACE),W!==Z&&(W===mx?a.cullFace(a.BACK):W===M3?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ce(a.CULL_FACE),Z=W}function $t(W){W!==he&&(G&&a.lineWidth(W),he=W)}function nn(W,Ne,Se){W?(fe(a.POLYGON_OFFSET_FILL),(pe!==Ne||J!==Se)&&(pe=Ne,J=Se,f.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,Se))):Ce(a.POLYGON_OFFSET_FILL)}function Qt(W){W?fe(a.SCISSOR_TEST):Ce(a.SCISSOR_TEST)}function ln(W){W===void 0&&(W=a.TEXTURE0+U-1),Te!==W&&(a.activeTexture(W),Te=W)}function Y(W,Ne,Se){Se===void 0&&(Te===null?Se=a.TEXTURE0+U-1:Se=Te);let Ue=D[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},D[Se]=Ue),(Ue.type!==W||Ue.texture!==Ne)&&(Te!==Se&&(a.activeTexture(Se),Te=Se),a.bindTexture(W,Ne||oe[W]),Ue.type=W,Ue.texture=Ne)}function Xt(){const W=D[Te];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ut(){try{a.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function I(){try{a.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function M(){try{a.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ee(){try{a.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ve(){try{a.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function De(){try{a.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Oe(){try{a.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ge(){try{a.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function _e(){try{a.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Le(W){return v[W]!==void 0?v[W]:a.getParameter(W)}function Ge(W,Ne){v[W]!==Ne&&(a.pixelStorei(W,Ne),v[W]=Ne)}function ze(W){Me.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Me.copy(W))}function Pe(W){Ae.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function tt(W,Ne){let Se=p.get(Ne);Se===void 0&&(Se=new WeakMap,p.set(Ne,Se));let Ue=Se.get(W);Ue===void 0&&(Ue=a.getUniformBlockIndex(Ne,W.name),Se.set(W,Ue))}function nt(W,Ne){const Ue=p.get(Ne).get(W);m.get(Ne)!==Ue&&(a.uniformBlockBinding(Ne,Ue,W.__bindingPointIndex),m.set(Ne,Ue))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},v={},Te=null,D={},g={},S=new WeakMap,E=[],w=null,b=!1,y=null,P=null,F=null,N=null,O=null,L=null,B=null,T=new Et(0,0,0),z=0,q=!1,V=null,Z=null,he=null,pe=null,J=null,Me.set(0,0,a.canvas.width,a.canvas.height),Ae.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:fe,disable:Ce,bindFramebuffer:Qe,drawBuffers:ye,useProgram:$e,setBlending:pt,setMaterial:et,setFlipSided:Ct,setCullFace:Yt,setLineWidth:$t,setPolygonOffset:nn,setScissorTest:Qt,activeTexture:ln,bindTexture:Y,unbindTexture:Xt,compressedTexImage2D:Ut,compressedTexImage3D:I,texImage2D:ge,texImage3D:_e,pixelStorei:Ge,getParameter:Le,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:De,texStorage3D:Oe,texSubImage2D:M,texSubImage3D:ee,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:ze,viewport:Pe,reset:ut}}function RL(a,e,n,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,M){return E?new OffscreenCanvas(I,M):ju("canvas")}function b(I,M,ee){let le=1;const ve=Ut(I);if((ve.width>ee||ve.height>ee)&&(le=ee/Math.max(ve.width,ve.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const De=Math.floor(le*ve.width),Oe=Math.floor(le*ve.height);g===void 0&&(g=w(De,Oe));const ge=M?w(De,Oe):g;return ge.width=De,ge.height=Oe,ge.getContext("2d").drawImage(I,0,0,De,Oe),ct("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+De+"x"+Oe+")."),ge}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function y(I){return I.generateMipmaps}function P(I){a.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(I,M,ee,le,ve,De=!1){if(I!==null){if(a[I]!==void 0)return a[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Oe;le&&(Oe=e.get("EXT_texture_norm16"),Oe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=M;if(M===a.RED&&(ee===a.FLOAT&&(ge=a.R32F),ee===a.HALF_FLOAT&&(ge=a.R16F),ee===a.UNSIGNED_BYTE&&(ge=a.R8),ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.R16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.R16_SNORM_EXT)),M===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.R8UI),ee===a.UNSIGNED_SHORT&&(ge=a.R16UI),ee===a.UNSIGNED_INT&&(ge=a.R32UI),ee===a.BYTE&&(ge=a.R8I),ee===a.SHORT&&(ge=a.R16I),ee===a.INT&&(ge=a.R32I)),M===a.RG&&(ee===a.FLOAT&&(ge=a.RG32F),ee===a.HALF_FLOAT&&(ge=a.RG16F),ee===a.UNSIGNED_BYTE&&(ge=a.RG8),ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RG16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.RG8UI),ee===a.UNSIGNED_SHORT&&(ge=a.RG16UI),ee===a.UNSIGNED_INT&&(ge=a.RG32UI),ee===a.BYTE&&(ge=a.RG8I),ee===a.SHORT&&(ge=a.RG16I),ee===a.INT&&(ge=a.RG32I)),M===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),ee===a.UNSIGNED_INT&&(ge=a.RGB32UI),ee===a.BYTE&&(ge=a.RGB8I),ee===a.SHORT&&(ge=a.RGB16I),ee===a.INT&&(ge=a.RGB32I)),M===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),ee===a.UNSIGNED_INT&&(ge=a.RGBA32UI),ee===a.BYTE&&(ge=a.RGBA8I),ee===a.SHORT&&(ge=a.RGBA16I),ee===a.INT&&(ge=a.RGBA32I)),M===a.RGB&&(ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGB16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(ge=a.R11F_G11F_B10F)),M===a.RGBA){const _e=De?Wu:At.getTransfer(ve);ee===a.FLOAT&&(ge=a.RGBA32F),ee===a.HALF_FLOAT&&(ge=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(ge=_e===kt?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGBA16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function O(I,M){let ee;return I?M===null||M===sa||M===Ll?ee=a.DEPTH24_STENCIL8:M===na?ee=a.DEPTH32F_STENCIL8:M===Nl&&(ee=a.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===Ll?ee=a.DEPTH_COMPONENT24:M===na?ee=a.DEPTH_COMPONENT32F:M===Nl&&(ee=a.DEPTH_COMPONENT16),ee}function L(I,M){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pn&&I.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function B(I){const M=I.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(I){const M=I.target;M.removeEventListener("dispose",T),V(M)}function z(I){const M=r.get(I);if(M.__webglInit===void 0)return;const ee=I.source,le=S.get(ee);if(le){const ve=le[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&q(I),Object.keys(le).length===0&&S.delete(ee)}r.remove(I)}function q(I){const M=r.get(I);a.deleteTexture(M.__webglTexture);const ee=I.source,le=S.get(ee);delete le[M.__cacheKey],f.memory.textures--}function V(I){const M=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let ve=0;ve<M.__webglFramebuffer[le].length;ve++)a.deleteFramebuffer(M.__webglFramebuffer[le][ve]);else a.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)a.deleteFramebuffer(M.__webglFramebuffer[le]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=I.textures;for(let le=0,ve=ee.length;le<ve;le++){const De=r.get(ee[le]);De.__webglTexture&&(a.deleteTexture(De.__webglTexture),f.memory.textures--),r.remove(ee[le])}r.remove(I)}let Z=0;function he(){Z=0}function pe(){return Z}function J(I){Z=I}function U(){const I=Z;return I>=l.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),Z+=1,I}function G(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function te(I,M){const ee=r.get(I);if(I.isVideoTexture&&Y(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ee.__version!==I.version){const le=I.image;if(le===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(ee,I,M);return}}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+M)}function me(I,M){const ee=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){Ce(ee,I,M);return}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+M)}function Te(I,M){const ee=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){Ce(ee,I,M);return}n.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+M)}function D(I,M){const ee=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ee.__version!==I.version){Qe(ee,I,M);return}n.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+M)}const k={[Np]:a.REPEAT,[La]:a.CLAMP_TO_EDGE,[Lp]:a.MIRRORED_REPEAT},Q={[Pn]:a.NEAREST,[W3]:a.NEAREST_MIPMAP_NEAREST,[iu]:a.NEAREST_MIPMAP_LINEAR,[Vn]:a.LINEAR,[Th]:a.LINEAR_MIPMAP_NEAREST,[as]:a.LINEAR_MIPMAP_LINEAR},Me={[Y3]:a.NEVER,[J3]:a.ALWAYS,[Z3]:a.LESS,[Pm]:a.LEQUAL,[K3]:a.EQUAL,[Im]:a.GEQUAL,[Q3]:a.GREATER,[$3]:a.NOTEQUAL};function Ae(I,M){if(M.type===na&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Th||M.magFilter===iu||M.magFilter===as||M.minFilter===Vn||M.minFilter===Th||M.minFilter===iu||M.minFilter===as)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,k[M.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,k[M.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,k[M.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,Q[M.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==iu&&M.minFilter!==as||M.type===na&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function K(I,M){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",B));const le=M.source;let ve=S.get(le);ve===void 0&&(ve={},S.set(le,ve));const De=G(M);if(De!==I.__cacheKey){ve[De]===void 0&&(ve[De]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,ee=!0),ve[De].usedTimes++;const Oe=ve[I.__cacheKey];Oe!==void 0&&(ve[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&q(M)),I.__cacheKey=De,I.__webglTexture=ve[De].texture}return ee}function oe(I,M,ee){return Math.floor(Math.floor(I/ee)/M)}function fe(I,M,ee,le){const De=I.updateRanges;if(De.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,ee,le,M.data);else{De.sort((Ge,ze)=>Ge.start-ze.start);let Oe=0;for(let Ge=1;Ge<De.length;Ge++){const ze=De[Oe],Pe=De[Ge],tt=ze.start+ze.count,nt=oe(Pe.start,M.width,4),ut=oe(ze.start,M.width,4);Pe.start<=tt+1&&nt===ut&&oe(Pe.start+Pe.count-1,M.width,4)===nt?ze.count=Math.max(ze.count,Pe.start+Pe.count-ze.start):(++Oe,De[Oe]=Pe)}De.length=Oe+1;const ge=n.getParameter(a.UNPACK_ROW_LENGTH),_e=n.getParameter(a.UNPACK_SKIP_PIXELS),Le=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,ze=De.length;Ge<ze;Ge++){const Pe=De[Ge],tt=Math.floor(Pe.start/4),nt=Math.ceil(Pe.count/4),ut=tt%M.width,W=Math.floor(tt/M.width),Ne=nt,Se=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,ut,W,Ne,Se,ee,le,M.data)}I.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,ge),n.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(a.UNPACK_SKIP_ROWS,Le)}}function Ce(I,M,ee){let le=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=a.TEXTURE_3D);const ve=K(I,M),De=M.source;n.bindTexture(le,I.__webglTexture,a.TEXTURE0+ee);const Oe=r.get(De);if(De.version!==Oe.__version||ve===!0){if(n.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Se=At.getPrimaries(At.workingColorSpace),Ue=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),He=M.colorSpace===yr||Se===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=b(M.image,!1,l.maxTextureSize);_e=Xt(M,_e);const Le=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type);let ze=N(M.internalFormat,Le,Ge,M.normalized,M.colorSpace,M.isVideoTexture);Ae(le,M);let Pe;const tt=M.mipmaps,nt=M.isVideoTexture!==!0,ut=Oe.__version===void 0||ve===!0,W=De.dataReady,Ne=L(M,_e);if(M.isDepthTexture)ze=O(M.format===rs,M.type),ut&&(nt?n.texStorage2D(a.TEXTURE_2D,1,ze,_e.width,_e.height):n.texImage2D(a.TEXTURE_2D,0,ze,_e.width,_e.height,0,Le,Ge,null));else if(M.isDataTexture)if(tt.length>0){nt&&ut&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,tt[0].width,tt[0].height);for(let Se=0,Ue=tt.length;Se<Ue;Se++)Pe=tt[Se],nt?W&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Le,Ge,Pe.data):n.texImage2D(a.TEXTURE_2D,Se,ze,Pe.width,Pe.height,0,Le,Ge,Pe.data);M.generateMipmaps=!1}else nt?(ut&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,_e.width,_e.height),W&&fe(M,_e,Le,Ge)):n.texImage2D(a.TEXTURE_2D,0,ze,_e.width,_e.height,0,Le,Ge,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&ut&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ze,tt[0].width,tt[0].height,_e.depth);for(let Se=0,Ue=tt.length;Se<Ue;Se++)if(Pe=tt[Se],M.format!==Vi)if(Le!==null)if(nt){if(W)if(M.layerUpdates.size>0){const He=Kx(Pe.width,Pe.height,M.format,M.type);for(const Re of M.layerUpdates){const Ze=Pe.data.subarray(Re*He/Pe.data.BYTES_PER_ELEMENT,(Re+1)*He/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,Re,Pe.width,Pe.height,1,Le,Ze)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,_e.depth,Le,Pe.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Se,ze,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,_e.depth,Le,Ge,Pe.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Se,ze,Pe.width,Pe.height,_e.depth,0,Le,Ge,Pe.data)}else{nt&&ut&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,tt[0].width,tt[0].height);for(let Se=0,Ue=tt.length;Se<Ue;Se++)Pe=tt[Se],M.format!==Vi?Le!==null?nt?W&&n.compressedTexSubImage2D(a.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Le,Pe.data):n.compressedTexImage2D(a.TEXTURE_2D,Se,ze,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Le,Ge,Pe.data):n.texImage2D(a.TEXTURE_2D,Se,ze,Pe.width,Pe.height,0,Le,Ge,Pe.data)}else if(M.isDataArrayTexture)if(nt){if(ut&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ze,_e.width,_e.height,_e.depth),W)if(M.layerUpdates.size>0){const Se=Kx(_e.width,_e.height,M.format,M.type);for(const Ue of M.layerUpdates){const He=_e.data.subarray(Ue*Se/_e.data.BYTES_PER_ELEMENT,(Ue+1)*Se/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ue,_e.width,_e.height,1,Le,Ge,He)}M.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ge,_e.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,ze,_e.width,_e.height,_e.depth,0,Le,Ge,_e.data);else if(M.isData3DTexture)nt?(ut&&n.texStorage3D(a.TEXTURE_3D,Ne,ze,_e.width,_e.height,_e.depth),W&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ge,_e.data)):n.texImage3D(a.TEXTURE_3D,0,ze,_e.width,_e.height,_e.depth,0,Le,Ge,_e.data);else if(M.isFramebufferTexture){if(ut)if(nt)n.texStorage2D(a.TEXTURE_2D,Ne,ze,_e.width,_e.height);else{let Se=_e.width,Ue=_e.height;for(let He=0;He<Ne;He++)n.texImage2D(a.TEXTURE_2D,He,ze,Se,Ue,0,Le,Ge,null),Se>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){const Se=a.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),_e.parentNode!==Se){Se.appendChild(_e),v.add(M),Se.onpaint=Ue=>{const He=Ue.changedElements;for(const Re of v)He.includes(Re.image)&&(Re.needsUpdate=!0)},Se.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,_e);else{const He=a.RGBA,Re=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,He,Re,Ze,_e)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(tt.length>0){if(nt&&ut){const Se=Ut(tt[0]);n.texStorage2D(a.TEXTURE_2D,Ne,ze,Se.width,Se.height)}for(let Se=0,Ue=tt.length;Se<Ue;Se++)Pe=tt[Se],nt?W&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Le,Ge,Pe):n.texImage2D(a.TEXTURE_2D,Se,ze,Le,Ge,Pe);M.generateMipmaps=!1}else if(nt){if(ut){const Se=Ut(_e);n.texStorage2D(a.TEXTURE_2D,Ne,ze,Se.width,Se.height)}W&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,Ge,_e)}else n.texImage2D(a.TEXTURE_2D,0,ze,Le,Ge,_e);y(M)&&P(le),Oe.__version=De.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Qe(I,M,ee){if(M.image.length!==6)return;const le=K(I,M),ve=M.source;n.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+ee);const De=r.get(ve);if(ve.version!==De.__version||le===!0){n.activeTexture(a.TEXTURE0+ee);const Oe=At.getPrimaries(At.workingColorSpace),ge=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),_e=M.colorSpace===yr||Oe===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,ze=[];for(let Re=0;Re<6;Re++)!Le&&!Ge?ze[Re]=b(M.image[Re],!0,l.maxCubemapSize):ze[Re]=Ge?M.image[Re].image:M.image[Re],ze[Re]=Xt(M,ze[Re]);const Pe=ze[0],tt=c.convert(M.format,M.colorSpace),nt=c.convert(M.type),ut=N(M.internalFormat,tt,nt,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,Ne=De.__version===void 0||le===!0,Se=ve.dataReady;let Ue=L(M,Pe);Ae(a.TEXTURE_CUBE_MAP,M);let He;if(Le){W&&Ne&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ut,Pe.width,Pe.height);for(let Re=0;Re<6;Re++){He=ze[Re].mipmaps;for(let Ze=0;Ze<He.length;Ze++){const We=He[Ze];M.format!==Vi?tt!==null?W?Se&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,0,0,We.width,We.height,tt,We.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,ut,We.width,We.height,0,We.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,0,0,We.width,We.height,tt,nt,We.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,ut,We.width,We.height,0,tt,nt,We.data)}}}else{if(He=M.mipmaps,W&&Ne){He.length>0&&Ue++;const Re=Ut(ze[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ut,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Ge){W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ze[Re].width,ze[Re].height,tt,nt,ze[Re].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ut,ze[Re].width,ze[Re].height,0,tt,nt,ze[Re].data);for(let Ze=0;Ze<He.length;Ze++){const an=He[Ze].image[Re].image;W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,0,0,an.width,an.height,tt,nt,an.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,ut,an.width,an.height,0,tt,nt,an.data)}}else{W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,tt,nt,ze[Re]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ut,tt,nt,ze[Re]);for(let Ze=0;Ze<He.length;Ze++){const We=He[Ze];W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,0,0,tt,nt,We.image[Re]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,ut,tt,nt,We.image[Re])}}}y(M)&&P(a.TEXTURE_CUBE_MAP),De.__version=ve.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ye(I,M,ee,le,ve,De){const Oe=c.convert(ee.format,ee.colorSpace),ge=c.convert(ee.type),_e=N(ee.internalFormat,Oe,ge,ee.normalized,ee.colorSpace),Le=r.get(M),Ge=r.get(ee);if(Ge.__renderTarget=M,!Le.__hasExternalTextures){const ze=Math.max(1,M.width>>De),Pe=Math.max(1,M.height>>De);ve===a.TEXTURE_3D||ve===a.TEXTURE_2D_ARRAY?n.texImage3D(ve,De,_e,ze,Pe,M.depth,0,Oe,ge,null):n.texImage2D(ve,De,_e,ze,Pe,0,Oe,ge,null)}n.bindFramebuffer(a.FRAMEBUFFER,I),ln(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,le,ve,Ge.__webglTexture,0,Qt(M)):(ve===a.TEXTURE_2D||ve>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,le,ve,Ge.__webglTexture,De),n.bindFramebuffer(a.FRAMEBUFFER,null)}function $e(I,M,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,I),M.depthBuffer){const le=M.depthTexture,ve=le&&le.isDepthTexture?le.type:null,De=O(M.stencilBuffer,ve),Oe=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ln(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Qt(M),De,M.width,M.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Qt(M),De,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,De,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,I)}else{const le=M.textures;for(let ve=0;ve<le.length;ve++){const De=le[ve],Oe=c.convert(De.format,De.colorSpace),ge=c.convert(De.type),_e=N(De.internalFormat,Oe,ge,De.normalized,De.colorSpace);ln(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Qt(M),_e,M.width,M.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Qt(M),_e,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,_e,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function lt(I,M,ee){const le=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=r.get(M.depthTexture);if(ve.__renderTarget=M,(!ve.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),ve.__webglTexture===void 0){ve.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),Ae(a.TEXTURE_CUBE_MAP,M.depthTexture);const Le=c.convert(M.depthTexture.format),Ge=c.convert(M.depthTexture.type);let ze;M.depthTexture.format===Fa?ze=a.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(ze=a.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ze,M.width,M.height,0,Le,Ge,null)}}else te(M.depthTexture,0);const De=ve.__webglTexture,Oe=Qt(M),ge=le?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,_e=M.depthTexture.format===rs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fa)ln(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,ge,De,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,ge,De,0);else if(M.depthTexture.format===rs)ln(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,ge,De,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,ge,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(I){const M=r.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const ve=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",ve)};le.addEventListener("dispose",ve),M.__depthDisposeCallback=ve}M.__boundDepthTexture=le}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(ee)for(let le=0;le<6;le++)lt(M.__webglFramebuffer[le],I,le);else{const le=I.texture.mipmaps;le&&le.length>0?lt(M.__webglFramebuffer[0],I,0):lt(M.__webglFramebuffer,I,0)}else if(ee){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=a.createRenderbuffer(),$e(M.__webglDepthbuffer[le],I,!1);else{const ve=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=M.__webglDepthbuffer[le];a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,De)}}else{const le=I.texture.mipmaps;if(le&&le.length>0?n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),$e(M.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,De)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function pt(I,M,ee){const le=r.get(I);M!==void 0&&ye(le.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&ft(I)}function et(I){const M=I.texture,ee=r.get(I),le=r.get(M);I.addEventListener("dispose",T);const ve=I.textures,De=I.isWebGLCubeRenderTarget===!0,Oe=ve.length>1;if(Oe||(le.__webglTexture===void 0&&(le.__webglTexture=a.createTexture()),le.__version=M.version,f.memory.textures++),De){ee.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[ge]=[];for(let _e=0;_e<M.mipmaps.length;_e++)ee.__webglFramebuffer[ge][_e]=a.createFramebuffer()}else ee.__webglFramebuffer[ge]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)ee.__webglFramebuffer[ge]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let ge=0,_e=ve.length;ge<_e;ge++){const Le=r.get(ve[ge]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),f.memory.textures++)}if(I.samples>0&&ln(I)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ge=0;ge<ve.length;ge++){const _e=ve[ge];ee.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[ge]);const Le=c.convert(_e.format,_e.colorSpace),Ge=c.convert(_e.type),ze=N(_e.internalFormat,Le,Ge,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),Pe=Qt(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,ze,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,ee.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),$e(ee.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(De){n.bindTexture(a.TEXTURE_CUBE_MAP,le.__webglTexture),Ae(a.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)ye(ee.__webglFramebuffer[ge][_e],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else ye(ee.__webglFramebuffer[ge],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(M)&&P(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let ge=0,_e=ve.length;ge<_e;ge++){const Le=ve[ge],Ge=r.get(Le);let ze=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ze=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ze,Ge.__webglTexture),Ae(ze,Le),ye(ee.__webglFramebuffer,I,Le,a.COLOR_ATTACHMENT0+ge,ze,0),y(Le)&&P(ze)}n.unbindTexture()}else{let ge=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ge,le.__webglTexture),Ae(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)ye(ee.__webglFramebuffer[_e],I,M,a.COLOR_ATTACHMENT0,ge,_e);else ye(ee.__webglFramebuffer,I,M,a.COLOR_ATTACHMENT0,ge,0);y(M)&&P(ge),n.unbindTexture()}I.depthBuffer&&ft(I)}function Ct(I){const M=I.textures;for(let ee=0,le=M.length;ee<le;ee++){const ve=M[ee];if(y(ve)){const De=F(I),Oe=r.get(ve).__webglTexture;n.bindTexture(De,Oe),P(De),n.unbindTexture()}}}const Yt=[],$t=[];function nn(I){if(I.samples>0){if(ln(I)===!1){const M=I.textures,ee=I.width,le=I.height;let ve=a.COLOR_BUFFER_BIT;const De=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=r.get(I),ge=M.length>1;if(ge)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const _e=I.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=a.STENCIL_BUFFER_BIT)),ge){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const Ge=r.get(M[Le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,ee,le,0,0,ee,le,ve,a.NEAREST),m===!0&&(Yt.length=0,$t.length=0,Yt.push(a.COLOR_ATTACHMENT0+Le),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Yt.push(De),$t.push(De),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Yt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const Ge=r.get(M[Le]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,Ge,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const M=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Qt(I){return Math.min(l.maxSamples,I.samples)}function ln(I){const M=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(I){const M=f.render.frame;_.get(I)!==M&&(_.set(I,M),I.update())}function Xt(I,M){const ee=I.colorSpace,le=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ee!==Xu&&ee!==yr&&(At.getTransfer(ee)===kt?(le!==Vi||ve!==Di)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",ee)),M}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=he,this.getTextureUnits=pe,this.setTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=me,this.setTexture3D=Te,this.setTextureCube=D,this.rebindTextures=pt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function CL(a,e){function n(r,l=yr){let c;const f=At.getTransfer(l);if(r===Di)return a.UNSIGNED_BYTE;if(r===Dm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Nm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===jS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===YS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===WS)return a.BYTE;if(r===qS)return a.SHORT;if(r===Nl)return a.UNSIGNED_SHORT;if(r===wm)return a.INT;if(r===sa)return a.UNSIGNED_INT;if(r===na)return a.FLOAT;if(r===za)return a.HALF_FLOAT;if(r===ZS)return a.ALPHA;if(r===KS)return a.RGB;if(r===Vi)return a.RGBA;if(r===Fa)return a.DEPTH_COMPONENT;if(r===rs)return a.DEPTH_STENCIL;if(r===QS)return a.RED;if(r===Lm)return a.RED_INTEGER;if(r===us)return a.RG;if(r===Um)return a.RG_INTEGER;if(r===Om)return a.RGBA_INTEGER;if(r===Ou||r===Pu||r===Iu||r===zu)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Up||r===Op||r===Pp||r===Ip)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Up)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Op)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zp||r===Fp||r===Bp||r===Hp||r===Gp||r===Vu||r===Vp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===zp||r===Fp)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Bp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hp)return c.COMPRESSED_R11_EAC;if(r===Gp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Vu)return c.COMPRESSED_RG11_EAC;if(r===Vp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kp||r===Xp||r===Wp||r===qp||r===jp||r===Yp||r===Zp||r===Kp||r===Qp||r===$p||r===Jp||r===em||r===tm||r===nm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$p)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===em)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tm)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nm)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===im||r===am||r===rm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===im)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===am)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sm||r===om||r===ku||r===lm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===sm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===om)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ku)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ll?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const wL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DL=`
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

}`;class NL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new ob(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gi({vertexShader:wL,fragmentShader:DL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ba(new rf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LL extends ds{constructor(e,n){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",b=new NL,y={},P=n.getContextAttributes();let F=null,N=null;const O=[],L=[],B=new Pt;let T=null;const z=new wi;z.viewport=new fn;const q=new wi;q.viewport=new fn;const V=[z,q],Z=new GR;let he=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=O[K];return oe===void 0&&(oe=new Uh,O[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=O[K];return oe===void 0&&(oe=new Uh,O[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=O[K];return oe===void 0&&(oe=new Uh,O[K]=oe),oe.getHandSpace()};function J(K){const oe=L.indexOf(K.inputSource);if(oe===-1)return;const fe=O[oe];fe!==void 0&&(fe.update(K.inputSource,K.frame,p||f),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",G);for(let K=0;K<O.length;K++){const oe=L[K];oe!==null&&(L[K]=null,O[K].disconnect(oe))}he=null,pe=null,b.reset();for(const K in y)delete y[K];e.setRenderTarget(F),S=null,g=null,v=null,l=null,N=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",U),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,Qe=null;P.depth&&(Qe=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=P.stencil?rs:Fa,Ce=P.stencil?Ll:sa);const ye={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(ye),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ra(g.textureWidth,g.textureHeight,{format:Vi,type:Di,depthTexture:new _o(g.textureWidth,g.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,fe),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ra(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(K){for(let oe=0;oe<K.removed.length;oe++){const fe=K.removed[oe],Ce=L.indexOf(fe);Ce>=0&&(L[Ce]=null,O[Ce].disconnect(fe))}for(let oe=0;oe<K.added.length;oe++){const fe=K.added[oe];let Ce=L.indexOf(fe);if(Ce===-1){for(let ye=0;ye<O.length;ye++)if(ye>=L.length){L.push(fe),Ce=ye;break}else if(L[ye]===null){L[ye]=fe,Ce=ye;break}if(Ce===-1)break}const Qe=O[Ce];Qe&&Qe.connect(fe)}}const te=new ae,me=new ae;function Te(K,oe,fe){te.setFromMatrixPosition(oe.matrixWorld),me.setFromMatrixPosition(fe.matrixWorld);const Ce=te.distanceTo(me),Qe=oe.projectionMatrix.elements,ye=fe.projectionMatrix.elements,$e=Qe[14]/(Qe[10]-1),lt=Qe[14]/(Qe[10]+1),ft=(Qe[9]+1)/Qe[5],pt=(Qe[9]-1)/Qe[5],et=(Qe[8]-1)/Qe[0],Ct=(ye[8]+1)/ye[0],Yt=$e*et,$t=$e*Ct,nn=Ce/(-et+Ct),Qt=nn*-et;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qt),K.translateZ(nn),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Qe[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ln=$e+nn,Y=lt+nn,Xt=Yt-Qt,Ut=$t+(Ce-Qt),I=ft*lt/Y*ln,M=pt*lt/Y*ln;K.projectionMatrix.makePerspective(Xt,Ut,I,M,ln,Y),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function D(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let oe=K.near,fe=K.far;b.texture!==null&&(b.depthNear>0&&(oe=b.depthNear),b.depthFar>0&&(fe=b.depthFar)),Z.near=q.near=z.near=oe,Z.far=q.far=z.far=fe,(he!==Z.near||pe!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),he=Z.near,pe=Z.far),Z.layers.mask=K.layers.mask|6,z.layers.mask=Z.layers.mask&-5,q.layers.mask=Z.layers.mask&-3;const Ce=K.parent,Qe=Z.cameras;D(Z,Ce);for(let ye=0;ye<Qe.length;ye++)D(Qe[ye],Ce);Qe.length===2?Te(Z,z,q):Z.projectionMatrix.copy(z.projectionMatrix),k(K,Z,Ce)};function k(K,oe,fe){fe===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cm*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(K){m=K,g!==null&&(g.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Z)},this.getCameraTexture=function(K){return y[K]};let Q=null;function Me(K,oe){if(_=oe.getViewerPose(p||f),E=oe,_!==null){const fe=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let Ce=!1;fe.length!==Z.cameras.length&&(Z.cameras.length=0,Ce=!0);for(let lt=0;lt<fe.length;lt++){const ft=fe[lt];let pt=null;if(S!==null)pt=S.getViewport(ft);else{const Ct=v.getViewSubImage(g,ft);pt=Ct.viewport,lt===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(N))}let et=V[lt];et===void 0&&(et=new wi,et.layers.enable(lt),et.viewport=new fn,V[lt]=et),et.matrix.fromArray(ft.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ft.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(pt.x,pt.y,pt.width,pt.height),lt===0&&(Z.matrix.copy(et.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ce===!0&&Z.cameras.push(et)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const lt=v.getDepthInformation(fe[0]);lt&&lt.isValid&&lt.texture&&b.init(lt,l.renderState)}if(Qe&&Qe.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let lt=0;lt<fe.length;lt++){const ft=fe[lt].camera;if(ft){let pt=y[ft];pt||(pt=new ob,y[ft]=pt);const et=v.getCameraImage(ft);pt.sourceTexture=et}}}}for(let fe=0;fe<O.length;fe++){const Ce=L[fe],Qe=O[fe];Ce!==null&&Qe!==void 0&&Qe.update(Ce,oe,p||f)}Q&&Q(K,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const Ae=new fb;Ae.setAnimationLoop(Me),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}}const UL=new dn,_b=new ht;_b.set(-1,0,0,0,1,0,0,0,1);function OL(a,e){function n(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function r(b,y){y.color.getRGB(b.fogColor.value,lb(a)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,P,F,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,N)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),w(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,P,F):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,n(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ti&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,n(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ti&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,n(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,n(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y),F=P.envMap,N=P.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(UL.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(_b),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,P,F){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=F*.5,y.map&&(b.map.value=y.map,n(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function w(b,y){const P=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function PL(a,e,n,r){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,O){const L=O.program;r.uniformBlockBinding(N,L)}function p(N,O){let L=l[N.id];L===void 0&&(b(N),L=_(N),l[N.id]=L,N.addEventListener("dispose",P));const B=O.program;r.updateUBOMapping(N,B);const T=e.render.frame;c[N.id]!==T&&(g(N),c[N.id]=T)}function _(N){const O=v();N.__bindingPointIndex=O;const L=a.createBuffer(),B=N.__size,T=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const O=l[N.id],L=N.uniforms,B=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,z=L.length;T<z;T++){const q=L[T];if(Array.isArray(q))for(let V=0,Z=q.length;V<Z;V++)S(q[V],T,V,B);else S(q,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(N,O,L,B){if(w(N,O,L,B)===!0){const T=N.__offset,z=N.value;if(Array.isArray(z)){let q=0;for(let V=0;V<z.length;V++){const Z=z[V],he=y(Z);E(Z,N.__data,q),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(q+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(z,N.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,N.__data)}}function E(N,O,L){typeof N=="number"||typeof N=="boolean"?O[0]=N:N.isMatrix3?(O[0]=N.elements[0],O[1]=N.elements[1],O[2]=N.elements[2],O[3]=0,O[4]=N.elements[3],O[5]=N.elements[4],O[6]=N.elements[5],O[7]=0,O[8]=N.elements[6],O[9]=N.elements[7],O[10]=N.elements[8],O[11]=0):ArrayBuffer.isView(N)?O.set(new N.constructor(N.buffer,N.byteOffset,O.length)):N.toArray(O,L)}function w(N,O,L,B){const T=N.value,z=O+"_"+L;if(B[z]===void 0)return typeof T=="number"||typeof T=="boolean"?B[z]=T:ArrayBuffer.isView(T)?B[z]=T.slice():B[z]=T.clone(),!0;{const q=B[z];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return B[z]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function b(N){const O=N.uniforms;let L=0;const B=16;for(let z=0,q=O.length;z<q;z++){const V=Array.isArray(O[z])?O[z]:[O[z]];for(let Z=0,he=V.length;Z<he;Z++){const pe=V[Z],J=Array.isArray(pe.value)?pe.value:[pe.value];for(let U=0,G=J.length;U<G;U++){const te=J[U],me=y(te),Te=L%B,D=Te%me.boundary,k=Te+D;L+=D,k!==0&&B-k<me.storage&&(L+=B-k),pe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=L,L+=me.storage}}}const T=L%B;return T>0&&(L+=B-T),N.__size=L,N.__cache={},this}function y(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(O.boundary=16,O.storage=N.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",N),O}function P(N){const O=N.target;O.removeEventListener("dispose",P);const L=f.indexOf(O.__bindingPointIndex);f.splice(L,1),a.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function F(){for(const N in l)a.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:F}}const IL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function zL(){return $i===null&&($i=new ER(IL,16,16,us,za),$i.name="DFG_LUT",$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=La,$i.wrapT=La,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class FL{constructor(e={}){const{canvas:n=tR(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Di}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const w=S,b=new Set([Om,Um,Lm]),y=new Set([Di,sa,Nl,Ll,Dm,Nm]),P=new Uint32Array(4),F=new Int32Array(4),N=new ae;let O=null,L=null;const B=[],T=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let V=!1,Z=null,he=null,pe=null,J=null;this._outputColorSpace=Ci;let U=0,G=0,te=null,me=-1,Te=null;const D=new fn,k=new fn;let Q=null;const Me=new Et(0);let Ae=0,K=n.width,oe=n.height,fe=1,Ce=null,Qe=null;const ye=new fn(0,0,K,oe),$e=new fn(0,0,K,oe);let lt=!1;const ft=new rb;let pt=!1,et=!1;const Ct=new dn,Yt=new ae,$t=new fn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ln(){return te===null?fe:1}let Y=r;function Xt(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cm}`),n.addEventListener("webglcontextlost",an,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",ii,!1),Y===null){const j="webgl2";if(Y=Xt(j,R),Y===null)throw Xt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let Ut,I,M,ee,le,ve,De,Oe,ge,_e,Le,Ge,ze,Pe,tt,nt,ut,W,Ne,Se,Ue,He,Re;function Ze(){Ut=new zD(Y),Ut.init(),Ue=new CL(Y,Ut),I=new wD(Y,Ut,e,Ue),M=new AL(Y,Ut),I.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),he=Y.createFramebuffer(),pe=Y.createFramebuffer(),J=Y.createFramebuffer(),ee=new HD(Y),le=new dL,ve=new RL(Y,Ut,M,le,I,Ue,ee),De=new ID(q),Oe=new XR(Y),He=new RD(Y,Oe),ge=new FD(Y,Oe,ee,He),_e=new VD(Y,ge,Oe,He,ee),W=new GD(Y,I,ve),tt=new DD(le),Le=new fL(q,De,Ut,I,He,tt),Ge=new OL(q,le),ze=new pL,Pe=new yL(Ut),ut=new AD(q,De,M,_e,E,m),nt=new TL(q,_e,I),Re=new PL(Y,ee,I,M),Ne=new CD(Y,Ut,ee),Se=new BD(Y,Ut,ee),ee.programs=Le.programs,q.capabilities=I,q.extensions=Ut,q.properties=le,q.renderLists=ze,q.shadowMap=nt,q.state=M,q.info=ee}Ze(),w!==Di&&(z=new XD(w,n.width,n.height,h,l,c));const We=new LL(q,Y);this.xr=We,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(R){R!==void 0&&(fe=R,this.setSize(K,oe,!1))},this.getSize=function(R){return R.set(K,oe)},this.setSize=function(R,j,ce=!0){if(We.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,oe=j,n.width=Math.floor(R*fe),n.height=Math.floor(j*fe),ce===!0&&(n.style.width=R+"px",n.style.height=j+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(K*fe,oe*fe).floor()},this.setDrawingBufferSize=function(R,j,ce){K=R,oe=j,fe=ce,n.width=Math.floor(R*ce),n.height=Math.floor(j*ce),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(w===Di){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ye)},this.setViewport=function(R,j,ce,re){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,j,ce,re),M.viewport(D.copy(ye).multiplyScalar(fe).round())},this.getScissor=function(R){return R.copy($e)},this.setScissor=function(R,j,ce,re){R.isVector4?$e.set(R.x,R.y,R.z,R.w):$e.set(R,j,ce,re),M.scissor(k.copy($e).multiplyScalar(fe).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(R){M.setScissorTest(lt=R)},this.setOpaqueSort=function(R){Ce=R},this.setTransparentSort=function(R){Qe=R},this.getClearColor=function(R){return R.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ce=!0){let re=0;if(R){let se=!1;if(te!==null){const Fe=te.texture.format;se=b.has(Fe)}if(se){const Fe=te.texture.type,Xe=y.has(Fe),Ie=ut.getClearColor(),je=ut.getClearAlpha(),qe=Ie.r,it=Ie.g,mt=Ie.b;Xe?(P[0]=qe,P[1]=it,P[2]=mt,P[3]=je,Y.clearBufferuiv(Y.COLOR,0,P)):(F[0]=qe,F[1]=it,F[2]=mt,F[3]=je,Y.clearBufferiv(Y.COLOR,0,F))}else re|=Y.COLOR_BUFFER_BIT}j&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Z=R},this.dispose=function(){n.removeEventListener("webglcontextlost",an,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",ii,!1),ut.dispose(),ze.dispose(),Pe.dispose(),le.dispose(),De.dispose(),_e.dispose(),He.dispose(),Re.dispose(),Le.dispose(),We.dispose(),We.removeEventListener("sessionstart",mn),We.removeEventListener("sessionend",Dn),jn.stop()};function an(R){R.preventDefault(),Ex("WebGLRenderer: Context Lost."),V=!0}function zt(){Ex("WebGLRenderer: Context Restored."),V=!1;const R=ee.autoReset,j=nt.enabled,ce=nt.autoUpdate,re=nt.needsUpdate,se=nt.type;Ze(),ee.autoReset=R,nt.enabled=j,nt.autoUpdate=ce,nt.needsUpdate=re,nt.type=se}function ii(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const j=R.target;j.removeEventListener("dispose",ai),Eo(j)}function Eo(R){To(R),le.remove(R)}function To(R){const j=le.get(R).programs;j!==void 0&&(j.forEach(function(ce){Le.releaseProgram(ce)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ce,re,se,Fe){j===null&&(j=nn);const Xe=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ie=ka(R,j,ce,re,se);M.setMaterial(re,Xe);let je=ce.index,qe=1;if(re.wireframe===!0){if(je=ge.getWireframeAttribute(ce),je===void 0)return;qe=2}const it=ce.drawRange,mt=ce.attributes.position;let Je=it.start*qe,Dt=(it.start+it.count)*qe;Fe!==null&&(Je=Math.max(Je,Fe.start*qe),Dt=Math.min(Dt,(Fe.start+Fe.count)*qe)),je!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,je.count)):mt!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,mt.count));const rn=Dt-Je;if(rn<0||rn===1/0)return;He.setup(se,re,Ie,ce,je);let Zt,Ft=Ne;if(je!==null&&(Zt=Oe.get(je),Ft=Se,Ft.setIndex(Zt)),se.isMesh)re.wireframe===!0?(M.setLineWidth(re.wireframeLinewidth*ln()),Ft.setMode(Y.LINES)):Ft.setMode(Y.TRIANGLES);else if(se.isLine){let Bt=re.linewidth;Bt===void 0&&(Bt=1),M.setLineWidth(Bt*ln()),se.isLineSegments?Ft.setMode(Y.LINES):se.isLineLoop?Ft.setMode(Y.LINE_LOOP):Ft.setMode(Y.LINE_STRIP)}else se.isPoints?Ft.setMode(Y.POINTS):se.isSprite&&Ft.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Bt=se._multiDrawStarts,Ve=se._multiDrawCounts,Fn=se._multiDrawCount,xt=je?Oe.get(je).bytesPerElement:1,Mn=le.get(re).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)Mn.setValue(Y,"_gl_DrawID",ri),Ft.render(Bt[ri]/xt,Ve[ri])}else if(se.isInstancedMesh)Ft.renderInstances(Je,rn,se.count);else if(ce.isInstancedBufferGeometry){const Bt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ve=Math.min(ce.instanceCount,Bt);Ft.renderInstances(Je,rn,Ve)}else Ft.render(Je,rn)};function Ao(R,j,ce){R.transparent===!0&&R.side===Na&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,Va(R,j,ce),R.side=Tr,R.needsUpdate=!0,Va(R,j,ce),R.side=Na):Va(R,j,ce)}this.compile=function(R,j,ce=null){ce===null&&(ce=R),L=Pe.get(ce),L.init(j),T.push(L),ce.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),R!==ce&&R.traverseVisible(function(se){se.isLight&&se.layers.test(j.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),L.setupLights();const re=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Fe=se.material;if(Fe)if(Array.isArray(Fe))for(let Xe=0;Xe<Fe.length;Xe++){const Ie=Fe[Xe];Ao(Ie,ce,se),re.add(Ie)}else Ao(Fe,ce,se),re.add(Fe)}),L=T.pop(),re},this.compileAsync=function(R,j,ce=null){const re=this.compile(R,j,ce);return new Promise(se=>{function Fe(){if(re.forEach(function(Xe){le.get(Xe).currentProgram.isReady()&&re.delete(Xe)}),re.size===0){se(R);return}setTimeout(Fe,10)}Ut.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let hs=null;function Wi(R){hs&&hs(R)}function mn(){jn.stop()}function Dn(){jn.start()}const jn=new fb;jn.setAnimationLoop(Wi),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(R){hs=R,We.setAnimationLoop(R),R===null?jn.stop():jn.start()},We.addEventListener("sessionstart",mn),We.addEventListener("sessionend",Dn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(R,j);const ce=We.enabled===!0&&We.isPresenting===!0,re=z!==null&&(te===null||ce)&&z.begin(q,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(j),j=We.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,j,te),L=Pe.get(R,T.length),L.init(j),L.state.textureUnits=ve.getTextureUnits(),T.push(L),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ft.setFromProjectionMatrix(Ct,ia,j.reversedDepth),et=this.localClippingEnabled,pt=tt.init(this.clippingPlanes,et),O=ze.get(R,B.length),O.init(),B.push(O),We.enabled===!0&&We.isPresenting===!0){const Xe=q.xr.getDepthSensingMesh();Xe!==null&&Ar(Xe,j,-1/0,q.sortObjects)}Ar(R,j,0,q.sortObjects),O.finish(),q.sortObjects===!0&&O.sort(Ce,Qe,j.reversedDepth),Qt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Qt&&ut.addToRenderList(O,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&tt.beginShadows();const se=L.state.shadowsArray;if(nt.render(se,R,j),pt===!0&&tt.endShadows(),(re&&z.hasRenderPass())===!1){const Xe=O.opaque,Ie=O.transmissive;if(L.setupLights(),j.isArrayCamera){const je=j.cameras;if(Ie.length>0)for(let qe=0,it=je.length;qe<it;qe++){const mt=je[qe];Gl(Xe,Ie,R,mt)}Qt&&ut.render(R);for(let qe=0,it=je.length;qe<it;qe++){const mt=je[qe];Hl(O,R,mt,mt.viewport)}}else Ie.length>0&&Gl(Xe,Ie,R,j),Qt&&ut.render(R),Hl(O,R,j)}te!==null&&G===0&&(ve.updateMultisampleRenderTarget(te),ve.updateRenderTargetMipmap(te)),re&&z.end(q),R.isScene===!0&&R.onAfterRender(q,R,j),He.resetDefaultState(),me=-1,Te=null,T.pop(),T.length>0?(L=T[T.length-1],ve.setTextureUnits(L.state.textureUnits),pt===!0&&tt.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,Z!==null&&Z.renderEnd()};function Ar(R,j,ce,re){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ft.intersectsSprite(R)){re&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const Xe=_e.update(R),Ie=R.material;Ie.visible&&O.push(R,Xe,Ie,ce,$t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ft.intersectsObject(R))){const Xe=_e.update(R),Ie=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),$t.copy(Xe.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ie)){const je=Xe.groups;for(let qe=0,it=je.length;qe<it;qe++){const mt=je[qe],Je=Ie[mt.materialIndex];Je&&Je.visible&&O.push(R,Xe,Je,ce,$t.z,mt)}}else Ie.visible&&O.push(R,Xe,Ie,ce,$t.z,null)}}const Fe=R.children;for(let Xe=0,Ie=Fe.length;Xe<Ie;Xe++)Ar(Fe[Xe],j,ce,re)}function Hl(R,j,ce,re){const{opaque:se,transmissive:Fe,transparent:Xe}=R;L.setupLightsView(ce),pt===!0&&tt.setGlobalState(q.clippingPlanes,ce),re&&M.viewport(D.copy(re)),se.length>0&&Rr(se,j,ce),Fe.length>0&&Rr(Fe,j,ce),Xe.length>0&&Rr(Xe,j,ce),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Gl(R,j,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[re.id]===void 0){const Je=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[re.id]=new ra(1,1,{generateMipmaps:!0,type:Je?za:Di,minFilter:as,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[re.id],Xe=re.viewport||D;Fe.setSize(Xe.z*q.transmissionResolutionScale,Xe.w*q.transmissionResolutionScale);const Ie=q.getRenderTarget(),je=q.getActiveCubeFace(),qe=q.getActiveMipmapLevel();q.setRenderTarget(Fe),q.getClearColor(Me),Ae=q.getClearAlpha(),Ae<1&&q.setClearColor(16777215,.5),q.clear(),Qt&&ut.render(ce);const it=q.toneMapping;q.toneMapping=aa;const mt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),L.setupLightsView(re),pt===!0&&tt.setGlobalState(q.clippingPlanes,re),Rr(R,ce,re),ve.updateMultisampleRenderTarget(Fe),ve.updateRenderTargetMipmap(Fe),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,rn=j.length;Dt<rn;Dt++){const Zt=j[Dt],{object:Ft,geometry:Bt,material:Ve,group:Fn}=Zt;if(Ve.side===Na&&Ft.layers.test(re.layers)){const xt=Ve.side;Ve.side=ti,Ve.needsUpdate=!0,Ga(Ft,ce,re,Bt,Ve,Fn),Ve.side=xt,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(ve.updateMultisampleRenderTarget(Fe),ve.updateRenderTargetMipmap(Fe))}q.setRenderTarget(Ie,je,qe),q.setClearColor(Me,Ae),mt!==void 0&&(re.viewport=mt),q.toneMapping=it}function Rr(R,j,ce){const re=j.isScene===!0?j.overrideMaterial:null;for(let se=0,Fe=R.length;se<Fe;se++){const Xe=R[se],{object:Ie,geometry:je,group:qe}=Xe;let it=Xe.material;it.allowOverride===!0&&re!==null&&(it=re),Ie.layers.test(ce.layers)&&Ga(Ie,j,ce,je,it,qe)}}function Ga(R,j,ce,re,se,Fe){R.onBeforeRender(q,j,ce,re,se,Fe),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(q,j,ce,re,R,Fe),se.transparent===!0&&se.side===Na&&se.forceSinglePass===!1?(se.side=ti,se.needsUpdate=!0,q.renderBufferDirect(ce,j,re,se,R,Fe),se.side=Tr,se.needsUpdate=!0,q.renderBufferDirect(ce,j,re,se,R,Fe),se.side=Na):q.renderBufferDirect(ce,j,re,se,R,Fe),R.onAfterRender(q,j,ce,re,se,Fe)}function Va(R,j,ce){j.isScene!==!0&&(j=nn);const re=le.get(R),se=L.state.lights,Fe=L.state.shadowsArray,Xe=se.state.version,Ie=Le.getParameters(R,se.state,Fe,j,ce,L.state.lightProbeGridArray),je=Le.getProgramCacheKey(Ie);let qe=re.programs;re.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,re.fog=j.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;re.envMap=De.get(R.envMap||re.environment,it),re.envMapRotation=re.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",ai),qe=new Map,re.programs=qe);let mt=qe.get(je);if(mt!==void 0){if(re.currentProgram===mt&&re.lightsStateVersion===Xe)return la(R,Ie),mt}else Ie.uniforms=Le.getUniforms(R),Z!==null&&R.isNodeMaterial&&Z.build(R,ce,Ie),R.onBeforeCompile(Ie,q),mt=Le.acquireProgram(Ie,je),qe.set(je,mt),re.uniforms=Ie.uniforms;const Je=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=tt.uniform),la(R,Ie),re.needsLights=Vl(R),re.lightsStateVersion=Xe,re.needsLights&&(Je.ambientLightColor.value=se.state.ambient,Je.lightProbe.value=se.state.probe,Je.directionalLights.value=se.state.directional,Je.directionalLightShadows.value=se.state.directionalShadow,Je.spotLights.value=se.state.spot,Je.spotLightShadows.value=se.state.spotShadow,Je.rectAreaLights.value=se.state.rectArea,Je.ltc_1.value=se.state.rectAreaLTC1,Je.ltc_2.value=se.state.rectAreaLTC2,Je.pointLights.value=se.state.point,Je.pointLightShadows.value=se.state.pointShadow,Je.hemisphereLights.value=se.state.hemi,Je.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Je.spotLightMatrix.value=se.state.spotLightMatrix,Je.spotLightMap.value=se.state.spotLightMap,Je.pointShadowMatrix.value=se.state.pointShadowMatrix),re.lightProbeGrid=L.state.lightProbeGridArray.length>0,re.currentProgram=mt,re.uniformsList=null,mt}function oa(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Fu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function la(R,j){const ce=le.get(R);ce.outputColorSpace=j.outputColorSpace,ce.batching=j.batching,ce.batchingColor=j.batchingColor,ce.instancing=j.instancing,ce.instancingColor=j.instancingColor,ce.instancingMorph=j.instancingMorph,ce.skinning=j.skinning,ce.morphTargets=j.morphTargets,ce.morphNormals=j.morphNormals,ce.morphColors=j.morphColors,ce.morphTargetsCount=j.morphTargetsCount,ce.numClippingPlanes=j.numClippingPlanes,ce.numIntersection=j.numClipIntersection,ce.vertexAlphas=j.vertexAlphas,ce.vertexTangents=j.vertexTangents,ce.toneMapping=j.toneMapping}function Cr(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(j.matrixWorld);for(let ce=0,re=R.length;ce<re;ce++){const se=R[ce];if(se.texture!==null&&se.boundingBox.containsPoint(N))return se}return null}function ka(R,j,ce,re,se){j.isScene!==!0&&(j=nn),ve.resetTextureUnits();const Fe=j.fog,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?j.environment:null,Ie=te===null?q.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:At.workingColorSpace,je=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,qe=De.get(re.envMap||Xe,je),it=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,mt=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!ce.morphAttributes.position,Dt=!!ce.morphAttributes.normal,rn=!!ce.morphAttributes.color;let Zt=aa;re.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Zt=q.toneMapping);const Ft=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Bt=Ft!==void 0?Ft.length:0,Ve=le.get(re),Fn=L.state.lights;if(pt===!0&&(et===!0||R!==Te)){const It=R===Te&&re.id===me;tt.setState(re,R,It)}let xt=!1;re.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Fn.state.version||Ve.outputColorSpace!==Ie||se.isBatchedMesh&&Ve.batching===!1||!se.isBatchedMesh&&Ve.batching===!0||se.isBatchedMesh&&Ve.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ve.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ve.instancing===!1||!se.isInstancedMesh&&Ve.instancing===!0||se.isSkinnedMesh&&Ve.skinning===!1||!se.isSkinnedMesh&&Ve.skinning===!0||se.isInstancedMesh&&Ve.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ve.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ve.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ve.instancingMorph===!1&&se.morphTexture!==null||Ve.envMap!==qe||re.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==tt.numPlanes||Ve.numIntersection!==tt.numIntersection)||Ve.vertexAlphas!==it||Ve.vertexTangents!==mt||Ve.morphTargets!==Je||Ve.morphNormals!==Dt||Ve.morphColors!==rn||Ve.toneMapping!==Zt||Ve.morphTargetsCount!==Bt||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ve.__version=re.version);let Mn=Ve.currentProgram;xt===!0&&(Mn=Va(re,j,se),Z&&re.isNodeMaterial&&Z.onUpdateProgram(re,Mn,Ve));let ri=!1,Ni=!1,si=!1;const Ht=Mn.getUniforms(),sn=Ve.uniforms;if(M.useProgram(Mn.program)&&(ri=!0,Ni=!0,si=!0),re.id!==me&&(me=re.id,Ni=!0),Ve.needsLights){const It=Cr(L.state.lightProbeGridArray,se);Ve.lightProbeGrid!==It&&(Ve.lightProbeGrid=It,Ni=!0)}if(ri||Te!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ht.setValue(Y,"projectionMatrix",R.projectionMatrix),Ht.setValue(Y,"viewMatrix",R.matrixWorldInverse);const qi=Ht.map.cameraPosition;qi!==void 0&&qi.setValue(Y,Yt.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Ht.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ht.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),Te!==R&&(Te=R,Ni=!0,si=!0)}if(Ve.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ht.setValue(Y,"directionalShadowMap",Fn.state.directionalShadowMap,ve),Fn.state.spotShadowMap.length>0&&Ht.setValue(Y,"spotShadowMap",Fn.state.spotShadowMap,ve),Fn.state.pointShadowMap.length>0&&Ht.setValue(Y,"pointShadowMap",Fn.state.pointShadowMap,ve)),se.isSkinnedMesh){Ht.setOptional(Y,se,"bindMatrix"),Ht.setOptional(Y,se,"bindMatrixInverse");const It=se.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Ht.setValue(Y,"boneTexture",It.boneTexture,ve))}se.isBatchedMesh&&(Ht.setOptional(Y,se,"batchingTexture"),Ht.setValue(Y,"batchingTexture",se._matricesTexture,ve),Ht.setOptional(Y,se,"batchingIdTexture"),Ht.setValue(Y,"batchingIdTexture",se._indirectTexture,ve),Ht.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&Ht.setValue(Y,"batchingColorTexture",se._colorsTexture,ve));const Li=ce.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&W.update(se,ce,Mn),(Ni||Ve.receiveShadow!==se.receiveShadow)&&(Ve.receiveShadow=se.receiveShadow,Ht.setValue(Y,"receiveShadow",se.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&j.environment!==null&&(sn.envMapIntensity.value=j.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=zL()),Ni){if(Ht.setValue(Y,"toneMappingExposure",q.toneMappingExposure),Ve.needsLights&&gn(sn,si),Fe&&re.fog===!0&&Ge.refreshFogUniforms(sn,Fe),Ge.refreshMaterialUniforms(sn,re,fe,oe,L.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.lightProbeGrid){const It=Ve.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}Fu.upload(Y,oa(Ve),sn,ve)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Fu.upload(Y,oa(Ve),sn,ve),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ht.setValue(Y,"center",se.center),Ht.setValue(Y,"modelViewMatrix",se.modelViewMatrix),Ht.setValue(Y,"normalMatrix",se.normalMatrix),Ht.setValue(Y,"modelMatrix",se.matrixWorld),re.uniformsGroups!==void 0){const It=re.uniformsGroups;for(let qi=0,Xa=It.length;qi<Xa;qi++){const wr=It[qi];Re.update(wr,Mn),Re.bind(wr,Mn)}}return Mn}function gn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Vl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,j,ce){const re=le.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),le.get(R.texture).__webglTexture=j,le.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ce=le.get(R);ce.__webglFramebuffer=j,ce.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ce=0){te=R,U=j,G=ce;let re=null,se=!1,Fe=!1;if(R){const Ie=le.get(R);if(Ie.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Ie.__webglFramebuffer),D.copy(R.viewport),k.copy(R.scissor),Q=R.scissorTest,M.viewport(D),M.scissor(k),M.setScissorTest(Q),me=-1;return}else if(Ie.__webglFramebuffer===void 0)ve.setupRenderTarget(R);else if(Ie.__hasExternalTextures)ve.rebindTextures(R,le.get(R.texture).__webglTexture,le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Ie.__boundDepthTexture!==it){if(it!==null&&le.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const qe=le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[j])?re=qe[j][ce]:re=qe[j],se=!0):R.samples>0&&ve.useMultisampledRTT(R)===!1?re=le.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?re=qe[ce]:re=qe,D.copy(R.viewport),k.copy(R.scissor),Q=R.scissorTest}else D.copy(ye).multiplyScalar(fe).floor(),k.copy($e).multiplyScalar(fe).floor(),Q=lt;if(ce!==0&&(re=he),M.bindFramebuffer(Y.FRAMEBUFFER,re)&&M.drawBuffers(R,re),M.viewport(D),M.scissor(k),M.setScissorTest(Q),se){const Ie=le.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ce)}else if(Fe){const Ie=j;for(let je=0;je<R.textures.length;je++){const qe=le.get(R.textures[je]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+je,qe.__webglTexture,ce,Ie)}}else if(R!==null&&ce!==0){const Ie=le.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ie.__webglTexture,ce)}me=-1},this.readRenderTargetPixels=function(R,j,ce,re,se,Fe,Xe,Ie=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(je=je[Xe]),je){M.bindFramebuffer(Y.FRAMEBUFFER,je);try{const qe=R.textures[Ie],it=qe.format,mt=qe.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(it)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(mt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-re&&ce>=0&&ce<=R.height-se&&Y.readPixels(j,ce,re,se,Ue.convert(it),Ue.convert(mt),Fe)}finally{const qe=te!==null?le.get(te).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,j,ce,re,se,Fe,Xe,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(je=je[Xe]),je)if(j>=0&&j<=R.width-re&&ce>=0&&ce<=R.height-se){M.bindFramebuffer(Y.FRAMEBUFFER,je);const qe=R.textures[Ie],it=qe.format,mt=qe.type;if(R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Fe.byteLength,Y.STREAM_READ),Y.readPixels(j,ce,re,se,Ue.convert(it),Ue.convert(mt),0);const Dt=te!==null?le.get(te).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,Dt);const rn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await nR(Y,rn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Fe),Y.deleteBuffer(Je),Y.deleteSync(rn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ce=0){const re=Math.pow(2,-ce),se=Math.floor(R.image.width*re),Fe=Math.floor(R.image.height*re),Xe=j!==null?j.x:0,Ie=j!==null?j.y:0;ve.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ce,0,0,Xe,Ie,se,Fe),M.unbindTexture()},this.copyTextureToTexture=function(R,j,ce=null,re=null,se=0,Fe=0){let Xe,Ie,je,qe,it,mt,Je,Dt,rn;const Zt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(ce!==null)Xe=ce.max.x-ce.min.x,Ie=ce.max.y-ce.min.y,je=ce.isBox3?ce.max.z-ce.min.z:1,qe=ce.min.x,it=ce.min.y,mt=ce.isBox3?ce.min.z:0;else{const sn=Math.pow(2,-se);Xe=Math.floor(Zt.width*sn),Ie=Math.floor(Zt.height*sn),R.isDataArrayTexture?je=Zt.depth:R.isData3DTexture?je=Math.floor(Zt.depth*sn):je=1,qe=0,it=0,mt=0}re!==null?(Je=re.x,Dt=re.y,rn=re.z):(Je=0,Dt=0,rn=0);const Ft=Ue.convert(j.format),Bt=Ue.convert(j.type);let Ve;j.isData3DTexture?(ve.setTexture3D(j,0),Ve=Y.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ve.setTexture2DArray(j,0),Ve=Y.TEXTURE_2D_ARRAY):(ve.setTexture2D(j,0),Ve=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment);const Fn=M.getParameter(Y.UNPACK_ROW_LENGTH),xt=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(Y.UNPACK_SKIP_PIXELS),ri=M.getParameter(Y.UNPACK_SKIP_ROWS),Ni=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Zt.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Zt.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(Y.UNPACK_SKIP_ROWS,it),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);const si=R.isDataArrayTexture||R.isData3DTexture,Ht=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const sn=le.get(R),Li=le.get(j),It=le.get(sn.__renderTarget),qi=le.get(Li.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Xa=0;Xa<je;Xa++)si&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(R).__webglTexture,se,mt+Xa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(j).__webglTexture,Fe,rn+Xa)),Y.blitFramebuffer(qe,it,Xe,Ie,Je,Dt,Xe,Ie,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||le.has(R)){const sn=le.get(R),Li=le.get(j);M.bindFramebuffer(Y.READ_FRAMEBUFFER,pe),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,J);for(let It=0;It<je;It++)si?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,sn.__webglTexture,se,mt+It):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,sn.__webglTexture,se),Ht?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Li.__webglTexture,Fe,rn+It):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Li.__webglTexture,Fe),se!==0?Y.blitFramebuffer(qe,it,Xe,Ie,Je,Dt,Xe,Ie,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ht?Y.copyTexSubImage3D(Ve,Fe,Je,Dt,rn+It,qe,it,Xe,Ie):Y.copyTexSubImage2D(Ve,Fe,Je,Dt,qe,it,Xe,Ie);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ht?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Ve,Fe,Je,Dt,rn,Xe,Ie,je,Ft,Bt,Zt.data):j.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ve,Fe,Je,Dt,rn,Xe,Ie,je,Ft,Zt.data):Y.texSubImage3D(Ve,Fe,Je,Dt,rn,Xe,Ie,je,Ft,Bt,Zt):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Fe,Je,Dt,Xe,Ie,Ft,Bt,Zt.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Fe,Je,Dt,Zt.width,Zt.height,Ft,Zt.data):Y.texSubImage2D(Y.TEXTURE_2D,Fe,Je,Dt,Xe,Ie,Ft,Bt,Zt);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Fn),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(Y.UNPACK_SKIP_ROWS,ri),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ni),Fe===0&&j.generateMipmaps&&Y.generateMipmap(Ve),M.unbindTexture()},this.initRenderTarget=function(R){le.get(R).__webglFramebuffer===void 0&&ve.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ve.setTextureCube(R,0):R.isData3DTexture?ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ve.setTexture2DArray(R,0):ve.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){U=0,G=0,te=null,M.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}const BL=new Et(12764882),HL=new Et(13159638),co=4500,es=91,GL=42,VL=new Et(15253624),kL=`
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
`,XL=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,WL=`
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
`,qL=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,jL=`
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
`,YL=`
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
`;function ZL(){const a=new Float32Array(co*3),e=new Float32Array(co),n=new Float32Array(co);for(let r=0;r<co;r++){const l=24+Math.random()*36,c=Math.random()*Math.PI*2,f=(Math.random()-.5)*1.1;a[r*3]=l*Math.cos(c)*Math.cos(f),a[r*3+1]=l*Math.sin(f)*2.2,a[r*3+2]=l*Math.sin(c)*Math.cos(f)-18,e[r]=Math.random(),n[r]=.7+Math.random()*1.6}return{positions:a,phases:e,sizes:n}}function KL(){let a=1597463007;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}function QL(a,e,n){const r=(a.x-e.x)*n,l=a.y-e.y;return r*r+l*l}function $L(a){const e=KL(),n=[],r=48,l=.025;for(let c=0;c<es;c++){let f=null,h=-1;for(let m=0;m<r;m++){const p={x:l+e()*(1-l*2),y:l+e()*(1-l*2)};let _=Number.POSITIVE_INFINITY;for(const v of n){const g=QL(p,v,a);_=Math.min(_,g)}_>h&&(f=p,h=_)}f&&n.push(f)}return n}function xb(a,e){const n=$L(e);for(let r=0;r<n.length;r++){const l=n[r];a[r*3]=-.96+l.x*1.92,a[r*3+1]=-.9+l.y*1.8,a[r*3+2]=0}}function JL(a){const e=new Float32Array(es),n=new Float32Array(es*3),r=new Float32Array(es),l=new Float32Array(es);for(let c=0;c<es;c++){const f=c<GL;e[c]=f?1:0,r[c]=c/es,l[c]=f?32+c*29%7:12+c*17%4}return xb(n,a),{flares:e,positions:n,phases:r,sizes:l}}function eU(a,e,n={}){const{transparent:r=!1,threadAlpha:l}=n;let c;try{c=new FL({alpha:!0,antialias:!1,canvas:a,powerPreference:"high-performance"})}catch{return()=>{}}c.setPixelRatio(1);const f=new _R;f.background=r?null:new Et(328968);const h=new wi(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:_}=ZL(),v=new ni;v.setAttribute("position",new bn(m,3)),v.setAttribute("phase",new bn(p,1)),v.setAttribute("size",new bn(_,1));const g=new gi({vertexShader:kL,fragmentShader:XL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:BL}},transparent:!0,depthWrite:!1}),S=new Xx(v,g);f.add(S);const E=a.clientWidth||window.innerWidth,w=a.clientHeight||window.innerHeight,b=JL(E/w),y=b.positions,P=new ni;P.setAttribute("position",new bn(y,3)),P.setAttribute("flare",new bn(b.flares,1)),P.setAttribute("phase",new bn(b.phases,1)),P.setAttribute("size",new bn(b.sizes,1));const F=new gi({vertexShader:jL,fragmentShader:YL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:VL}},transparent:!0,depthTest:!1,depthWrite:!1}),N=new Xx(P,F);f.add(N);const O=3400,L=new ni,B=new Float32Array(O*6),T=new Float32Array(O*2),z=new Float32Array(O*2);L.setAttribute("position",new bn(B,3)),L.setAttribute("lineUV",new bn(T,1)),L.setAttribute("segPhase",new bn(z,1)),L.setDrawRange(0,0);const q=new gi({vertexShader:WL,fragmentShader:qL,uniforms:{uTime:{value:0},uColor:{value:HL},uAlpha:{value:l??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),V=new DR(L,q);f.add(V);const Z=e==="alive"?4.8:5.2,he=new Map;function pe(oe,fe,Ce){const Qe=Math.floor(oe/Z),ye=Math.floor(fe/Z),$e=Math.floor(Ce/Z);return`${Qe}:${ye}:${$e}`}for(let oe=0;oe<co;oe++){const fe=m[oe*3],Ce=m[oe*3+1],Qe=m[oe*3+2],ye=pe(fe,Ce,Qe),$e=he.get(ye)??[];$e.push(oe),he.set(ye,$e)}function J(oe){const fe=m[oe*3],Ce=m[oe*3+1],Qe=m[oe*3+2],ye=Math.floor(fe/Z),$e=Math.floor(Ce/Z),lt=Math.floor(Qe/Z),ft=[];for(let pt=-1;pt<=1;pt++)for(let et=-1;et<=1;et++)for(let Ct=-1;Ct<=1;Ct++){const Yt=`${ye+pt}:${$e+et}:${lt+Ct}`;ft.push(...he.get(Yt)??[])}return ft}const U=()=>{const oe=new Set,fe=[],Ce=[],Qe=[];for(let ye=0;ye<co&&fe.length<O*6;ye++){const $e=m[ye*3],lt=m[ye*3+1],ft=m[ye*3+2],pt=[];for(const et of J(ye)){if(et===ye)continue;const Ct=m[et*3]-$e,Yt=m[et*3+1]-lt,$t=m[et*3+2]-ft,nn=Ct*Ct+Yt*Yt+$t*$t;nn<Z*Z&&pt.push([et,nn])}pt.sort((et,Ct)=>et[1]-Ct[1]);for(const[et]of pt.slice(0,5)){if(fe.length>=O*6)break;const Ct=ye<et?`${ye}-${et}`:`${et}-${ye}`;oe.has(Ct)||(oe.add(Ct),fe.push($e,lt,ft,m[et*3],m[et*3+1],m[et*3+2]),Ce.push(0,1),Qe.push(Math.random(),Math.random()))}}B.set(fe),T.set(Ce),z.set(Qe),L.getAttribute("position").needsUpdate=!0,L.getAttribute("lineUV").needsUpdate=!0,L.getAttribute("segPhase").needsUpdate=!0,L.setDrawRange(0,fe.length/3)},G=()=>{for(let oe=0;oe<L.drawRange.count;oe++)z[oe]=Math.random();L.getAttribute("segPhase").needsUpdate=!0};U();const te=new VR;let me=0,Te=0,D=0,k=E/w;const Q=()=>{const oe=a.clientWidth||window.innerWidth,fe=a.clientHeight||window.innerHeight,Ce=oe/fe;c.setSize(oe,fe,!1),h.aspect=Ce,h.updateProjectionMatrix(),Math.abs(Ce-k)/k>=.08&&(xb(y,Ce),P.getAttribute("position").needsUpdate=!0,k=Ce)},Me=()=>{window.cancelAnimationFrame(D),D=window.requestAnimationFrame(Q)};Q(),window.addEventListener("resize",Me);let Ae=0;const K=oe=>{if(document.hidden||a.dataset.paused==="true"){me=requestAnimationFrame(K);return}const fe=te.getElapsedTime();fe-Ae>=1/30&&(Ae=fe,g.uniforms.uTime.value=fe,q.uniforms.uTime.value=fe,F.uniforms.uTime.value=fe,e==="alive"&&(Te+=1/30,Te>3.2&&(Te=0,G())),c.render(f,h)),me=requestAnimationFrame(K)};return me=requestAnimationFrame(K),()=>{cancelAnimationFrame(me),cancelAnimationFrame(D),window.removeEventListener("resize",Me),v.dispose(),L.dispose(),P.dispose(),g.dispose(),q.dispose(),F.dispose(),c.dispose()}}function tU({mode:a,paused:e=!1,transparent:n=!1,threadAlpha:r,className:l="spell-bg"}){const c=ke.useRef(null);return ke.useEffect(()=>{const f=c.current;f&&(f.dataset.paused=String(e))},[e]),ke.useEffect(()=>{const f=c.current;return f?eU(f,a,{transparent:n,threadAlpha:r}):void 0},[a,n,r]),A.jsx("canvas",{"aria-hidden":"true",className:l,ref:c})}function hm({className:a,compact:e=!1}){const n=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",a].filter(Boolean).join(" ");return A.jsx(zn,{"aria-hidden":"true",className:n,icon:b2})}const nU=["Today","Yesterday","Others"],yy=[{description:"Today, yesterday, and older threads",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],iU=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function aU(a,e){if(e==="flat")return[{label:null,threads:a}];if(e==="date")return nU.map(r=>({label:r,threads:a.filter(l=>l.dateGroup===r)}));const n=new Map;for(const r of a){const l=r.volume==null?"Volume unknown":`Vol ${r.volume}`,c=n.get(l)??[];n.set(l,[...c,r])}return[...n.entries()].map(([r,l])=>({label:r,threads:l}))}function rU({activeThreadId:a,archivedOpen:e,collapsed:n,drawerOpen:r,onArchive:l,onClose:c,onCreate:f,onDelete:h,onOpen:m,onOpenSettings:p,onPin:_,onRename:v,onSelect:g,onSetArchivedOpen:S,readerStatus:E,threads:w}){const[b,y]=ke.useState(null),[P,F]=ke.useState(""),[N,O]=ke.useState(null),[L,B]=ke.useState("date"),[T,z]=ke.useState(!1),[q,V]=ke.useState(()=>new Set(["Yesterday","Others"])),Z=ke.useMemo(()=>w.filter(D=>D.archived===e).sort((D,k)=>Number(k.pinned)-Number(D.pinned)),[e,w]),he=aU(Z,L),pe=w.filter(D=>D.archived).length,J=r||!n;function U(D){y(D.id),F(D.title)}function G(D){const k=P.trim();k&&v(D,k),y(null)}function te(D){if(N===D){h(D),O(null);return}O(D),window.setTimeout(()=>{O(k=>k===D?null:k)},3e3)}function me(D){V(k=>{const Q=new Set(k);return Q.has(D)?Q.delete(D):Q.add(D),Q})}function Te(D){const k=D.id===a;return A.jsxs("li",{className:`lab-thread-row ${k?"active":""}`,"data-testid":`thread-${D.id}`,children:[A.jsxs("div",{className:"lab-thread-main",children:[b===D.id?A.jsx("span",{className:"lab-thread-copy",children:A.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>G(D.id),onChange:Q=>F(Q.target.value),onClick:Q=>Q.stopPropagation(),onKeyDown:Q=>{Q.key==="Enter"&&(Q.preventDefault(),G(D.id)),Q.key==="Escape"&&y(null)},value:P})}):A.jsx("button",{"aria-current":k?"page":void 0,className:"lab-thread-select",onClick:()=>g(D.id),type:"button",children:A.jsx("span",{className:"lab-thread-copy",children:A.jsx("strong",{children:D.title})})}),N===D.id&&A.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),A.jsxs("div",{className:"lab-thread-actions",children:[A.jsx("button",{"aria-label":`${D.pinned?"Unpin":"Pin"} ${D.title}`,onClick:()=>_(D.id),type:"button",children:A.jsx(c3,{})}),A.jsx("button",{"aria-label":`Rename ${D.title}`,onClick:()=>U(D),type:"button",children:A.jsx(l3,{})}),A.jsx("button",{"aria-label":`${D.archived?"Restore":"Archive"} ${D.title}`,onClick:()=>l(D.id),type:"button",children:A.jsx(px,{})}),A.jsx("button",{"aria-label":`Delete ${D.title}`,className:N===D.id?"confirming":"",onClick:()=>te(D.id),type:"button",children:A.jsx(s3,{})})]})]},D.id)}return A.jsxs("aside",{className:"lab-rail",children:[A.jsxs("header",{className:"lab-brand",children:[A.jsx("span",{className:"lab-brand-mark",children:A.jsx(hm,{compact:!0})}),A.jsx("span",{children:A.jsx("strong",{children:"weaver"})}),A.jsx("button",{"aria-label":J?"Close threads":"Open threads",className:"lab-rail-close",onClick:J?c:m,type:"button",children:J?A.jsx(r3,{}):A.jsx(OS,{})})]}),A.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:f,type:"button",children:[A.jsx(t3,{}),A.jsx("span",{children:"New Weave"})]}),A.jsxs("div",{className:"lab-rail-scroll",children:[A.jsxs("section",{className:"lab-chat-section",children:[A.jsxs("header",{className:"lab-rail-section-head",children:[A.jsx("h2",{children:"Chats"}),A.jsxs("div",{className:"lab-grouping-picker",children:[A.jsxs("button",{"aria-expanded":T,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>z(D=>!D),type:"button",children:[yy.find(D=>D.value===L)?.label,A.jsx(Sp,{})]}),T&&A.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[A.jsx("p",{children:"Organize threads"}),yy.map(D=>A.jsxs("button",{"aria-checked":L===D.value,onClick:()=>{B(D.value),z(!1)},role:"menuitemradio",type:"button",children:[A.jsx("span",{"aria-hidden":"true",children:L===D.value?"✓":""}),A.jsx("strong",{children:D.label}),A.jsx("small",{children:D.description})]},D.value))]})]})]}),A.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[he.map(D=>{const k=D.label,Q=k?q.has(k):!1;return A.jsxs("section",{className:"lab-thread-group",children:[k&&A.jsxs("button",{"aria-expanded":!Q,className:"lab-thread-group-toggle",onClick:()=>me(k),type:"button",children:[A.jsx("span",{children:k}),A.jsx("small",{children:D.threads.length}),A.jsx(Sp,{})]}),A.jsx("div",{"aria-hidden":Q,className:`lab-thread-group-body ${Q?"collapsed":""}`,children:A.jsx("div",{children:A.jsx("ul",{className:"lab-thread-flat-list",children:D.threads.map(Te)})})})]},k??"all")}),Z.length===0&&A.jsxs("div",{className:"lab-thread-empty",children:[A.jsx("span",{"aria-hidden":"true"}),A.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),A.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[A.jsxs("header",{className:"lab-rail-section-head",children:[A.jsx("h2",{children:"Library"}),A.jsx("small",{children:"novels"})]}),A.jsx("div",{className:"lab-novel-list",children:iU.map(D=>A.jsxs("button",{"aria-current":D.active?"page":void 0,"aria-disabled":!D.active,className:D.active?"active":"upcoming",type:"button",children:[A.jsx(a3,{}),A.jsxs("span",{children:[A.jsx("strong",{children:D.label}),A.jsx("small",{children:D.active?"current shelf":"upcoming"})]})]},D.label))})]})]}),A.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>S(!e),type:"button",children:[A.jsx(px,{}),A.jsx("span",{children:"Archived"}),A.jsx("em",{children:pe})]}),A.jsx("footer",{className:"lab-rail-footer",children:A.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:p,type:"button",children:[A.jsx(PS,{}),A.jsxs("span",{children:[A.jsx("strong",{children:"Settings"}),A.jsxs("small",{children:[E," · runes · appearance"]})]})]})})]})}const sU=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],oU=Array.from({length:20},(a,e)=>e);function lU(a){return{"--index":a}}function cU({announcement:a,eventKey:e,mode:n}){return A.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${n}`,children:[n==="particles"&&A.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:oU.map(r=>A.jsx("span",{style:lU(r)},r))}),n==="threads"&&A.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[A.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),A.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),A.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),A.jsx("p",{className:"rune-announcement",children:a})]},`${n}-${e}`)}const uU=Array.from({length:7},(a,e)=>e),fU=Array.from({length:8},(a,e)=>e),dU=Array.from({length:11},(a,e)=>e),Ku={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function ip(a){return{"--index":a}}function yb({compact:a=!1,mode:e,state:n}){return A.jsxs("div",{"aria-label":`${Ku[e]}, ${n}`,className:`lab-soul-sea soul-${e} soul-state-${n} ${a?"soul-compact":""}`,role:"img",children:[A.jsxs("div",{className:"lab-soul-sky",children:[A.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]}),A.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:uU.map(r=>A.jsx("span",{className:"lab-soul-sun",style:ip(r)},r))}),A.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:fU.map(r=>A.jsx("span",{className:"lab-memory-light",style:ip(r)},r))})]}),A.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:dU.map(r=>A.jsx("span",{className:"lab-shadow",style:ip(r)},r))}),A.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[A.jsx("span",{className:"water-plane water-plane-back"}),A.jsx("span",{className:"water-plane water-plane-middle"}),A.jsx("span",{className:"water-plane water-plane-front"}),A.jsx("span",{className:"water-flash"})]}),!a&&A.jsxs("p",{className:"lab-soul-caption",children:[A.jsx("span",{children:Ku[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const ap=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12}],hU={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},pU=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],mU=["still","living","mirror"],gU=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function vU({initial:a,onClose:e,onSave:n}){const[r,l]=ke.useState(a),[c,f]=ke.useState("customize"),h=ke.useRef(null),m=ke.useRef(null);ke.useEffect(()=>{h.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function p(g){if(g.key!=="Tab"||!h.current)return;const S=h.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),E=S[0],w=S[S.length-1];g.shiftKey&&document.activeElement===E&&(g.preventDefault(),w?.focus()),!g.shiftKey&&document.activeElement===w&&(g.preventDefault(),E?.focus())}function _(g,S){l(E=>({...E,[g]:S}))}function v(g){const S=ap.find(b=>b.number===g);if(!S)return;const E=ap[g-2]?.end??0,w=Math.max(E+1,Math.min(r.chapter,S.end));l(b=>({...b,chapter:w,volume:g}))}return A.jsx("div",{className:"lab-settings-backdrop",onMouseDown:e,children:A.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:p,onMouseDown:g=>g.stopPropagation(),ref:h,role:"dialog",children:[A.jsxs("header",{className:"lab-settings-head",children:[A.jsxs("div",{children:[A.jsx("p",{children:"the sea within"}),A.jsx("h2",{children:"Soul Sea"})]}),A.jsx("button",{"aria-label":"Close settings",onClick:e,type:"button",children:"×"})]}),A.jsxs("div",{className:"lab-settings-layout",children:[A.jsxs("aside",{className:"lab-settings-nav",children:[A.jsx("p",{children:"Settings"}),A.jsx("nav",{"aria-label":"Settings sections",children:pU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-current":c===g.id?"page":void 0,className:c===g.id?"on":"",onClick:()=>f(g.id),type:"button",children:[A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.hint})]},g.id))})]}),A.jsxs("div",{className:"lab-settings-main",children:[A.jsx(yb,{compact:!0,mode:r.soulMode,state:"idle"}),A.jsxs("div",{className:"lab-settings-content",children:[c==="reader"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Reader position"}),A.jsx("span",{children:"The Spell will not read beyond this point."})]}),A.jsxs("div",{className:"lab-reader-grid",children:[A.jsxs("label",{children:[A.jsx("span",{children:"Volume"}),A.jsx("select",{"aria-label":"Reader volume",onChange:g=>v(Number(g.target.value)),ref:m,value:r.volume,children:ap.map(g=>A.jsxs("option",{value:g.number,children:["Vol ",g.number," · to ch ",g.end]},g.number))})]}),A.jsxs("label",{children:[A.jsx("span",{children:"Chapter"}),A.jsx("input",{max:3127,min:1,onChange:g=>_("chapter",Number(g.target.value)),type:"number",value:r.chapter})]})]})]}),c==="spoilers"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Spoilers"}),A.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),A.jsxs("div",{className:"lab-choice-grid two",children:[A.jsxs("button",{"aria-pressed":r.spoilerMode==="protect",className:r.spoilerMode==="protect"?"on":"",onClick:()=>_("spoilerMode","protect"),type:"button",children:[A.jsx("strong",{children:"Protect the story"}),A.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),A.jsxs("button",{"aria-pressed":r.spoilerMode==="none",className:r.spoilerMode==="none"?"on":"",onClick:()=>_("spoilerMode","none"),type:"button",children:[A.jsx("strong",{children:"No spoiler limits"}),A.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),c==="reading"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Reading tier"}),A.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),A.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(g=>A.jsxs("button",{"aria-pressed":r.tier===g,className:r.tier===g?"on":"",onClick:()=>_("tier",g),type:"button",children:[A.jsx("strong",{children:g}),A.jsx("span",{children:hU[g]})]},g))})]}),c==="customize"&&A.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Customize the Spell"}),A.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Surface theme"}),A.jsx("div",{className:"lab-theme-grid",children:gU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-pressed":r.theme===g.value,className:r.theme===g.value?"on":"",onClick:()=>_("theme",g.value),type:"button",children:[A.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:g.swatches.map(S=>A.jsx("i",{style:{background:S}},S))}),A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.description})]},g.value))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Rune appearance"}),A.jsx("div",{className:"lab-choice-grid three",children:sU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-pressed":r.runeMode===g.mode,className:r.runeMode===g.mode?"on":"",onClick:()=>_("runeMode",g.mode),type:"button",children:[A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.description})]},g.mode))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Soul Sea"}),A.jsx("div",{className:"lab-choice-grid three",children:mU.map(g=>A.jsxs("button",{"aria-label":Ku[g],"aria-pressed":r.soulMode===g,className:r.soulMode===g?"on":"",onClick:()=>_("soulMode",g),type:"button",children:[A.jsx("strong",{children:Ku[g]}),A.jsx("span",{children:g==="still"?"A calm horizon behind the conversation.":g==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},g))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Message transparency"}),A.jsxs("div",{className:"lab-choice-grid two",children:[A.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":r.glass==="subtle",className:r.glass==="subtle"?"on":"",onClick:()=>_("glass","subtle"),type:"button",children:[A.jsx("strong",{children:"Subtle glass"}),A.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),A.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":r.glass==="immersive",className:r.glass==="immersive"?"on":"",onClick:()=>_("glass","immersive"),type:"button",children:[A.jsx("strong",{children:"Immersive · no surface"}),A.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Star web"}),A.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(g=>A.jsx("button",{"aria-pressed":r.starIntensity===g,className:r.starIntensity===g?"on":"",onClick:()=>_("starIntensity",g),type:"button",children:g},g))})]}),A.jsxs("div",{className:"lab-customize-row",children:[A.jsxs("div",{children:[A.jsx("h4",{children:"Reading density"}),A.jsxs("div",{className:"lab-segmented-control",children:[A.jsx("button",{"aria-label":"Compact text","aria-pressed":r.density==="compact",className:r.density==="compact"?"on":"",onClick:()=>_("density","compact"),type:"button",children:"compact"}),A.jsx("button",{"aria-label":"Comfortable text","aria-pressed":r.density==="comfortable",className:r.density==="comfortable"?"on":"",onClick:()=>_("density","comfortable"),type:"button",children:"comfortable"})]})]}),A.jsxs("div",{children:[A.jsx("h4",{children:"Font size"}),A.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(g=>A.jsx("button",{"aria-pressed":r.fontSize===g,className:r.fontSize===g?"on":"",onClick:()=>_("fontSize",g),type:"button",children:g},g))})]})]})]}),c==="privacy"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Keyboard & privacy"}),A.jsx("span",{children:"Quick controls and where your reading data stays."})]}),A.jsxs("dl",{className:"lab-shortcuts",children:[A.jsxs("div",{children:[A.jsxs("dt",{children:[A.jsx("kbd",{children:"Ctrl"}),A.jsx("kbd",{children:","})]}),A.jsx("dd",{children:"open settings"})]}),A.jsxs("div",{children:[A.jsx("dt",{children:A.jsx("kbd",{children:"Esc"})}),A.jsx("dd",{children:"close this panel"})]}),A.jsxs("div",{children:[A.jsx("dt",{children:A.jsx("kbd",{children:"Enter"})}),A.jsx("dd",{children:"send a message"})]})]}),A.jsxs("aside",{className:"lab-privacy-note",children:[A.jsx("span",{"aria-hidden":"true",children:"◎"}),A.jsxs("div",{children:[A.jsx("strong",{children:"Everything stays on this machine."}),A.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]})]})]})]}),A.jsxs("footer",{className:"lab-settings-actions",children:[A.jsx("button",{onClick:e,type:"button",children:"Leave unchanged"}),A.jsx("button",{className:"primary",onClick:()=>n(r),type:"button",children:"Apply settings"})]})]})})}const Ji={chapter:1e3,density:"comfortable",fontSize:"small",glass:"immersive",runeMode:"particles",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"void",tier:"ascended",volume:5},Sb="weaver.spell-surface";function Qr(a,e,n){return typeof a=="string"&&e.includes(a)?a:n}function _U(){try{const a=JSON.parse(window.localStorage.getItem(Sb)??"null");return a?{...Ji,density:Qr(a.density,["compact","comfortable"],Ji.density),fontSize:Qr(a.fontSize,["small","medium","large"],Ji.fontSize),glass:Qr(a.glass,["subtle","immersive"],Ji.glass),runeMode:Qr(a.runeMode,["particles","voice","threads"],Ji.runeMode),soulMode:Qr(a.soulMode,["still","living","mirror"],Ji.soulMode),starIntensity:Qr(a.starIntensity,["quiet","balanced","vivid"],Ji.starIntensity),theme:Qr(a.theme,["crimson","cosmos","starlight","void"],Ji.theme)}:Ji}catch{return Ji}}function xU(a){window.localStorage.setItem(Sb,JSON.stringify({density:a.density,fontSize:a.fontSize,glass:a.glass,runeMode:a.runeMode,soulMode:a.soulMode,starIntensity:a.starIntensity,theme:a.theme}))}const Sy=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127];function yU(a){const e=Sy.findIndex(n=>a<=n);return e===-1?Sy.length:e+1}function SU(a){if(!a)return"Others";const e=new Date(a);if(Number.isNaN(e.getTime()))return"Others";const n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),e>=n?"Today":e>=r?"Yesterday":"Others"}function by(a){return{reader_chapter:a.chapter,spoiler_mode:a.spoilerMode,tier:a.tier}}function bU({api:a,privacyLabel:e}){const n=x2(a,Ai),[r,l]=ke.useState(_U),[c,f]=ke.useState(!1),[h,m]=ke.useState(!1),[p,_]=ke.useState(!1),[v,g]=ke.useState(!1),[S,E]=ke.useState(new Set),[w,b]=ke.useState(new Set),[y,P]=ke.useState(new Map),[F,N]=ke.useState(null),[O,L]=ke.useState("idle"),[B,T]=ke.useState("[The Spell listens.]"),[z,q]=ke.useState(0),[V,Z]=ke.useState(0),he=ke.useRef(null),pe=ke.useRef(null),J=ke.useRef(!1),U=ke.useRef(null),G=ke.useMemo(()=>n.conversations.map(ye=>({archived:S.has(ye.conversation_id),dateGroup:SU(ye.created_at),id:ye.conversation_id,pinned:w.has(ye.conversation_id),preview:"private reading thread",title:y.get(ye.conversation_id)??ye.title,volume:null})),[S,n.conversations,w,y]);ke.useEffect(()=>{function ye($e){$e.ctrlKey&&$e.key===","&&($e.preventDefault(),me()),$e.key==="Escape"&&(f(!1),m(!1))}return window.addEventListener("keydown",ye),()=>window.removeEventListener("keydown",ye)}),ke.useEffect(()=>{const ye=pe.current;ye&&(ye.scrollTop=ye.scrollHeight)},[n.activity,n.messages,n.recoveryMessage]),ke.useEffect(()=>{if(n.turnActive){J.current=!0,L(n.activity.length>0?"weaving":"rippling");return}J.current&&(J.current=!1,L("complete"),te("[The weave is complete.]"),U.current&&window.clearTimeout(U.current),U.current=window.setTimeout(()=>L("idle"),900))},[n.activity.length,n.turnActive]),ke.useEffect(()=>{const ye=n.activity.at(-1);ye&&te(MU(ye))},[n.activity]),ke.useEffect(()=>()=>{U.current&&window.clearTimeout(U.current)},[]);function te(ye){T(ye),q($e=>$e+1),Z($e=>$e+1)}async function me(){try{const ye=await a.getPreferences(),$e=ye.reader_chapter??r.chapter;l(lt=>({...lt,chapter:$e,spoilerMode:ye.spoiler_mode,tier:ye.tier,volume:yU($e)}))}finally{f(!0),te("[The sea within opens.]")}}function Te(){if(window.innerWidth<768){m(!0);return}_(!1)}function D(){if(window.innerWidth<768){m(!1);return}_(!0)}async function k(){await n.createConversation()&&(m(!1),te("[An empty thread waits in the void.]"),window.setTimeout(()=>he.current?.focus(),0))}async function Q(ye){await n.selectConversation(ye),m(!1),te("[The thread is recalled.]")}function Me(ye,$e){P(lt=>new Map(lt).set(ye,$e)),te("[The thread accepts a new name.]")}function Ae(ye,$e){ye(lt=>{const ft=new Set(lt);return ft.has($e)?ft.delete($e):ft.add($e),ft})}function K(ye){L("rippling"),te("[The Spell is weaving an answer.]"),n.sendMessage(ye)}function oe(){L("weaving"),te("[The Spell takes up the thread once more.]"),n.regenerateReply()}const fe=`Vol ${r.volume} · ch ${r.chapter} · ${r.tier}`,Ce=r.starIntensity==="quiet"?.2:r.starIntensity==="vivid"?.56:.36,Qe=n.activity.at(-1)??null;return A.jsxs("div",{className:["spell-surface-lab","spell-surface-live",h?"lab-rail-open":"",p?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":r.density,"data-font-size":r.fontSize,"data-glass":r.glass,"data-runes":r.runeMode,"data-soul":r.soulMode,"data-star-intensity":r.starIntensity,"data-theme":r.theme,"data-testid":"spell-surface-live",children:[A.jsx(tU,{className:"lab-spell-background",mode:"alive",paused:c,threadAlpha:Ce}),A.jsx("div",{"aria-hidden":"true",className:"lab-galactic-band"}),A.jsx("div",{"aria-hidden":"true",className:"lab-purple-depth"}),A.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-one"}),A.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-two"}),A.jsxs("div",{"aria-hidden":"true",className:"lab-core-wake",children:[A.jsx("span",{}),A.jsx("span",{})]},V),A.jsx(yb,{mode:r.soulMode,state:O}),A.jsx(rU,{activeThreadId:n.conversationId??"",archivedOpen:v,collapsed:p,drawerOpen:h,onArchive:ye=>Ae(E,ye),onClose:D,onCreate:()=>{k()},onDelete:ye=>{n.deleteConversation(ye)},onOpen:Te,onOpenSettings:()=>{me()},onPin:ye=>Ae(b,ye),onRename:Me,onSelect:ye=>{Q(ye)},onSetArchivedOpen:g,readerStatus:fe,threads:G}),A.jsxs("main",{className:"lab-chat-main",children:[A.jsxs("div",{className:"lab-chat-controls",children:[A.jsx("button",{"aria-label":"Open threads",className:"lab-mobile-rail",onClick:Te,type:"button",children:A.jsx(OS,{})}),A.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{me()},type:"button",children:A.jsx(PS,{})})]}),A.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:pe,children:A.jsxs("div",{className:"lab-transcript-column",children:[n.bootError&&A.jsx("div",{className:"boot-error",children:n.bootError}),!n.bootError&&n.messages.length===0&&A.jsxs("section",{className:"lab-empty-weave",children:[A.jsx("span",{className:"lab-empty-mark",children:A.jsx(hm,{})}),A.jsx("p",{children:"[An empty thread trembles in the void.]"}),A.jsx("h1",{children:"What are we reading?"}),A.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),n.messages.map(ye=>A.jsx(x3,{Mark:hm,activity:ye.streaming?Qe:null,assistantName:Ai.assistantName,message:ye,onQuote:$e=>{n.setDraft(`"${$e}" `),he.current?.focus()},onRegenerate:ye.id===n.lastReplyId&&n.turnState==="idle"?oe:void 0,onViewPassage:N,regenerateLabel:Ai.regenerateLabel},ye.id)),n.recoveryMessage&&A.jsx(S3,{chooseLabel:Ai.recoveryChooseLabel,createLabel:Ai.recoveryCreateLabel,message:n.recoveryMessage,onChooseConversation:Te,onCreateConversation:()=>{k()},onRetry:()=>{n.retryLastTurn()},retryLabel:Ai.recoveryRetryLabel,title:Ai.recoveryTitle})]})}),A.jsx(cU,{announcement:B,eventKey:z,mode:r.runeMode}),A.jsxs("footer",{className:"lab-composer-dock",children:[A.jsx(f3,{cancelling:n.turnState==="cancelling",draft:n.draft,inputLabel:Ai.inputLabel,onCancel:()=>{n.cancelTurn()},onDraftChange:n.setDraft,onSubmit:K,onTierChange:ye=>{const $e={...r,tier:ye};l($e),a.savePreferences(by($e))},placeholder:Ai.composerPlaceholder,sendLabel:Ai.sendLabel,stopLabel:Ai.stopLabel,stoppingLabel:Ai.stoppingLabel,textareaRef:he,tier:r.tier,turnActive:n.turnActive}),A.jsxs("p",{children:[A.jsx("span",{})," ",e]})]})]}),h&&A.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:()=>m(!1),type:"button"}),c&&A.jsx(vU,{initial:r,onClose:()=>f(!1),onSave:ye=>{l(ye),xU(ye),f(!1),te("[Your soul answers the change.]"),a.savePreferences(by(ye))}}),F&&A.jsx(y3,{handle:F,loadPassage:n.loadPassage,onClose:()=>N(null)})]})}function MU(a){return`[The Spell is ${a.status==="start"?a.detail||a.name:"done"}.]`}async function $r(a,e){if(!a.ok)throw new Error(`${e} failed (${a.status})`);return await a.json()}function EU(a){const e=typeof a.data.text=="string"?a.data.text:"",n=typeof a.data.message=="string"?a.data.message:"";if(a.event==="delta")return{type:"delta",text:e};if(a.event==="completed")return{type:"completed",text:e,tokenCount:typeof a.data.token_count=="number"?a.data.token_count:void 0,tokenBudget:typeof a.data.token_budget=="number"?a.data.token_budget:void 0};if(a.event==="interrupted")return{type:"interrupted",message:n||"The turn was interrupted."};if(a.event==="failed")return{type:"failed",message:n||"The reply failed.",code:typeof a.data.code=="string"?a.data.code:void 0};if(a.event==="tool"){const r=Array.isArray(a.data.handles)?a.data.handles.filter(l=>typeof l=="string"):void 0;return{type:"tool",name:typeof a.data.name=="string"?a.data.name:"tool",status:typeof a.data.status=="string"?a.data.status:"start",detail:typeof a.data.detail=="string"?a.data.detail:"",preview:typeof a.data.preview=="string"?a.data.preview:void 0,handles:r&&r.length>0?r:void 0}}return null}async function*TU(a){const e=[];let n=[],r=null,l=0;const c=["delta","tool","completed","interrupted","failed"];for(const f of c)a.addEventListener(f,h=>{try{const m=EU({event:f,data:JSON.parse(h.data)});m&&(e.push(m),n.splice(0).forEach(p=>p()))}catch{}});a.onerror=()=>{l+=1,(a.readyState===EventSource.CLOSED||l>4)&&(r=new Error("The reply stream was interrupted."),n.splice(0).forEach(f=>f()))};try{for(;;)if(e.length>0)yield e.shift();else{if(r)throw r;await new Promise(f=>n.push(f))}}finally{a.close()}}async function*rp(a){const e=new EventSource(`/api/conversations/${encodeURIComponent(a)}/stream`);let n=!1;for await(const r of TU(e))if(yield r,r.type==="completed"||r.type==="interrupted"||r.type==="failed"){n=!0;break}if(!n)throw new Error("The reply stream closed without finishing.")}function AU(a=fetch){return{async getPreferences(){const e=await a("/api/preferences");return $r(e,"Loading preferences")},async deleteConversation(e){const n=await a(`/api/conversations/${e}`,{method:"DELETE"});return $r(n,"Deleting conversation")},async getPassage(e){const n=await a(`/api/passages?handle=${encodeURIComponent(e)}`);return $r(n,"Loading passage")},async savePreferences(e){const n=await a("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return $r(n,"Saving preferences")},async listConversations(){const e=await a("/api/conversations");return $r(e,"Loading conversations")},async createConversation(){const e=await a("/api/conversations",{method:"POST"});return $r(e,"Creating a conversation")},async loadMessages(e){const n=await a(`/api/conversations/${encodeURIComponent(e)}/messages`);return $r(n,"Loading the conversation")},async*streamTurn(e,n){const r=await a(`/api/conversations/${encodeURIComponent(e)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n})});if(!r.ok)throw new Error(`Sending the message failed (${r.status})`);yield*rp(e)},async*retryTurn(e){const n=await a(`/api/conversations/${encodeURIComponent(e)}/retry`,{method:"POST"});if(!n.ok)throw new Error(`Retrying failed (${n.status})`);yield*rp(e)},async*regenerateTurn(e){const n=await a(`/api/conversations/${encodeURIComponent(e)}/regenerate`,{method:"POST"});if(!n.ok)throw new Error(`Regenerating failed (${n.status})`);yield*rp(e)},async cancelTurn(e){const n=await a(`/api/conversations/${encodeURIComponent(e)}/cancel`,{method:"POST"});if(n.status===202)return"cancelling";if(n.status===200)return"idle";throw new Error(`Stopping the reply failed (${n.status})`)}}}const RU=ke.lazy(()=>RM(()=>import("./ThemeLab-BCoQBgbR.js"),[]).then(a=>({default:a.ThemeLab})));ls.autoAddCss=!1;function CU(a){return document.querySelector(`meta[name="${a}"]`)?.content??""}const bb=document.getElementById("root");if(!bb)throw new Error("Weaver root element is missing.");const wU=window.location.hash==="#theme-lab";v2.createRoot(bb).render(wU?A.jsx(ke.Suspense,{fallback:A.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:A.jsx(RU,{})}):A.jsx(bU,{api:AU(),privacyLabel:CU("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{e3 as A,hx as C,OS as R,tU as S,hm as W,yb as a,rU as b,PS as c,n3 as d,cU as e,vU as f,A as j,ke as r};

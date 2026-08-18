(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const BM="modulepreload",HM=function(a){return"/"+a},D_={},GM=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");o=m(n.map(p=>{if(p=HM(p),p in D_)return;D_[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":BM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,T)=>{g.addEventListener("load",S),g.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function VM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var hh={exports:{}},pl={};var N_;function kM(){if(N_)return pl;N_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return pl.Fragment=e,pl.jsx=n,pl.jsxs=n,pl}var L_;function XM(){return L_||(L_=1,hh.exports=kM()),hh.exports}var E=XM(),ph={exports:{}},dt={};var U_;function WM(){if(U_)return dt;U_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,b={};function x(O,Z,te){this.props=O,this.context=Z,this.refs=b,this.updater=te||T}x.prototype.isReactComponent={},x.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=x.prototype;function F(O,Z,te){this.props=O,this.context=Z,this.refs=b,this.updater=te||T}var R=F.prototype=new P;R.constructor=F,D(R,x.prototype),R.isPureReactComponent=!0;var U=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function z(O,Z,te){var Q=te.ref;return{$$typeof:a,type:O,key:Z,ref:Q!==void 0?Q:null,props:te}}function j(O,Z){return z(O.type,Z,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function q(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(te){return Z[te]})}var pe=/\/+/g;function me(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?q(""+O.key):Z.toString(36)}function $(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,Z,te,Q,ve){var k=typeof O;(k==="undefined"||k==="boolean")&&(O=null);var se=!1;if(O===null)se=!0;else switch(k){case"bigint":case"string":case"number":se=!0;break;case"object":switch(O.$$typeof){case a:case e:se=!0;break;case _:return se=O._init,L(se(O._payload),Z,te,Q,ve)}}if(se)return ve=ve(O),se=Q===""?"."+me(O,0):Q,U(ve)?(te="",se!=null&&(te=se.replace(pe,"$&/")+"/"),L(ve,Z,te,"",function(Je){return Je})):ve!=null&&(V(ve)&&(ve=j(ve,te+(ve.key==null||O&&O.key===ve.key?"":(""+ve.key).replace(pe,"$&/")+"/")+se)),Z.push(ve)),1;se=0;var de=Q===""?".":Q+":";if(U(O))for(var Ce=0;Ce<O.length;Ce++)Q=O[Ce],k=de+me(Q,Ce),se+=L(Q,Z,te,k,ve);else if(Ce=S(O),typeof Ce=="function")for(O=Ce.call(O),Ce=0;!(Q=O.next()).done;)Q=Q.value,k=de+me(Q,Ce++),se+=L(Q,Z,te,k,ve);else if(k==="object"){if(typeof O.then=="function")return L($(O),Z,te,Q,ve);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return se}function G(O,Z,te){if(O==null)return O;var Q=[],ve=0;return L(O,Q,"","",function(k){return Z.call(te,k,ve++)}),Q}function ne(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(te){(O._status===0||O._status===-1)&&(O._status=1,O._result=te)},function(te){(O._status===0||O._status===-1)&&(O._status=2,O._result=te)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var ge=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Ee={map:G,forEach:function(O,Z,te){G(O,function(){Z.apply(this,arguments)},te)},count:function(O){var Z=0;return G(O,function(){Z++}),Z},toArray:function(O){return G(O,function(Z){return Z})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return dt.Activity=v,dt.Children=Ee,dt.Component=x,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=F,dt.StrictMode=r,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,dt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},dt.cache=function(O){return function(){return O.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(O,Z,te){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Q=D({},O.props),ve=O.key;if(Z!=null)for(k in Z.key!==void 0&&(ve=""+Z.key),Z)!A.call(Z,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&Z.ref===void 0||(Q[k]=Z[k]);var k=arguments.length-2;if(k===1)Q.children=te;else if(1<k){for(var se=Array(k),de=0;de<k;de++)se[de]=arguments[de+2];Q.children=se}return z(O.type,ve,Q)},dt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},dt.createElement=function(O,Z,te){var Q,ve={},k=null;if(Z!=null)for(Q in Z.key!==void 0&&(k=""+Z.key),Z)A.call(Z,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ve[Q]=Z[Q]);var se=arguments.length-2;if(se===1)ve.children=te;else if(1<se){for(var de=Array(se),Ce=0;Ce<se;Ce++)de[Ce]=arguments[Ce+2];ve.children=de}if(O&&O.defaultProps)for(Q in se=O.defaultProps,se)ve[Q]===void 0&&(ve[Q]=se[Q]);return z(O,k,ve)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:h,render:O}},dt.isValidElement=V,dt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:ne}},dt.memo=function(O,Z){return{$$typeof:p,type:O,compare:Z===void 0?null:Z}},dt.startTransition=function(O){var Z=B.T,te={};B.T=te;try{var Q=O(),ve=B.S;ve!==null&&ve(te,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(N,ge)}catch(k){ge(k)}finally{Z!==null&&te.types!==null&&(Z.types=te.types),B.T=Z}},dt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},dt.use=function(O){return B.H.use(O)},dt.useActionState=function(O,Z,te){return B.H.useActionState(O,Z,te)},dt.useCallback=function(O,Z){return B.H.useCallback(O,Z)},dt.useContext=function(O){return B.H.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O,Z){return B.H.useDeferredValue(O,Z)},dt.useEffect=function(O,Z){return B.H.useEffect(O,Z)},dt.useEffectEvent=function(O){return B.H.useEffectEvent(O)},dt.useId=function(){return B.H.useId()},dt.useImperativeHandle=function(O,Z,te){return B.H.useImperativeHandle(O,Z,te)},dt.useInsertionEffect=function(O,Z){return B.H.useInsertionEffect(O,Z)},dt.useLayoutEffect=function(O,Z){return B.H.useLayoutEffect(O,Z)},dt.useMemo=function(O,Z){return B.H.useMemo(O,Z)},dt.useOptimistic=function(O,Z){return B.H.useOptimistic(O,Z)},dt.useReducer=function(O,Z,te){return B.H.useReducer(O,Z,te)},dt.useRef=function(O){return B.H.useRef(O)},dt.useState=function(O){return B.H.useState(O)},dt.useSyncExternalStore=function(O,Z,te){return B.H.useSyncExternalStore(O,Z,te)},dt.useTransition=function(){return B.H.useTransition()},dt.version="19.2.8",dt}var O_;function Sm(){return O_||(O_=1,ph.exports=WM()),ph.exports}var Le=Sm();const bm=VM(Le);function cp(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=Array(e);n<e;n++)r[n]=a[n];return r}function jM(a){if(Array.isArray(a))return a}function qM(a){if(Array.isArray(a))return cp(a)}function YM(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function KM(a,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,Uy(r.key),r)}}function ZM(a,e,n){return e&&KM(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function Nu(a,e){var n=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!n){if(Array.isArray(a)||(n=Mm(a))||e){n&&(a=n);var r=0,o=function(){};return{s:o,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(m){throw m},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,u=!0,h=!1;return{s:function(){n=n.call(a)},n:function(){var m=n.next();return u=m.done,m},e:function(m){h=!0,c=m},f:function(){try{u||n.return==null||n.return()}finally{if(h)throw c}}}}function st(a,e,n){return(e=Uy(e))in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function QM(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function JM(a,e){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var r,o,c,u,h=[],m=!0,p=!1;try{if(c=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(r=c.call(n)).done)&&(h.push(r.value),h.length!==e);m=!0);}catch(_){p=!0,o=_}finally{try{if(!m&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(p)throw o}}return h}}function $M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P_(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function we(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P_(Object(n),!0).forEach(function(r){st(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):P_(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function ef(a,e){return jM(a)||JM(a,e)||Mm(a,e)||$M()}function Xi(a){return qM(a)||QM(a)||Mm(a)||eE()}function tE(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Uy(a){var e=tE(a,"string");return typeof e=="symbol"?e:e+""}function Hu(a){"@babel/helpers - typeof";return Hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hu(a)}function Mm(a,e){if(a){if(typeof a=="string")return cp(a,e);var n={}.toString.call(a).slice(8,-1);return n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set"?Array.from(a):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cp(a,e):void 0}}var I_=function(){},Em={},Oy={},Py=null,Iy={mark:I_,measure:I_};try{typeof window<"u"&&(Em=window),typeof document<"u"&&(Oy=document),typeof MutationObserver<"u"&&(Py=MutationObserver),typeof performance<"u"&&(Iy=performance)}catch{}var nE=Em.navigator||{},z_=nE.userAgent,F_=z_===void 0?"":z_,br=Em,tn=Oy,B_=Py,Qc=Iy;br.document;var Ha=!!tn.documentElement&&!!tn.head&&typeof tn.addEventListener=="function"&&typeof tn.createElement=="function",zy=~F_.indexOf("MSIE")||~F_.indexOf("Trident/"),Jc,iE=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,aE=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Fy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},rE={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},By=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",Ul="duotone",Hy="sharp",Gy="sharp-duotone",Vy="chisel",ky="etch",Xy="graphite",Wy="jelly",jy="jelly-duo",qy="jelly-fill",Yy="mosaic",Ky="notdog",Zy="notdog-duo",Qy="pixel",Jy="slab",$y="slab-duo",eS="slab-press",tS="slab-press-duo",nS="thumbprint",iS="utility",aS="utility-duo",rS="utility-fill",sS="vellum",oS="whiteboard",sE="Classic",oE="Duotone",lE="Sharp",cE="Sharp Duotone",uE="Chisel",fE="Etch",dE="Graphite",hE="Jelly",pE="Jelly Duo",mE="Jelly Fill",gE="Mosaic",vE="Notdog",_E="Notdog Duo",xE="Pixel",yE="Slab",SE="Slab Duo",bE="Slab Press",ME="Slab Press Duo",EE="Thumbprint",TE="Utility",AE="Utility Duo",RE="Utility Fill",CE="Vellum",wE="Whiteboard",lS=[In,Ul,Hy,Gy,Vy,ky,Xy,Wy,jy,qy,Yy,Ky,Zy,Qy,Jy,$y,eS,tS,nS,iS,aS,rS,sS,oS];Jc={},st(st(st(st(st(st(st(st(st(st(Jc,In,sE),Ul,oE),Hy,lE),Gy,cE),Vy,uE),ky,fE),Xy,dE),Wy,hE),jy,pE),qy,mE),st(st(st(st(st(st(st(st(st(st(Jc,Yy,gE),Ky,vE),Zy,_E),Qy,xE),Jy,yE),$y,SE),eS,bE),tS,ME),nS,EE),iS,TE),st(st(st(st(Jc,aS,AE),rS,RE),sS,CE),oS,wE);var DE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},NE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},LE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),UE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},cS=["fak","fa-kit","fakd","fa-kit-duotone"],H_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},OE=["kit"],PE="kit",IE="kit-duotone",zE="Kit",FE="Kit Duotone";st(st({},PE,zE),IE,FE);var BE={kit:{"fa-kit":"fak"}},HE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},GE={kit:{fak:"fa-kit"}},G_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$c,eu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},VE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],kE="classic",XE="duotone",WE="sharp",jE="sharp-duotone",qE="chisel",YE="etch",KE="graphite",ZE="jelly",QE="jelly-duo",JE="jelly-fill",$E="mosaic",eT="notdog",tT="notdog-duo",nT="pixel",iT="slab",aT="slab-duo",rT="slab-press",sT="slab-press-duo",oT="thumbprint",lT="utility",cT="utility-duo",uT="utility-fill",fT="vellum",dT="whiteboard",hT="Classic",pT="Duotone",mT="Sharp",gT="Sharp Duotone",vT="Chisel",_T="Etch",xT="Graphite",yT="Jelly",ST="Jelly Duo",bT="Jelly Fill",MT="Mosaic",ET="Notdog",TT="Notdog Duo",AT="Pixel",RT="Slab",CT="Slab Duo",wT="Slab Press",DT="Slab Press Duo",NT="Thumbprint",LT="Utility",UT="Utility Duo",OT="Utility Fill",PT="Vellum",IT="Whiteboard";$c={},st(st(st(st(st(st(st(st(st(st($c,kE,hT),XE,pT),WE,mT),jE,gT),qE,vT),YE,_T),KE,xT),ZE,yT),QE,ST),JE,bT),st(st(st(st(st(st(st(st(st(st($c,$E,MT),eT,ET),tT,TT),nT,AT),iT,RT),aT,CT),rT,wT),sT,DT),oT,NT),lT,LT),st(st(st(st($c,cT,UT),uT,OT),fT,PT),dT,IT);var zT="kit",FT="kit-duotone",BT="Kit",HT="Kit Duotone";st(st({},zT,BT),FT,HT);var GT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},VT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},up={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},kT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],uS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(VE,kT),XT=["solid","regular","light","thin","duotone","brands","semibold"],fS=[1,2,3,4,5,6,7,8,9,10],WT=fS.concat([11,12,13,14,15,16,17,18,19,20]),jT=["aw","fw","pull-left","pull-right"],qT=[].concat(Xi(Object.keys(VT)),XT,jT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",eu.GROUP,eu.SWAP_OPACITY,eu.PRIMARY,eu.SECONDARY]).concat(fS.map(function(a){return"".concat(a,"x")})).concat(WT.map(function(a){return"w-".concat(a)})),YT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Pa="___FONT_AWESOME___",fp=16,dS="fa",hS="svg-inline--fa",ss="data-fa-i2svg",dp="data-fa-pseudo-element",KT="data-fa-pseudo-element-pending",Tm="data-prefix",Am="data-icon",V_="fontawesome-i2svg",ZT="async",QT=["HTML","HEAD","STYLE","SCRIPT"],pS=["::before","::after",":before",":after"],mS=(function(){try{return!0}catch{return!1}})();function Ol(a){return new Proxy(a,{get:function(n,r){return r in n?n[r]:n[In]}})}var gS=we({},Fy);gS[In]=we(we(we(we({},{"fa-duotone":"duotone"}),Fy[In]),H_.kit),H_["kit-duotone"]);var JT=Ol(gS),hp=we({},UE);hp[In]=we(we(we(we({},{duotone:"fad"}),hp[In]),G_.kit),G_["kit-duotone"]);var k_=Ol(hp),pp=we({},up);pp[In]=we(we({},pp[In]),GE.kit);var Rm=Ol(pp),mp=we({},GT);mp[In]=we(we({},mp[In]),BE.kit);Ol(mp);var $T=iE,vS="fa-layers-text",eA=aE,tA=we({},DE);Ol(tA);var nA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mh=rE,iA=[].concat(Xi(OE),Xi(qT)),Rl=br.FontAwesomeConfig||{};function aA(a){var e=tn.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function rA(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(tn&&typeof tn.querySelector=="function"){var sA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sA.forEach(function(a){var e=ef(a,2),n=e[0],r=e[1],o=rA(aA(n));o!=null&&(Rl[r]=o)})}var _S={styleDefault:"solid",familyDefault:In,cssPrefix:dS,replacementClass:hS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rl.familyPrefix&&(Rl.cssPrefix=Rl.familyPrefix);var mo=we(we({},_S),Rl);mo.autoReplaceSvg||(mo.observeMutations=!1);var rt={};Object.keys(_S).forEach(function(a){Object.defineProperty(rt,a,{enumerable:!0,set:function(n){mo[a]=n,Cl.forEach(function(r){return r(rt)})},get:function(){return mo[a]}})});Object.defineProperty(rt,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,Cl.forEach(function(n){return n(rt)})},get:function(){return mo.cssPrefix}});br.FontAwesomeConfig=rt;var Cl=[];function oA(a){return Cl.push(a),function(){Cl.splice(Cl.indexOf(a),1)}}var Ws=fp,ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lA(a){if(!(!a||!Ha)){var e=tn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var n=tn.head.childNodes,r=null,o=n.length-1;o>-1;o--){var c=n[o],u=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(r=c)}return tn.head.insertBefore(e,r),a}}var cA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function X_(){for(var a=12,e="";a-- >0;)e+=cA[Math.random()*62|0];return e}function yo(a){for(var e=[],n=(a||[]).length>>>0;n--;)e[n]=a[n];return e}function Cm(a){return a.classList?yo(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xS(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uA(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(xS(a[n]),'" ')},"").trim()}function tf(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(a[n].trim(),";")},"")}function wm(a){return a.size!==ta.size||a.x!==ta.x||a.y!==ta.y||a.rotate!==ta.rotate||a.flipX||a.flipY}function fA(a){var e=a.transform,n=a.containerWidth,r=a.iconWidth,o={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(u," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:m,path:p}}function dA(a){var e=a.transform,n=a.width,r=n===void 0?fp:n,o=a.height,c=o===void 0?fp:o,u="";return zy?u+="translate(".concat(e.x/Ws-r/2,"em, ").concat(e.y/Ws-c/2,"em) "):u+="translate(calc(-50% + ".concat(e.x/Ws,"em), calc(-50% + ").concat(e.y/Ws,"em)) "),u+="scale(".concat(e.size/Ws*(e.flipX?-1:1),", ").concat(e.size/Ws*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var hA=`:root, :host {
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
}`;function yS(){var a=dS,e=hS,n=rt.cssPrefix,r=rt.replacementClass,o=hA;if(n!==a||r!==e){var c=new RegExp("\\.".concat(a,"\\-"),"g"),u=new RegExp("\\--".concat(a,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");o=o.replace(c,".".concat(n,"-")).replace(u,"--".concat(n,"-")).replace(h,".".concat(r))}return o}var W_=!1;function gh(){rt.autoAddCss&&!W_&&(lA(yS()),W_=!0)}var pA={mixout:function(){return{dom:{css:yS,insertCss:gh}}},hooks:function(){return{beforeDOMElementCreation:function(){gh()},beforeI2svg:function(){gh()}}}},Ia=br||{};Ia[Pa]||(Ia[Pa]={});Ia[Pa].styles||(Ia[Pa].styles={});Ia[Pa].hooks||(Ia[Pa].hooks={});Ia[Pa].shims||(Ia[Pa].shims=[]);var Gi=Ia[Pa],SS=[],bS=function(){tn.removeEventListener("DOMContentLoaded",bS),Gu=1,SS.map(function(e){return e()})},Gu=!1;Ha&&(Gu=(tn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tn.readyState),Gu||tn.addEventListener("DOMContentLoaded",bS));function mA(a){Ha&&(Gu?setTimeout(a,0):SS.push(a))}function Pl(a){var e=a.tag,n=a.attributes,r=n===void 0?{}:n,o=a.children,c=o===void 0?[]:o;return typeof a=="string"?xS(a):"<".concat(e," ").concat(uA(r),">").concat(c.map(Pl).join(""),"</").concat(e,">")}function j_(a,e,n){if(a&&a[e]&&a[e][n])return{prefix:e,iconName:n,icon:a[e][n]}}var vh=function(e,n,r,o){var c=Object.keys(e),u=c.length,h=n,m,p,_;for(r===void 0?(m=1,_=e[c[0]]):(m=0,_=r);m<u;m++)p=c[m],_=h(_,e[p],p,e);return _};function MS(a){return Xi(a).length!==1?null:a.codePointAt(0).toString(16)}function q_(a){return Object.keys(a).reduce(function(e,n){var r=a[n],o=!!r.icon;return o?e[r.iconName]=r.icon:e[n]=r,e},{})}function gp(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,c=q_(e);typeof Gi.hooks.addPack=="function"&&!o?Gi.hooks.addPack(a,q_(e)):Gi.styles[a]=we(we({},Gi.styles[a]||{}),c),a==="fas"&&gp("fa",e)}var Dl=Gi.styles,gA=Gi.shims,ES=Object.keys(Rm),vA=ES.reduce(function(a,e){return a[e]=Object.keys(Rm[e]),a},{}),Dm=null,TS={},AS={},RS={},CS={},wS={};function _A(a){return~iA.indexOf(a)}function xA(a,e){var n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===a&&o!==""&&!_A(o)?o:null}var DS=function(){var e=function(c){return vh(Dl,function(u,h,m){return u[m]=vh(h,c,{}),u},{})};TS=e(function(o,c,u){if(c[3]&&(o[c[3]]=u),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){o[m.toString(16)]=u})}return o}),AS=e(function(o,c,u){if(o[u]=u,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){o[m]=u})}return o}),wS=e(function(o,c,u){var h=c[2];return o[u]=u,h.forEach(function(m){o[m]=u}),o});var n="far"in Dl||rt.autoFetchSvg,r=vh(gA,function(o,c){var u=c[0],h=c[1],m=c[2];return h==="far"&&!n&&(h="fas"),typeof u=="string"&&(o.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(o.unicodes[u.toString(16)]={prefix:h,iconName:m}),o},{names:{},unicodes:{}});RS=r.names,CS=r.unicodes,Dm=nf(rt.styleDefault,{family:rt.familyDefault})};oA(function(a){Dm=nf(a.styleDefault,{family:rt.familyDefault})});DS();function Nm(a,e){return(TS[a]||{})[e]}function yA(a,e){return(AS[a]||{})[e]}function is(a,e){return(wS[a]||{})[e]}function NS(a){return RS[a]||{prefix:null,iconName:null}}function SA(a){var e=CS[a],n=Nm("fas",a);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mr(){return Dm}var LS=function(){return{prefix:null,iconName:null,rest:[]}};function bA(a){var e=In,n=ES.reduce(function(r,o){return r[o]="".concat(rt.cssPrefix,"-").concat(o),r},{});return lS.forEach(function(r){(a.includes(n[r])||a.some(function(o){return vA[r].includes(o)}))&&(e=r)}),e}function nf(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?In:n,o=JT[r][a];if(r===Ul&&!a)return"fad";var c=k_[r][a]||k_[r][o],u=a in Gi.styles?a:null,h=c||u||null;return h}function MA(a){var e=[],n=null;return a.forEach(function(r){var o=xA(rt.cssPrefix,r);o?n=o:r&&e.push(r)}),{iconName:n,rest:e}}function Y_(a){return a.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var K_=uS.concat(cS);function af(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,o=null,c=Y_(a.filter(function(S){return K_.includes(S)})),u=Y_(a.filter(function(S){return!K_.includes(S)})),h=c.filter(function(S){return o=S,!By.includes(S)}),m=ef(h,1),p=m[0],_=p===void 0?null:p,v=bA(c),g=we(we({},MA(u)),{},{prefix:nf(_,{family:v})});return we(we(we({},g),RA({values:a,family:v,styles:Dl,config:rt,canonical:g,givenPrefix:o})),EA(r,o,g))}function EA(a,e,n){var r=n.prefix,o=n.iconName;if(a||!r||!o)return{prefix:r,iconName:o};var c=e==="fa"?NS(o):{},u=is(r,o);return o=c.iconName||u||o,r=c.prefix||r,r==="far"&&!Dl.far&&Dl.fas&&!rt.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}var TA=lS.filter(function(a){return a!==In||a!==Ul}),AA=Object.keys(up).filter(function(a){return a!==In}).map(function(a){return Object.keys(up[a])}).flat();function RA(a){var e=a.values,n=a.family,r=a.canonical,o=a.givenPrefix,c=o===void 0?"":o,u=a.styles,h=u===void 0?{}:u,m=a.config,p=m===void 0?{}:m,_=n===Ul,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=r.prefix==="fad"||r.prefix==="fa-duotone";if(!_&&(v||g||S)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&TA.includes(n)){var T=Object.keys(h).find(function(b){return AA.includes(b)});if(T||p.autoFetchSvg){var D=LE.get(n).defaultShortPrefixId;r.prefix=D,r.iconName=is(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||c==="fa")&&(r.prefix=Mr()||"fas"),r}var CA=(function(){function a(){YM(this,a),this.definitions={}}return ZM(a,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var u=o.reduce(this._pullDefinitions,{});Object.keys(u).forEach(function(h){n.definitions[h]=we(we({},n.definitions[h]||{}),u[h]),gp(h,u[h]);var m=Rm[In][h];m&&gp(m,u[h]),DS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(c){var u=o[c],h=u.prefix,m=u.iconName,p=u.icon,_=p[2];n[h]||(n[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(n[h][v]=p)}),n[h][m]=p}),n}}])})(),Z_=[],oo={},uo={},wA=Object.keys(uo);function DA(a,e){var n=e.mixoutsTo;return Z_=a,oo={},Object.keys(uo).forEach(function(r){wA.indexOf(r)===-1&&delete uo[r]}),Z_.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(u){typeof o[u]=="function"&&(n[u]=o[u]),Hu(o[u])==="object"&&Object.keys(o[u]).forEach(function(h){n[u]||(n[u]={}),n[u][h]=o[u][h]})}),r.hooks){var c=r.hooks();Object.keys(c).forEach(function(u){oo[u]||(oo[u]=[]),oo[u].push(c[u])})}r.provides&&r.provides(uo)}),n}function vp(a,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var c=oo[a]||[];return c.forEach(function(u){e=u.apply(null,[e].concat(r))}),e}function os(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=oo[a]||[];o.forEach(function(c){c.apply(null,n)})}function Er(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[a]?uo[a].apply(null,e):void 0}function _p(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,n=a.prefix||Mr();if(e)return e=is(n,e)||e,j_(US.definitions,n,e)||j_(Gi.styles,n,e)}var US=new CA,NA=function(){rt.autoReplaceSvg=!1,rt.observeMutations=!1,os("noAuto")},LA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ha?(os("beforeI2svg",e),Er("pseudoElements2svg",e),Er("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;rt.autoReplaceSvg===!1&&(rt.autoReplaceSvg=!0),rt.observeMutations=!0,mA(function(){OA({autoReplaceSvgRoot:n}),os("watch",e)})}},UA={icon:function(e){if(e===null)return null;if(Hu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:is(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=nf(e[0]);return{prefix:r,iconName:is(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(rt.cssPrefix,"-"))>-1||e.match($T))){var o=af(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Mr(),iconName:is(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var c=Mr();return{prefix:c,iconName:is(c,e)||e}}}},vi={noAuto:NA,config:rt,dom:LA,parse:UA,library:US,findIconDefinition:_p,toHtml:Pl},OA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?tn:n;(Object.keys(Gi.styles).length>0||rt.autoFetchSvg)&&Ha&&rt.autoReplaceSvg&&vi.dom.i2svg({node:r})};function rf(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return Pl(r)})}}),Object.defineProperty(a,"node",{get:function(){if(Ha){var r=tn.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function PA(a){var e=a.children,n=a.main,r=a.mask,o=a.attributes,c=a.styles,u=a.transform;if(wm(u)&&n.found&&!r.found){var h=n.width,m=n.height,p={x:h/m/2,y:.5};o.style=tf(we(we({},c),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function IA(a){var e=a.prefix,n=a.iconName,r=a.children,o=a.attributes,c=a.symbol,u=c===!0?"".concat(e,"-").concat(rt.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:we(we({},o),{},{id:u}),children:r}]}]}function zA(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in a})}function Lm(a){var e=a.icons,n=e.main,r=e.mask,o=a.prefix,c=a.iconName,u=a.transform,h=a.symbol,m=a.maskId,p=a.extra,_=a.watchable,v=_===void 0?!1:_,g=r.found?r:n,S=g.width,T=g.height,D=[rt.replacementClass,c?"".concat(rt.cssPrefix,"-").concat(c):""].filter(function(U){return p.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(p.classes).join(" "),b={children:[],attributes:we(we({},p.attributes),{},{"data-prefix":o,"data-icon":c,class:D,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(T)})};!zA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ss]="");var x=we(we({},b),{},{prefix:o,iconName:c,main:n,mask:r,maskId:m,transform:u,symbol:h,styles:we({},p.styles)}),P=r.found&&n.found?Er("generateAbstractMask",x)||{children:[],attributes:{}}:Er("generateAbstractIcon",x)||{children:[],attributes:{}},F=P.children,R=P.attributes;return x.children=F,x.attributes=R,h?IA(x):PA(x)}function Q_(a){var e=a.content,n=a.width,r=a.height,o=a.transform,c=a.extra,u=a.watchable,h=u===void 0?!1:u,m=we(we({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ss]="");var p=we({},c.styles);wm(o)&&(p.transform=dA({transform:o,width:n,height:r}),p["-webkit-transform"]=p.transform);var _=tf(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function FA(a){var e=a.content,n=a.extra,r=we(we({},n.attributes),{},{class:n.classes.join(" ")}),o=tf(n.styles);o.length>0&&(r.style=o);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),c}var _h=Gi.styles;function xp(a){var e=a[0],n=a[1],r=a.slice(4),o=ef(r,1),c=o[0],u=null;return Array.isArray(c)?u={tag:"g",attributes:{class:"".concat(rt.cssPrefix,"-").concat(mh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(mh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(mh.PRIMARY),fill:"currentColor",d:c[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:n,icon:u}}var BA={found:!1,width:512,height:512};function HA(a,e){!mS&&!rt.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function yp(a,e){var n=e;return e==="fa"&&rt.styleDefault!==null&&(e=Mr()),new Promise(function(r,o){if(n==="fa"){var c=NS(a)||{};a=c.iconName||a,e=c.prefix||e}if(a&&e&&_h[e]&&_h[e][a]){var u=_h[e][a];return r(xp(u))}HA(a,e),r(we(we({},BA),{},{icon:rt.showMissingIcons&&a?Er("missingIconAbstract")||{}:{}}))})}var J_=function(){},Sp=rt.measurePerformance&&Qc&&Qc.mark&&Qc.measure?Qc:{mark:J_,measure:J_},El='FA "7.3.1"',GA=function(e){return Sp.mark("".concat(El," ").concat(e," begins")),function(){return OS(e)}},OS=function(e){Sp.mark("".concat(El," ").concat(e," ends")),Sp.measure("".concat(El," ").concat(e),"".concat(El," ").concat(e," begins"),"".concat(El," ").concat(e," ends"))},Um={begin:GA,end:OS},Lu=function(){};function $_(a){var e=a.getAttribute?a.getAttribute(ss):null;return typeof e=="string"}function VA(a){var e=a.getAttribute?a.getAttribute(Tm):null,n=a.getAttribute?a.getAttribute(Am):null;return e&&n}function kA(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(rt.replacementClass)}function XA(){if(rt.autoReplaceSvg===!0)return Uu.replace;var a=Uu[rt.autoReplaceSvg];return a||Uu.replace}function WA(a){return tn.createElementNS("http://www.w3.org/2000/svg",a)}function jA(a){return tn.createElement(a)}function PS(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?a.tag==="svg"?WA:jA:n;if(typeof a=="string")return tn.createTextNode(a);var o=r(a.tag);Object.keys(a.attributes||[]).forEach(function(u){o.setAttribute(u,a.attributes[u])});var c=a.children||[];return c.forEach(function(u){o.appendChild(PS(u,{ceFn:r}))}),o}function qA(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Uu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(o){n.parentNode.insertBefore(PS(o),n)}),n.getAttribute(ss)===null&&rt.keepOriginalSource){var r=tn.createComment(qA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Cm(n).indexOf(rt.replacementClass))return Uu.replace(e);var o=new RegExp("".concat(rt.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var c=r[0].attributes.class.split(" ").reduce(function(h,m){return m===rt.replacementClass||m.match(o)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var u=r.map(function(h){return Pl(h)}).join(`
`);n.setAttribute(ss,""),n.innerHTML=u}};function ex(a){a()}function IS(a,e){var n=typeof e=="function"?e:Lu;if(a.length===0)n();else{var r=ex;rt.mutateApproach===ZT&&(r=br.requestAnimationFrame||ex),r(function(){var o=XA(),c=Um.begin("mutate");a.map(o),c(),n()})}}var Om=!1;function zS(){Om=!0}function bp(){Om=!1}var Vu=null;function tx(a){if(B_&&rt.observeMutations){var e=a.treeCallback,n=e===void 0?Lu:e,r=a.nodeCallback,o=r===void 0?Lu:r,c=a.pseudoElementsCallback,u=c===void 0?Lu:c,h=a.observeMutationsRoot,m=h===void 0?tn:h;Vu=new B_(function(p){if(!Om){var _=Mr();yo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!$_(v.addedNodes[0])&&(rt.searchPseudoElements&&u(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&rt.searchPseudoElements&&u([v.target],!0),v.type==="attributes"&&$_(v.target)&&~nA.indexOf(v.attributeName))if(v.attributeName==="class"&&VA(v.target)){var g=af(Cm(v.target)),S=g.prefix,T=g.iconName;v.target.setAttribute(Tm,S||_),T&&v.target.setAttribute(Am,T)}else kA(v.target)&&o(v.target)})}}),Ha&&Vu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function YA(){Vu&&Vu.disconnect()}function KA(a){var e=a.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,o){var c=o.split(":"),u=c[0],h=c.slice(1);return u&&h.length>0&&(r[u]=h.join(":").trim()),r},{})),n}function ZA(a){var e=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",o=af(Cm(a));return o.prefix||(o.prefix=Mr()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=yA(o.prefix,a.innerText)||Nm(o.prefix,MS(a.innerText))),!o.iconName&&rt.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=a.firstChild.data)),o}function QA(a){var e=yo(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function JA(){return{iconName:null,prefix:null,transform:ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ZA(a),r=n.iconName,o=n.prefix,c=n.rest,u=QA(a),h=vp("parseNodeAttributes",{},a),m=e.styleParser?KA(a):[];return we({iconName:r,prefix:o,transform:ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:u}},h)}var $A=Gi.styles;function FS(a){var e=rt.autoReplaceSvg==="nest"?nx(a,{styleParser:!1}):nx(a);return~e.extra.classes.indexOf(vS)?Er("generateLayersText",a,e):Er("generateSvgReplacementMutation",a,e)}function e2(){return[].concat(Xi(cS),Xi(uS))}function ix(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ha)return Promise.resolve();var n=tn.documentElement.classList,r=function(v){return n.add("".concat(V_,"-").concat(v))},o=function(v){return n.remove("".concat(V_,"-").concat(v))},c=rt.autoFetchSvg?e2():By.concat(Object.keys($A));c.includes("fa")||c.push("fa");var u=[".".concat(vS,":not([").concat(ss,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ss,"])")})).join(", ");if(u.length===0)return Promise.resolve();var h=[];try{h=yo(a.querySelectorAll(u))}catch{}if(h.length>0)r("pending"),o("complete");else return Promise.resolve();var m=Um.begin("onTree"),p=h.reduce(function(_,v){try{var g=FS(v);g&&_.push(g)}catch(S){mS||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){IS(g,function(){r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function t2(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;FS(a).then(function(n){n&&IS([n],e)})}function n2(a){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:_p(e||{}),o=n.mask;return o&&(o=(o||{}).icon?o:_p(o||{})),a(r,we(we({},n),{},{mask:o}))}}var i2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?ta:r,c=n.symbol,u=c===void 0?!1:c,h=n.mask,m=h===void 0?null:h,p=n.maskId,_=p===void 0?null:p,v=n.classes,g=v===void 0?[]:v,S=n.attributes,T=S===void 0?{}:S,D=n.styles,b=D===void 0?{}:D;if(e){var x=e.prefix,P=e.iconName,F=e.icon;return rf(we({type:"icon"},e),function(){return os("beforeDOMElementCreation",{iconDefinition:e,params:n}),Lm({icons:{main:xp(F),mask:m?xp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:P,transform:we(we({},ta),o),symbol:u,maskId:_,extra:{attributes:T,styles:b,classes:g}})})}},a2={mixout:function(){return{icon:n2(i2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ix,n.nodeCallback=t2,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,o=r===void 0?tn:r,c=n.callback,u=c===void 0?function(){}:c;return ix(o,u)},e.generateSvgReplacementMutation=function(n,r){var o=r.iconName,c=r.prefix,u=r.transform,h=r.symbol,m=r.mask,p=r.maskId,_=r.extra;return new Promise(function(v,g){Promise.all([yp(o,c),m.iconName?yp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=ef(S,2),D=T[0],b=T[1];v([n,Lm({icons:{main:D,mask:b},prefix:c,iconName:o,transform:u,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.transform,h=n.styles,m=tf(h);m.length>0&&(o.style=m);var p;return wm(u)&&(p=Er("generateAbstractTransformGrouping",{main:c,transform:u,containerWidth:c.width,iconWidth:c.width})),r.push(p||c.icon),{children:r,attributes:o}}}},r2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,c=o===void 0?[]:o;return rf({type:"layer"},function(){os("beforeDOMElementCreation",{assembler:n,params:r});var u=[];return n(function(h){Array.isArray(h)?h.map(function(m){u=u.concat(m.abstract)}):u=u.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(rt.cssPrefix,"-layers")].concat(Xi(c)).join(" ")},children:u}]})}}}},s2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var o=r.classes,c=o===void 0?[]:o,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return rf({type:"counter",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:r}),FA({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(rt.cssPrefix,"-layers-counter")].concat(Xi(c))}})})}}}},o2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,c=o===void 0?ta:o,u=r.classes,h=u===void 0?[]:u,m=r.attributes,p=m===void 0?{}:m,_=r.styles,v=_===void 0?{}:_;return rf({type:"text",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:r}),Q_({content:n,transform:we(we({},ta),c),extra:{attributes:p,styles:v,classes:["".concat(rt.cssPrefix,"-layers-text")].concat(Xi(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var o=r.transform,c=r.extra,u=null,h=null;if(zy){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();u=p.width/m,h=p.height/m}return Promise.resolve([n,Q_({content:n.innerHTML,width:u,height:h,transform:o,extra:c,watchable:!0})])}}},BS=new RegExp('"',"ug"),ax=[1105920,1112319],rx=we(we(we(we({},{FontAwesome:{normal:"fas",400:"fas"}}),NE),YT),HE),Mp=Object.keys(rx).reduce(function(a,e){return a[e.toLowerCase()]=rx[e],a},{}),l2=Object.keys(Mp).reduce(function(a,e){var n=Mp[e];return a[e]=n[900]||Xi(Object.entries(n))[0][1],a},{});function c2(a){var e=a.replace(BS,"");return MS(Xi(e)[0]||"")}function u2(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),n=a.getPropertyValue("content"),r=n.replace(BS,""),o=r.codePointAt(0),c=o>=ax[0]&&o<=ax[1],u=r.length===2?r[0]===r[1]:!1;return c||u||e}function f2(a,e){var n=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return(Mp[n]||{})[o]||l2[n]}function sx(a,e){var n="".concat(KT).concat(e.replace(":","-"));return new Promise(function(r,o){if(a.getAttribute(n)!==null)return r();var c=yo(a.children),u=c.filter(function(N){return N.getAttribute(dp)===e})[0],h=br.getComputedStyle(a,e),m=h.getPropertyValue("font-family"),p=m.match(eA),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(u&&!p)return a.removeChild(u),r();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=f2(m,_),T=c2(g),D=p[0].startsWith("FontAwesome"),b=u2(h),x=Nm(S,T),P=x;if(D){var F=SA(T);F.iconName&&F.prefix&&(x=F.iconName,S=F.prefix)}if(x&&!b&&(!u||u.getAttribute(Tm)!==S||u.getAttribute(Am)!==P)){a.setAttribute(n,P),u&&a.removeChild(u);var R=JA(),U=R.extra;U.attributes[dp]=e,yp(x,S).then(function(N){var B=Lm(we(we({},R),{},{icons:{main:N,mask:LS()},prefix:S,iconName:P,extra:U,watchable:!0})),A=tn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(A,a.firstChild):a.appendChild(A),A.outerHTML=B.map(function(z){return Pl(z)}).join(`
`),a.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function d2(a){return Promise.all([sx(a,"::before"),sx(a,"::after")])}function h2(a){return a.parentNode!==document.head&&!~QT.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(dp)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var p2=function(e){return!!e&&pS.some(function(n){return e.includes(n)})},m2=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var o=Nu(r),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;if(p2(u)){var h=pS.reduce(function(m,p){return m.replace(p,"")},u);h!==""&&h!=="*"&&n.add(h)}}}catch(m){o.e(m)}finally{o.f()}return n};function ox(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ha){var n;if(e)n=a;else if(rt.searchPseudoElementsFullScan)n=a.querySelectorAll("*");else{var r=new Set,o=Nu(document.styleSheets),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;try{var h=Nu(u.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=m2(p.selectorText),v=Nu(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;r.add(S)}}catch(D){v.e(D)}finally{v.f()}}}catch(D){h.e(D)}finally{h.f()}}catch(D){rt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(u.href," (").concat(D.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(D){o.e(D)}finally{o.f()}if(!r.size)return;var T=Array.from(r).join(", ");try{n=a.querySelectorAll(T)}catch{}}return new Promise(function(D,b){var x=yo(n).filter(h2).map(d2),P=Um.begin("searchPseudoElements");zS(),Promise.all(x).then(function(){P(),bp(),D()}).catch(function(){P(),bp(),b()})})}}var g2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ox,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?tn:r;rt.searchPseudoElements&&ox(o)}}},lx=!1,v2={mixout:function(){return{dom:{unwatch:function(){zS(),lx=!0}}}},hooks:function(){return{bootstrap:function(){tx(vp("mutationObserverCallbacks",{}))},noAuto:function(){YA()},watch:function(n){var r=n.observeMutationsRoot;lx?bp():tx(vp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},cx=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,o){var c=o.toLowerCase().split("-"),u=c[0],h=c.slice(1).join("-");if(u&&h==="h")return r.flipX=!0,r;if(u&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(u){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},n)},_2={mixout:function(){return{parse:{transform:function(n){return cx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=cx(o)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,c=n.containerWidth,u=n.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),p="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),_="rotate(".concat(o.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(u/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:we({},S.outer),children:[{tag:"g",attributes:we({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:we(we({},r.icon.attributes),S.path)}]}]}}}},xh={x:0,y:0,width:"100%",height:"100%"};function ux(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function x2(a){return a.tag==="g"?a.children:[a]}var y2={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),c=o?af(o.split(" ").map(function(u){return u.trim()})):LS();return c.prefix||(c.prefix=Mr()),n.mask=c,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.mask,h=n.maskId,m=n.transform,p=c.width,_=c.icon,v=u.width,g=u.icon,S=fA({transform:m,containerWidth:v,iconWidth:p}),T={tag:"rect",attributes:we(we({},xh),{},{fill:"white"})},D=_.children?{children:_.children.map(ux)}:{},b={tag:"g",attributes:we({},S.inner),children:[ux(we({tag:_.tag,attributes:we(we({},_.attributes),S.path)},D))]},x={tag:"g",attributes:we({},S.outer),children:[b]},P="mask-".concat(h||X_()),F="clip-".concat(h||X_()),R={tag:"mask",attributes:we(we({},xh),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,x]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:x2(g)},R]};return r.push(U,{tag:"rect",attributes:we({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(P,")")},xh)}),{children:r,attributes:o}}}},S2={provides:function(e){var n=!1;br.matchMedia&&(n=br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:we(we({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var u=we(we({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:we(we({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:we(we({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:we(we({},u),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:we(we({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:we(we({},u),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:we(we({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:we(we({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},b2={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),c=o===null?!1:o===""?!0:o;return n.symbol=c,n}}}},M2=[pA,a2,r2,s2,o2,g2,v2,_2,y2,S2,b2];DA(M2,{mixoutsTo:vi});vi.noAuto;var ls=vi.config;vi.library;vi.dom;var HS=vi.parse;vi.findIconDefinition;vi.toHtml;var E2=vi.icon;vi.layer;vi.text;vi.counter;var yh={exports:{}},ml={},Sh={exports:{}},bh={};var fx;function T2(){return fx||(fx=1,(function(a){function e(L,G){var ne=L.length;L.push(G);e:for(;0<ne;){var ge=ne-1>>>1,Ee=L[ge];if(0<o(Ee,G))L[ge]=G,L[ne]=Ee,ne=ge;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var G=L[0],ne=L.pop();if(ne!==G){L[0]=ne;e:for(var ge=0,Ee=L.length,O=Ee>>>1;ge<O;){var Z=2*(ge+1)-1,te=L[Z],Q=Z+1,ve=L[Q];if(0>o(te,ne))Q<Ee&&0>o(ve,te)?(L[ge]=ve,L[Q]=ne,ge=Q):(L[ge]=te,L[Z]=ne,ge=Z);else if(Q<Ee&&0>o(ve,ne))L[ge]=ve,L[Q]=ne,ge=Q;else break e}}return G}function o(L,G){var ne=L.sortIndex-G.sortIndex;return ne!==0?ne:L.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,T=!1,D=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function R(L){for(var G=n(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=L)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=n(p)}}function U(L){if(D=!1,R(L),!T)if(n(m)!==null)T=!0,N||(N=!0,q());else{var G=n(p);G!==null&&$(U,G.startTime-L)}}var N=!1,B=-1,A=5,z=-1;function j(){return b?!0:!(a.unstable_now()-z<A)}function V(){if(b=!1,N){var L=a.unstable_now();z=L;var G=!0;try{e:{T=!1,D&&(D=!1,P(B),B=-1),S=!0;var ne=g;try{t:{for(R(L),v=n(m);v!==null&&!(v.expirationTime>L&&j());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,g=v.priorityLevel;var Ee=ge(v.expirationTime<=L);if(L=a.unstable_now(),typeof Ee=="function"){v.callback=Ee,R(L),G=!0;break t}v===n(m)&&r(m),R(L)}else r(m);v=n(m)}if(v!==null)G=!0;else{var O=n(p);O!==null&&$(U,O.startTime-L),G=!1}}break e}finally{v=null,g=ne,S=!1}G=void 0}}finally{G?q():N=!1}}}var q;if(typeof F=="function")q=function(){F(V)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,me=pe.port2;pe.port1.onmessage=V,q=function(){me.postMessage(null)}}else q=function(){x(V,0)};function $(L,G){B=x(function(){L(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(L){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ne=g;g=G;try{return L()}finally{g=ne}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ne=g;g=L;try{return G()}finally{g=ne}},a.unstable_scheduleCallback=function(L,G,ne){var ge=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ge+ne:ge):ne=ge,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ne+Ee,L={id:_++,callback:G,priorityLevel:L,startTime:ne,expirationTime:Ee,sortIndex:-1},ne>ge?(L.sortIndex=ne,e(p,L),n(m)===null&&L===n(p)&&(D?(P(B),B=-1):D=!0,$(U,ne-ge))):(L.sortIndex=Ee,e(m,L),T||S||(T=!0,N||(N=!0,q()))),L},a.unstable_shouldYield=j,a.unstable_wrapCallback=function(L){var G=g;return function(){var ne=g;g=G;try{return L.apply(this,arguments)}finally{g=ne}}}})(bh)),bh}var dx;function A2(){return dx||(dx=1,Sh.exports=T2()),Sh.exports}var Mh={exports:{}},Bn={};var hx;function R2(){if(hx)return Bn;hx=1;var a=Sm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=u.T,_=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=_,r.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Bn.requestFormReset=function(m){r.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var px;function C2(){if(px)return Mh.exports;px=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Mh.exports=R2(),Mh.exports}var mx;function w2(){if(mx)return ml;mx=1;var a=A2(),e=Sm(),n=C2();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var y=!1,w=f.child;w;){if(w===s){y=!0,s=f,l=d;break}if(w===l){y=!0,l=f,s=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===s){y=!0,s=d,l=f;break}if(w===l){y=!0,l=d,s=f;break}w=w.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),F=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case U:return"Suspense";case N:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case F:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case R:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var $=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ge=[],Ee=-1;function O(t){return{current:t}}function Z(t){0>Ee||(t.current=ge[Ee],ge[Ee]=null,Ee--)}function te(t,i){Ee++,ge[Ee]=t.current,t.current=i}var Q=O(null),ve=O(null),k=O(null),se=O(null);function de(t,i){switch(te(k,i),te(ve,t),te(Q,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?$v(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=$v(i),t=e_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Q),te(Q,t)}function Ce(){Z(Q),Z(ve),Z(k)}function Je(t){t.memoizedState!==null&&te(se,t);var i=Q.current,s=e_(i,t.type);i!==s&&(te(ve,t),te(Q,s))}function Be(t){ve.current===t&&(Z(Q),Z(ve)),se.current===t&&(Z(se),ul._currentValue=ne)}var xt,ut;function pt(t){if(xt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);xt=i&&i[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+t+ut}var ft=!1;function Ae(t,i){if(!t||ft)return"";ft=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(he){var fe=he}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(he){fe=he}t.call(Te.prototype)}}else{try{throw Error()}catch(he){fe=he}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(he){if(he&&fe&&typeof he.stack=="string")return[he.stack,fe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var H=y.split(`
`),ae=w.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===ae.length)for(l=H.length-1,f=ae.length-1;1<=l&&0<=f&&H[l]!==ae[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==ae[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==ae[f]){var Se=`
`+H[l].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=l&&0<=f);break}}}finally{ft=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?pt(s):""}function $e(t,i){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==i&&i!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return Ae(t.type,!1);case 11:return Ae(t.type.render,!1);case 1:return Ae(t.type,!0);case 31:return pt("Activity");default:return""}}function wt(t){try{var i="",s=null;do i+=$e(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var zt=Object.prototype.hasOwnProperty,nn=a.unstable_scheduleCallback,Jt=a.unstable_cancelCallback,ln=a.unstable_shouldYield,K=a.unstable_requestPaint,jt=a.unstable_now,Ot=a.unstable_getCurrentPriorityLevel,I=a.unstable_ImmediatePriority,M=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,ce=a.unstable_LowPriority,xe=a.unstable_IdlePriority,De=a.log,Pe=a.unstable_setDisableYieldValue,_e=null,ye=null;function Ue(t){if(typeof De=="function"&&Pe(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(_e,t)}catch{}}var ke=Math.clz32?Math.clz32:tt,Fe=Math.log,Ie=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(Fe(t)/Ie|0)|0}var nt=256,ct=262144,W=4194304;function Ne(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=Ne(l):(y&=w,y!==0?f=Ne(y):s||(s=w&~t,s!==0&&(f=Ne(s))))):(w=l&~d,w!==0?f=Ne(w):y!==0?f=Ne(y):s||(s=l&~t,s!==0&&(f=Ne(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Oe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ve(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ze(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function je(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,i,s,l,f,d){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,H=t.expirationTimes,ae=t.hiddenUpdates;for(s=y&~s;0<s;){var Se=31-ke(s),Te=1<<Se;w[Se]=0,H[Se]=-1;var fe=ae[Se];if(fe!==null)for(ae[Se]=null,Se=0;Se<fe.length;Se++){var he=fe[Se];he!==null&&(he.lane&=-536870913)}s&=~Te}l!==0&&Bt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~i))}function Bt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ke(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ii(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ke(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:Eo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function To(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ao(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:M_(t.type))}function hs(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Wi,Dn="__reactProps$"+Wi,qn="__reactContainer$"+Wi,Ar="__reactEvents$"+Wi,Hl="__reactListeners$"+Wi,Gl="__reactHandles$"+Wi,Rr="__reactResources$"+Wi,Ga="__reactMarker$"+Wi;function Va(t){delete t[mn],delete t[Dn],delete t[Ar],delete t[Hl],delete t[Gl]}function oa(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[qn]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=o_(t);t!==null;){if(s=t[mn])return s;t=o_(t)}return i}t=s,s=t.parentNode}return null}function la(t){if(t=t[mn]||t[qn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Cr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ka(t){var i=t[Rr];return i||(i=t[Rr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gn(t){t[Ga]=!0}var Vl=new Set,C={};function Y(t,i){ue(t,i),ue(t+"Capture",i)}function ue(t,i){for(C[t]=i,t=0;t<i.length;t++)Vl.add(i[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},He={};function We(t){return zt.call(He,t)?!0:zt.call(le,t)?!1:oe.test(t)?He[t]=!0:(le[t]=!0,!1)}function ze(t,i,s){if(We(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ye(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function qe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Nt(t){if(!t._valueTracker){var i=mt(t)?"checked":"value";t._valueTracker=et(t,i,""+t[i])}}function rn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=mt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function Gt(t){return t.replace(Ht,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xe(t,i,s,l,f,d,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+it(i)):t.value!==""+it(i)&&(t.value=""+it(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?yt(t,y,it(i)):s!=null?yt(t,y,it(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+it(w):t.removeAttribute("name")}function Fn(t,i,s,l,f,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Nt(t);return}s=s!=null?""+it(s):"",i=i!=null?""+it(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Nt(t)}function yt(t,i,s){i==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function ri(t,i,s){if(i!=null&&(i=""+it(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+it(s):""}function Ni(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if($(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=it(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Nt(t)}function si(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Vt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Li(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&sn(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&sn(t,d,i[d])}function Ft(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return Xa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var uf=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ps=null,ms=null;function Jm(t){var i=la(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Gt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Dn]||null;if(!f)throw Error(r(90));Xe(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&rn(l)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Mn(t,!!s.multiple,i,!1)}}}var df=!1;function $m(t,i,s){if(df)return t(i,s);df=!0;try{var l=t(i);return l}finally{if(df=!1,(ps!==null||ms!==null)&&(wc(),ps&&(i=ps,t=ms,ms=ps=null,Jm(i),t)))for(i=0;i<t.length;i++)Jm(t[i])}}function Ro(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Dn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=!1;if(ua)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){hf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{hf=!1}var Wa=null,pf=null,kl=null;function eg(){if(kl)return kl;var t,i=pf,s=i.length,l,f="value"in Wa?Wa.value:Wa.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===f[d-l];l++);return kl=f.slice(t,1<l?1-l:void 0)}function Xl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function tg(){return!1}function Yn(t){function i(s,l,f,d,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wl:tg,this.isPropagationStopped=tg,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),i}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Yn(Dr),wo=v({},Dr,{view:0,detail:0}),zb=Yn(wo),mf,gf,Do,ql=v({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(mf=t.screenX-Do.screenX,gf=t.screenY-Do.screenY):gf=mf=0,Do=t),mf)},movementY:function(t){return"movementY"in t?t.movementY:gf}}),ng=Yn(ql),Fb=v({},ql,{dataTransfer:0}),Bb=Yn(Fb),Hb=v({},wo,{relatedTarget:0}),vf=Yn(Hb),Gb=v({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vb=Yn(Gb),kb=v({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xb=Yn(kb),Wb=v({},Dr,{data:0}),ig=Yn(Wb),jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kb(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Yb[t])?!!i[t]:!1}function _f(){return Kb}var Zb=v({},wo,{key:function(t){if(t.key){var i=jb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qb=Yn(Zb),Jb=v({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=Yn(Jb),$b=v({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),e1=Yn($b),t1=v({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n1=Yn(t1),i1=v({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=Yn(i1),r1=v({},Dr,{newState:0,oldState:0}),s1=Yn(r1),o1=[9,13,27,32],xf=ua&&"CompositionEvent"in window,No=null;ua&&"documentMode"in document&&(No=document.documentMode);var l1=ua&&"TextEvent"in window&&!No,rg=ua&&(!xf||No&&8<No&&11>=No),sg=" ",og=!1;function lg(t,i){switch(t){case"keyup":return o1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function c1(t,i){switch(t){case"compositionend":return cg(i);case"keypress":return i.which!==32?null:(og=!0,sg);case"textInput":return t=i.data,t===sg&&og?null:t;default:return null}}function u1(t,i){if(gs)return t==="compositionend"||!xf&&lg(t,i)?(t=eg(),kl=pf=Wa=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rg&&i.locale!=="ko"?null:i.data;default:return null}}var f1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!f1[t.type]:i==="textarea"}function fg(t,i,s,l){ps?ms?ms.push(l):ms=[l]:ps=l,i=Ic(i,"onChange"),0<i.length&&(s=new jl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Lo=null,Uo=null;function d1(t){qv(t,0)}function Yl(t){var i=Cr(t);if(rn(i))return t}function dg(t,i){if(t==="change")return i}var hg=!1;if(ua){var yf;if(ua){var Sf="oninput"in document;if(!Sf){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),Sf=typeof pg.oninput=="function"}yf=Sf}else yf=!1;hg=yf&&(!document.documentMode||9<document.documentMode)}function mg(){Lo&&(Lo.detachEvent("onpropertychange",gg),Uo=Lo=null)}function gg(t){if(t.propertyName==="value"&&Yl(Uo)){var i=[];fg(i,Uo,t,ff(t)),$m(d1,i)}}function h1(t,i,s){t==="focusin"?(mg(),Lo=i,Uo=s,Lo.attachEvent("onpropertychange",gg)):t==="focusout"&&mg()}function p1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Uo)}function m1(t,i){if(t==="click")return Yl(i)}function g1(t,i){if(t==="input"||t==="change")return Yl(i)}function v1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:v1;function Oo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!zt.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function vg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _g(t,i){var s=vg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=vg(s)}}function xg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?xg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Zt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Zt(t.document)}return i}function bf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var _1=ua&&"documentMode"in document&&11>=document.documentMode,vs=null,Mf=null,Po=null,Ef=!1;function Sg(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ef||vs==null||vs!==Zt(l)||(l=vs,"selectionStart"in l&&bf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Po&&Oo(Po,l)||(Po=l,l=Ic(Mf,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=vs)))}function Nr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var _s={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Tf={},bg={};ua&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Lr(t){if(Tf[t])return Tf[t];if(!_s[t])return t;var i=_s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in bg)return Tf[t]=i[s];return t}var Mg=Lr("animationend"),Eg=Lr("animationiteration"),Tg=Lr("animationstart"),x1=Lr("transitionrun"),y1=Lr("transitionstart"),S1=Lr("transitioncancel"),Ag=Lr("transitionend"),Rg=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function Ui(t,i){Rg.set(t,i),Y(i,[t])}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],xs=0,Rf=0;function Zl(){for(var t=xs,i=Rf=xs=0;i<t;){var s=_i[i];_i[i++]=null;var l=_i[i];_i[i++]=null;var f=_i[i];_i[i++]=null;var d=_i[i];if(_i[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}d!==0&&Cg(s,f,d)}}function Ql(t,i,s,l){_i[xs++]=t,_i[xs++]=i,_i[xs++]=s,_i[xs++]=l,Rf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Cf(t,i,s,l){return Ql(t,i,s,l),Jl(t)}function Ur(t,i){return Ql(t,null,null,i),Jl(t)}function Cg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-ke(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Jl(t){if(50<il)throw il=0,zd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ys={};function b1(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,l){return new b1(t,i,s,l)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function wg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function $l(t,i,s,l,f,d){var y=0;if(l=t,typeof t=="function")wf(t)&&(y=1);else if(typeof t=="string")y=RM(t,s,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=li(31,s,i,f),t.elementType=z,t.lanes=d,t;case D:return Or(s.children,f,d,i);case b:y=8,f|=24;break;case x:return t=li(12,s,i,f|2),t.elementType=x,t.lanes=d,t;case U:return t=li(13,s,i,f),t.elementType=U,t.lanes=d,t;case N:return t=li(19,s,i,f),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:y=10;break e;case P:y=9;break e;case R:y=11;break e;case B:y=14;break e;case A:y=16,l=null;break e}y=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=li(y,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Or(t,i,s,l){return t=li(7,t,l,i),t.lanes=s,t}function Df(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Dg(t){var i=li(18,null,null,0);return i.stateNode=t,i}function Nf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ng=new WeakMap;function xi(t,i){if(typeof t=="object"&&t!==null){var s=Ng.get(t);return s!==void 0?s:(i={value:t,source:i,stack:wt(i)},Ng.set(t,i),i)}return{value:t,source:i,stack:wt(i)}}var Ss=[],bs=0,ec=null,Io=0,yi=[],Si=0,ja=null,qi=1,Yi="";function da(t,i){Ss[bs++]=Io,Ss[bs++]=ec,ec=t,Io=i}function Lg(t,i,s){yi[Si++]=qi,yi[Si++]=Yi,yi[Si++]=ja,ja=t;var l=qi;t=Yi;var f=32-ke(l)-1;l&=~(1<<f),s+=1;var d=32-ke(i)+f;if(30<d){var y=f-f%5;d=(l&(1<<y)-1).toString(32),l>>=y,f-=y,qi=1<<32-ke(i)+f|s<<f|l,Yi=d+t}else qi=1<<d|s<<f|l,Yi=t}function Lf(t){t.return!==null&&(da(t,1),Lg(t,1,0))}function Uf(t){for(;t===ec;)ec=Ss[--bs],Ss[bs]=null,Io=Ss[--bs],Ss[bs]=null;for(;t===ja;)ja=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null,qi=yi[--Si],yi[Si]=null}function Ug(t,i){yi[Si++]=qi,yi[Si++]=Yi,yi[Si++]=ja,qi=i.id,Yi=i.overflow,ja=t}var Nn=null,$t=null,At=!1,qa=null,bi=!1,Of=Error(r(519));function Ya(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(xi(i,t)),Of}function Og(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[mn]=t,i[Dn]=l,s){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(s=0;s<rl.length;s++)bt(rl[s],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":bt("invalid",i),Fn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",i);break;case"textarea":bt("invalid",i),Ni(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Qv(i.textContent,s)?(l.popover!=null&&(bt("beforetoggle",i),bt("toggle",i)),l.onScroll!=null&&bt("scroll",i),l.onScrollEnd!=null&&bt("scrollend",i),l.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||Ya(t,!0)}function Pg(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Ms(t){if(t!==Nn)return!1;if(!At)return Pg(t),At=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Jd(t.type,t.memoizedProps)),s=!s),s&&$t&&Ya(t),Pg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=s_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=s_(t)}else i===27?(i=$t,lr(t.type)?(t=ih,ih=null,$t=t):$t=i):$t=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Pr(){$t=Nn=null,At=!1}function Pf(){var t=qa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),qa=null),t}function zo(t){qa===null?qa=[t]:qa.push(t)}var If=O(null),Ir=null,ha=null;function Ka(t,i,s){te(If,i._currentValue),i._currentValue=s}function pa(t){t._currentValue=If.current,Z(If)}function zf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ff(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var y=f.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=f;for(var H=0;H<i.length;H++)if(w.context===i[H]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),zf(d.return,s,t),l||(y=null);break e}d=w.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(r(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),zf(y,s,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function Es(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var w=f.type;oi(f.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(f===se.current){if(y=f.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}f=f.return}t!==null&&Ff(i,t,s,l),i.flags|=262144}function tc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Ir=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Ig(Ir,t)}function nc(t,i){return Ir===null&&zr(t),Ig(t,i)}function Ig(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(r(308));ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ha=ha.next=i;return s}var M1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},E1=a.unstable_scheduleCallback,T1=a.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bf(){return{controller:new M1,data:new Map,refCount:0}}function Fo(t){t.refCount--,t.refCount===0&&E1(T1,function(){t.controller.abort()})}var Bo=null,Hf=0,Ts=0,As=null;function A1(t,i){if(Bo===null){var s=Bo=[];Hf=0,Ts=kd(),As={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Hf++,i.then(zg,zg),i}function zg(){if(--Hf===0&&Bo!==null){As!==null&&(As.status="fulfilled");var t=Bo;Bo=null,Ts=0,As=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function R1(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Fg=L.S;L.S=function(t,i){Sv=jt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&A1(t,i),Fg!==null&&Fg(t,i)};var Fr=O(null);function Gf(){var t=Fr.current;return t!==null?t:Qt.pooledCache}function ic(t,i){i===null?te(Fr,Fr.current):te(Fr,i.pool)}function Bg(){var t=Gf();return t===null?null:{parent:vn._currentValue,pool:t}}var Rs=Error(r(460)),Vf=Error(r(474)),ac=Error(r(542)),rc={then:function(){}};function Hg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,kg(t),t;default:if(typeof i.status=="string")i.then(ca,ca);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,kg(t),t}throw Hr=i,Rs}}function Br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hr=s,Rs):s}}var Hr=null;function Vg(){if(Hr===null)throw Error(r(459));var t=Hr;return Hr=null,t}function kg(t){if(t===Rs||t===ac)throw Error(r(483))}var Cs=null,Ho=0;function sc(t){var i=Ho;return Ho+=1,Cs===null&&(Cs=[]),Gg(Cs,t,i)}function Go(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function oc(t,i){throw i.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Xg(t){function i(J,X){if(t){var ie=J.deletions;ie===null?(J.deletions=[X],J.flags|=16):ie.push(X)}}function s(J,X){if(!t)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function l(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function f(J,X){return J=fa(J,X),J.index=0,J.sibling=null,J}function d(J,X,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<X?(J.flags|=67108866,X):ie):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function y(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function w(J,X,ie,Me){return X===null||X.tag!==6?(X=Df(ie,J.mode,Me),X.return=J,X):(X=f(X,ie),X.return=J,X)}function H(J,X,ie,Me){var at=ie.type;return at===D?Se(J,X,ie.props.children,Me,ie.key):X!==null&&(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&Br(at)===X.type)?(X=f(X,ie.props),Go(X,ie),X.return=J,X):(X=$l(ie.type,ie.key,ie.props,null,J.mode,Me),Go(X,ie),X.return=J,X)}function ae(J,X,ie,Me){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=Nf(ie,J.mode,Me),X.return=J,X):(X=f(X,ie.children||[]),X.return=J,X)}function Se(J,X,ie,Me,at){return X===null||X.tag!==7?(X=Or(ie,J.mode,Me,at),X.return=J,X):(X=f(X,ie),X.return=J,X)}function Te(J,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Df(""+X,J.mode,ie),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ie=$l(X.type,X.key,X.props,null,J.mode,ie),Go(ie,X),ie.return=J,ie;case T:return X=Nf(X,J.mode,ie),X.return=J,X;case A:return X=Br(X),Te(J,X,ie)}if($(X)||q(X))return X=Or(X,J.mode,ie,null),X.return=J,X;if(typeof X.then=="function")return Te(J,sc(X),ie);if(X.$$typeof===F)return Te(J,nc(J,X),ie);oc(J,X)}return null}function fe(J,X,ie,Me){var at=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return at!==null?null:w(J,X,""+ie,Me);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===at?H(J,X,ie,Me):null;case T:return ie.key===at?ae(J,X,ie,Me):null;case A:return ie=Br(ie),fe(J,X,ie,Me)}if($(ie)||q(ie))return at!==null?null:Se(J,X,ie,Me,null);if(typeof ie.then=="function")return fe(J,X,sc(ie),Me);if(ie.$$typeof===F)return fe(J,X,nc(J,ie),Me);oc(J,ie)}return null}function he(J,X,ie,Me,at){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return J=J.get(ie)||null,w(X,J,""+Me,at);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case S:return J=J.get(Me.key===null?ie:Me.key)||null,H(X,J,Me,at);case T:return J=J.get(Me.key===null?ie:Me.key)||null,ae(X,J,Me,at);case A:return Me=Br(Me),he(J,X,ie,Me,at)}if($(Me)||q(Me))return J=J.get(ie)||null,Se(X,J,Me,at,null);if(typeof Me.then=="function")return he(J,X,ie,sc(Me),at);if(Me.$$typeof===F)return he(J,X,ie,nc(X,Me),at);oc(X,Me)}return null}function Ke(J,X,ie,Me){for(var at=null,Lt=null,Qe=X,vt=X=0,Et=null;Qe!==null&&vt<ie.length;vt++){Qe.index>vt?(Et=Qe,Qe=null):Et=Qe.sibling;var Ut=fe(J,Qe,ie[vt],Me);if(Ut===null){Qe===null&&(Qe=Et);break}t&&Qe&&Ut.alternate===null&&i(J,Qe),X=d(Ut,X,vt),Lt===null?at=Ut:Lt.sibling=Ut,Lt=Ut,Qe=Et}if(vt===ie.length)return s(J,Qe),At&&da(J,vt),at;if(Qe===null){for(;vt<ie.length;vt++)Qe=Te(J,ie[vt],Me),Qe!==null&&(X=d(Qe,X,vt),Lt===null?at=Qe:Lt.sibling=Qe,Lt=Qe);return At&&da(J,vt),at}for(Qe=l(Qe);vt<ie.length;vt++)Et=he(Qe,J,vt,ie[vt],Me),Et!==null&&(t&&Et.alternate!==null&&Qe.delete(Et.key===null?vt:Et.key),X=d(Et,X,vt),Lt===null?at=Et:Lt.sibling=Et,Lt=Et);return t&&Qe.forEach(function(hr){return i(J,hr)}),At&&da(J,vt),at}function ot(J,X,ie,Me){if(ie==null)throw Error(r(151));for(var at=null,Lt=null,Qe=X,vt=X=0,Et=null,Ut=ie.next();Qe!==null&&!Ut.done;vt++,Ut=ie.next()){Qe.index>vt?(Et=Qe,Qe=null):Et=Qe.sibling;var hr=fe(J,Qe,Ut.value,Me);if(hr===null){Qe===null&&(Qe=Et);break}t&&Qe&&hr.alternate===null&&i(J,Qe),X=d(hr,X,vt),Lt===null?at=hr:Lt.sibling=hr,Lt=hr,Qe=Et}if(Ut.done)return s(J,Qe),At&&da(J,vt),at;if(Qe===null){for(;!Ut.done;vt++,Ut=ie.next())Ut=Te(J,Ut.value,Me),Ut!==null&&(X=d(Ut,X,vt),Lt===null?at=Ut:Lt.sibling=Ut,Lt=Ut);return At&&da(J,vt),at}for(Qe=l(Qe);!Ut.done;vt++,Ut=ie.next())Ut=he(Qe,J,vt,Ut.value,Me),Ut!==null&&(t&&Ut.alternate!==null&&Qe.delete(Ut.key===null?vt:Ut.key),X=d(Ut,X,vt),Lt===null?at=Ut:Lt.sibling=Ut,Lt=Ut);return t&&Qe.forEach(function(FM){return i(J,FM)}),At&&da(J,vt),at}function Kt(J,X,ie,Me){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var at=ie.key;X!==null;){if(X.key===at){if(at=ie.type,at===D){if(X.tag===7){s(J,X.sibling),Me=f(X,ie.props.children),Me.return=J,J=Me;break e}}else if(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&Br(at)===X.type){s(J,X.sibling),Me=f(X,ie.props),Go(Me,ie),Me.return=J,J=Me;break e}s(J,X);break}else i(J,X);X=X.sibling}ie.type===D?(Me=Or(ie.props.children,J.mode,Me,ie.key),Me.return=J,J=Me):(Me=$l(ie.type,ie.key,ie.props,null,J.mode,Me),Go(Me,ie),Me.return=J,J=Me)}return y(J);case T:e:{for(at=ie.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){s(J,X.sibling),Me=f(X,ie.children||[]),Me.return=J,J=Me;break e}else{s(J,X);break}else i(J,X);X=X.sibling}Me=Nf(ie,J.mode,Me),Me.return=J,J=Me}return y(J);case A:return ie=Br(ie),Kt(J,X,ie,Me)}if($(ie))return Ke(J,X,ie,Me);if(q(ie)){if(at=q(ie),typeof at!="function")throw Error(r(150));return ie=at.call(ie),ot(J,X,ie,Me)}if(typeof ie.then=="function")return Kt(J,X,sc(ie),Me);if(ie.$$typeof===F)return Kt(J,X,nc(J,ie),Me);oc(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,X!==null&&X.tag===6?(s(J,X.sibling),Me=f(X,ie),Me.return=J,J=Me):(s(J,X),Me=Df(ie,J.mode,Me),Me.return=J,J=Me),y(J)):s(J,X)}return function(J,X,ie,Me){try{Ho=0;var at=Kt(J,X,ie,Me);return Cs=null,at}catch(Qe){if(Qe===Rs||Qe===ac)throw Qe;var Lt=li(29,Qe,null,J.mode);return Lt.lanes=Me,Lt.return=J,Lt}}}var Gr=Xg(!0),Wg=Xg(!1),Za=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Pt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Jl(t),Cg(t,null,s),i}return Ql(t,l,i,s),Jl(t)}function Vo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ii(t,s)}}function Wf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var jf=!1;function ko(){if(jf){var t=As;if(t!==null)throw t}}function Xo(t,i,s,l){jf=!1;var f=t.updateQueue;Za=!1;var d=f.firstBaseUpdate,y=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var H=w,ae=H.next;H.next=null,y===null?d=ae:y.next=ae,y=H;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,w=Se.lastBaseUpdate,w!==y&&(w===null?Se.firstBaseUpdate=ae:w.next=ae,Se.lastBaseUpdate=H))}if(d!==null){var Te=f.baseState;y=0,Se=ae=H=null,w=d;do{var fe=w.lane&-536870913,he=fe!==w.lane;if(he?(Mt&fe)===fe:(l&fe)===fe){fe!==0&&fe===Ts&&(jf=!0),Se!==null&&(Se=Se.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ke=t,ot=w;fe=i;var Kt=s;switch(ot.tag){case 1:if(Ke=ot.payload,typeof Ke=="function"){Te=Ke.call(Kt,Te,fe);break e}Te=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ot.payload,fe=typeof Ke=="function"?Ke.call(Kt,Te,fe):Ke,fe==null)break e;Te=v({},Te,fe);break e;case 2:Za=!0}}fe=w.callback,fe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=f.callbacks,he===null?f.callbacks=[fe]:he.push(fe))}else he={lane:fe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Se===null?(ae=Se=he,H=Te):Se=Se.next=he,y|=fe;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;he=w,w=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);Se===null&&(H=Te),f.baseState=H,f.firstBaseUpdate=ae,f.lastBaseUpdate=Se,d===null&&(f.shared.lanes=0),ir|=y,t.lanes=y,t.memoizedState=Te}}function jg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function qg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)jg(s[t],i)}var ws=O(null),lc=O(0);function Yg(t,i){t=Ma,te(lc,t),te(ws,i),Ma=t|i.baseLanes}function qf(){te(lc,Ma),te(ws,ws.current)}function Yf(){Ma=lc.current,Z(ws),Z(lc)}var ci=O(null),Mi=null;function $a(t){var i=t.alternate;te(hn,hn.current&1),te(ci,t),Mi===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(Mi=t)}function Kf(t){te(hn,hn.current),te(ci,t),Mi===null&&(Mi=t)}function Kg(t){t.tag===22?(te(hn,hn.current),te(ci,t),Mi===null&&(Mi=t)):er()}function er(){te(hn,hn.current),te(ci,ci.current)}function ui(t){Z(ci),Mi===t&&(Mi=null),Z(hn)}var hn=O(0);function cc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||th(s)||nh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,gt=null,qt=null,_n=null,uc=!1,Ds=!1,Vr=!1,fc=0,Wo=0,Ns=null,C1=0;function cn(){throw Error(r(321))}function Zf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function Qf(t,i,s,l,f,d){return ma=d,gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=t===null||t.memoizedState===null?L0:dd,Vr=!1,d=s(l,f),Vr=!1,Ds&&(d=Qg(i,s,l,f)),Zg(t),d}function Zg(t){L.H=Yo;var i=qt!==null&&qt.next!==null;if(ma=0,_n=qt=gt=null,uc=!1,Wo=0,Ns=null,i)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&tc(t)&&(xn=!0))}function Qg(t,i,s,l){gt=t;var f=0;do{if(Ds&&(Ns=null),Wo=0,Ds=!1,25<=f)throw Error(r(301));if(f+=1,_n=qt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=U0,d=i(s,l)}while(Ds);return d}function w1(){var t=L.H,i=t.useState()[0];return i=typeof i.then=="function"?jo(i):i,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(gt.flags|=1024),i}function Jf(){var t=fc!==0;return fc=0,t}function $f(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function ed(t){if(uc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uc=!1}ma=0,_n=qt=gt=null,Ds=!1,Wo=fc=0,Ns=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?gt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(qt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=_n===null?gt.memoizedState:_n.next;if(i!==null)_n=i,qt=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},_n===null?gt.memoizedState=_n=t:_n=_n.next=t}return _n}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(t){var i=Wo;return Wo+=1,Ns===null&&(Ns=[]),t=Gg(Ns,t,i),i=gt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?L0:dd),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return jo(t);if(t.$$typeof===F)return Ln(t)}throw Error(r(438,String(t)))}function td(t){var i=null,s=gt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=gt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=dc(),gt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=j;return i.index++,s}function ga(t,i){return typeof i=="function"?i(t):i}function pc(t){var i=pn();return nd(i,qt,t)}function nd(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var y=f.next;f.next=d.next,d.next=y}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var w=y=null,H=null,ae=i,Se=!1;do{var Te=ae.lane&-536870913;if(Te!==ae.lane?(Mt&Te)===Te:(ma&Te)===Te){var fe=ae.revertLane;if(fe===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Te===Ts&&(Se=!0);else if((ma&fe)===fe){ae=ae.next,fe===Ts&&(Se=!0);continue}else Te={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(w=H=Te,y=d):H=H.next=Te,gt.lanes|=fe,ir|=fe;Te=ae.action,Vr&&s(d,Te),d=ae.hasEagerState?ae.eagerState:s(d,Te)}else fe={lane:Te,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(w=H=fe,y=d):H=H.next=fe,gt.lanes|=Te,ir|=Te;ae=ae.next}while(ae!==null&&ae!==i);if(H===null?y=d:H.next=w,!oi(d,t.memoizedState)&&(xn=!0,Se&&(s=As,s!==null)))throw s;t.memoizedState=d,t.baseState=y,t.baseQueue=H,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function id(t){var i=pn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do d=t(d,y.action),y=y.next;while(y!==f);oi(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Jg(t,i,s){var l=gt,f=pn(),d=At;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var y=!oi((qt||f).memoizedState,s);if(y&&(f.memoizedState=s,xn=!0),f=f.queue,sd(t0.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Ls(9,{destroy:void 0},e0.bind(null,l,f,s,i),null),Qt===null)throw Error(r(349));d||(ma&127)!==0||$g(l,i,s)}return s}function $g(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=gt.updateQueue,i===null?(i=dc(),gt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function e0(t,i,s,l){i.value=s,i.getSnapshot=l,n0(i)&&i0(t)}function t0(t,i,s){return s(function(){n0(i)&&i0(t)})}function n0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function i0(t){var i=Ur(t,2);i!==null&&$n(i,t,2)}function ad(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Vr){Ue(!0);try{s()}finally{Ue(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i}function a0(t,i,s,l){return t.baseState=s,nd(t,qt,typeof l=="function"?l:ga)}function D1(t,i,s,l,f){if(vc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};L.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,r0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function r0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=L.T,y={};L.T=y;try{var w=s(f,l),H=L.S;H!==null&&H(y,w),s0(t,i,w)}catch(ae){rd(t,i,ae)}finally{d!==null&&y.types!==null&&(d.types=y.types),L.T=d}}else try{d=s(f,l),s0(t,i,d)}catch(ae){rd(t,i,ae)}}function s0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){o0(t,i,l)},function(l){return rd(t,i,l)}):o0(t,i,s)}function o0(t,i,s){i.status="fulfilled",i.value=s,l0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,r0(t,s)))}function rd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,l0(i),i=i.next;while(i!==l)}t.action=null}function l0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function c0(t,i){return i}function u0(t,i){if(At){var s=Qt.formState;if(s!==null){e:{var l=gt;if(At){if($t){t:{for(var f=$t,d=bi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){$t=Ei(f.nextSibling),l=f.data==="F!";break e}}Ya(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:i},s.queue=l,s=w0.bind(null,gt,l),l.dispatch=s,l=ad(!1),d=fd.bind(null,gt,!1,l.queue),l=kn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=D1.bind(null,gt,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function f0(t){var i=pn();return d0(i,qt,t)}function d0(t,i,s){if(i=nd(t,i,c0)[0],t=pc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=jo(i)}catch(y){throw y===Rs?ac:y}else l=i;i=pn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(gt.flags|=2048,Ls(9,{destroy:void 0},N1.bind(null,f,s),null)),[l,d,t]}function N1(t,i){t.action=i}function h0(t){var i=pn(),s=qt;if(s!==null)return d0(i,s,t);pn(),i=i.memoizedState,s=pn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ls(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=gt.updateQueue,i===null&&(i=dc(),gt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function p0(){return pn().memoizedState}function mc(t,i,s,l){var f=kn();gt.flags|=t,f.memoizedState=Ls(1|i,{destroy:void 0},s,l===void 0?null:l)}function gc(t,i,s,l){var f=pn();l=l===void 0?null:l;var d=f.memoizedState.inst;qt!==null&&l!==null&&Zf(l,qt.memoizedState.deps)?f.memoizedState=Ls(i,d,s,l):(gt.flags|=t,f.memoizedState=Ls(1|i,d,s,l))}function m0(t,i){mc(8390656,8,t,i)}function sd(t,i){gc(2048,8,t,i)}function L1(t){gt.flags|=4;var i=gt.updateQueue;if(i===null)i=dc(),gt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function g0(t){var i=pn().memoizedState;return L1({ref:i,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function v0(t,i){return gc(4,2,t,i)}function _0(t,i){return gc(4,4,t,i)}function x0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function y0(t,i,s){s=s!=null?s.concat([t]):null,gc(4,4,x0.bind(null,i,t),s)}function od(){}function S0(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Zf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function b0(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Zf(i,l[1]))return l[0];if(l=t(),Vr){Ue(!0);try{t()}finally{Ue(!1)}}return s.memoizedState=[l,i],l}function ld(t,i,s){return s===void 0||(ma&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Mv(),gt.lanes|=t,ir|=t,s)}function M0(t,i,s,l){return oi(s,i)?s:ws.current!==null?(t=ld(t,s,l),oi(t,i)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(Mt&261930)===0?(xn=!0,t.memoizedState=s):(t=Mv(),gt.lanes|=t,ir|=t,i)}function E0(t,i,s,l,f){var d=G.p;G.p=d!==0&&8>d?d:8;var y=L.T,w={};L.T=w,fd(t,!1,i,s);try{var H=f(),ae=L.S;if(ae!==null&&ae(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var Se=R1(H,l);qo(t,i,Se,hi(t))}else qo(t,i,l,hi(t))}catch(Te){qo(t,i,{then:function(){},status:"rejected",reason:Te},hi())}finally{G.p=d,y!==null&&w.types!==null&&(y.types=w.types),L.T=y}}function U1(){}function cd(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=T0(t).queue;E0(t,f,i,ne,s===null?U1:function(){return A0(t),s(l)})}function T0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:ne},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function A0(t){var i=T0(t);i.next===null&&(i=t.alternate.memoizedState),qo(t,i.next.queue,{},hi())}function ud(){return Ln(ul)}function R0(){return pn().memoizedState}function C0(){return pn().memoizedState}function O1(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=Qa(s);var l=Ja(i,t,s);l!==null&&($n(l,i,s),Vo(l,i,s)),i={cache:Bf()},t.payload=i;return}i=i.return}}function P1(t,i,s){var l=hi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(t)?D0(i,s):(s=Cf(t,i,s,l),s!==null&&($n(s,t,l),N0(s,i,l)))}function w0(t,i,s){var l=hi();qo(t,i,s,l)}function qo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(t))D0(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,w=d(y,s);if(f.hasEagerState=!0,f.eagerState=w,oi(w,y))return Ql(t,i,f,0),Qt===null&&Zl(),!1}catch{}if(s=Cf(t,i,f,l),s!==null)return $n(s,t,l),N0(s,i,l),!0}return!1}function fd(t,i,s,l){if(l={lane:2,revertLane:kd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},vc(t)){if(i)throw Error(r(479))}else i=Cf(t,s,l,2),i!==null&&$n(i,t,2)}function vc(t){var i=t.alternate;return t===gt||i!==null&&i===gt}function D0(t,i){Ds=uc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function N0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ii(t,s)}}var Yo={readContext:Ln,use:hc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Yo.useEffectEvent=cn;var L0={readContext:Ln,use:hc,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:m0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,mc(4194308,4,x0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return mc(4194308,4,t,i)},useInsertionEffect:function(t,i){mc(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Vr){Ue(!0);try{t()}finally{Ue(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var f=s(i);if(Vr){Ue(!0);try{s(i)}finally{Ue(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=P1.bind(null,gt,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=ad(t);var i=t.queue,s=w0.bind(null,gt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:od,useDeferredValue:function(t,i){var s=kn();return ld(s,t,i)},useTransition:function(){var t=ad(!1);return t=E0.bind(null,gt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=gt,f=kn();if(At){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Qt===null)throw Error(r(349));(Mt&127)!==0||$g(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,m0(t0.bind(null,l,d,t),[t]),l.flags|=2048,Ls(9,{destroy:void 0},e0.bind(null,l,d,s,i),null),s},useId:function(){var t=kn(),i=Qt.identifierPrefix;if(At){var s=Yi,l=qi;s=(l&~(1<<32-ke(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=C1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:ud,useFormState:u0,useActionState:u0,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=fd.bind(null,gt,!0,s),s.dispatch=i,[t,i]},useMemoCache:td,useCacheRefresh:function(){return kn().memoizedState=O1.bind(null,gt)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((Pt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},dd={readContext:Ln,use:hc,useCallback:S0,useContext:Ln,useEffect:sd,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:b0,useReducer:pc,useRef:p0,useState:function(){return pc(ga)},useDebugValue:od,useDeferredValue:function(t,i){var s=pn();return M0(s,qt.memoizedState,t,i)},useTransition:function(){var t=pc(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:jo(t),i]},useSyncExternalStore:Jg,useId:R0,useHostTransitionStatus:ud,useFormState:f0,useActionState:f0,useOptimistic:function(t,i){var s=pn();return a0(s,qt,t,i)},useMemoCache:td,useCacheRefresh:C0};dd.useEffectEvent=g0;var U0={readContext:Ln,use:hc,useCallback:S0,useContext:Ln,useEffect:sd,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:b0,useReducer:id,useRef:p0,useState:function(){return id(ga)},useDebugValue:od,useDeferredValue:function(t,i){var s=pn();return qt===null?ld(s,t,i):M0(s,qt.memoizedState,t,i)},useTransition:function(){var t=id(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:jo(t),i]},useSyncExternalStore:Jg,useId:R0,useHostTransitionStatus:ud,useFormState:h0,useActionState:h0,useOptimistic:function(t,i){var s=pn();return qt!==null?a0(s,qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:td,useCacheRefresh:C0};U0.useEffectEvent=g0;function hd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var pd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=hi(),f=Qa(l);f.payload=i,s!=null&&(f.callback=s),i=Ja(t,f,l),i!==null&&($n(i,t,l),Vo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=hi(),f=Qa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ja(t,f,l),i!==null&&($n(i,t,l),Vo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),l=Qa(s);l.tag=2,i!=null&&(l.callback=i),i=Ja(t,l,s),i!==null&&($n(i,t,s),Vo(i,t,s))}};function O0(t,i,s,l,f,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!Oo(s,l)||!Oo(f,d):!0}function P0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&pd.enqueueReplaceState(i,i.state,null)}function kr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function I0(t){Kl(t)}function z0(t){console.error(t)}function F0(t){Kl(t)}function _c(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function B0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function md(t,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(t,i)},s}function H0(t){return t=Qa(t),t.tag=3,t}function G0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){B0(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){B0(i,s,l),typeof f!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function I1(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Es(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Dc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===rc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Hd(t,l,f)),!1;case 22:return s.flags|=65536,l===rc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Hd(t,l,f)),!1}throw Error(r(435,s.tag))}return Hd(t,l,f),Dc(),!1}if(At)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Of&&(t=Error(r(422),{cause:l}),zo(xi(t,s)))):(l!==Of&&(i=Error(r(423),{cause:l}),zo(xi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=xi(l,s),f=md(t.stateNode,l,f),Wf(t,f),un!==4&&(un=2)),!1;var d=Error(r(520),{cause:l});if(d=xi(d,s),nl===null?nl=[d]:nl.push(d),un!==4&&(un=2),i===null)return!0;l=xi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=md(s.stateNode,l,t),Wf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=H0(f),G0(f,t,s,l),Wf(s,f),!1}s=s.return}while(s!==null);return!1}var gd=Error(r(461)),xn=!1;function Un(t,i,s,l){i.child=t===null?Wg(i,null,s,l):Gr(i,t.child,s,l)}function V0(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var y={};for(var w in l)w!=="ref"&&(y[w]=l[w])}else y=l;return zr(i),l=Qf(t,i,s,y,d,f),w=Jf(),t!==null&&!xn?($f(t,i,f),va(t,i,f)):(At&&w&&Lf(i),i.flags|=1,Un(t,i,l,f),i.child)}function k0(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!wf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,X0(t,i,d,l,f)):(t=$l(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Ed(t,f)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(y,l)&&t.ref===i.ref)return va(t,i,f)}return i.flags|=1,t=fa(d,l),t.ref=i.ref,t.return=i,i.child=t}function X0(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(Oo(d,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=d,Ed(t,f))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,va(t,i,f)}return vd(t,i,s,l,f)}function W0(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return j0(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(i,d!==null?d.cachePool:null),d!==null?Yg(i,d):qf(),Kg(i);else return l=i.lanes=536870912,j0(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(ic(i,d.cachePool),Yg(i,d),er(),i.memoizedState=null):(t!==null&&ic(i,null),qf(),er());return Un(t,i,f,s),i.child}function Ko(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function j0(t,i,s,l,f){var d=Gf();return d=d===null?null:{parent:vn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ic(i,null),qf(),Kg(i),t!==null&&Es(t,i,l,!0),i.childLanes=f,null}function xc(t,i){return i=Sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function q0(t,i,s){return Gr(i,t.child,null,s),t=xc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function z1(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(At){if(l.mode==="hidden")return t=xc(i,l),i.lanes=536870912,Ko(null,t);if(Kf(i),(t=$t)?(t=r_(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ja!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=Dg(t),s.return=i,i.child=s,Nn=i,$t=null)):t=null,t===null)throw Ya(i);return i.lanes=536870912,null}return xc(i,l)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Kf(i),f)if(i.flags&256)i.flags&=-257,i=q0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(xn||Es(t,i,s,!1),f=(s&t.childLanes)!==0,xn||f){if(l=Qt,l!==null&&(y=ai(l,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,Ur(t,y),$n(l,t,y),gd;Dc(),i=q0(t,i,s)}else t=d.treeContext,$t=Ei(y.nextSibling),Nn=i,At=!0,qa=null,bi=!1,t!==null&&Ug(i,t),i=xc(i,l),i.flags|=4096;return i}return t=fa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function yc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function vd(t,i,s,l,f){return zr(i),s=Qf(t,i,s,l,void 0,f),l=Jf(),t!==null&&!xn?($f(t,i,f),va(t,i,f)):(At&&l&&Lf(i),i.flags|=1,Un(t,i,s,f),i.child)}function Y0(t,i,s,l,f,d){return zr(i),i.updateQueue=null,s=Qg(i,l,s,f),Zg(t),l=Jf(),t!==null&&!xn?($f(t,i,d),va(t,i,d)):(At&&l&&Lf(i),i.flags|=1,Un(t,i,s,d),i.child)}function K0(t,i,s,l,f){if(zr(i),i.stateNode===null){var d=ys,y=s.contextType;typeof y=="object"&&y!==null&&(d=Ln(y)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=pd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},kf(i),y=s.contextType,d.context=typeof y=="object"&&y!==null?Ln(y):ys,d.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(hd(i,s,y,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&pd.enqueueReplaceState(d,d.state,null),Xo(i,l,d,f),ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var w=i.memoizedProps,H=kr(s,w);d.props=H;var ae=d.context,Se=s.contextType;y=ys,typeof Se=="object"&&Se!==null&&(y=Ln(Se));var Te=s.getDerivedStateFromProps;Se=typeof Te=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,Se||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||ae!==y)&&P0(i,d,l,y),Za=!1;var fe=i.memoizedState;d.state=fe,Xo(i,l,d,f),ko(),ae=i.memoizedState,w||fe!==ae||Za?(typeof Te=="function"&&(hd(i,s,Te,l),ae=i.memoizedState),(H=Za||O0(i,s,H,l,fe,ae,y))?(Se||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ae),d.props=l,d.state=ae,d.context=y,l=H):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Xf(t,i),y=i.memoizedProps,Se=kr(s,y),d.props=Se,Te=i.pendingProps,fe=d.context,ae=s.contextType,H=ys,typeof ae=="object"&&ae!==null&&(H=Ln(ae)),w=s.getDerivedStateFromProps,(ae=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Te||fe!==H)&&P0(i,d,l,H),Za=!1,fe=i.memoizedState,d.state=fe,Xo(i,l,d,f),ko();var he=i.memoizedState;y!==Te||fe!==he||Za||t!==null&&t.dependencies!==null&&tc(t.dependencies)?(typeof w=="function"&&(hd(i,s,w,l),he=i.memoizedState),(Se=Za||O0(i,s,Se,l,fe,he,H)||t!==null&&t.dependencies!==null&&tc(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,he,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,he,H)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=he),d.props=l,d.state=he,d.context=H,l=Se):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&fe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,yc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Gr(i,t.child,null,f),i.child=Gr(i,null,s,f)):Un(t,i,s,f),i.memoizedState=d.state,t=i.child):t=va(t,i,f),t}function Z0(t,i,s,l){return Pr(),i.flags|=256,Un(t,i,s,l),i.child}var _d={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xd(t){return{baseLanes:t,cachePool:Bg()}}function yd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function Q0(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(At){if(f?$a(i):er(),(t=$t)?(t=r_(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ja!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=Dg(t),s.return=i,i.child=s,Nn=i,$t=null)):t=null,t===null)throw Ya(i);return nh(t)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(er(),f=i.mode,w=Sc({mode:"hidden",children:w},f),l=Or(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=xd(s),l.childLanes=yd(t,y,s),i.memoizedState=_d,Ko(null,l)):($a(i),Sd(i,w))}var H=t.memoizedState;if(H!==null&&(w=H.dehydrated,w!==null)){if(d)i.flags&256?($a(i),i.flags&=-257,i=bd(t,i,s)):i.memoizedState!==null?(er(),i.child=t.child,i.flags|=128,i=null):(er(),w=l.fallback,f=i.mode,l=Sc({mode:"visible",children:l.children},f),w=Or(w,f,s,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Gr(i,t.child,null,s),l=i.child,l.memoizedState=xd(s),l.childLanes=yd(t,y,s),i.memoizedState=_d,i=Ko(null,l));else if($a(i),nh(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var ae=y.dgst;y=ae,l=Error(r(419)),l.stack="",l.digest=y,zo({value:l,source:null,stack:null}),i=bd(t,i,s)}else if(xn||Es(t,i,s,!1),y=(s&t.childLanes)!==0,xn||y){if(y=Qt,y!==null&&(l=ai(y,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,Ur(t,l),$n(y,t,l),gd;th(w)||Dc(),i=bd(t,i,s)}else th(w)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,$t=Ei(w.nextSibling),Nn=i,At=!0,qa=null,bi=!1,t!==null&&Ug(i,t),i=Sd(i,l.children),i.flags|=4096);return i}return f?(er(),w=l.fallback,f=i.mode,H=t.child,ae=H.sibling,l=fa(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,ae!==null?w=fa(ae,w):(w=Or(w,f,s,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Ko(null,l),l=i.child,w=t.child.memoizedState,w===null?w=xd(s):(f=w.cachePool,f!==null?(H=vn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=Bg(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=yd(t,y,s),i.memoizedState=_d,Ko(t.child,l)):($a(i),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function Sd(t,i){return i=Sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Sc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function bd(t,i,s){return Gr(i,t.child,null,s),t=Sd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function J0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),zf(t.return,i,s)}function Md(t,i,s,l,f,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=d)}function $0(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var y=hn.current,w=(y&2)!==0;if(w?(y=y&1|2,i.flags|=128):y&=1,te(hn,y),Un(t,i,l,s),l=At?Io:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&J0(t,s,i);else if(t.tag===19)J0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Md(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&cc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Md(i,!0,s,null,d,l);break;case"together":Md(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Es(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=fa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ed(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&tc(t)))}function F1(t,i,s){switch(i.tag){case 3:de(i,i.stateNode.containerInfo),Ka(i,vn,t.memoizedState.cache),Pr();break;case 27:case 5:Je(i);break;case 4:de(i,i.stateNode.containerInfo);break;case 10:Ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Kf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?($a(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Q0(t,i,s):($a(i),t=va(t,i,s),t!==null?t.sibling:null);$a(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Es(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return $0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te(hn,hn.current),l)break;return null;case 22:return i.lanes=0,W0(t,i,s,i.pendingProps);case 24:Ka(i,vn,t.memoizedState.cache)}return va(t,i,s)}function ev(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Ed(t,s)&&(i.flags&128)===0)return xn=!1,F1(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,At&&(i.flags&1048576)!==0&&Lg(i,Io,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Br(i.elementType),i.type=t,typeof t=="function")wf(t)?(l=kr(t,l),i.tag=1,i=K0(null,i,t,l,s)):(i.tag=0,i=vd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===R){i.tag=11,i=V0(null,i,t,l,s);break e}else if(f===B){i.tag=14,i=k0(null,i,t,l,s);break e}}throw i=me(t)||t,Error(r(306,i,""))}}return i;case 0:return vd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=kr(l,i.pendingProps),K0(t,i,l,f,s);case 3:e:{if(de(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Xf(t,i),Xo(i,l,null,s);var y=i.memoizedState;if(l=y.cache,Ka(i,vn,l),l!==d.cache&&Ff(i,[vn],s,!0),ko(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Z0(t,i,l,s);break e}else if(l!==f){f=xi(Error(r(424)),i),zo(f),i=Z0(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$t=Ei(t.firstChild),Nn=i,At=!0,qa=null,bi=!0,s=Wg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Pr(),l===f){i=va(t,i,s);break e}Un(t,i,l,s)}i=i.child}return i;case 26:return yc(t,i),t===null?(s=f_(i.type,null,i.pendingProps,null))?i.memoizedState=s:At||(s=i.type,t=i.pendingProps,l=zc(k.current).createElement(s),l[mn]=i,l[Dn]=t,On(l,s,t),gn(l),i.stateNode=l):i.memoizedState=f_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Je(i),t===null&&At&&(l=i.stateNode=l_(i.type,i.pendingProps,k.current),Nn=i,bi=!0,f=$t,lr(i.type)?(ih=f,$t=Ei(l.firstChild)):$t=f),Un(t,i,i.pendingProps.children,s),yc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&At&&((f=l=$t)&&(l=pM(l,i.type,i.pendingProps,bi),l!==null?(i.stateNode=l,Nn=i,$t=Ei(l.firstChild),bi=!1,f=!0):f=!1),f||Ya(i)),Je(i),f=i.type,d=i.pendingProps,y=t!==null?t.memoizedProps:null,l=d.children,Jd(f,d)?l=null:y!==null&&Jd(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=Qf(t,i,w1,null,null,s),ul._currentValue=f),yc(t,i),Un(t,i,l,s),i.child;case 6:return t===null&&At&&((t=s=$t)&&(s=mM(s,i.pendingProps,bi),s!==null?(i.stateNode=s,Nn=i,$t=null,t=!0):t=!1),t||Ya(i)),null;case 13:return Q0(t,i,s);case 4:return de(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Gr(i,null,l,s):Un(t,i,l,s),i.child;case 11:return V0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ka(i,i.type,l.value),Un(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,zr(i),f=Ln(f),l=l(f),i.flags|=1,Un(t,i,l,s),i.child;case 14:return k0(t,i,i.type,i.pendingProps,s);case 15:return X0(t,i,i.type,i.pendingProps,s);case 19:return $0(t,i,s);case 31:return z1(t,i,s);case 22:return W0(t,i,s,i.pendingProps);case 24:return zr(i),l=Ln(vn),t===null?(f=Gf(),f===null&&(f=Qt,d=Bf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},kf(i),Ka(i,vn,f)):((t.lanes&s)!==0&&(Xf(t,i),Xo(i,null,null,s),ko()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ka(i,vn,l)):(l=d.cache,Ka(i,vn,l),l!==f.cache&&Ff(i,[vn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function _a(t){t.flags|=4}function Td(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Rv())t.flags|=8192;else throw Hr=rc,Vf}else t.flags&=-16777217}function tv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!g_(i))if(Rv())t.flags|=8192;else throw Hr=rc,Vf}function bc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Re():536870912,t.lanes|=i,Is|=i)}function Zo(t,i){if(!At)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function B1(t,i,s){var l=i.pendingProps;switch(Uf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),pa(vn),Ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ms(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pf())),en(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(_a(i),d!==null?(en(i),tv(i,d)):(en(i),Td(i,f,null,l,s))):d?d!==t.memoizedState?(_a(i),en(i),tv(i,d)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&_a(i),en(i),Td(i,f,t,l,s)),null;case 27:if(Be(i),s=k.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}t=Q.current,Ms(i)?Og(i):(t=l_(f,l,s),i.stateNode=t,_a(i))}return en(i),null;case 5:if(Be(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}if(d=Q.current,Ms(i))Og(i);else{var y=zc(k.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}d[mn]=i,d[Dn]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;e:switch(On(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&_a(i)}}return en(i),Td(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=k.current,Ms(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Qv(t.nodeValue,s)),t||Ya(i,!0)}else t=zc(t).createTextNode(l),t[mn]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ms(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(r(558))}return en(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ms(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),f=!1}else f=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),bc(i,i.updateQueue),en(i),null);case 4:return Ce(),t===null&&qd(i.stateNode.containerInfo),en(i),null;case 10:return pa(i.type),en(i),null;case 19:if(Z(hn),l=i.memoizedState,l===null)return en(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Zo(l,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=cc(t),d!==null){for(i.flags|=128,Zo(l,!1),t=d.updateQueue,i.updateQueue=t,bc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)wg(s,t),s=s.sibling;return te(hn,hn.current&1|2),At&&da(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&jt()>Rc&&(i.flags|=128,f=!0,Zo(l,!1),i.lanes=4194304)}else{if(!f)if(t=cc(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,bc(i,t),Zo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!At)return en(i),null}else 2*jt()-l.renderingStartTime>Rc&&s!==536870912&&(i.flags|=128,f=!0,Zo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=jt(),t.sibling=null,s=hn.current,te(hn,f?s&1|2:s&1),At&&da(i,l.treeForkCount),t):(en(i),null);case 22:case 23:return ui(i),Yf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&bc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Z(Fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(vn),en(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function H1(t,i){switch(Uf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(vn),Ce(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Be(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(r(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Z(hn),null;case 4:return Ce(),null;case 10:return pa(i.type),null;case 22:case 23:return ui(i),Yf(),t!==null&&Z(Fr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function nv(t,i){switch(Uf(i),i.tag){case 3:pa(vn),Ce();break;case 26:case 27:case 5:Be(i);break;case 4:Ce();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:Z(hn);break;case 10:pa(i.type);break;case 22:case 23:ui(i),Yf(),t!==null&&Z(Fr);break;case 24:pa(vn)}}function Qo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,y=s.inst;l=d(),y.destroy=l}s=s.next}while(s!==f)}}catch(w){Xt(i,i.return,w)}}function tr(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var y=l.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,f=i;var H=s,ae=w;try{ae()}catch(Se){Xt(f,H,Se)}}}l=l.next}while(l!==d)}}catch(Se){Xt(i,i.return,Se)}}function iv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{qg(i,s)}catch(l){Xt(t,t.return,l)}}}function av(t,i,s){s.props=kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Xt(t,i,l)}}function Jo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Xt(t,i,f)}}function Ki(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xt(t,i,f)}else s.current=null}function rv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xt(t,t.return,f)}}function Ad(t,i,s){try{var l=t.stateNode;lM(l,t.type,s,i),l[Dn]=i}catch(f){Xt(t,t.return,f)}}function sv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Rd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(l===27&&lr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Cd(t,i,s),t=t.sibling;t!==null;)Cd(t,i,s),t=t.sibling}function Mc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&lr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mc(t,i,s),t=t.sibling;t!==null;)Mc(t,i,s),t=t.sibling}function ov(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);On(i,l,s),i[mn]=t,i[Dn]=s}catch(d){Xt(t,t.return,d)}}var xa=!1,yn=!1,wd=!1,lv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function G1(t,i){if(t=t.containerInfo,Zd=Xc,t=yg(t),bf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var y=0,w=-1,H=-1,ae=0,Se=0,Te=t,fe=null;t:for(;;){for(var he;Te!==s||f!==0&&Te.nodeType!==3||(w=y+f),Te!==d||l!==0&&Te.nodeType!==3||(H=y+l),Te.nodeType===3&&(y+=Te.nodeValue.length),(he=Te.firstChild)!==null;)fe=Te,Te=he;for(;;){if(Te===t)break t;if(fe===s&&++ae===f&&(w=y),fe===d&&++Se===l&&(H=y),(he=Te.nextSibling)!==null)break;Te=fe,fe=Te.parentNode}Te=he}s=w===-1||H===-1?null:{start:w,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qd={focusedElem:t,selectionRange:s},Xc=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Ke=kr(s.type,f);t=l.getSnapshotBeforeUpdate(Ke,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Xt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)eh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function cv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),l&4&&Qo(5,s);break;case 1:if(Sa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){Xt(s,s.return,y)}else{var f=kr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Xt(s,s.return,y)}}l&64&&iv(s),l&512&&Jo(s,s.return);break;case 3:if(Sa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{qg(t,i)}catch(y){Xt(s,s.return,y)}}break;case 27:i===null&&l&4&&ov(s);case 26:case 5:Sa(t,s),i===null&&l&4&&rv(s),l&512&&Jo(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),l&4&&dv(t,s);break;case 13:Sa(t,s),l&4&&hv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Z1.bind(null,s),gM(t,s))));break;case 22:if(l=s.memoizedState!==null||xa,!l){i=i!==null&&i.memoizedState!==null||yn,f=xa;var d=yn;xa=l,(yn=i)&&!d?ba(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=f,yn=d}break;case 30:break;default:Sa(t,s)}}function uv(t){var i=t.alternate;i!==null&&(t.alternate=null,uv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Va(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Kn=!1;function ya(t,i,s){for(s=s.child;s!==null;)fv(t,i,s),s=s.sibling}function fv(t,i,s){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(_e,s)}catch{}switch(s.tag){case 26:yn||Ki(s,i),ya(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Ki(s,i);var l=on,f=Kn;lr(s.type)&&(on=s.stateNode,Kn=!1),ya(t,i,s),ol(s.stateNode),on=l,Kn=f;break;case 5:yn||Ki(s,i);case 6:if(l=on,f=Kn,on=null,ya(t,i,s),on=l,Kn=f,on!==null)if(Kn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){Xt(s,i,d)}else try{on.removeChild(s.stateNode)}catch(d){Xt(s,i,d)}break;case 18:on!==null&&(Kn?(t=on,i_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xs(t)):i_(on,s.stateNode));break;case 4:l=on,f=Kn,on=s.stateNode.containerInfo,Kn=!0,ya(t,i,s),on=l,Kn=f;break;case 0:case 11:case 14:case 15:tr(2,s,i),yn||tr(4,s,i),ya(t,i,s);break;case 1:yn||(Ki(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&av(s,i,l)),ya(t,i,s);break;case 21:ya(t,i,s);break;case 22:yn=(l=yn)||s.memoizedState!==null,ya(t,i,s),yn=l;break;default:ya(t,i,s)}}function dv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(s){Xt(i,i.return,s)}}}function hv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(s){Xt(i,i.return,s)}}function V1(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new lv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new lv),i;default:throw Error(r(435,t.tag))}}function Ec(t,i){var s=V1(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Q1.bind(null,t,l);l.then(f,f)}})}function Zn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,y=i,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(lr(w.type)){on=w.stateNode,Kn=!1;break e}break;case 5:on=w.stateNode,Kn=!1;break e;case 3:case 4:on=w.stateNode.containerInfo,Kn=!0;break e}w=w.return}if(on===null)throw Error(r(160));fv(d,y,f),on=null,Kn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)pv(i,t),i=i.sibling}var Oi=null;function pv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(i,t),Qn(t),l&4&&(tr(3,t,t.return),Qo(3,t),tr(5,t,t.return));break;case 1:Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),l&64&&xa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Oi;if(Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ga]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),On(d,l,s),d[mn]=t,gn(d),l=d;break e;case"link":var y=p_("link","href",f).get(l+(s.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(w,1);break t}}d=f.createElement(l),On(d,l,s),f.head.appendChild(d);break;case"meta":if(y=p_("meta","content",f).get(l+(s.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(w,1);break t}}d=f.createElement(l),On(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[mn]=t,gn(d),l=d}t.stateNode=l}else m_(f,t.type,t.stateNode);else t.stateNode=h_(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?m_(f,t.type,t.stateNode):h_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ad(t,t.memoizedProps,s.memoizedProps)}break;case 27:Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),s!==null&&l&4&&Ad(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Zn(i,t),Qn(t),l&512&&(yn||s===null||Ki(s,s.return)),t.flags&32){f=t.stateNode;try{si(f,"")}catch(Ke){Xt(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Ad(t,f,s!==null?s.memoizedProps:f)),l&1024&&(wd=!0);break;case 6:if(Zn(i,t),Qn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ke){Xt(t,t.return,Ke)}}break;case 3:if(Hc=null,f=Oi,Oi=Fc(i.containerInfo),Zn(i,t),Oi=f,Qn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xs(i.containerInfo)}catch(Ke){Xt(t,t.return,Ke)}wd&&(wd=!1,mv(t));break;case 4:l=Oi,Oi=Fc(t.stateNode.containerInfo),Zn(i,t),Qn(t),Oi=l;break;case 12:Zn(i,t),Qn(t);break;case 31:Zn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ec(t,l)));break;case 13:Zn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=jt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ec(t,l)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ae=xa,Se=yn;if(xa=ae||f,yn=Se||H,Zn(i,t),yn=Se,xa=ae,Qn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||xa||yn||Xr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(d=H.stateNode,f)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=H.stateNode;var Te=H.memoizedProps.style,fe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;w.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Ke){Xt(H,H.return,Ke)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(Ke){Xt(H,H.return,Ke)}}}else if(i.tag===18){if(s===null){H=i;try{var he=H.stateNode;f?a_(he,!0):a_(H.stateNode,!1)}catch(Ke){Xt(H,H.return,Ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ec(t,s))));break;case 19:Zn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ec(t,l)));break;case 30:break;case 21:break;default:Zn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(sv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=Rd(t);Mc(t,d,f);break;case 5:var y=s.stateNode;s.flags&32&&(si(y,""),s.flags&=-33);var w=Rd(t);Mc(t,w,y);break;case 3:case 4:var H=s.stateNode.containerInfo,ae=Rd(t);Cd(t,ae,H);break;default:throw Error(r(161))}}catch(Se){Xt(t,t.return,Se)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function mv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;mv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)cv(t,i.alternate,i),i=i.sibling}function Xr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:tr(4,i,i.return),Xr(i);break;case 1:Ki(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&av(i,i.return,s),Xr(i);break;case 27:ol(i.stateNode);case 26:case 5:Ki(i,i.return),Xr(i);break;case 22:i.memoizedState===null&&Xr(i);break;case 30:Xr(i);break;default:Xr(i)}t=t.sibling}}function ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:ba(f,d,s),Qo(4,d);break;case 1:if(ba(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){Xt(l,l.return,ae)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)jg(H[f],w)}catch(ae){Xt(l,l.return,ae)}}s&&y&64&&iv(d),Jo(d,d.return);break;case 27:ov(d);case 26:case 5:ba(f,d,s),s&&l===null&&y&4&&rv(d),Jo(d,d.return);break;case 12:ba(f,d,s);break;case 31:ba(f,d,s),s&&y&4&&dv(f,d);break;case 13:ba(f,d,s),s&&y&4&&hv(f,d);break;case 22:d.memoizedState===null&&ba(f,d,s),Jo(d,d.return);break;case 30:break;default:ba(f,d,s)}i=i.sibling}}function Dd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Fo(s))}function Nd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t))}function Pi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)gv(t,i,s,l),i=i.sibling}function gv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,l),f&2048&&Qo(9,i);break;case 1:Pi(t,i,s,l);break;case 3:Pi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t)));break;case 12:if(f&2048){Pi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Xt(i,i.return,H)}}else Pi(t,i,s,l);break;case 31:Pi(t,i,s,l);break;case 13:Pi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Pi(t,i,s,l):$o(t,i):d._visibility&2?Pi(t,i,s,l):(d._visibility|=2,Us(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Dd(y,i);break;case 24:Pi(t,i,s,l),f&2048&&Nd(i.alternate,i);break;default:Pi(t,i,s,l)}}function Us(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,y=i,w=s,H=l,ae=y.flags;switch(y.tag){case 0:case 11:case 15:Us(d,y,w,H,f),Qo(8,y);break;case 23:break;case 22:var Se=y.stateNode;y.memoizedState!==null?Se._visibility&2?Us(d,y,w,H,f):$o(d,y):(Se._visibility|=2,Us(d,y,w,H,f)),f&&ae&2048&&Dd(y.alternate,y);break;case 24:Us(d,y,w,H,f),f&&ae&2048&&Nd(y.alternate,y);break;default:Us(d,y,w,H,f)}i=i.sibling}}function $o(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:$o(s,l),f&2048&&Dd(l.alternate,l);break;case 24:$o(s,l),f&2048&&Nd(l.alternate,l);break;default:$o(s,l)}i=i.sibling}}var el=8192;function Os(t,i,s){if(t.subtreeFlags&el)for(t=t.child;t!==null;)vv(t,i,s),t=t.sibling}function vv(t,i,s){switch(t.tag){case 26:Os(t,i,s),t.flags&el&&t.memoizedState!==null&&CM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Os(t,i,s);break;case 3:case 4:var l=Oi;Oi=Fc(t.stateNode.containerInfo),Os(t,i,s),Oi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=el,el=16777216,Os(t,i,s),el=l):Os(t,i,s));break;default:Os(t,i,s)}}function _v(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function tl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,yv(l,t)}_v(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xv(t),t=t.sibling}function xv(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&tr(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Tc(t)):tl(t);break;default:tl(t)}}function Tc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,yv(l,t)}_v(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:tr(8,i,i.return),Tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(i));break;default:Tc(i)}t=t.sibling}}function yv(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:tr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Fo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Rn=l;else e:for(s=t;Rn!==null;){l=Rn;var f=l.sibling,d=l.return;if(uv(l),l===s){Rn=null;break e}if(f!==null){f.return=d,Rn=f;break e}Rn=d}}}var k1={getCacheForType:function(t){var i=Ln(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},X1=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Qt=null,St=null,Mt=0,kt=0,fi=null,nr=!1,Ps=!1,Ld=!1,Ma=0,un=0,ir=0,Wr=0,Ud=0,di=0,Is=0,nl=null,Jn=null,Od=!1,Ac=0,Sv=0,Rc=1/0,Cc=null,ar=null,En=0,rr=null,zs=null,Ea=0,Pd=0,Id=null,bv=null,il=0,zd=null;function hi(){return(Pt&2)!==0&&Mt!==0?Mt&-Mt:L.T!==null?kd():Ao()}function Mv(){if(di===0)if((Mt&536870912)===0||At){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function $n(t,i,s){(t===Qt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),sr(t,Mt,di,!1)),je(t,s),((Pt&2)===0||t!==Qt)&&(t===Qt&&((Pt&2)===0&&(Wr|=s),un===4&&sr(t,Mt,di,!1)),Zi(t))}function Ev(t,i,s){if((Pt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Oe(t,i),f=l?q1(t,i):Bd(t,i,!0),d=l;do{if(f===0){Ps&&!l&&sr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!W1(s)){f=Bd(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var w=t;f=nl;var H=w.current.memoizedState.isDehydrated;if(H&&(Fs(w,y).flags|=256),y=Bd(w,y,!1),y!==2){if(Ld&&!H){w.errorRecoveryDisabledLanes|=d,Wr|=d,f=4;break e}d=Jn,Jn=f,d!==null&&(Jn===null?Jn=d:Jn.push.apply(Jn,d))}f=y}if(d=!1,f!==2)continue}}if(f===1){Fs(t,0),sr(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:sr(l,i,di,!nr);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Ac+300-jt(),10<f)){if(sr(l,i,di,!nr),be(l,0,!0)!==0)break e;Ea=i,l.timeoutHandle=t_(Tv.bind(null,l,s,Jn,Cc,Od,i,di,Wr,Is,nr,d,"Throttled",-0,0),f);break e}Tv(l,s,Jn,Cc,Od,i,di,Wr,Is,nr,d,null,-0,0)}}break}while(!0);Zi(t)}function Tv(t,i,s,l,f,d,y,w,H,ae,Se,Te,fe,he){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},vv(i,d,Te);var Ke=(d&62914560)===d?Ac-jt():(d&4194048)===d?Sv-jt():0;if(Ke=wM(Te,Ke),Ke!==null){Ea=d,t.cancelPendingCommit=Ke(Uv.bind(null,t,i,d,s,l,f,y,w,H,Se,Te,null,fe,he)),sr(t,d,y,!ae);return}}Uv(t,i,d,s,l,f,y,w,H)}function W1(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!oi(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i,s,l){i&=~Ud,i&=~Wr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-ke(f),y=1<<d;l[d]=-1,f&=~y}s!==0&&Bt(t,s,i)}function wc(){return(Pt&6)===0?(al(0),!1):!0}function Fd(){if(St!==null){if(kt===0)var t=St.return;else t=St,ha=Ir=null,ed(t),Cs=null,Ho=0,t=St;for(;t!==null;)nv(t.alternate,t),t=t.return;St=null}}function Fs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,fM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Fd(),Qt=t,St=s=fa(t.current,null),Mt=i,kt=0,fi=null,nr=!1,Ps=Oe(t,i),Ld=!1,Is=di=Ud=Wr=ir=un=0,Jn=nl=null,Od=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ke(l),d=1<<f;i|=t[f],l&=~d}return Ma=i,Zl(),s}function Av(t,i){gt=null,L.H=Yo,i===Rs||i===ac?(i=Vg(),kt=3):i===Vf?(i=Vg(),kt=4):kt=i===gd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,St===null&&(un=1,_c(t,xi(i,t.current)))}function Rv(){var t=ci.current;return t===null?!0:(Mt&4194048)===Mt?Mi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===Mi:!1}function Cv(){var t=L.H;return L.H=Yo,t===null?Yo:t}function wv(){var t=L.A;return L.A=k1,t}function Dc(){un=4,nr||(Mt&4194048)!==Mt&&ci.current!==null||(Ps=!0),(ir&134217727)===0&&(Wr&134217727)===0||Qt===null||sr(Qt,Mt,di,!1)}function Bd(t,i,s){var l=Pt;Pt|=2;var f=Cv(),d=wv();(Qt!==t||Mt!==i)&&(Cc=null,Fs(t,i)),i=!1;var y=un;e:do try{if(kt!==0&&St!==null){var w=St,H=fi;switch(kt){case 8:Fd(),y=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var ae=kt;if(kt=0,fi=null,Bs(t,w,H,ae),s&&Ps){y=0;break e}break;default:ae=kt,kt=0,fi=null,Bs(t,w,H,ae)}}j1(),y=un;break}catch(Se){Av(t,Se)}while(!0);return i&&t.shellSuspendCounter++,ha=Ir=null,Pt=l,L.H=f,L.A=d,St===null&&(Qt=null,Mt=0,Zl()),y}function j1(){for(;St!==null;)Dv(St)}function q1(t,i){var s=Pt;Pt|=2;var l=Cv(),f=wv();Qt!==t||Mt!==i?(Cc=null,Rc=jt()+500,Fs(t,i)):Ps=Oe(t,i);e:do try{if(kt!==0&&St!==null){i=St;var d=fi;t:switch(kt){case 1:kt=0,fi=null,Bs(t,i,d,1);break;case 2:case 9:if(Hg(d)){kt=0,fi=null,Nv(i);break}i=function(){kt!==2&&kt!==9||Qt!==t||(kt=7),Zi(t)},d.then(i,i);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Hg(d)?(kt=0,fi=null,Nv(i)):(kt=0,fi=null,Bs(t,i,d,7));break;case 5:var y=null;switch(St.tag){case 26:y=St.memoizedState;case 5:case 27:var w=St;if(y?g_(y):w.stateNode.complete){kt=0,fi=null;var H=w.sibling;if(H!==null)St=H;else{var ae=w.return;ae!==null?(St=ae,Nc(ae)):St=null}break t}}kt=0,fi=null,Bs(t,i,d,5);break;case 6:kt=0,fi=null,Bs(t,i,d,6);break;case 8:Fd(),un=6;break e;default:throw Error(r(462))}}Y1();break}catch(Se){Av(t,Se)}while(!0);return ha=Ir=null,L.H=l,L.A=f,Pt=s,St!==null?0:(Qt=null,Mt=0,Zl(),un)}function Y1(){for(;St!==null&&!ln();)Dv(St)}function Dv(t){var i=ev(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,i===null?Nc(t):St=i}function Nv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Y0(s,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=Y0(s,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:ed(i);default:nv(s,i),i=St=wg(i,Ma),i=ev(s,i,Ma)}t.memoizedProps=t.pendingProps,i===null?Nc(t):St=i}function Bs(t,i,s,l){ha=Ir=null,ed(i),Cs=null,Ho=0;var f=i.return;try{if(I1(t,f,i,s,Mt)){un=1,_c(t,xi(s,t.current)),St=null;return}}catch(d){if(f!==null)throw St=f,d;un=1,_c(t,xi(s,t.current)),St=null;return}i.flags&32768?(At||l===1?t=!0:Ps||(Mt&536870912)!==0?t=!1:(nr=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),Lv(i,t)):Nc(i)}function Nc(t){var i=t;do{if((i.flags&32768)!==0){Lv(i,nr);return}t=i.return;var s=B1(i.alternate,i,Ma);if(s!==null){St=s;return}if(i=i.sibling,i!==null){St=i;return}St=i=t}while(i!==null);un===0&&(un=5)}function Lv(t,i){do{var s=H1(t.alternate,t);if(s!==null){s.flags&=32767,St=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){St=t;return}St=t=s}while(t!==null);un=6,St=null}function Uv(t,i,s,l,f,d,y,w,H){t.cancelPendingCommit=null;do Lc();while(En!==0);if((Pt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Rf,an(t,s,d,y,w,H),t===Qt&&(St=Qt=null,Mt=0),zs=i,rr=t,Ea=s,Pd=d,Id=f,bv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,J1(ee,function(){return Fv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,f=G.p,G.p=2,y=Pt,Pt|=4;try{G1(t,i,s)}finally{Pt=y,G.p=f,L.T=l}}En=1,Ov(),Pv(),Iv()}}function Ov(){if(En===1){En=0;var t=rr,i=zs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var l=G.p;G.p=2;var f=Pt;Pt|=4;try{pv(i,t);var d=Qd,y=yg(t.containerInfo),w=d.focusedElem,H=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&xg(w.ownerDocument.documentElement,w)){if(H!==null&&bf(w)){var ae=H.start,Se=H.end;if(Se===void 0&&(Se=ae),"selectionStart"in w)w.selectionStart=ae,w.selectionEnd=Math.min(Se,w.value.length);else{var Te=w.ownerDocument||document,fe=Te&&Te.defaultView||window;if(fe.getSelection){var he=fe.getSelection(),Ke=w.textContent.length,ot=Math.min(H.start,Ke),Kt=H.end===void 0?ot:Math.min(H.end,Ke);!he.extend&&ot>Kt&&(y=Kt,Kt=ot,ot=y);var J=_g(w,ot),X=_g(w,Kt);if(J&&X&&(he.rangeCount!==1||he.anchorNode!==J.node||he.anchorOffset!==J.offset||he.focusNode!==X.node||he.focusOffset!==X.offset)){var ie=Te.createRange();ie.setStart(J.node,J.offset),he.removeAllRanges(),ot>Kt?(he.addRange(ie),he.extend(X.node,X.offset)):(ie.setEnd(X.node,X.offset),he.addRange(ie))}}}}for(Te=[],he=w;he=he.parentNode;)he.nodeType===1&&Te.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Te.length;w++){var Me=Te[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Xc=!!Zd,Qd=Zd=null}finally{Pt=f,G.p=l,L.T=s}}t.current=i,En=2}}function Pv(){if(En===2){En=0;var t=rr,i=zs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var l=G.p;G.p=2;var f=Pt;Pt|=4;try{cv(t,i.alternate,i)}finally{Pt=f,G.p=l,L.T=s}}En=3}}function Iv(){if(En===4||En===3){En=0,K();var t=rr,i=zs,s=Ea,l=bv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,zs=rr=null,zv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ar=null),To(s),i=i.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(_e,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,f=G.p,G.p=2,L.T=null;try{for(var d=t.onRecoverableError,y=0;y<l.length;y++){var w=l[y];d(w.value,{componentStack:w.stack})}}finally{L.T=i,G.p=f}}(Ea&3)!==0&&Lc(),Zi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===zd?il++:(il=0,zd=t):il=0,al(0)}}function zv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Fo(i)))}function Lc(){return Ov(),Pv(),Iv(),Fv()}function Fv(){if(En!==5)return!1;var t=rr,i=Pd;Pd=0;var s=To(Ea),l=L.T,f=G.p;try{G.p=32>s?32:s,L.T=null,s=Id,Id=null;var d=rr,y=Ea;if(En=0,zs=rr=null,Ea=0,(Pt&6)!==0)throw Error(r(331));var w=Pt;if(Pt|=4,xv(d.current),gv(d,d.current,y,s),Pt=w,al(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(_e,d)}catch{}return!0}finally{G.p=f,L.T=l,zv(t,i)}}function Bv(t,i,s){i=xi(s,i),i=md(t.stateNode,i,2),t=Ja(t,i,2),t!==null&&(je(t,2),Zi(t))}function Xt(t,i,s){if(t.tag===3)Bv(t,t,s);else for(;i!==null;){if(i.tag===3){Bv(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=xi(s,t),s=H0(2),l=Ja(i,s,2),l!==null&&(G0(s,l,i,t),je(l,2),Zi(l));break}}i=i.return}}function Hd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new X1;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Ld=!0,f.add(s),t=K1.bind(null,t,i,s),i.then(t,t))}function K1(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Qt===t&&(Mt&s)===s&&(un===4||un===3&&(Mt&62914560)===Mt&&300>jt()-Ac?(Pt&2)===0&&Fs(t,0):Ud|=s,Is===Mt&&(Is=0)),Zi(t)}function Hv(t,i){i===0&&(i=Re()),t=Ur(t,i),t!==null&&(je(t,i),Zi(t))}function Z1(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Hv(t,s)}function Q1(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Hv(t,s)}function J1(t,i){return nn(t,i)}var Uc=null,Hs=null,Gd=!1,Oc=!1,Vd=!1,or=0;function Zi(t){t!==Hs&&t.next===null&&(Hs===null?Uc=Hs=t:Hs=Hs.next=t),Oc=!0,Gd||(Gd=!0,eM())}function al(t,i){if(!Vd&&Oc){Vd=!0;do for(var s=!1,l=Uc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var y=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-ke(42|t)+1)-1,d&=f&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Xv(l,d))}else d=Mt,d=be(l,l===Qt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Oe(l,d)||(s=!0,Xv(l,d));l=l.next}while(s);Vd=!1}}function $1(){Gv()}function Gv(){Oc=Gd=!1;var t=0;or!==0&&uM()&&(t=or);for(var i=jt(),s=null,l=Uc;l!==null;){var f=l.next,d=Vv(l,i);d===0?(l.next=null,s===null?Uc=f:s.next=f,f===null&&(Hs=s)):(s=l,(t!==0||(d&3)!==0)&&(Oc=!0)),l=f}En!==0&&En!==5||al(t),or!==0&&(or=0)}function Vv(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-ke(d),w=1<<y,H=f[y];H===-1?((w&s)===0||(w&l)!==0)&&(f[y]=Ve(w,i)):H<=i&&(t.expiredLanes|=w),d&=~w}if(i=Qt,s=Mt,s=be(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Jt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Oe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Jt(l),To(s)){case 2:case 8:s=M;break;case 32:s=ee;break;case 268435456:s=xe;break;default:s=ee}return l=kv.bind(null,t),s=nn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Jt(l),t.callbackPriority=2,t.callbackNode=null,2}function kv(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Lc()&&t.callbackNode!==s)return null;var l=Mt;return l=be(t,t===Qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ev(t,l,i),Vv(t,jt()),t.callbackNode!=null&&t.callbackNode===s?kv.bind(null,t):null)}function Xv(t,i){if(Lc())return null;Ev(t,i,!0)}function eM(){dM(function(){(Pt&6)!==0?nn(I,$1):Gv()})}function kd(){if(or===0){var t=Ts;t===0&&(t=nt,nt<<=1,(nt&261888)===0&&(nt=256)),or=t}return or}function Wv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function jv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function tM(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=Wv((f[Dn]||null).action),y=l.submitter;y&&(i=(i=y[Dn]||null)?Wv(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var w=new jl("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(or!==0){var H=y?jv(f,y):new FormData(f);cd(s,{pending:!0,data:H,method:f.method,action:d},null,H)}}else typeof d=="function"&&(w.preventDefault(),H=y?jv(f,y):new FormData(f),cd(s,{pending:!0,data:H,method:f.method,action:d},d,H))},currentTarget:f}]})}}for(var Xd=0;Xd<Af.length;Xd++){var Wd=Af[Xd],nM=Wd.toLowerCase(),iM=Wd[0].toUpperCase()+Wd.slice(1);Ui(nM,"on"+iM)}Ui(Mg,"onAnimationEnd"),Ui(Eg,"onAnimationIteration"),Ui(Tg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(x1,"onTransitionRun"),Ui(y1,"onTransitionStart"),Ui(S1,"onTransitionCancel"),Ui(Ag,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function qv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var w=l[y],H=w.instance,ae=w.currentTarget;if(w=w.listener,H!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=ae;try{d(f)}catch(Se){Kl(Se)}f.currentTarget=null,d=H}else for(y=0;y<l.length;y++){if(w=l[y],H=w.instance,ae=w.currentTarget,w=w.listener,H!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=ae;try{d(f)}catch(Se){Kl(Se)}f.currentTarget=null,d=H}}}}function bt(t,i){var s=i[Ar];s===void 0&&(s=i[Ar]=new Set);var l=t+"__bubble";s.has(l)||(Yv(i,t,2,!1),s.add(l))}function jd(t,i,s){var l=0;i&&(l|=4),Yv(s,t,l,i)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function qd(t){if(!t[Pc]){t[Pc]=!0,Vl.forEach(function(s){s!=="selectionchange"&&(aM.has(s)||jd(s,!1,t),jd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Pc]||(i[Pc]=!0,jd("selectionchange",!1,i))}}function Yv(t,i,s,l){switch(M_(i)){case 2:var f=LM;break;case 8:f=UM;break;default:f=lh}s=f.bind(null,i,s,t),f=void 0,!hf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Yd(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var w=l.stateNode.containerInfo;if(w===f)break;if(y===4)for(y=l.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;w!==null;){if(y=oa(w),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){l=d=y;continue e}w=w.parentNode}}l=l.return}$m(function(){var ae=d,Se=ff(s),Te=[];e:{var fe=Rg.get(t);if(fe!==void 0){var he=jl,Ke=t;switch(t){case"keypress":if(Xl(s)===0)break e;case"keydown":case"keyup":he=Qb;break;case"focusin":Ke="focus",he=vf;break;case"focusout":Ke="blur",he=vf;break;case"beforeblur":case"afterblur":he=vf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=e1;break;case Mg:case Eg:case Tg:he=Vb;break;case Ag:he=n1;break;case"scroll":case"scrollend":he=zb;break;case"wheel":he=a1;break;case"copy":case"cut":case"paste":he=Xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=ag;break;case"toggle":case"beforetoggle":he=s1}var ot=(i&4)!==0,Kt=!ot&&(t==="scroll"||t==="scrollend"),J=ot?fe!==null?fe+"Capture":null:fe;ot=[];for(var X=ae,ie;X!==null;){var Me=X;if(ie=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ie===null||J===null||(Me=Ro(X,J),Me!=null&&ot.push(sl(X,Me,ie))),Kt)break;X=X.return}0<ot.length&&(fe=new he(fe,Ke,null,s,Se),Te.push({event:fe,listeners:ot}))}}if((i&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",fe&&s!==uf&&(Ke=s.relatedTarget||s.fromElement)&&(oa(Ke)||Ke[qn]))break e;if((he||fe)&&(fe=Se.window===Se?Se:(fe=Se.ownerDocument)?fe.defaultView||fe.parentWindow:window,he?(Ke=s.relatedTarget||s.toElement,he=ae,Ke=Ke?oa(Ke):null,Ke!==null&&(Kt=c(Ke),ot=Ke.tag,Ke!==Kt||ot!==5&&ot!==27&&ot!==6)&&(Ke=null)):(he=null,Ke=ae),he!==Ke)){if(ot=ng,Me="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ot=ag,Me="onPointerLeave",J="onPointerEnter",X="pointer"),Kt=he==null?fe:Cr(he),ie=Ke==null?fe:Cr(Ke),fe=new ot(Me,X+"leave",he,s,Se),fe.target=Kt,fe.relatedTarget=ie,Me=null,oa(Se)===ae&&(ot=new ot(J,X+"enter",Ke,s,Se),ot.target=ie,ot.relatedTarget=Kt,Me=ot),Kt=Me,he&&Ke)t:{for(ot=rM,J=he,X=Ke,ie=0,Me=J;Me;Me=ot(Me))ie++;Me=0;for(var at=X;at;at=ot(at))Me++;for(;0<ie-Me;)J=ot(J),ie--;for(;0<Me-ie;)X=ot(X),Me--;for(;ie--;){if(J===X||X!==null&&J===X.alternate){ot=J;break t}J=ot(J),X=ot(X)}ot=null}else ot=null;he!==null&&Kv(Te,fe,he,ot,!1),Ke!==null&&Kt!==null&&Kv(Te,Kt,Ke,ot,!0)}}e:{if(fe=ae?Cr(ae):window,he=fe.nodeName&&fe.nodeName.toLowerCase(),he==="select"||he==="input"&&fe.type==="file")var Lt=dg;else if(ug(fe))if(hg)Lt=g1;else{Lt=p1;var Qe=h1}else he=fe.nodeName,!he||he.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?ae&&Ft(ae.elementType)&&(Lt=dg):Lt=m1;if(Lt&&(Lt=Lt(t,ae))){fg(Te,Lt,s,Se);break e}Qe&&Qe(t,fe,ae),t==="focusout"&&ae&&fe.type==="number"&&ae.memoizedProps.value!=null&&yt(fe,"number",fe.value)}switch(Qe=ae?Cr(ae):window,t){case"focusin":(ug(Qe)||Qe.contentEditable==="true")&&(vs=Qe,Mf=ae,Po=null);break;case"focusout":Po=Mf=vs=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Sg(Te,s,Se);break;case"selectionchange":if(_1)break;case"keydown":case"keyup":Sg(Te,s,Se)}var vt;if(xf)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else gs?lg(t,s)&&(Et="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&(rg&&s.locale!=="ko"&&(gs||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&gs&&(vt=eg()):(Wa=Se,pf="value"in Wa?Wa.value:Wa.textContent,gs=!0)),Qe=Ic(ae,Et),0<Qe.length&&(Et=new ig(Et,t,null,s,Se),Te.push({event:Et,listeners:Qe}),vt?Et.data=vt:(vt=cg(s),vt!==null&&(Et.data=vt)))),(vt=l1?c1(t,s):u1(t,s))&&(Et=Ic(ae,"onBeforeInput"),0<Et.length&&(Qe=new ig("onBeforeInput","beforeinput",null,s,Se),Te.push({event:Qe,listeners:Et}),Qe.data=vt)),tM(Te,t,ae,s,Se)}qv(Te,i)})}function sl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ic(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ro(t,s),f!=null&&l.unshift(sl(t,f,d)),f=Ro(t,i),f!=null&&l.push(sl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function rM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kv(t,i,s,l,f){for(var d=i._reactName,y=[];s!==null&&s!==l;){var w=s,H=w.alternate,ae=w.stateNode;if(w=w.tag,H!==null&&H===l)break;w!==5&&w!==26&&w!==27||ae===null||(H=ae,f?(ae=Ro(s,d),ae!=null&&y.unshift(sl(s,ae,H))):f||(ae=Ro(s,d),ae!=null&&y.push(sl(s,ae,H)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var sM=/\r\n?/g,oM=/\u0000|\uFFFD/g;function Zv(t){return(typeof t=="string"?t:""+t).replace(sM,`
`).replace(oM,"")}function Qv(t,i){return i=Zv(i),Zv(t)===i}function Yt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||si(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&si(t,""+l);break;case"className":Ye(t,"class",l);break;case"tabIndex":Ye(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,s,l);break;case"style":Li(t,l,d);break;case"data":if(i!=="object"){Ye(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wr(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Yt(t,i,"name",f.name,f,null),Yt(t,i,"formEncType",f.formEncType,f,null),Yt(t,i,"formMethod",f.formMethod,f,null),Yt(t,i,"formTarget",f.formTarget,f,null)):(Yt(t,i,"encType",f.encType,f,null),Yt(t,i,"method",f.method,f,null),Yt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wr(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ca);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),ze(t,"popover",l);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ze(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ji.get(s)||s,ze(t,s,l))}}function Kd(t,i,s,l,f,d){switch(s){case"style":Li(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?si(t,l):(typeof l=="number"||typeof l=="bigint")&&si(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ze(t,s,l)}}}function On(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Yt(t,i,d,y,s,null)}}f&&Yt(t,i,"srcSet",s.srcSet,s,null),l&&Yt(t,i,"src",s.src,s,null);return;case"input":bt("invalid",t);var w=d=y=f=null,H=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var Se=s[l];if(Se!=null)switch(l){case"name":f=Se;break;case"type":y=Se;break;case"checked":H=Se;break;case"defaultChecked":ae=Se;break;case"value":d=Se;break;case"defaultValue":w=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(r(137,i));break;default:Yt(t,i,l,Se,s,null)}}Fn(t,d,w,H,ae,y,f,!1);return;case"select":bt("invalid",t),l=y=d=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":l=w;default:Yt(t,i,f,w,s,null)}i=d,s=y,t.multiple=!!l,i!=null?Mn(t,!!l,i,!1):s!=null&&Mn(t,!!l,s,!0);return;case"textarea":bt("invalid",t),d=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(w=s[y],w!=null))switch(y){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Yt(t,i,y,w,s,null)}Ni(t,l,f,d);return;case"option":for(H in s)s.hasOwnProperty(H)&&(l=s[H],l!=null)&&(H==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Yt(t,i,H,l,s,null));return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<rl.length;l++)bt(rl[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Yt(t,i,ae,l,s,null)}return;default:if(Ft(i)){for(Se in s)s.hasOwnProperty(Se)&&(l=s[Se],l!==void 0&&Kd(t,i,Se,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Yt(t,i,w,l,s,null))}function lM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,y=null,w=null,H=null,ae=null,Se=null;for(he in s){var Te=s[he];if(s.hasOwnProperty(he)&&Te!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":H=Te;default:l.hasOwnProperty(he)||Yt(t,i,he,null,l,Te)}}for(var fe in l){var he=l[fe];if(Te=s[fe],l.hasOwnProperty(fe)&&(he!=null||Te!=null))switch(fe){case"type":d=he;break;case"name":f=he;break;case"checked":ae=he;break;case"defaultChecked":Se=he;break;case"value":y=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,i));break;default:he!==Te&&Yt(t,i,fe,he,l,Te)}}Xe(t,y,w,H,ae,Se,d,f);return;case"select":he=y=w=fe=null;for(d in s)if(H=s[d],s.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":he=H;default:l.hasOwnProperty(d)||Yt(t,i,d,null,l,H)}for(f in l)if(d=l[f],H=s[f],l.hasOwnProperty(f)&&(d!=null||H!=null))switch(f){case"value":fe=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==H&&Yt(t,i,f,d,l,H)}i=w,s=y,l=he,fe!=null?Mn(t,!!s,fe,!1):!!l!=!!s&&(i!=null?Mn(t,!!s,i,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":he=fe=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Yt(t,i,w,null,l,f)}for(y in l)if(f=l[y],d=s[y],l.hasOwnProperty(y)&&(f!=null||d!=null))switch(y){case"value":fe=f;break;case"defaultValue":he=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Yt(t,i,y,f,l,d)}ri(t,fe,he);return;case"option":for(var Ke in s)fe=s[Ke],s.hasOwnProperty(Ke)&&fe!=null&&!l.hasOwnProperty(Ke)&&(Ke==="selected"?t.selected=!1:Yt(t,i,Ke,null,l,fe));for(H in l)fe=l[H],he=s[H],l.hasOwnProperty(H)&&fe!==he&&(fe!=null||he!=null)&&(H==="selected"?t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol":Yt(t,i,H,fe,l,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)fe=s[ot],s.hasOwnProperty(ot)&&fe!=null&&!l.hasOwnProperty(ot)&&Yt(t,i,ot,null,l,fe);for(ae in l)if(fe=l[ae],he=s[ae],l.hasOwnProperty(ae)&&fe!==he&&(fe!=null||he!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,i));break;default:Yt(t,i,ae,fe,l,he)}return;default:if(Ft(i)){for(var Kt in s)fe=s[Kt],s.hasOwnProperty(Kt)&&fe!==void 0&&!l.hasOwnProperty(Kt)&&Kd(t,i,Kt,void 0,l,fe);for(Se in l)fe=l[Se],he=s[Se],!l.hasOwnProperty(Se)||fe===he||fe===void 0&&he===void 0||Kd(t,i,Se,fe,l,he);return}}for(var J in s)fe=s[J],s.hasOwnProperty(J)&&fe!=null&&!l.hasOwnProperty(J)&&Yt(t,i,J,null,l,fe);for(Te in l)fe=l[Te],he=s[Te],!l.hasOwnProperty(Te)||fe===he||fe==null&&he==null||Yt(t,i,Te,fe,l,he)}function Jv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,y=f.initiatorType,w=f.duration;if(d&&w&&Jv(y)){for(y=0,w=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],ae=H.startTime;if(ae>w)break;var Se=H.transferSize,Te=H.initiatorType;Se&&Jv(Te)&&(H=H.responseEnd,y+=Se*(H<w?1:(w-ae)/(H-ae)))}if(--l,i+=8*(d+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zd=null,Qd=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function $v(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Jd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $d=null;function uM(){var t=window.event;return t&&t.type==="popstate"?t===$d?!1:($d=t,!0):($d=null,!1)}var t_=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,dM=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(t){return n_.resolve(null).then(t).catch(hM)}:t_;function hM(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function i_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Xs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ol(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ol(s);for(var d=s.firstChild;d;){var y=d.nextSibling,w=d.nodeName;d[Ga]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&ol(t.ownerDocument.body);s=f}while(s);Xs(i)}function a_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function eh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":eh(s),Va(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function pM(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ga])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function mM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function r_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ei(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ei(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var ih=null;function s_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ei(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function o_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function l_(t,i,s){switch(i=zc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ol(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Va(t)}var Ti=new Map,c_=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=G.d;G.d={f:vM,r:_M,D:xM,C:yM,L:SM,m:bM,X:EM,S:MM,M:TM};function vM(){var t=Ta.f(),i=wc();return t||i}function _M(t){var i=la(t);i!==null&&i.tag===5&&i.type==="form"?A0(i):Ta.r(t)}var Gs=typeof document>"u"?null:document;function u_(t,i,s){var l=Gs;if(l&&typeof i=="string"&&i){var f=Gt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),c_.has(f)||(c_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),On(i,"link",t),gn(i),l.head.appendChild(i)))}}function xM(t){Ta.D(t),u_("dns-prefetch",t,null)}function yM(t,i){Ta.C(t,i),u_("preconnect",t,i)}function SM(t,i,s){Ta.L(t,i,s);var l=Gs;if(l&&t&&i){var f='link[rel="preload"][as="'+Gt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Gt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Gt(s.imageSizes)+'"]')):f+='[href="'+Gt(t)+'"]';var d=f;switch(i){case"style":d=Vs(t);break;case"script":d=ks(t)}Ti.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ti.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ll(d))||i==="script"&&l.querySelector(cl(d))||(i=l.createElement("link"),On(i,"link",t),gn(i),l.head.appendChild(i)))}}function bM(t,i){Ta.m(t,i);var s=Gs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Gt(l)+'"][href="'+Gt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ks(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},i),Ti.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(cl(d)))return}l=s.createElement("link"),On(l,"link",t),gn(l),s.head.appendChild(l)}}}function MM(t,i,s){Ta.S(t,i,s);var l=Gs;if(l&&t){var f=ka(l).hoistableStyles,d=Vs(t);i=i||"default";var y=f.get(d);if(!y){var w={loading:0,preload:null};if(y=l.querySelector(ll(d)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ti.get(d))&&ah(t,s);var H=y=l.createElement("link");gn(H),On(H,"link",t),H._p=new Promise(function(ae,Se){H.onload=ae,H.onerror=Se}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Bc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:w},f.set(d,y)}}}function EM(t,i){Ta.X(t,i);var s=Gs;if(s&&t){var l=ka(s).hoistableScripts,f=ks(t),d=l.get(f);d||(d=s.querySelector(cl(f)),d||(t=v({src:t,async:!0},i),(i=Ti.get(f))&&rh(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function TM(t,i){Ta.M(t,i);var s=Gs;if(s&&t){var l=ka(s).hoistableScripts,f=ks(t),d=l.get(f);d||(d=s.querySelector(cl(f)),d||(t=v({src:t,async:!0,type:"module"},i),(i=Ti.get(f))&&rh(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function f_(t,i,s,l){var f=(f=k.current)?Fc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vs(s.href),s=ka(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vs(s.href);var d=ka(f).hoistableStyles,y=d.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=f.querySelector(ll(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||AM(f,t,s,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ks(s),s=ka(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vs(t){return'href="'+Gt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function d_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function AM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),On(i,"link",s),gn(i),t.head.appendChild(i))}function ks(t){return'[src="'+Gt(t)+'"]'}function cl(t){return"script[async]"+t}function h_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Gt(s.href)+'"]');if(l)return i.instance=l,gn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gn(l),On(l,"style",f),Bc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Vs(s.href);var d=t.querySelector(ll(f));if(d)return i.state.loading|=4,i.instance=d,gn(d),d;l=d_(s),(f=Ti.get(f))&&ah(l,f),d=(t.ownerDocument||t).createElement("link"),gn(d);var y=d;return y._p=new Promise(function(w,H){y.onload=w,y.onerror=H}),On(d,"link",l),i.state.loading|=4,Bc(d,s.precedence,t),i.instance=d;case"script":return d=ks(s.src),(f=t.querySelector(cl(d)))?(i.instance=f,gn(f),f):(l=s,(f=Ti.get(d))&&(l=v({},s),rh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),gn(f),On(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Bc(l,s.precedence,t));return i.instance}function Bc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,y=0;y<l.length;y++){var w=l[y];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function ah(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function rh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Hc=null;function p_(t,i,s){if(Hc===null){var l=new Map,f=Hc=new Map;f.set(s,l)}else f=Hc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Ga]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=t+y;var w=l.get(y);w?w.push(d):l.set(y,[d])}}return l}function m_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function RM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function g_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function CM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Vs(l.href),d=i.querySelector(ll(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Gc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=i.ownerDocument||i,l=d_(l),(f=Ti.get(f))&&ah(l,f),d=d.createElement("link"),gn(d);var y=d;y._p=new Promise(function(w,H){y.onload=w,y.onerror=H}),On(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Gc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var sh=0;function wM(t,i){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&sh===0&&(sh=62500*cM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>sh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function kc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,i.forEach(DM,t),Vc=null,Gc.call(t))}function DM(t,i){if(!(i.state.loading&4)){var s=Vc.get(t);if(s)var l=s.get(null);else{s=new Map,Vc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var y=f[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),d=s.get(y)||l,d===l&&s.set(null,f),s.set(y,f),this.count++,l=Gc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var ul={$$typeof:F,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function NM(t,i,s,l,f,d,y,w,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function v_(t,i,s,l,f,d,y,w,H,ae,Se,Te){return t=new NM(t,i,s,y,H,ae,Se,Te,w),i=1,d===!0&&(i|=24),d=li(3,null,null,i),t.current=d,d.stateNode=t,i=Bf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},kf(d),t}function __(t){return t?(t=ys,t):ys}function x_(t,i,s,l,f,d){f=__(f),l.context===null?l.context=f:l.pendingContext=f,l=Qa(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ja(t,l,i),s!==null&&($n(s,t,i),Vo(s,t,i))}function y_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function oh(t,i){y_(t,i),(t=t.alternate)&&y_(t,i)}function S_(t){if(t.tag===13||t.tag===31){var i=Ur(t,67108864);i!==null&&$n(i,t,67108864),oh(t,67108864)}}function b_(t){if(t.tag===13||t.tag===31){var i=hi();i=Eo(i);var s=Ur(t,i);s!==null&&$n(s,t,i),oh(t,i)}}var Xc=!0;function LM(t,i,s,l){var f=L.T;L.T=null;var d=G.p;try{G.p=2,lh(t,i,s,l)}finally{G.p=d,L.T=f}}function UM(t,i,s,l){var f=L.T;L.T=null;var d=G.p;try{G.p=8,lh(t,i,s,l)}finally{G.p=d,L.T=f}}function lh(t,i,s,l){if(Xc){var f=ch(l);if(f===null)Yd(t,i,l,Wc,s),E_(t,l);else if(PM(f,t,i,s,l))l.stopPropagation();else if(E_(t,l),i&4&&-1<OM.indexOf(t)){for(;f!==null;){var d=la(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ne(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var H=1<<31-ke(y);w.entanglements[1]|=H,y&=~H}Zi(d),(Pt&6)===0&&(Rc=jt()+500,al(0))}}break;case 31:case 13:w=Ur(d,2),w!==null&&$n(w,d,2),wc(),oh(d,2)}if(d=ch(l),d===null&&Yd(t,i,l,Wc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Yd(t,i,l,null,s)}}function ch(t){return t=ff(t),uh(t)}var Wc=null;function uh(t){if(Wc=null,t=oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Wc=t,null}function M_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case I:return 2;case M:return 8;case ee:case ce:return 32;case xe:return 268435456;default:return 32}default:return 32}}var fh=!1,cr=null,ur=null,fr=null,fl=new Map,dl=new Map,dr=[],OM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E_(t,i){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function hl(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=la(i),i!==null&&S_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function PM(t,i,s,l,f){switch(i){case"focusin":return cr=hl(cr,t,i,s,l,f),!0;case"dragenter":return ur=hl(ur,t,i,s,l,f),!0;case"mouseover":return fr=hl(fr,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return fl.set(d,hl(fl.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,dl.set(d,hl(dl.get(d)||null,t,i,s,l,f)),!0}return!1}function T_(t){var i=oa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,hs(t.priority,function(){b_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,hs(t.priority,function(){b_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ch(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);uf=l,s.target.dispatchEvent(l),uf=null}else return i=la(s),i!==null&&S_(i),t.blockedOn=s,!1;i.shift()}return!0}function A_(t,i,s){jc(t)&&s.delete(i)}function IM(){fh=!1,cr!==null&&jc(cr)&&(cr=null),ur!==null&&jc(ur)&&(ur=null),fr!==null&&jc(fr)&&(fr=null),fl.forEach(A_),dl.forEach(A_)}function qc(t,i){t.blockedOn===i&&(t.blockedOn=null,fh||(fh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,IM)))}var Yc=null;function R_(t){Yc!==t&&(Yc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(uh(l||s)===null)continue;break}var d=la(s);d!==null&&(t.splice(i,3),i-=3,cd(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Xs(t){function i(H){return qc(H,t)}cr!==null&&qc(cr,t),ur!==null&&qc(ur,t),fr!==null&&qc(fr,t),fl.forEach(i),dl.forEach(i);for(var s=0;s<dr.length;s++){var l=dr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<dr.length&&(s=dr[0],s.blockedOn===null);)T_(s),s.blockedOn===null&&dr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],y=f[Dn]||null;if(typeof d=="function")y||R_(s);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,y=d[Dn]||null)w=y.formAction;else if(uh(f)!==null)continue}else w=y.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),R_(s)}}}function C_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function dh(t){this._internalRoot=t}Kc.prototype.render=dh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=hi();x_(s,l,t,i,null,null)},Kc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;x_(t.current,2,null,t,null,null),wc(),i[qn]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ao();t={blockedOn:null,target:t,priority:i};for(var s=0;s<dr.length&&i!==0&&i<dr[s].priority;s++);dr.splice(s,0,t),s===0&&T_(t)}};var w_=e.version;if(w_!=="19.2.8")throw Error(r(527,w_,"19.2.8"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var zM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{_e=Zc.inject(zM),ye=Zc}catch{}}return ml.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=I0,d=z0,y=F0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=v_(t,1,!1,null,null,s,l,null,f,d,y,C_),t[qn]=i.current,qd(t),new dh(i)},ml.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=I0,y=z0,w=F0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=v_(t,1,!0,i,s??null,l,f,H,d,y,w,C_),i.context=__(null),s=i.current,l=hi(),l=Eo(l),f=Qa(l),f.callback=null,Ja(s,f,l),s=l,i.current.lanes=s,je(i,s),Zi(i),t[qn]=i.current,qd(t),new Kc(i)},ml.version="19.2.8",ml}var gx;function D2(){if(gx)return yh.exports;gx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),yh.exports=w2(),yh.exports}var N2=D2();function tu(a){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${a}-${e}`}function vx(a){return{id:a.message_id,role:a.role,content:a.content}}function jr(a,e,n,r){return a.map(o=>o.id!==e?o:{...o,content:n,streaming:r})}function L2(a,e,n){return e?a.find(r=>r.conversation_id===e)?.title??n:n}function U2(a,e){const[n,r]=Le.useState([]),[o,c]=Le.useState(null),u=o,[h,m]=Le.useState([]),[p,_]=Le.useState(""),[v,g]=Le.useState("idle"),[S,T]=Le.useState(null),[D,b]=Le.useState(null),[x,P]=Le.useState(null),[F,R]=Le.useState(null),[U,N]=Le.useState([]),B=Le.useRef(0),A=Le.useRef(null);Le.useEffect(()=>()=>{A.current&&clearTimeout(A.current)},[]);const z=Le.useMemo(()=>L2(n,o,e.newConversationTitle),[o,n,e.newConversationTitle]),j=v!=="idle";Le.useEffect(()=>{let te=!0;async function Q(){try{let ve=await a.listConversations(),k=localStorage.getItem(e.storageKey);ve.some(Ce=>Ce.conversation_id===k)||(k=ve[0]?.conversation_id??null),k||(k=(await a.createConversation()).conversation_id,ve=await a.listConversations());const de=await a.loadMessages(k);if(!te)return;r(ve),c(k),m(de.map(vx)),localStorage.setItem(e.storageKey,k)}catch(ve){te&&R(ve instanceof Error?ve.message:e.wakeErrorMessage)}}return Q(),()=>{te=!1}},[a,e.storageKey,e.wakeErrorMessage]);async function V(){r(await a.listConversations())}async function q(){if(j||h.length===0)return!1;const te=await a.createConversation();return c(te.conversation_id),m([]),b(null),T(null),P(null),localStorage.setItem(e.storageKey,te.conversation_id),await V(),!0}async function pe(te){if(!j){if(await a.deleteConversation(te),te===u){const Q=(await a.listConversations()).filter(ve=>ve.conversation_id!==te);Q.length>0?await $(Q[0].conversation_id):await q()}await V()}}async function me(te){return a.getPassage(te)}async function $(te){if(j||te===o)return!1;const Q=B.current+1;B.current=Q;const ve=await a.loadMessages(te);return B.current!==Q?!1:(c(te),m(ve.map(vx)),b(null),T(null),P(null),localStorage.setItem(e.storageKey,te),!0)}function L(te,Q,ve){if(te.type==="delta"){A.current&&clearTimeout(A.current),N([]);const k=ve+te.text;return m(se=>jr(se,Q,k,!0)),{text:k,terminal:!1}}return te.type==="completed"?(m(k=>jr(k,Q,te.text,!1)),T(Q),{text:te.text,terminal:!0}):te.type==="tool"?(N([{name:te.name,status:te.status,detail:te.detail,preview:te.preview,handles:te.handles}]),A.current&&clearTimeout(A.current),A.current=setTimeout(()=>N([]),3500),{text:ve,terminal:!1}):(m(k=>jr(k,Q,ve,!1)),P(te.message),{text:ve,terminal:!0})}async function G(te){if(!o||j)return;const Q=tu("assistant");_(""),b(te),T(null),P(null),N([]),g("streaming"),m(se=>[...se,{id:tu("owner"),role:"owner",content:te},{id:Q,role:"weaver",content:"",streaming:!0}]);let ve="",k=!1;try{for await(const se of a.streamTurn(o,te)){const de=L(se,Q,ve);if(ve=de.text,k=de.terminal,de.terminal)break}k||(m(se=>jr(se,Q,ve,!1)),P(e.incompleteTurnMessage))}catch(se){m(Ce=>jr(Ce,Q,ve,!1));const de=se instanceof Error?se.message:e.connectionLostMessage;P(se instanceof Error?`${de} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}async function ne(){if(!(!o||v!=="streaming")){g("cancelling");try{await a.cancelTurn(o)}catch(te){P(te instanceof Error?te.message:e.cancelFailedMessage),g("streaming")}}}async function ge(){if(!o||v!=="idle"||!S)return;const te=S,Q=tu("assistant");T(null),P(null),N([]),g("streaming"),m(ve=>[...ve.filter(k=>k.id!==te),{id:Q,role:"weaver",content:"",streaming:!0}]),await O(Q,a.regenerateTurn(o))}async function Ee(){if(!o||v!=="idle"||!D)return;const te=tu("assistant");T(null),P(null),N([]),g("streaming"),m(Q=>[...Q,{id:te,role:"weaver",content:"",streaming:!0}]),await O(te,a.retryTurn(o))}async function O(te,Q){let ve="",k=!1;try{for await(const se of Q){const de=L(se,te,ve);if(ve=de.text,k=de.terminal,de.terminal)break}k||(m(se=>jr(se,te,ve,!1)),P(e.incompleteTurnMessage))}catch(se){m(Ce=>jr(Ce,te,ve,!1));const de=se instanceof Error?se.message:e.connectionLostMessage;P(se instanceof Error?`${de} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await V()}catch{}}}const Z=(()=>{const te=h[h.length-1];return te&&te.role==="weaver"?te.id:null})();return{activeTitle:z,activity:U,bootError:F,cancelTurn:ne,conversationId:o,conversations:n,createConversation:q,deleteConversation:pe,loadPassage:me,draft:p,lastReplyId:Z,liveReplyId:S,messages:h,recoveryMessage:x,regenerateReply:ge,retryLastTurn:Ee,selectConversation:$,sendMessage:G,setDraft:_,turnActive:j,turnState:v}}const Ai={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."},O2=["[Searching the fate tapestry.]","[Following a silver thread through the void.]","[Tracing where this memory touches the chapters.]"],P2=["[Reading what the Spell remembers.]","[Drawing the found passage into the weave.]","[Listening for the truth between the lines.]"],I2=["[Binding the scattered threads.]","[Setting each echo in its proper place.]","[Joining memory to canon.]"],z2=["[The Spell turns the question in the dark.]","[The pattern is beginning to answer.]","[Following the next thread of fate.]"];function nu(a,e){let n=0;for(const r of a)n+=r.charCodeAt(0);return e[n%e.length]}function Eh(a,e){return e.some(n=>a.includes(n))}function F2(a){if(a.status!=="start")return null;const e=a.name.toLowerCase();return Eh(e,["search","find","locate","browse","grep","glob","who_is"])?nu(e,O2):Eh(e,["read","chapter","passage","inspect"])?nu(e,P2):Eh(e,["connect","related","compare","timeline","link"])?nu(e,I2):nu(e,z2)}const GS="weaver_first_nightmare";function B2(){const a=localStorage.getItem(GS);return a==="completed"||a==="deferred"?a:null}function _x(a){localStorage.setItem(GS,a)}function H2(){return B2()===null}var G2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},V2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},k2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},X2={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},W2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},j2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},q2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Y2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},K2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},Z2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},Q2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},J2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},$2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},e3={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},t3={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},n3={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function i3(a){return a=a-0,a===a}function VS(a){return i3(a)?a:(a=a.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var a3=(a,e)=>bm.createElement("stop",{key:`${e}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function r3(a){return a.charAt(0).toUpperCase()+a.slice(1)}var js=new Map,s3=1e3;function o3(a){if(js.has(a))return js.get(a);const e={};let n=0;const r=a.length;for(;n<r;){const o=a.indexOf(";",n),c=o===-1?r:o,u=a.slice(n,c).trim();if(u){const h=u.indexOf(":");if(h>0){const m=u.slice(0,h).trim(),p=u.slice(h+1).trim();if(m&&p){const _=VS(m);e[_.startsWith("webkit")?r3(_):_]=p}}}n=c+1}if(js.size===s3){const o=js.keys().next().value;o&&js.delete(o)}return js.set(a,e),e}function kS(a,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(v=>{let g=v;return("fill"in n||n.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),kS(a,g)}),o=e.attributes||{},c={};for(const[v,g]of Object.entries(o))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=o3(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[VS(v)]=g}const{style:u,role:h,"aria-label":m,gradientFill:p,..._}=n;if(u&&(c.style=c.style?{...c.style,...u}:u),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;r.unshift(a(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(a3)))}return a(e.tag,{...c,..._},...r)}var l3=kS.bind(null,bm.createElement),xx=(a,e)=>{const n=Le.useId();return a||(e?n:void 0)},c3=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},u3="searchPseudoElementsFullScan"in ls&&typeof ls.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",f3=Number.parseInt(u3)>=7,d3=()=>f3,wl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},h3={left:"fa-pull-left",right:"fa-pull-right"},p3={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},m3={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ii={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function g3(a){const e=ls.cssPrefix||ls.familyPrefix||wl;return e===wl?a:a.replace(new RegExp(String.raw`(?<=^|\s)${wl}-`,"g"),`${e}-`)}function v3(a){const{beat:e,fade:n,beatFade:r,bounce:o,shake:c,spin:u,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:T,rotation:D,pull:b,swapOpacity:x,rotateBy:P,widthAuto:F,canvasSquare:R,canvasRoomy:U,flip360:N,buzz:B,float:A,jello:z,spinSnap:j,spinSnap4:V,spinSnap8:q,swing:pe,wag:me,className:$}=a,L=[];return $&&L.push(...$.split(" ")),e&&L.push(Cn.beat),n&&L.push(Cn.fade),r&&L.push(Cn.beatFade),o&&L.push(Cn.bounce),c&&L.push(Cn.shake),u&&L.push(Cn.spin),m&&L.push(Cn.spinReverse),h&&L.push(Cn.spinPulse),p&&L.push(Cn.pulse),_&&L.push(Ii.fixedWidth),v&&L.push(Ii.inverse),g&&L.push(Ii.border),S===!0&&L.push(Ii.flip),(S==="horizontal"||S==="both")&&L.push(Ii.flipHorizontal),(S==="vertical"||S==="both")&&L.push(Ii.flipVertical),T!=null&&L.push(m3[T]),D!=null&&D!==0&&L.push(p3[D]),b!=null&&L.push(h3[b]),x&&L.push(Ii.swapOpacity),d3()?(P&&L.push(Ii.rotateBy),F&&L.push(Ii.widthAuto),R&&L.push(Ii.canvasSquare),U&&L.push(Ii.canvasRoomy),N&&L.push(Cn.flip360),B&&L.push(Cn.buzz),A&&L.push(Cn.float),z&&L.push(Cn.jello),j&&L.push(Cn.spinSnap),V&&L.push(Cn.spinSnap4),q&&L.push(Cn.spinSnap8),pe&&L.push(Cn.swing),me&&L.push(Cn.wag),(ls.cssPrefix||ls.familyPrefix||wl)===wl?L:L.map(g3)):L}var _3=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function yx(a){if(a)return _3(a)?a:HS.icon(a)}function x3(a){return Object.keys(a)}var Sx=new c3("FontAwesomeIcon"),XS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},y3=new Set(Object.keys(XS)),zn=bm.forwardRef((a,e)=>{const n={...XS,...a},{icon:r,mask:o,symbol:c,title:u,titleId:h,maskId:m,transform:p}=n,_=xx(m,!!o),v=xx(h,!!u),g=yx(r);if(!g)return Sx.error("Icon lookup is undefined",r),null;const S=v3(n),T=typeof p=="string"?HS.transform(p):p,D=yx(o),b=E2(g,{...S.length>0&&{classes:S},...T&&{transform:T},...D&&{mask:D},symbol:c,title:u,titleId:v,maskId:_});if(!b)return Sx.error("Could not find icon",g),null;const{abstract:x}=b,P={ref:e};for(const F of x3(n))y3.has(F)||(P[F]=n[F]);return l3(x[0],P)});zn.displayName="FontAwesomeIcon";function S3(a){return E.jsx(zn,{"aria-hidden":"true",icon:q2,...a})}function bx(a){return E.jsx(zn,{"aria-hidden":"true",icon:e3,...a})}function b3(a){return E.jsx(zn,{"aria-hidden":"true",icon:$2,...a})}function M3(a){return E.jsx(zn,{"aria-hidden":"true",icon:K2,...a})}function E3(a){return E.jsx(zn,{"aria-hidden":"true",icon:t3,...a})}function T3(a){return E.jsx(zn,{"aria-hidden":"true",icon:W2,...a})}function WS(a){return E.jsx(zn,{"aria-hidden":"true",icon:G2,...a})}function A3(a){return E.jsx(zn,{"aria-hidden":"true",icon:J2,...a})}function jS(a){return E.jsx(zn,{"aria-hidden":"true",icon:j2,...a})}function R3(a){return E.jsx(zn,{"aria-hidden":"true",icon:V2,...a})}function C3(a){return E.jsx(zn,{"aria-hidden":"true",icon:Z2,...a})}function Ep(a){return E.jsx(zn,{"aria-hidden":"true",icon:Q2,...a})}function Mx(a){return E.jsx(zn,{"aria-hidden":"true",icon:n3,...a})}function w3(a){return E.jsx(zn,{"aria-hidden":"true",icon:Y2,...a})}function D3(a){return E.jsx(zn,{"aria-hidden":"true",icon:X2,...a})}const N3=["awakened","ascended","transcendent"];function L3({cancelling:a,draft:e,inputLabel:n="Message assistant",onCancel:r,onDraftChange:o,onSubmit:c,onTierChange:u,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const T=Le.useRef(null),D=v??T,b=Le.useRef(null),[x,P]=Le.useState(!1);Le.useEffect(()=>{const U=D.current;U&&(U.style.height="auto",U.style.height=`${Math.min(U.scrollHeight,160)}px`)},[e,D]),Le.useEffect(()=>{if(!x)return;function U(B){b.current&&!b.current.contains(B.target)&&P(!1)}function N(B){B.key==="Escape"&&P(!1)}return document.addEventListener("pointerdown",U),document.addEventListener("keydown",N),()=>{document.removeEventListener("pointerdown",U),document.removeEventListener("keydown",N)}},[x]);function F(){const U=e.trim();!U||S||c(U)}function R(U){U.key!=="Enter"||U.shiftKey||(U.preventDefault(),F())}return E.jsx("div",{className:"composer-wrap",children:E.jsxs("div",{className:"composer-shell",children:[E.jsx("textarea",{"aria-label":n,disabled:S,onChange:U=>o(U.target.value),onKeyDown:R,placeholder:h,ref:D,rows:1,value:e}),E.jsxs("div",{className:"composer-tier",ref:b,children:[E.jsxs("button",{"aria-expanded":x,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>P(U=>!U),type:"button",children:[E.jsx("span",{className:"tier-pill-name",children:g}),E.jsx(Ep,{})]}),x&&E.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:N3.map(U=>E.jsx("li",{children:E.jsxs("button",{"aria-selected":U===g,onClick:()=>{u(U),P(!1)},role:"option",type:"button",children:[E.jsx("span",{className:"tier-menu-check",children:U===g?"✦":""}),U]})},U))})]}),S?E.jsx("button",{"aria-label":a?_:p,className:"composer-action composer-stop",disabled:a,onClick:r,type:"button",children:E.jsx(E3,{})}):E.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:F,type:"button",children:E.jsx(S3,{})})]})})}const Ex="weaver_device_id",Tp="weaver_api_key",Ap="weaver_api_key_disabled",Rp="weaver_model_id",Pm="deepseek-v4-flash",U3=[{id:"deepseek-v4-flash",label:"DeepSeek V4 Flash"},{id:"deepseek-v4-pro",label:"DeepSeek V4 Pro"}];function O3(){let a=localStorage.getItem(Ex);return a||(a=crypto.randomUUID(),localStorage.setItem(Ex,a)),a}function ku(){return localStorage.getItem(Tp)??""}function qS(a){a.trim()===""?localStorage.removeItem(Tp):localStorage.setItem(Tp,a.trim())}function Cp(){return localStorage.getItem(Ap)==="1"}function P3(a){a?localStorage.setItem(Ap,"1"):localStorage.removeItem(Ap)}function YS(){return localStorage.getItem(Rp)??Pm}function I3(a){a===Pm?localStorage.removeItem(Rp):localStorage.setItem(Rp,a)}function z3(a){const e={"X-Device-Id":O3()},n=ku();n!==""&&!Cp()&&(e["X-Weaver-Key"]=n);const r=YS();return r!==Pm&&(e["X-Weaver-Model"]=r),{...e,...a}}function KS({label:a="Weaver is weaving an answer"}={}){return E.jsx("div",{"aria-label":a,className:"fate-weaving-loader",role:"status",children:E.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 128 36",children:[E.jsx("path",{className:"fate-loader-thread fate-loader-thread-one",d:"M2 7 C30 7, 37 18, 64 18 S98 29, 126 29",pathLength:"1"}),E.jsx("path",{className:"fate-loader-thread fate-loader-thread-two",d:"M2 29 C30 29, 37 18, 64 18 S98 7, 126 7",pathLength:"1"}),E.jsx("path",{className:"fate-loader-thread fate-loader-thread-three",d:"M2 18 C32 18, 42 12, 64 18 S96 24, 126 18",pathLength:"1"}),E.jsx("circle",{className:"fate-loader-core fate-loader-core-one",cx:"40",cy:"15",r:"1.7"}),E.jsx("circle",{className:"fate-loader-core fate-loader-core-two",cx:"64",cy:"18",r:"2.3"}),E.jsx("circle",{className:"fate-loader-core fate-loader-core-three",cx:"89",cy:"21",r:"1.7"})]})})}const F3=[{x:-78,y:-20},{x:-60,y:-14},{x:-42,y:-8},{x:-24,y:-3},{x:-7,y:0},{x:12,y:2},{x:30,y:7},{x:48,y:13},{x:67,y:20},{x:-78,y:20},{x:-60,y:14},{x:-42,y:8},{x:-24,y:3},{x:-7,y:0},{x:12,y:-2},{x:30,y:-7},{x:48,y:-13},{x:67,y:-20},{x:-2,y:-27},{x:-1,y:-14},{x:0,y:14},{x:1,y:27}];function B3(a,e){return{"--fragment-index":e,"--fragment-x":`${a.x}px`,"--fragment-y":`${a.y}px`}}function H3({announcement:a,eventKey:e}){return E.jsxs("div",{"aria-live":"polite",className:"first-nightmare-rune-event",children:[E.jsxs("div",{"aria-hidden":"true",className:"first-nightmare-particles",children:[E.jsxs("svg",{className:"first-nightmare-thread",viewBox:"0 0 180 60",children:[E.jsx("path",{d:"M5 12 C48 12 53 48 90 30 S135 12 175 48"}),E.jsx("path",{d:"M5 48 C48 48 53 12 90 30 S135 48 175 12"})]}),F3.map((n,r)=>E.jsx("span",{style:B3(n,r)},r))]}),E.jsx("p",{children:a})]},e)}const G3=["a[href]","button:not(:disabled)","input:not(:disabled)"].join(", ");function V3(a){const e=a.closest(".spell-surface-lab");if(!e)return()=>{};const n=Array.from(e.children).filter(o=>o!==a),r=n.map(o=>({ariaHidden:o.getAttribute("aria-hidden"),element:o,inert:o.inert}));for(const o of n)o.inert=!0,o.setAttribute("aria-hidden","true");return()=>{for(const o of r)o.element.inert=o.inert,o.ariaHidden===null?o.element.removeAttribute("aria-hidden"):o.element.setAttribute("aria-hidden",o.ariaHidden)}}function k3({initialStep:a=1,onComplete:e,onDefer:n,onKeyStored:r}){const[o,c]=Le.useState(a),[u,h]=Le.useState(ku),[m,p]=Le.useState(!1),_=Le.useRef(null),v=Le.useRef(document.activeElement instanceof HTMLElement?document.activeElement:null);Le.useEffect(()=>{const b=_.current;if(!b)return;const x=V3(b.parentElement??b);return()=>{x(),v.current?.focus()}},[]),Le.useEffect(()=>{_.current?.querySelector("[data-autofocus]")?.focus()},[o]);function g(){_x("deferred"),n()}function S(){try{qS(u),_x("completed"),p(!1),r?.(),c(4)}catch{p(!0)}}function T(b){if(b.key==="Escape"){b.preventDefault(),g();return}if(b.key!=="Tab"||!_.current)return;const x=_.current.querySelectorAll(G3),P=x[0],F=x[x.length-1];b.shiftKey&&document.activeElement===P&&(b.preventDefault(),F?.focus()),!b.shiftKey&&document.activeElement===F&&(b.preventDefault(),P?.focus())}const D=["","[The Nightmare Spell has found you.]","[The trial has taken shape.]","[Every Nightmare finds the vulnerable place.]","[Your preparation has been appraised.]"][o];return E.jsx("div",{className:"first-nightmare-backdrop",children:E.jsxs("section",{"aria-label":"First Nightmare setup","aria-modal":"true",className:"first-nightmare-panel",onKeyDown:T,ref:_,role:"dialog",children:[E.jsxs("header",{className:"first-nightmare-head",children:[E.jsx("span",{children:"First Nightmare"}),E.jsxs("small",{children:["· ",o," of 4"]})]}),E.jsx(H3,{announcement:D,eventKey:o}),E.jsxs("div",{className:"first-nightmare-content",children:[o===1&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"The Spell has found you"}),E.jsx("p",{children:"A thread has taken root in this browser. Before Weaver can read with you, there is one small trial."}),E.jsxs("div",{className:"first-nightmare-actions",children:[E.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:()=>c(2),type:"button",children:"Enter the First Nightmare"}),E.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===2&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"Bring your DeepSeek key"}),E.jsx("p",{children:"A DeepSeek API key is a private code that lets Weaver send your questions to DeepSeek and charge the model usage to your DeepSeek account."}),E.jsx("aside",{className:"first-nightmare-privacy",children:"Your key stays in this browser. Weaver sends it with each request and the server does not save it."}),E.jsxs("a",{href:"https://platform.deepseek.com/",rel:"noreferrer",target:"_blank",children:["Get a key from DeepSeek",E.jsx("span",{className:"sr-only",children:", opens the DeepSeek Platform in a new tab"})]}),E.jsxs("div",{className:"first-nightmare-actions",children:[E.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:()=>c(3),type:"button",children:"I have a key"}),E.jsx("button",{onClick:()=>c(1),type:"button",children:"Back"}),E.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===3&&E.jsxs("form",{onSubmit:b=>{b.preventDefault(),S()},children:[E.jsx("h1",{children:"Face the trial"}),E.jsx("label",{htmlFor:"first-nightmare-api-key",children:"Your DeepSeek API key"}),E.jsx("input",{autoCapitalize:"none",autoComplete:"off","data-autofocus":!0,id:"first-nightmare-api-key",onChange:b=>h(b.target.value),placeholder:"sk-...",spellCheck:!1,type:"password",value:u}),E.jsx("small",{children:"Stored only in this browser. You can replace or remove it later in Settings."}),m&&E.jsx("p",{className:"first-nightmare-error",role:"alert",children:"The key could not be stored in this browser. Check browser storage and try again."}),E.jsxs("div",{className:"first-nightmare-actions",children:[E.jsx("button",{className:"first-nightmare-primary",disabled:u.trim()==="",type:"submit",children:"Store key and continue"}),E.jsx("button",{onClick:()=>c(2),type:"button",children:"Back"}),E.jsx("button",{onClick:g,type:"button",children:"Enter later"})]})]}),o===4&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"first-nightmare-weaving",children:[E.jsx(KS,{label:"Fate threads draw together"}),E.jsx("span",{children:"[Fate threads draw together.]"})]}),E.jsxs("div",{"aria-label":"Appraisal: Glorious",className:"first-nightmare-appraisal",children:[E.jsx("span",{children:"Good"}),E.jsx("span",{children:"Exceptional"}),E.jsx("span",{children:"Remarkable"}),E.jsx("span",{children:"Glorious"})]}),E.jsx("h1",{children:"Your Aspect awakens"}),E.jsx("p",{children:"The key is stored in this browser. Weaver can now read, reread, and answer through your DeepSeek account."}),E.jsx("div",{className:"first-nightmare-actions",children:E.jsx("button",{className:"first-nightmare-primary","data-autofocus":!0,onClick:e,type:"button",children:"Enter Weaver"})})]})]},o)]})})}const X3=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function W3(a){try{const e=new URL(a);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function Th(a,e){if(!e)return;const n=a.at(-1);if(n?.type==="text"){n.value+=e;return}a.push({type:"text",value:e})}function iu(a){const e=[];let n=0;for(const r of a.matchAll(X3)){const o=r.index??0;Th(e,a.slice(n,o));const c=r[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const u=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=u?.[2]??"";u&&W3(h)?e.push({type:"link",label:u[1],href:h}):Th(e,c)}n=o+c.length}return Th(e,a.slice(n)),e}function j3(a){const e=a.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function q3(a){const e=[],n=String(a??"").split(/\r?\n/);let r=0;for(;r<n.length;){const o=n[r].trim();if(!o){r+=1;continue}if(o.startsWith("```")){const p=[];for(r+=1;r<n.length&&!n[r].trimStart().startsWith("```");)p.push(n[r]),r+=1;r<n.length&&(r+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(o);if(c){e.push({type:"heading",level:c[1].length,children:iu(c[2])}),r+=1;continue}if(o.startsWith(">")){e.push({type:"quote",children:iu(o.replace(/^>\s?/,""))}),r+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(o)){e.push({type:"rule"}),r+=1;continue}const u=/^[-*]\s+/.test(o),h=/^\d+[.)]\s+/.test(o);if(u||h){const p=[];for(;r<n.length;){const _=n[r].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(iu(v[1])),r+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;r<n.length;){const p=n[r].trim();if(!p||m.length>0&&j3(p))break;m.push(p),r+=1}e.push({type:"paragraph",children:iu(m.join(" "))})}return e}function lo(a){return a.map((e,n)=>{const r=`${e.type}-${n}`;return e.type==="text"?E.jsx(Le.Fragment,{children:e.value},r):e.type==="strong"?E.jsx("strong",{children:lo(e.children)},r):e.type==="emphasis"?E.jsx("em",{children:lo(e.children)},r):e.type==="code"?E.jsx("code",{children:e.value},r):E.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},r)})}function Y3({children:a}){return q3(a).map((n,r)=>{const o=`${n.type}-${r}`;if(n.type==="paragraph")return E.jsx("p",{children:lo(n.children)},o);if(n.type==="heading"){const u=`h${n.level}`;return E.jsx(u,{children:lo(n.children)},o)}if(n.type==="code")return E.jsx("pre",{children:E.jsx("code",{children:n.value})},o);if(n.type==="quote")return E.jsx("blockquote",{children:lo(n.children)},o);if(n.type==="rule")return E.jsx("hr",{},o);const c=n.ordered?"ol":"ul";return E.jsx(c,{children:n.items.map((u,h)=>E.jsx("li",{children:lo(u)},`${o}-${h}`))},o)})}function K3({Mark:a,assistantName:e,message:n,onQuote:r,onRegenerate:o,regenerateLabel:c}){const[u,h]=Le.useState(!1),[m,p]=Le.useState(null),[_,v]=Le.useState(null),g=Le.useRef(null);Le.useEffect(()=>{function T(){if(n.role!=="weaver"||!r||!g.current)return;const D=window.getSelection(),b=D?D.toString().trim():"",x=g.current,P=D&&D.rangeCount>0&&x.contains(D.getRangeAt(0).commonAncestorContainer);if(b.length>=2&&P){const F=D.getRangeAt(0).getBoundingClientRect();p(b),v({top:F.bottom+6,left:F.left})}else p(null),v(null)}return document.addEventListener("selectionchange",T),()=>document.removeEventListener("selectionchange",T)},[n.role,r]);async function S(){await navigator.clipboard?.writeText(n.content),h(!0),window.setTimeout(()=>h(!1),1400)}return n.role==="owner"?E.jsx("article",{className:"message message-owner",children:E.jsxs("div",{className:"owner-message-content",children:[E.jsx("div",{className:"owner-bubble",children:n.content}),E.jsx("div",{className:"message-actions",children:E.jsxs("button",{"aria-label":"Copy owner message",onClick:S,type:"button",children:[E.jsx(bx,{}),E.jsx("span",{children:u?"Copied":"Copy"})]})})]})}):E.jsxs("article",{className:`message message-weaver ${n.streaming?"message-streaming":""}`,children:[E.jsx("div",{className:"weaver-avatar",children:E.jsx(a,{compact:!0})}),E.jsxs("div",{className:"weaver-message-content",children:[E.jsx("div",{className:"message-role",children:e}),E.jsx("div",{className:"markdown-body",ref:g,children:n.content?E.jsx(Y3,{children:n.content}):E.jsx(KS,{})}),!n.streaming&&n.content&&E.jsxs("div",{className:"message-actions",children:[E.jsxs("button",{"aria-label":"Copy reply",onClick:S,type:"button",children:[E.jsx(bx,{}),E.jsx("span",{children:u?"Copied":"Copy"})]}),o&&E.jsxs("button",{"aria-label":"Regenerate reply",onClick:o,type:"button",children:[E.jsx(M3,{}),E.jsx("span",{children:c})]})]})]}),m&&_&&E.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{r?.(m),p(null),v(null)},style:{top:_.top,left:_.left},type:"button",children:[E.jsx(C3,{}),E.jsx("span",{children:"ask about this"})]})]})}function Z3({chooseLabel:a,createLabel:e,message:n,onChooseConversation:r,onCreateConversation:o,onRetry:c,retryLabel:u,title:h}){return E.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[E.jsx("span",{className:"recovery-knot"}),E.jsxs("div",{children:[E.jsx("strong",{children:h}),E.jsx("p",{children:n}),E.jsxs("div",{className:"recovery-actions",children:[c&&u&&E.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:u}),E.jsx("button",{onClick:o,type:"button",children:e}),E.jsx("button",{onClick:r,type:"button",children:a})]})]})]})}const Im="185",Q3=0,Tx=1,J3=2,Ou=1,$3=2,Tl=3,Tr=0,ti=1,Na=2,Ua=0,fo=1,Ax=2,Rx=3,Cx=4,eR=5,ts=100,tR=101,nR=102,iR=103,aR=104,rR=200,sR=201,oR=202,lR=203,wp=204,Dp=205,cR=206,uR=207,fR=208,dR=209,hR=210,pR=211,mR=212,gR=213,vR=214,Np=0,Lp=1,Up=2,go=3,Op=4,Pp=5,Ip=6,zp=7,ZS=0,_R=1,xR=2,aa=0,QS=1,JS=2,$S=3,eb=4,tb=5,nb=6,ib=7,ab=300,cs=301,vo=302,Ah=303,Rh=304,sf=306,Fp=1e3,La=1001,Bp=1002,Pn=1003,yR=1004,au=1005,Vn=1006,Ch=1007,as=1008,Di=1009,rb=1010,sb=1011,Nl=1012,zm=1013,sa=1014,na=1015,za=1016,Fm=1017,Bm=1018,Ll=1020,ob=35902,lb=35899,cb=1021,ub=1022,Vi=1023,Fa=1026,rs=1027,fb=1028,Hm=1029,us=1030,Gm=1031,Vm=1033,Pu=33776,Iu=33777,zu=33778,Fu=33779,Hp=35840,Gp=35841,Vp=35842,kp=35843,Xp=36196,Wp=37492,jp=37496,qp=37488,Yp=37489,Xu=37490,Kp=37491,Zp=37808,Qp=37809,Jp=37810,$p=37811,em=37812,tm=37813,nm=37814,im=37815,am=37816,rm=37817,sm=37818,om=37819,lm=37820,cm=37821,um=36492,fm=36494,dm=36495,hm=36283,pm=36284,Wu=36285,mm=36286,SR=3200,wx=0,bR=1,yr="",Ci="srgb",ju="srgb-linear",qu="linear",Wt="srgb",qs=7680,Dx=519,MR=512,ER=513,TR=514,km=515,AR=516,RR=517,Xm=518,CR=519,Nx=35044,Lx="300 es",ia=2e3,Yu=2001;function wR(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ku(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function DR(){const a=Ku("canvas");return a.style.display="block",a}const Ux={};function Ox(...a){const e="THREE."+a.shift();console.log(e,...a)}function db(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function lt(...a){a=db(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Dt(...a){a=db(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function ho(...a){const e=a.join(" ");e in Ux||(Ux[e]=!0,lt(...a))}function NR(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const LR={[Np]:Lp,[Up]:Ip,[Op]:zp,[go]:Pp,[Lp]:Np,[Ip]:Up,[zp]:Op,[Pp]:go};class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=Math.PI/180,gm=180/Math.PI;function Il(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Ct(a,e,n){return Math.max(e,Math.min(n,a))}function UR(a,e){return(a%e+e)%e}function Dh(a,e,n){return(1-n)*a+n*e}function gl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qm=class qm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qm.prototype.isVector2=!0;let It=qm;class So{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,h){let m=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3],g=c[u+0],S=c[u+1],T=c[u+2],D=c[u+3];if(v!==D||m!==g||p!==S||_!==T){let b=m*g+p*S+_*T+v*D;b<0&&(g=-g,S=-S,T=-T,D=-D,b=-b);let x=1-h;if(b<.9995){const P=Math.acos(b),F=Math.sin(P);x=Math.sin(x*P)/F,h=Math.sin(h*P)/F,m=m*x+g*h,p=p*x+S*h,_=_*x+T*h,v=v*x+D*h}else{m=m*x+g*h,p=p*x+S*h,_=_*x+T*h,v=v*x+D*h;const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],_=r[o+3],v=c[u],g=c[u+1],S=c[u+2],T=c[u+3];return e[n]=h*T+_*v+m*S-p*g,e[n+1]=m*T+_*g+p*v-h*S,e[n+2]=p*T+_*S+h*g-m*v,e[n+3]=_*T-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(o/2),v=h(c/2),g=m(r/2),S=m(o/2),T=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"YZX":this._x=g*_*v+p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v-g*S*T;break;case"XZY":this._x=g*_*v-p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v+g*S*T;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-r*p,this._z=c*_+u*p+r*m-o*h,this._w=u*_-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ym=class Ym{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Px.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Px.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),_=2*(h*n-c*o),v=2*(c*r-u*n);return this.x=n+m*p+u*v-h*_,this.y=r+m*_+h*p-c*v,this.z=o+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ym.prototype.isVector3=!0;let re=Ym;const Nh=new re,Px=new So,Km=class Km{constructor(e,n,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p)}set(e,n,r,o,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],_=r[4],v=r[7],g=r[2],S=r[5],T=r[8],D=o[0],b=o[3],x=o[6],P=o[1],F=o[4],R=o[7],U=o[2],N=o[5],B=o[8];return c[0]=u*D+h*P+m*U,c[3]=u*b+h*F+m*N,c[6]=u*x+h*R+m*B,c[1]=p*D+_*P+v*U,c[4]=p*b+_*F+v*N,c[7]=p*x+_*R+v*B,c[2]=g*D+S*P+T*U,c[5]=g*b+S*F+T*N,c[8]=g*x+S*R+T*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*h*p-r*c*_+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*u-h*p,g=h*m-_*c,S=p*c-u*m,T=n*v+r*g+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=v*D,e[1]=(o*p-_*r)*D,e[2]=(h*r-o*u)*D,e[3]=g*D,e[4]=(_*n-o*m)*D,e[5]=(o*c-h*n)*D,e[6]=S*D,e[7]=(r*m-p*n)*D,e[8]=(u*n-r*c)*D,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Km.prototype.isMatrix3=!0;let ht=Km;const Lh=new ht,Ix=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OR(){const a={enabled:!0,workingColorSpace:ju,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Wt&&(o.r=Oa(o.r),o.g=Oa(o.g),o.b=Oa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(o.r=po(o.r),o.g=po(o.g),o.b=po(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===yr?qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[ju]:{primaries:e,whitePoint:r,transfer:qu,toXYZ:Ix,fromXYZ:zx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:Ix,fromXYZ:zx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),a}const Rt=OR();function Oa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function po(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ys;class PR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ys===void 0&&(Ys=Ku("canvas")),Ys.width=e.width,Ys.height=e.height;const o=Ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ys}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ku("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Oa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oa(n[r]/255)*255):n[r]=Oa(n[r]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IR=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IR++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Uh(o[u].image)):c.push(Uh(o[u]))}else c=Uh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Uh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?PR.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let zR=0;const Oh=new re;class Wn extends ds{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,r=La,o=La,c=Vn,u=as,h=Vi,m=Di,p=Wn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zR++}),this.uuid=Il(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ab)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fp:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Bp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fp:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Bp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ab;Wn.DEFAULT_ANISOTROPY=1;const Zm=class Zm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],T=m[9],D=m[2],b=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(T-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(T+b)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(p+1)/2,R=(S+1)/2,U=(x+1)/2,N=(_+g)/4,B=(v+D)/4,A=(T+b)/4;return F>R&&F>U?F<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(F),o=N/r,c=B/r):R>U?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=N/o,c=A/o):U<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),r=B/c,o=A/c),this.set(r,o,c,n),this}let P=Math.sqrt((b-T)*(b-T)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(b-T)/P,this.y=(v-D)/P,this.z=(g-_)/P,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this.w=Ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this.w=Ct(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zm.prototype.isVector4=!0;let fn=Zm;class FR extends ds{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Wn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Wm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends FR{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class hb extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BR extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $u=class $u{constructor(e,n,r,o,c,u,h,m,p,_,v,g,S,T,D,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p,_,v,g,S,T,D,b)}set(e,n,r,o,c,u,h,m,p,_,v,g,S,T,D,b){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=g,x[3]=S,x[7]=T,x[11]=D,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $u().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),c=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,S=u*v,T=h*_,D=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=S+T*p,n[5]=g-D*p,n[9]=-h*m,n[2]=D-g*p,n[6]=T+S*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,T=p*_,D=p*v;n[0]=g+D*h,n[4]=T*h-S,n[8]=u*p,n[1]=u*v,n[5]=u*_,n[9]=-h,n[2]=S*h-T,n[6]=D+g*h,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,T=p*_,D=p*v;n[0]=g-D*h,n[4]=-u*v,n[8]=T+S*h,n[1]=S+T*h,n[5]=u*_,n[9]=D-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,S=u*v,T=h*_,D=h*v;n[0]=m*_,n[4]=T*p-S,n[8]=g*p+D,n[1]=m*v,n[5]=D*p+g,n[9]=S*p-T,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,S=u*p,T=h*m,D=h*p;n[0]=m*_,n[4]=D-g*v,n[8]=T*v+S,n[1]=v,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=S*v+T,n[10]=g-D*v}else if(e.order==="XZY"){const g=u*m,S=u*p,T=h*m,D=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+D,n[5]=u*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=h*_,n[10]=D*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HR,e,GR)}lookAt(e,n,r){const o=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pr.crossVectors(r,pi),pr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pr.crossVectors(r,pi)),pr.normalize(),ru.crossVectors(pi,pr),o[0]=pr.x,o[4]=ru.x,o[8]=pi.x,o[1]=pr.y,o[5]=ru.y,o[9]=pi.y,o[2]=pr.z,o[6]=ru.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],_=r[1],v=r[5],g=r[9],S=r[13],T=r[2],D=r[6],b=r[10],x=r[14],P=r[3],F=r[7],R=r[11],U=r[15],N=o[0],B=o[4],A=o[8],z=o[12],j=o[1],V=o[5],q=o[9],pe=o[13],me=o[2],$=o[6],L=o[10],G=o[14],ne=o[3],ge=o[7],Ee=o[11],O=o[15];return c[0]=u*N+h*j+m*me+p*ne,c[4]=u*B+h*V+m*$+p*ge,c[8]=u*A+h*q+m*L+p*Ee,c[12]=u*z+h*pe+m*G+p*O,c[1]=_*N+v*j+g*me+S*ne,c[5]=_*B+v*V+g*$+S*ge,c[9]=_*A+v*q+g*L+S*Ee,c[13]=_*z+v*pe+g*G+S*O,c[2]=T*N+D*j+b*me+x*ne,c[6]=T*B+D*V+b*$+x*ge,c[10]=T*A+D*q+b*L+x*Ee,c[14]=T*z+D*pe+b*G+x*O,c[3]=P*N+F*j+R*me+U*ne,c[7]=P*B+F*V+R*$+U*ge,c[11]=P*A+F*q+R*L+U*Ee,c[15]=P*z+F*pe+R*G+U*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],T=e[3],D=e[7],b=e[11],x=e[15],P=m*S-p*g,F=h*S-p*v,R=h*g-m*v,U=u*S-p*_,N=u*g-m*_,B=u*v-h*_;return n*(D*P-b*F+x*R)-r*(T*P-b*U+x*N)+o*(T*F-D*U+x*B)-c*(T*R-D*N+b*B)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return n*(u*_-h*p)-r*(c*_-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],T=e[12],D=e[13],b=e[14],x=e[15],P=n*h-r*u,F=n*m-o*u,R=n*p-c*u,U=r*m-o*h,N=r*p-c*h,B=o*p-c*m,A=_*D-v*T,z=_*b-g*T,j=_*x-S*T,V=v*b-g*D,q=v*x-S*D,pe=g*x-S*b,me=P*pe-F*q+R*V+U*j-N*z+B*A;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/me;return e[0]=(h*pe-m*q+p*V)*$,e[1]=(o*q-r*pe-c*V)*$,e[2]=(D*B-b*N+x*U)*$,e[3]=(g*N-v*B-S*U)*$,e[4]=(m*j-u*pe-p*z)*$,e[5]=(n*pe-o*j+c*z)*$,e[6]=(b*R-T*B-x*F)*$,e[7]=(_*B-g*R+S*F)*$,e[8]=(u*q-h*j+p*A)*$,e[9]=(r*j-n*q-c*A)*$,e[10]=(T*N-D*R+x*P)*$,e[11]=(v*R-_*N-S*P)*$,e[12]=(h*z-u*V-m*A)*$,e[13]=(n*V-r*z+o*A)*$,e[14]=(D*F-T*U-b*P)*$,e[15]=(_*U-v*F+g*P)*$,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+r,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,v=h+h,g=c*p,S=c*_,T=c*v,D=u*_,b=u*v,x=h*v,P=m*p,F=m*_,R=m*v,U=r.x,N=r.y,B=r.z;return o[0]=(1-(D+x))*U,o[1]=(S+R)*U,o[2]=(T-F)*U,o[3]=0,o[4]=(S-R)*N,o[5]=(1-(g+x))*N,o[6]=(b+P)*N,o[7]=0,o[8]=(T+F)*B,o[9]=(b-P)*B,o[10]=(1-(g+D))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Ks.set(o[0],o[1],o[2]).length();const h=Ks.set(o[4],o[5],o[6]).length(),m=Ks.set(o[8],o[9],o[10]).length();c<0&&(u=-u),zi.copy(this);const p=1/u,_=1/h,v=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,n.setFromRotationMatrix(zi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,n,r,o,c,u,h=ia,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(r-o),g=(n+e)/(n-e),S=(r+o)/(r-o);let T,D;if(m)T=c/(u-c),D=u*c/(u-c);else if(h===ia)T=-(u+c)/(u-c),D=-2*u*c/(u-c);else if(h===Yu)T=-u/(u-c),D=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,h=ia,m=!1){const p=this.elements,_=2/(n-e),v=2/(r-o),g=-(n+e)/(n-e),S=-(r+o)/(r-o);let T,D;if(m)T=1/(u-c),D=u/(u-c);else if(h===ia)T=-2/(u-c),D=-(u+c)/(u-c);else if(h===Yu)T=-1/(u-c),D=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};$u.prototype.isMatrix4=!0;let dn=$u;const Ks=new re,zi=new dn,HR=new re(0,0,0),GR=new re(1,1,1),pr=new re,ru=new re,pi=new re,Fx=new dn,Bx=new So;class fs{constructor(e=0,n=0,r=0,o=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],v=o[2],g=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ct(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Fx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fx,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bx.setFromEuler(this),this.setFromQuaternion(Bx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class pb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VR=0;const Hx=new re,Zs=new So,Aa=new dn,su=new re,vl=new re,kR=new re,XR=new So,Gx=new re(1,0,0),Vx=new re(0,1,0),kx=new re(0,0,1),Xx={type:"added"},WR={type:"removed"},Qs={type:"childadded",child:null},Ph={type:"childremoved",child:null};class jn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new re,n=new fs,r=new So,o=new re(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new ht}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Gx,e)}rotateY(e){return this.rotateOnAxis(Vx,e)}rotateZ(e){return this.rotateOnAxis(kx,e)}translateOnAxis(e,n){return Hx.copy(e).applyQuaternion(this.quaternion),this.position.add(Hx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gx,e)}translateY(e){return this.translateOnAxis(Vx,e)}translateZ(e){return this.translateOnAxis(kx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?su.copy(e):su.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(vl,su,this.up):Aa.lookAt(su,vl,this.up),this.quaternion.setFromRotationMatrix(Aa),o&&(Aa.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(Aa),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WR),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,kR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,XR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}jn.DEFAULT_UP=new re(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ou extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jR={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const D of e.hand.values()){const b=n.getJointPose(D,r),x=this._getHandJoint(p,D);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ou;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const mb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},lu={h:0,s:0,l:0};function zh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=UR(e,1),n=Ct(n,0,1),r=Ct(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=zh(u,c,e+1/3),this.g=zh(u,c,e),this.b=zh(u,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=Ci){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ci){const r=mb[e.toLowerCase()];return r!==void 0?this.setHex(r,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Rt.workingToColorSpace(Gn.copy(this),e),Math.round(Ct(Gn.r*255,0,255))*65536+Math.round(Ct(Gn.g*255,0,255))*256+Math.round(Ct(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Gn.copy(this),n);const r=Gn.r,o=Gn.g,c=Gn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=_<=.5?v/(u+h):v/(2-u-h),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){Rt.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,r=Gn.g,o=Gn.b;return e!==Ci?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(lu);const r=Dh(mr.h,lu.h,n),o=Dh(mr.s,lu.s,n),c=Dh(mr.l,lu.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Tt;Tt.NAMES=mb;class qR extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new re,Ra=new re,Fh=new re,Ca=new re,Js=new re,$s=new re,Wx=new re,Bh=new re,Hh=new re,Gh=new re,Vh=new fn,kh=new fn,Xh=new fn;class Hi{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Fi.subVectors(e,n),o.cross(Fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Fi.subVectors(o,n),Ra.subVectors(r,n),Fh.subVectors(e,n);const u=Fi.dot(Fi),h=Fi.dot(Ra),m=Fi.dot(Fh),p=Ra.dot(Ra),_=Ra.dot(Fh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,T=(u*_-h*m)*g;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,n,r,o,c,u,h,m){return this.getBarycoord(e,n,r,o,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(u,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(e,n),kh.fromBufferAttribute(e,r),Xh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Vh,c.x),u.addScaledVector(kh,c.y),u.addScaledVector(Xh,c.z),u}static isFrontFacing(e,n,r,o){return Fi.subVectors(r,n),Ra.subVectors(e,n),Fi.cross(Ra).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Fi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,h;Js.subVectors(o,r),$s.subVectors(c,r),Bh.subVectors(e,r);const m=Js.dot(Bh),p=$s.dot(Bh);if(m<=0&&p<=0)return n.copy(r);Hh.subVectors(e,o);const _=Js.dot(Hh),v=$s.dot(Hh);if(_>=0&&v<=_)return n.copy(o);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(r).addScaledVector(Js,u);Gh.subVectors(e,c);const S=Js.dot(Gh),T=$s.dot(Gh);if(T>=0&&S<=T)return n.copy(c);const D=S*p-m*T;if(D<=0&&p>=0&&T<=0)return h=p/(p-T),n.copy(r).addScaledVector($s,h);const b=_*T-S*v;if(b<=0&&v-_>=0&&S-T>=0)return Wx.subVectors(c,o),h=(v-_)/(v-_+(S-T)),n.copy(o).addScaledVector(Wx,h);const x=1/(b+D+g);return u=D*x,h=g*x,n.copy(r).addScaledVector(Js,u).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Bi):Bi.fromBufferAttribute(c,u),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cu.copy(r.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),uu.subVectors(this.max,_l),eo.subVectors(e.a,_l),to.subVectors(e.b,_l),no.subVectors(e.c,_l),gr.subVectors(to,eo),vr.subVectors(no,to),qr.subVectors(eo,no);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-qr.z,qr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,qr.z,0,-qr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-qr.y,qr.x,0];return!Wh(n,eo,to,no,uu)||(n=[1,0,0,0,1,0,0,0,1],!Wh(n,eo,to,no,uu))?!1:(fu.crossVectors(gr,vr),n=[fu.x,fu.y,fu.z],Wh(n,eo,to,no,uu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new re,new re,new re,new re,new re,new re,new re,new re],Bi=new re,cu=new zl,eo=new re,to=new re,no=new re,gr=new re,vr=new re,qr=new re,_l=new re,uu=new re,fu=new re,Yr=new re;function Wh(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Yr.fromArray(a,c);const h=o.x*Math.abs(Yr.x)+o.y*Math.abs(Yr.y)+o.z*Math.abs(Yr.z),m=e.dot(Yr),p=n.dot(Yr),_=r.dot(Yr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new re,du=new It;let YR=0;class bn extends ds{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Nx,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)du.fromBufferAttribute(this,n),du.applyMatrix3(e),this.setXY(n,du.x,du.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=gl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),o=ei(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),o=ei(o,this.array),c=ei(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gb extends bn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class vb extends bn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ki extends bn{constructor(e,n,r){super(new Float32Array(e),n,r)}}const KR=new zl,xl=new re,jh=new re;class Fl{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):KR.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const n=xl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(xl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(jh)),this.expandByPoint(xl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ZR=0;const Ri=new dn,qh=new jn,io=new re,mi=new zl,yl=new zl,wn=new re;class ni extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wR(e)?vb:gb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,n,r){return Ri.makeTranslation(e,n,r),this.applyMatrix4(Ri),this}scale(e,n,r){return Ri.makeScale(e,n,r),this.applyMatrix4(Ri),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,yl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,yl.max),mi.expandByPoint(wn)):(mi.expandByPoint(yl.min),mi.expandByPoint(yl.max))}mi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)wn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(wn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)wn.fromBufferAttribute(h,p),m&&(io.fromBufferAttribute(e,p),wn.add(io)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new bn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let A=0;A<r.count;A++)h[A]=new re,m[A]=new re;const p=new re,_=new re,v=new re,g=new It,S=new It,T=new It,D=new re,b=new re;function x(A,z,j){p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,z),v.fromBufferAttribute(r,j),g.fromBufferAttribute(c,A),S.fromBufferAttribute(c,z),T.fromBufferAttribute(c,j),_.sub(p),v.sub(p),S.sub(g),T.sub(g);const V=1/(S.x*T.y-T.x*S.y);isFinite(V)&&(D.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(V),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(V),h[A].add(D),h[z].add(D),h[j].add(D),m[A].add(b),m[z].add(b),m[j].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let A=0,z=P.length;A<z;++A){const j=P[A],V=j.start,q=j.count;for(let pe=V,me=V+q;pe<me;pe+=3)x(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const F=new re,R=new re,U=new re,N=new re;function B(A){U.fromBufferAttribute(o,A),N.copy(U);const z=h[A];F.copy(z),F.sub(U.multiplyScalar(U.dot(z))).normalize(),R.crossVectors(N,z);const V=R.dot(m[A])<0?-1:1;u.setXYZW(A,F.x,F.y,F.z,V)}for(let A=0,z=P.length;A<z;++A){const j=P[A],V=j.start,q=j.count;for(let pe=V,me=V+q;pe<me;pe+=3)B(e.getX(pe+0)),B(e.getX(pe+1)),B(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new re,c=new re,u=new re,h=new re,m=new re,p=new re,_=new re,v=new re;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),D=e.getX(g+1),b=e.getX(g+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,b),h.add(_),m.add(_),p.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,T=0;for(let D=0,b=m.length;D<b;D++){h.isInterleavedBufferAttribute?S=m[D]*h.data.stride+h.offset:S=m[D]*_;for(let x=0;x<_;x++)g[T++]=p[S++]}return new bn(g,_,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,r);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let QR=0;class bo extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QR++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=fo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Dp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wp&&(r.blendSrc=this.blendSrc),this.blendDst!==Dp&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new It().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new re,Yh=new re,hu=new re,_r=new re,Kh=new re,pu=new re,Zh=new re;class jm{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Yh.copy(e).add(n).multiplyScalar(.5),hu.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Yh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(hu),h=_r.dot(this.direction),m=-_r.dot(hu),p=_r.lengthSq(),_=Math.abs(1-u*u);let v,g,S,T;if(_>0)if(v=u*m-h,g=u*h-m,T=c*_,v>=0)if(g>=-T)if(g<=T){const D=1/_;v*=D,g*=D,S=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Yh).addScaledVector(hu,g),S}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),o=Da.dot(Da)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,r,o,c){Kh.subVectors(n,e),pu.subVectors(r,e),Zh.crossVectors(Kh,pu);let u=this.direction.dot(Zh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;_r.subVectors(this.origin,e);const m=h*this.direction.dot(pu.crossVectors(_r,pu));if(m<0)return null;const p=h*this.direction.dot(Kh.cross(_r));if(p<0||m+p>u)return null;const _=-h*_r.dot(Zh);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _b extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=ZS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jx=new dn,Kr=new jm,mu=new Fl,qx=new re,gu=new re,vu=new re,_u=new re,Qh=new re,xu=new re,Yx=new re,yu=new re;class Ba extends jn{constructor(e=new ni,n=new _b){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){xu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Qh.fromBufferAttribute(v,e),u?xu.addScaledVector(Qh,_):xu.addScaledVector(Qh.sub(n),_))}n.add(xu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(c),Kr.copy(e.ray).recast(e.near),!(mu.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(mu,qx)===null||Kr.origin.distanceToSquared(qx)>(e.far-e.near)**2))&&(jx.copy(c).invert(),Kr.copy(e.ray).applyMatrix4(jx),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let T=0,D=g.length;T<D;T++){const b=g[T],x=u[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let R=P,U=F;R<U;R+=3){const N=h.getX(R),B=h.getX(R+1),A=h.getX(R+2);o=Su(this,x,e,r,p,_,v,N,B,A),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),D=Math.min(h.count,S.start+S.count);for(let b=T,x=D;b<x;b+=3){const P=h.getX(b),F=h.getX(b+1),R=h.getX(b+2);o=Su(this,u,e,r,p,_,v,P,F,R),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,D=g.length;T<D;T++){const b=g[T],x=u[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let R=P,U=F;R<U;R+=3){const N=R,B=R+1,A=R+2;o=Su(this,x,e,r,p,_,v,N,B,A),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let b=T,x=D;b<x;b+=3){const P=b,F=b+1,R=b+2;o=Su(this,u,e,r,p,_,v,P,F,R),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function JR(a,e,n,r,o,c,u,h){let m;if(e.side===ti?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Tr,h),m===null)return null;yu.copy(h),yu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(yu);return p<n.near||p>n.far?null:{distance:p,point:yu.clone(),object:a}}function Su(a,e,n,r,o,c,u,h,m,p){a.getVertexPosition(h,gu),a.getVertexPosition(m,vu),a.getVertexPosition(p,_u);const _=JR(a,e,n,r,gu,vu,_u,Yx);if(_){const v=new re;Hi.getBarycoord(Yx,gu,vu,_u,v),o&&(_.uv=Hi.getInterpolatedAttribute(o,h,m,p,v,new It)),c&&(_.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new It)),u&&(_.normal=Hi.getInterpolatedAttribute(u,h,m,p,v,new re),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new re,materialIndex:0};Hi.getNormal(gu,vu,_u,g.normal),_.face=g,_.barycoord=v}return _}class $R extends Wn{constructor(e=null,n=1,r=1,o,c,u,h,m,p=Pn,_=Pn,v,g){super(null,u,h,m,p,_,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new re,eC=new re,tC=new ht;class $r{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Jh.subVectors(r,n).cross(eC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Jh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||tC.getNormalMatrix(e),o=this.coplanarPoint(Jh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Fl,nC=new It(.5,.5),bu=new re;class xb{constructor(e=new $r,n=new $r,r=new $r,o=new $r,c=new $r,u=new $r){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ia,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],T=c[8],D=c[9],b=c[10],x=c[11],P=c[12],F=c[13],R=c[14],U=c[15];if(o[0].setComponents(p-u,S-_,x-T,U-P).normalize(),o[1].setComponents(p+u,S+_,x+T,U+P).normalize(),o[2].setComponents(p+h,S+v,x+D,U+F).normalize(),o[3].setComponents(p-h,S-v,x-D,U-F).normalize(),r)o[4].setComponents(m,g,b,R).normalize(),o[5].setComponents(p-m,S-g,x-b,U-R).normalize();else if(o[4].setComponents(p-m,S-g,x-b,U-R).normalize(),n===ia)o[5].setComponents(p+m,S+g,x+b,U+R).normalize();else if(n===Yu)o[5].setComponents(m,g,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=nC.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(bu.x=o.normal.x>0?e.max.x:e.min.x,bu.y=o.normal.y>0?e.max.y:e.min.y,bu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iC extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zu=new re,Qu=new re,Kx=new dn,Sl=new jm,Mu=new Fl,$h=new re,Zx=new re;class aC extends jn{constructor(e=new ni,n=new iC){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Zu.fromBufferAttribute(n,o-1),Qu.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Zu.distanceTo(Qu);e.setAttribute("lineDistance",new ki(r,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Mu.copy(r.boundingSphere),Mu.applyMatrix4(o),Mu.radius+=c,e.ray.intersectsSphere(Mu)===!1)return;Kx.copy(o).invert(),Sl.copy(e.ray).applyMatrix4(Kx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let D=S,b=T-1;D<b;D+=p){const x=_.getX(D),P=_.getX(D+1),F=Eu(this,e,Sl,m,x,P,D);F&&n.push(F)}if(this.isLineLoop){const D=_.getX(T-1),b=_.getX(S),x=Eu(this,e,Sl,m,D,b,T-1);x&&n.push(x)}}else{const S=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let D=S,b=T-1;D<b;D+=p){const x=Eu(this,e,Sl,m,D,D+1,D);x&&n.push(x)}if(this.isLineLoop){const D=Eu(this,e,Sl,m,T-1,S,T-1);D&&n.push(D)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Eu(a,e,n,r,o,c,u){const h=a.geometry.attributes.position;if(Zu.fromBufferAttribute(h,o),Qu.fromBufferAttribute(h,c),n.distanceSqToSegment(Zu,Qu,$h,Zx)>r)return;$h.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo($h);if(!(p<e.near||p>e.far))return{distance:p,point:Zx.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const Qx=new re,Jx=new re;class rC extends aC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Qx.fromBufferAttribute(n,o),Jx.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Qx.distanceTo(Jx);e.setAttribute("lineDistance",new ki(r,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sC extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $x=new dn,vm=new jm,Tu=new Fl,Au=new re;class ey extends jn{constructor(e=new ni,n=new sC){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(o),Tu.radius+=c,e.ray.intersectsSphere(Tu)===!1)return;$x.copy(o).invert(),vm.copy(e.ray).applyMatrix4($x);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let T=g,D=S;T<D;T++){const b=p.getX(T);Au.fromBufferAttribute(v,b),ty(Au,b,m,o,e,n,this)}}else{const g=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let T=g,D=S;T<D;T++)Au.fromBufferAttribute(v,T),ty(Au,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function ty(a,e,n,r,o,c,u){const h=vm.distanceSqToPoint(a);if(h<n){const m=new re;vm.closestPointToPoint(a,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class yb extends Wn{constructor(e=[],n=cs,r,o,c,u,h,m,p,_){super(e,n,r,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _o extends Wn{constructor(e,n,r=sa,o,c,u,h=Pn,m=Pn,p,_=Fa,v=1){if(_!==Fa&&_!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,o,c,u,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class oC extends _o{constructor(e,n=sa,r=cs,o,c,u=Pn,h=Pn,m,p=Fa){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,r,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sb extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends ni{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(v,2));function T(D,b,x,P,F,R,U,N,B,A,z){const j=R/B,V=U/A,q=R/2,pe=U/2,me=N/2,$=B+1,L=A+1;let G=0,ne=0;const ge=new re;for(let Ee=0;Ee<L;Ee++){const O=Ee*V-pe;for(let Z=0;Z<$;Z++){const te=Z*j-q;ge[D]=te*P,ge[b]=O*F,ge[x]=me,p.push(ge.x,ge.y,ge.z),ge[D]=0,ge[b]=0,ge[x]=N>0?1:-1,_.push(ge.x,ge.y,ge.z),v.push(Z/B),v.push(1-Ee/A),G+=1}}for(let Ee=0;Ee<A;Ee++)for(let O=0;O<B;O++){const Z=g+O+$*Ee,te=g+O+$*(Ee+1),Q=g+(O+1)+$*(Ee+1),ve=g+(O+1)+$*Ee;m.push(Z,te,ve),m.push(te,Q,ve),ne+=6}h.addGroup(S,ne,z),S+=ne,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class of extends ni{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(r),m=Math.floor(o),p=h+1,_=m+1,v=e/h,g=n/m,S=[],T=[],D=[],b=[];for(let x=0;x<_;x++){const P=x*g-u;for(let F=0;F<p;F++){const R=F*v-c;T.push(R,-P,0),D.push(0,0,1),b.push(F/h),b.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<h;P++){const F=P+p*x,R=P+p*(x+1),U=P+1+p*(x+1),N=P+1+p*x;S.push(F,R,N),S.push(R,U,N)}this.setIndex(S),this.setAttribute("position",new ki(T,3)),this.setAttribute("normal",new ki(D,3)),this.setAttribute("uv",new ki(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(ny(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(ny(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Xn(a){const e={};for(let n=0;n<a.length;n++){const r=xo(a[n]);for(const o in r)e[o]=r[o]}return e}function ny(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function lC(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function bb(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const cC={clone:xo,merge:Xn};var uC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uC,this.fragmentShader=fC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=lC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Tt().setHex(o.value);break;case"v2":this.uniforms[r].value=new It().fromArray(o.value);break;case"v3":this.uniforms[r].value=new re().fromArray(o.value);break;case"v4":this.uniforms[r].value=new fn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ht().fromArray(o.value);break;case"m4":this.uniforms[r].value=new dn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class dC extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hC extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pC extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ru=new re,Cu=new So,Qi=new re;class Mb extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ru,Cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Cu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Ru,Cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ru,Cu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new re,iy=new It,ay=new It;class wi extends Mb{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=gm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gm*2*Math.atan(Math.tan(wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,iy,ay),n.subVectors(ay,iy)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Eb extends Mb{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ao=-90,ro=1;class mC extends jn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(ao,ro,e,n);o.layers=this.layers,this.add(o);const c=new wi(ao,ro,e,n);c.layers=this.layers,this.add(c);const u=new wi(ao,ro,e,n);u.layers=this.layers,this.add(u);const h=new wi(ao,ro,e,n);h.layers=this.layers,this.add(h);const m=new wi(ao,ro,e,n);m.layers=this.layers,this.add(m);const p=new wi(ao,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class gC extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Qm=class Qm{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Qm.prototype.isMatrix2=!0;let ry=Qm;function sy(a,e,n,r){const o=_C(r);switch(n){case cb:return a*e;case fb:return a*e/o.components*o.byteLength;case Hm:return a*e/o.components*o.byteLength;case us:return a*e*2/o.components*o.byteLength;case Gm:return a*e*2/o.components*o.byteLength;case ub:return a*e*3/o.components*o.byteLength;case Vi:return a*e*4/o.components*o.byteLength;case Vm:return a*e*4/o.components*o.byteLength;case Pu:case Iu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case zu:case Fu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gp:case kp:return Math.max(a,16)*Math.max(e,8)/4;case Hp:case Vp:return Math.max(a,8)*Math.max(e,8)/2;case Xp:case Wp:case qp:case Yp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case jp:case Xu:case Kp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Jp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case $p:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case em:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case tm:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case nm:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case im:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case am:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case rm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case sm:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case om:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case lm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case cm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case um:case fm:case dm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case hm:case pm:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Wu:case mm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _C(a){switch(a){case Di:case rb:return{byteLength:1,components:1};case Nl:case sb:case za:return{byteLength:2,components:1};case Fm:case Bm:return{byteLength:2,components:4};case sa:case zm:case na:return{byteLength:4,components:1};case ob:case lb:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Im}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Im);function Tb(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function xC(a){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const _=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],D=v[S];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,v[g]=D)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const D=v[S];a.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var yC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SC=`#ifdef USE_ALPHAHASH
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
#endif`,bC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AC=`#ifdef USE_AOMAP
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
#endif`,RC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CC=`#ifdef USE_BATCHING
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
#endif`,wC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UC=`#ifdef USE_IRIDESCENCE
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
#endif`,OC=`#ifdef USE_BUMPMAP
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
#endif`,PC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kC=`#define PI 3.141592653589793
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
} // validated`,XC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WC=`vec3 transformedNormal = objectNormal;
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
#endif`,jC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZC="gl_FragColor = linearToOutputTexel( gl_FragColor );",QC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JC=`#ifdef USE_ENVMAP
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
#endif`,$C=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ow=`#ifdef USE_GRADIENTMAP
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
}`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vw=`PhysicalMaterial material;
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
#endif`,_w=`uniform sampler2D dfgLUT;
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
}`,xw=`
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
#endif`,yw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dw=`#if defined( USE_POINTS_UV )
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
#endif`,Nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iw=`#ifdef USE_MORPHTARGETS
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
#endif`,zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kw=`#ifdef USE_NORMALMAP
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
#endif`,Xw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ww=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rD=`float getShadowMask() {
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
}`,sD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oD=`#ifdef USE_SKINNING
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
#endif`,lD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cD=`#ifdef USE_SKINNING
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
#endif`,uD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pD=`#ifdef USE_TRANSMISSION
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
#endif`,mD=`#ifdef USE_TRANSMISSION
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
#endif`,gD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SD=`uniform sampler2D t2D;
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
}`,bD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ED=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AD=`#include <common>
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
}`,RD=`#if DEPTH_PACKING == 3200
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
}`,CD=`#define DISTANCE
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
}`,wD=`#define DISTANCE
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
}`,DD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ND=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LD=`uniform float scale;
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
}`,UD=`uniform vec3 diffuse;
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
}`,OD=`#include <common>
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
}`,PD=`uniform vec3 diffuse;
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
}`,ID=`#define LAMBERT
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
}`,zD=`#define LAMBERT
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
}`,FD=`#define MATCAP
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
}`,BD=`#define MATCAP
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
}`,HD=`#define NORMAL
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
}`,GD=`#define NORMAL
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
}`,VD=`#define PHONG
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
}`,kD=`#define PHONG
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
}`,XD=`#define STANDARD
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
}`,WD=`#define STANDARD
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
}`,jD=`#define TOON
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
}`,qD=`#define TOON
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
}`,YD=`uniform float size;
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
}`,KD=`uniform vec3 diffuse;
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
}`,ZD=`#include <common>
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
}`,QD=`uniform vec3 color;
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
}`,JD=`uniform float rotation;
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
}`,$D=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:yC,alphahash_pars_fragment:SC,alphamap_fragment:bC,alphamap_pars_fragment:MC,alphatest_fragment:EC,alphatest_pars_fragment:TC,aomap_fragment:AC,aomap_pars_fragment:RC,batching_pars_vertex:CC,batching_vertex:wC,begin_vertex:DC,beginnormal_vertex:NC,bsdfs:LC,iridescence_fragment:UC,bumpmap_pars_fragment:OC,clipping_planes_fragment:PC,clipping_planes_pars_fragment:IC,clipping_planes_pars_vertex:zC,clipping_planes_vertex:FC,color_fragment:BC,color_pars_fragment:HC,color_pars_vertex:GC,color_vertex:VC,common:kC,cube_uv_reflection_fragment:XC,defaultnormal_vertex:WC,displacementmap_pars_vertex:jC,displacementmap_vertex:qC,emissivemap_fragment:YC,emissivemap_pars_fragment:KC,colorspace_fragment:ZC,colorspace_pars_fragment:QC,envmap_fragment:JC,envmap_common_pars_fragment:$C,envmap_pars_fragment:ew,envmap_pars_vertex:tw,envmap_physical_pars_fragment:dw,envmap_vertex:nw,fog_vertex:iw,fog_pars_vertex:aw,fog_fragment:rw,fog_pars_fragment:sw,gradientmap_pars_fragment:ow,lightmap_pars_fragment:lw,lights_lambert_fragment:cw,lights_lambert_pars_fragment:uw,lights_pars_begin:fw,lights_toon_fragment:hw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:vw,lights_physical_pars_fragment:_w,lights_fragment_begin:xw,lights_fragment_maps:yw,lights_fragment_end:Sw,lightprobes_pars_fragment:bw,logdepthbuf_fragment:Mw,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:Aw,map_fragment:Rw,map_pars_fragment:Cw,map_particle_fragment:ww,map_particle_pars_fragment:Dw,metalnessmap_fragment:Nw,metalnessmap_pars_fragment:Lw,morphinstance_vertex:Uw,morphcolor_vertex:Ow,morphnormal_vertex:Pw,morphtarget_pars_vertex:Iw,morphtarget_vertex:zw,normal_fragment_begin:Fw,normal_fragment_maps:Bw,normal_pars_fragment:Hw,normal_pars_vertex:Gw,normal_vertex:Vw,normalmap_pars_fragment:kw,clearcoat_normal_fragment_begin:Xw,clearcoat_normal_fragment_maps:Ww,clearcoat_pars_fragment:jw,iridescence_pars_fragment:qw,opaque_fragment:Yw,packing:Kw,premultiplied_alpha_fragment:Zw,project_vertex:Qw,dithering_fragment:Jw,dithering_pars_fragment:$w,roughnessmap_fragment:eD,roughnessmap_pars_fragment:tD,shadowmap_pars_fragment:nD,shadowmap_pars_vertex:iD,shadowmap_vertex:aD,shadowmask_pars_fragment:rD,skinbase_vertex:sD,skinning_pars_vertex:oD,skinning_vertex:lD,skinnormal_vertex:cD,specularmap_fragment:uD,specularmap_pars_fragment:fD,tonemapping_fragment:dD,tonemapping_pars_fragment:hD,transmission_fragment:pD,transmission_pars_fragment:mD,uv_pars_fragment:gD,uv_pars_vertex:vD,uv_vertex:_D,worldpos_vertex:xD,background_vert:yD,background_frag:SD,backgroundCube_vert:bD,backgroundCube_frag:MD,cube_vert:ED,cube_frag:TD,depth_vert:AD,depth_frag:RD,distance_vert:CD,distance_frag:wD,equirect_vert:DD,equirect_frag:ND,linedashed_vert:LD,linedashed_frag:UD,meshbasic_vert:OD,meshbasic_frag:PD,meshlambert_vert:ID,meshlambert_frag:zD,meshmatcap_vert:FD,meshmatcap_frag:BD,meshnormal_vert:HD,meshnormal_frag:GD,meshphong_vert:VD,meshphong_frag:kD,meshphysical_vert:XD,meshphysical_frag:WD,meshtoon_vert:jD,meshtoon_frag:qD,points_vert:YD,points_frag:KD,shadow_vert:ZD,shadow_frag:QD,sprite_vert:JD,sprite_frag:$D},Ge={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ea={basic:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([Ge.points,Ge.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([Ge.common,Ge.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([Ge.sprite,Ge.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Xn([Ge.lights,Ge.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ea.physical={uniforms:Xn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const wu={r:0,b:0,g:0},eN=new dn,Ab=new ht;Ab.set(-1,0,0,0,1,0,0,0,1);function tN(a,e,n,r,o,c){const u=new Tt(0);let h=o===!0?0:1,m,p,_=null,v=0,g=null;function S(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const R=P.backgroundBlurriness>0;F=e.get(F,R)}return F}function T(P){let F=!1;const R=S(P);R===null?b(u,h):R&&R.isColor&&(b(R,1),F=!0);const U=a.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function D(P,F){const R=S(F);R&&(R.isCubeTexture||R.mapping===sf)?(p===void 0&&(p=new Ba(new Bl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:xo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(eN.makeRotationFromEuler(F.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Ab),p.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Wt,(_!==R||v!==R.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,g=a.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Ba(new of(2,2),new gi({name:"BackgroundMaterial",uniforms:xo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=R,v=R.version,g=a.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,F){P.getRGB(wu,bb(a)),n.buffers.color.setClear(wu.r,wu.g,wu.b,F,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,F=1){u.set(P),h=F,b(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,b(u,h)},render:T,addToRenderList:D,dispose:x}}function nN(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function h(V,q,pe,me,$){let L=!1;const G=v(V,me,pe,q);c!==G&&(c=G,p(c.object)),L=S(V,me,pe,$),L&&T(V,me,pe,$),$!==null&&e.update($,a.ELEMENT_ARRAY_BUFFER),(L||u)&&(u=!1,R(V,q,pe,me),$!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return a.createVertexArray()}function p(V){return a.bindVertexArray(V)}function _(V){return a.deleteVertexArray(V)}function v(V,q,pe,me){const $=me.wireframe===!0;let L=r[q.id];L===void 0&&(L={},r[q.id]=L);const G=V.isInstancedMesh===!0?V.id:0;let ne=L[G];ne===void 0&&(ne={},L[G]=ne);let ge=ne[pe.id];ge===void 0&&(ge={},ne[pe.id]=ge);let Ee=ge[$];return Ee===void 0&&(Ee=g(m()),ge[$]=Ee),Ee}function g(V){const q=[],pe=[],me=[];for(let $=0;$<n;$++)q[$]=0,pe[$]=0,me[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:pe,attributeDivisors:me,object:V,attributes:{},index:null}}function S(V,q,pe,me){const $=c.attributes,L=q.attributes;let G=0;const ne=pe.getAttributes();for(const ge in ne)if(ne[ge].location>=0){const O=$[ge];let Z=L[ge];if(Z===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;G++}return c.attributesNum!==G||c.index!==me}function T(V,q,pe,me){const $={},L=q.attributes;let G=0;const ne=pe.getAttributes();for(const ge in ne)if(ne[ge].location>=0){let O=L[ge];O===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),$[ge]=Z,G++}c.attributes=$,c.attributesNum=G,c.index=me}function D(){const V=c.newAttributes;for(let q=0,pe=V.length;q<pe;q++)V[q]=0}function b(V){x(V,0)}function x(V,q){const pe=c.newAttributes,me=c.enabledAttributes,$=c.attributeDivisors;pe[V]=1,me[V]===0&&(a.enableVertexAttribArray(V),me[V]=1),$[V]!==q&&(a.vertexAttribDivisor(V,q),$[V]=q)}function P(){const V=c.newAttributes,q=c.enabledAttributes;for(let pe=0,me=q.length;pe<me;pe++)q[pe]!==V[pe]&&(a.disableVertexAttribArray(pe),q[pe]=0)}function F(V,q,pe,me,$,L,G){G===!0?a.vertexAttribIPointer(V,q,pe,$,L):a.vertexAttribPointer(V,q,pe,me,$,L)}function R(V,q,pe,me){D();const $=me.attributes,L=pe.getAttributes(),G=q.defaultAttributeValues;for(const ne in L){const ge=L[ne];if(ge.location>=0){let Ee=$[ne];if(Ee===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),Ee!==void 0){const O=Ee.normalized,Z=Ee.itemSize,te=e.get(Ee);if(te===void 0)continue;const Q=te.buffer,ve=te.type,k=te.bytesPerElement,se=ve===a.INT||ve===a.UNSIGNED_INT||Ee.gpuType===zm;if(Ee.isInterleavedBufferAttribute){const de=Ee.data,Ce=de.stride,Je=Ee.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<ge.locationSize;Be++)x(ge.location+Be,de.meshPerAttribute);V.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<ge.locationSize;Be++)b(ge.location+Be);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let Be=0;Be<ge.locationSize;Be++)F(ge.location+Be,Z/ge.locationSize,ve,O,Ce*k,(Je+Z/ge.locationSize*Be)*k,se)}else{if(Ee.isInstancedBufferAttribute){for(let de=0;de<ge.locationSize;de++)x(ge.location+de,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let de=0;de<ge.locationSize;de++)b(ge.location+de);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let de=0;de<ge.locationSize;de++)F(ge.location+de,Z/ge.locationSize,ve,O,Z*k,Z/ge.locationSize*de*k,se)}}else if(G!==void 0){const O=G[ne];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(ge.location,O);break;case 3:a.vertexAttrib3fv(ge.location,O);break;case 4:a.vertexAttrib4fv(ge.location,O);break;default:a.vertexAttrib1fv(ge.location,O)}}}}P()}function U(){z();for(const V in r){const q=r[V];for(const pe in q){const me=q[pe];for(const $ in me){const L=me[$];for(const G in L)_(L[G].object),delete L[G];delete me[$]}}delete r[V]}}function N(V){if(r[V.id]===void 0)return;const q=r[V.id];for(const pe in q){const me=q[pe];for(const $ in me){const L=me[$];for(const G in L)_(L[G].object),delete L[G];delete me[$]}}delete r[V.id]}function B(V){for(const q in r){const pe=r[q];for(const me in pe){const $=pe[me];if($[V.id]===void 0)continue;const L=$[V.id];for(const G in L)_(L[G].object),delete L[G];delete $[V.id]}}}function A(V){for(const q in r){const pe=r[q],me=V.isInstancedMesh===!0?V.id:0,$=pe[me];if($!==void 0){for(const L in $){const G=$[L];for(const ne in G)_(G[ne].object),delete G[ne];delete $[L]}delete pe[me],Object.keys(pe).length===0&&delete r[q]}}}function z(){j(),u=!0,c!==o&&(c=o,p(c.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:z,resetDefaultState:j,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:b,disableUnusedAttributes:P}}function iN(a,e,n){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),n.update(p,r,1)}function u(m,p,_){_!==0&&(a.drawArraysInstanced(r,m,p,_),n.update(p,r,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];n.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function aN(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Vi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const A=B===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Di&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!A)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(lt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),U=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:R,maxSamples:U,samples:N}}function rN(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new $r,h=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,D=v.clipIntersection,b=v.clipShadows,x=a.get(v);if(!o||T===null||T.length===0||c&&!b)c?_(null):p();else{const P=c?0:r,F=P*4;let R=x.clippingState||null;m.value=R,R=_(T,g,F,S);for(let U=0;U!==F;++U)R[U]=n[U];x.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,T){const D=v!==null?v.length:0;let b=null;if(D!==0){if(b=m.value,T!==!0||b===null){const x=S+D*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<x)&&(b=new Float32Array(x));for(let F=0,R=S;F!==D;++F,R+=4)u.copy(v[F]).applyMatrix4(P,h),u.normal.toArray(b,R),b[R+3]=u.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,b}}const Sr=4,oy=[.125,.215,.35,.446,.526,.582],ns=20,sN=256,bl=new Eb,ly=new Tt;let ep=null,tp=0,np=0,ip=!1;const oN=new re;class cy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=oN}=c;ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ep,tp,np),this._renderer.xr.enabled=ip,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:za,format:Vi,colorSpace:ju,depthBuffer:!1},o=uy(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uy(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lN(c)),this._blurMaterial=uN(c,e,n),this._ggxMaterial=cN(c,e,n)}return o}_compileMaterial(e){const n=new Ba(new ni,e);this._renderer.compile(n,bl)}_sceneToCubeUV(e,n,r,o,c){const m=new wi(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(ly),v.toneMapping=aa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new Bl,new _b({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,b=D.material;let x=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,x=!0):(b.color.copy(ly),x=!0);for(let F=0;F<6;F++){const R=F%3;R===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):R===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const U=this._cubeSize;so(o,R*U,F>2?U:0,U,U),v.setRenderTarget(o),x&&v.render(D,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=P}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===cs||e.mapping===vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fy());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;so(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,bl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:T}=this,D=this._sizeLods[r],b=3*D*(r>T-Sr?r-T+Sr:0),x=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=T-n,so(c,b,x,3*D,2*D),o.setRenderTarget(c),o.render(h,bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,so(e,b,x,3*D,2*D),o.setRenderTarget(e),o.render(h,bl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ns-1),D=c/T,b=isFinite(c)?1+Math.floor(_*D):ns;b>ns&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ns}`);const x=[];let P=0;for(let B=0;B<ns;++B){const A=B/D,z=Math.exp(-A*A/2);x.push(z),B===0?P+=z:B<b&&(P+=2*z)}for(let B=0;B<x.length;B++)x[B]=x[B]/P;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=x,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=T,g.mipInt.value=F-r;const R=this._sizeLods[o],U=3*R*(o>F-Sr?o-F+Sr:0),N=4*(this._cubeSize-R);so(n,U,N,3*R,2*R),m.setRenderTarget(n),m.render(v,bl)}}function lN(a){const e=[],n=[],r=[];let o=a;const c=a-Sr+1+oy.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Sr?m=oy[u-a+Sr-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,D=3,b=2,x=1,P=new Float32Array(D*T*S),F=new Float32Array(b*T*S),R=new Float32Array(x*T*S);for(let N=0;N<S;N++){const B=N%3*2/3-1,A=N>2?0:-1,z=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];P.set(z,D*T*N),F.set(g,b*T*N);const j=[N,N,N,N,N,N];R.set(j,x*T*N)}const U=new ni;U.setAttribute("position",new bn(P,D)),U.setAttribute("uv",new bn(F,b)),U.setAttribute("faceIndex",new bn(R,x)),r.push(new Ba(U,null)),o>Sr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function uy(a,e,n){const r=new ra(a,e,n);return r.texture.mapping=sf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function so(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function cN(a,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function uN(a,e,n){const r=new Float32Array(ns),o=new re(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function fy(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function dy(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

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
	`}class Rb extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new yb(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Bl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Ua});c.uniforms.tEquirect.value=n;const u=new Ba(o,c),h=n.minFilter;return n.minFilter===as&&(n.minFilter=Vn),new mC(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function fN(a){let e=new WeakMap,n=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Ah||S===Rh)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new Rb(T.height);return D.fromEquirectangularTexture(a,g),e.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===Ah||S===Rh,D=S===cs||S===vo;if(T||D){let b=n.get(g);const x=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new cy(a)),b=T?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),b.texture;if(b!==void 0)return b.texture;{const P=g.image;return T&&P&&P.height>0||D&&P&&m(P)?(r===null&&(r=new cy(a)),b=T?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===Ah?g.mapping=cs:S===Rh&&(g.mapping=vo),g}function m(g){let S=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=n.get(S);T!==void 0&&(n.delete(S),T.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function dN(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ho("WebGLRenderer: "+r+" extension not supported."),o}}}function hN(a,e,n,r){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,T=v.attributes.position;let D=0;if(T===void 0)return;if(S!==null){const P=S.array;D=S.version;for(let F=0,R=P.length;F<R;F+=3){const U=P[F+0],N=P[F+1],B=P[F+2];g.push(U,N,N,B,B,U)}}else{const P=T.array;D=T.version;for(let F=0,R=P.length/3-1;F<R;F+=3){const U=F+0,N=F+1,B=F+2;g.push(U,N,N,B,B,U)}}const b=new(T.count>=65535?vb:gb)(g,1);b.version=D;const x=c.get(v);x&&e.remove(x),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function pN(a,e,n){let r;function o(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){a.drawElements(r,g,c,v*u),n.update(g,r,1)}function p(v,g,S){S!==0&&(a.drawElementsInstanced(r,g,c,v*u,S),n.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let D=0;for(let b=0;b<S;b++)D+=g[b];n.update(D,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function mN(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function gN(a,e,n){const r=new WeakMap,o=new fn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let z=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),T===!0&&(F=2),D===!0&&(F=3);let R=h.attributes.position.count*F,U=1;R>e.maxTextureSize&&(U=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const N=new Float32Array(R*U*4*v),B=new hb(N,R,U,v);B.type=na,B.needsUpdate=!0;const A=F*4;for(let j=0;j<v;j++){const V=b[j],q=x[j],pe=P[j],me=R*U*4*j;for(let $=0;$<V.count;$++){const L=$*A;S===!0&&(o.fromBufferAttribute(V,$),N[me+L+0]=o.x,N[me+L+1]=o.y,N[me+L+2]=o.z,N[me+L+3]=0),T===!0&&(o.fromBufferAttribute(q,$),N[me+L+4]=o.x,N[me+L+5]=o.y,N[me+L+6]=o.z,N[me+L+7]=0),D===!0&&(o.fromBufferAttribute(pe,$),N[me+L+8]=o.x,N[me+L+9]=o.y,N[me+L+10]=o.z,N[me+L+11]=pe.itemSize===4?o.w:1)}}g={count:v,texture:B,size:new It(R,U)},r.set(h,g),h.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let S=0;for(let D=0;D<p.length;D++)S+=p[D];const T=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function vN(a,e,n,r,o){let c=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const _N={[QS]:"LINEAR_TONE_MAPPING",[JS]:"REINHARD_TONE_MAPPING",[$S]:"CINEON_TONE_MAPPING",[eb]:"ACES_FILMIC_TONE_MAPPING",[nb]:"AGX_TONE_MAPPING",[ib]:"NEUTRAL_TONE_MAPPING",[tb]:"CUSTOM_TONE_MAPPING"};function xN(a,e,n,r,o,c){const u=new ra(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new _o(e,n):void 0}),h=new ra(e,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new dC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ba(m,p),v=new Eb(-1,1,1,-1,0,1);let g=null,S=null,T=!1,D,b=null,x=[],P=!1;this.setSize=function(F,R){u.setSize(F,R),h.setSize(F,R);for(let U=0;U<x.length;U++){const N=x[U];N.setSize&&N.setSize(F,R)}},this.setEffects=function(F){x=F,P=x.length>0&&x[0].isRenderPass===!0;const R=u.width,U=u.height;for(let N=0;N<x.length;N++){const B=x[N];B.setSize&&B.setSize(R,U)}},this.begin=function(F,R){if(T||F.toneMapping===aa&&x.length===0)return!1;if(b=R,R!==null){const U=R.width,N=R.height;(u.width!==U||u.height!==N)&&this.setSize(U,N)}return P===!1&&F.setRenderTarget(u),D=F.toneMapping,F.toneMapping=aa,!0},this.hasRenderPass=function(){return P},this.end=function(F,R){F.toneMapping=D,T=!0;let U=u,N=h;for(let B=0;B<x.length;B++){const A=x[B];if(A.enabled!==!1&&(A.render(F,N,U,R),A.needsSwap!==!1)){const z=U;U=N,N=z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},Rt.getTransfer(g)===Wt&&(p.defines.SRGB_TRANSFER="");const B=_N[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,F.setRenderTarget(b),F.render(_,v),b=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const Cb=new Wn,_m=new _o(1,1),wb=new hb,Db=new BR,Nb=new yb,hy=[],py=[],my=new Float32Array(16),gy=new Float32Array(9),vy=new Float32Array(4);function Mo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=hy[o];if(c===void 0&&(c=new Float32Array(o),hy[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function Tn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function An(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function cf(a,e){let n=py[e];n===void 0&&(n=new Int32Array(e),py[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function yN(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function SN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2fv(this.addr,e),An(n,e)}}function bN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;a.uniform3fv(this.addr,e),An(n,e)}}function MN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4fv(this.addr,e),An(n,e)}}function EN(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;vy.set(r),a.uniformMatrix2fv(this.addr,!1,vy),An(n,r)}}function TN(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;gy.set(r),a.uniformMatrix3fv(this.addr,!1,gy),An(n,r)}}function AN(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;my.set(r),a.uniformMatrix4fv(this.addr,!1,my),An(n,r)}}function RN(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function CN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2iv(this.addr,e),An(n,e)}}function wN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3iv(this.addr,e),An(n,e)}}function DN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4iv(this.addr,e),An(n,e)}}function NN(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function LN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2uiv(this.addr,e),An(n,e)}}function UN(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3uiv(this.addr,e),An(n,e)}}function ON(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4uiv(this.addr,e),An(n,e)}}function PN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(_m.compareFunction=n.isReversedDepthBuffer()?Xm:km,c=_m):c=Cb,n.setTexture2D(e||c,o)}function IN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Db,o)}function zN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Nb,o)}function FN(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||wb,o)}function BN(a){switch(a){case 5126:return yN;case 35664:return SN;case 35665:return bN;case 35666:return MN;case 35674:return EN;case 35675:return TN;case 35676:return AN;case 5124:case 35670:return RN;case 35667:case 35671:return CN;case 35668:case 35672:return wN;case 35669:case 35673:return DN;case 5125:return NN;case 36294:return LN;case 36295:return UN;case 36296:return ON;case 35678:case 36198:case 36298:case 36306:case 35682:return PN;case 35679:case 36299:case 36307:return IN;case 35680:case 36300:case 36308:case 36293:return zN;case 36289:case 36303:case 36311:case 36292:return FN}}function HN(a,e){a.uniform1fv(this.addr,e)}function GN(a,e){const n=Mo(e,this.size,2);a.uniform2fv(this.addr,n)}function VN(a,e){const n=Mo(e,this.size,3);a.uniform3fv(this.addr,n)}function kN(a,e){const n=Mo(e,this.size,4);a.uniform4fv(this.addr,n)}function XN(a,e){const n=Mo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function WN(a,e){const n=Mo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function jN(a,e){const n=Mo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function qN(a,e){a.uniform1iv(this.addr,e)}function YN(a,e){a.uniform2iv(this.addr,e)}function KN(a,e){a.uniform3iv(this.addr,e)}function ZN(a,e){a.uniform4iv(this.addr,e)}function QN(a,e){a.uniform1uiv(this.addr,e)}function JN(a,e){a.uniform2uiv(this.addr,e)}function $N(a,e){a.uniform3uiv(this.addr,e)}function eL(a,e){a.uniform4uiv(this.addr,e)}function tL(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=_m:u=Cb;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function nL(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Db,c[u])}function iL(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Nb,c[u])}function aL(a,e,n){const r=this.cache,o=e.length,c=cf(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||wb,c[u])}function rL(a){switch(a){case 5126:return HN;case 35664:return GN;case 35665:return VN;case 35666:return kN;case 35674:return XN;case 35675:return WN;case 35676:return jN;case 5124:case 35670:return qN;case 35667:case 35671:return YN;case 35668:case 35672:return KN;case 35669:case 35673:return ZN;case 5125:return QN;case 36294:return JN;case 36295:return $N;case 36296:return eL;case 35678:case 36198:case 36298:case 36306:case 35682:return tL;case 35679:case 36299:case 36307:return nL;case 35680:case 36300:case 36308:case 36293:return iL;case 36289:case 36303:case 36311:case 36292:return aL}}class sL{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=BN(n.type)}}class oL{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rL(n.type)}}class lL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],r)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function _y(a,e){a.seq.push(e),a.map[e.id]=e}function cL(a,e,n){const r=a.name,o=r.length;for(ap.lastIndex=0;;){const c=ap.exec(r),u=ap.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){_y(n,p===void 0?new sL(h,a,e):new oL(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new lL(h),_y(n,v)),n=v}}}class Bu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);cL(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function xy(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const uL=37297;let fL=0;function dL(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const yy=new ht;function hL(a){Rt._getMatrix(yy,Rt.workingColorSpace,a);const e=`mat3( ${yy.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(a)){case qu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Sy(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+dL(a.getShaderSource(e),h)}else return c}function pL(a,e){const n=hL(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const mL={[QS]:"Linear",[JS]:"Reinhard",[$S]:"Cineon",[eb]:"ACESFilmic",[nb]:"AgX",[ib]:"Neutral",[tb]:"Custom"};function gL(a,e){const n=mL[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Du=new re;function vL(){Rt.getLuminanceCoefficients(Du);const a=Du.x.toFixed(4),e=Du.y.toFixed(4),n=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _L(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function xL(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function yL(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function Al(a){return a!==""}function by(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function My(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SL=/^[ \t]*#include +<([\w\d./]+)>/gm;function xm(a){return a.replace(SL,ML)}const bL=new Map;function ML(a,e){let n=_t[e];if(n===void 0){const r=bL.get(e);if(r!==void 0)n=_t[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xm(n)}const EL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ey(a){return a.replace(EL,TL)}function TL(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ty(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const AL={[Ou]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function RL(a){return AL[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CL={[cs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[sf]:"ENVMAP_TYPE_CUBE_UV"};function wL(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":CL[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const DL={[vo]:"ENVMAP_MODE_REFRACTION"};function NL(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":DL[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LL={[ZS]:"ENVMAP_BLENDING_MULTIPLY",[_R]:"ENVMAP_BLENDING_MIX",[xR]:"ENVMAP_BLENDING_ADD"};function UL(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":LL[a.combine]||"ENVMAP_BLENDING_NONE"}function OL(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function PL(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=RL(n),p=wL(n),_=NL(n),v=UL(n),g=OL(n),S=_L(n),T=xL(c),D=o.createProgram();let b,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Al).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Al).join(`
`),x.length>0&&(x+=`
`)):(b=[Ty(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),x=[Ty(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?_t.tonemapping_pars_fragment:"",n.toneMapping!==aa?gL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,pL("linearToOutputTexel",n.outputColorSpace),vL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),u=xm(u),u=by(u,n),u=My(u,n),h=xm(h),h=by(h,n),h=My(h,n),u=Ey(u),h=Ey(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",n.glslVersion===Lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=P+b+u,R=P+x+h,U=xy(o,o.VERTEX_SHADER,F),N=xy(o,o.FRAGMENT_SHADER,R);o.attachShader(D,U),o.attachShader(D,N),n.index0AttributeName!==void 0?o.bindAttribLocation(D,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function B(V){if(a.debug.checkShaderErrors){const q=o.getProgramInfoLog(D)||"",pe=o.getShaderInfoLog(U)||"",me=o.getShaderInfoLog(N)||"",$=q.trim(),L=pe.trim(),G=me.trim();let ne=!0,ge=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(ne=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,D,U,N);else{const Ee=Sy(o,U,"vertex"),O=Sy(o,N,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+Ee+`
`+O)}else $!==""?lt("WebGLProgram: Program Info Log:",$):(L===""||G==="")&&(ge=!1);ge&&(V.diagnostics={runnable:ne,programLog:$,vertexShader:{log:L,prefix:b},fragmentShader:{log:G,prefix:x}})}o.deleteShader(U),o.deleteShader(N),A=new Bu(o,D),z=yL(o,D)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(D,uL)),j},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fL++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=U,this.fragmentShader=N,this}let IL=0;class zL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new FL(e),n.set(e,r)),r}}class FL{constructor(e){this.id=IL++,this.code=e,this.usedTimes=0}}function BL(a){return a===us||a===Xu||a===Wu}function HL(a,e,n,r,o,c){const u=new pb,h=new zL,m=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function D(A,z,j,V,q,pe){const me=V.fog,$=q.geometry,L=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ne=e.get(A.envMap||L,G),ge=ne&&ne.mapping===sf?ne.image.height:null,Ee=S[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&lt("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const O=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Z=O!==void 0?O.length:0;let te=0;$.morphAttributes.position!==void 0&&(te=1),$.morphAttributes.normal!==void 0&&(te=2),$.morphAttributes.color!==void 0&&(te=3);let Q,ve,k,se;if(Ee){const je=ea[Ee];Q=je.vertexShader,ve=je.fragmentShader}else{Q=A.vertexShader,ve=A.fragmentShader;const je=h.getVertexShaderStage(A),an=h.getFragmentShaderStage(A);h.update(A,je,an),k=je.id,se=an.id}const de=a.getRenderTarget(),Ce=a.state.buffers.depth.getReversed(),Je=q.isInstancedMesh===!0,Be=q.isBatchedMesh===!0,xt=!!A.map,ut=!!A.matcap,pt=!!ne,ft=!!A.aoMap,Ae=!!A.lightMap,$e=!!A.bumpMap&&A.wireframe===!1,wt=!!A.normalMap,zt=!!A.displacementMap,nn=!!A.emissiveMap,Jt=!!A.metalnessMap,ln=!!A.roughnessMap,K=A.anisotropy>0,jt=A.clearcoat>0,Ot=A.dispersion>0,I=A.iridescence>0,M=A.sheen>0,ee=A.transmission>0,ce=K&&!!A.anisotropyMap,xe=jt&&!!A.clearcoatMap,De=jt&&!!A.clearcoatNormalMap,Pe=jt&&!!A.clearcoatRoughnessMap,_e=I&&!!A.iridescenceMap,ye=I&&!!A.iridescenceThicknessMap,Ue=M&&!!A.sheenColorMap,ke=M&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Ie=!!A.specularColorMap,tt=!!A.specularIntensityMap,nt=ee&&!!A.transmissionMap,ct=ee&&!!A.thicknessMap,W=!!A.gradientMap,Ne=!!A.alphaMap,be=A.alphaTest>0,Oe=!!A.alphaHash,Ve=!!A.extensions;let Re=aa;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Re=a.toneMapping);const Ze={shaderID:Ee,shaderType:A.type,shaderName:A.name,vertexShader:Q,fragmentShader:ve,defines:A.defines,customVertexShaderID:k,customFragmentShaderID:se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Be,batchingColor:Be&&q._colorsTexture!==null,instancing:Je,instancingColor:Je&&q.instanceColor!==null,instancingMorph:Je&&q.morphTexture!==null,outputColorSpace:de===null?a.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:xt,matcap:ut,envMap:pt,envMapMode:pt&&ne.mapping,envMapCubeUVHeight:ge,aoMap:ft,lightMap:Ae,bumpMap:$e,normalMap:wt,displacementMap:zt,emissiveMap:nn,normalMapObjectSpace:wt&&A.normalMapType===bR,normalMapTangentSpace:wt&&A.normalMapType===wx,packedNormalMap:wt&&A.normalMapType===wx&&BL(A.normalMap.format),metalnessMap:Jt,roughnessMap:ln,anisotropy:K,anisotropyMap:ce,clearcoat:jt,clearcoatMap:xe,clearcoatNormalMap:De,clearcoatRoughnessMap:Pe,dispersion:Ot,iridescence:I,iridescenceMap:_e,iridescenceThicknessMap:ye,sheen:M,sheenColorMap:Ue,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:tt,transmission:ee,transmissionMap:nt,thicknessMap:ct,gradientMap:W,opaque:A.transparent===!1&&A.blending===fo&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:be,alphaHash:Oe,combine:A.combine,mapUv:xt&&T(A.map.channel),aoMapUv:ft&&T(A.aoMap.channel),lightMapUv:Ae&&T(A.lightMap.channel),bumpMapUv:$e&&T(A.bumpMap.channel),normalMapUv:wt&&T(A.normalMap.channel),displacementMapUv:zt&&T(A.displacementMap.channel),emissiveMapUv:nn&&T(A.emissiveMap.channel),metalnessMapUv:Jt&&T(A.metalnessMap.channel),roughnessMapUv:ln&&T(A.roughnessMap.channel),anisotropyMapUv:ce&&T(A.anisotropyMap.channel),clearcoatMapUv:xe&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(A.sheenRoughnessMap.channel),specularMapUv:Fe&&T(A.specularMap.channel),specularColorMapUv:Ie&&T(A.specularColorMap.channel),specularIntensityMapUv:tt&&T(A.specularIntensityMap.channel),transmissionMapUv:nt&&T(A.transmissionMap.channel),thicknessMapUv:ct&&T(A.thicknessMap.channel),alphaMapUv:Ne&&T(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(wt||K),vertexNormals:!!$.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!$.attributes.uv&&(xt||Ne),fog:!!me,useFog:A.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||$.attributes.normal===void 0&&wt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ce,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:te,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&j.length>0,shadowMapType:a.shadowMap.type,toneMapping:Re,decodeVideoTexture:xt&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Wt,decodeVideoTextureEmissive:nn&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===Wt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Na,flipSided:A.side===ti,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function b(A){const z=[];if(A.shaderID?z.push(A.shaderID):(z.push(A.customVertexShaderID),z.push(A.customFragmentShaderID)),A.defines!==void 0)for(const j in A.defines)z.push(j),z.push(A.defines[j]);return A.isRawShaderMaterial===!1&&(x(z,A),P(z,A),z.push(a.outputColorSpace)),z.push(A.customProgramCacheKey),z.join()}function x(A,z){A.push(z.precision),A.push(z.outputColorSpace),A.push(z.envMapMode),A.push(z.envMapCubeUVHeight),A.push(z.mapUv),A.push(z.alphaMapUv),A.push(z.lightMapUv),A.push(z.aoMapUv),A.push(z.bumpMapUv),A.push(z.normalMapUv),A.push(z.displacementMapUv),A.push(z.emissiveMapUv),A.push(z.metalnessMapUv),A.push(z.roughnessMapUv),A.push(z.anisotropyMapUv),A.push(z.clearcoatMapUv),A.push(z.clearcoatNormalMapUv),A.push(z.clearcoatRoughnessMapUv),A.push(z.iridescenceMapUv),A.push(z.iridescenceThicknessMapUv),A.push(z.sheenColorMapUv),A.push(z.sheenRoughnessMapUv),A.push(z.specularMapUv),A.push(z.specularColorMapUv),A.push(z.specularIntensityMapUv),A.push(z.transmissionMapUv),A.push(z.thicknessMapUv),A.push(z.combine),A.push(z.fogExp2),A.push(z.sizeAttenuation),A.push(z.morphTargetsCount),A.push(z.morphAttributeCount),A.push(z.numDirLights),A.push(z.numPointLights),A.push(z.numSpotLights),A.push(z.numSpotLightMaps),A.push(z.numHemiLights),A.push(z.numRectAreaLights),A.push(z.numDirLightShadows),A.push(z.numPointLightShadows),A.push(z.numSpotLightShadows),A.push(z.numSpotLightShadowsWithMaps),A.push(z.numLightProbes),A.push(z.shadowMapType),A.push(z.toneMapping),A.push(z.numClippingPlanes),A.push(z.numClipIntersection),A.push(z.depthPacking)}function P(A,z){u.disableAll(),z.instancing&&u.enable(0),z.instancingColor&&u.enable(1),z.instancingMorph&&u.enable(2),z.matcap&&u.enable(3),z.envMap&&u.enable(4),z.normalMapObjectSpace&&u.enable(5),z.normalMapTangentSpace&&u.enable(6),z.clearcoat&&u.enable(7),z.iridescence&&u.enable(8),z.alphaTest&&u.enable(9),z.vertexColors&&u.enable(10),z.vertexAlphas&&u.enable(11),z.vertexUv1s&&u.enable(12),z.vertexUv2s&&u.enable(13),z.vertexUv3s&&u.enable(14),z.vertexTangents&&u.enable(15),z.anisotropy&&u.enable(16),z.alphaHash&&u.enable(17),z.batching&&u.enable(18),z.dispersion&&u.enable(19),z.batchingColor&&u.enable(20),z.gradientMap&&u.enable(21),z.packedNormalMap&&u.enable(22),z.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),z.fog&&u.enable(0),z.useFog&&u.enable(1),z.flatShading&&u.enable(2),z.logarithmicDepthBuffer&&u.enable(3),z.reversedDepthBuffer&&u.enable(4),z.skinning&&u.enable(5),z.morphTargets&&u.enable(6),z.morphNormals&&u.enable(7),z.morphColors&&u.enable(8),z.premultipliedAlpha&&u.enable(9),z.shadowMapEnabled&&u.enable(10),z.doubleSided&&u.enable(11),z.flipSided&&u.enable(12),z.useDepthPacking&&u.enable(13),z.dithering&&u.enable(14),z.transmission&&u.enable(15),z.sheen&&u.enable(16),z.opaque&&u.enable(17),z.pointsUvs&&u.enable(18),z.decodeVideoTexture&&u.enable(19),z.decodeVideoTextureEmissive&&u.enable(20),z.alphaToCoverage&&u.enable(21),z.numLightProbeGrids>0&&u.enable(22),z.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function F(A){const z=S[A.type];let j;if(z){const V=ea[z];j=cC.clone(V.uniforms)}else j=A.uniforms;return j}function R(A,z){let j=_.get(z);return j!==void 0?++j.usedTimes:(j=new PL(a,z,A,o),p.push(j),_.set(z,j)),j}function U(A){if(--A.usedTimes===0){const z=p.indexOf(A);p[z]=p[p.length-1],p.pop(),_.delete(A.cacheKey),A.destroy()}}function N(A){h.remove(A)}function B(){h.dispose()}return{getParameters:D,getProgramCacheKey:b,getUniforms:F,acquireProgram:R,releaseProgram:U,releaseShaderCache:N,programs:p,dispose:B}}function GL(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function VL(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Ay(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ry(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,T,D,b,x){let P=a[e];return P===void 0?(P={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:D,renderOrder:g.renderOrder,z:b,group:x},a[e]=P):(P.id=g.id,P.object=g,P.geometry=S,P.material=T,P.materialVariant=u(g),P.groupOrder=D,P.renderOrder=g.renderOrder,P.z=b,P.group=x),e++,P}function m(g,S,T,D,b,x){const P=h(g,S,T,D,b,x);T.transmission>0?r.push(P):T.transparent===!0?o.push(P):n.push(P)}function p(g,S,T,D,b,x){const P=h(g,S,T,D,b,x);T.transmission>0?r.unshift(P):T.transparent===!0?o.unshift(P):n.unshift(P)}function _(g,S,T){n.length>1&&n.sort(g||VL),r.length>1&&r.sort(S||Ay),o.length>1&&o.sort(S||Ay),T&&(n.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,S=a.length;g<S;g++){const T=a[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:_}}function kL(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Ry,a.set(r,[u])):o>=c.length?(u=new Ry,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function XL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Tt};break;case"SpotLight":n={position:new re,direction:new re,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new re,halfWidth:new re,halfHeight:new re};break}return a[e.id]=n,n}}}function WL(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let jL=0;function qL(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function YL(a){const e=new XL,n=WL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const o=new re,c=new dn,u=new dn;function h(p){let _=0,v=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let S=0,T=0,D=0,b=0,x=0,P=0,F=0,R=0,U=0,N=0,B=0;p.sort(qL);for(let z=0,j=p.length;z<j;z++){const V=p[z],q=V.color,pe=V.intensity,me=V.distance;let $=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===us?$=V.shadow.map.texture:$=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=q.r*pe,v+=q.g*pe,g+=q.b*pe;else if(V.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(V.sh.coefficients[L],pe);B++}else if(V.isDirectionalLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ne=n.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.directionalShadow[S]=ne,r.directionalShadowMap[S]=$,r.directionalShadowMatrix[S]=V.shadow.matrix,P++}r.directional[S]=L,S++}else if(V.isSpotLight){const L=e.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(q).multiplyScalar(pe),L.distance=me,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,r.spot[D]=L;const G=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,G.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[D]=G.matrix,V.castShadow){const ne=n.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.spotShadow[D]=ne,r.spotShadowMap[D]=$,R++}D++}else if(V.isRectAreaLight){const L=e.get(V);L.color.copy(q).multiplyScalar(pe),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),r.rectArea[b]=L,b++}else if(V.isPointLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const G=V.shadow,ne=n.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,r.pointShadow[T]=ne,r.pointShadowMap[T]=$,r.pointShadowMatrix[T]=V.shadow.matrix,F++}r.point[T]=L,T++}else if(V.isHemisphereLight){const L=e.get(V);L.skyColor.copy(V.color).multiplyScalar(pe),L.groundColor.copy(V.groundColor).multiplyScalar(pe),r.hemi[x]=L,x++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==S||A.pointLength!==T||A.spotLength!==D||A.rectAreaLength!==b||A.hemiLength!==x||A.numDirectionalShadows!==P||A.numPointShadows!==F||A.numSpotShadows!==R||A.numSpotMaps!==U||A.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=D,r.rectArea.length=b,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=R+U-N,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,A.directionalLength=S,A.pointLength=T,A.spotLength=D,A.rectAreaLength=b,A.hemiLength=x,A.numDirectionalShadows=P,A.numPointShadows=F,A.numSpotShadows=R,A.numSpotMaps=U,A.numLightProbes=B,r.version=jL++)}function m(p,_){let v=0,g=0,S=0,T=0,D=0;const b=_.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const F=p[x];if(F.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(b),v++}else if(F.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(b),R.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(b),S++}else if(F.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(b),u.identity(),c.copy(F.matrixWorld),c.premultiply(b),u.extractRotation(c),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(F.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){const R=r.hemi[D];R.direction.setFromMatrixPosition(F.matrixWorld),R.direction.transformDirection(b),D++}}}return{setup:h,setupView:m,state:r}}function Cy(a){const e=new YL(a),n=[],r=[],o=[];function c(g){v.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function KL(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Cy(a),e.set(o,[h])):c>=u.length?(h=new Cy(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const ZL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QL=`uniform sampler2D shadow_pass;
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
}`,JL=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],$L=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],wy=new dn,Ml=new re,rp=new re;function eU(a,e,n){let r=new xb;const o=new It,c=new It,u=new fn,h=new hC,m=new pC,p={},_=n.maxTextureSize,v={[Tr]:ti,[ti]:Tr,[Na]:Na},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:ZL,fragmentShader:QL}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new ni;T.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ba(T,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let x=this.type;this.render=function(N,B,A){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||N.length===0)return;this.type===$3&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ou);const z=a.getRenderTarget(),j=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),q=a.state;q.setBlending(Ua),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const pe=x!==this.type;pe&&B.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach($=>$.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,$=N.length;me<$;me++){const L=N[me],G=L.shadow;if(G===void 0){lt("WebGLShadowMap:",L,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ne=G.getFrameExtents();o.multiply(ne),c.copy(G.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/ne.x),o.x=c.x*ne.x,G.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/ne.y),o.y=c.y*ne.y,G.mapSize.y=c.y));const ge=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ge,G.map===null||pe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Tl){if(L.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ra(o.x,o.y,{format:us,type:za,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),G.map.texture.name=L.name+".shadowMap",G.map.depthTexture=new _o(o.x,o.y,na),G.map.depthTexture.name=L.name+".shadowMapDepth",G.map.depthTexture.format=Fa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn}else L.isPointLight?(G.map=new Rb(o.x),G.map.depthTexture=new oC(o.x,sa)):(G.map=new ra(o.x,o.y),G.map.depthTexture=new _o(o.x,o.y,sa)),G.map.depthTexture.name=L.name+".shadowMap",G.map.depthTexture.format=Fa,this.type===Ou?(G.map.depthTexture.compareFunction=ge?Xm:km,G.map.depthTexture.minFilter=Vn,G.map.depthTexture.magFilter=Vn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn);G.camera.updateProjectionMatrix()}const Ee=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Ee;O++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,O),a.clear();else{O===0&&(a.setRenderTarget(G.map),a.clear());const Z=G.getViewport(O);u.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),q.viewport(u)}if(L.isPointLight){const Z=G.camera,te=G.matrix,Q=L.distance||Z.far;Q!==Z.far&&(Z.far=Q,Z.updateProjectionMatrix()),Ml.setFromMatrixPosition(L.matrixWorld),Z.position.copy(Ml),rp.copy(Z.position),rp.add(JL[O]),Z.up.copy($L[O]),Z.lookAt(rp),Z.updateMatrixWorld(),te.makeTranslation(-Ml.x,-Ml.y,-Ml.z),wy.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(wy,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(L);r=G.getFrustum(),R(B,A,G.camera,L,this.type)}G.isPointLightShadow!==!0&&this.type===Tl&&P(G,A),G.needsUpdate=!1}x=this.type,b.needsUpdate=!1,a.setRenderTarget(z,j,V)};function P(N,B){const A=e.update(D);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ra(o.x,o.y,{format:us,type:za})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(B,null,A,g,D,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(B,null,A,S,D,null)}function F(N,B,A,z){let j=null;const V=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)j=V;else if(j=A.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=j.uuid,pe=B.uuid;let me=p[q];me===void 0&&(me={},p[q]=me);let $=me[pe];$===void 0&&($=j.clone(),me[pe]=$,B.addEventListener("dispose",U)),j=$}if(j.visible=B.visible,j.wireframe=B.wireframe,z===Tl?j.side=B.shadowSide!==null?B.shadowSide:B.side:j.side=B.shadowSide!==null?B.shadowSide:v[B.side],j.alphaMap=B.alphaMap,j.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,j.map=B.map,j.clipShadows=B.clipShadows,j.clippingPlanes=B.clippingPlanes,j.clipIntersection=B.clipIntersection,j.displacementMap=B.displacementMap,j.displacementScale=B.displacementScale,j.displacementBias=B.displacementBias,j.wireframeLinewidth=B.wireframeLinewidth,j.linewidth=B.linewidth,A.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const q=a.properties.get(j);q.light=A}return j}function R(N,B,A,z,j){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&j===Tl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);const pe=e.update(N),me=N.material;if(Array.isArray(me)){const $=pe.groups;for(let L=0,G=$.length;L<G;L++){const ne=$[L],ge=me[ne.materialIndex];if(ge&&ge.visible){const Ee=F(N,ge,z,j);N.onBeforeShadow(a,N,B,A,pe,Ee,ne),a.renderBufferDirect(A,null,pe,Ee,N,ne),N.onAfterShadow(a,N,B,A,pe,Ee,ne)}}}else if(me.visible){const $=F(N,me,z,j);N.onBeforeShadow(a,N,B,A,pe,$,null),a.renderBufferDirect(A,null,pe,$,N,null),N.onAfterShadow(a,N,B,A,pe,$,null)}}const q=N.children;for(let pe=0,me=q.length;pe<me;pe++)R(q[pe],B,A,z,j)}function U(N){N.target.removeEventListener("dispose",U);for(const A in p){const z=p[A],j=N.target.uuid;j in z&&(z[j].dispose(),delete z[j])}}}function tU(a,e){function n(){let W=!1;const Ne=new fn;let be=null;const Oe=new fn(0,0,0,0);return{setMask:function(Ve){be!==Ve&&!W&&(a.colorMask(Ve,Ve,Ve,Ve),be=Ve)},setLocked:function(Ve){W=Ve},setClear:function(Ve,Re,Ze,je,an){an===!0&&(Ve*=je,Re*=je,Ze*=je),Ne.set(Ve,Re,Ze,je),Oe.equals(Ne)===!1&&(a.clearColor(Ve,Re,Ze,je),Oe.copy(Ne))},reset:function(){W=!1,be=null,Oe.set(-1,0,0,0)}}}function r(){let W=!1,Ne=!1,be=null,Oe=null,Ve=null;return{setReversed:function(Re){if(Ne!==Re){const Ze=e.get("EXT_clip_control");Re?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ne=Re;const je=Ve;Ve=null,this.setClear(je)}},getReversed:function(){return Ne},setTest:function(Re){Re?de(a.DEPTH_TEST):Ce(a.DEPTH_TEST)},setMask:function(Re){be!==Re&&!W&&(a.depthMask(Re),be=Re)},setFunc:function(Re){if(Ne&&(Re=LR[Re]),Oe!==Re){switch(Re){case Np:a.depthFunc(a.NEVER);break;case Lp:a.depthFunc(a.ALWAYS);break;case Up:a.depthFunc(a.LESS);break;case go:a.depthFunc(a.LEQUAL);break;case Op:a.depthFunc(a.EQUAL);break;case Pp:a.depthFunc(a.GEQUAL);break;case Ip:a.depthFunc(a.GREATER);break;case zp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Oe=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Ve!==Re&&(Ve=Re,Ne&&(Re=1-Re),a.clearDepth(Re))},reset:function(){W=!1,be=null,Oe=null,Ve=null,Ne=!1}}}function o(){let W=!1,Ne=null,be=null,Oe=null,Ve=null,Re=null,Ze=null,je=null,an=null;return{setTest:function(Bt){W||(Bt?de(a.STENCIL_TEST):Ce(a.STENCIL_TEST))},setMask:function(Bt){Ne!==Bt&&!W&&(a.stencilMask(Bt),Ne=Bt)},setFunc:function(Bt,ii,ai){(be!==Bt||Oe!==ii||Ve!==ai)&&(a.stencilFunc(Bt,ii,ai),be=Bt,Oe=ii,Ve=ai)},setOp:function(Bt,ii,ai){(Re!==Bt||Ze!==ii||je!==ai)&&(a.stencilOp(Bt,ii,ai),Re=Bt,Ze=ii,je=ai)},setLocked:function(Bt){W=Bt},setClear:function(Bt){an!==Bt&&(a.clearStencil(Bt),an=Bt)},reset:function(){W=!1,Ne=null,be=null,Oe=null,Ve=null,Re=null,Ze=null,je=null,an=null}}}const c=new n,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,T=[],D=null,b=!1,x=null,P=null,F=null,R=null,U=null,N=null,B=null,A=new Tt(0,0,0),z=0,j=!1,V=null,q=null,pe=null,me=null,$=null;const L=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const ge=a.getParameter(a.VERSION);ge.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ge)[1]),G=ne>=1):ge.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),G=ne>=2);let Ee=null,O={};const Z=a.getParameter(a.SCISSOR_BOX),te=a.getParameter(a.VIEWPORT),Q=new fn().fromArray(Z),ve=new fn().fromArray(te);function k(W,Ne,be,Oe){const Ve=new Uint8Array(4),Re=a.createTexture();a.bindTexture(W,Re),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<be;Ze++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Oe,0,a.RGBA,a.UNSIGNED_BYTE,Ve):a.texImage2D(Ne+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ve);return Re}const se={};se[a.TEXTURE_2D]=k(a.TEXTURE_2D,a.TEXTURE_2D,1),se[a.TEXTURE_CUBE_MAP]=k(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[a.TEXTURE_2D_ARRAY]=k(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),se[a.TEXTURE_3D]=k(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),de(a.DEPTH_TEST),u.setFunc(go),$e(!1),wt(Tx),de(a.CULL_FACE),ft(Ua);function de(W){_[W]!==!0&&(a.enable(W),_[W]=!0)}function Ce(W){_[W]!==!1&&(a.disable(W),_[W]=!1)}function Je(W,Ne){return g[W]!==Ne?(a.bindFramebuffer(W,Ne),g[W]=Ne,W===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ne),W===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Be(W,Ne){let be=T,Oe=!1;if(W){be=S.get(Ne),be===void 0&&(be=[],S.set(Ne,be));const Ve=W.textures;if(be.length!==Ve.length||be[0]!==a.COLOR_ATTACHMENT0){for(let Re=0,Ze=Ve.length;Re<Ze;Re++)be[Re]=a.COLOR_ATTACHMENT0+Re;be.length=Ve.length,Oe=!0}}else be[0]!==a.BACK&&(be[0]=a.BACK,Oe=!0);Oe&&a.drawBuffers(be)}function xt(W){return D!==W?(a.useProgram(W),D=W,!0):!1}const ut={[ts]:a.FUNC_ADD,[tR]:a.FUNC_SUBTRACT,[nR]:a.FUNC_REVERSE_SUBTRACT};ut[iR]=a.MIN,ut[aR]=a.MAX;const pt={[rR]:a.ZERO,[sR]:a.ONE,[oR]:a.SRC_COLOR,[wp]:a.SRC_ALPHA,[hR]:a.SRC_ALPHA_SATURATE,[fR]:a.DST_COLOR,[cR]:a.DST_ALPHA,[lR]:a.ONE_MINUS_SRC_COLOR,[Dp]:a.ONE_MINUS_SRC_ALPHA,[dR]:a.ONE_MINUS_DST_COLOR,[uR]:a.ONE_MINUS_DST_ALPHA,[pR]:a.CONSTANT_COLOR,[mR]:a.ONE_MINUS_CONSTANT_COLOR,[gR]:a.CONSTANT_ALPHA,[vR]:a.ONE_MINUS_CONSTANT_ALPHA};function ft(W,Ne,be,Oe,Ve,Re,Ze,je,an,Bt){if(W===Ua){b===!0&&(Ce(a.BLEND),b=!1);return}if(b===!1&&(de(a.BLEND),b=!0),W!==eR){if(W!==x||Bt!==j){if((P!==ts||U!==ts)&&(a.blendEquation(a.FUNC_ADD),P=ts,U=ts),Bt)switch(W){case fo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ax:a.blendFunc(a.ONE,a.ONE);break;case Rx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Cx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case fo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ax:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Rx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cx:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}F=null,R=null,N=null,B=null,A.set(0,0,0),z=0,x=W,j=Bt}return}Ve=Ve||Ne,Re=Re||be,Ze=Ze||Oe,(Ne!==P||Ve!==U)&&(a.blendEquationSeparate(ut[Ne],ut[Ve]),P=Ne,U=Ve),(be!==F||Oe!==R||Re!==N||Ze!==B)&&(a.blendFuncSeparate(pt[be],pt[Oe],pt[Re],pt[Ze]),F=be,R=Oe,N=Re,B=Ze),(je.equals(A)===!1||an!==z)&&(a.blendColor(je.r,je.g,je.b,an),A.copy(je),z=an),x=W,j=!1}function Ae(W,Ne){W.side===Na?Ce(a.CULL_FACE):de(a.CULL_FACE);let be=W.side===ti;Ne&&(be=!be),$e(be),W.blending===fo&&W.transparent===!1?ft(Ua):ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Oe=W.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(a.SAMPLE_ALPHA_TO_COVERAGE):Ce(a.SAMPLE_ALPHA_TO_COVERAGE)}function $e(W){V!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),V=W)}function wt(W){W!==Q3?(de(a.CULL_FACE),W!==q&&(W===Tx?a.cullFace(a.BACK):W===J3?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ce(a.CULL_FACE),q=W}function zt(W){W!==pe&&(G&&a.lineWidth(W),pe=W)}function nn(W,Ne,be){W?(de(a.POLYGON_OFFSET_FILL),(me!==Ne||$!==be)&&(me=Ne,$=be,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,be))):Ce(a.POLYGON_OFFSET_FILL)}function Jt(W){W?de(a.SCISSOR_TEST):Ce(a.SCISSOR_TEST)}function ln(W){W===void 0&&(W=a.TEXTURE0+L-1),Ee!==W&&(a.activeTexture(W),Ee=W)}function K(W,Ne,be){be===void 0&&(Ee===null?be=a.TEXTURE0+L-1:be=Ee);let Oe=O[be];Oe===void 0&&(Oe={type:void 0,texture:void 0},O[be]=Oe),(Oe.type!==W||Oe.texture!==Ne)&&(Ee!==be&&(a.activeTexture(be),Ee=be),a.bindTexture(W,Ne||se[W]),Oe.type=W,Oe.texture=Ne)}function jt(){const W=O[Ee];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ot(){try{a.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function I(){try{a.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function M(){try{a.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ee(){try{a.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ce(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function xe(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function De(){try{a.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Pe(){try{a.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function _e(){try{a.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ye(){try{a.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ue(W){return v[W]!==void 0?v[W]:a.getParameter(W)}function ke(W,Ne){v[W]!==Ne&&(a.pixelStorei(W,Ne),v[W]=Ne)}function Fe(W){Q.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Q.copy(W))}function Ie(W){ve.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),ve.copy(W))}function tt(W,Ne){let be=p.get(Ne);be===void 0&&(be=new WeakMap,p.set(Ne,be));let Oe=be.get(W);Oe===void 0&&(Oe=a.getUniformBlockIndex(Ne,W.name),be.set(W,Oe))}function nt(W,Ne){const Oe=p.get(Ne).get(W);m.get(Ne)!==Oe&&(a.uniformBlockBinding(Ne,Oe,W.__bindingPointIndex),m.set(Ne,Oe))}function ct(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},v={},Ee=null,O={},g={},S=new WeakMap,T=[],D=null,b=!1,x=null,P=null,F=null,R=null,U=null,N=null,B=null,A=new Tt(0,0,0),z=0,j=!1,V=null,q=null,pe=null,me=null,$=null,Q.set(0,0,a.canvas.width,a.canvas.height),ve.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:de,disable:Ce,bindFramebuffer:Je,drawBuffers:Be,useProgram:xt,setBlending:ft,setMaterial:Ae,setFlipSided:$e,setCullFace:wt,setLineWidth:zt,setPolygonOffset:nn,setScissorTest:Jt,activeTexture:ln,bindTexture:K,unbindTexture:jt,compressedTexImage2D:Ot,compressedTexImage3D:I,texImage2D:_e,texImage3D:ye,pixelStorei:ke,getParameter:Ue,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:De,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:xe,scissor:Fe,viewport:Ie,reset:ct}}function nU(a,e,n,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(I,M){return T?new OffscreenCanvas(I,M):Ku("canvas")}function b(I,M,ee){let ce=1;const xe=Ot(I);if((xe.width>ee||xe.height>ee)&&(ce=ee/Math.max(xe.width,xe.height)),ce<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const De=Math.floor(ce*xe.width),Pe=Math.floor(ce*xe.height);g===void 0&&(g=D(De,Pe));const _e=M?D(De,Pe):g;return _e.width=De,_e.height=Pe,_e.getContext("2d").drawImage(I,0,0,De,Pe),lt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+De+"x"+Pe+")."),_e}else return"data"in I&&lt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),I;return I}function x(I){return I.generateMipmaps}function P(I){a.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(I,M,ee,ce,xe,De=!1){if(I!==null){if(a[I]!==void 0)return a[I];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;ce&&(Pe=e.get("EXT_texture_norm16"),Pe||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=M;if(M===a.RED&&(ee===a.FLOAT&&(_e=a.R32F),ee===a.HALF_FLOAT&&(_e=a.R16F),ee===a.UNSIGNED_BYTE&&(_e=a.R8),ee===a.UNSIGNED_SHORT&&Pe&&(_e=Pe.R16_EXT),ee===a.SHORT&&Pe&&(_e=Pe.R16_SNORM_EXT)),M===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(_e=a.R8UI),ee===a.UNSIGNED_SHORT&&(_e=a.R16UI),ee===a.UNSIGNED_INT&&(_e=a.R32UI),ee===a.BYTE&&(_e=a.R8I),ee===a.SHORT&&(_e=a.R16I),ee===a.INT&&(_e=a.R32I)),M===a.RG&&(ee===a.FLOAT&&(_e=a.RG32F),ee===a.HALF_FLOAT&&(_e=a.RG16F),ee===a.UNSIGNED_BYTE&&(_e=a.RG8),ee===a.UNSIGNED_SHORT&&Pe&&(_e=Pe.RG16_EXT),ee===a.SHORT&&Pe&&(_e=Pe.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(_e=a.RG8UI),ee===a.UNSIGNED_SHORT&&(_e=a.RG16UI),ee===a.UNSIGNED_INT&&(_e=a.RG32UI),ee===a.BYTE&&(_e=a.RG8I),ee===a.SHORT&&(_e=a.RG16I),ee===a.INT&&(_e=a.RG32I)),M===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(_e=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(_e=a.RGB16UI),ee===a.UNSIGNED_INT&&(_e=a.RGB32UI),ee===a.BYTE&&(_e=a.RGB8I),ee===a.SHORT&&(_e=a.RGB16I),ee===a.INT&&(_e=a.RGB32I)),M===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(_e=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(_e=a.RGBA16UI),ee===a.UNSIGNED_INT&&(_e=a.RGBA32UI),ee===a.BYTE&&(_e=a.RGBA8I),ee===a.SHORT&&(_e=a.RGBA16I),ee===a.INT&&(_e=a.RGBA32I)),M===a.RGB&&(ee===a.UNSIGNED_SHORT&&Pe&&(_e=Pe.RGB16_EXT),ee===a.SHORT&&Pe&&(_e=Pe.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(_e=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(_e=a.R11F_G11F_B10F)),M===a.RGBA){const ye=De?qu:Rt.getTransfer(xe);ee===a.FLOAT&&(_e=a.RGBA32F),ee===a.HALF_FLOAT&&(_e=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(_e=ye===Wt?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Pe&&(_e=Pe.RGBA16_EXT),ee===a.SHORT&&Pe&&(_e=Pe.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(_e=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(_e=a.RGB5_A1)}return(_e===a.R16F||_e===a.R32F||_e===a.RG16F||_e===a.RG32F||_e===a.RGBA16F||_e===a.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function U(I,M){let ee;return I?M===null||M===sa||M===Ll?ee=a.DEPTH24_STENCIL8:M===na?ee=a.DEPTH32F_STENCIL8:M===Nl&&(ee=a.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===Ll?ee=a.DEPTH_COMPONENT24:M===na?ee=a.DEPTH_COMPONENT32F:M===Nl&&(ee=a.DEPTH_COMPONENT16),ee}function N(I,M){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pn&&I.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function B(I){const M=I.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function A(I){const M=I.target;M.removeEventListener("dispose",A),V(M)}function z(I){const M=r.get(I);if(M.__webglInit===void 0)return;const ee=I.source,ce=S.get(ee);if(ce){const xe=ce[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&j(I),Object.keys(ce).length===0&&S.delete(ee)}r.remove(I)}function j(I){const M=r.get(I);a.deleteTexture(M.__webglTexture);const ee=I.source,ce=S.get(ee);delete ce[M.__cacheKey],u.memory.textures--}function V(I){const M=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let xe=0;xe<M.__webglFramebuffer[ce].length;xe++)a.deleteFramebuffer(M.__webglFramebuffer[ce][xe]);else a.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)a.deleteFramebuffer(M.__webglFramebuffer[ce]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=I.textures;for(let ce=0,xe=ee.length;ce<xe;ce++){const De=r.get(ee[ce]);De.__webglTexture&&(a.deleteTexture(De.__webglTexture),u.memory.textures--),r.remove(ee[ce])}r.remove(I)}let q=0;function pe(){q=0}function me(){return q}function $(I){q=I}function L(){const I=q;return I>=o.maxTextures&&lt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),q+=1,I}function G(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function ne(I,M){const ee=r.get(I);if(I.isVideoTexture&&K(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ee.__version!==I.version){const ce=I.image;if(ce===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(ee,I,M);return}}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+M)}function ge(I,M){const ee=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){Ce(ee,I,M);return}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+M)}function Ee(I,M){const ee=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){Ce(ee,I,M);return}n.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+M)}function O(I,M){const ee=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ee.__version!==I.version){Je(ee,I,M);return}n.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+M)}const Z={[Fp]:a.REPEAT,[La]:a.CLAMP_TO_EDGE,[Bp]:a.MIRRORED_REPEAT},te={[Pn]:a.NEAREST,[yR]:a.NEAREST_MIPMAP_NEAREST,[au]:a.NEAREST_MIPMAP_LINEAR,[Vn]:a.LINEAR,[Ch]:a.LINEAR_MIPMAP_NEAREST,[as]:a.LINEAR_MIPMAP_LINEAR},Q={[MR]:a.NEVER,[CR]:a.ALWAYS,[ER]:a.LESS,[km]:a.LEQUAL,[TR]:a.EQUAL,[Xm]:a.GEQUAL,[AR]:a.GREATER,[RR]:a.NOTEQUAL};function ve(I,M){if(M.type===na&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Ch||M.magFilter===au||M.magFilter===as||M.minFilter===Vn||M.minFilter===Ch||M.minFilter===au||M.minFilter===as)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,Z[M.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,Z[M.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,Z[M.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,te[M.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==au&&M.minFilter!==as||M.type===na&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function k(I,M){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",B));const ce=M.source;let xe=S.get(ce);xe===void 0&&(xe={},S.set(ce,xe));const De=G(M);if(De!==I.__cacheKey){xe[De]===void 0&&(xe[De]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),xe[De].usedTimes++;const Pe=xe[I.__cacheKey];Pe!==void 0&&(xe[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&j(M)),I.__cacheKey=De,I.__webglTexture=xe[De].texture}return ee}function se(I,M,ee){return Math.floor(Math.floor(I/ee)/M)}function de(I,M,ee,ce){const De=I.updateRanges;if(De.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,ee,ce,M.data);else{De.sort((ke,Fe)=>ke.start-Fe.start);let Pe=0;for(let ke=1;ke<De.length;ke++){const Fe=De[Pe],Ie=De[ke],tt=Fe.start+Fe.count,nt=se(Ie.start,M.width,4),ct=se(Fe.start,M.width,4);Ie.start<=tt+1&&nt===ct&&se(Ie.start+Ie.count-1,M.width,4)===nt?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Pe,De[Pe]=Ie)}De.length=Pe+1;const _e=n.getParameter(a.UNPACK_ROW_LENGTH),ye=n.getParameter(a.UNPACK_SKIP_PIXELS),Ue=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let ke=0,Fe=De.length;ke<Fe;ke++){const Ie=De[ke],tt=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),ct=tt%M.width,W=Math.floor(tt/M.width),Ne=nt,be=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,ct,W,Ne,be,ee,ce,M.data)}I.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,_e),n.pixelStorei(a.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(a.UNPACK_SKIP_ROWS,Ue)}}function Ce(I,M,ee){let ce=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=a.TEXTURE_3D);const xe=k(I,M),De=M.source;n.bindTexture(ce,I.__webglTexture,a.TEXTURE0+ee);const Pe=r.get(De);if(De.version!==Pe.__version||xe===!0){if(n.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const be=Rt.getPrimaries(Rt.workingColorSpace),Oe=M.colorSpace===yr?null:Rt.getPrimaries(M.colorSpace),Ve=M.colorSpace===yr||be===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let ye=b(M.image,!1,o.maxTextureSize);ye=jt(M,ye);const Ue=c.convert(M.format,M.colorSpace),ke=c.convert(M.type);let Fe=R(M.internalFormat,Ue,ke,M.normalized,M.colorSpace,M.isVideoTexture);ve(ce,M);let Ie;const tt=M.mipmaps,nt=M.isVideoTexture!==!0,ct=Pe.__version===void 0||xe===!0,W=De.dataReady,Ne=N(M,ye);if(M.isDepthTexture)Fe=U(M.format===rs,M.type),ct&&(nt?n.texStorage2D(a.TEXTURE_2D,1,Fe,ye.width,ye.height):n.texImage2D(a.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Ue,ke,null));else if(M.isDataTexture)if(tt.length>0){nt&&ct&&n.texStorage2D(a.TEXTURE_2D,Ne,Fe,tt[0].width,tt[0].height);for(let be=0,Oe=tt.length;be<Oe;be++)Ie=tt[be],nt?W&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,Ie.width,Ie.height,Ue,ke,Ie.data):n.texImage2D(a.TEXTURE_2D,be,Fe,Ie.width,Ie.height,0,Ue,ke,Ie.data);M.generateMipmaps=!1}else nt?(ct&&n.texStorage2D(a.TEXTURE_2D,Ne,Fe,ye.width,ye.height),W&&de(M,ye,Ue,ke)):n.texImage2D(a.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Ue,ke,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&ct&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Fe,tt[0].width,tt[0].height,ye.depth);for(let be=0,Oe=tt.length;be<Oe;be++)if(Ie=tt[be],M.format!==Vi)if(Ue!==null)if(nt){if(W)if(M.layerUpdates.size>0){const Ve=sy(Ie.width,Ie.height,M.format,M.type);for(const Re of M.layerUpdates){const Ze=Ie.data.subarray(Re*Ve/Ie.data.BYTES_PER_ELEMENT,(Re+1)*Ve/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,Re,Ie.width,Ie.height,1,Ue,Ze)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,0,Ie.width,Ie.height,ye.depth,Ue,Ie.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,be,Fe,Ie.width,Ie.height,ye.depth,0,Ie.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,0,Ie.width,Ie.height,ye.depth,Ue,ke,Ie.data):n.texImage3D(a.TEXTURE_2D_ARRAY,be,Fe,Ie.width,Ie.height,ye.depth,0,Ue,ke,Ie.data)}else{nt&&ct&&n.texStorage2D(a.TEXTURE_2D,Ne,Fe,tt[0].width,tt[0].height);for(let be=0,Oe=tt.length;be<Oe;be++)Ie=tt[be],M.format!==Vi?Ue!==null?nt?W&&n.compressedTexSubImage2D(a.TEXTURE_2D,be,0,0,Ie.width,Ie.height,Ue,Ie.data):n.compressedTexImage2D(a.TEXTURE_2D,be,Fe,Ie.width,Ie.height,0,Ie.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,Ie.width,Ie.height,Ue,ke,Ie.data):n.texImage2D(a.TEXTURE_2D,be,Fe,Ie.width,Ie.height,0,Ue,ke,Ie.data)}else if(M.isDataArrayTexture)if(nt){if(ct&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Fe,ye.width,ye.height,ye.depth),W)if(M.layerUpdates.size>0){const be=sy(ye.width,ye.height,M.format,M.type);for(const Oe of M.layerUpdates){const Ve=ye.data.subarray(Oe*be/ye.data.BYTES_PER_ELEMENT,(Oe+1)*be/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Oe,ye.width,ye.height,1,Ue,ke,Ve)}M.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ue,ke,ye.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,Ue,ke,ye.data);else if(M.isData3DTexture)nt?(ct&&n.texStorage3D(a.TEXTURE_3D,Ne,Fe,ye.width,ye.height,ye.depth),W&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ue,ke,ye.data)):n.texImage3D(a.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,Ue,ke,ye.data);else if(M.isFramebufferTexture){if(ct)if(nt)n.texStorage2D(a.TEXTURE_2D,Ne,Fe,ye.width,ye.height);else{let be=ye.width,Oe=ye.height;for(let Ve=0;Ve<Ne;Ve++)n.texImage2D(a.TEXTURE_2D,Ve,Fe,be,Oe,0,Ue,ke,null),be>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){const be=a.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),ye.parentNode!==be){be.appendChild(ye),v.add(M),be.onpaint=Oe=>{const Ve=Oe.changedElements;for(const Re of v)Ve.includes(Re.image)&&(Re.needsUpdate=!0)},be.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ye);else{const Ve=a.RGBA,Re=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ve,Re,Ze,ye)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(tt.length>0){if(nt&&ct){const be=Ot(tt[0]);n.texStorage2D(a.TEXTURE_2D,Ne,Fe,be.width,be.height)}for(let be=0,Oe=tt.length;be<Oe;be++)Ie=tt[be],nt?W&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,Ue,ke,Ie):n.texImage2D(a.TEXTURE_2D,be,Fe,Ue,ke,Ie);M.generateMipmaps=!1}else if(nt){if(ct){const be=Ot(ye);n.texStorage2D(a.TEXTURE_2D,Ne,Fe,be.width,be.height)}W&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ue,ke,ye)}else n.texImage2D(a.TEXTURE_2D,0,Fe,Ue,ke,ye);x(M)&&P(ce),Pe.__version=De.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Je(I,M,ee){if(M.image.length!==6)return;const ce=k(I,M),xe=M.source;n.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+ee);const De=r.get(xe);if(xe.version!==De.__version||ce===!0){n.activeTexture(a.TEXTURE0+ee);const Pe=Rt.getPrimaries(Rt.workingColorSpace),_e=M.colorSpace===yr?null:Rt.getPrimaries(M.colorSpace),ye=M.colorSpace===yr||Pe===_e?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,Fe=[];for(let Re=0;Re<6;Re++)!Ue&&!ke?Fe[Re]=b(M.image[Re],!0,o.maxCubemapSize):Fe[Re]=ke?M.image[Re].image:M.image[Re],Fe[Re]=jt(M,Fe[Re]);const Ie=Fe[0],tt=c.convert(M.format,M.colorSpace),nt=c.convert(M.type),ct=R(M.internalFormat,tt,nt,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,Ne=De.__version===void 0||ce===!0,be=xe.dataReady;let Oe=N(M,Ie);ve(a.TEXTURE_CUBE_MAP,M);let Ve;if(Ue){W&&Ne&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,ct,Ie.width,Ie.height);for(let Re=0;Re<6;Re++){Ve=Fe[Re].mipmaps;for(let Ze=0;Ze<Ve.length;Ze++){const je=Ve[Ze];M.format!==Vi?tt!==null?W?be&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,0,0,je.width,je.height,tt,je.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,ct,je.width,je.height,0,je.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?be&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,0,0,je.width,je.height,tt,nt,je.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze,ct,je.width,je.height,0,tt,nt,je.data)}}}else{if(Ve=M.mipmaps,W&&Ne){Ve.length>0&&Oe++;const Re=Ot(Fe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,ct,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(ke){W?be&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Fe[Re].width,Fe[Re].height,tt,nt,Fe[Re].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,Fe[Re].width,Fe[Re].height,0,tt,nt,Fe[Re].data);for(let Ze=0;Ze<Ve.length;Ze++){const an=Ve[Ze].image[Re].image;W?be&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,0,0,an.width,an.height,tt,nt,an.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,ct,an.width,an.height,0,tt,nt,an.data)}}else{W?be&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,tt,nt,Fe[Re]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,tt,nt,Fe[Re]);for(let Ze=0;Ze<Ve.length;Ze++){const je=Ve[Ze];W?be&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,0,0,tt,nt,je.image[Re]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze+1,ct,tt,nt,je.image[Re])}}}x(M)&&P(a.TEXTURE_CUBE_MAP),De.__version=xe.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Be(I,M,ee,ce,xe,De){const Pe=c.convert(ee.format,ee.colorSpace),_e=c.convert(ee.type),ye=R(ee.internalFormat,Pe,_e,ee.normalized,ee.colorSpace),Ue=r.get(M),ke=r.get(ee);if(ke.__renderTarget=M,!Ue.__hasExternalTextures){const Fe=Math.max(1,M.width>>De),Ie=Math.max(1,M.height>>De);xe===a.TEXTURE_3D||xe===a.TEXTURE_2D_ARRAY?n.texImage3D(xe,De,ye,Fe,Ie,M.depth,0,Pe,_e,null):n.texImage2D(xe,De,ye,Fe,Ie,0,Pe,_e,null)}n.bindFramebuffer(a.FRAMEBUFFER,I),ln(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ce,xe,ke.__webglTexture,0,Jt(M)):(xe===a.TEXTURE_2D||xe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ce,xe,ke.__webglTexture,De),n.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(I,M,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,I),M.depthBuffer){const ce=M.depthTexture,xe=ce&&ce.isDepthTexture?ce.type:null,De=U(M.stencilBuffer,xe),Pe=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ln(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Jt(M),De,M.width,M.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Jt(M),De,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,De,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,I)}else{const ce=M.textures;for(let xe=0;xe<ce.length;xe++){const De=ce[xe],Pe=c.convert(De.format,De.colorSpace),_e=c.convert(De.type),ye=R(De.internalFormat,Pe,_e,De.normalized,De.colorSpace);ln(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Jt(M),ye,M.width,M.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Jt(M),ye,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ye,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(I,M,ee){const ce=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=r.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),xe.__webglTexture===void 0){xe.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,xe.__webglTexture),ve(a.TEXTURE_CUBE_MAP,M.depthTexture);const Ue=c.convert(M.depthTexture.format),ke=c.convert(M.depthTexture.type);let Fe;M.depthTexture.format===Fa?Fe=a.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(Fe=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,M.width,M.height,0,Ue,ke,null)}}else ne(M.depthTexture,0);const De=xe.__webglTexture,Pe=Jt(M),_e=ce?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,ye=M.depthTexture.format===rs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fa)ln(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,_e,De,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,ye,_e,De,0);else if(M.depthTexture.format===rs)ln(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,_e,De,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,ye,_e,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(I){const M=r.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ce=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",xe)};ce.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=ce}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(ee)for(let ce=0;ce<6;ce++)ut(M.__webglFramebuffer[ce],I,ce);else{const ce=I.texture.mipmaps;ce&&ce.length>0?ut(M.__webglFramebuffer[0],I,0):ut(M.__webglFramebuffer,I,0)}else if(ee){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=a.createRenderbuffer(),xt(M.__webglDepthbuffer[ce],I,!1);else{const xe=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=M.__webglDepthbuffer[ce];a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,De)}}else{const ce=I.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),xt(M.__webglDepthbuffer,I,!1);else{const xe=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,De)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function ft(I,M,ee){const ce=r.get(I);M!==void 0&&Be(ce.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&pt(I)}function Ae(I){const M=I.texture,ee=r.get(I),ce=r.get(M);I.addEventListener("dispose",A);const xe=I.textures,De=I.isWebGLCubeRenderTarget===!0,Pe=xe.length>1;if(Pe||(ce.__webglTexture===void 0&&(ce.__webglTexture=a.createTexture()),ce.__version=M.version,u.memory.textures++),De){ee.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[_e]=[];for(let ye=0;ye<M.mipmaps.length;ye++)ee.__webglFramebuffer[_e][ye]=a.createFramebuffer()}else ee.__webglFramebuffer[_e]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)ee.__webglFramebuffer[_e]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let _e=0,ye=xe.length;_e<ye;_e++){const Ue=r.get(xe[_e]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=a.createTexture(),u.memory.textures++)}if(I.samples>0&&ln(I)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let _e=0;_e<xe.length;_e++){const ye=xe[_e];ee.__webglColorRenderbuffer[_e]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[_e]);const Ue=c.convert(ye.format,ye.colorSpace),ke=c.convert(ye.type),Fe=R(ye.internalFormat,Ue,ke,ye.normalized,ye.colorSpace,I.isXRRenderTarget===!0),Ie=Jt(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Fe,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,ee.__webglColorRenderbuffer[_e])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),xt(ee.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(De){n.bindTexture(a.TEXTURE_CUBE_MAP,ce.__webglTexture),ve(a.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)Be(ee.__webglFramebuffer[_e][ye],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else Be(ee.__webglFramebuffer[_e],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(M)&&P(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let _e=0,ye=xe.length;_e<ye;_e++){const Ue=xe[_e],ke=r.get(Ue);let Fe=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Fe=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Fe,ke.__webglTexture),ve(Fe,Ue),Be(ee.__webglFramebuffer,I,Ue,a.COLOR_ATTACHMENT0+_e,Fe,0),x(Ue)&&P(Fe)}n.unbindTexture()}else{let _e=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(_e,ce.__webglTexture),ve(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)Be(ee.__webglFramebuffer[ye],I,M,a.COLOR_ATTACHMENT0,_e,ye);else Be(ee.__webglFramebuffer,I,M,a.COLOR_ATTACHMENT0,_e,0);x(M)&&P(_e),n.unbindTexture()}I.depthBuffer&&pt(I)}function $e(I){const M=I.textures;for(let ee=0,ce=M.length;ee<ce;ee++){const xe=M[ee];if(x(xe)){const De=F(I),Pe=r.get(xe).__webglTexture;n.bindTexture(De,Pe),P(De),n.unbindTexture()}}}const wt=[],zt=[];function nn(I){if(I.samples>0){if(ln(I)===!1){const M=I.textures,ee=I.width,ce=I.height;let xe=a.COLOR_BUFFER_BIT;const De=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=r.get(I),_e=M.length>1;if(_e)for(let Ue=0;Ue<M.length;Ue++)n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ye=I.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xe|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xe|=a.STENCIL_BUFFER_BIT)),_e){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=r.get(M[Ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ke,0)}a.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,xe,a.NEAREST),m===!0&&(wt.length=0,zt.length=0,wt.push(a.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(wt.push(De),zt.push(De),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,zt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),_e)for(let Ue=0;Ue<M.length;Ue++){n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=r.get(M[Ue]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,ke,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const M=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Jt(I){return Math.min(o.maxSamples,I.samples)}function ln(I){const M=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function K(I){const M=u.render.frame;_.get(I)!==M&&(_.set(I,M),I.update())}function jt(I,M){const ee=I.colorSpace,ce=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ee!==ju&&ee!==yr&&(Rt.getTransfer(ee)===Wt?(ce!==Vi||xe!==Di)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",ee)),M}function Ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=L,this.resetTextureUnits=pe,this.getTextureUnits=me,this.setTextureUnits=$,this.setTexture2D=ne,this.setTexture2DArray=ge,this.setTexture3D=Ee,this.setTextureCube=O,this.rebindTextures=ft,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iU(a,e){function n(r,o=yr){let c;const u=Rt.getTransfer(o);if(r===Di)return a.UNSIGNED_BYTE;if(r===Fm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Bm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===ob)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===lb)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===rb)return a.BYTE;if(r===sb)return a.SHORT;if(r===Nl)return a.UNSIGNED_SHORT;if(r===zm)return a.INT;if(r===sa)return a.UNSIGNED_INT;if(r===na)return a.FLOAT;if(r===za)return a.HALF_FLOAT;if(r===cb)return a.ALPHA;if(r===ub)return a.RGB;if(r===Vi)return a.RGBA;if(r===Fa)return a.DEPTH_COMPONENT;if(r===rs)return a.DEPTH_STENCIL;if(r===fb)return a.RED;if(r===Hm)return a.RED_INTEGER;if(r===us)return a.RG;if(r===Gm)return a.RG_INTEGER;if(r===Vm)return a.RGBA_INTEGER;if(r===Pu||r===Iu||r===zu||r===Fu)if(u===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hp||r===Gp||r===Vp||r===kp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Hp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xp||r===Wp||r===jp||r===qp||r===Yp||r===Xu||r===Kp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xp||r===Wp)return u===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===jp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===qp)return c.COMPRESSED_R11_EAC;if(r===Yp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Xu)return c.COMPRESSED_RG11_EAC;if(r===Kp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Zp||r===Qp||r===Jp||r===$p||r===em||r===tm||r===nm||r===im||r===am||r===rm||r===sm||r===om||r===lm||r===cm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Zp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$p)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===em)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tm)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nm)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===im)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===am)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rm)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sm)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===om)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lm)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cm)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===um||r===fm||r===dm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===um)return u===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hm||r===pm||r===Wu||r===mm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===hm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===pm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ll?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const aU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rU=`
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

}`;class sU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Sb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gi({vertexShader:aU,fragmentShader:rU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ba(new of(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oU extends ds{constructor(e,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,T=null;const D=typeof XRWebGLBinding<"u",b=new sU,x={},P=n.getContextAttributes();let F=null,R=null;const U=[],N=[],B=new It;let A=null;const z=new wi;z.viewport=new fn;const j=new wi;j.viewport=new fn;const V=[z,j],q=new gC;let pe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let se=U[k];return se===void 0&&(se=new Ih,U[k]=se),se.getTargetRaySpace()},this.getControllerGrip=function(k){let se=U[k];return se===void 0&&(se=new Ih,U[k]=se),se.getGripSpace()},this.getHand=function(k){let se=U[k];return se===void 0&&(se=new Ih,U[k]=se),se.getHandSpace()};function $(k){const se=N.indexOf(k.inputSource);if(se===-1)return;const de=U[se];de!==void 0&&(de.update(k.inputSource,k.frame,p||u),de.dispatchEvent({type:k.type,data:k.inputSource}))}function L(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",L),o.removeEventListener("inputsourceschange",G);for(let k=0;k<U.length;k++){const se=N[k];se!==null&&(N[k]=null,U[k].disconnect(se))}pe=null,me=null,b.reset();for(const k in x)delete x[k];e.setRenderTarget(F),S=null,g=null,v=null,o=null,R=null,ve.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){c=k,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){h=k,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(k){p=k},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(k){if(o=k,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",L),o.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ce=null,Je=null;P.depth&&(Je=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=P.stencil?rs:Fa,Ce=P.stencil?Ll:sa);const Be={colorFormat:n.RGBA8,depthFormat:Je,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Be),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new ra(g.textureWidth,g.textureHeight,{format:Vi,type:Di,depthTexture:new _o(g.textureWidth,g.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const de={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,de),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new ra(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),ve.setContext(o),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(k){for(let se=0;se<k.removed.length;se++){const de=k.removed[se],Ce=N.indexOf(de);Ce>=0&&(N[Ce]=null,U[Ce].disconnect(de))}for(let se=0;se<k.added.length;se++){const de=k.added[se];let Ce=N.indexOf(de);if(Ce===-1){for(let Be=0;Be<U.length;Be++)if(Be>=N.length){N.push(de),Ce=Be;break}else if(N[Be]===null){N[Be]=de,Ce=Be;break}if(Ce===-1)break}const Je=U[Ce];Je&&Je.connect(de)}}const ne=new re,ge=new re;function Ee(k,se,de){ne.setFromMatrixPosition(se.matrixWorld),ge.setFromMatrixPosition(de.matrixWorld);const Ce=ne.distanceTo(ge),Je=se.projectionMatrix.elements,Be=de.projectionMatrix.elements,xt=Je[14]/(Je[10]-1),ut=Je[14]/(Je[10]+1),pt=(Je[9]+1)/Je[5],ft=(Je[9]-1)/Je[5],Ae=(Je[8]-1)/Je[0],$e=(Be[8]+1)/Be[0],wt=xt*Ae,zt=xt*$e,nn=Ce/(-Ae+$e),Jt=nn*-Ae;if(se.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Jt),k.translateZ(nn),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Je[10]===-1)k.projectionMatrix.copy(se.projectionMatrix),k.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ln=xt+nn,K=ut+nn,jt=wt-Jt,Ot=zt+(Ce-Jt),I=pt*ut/K*ln,M=ft*ut/K*ln;k.projectionMatrix.makePerspective(jt,Ot,I,M,ln,K),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function O(k,se){se===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(se.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(o===null)return;let se=k.near,de=k.far;b.texture!==null&&(b.depthNear>0&&(se=b.depthNear),b.depthFar>0&&(de=b.depthFar)),q.near=j.near=z.near=se,q.far=j.far=z.far=de,(pe!==q.near||me!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),pe=q.near,me=q.far),q.layers.mask=k.layers.mask|6,z.layers.mask=q.layers.mask&-5,j.layers.mask=q.layers.mask&-3;const Ce=k.parent,Je=q.cameras;O(q,Ce);for(let Be=0;Be<Je.length;Be++)O(Je[Be],Ce);Je.length===2?Ee(q,z,j):q.projectionMatrix.copy(z.projectionMatrix),Z(k,q,Ce)};function Z(k,se,de){de===null?k.matrix.copy(se.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(se.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(se.projectionMatrix),k.projectionMatrixInverse.copy(se.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=gm*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(k){m=k,g!==null&&(g.fixedFoveation=k),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=k)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(q)},this.getCameraTexture=function(k){return x[k]};let te=null;function Q(k,se){if(_=se.getViewerPose(p||u),T=se,_!==null){const de=_.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Ce=!1;de.length!==q.cameras.length&&(q.cameras.length=0,Ce=!0);for(let ut=0;ut<de.length;ut++){const pt=de[ut];let ft=null;if(S!==null)ft=S.getViewport(pt);else{const $e=v.getViewSubImage(g,pt);ft=$e.viewport,ut===0&&(e.setRenderTargetTextures(R,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(R))}let Ae=V[ut];Ae===void 0&&(Ae=new wi,Ae.layers.enable(ut),Ae.viewport=new fn,V[ut]=Ae),Ae.matrix.fromArray(pt.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(pt.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ft.x,ft.y,ft.width,ft.height),ut===0&&(q.matrix.copy(Ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ce===!0&&q.cameras.push(Ae)}const Je=o.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){v=r.getBinding();const ut=v.getDepthInformation(de[0]);ut&&ut.isValid&&ut.texture&&b.init(ut,o.renderState)}if(Je&&Je.includes("camera-access")&&D){e.state.unbindTexture(),v=r.getBinding();for(let ut=0;ut<de.length;ut++){const pt=de[ut].camera;if(pt){let ft=x[pt];ft||(ft=new Sb,x[pt]=ft);const Ae=v.getCameraImage(pt);ft.sourceTexture=Ae}}}}for(let de=0;de<U.length;de++){const Ce=N[de],Je=U[de];Ce!==null&&Je!==void 0&&Je.update(Ce,se,p||u)}te&&te(k,se),se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:se}),T=null}const ve=new Tb;ve.setAnimationLoop(Q),this.setAnimationLoop=function(k){te=k},this.dispose=function(){}}}const lU=new dn,Lb=new ht;Lb.set(-1,0,0,0,1,0,0,0,1);function cU(a,e){function n(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function r(b,x){x.color.getRGB(b.fogColor.value,bb(a)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function o(b,x,P,F,R){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(b,x):x.isMeshLambertMaterial?(c(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(b,x),v(b,x)):x.isMeshPhongMaterial?(c(b,x),_(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(b,x),g(b,x),x.isMeshPhysicalMaterial&&S(b,x,R)):x.isMeshMatcapMaterial?(c(b,x),T(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),D(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(u(b,x),x.isLineDashedMaterial&&h(b,x)):x.isPointsMaterial?m(b,x,P,F):x.isSpriteMaterial?p(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,n(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===ti&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,n(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===ti&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,n(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,n(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const P=e.get(x),F=P.envMap,R=P.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(lU.makeRotationFromEuler(R)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(Lb),b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,b.aoMapTransform))}function u(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform))}function h(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function m(b,x,P,F){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*P,b.scale.value=F*.5,x.map&&(b.map.value=x.map,n(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function p(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,n(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,n(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function _(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function v(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function g(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function S(b,x,P){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,x){x.matcap&&(b.matcap.value=x.matcap)}function D(b,x){const P=e.get(x).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function uU(a,e,n,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,U){const N=U.program;r.uniformBlockBinding(R,N)}function p(R,U){let N=o[R.id];N===void 0&&(b(R),N=_(R),o[R.id]=N,R.addEventListener("dispose",P));const B=U.program;r.updateUBOMapping(R,B);const A=e.render.frame;c[R.id]!==A&&(g(R),c[R.id]=A)}function _(R){const U=v();R.__bindingPointIndex=U;const N=a.createBuffer(),B=R.__size,A=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,B,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,N),N}function v(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const U=o[R.id],N=R.uniforms,B=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let A=0,z=N.length;A<z;A++){const j=N[A];if(Array.isArray(j))for(let V=0,q=j.length;V<q;V++)S(j[V],A,V,B);else S(j,A,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(R,U,N,B){if(D(R,U,N,B)===!0){const A=R.__offset,z=R.value;if(Array.isArray(z)){let j=0;for(let V=0;V<z.length;V++){const q=z[V],pe=x(q);T(q,R.__data,j),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(j+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(z,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,R.__data)}}function T(R,U,N){typeof R=="number"||typeof R=="boolean"?U[0]=R:R.isMatrix3?(U[0]=R.elements[0],U[1]=R.elements[1],U[2]=R.elements[2],U[3]=0,U[4]=R.elements[3],U[5]=R.elements[4],U[6]=R.elements[5],U[7]=0,U[8]=R.elements[6],U[9]=R.elements[7],U[10]=R.elements[8],U[11]=0):ArrayBuffer.isView(R)?U.set(new R.constructor(R.buffer,R.byteOffset,U.length)):R.toArray(U,N)}function D(R,U,N,B){const A=R.value,z=U+"_"+N;if(B[z]===void 0)return typeof A=="number"||typeof A=="boolean"?B[z]=A:ArrayBuffer.isView(A)?B[z]=A.slice():B[z]=A.clone(),!0;{const j=B[z];if(typeof A=="number"||typeof A=="boolean"){if(j!==A)return B[z]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(j.equals(A)===!1)return j.copy(A),!0}}return!1}function b(R){const U=R.uniforms;let N=0;const B=16;for(let z=0,j=U.length;z<j;z++){const V=Array.isArray(U[z])?U[z]:[U[z]];for(let q=0,pe=V.length;q<pe;q++){const me=V[q],$=Array.isArray(me.value)?me.value:[me.value];for(let L=0,G=$.length;L<G;L++){const ne=$[L],ge=x(ne),Ee=N%B,O=Ee%ge.boundary,Z=Ee+O;N+=O,Z!==0&&B-Z<ge.storage&&(N+=B-Z),me.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=N,N+=ge.storage}}}const A=N%B;return A>0&&(N+=B-A),R.__size=N,R.__cache={},this}function x(R){const U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(U.boundary=16,U.storage=R.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",R),U}function P(R){const U=R.target;U.removeEventListener("dispose",P);const N=u.indexOf(U.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function F(){for(const R in o)a.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:m,update:p,dispose:F}}const fU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function dU(){return Ji===null&&(Ji=new $R(fU,16,16,us,za),Ji.name="DFG_LUT",Ji.minFilter=Vn,Ji.magFilter=Vn,Ji.wrapS=La,Ji.wrapT=La,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class hU{constructor(e={}){const{canvas:n=DR(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Di}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const D=S,b=new Set([Vm,Gm,Hm]),x=new Set([Di,sa,Nl,Ll,Fm,Bm]),P=new Uint32Array(4),F=new Int32Array(4),R=new re;let U=null,N=null;const B=[],A=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let V=!1,q=null,pe=null,me=null,$=null;this._outputColorSpace=Ci;let L=0,G=0,ne=null,ge=-1,Ee=null;const O=new fn,Z=new fn;let te=null;const Q=new Tt(0);let ve=0,k=n.width,se=n.height,de=1,Ce=null,Je=null;const Be=new fn(0,0,k,se),xt=new fn(0,0,k,se);let ut=!1;const pt=new xb;let ft=!1,Ae=!1;const $e=new dn,wt=new re,zt=new fn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function ln(){return ne===null?de:1}let K=r;function jt(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Im}`),n.addEventListener("webglcontextlost",an,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",ii,!1),K===null){const Y="webgl2";if(K=jt(Y,C),K===null)throw jt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Dt("WebGLRenderer: "+C.message),C}let Ot,I,M,ee,ce,xe,De,Pe,_e,ye,Ue,ke,Fe,Ie,tt,nt,ct,W,Ne,be,Oe,Ve,Re;function Ze(){Ot=new dN(K),Ot.init(),Oe=new iU(K,Ot),I=new aN(K,Ot,e,Oe),M=new tU(K,Ot),I.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),pe=K.createFramebuffer(),me=K.createFramebuffer(),$=K.createFramebuffer(),ee=new mN(K),ce=new GL,xe=new nU(K,Ot,M,ce,I,Oe,ee),De=new fN(j),Pe=new xC(K),Ve=new nN(K,Pe),_e=new hN(K,Pe,ee,Ve),ye=new vN(K,_e,Pe,Ve,ee),W=new gN(K,I,xe),tt=new rN(ce),Ue=new HL(j,De,Ot,I,Ve,tt),ke=new cU(j,ce),Fe=new kL,Ie=new KL(Ot),ct=new tN(j,De,M,ye,T,m),nt=new eU(j,ye,I),Re=new uU(K,ee,I,M),Ne=new iN(K,Ot,ee),be=new pN(K,Ot,ee),ee.programs=Ue.programs,j.capabilities=I,j.extensions=Ot,j.properties=ce,j.renderLists=Fe,j.shadowMap=nt,j.state=M,j.info=ee}Ze(),D!==Di&&(z=new xN(D,n.width,n.height,h,o,c));const je=new oU(j,K);this.xr=je,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=Ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(k,se,!1))},this.getSize=function(C){return C.set(k,se)},this.setSize=function(C,Y,ue=!0){if(je.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,se=Y,n.width=Math.floor(C*de),n.height=Math.floor(Y*de),ue===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(k*de,se*de).floor()},this.setDrawingBufferSize=function(C,Y,ue){k=C,se=Y,de=ue,n.width=Math.floor(C*ue),n.height=Math.floor(Y*ue),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(D===Di){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Be)},this.setViewport=function(C,Y,ue,oe){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,Y,ue,oe),M.viewport(O.copy(Be).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(xt)},this.setScissor=function(C,Y,ue,oe){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,Y,ue,oe),M.scissor(Z.copy(xt).multiplyScalar(de).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){M.setScissorTest(ut=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){Je=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ue=!0){let oe=0;if(C){let le=!1;if(ne!==null){const He=ne.texture.format;le=b.has(He)}if(le){const He=ne.texture.type,We=x.has(He),ze=ct.getClearColor(),Ye=ct.getClearAlpha(),qe=ze.r,it=ze.g,mt=ze.b;We?(P[0]=qe,P[1]=it,P[2]=mt,P[3]=Ye,K.clearBufferuiv(K.COLOR,0,P)):(F[0]=qe,F[1]=it,F[2]=mt,F[3]=Ye,K.clearBufferiv(K.COLOR,0,F))}else oe|=K.COLOR_BUFFER_BIT}Y&&(oe|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(oe|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&K.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){n.removeEventListener("webglcontextlost",an,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",ii,!1),ct.dispose(),Fe.dispose(),Ie.dispose(),ce.dispose(),De.dispose(),ye.dispose(),Ve.dispose(),Re.dispose(),Ue.dispose(),je.dispose(),je.removeEventListener("sessionstart",mn),je.removeEventListener("sessionend",Dn),qn.stop()};function an(C){C.preventDefault(),Ox("WebGLRenderer: Context Lost."),V=!0}function Bt(){Ox("WebGLRenderer: Context Restored."),V=!1;const C=ee.autoReset,Y=nt.enabled,ue=nt.autoUpdate,oe=nt.needsUpdate,le=nt.type;Ze(),ee.autoReset=C,nt.enabled=Y,nt.autoUpdate=ue,nt.needsUpdate=oe,nt.type=le}function ii(C){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ai(C){const Y=C.target;Y.removeEventListener("dispose",ai),Eo(Y)}function Eo(C){To(C),ce.remove(C)}function To(C){const Y=ce.get(C).programs;Y!==void 0&&(Y.forEach(function(ue){Ue.releaseProgram(ue)}),C.isShaderMaterial&&Ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ue,oe,le,He){Y===null&&(Y=nn);const We=le.isMesh&&le.matrixWorld.determinantAffine()<0,ze=ka(C,Y,ue,oe,le);M.setMaterial(oe,We);let Ye=ue.index,qe=1;if(oe.wireframe===!0){if(Ye=_e.getWireframeAttribute(ue),Ye===void 0)return;qe=2}const it=ue.drawRange,mt=ue.attributes.position;let et=it.start*qe,Nt=(it.start+it.count)*qe;He!==null&&(et=Math.max(et,He.start*qe),Nt=Math.min(Nt,(He.start+He.count)*qe)),Ye!==null?(et=Math.max(et,0),Nt=Math.min(Nt,Ye.count)):mt!=null&&(et=Math.max(et,0),Nt=Math.min(Nt,mt.count));const rn=Nt-et;if(rn<0||rn===1/0)return;Ve.setup(le,oe,ze,ue,Ye);let Zt,Ht=Ne;if(Ye!==null&&(Zt=Pe.get(Ye),Ht=be,Ht.setIndex(Zt)),le.isMesh)oe.wireframe===!0?(M.setLineWidth(oe.wireframeLinewidth*ln()),Ht.setMode(K.LINES)):Ht.setMode(K.TRIANGLES);else if(le.isLine){let Gt=oe.linewidth;Gt===void 0&&(Gt=1),M.setLineWidth(Gt*ln()),le.isLineSegments?Ht.setMode(K.LINES):le.isLineLoop?Ht.setMode(K.LINE_LOOP):Ht.setMode(K.LINE_STRIP)}else le.isPoints?Ht.setMode(K.POINTS):le.isSprite&&Ht.setMode(K.TRIANGLES);if(le.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))Ht.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Gt=le._multiDrawStarts,Xe=le._multiDrawCounts,Fn=le._multiDrawCount,yt=Ye?Pe.get(Ye).bytesPerElement:1,Mn=ce.get(oe).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)Mn.setValue(K,"_gl_DrawID",ri),Ht.render(Gt[ri]/yt,Xe[ri])}else if(le.isInstancedMesh)Ht.renderInstances(et,rn,le.count);else if(ue.isInstancedBufferGeometry){const Gt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Xe=Math.min(ue.instanceCount,Gt);Ht.renderInstances(et,rn,Xe)}else Ht.render(et,rn)};function Ao(C,Y,ue){C.transparent===!0&&C.side===Na&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Va(C,Y,ue),C.side=Tr,C.needsUpdate=!0,Va(C,Y,ue),C.side=Na):Va(C,Y,ue)}this.compile=function(C,Y,ue=null){ue===null&&(ue=C),N=Ie.get(ue),N.init(Y),A.push(N),ue.traverseVisible(function(le){le.isLight&&le.layers.test(Y.layers)&&(N.pushLight(le),le.castShadow&&N.pushShadow(le))}),C!==ue&&C.traverseVisible(function(le){le.isLight&&le.layers.test(Y.layers)&&(N.pushLight(le),le.castShadow&&N.pushShadow(le))}),N.setupLights();const oe=new Set;return C.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const He=le.material;if(He)if(Array.isArray(He))for(let We=0;We<He.length;We++){const ze=He[We];Ao(ze,ue,le),oe.add(ze)}else Ao(He,ue,le),oe.add(He)}),N=A.pop(),oe},this.compileAsync=function(C,Y,ue=null){const oe=this.compile(C,Y,ue);return new Promise(le=>{function He(){if(oe.forEach(function(We){ce.get(We).currentProgram.isReady()&&oe.delete(We)}),oe.size===0){le(C);return}setTimeout(He,10)}Ot.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let hs=null;function Wi(C){hs&&hs(C)}function mn(){qn.stop()}function Dn(){qn.start()}const qn=new Tb;qn.setAnimationLoop(Wi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){hs=C,je.setAnimationLoop(C),C===null?qn.stop():qn.start()},je.addEventListener("sessionstart",mn),je.addEventListener("sessionend",Dn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(C,Y);const ue=je.enabled===!0&&je.isPresenting===!0,oe=z!==null&&(ne===null||ue)&&z.begin(j,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(Y),Y=je.getCamera()),C.isScene===!0&&C.onBeforeRender(j,C,Y,ne),N=Ie.get(C,A.length),N.init(Y),N.state.textureUnits=xe.getTextureUnits(),A.push(N),$e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pt.setFromProjectionMatrix($e,ia,Y.reversedDepth),Ae=this.localClippingEnabled,ft=tt.init(this.clippingPlanes,Ae),U=Fe.get(C,B.length),U.init(),B.push(U),je.enabled===!0&&je.isPresenting===!0){const We=j.xr.getDepthSensingMesh();We!==null&&Ar(We,Y,-1/0,j.sortObjects)}Ar(C,Y,0,j.sortObjects),U.finish(),j.sortObjects===!0&&U.sort(Ce,Je,Y.reversedDepth),Jt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Jt&&ct.addToRenderList(U,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&tt.beginShadows();const le=N.state.shadowsArray;if(nt.render(le,C,Y),ft===!0&&tt.endShadows(),(oe&&z.hasRenderPass())===!1){const We=U.opaque,ze=U.transmissive;if(N.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(ze.length>0)for(let qe=0,it=Ye.length;qe<it;qe++){const mt=Ye[qe];Gl(We,ze,C,mt)}Jt&&ct.render(C);for(let qe=0,it=Ye.length;qe<it;qe++){const mt=Ye[qe];Hl(U,C,mt,mt.viewport)}}else ze.length>0&&Gl(We,ze,C,Y),Jt&&ct.render(C),Hl(U,C,Y)}ne!==null&&G===0&&(xe.updateMultisampleRenderTarget(ne),xe.updateRenderTargetMipmap(ne)),oe&&z.end(j),C.isScene===!0&&C.onAfterRender(j,C,Y),Ve.resetDefaultState(),ge=-1,Ee=null,A.pop(),A.length>0?(N=A[A.length-1],xe.setTextureUnits(N.state.textureUnits),ft===!0&&tt.setGlobalState(j.clippingPlanes,N.state.camera)):N=null,B.pop(),B.length>0?U=B[B.length-1]:U=null,q!==null&&q.renderEnd()};function Ar(C,Y,ue,oe){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||pt.intersectsSprite(C)){oe&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4($e);const We=ye.update(C),ze=C.material;ze.visible&&U.push(C,We,ze,ue,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||pt.intersectsObject(C))){const We=ye.update(C),ze=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),zt.copy(We.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4($e)),Array.isArray(ze)){const Ye=We.groups;for(let qe=0,it=Ye.length;qe<it;qe++){const mt=Ye[qe],et=ze[mt.materialIndex];et&&et.visible&&U.push(C,We,et,ue,zt.z,mt)}}else ze.visible&&U.push(C,We,ze,ue,zt.z,null)}}const He=C.children;for(let We=0,ze=He.length;We<ze;We++)Ar(He[We],Y,ue,oe)}function Hl(C,Y,ue,oe){const{opaque:le,transmissive:He,transparent:We}=C;N.setupLightsView(ue),ft===!0&&tt.setGlobalState(j.clippingPlanes,ue),oe&&M.viewport(O.copy(oe)),le.length>0&&Rr(le,Y,ue),He.length>0&&Rr(He,Y,ue),We.length>0&&Rr(We,Y,ue),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Gl(C,Y,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[oe.id]===void 0){const et=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[oe.id]=new ra(1,1,{generateMipmaps:!0,type:et?za:Di,minFilter:as,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const He=N.state.transmissionRenderTarget[oe.id],We=oe.viewport||O;He.setSize(We.z*j.transmissionResolutionScale,We.w*j.transmissionResolutionScale);const ze=j.getRenderTarget(),Ye=j.getActiveCubeFace(),qe=j.getActiveMipmapLevel();j.setRenderTarget(He),j.getClearColor(Q),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Jt&&ct.render(ue);const it=j.toneMapping;j.toneMapping=aa;const mt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),N.setupLightsView(oe),ft===!0&&tt.setGlobalState(j.clippingPlanes,oe),Rr(C,ue,oe),xe.updateMultisampleRenderTarget(He),xe.updateRenderTargetMipmap(He),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Nt=0,rn=Y.length;Nt<rn;Nt++){const Zt=Y[Nt],{object:Ht,geometry:Gt,material:Xe,group:Fn}=Zt;if(Xe.side===Na&&Ht.layers.test(oe.layers)){const yt=Xe.side;Xe.side=ti,Xe.needsUpdate=!0,Ga(Ht,ue,oe,Gt,Xe,Fn),Xe.side=yt,Xe.needsUpdate=!0,et=!0}}et===!0&&(xe.updateMultisampleRenderTarget(He),xe.updateRenderTargetMipmap(He))}j.setRenderTarget(ze,Ye,qe),j.setClearColor(Q,ve),mt!==void 0&&(oe.viewport=mt),j.toneMapping=it}function Rr(C,Y,ue){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let le=0,He=C.length;le<He;le++){const We=C[le],{object:ze,geometry:Ye,group:qe}=We;let it=We.material;it.allowOverride===!0&&oe!==null&&(it=oe),ze.layers.test(ue.layers)&&Ga(ze,Y,ue,Ye,it,qe)}}function Ga(C,Y,ue,oe,le,He){C.onBeforeRender(j,Y,ue,oe,le,He),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),le.onBeforeRender(j,Y,ue,oe,C,He),le.transparent===!0&&le.side===Na&&le.forceSinglePass===!1?(le.side=ti,le.needsUpdate=!0,j.renderBufferDirect(ue,Y,oe,le,C,He),le.side=Tr,le.needsUpdate=!0,j.renderBufferDirect(ue,Y,oe,le,C,He),le.side=Na):j.renderBufferDirect(ue,Y,oe,le,C,He),C.onAfterRender(j,Y,ue,oe,le,He)}function Va(C,Y,ue){Y.isScene!==!0&&(Y=nn);const oe=ce.get(C),le=N.state.lights,He=N.state.shadowsArray,We=le.state.version,ze=Ue.getParameters(C,le.state,He,Y,ue,N.state.lightProbeGridArray),Ye=Ue.getProgramCacheKey(ze);let qe=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,oe.fog=Y.fog;const it=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=De.get(C.envMap||oe.environment,it),oe.envMapRotation=oe.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",ai),qe=new Map,oe.programs=qe);let mt=qe.get(Ye);if(mt!==void 0){if(oe.currentProgram===mt&&oe.lightsStateVersion===We)return la(C,ze),mt}else ze.uniforms=Ue.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,ue,ze),C.onBeforeCompile(ze,j),mt=Ue.acquireProgram(ze,Ye),qe.set(Ye,mt),oe.uniforms=ze.uniforms;const et=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=tt.uniform),la(C,ze),oe.needsLights=Vl(C),oe.lightsStateVersion=We,oe.needsLights&&(et.ambientLightColor.value=le.state.ambient,et.lightProbe.value=le.state.probe,et.directionalLights.value=le.state.directional,et.directionalLightShadows.value=le.state.directionalShadow,et.spotLights.value=le.state.spot,et.spotLightShadows.value=le.state.spotShadow,et.rectAreaLights.value=le.state.rectArea,et.ltc_1.value=le.state.rectAreaLTC1,et.ltc_2.value=le.state.rectAreaLTC2,et.pointLights.value=le.state.point,et.pointLightShadows.value=le.state.pointShadow,et.hemisphereLights.value=le.state.hemi,et.directionalShadowMatrix.value=le.state.directionalShadowMatrix,et.spotLightMatrix.value=le.state.spotLightMatrix,et.spotLightMap.value=le.state.spotLightMap,et.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=N.state.lightProbeGridArray.length>0,oe.currentProgram=mt,oe.uniformsList=null,mt}function oa(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Bu.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function la(C,Y){const ue=ce.get(C);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function Cr(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(Y.matrixWorld);for(let ue=0,oe=C.length;ue<oe;ue++){const le=C[ue];if(le.texture!==null&&le.boundingBox.containsPoint(R))return le}return null}function ka(C,Y,ue,oe,le){Y.isScene!==!0&&(Y=nn),xe.resetTextureUnits();const He=Y.fog,We=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Y.environment:null,ze=ne===null?j.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Rt.workingColorSpace,Ye=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,qe=De.get(oe.envMap||We,Ye),it=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,mt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!ue.morphAttributes.position,Nt=!!ue.morphAttributes.normal,rn=!!ue.morphAttributes.color;let Zt=aa;oe.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Zt=j.toneMapping);const Ht=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,Xe=ce.get(oe),Fn=N.state.lights;if(ft===!0&&(Ae===!0||C!==Ee)){const Ft=C===Ee&&oe.id===ge;tt.setState(oe,C,Ft)}let yt=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Fn.state.version||Xe.outputColorSpace!==ze||le.isBatchedMesh&&Xe.batching===!1||!le.isBatchedMesh&&Xe.batching===!0||le.isBatchedMesh&&Xe.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Xe.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Xe.instancing===!1||!le.isInstancedMesh&&Xe.instancing===!0||le.isSkinnedMesh&&Xe.skinning===!1||!le.isSkinnedMesh&&Xe.skinning===!0||le.isInstancedMesh&&Xe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Xe.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Xe.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Xe.instancingMorph===!1&&le.morphTexture!==null||Xe.envMap!==qe||oe.fog===!0&&Xe.fog!==He||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==tt.numPlanes||Xe.numIntersection!==tt.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==mt||Xe.morphTargets!==et||Xe.morphNormals!==Nt||Xe.morphColors!==rn||Xe.toneMapping!==Zt||Xe.morphTargetsCount!==Gt||!!Xe.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Xe.__version=oe.version);let Mn=Xe.currentProgram;yt===!0&&(Mn=Va(oe,Y,le),q&&oe.isNodeMaterial&&q.onUpdateProgram(oe,Mn,Xe));let ri=!1,Ni=!1,si=!1;const Vt=Mn.getUniforms(),sn=Xe.uniforms;if(M.useProgram(Mn.program)&&(ri=!0,Ni=!0,si=!0),oe.id!==ge&&(ge=oe.id,Ni=!0),Xe.needsLights){const Ft=Cr(N.state.lightProbeGridArray,le);Xe.lightProbeGrid!==Ft&&(Xe.lightProbeGrid=Ft,Ni=!0)}if(ri||Ee!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Vt.setValue(K,"projectionMatrix",C.projectionMatrix),Vt.setValue(K,"viewMatrix",C.matrixWorldInverse);const ji=Vt.map.cameraPosition;ji!==void 0&&ji.setValue(K,wt.setFromMatrixPosition(C.matrixWorld)),I.logarithmicDepthBuffer&&Vt.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Vt.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),Ee!==C&&(Ee=C,Ni=!0,si=!0)}if(Xe.needsLights&&(Fn.state.directionalShadowMap.length>0&&Vt.setValue(K,"directionalShadowMap",Fn.state.directionalShadowMap,xe),Fn.state.spotShadowMap.length>0&&Vt.setValue(K,"spotShadowMap",Fn.state.spotShadowMap,xe),Fn.state.pointShadowMap.length>0&&Vt.setValue(K,"pointShadowMap",Fn.state.pointShadowMap,xe)),le.isSkinnedMesh){Vt.setOptional(K,le,"bindMatrix"),Vt.setOptional(K,le,"bindMatrixInverse");const Ft=le.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Vt.setValue(K,"boneTexture",Ft.boneTexture,xe))}le.isBatchedMesh&&(Vt.setOptional(K,le,"batchingTexture"),Vt.setValue(K,"batchingTexture",le._matricesTexture,xe),Vt.setOptional(K,le,"batchingIdTexture"),Vt.setValue(K,"batchingIdTexture",le._indirectTexture,xe),Vt.setOptional(K,le,"batchingColorTexture"),le._colorsTexture!==null&&Vt.setValue(K,"batchingColorTexture",le._colorsTexture,xe));const Li=ue.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&W.update(le,ue,Mn),(Ni||Xe.receiveShadow!==le.receiveShadow)&&(Xe.receiveShadow=le.receiveShadow,Vt.setValue(K,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Y.environment!==null&&(sn.envMapIntensity.value=Y.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=dU()),Ni){if(Vt.setValue(K,"toneMappingExposure",j.toneMappingExposure),Xe.needsLights&&gn(sn,si),He&&oe.fog===!0&&ke.refreshFogUniforms(sn,He),ke.refreshMaterialUniforms(sn,oe,de,se,N.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){const Ft=Xe.lightProbeGrid;sn.probesSH.value=Ft.texture,sn.probesMin.value.copy(Ft.boundingBox.min),sn.probesMax.value.copy(Ft.boundingBox.max),sn.probesResolution.value.copy(Ft.resolution)}Bu.upload(K,oa(Xe),sn,xe)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Bu.upload(K,oa(Xe),sn,xe),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Vt.setValue(K,"center",le.center),Vt.setValue(K,"modelViewMatrix",le.modelViewMatrix),Vt.setValue(K,"normalMatrix",le.normalMatrix),Vt.setValue(K,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Ft=oe.uniformsGroups;for(let ji=0,Xa=Ft.length;ji<Xa;ji++){const wr=Ft[ji];Re.update(wr,Mn),Re.bind(wr,Mn)}}return Mn}function gn(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Vl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,Y,ue){const oe=ce.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=Y,ce.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ue=ce.get(C);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ue=0){ne=C,L=Y,G=ue;let oe=null,le=!1,He=!1;if(C){const ze=ce.get(C);if(ze.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(K.FRAMEBUFFER,ze.__webglFramebuffer),O.copy(C.viewport),Z.copy(C.scissor),te=C.scissorTest,M.viewport(O),M.scissor(Z),M.setScissorTest(te),ge=-1;return}else if(ze.__webglFramebuffer===void 0)xe.setupRenderTarget(C);else if(ze.__hasExternalTextures)xe.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(ze.__boundDepthTexture!==it){if(it!==null&&ce.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(C)}}const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(He=!0);const qe=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?oe=qe[Y][ue]:oe=qe[Y],le=!0):C.samples>0&&xe.useMultisampledRTT(C)===!1?oe=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?oe=qe[ue]:oe=qe,O.copy(C.viewport),Z.copy(C.scissor),te=C.scissorTest}else O.copy(Be).multiplyScalar(de).floor(),Z.copy(xt).multiplyScalar(de).floor(),te=ut;if(ue!==0&&(oe=pe),M.bindFramebuffer(K.FRAMEBUFFER,oe)&&M.drawBuffers(C,oe),M.viewport(O),M.scissor(Z),M.setScissorTest(te),le){const ze=ce.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,ue)}else if(He){const ze=Y;for(let Ye=0;Ye<C.textures.length;Ye++){const qe=ce.get(C.textures[Ye]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ye,qe.__webglTexture,ue,ze)}}else if(C!==null&&ue!==0){const ze=ce.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ze.__webglTexture,ue)}ge=-1},this.readRenderTargetPixels=function(C,Y,ue,oe,le,He,We,ze=0){if(!(C&&C.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){M.bindFramebuffer(K.FRAMEBUFFER,Ye);try{const qe=C.textures[ze],it=qe.format,mt=qe.type;if(C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ze),!I.textureFormatReadable(it)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(mt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-oe&&ue>=0&&ue<=C.height-le&&K.readPixels(Y,ue,oe,le,Oe.convert(it),Oe.convert(mt),He)}finally{const qe=ne!==null?ce.get(ne).__webglFramebuffer:null;M.bindFramebuffer(K.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ue,oe,le,He,We,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye)if(Y>=0&&Y<=C.width-oe&&ue>=0&&ue<=C.height-le){M.bindFramebuffer(K.FRAMEBUFFER,Ye);const qe=C.textures[ze],it=qe.format,mt=qe.type;if(C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ze),!I.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,et),K.bufferData(K.PIXEL_PACK_BUFFER,He.byteLength,K.STREAM_READ),K.readPixels(Y,ue,oe,le,Oe.convert(it),Oe.convert(mt),0);const Nt=ne!==null?ce.get(ne).__webglFramebuffer:null;M.bindFramebuffer(K.FRAMEBUFFER,Nt);const rn=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await NR(K,rn,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,et),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,He),K.deleteBuffer(et),K.deleteSync(rn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ue=0){const oe=Math.pow(2,-ue),le=Math.floor(C.image.width*oe),He=Math.floor(C.image.height*oe),We=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;xe.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,ue,0,0,We,ze,le,He),M.unbindTexture()},this.copyTextureToTexture=function(C,Y,ue=null,oe=null,le=0,He=0){let We,ze,Ye,qe,it,mt,et,Nt,rn;const Zt=C.isCompressedTexture?C.mipmaps[He]:C.image;if(ue!==null)We=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,Ye=ue.isBox3?ue.max.z-ue.min.z:1,qe=ue.min.x,it=ue.min.y,mt=ue.isBox3?ue.min.z:0;else{const sn=Math.pow(2,-le);We=Math.floor(Zt.width*sn),ze=Math.floor(Zt.height*sn),C.isDataArrayTexture?Ye=Zt.depth:C.isData3DTexture?Ye=Math.floor(Zt.depth*sn):Ye=1,qe=0,it=0,mt=0}oe!==null?(et=oe.x,Nt=oe.y,rn=oe.z):(et=0,Nt=0,rn=0);const Ht=Oe.convert(Y.format),Gt=Oe.convert(Y.type);let Xe;Y.isData3DTexture?(xe.setTexture3D(Y,0),Xe=K.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(xe.setTexture2DArray(Y,0),Xe=K.TEXTURE_2D_ARRAY):(xe.setTexture2D(Y,0),Xe=K.TEXTURE_2D),M.activeTexture(K.TEXTURE0),M.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const Fn=M.getParameter(K.UNPACK_ROW_LENGTH),yt=M.getParameter(K.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(K.UNPACK_SKIP_PIXELS),ri=M.getParameter(K.UNPACK_SKIP_ROWS),Ni=M.getParameter(K.UNPACK_SKIP_IMAGES);M.pixelStorei(K.UNPACK_ROW_LENGTH,Zt.width),M.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Zt.height),M.pixelStorei(K.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(K.UNPACK_SKIP_ROWS,it),M.pixelStorei(K.UNPACK_SKIP_IMAGES,mt);const si=C.isDataArrayTexture||C.isData3DTexture,Vt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const sn=ce.get(C),Li=ce.get(Y),Ft=ce.get(sn.__renderTarget),ji=ce.get(Li.__renderTarget);M.bindFramebuffer(K.READ_FRAMEBUFFER,Ft.__webglFramebuffer),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Xa=0;Xa<Ye;Xa++)si&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,le,mt+Xa),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ce.get(Y).__webglTexture,He,rn+Xa)),K.blitFramebuffer(qe,it,We,ze,et,Nt,We,ze,K.DEPTH_BUFFER_BIT,K.NEAREST);M.bindFramebuffer(K.READ_FRAMEBUFFER,null),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(le!==0||C.isRenderTargetTexture||ce.has(C)){const sn=ce.get(C),Li=ce.get(Y);M.bindFramebuffer(K.READ_FRAMEBUFFER,me),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,$);for(let Ft=0;Ft<Ye;Ft++)si?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,sn.__webglTexture,le,mt+Ft):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,sn.__webglTexture,le),Vt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Li.__webglTexture,He,rn+Ft):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Li.__webglTexture,He),le!==0?K.blitFramebuffer(qe,it,We,ze,et,Nt,We,ze,K.COLOR_BUFFER_BIT,K.NEAREST):Vt?K.copyTexSubImage3D(Xe,He,et,Nt,rn+Ft,qe,it,We,ze):K.copyTexSubImage2D(Xe,He,et,Nt,qe,it,We,ze);M.bindFramebuffer(K.READ_FRAMEBUFFER,null),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Vt?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(Xe,He,et,Nt,rn,We,ze,Ye,Ht,Gt,Zt.data):Y.isCompressedArrayTexture?K.compressedTexSubImage3D(Xe,He,et,Nt,rn,We,ze,Ye,Ht,Zt.data):K.texSubImage3D(Xe,He,et,Nt,rn,We,ze,Ye,Ht,Gt,Zt):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,He,et,Nt,We,ze,Ht,Gt,Zt.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,He,et,Nt,Zt.width,Zt.height,Ht,Zt.data):K.texSubImage2D(K.TEXTURE_2D,He,et,Nt,We,ze,Ht,Gt,Zt);M.pixelStorei(K.UNPACK_ROW_LENGTH,Fn),M.pixelStorei(K.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(K.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(K.UNPACK_SKIP_ROWS,ri),M.pixelStorei(K.UNPACK_SKIP_IMAGES,Ni),He===0&&Y.generateMipmaps&&K.generateMipmap(Xe),M.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&xe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?xe.setTextureCube(C,0):C.isData3DTexture?xe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xe.setTexture2DArray(C,0):xe.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){L=0,G=0,ne=null,M.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const pU=new Tt(12764882),mU=new Tt(13159638),co=4500,es=91,gU=42,vU=new Tt(15253624),_U=`
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
`,xU=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,yU=`
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
`,SU=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,bU=`
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
`,MU=`
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
`;function EU(){const a=new Float32Array(co*3),e=new Float32Array(co),n=new Float32Array(co);for(let r=0;r<co;r++){const o=24+Math.random()*36,c=Math.random()*Math.PI*2,u=(Math.random()-.5)*1.1;a[r*3]=o*Math.cos(c)*Math.cos(u),a[r*3+1]=o*Math.sin(u)*2.2,a[r*3+2]=o*Math.sin(c)*Math.cos(u)-18,e[r]=Math.random(),n[r]=.7+Math.random()*1.6}return{positions:a,phases:e,sizes:n}}function TU(){let a=1597463007;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}function AU(a,e,n){const r=(a.x-e.x)*n,o=a.y-e.y;return r*r+o*o}function RU(a){const e=TU(),n=[],r=48,o=.025;for(let c=0;c<es;c++){let u=null,h=-1;for(let m=0;m<r;m++){const p={x:o+e()*(1-o*2),y:o+e()*(1-o*2)};let _=Number.POSITIVE_INFINITY;for(const v of n){const g=AU(p,v,a);_=Math.min(_,g)}_>h&&(u=p,h=_)}u&&n.push(u)}return n}function Ub(a,e){const n=RU(e);for(let r=0;r<n.length;r++){const o=n[r];a[r*3]=-.96+o.x*1.92,a[r*3+1]=-.9+o.y*1.8,a[r*3+2]=0}}function CU(a){const e=new Float32Array(es),n=new Float32Array(es*3),r=new Float32Array(es),o=new Float32Array(es);for(let c=0;c<es;c++){const u=c<gU;e[c]=u?1:0,r[c]=c/es,o[c]=u?32+c*29%7:12+c*17%4}return Ub(n,a),{flares:e,positions:n,phases:r,sizes:o}}function wU(a,e,n={}){const{transparent:r=!1,threadAlpha:o}=n;let c;try{c=new hU({alpha:!0,antialias:!1,canvas:a,powerPreference:"high-performance"})}catch{return()=>{}}c.setPixelRatio(1);const u=new qR;u.background=r?null:new Tt(328968);const h=new wi(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:_}=EU(),v=new ni;v.setAttribute("position",new bn(m,3)),v.setAttribute("phase",new bn(p,1)),v.setAttribute("size",new bn(_,1));const g=new gi({vertexShader:_U,fragmentShader:xU,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:pU}},transparent:!0,depthWrite:!1}),S=new ey(v,g);u.add(S);const T=a.clientWidth||window.innerWidth,D=a.clientHeight||window.innerHeight,b=CU(T/D),x=b.positions,P=new ni;P.setAttribute("position",new bn(x,3)),P.setAttribute("flare",new bn(b.flares,1)),P.setAttribute("phase",new bn(b.phases,1)),P.setAttribute("size",new bn(b.sizes,1));const F=new gi({vertexShader:bU,fragmentShader:MU,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:vU}},transparent:!0,depthTest:!1,depthWrite:!1}),R=new ey(P,F);u.add(R);const U=3400,N=new ni,B=new Float32Array(U*6),A=new Float32Array(U*2),z=new Float32Array(U*2);N.setAttribute("position",new bn(B,3)),N.setAttribute("lineUV",new bn(A,1)),N.setAttribute("segPhase",new bn(z,1)),N.setDrawRange(0,0);const j=new gi({vertexShader:yU,fragmentShader:SU,uniforms:{uTime:{value:0},uColor:{value:mU},uAlpha:{value:o??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),V=new rC(N,j);u.add(V);const q=e==="alive"?4.8:5.2,pe=new Map;function me(se,de,Ce){const Je=Math.floor(se/q),Be=Math.floor(de/q),xt=Math.floor(Ce/q);return`${Je}:${Be}:${xt}`}for(let se=0;se<co;se++){const de=m[se*3],Ce=m[se*3+1],Je=m[se*3+2],Be=me(de,Ce,Je),xt=pe.get(Be)??[];xt.push(se),pe.set(Be,xt)}function $(se){const de=m[se*3],Ce=m[se*3+1],Je=m[se*3+2],Be=Math.floor(de/q),xt=Math.floor(Ce/q),ut=Math.floor(Je/q),pt=[];for(let ft=-1;ft<=1;ft++)for(let Ae=-1;Ae<=1;Ae++)for(let $e=-1;$e<=1;$e++){const wt=`${Be+ft}:${xt+Ae}:${ut+$e}`;pt.push(...pe.get(wt)??[])}return pt}const L=()=>{const se=new Set,de=[],Ce=[],Je=[];for(let Be=0;Be<co&&de.length<U*6;Be++){const xt=m[Be*3],ut=m[Be*3+1],pt=m[Be*3+2],ft=[];for(const Ae of $(Be)){if(Ae===Be)continue;const $e=m[Ae*3]-xt,wt=m[Ae*3+1]-ut,zt=m[Ae*3+2]-pt,nn=$e*$e+wt*wt+zt*zt;nn<q*q&&ft.push([Ae,nn])}ft.sort((Ae,$e)=>Ae[1]-$e[1]);for(const[Ae]of ft.slice(0,5)){if(de.length>=U*6)break;const $e=Be<Ae?`${Be}-${Ae}`:`${Ae}-${Be}`;se.has($e)||(se.add($e),de.push(xt,ut,pt,m[Ae*3],m[Ae*3+1],m[Ae*3+2]),Ce.push(0,1),Je.push(Math.random(),Math.random()))}}B.set(de),A.set(Ce),z.set(Je),N.getAttribute("position").needsUpdate=!0,N.getAttribute("lineUV").needsUpdate=!0,N.getAttribute("segPhase").needsUpdate=!0,N.setDrawRange(0,de.length/3)},G=()=>{for(let se=0;se<N.drawRange.count;se++)z[se]=Math.random();N.getAttribute("segPhase").needsUpdate=!0};L();const ne=new vC;let ge=0,Ee=0,O=0,Z=T/D;const te=()=>{const se=a.clientWidth||window.innerWidth,de=a.clientHeight||window.innerHeight,Ce=se/de;c.setSize(se,de,!1),h.aspect=Ce,h.updateProjectionMatrix(),Math.abs(Ce-Z)/Z>=.08&&(Ub(x,Ce),P.getAttribute("position").needsUpdate=!0,Z=Ce)},Q=()=>{window.cancelAnimationFrame(O),O=window.requestAnimationFrame(te)};te(),window.addEventListener("resize",Q);let ve=0;const k=se=>{if(document.hidden||a.dataset.paused==="true"){ge=requestAnimationFrame(k);return}const de=ne.getElapsedTime();de-ve>=1/30&&(ve=de,g.uniforms.uTime.value=de,j.uniforms.uTime.value=de,F.uniforms.uTime.value=de,e==="alive"&&(Ee+=1/30,Ee>3.2&&(Ee=0,G())),c.render(u,h)),ge=requestAnimationFrame(k)};return ge=requestAnimationFrame(k),()=>{cancelAnimationFrame(ge),cancelAnimationFrame(O),window.removeEventListener("resize",Q),v.dispose(),N.dispose(),P.dispose(),g.dispose(),j.dispose(),F.dispose(),c.dispose()}}function DU({mode:a,paused:e=!1,transparent:n=!1,threadAlpha:r,className:o="spell-bg"}){const c=Le.useRef(null);return Le.useEffect(()=>{const u=c.current;u&&(u.dataset.paused=String(e))},[e]),Le.useEffect(()=>{const u=c.current;return u?wU(u,a,{transparent:n,threadAlpha:r}):void 0},[a,n,r]),E.jsx("canvas",{"aria-hidden":"true",className:o,ref:c})}function ym({className:a,compact:e=!1}){const n=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",a].filter(Boolean).join(" ");return E.jsx(zn,{"aria-hidden":"true",className:n,icon:k2})}const NU=["Today","Yesterday","Others"],Dy=[{description:"Today, yesterday, and older threads",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],LU=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function UU(a,e){if(e==="flat")return[{label:null,threads:a}];if(e==="date")return NU.map(r=>({label:r,threads:a.filter(o=>o.dateGroup===r)}));const n=new Map;for(const r of a){const o=r.volume==null?"Volume unknown":`Vol ${r.volume}`,c=n.get(o)??[];n.set(o,[...c,r])}return[...n.entries()].map(([r,o])=>({label:r,threads:o}))}function OU({activeThreadId:a,archivedOpen:e,collapsed:n,drawerOpen:r,onArchive:o,onClose:c,onCreate:u,onDelete:h,onOpen:m,onOpenSettings:p,onPin:_,onRename:v,onSelect:g,onSetArchivedOpen:S,readerStatus:T,threads:D}){const[b,x]=Le.useState(null),[P,F]=Le.useState(""),[R,U]=Le.useState(null),[N,B]=Le.useState("date"),[A,z]=Le.useState(!1),[j,V]=Le.useState(()=>new Set(["Yesterday","Others"])),[q,pe]=Le.useState(()=>window.matchMedia("(max-width: 767px)").matches),me=Le.useRef(null);Le.useEffect(()=>{const Q=window.matchMedia("(max-width: 767px)");function ve(k){pe(k.matches)}return pe(Q.matches),Q.addEventListener("change",ve),()=>Q.removeEventListener("change",ve)},[]),Le.useEffect(()=>{q&&r&&me.current?.focus()},[r,q]);const $=Le.useMemo(()=>D.filter(Q=>Q.archived===e).sort((Q,ve)=>Number(ve.pinned)-Number(Q.pinned)),[e,D]),L=UU($,N),G=D.filter(Q=>Q.archived).length,ne=q?r:!n;function ge(Q){x(Q.id),F(Q.title)}function Ee(Q){const ve=P.trim();ve&&v(Q,ve),x(null)}function O(Q){if(R===Q){h(Q),U(null);return}U(Q),window.setTimeout(()=>{U(ve=>ve===Q?null:ve)},3e3)}function Z(Q){V(ve=>{const k=new Set(ve);return k.has(Q)?k.delete(Q):k.add(Q),k})}function te(Q){const ve=Q.id===a;return E.jsxs("li",{className:`lab-thread-row ${ve?"active":""}`,"data-testid":`thread-${Q.id}`,children:[E.jsxs("div",{className:"lab-thread-main",children:[b===Q.id?E.jsx("span",{className:"lab-thread-copy",children:E.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>Ee(Q.id),onChange:k=>F(k.target.value),onClick:k=>k.stopPropagation(),onKeyDown:k=>{k.key==="Enter"&&(k.preventDefault(),Ee(Q.id)),k.key==="Escape"&&x(null)},value:P})}):E.jsx("button",{"aria-current":ve?"page":void 0,className:"lab-thread-select",onClick:()=>g(Q.id),type:"button",children:E.jsx("span",{className:"lab-thread-copy",children:E.jsx("strong",{children:Q.title})})}),R===Q.id&&E.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),E.jsxs("div",{className:"lab-thread-actions",children:[E.jsx("button",{"aria-label":`${Q.pinned?"Unpin":"Pin"} ${Q.title}`,onClick:()=>_(Q.id),type:"button",children:E.jsx(D3,{})}),E.jsx("button",{"aria-label":`Rename ${Q.title}`,onClick:()=>ge(Q),type:"button",children:E.jsx(w3,{})}),E.jsx("button",{"aria-label":`${Q.archived?"Restore":"Archive"} ${Q.title}`,onClick:()=>o(Q.id),type:"button",children:E.jsx(Mx,{})}),E.jsx("button",{"aria-label":`Delete ${Q.title}`,className:R===Q.id?"confirming":"",onClick:()=>O(Q.id),type:"button",children:E.jsx(R3,{})})]})]},Q.id)}return E.jsxs("aside",{"aria-hidden":!ne,"aria-label":q?"Threads":void 0,"aria-modal":q&&r?!0:void 0,className:"lab-rail",id:"spell-surface-rail",inert:!ne,role:q?"dialog":void 0,children:[E.jsxs("header",{className:"lab-brand",children:[E.jsx("span",{className:"lab-brand-mark",children:E.jsx(ym,{compact:!0})}),E.jsx("span",{children:E.jsx("strong",{children:"weaver"})}),E.jsx("button",{"aria-label":ne?"Close threads":"Open threads",className:"lab-rail-close",onClick:ne?c:m,ref:me,type:"button",children:ne?E.jsx(A3,{}):E.jsx(WS,{})})]}),E.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:u,type:"button",children:[E.jsx(b3,{}),E.jsx("span",{children:"New Weave"})]}),E.jsxs("div",{className:"lab-rail-scroll",children:[E.jsxs("section",{className:"lab-chat-section",children:[E.jsxs("header",{className:"lab-rail-section-head",children:[E.jsx("h2",{children:"Chats"}),E.jsxs("div",{className:"lab-grouping-picker",children:[E.jsxs("button",{"aria-expanded":A,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>z(Q=>!Q),type:"button",children:[Dy.find(Q=>Q.value===N)?.label,E.jsx(Ep,{})]}),A&&E.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[E.jsx("p",{children:"Organize threads"}),Dy.map(Q=>E.jsxs("button",{"aria-checked":N===Q.value,onClick:()=>{B(Q.value),z(!1)},role:"menuitemradio",type:"button",children:[E.jsx("span",{"aria-hidden":"true",children:N===Q.value?"✓":""}),E.jsx("strong",{children:Q.label}),E.jsx("small",{children:Q.description})]},Q.value))]})]})]}),E.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[L.map(Q=>{const ve=Q.label,k=ve?j.has(ve):!1;return E.jsxs("section",{className:"lab-thread-group",children:[ve&&E.jsxs("button",{"aria-expanded":!k,className:"lab-thread-group-toggle",onClick:()=>Z(ve),type:"button",children:[E.jsx("span",{children:ve}),E.jsx("small",{children:Q.threads.length}),E.jsx(Ep,{})]}),E.jsx("div",{"aria-hidden":k,className:`lab-thread-group-body ${k?"collapsed":""}`,children:E.jsx("div",{children:E.jsx("ul",{className:"lab-thread-flat-list",children:Q.threads.map(te)})})})]},ve??"all")}),$.length===0&&E.jsxs("div",{className:"lab-thread-empty",children:[E.jsx("span",{"aria-hidden":"true"}),E.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),E.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[E.jsxs("header",{className:"lab-rail-section-head",children:[E.jsx("h2",{children:"Library"}),E.jsx("small",{children:"novels"})]}),E.jsx("div",{className:"lab-novel-list",children:LU.map(Q=>E.jsxs("button",{"aria-current":Q.active?"page":void 0,"aria-disabled":!Q.active,className:Q.active?"active":"upcoming",type:"button",children:[E.jsx(T3,{}),E.jsxs("span",{children:[E.jsx("strong",{children:Q.label}),E.jsx("small",{children:Q.active?"current shelf":"upcoming"})]})]},Q.label))})]})]}),E.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>S(!e),type:"button",children:[E.jsx(Mx,{}),E.jsx("span",{children:"Archived"}),E.jsx("em",{children:G})]}),E.jsxs("footer",{className:"lab-rail-footer",children:[E.jsxs("button",{"aria-label":"Model and key settings",className:"lab-key-status",onClick:p,type:"button",children:[E.jsx("span",{"aria-hidden":"true",className:"lab-key-status-dot"}),E.jsxs("span",{children:[E.jsx("strong",{children:"Model & key"}),E.jsx("small",{children:"open settings"})]})]}),E.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:p,type:"button",children:[E.jsx(jS,{}),E.jsxs("span",{children:[E.jsx("strong",{children:"Settings"}),E.jsxs("small",{children:[T," · runes · appearance"]})]})]})]})]})}const PU=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],IU=Array.from({length:20},(a,e)=>e);function zU(a){return{"--index":a}}function FU({announcement:a,eventKey:e,mode:n}){return E.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${n}`,children:[n==="particles"&&E.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:IU.map(r=>E.jsx("span",{style:zU(r)},r))}),n==="threads"&&E.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[E.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),E.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),E.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),E.jsx("p",{className:"rune-announcement",children:a})]},`${n}-${e}`)}const BU=Array.from({length:7},(a,e)=>e),HU=Array.from({length:8},(a,e)=>e),GU=Array.from({length:11},(a,e)=>e),Ju={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function sp(a){return{"--index":a}}function Ob({compact:a=!1,mode:e,state:n}){return E.jsxs("div",{"aria-label":`${Ju[e]}, ${n}`,className:`lab-soul-sea soul-${e} soul-state-${n} ${a?"soul-compact":""}`,role:"img",children:[E.jsxs("div",{className:"lab-soul-sky",children:[E.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{})]}),E.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:BU.map(r=>E.jsx("span",{className:"lab-soul-sun",style:sp(r)},r))}),E.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:HU.map(r=>E.jsx("span",{className:"lab-memory-light",style:sp(r)},r))})]}),E.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:GU.map(r=>E.jsx("span",{className:"lab-shadow",style:sp(r)},r))}),E.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[E.jsx("span",{className:"water-plane water-plane-back"}),E.jsx("span",{className:"water-plane water-plane-middle"}),E.jsx("span",{className:"water-plane water-plane-front"}),E.jsx("span",{className:"water-flash"})]}),!a&&E.jsxs("p",{className:"lab-soul-caption",children:[E.jsx("span",{children:Ju[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const op=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12},{end:3160,number:13}],VU={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},kU=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"key and model",id:"model",label:"Model"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],XU=["still","living","mirror"],WU=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function jU({initial:a,onApiKeyChange:e,onClose:n,onSave:r}){const[o,c]=Le.useState(a),[u,h]=Le.useState(ku),[m,p]=Le.useState(Cp),[_,v]=Le.useState(YS),[g,S]=Le.useState("customize"),T=Le.useRef(null),D=Le.useRef(null);Le.useEffect(()=>{T.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function b(R){if(R.key!=="Tab"||!T.current)return;const U=T.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),N=U[0],B=U[U.length-1];R.shiftKey&&document.activeElement===N&&(R.preventDefault(),B?.focus()),!R.shiftKey&&document.activeElement===B&&(R.preventDefault(),N?.focus())}function x(R,U){c(N=>({...N,[R]:U}))}function P(){qS(u),P3(m),I3(_),e?.(ku()!==""&&!Cp()),r(o)}function F(R){const U=op.find(A=>A.number===R);if(!U)return;const N=op[R-2]?.end??0,B=Math.max(N+1,Math.min(o.chapter,U.end));c(A=>({...A,chapter:B,volume:R}))}return E.jsx("div",{className:"lab-settings-backdrop",onMouseDown:n,children:E.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:b,onMouseDown:R=>R.stopPropagation(),ref:T,role:"dialog",children:[E.jsxs("header",{className:"lab-settings-head",children:[E.jsxs("div",{children:[E.jsx("p",{children:"the sea within"}),E.jsx("h2",{children:"Soul Sea"})]}),E.jsx("button",{"aria-label":"Close settings",onClick:n,type:"button",children:"×"})]}),E.jsxs("div",{className:"lab-settings-layout",children:[E.jsxs("aside",{className:"lab-settings-nav",children:[E.jsx("p",{children:"Settings"}),E.jsx("nav",{"aria-label":"Settings sections",children:kU.map(R=>E.jsxs("button",{"aria-label":R.label,"aria-current":g===R.id?"page":void 0,className:g===R.id?"on":"",onClick:()=>S(R.id),type:"button",children:[E.jsx("strong",{children:R.label}),E.jsx("span",{children:R.hint})]},R.id))})]}),E.jsxs("div",{className:"lab-settings-main",children:[E.jsx(Ob,{compact:!0,mode:o.soulMode,state:"idle"}),E.jsxs("div",{className:"lab-settings-content",children:[g==="reader"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Reader position"}),E.jsx("span",{children:"The Spell will not read beyond this point."})]}),E.jsxs("div",{className:"lab-reader-grid",children:[E.jsxs("label",{children:[E.jsx("span",{children:"Volume"}),E.jsx("select",{"aria-label":"Reader volume",onChange:R=>F(Number(R.target.value)),ref:D,value:o.volume,children:op.map(R=>E.jsxs("option",{value:R.number,children:["Vol ",R.number," · to ch ",R.end]},R.number))})]}),E.jsxs("label",{children:[E.jsx("span",{children:"Chapter"}),E.jsx("input",{max:3160,min:1,onChange:R=>x("chapter",Number(R.target.value)),type:"number",value:o.chapter})]})]})]}),g==="spoilers"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Spoilers"}),E.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),E.jsxs("div",{className:"lab-choice-grid two",children:[E.jsxs("button",{"aria-pressed":o.spoilerMode==="protect",className:o.spoilerMode==="protect"?"on":"",onClick:()=>x("spoilerMode","protect"),type:"button",children:[E.jsx("strong",{children:"Protect the story"}),E.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),E.jsxs("button",{"aria-pressed":o.spoilerMode==="none",className:o.spoilerMode==="none"?"on":"",onClick:()=>x("spoilerMode","none"),type:"button",children:[E.jsx("strong",{children:"No spoiler limits"}),E.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),g==="reading"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Reading tier"}),E.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),E.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(R=>E.jsxs("button",{"aria-pressed":o.tier===R,className:o.tier===R?"on":"",onClick:()=>x("tier",R),type:"button",children:[E.jsx("strong",{children:R}),E.jsx("span",{children:VU[R]})]},R))})]}),g==="customize"&&E.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Customize the Spell"}),E.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Surface theme"}),E.jsx("div",{className:"lab-theme-grid",children:WU.map(R=>E.jsxs("button",{"aria-label":R.label,"aria-pressed":o.theme===R.value,className:o.theme===R.value?"on":"",onClick:()=>x("theme",R.value),type:"button",children:[E.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:R.swatches.map(U=>E.jsx("i",{style:{background:U}},U))}),E.jsx("strong",{children:R.label}),E.jsx("span",{children:R.description})]},R.value))})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Rune appearance"}),E.jsx("div",{className:"lab-choice-grid three",children:PU.map(R=>E.jsxs("button",{"aria-label":R.label,"aria-pressed":o.runeMode===R.mode,className:o.runeMode===R.mode?"on":"",onClick:()=>x("runeMode",R.mode),type:"button",children:[E.jsx("strong",{children:R.label}),E.jsx("span",{children:R.description})]},R.mode))})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Soul Sea"}),E.jsx("div",{className:"lab-choice-grid three",children:XU.map(R=>E.jsxs("button",{"aria-label":Ju[R],"aria-pressed":o.soulMode===R,className:o.soulMode===R?"on":"",onClick:()=>x("soulMode",R),type:"button",children:[E.jsx("strong",{children:Ju[R]}),E.jsx("span",{children:R==="still"?"A calm horizon behind the conversation.":R==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},R))})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Message transparency"}),E.jsxs("div",{className:"lab-choice-grid two",children:[E.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":o.glass==="subtle",className:o.glass==="subtle"?"on":"",onClick:()=>x("glass","subtle"),type:"button",children:[E.jsx("strong",{children:"Subtle glass"}),E.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),E.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":o.glass==="immersive",className:o.glass==="immersive"?"on":"",onClick:()=>x("glass","immersive"),type:"button",children:[E.jsx("strong",{children:"Immersive · no surface"}),E.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),E.jsxs("div",{className:"lab-customize-block",children:[E.jsx("h4",{children:"Star web"}),E.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(R=>E.jsx("button",{"aria-pressed":o.starIntensity===R,className:o.starIntensity===R?"on":"",onClick:()=>x("starIntensity",R),type:"button",children:R},R))})]}),E.jsxs("div",{className:"lab-customize-row",children:[E.jsxs("div",{children:[E.jsx("h4",{children:"Reading density"}),E.jsxs("div",{className:"lab-segmented-control",children:[E.jsx("button",{"aria-label":"Compact text","aria-pressed":o.density==="compact",className:o.density==="compact"?"on":"",onClick:()=>x("density","compact"),type:"button",children:"compact"}),E.jsx("button",{"aria-label":"Comfortable text","aria-pressed":o.density==="comfortable",className:o.density==="comfortable"?"on":"",onClick:()=>x("density","comfortable"),type:"button",children:"comfortable"})]})]}),E.jsxs("div",{children:[E.jsx("h4",{children:"Font size"}),E.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(R=>E.jsx("button",{"aria-pressed":o.fontSize===R,className:o.fontSize===R?"on":"",onClick:()=>x("fontSize",R),type:"button",children:R},R))})]})]})]}),g==="privacy"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Keyboard & privacy"}),E.jsx("span",{children:"Quick controls and where your reading data stays."})]}),E.jsxs("dl",{className:"lab-shortcuts",children:[E.jsxs("div",{children:[E.jsxs("dt",{children:[E.jsx("kbd",{children:"Ctrl"}),E.jsx("kbd",{children:","})]}),E.jsx("dd",{children:"open settings"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:E.jsx("kbd",{children:"Esc"})}),E.jsx("dd",{children:"close this panel"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:E.jsx("kbd",{children:"Enter"})}),E.jsx("dd",{children:"send a message"})]})]}),E.jsxs("aside",{className:"lab-privacy-note",children:[E.jsx("span",{"aria-hidden":"true",children:"◎"}),E.jsxs("div",{children:[E.jsx("strong",{children:"Everything stays on this machine."}),E.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]}),g==="model"&&E.jsxs("section",{className:"lab-settings-section",children:[E.jsxs("div",{className:"lab-setting-title",children:[E.jsx("h3",{children:"Model"}),E.jsx("span",{children:"Your DeepSeek key and which model answers."})]}),E.jsxs("div",{className:"lab-api-key-setting",children:[E.jsx("label",{htmlFor:"spell-surface-api-key",children:"DeepSeek key"}),E.jsx("input",{autoCapitalize:"none",autoComplete:"off",id:"spell-surface-api-key",onChange:R=>h(R.target.value),placeholder:"sk-...",spellCheck:!1,type:"password",value:u}),E.jsx("small",{children:"Stored only in this browser. Sent with each request and never saved by the server. Leave empty and save to delete it."})]}),E.jsxs("label",{className:"lab-check-row",children:[E.jsx("input",{checked:m,onChange:R=>p(R.target.checked),type:"checkbox"}),E.jsxs("span",{children:["Disable this key",E.jsx("small",{children:"Fall back to the library key when yours is unavailable."})]})]}),E.jsxs("div",{className:"lab-api-key-setting",children:[E.jsx("label",{htmlFor:"spell-surface-model",children:"Model"}),E.jsx("select",{id:"spell-surface-model",onChange:R=>v(R.target.value),value:_,children:U3.map(R=>E.jsx("option",{value:R.id,children:R.label},R.id))}),E.jsx("small",{children:"DeepSeek V4 Flash is fast and cheap; V4 Pro is the strongest model. Your choice is stored in this browser."})]})]})]})]})]}),E.jsxs("footer",{className:"lab-settings-actions",children:[E.jsx("button",{onClick:n,type:"button",children:"Leave unchanged"}),E.jsx("button",{className:"primary",onClick:P,type:"button",children:"Apply settings"})]})]})})}const $i={chapter:1e3,density:"comfortable",fontSize:"small",glass:"immersive",runeMode:"particles",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"void",tier:"ascended",volume:5},Pb="weaver.spell-surface";function Qr(a,e,n){return typeof a=="string"&&e.includes(a)?a:n}function qU(){try{const a=JSON.parse(window.localStorage.getItem(Pb)??"null");return a?{...$i,density:Qr(a.density,["compact","comfortable"],$i.density),fontSize:Qr(a.fontSize,["small","medium","large"],$i.fontSize),glass:Qr(a.glass,["subtle","immersive"],$i.glass),runeMode:Qr(a.runeMode,["particles","voice","threads"],$i.runeMode),soulMode:Qr(a.soulMode,["still","living","mirror"],$i.soulMode),starIntensity:Qr(a.starIntensity,["quiet","balanced","vivid"],$i.starIntensity),theme:Qr(a.theme,["crimson","cosmos","starlight","void"],$i.theme)}:$i}catch{return $i}}function YU(a){window.localStorage.setItem(Pb,JSON.stringify({density:a.density,fontSize:a.fontSize,glass:a.glass,runeMode:a.runeMode,soulMode:a.soulMode,starIntensity:a.starIntensity,theme:a.theme}))}const Ny=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127,3160];function KU(a){const e=Ny.findIndex(n=>a<=n);return e===-1?Ny.length:e+1}function ZU(a){if(!a)return"Others";const e=new Date(a);if(Number.isNaN(e.getTime()))return"Others";const n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),e>=n?"Today":e>=r?"Yesterday":"Others"}function Ly(a){return{reader_chapter:a.chapter,spoiler_mode:a.spoilerMode,tier:a.tier}}function QU({api:a,privacyLabel:e}){const n=U2(a,Ai),[r,o]=Le.useState(qU),[c,u]=Le.useState(!1),[h,m]=Le.useState(H2),[p,_]=Le.useState(1),[v,g]=Le.useState(!1),[S,T]=Le.useState(!1),[D,b]=Le.useState(!1),[x,P]=Le.useState(new Set),[F,R]=Le.useState(new Set),[U,N]=Le.useState(new Map),[B,A]=Le.useState("idle"),[z,j]=Le.useState("[The Spell listens.]"),[V,q]=Le.useState(0),[pe,me]=Le.useState(0),$=Le.useRef(null),L=Le.useRef(null),G=Le.useRef(null),ne=Le.useRef(!1),ge=Le.useRef(!1),Ee=Le.useRef(null),O=Le.useMemo(()=>n.conversations.map(Ae=>({archived:x.has(Ae.conversation_id),dateGroup:ZU(Ae.created_at),id:Ae.conversation_id,pinned:F.has(Ae.conversation_id),preview:"private reading thread",title:U.get(Ae.conversation_id)??Ae.title,volume:null})),[x,n.conversations,F,U]);Le.useEffect(()=>{function Ae($e){$e.ctrlKey&&$e.key===","&&($e.preventDefault(),Q()),$e.key==="Escape"&&!h&&(u(!1),v&&k())}return window.addEventListener("keydown",Ae),()=>window.removeEventListener("keydown",Ae)},[v,h]),Le.useEffect(()=>{if(!v)return;const Ae=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=Ae}},[v]),Le.useEffect(()=>{const Ae=G.current;Ae&&(Ae.scrollTop=Ae.scrollHeight)},[n.activity,n.messages,n.recoveryMessage]),Le.useEffect(()=>{if(n.turnActive){ne.current=!0,A(n.activity.length>0?"weaving":"rippling");return}ne.current&&(ne.current=!1,A("complete"),te("[The weave is complete.]"),Ee.current&&window.clearTimeout(Ee.current),Ee.current=window.setTimeout(()=>A("idle"),900))},[n.activity.length,n.turnActive]),Le.useEffect(()=>{const Ae=n.activity.at(-1);if(!Ae)return;const $e=F2(Ae);$e&&te($e)},[n.activity]);const Z=n.messages.some(Ae=>Ae.role==="weaver"&&Ae.streaming&&Ae.content.length>0);Le.useEffect(()=>{!n.turnActive||!Z||ge.current||(ge.current=!0,te("[Weaving the story.]"))},[n.turnActive,Z]),Le.useEffect(()=>()=>{Ee.current&&window.clearTimeout(Ee.current)},[]);function te(Ae){j(Ae),q($e=>$e+1),me($e=>$e+1)}async function Q(){try{const Ae=await a.getPreferences(),$e=Ae.reader_chapter??r.chapter;o(wt=>({...wt,chapter:$e,spoilerMode:Ae.spoiler_mode,tier:Ae.tier,volume:KU($e)}))}finally{u(!0),te("[The sea within opens.]")}}function ve(){if(window.innerWidth<768){g(!0);return}T(!1)}function k(){if(window.innerWidth<768){g(!1),window.setTimeout(()=>L.current?.focus(),0);return}T(!0)}function se(){m(!1),window.setTimeout(()=>$.current?.focus(),0)}async function de(){await n.createConversation()&&(g(!1),te("[An empty thread waits in the void.]"),window.setTimeout(()=>$.current?.focus(),0))}async function Ce(Ae){await n.selectConversation(Ae),g(!1),te("[The thread is recalled.]")}function Je(Ae,$e){N(wt=>new Map(wt).set(Ae,$e)),te("[The thread accepts a new name.]")}function Be(Ae,$e){Ae(wt=>{const zt=new Set(wt);return zt.has($e)?zt.delete($e):zt.add($e),zt})}function xt(Ae){ge.current=!1,A("rippling"),te("[The Spell reaches for the first thread.]"),n.sendMessage(Ae)}function ut(){ge.current=!1,A("weaving"),te("[The Spell takes up the thread once more.]"),n.regenerateReply()}const pt=`Vol ${r.volume} · ch ${r.chapter} · ${r.tier}`,ft=r.starIntensity==="quiet"?.2:r.starIntensity==="vivid"?.56:.36;return E.jsxs("div",{className:["spell-surface-lab","spell-surface-live",v?"lab-rail-open":"",S?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":r.density,"data-font-size":r.fontSize,"data-glass":r.glass,"data-runes":r.runeMode,"data-soul":r.soulMode,"data-star-intensity":r.starIntensity,"data-theme":r.theme,"data-testid":"spell-surface-live",children:[E.jsx(DU,{className:"lab-spell-background",mode:"alive",paused:c||h,threadAlpha:ft}),E.jsx("div",{"aria-hidden":"true",className:"lab-galactic-band"}),E.jsx("div",{"aria-hidden":"true",className:"lab-purple-depth"}),E.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-one"}),E.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-two"}),E.jsxs("div",{"aria-hidden":"true",className:"lab-core-wake",children:[E.jsx("span",{}),E.jsx("span",{})]},pe),E.jsx(Ob,{mode:r.soulMode,state:B}),E.jsx(OU,{activeThreadId:n.conversationId??"",archivedOpen:D,collapsed:S,drawerOpen:v,onArchive:Ae=>Be(P,Ae),onClose:k,onCreate:()=>{de()},onDelete:Ae=>{n.deleteConversation(Ae)},onOpen:ve,onOpenSettings:()=>{Q()},onPin:Ae=>Be(R,Ae),onRename:Je,onSelect:Ae=>{Ce(Ae)},onSetArchivedOpen:b,readerStatus:pt,threads:O}),E.jsxs("main",{"aria-hidden":v?!0:void 0,className:"lab-chat-main",inert:v,children:[E.jsxs("div",{className:"lab-chat-controls",children:[E.jsx("button",{"aria-controls":"spell-surface-rail","aria-expanded":v,"aria-label":"Open threads",className:"lab-mobile-rail",onClick:ve,ref:L,type:"button",children:E.jsx(WS,{})}),E.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{Q()},type:"button",children:E.jsx(jS,{})})]}),E.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:G,children:E.jsxs("div",{className:"lab-transcript-column",children:[n.bootError&&E.jsx("div",{className:"boot-error",children:n.bootError}),!n.bootError&&n.messages.length===0&&E.jsxs("section",{className:"lab-empty-weave",children:[E.jsx("span",{className:"lab-empty-mark",children:E.jsx(ym,{})}),E.jsx("p",{children:"[An empty thread trembles in the void.]"}),E.jsx("h1",{children:"What are we reading?"}),E.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),n.messages.map(Ae=>E.jsx(K3,{Mark:ym,assistantName:Ai.assistantName,message:Ae,onQuote:$e=>{n.setDraft(`"${$e}" `),$.current?.focus()},onRegenerate:Ae.id===n.lastReplyId&&n.turnState==="idle"?ut:void 0,regenerateLabel:Ai.regenerateLabel},Ae.id)),n.recoveryMessage&&E.jsx(Z3,{chooseLabel:Ai.recoveryChooseLabel,createLabel:Ai.recoveryCreateLabel,message:n.recoveryMessage,onChooseConversation:ve,onCreateConversation:()=>{de()},onRetry:()=>{n.retryLastTurn()},retryLabel:Ai.recoveryRetryLabel,title:Ai.recoveryTitle})]})}),E.jsx(FU,{announcement:z,eventKey:V,mode:r.runeMode}),E.jsxs("footer",{className:"lab-composer-dock",children:[E.jsx(L3,{cancelling:n.turnState==="cancelling",draft:n.draft,inputLabel:Ai.inputLabel,onCancel:()=>{n.cancelTurn()},onDraftChange:n.setDraft,onSubmit:xt,onTierChange:Ae=>{const $e={...r,tier:Ae};o($e),a.savePreferences(Ly($e))},placeholder:Ai.composerPlaceholder,sendLabel:Ai.sendLabel,stopLabel:Ai.stopLabel,stoppingLabel:Ai.stoppingLabel,textareaRef:$,tier:r.tier,turnActive:n.turnActive}),E.jsxs("p",{children:[E.jsx("span",{})," ",e]})]})]}),v&&E.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:k,type:"button"}),c&&E.jsx(jU,{initial:r,onClose:()=>u(!1),onSave:Ae=>{o(Ae),YU(Ae),u(!1),te("[Your soul answers the change.]"),a.savePreferences(Ly(Ae))}}),h&&E.jsx(k3,{initialStep:p,onComplete:se,onDefer:se})]})}async function Jr(a,e){if(!a.ok)throw new Error(`${e} failed (${a.status})`);return await a.json()}function JU(a){const e=typeof a.data.text=="string"?a.data.text:"",n=typeof a.data.message=="string"?a.data.message:"";if(a.event==="delta")return{type:"delta",text:e};if(a.event==="completed")return{type:"completed",text:e,tokenCount:typeof a.data.token_count=="number"?a.data.token_count:void 0,tokenBudget:typeof a.data.token_budget=="number"?a.data.token_budget:void 0};if(a.event==="interrupted")return{type:"interrupted",message:n||"The turn was interrupted."};if(a.event==="failed")return{type:"failed",message:n||"The reply failed.",code:typeof a.data.code=="string"?a.data.code:void 0};if(a.event==="tool"){const r=Array.isArray(a.data.handles)?a.data.handles.filter(o=>typeof o=="string"):void 0;return{type:"tool",name:typeof a.data.name=="string"?a.data.name:"tool",status:typeof a.data.status=="string"?a.data.status:"start",detail:typeof a.data.detail=="string"?a.data.detail:"",preview:typeof a.data.preview=="string"?a.data.preview:void 0,handles:r&&r.length>0?r:void 0}}return null}async function*$U(a){const e=[];let n=[],r=null,o=0;const c=["delta","tool","completed","interrupted","failed"];for(const u of c)a.addEventListener(u,h=>{try{const m=JU({event:u,data:JSON.parse(h.data)});m&&(e.push(m),n.splice(0).forEach(p=>p()))}catch{}});a.onerror=()=>{o+=1,(a.readyState===EventSource.CLOSED||o>4)&&(r=new Error("The reply stream was interrupted."),n.splice(0).forEach(u=>u()))};try{for(;;)if(e.length>0)yield e.shift();else{if(r)throw r;await new Promise(u=>n.push(u))}}finally{a.close()}}async function*lp(a){const e=new EventSource(`/api/conversations/${encodeURIComponent(a)}/stream`);let n=!1;for await(const r of $U(e))if(yield r,r.type==="completed"||r.type==="interrupted"||r.type==="failed"){n=!0;break}if(!n)throw new Error("The reply stream closed without finishing.")}function e4(a=fetch){const e=(n,r)=>a(n,{...r,headers:{...z3(),...r?.headers}});return{async getPreferences(){const n=await e("/api/preferences");return Jr(n,"Loading preferences")},async deleteConversation(n){const r=await e(`/api/conversations/${n}`,{method:"DELETE"});return Jr(r,"Deleting conversation")},async getPassage(n){const r=await e(`/api/passages?handle=${encodeURIComponent(n)}`);return Jr(r,"Loading passage")},async savePreferences(n){const r=await e("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return Jr(r,"Saving preferences")},async listConversations(){const n=await e("/api/conversations");return Jr(n,"Loading conversations")},async createConversation(){const n=await e("/api/conversations",{method:"POST"});return Jr(n,"Creating a conversation")},async loadMessages(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/messages`);return Jr(r,"Loading the conversation")},async*streamTurn(n,r){const o=await e(`/api/conversations/${encodeURIComponent(n)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r})});if(!o.ok)throw new Error(`Sending the message failed (${o.status})`);yield*lp(n)},async*retryTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/retry`,{method:"POST"});if(!r.ok)throw new Error(`Retrying failed (${r.status})`);yield*lp(n)},async*regenerateTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/regenerate`,{method:"POST"});if(!r.ok)throw new Error(`Regenerating failed (${r.status})`);yield*lp(n)},async cancelTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/cancel`,{method:"POST"});if(r.status===202)return"cancelling";if(r.status===200)return"idle";throw new Error(`Stopping the reply failed (${r.status})`)}}}const t4=Le.lazy(()=>GM(()=>import("./ThemeLab-DQ6hU896.js"),[]).then(a=>({default:a.ThemeLab})));ls.autoAddCss=!1;function n4(a){return document.querySelector(`meta[name="${a}"]`)?.content??""}const Ib=document.getElementById("root");if(!Ib)throw new Error("Weaver root element is missing.");const i4=window.location.hash==="#theme-lab";N2.createRoot(Ib).render(i4?E.jsx(Le.Suspense,{fallback:E.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:E.jsx(t4,{})}):E.jsx(QU,{api:e4(),privacyLabel:n4("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{S3 as A,bx as C,WS as R,DU as S,ym as W,Ob as a,OU as b,jS as c,M3 as d,FU as e,jU as f,E as j,Le as r};

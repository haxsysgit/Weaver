(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();const TM="modulepreload",AM=function(r){return"/"+r},S_={},RM=function(e,n,a){let l=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(n.map(p=>{if(p=AM(p),p in S_)return;S_[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":TM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,E)=>{g.addEventListener("load",S),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function CM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var uh={exports:{}},pl={};var b_;function wM(){if(b_)return pl;b_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return pl.Fragment=e,pl.jsx=n,pl.jsxs=n,pl}var M_;function DM(){return M_||(M_=1,uh.exports=wM()),uh.exports}var R=DM(),fh={exports:{}},dt={};var E_;function NM(){if(E_)return dt;E_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=g&&A[g]||A["@@iterator"],typeof A=="function"?A:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,b={};function y(A,G,se){this.props=A,this.context=G,this.refs=b,this.updater=se||E}y.prototype.isReactComponent={},y.prototype.setState=function(A,G){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,G,"setState")},y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function I(){}I.prototype=y.prototype;function F(A,G,se){this.props=A,this.context=G,this.refs=b,this.updater=se||E}var N=F.prototype=new I;N.constructor=F,D(N,y.prototype),N.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(A,G,se){var Me=se.ref;return{$$typeof:r,type:A,key:G,ref:Me!==void 0?Me:null,props:se}}function q(A,G){return z(A.type,G,A.props)}function k(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function Z(A){var G={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(se){return G[se]})}var de=/\/+/g;function he(A,G){return typeof A=="object"&&A!==null&&A.key!=null?Z(""+A.key):G.toString(36)}function Q(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(L,L):(A.status="pending",A.then(function(G){A.status==="pending"&&(A.status="fulfilled",A.value=G)},function(G){A.status==="pending"&&(A.status="rejected",A.reason=G)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function U(A,G,se,Me,Re){var ee=typeof A;(ee==="undefined"||ee==="boolean")&&(A=null);var ue=!1;if(A===null)ue=!0;else switch(ee){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(A.$$typeof){case r:case e:ue=!0;break;case _:return ue=A._init,U(ue(A._payload),G,se,Me,Re)}}if(ue)return Re=Re(A),ue=Me===""?"."+he(A,0):Me,O(Re)?(se="",ue!=null&&(se=ue.replace(de,"$&/")+"/"),U(Re,G,se,"",function(Qe){return Qe})):Re!=null&&(k(Re)&&(Re=q(Re,se+(Re.key==null||A&&A.key===Re.key?"":(""+Re.key).replace(de,"$&/")+"/")+ue)),G.push(Re)),1;ue=0;var _e=Me===""?".":Me+":";if(O(A))for(var Le=0;Le<A.length;Le++)Me=A[Le],ee=_e+he(Me,Le),ue+=U(Me,G,se,ee,Re);else if(Le=S(A),typeof Le=="function")for(A=Le.call(A),Le=0;!(Me=A.next()).done;)Me=Me.value,ee=_e+he(Me,Le++),ue+=U(Me,G,se,ee,Re);else if(ee==="object"){if(typeof A.then=="function")return U(Q(A),G,se,Me,Re);throw G=String(A),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ue}function V(A,G,se){if(A==null)return A;var Me=[],Re=0;return U(A,Me,"","",function(ee){return G.call(se,ee,Re++)}),Me}function J(A){if(A._status===-1){var G=A._result;G=G(),G.then(function(se){(A._status===0||A._status===-1)&&(A._status=1,A._result=se)},function(se){(A._status===0||A._status===-1)&&(A._status=2,A._result=se)}),A._status===-1&&(A._status=0,A._result=G)}if(A._status===1)return A._result.default;throw A._result}var pe=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},Te={map:V,forEach:function(A,G,se){V(A,function(){G.apply(this,arguments)},se)},count:function(A){var G=0;return V(A,function(){G++}),G},toArray:function(A){return V(A,function(G){return G})||[]},only:function(A){if(!k(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return dt.Activity=v,dt.Children=Te,dt.Component=y,dt.Fragment=n,dt.Profiler=l,dt.PureComponent=F,dt.StrictMode=a,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,dt.__COMPILER_RUNTIME={__proto__:null,c:function(A){return B.H.useMemoCache(A)}},dt.cache=function(A){return function(){return A.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(A,G,se){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Me=D({},A.props),Re=A.key;if(G!=null)for(ee in G.key!==void 0&&(Re=""+G.key),G)!T.call(G,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&G.ref===void 0||(Me[ee]=G[ee]);var ee=arguments.length-2;if(ee===1)Me.children=se;else if(1<ee){for(var ue=Array(ee),_e=0;_e<ee;_e++)ue[_e]=arguments[_e+2];Me.children=ue}return z(A.type,Re,Me)},dt.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},dt.createElement=function(A,G,se){var Me,Re={},ee=null;if(G!=null)for(Me in G.key!==void 0&&(ee=""+G.key),G)T.call(G,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Re[Me]=G[Me]);var ue=arguments.length-2;if(ue===1)Re.children=se;else if(1<ue){for(var _e=Array(ue),Le=0;Le<ue;Le++)_e[Le]=arguments[Le+2];Re.children=_e}if(A&&A.defaultProps)for(Me in ue=A.defaultProps,ue)Re[Me]===void 0&&(Re[Me]=ue[Me]);return z(A,ee,Re)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(A){return{$$typeof:h,render:A}},dt.isValidElement=k,dt.lazy=function(A){return{$$typeof:_,_payload:{_status:-1,_result:A},_init:J}},dt.memo=function(A,G){return{$$typeof:p,type:A,compare:G===void 0?null:G}},dt.startTransition=function(A){var G=B.T,se={};B.T=se;try{var Me=A(),Re=B.S;Re!==null&&Re(se,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(L,pe)}catch(ee){pe(ee)}finally{G!==null&&se.types!==null&&(G.types=se.types),B.T=G}},dt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},dt.use=function(A){return B.H.use(A)},dt.useActionState=function(A,G,se){return B.H.useActionState(A,G,se)},dt.useCallback=function(A,G){return B.H.useCallback(A,G)},dt.useContext=function(A){return B.H.useContext(A)},dt.useDebugValue=function(){},dt.useDeferredValue=function(A,G){return B.H.useDeferredValue(A,G)},dt.useEffect=function(A,G){return B.H.useEffect(A,G)},dt.useEffectEvent=function(A){return B.H.useEffectEvent(A)},dt.useId=function(){return B.H.useId()},dt.useImperativeHandle=function(A,G,se){return B.H.useImperativeHandle(A,G,se)},dt.useInsertionEffect=function(A,G){return B.H.useInsertionEffect(A,G)},dt.useLayoutEffect=function(A,G){return B.H.useLayoutEffect(A,G)},dt.useMemo=function(A,G){return B.H.useMemo(A,G)},dt.useOptimistic=function(A,G){return B.H.useOptimistic(A,G)},dt.useReducer=function(A,G,se){return B.H.useReducer(A,G,se)},dt.useRef=function(A){return B.H.useRef(A)},dt.useState=function(A){return B.H.useState(A)},dt.useSyncExternalStore=function(A,G,se){return B.H.useSyncExternalStore(A,G,se)},dt.useTransition=function(){return B.H.useTransition()},dt.version="19.2.8",dt}var T_;function hm(){return T_||(T_=1,fh.exports=NM()),fh.exports}var ke=hm();const pm=CM(ke);function rp(r,e){(e==null||e>r.length)&&(e=r.length);for(var n=0,a=Array(e);n<e;n++)a[n]=r[n];return a}function LM(r){if(Array.isArray(r))return r}function UM(r){if(Array.isArray(r))return rp(r)}function OM(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function PM(r,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,My(a.key),a)}}function IM(r,e,n){return e&&PM(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function wu(r,e){var n=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=mm(r))||e){n&&(r=n);var a=0,l=function(){};return{s:l,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,f=!0,h=!1;return{s:function(){n=n.call(r)},n:function(){var m=n.next();return f=m.done,m},e:function(m){h=!0,c=m},f:function(){try{f||n.return==null||n.return()}finally{if(h)throw c}}}}function st(r,e,n){return(e=My(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function zM(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function FM(r,e){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var a,l,c,f,h=[],m=!0,p=!1;try{if(c=(n=n.call(r)).next,e===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(a=c.call(n)).done)&&(h.push(a.value),h.length!==e);m=!0);}catch(_){p=!0,l=_}finally{try{if(!m&&n.return!=null&&(f=n.return(),Object(f)!==f))return}finally{if(p)throw l}}return h}}function BM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A_(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),n.push.apply(n,a)}return n}function Ce(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A_(Object(n),!0).forEach(function(a){st(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):A_(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function Qu(r,e){return LM(r)||FM(r,e)||mm(r,e)||BM()}function Xi(r){return UM(r)||zM(r)||mm(r)||HM()}function GM(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function My(r){var e=GM(r,"string");return typeof e=="symbol"?e:e+""}function Fu(r){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fu(r)}function mm(r,e){if(r){if(typeof r=="string")return rp(r,e);var n={}.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rp(r,e):void 0}}var R_=function(){},gm={},Ey={},Ty=null,Ay={mark:R_,measure:R_};try{typeof window<"u"&&(gm=window),typeof document<"u"&&(Ey=document),typeof MutationObserver<"u"&&(Ty=MutationObserver),typeof performance<"u"&&(Ay=performance)}catch{}var VM=gm.navigator||{},C_=VM.userAgent,w_=C_===void 0?"":C_,br=gm,tn=Ey,D_=Ty,Qc=Ay;br.document;var Ha=!!tn.documentElement&&!!tn.head&&typeof tn.addEventListener=="function"&&typeof tn.createElement=="function",Ry=~w_.indexOf("MSIE")||~w_.indexOf("Trident/"),$c,kM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,XM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Cy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},WM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},wy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",Ul="duotone",Dy="sharp",Ny="sharp-duotone",Ly="chisel",Uy="etch",Oy="graphite",Py="jelly",Iy="jelly-duo",zy="jelly-fill",Fy="mosaic",By="notdog",Hy="notdog-duo",Gy="pixel",Vy="slab",ky="slab-duo",Xy="slab-press",Wy="slab-press-duo",qy="thumbprint",jy="utility",Yy="utility-duo",Zy="utility-fill",Ky="vellum",Qy="whiteboard",qM="Classic",jM="Duotone",YM="Sharp",ZM="Sharp Duotone",KM="Chisel",QM="Etch",$M="Graphite",JM="Jelly",eE="Jelly Duo",tE="Jelly Fill",nE="Mosaic",iE="Notdog",aE="Notdog Duo",rE="Pixel",sE="Slab",oE="Slab Duo",lE="Slab Press",cE="Slab Press Duo",uE="Thumbprint",fE="Utility",dE="Utility Duo",hE="Utility Fill",pE="Vellum",mE="Whiteboard",$y=[In,Ul,Dy,Ny,Ly,Uy,Oy,Py,Iy,zy,Fy,By,Hy,Gy,Vy,ky,Xy,Wy,qy,jy,Yy,Zy,Ky,Qy];$c={},st(st(st(st(st(st(st(st(st(st($c,In,qM),Ul,jM),Dy,YM),Ny,ZM),Ly,KM),Uy,QM),Oy,$M),Py,JM),Iy,eE),zy,tE),st(st(st(st(st(st(st(st(st(st($c,Fy,nE),By,iE),Hy,aE),Gy,rE),Vy,sE),ky,oE),Xy,lE),Wy,cE),qy,uE),jy,fE),st(st(st(st($c,Yy,dE),Zy,hE),Ky,pE),Qy,mE);var gE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},vE={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},_E=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),xE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Jy=["fak","fa-kit","fakd","fa-kit-duotone"],N_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},yE=["kit"],SE="kit",bE="kit-duotone",ME="Kit",EE="Kit Duotone";st(st({},SE,ME),bE,EE);var TE={kit:{"fa-kit":"fak"}},AE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},RE={kit:{fak:"fa-kit"}},L_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Jc,eu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},CE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],wE="classic",DE="duotone",NE="sharp",LE="sharp-duotone",UE="chisel",OE="etch",PE="graphite",IE="jelly",zE="jelly-duo",FE="jelly-fill",BE="mosaic",HE="notdog",GE="notdog-duo",VE="pixel",kE="slab",XE="slab-duo",WE="slab-press",qE="slab-press-duo",jE="thumbprint",YE="utility",ZE="utility-duo",KE="utility-fill",QE="vellum",$E="whiteboard",JE="Classic",eT="Duotone",tT="Sharp",nT="Sharp Duotone",iT="Chisel",aT="Etch",rT="Graphite",sT="Jelly",oT="Jelly Duo",lT="Jelly Fill",cT="Mosaic",uT="Notdog",fT="Notdog Duo",dT="Pixel",hT="Slab",pT="Slab Duo",mT="Slab Press",gT="Slab Press Duo",vT="Thumbprint",_T="Utility",xT="Utility Duo",yT="Utility Fill",ST="Vellum",bT="Whiteboard";Jc={},st(st(st(st(st(st(st(st(st(st(Jc,wE,JE),DE,eT),NE,tT),LE,nT),UE,iT),OE,aT),PE,rT),IE,sT),zE,oT),FE,lT),st(st(st(st(st(st(st(st(st(st(Jc,BE,cT),HE,uT),GE,fT),VE,dT),kE,hT),XE,pT),WE,mT),qE,gT),jE,vT),YE,_T),st(st(st(st(Jc,ZE,xT),KE,yT),QE,ST),$E,bT);var MT="kit",ET="kit-duotone",TT="Kit",AT="Kit Duotone";st(st({},MT,TT),ET,AT);var RT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},CT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},sp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},wT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],eS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(CE,wT),DT=["solid","regular","light","thin","duotone","brands","semibold"],tS=[1,2,3,4,5,6,7,8,9,10],NT=tS.concat([11,12,13,14,15,16,17,18,19,20]),LT=["aw","fw","pull-left","pull-right"],UT=[].concat(Xi(Object.keys(CT)),DT,LT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",eu.GROUP,eu.SWAP_OPACITY,eu.PRIMARY,eu.SECONDARY]).concat(tS.map(function(r){return"".concat(r,"x")})).concat(NT.map(function(r){return"w-".concat(r)})),OT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Pa="___FONT_AWESOME___",op=16,nS="fa",iS="svg-inline--fa",ss="data-fa-i2svg",lp="data-fa-pseudo-element",PT="data-fa-pseudo-element-pending",vm="data-prefix",_m="data-icon",U_="fontawesome-i2svg",IT="async",zT=["HTML","HEAD","STYLE","SCRIPT"],aS=["::before","::after",":before",":after"],rS=(function(){try{return!0}catch{return!1}})();function Ol(r){return new Proxy(r,{get:function(n,a){return a in n?n[a]:n[In]}})}var sS=Ce({},Cy);sS[In]=Ce(Ce(Ce(Ce({},{"fa-duotone":"duotone"}),Cy[In]),N_.kit),N_["kit-duotone"]);var FT=Ol(sS),cp=Ce({},xE);cp[In]=Ce(Ce(Ce(Ce({},{duotone:"fad"}),cp[In]),L_.kit),L_["kit-duotone"]);var O_=Ol(cp),up=Ce({},sp);up[In]=Ce(Ce({},up[In]),RE.kit);var xm=Ol(up),fp=Ce({},RT);fp[In]=Ce(Ce({},fp[In]),TE.kit);Ol(fp);var BT=kM,oS="fa-layers-text",HT=XM,GT=Ce({},gE);Ol(GT);var VT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dh=WM,kT=[].concat(Xi(yE),Xi(UT)),Rl=br.FontAwesomeConfig||{};function XT(r){var e=tn.querySelector("script["+r+"]");if(e)return e.getAttribute(r)}function WT(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(tn&&typeof tn.querySelector=="function"){var qT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qT.forEach(function(r){var e=Qu(r,2),n=e[0],a=e[1],l=WT(XT(n));l!=null&&(Rl[a]=l)})}var lS={styleDefault:"solid",familyDefault:In,cssPrefix:nS,replacementClass:iS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rl.familyPrefix&&(Rl.cssPrefix=Rl.familyPrefix);var mo=Ce(Ce({},lS),Rl);mo.autoReplaceSvg||(mo.observeMutations=!1);var rt={};Object.keys(lS).forEach(function(r){Object.defineProperty(rt,r,{enumerable:!0,set:function(n){mo[r]=n,Cl.forEach(function(a){return a(rt)})},get:function(){return mo[r]}})});Object.defineProperty(rt,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,Cl.forEach(function(n){return n(rt)})},get:function(){return mo.cssPrefix}});br.FontAwesomeConfig=rt;var Cl=[];function jT(r){return Cl.push(r),function(){Cl.splice(Cl.indexOf(r),1)}}var Ws=op,ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function YT(r){if(!(!r||!Ha)){var e=tn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=r;for(var n=tn.head.childNodes,a=null,l=n.length-1;l>-1;l--){var c=n[l],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=c)}return tn.head.insertBefore(e,a),r}}var ZT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function P_(){for(var r=12,e="";r-- >0;)e+=ZT[Math.random()*62|0];return e}function yo(r){for(var e=[],n=(r||[]).length>>>0;n--;)e[n]=r[n];return e}function ym(r){return r.classList?yo(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cS(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function KT(r){return Object.keys(r||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(cS(r[n]),'" ')},"").trim()}function $u(r){return Object.keys(r||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(r[n].trim(),";")},"")}function Sm(r){return r.size!==ta.size||r.x!==ta.x||r.y!==ta.y||r.rotate!==ta.rotate||r.flipX||r.flipY}function QT(r){var e=r.transform,n=r.containerWidth,a=r.iconWidth,l={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(h)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:l,inner:m,path:p}}function $T(r){var e=r.transform,n=r.width,a=n===void 0?op:n,l=r.height,c=l===void 0?op:l,f="";return Ry?f+="translate(".concat(e.x/Ws-a/2,"em, ").concat(e.y/Ws-c/2,"em) "):f+="translate(calc(-50% + ".concat(e.x/Ws,"em), calc(-50% + ").concat(e.y/Ws,"em)) "),f+="scale(".concat(e.size/Ws*(e.flipX?-1:1),", ").concat(e.size/Ws*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var JT=`:root, :host {
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
}`;function uS(){var r=nS,e=iS,n=rt.cssPrefix,a=rt.replacementClass,l=JT;if(n!==r||a!==e){var c=new RegExp("\\.".concat(r,"\\-"),"g"),f=new RegExp("\\--".concat(r,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");l=l.replace(c,".".concat(n,"-")).replace(f,"--".concat(n,"-")).replace(h,".".concat(a))}return l}var I_=!1;function hh(){rt.autoAddCss&&!I_&&(YT(uS()),I_=!0)}var eA={mixout:function(){return{dom:{css:uS,insertCss:hh}}},hooks:function(){return{beforeDOMElementCreation:function(){hh()},beforeI2svg:function(){hh()}}}},Ia=br||{};Ia[Pa]||(Ia[Pa]={});Ia[Pa].styles||(Ia[Pa].styles={});Ia[Pa].hooks||(Ia[Pa].hooks={});Ia[Pa].shims||(Ia[Pa].shims=[]);var Gi=Ia[Pa],fS=[],dS=function(){tn.removeEventListener("DOMContentLoaded",dS),Bu=1,fS.map(function(e){return e()})},Bu=!1;Ha&&(Bu=(tn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tn.readyState),Bu||tn.addEventListener("DOMContentLoaded",dS));function tA(r){Ha&&(Bu?setTimeout(r,0):fS.push(r))}function Pl(r){var e=r.tag,n=r.attributes,a=n===void 0?{}:n,l=r.children,c=l===void 0?[]:l;return typeof r=="string"?cS(r):"<".concat(e," ").concat(KT(a),">").concat(c.map(Pl).join(""),"</").concat(e,">")}function z_(r,e,n){if(r&&r[e]&&r[e][n])return{prefix:e,iconName:n,icon:r[e][n]}}var ph=function(e,n,a,l){var c=Object.keys(e),f=c.length,h=n,m,p,_;for(a===void 0?(m=1,_=e[c[0]]):(m=0,_=a);m<f;m++)p=c[m],_=h(_,e[p],p,e);return _};function hS(r){return Xi(r).length!==1?null:r.codePointAt(0).toString(16)}function F_(r){return Object.keys(r).reduce(function(e,n){var a=r[n],l=!!a.icon;return l?e[a.iconName]=a.icon:e[n]=a,e},{})}function dp(r,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,l=a===void 0?!1:a,c=F_(e);typeof Gi.hooks.addPack=="function"&&!l?Gi.hooks.addPack(r,F_(e)):Gi.styles[r]=Ce(Ce({},Gi.styles[r]||{}),c),r==="fas"&&dp("fa",e)}var Dl=Gi.styles,nA=Gi.shims,pS=Object.keys(xm),iA=pS.reduce(function(r,e){return r[e]=Object.keys(xm[e]),r},{}),bm=null,mS={},gS={},vS={},_S={},xS={};function aA(r){return~kT.indexOf(r)}function rA(r,e){var n=e.split("-"),a=n[0],l=n.slice(1).join("-");return a===r&&l!==""&&!aA(l)?l:null}var yS=function(){var e=function(c){return ph(Dl,function(f,h,m){return f[m]=ph(h,c,{}),f},{})};mS=e(function(l,c,f){if(c[3]&&(l[c[3]]=f),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=f})}return l}),gS=e(function(l,c,f){if(l[f]=f,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=f})}return l}),xS=e(function(l,c,f){var h=c[2];return l[f]=f,h.forEach(function(m){l[m]=f}),l});var n="far"in Dl||rt.autoFetchSvg,a=ph(nA,function(l,c){var f=c[0],h=c[1],m=c[2];return h==="far"&&!n&&(h="fas"),typeof f=="string"&&(l.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(l.unicodes[f.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});vS=a.names,_S=a.unicodes,bm=Ju(rt.styleDefault,{family:rt.familyDefault})};jT(function(r){bm=Ju(r.styleDefault,{family:rt.familyDefault})});yS();function Mm(r,e){return(mS[r]||{})[e]}function sA(r,e){return(gS[r]||{})[e]}function is(r,e){return(xS[r]||{})[e]}function SS(r){return vS[r]||{prefix:null,iconName:null}}function oA(r){var e=_S[r],n=Mm("fas",r);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mr(){return bm}var bS=function(){return{prefix:null,iconName:null,rest:[]}};function lA(r){var e=In,n=pS.reduce(function(a,l){return a[l]="".concat(rt.cssPrefix,"-").concat(l),a},{});return $y.forEach(function(a){(r.includes(n[a])||r.some(function(l){return iA[a].includes(l)}))&&(e=a)}),e}function Ju(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?In:n,l=FT[a][r];if(a===Ul&&!r)return"fad";var c=O_[a][r]||O_[a][l],f=r in Gi.styles?r:null,h=c||f||null;return h}function cA(r){var e=[],n=null;return r.forEach(function(a){var l=rA(rt.cssPrefix,a);l?n=l:a&&e.push(a)}),{iconName:n,rest:e}}function B_(r){return r.sort().filter(function(e,n,a){return a.indexOf(e)===n})}var H_=eS.concat(Jy);function ef(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,a=n===void 0?!1:n,l=null,c=B_(r.filter(function(S){return H_.includes(S)})),f=B_(r.filter(function(S){return!H_.includes(S)})),h=c.filter(function(S){return l=S,!wy.includes(S)}),m=Qu(h,1),p=m[0],_=p===void 0?null:p,v=lA(c),g=Ce(Ce({},cA(f)),{},{prefix:Ju(_,{family:v})});return Ce(Ce(Ce({},g),hA({values:r,family:v,styles:Dl,config:rt,canonical:g,givenPrefix:l})),uA(a,l,g))}function uA(r,e,n){var a=n.prefix,l=n.iconName;if(r||!a||!l)return{prefix:a,iconName:l};var c=e==="fa"?SS(l):{},f=is(a,l);return l=c.iconName||f||l,a=c.prefix||a,a==="far"&&!Dl.far&&Dl.fas&&!rt.autoFetchSvg&&(a="fas"),{prefix:a,iconName:l}}var fA=$y.filter(function(r){return r!==In||r!==Ul}),dA=Object.keys(sp).filter(function(r){return r!==In}).map(function(r){return Object.keys(sp[r])}).flat();function hA(r){var e=r.values,n=r.family,a=r.canonical,l=r.givenPrefix,c=l===void 0?"":l,f=r.styles,h=f===void 0?{}:f,m=r.config,p=m===void 0?{}:m,_=n===Ul,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=a.prefix==="fad"||a.prefix==="fa-duotone";if(!_&&(v||g||S)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&fA.includes(n)){var E=Object.keys(h).find(function(b){return dA.includes(b)});if(E||p.autoFetchSvg){var D=_E.get(n).defaultShortPrefixId;a.prefix=D,a.iconName=is(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||c==="fa")&&(a.prefix=Mr()||"fas"),a}var pA=(function(){function r(){OM(this,r),this.definitions={}}return IM(r,[{key:"add",value:function(){for(var n=this,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){n.definitions[h]=Ce(Ce({},n.definitions[h]||{}),f[h]),dp(h,f[h]);var m=xm[In][h];m&&dp(m,f[h]),yS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var l=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(l).map(function(c){var f=l[c],h=f.prefix,m=f.iconName,p=f.icon,_=p[2];n[h]||(n[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(n[h][v]=p)}),n[h][m]=p}),n}}])})(),G_=[],oo={},uo={},mA=Object.keys(uo);function gA(r,e){var n=e.mixoutsTo;return G_=r,oo={},Object.keys(uo).forEach(function(a){mA.indexOf(a)===-1&&delete uo[a]}),G_.forEach(function(a){var l=a.mixout?a.mixout():{};if(Object.keys(l).forEach(function(f){typeof l[f]=="function"&&(n[f]=l[f]),Fu(l[f])==="object"&&Object.keys(l[f]).forEach(function(h){n[f]||(n[f]={}),n[f][h]=l[f][h]})}),a.hooks){var c=a.hooks();Object.keys(c).forEach(function(f){oo[f]||(oo[f]=[]),oo[f].push(c[f])})}a.provides&&a.provides(uo)}),n}function hp(r,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),l=2;l<n;l++)a[l-2]=arguments[l];var c=oo[r]||[];return c.forEach(function(f){e=f.apply(null,[e].concat(a))}),e}function os(r){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var l=oo[r]||[];l.forEach(function(c){c.apply(null,n)})}function Er(){var r=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[r]?uo[r].apply(null,e):void 0}function pp(r){r.prefix==="fa"&&(r.prefix="fas");var e=r.iconName,n=r.prefix||Mr();if(e)return e=is(n,e)||e,z_(MS.definitions,n,e)||z_(Gi.styles,n,e)}var MS=new pA,vA=function(){rt.autoReplaceSvg=!1,rt.observeMutations=!1,os("noAuto")},_A={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ha?(os("beforeI2svg",e),Er("pseudoElements2svg",e),Er("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;rt.autoReplaceSvg===!1&&(rt.autoReplaceSvg=!0),rt.observeMutations=!0,tA(function(){yA({autoReplaceSvgRoot:n}),os("watch",e)})}},xA={icon:function(e){if(e===null)return null;if(Fu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:is(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Ju(e[0]);return{prefix:a,iconName:is(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(rt.cssPrefix,"-"))>-1||e.match(BT))){var l=ef(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||Mr(),iconName:is(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var c=Mr();return{prefix:c,iconName:is(c,e)||e}}}},vi={noAuto:vA,config:rt,dom:_A,parse:xA,library:MS,findIconDefinition:pp,toHtml:Pl},yA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?tn:n;(Object.keys(Gi.styles).length>0||rt.autoFetchSvg)&&Ha&&rt.autoReplaceSvg&&vi.dom.i2svg({node:a})};function tf(r,e){return Object.defineProperty(r,"abstract",{get:e}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(a){return Pl(a)})}}),Object.defineProperty(r,"node",{get:function(){if(Ha){var a=tn.createElement("div");return a.innerHTML=r.html,a.children}}}),r}function SA(r){var e=r.children,n=r.main,a=r.mask,l=r.attributes,c=r.styles,f=r.transform;if(Sm(f)&&n.found&&!a.found){var h=n.width,m=n.height,p={x:h/m/2,y:.5};l.style=$u(Ce(Ce({},c),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function bA(r){var e=r.prefix,n=r.iconName,a=r.children,l=r.attributes,c=r.symbol,f=c===!0?"".concat(e,"-").concat(rt.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ce(Ce({},l),{},{id:f}),children:a}]}]}function MA(r){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in r})}function Em(r){var e=r.icons,n=e.main,a=e.mask,l=r.prefix,c=r.iconName,f=r.transform,h=r.symbol,m=r.maskId,p=r.extra,_=r.watchable,v=_===void 0?!1:_,g=a.found?a:n,S=g.width,E=g.height,D=[rt.replacementClass,c?"".concat(rt.cssPrefix,"-").concat(c):""].filter(function(O){return p.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(p.classes).join(" "),b={children:[],attributes:Ce(Ce({},p.attributes),{},{"data-prefix":l,"data-icon":c,class:D,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(E)})};!MA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ss]="");var y=Ce(Ce({},b),{},{prefix:l,iconName:c,main:n,mask:a,maskId:m,transform:f,symbol:h,styles:Ce({},p.styles)}),I=a.found&&n.found?Er("generateAbstractMask",y)||{children:[],attributes:{}}:Er("generateAbstractIcon",y)||{children:[],attributes:{}},F=I.children,N=I.attributes;return y.children=F,y.attributes=N,h?bA(y):SA(y)}function V_(r){var e=r.content,n=r.width,a=r.height,l=r.transform,c=r.extra,f=r.watchable,h=f===void 0?!1:f,m=Ce(Ce({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ss]="");var p=Ce({},c.styles);Sm(l)&&(p.transform=$T({transform:l,width:n,height:a}),p["-webkit-transform"]=p.transform);var _=$u(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function EA(r){var e=r.content,n=r.extra,a=Ce(Ce({},n.attributes),{},{class:n.classes.join(" ")}),l=$u(n.styles);l.length>0&&(a.style=l);var c=[];return c.push({tag:"span",attributes:a,children:[e]}),c}var mh=Gi.styles;function mp(r){var e=r[0],n=r[1],a=r.slice(4),l=Qu(a,1),c=l[0],f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat(rt.cssPrefix,"-").concat(dh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(dh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(rt.cssPrefix,"-").concat(dh.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:n,icon:f}}var TA={found:!1,width:512,height:512};function AA(r,e){!rS&&!rt.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(e,'" is missing.'))}function gp(r,e){var n=e;return e==="fa"&&rt.styleDefault!==null&&(e=Mr()),new Promise(function(a,l){if(n==="fa"){var c=SS(r)||{};r=c.iconName||r,e=c.prefix||e}if(r&&e&&mh[e]&&mh[e][r]){var f=mh[e][r];return a(mp(f))}AA(r,e),a(Ce(Ce({},TA),{},{icon:rt.showMissingIcons&&r?Er("missingIconAbstract")||{}:{}}))})}var k_=function(){},vp=rt.measurePerformance&&Qc&&Qc.mark&&Qc.measure?Qc:{mark:k_,measure:k_},El='FA "7.3.1"',RA=function(e){return vp.mark("".concat(El," ").concat(e," begins")),function(){return ES(e)}},ES=function(e){vp.mark("".concat(El," ").concat(e," ends")),vp.measure("".concat(El," ").concat(e),"".concat(El," ").concat(e," begins"),"".concat(El," ").concat(e," ends"))},Tm={begin:RA,end:ES},Du=function(){};function X_(r){var e=r.getAttribute?r.getAttribute(ss):null;return typeof e=="string"}function CA(r){var e=r.getAttribute?r.getAttribute(vm):null,n=r.getAttribute?r.getAttribute(_m):null;return e&&n}function wA(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(rt.replacementClass)}function DA(){if(rt.autoReplaceSvg===!0)return Nu.replace;var r=Nu[rt.autoReplaceSvg];return r||Nu.replace}function NA(r){return tn.createElementNS("http://www.w3.org/2000/svg",r)}function LA(r){return tn.createElement(r)}function TS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?r.tag==="svg"?NA:LA:n;if(typeof r=="string")return tn.createTextNode(r);var l=a(r.tag);Object.keys(r.attributes||[]).forEach(function(f){l.setAttribute(f,r.attributes[f])});var c=r.children||[];return c.forEach(function(f){l.appendChild(TS(f,{ceFn:a}))}),l}function UA(r){var e=" ".concat(r.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(l){n.parentNode.insertBefore(TS(l),n)}),n.getAttribute(ss)===null&&rt.keepOriginalSource){var a=tn.createComment(UA(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ym(n).indexOf(rt.replacementClass))return Nu.replace(e);var l=new RegExp("".concat(rt.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var c=a[0].attributes.class.split(" ").reduce(function(h,m){return m===rt.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});a[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var f=a.map(function(h){return Pl(h)}).join(`
`);n.setAttribute(ss,""),n.innerHTML=f}};function W_(r){r()}function AS(r,e){var n=typeof e=="function"?e:Du;if(r.length===0)n();else{var a=W_;rt.mutateApproach===IT&&(a=br.requestAnimationFrame||W_),a(function(){var l=DA(),c=Tm.begin("mutate");r.map(l),c(),n()})}}var Am=!1;function RS(){Am=!0}function _p(){Am=!1}var Hu=null;function q_(r){if(D_&&rt.observeMutations){var e=r.treeCallback,n=e===void 0?Du:e,a=r.nodeCallback,l=a===void 0?Du:a,c=r.pseudoElementsCallback,f=c===void 0?Du:c,h=r.observeMutationsRoot,m=h===void 0?tn:h;Hu=new D_(function(p){if(!Am){var _=Mr();yo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!X_(v.addedNodes[0])&&(rt.searchPseudoElements&&f(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&rt.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&X_(v.target)&&~VT.indexOf(v.attributeName))if(v.attributeName==="class"&&CA(v.target)){var g=ef(ym(v.target)),S=g.prefix,E=g.iconName;v.target.setAttribute(vm,S||_),E&&v.target.setAttribute(_m,E)}else wA(v.target)&&l(v.target)})}}),Ha&&Hu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function OA(){Hu&&Hu.disconnect()}function PA(r){var e=r.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,l){var c=l.split(":"),f=c[0],h=c.slice(1);return f&&h.length>0&&(a[f]=h.join(":").trim()),a},{})),n}function IA(r){var e=r.getAttribute("data-prefix"),n=r.getAttribute("data-icon"),a=r.innerText!==void 0?r.innerText.trim():"",l=ef(ym(r));return l.prefix||(l.prefix=Mr()),e&&n&&(l.prefix=e,l.iconName=n),l.iconName&&l.prefix||(l.prefix&&a.length>0&&(l.iconName=sA(l.prefix,r.innerText)||Mm(l.prefix,hS(r.innerText))),!l.iconName&&rt.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=r.firstChild.data)),l}function zA(r){var e=yo(r.attributes).reduce(function(n,a){return n.name!=="class"&&n.name!=="style"&&(n[a.name]=a.value),n},{});return e}function FA(){return{iconName:null,prefix:null,transform:ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=IA(r),a=n.iconName,l=n.prefix,c=n.rest,f=zA(r),h=hp("parseNodeAttributes",{},r),m=e.styleParser?PA(r):[];return Ce({iconName:a,prefix:l,transform:ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:f}},h)}var BA=Gi.styles;function CS(r){var e=rt.autoReplaceSvg==="nest"?j_(r,{styleParser:!1}):j_(r);return~e.extra.classes.indexOf(oS)?Er("generateLayersText",r,e):Er("generateSvgReplacementMutation",r,e)}function HA(){return[].concat(Xi(Jy),Xi(eS))}function Y_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ha)return Promise.resolve();var n=tn.documentElement.classList,a=function(v){return n.add("".concat(U_,"-").concat(v))},l=function(v){return n.remove("".concat(U_,"-").concat(v))},c=rt.autoFetchSvg?HA():wy.concat(Object.keys(BA));c.includes("fa")||c.push("fa");var f=[".".concat(oS,":not([").concat(ss,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ss,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=yo(r.querySelectorAll(f))}catch{}if(h.length>0)a("pending"),l("complete");else return Promise.resolve();var m=Tm.begin("onTree"),p=h.reduce(function(_,v){try{var g=CS(v);g&&_.push(g)}catch(S){rS||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){AS(g,function(){a("active"),a("complete"),l("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function GA(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;CS(r).then(function(n){n&&AS([n],e)})}function VA(r){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:pp(e||{}),l=n.mask;return l&&(l=(l||{}).icon?l:pp(l||{})),r(a,Ce(Ce({},n),{},{mask:l}))}}var kA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,l=a===void 0?ta:a,c=n.symbol,f=c===void 0?!1:c,h=n.mask,m=h===void 0?null:h,p=n.maskId,_=p===void 0?null:p,v=n.classes,g=v===void 0?[]:v,S=n.attributes,E=S===void 0?{}:S,D=n.styles,b=D===void 0?{}:D;if(e){var y=e.prefix,I=e.iconName,F=e.icon;return tf(Ce({type:"icon"},e),function(){return os("beforeDOMElementCreation",{iconDefinition:e,params:n}),Em({icons:{main:mp(F),mask:m?mp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:I,transform:Ce(Ce({},ta),l),symbol:f,maskId:_,extra:{attributes:E,styles:b,classes:g}})})}},XA={mixout:function(){return{icon:VA(kA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Y_,n.nodeCallback=GA,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,l=a===void 0?tn:a,c=n.callback,f=c===void 0?function(){}:c;return Y_(l,f)},e.generateSvgReplacementMutation=function(n,a){var l=a.iconName,c=a.prefix,f=a.transform,h=a.symbol,m=a.mask,p=a.maskId,_=a.extra;return new Promise(function(v,g){Promise.all([gp(l,c),m.iconName?gp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=Qu(S,2),D=E[0],b=E[1];v([n,Em({icons:{main:D,mask:b},prefix:c,iconName:l,transform:f,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var a=n.children,l=n.attributes,c=n.main,f=n.transform,h=n.styles,m=$u(h);m.length>0&&(l.style=m);var p;return Sm(f)&&(p=Er("generateAbstractTransformGrouping",{main:c,transform:f,containerWidth:c.width,iconWidth:c.width})),a.push(p||c.icon),{children:a,attributes:l}}}},WA={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.classes,c=l===void 0?[]:l;return tf({type:"layer"},function(){os("beforeDOMElementCreation",{assembler:n,params:a});var f=[];return n(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(rt.cssPrefix,"-layers")].concat(Xi(c)).join(" ")},children:f}]})}}}},qA={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var l=a.classes,c=l===void 0?[]:l,f=a.attributes,h=f===void 0?{}:f,m=a.styles,p=m===void 0?{}:m;return tf({type:"counter",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:a}),EA({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(rt.cssPrefix,"-layers-counter")].concat(Xi(c))}})})}}}},jA={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,c=l===void 0?ta:l,f=a.classes,h=f===void 0?[]:f,m=a.attributes,p=m===void 0?{}:m,_=a.styles,v=_===void 0?{}:_;return tf({type:"text",content:n},function(){return os("beforeDOMElementCreation",{content:n,params:a}),V_({content:n,transform:Ce(Ce({},ta),c),extra:{attributes:p,styles:v,classes:["".concat(rt.cssPrefix,"-layers-text")].concat(Xi(h))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var l=a.transform,c=a.extra,f=null,h=null;if(Ry){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([n,V_({content:n.innerHTML,width:f,height:h,transform:l,extra:c,watchable:!0})])}}},wS=new RegExp('"',"ug"),Z_=[1105920,1112319],K_=Ce(Ce(Ce(Ce({},{FontAwesome:{normal:"fas",400:"fas"}}),vE),OT),AE),xp=Object.keys(K_).reduce(function(r,e){return r[e.toLowerCase()]=K_[e],r},{}),YA=Object.keys(xp).reduce(function(r,e){var n=xp[e];return r[e]=n[900]||Xi(Object.entries(n))[0][1],r},{});function ZA(r){var e=r.replace(wS,"");return hS(Xi(e)[0]||"")}function KA(r){var e=r.getPropertyValue("font-feature-settings").includes("ss01"),n=r.getPropertyValue("content"),a=n.replace(wS,""),l=a.codePointAt(0),c=l>=Z_[0]&&l<=Z_[1],f=a.length===2?a[0]===a[1]:!1;return c||f||e}function QA(r,e){var n=r.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),l=isNaN(a)?"normal":a;return(xp[n]||{})[l]||YA[n]}function Q_(r,e){var n="".concat(PT).concat(e.replace(":","-"));return new Promise(function(a,l){if(r.getAttribute(n)!==null)return a();var c=yo(r.children),f=c.filter(function(L){return L.getAttribute(lp)===e})[0],h=br.getComputedStyle(r,e),m=h.getPropertyValue("font-family"),p=m.match(HT),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return r.removeChild(f),a();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=QA(m,_),E=ZA(g),D=p[0].startsWith("FontAwesome"),b=KA(h),y=Mm(S,E),I=y;if(D){var F=oA(E);F.iconName&&F.prefix&&(y=F.iconName,S=F.prefix)}if(y&&!b&&(!f||f.getAttribute(vm)!==S||f.getAttribute(_m)!==I)){r.setAttribute(n,I),f&&r.removeChild(f);var N=FA(),O=N.extra;O.attributes[lp]=e,gp(y,S).then(function(L){var B=Em(Ce(Ce({},N),{},{icons:{main:L,mask:bS()},prefix:S,iconName:I,extra:O,watchable:!0})),T=tn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?r.insertBefore(T,r.firstChild):r.appendChild(T),T.outerHTML=B.map(function(z){return Pl(z)}).join(`
`),r.removeAttribute(n),a()}).catch(l)}else a()}else a()})}function $A(r){return Promise.all([Q_(r,"::before"),Q_(r,"::after")])}function JA(r){return r.parentNode!==document.head&&!~zT.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(lp)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var e2=function(e){return!!e&&aS.some(function(n){return e.includes(n)})},t2=function(e){if(!e)return[];var n=new Set,a=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=wu(a),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;if(e2(f)){var h=aS.reduce(function(m,p){return m.replace(p,"")},f);h!==""&&h!=="*"&&n.add(h)}}}catch(m){l.e(m)}finally{l.f()}return n};function $_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ha){var n;if(e)n=r;else if(rt.searchPseudoElementsFullScan)n=r.querySelectorAll("*");else{var a=new Set,l=wu(document.styleSheets),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;try{var h=wu(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=t2(p.selectorText),v=wu(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;a.add(S)}}catch(D){v.e(D)}finally{v.f()}}}catch(D){h.e(D)}finally{h.f()}}catch(D){rt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(D.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(D){l.e(D)}finally{l.f()}if(!a.size)return;var E=Array.from(a).join(", ");try{n=r.querySelectorAll(E)}catch{}}return new Promise(function(D,b){var y=yo(n).filter(JA).map($A),I=Tm.begin("searchPseudoElements");RS(),Promise.all(y).then(function(){I(),_p(),D()}).catch(function(){I(),_p(),b()})})}}var n2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,l=a===void 0?tn:a;rt.searchPseudoElements&&$_(l)}}},J_=!1,i2={mixout:function(){return{dom:{unwatch:function(){RS(),J_=!0}}}},hooks:function(){return{bootstrap:function(){q_(hp("mutationObserverCallbacks",{}))},noAuto:function(){OA()},watch:function(n){var a=n.observeMutationsRoot;J_?_p():q_(hp("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ex=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,l){var c=l.toLowerCase().split("-"),f=c[0],h=c.slice(1).join("-");if(f&&h==="h")return a.flipX=!0,a;if(f&&h==="v")return a.flipY=!0,a;if(h=parseFloat(h),isNaN(h))return a;switch(f){case"grow":a.size=a.size+h;break;case"shrink":a.size=a.size-h;break;case"left":a.x=a.x-h;break;case"right":a.x=a.x+h;break;case"up":a.y=a.y-h;break;case"down":a.y=a.y+h;break;case"rotate":a.rotate=a.rotate+h;break}return a},n)},a2={mixout:function(){return{parse:{transform:function(n){return ex(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var l=a.getAttribute("data-fa-transform");return l&&(n.transform=ex(l)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,l=n.transform,c=n.containerWidth,f=n.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),_="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(f/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:Ce({},S.outer),children:[{tag:"g",attributes:Ce({},S.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:Ce(Ce({},a.icon.attributes),S.path)}]}]}}}},gh={x:0,y:0,width:"100%",height:"100%"};function tx(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||e)&&(r.attributes.fill="black"),r}function r2(r){return r.tag==="g"?r.children:[r]}var s2={hooks:function(){return{parseNodeAttributes:function(n,a){var l=a.getAttribute("data-fa-mask"),c=l?ef(l.split(" ").map(function(f){return f.trim()})):bS();return c.prefix||(c.prefix=Mr()),n.mask=c,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,l=n.attributes,c=n.main,f=n.mask,h=n.maskId,m=n.transform,p=c.width,_=c.icon,v=f.width,g=f.icon,S=QT({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:Ce(Ce({},gh),{},{fill:"white"})},D=_.children?{children:_.children.map(tx)}:{},b={tag:"g",attributes:Ce({},S.inner),children:[tx(Ce({tag:_.tag,attributes:Ce(Ce({},_.attributes),S.path)},D))]},y={tag:"g",attributes:Ce({},S.outer),children:[b]},I="mask-".concat(h||P_()),F="clip-".concat(h||P_()),N={tag:"mask",attributes:Ce(Ce({},gh),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:r2(g)},N]};return a.push(O,{tag:"rect",attributes:Ce({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(I,")")},gh)}),{children:a,attributes:l}}}},o2={provides:function(e){var n=!1;br.matchMedia&&(n=br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],l={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:Ce(Ce({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=Ce(Ce({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Ce(Ce({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:Ce(Ce({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ce(Ce({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(h),a.push({tag:"path",attributes:Ce(Ce({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Ce(Ce({},f),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:Ce(Ce({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ce(Ce({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},l2={hooks:function(){return{parseNodeAttributes:function(n,a){var l=a.getAttribute("data-fa-symbol"),c=l===null?!1:l===""?!0:l;return n.symbol=c,n}}}},c2=[eA,XA,WA,qA,jA,n2,i2,a2,s2,o2,l2];gA(c2,{mixoutsTo:vi});vi.noAuto;var ls=vi.config;vi.library;vi.dom;var DS=vi.parse;vi.findIconDefinition;vi.toHtml;var u2=vi.icon;vi.layer;vi.text;vi.counter;var vh={exports:{}},ml={},_h={exports:{}},xh={};var nx;function f2(){return nx||(nx=1,(function(r){function e(U,V){var J=U.length;U.push(V);e:for(;0<J;){var pe=J-1>>>1,Te=U[pe];if(0<l(Te,V))U[pe]=V,U[J]=Te,J=pe;else break e}}function n(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var V=U[0],J=U.pop();if(J!==V){U[0]=J;e:for(var pe=0,Te=U.length,A=Te>>>1;pe<A;){var G=2*(pe+1)-1,se=U[G],Me=G+1,Re=U[Me];if(0>l(se,J))Me<Te&&0>l(Re,se)?(U[pe]=Re,U[Me]=J,pe=Me):(U[pe]=se,U[G]=J,pe=G);else if(Me<Te&&0>l(Re,J))U[pe]=Re,U[Me]=J,pe=Me;else break e}}return V}function l(U,V){var J=U.sortIndex-V.sortIndex;return J!==0?J:U.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,D=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var V=n(p);V!==null;){if(V.callback===null)a(p);else if(V.startTime<=U)a(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=n(p)}}function O(U){if(D=!1,N(U),!E)if(n(m)!==null)E=!0,L||(L=!0,Z());else{var V=n(p);V!==null&&Q(O,V.startTime-U)}}var L=!1,B=-1,T=5,z=-1;function q(){return b?!0:!(r.unstable_now()-z<T)}function k(){if(b=!1,L){var U=r.unstable_now();z=U;var V=!0;try{e:{E=!1,D&&(D=!1,I(B),B=-1),S=!0;var J=g;try{t:{for(N(U),v=n(m);v!==null&&!(v.expirationTime>U&&q());){var pe=v.callback;if(typeof pe=="function"){v.callback=null,g=v.priorityLevel;var Te=pe(v.expirationTime<=U);if(U=r.unstable_now(),typeof Te=="function"){v.callback=Te,N(U),V=!0;break t}v===n(m)&&a(m),N(U)}else a(m);v=n(m)}if(v!==null)V=!0;else{var A=n(p);A!==null&&Q(O,A.startTime-U),V=!1}}break e}finally{v=null,g=J,S=!1}V=void 0}}finally{V?Z():L=!1}}}var Z;if(typeof F=="function")Z=function(){F(k)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=k,Z=function(){he.postMessage(null)}}else Z=function(){y(k,0)};function Q(U,V){B=y(function(){U(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var J=g;g=V;try{return U()}finally{g=J}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=g;g=U;try{return V()}finally{g=J}},r.unstable_scheduleCallback=function(U,V,J){var pe=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,U){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,U={id:_++,callback:V,priorityLevel:U,startTime:J,expirationTime:Te,sortIndex:-1},J>pe?(U.sortIndex=J,e(p,U),n(m)===null&&U===n(p)&&(D?(I(B),B=-1):D=!0,Q(O,J-pe))):(U.sortIndex=Te,e(m,U),E||S||(E=!0,L||(L=!0,Z()))),U},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(U){var V=g;return function(){var J=g;g=V;try{return U.apply(this,arguments)}finally{g=J}}}})(xh)),xh}var ix;function d2(){return ix||(ix=1,_h.exports=f2()),_h.exports}var yh={exports:{}},Bn={};var ax;function h2(){if(ax)return Bn;ax=1;var r=hm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=_,a.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Bn.requestFormReset=function(m){a.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var rx;function p2(){if(rx)return yh.exports;rx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yh.exports=h2(),yh.exports}var sx;function m2(){if(sx)return ml;sx=1;var r=d2(),e=hm(),n=p2();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===o)return m(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var x=!1,w=u.child;w;){if(w===s){x=!0,s=u,o=d;break}if(w===o){x=!0,o=u,s=d;break}w=w.sibling}if(!x){for(w=d.child;w;){if(w===s){x=!0,s=d,o=u;break}if(w===o){x=!0,o=d,s=u;break}w=w.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),F=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}var Q=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],Te=-1;function A(t){return{current:t}}function G(t){0>Te||(t.current=pe[Te],pe[Te]=null,Te--)}function se(t,i){Te++,pe[Te]=t.current,t.current=i}var Me=A(null),Re=A(null),ee=A(null),ue=A(null);function _e(t,i){switch(se(ee,i),se(Re,t),se(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Xv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Xv(i),t=Wv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(Me),se(Me,t)}function Le(){G(Me),G(Re),G(ee)}function Qe(t){t.memoizedState!==null&&se(ue,t);var i=Me.current,s=Wv(i,t.type);i!==s&&(se(Re,t),se(Me,s))}function ye(t){Re.current===t&&(G(Me),G(Re)),ue.current===t&&(G(ue),ul._currentValue=J)}var $e,lt;function ft(t){if($e===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$e=i&&i[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+lt}var pt=!1;function et(t,i){if(!t||pt)return"";pt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(fe){var ce=fe}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(fe){ce=fe}t.call(Ee.prototype)}}else{try{throw Error()}catch(fe){ce=fe}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(fe){if(fe&&ce&&typeof fe.stack=="string")return[fe.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],w=d[1];if(x&&w){var H=x.split(`
`),ne=w.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ne.length)for(o=H.length-1,u=ne.length-1;1<=o&&0<=u&&H[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ne[u]){var xe=`
`+H[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ft(s):""}function Ct(t,i){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==i&&i!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return et(t.type,!1);case 11:return et(t.type.render,!1);case 1:return et(t.type,!0);case 31:return ft("Activity");default:return""}}function Yt(t){try{var i="",s=null;do i+=Ct(t,s),s=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,nn=r.unstable_scheduleCallback,Qt=r.unstable_cancelCallback,ln=r.unstable_shouldYield,Y=r.unstable_requestPaint,Xt=r.unstable_now,Ut=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,oe=r.unstable_LowPriority,ge=r.unstable_IdlePriority,we=r.log,Oe=r.unstable_setDisableYieldValue,me=null,ve=null;function Ne(t){if(typeof we=="function"&&Oe(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(me,t)}catch{}}var Ge=Math.clz32?Math.clz32:tt,ze=Math.log,Pe=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(ze(t)/Pe|0)|0}var nt=256,ut=262144,W=4194304;function De(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=De(o):(x&=w,x!==0?u=De(x):s||(s=w&~t,s!==0&&(u=De(s))))):(w=o&~d,w!==0?u=De(w):x!==0?u=De(x):s||(s=o&~t,s!==0&&(u=De(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ze(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function We(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,i,s,o,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,H=t.expirationTimes,ne=t.hiddenUpdates;for(s=x&~s;0<s;){var xe=31-Ge(s),Ee=1<<xe;w[xe]=0,H[xe]=-1;var ce=ne[xe];if(ce!==null)for(ne[xe]=null,xe=0;xe<ce.length;xe++){var fe=ce[xe];fe!==null&&(fe.lane&=-536870913)}s&=~Ee}o!==0&&zt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~i))}function zt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ge(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ii(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-Ge(s),u=1<<o;u&i|t[o]&i&&(t[o]|=i),s&=~u}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:Eo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function To(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ao(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function hs(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var Wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Wi,Dn="__reactProps$"+Wi,jn="__reactContainer$"+Wi,Ar="__reactEvents$"+Wi,Hl="__reactListeners$"+Wi,Gl="__reactHandles$"+Wi,Rr="__reactResources$"+Wi,Ga="__reactMarker$"+Wi;function Va(t){delete t[mn],delete t[Dn],delete t[Ar],delete t[Hl],delete t[Gl]}function oa(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[jn]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=$v(t);t!==null;){if(s=t[mn])return s;t=$v(t)}return i}t=s,s=t.parentNode}return null}function la(t){if(t=t[mn]||t[jn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Cr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ka(t){var i=t[Rr];return i||(i=t[Rr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gn(t){t[Ga]=!0}var Vl=new Set,C={};function j(t,i){le(t,i),le(t+"Capture",i)}function le(t,i){for(C[t]=i,t=0;t<i.length;t++)Vl.add(i[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Fe={};function Xe(t){return $t.call(Fe,t)?!0:$t.call(re,t)?!1:ae.test(t)?Fe[t]=!0:(re[t]=!0,!1)}function Ie(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function qe(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t,i,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Dt(t){if(!t._valueTracker){var i=mt(t)?"checked":"value";t._valueTracker=Je(t,i,""+t[i])}}function rn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=mt(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Bt(t){return t.replace(Ft,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(t,i,s,o,u,d,x,w){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),i!=null?x==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+it(i)):t.value!==""+it(i)&&(t.value=""+it(i)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),i!=null?xt(t,x,it(i)):s!=null?xt(t,x,it(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+it(w):t.removeAttribute("name")}function Fn(t,i,s,o,u,d,x,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Dt(t);return}s=s!=null?""+it(s):"",i=i!=null?""+it(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Dt(t)}function xt(t,i,s){i==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,i,s,o){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ri(t,i,s){if(i!=null&&(i=""+it(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+it(s):""}function Ni(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(Q(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=it(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Dt(t)}function si(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||Ht.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Li(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&sn(t,u,o)}else for(var d in i)i.hasOwnProperty(d)&&sn(t,d,i[d])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return Xa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var of=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ps=null,ms=null;function km(t){var i=la(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ve(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Bt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var u=o[Dn]||null;if(!u)throw Error(a(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&rn(o)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Mn(t,!!s.multiple,i,!1)}}}var cf=!1;function Xm(t,i,s){if(cf)return t(i,s);cf=!0;try{var o=t(i);return o}finally{if(cf=!1,(ps!==null||ms!==null)&&(wc(),ps&&(i=ps,t=ms,ms=ps=null,km(i),t)))for(i=0;i<t.length;i++)km(t[i])}}function Ro(t,i){var s=t.stateNode;if(s===null)return null;var o=s[Dn]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=!1;if(ua)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){uf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{uf=!1}var Wa=null,ff=null,kl=null;function Wm(){if(kl)return kl;var t,i=ff,s=i.length,o,u="value"in Wa?Wa.value:Wa.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var x=s-t;for(o=1;o<=x&&i[s-o]===u[d-o];o++);return kl=u.slice(t,1<o?1-o:void 0)}function Xl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function qm(){return!1}function Yn(t){function i(s,o,u,d,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wl:qm,this.isPropagationStopped=qm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),i}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Yn(Dr),wo=v({},Dr,{view:0,detail:0}),Mb=Yn(wo),df,hf,Do,jl=v({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(df=t.screenX-Do.screenX,hf=t.screenY-Do.screenY):hf=df=0,Do=t),df)},movementY:function(t){return"movementY"in t?t.movementY:hf}}),jm=Yn(jl),Eb=v({},jl,{dataTransfer:0}),Tb=Yn(Eb),Ab=v({},wo,{relatedTarget:0}),pf=Yn(Ab),Rb=v({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=Yn(Rb),wb=v({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Db=Yn(wb),Nb=v({},Dr,{data:0}),Ym=Yn(Nb),Lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pb(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ob[t])?!!i[t]:!1}function mf(){return Pb}var Ib=v({},wo,{key:function(t){if(t.key){var i=Lb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ub[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zb=Yn(Ib),Fb=v({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Yn(Fb),Bb=v({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),Hb=Yn(Bb),Gb=v({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=Yn(Gb),kb=v({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xb=Yn(kb),Wb=v({},Dr,{newState:0,oldState:0}),qb=Yn(Wb),jb=[9,13,27,32],gf=ua&&"CompositionEvent"in window,No=null;ua&&"documentMode"in document&&(No=document.documentMode);var Yb=ua&&"TextEvent"in window&&!No,Km=ua&&(!gf||No&&8<No&&11>=No),Qm=" ",$m=!1;function Jm(t,i){switch(t){case"keyup":return jb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Zb(t,i){switch(t){case"compositionend":return eg(i);case"keypress":return i.which!==32?null:($m=!0,Qm);case"textInput":return t=i.data,t===Qm&&$m?null:t;default:return null}}function Kb(t,i){if(gs)return t==="compositionend"||!gf&&Jm(t,i)?(t=Wm(),kl=ff=Wa=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Km&&i.locale!=="ko"?null:i.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qb[t.type]:i==="textarea"}function ng(t,i,s,o){ps?ms?ms.push(o):ms=[o]:ps=o,i=Ic(i,"onChange"),0<i.length&&(s=new ql("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var Lo=null,Uo=null;function $b(t){Fv(t,0)}function Yl(t){var i=Cr(t);if(rn(i))return t}function ig(t,i){if(t==="change")return i}var ag=!1;if(ua){var vf;if(ua){var _f="oninput"in document;if(!_f){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),_f=typeof rg.oninput=="function"}vf=_f}else vf=!1;ag=vf&&(!document.documentMode||9<document.documentMode)}function sg(){Lo&&(Lo.detachEvent("onpropertychange",og),Uo=Lo=null)}function og(t){if(t.propertyName==="value"&&Yl(Uo)){var i=[];ng(i,Uo,t,lf(t)),Xm($b,i)}}function Jb(t,i,s){t==="focusin"?(sg(),Lo=i,Uo=s,Lo.attachEvent("onpropertychange",og)):t==="focusout"&&sg()}function e1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Uo)}function t1(t,i){if(t==="click")return Yl(i)}function n1(t,i){if(t==="input"||t==="change")return Yl(i)}function i1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:i1;function Oo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!$t.call(i,u)||!oi(t[u],i[u]))return!1}return!0}function lg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cg(t,i){var s=lg(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=lg(s)}}function ug(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ug(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function fg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Zt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Zt(t.document)}return i}function xf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var a1=ua&&"documentMode"in document&&11>=document.documentMode,vs=null,yf=null,Po=null,Sf=!1;function dg(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Sf||vs==null||vs!==Zt(o)||(o=vs,"selectionStart"in o&&xf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=Ic(yf,"onSelect"),0<o.length&&(i=new ql("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=vs)))}function Nr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var _s={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},bf={},hg={};ua&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Lr(t){if(bf[t])return bf[t];if(!_s[t])return t;var i=_s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in hg)return bf[t]=i[s];return t}var pg=Lr("animationend"),mg=Lr("animationiteration"),gg=Lr("animationstart"),r1=Lr("transitionrun"),s1=Lr("transitionstart"),o1=Lr("transitioncancel"),vg=Lr("transitionend"),_g=new Map,Mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mf.push("scrollEnd");function Ui(t,i){_g.set(t,i),j(i,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],xs=0,Ef=0;function Kl(){for(var t=xs,i=Ef=xs=0;i<t;){var s=_i[i];_i[i++]=null;var o=_i[i];_i[i++]=null;var u=_i[i];_i[i++]=null;var d=_i[i];if(_i[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&xg(s,u,d)}}function Ql(t,i,s,o){_i[xs++]=t,_i[xs++]=i,_i[xs++]=s,_i[xs++]=o,Ef|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tf(t,i,s,o){return Ql(t,i,s,o),$l(t)}function Ur(t,i){return Ql(t,null,null,i),$l(t)}function xg(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ge(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=s|536870912),d):null}function $l(t){if(50<il)throw il=0,Od=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ys={};function l1(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,o){return new l1(t,i,s,o)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function yg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Jl(t,i,s,o,u,d){var x=0;if(o=t,typeof t=="function")Af(t)&&(x=1);else if(typeof t=="string")x=hM(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=li(31,s,i,u),t.elementType=z,t.lanes=d,t;case D:return Or(s.children,u,d,i);case b:x=8,u|=24;break;case y:return t=li(12,s,i,u|2),t.elementType=y,t.lanes=d,t;case O:return t=li(13,s,i,u),t.elementType=O,t.lanes=d,t;case L:return t=li(19,s,i,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break e;case I:x=9;break e;case N:x=11;break e;case B:x=14;break e;case T:x=16,o=null;break e}x=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return i=li(x,s,i,u),i.elementType=t,i.type=o,i.lanes=d,i}function Or(t,i,s,o){return t=li(7,t,o,i),t.lanes=s,t}function Rf(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Sg(t){var i=li(18,null,null,0);return i.stateNode=t,i}function Cf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var bg=new WeakMap;function xi(t,i){if(typeof t=="object"&&t!==null){var s=bg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Yt(i)},bg.set(t,i),i)}return{value:t,source:i,stack:Yt(i)}}var Ss=[],bs=0,ec=null,Io=0,yi=[],Si=0,qa=null,ji=1,Yi="";function da(t,i){Ss[bs++]=Io,Ss[bs++]=ec,ec=t,Io=i}function Mg(t,i,s){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=qa,qa=t;var o=ji;t=Yi;var u=32-Ge(o)-1;o&=~(1<<u),s+=1;var d=32-Ge(i)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ji=1<<32-Ge(i)+u|s<<u|o,Yi=d+t}else ji=1<<d|s<<u|o,Yi=t}function wf(t){t.return!==null&&(da(t,1),Mg(t,1,0))}function Df(t){for(;t===ec;)ec=Ss[--bs],Ss[bs]=null,Io=Ss[--bs],Ss[bs]=null;for(;t===qa;)qa=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null,ji=yi[--Si],yi[Si]=null}function Eg(t,i){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=qa,ji=i.id,Yi=i.overflow,qa=t}var Nn=null,Jt=null,Tt=!1,ja=null,bi=!1,Nf=Error(a(519));function Ya(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(xi(i,t)),Nf}function Tg(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[mn]=t,i[Dn]=o,s){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(s=0;s<rl.length;s++)St(rl[s],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":St("invalid",i),Fn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",i);break;case"textarea":St("invalid",i),Ni(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Vv(i.textContent,s)?(o.popover!=null&&(St("beforetoggle",i),St("toggle",i)),o.onScroll!=null&&St("scroll",i),o.onScrollEnd!=null&&St("scrollend",i),o.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||Ya(t,!0)}function Ag(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Ms(t){if(t!==Nn)return!1;if(!Tt)return Ag(t),Tt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Zd(t.type,t.memoizedProps)),s=!s),s&&Jt&&Ya(t),Ag(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=Qv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=Qv(t)}else i===27?(i=Jt,lr(t.type)?(t=eh,eh=null,Jt=t):Jt=i):Jt=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Pr(){Jt=Nn=null,Tt=!1}function Lf(){var t=ja;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),ja=null),t}function zo(t){ja===null?ja=[t]:ja.push(t)}var Uf=A(null),Ir=null,ha=null;function Za(t,i,s){se(Uf,i._currentValue),i._currentValue=s}function pa(t){t._currentValue=Uf.current,G(Uf)}function Of(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function Pf(t,i,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var H=0;H<i.length;H++)if(w.context===i[H]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),Of(d.return,s,t),o||(x=null);break e}d=w.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Of(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Es(t,i,s,o){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var w=u.type;oi(u.pendingProps.value,x.value)||(t!==null?t.push(w):t=[w])}}else if(u===ue.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}u=u.return}t!==null&&Pf(i,t,s,o),i.flags|=262144}function tc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Ir=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Rg(Ir,t)}function nc(t,i){return Ir===null&&zr(t),Rg(t,i)}function Rg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(a(308));ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ha=ha.next=i;return s}var c1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},u1=r.unstable_scheduleCallback,f1=r.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function If(){return{controller:new c1,data:new Map,refCount:0}}function Fo(t){t.refCount--,t.refCount===0&&u1(f1,function(){t.controller.abort()})}var Bo=null,zf=0,Ts=0,As=null;function d1(t,i){if(Bo===null){var s=Bo=[];zf=0,Ts=Hd(),As={status:"pending",value:void 0,then:function(o){s.push(o)}}}return zf++,i.then(Cg,Cg),i}function Cg(){if(--zf===0&&Bo!==null){As!==null&&(As.status="fulfilled");var t=Bo;Bo=null,Ts=0,As=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function h1(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var wg=U.S;U.S=function(t,i){dv=Xt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&d1(t,i),wg!==null&&wg(t,i)};var Fr=A(null);function Ff(){var t=Fr.current;return t!==null?t:Kt.pooledCache}function ic(t,i){i===null?se(Fr,Fr.current):se(Fr,i.pool)}function Dg(){var t=Ff();return t===null?null:{parent:vn._currentValue,pool:t}}var Rs=Error(a(460)),Bf=Error(a(474)),ac=Error(a(542)),rc={then:function(){}};function Ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Og(t),t;default:if(typeof i.status=="string")i.then(ca,ca);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Og(t),t}throw Hr=i,Rs}}function Br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hr=s,Rs):s}}var Hr=null;function Ug(){if(Hr===null)throw Error(a(459));var t=Hr;return Hr=null,t}function Og(t){if(t===Rs||t===ac)throw Error(a(483))}var Cs=null,Ho=0;function sc(t){var i=Ho;return Ho+=1,Cs===null&&(Cs=[]),Lg(Cs,t,i)}function Go(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function oc(t,i){throw i.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Pg(t){function i(K,X){if(t){var te=K.deletions;te===null?(K.deletions=[X],K.flags|=16):te.push(X)}}function s(K,X){if(!t)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=fa(K,X),K.index=0,K.sibling=null,K}function d(K,X,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<X?(K.flags|=67108866,X):te):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function x(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function w(K,X,te,be){return X===null||X.tag!==6?(X=Rf(te,K.mode,be),X.return=K,X):(X=u(X,te),X.return=K,X)}function H(K,X,te,be){var at=te.type;return at===D?xe(K,X,te.props.children,be,te.key):X!==null&&(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&Br(at)===X.type)?(X=u(X,te.props),Go(X,te),X.return=K,X):(X=Jl(te.type,te.key,te.props,null,K.mode,be),Go(X,te),X.return=K,X)}function ne(K,X,te,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Cf(te,K.mode,be),X.return=K,X):(X=u(X,te.children||[]),X.return=K,X)}function xe(K,X,te,be,at){return X===null||X.tag!==7?(X=Or(te,K.mode,be,at),X.return=K,X):(X=u(X,te),X.return=K,X)}function Ee(K,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Rf(""+X,K.mode,te),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return te=Jl(X.type,X.key,X.props,null,K.mode,te),Go(te,X),te.return=K,te;case E:return X=Cf(X,K.mode,te),X.return=K,X;case T:return X=Br(X),Ee(K,X,te)}if(Q(X)||Z(X))return X=Or(X,K.mode,te,null),X.return=K,X;if(typeof X.then=="function")return Ee(K,sc(X),te);if(X.$$typeof===F)return Ee(K,nc(K,X),te);oc(K,X)}return null}function ce(K,X,te,be){var at=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return at!==null?null:w(K,X,""+te,be);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===at?H(K,X,te,be):null;case E:return te.key===at?ne(K,X,te,be):null;case T:return te=Br(te),ce(K,X,te,be)}if(Q(te)||Z(te))return at!==null?null:xe(K,X,te,be,null);if(typeof te.then=="function")return ce(K,X,sc(te),be);if(te.$$typeof===F)return ce(K,X,nc(K,te),be);oc(K,te)}return null}function fe(K,X,te,be,at){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return K=K.get(te)||null,w(X,K,""+be,at);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case S:return K=K.get(be.key===null?te:be.key)||null,H(X,K,be,at);case E:return K=K.get(be.key===null?te:be.key)||null,ne(X,K,be,at);case T:return be=Br(be),fe(K,X,te,be,at)}if(Q(be)||Z(be))return K=K.get(te)||null,xe(X,K,be,at,null);if(typeof be.then=="function")return fe(K,X,te,sc(be),at);if(be.$$typeof===F)return fe(K,X,te,nc(X,be),at);oc(X,be)}return null}function Ye(K,X,te,be){for(var at=null,Nt=null,Ke=X,vt=X=0,Mt=null;Ke!==null&&vt<te.length;vt++){Ke.index>vt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Lt=ce(K,Ke,te[vt],be);if(Lt===null){Ke===null&&(Ke=Mt);break}t&&Ke&&Lt.alternate===null&&i(K,Ke),X=d(Lt,X,vt),Nt===null?at=Lt:Nt.sibling=Lt,Nt=Lt,Ke=Mt}if(vt===te.length)return s(K,Ke),Tt&&da(K,vt),at;if(Ke===null){for(;vt<te.length;vt++)Ke=Ee(K,te[vt],be),Ke!==null&&(X=d(Ke,X,vt),Nt===null?at=Ke:Nt.sibling=Ke,Nt=Ke);return Tt&&da(K,vt),at}for(Ke=o(Ke);vt<te.length;vt++)Mt=fe(Ke,K,vt,te[vt],be),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?vt:Mt.key),X=d(Mt,X,vt),Nt===null?at=Mt:Nt.sibling=Mt,Nt=Mt);return t&&Ke.forEach(function(hr){return i(K,hr)}),Tt&&da(K,vt),at}function ot(K,X,te,be){if(te==null)throw Error(a(151));for(var at=null,Nt=null,Ke=X,vt=X=0,Mt=null,Lt=te.next();Ke!==null&&!Lt.done;vt++,Lt=te.next()){Ke.index>vt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var hr=ce(K,Ke,Lt.value,be);if(hr===null){Ke===null&&(Ke=Mt);break}t&&Ke&&hr.alternate===null&&i(K,Ke),X=d(hr,X,vt),Nt===null?at=hr:Nt.sibling=hr,Nt=hr,Ke=Mt}if(Lt.done)return s(K,Ke),Tt&&da(K,vt),at;if(Ke===null){for(;!Lt.done;vt++,Lt=te.next())Lt=Ee(K,Lt.value,be),Lt!==null&&(X=d(Lt,X,vt),Nt===null?at=Lt:Nt.sibling=Lt,Nt=Lt);return Tt&&da(K,vt),at}for(Ke=o(Ke);!Lt.done;vt++,Lt=te.next())Lt=fe(Ke,K,vt,Lt.value,be),Lt!==null&&(t&&Lt.alternate!==null&&Ke.delete(Lt.key===null?vt:Lt.key),X=d(Lt,X,vt),Nt===null?at=Lt:Nt.sibling=Lt,Nt=Lt);return t&&Ke.forEach(function(EM){return i(K,EM)}),Tt&&da(K,vt),at}function jt(K,X,te,be){if(typeof te=="object"&&te!==null&&te.type===D&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var at=te.key;X!==null;){if(X.key===at){if(at=te.type,at===D){if(X.tag===7){s(K,X.sibling),be=u(X,te.props.children),be.return=K,K=be;break e}}else if(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&Br(at)===X.type){s(K,X.sibling),be=u(X,te.props),Go(be,te),be.return=K,K=be;break e}s(K,X);break}else i(K,X);X=X.sibling}te.type===D?(be=Or(te.props.children,K.mode,be,te.key),be.return=K,K=be):(be=Jl(te.type,te.key,te.props,null,K.mode,be),Go(be,te),be.return=K,K=be)}return x(K);case E:e:{for(at=te.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(K,X.sibling),be=u(X,te.children||[]),be.return=K,K=be;break e}else{s(K,X);break}else i(K,X);X=X.sibling}be=Cf(te,K.mode,be),be.return=K,K=be}return x(K);case T:return te=Br(te),jt(K,X,te,be)}if(Q(te))return Ye(K,X,te,be);if(Z(te)){if(at=Z(te),typeof at!="function")throw Error(a(150));return te=at.call(te),ot(K,X,te,be)}if(typeof te.then=="function")return jt(K,X,sc(te),be);if(te.$$typeof===F)return jt(K,X,nc(K,te),be);oc(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(s(K,X.sibling),be=u(X,te),be.return=K,K=be):(s(K,X),be=Rf(te,K.mode,be),be.return=K,K=be),x(K)):s(K,X)}return function(K,X,te,be){try{Ho=0;var at=jt(K,X,te,be);return Cs=null,at}catch(Ke){if(Ke===Rs||Ke===ac)throw Ke;var Nt=li(29,Ke,null,K.mode);return Nt.lanes=be,Nt.return=K,Nt}}}var Gr=Pg(!0),Ig=Pg(!1),Ka=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=$l(t),xg(t,null,s),i}return Ql(t,o,i,s),$l(t)}function Vo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ii(t,s)}}function Vf(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var kf=!1;function ko(){if(kf){var t=As;if(t!==null)throw t}}function Xo(t,i,s,o){kf=!1;var u=t.updateQueue;Ka=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var H=w,ne=H.next;H.next=null,x===null?d=ne:x.next=ne,x=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,w=xe.lastBaseUpdate,w!==x&&(w===null?xe.firstBaseUpdate=ne:w.next=ne,xe.lastBaseUpdate=H))}if(d!==null){var Ee=u.baseState;x=0,xe=ne=H=null,w=d;do{var ce=w.lane&-536870913,fe=ce!==w.lane;if(fe?(bt&ce)===ce:(o&ce)===ce){ce!==0&&ce===Ts&&(kf=!0),xe!==null&&(xe=xe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ye=t,ot=w;ce=i;var jt=s;switch(ot.tag){case 1:if(Ye=ot.payload,typeof Ye=="function"){Ee=Ye.call(jt,Ee,ce);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=ot.payload,ce=typeof Ye=="function"?Ye.call(jt,Ee,ce):Ye,ce==null)break e;Ee=v({},Ee,ce);break e;case 2:Ka=!0}}ce=w.callback,ce!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ce]:fe.push(ce))}else fe={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xe===null?(ne=xe=fe,H=Ee):xe=xe.next=fe,x|=ce;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;fe=w,w=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);xe===null&&(H=Ee),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=xe,d===null&&(u.shared.lanes=0),ir|=x,t.lanes=x,t.memoizedState=Ee}}function zg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Fg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)zg(s[t],i)}var ws=A(null),lc=A(0);function Bg(t,i){t=Ma,se(lc,t),se(ws,i),Ma=t|i.baseLanes}function Xf(){se(lc,Ma),se(ws,ws.current)}function Wf(){Ma=lc.current,G(ws),G(lc)}var ci=A(null),Mi=null;function Ja(t){var i=t.alternate;se(hn,hn.current&1),se(ci,t),Mi===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(Mi=t)}function qf(t){se(hn,hn.current),se(ci,t),Mi===null&&(Mi=t)}function Hg(t){t.tag===22?(se(hn,hn.current),se(ci,t),Mi===null&&(Mi=t)):er()}function er(){se(hn,hn.current),se(ci,ci.current)}function ui(t){G(ci),Mi===t&&(Mi=null),G(hn)}var hn=A(0);function cc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||$d(s)||Jd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,gt=null,Wt=null,_n=null,uc=!1,Ds=!1,Vr=!1,fc=0,Wo=0,Ns=null,p1=0;function cn(){throw Error(a(321))}function jf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function Yf(t,i,s,o,u,d){return ma=d,gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,U.H=t===null||t.memoizedState===null?M0:cd,Vr=!1,d=s(o,u),Vr=!1,Ds&&(d=Vg(i,s,o,u)),Gg(t),d}function Gg(t){U.H=Yo;var i=Wt!==null&&Wt.next!==null;if(ma=0,_n=Wt=gt=null,uc=!1,Wo=0,Ns=null,i)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&tc(t)&&(xn=!0))}function Vg(t,i,s,o){gt=t;var u=0;do{if(Ds&&(Ns=null),Wo=0,Ds=!1,25<=u)throw Error(a(301));if(u+=1,_n=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=E0,d=i(s,o)}while(Ds);return d}function m1(){var t=U.H,i=t.useState()[0];return i=typeof i.then=="function"?qo(i):i,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(gt.flags|=1024),i}function Zf(){var t=fc!==0;return fc=0,t}function Kf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Qf(t){if(uc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uc=!1}ma=0,_n=Wt=gt=null,Ds=!1,Wo=fc=0,Ns=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?gt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Wt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=_n===null?gt.memoizedState:_n.next;if(i!==null)_n=i,Wt=t;else{if(t===null)throw gt.alternate===null?Error(a(467)):Error(a(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},_n===null?gt.memoizedState=_n=t:_n=_n.next=t}return _n}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(t){var i=Wo;return Wo+=1,Ns===null&&(Ns=[]),t=Lg(Ns,t,i),i=gt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,U.H=i===null||i.memoizedState===null?M0:cd),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qo(t);if(t.$$typeof===F)return Ln(t)}throw Error(a(438,String(t)))}function $f(t){var i=null,s=gt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=dc(),gt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=q;return i.index++,s}function ga(t,i){return typeof i=="function"?i(t):i}function pc(t){var i=pn();return Jf(i,Wt,t)}function Jf(t,i,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}i.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var w=x=null,H=null,ne=i,xe=!1;do{var Ee=ne.lane&-536870913;if(Ee!==ne.lane?(bt&Ee)===Ee:(ma&Ee)===Ee){var ce=ne.revertLane;if(ce===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Ee===Ts&&(xe=!0);else if((ma&ce)===ce){ne=ne.next,ce===Ts&&(xe=!0);continue}else Ee={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(w=H=Ee,x=d):H=H.next=Ee,gt.lanes|=ce,ir|=ce;Ee=ne.action,Vr&&s(d,Ee),d=ne.hasEagerState?ne.eagerState:s(d,Ee)}else ce={lane:Ee,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(w=H=ce,x=d):H=H.next=ce,gt.lanes|=Ee,ir|=Ee;ne=ne.next}while(ne!==null&&ne!==i);if(H===null?x=d:H.next=w,!oi(d,t.memoizedState)&&(xn=!0,xe&&(s=As,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ed(t){var i=pn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);oi(d,i.memoizedState)||(xn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function kg(t,i,s){var o=gt,u=pn(),d=Tt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var x=!oi((Wt||u).memoizedState,s);if(x&&(u.memoizedState=s,xn=!0),u=u.queue,id(qg.bind(null,o,u,t),[t]),u.getSnapshot!==i||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Ls(9,{destroy:void 0},Wg.bind(null,o,u,s,i),null),Kt===null)throw Error(a(349));d||(ma&127)!==0||Xg(o,i,s)}return s}function Xg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=gt.updateQueue,i===null?(i=dc(),gt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Wg(t,i,s,o){i.value=s,i.getSnapshot=o,jg(i)&&Yg(t)}function qg(t,i,s){return s(function(){jg(i)&&Yg(t)})}function jg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function Yg(t){var i=Ur(t,2);i!==null&&Jn(i,t,2)}function td(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Vr){Ne(!0);try{s()}finally{Ne(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i}function Zg(t,i,s,o){return t.baseState=s,Jf(t,Wt,typeof o=="function"?o:ga)}function g1(t,i,s,o,u){if(vc(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};U.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,Kg(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Kg(t,i){var s=i.action,o=i.payload,u=t.state;if(i.isTransition){var d=U.T,x={};U.T=x;try{var w=s(u,o),H=U.S;H!==null&&H(x,w),Qg(t,i,w)}catch(ne){nd(t,i,ne)}finally{d!==null&&x.types!==null&&(d.types=x.types),U.T=d}}else try{d=s(u,o),Qg(t,i,d)}catch(ne){nd(t,i,ne)}}function Qg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){$g(t,i,o)},function(o){return nd(t,i,o)}):$g(t,i,s)}function $g(t,i,s){i.status="fulfilled",i.value=s,Jg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Kg(t,s)))}function nd(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Jg(i),i=i.next;while(i!==o)}t.action=null}function Jg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function e0(t,i){return i}function t0(t,i){if(Tt){var s=Kt.formState;if(s!==null){e:{var o=gt;if(Tt){if(Jt){t:{for(var u=Jt,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Jt=Ei(u.nextSibling),o=u.data==="F!";break e}}Ya(o)}o=!1}o&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:i},s.queue=o,s=y0.bind(null,gt,o),o.dispatch=s,o=td(!1),d=ld.bind(null,gt,!1,o.queue),o=kn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,s=g1.bind(null,gt,u,d,s),u.dispatch=s,o.memoizedState=t,[i,s,!1]}function n0(t){var i=pn();return i0(i,Wt,t)}function i0(t,i,s){if(i=Jf(t,i,e0)[0],t=pc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=qo(i)}catch(x){throw x===Rs?ac:x}else o=i;i=pn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(gt.flags|=2048,Ls(9,{destroy:void 0},v1.bind(null,u,s),null)),[o,d,t]}function v1(t,i){t.action=i}function a0(t){var i=pn(),s=Wt;if(s!==null)return i0(i,s,t);pn(),i=i.memoizedState,s=pn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function Ls(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=gt.updateQueue,i===null&&(i=dc(),gt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function r0(){return pn().memoizedState}function mc(t,i,s,o){var u=kn();gt.flags|=t,u.memoizedState=Ls(1|i,{destroy:void 0},s,o===void 0?null:o)}function gc(t,i,s,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&jf(o,Wt.memoizedState.deps)?u.memoizedState=Ls(i,d,s,o):(gt.flags|=t,u.memoizedState=Ls(1|i,d,s,o))}function s0(t,i){mc(8390656,8,t,i)}function id(t,i){gc(2048,8,t,i)}function _1(t){gt.flags|=4;var i=gt.updateQueue;if(i===null)i=dc(),gt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function o0(t){var i=pn().memoizedState;return _1({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function l0(t,i){return gc(4,2,t,i)}function c0(t,i){return gc(4,4,t,i)}function u0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function f0(t,i,s){s=s!=null?s.concat([t]):null,gc(4,4,u0.bind(null,i,t),s)}function ad(){}function d0(t,i){var s=pn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&jf(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function h0(t,i){var s=pn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&jf(i,o[1]))return o[0];if(o=t(),Vr){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[o,i],o}function rd(t,i,s){return s===void 0||(ma&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=pv(),gt.lanes|=t,ir|=t,s)}function p0(t,i,s,o){return oi(s,i)?s:ws.current!==null?(t=rd(t,s,o),oi(t,i)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=s):(t=pv(),gt.lanes|=t,ir|=t,i)}function m0(t,i,s,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var x=U.T,w={};U.T=w,ld(t,!1,i,s);try{var H=u(),ne=U.S;if(ne!==null&&ne(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xe=h1(H,o);jo(t,i,xe,hi(t))}else jo(t,i,o,hi(t))}catch(Ee){jo(t,i,{then:function(){},status:"rejected",reason:Ee},hi())}finally{V.p=d,x!==null&&w.types!==null&&(x.types=w.types),U.T=x}}function x1(){}function sd(t,i,s,o){if(t.tag!==5)throw Error(a(476));var u=g0(t).queue;m0(t,u,i,J,s===null?x1:function(){return v0(t),s(o)})}function g0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:J},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function v0(t){var i=g0(t);i.next===null&&(i=t.alternate.memoizedState),jo(t,i.next.queue,{},hi())}function od(){return Ln(ul)}function _0(){return pn().memoizedState}function x0(){return pn().memoizedState}function y1(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=Qa(s);var o=$a(i,t,s);o!==null&&(Jn(o,i,s),Vo(o,i,s)),i={cache:If()},t.payload=i;return}i=i.return}}function S1(t,i,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(t)?S0(i,s):(s=Tf(t,i,s,o),s!==null&&(Jn(s,t,o),b0(s,i,o)))}function y0(t,i,s){var o=hi();jo(t,i,s,o)}function jo(t,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(t))S0(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,w=d(x,s);if(u.hasEagerState=!0,u.eagerState=w,oi(w,x))return Ql(t,i,u,0),Kt===null&&Kl(),!1}catch{}if(s=Tf(t,i,u,o),s!==null)return Jn(s,t,o),b0(s,i,o),!0}return!1}function ld(t,i,s,o){if(o={lane:2,revertLane:Hd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vc(t)){if(i)throw Error(a(479))}else i=Tf(t,s,o,2),i!==null&&Jn(i,t,2)}function vc(t){var i=t.alternate;return t===gt||i!==null&&i===gt}function S0(t,i){Ds=uc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function b0(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ii(t,s)}}var Yo={readContext:Ln,use:hc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Yo.useEffectEvent=cn;var M0={readContext:Ln,use:hc,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:s0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,mc(4194308,4,u0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return mc(4194308,4,t,i)},useInsertionEffect:function(t,i){mc(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var o=t();if(Vr){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=kn();if(s!==void 0){var u=s(i);if(Vr){Ne(!0);try{s(i)}finally{Ne(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=S1.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=td(t);var i=t.queue,s=y0.bind(null,gt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:ad,useDeferredValue:function(t,i){var s=kn();return rd(s,t,i)},useTransition:function(){var t=td(!1);return t=m0.bind(null,gt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=gt,u=kn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Kt===null)throw Error(a(349));(bt&127)!==0||Xg(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,s0(qg.bind(null,o,d,t),[t]),o.flags|=2048,Ls(9,{destroy:void 0},Wg.bind(null,o,d,s,i),null),s},useId:function(){var t=kn(),i=Kt.identifierPrefix;if(Tt){var s=Yi,o=ji;s=(o&~(1<<32-Ge(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=p1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:od,useFormState:t0,useActionState:t0,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ld.bind(null,gt,!0,s),s.dispatch=i,[t,i]},useMemoCache:$f,useCacheRefresh:function(){return kn().memoizedState=y1.bind(null,gt)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((Ot&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},cd={readContext:Ln,use:hc,useCallback:d0,useContext:Ln,useEffect:id,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:pc,useRef:r0,useState:function(){return pc(ga)},useDebugValue:ad,useDeferredValue:function(t,i){var s=pn();return p0(s,Wt.memoizedState,t,i)},useTransition:function(){var t=pc(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),i]},useSyncExternalStore:kg,useId:_0,useHostTransitionStatus:od,useFormState:n0,useActionState:n0,useOptimistic:function(t,i){var s=pn();return Zg(s,Wt,t,i)},useMemoCache:$f,useCacheRefresh:x0};cd.useEffectEvent=o0;var E0={readContext:Ln,use:hc,useCallback:d0,useContext:Ln,useEffect:id,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:ed,useRef:r0,useState:function(){return ed(ga)},useDebugValue:ad,useDeferredValue:function(t,i){var s=pn();return Wt===null?rd(s,t,i):p0(s,Wt.memoizedState,t,i)},useTransition:function(){var t=ed(ga)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),i]},useSyncExternalStore:kg,useId:_0,useHostTransitionStatus:od,useFormState:a0,useActionState:a0,useOptimistic:function(t,i){var s=pn();return Wt!==null?Zg(s,Wt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:$f,useCacheRefresh:x0};E0.useEffectEvent=o0;function ud(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var fd={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.payload=i,s!=null&&(u.callback=s),i=$a(t,u,o),i!==null&&(Jn(i,t,o),Vo(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=$a(t,u,o),i!==null&&(Jn(i,t,o),Vo(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),o=Qa(s);o.tag=2,i!=null&&(o.callback=i),i=$a(t,o,s),i!==null&&(Jn(i,t,s),Vo(i,t,s))}};function T0(t,i,s,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):i.prototype&&i.prototype.isPureReactComponent?!Oo(s,o)||!Oo(u,d):!0}function A0(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&fd.enqueueReplaceState(i,i.state,null)}function kr(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function R0(t){Zl(t)}function C0(t){console.error(t)}function w0(t){Zl(t)}function _c(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function D0(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function dd(t,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(t,i)},s}function N0(t){return t=Qa(t),t.tag=3,t}function L0(t,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){D0(i,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){D0(i,s,o),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function b1(t,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&Es(i,s,u,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Dc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===rc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),zd(t,o,u)),!1;case 22:return s.flags|=65536,o===rc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),zd(t,o,u)),!1}throw Error(a(435,s.tag))}return zd(t,o,u),Dc(),!1}if(Tt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Nf&&(t=Error(a(422),{cause:o}),zo(xi(t,s)))):(o!==Nf&&(i=Error(a(423),{cause:o}),zo(xi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,s),u=dd(t.stateNode,o,u),Vf(t,u),un!==4&&(un=2)),!1;var d=Error(a(520),{cause:o});if(d=xi(d,s),nl===null?nl=[d]:nl.push(d),un!==4&&(un=2),i===null)return!0;o=xi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=dd(s.stateNode,o,t),Vf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=N0(u),L0(u,t,s,o),Vf(s,u),!1}s=s.return}while(s!==null);return!1}var hd=Error(a(461)),xn=!1;function Un(t,i,s,o){i.child=t===null?Ig(i,null,s,o):Gr(i,t.child,s,o)}function U0(t,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var x={};for(var w in o)w!=="ref"&&(x[w]=o[w])}else x=o;return zr(i),o=Yf(t,i,s,x,d,u),w=Zf(),t!==null&&!xn?(Kf(t,i,u),va(t,i,u)):(Tt&&w&&wf(i),i.flags|=1,Un(t,i,o,u),i.child)}function O0(t,i,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!Af(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,P0(t,i,d,o,u)):(t=Jl(s.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Sd(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(x,o)&&t.ref===i.ref)return va(t,i,u)}return i.flags|=1,t=fa(d,o),t.ref=i.ref,t.return=i,i.child=t}function P0(t,i,s,o,u){if(t!==null){var d=t.memoizedProps;if(Oo(d,o)&&t.ref===i.ref)if(xn=!1,i.pendingProps=o=d,Sd(t,u))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,va(t,i,u)}return pd(t,i,s,o,u)}function I0(t,i,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=i.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return z0(t,i,d,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(i,d!==null?d.cachePool:null),d!==null?Bg(i,d):Xf(),Hg(i);else return o=i.lanes=536870912,z0(t,i,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(ic(i,d.cachePool),Bg(i,d),er(),i.memoizedState=null):(t!==null&&ic(i,null),Xf(),er());return Un(t,i,u,s),i.child}function Zo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function z0(t,i,s,o,u){var d=Ff();return d=d===null?null:{parent:vn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ic(i,null),Xf(),Hg(i),t!==null&&Es(t,i,o,!0),i.childLanes=u,null}function xc(t,i){return i=Sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function F0(t,i,s){return Gr(i,t.child,null,s),t=xc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function M1(t,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=xc(i,o),i.lanes=536870912,Zo(null,t);if(qf(i),(t=Jt)?(t=Kv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=Sg(t),s.return=i,i.child=s,Nn=i,Jt=null)):t=null,t===null)throw Ya(i);return i.lanes=536870912,null}return xc(i,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(qf(i),u)if(i.flags&256)i.flags&=-257,i=F0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(xn||Es(t,i,s,!1),u=(s&t.childLanes)!==0,xn||u){if(o=Kt,o!==null&&(x=ai(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ur(t,x),Jn(o,t,x),hd;Dc(),i=F0(t,i,s)}else t=d.treeContext,Jt=Ei(x.nextSibling),Nn=i,Tt=!0,ja=null,bi=!1,t!==null&&Eg(i,t),i=xc(i,o),i.flags|=4096;return i}return t=fa(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function yc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function pd(t,i,s,o,u){return zr(i),s=Yf(t,i,s,o,void 0,u),o=Zf(),t!==null&&!xn?(Kf(t,i,u),va(t,i,u)):(Tt&&o&&wf(i),i.flags|=1,Un(t,i,s,u),i.child)}function B0(t,i,s,o,u,d){return zr(i),i.updateQueue=null,s=Vg(i,o,s,u),Gg(t),o=Zf(),t!==null&&!xn?(Kf(t,i,d),va(t,i,d)):(Tt&&o&&wf(i),i.flags|=1,Un(t,i,s,d),i.child)}function H0(t,i,s,o,u){if(zr(i),i.stateNode===null){var d=ys,x=s.contextType;typeof x=="object"&&x!==null&&(d=Ln(x)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=fd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Hf(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?Ln(x):ys,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(ud(i,s,x,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&fd.enqueueReplaceState(d,d.state,null),Xo(i,o,d,u),ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var w=i.memoizedProps,H=kr(s,w);d.props=H;var ne=d.context,xe=s.contextType;x=ys,typeof xe=="object"&&xe!==null&&(x=Ln(xe));var Ee=s.getDerivedStateFromProps;xe=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||ne!==x)&&A0(i,d,o,x),Ka=!1;var ce=i.memoizedState;d.state=ce,Xo(i,o,d,u),ko(),ne=i.memoizedState,w||ce!==ne||Ka?(typeof Ee=="function"&&(ud(i,s,Ee,o),ne=i.memoizedState),(H=Ka||T0(i,s,H,o,ce,ne,x))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ne),d.props=o,d.state=ne,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Gf(t,i),x=i.memoizedProps,xe=kr(s,x),d.props=xe,Ee=i.pendingProps,ce=d.context,ne=s.contextType,H=ys,typeof ne=="object"&&ne!==null&&(H=Ln(ne)),w=s.getDerivedStateFromProps,(ne=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Ee||ce!==H)&&A0(i,d,o,H),Ka=!1,ce=i.memoizedState,d.state=ce,Xo(i,o,d,u),ko();var fe=i.memoizedState;x!==Ee||ce!==fe||Ka||t!==null&&t.dependencies!==null&&tc(t.dependencies)?(typeof w=="function"&&(ud(i,s,w,o),fe=i.memoizedState),(xe=Ka||T0(i,s,xe,o,ce,fe,H)||t!==null&&t.dependencies!==null&&tc(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,fe,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,fe,H)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=fe),d.props=o,d.state=fe,d.context=H,o=xe):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,yc(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=Gr(i,t.child,null,u),i.child=Gr(i,null,s,u)):Un(t,i,s,u),i.memoizedState=d.state,t=i.child):t=va(t,i,u),t}function G0(t,i,s,o){return Pr(),i.flags|=256,Un(t,i,s,o),i.child}var md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gd(t){return{baseLanes:t,cachePool:Dg()}}function vd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function V0(t,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(u?Ja(i):er(),(t=Jt)?(t=Kv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=Sg(t),s.return=i,i.child=s,Nn=i,Jt=null)):t=null,t===null)throw Ya(i);return Jd(t)?i.lanes=32:i.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(er(),u=i.mode,w=Sc({mode:"hidden",children:w},u),o=Or(o,u,s,null),w.return=i,o.return=i,w.sibling=o,i.child=w,o=i.child,o.memoizedState=gd(s),o.childLanes=vd(t,x,s),i.memoizedState=md,Zo(null,o)):(Ja(i),_d(i,w))}var H=t.memoizedState;if(H!==null&&(w=H.dehydrated,w!==null)){if(d)i.flags&256?(Ja(i),i.flags&=-257,i=xd(t,i,s)):i.memoizedState!==null?(er(),i.child=t.child,i.flags|=128,i=null):(er(),w=o.fallback,u=i.mode,o=Sc({mode:"visible",children:o.children},u),w=Or(w,u,s,null),w.flags|=2,o.return=i,w.return=i,o.sibling=w,i.child=o,Gr(i,t.child,null,s),o=i.child,o.memoizedState=gd(s),o.childLanes=vd(t,x,s),i.memoizedState=md,i=Zo(null,o));else if(Ja(i),Jd(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var ne=x.dgst;x=ne,o=Error(a(419)),o.stack="",o.digest=x,zo({value:o,source:null,stack:null}),i=xd(t,i,s)}else if(xn||Es(t,i,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=Kt,x!==null&&(o=ai(x,s),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ur(t,o),Jn(x,t,o),hd;$d(w)||Dc(),i=xd(t,i,s)}else $d(w)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,Jt=Ei(w.nextSibling),Nn=i,Tt=!0,ja=null,bi=!1,t!==null&&Eg(i,t),i=_d(i,o.children),i.flags|=4096);return i}return u?(er(),w=o.fallback,u=i.mode,H=t.child,ne=H.sibling,o=fa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ne!==null?w=fa(ne,w):(w=Or(w,u,s,null),w.flags|=2),w.return=i,o.return=i,o.sibling=w,i.child=o,Zo(null,o),o=i.child,w=t.child.memoizedState,w===null?w=gd(s):(u=w.cachePool,u!==null?(H=vn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Dg(),w={baseLanes:w.baseLanes|s,cachePool:u}),o.memoizedState=w,o.childLanes=vd(t,x,s),i.memoizedState=md,Zo(t.child,o)):(Ja(i),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(x=i.deletions,x===null?(i.deletions=[t],i.flags|=16):x.push(t)),i.child=s,i.memoizedState=null,s)}function _d(t,i){return i=Sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Sc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function xd(t,i,s){return Gr(i,t.child,null,s),t=_d(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function k0(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Of(t.return,i,s)}function yd(t,i,s,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function X0(t,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=hn.current,w=(x&2)!==0;if(w?(x=x&1|2,i.flags|=128):x&=1,se(hn,x),Un(t,i,o,s),o=Tt?Io:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&k0(t,s,i);else if(t.tag===19)k0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),yd(i,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&cc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}yd(i,!0,s,null,d,o);break;case"together":yd(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Es(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=fa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Sd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&tc(t)))}function E1(t,i,s){switch(i.tag){case 3:_e(i,i.stateNode.containerInfo),Za(i,vn,t.memoizedState.cache),Pr();break;case 27:case 5:Qe(i);break;case 4:_e(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,qf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?V0(t,i,s):(Ja(i),t=va(t,i,s),t!==null?t.sibling:null);Ja(i);break;case 19:var u=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(Es(t,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return X0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),se(hn,hn.current),o)break;return null;case 22:return i.lanes=0,I0(t,i,s,i.pendingProps);case 24:Za(i,vn,t.memoizedState.cache)}return va(t,i,s)}function W0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Sd(t,s)&&(i.flags&128)===0)return xn=!1,E1(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Tt&&(i.flags&1048576)!==0&&Mg(i,Io,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=Br(i.elementType),i.type=t,typeof t=="function")Af(t)?(o=kr(t,o),i.tag=1,i=H0(null,i,t,o,s)):(i.tag=0,i=pd(null,i,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===N){i.tag=11,i=U0(null,i,t,o,s);break e}else if(u===B){i.tag=14,i=O0(null,i,t,o,s);break e}}throw i=he(t)||t,Error(a(306,i,""))}}return i;case 0:return pd(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=kr(o,i.pendingProps),H0(t,i,o,u,s);case 3:e:{if(_e(i,i.stateNode.containerInfo),t===null)throw Error(a(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Gf(t,i),Xo(i,o,null,s);var x=i.memoizedState;if(o=x.cache,Za(i,vn,o),o!==d.cache&&Pf(i,[vn],s,!0),ko(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=G0(t,i,o,s);break e}else if(o!==u){u=xi(Error(a(424)),i),zo(u),i=G0(t,i,o,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Ei(t.firstChild),Nn=i,Tt=!0,ja=null,bi=!0,s=Ig(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Pr(),o===u){i=va(t,i,s);break e}Un(t,i,o,s)}i=i.child}return i;case 26:return yc(t,i),t===null?(s=n_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,t=i.pendingProps,o=zc(ee.current).createElement(s),o[mn]=i,o[Dn]=t,On(o,s,t),gn(o),i.stateNode=o):i.memoizedState=n_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Qe(i),t===null&&Tt&&(o=i.stateNode=Jv(i.type,i.pendingProps,ee.current),Nn=i,bi=!0,u=Jt,lr(i.type)?(eh=u,Jt=Ei(o.firstChild)):Jt=u),Un(t,i,i.pendingProps.children,s),yc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((u=o=Jt)&&(o=eM(o,i.type,i.pendingProps,bi),o!==null?(i.stateNode=o,Nn=i,Jt=Ei(o.firstChild),bi=!1,u=!0):u=!1),u||Ya(i)),Qe(i),u=i.type,d=i.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,Zd(u,d)?o=null:x!==null&&Zd(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=Yf(t,i,m1,null,null,s),ul._currentValue=u),yc(t,i),Un(t,i,o,s),i.child;case 6:return t===null&&Tt&&((t=s=Jt)&&(s=tM(s,i.pendingProps,bi),s!==null?(i.stateNode=s,Nn=i,Jt=null,t=!0):t=!1),t||Ya(i)),null;case 13:return V0(t,i,s);case 4:return _e(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=Gr(i,null,o,s):Un(t,i,o,s),i.child;case 11:return U0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Za(i,i.type,o.value),Un(t,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,zr(i),u=Ln(u),o=o(u),i.flags|=1,Un(t,i,o,s),i.child;case 14:return O0(t,i,i.type,i.pendingProps,s);case 15:return P0(t,i,i.type,i.pendingProps,s);case 19:return X0(t,i,s);case 31:return M1(t,i,s);case 22:return I0(t,i,s,i.pendingProps);case 24:return zr(i),o=Ln(vn),t===null?(u=Ff(),u===null&&(u=Kt,d=If(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Hf(i),Za(i,vn,u)):((t.lanes&s)!==0&&(Gf(t,i),Xo(i,null,null,s),ko()),u=t.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Za(i,vn,o)):(o=d.cache,Za(i,vn,o),o!==u.cache&&Pf(i,[vn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function _a(t){t.flags|=4}function bd(t,i,s,o,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(_v())t.flags|=8192;else throw Hr=rc,Bf}else t.flags&=-16777217}function q0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o_(i))if(_v())t.flags|=8192;else throw Hr=rc,Bf}function bc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ae():536870912,t.lanes|=i,Is|=i)}function Ko(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function T1(t,i,s){var o=i.pendingProps;switch(Df(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),pa(vn),Le(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ms(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Lf())),en(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(_a(i),d!==null?(en(i),q0(i,d)):(en(i),bd(i,u,null,o,s))):d?d!==t.memoizedState?(_a(i),en(i),q0(i,d)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&_a(i),en(i),bd(i,u,t,o,s)),null;case 27:if(ye(i),s=ee.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return en(i),null}t=Me.current,Ms(i)?Tg(i):(t=Jv(u,o,s),i.stateNode=t,_a(i))}return en(i),null;case 5:if(ye(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return en(i),null}if(d=Me.current,Ms(i))Tg(i);else{var x=zc(ee.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[mn]=i,d[Dn]=o;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&_a(i)}}return en(i),bd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&_a(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(t=ee.current,Ms(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Vv(t.nodeValue,s)),t||Ya(i,!0)}else t=zc(t).createTextNode(o),t[mn]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(o=Ms(i),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=Lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return en(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ms(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[mn]=i}else Pr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),u=!1}else u=Lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),bc(i,i.updateQueue),en(i),null);case 4:return Le(),t===null&&Xd(i.stateNode.containerInfo),en(i),null;case 10:return pa(i.type),en(i),null;case 19:if(G(hn),o=i.memoizedState,o===null)return en(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)Ko(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=cc(t),d!==null){for(i.flags|=128,Ko(o,!1),t=d.updateQueue,i.updateQueue=t,bc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)yg(s,t),s=s.sibling;return se(hn,hn.current&1|2),Tt&&da(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&Xt()>Rc&&(i.flags|=128,u=!0,Ko(o,!1),i.lanes=4194304)}else{if(!u)if(t=cc(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,bc(i,t),Ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return en(i),null}else 2*Xt()-o.renderingStartTime>Rc&&s!==536870912&&(i.flags|=128,u=!0,Ko(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(t=o.last,t!==null?t.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xt(),t.sibling=null,s=hn.current,se(hn,u?s&1|2:s&1),Tt&&da(i,o.treeForkCount),t):(en(i),null);case 22:case 23:return ui(i),Wf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&bc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&G(Fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(vn),en(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function A1(t,i){switch(Df(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(vn),Le(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ye(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Pr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return G(hn),null;case 4:return Le(),null;case 10:return pa(i.type),null;case 22:case 23:return ui(i),Wf(),t!==null&&G(Fr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function j0(t,i){switch(Df(i),i.tag){case 3:pa(vn),Le();break;case 26:case 27:case 5:ye(i);break;case 4:Le();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:G(hn);break;case 10:pa(i.type);break;case 22:case 23:ui(i),Wf(),t!==null&&G(Fr);break;case 24:pa(vn)}}function Qo(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==u)}}catch(w){Vt(i,i.return,w)}}function tr(t,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,u=i;var H=s,ne=w;try{ne()}catch(xe){Vt(u,H,xe)}}}o=o.next}while(o!==d)}}catch(xe){Vt(i,i.return,xe)}}function Y0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Fg(i,s)}catch(o){Vt(t,t.return,o)}}}function Z0(t,i,s){s.props=kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Vt(t,i,o)}}function $o(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Vt(t,i,u)}}function Zi(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Vt(t,i,u)}else s.current=null}function K0(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Vt(t,t.return,u)}}function Md(t,i,s){try{var o=t.stateNode;Y1(o,t.type,s,i),o[Dn]=i}catch(u){Vt(t,t.return,u)}}function Q0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Td(t,i,s),t=t.sibling;t!==null;)Td(t,i,s),t=t.sibling}function Mc(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mc(t,i,s),t=t.sibling;t!==null;)Mc(t,i,s),t=t.sibling}function $0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);On(i,o,s),i[mn]=t,i[Dn]=s}catch(d){Vt(t,t.return,d)}}var xa=!1,yn=!1,Ad=!1,J0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function R1(t,i){if(t=t.containerInfo,jd=Xc,t=fg(t),xf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,w=-1,H=-1,ne=0,xe=0,Ee=t,ce=null;t:for(;;){for(var fe;Ee!==s||u!==0&&Ee.nodeType!==3||(w=x+u),Ee!==d||o!==0&&Ee.nodeType!==3||(H=x+o),Ee.nodeType===3&&(x+=Ee.nodeValue.length),(fe=Ee.firstChild)!==null;)ce=Ee,Ee=fe;for(;;){if(Ee===t)break t;if(ce===s&&++ne===u&&(w=x),ce===d&&++xe===o&&(H=x),(fe=Ee.nextSibling)!==null)break;Ee=ce,ce=Ee.parentNode}Ee=fe}s=w===-1||H===-1?null:{start:w,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yd={focusedElem:t,selectionRange:s},Xc=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Ye=kr(s.type,u);t=o.getSnapshotBeforeUpdate(Ye,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Vt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Qd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function ev(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),o&4&&Qo(5,s);break;case 1:if(Sa(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(x){Vt(s,s.return,x)}else{var u=kr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Vt(s,s.return,x)}}o&64&&Y0(s),o&512&&$o(s,s.return);break;case 3:if(Sa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Fg(t,i)}catch(x){Vt(s,s.return,x)}}break;case 27:i===null&&o&4&&$0(s);case 26:case 5:Sa(t,s),i===null&&o&4&&K0(s),o&512&&$o(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),o&4&&iv(t,s);break;case 13:Sa(t,s),o&4&&av(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=I1.bind(null,s),nM(t,s))));break;case 22:if(o=s.memoizedState!==null||xa,!o){i=i!==null&&i.memoizedState!==null||yn,u=xa;var d=yn;xa=o,(yn=i)&&!d?ba(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=u,yn=d}break;case 30:break;default:Sa(t,s)}}function tv(t){var i=t.alternate;i!==null&&(t.alternate=null,tv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Va(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Zn=!1;function ya(t,i,s){for(s=s.child;s!==null;)nv(t,i,s),s=s.sibling}function nv(t,i,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:yn||Zi(s,i),ya(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Zi(s,i);var o=on,u=Zn;lr(s.type)&&(on=s.stateNode,Zn=!1),ya(t,i,s),ol(s.stateNode),on=o,Zn=u;break;case 5:yn||Zi(s,i);case 6:if(o=on,u=Zn,on=null,ya(t,i,s),on=o,Zn=u,on!==null)if(Zn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){Vt(s,i,d)}else try{on.removeChild(s.stateNode)}catch(d){Vt(s,i,d)}break;case 18:on!==null&&(Zn?(t=on,Yv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xs(t)):Yv(on,s.stateNode));break;case 4:o=on,u=Zn,on=s.stateNode.containerInfo,Zn=!0,ya(t,i,s),on=o,Zn=u;break;case 0:case 11:case 14:case 15:tr(2,s,i),yn||tr(4,s,i),ya(t,i,s);break;case 1:yn||(Zi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Z0(s,i,o)),ya(t,i,s);break;case 21:ya(t,i,s);break;case 22:yn=(o=yn)||s.memoizedState!==null,ya(t,i,s),yn=o;break;default:ya(t,i,s)}}function iv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(s){Vt(i,i.return,s)}}}function av(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(s){Vt(i,i.return,s)}}function C1(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new J0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new J0),i;default:throw Error(a(435,t.tag))}}function Ec(t,i){var s=C1(t);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=z1.bind(null,t,o);o.then(u,u)}})}function Kn(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,x=i,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(lr(w.type)){on=w.stateNode,Zn=!1;break e}break;case 5:on=w.stateNode,Zn=!1;break e;case 3:case 4:on=w.stateNode.containerInfo,Zn=!0;break e}w=w.return}if(on===null)throw Error(a(160));nv(d,x,u),on=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)rv(i,t),i=i.sibling}var Oi=null;function rv(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(i,t),Qn(t),o&4&&(tr(3,t,t.return),Qo(3,t),tr(5,t,t.return));break;case 1:Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Oi;if(Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ga]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,s),d[mn]=t,gn(d),o=d;break e;case"link":var x=r_("link","href",u).get(o+(s.href||""));if(x){for(var w=0;w<x.length;w++)if(d=x[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(w,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;case"meta":if(x=r_("meta","content",u).get(o+(s.content||""))){for(w=0;w<x.length;w++)if(d=x[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(w,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else s_(u,t.type,t.stateNode);else t.stateNode=a_(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?s_(u,t.type,t.stateNode):a_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Md(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),s!==null&&o&4&&Md(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(i,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(Ye){Vt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Md(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Ad=!0);break;case 6:if(Kn(i,t),Qn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(Ye){Vt(t,t.return,Ye)}}break;case 3:if(Hc=null,u=Oi,Oi=Fc(i.containerInfo),Kn(i,t),Oi=u,Qn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Xs(i.containerInfo)}catch(Ye){Vt(t,t.return,Ye)}Ad&&(Ad=!1,sv(t));break;case 4:o=Oi,Oi=Fc(t.stateNode.containerInfo),Kn(i,t),Qn(t),Oi=o;break;case 12:Kn(i,t),Qn(t);break;case 31:Kn(i,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 13:Kn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=Xt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 22:u=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ne=xa,xe=yn;if(xa=ne||u,yn=xe||H,Kn(i,t),yn=xe,xa=ne,Qn(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||H||xa||yn||Xr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=H.stateNode;var Ee=H.memoizedProps.style,ce=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Ye){Vt(H,H.return,Ye)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ye){Vt(H,H.return,Ye)}}}else if(i.tag===18){if(s===null){H=i;try{var fe=H.stateNode;u?Zv(fe,!0):Zv(H.stateNode,!1)}catch(Ye){Vt(H,H.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Ec(t,s))));break;case 19:Kn(i,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 30:break;case 21:break;default:Kn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if(Q0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=Ed(t);Mc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(si(x,""),s.flags&=-33);var w=Ed(t);Mc(t,w,x);break;case 3:case 4:var H=s.stateNode.containerInfo,ne=Ed(t);Td(t,ne,H);break;default:throw Error(a(161))}}catch(xe){Vt(t,t.return,xe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function sv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;sv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ev(t,i.alternate,i),i=i.sibling}function Xr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:tr(4,i,i.return),Xr(i);break;case 1:Zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Z0(i,i.return,s),Xr(i);break;case 27:ol(i.stateNode);case 26:case 5:Zi(i,i.return),Xr(i);break;case 22:i.memoizedState===null&&Xr(i);break;case 30:Xr(i);break;default:Xr(i)}t=t.sibling}}function ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:ba(u,d,s),Qo(4,d);break;case 1:if(ba(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Vt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)zg(H[u],w)}catch(ne){Vt(o,o.return,ne)}}s&&x&64&&Y0(d),$o(d,d.return);break;case 27:$0(d);case 26:case 5:ba(u,d,s),s&&o===null&&x&4&&K0(d),$o(d,d.return);break;case 12:ba(u,d,s);break;case 31:ba(u,d,s),s&&x&4&&iv(u,d);break;case 13:ba(u,d,s),s&&x&4&&av(u,d);break;case 22:d.memoizedState===null&&ba(u,d,s),$o(d,d.return);break;case 30:break;default:ba(u,d,s)}i=i.sibling}}function Rd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Fo(s))}function Cd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t))}function Pi(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ov(t,i,s,o),i=i.sibling}function ov(t,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,o),u&2048&&Qo(9,i);break;case 1:Pi(t,i,s,o);break;case 3:Pi(t,i,s,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t)));break;case 12:if(u&2048){Pi(t,i,s,o),t=i.stateNode;try{var d=i.memoizedProps,x=d.id,w=d.onPostCommit;typeof w=="function"&&w(x,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Vt(i,i.return,H)}}else Pi(t,i,s,o);break;case 31:Pi(t,i,s,o);break;case 13:Pi(t,i,s,o);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?Pi(t,i,s,o):Jo(t,i):d._visibility&2?Pi(t,i,s,o):(d._visibility|=2,Us(t,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Rd(x,i);break;case 24:Pi(t,i,s,o),u&2048&&Cd(i.alternate,i);break;default:Pi(t,i,s,o)}}function Us(t,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,x=i,w=s,H=o,ne=x.flags;switch(x.tag){case 0:case 11:case 15:Us(d,x,w,H,u),Qo(8,x);break;case 23:break;case 22:var xe=x.stateNode;x.memoizedState!==null?xe._visibility&2?Us(d,x,w,H,u):Jo(d,x):(xe._visibility|=2,Us(d,x,w,H,u)),u&&ne&2048&&Rd(x.alternate,x);break;case 24:Us(d,x,w,H,u),u&&ne&2048&&Cd(x.alternate,x);break;default:Us(d,x,w,H,u)}i=i.sibling}}function Jo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,u=o.flags;switch(o.tag){case 22:Jo(s,o),u&2048&&Rd(o.alternate,o);break;case 24:Jo(s,o),u&2048&&Cd(o.alternate,o);break;default:Jo(s,o)}i=i.sibling}}var el=8192;function Os(t,i,s){if(t.subtreeFlags&el)for(t=t.child;t!==null;)lv(t,i,s),t=t.sibling}function lv(t,i,s){switch(t.tag){case 26:Os(t,i,s),t.flags&el&&t.memoizedState!==null&&pM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Os(t,i,s);break;case 3:case 4:var o=Oi;Oi=Fc(t.stateNode.containerInfo),Os(t,i,s),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=el,el=16777216,Os(t,i,s),el=o):Os(t,i,s));break;default:Os(t,i,s)}}function cv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function tl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,fv(o,t)}cv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)uv(t),t=t.sibling}function uv(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&tr(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Tc(t)):tl(t);break;default:tl(t)}}function Tc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Rn=o,fv(o,t)}cv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:tr(8,i,i.return),Tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(i));break;default:Tc(i)}t=t.sibling}}function fv(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:tr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Rn=o;else e:for(s=t;Rn!==null;){o=Rn;var u=o.sibling,d=o.return;if(tv(o),o===s){Rn=null;break e}if(u!==null){u.return=d,Rn=u;break e}Rn=d}}}var w1={getCacheForType:function(t){var i=Ln(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},D1=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Kt=null,yt=null,bt=0,Gt=0,fi=null,nr=!1,Ps=!1,wd=!1,Ma=0,un=0,ir=0,Wr=0,Dd=0,di=0,Is=0,nl=null,$n=null,Nd=!1,Ac=0,dv=0,Rc=1/0,Cc=null,ar=null,En=0,rr=null,zs=null,Ea=0,Ld=0,Ud=null,hv=null,il=0,Od=null;function hi(){return(Ot&2)!==0&&bt!==0?bt&-bt:U.T!==null?Hd():Ao()}function pv(){if(di===0)if((bt&536870912)===0||Tt){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function Jn(t,i,s){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),sr(t,bt,di,!1)),We(t,s),((Ot&2)===0||t!==Kt)&&(t===Kt&&((Ot&2)===0&&(Wr|=s),un===4&&sr(t,bt,di,!1)),Ki(t))}function mv(t,i,s){if((Ot&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ue(t,i),u=o?U1(t,i):Id(t,i,!0),d=o;do{if(u===0){Ps&&!o&&sr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!N1(s)){u=Id(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var w=t;u=nl;var H=w.current.memoizedState.isDehydrated;if(H&&(Fs(w,x).flags|=256),x=Id(w,x,!1),x!==2){if(wd&&!H){w.errorRecoveryDisabledLanes|=d,Wr|=d,u=4;break e}d=$n,$n=u,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Fs(t,0),sr(t,i,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:sr(o,i,di,!nr);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=Ac+300-Xt(),10<u)){if(sr(o,i,di,!nr),Se(o,0,!0)!==0)break e;Ea=i,o.timeoutHandle=qv(gv.bind(null,o,s,$n,Cc,Nd,i,di,Wr,Is,nr,d,"Throttled",-0,0),u);break e}gv(o,s,$n,Cc,Nd,i,di,Wr,Is,nr,d,null,-0,0)}}break}while(!0);Ki(t)}function gv(t,i,s,o,u,d,x,w,H,ne,xe,Ee,ce,fe){if(t.timeoutHandle=-1,Ee=i.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},lv(i,d,Ee);var Ye=(d&62914560)===d?Ac-Xt():(d&4194048)===d?dv-Xt():0;if(Ye=mM(Ee,Ye),Ye!==null){Ea=d,t.cancelPendingCommit=Ye(Ev.bind(null,t,i,d,s,o,u,x,w,H,xe,Ee,null,ce,fe)),sr(t,d,x,!ne);return}}Ev(t,i,d,s,o,u,x,w,H)}function N1(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!oi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i,s,o){i&=~Dd,i&=~Wr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var d=31-Ge(u),x=1<<d;o[d]=-1,u&=~x}s!==0&&zt(t,s,i)}function wc(){return(Ot&6)===0?(al(0),!1):!0}function Pd(){if(yt!==null){if(Gt===0)var t=yt.return;else t=yt,ha=Ir=null,Qf(t),Cs=null,Ho=0,t=yt;for(;t!==null;)j0(t.alternate,t),t=t.return;yt=null}}function Fs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Q1(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Pd(),Kt=t,yt=s=fa(t.current,null),bt=i,Gt=0,fi=null,nr=!1,Ps=Ue(t,i),wd=!1,Is=di=Dd=Wr=ir=un=0,$n=nl=null,Nd=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Ge(o),d=1<<u;i|=t[u],o&=~d}return Ma=i,Kl(),s}function vv(t,i){gt=null,U.H=Yo,i===Rs||i===ac?(i=Ug(),Gt=3):i===Bf?(i=Ug(),Gt=4):Gt=i===hd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,yt===null&&(un=1,_c(t,xi(i,t.current)))}function _v(){var t=ci.current;return t===null?!0:(bt&4194048)===bt?Mi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Mi:!1}function xv(){var t=U.H;return U.H=Yo,t===null?Yo:t}function yv(){var t=U.A;return U.A=w1,t}function Dc(){un=4,nr||(bt&4194048)!==bt&&ci.current!==null||(Ps=!0),(ir&134217727)===0&&(Wr&134217727)===0||Kt===null||sr(Kt,bt,di,!1)}function Id(t,i,s){var o=Ot;Ot|=2;var u=xv(),d=yv();(Kt!==t||bt!==i)&&(Cc=null,Fs(t,i)),i=!1;var x=un;e:do try{if(Gt!==0&&yt!==null){var w=yt,H=fi;switch(Gt){case 8:Pd(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var ne=Gt;if(Gt=0,fi=null,Bs(t,w,H,ne),s&&Ps){x=0;break e}break;default:ne=Gt,Gt=0,fi=null,Bs(t,w,H,ne)}}L1(),x=un;break}catch(xe){vv(t,xe)}while(!0);return i&&t.shellSuspendCounter++,ha=Ir=null,Ot=o,U.H=u,U.A=d,yt===null&&(Kt=null,bt=0,Kl()),x}function L1(){for(;yt!==null;)Sv(yt)}function U1(t,i){var s=Ot;Ot|=2;var o=xv(),u=yv();Kt!==t||bt!==i?(Cc=null,Rc=Xt()+500,Fs(t,i)):Ps=Ue(t,i);e:do try{if(Gt!==0&&yt!==null){i=yt;var d=fi;t:switch(Gt){case 1:Gt=0,fi=null,Bs(t,i,d,1);break;case 2:case 9:if(Ng(d)){Gt=0,fi=null,bv(i);break}i=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Ki(t)},d.then(i,i);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Ng(d)?(Gt=0,fi=null,bv(i)):(Gt=0,fi=null,Bs(t,i,d,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var w=yt;if(x?o_(x):w.stateNode.complete){Gt=0,fi=null;var H=w.sibling;if(H!==null)yt=H;else{var ne=w.return;ne!==null?(yt=ne,Nc(ne)):yt=null}break t}}Gt=0,fi=null,Bs(t,i,d,5);break;case 6:Gt=0,fi=null,Bs(t,i,d,6);break;case 8:Pd(),un=6;break e;default:throw Error(a(462))}}O1();break}catch(xe){vv(t,xe)}while(!0);return ha=Ir=null,U.H=o,U.A=u,Ot=s,yt!==null?0:(Kt=null,bt=0,Kl(),un)}function O1(){for(;yt!==null&&!ln();)Sv(yt)}function Sv(t){var i=W0(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,i===null?Nc(t):yt=i}function bv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=B0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=B0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:Qf(i);default:j0(s,i),i=yt=yg(i,Ma),i=W0(s,i,Ma)}t.memoizedProps=t.pendingProps,i===null?Nc(t):yt=i}function Bs(t,i,s,o){ha=Ir=null,Qf(i),Cs=null,Ho=0;var u=i.return;try{if(b1(t,u,i,s,bt)){un=1,_c(t,xi(s,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;un=1,_c(t,xi(s,t.current)),yt=null;return}i.flags&32768?(Tt||o===1?t=!0:Ps||(bt&536870912)!==0?t=!1:(nr=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),Mv(i,t)):Nc(i)}function Nc(t){var i=t;do{if((i.flags&32768)!==0){Mv(i,nr);return}t=i.return;var s=T1(i.alternate,i,Ma);if(s!==null){yt=s;return}if(i=i.sibling,i!==null){yt=i;return}yt=i=t}while(i!==null);un===0&&(un=5)}function Mv(t,i){do{var s=A1(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);un=6,yt=null}function Ev(t,i,s,o,u,d,x,w,H){t.cancelPendingCommit=null;do Lc();while(En!==0);if((Ot&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Ef,an(t,s,d,x,w,H),t===Kt&&(yt=Kt=null,bt=0),zs=i,rr=t,Ea=s,Ld=d,Ud=u,hv=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,F1($,function(){return wv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=V.p,V.p=2,x=Ot,Ot|=4;try{R1(t,i,s)}finally{Ot=x,V.p=u,U.T=o}}En=1,Tv(),Av(),Rv()}}function Tv(){if(En===1){En=0;var t=rr,i=zs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=U.T,U.T=null;var o=V.p;V.p=2;var u=Ot;Ot|=4;try{rv(i,t);var d=Yd,x=fg(t.containerInfo),w=d.focusedElem,H=d.selectionRange;if(x!==w&&w&&w.ownerDocument&&ug(w.ownerDocument.documentElement,w)){if(H!==null&&xf(w)){var ne=H.start,xe=H.end;if(xe===void 0&&(xe=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(xe,w.value.length);else{var Ee=w.ownerDocument||document,ce=Ee&&Ee.defaultView||window;if(ce.getSelection){var fe=ce.getSelection(),Ye=w.textContent.length,ot=Math.min(H.start,Ye),jt=H.end===void 0?ot:Math.min(H.end,Ye);!fe.extend&&ot>jt&&(x=jt,jt=ot,ot=x);var K=cg(w,ot),X=cg(w,jt);if(K&&X&&(fe.rangeCount!==1||fe.anchorNode!==K.node||fe.anchorOffset!==K.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var te=Ee.createRange();te.setStart(K.node,K.offset),fe.removeAllRanges(),ot>jt?(fe.addRange(te),fe.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),fe.addRange(te))}}}}for(Ee=[],fe=w;fe=fe.parentNode;)fe.nodeType===1&&Ee.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ee.length;w++){var be=Ee[w];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Xc=!!jd,Yd=jd=null}finally{Ot=u,V.p=o,U.T=s}}t.current=i,En=2}}function Av(){if(En===2){En=0;var t=rr,i=zs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=U.T,U.T=null;var o=V.p;V.p=2;var u=Ot;Ot|=4;try{ev(t,i.alternate,i)}finally{Ot=u,V.p=o,U.T=s}}En=3}}function Rv(){if(En===4||En===3){En=0,Y();var t=rr,i=zs,s=Ea,o=hv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,zs=rr=null,Cv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ar=null),To(s),i=i.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(me,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=U.T,u=V.p,V.p=2,U.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var w=o[x];d(w.value,{componentStack:w.stack})}}finally{U.T=i,V.p=u}}(Ea&3)!==0&&Lc(),Ki(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Od?il++:(il=0,Od=t):il=0,al(0)}}function Cv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Fo(i)))}function Lc(){return Tv(),Av(),Rv(),wv()}function wv(){if(En!==5)return!1;var t=rr,i=Ld;Ld=0;var s=To(Ea),o=U.T,u=V.p;try{V.p=32>s?32:s,U.T=null,s=Ud,Ud=null;var d=rr,x=Ea;if(En=0,zs=rr=null,Ea=0,(Ot&6)!==0)throw Error(a(331));var w=Ot;if(Ot|=4,uv(d.current),ov(d,d.current,x,s),Ot=w,al(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{V.p=u,U.T=o,Cv(t,i)}}function Dv(t,i,s){i=xi(s,i),i=dd(t.stateNode,i,2),t=$a(t,i,2),t!==null&&(We(t,2),Ki(t))}function Vt(t,i,s){if(t.tag===3)Dv(t,t,s);else for(;i!==null;){if(i.tag===3){Dv(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){t=xi(s,t),s=N0(2),o=$a(i,s,2),o!==null&&(L0(s,o,i,t),We(o,2),Ki(o));break}}i=i.return}}function zd(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new D1;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(wd=!0,u.add(s),t=P1.bind(null,t,i,s),i.then(t,t))}function P1(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(bt&s)===s&&(un===4||un===3&&(bt&62914560)===bt&&300>Xt()-Ac?(Ot&2)===0&&Fs(t,0):Dd|=s,Is===bt&&(Is=0)),Ki(t)}function Nv(t,i){i===0&&(i=Ae()),t=Ur(t,i),t!==null&&(We(t,i),Ki(t))}function I1(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Nv(t,s)}function z1(t,i){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Nv(t,s)}function F1(t,i){return nn(t,i)}var Uc=null,Hs=null,Fd=!1,Oc=!1,Bd=!1,or=0;function Ki(t){t!==Hs&&t.next===null&&(Hs===null?Uc=Hs=t:Hs=Hs.next=t),Oc=!0,Fd||(Fd=!0,H1())}function al(t,i){if(!Bd&&Oc){Bd=!0;do for(var s=!1,o=Uc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Ge(42|t)+1)-1,d&=u&~(x&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Pv(o,d))}else d=bt,d=Se(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ue(o,d)||(s=!0,Pv(o,d));o=o.next}while(s);Bd=!1}}function B1(){Lv()}function Lv(){Oc=Fd=!1;var t=0;or!==0&&K1()&&(t=or);for(var i=Xt(),s=null,o=Uc;o!==null;){var u=o.next,d=Uv(o,i);d===0?(o.next=null,s===null?Uc=u:s.next=u,u===null&&(Hs=s)):(s=o,(t!==0||(d&3)!==0)&&(Oc=!0)),o=u}En!==0&&En!==5||al(t),or!==0&&(or=0)}function Uv(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ge(d),w=1<<x,H=u[x];H===-1?((w&s)===0||(w&o)!==0)&&(u[x]=He(w,i)):H<=i&&(t.expiredLanes|=w),d&=~w}if(i=Kt,s=bt,s=Se(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&Qt(o),To(s)){case 2:case 8:s=M;break;case 32:s=$;break;case 268435456:s=ge;break;default:s=$}return o=Ov.bind(null,t),s=nn(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&Qt(o),t.callbackPriority=2,t.callbackNode=null,2}function Ov(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Lc()&&t.callbackNode!==s)return null;var o=bt;return o=Se(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(mv(t,o,i),Uv(t,Xt()),t.callbackNode!=null&&t.callbackNode===s?Ov.bind(null,t):null)}function Pv(t,i){if(Lc())return null;mv(t,i,!0)}function H1(){$1(function(){(Ot&6)!==0?nn(P,B1):Lv()})}function Hd(){if(or===0){var t=Ts;t===0&&(t=nt,nt<<=1,(nt&261888)===0&&(nt=256)),or=t}return or}function Iv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function zv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function G1(t,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=Iv((u[Dn]||null).action),x=o.submitter;x&&(i=(i=x[Dn]||null)?Iv(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var w=new ql("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var H=x?zv(u,x):new FormData(u);sd(s,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(w.preventDefault(),H=x?zv(u,x):new FormData(u),sd(s,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Gd=0;Gd<Mf.length;Gd++){var Vd=Mf[Gd],V1=Vd.toLowerCase(),k1=Vd[0].toUpperCase()+Vd.slice(1);Ui(V1,"on"+k1)}Ui(pg,"onAnimationEnd"),Ui(mg,"onAnimationIteration"),Ui(gg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(r1,"onTransitionRun"),Ui(s1,"onTransitionStart"),Ui(o1,"onTransitionCancel"),Ui(vg,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Fv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var x=o.length-1;0<=x;x--){var w=o[x],H=w.instance,ne=w.currentTarget;if(w=w.listener,H!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(w=o[x],H=w.instance,ne=w.currentTarget,w=w.listener,H!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}}}}function St(t,i){var s=i[Ar];s===void 0&&(s=i[Ar]=new Set);var o=t+"__bubble";s.has(o)||(Bv(i,t,2,!1),s.add(o))}function kd(t,i,s){var o=0;i&&(o|=4),Bv(s,t,o,i)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Xd(t){if(!t[Pc]){t[Pc]=!0,Vl.forEach(function(s){s!=="selectionchange"&&(X1.has(s)||kd(s,!1,t),kd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Pc]||(i[Pc]=!0,kd("selectionchange",!1,i))}}function Bv(t,i,s,o){switch(p_(i)){case 2:var u=_M;break;case 8:u=xM;break;default:u=rh}s=u.bind(null,i,s,t),u=void 0,!uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function Wd(t,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var w=o.stateNode.containerInfo;if(w===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;w!==null;){if(x=oa(w),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}w=w.parentNode}}o=o.return}Xm(function(){var ne=d,xe=lf(s),Ee=[];e:{var ce=_g.get(t);if(ce!==void 0){var fe=ql,Ye=t;switch(t){case"keypress":if(Xl(s)===0)break e;case"keydown":case"keyup":fe=zb;break;case"focusin":Ye="focus",fe=pf;break;case"focusout":Ye="blur",fe=pf;break;case"beforeblur":case"afterblur":fe=pf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Hb;break;case pg:case mg:case gg:fe=Cb;break;case vg:fe=Vb;break;case"scroll":case"scrollend":fe=Mb;break;case"wheel":fe=Xb;break;case"copy":case"cut":case"paste":fe=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Zm;break;case"toggle":case"beforetoggle":fe=qb}var ot=(i&4)!==0,jt=!ot&&(t==="scroll"||t==="scrollend"),K=ot?ce!==null?ce+"Capture":null:ce;ot=[];for(var X=ne,te;X!==null;){var be=X;if(te=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||te===null||K===null||(be=Ro(X,K),be!=null&&ot.push(sl(X,be,te))),jt)break;X=X.return}0<ot.length&&(ce=new fe(ce,Ye,null,s,xe),Ee.push({event:ce,listeners:ot}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ce&&s!==of&&(Ye=s.relatedTarget||s.fromElement)&&(oa(Ye)||Ye[jn]))break e;if((fe||ce)&&(ce=xe.window===xe?xe:(ce=xe.ownerDocument)?ce.defaultView||ce.parentWindow:window,fe?(Ye=s.relatedTarget||s.toElement,fe=ne,Ye=Ye?oa(Ye):null,Ye!==null&&(jt=c(Ye),ot=Ye.tag,Ye!==jt||ot!==5&&ot!==27&&ot!==6)&&(Ye=null)):(fe=null,Ye=ne),fe!==Ye)){if(ot=jm,be="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Zm,be="onPointerLeave",K="onPointerEnter",X="pointer"),jt=fe==null?ce:Cr(fe),te=Ye==null?ce:Cr(Ye),ce=new ot(be,X+"leave",fe,s,xe),ce.target=jt,ce.relatedTarget=te,be=null,oa(xe)===ne&&(ot=new ot(K,X+"enter",Ye,s,xe),ot.target=te,ot.relatedTarget=jt,be=ot),jt=be,fe&&Ye)t:{for(ot=W1,K=fe,X=Ye,te=0,be=K;be;be=ot(be))te++;be=0;for(var at=X;at;at=ot(at))be++;for(;0<te-be;)K=ot(K),te--;for(;0<be-te;)X=ot(X),be--;for(;te--;){if(K===X||X!==null&&K===X.alternate){ot=K;break t}K=ot(K),X=ot(X)}ot=null}else ot=null;fe!==null&&Hv(Ee,ce,fe,ot,!1),Ye!==null&&jt!==null&&Hv(Ee,jt,Ye,ot,!0)}}e:{if(ce=ne?Cr(ne):window,fe=ce.nodeName&&ce.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ce.type==="file")var Nt=ig;else if(tg(ce))if(ag)Nt=n1;else{Nt=e1;var Ke=Jb}else fe=ce.nodeName,!fe||fe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ne&&It(ne.elementType)&&(Nt=ig):Nt=t1;if(Nt&&(Nt=Nt(t,ne))){ng(Ee,Nt,s,xe);break e}Ke&&Ke(t,ce,ne),t==="focusout"&&ne&&ce.type==="number"&&ne.memoizedProps.value!=null&&xt(ce,"number",ce.value)}switch(Ke=ne?Cr(ne):window,t){case"focusin":(tg(Ke)||Ke.contentEditable==="true")&&(vs=Ke,yf=ne,Po=null);break;case"focusout":Po=yf=vs=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,dg(Ee,s,xe);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":dg(Ee,s,xe)}var vt;if(gf)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else gs?Jm(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(Km&&s.locale!=="ko"&&(gs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&gs&&(vt=Wm()):(Wa=xe,ff="value"in Wa?Wa.value:Wa.textContent,gs=!0)),Ke=Ic(ne,Mt),0<Ke.length&&(Mt=new Ym(Mt,t,null,s,xe),Ee.push({event:Mt,listeners:Ke}),vt?Mt.data=vt:(vt=eg(s),vt!==null&&(Mt.data=vt)))),(vt=Yb?Zb(t,s):Kb(t,s))&&(Mt=Ic(ne,"onBeforeInput"),0<Mt.length&&(Ke=new Ym("onBeforeInput","beforeinput",null,s,xe),Ee.push({event:Ke,listeners:Mt}),Ke.data=vt)),G1(Ee,t,ne,s,xe)}Fv(Ee,i)})}function sl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ic(t,i){for(var s=i+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ro(t,s),u!=null&&o.unshift(sl(t,u,d)),u=Ro(t,i),u!=null&&o.push(sl(t,u,d))),t.tag===3)return o;t=t.return}return[]}function W1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hv(t,i,s,o,u){for(var d=i._reactName,x=[];s!==null&&s!==o;){var w=s,H=w.alternate,ne=w.stateNode;if(w=w.tag,H!==null&&H===o)break;w!==5&&w!==26&&w!==27||ne===null||(H=ne,u?(ne=Ro(s,d),ne!=null&&x.unshift(sl(s,ne,H))):u||(ne=Ro(s,d),ne!=null&&x.push(sl(s,ne,H)))),s=s.return}x.length!==0&&t.push({event:i,listeners:x})}var q1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function Gv(t){return(typeof t=="string"?t:""+t).replace(q1,`
`).replace(j1,"")}function Vv(t,i){return i=Gv(i),Gv(t)===i}function qt(t,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&si(t,""+o);break;case"className":je(t,"class",o);break;case"tabIndex":je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,s,o);break;case"style":Li(t,o,d);break;case"data":if(i!=="object"){je(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&qt(t,i,"name",u.name,u,null),qt(t,i,"formEncType",u.formEncType,u,null),qt(t,i,"formMethod",u.formMethod,u,null),qt(t,i,"formTarget",u.formTarget,u,null)):(qt(t,i,"encType",u.encType,u,null),qt(t,i,"method",u.method,u,null),qt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=ca);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=wr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,Ie(t,s,o))}}function qd(t,i,s,o,u,d){switch(s){case"style":Li(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Ie(t,s,o)}}}function On(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,d,x,s,null)}}u&&qt(t,i,"srcSet",s.srcSet,s,null),o&&qt(t,i,"src",s.src,s,null);return;case"input":St("invalid",t);var w=d=x=u=null,H=null,ne=null;for(o in s)if(s.hasOwnProperty(o)){var xe=s[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":x=xe;break;case"checked":H=xe;break;case"defaultChecked":ne=xe;break;case"value":d=xe;break;case"defaultValue":w=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,i));break;default:qt(t,i,o,xe,s,null)}}Fn(t,d,w,H,ne,x,u,!1);return;case"select":St("invalid",t),o=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(w=s[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":x=w;break;case"multiple":o=w;default:qt(t,i,u,w,s,null)}i=d,s=x,t.multiple=!!o,i!=null?Mn(t,!!o,i,!1):s!=null&&Mn(t,!!o,s,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(w=s[x],w!=null))switch(x){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:qt(t,i,x,w,s,null)}Ni(t,o,u,d);return;case"option":for(H in s)s.hasOwnProperty(H)&&(o=s[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,i,H,o,s,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<rl.length;o++)St(rl[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(o=s[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,ne,o,s,null)}return;default:if(It(i)){for(xe in s)s.hasOwnProperty(xe)&&(o=s[xe],o!==void 0&&qd(t,i,xe,o,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(o=s[w],o!=null&&qt(t,i,w,o,s,null))}function Y1(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,w=null,H=null,ne=null,xe=null;for(fe in s){var Ee=s[fe];if(s.hasOwnProperty(fe)&&Ee!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=Ee;default:o.hasOwnProperty(fe)||qt(t,i,fe,null,o,Ee)}}for(var ce in o){var fe=o[ce];if(Ee=s[ce],o.hasOwnProperty(ce)&&(fe!=null||Ee!=null))switch(ce){case"type":d=fe;break;case"name":u=fe;break;case"checked":ne=fe;break;case"defaultChecked":xe=fe;break;case"value":x=fe;break;case"defaultValue":w=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:fe!==Ee&&qt(t,i,ce,fe,o,Ee)}}Ve(t,x,w,H,ne,xe,d,u);return;case"select":fe=x=w=ce=null;for(d in s)if(H=s[d],s.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(d)||qt(t,i,d,null,o,H)}for(u in o)if(d=o[u],H=s[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ce=d;break;case"defaultValue":w=d;break;case"multiple":x=d;default:d!==H&&qt(t,i,u,d,o,H)}i=w,s=x,o=fe,ce!=null?Mn(t,!!s,ce,!1):!!o!=!!s&&(i!=null?Mn(t,!!s,i,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":fe=ce=null;for(w in s)if(u=s[w],s.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:qt(t,i,w,null,o,u)}for(x in o)if(u=o[x],d=s[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ce=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&qt(t,i,x,u,o,d)}ri(t,ce,fe);return;case"option":for(var Ye in s)ce=s[Ye],s.hasOwnProperty(Ye)&&ce!=null&&!o.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:qt(t,i,Ye,null,o,ce));for(H in o)ce=o[H],fe=s[H],o.hasOwnProperty(H)&&ce!==fe&&(ce!=null||fe!=null)&&(H==="selected"?t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol":qt(t,i,H,ce,o,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)ce=s[ot],s.hasOwnProperty(ot)&&ce!=null&&!o.hasOwnProperty(ot)&&qt(t,i,ot,null,o,ce);for(ne in o)if(ce=o[ne],fe=s[ne],o.hasOwnProperty(ne)&&ce!==fe&&(ce!=null||fe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:qt(t,i,ne,ce,o,fe)}return;default:if(It(i)){for(var jt in s)ce=s[jt],s.hasOwnProperty(jt)&&ce!==void 0&&!o.hasOwnProperty(jt)&&qd(t,i,jt,void 0,o,ce);for(xe in o)ce=o[xe],fe=s[xe],!o.hasOwnProperty(xe)||ce===fe||ce===void 0&&fe===void 0||qd(t,i,xe,ce,o,fe);return}}for(var K in s)ce=s[K],s.hasOwnProperty(K)&&ce!=null&&!o.hasOwnProperty(K)&&qt(t,i,K,null,o,ce);for(Ee in o)ce=o[Ee],fe=s[Ee],!o.hasOwnProperty(Ee)||ce===fe||ce==null&&fe==null||qt(t,i,Ee,ce,o,fe)}function kv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,x=u.initiatorType,w=u.duration;if(d&&w&&kv(x)){for(x=0,w=u.responseEnd,o+=1;o<s.length;o++){var H=s[o],ne=H.startTime;if(ne>w)break;var xe=H.transferSize,Ee=H.initiatorType;xe&&kv(Ee)&&(H=H.responseEnd,x+=xe*(H<w?1:(w-ne)/(H-ne)))}if(--o,i+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jd=null,Yd=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function Xv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Zd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kd=null;function K1(){var t=window.event;return t&&t.type==="popstate"?t===Kd?!1:(Kd=t,!0):(Kd=null,!1)}var qv=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,jv=typeof Promise=="function"?Promise:void 0,$1=typeof queueMicrotask=="function"?queueMicrotask:typeof jv<"u"?function(t){return jv.resolve(null).then(t).catch(J1)}:qv;function J1(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function Yv(t,i){var s=i,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Xs(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")ol(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ol(s);for(var d=s.firstChild;d;){var x=d.nextSibling,w=d.nodeName;d[Ga]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&ol(t.ownerDocument.body);s=u}while(s);Xs(i)}function Zv(t,i){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function Qd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Qd(s),Va(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function eM(t,i,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ga])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function tM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function Kv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ei(t.nextSibling),t===null))return null;return t}function $d(t){return t.data==="$?"||t.data==="$~"}function Jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var eh=null;function Qv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ei(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function $v(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Jv(t,i,s){switch(i=zc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ol(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Va(t)}var Ti=new Map,e_=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=V.d;V.d={f:iM,r:aM,D:rM,C:sM,L:oM,m:lM,X:uM,S:cM,M:fM};function iM(){var t=Ta.f(),i=wc();return t||i}function aM(t){var i=la(t);i!==null&&i.tag===5&&i.type==="form"?v0(i):Ta.r(t)}var Gs=typeof document>"u"?null:document;function t_(t,i,s){var o=Gs;if(o&&typeof i=="string"&&i){var u=Bt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),e_.has(u)||(e_.add(u),t={rel:t,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),On(i,"link",t),gn(i),o.head.appendChild(i)))}}function rM(t){Ta.D(t),t_("dns-prefetch",t,null)}function sM(t,i){Ta.C(t,i),t_("preconnect",t,i)}function oM(t,i,s){Ta.L(t,i,s);var o=Gs;if(o&&t&&i){var u='link[rel="preload"][as="'+Bt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Bt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Bt(s.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var d=u;switch(i){case"style":d=Vs(t);break;case"script":d=ks(t)}Ti.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ti.set(d,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(ll(d))||i==="script"&&o.querySelector(cl(d))||(i=o.createElement("link"),On(i,"link",t),gn(i),o.head.appendChild(i)))}}function lM(t,i){Ta.m(t,i);var s=Gs;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ks(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},i),Ti.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(cl(d)))return}o=s.createElement("link"),On(o,"link",t),gn(o),s.head.appendChild(o)}}}function cM(t,i,s){Ta.S(t,i,s);var o=Gs;if(o&&t){var u=ka(o).hoistableStyles,d=Vs(t);i=i||"default";var x=u.get(d);if(!x){var w={loading:0,preload:null};if(x=o.querySelector(ll(d)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ti.get(d))&&th(t,s);var H=x=o.createElement("link");gn(H),On(H,"link",t),H._p=new Promise(function(ne,xe){H.onload=ne,H.onerror=xe}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Bc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:w},u.set(d,x)}}}function uM(t,i){Ta.X(t,i);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0},i),(i=Ti.get(u))&&nh(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function fM(t,i){Ta.M(t,i);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0,type:"module"},i),(i=Ti.get(u))&&nh(t,i),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function n_(t,i,s,o){var u=(u=ee.current)?Fc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vs(s.href),s=ka(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vs(s.href);var d=ka(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(ll(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||dM(u,t,s,x.state))),i&&o===null)throw Error(a(528,""));return x}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ks(s),s=ka(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Vs(t){return'href="'+Bt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function i_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function dM(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),On(i,"link",s),gn(i),t.head.appendChild(i))}function ks(t){return'[src="'+Bt(t)+'"]'}function cl(t){return"script[async]"+t}function a_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(s.href)+'"]');if(o)return i.instance=o,gn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),On(o,"style",u),Bc(o,s.precedence,t),i.instance=o;case"stylesheet":u=Vs(s.href);var d=t.querySelector(ll(u));if(d)return i.state.loading|=4,i.instance=d,gn(d),d;o=i_(s),(u=Ti.get(u))&&th(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(w,H){x.onload=w,x.onerror=H}),On(d,"link",o),i.state.loading|=4,Bc(d,s.precedence,t),i.instance=d;case"script":return d=ks(s.src),(u=t.querySelector(cl(d)))?(i.instance=u,gn(u),u):(o=s,(u=Ti.get(d))&&(o=v({},s),nh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),On(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Bc(o,s.precedence,t));return i.instance}function Bc(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var w=o[x];if(w.dataset.precedence===i)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function th(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function nh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Hc=null;function r_(t,i,s){if(Hc===null){var o=new Map,u=Hc=new Map;u.set(s,o)}else u=Hc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ga]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=t+x;var w=o.get(x);w?w.push(d):o.set(x,[d])}}return o}function s_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function hM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function o_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function pM(t,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Vs(o.href),d=i.querySelector(ll(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Gc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=i.ownerDocument||i,o=i_(o),(u=Ti.get(u))&&th(o,u),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(w,H){x.onload=w,x.onerror=H}),On(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Gc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var ih=0;function mM(t,i){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&ih===0&&(ih=62500*Z1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>ih?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function kc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,i.forEach(gM,t),Vc=null,Gc.call(t))}function gM(t,i){if(!(i.state.loading&4)){var s=Vc.get(t);if(s)var o=s.get(null);else{s=new Map,Vc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,u),s.set(x,u),this.count++,o=Gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var ul={$$typeof:F,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function vM(t,i,s,o,u,d,x,w,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function l_(t,i,s,o,u,d,x,w,H,ne,xe,Ee){return t=new vM(t,i,s,x,H,ne,xe,Ee,w),i=1,d===!0&&(i|=24),d=li(3,null,null,i),t.current=d,d.stateNode=t,i=If(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Hf(d),t}function c_(t){return t?(t=ys,t):ys}function u_(t,i,s,o,u,d){u=c_(u),o.context===null?o.context=u:o.pendingContext=u,o=Qa(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=$a(t,o,i),s!==null&&(Jn(s,t,i),Vo(s,t,i))}function f_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ah(t,i){f_(t,i),(t=t.alternate)&&f_(t,i)}function d_(t){if(t.tag===13||t.tag===31){var i=Ur(t,67108864);i!==null&&Jn(i,t,67108864),ah(t,67108864)}}function h_(t){if(t.tag===13||t.tag===31){var i=hi();i=Eo(i);var s=Ur(t,i);s!==null&&Jn(s,t,i),ah(t,i)}}var Xc=!0;function _M(t,i,s,o){var u=U.T;U.T=null;var d=V.p;try{V.p=2,rh(t,i,s,o)}finally{V.p=d,U.T=u}}function xM(t,i,s,o){var u=U.T;U.T=null;var d=V.p;try{V.p=8,rh(t,i,s,o)}finally{V.p=d,U.T=u}}function rh(t,i,s,o){if(Xc){var u=sh(o);if(u===null)Wd(t,i,o,Wc,s),m_(t,o);else if(SM(u,t,i,s,o))o.stopPropagation();else if(m_(t,o),i&4&&-1<yM.indexOf(t)){for(;u!==null;){var d=la(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=De(d.pendingLanes);if(x!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var H=1<<31-Ge(x);w.entanglements[1]|=H,x&=~H}Ki(d),(Ot&6)===0&&(Rc=Xt()+500,al(0))}}break;case 31:case 13:w=Ur(d,2),w!==null&&Jn(w,d,2),wc(),ah(d,2)}if(d=sh(o),d===null&&Wd(t,i,o,Wc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Wd(t,i,o,null,s)}}function sh(t){return t=lf(t),oh(t)}var Wc=null;function oh(t){if(Wc=null,t=oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Wc=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case P:return 2;case M:return 8;case $:case oe:return 32;case ge:return 268435456;default:return 32}default:return 32}}var lh=!1,cr=null,ur=null,fr=null,fl=new Map,dl=new Map,dr=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(t,i){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function hl(t,i,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=la(i),i!==null&&d_(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function SM(t,i,s,o,u){switch(i){case"focusin":return cr=hl(cr,t,i,s,o,u),!0;case"dragenter":return ur=hl(ur,t,i,s,o,u),!0;case"mouseover":return fr=hl(fr,t,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return fl.set(d,hl(fl.get(d)||null,t,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,dl.set(d,hl(dl.get(d)||null,t,i,s,o,u)),!0}return!1}function g_(t){var i=oa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,hs(t.priority,function(){h_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,hs(t.priority,function(){h_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=sh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);of=o,s.target.dispatchEvent(o),of=null}else return i=la(s),i!==null&&d_(i),t.blockedOn=s,!1;i.shift()}return!0}function v_(t,i,s){qc(t)&&s.delete(i)}function bM(){lh=!1,cr!==null&&qc(cr)&&(cr=null),ur!==null&&qc(ur)&&(ur=null),fr!==null&&qc(fr)&&(fr=null),fl.forEach(v_),dl.forEach(v_)}function jc(t,i){t.blockedOn===i&&(t.blockedOn=null,lh||(lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bM)))}var Yc=null;function __(t){Yc!==t&&(Yc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(oh(o||s)===null)continue;break}var d=la(s);d!==null&&(t.splice(i,3),i-=3,sd(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Xs(t){function i(H){return jc(H,t)}cr!==null&&jc(cr,t),ur!==null&&jc(ur,t),fr!==null&&jc(fr,t),fl.forEach(i),dl.forEach(i);for(var s=0;s<dr.length;s++){var o=dr[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<dr.length&&(s=dr[0],s.blockedOn===null);)g_(s),s.blockedOn===null&&dr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],x=u[Dn]||null;if(typeof d=="function")x||__(s);else if(x){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Dn]||null)w=x.formAction;else if(oh(u)!==null)continue}else w=x.action;typeof w=="function"?s[o+1]=w:(s.splice(o,3),o-=3),__(s)}}}function x_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function ch(t){this._internalRoot=t}Zc.prototype.render=ch.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=hi();u_(s,o,t,i,null,null)},Zc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;u_(t.current,2,null,t,null,null),wc(),i[jn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ao();t={blockedOn:null,target:t,priority:i};for(var s=0;s<dr.length&&i!==0&&i<dr[s].priority;s++);dr.splice(s,0,t),s===0&&g_(t)}};var y_=e.version;if(y_!=="19.2.8")throw Error(a(527,y_,"19.2.8"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var MM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{me=Kc.inject(MM),ve=Kc}catch{}}return ml.createRoot=function(t,i){if(!l(t))throw Error(a(299));var s=!1,o="",u=R0,d=C0,x=w0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=l_(t,1,!1,null,null,s,o,null,u,d,x,x_),t[jn]=i.current,Xd(t),new ch(i)},ml.hydrateRoot=function(t,i,s){if(!l(t))throw Error(a(299));var o=!1,u="",d=R0,x=C0,w=w0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=l_(t,1,!0,i,s??null,o,u,H,d,x,w,x_),i.context=c_(null),s=i.current,o=hi(),o=Eo(o),u=Qa(o),u.callback=null,$a(s,u,o),s=o,i.current.lanes=s,We(i,s),Ki(i),t[jn]=i.current,Xd(t),new Zc(i)},ml.version="19.2.8",ml}var ox;function g2(){if(ox)return vh.exports;ox=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vh.exports=m2(),vh.exports}var v2=g2();function Sh(r){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${r}-${e}`}function lx(r){return{id:r.message_id,role:r.role,content:r.content}}function qr(r,e,n,a){return r.map(l=>l.id!==e?l:{...l,content:n,streaming:a})}function _2(r,e,n){return e?r.find(a=>a.conversation_id===e)?.title??n:n}function x2(r,e){const[n,a]=ke.useState([]),[l,c]=ke.useState(null),f=l,[h,m]=ke.useState([]),[p,_]=ke.useState(""),[v,g]=ke.useState("idle"),[S,E]=ke.useState(null),[D,b]=ke.useState(null),[y,I]=ke.useState(null),[F,N]=ke.useState(null),[O,L]=ke.useState([]),B=ke.useRef(0),T=ke.useRef(null);ke.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const z=ke.useMemo(()=>_2(n,l,e.newConversationTitle),[l,n,e.newConversationTitle]),q=v!=="idle";ke.useEffect(()=>{let A=!0;async function G(){try{let se=await r.listConversations(),Me=localStorage.getItem(e.storageKey);se.some(ue=>ue.conversation_id===Me)||(Me=se[0]?.conversation_id??null),Me||(Me=(await r.createConversation()).conversation_id,se=await r.listConversations());const ee=await r.loadMessages(Me);if(!A)return;a(se),c(Me),m(ee.map(lx)),localStorage.setItem(e.storageKey,Me)}catch(se){A&&N(se instanceof Error?se.message:e.wakeErrorMessage)}}return G(),()=>{A=!1}},[r,e.storageKey,e.wakeErrorMessage]);async function k(){a(await r.listConversations())}async function Z(){if(q||h.length===0)return!1;const A=await r.createConversation();return c(A.conversation_id),m([]),b(null),E(null),I(null),localStorage.setItem(e.storageKey,A.conversation_id),await k(),!0}async function de(A){if(!q){if(await r.deleteConversation(A),A===f){const G=(await r.listConversations()).filter(se=>se.conversation_id!==A);G.length>0?await Q(G[0].conversation_id):await Z()}await k()}}async function he(A){return r.getPassage(A)}async function Q(A){if(q||A===l)return!1;const G=B.current+1;B.current=G;const se=await r.loadMessages(A);return B.current!==G?!1:(c(A),m(se.map(lx)),b(null),E(null),I(null),localStorage.setItem(e.storageKey,A),!0)}function U(A,G,se){if(A.type==="delta"){T.current&&clearTimeout(T.current),L([]);const Me=se+A.text;return m(Re=>qr(Re,G,Me,!0)),{text:Me,terminal:!1}}return A.type==="completed"?(m(Me=>qr(Me,G,A.text,!1)),E(G),{text:A.text,terminal:!0}):A.type==="tool"?(L([{name:A.name,status:A.status,detail:A.detail,preview:A.preview,handles:A.handles}]),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>L([]),3500),{text:se,terminal:!1}):(m(Me=>qr(Me,G,se,!1)),I(A.message),{text:se,terminal:!0})}async function V(A){if(!l||q)return;const G=Sh("assistant");_(""),b(A),E(null),I(null),L([]),g("streaming"),m(Re=>[...Re,{id:Sh("owner"),role:"owner",content:A},{id:G,role:"weaver",content:"",streaming:!0}]);let se="",Me=!1;try{for await(const Re of r.streamTurn(l,A)){const ee=U(Re,G,se);if(se=ee.text,Me=ee.terminal,ee.terminal)break}Me||(m(Re=>qr(Re,G,se,!1)),I(e.incompleteTurnMessage))}catch(Re){m(ue=>qr(ue,G,se,!1));const ee=Re instanceof Error?Re.message:e.connectionLostMessage;I(Re instanceof Error?`${ee} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await k()}catch{}}}async function J(){if(!(!l||v!=="streaming")){g("cancelling");try{await r.cancelTurn(l)}catch(A){I(A instanceof Error?A.message:e.cancelFailedMessage),g("streaming")}}}function pe(){D&&v==="idle"&&V(D)}async function Te(){if(!l||v!=="idle"||!D)return;const A=Sh("assistant");E(null),I(null),L([]),g("streaming"),m(Me=>[...Me,{id:A,role:"weaver",content:"",streaming:!0}]);let G="",se=!1;try{for await(const Me of r.retryTurn(l)){const Re=U(Me,A,G);if(G=Re.text,se=Re.terminal,Re.terminal)break}se||(m(Me=>qr(Me,A,G,!1)),I(e.incompleteTurnMessage))}catch(Me){m(ee=>qr(ee,A,G,!1));const Re=Me instanceof Error?Me.message:e.connectionLostMessage;I(Me instanceof Error?`${Re} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await k()}catch{}}}return{activeTitle:z,activity:O,bootError:F,cancelTurn:J,conversationId:l,conversations:n,createConversation:Z,deleteConversation:de,loadPassage:he,draft:p,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:pe,retryLastTurn:Te,selectConversation:Q,sendMessage:V,setDraft:_,turnActive:q,turnState:v}}const Ai={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."};var y2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},S2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},b2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},M2={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},E2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},T2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},A2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},R2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},C2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},w2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},D2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},N2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},L2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},U2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},O2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},P2={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function I2(r){return r=r-0,r===r}function NS(r){return I2(r)?r:(r=r.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),r.charAt(0).toLowerCase()+r.slice(1))}var z2=(r,e)=>pm.createElement("stop",{key:`${e}-${r.offset}`,offset:r.offset,stopColor:r.color,...r.opacity!==void 0&&{stopOpacity:r.opacity}});function F2(r){return r.charAt(0).toUpperCase()+r.slice(1)}var qs=new Map,B2=1e3;function H2(r){if(qs.has(r))return qs.get(r);const e={};let n=0;const a=r.length;for(;n<a;){const l=r.indexOf(";",n),c=l===-1?a:l,f=r.slice(n,c).trim();if(f){const h=f.indexOf(":");if(h>0){const m=f.slice(0,h).trim(),p=f.slice(h+1).trim();if(m&&p){const _=NS(m);e[_.startsWith("webkit")?F2(_):_]=p}}}n=c+1}if(qs.size===B2){const l=qs.keys().next().value;l&&qs.delete(l)}return qs.set(r,e),e}function LS(r,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(v=>{let g=v;return("fill"in n||n.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),LS(r,g)}),l=e.attributes||{},c={};for(const[v,g]of Object.entries(l))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=H2(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[NS(v)]=g}const{style:f,role:h,"aria-label":m,gradientFill:p,..._}=n;if(f&&(c.style=c.style?{...c.style,...f}:f),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;a.unshift(r(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(z2)))}return r(e.tag,{...c,..._},...a)}var G2=LS.bind(null,pm.createElement),cx=(r,e)=>{const n=ke.useId();return r||(e?n:void 0)},V2=class{constructor(r="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=r,this.enabled=e}log(...r){this.enabled&&console.log(`[${this.scope}]`,...r)}warn(...r){this.enabled&&console.warn(`[${this.scope}]`,...r)}error(...r){this.enabled&&console.error(`[${this.scope}]`,...r)}},k2="searchPseudoElementsFullScan"in ls&&typeof ls.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",X2=Number.parseInt(k2)>=7,W2=()=>X2,wl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},q2={left:"fa-pull-left",right:"fa-pull-right"},j2={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Y2={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ii={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function Z2(r){const e=ls.cssPrefix||ls.familyPrefix||wl;return e===wl?r:r.replace(new RegExp(String.raw`(?<=^|\s)${wl}-`,"g"),`${e}-`)}function K2(r){const{beat:e,fade:n,beatFade:a,bounce:l,shake:c,spin:f,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:E,rotation:D,pull:b,swapOpacity:y,rotateBy:I,widthAuto:F,canvasSquare:N,canvasRoomy:O,flip360:L,buzz:B,float:T,jello:z,spinSnap:q,spinSnap4:k,spinSnap8:Z,swing:de,wag:he,className:Q}=r,U=[];return Q&&U.push(...Q.split(" ")),e&&U.push(Cn.beat),n&&U.push(Cn.fade),a&&U.push(Cn.beatFade),l&&U.push(Cn.bounce),c&&U.push(Cn.shake),f&&U.push(Cn.spin),m&&U.push(Cn.spinReverse),h&&U.push(Cn.spinPulse),p&&U.push(Cn.pulse),_&&U.push(Ii.fixedWidth),v&&U.push(Ii.inverse),g&&U.push(Ii.border),S===!0&&U.push(Ii.flip),(S==="horizontal"||S==="both")&&U.push(Ii.flipHorizontal),(S==="vertical"||S==="both")&&U.push(Ii.flipVertical),E!=null&&U.push(Y2[E]),D!=null&&D!==0&&U.push(j2[D]),b!=null&&U.push(q2[b]),y&&U.push(Ii.swapOpacity),W2()?(I&&U.push(Ii.rotateBy),F&&U.push(Ii.widthAuto),N&&U.push(Ii.canvasSquare),O&&U.push(Ii.canvasRoomy),L&&U.push(Cn.flip360),B&&U.push(Cn.buzz),T&&U.push(Cn.float),z&&U.push(Cn.jello),q&&U.push(Cn.spinSnap),k&&U.push(Cn.spinSnap4),Z&&U.push(Cn.spinSnap8),de&&U.push(Cn.swing),he&&U.push(Cn.wag),(ls.cssPrefix||ls.familyPrefix||wl)===wl?U:U.map(Z2)):U}var Q2=r=>typeof r=="object"&&"icon"in r&&!!r.icon;function ux(r){if(r)return Q2(r)?r:DS.icon(r)}function $2(r){return Object.keys(r)}var fx=new V2("FontAwesomeIcon"),US={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},J2=new Set(Object.keys(US)),zn=pm.forwardRef((r,e)=>{const n={...US,...r},{icon:a,mask:l,symbol:c,title:f,titleId:h,maskId:m,transform:p}=n,_=cx(m,!!l),v=cx(h,!!f),g=ux(a);if(!g)return fx.error("Icon lookup is undefined",a),null;const S=K2(n),E=typeof p=="string"?DS.transform(p):p,D=ux(l),b=u2(g,{...S.length>0&&{classes:S},...E&&{transform:E},...D&&{mask:D},symbol:c,title:f,titleId:v,maskId:_});if(!b)return fx.error("Could not find icon",g),null;const{abstract:y}=b,I={ref:e};for(const F of $2(n))J2.has(F)||(I[F]=n[F]);return G2(y[0],I)});zn.displayName="FontAwesomeIcon";function e3(r){return R.jsx(zn,{"aria-hidden":"true",icon:A2,...r})}function dx(r){return R.jsx(zn,{"aria-hidden":"true",icon:U2,...r})}function t3(r){return R.jsx(zn,{"aria-hidden":"true",icon:L2,...r})}function n3(r){return R.jsx(zn,{"aria-hidden":"true",icon:C2,...r})}function i3(r){return R.jsx(zn,{"aria-hidden":"true",icon:O2,...r})}function a3(r){return R.jsx(zn,{"aria-hidden":"true",icon:E2,...r})}function OS(r){return R.jsx(zn,{"aria-hidden":"true",icon:y2,...r})}function r3(r){return R.jsx(zn,{"aria-hidden":"true",icon:N2,...r})}function PS(r){return R.jsx(zn,{"aria-hidden":"true",icon:T2,...r})}function s3(r){return R.jsx(zn,{"aria-hidden":"true",icon:S2,...r})}function o3(r){return R.jsx(zn,{"aria-hidden":"true",icon:w2,...r})}function yp(r){return R.jsx(zn,{"aria-hidden":"true",icon:D2,...r})}function hx(r){return R.jsx(zn,{"aria-hidden":"true",icon:P2,...r})}function l3(r){return R.jsx(zn,{"aria-hidden":"true",icon:R2,...r})}function c3(r){return R.jsx(zn,{"aria-hidden":"true",icon:M2,...r})}const u3=["awakened","ascended","transcendent"];function f3({cancelling:r,draft:e,inputLabel:n="Message assistant",onCancel:a,onDraftChange:l,onSubmit:c,onTierChange:f,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const E=ke.useRef(null),D=v??E,b=ke.useRef(null),[y,I]=ke.useState(!1);ke.useEffect(()=>{const O=D.current;O&&(O.style.height="auto",O.style.height=`${Math.min(O.scrollHeight,160)}px`)},[e,D]),ke.useEffect(()=>{if(!y)return;function O(B){b.current&&!b.current.contains(B.target)&&I(!1)}function L(B){B.key==="Escape"&&I(!1)}return document.addEventListener("pointerdown",O),document.addEventListener("keydown",L),()=>{document.removeEventListener("pointerdown",O),document.removeEventListener("keydown",L)}},[y]);function F(){const O=e.trim();!O||S||c(O)}function N(O){O.key!=="Enter"||O.shiftKey||(O.preventDefault(),F())}return R.jsx("div",{className:"composer-wrap",children:R.jsxs("div",{className:"composer-shell",children:[R.jsx("textarea",{"aria-label":n,disabled:S,onChange:O=>l(O.target.value),onKeyDown:N,placeholder:h,ref:D,rows:1,value:e}),R.jsxs("div",{className:"composer-tier",ref:b,children:[R.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>I(O=>!O),type:"button",children:[R.jsx("span",{className:"tier-pill-name",children:g}),R.jsx(yp,{})]}),y&&R.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:u3.map(O=>R.jsx("li",{children:R.jsxs("button",{"aria-selected":O===g,onClick:()=>{f(O),I(!1)},role:"option",type:"button",children:[R.jsx("span",{className:"tier-menu-check",children:O===g?"✦":""}),O]})},O))})]}),S?R.jsx("button",{"aria-label":r?_:p,className:"composer-action composer-stop",disabled:r,onClick:a,type:"button",children:R.jsx(i3,{})}):R.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:F,type:"button",children:R.jsx(e3,{})})]})})}const d3=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function h3(r){try{const e=new URL(r);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function bh(r,e){if(!e)return;const n=r.at(-1);if(n?.type==="text"){n.value+=e;return}r.push({type:"text",value:e})}function tu(r){const e=[];let n=0;for(const a of r.matchAll(d3)){const l=a.index??0;bh(e,r.slice(n,l));const c=a[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const f=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=f?.[2]??"";f&&h3(h)?e.push({type:"link",label:f[1],href:h}):bh(e,c)}n=l+c.length}return bh(e,r.slice(n)),e}function p3(r){const e=r.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function m3(r){const e=[],n=String(r??"").split(/\r?\n/);let a=0;for(;a<n.length;){const l=n[a].trim();if(!l){a+=1;continue}if(l.startsWith("```")){const p=[];for(a+=1;a<n.length&&!n[a].trimStart().startsWith("```");)p.push(n[a]),a+=1;a<n.length&&(a+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(l);if(c){e.push({type:"heading",level:c[1].length,children:tu(c[2])}),a+=1;continue}if(l.startsWith(">")){e.push({type:"quote",children:tu(l.replace(/^>\s?/,""))}),a+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){e.push({type:"rule"}),a+=1;continue}const f=/^[-*]\s+/.test(l),h=/^\d+[.)]\s+/.test(l);if(f||h){const p=[];for(;a<n.length;){const _=n[a].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(tu(v[1])),a+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;a<n.length;){const p=n[a].trim();if(!p||m.length>0&&p3(p))break;m.push(p),a+=1}e.push({type:"paragraph",children:tu(m.join(" "))})}return e}function lo(r){return r.map((e,n)=>{const a=`${e.type}-${n}`;return e.type==="text"?R.jsx(ke.Fragment,{children:e.value},a):e.type==="strong"?R.jsx("strong",{children:lo(e.children)},a):e.type==="emphasis"?R.jsx("em",{children:lo(e.children)},a):e.type==="code"?R.jsx("code",{children:e.value},a):R.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},a)})}function g3({children:r}){return m3(r).map((n,a)=>{const l=`${n.type}-${a}`;if(n.type==="paragraph")return R.jsx("p",{children:lo(n.children)},l);if(n.type==="heading"){const f=`h${n.level}`;return R.jsx(f,{children:lo(n.children)},l)}if(n.type==="code")return R.jsx("pre",{children:R.jsx("code",{children:n.value})},l);if(n.type==="quote")return R.jsx("blockquote",{children:lo(n.children)},l);if(n.type==="rule")return R.jsx("hr",{},l);const c=n.ordered?"ol":"ul";return R.jsx(c,{children:n.items.map((f,h)=>R.jsx("li",{children:lo(f)},`${l}-${h}`))},l)})}const v3={semantic_search:{doing:"searching the library",done:"searched the library"},read_chapters:{doing:"recalling a passage",done:"recalled a passage"},find_text:{doing:"finding the words",done:"found the words"},browse_chapters:{doing:"browsing the chapters",done:"browsed the chapters"},who_is:{doing:"consulting the notebook",done:"consulted the notebook"}};function _3(r,e,n){const a=v3[r];return a?e==="start"?`weaver is ${a.doing}`:`weaver has ${a.done}`:e==="start"?`${r} ${n||"started"}`.trim():`${r} ${n||"done"}`.trim()}function x3({Mark:r,activity:e,assistantName:n,message:a,onQuote:l,onRegenerate:c,onViewPassage:f,regenerateLabel:h}){const[m,p]=ke.useState(!1),[_,v]=ke.useState(null),[g,S]=ke.useState(null),E=ke.useRef(null);ke.useEffect(()=>{function b(){if(a.role!=="weaver"||!l||!E.current)return;const y=window.getSelection(),I=y?y.toString().trim():"",F=E.current,N=y&&y.rangeCount>0&&F.contains(y.getRangeAt(0).commonAncestorContainer);if(I.length>=2&&N){const O=y.getRangeAt(0).getBoundingClientRect();v(I),S({top:O.bottom+6,left:O.left})}else v(null),S(null)}return document.addEventListener("selectionchange",b),()=>document.removeEventListener("selectionchange",b)},[a.role,l]);async function D(){await navigator.clipboard?.writeText(a.content),p(!0),window.setTimeout(()=>p(!1),1400)}return a.role==="owner"?R.jsx("article",{className:"message message-owner",children:R.jsxs("div",{className:"owner-message-content",children:[R.jsx("div",{className:"owner-bubble",children:a.content}),R.jsx("div",{className:"message-actions",children:R.jsxs("button",{"aria-label":"Copy owner message",onClick:D,type:"button",children:[R.jsx(dx,{}),R.jsx("span",{children:m?"Copied":"Copy"})]})})]})}):R.jsxs("article",{className:`message message-weaver ${a.streaming?"message-streaming":""}`,children:[R.jsx("div",{className:"weaver-avatar",children:R.jsx(r,{compact:!0})}),R.jsxs("div",{className:"weaver-message-content",children:[R.jsx("div",{className:"message-role",children:n}),e&&R.jsxs("p",{className:`spell-line spell-line-${e.status}`,children:[R.jsx("span",{className:"spell-bracket",children:"["}),_3(e.name,e.status,e.detail),e.preview&&R.jsxs("span",{className:"spell-preview",children:[" ",e.preview,"…"]}),e.handles&&e.handles.length>0&&R.jsx("button",{"aria-label":"View the recalled passage",className:"spell-view",onClick:()=>f?.(e.handles[0]),type:"button",children:"view passage"}),R.jsx("span",{className:"spell-bracket",children:"]"})]}),R.jsx("div",{className:"markdown-body",ref:E,children:a.content?R.jsx(g3,{children:a.content}):R.jsx("span",{className:"thinking-thread"})}),!a.streaming&&a.content&&R.jsxs("div",{className:"message-actions",children:[R.jsxs("button",{"aria-label":"Copy reply",onClick:D,type:"button",children:[R.jsx(dx,{}),R.jsx("span",{children:m?"Copied":"Copy"})]}),c&&R.jsxs("button",{"aria-label":"Regenerate reply",onClick:c,type:"button",children:[R.jsx(n3,{}),R.jsx("span",{children:h})]})]})]}),_&&g&&R.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{l?.(_),v(null),S(null)},style:{top:g.top,left:g.left},type:"button",children:[R.jsx(o3,{}),R.jsx("span",{children:"ask about this"})]})]})}function y3({handle:r,loadPassage:e,onClose:n}){const[a,l]=ke.useState(null),[c,f]=ke.useState(null);return ke.useEffect(()=>{let h=!0;e(r).then(p=>{h&&l(p)}).catch(p=>{h&&f(p instanceof Error?p.message:"could not summon the passage")});function m(p){p.key==="Escape"&&n()}return window.addEventListener("keydown",m),()=>{h=!1,window.removeEventListener("keydown",m)}},[r,e,n]),R.jsx("div",{"aria-label":"Summoned passage","aria-modal":"true",className:"passage-backdrop",role:"dialog",children:R.jsxs("div",{className:"passage-panel",children:[R.jsxs("header",{className:"passage-header",children:[R.jsx("h2",{className:"passage-title",children:a?R.jsxs(R.Fragment,{children:["chapter ",a.chapter,R.jsxs("span",{className:"passage-lines",children:[", lines ",a.line_start,"-",a.line_end," · volume"," ",a.volume]})]}):"summoning…"}),R.jsx("button",{"aria-label":"Close passage",className:"icon-button passage-close",onClick:n,type:"button",children:"×"})]}),a&&a.beats.length>0&&R.jsx("div",{className:"passage-beats",children:a.beats.map(h=>R.jsx("span",{className:"passage-beat",children:h},h))}),c?R.jsx("p",{className:"passage-error",children:c}):R.jsx("pre",{className:"passage-text",children:a?a.text:"…"})]})})}function S3({chooseLabel:r,createLabel:e,message:n,onChooseConversation:a,onCreateConversation:l,onRetry:c,retryLabel:f,title:h}){return R.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[R.jsx("span",{className:"recovery-knot"}),R.jsxs("div",{children:[R.jsx("strong",{children:h}),R.jsx("p",{children:n}),R.jsxs("div",{className:"recovery-actions",children:[c&&f&&R.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:f}),R.jsx("button",{onClick:l,type:"button",children:e}),R.jsx("button",{onClick:a,type:"button",children:r})]})]})]})}const Rm="185",b3=0,px=1,M3=2,Lu=1,E3=2,Tl=3,Tr=0,ti=1,Na=2,Ua=0,fo=1,mx=2,gx=3,vx=4,T3=5,ts=100,A3=101,R3=102,C3=103,w3=104,D3=200,N3=201,L3=202,U3=203,Sp=204,bp=205,O3=206,P3=207,I3=208,z3=209,F3=210,B3=211,H3=212,G3=213,V3=214,Mp=0,Ep=1,Tp=2,go=3,Ap=4,Rp=5,Cp=6,wp=7,IS=0,k3=1,X3=2,aa=0,zS=1,FS=2,BS=3,HS=4,GS=5,VS=6,kS=7,XS=300,cs=301,vo=302,Mh=303,Eh=304,nf=306,Dp=1e3,La=1001,Np=1002,Pn=1003,W3=1004,nu=1005,Vn=1006,Th=1007,as=1008,Di=1009,WS=1010,qS=1011,Nl=1012,Cm=1013,sa=1014,na=1015,za=1016,wm=1017,Dm=1018,Ll=1020,jS=35902,YS=35899,ZS=1021,KS=1022,Vi=1023,Fa=1026,rs=1027,QS=1028,Nm=1029,us=1030,Lm=1031,Um=1033,Uu=33776,Ou=33777,Pu=33778,Iu=33779,Lp=35840,Up=35841,Op=35842,Pp=35843,Ip=36196,zp=37492,Fp=37496,Bp=37488,Hp=37489,Gu=37490,Gp=37491,Vp=37808,kp=37809,Xp=37810,Wp=37811,qp=37812,jp=37813,Yp=37814,Zp=37815,Kp=37816,Qp=37817,$p=37818,Jp=37819,em=37820,tm=37821,nm=36492,im=36494,am=36495,rm=36283,sm=36284,Vu=36285,om=36286,q3=3200,_x=0,j3=1,yr="",Ci="srgb",ku="srgb-linear",Xu="linear",kt="srgb",js=7680,xx=519,Y3=512,Z3=513,K3=514,Om=515,Q3=516,$3=517,Pm=518,J3=519,yx=35044,Sx="300 es",ia=2e3,Wu=2001;function eR(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tR(){const r=qu("canvas");return r.style.display="block",r}const bx={};function Mx(...r){const e="THREE."+r.shift();console.log(e,...r)}function $S(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ct(...r){r=$S(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function wt(...r){r=$S(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function ho(...r){const e=r.join(" ");e in bx||(bx[e]=!0,ct(...r))}function nR(r,e,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const iR={[Mp]:Ep,[Tp]:Cp,[Ap]:wp,[go]:Rp,[Ep]:Mp,[Cp]:Tp,[wp]:Ap,[Rp]:go};class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=Math.PI/180,lm=180/Math.PI;function Il(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Rt(r,e,n){return Math.max(e,Math.min(n,r))}function aR(r,e){return(r%e+e)%e}function Rh(r,e,n){return(1-n)*r+n*e}function gl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fm=class Fm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fm.prototype.isVector2=!0;let Pt=Fm;class So{constructor(e=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=l}static slerpFlat(e,n,a,l,c,f,h){let m=a[l+0],p=a[l+1],_=a[l+2],v=a[l+3],g=c[f+0],S=c[f+1],E=c[f+2],D=c[f+3];if(v!==D||m!==g||p!==S||_!==E){let b=m*g+p*S+_*E+v*D;b<0&&(g=-g,S=-S,E=-E,D=-D,b=-b);let y=1-h;if(b<.9995){const I=Math.acos(b),F=Math.sin(I);y=Math.sin(y*I)/F,h=Math.sin(h*I)/F,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+D*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+D*h;const I=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=I,p*=I,_*=I,v*=I}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],_=a[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return e[n]=h*E+_*v+m*S-p*g,e[n+1]=m*E+_*g+p*v-h*S,e[n+2]=p*E+_*S+h*g-m*v,e[n+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,l){return this._x=e,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(l/2),v=h(c/2),g=m(a/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=a+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,l=e._y,c=e._z,f=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-a*p,this._z=c*_+f*p+a*m-l*h,this._w=f*_-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(a=-a,l=-l,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bm=class Bm{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ex.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ex.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,a=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*a),_=2*(h*n-c*l),v=2*(c*a-f*n);return this.x=n+m*p+f*v-h*_,this.y=a+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,l=e.y,c=e.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return n*n+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const l=Math.sin(n)*e;return this.x=l*Math.sin(a),this.y=Math.cos(n)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bm.prototype.isVector3=!0;let ie=Bm;const Ch=new ie,Ex=new So,Hm=class Hm{constructor(e,n,a,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,h,m,p)}set(e,n,a,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],S=a[5],E=a[8],D=l[0],b=l[3],y=l[6],I=l[1],F=l[4],N=l[7],O=l[2],L=l[5],B=l[8];return c[0]=f*D+h*I+m*O,c[3]=f*b+h*F+m*L,c[6]=f*y+h*N+m*B,c[1]=p*D+_*I+v*O,c[4]=p*b+_*F+v*L,c[7]=p*y+_*N+v*B,c[2]=g*D+S*I+E*O,c[5]=g*b+S*F+E*L,c[8]=g*y+S*N+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*f*_-n*h*p-a*c*_+a*h*m+l*c*p-l*f*m}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,E=n*v+a*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/E;return e[0]=v*D,e[1]=(l*p-_*a)*D,e[2]=(h*a-l*f)*D,e[3]=g*D,e[4]=(_*n-l*m)*D,e[5]=(l*c-h*n)*D,e[6]=S*D,e[7]=(a*m-p*n)*D,e[8]=(f*n-a*c)*D,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hm.prototype.isMatrix3=!0;let ht=Hm;const wh=new ht,Tx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ax=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rR(){const r={enabled:!0,workingColorSpace:ku,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===yr?Xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[ku]:{primaries:e,whitePoint:a,transfer:Xu,toXYZ:Tx,fromXYZ:Ax,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:a,transfer:kt,toXYZ:Tx,fromXYZ:Ax,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),r}const At=rR();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ys;class sR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ys===void 0&&(Ys=qu("canvas")),Ys.width=e.width,Ys.height=e.height;const l=Ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=Ys}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qu("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Oa(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Oa(n[a]/255)*255):n[a]=Oa(n[a]);return{data:n,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oR=0;class Im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Dh(l[f].image)):c.push(Dh(l[f]))}else c=Dh(l);a.url=c}return n||(e.images[this.uuid]=a),a}}function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sR.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let lR=0;const Nh=new ie;class Wn extends ds{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=La,l=La,c=Vn,f=as,h=Vi,m=Di,p=Wn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Il(),this.name="",this.source=new Im(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ct(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dp:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Np:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dp:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Np:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=XS;Wn.DEFAULT_ANISOTROPY=1;const Gm=class Gm{constructor(e=0,n=0,a=0,l=1){this.x=e,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,l){return this.x=e,this.y=n,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],D=m[2],b=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(p+1)/2,N=(S+1)/2,O=(y+1)/2,L=(_+g)/4,B=(v+D)/4,T=(E+b)/4;return F>N&&F>O?F<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(F),l=L/a,c=B/a):N>O?N<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),a=L/l,c=T/l):O<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),a=B/c,l=T/c),this.set(a,l,c,n),this}let I=Math.sqrt((b-E)*(b-E)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(I)<.001&&(I=1),this.x=(b-E)/I,this.y=(v-D)/I,this.z=(g-_)/I,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this.w=Rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this.w=Rt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gm.prototype.isVector4=!0;let fn=Gm;class cR extends ds{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:a.depth},c=new Wn(l),f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new Im(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends cR{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class JS extends Wn{constructor(e=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uR extends Wn{constructor(e=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ku=class Ku{constructor(e,n,a,l,c,f,h,m,p,_,v,g,S,E,D,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,h,m,p,_,v,g,S,E,D,b)}set(e,n,a,l,c,f,h,m,p,_,v,g,S,E,D,b){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=D,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ku().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,l=1/Zs.setFromMatrixColumn(e,0).length(),c=1/Zs.setFromMatrixColumn(e,1).length(),f=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*v,E=h*_,D=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=S+E*p,n[5]=g-D*p,n[9]=-h*m,n[2]=D-g*p,n[6]=E+S*p,n[10]=f*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,D=p*v;n[0]=g+D*h,n[4]=E*h-S,n[8]=f*p,n[1]=f*v,n[5]=f*_,n[9]=-h,n[2]=S*h-E,n[6]=D+g*h,n[10]=f*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,D=p*v;n[0]=g-D*h,n[4]=-f*v,n[8]=E+S*h,n[1]=S+E*h,n[5]=f*_,n[9]=D-g*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(e.order==="ZYX"){const g=f*_,S=f*v,E=h*_,D=h*v;n[0]=m*_,n[4]=E*p-S,n[8]=g*p+D,n[1]=m*v,n[5]=D*p+g,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(e.order==="YZX"){const g=f*m,S=f*p,E=h*m,D=h*p;n[0]=m*_,n[4]=D-g*v,n[8]=E*v+S,n[1]=v,n[5]=f*_,n[9]=-h*_,n[2]=-p*_,n[6]=S*v+E,n[10]=g-D*v}else if(e.order==="XZY"){const g=f*m,S=f*p,E=h*m,D=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+D,n[5]=f*_,n[9]=S*v-E,n[2]=E*v-S,n[6]=h*_,n[10]=D*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fR,e,dR)}lookAt(e,n,a){const l=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pr.crossVectors(a,pi),pr.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pr.crossVectors(a,pi)),pr.normalize(),iu.crossVectors(pi,pr),l[0]=pr.x,l[4]=iu.x,l[8]=pi.x,l[1]=pr.y,l[5]=iu.y,l[9]=pi.y,l[2]=pr.z,l[6]=iu.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],S=a[13],E=a[2],D=a[6],b=a[10],y=a[14],I=a[3],F=a[7],N=a[11],O=a[15],L=l[0],B=l[4],T=l[8],z=l[12],q=l[1],k=l[5],Z=l[9],de=l[13],he=l[2],Q=l[6],U=l[10],V=l[14],J=l[3],pe=l[7],Te=l[11],A=l[15];return c[0]=f*L+h*q+m*he+p*J,c[4]=f*B+h*k+m*Q+p*pe,c[8]=f*T+h*Z+m*U+p*Te,c[12]=f*z+h*de+m*V+p*A,c[1]=_*L+v*q+g*he+S*J,c[5]=_*B+v*k+g*Q+S*pe,c[9]=_*T+v*Z+g*U+S*Te,c[13]=_*z+v*de+g*V+S*A,c[2]=E*L+D*q+b*he+y*J,c[6]=E*B+D*k+b*Q+y*pe,c[10]=E*T+D*Z+b*U+y*Te,c[14]=E*z+D*de+b*V+y*A,c[3]=I*L+F*q+N*he+O*J,c[7]=I*B+F*k+N*Q+O*pe,c[11]=I*T+F*Z+N*U+O*Te,c[15]=I*z+F*de+N*V+O*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],D=e[7],b=e[11],y=e[15],I=m*S-p*g,F=h*S-p*v,N=h*g-m*v,O=f*S-p*_,L=f*g-m*_,B=f*v-h*_;return n*(D*I-b*F+y*N)-a*(E*I-b*O+y*L)+l*(E*F-D*O+y*B)-c*(E*N-D*L+b*B)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return n*(f*_-h*p)-a*(c*_-h*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],D=e[13],b=e[14],y=e[15],I=n*h-a*f,F=n*m-l*f,N=n*p-c*f,O=a*m-l*h,L=a*p-c*h,B=l*p-c*m,T=_*D-v*E,z=_*b-g*E,q=_*y-S*E,k=v*b-g*D,Z=v*y-S*D,de=g*y-S*b,he=I*de-F*Z+N*k+O*q-L*z+B*T;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/he;return e[0]=(h*de-m*Z+p*k)*Q,e[1]=(l*Z-a*de-c*k)*Q,e[2]=(D*B-b*L+y*O)*Q,e[3]=(g*L-v*B-S*O)*Q,e[4]=(m*q-f*de-p*z)*Q,e[5]=(n*de-l*q+c*z)*Q,e[6]=(b*N-E*B-y*F)*Q,e[7]=(_*B-g*N+S*F)*Q,e[8]=(f*Z-h*q+p*T)*Q,e[9]=(a*q-n*Z-c*T)*Q,e[10]=(E*L-D*N+y*I)*Q,e[11]=(v*N-_*L-S*I)*Q,e[12]=(h*z-f*k-m*T)*Q,e[13]=(n*k-a*z+l*T)*Q,e[14]=(D*F-E*O-b*I)*Q,e[15]=(_*O-v*F+g*I)*Q,this}scale(e){const n=this.elements,a=e.x,l=e.y,c=e.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+a,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,a){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,E=c*v,D=f*_,b=f*v,y=h*v,I=m*p,F=m*_,N=m*v,O=a.x,L=a.y,B=a.z;return l[0]=(1-(D+y))*O,l[1]=(S+N)*O,l[2]=(E-F)*O,l[3]=0,l[4]=(S-N)*L,l[5]=(1-(g+y))*L,l[6]=(b+I)*L,l[7]=0,l[8]=(E+F)*B,l[9]=(b-I)*B,l[10]=(1-(g+D))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let f=Zs.set(l[0],l[1],l[2]).length();const h=Zs.set(l[4],l[5],l[6]).length(),m=Zs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),zi.copy(this);const p=1/f,_=1/h,v=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,n.setFromRotationMatrix(zi),a.x=f,a.y=h,a.z=m,this}makePerspective(e,n,a,l,c,f,h=ia,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(a-l),g=(n+e)/(n-e),S=(a+l)/(a-l);let E,D;if(m)E=c/(f-c),D=f*c/(f-c);else if(h===ia)E=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(h===Wu)E=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,l,c,f,h=ia,m=!1){const p=this.elements,_=2/(n-e),v=2/(a-l),g=-(n+e)/(n-e),S=-(a+l)/(a-l);let E,D;if(m)E=1/(f-c),D=f/(f-c);else if(h===ia)E=-2/(f-c),D=-(f+c)/(f-c);else if(h===Wu)E=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Ku.prototype.isMatrix4=!0;let dn=Ku;const Zs=new ie,zi=new dn,fR=new ie(0,0,0),dR=new ie(1,1,1),pr=new ie,iu=new ie,pi=new ie,Rx=new dn,Cx=new So;class fs{constructor(e=0,n=0,a=0,l=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,l=this._order){return this._x=e,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Rx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rx,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cx.setFromEuler(this),this.setFromQuaternion(Cx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class eb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hR=0;const wx=new ie,Ks=new So,Aa=new dn,au=new ie,vl=new ie,pR=new ie,mR=new So,Dx=new ie(1,0,0),Nx=new ie(0,1,0),Lx=new ie(0,0,1),Ux={type:"added"},gR={type:"removed"},Qs={type:"childadded",child:null},Lh={type:"childremoved",child:null};class qn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ie,n=new fs,a=new So,l=new ie(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ht}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Dx,e)}rotateY(e){return this.rotateOnAxis(Nx,e)}rotateZ(e){return this.rotateOnAxis(Lx,e)}translateOnAxis(e,n){return wx.copy(e).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dx,e)}translateY(e){return this.translateOnAxis(Nx,e)}translateZ(e){return this.translateOnAxis(Lx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?au.copy(e):au.set(e,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(vl,au,this.up):Aa.lookAt(au,vl,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Aa),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ux),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gR),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ux),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,pR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,mR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*l,c[13]+=a-c[1]*n-c[5]*a-c[9]*l,c[14]+=l-c[2]*n-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(n){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ie(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ru extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vR={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const D of e.hand.values()){const b=n.getJointPose(D,a),y=this._getHandJoint(p,D);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=n.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(vR)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new ru;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const tb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},su={h:0,s:0,l:0};function Oh(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Et{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,a,l=At.workingColorSpace){return this.r=e,this.g=n,this.b=a,At.colorSpaceToWorking(this,l),this}setHSL(e,n,a,l=At.workingColorSpace){if(e=aR(e,1),n=Rt(n,0,1),a=Rt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Oh(f,c,e+1/3),this.g=Oh(f,c,e),this.b=Oh(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,n=Ci){function a(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ci){const a=tb[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return At.workingToColorSpace(Gn.copy(this),e),Math.round(Rt(Gn.r*255,0,255))*65536+Math.round(Rt(Gn.g*255,0,255))*256+Math.round(Rt(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Gn.copy(this),n);const a=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){At.workingToColorSpace(Gn.copy(this),e);const n=Gn.r,a=Gn.g,l=Gn.b;return e!==Ci?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,n,a){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(su);const a=Rh(mr.h,su.h,n),l=Rh(mr.s,su.s,n),c=Rh(mr.l,su.l,n);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Et;Et.NAMES=tb;class _R extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new ie,Ra=new ie,Ph=new ie,Ca=new ie,$s=new ie,Js=new ie,Ox=new ie,Ih=new ie,zh=new ie,Fh=new ie,Bh=new fn,Hh=new fn,Gh=new fn;class Hi{constructor(e=new ie,n=new ie,a=new ie){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,l){l.subVectors(a,n),Fi.subVectors(e,n),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,a,l,c){Fi.subVectors(l,n),Ra.subVectors(a,n),Ph.subVectors(e,n);const f=Fi.dot(Fi),h=Fi.dot(Ra),m=Fi.dot(Ph),p=Ra.dot(Ra),_=Ra.dot(Ph),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,n,a,l){return this.getBarycoord(e,n,a,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,n,a,l,c,f,h,m){return this.getBarycoord(e,n,a,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(f,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,n,a,l,c,f){return Bh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Bh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,a),Gh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Bh,c.x),f.addScaledVector(Hh,c.y),f.addScaledVector(Gh,c.z),f}static isFrontFacing(e,n,a,l){return Fi.subVectors(a,n),Ra.subVectors(e,n),Fi.cross(Ra).dot(l)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,l){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,a,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Fi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,n,a,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,l=this.b,c=this.c;let f,h;$s.subVectors(l,a),Js.subVectors(c,a),Ih.subVectors(e,a);const m=$s.dot(Ih),p=Js.dot(Ih);if(m<=0&&p<=0)return n.copy(a);zh.subVectors(e,l);const _=$s.dot(zh),v=Js.dot(zh);if(_>=0&&v<=_)return n.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(a).addScaledVector($s,f);Fh.subVectors(e,c);const S=$s.dot(Fh),E=Js.dot(Fh);if(E>=0&&S<=E)return n.copy(c);const D=S*p-m*E;if(D<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(Js,h);const b=_*E-S*v;if(b<=0&&v-_>=0&&S-E>=0)return Ox.subVectors(c,l),h=(v-_)/(v-_+(S-E)),n.copy(l).addScaledVector(Ox,h);const y=1/(b+D+g);return f=D*y,h=g*y,n.copy(a).addScaledVector($s,f).addScaledVector(Js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ou.copy(a.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),lu.subVectors(this.max,_l),eo.subVectors(e.a,_l),to.subVectors(e.b,_l),no.subVectors(e.c,_l),gr.subVectors(to,eo),vr.subVectors(no,to),jr.subVectors(eo,no);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-jr.z,jr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,jr.z,0,-jr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-jr.y,jr.x,0];return!Vh(n,eo,to,no,lu)||(n=[1,0,0,0,1,0,0,0,1],!Vh(n,eo,to,no,lu))?!1:(cu.crossVectors(gr,vr),n=[cu.x,cu.y,cu.z],Vh(n,eo,to,no,lu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Bi=new ie,ou=new zl,eo=new ie,to=new ie,no=new ie,gr=new ie,vr=new ie,jr=new ie,_l=new ie,lu=new ie,cu=new ie,Yr=new ie;function Vh(r,e,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){Yr.fromArray(r,c);const h=l.x*Math.abs(Yr.x)+l.y*Math.abs(Yr.y)+l.z*Math.abs(Yr.z),m=e.dot(Yr),p=n.dot(Yr),_=a.dot(Yr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new ie,uu=new Pt;let xR=0;class bn extends ds{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=yx,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)uu.fromBufferAttribute(this,n),uu.applyMatrix3(e),this.setXY(n,uu.x,uu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=gl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,l){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),l=ei(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,n,a,l,c){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nb extends bn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class ib extends bn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ki extends bn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const yR=new zl,xl=new ie,kh=new ie;class Fl{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):yR.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const n=xl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(xl,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(kh)),this.expandByPoint(xl.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SR=0;const Ri=new dn,Xh=new qn,io=new ie,mi=new zl,yl=new zl,wn=new ie;class ni extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eR(e)?ib:nb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ht().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,n,a){return Ri.makeTranslation(e,n,a),this.applyMatrix4(Ri),this}scale(e,n,a){return Ri.makeScale(e,n,a),this.applyMatrix4(Ri),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(a,3))}else{const a=Math.min(e.length,n.count);for(let l=0;l<a;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,yl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,yl.max),mi.expandByPoint(wn)):(mi.expandByPoint(yl.min),mi.expandByPoint(yl.max))}mi.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(wn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)wn.fromBufferAttribute(h,p),m&&(io.fromBufferAttribute(e,p),wn.add(io)),l=Math.max(l,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new bn(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new ie,m[T]=new ie;const p=new ie,_=new ie,v=new ie,g=new Pt,S=new Pt,E=new Pt,D=new ie,b=new ie;function y(T,z,q){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,z),v.fromBufferAttribute(a,q),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,z),E.fromBufferAttribute(c,q),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(D.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(k),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(k),h[T].add(D),h[z].add(D),h[q].add(D),m[T].add(b),m[z].add(b),m[q].add(b))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,z=I.length;T<z;++T){const q=I[T],k=q.start,Z=q.count;for(let de=k,he=k+Z;de<he;de+=3)y(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const F=new ie,N=new ie,O=new ie,L=new ie;function B(T){O.fromBufferAttribute(l,T),L.copy(O);const z=h[T];F.copy(z),F.sub(O.multiplyScalar(O.dot(z))).normalize(),N.crossVectors(L,z);const k=N.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,k)}for(let T=0,z=I.length;T<z;++T){const q=I[T],k=q.start,Z=q.count;for(let de=k,he=k+Z;de<he;de+=3)B(e.getX(de+0)),B(e.getX(de+1)),B(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const l=new ie,c=new ie,f=new ie,h=new ie,m=new ie,p=new ie,_=new ie,v=new ie;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),D=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,D),f.fromBufferAttribute(n,b),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,D),p.fromBufferAttribute(a,b),h.add(_),m.add(_),p.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(D,m.x,m.y,m.z),a.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let D=0,b=m.length;D<b;D++){h.isInterleavedBufferAttribute?S=m[D]*h.data.stride+h.offset:S=m[D]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new bn(g,_,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,a);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bR=0;class bo extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=fo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sp,this.blendDst=bp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ct(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(a.blending=this.blending),this.side!==Tr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Sp&&(a.blendSrc=this.blendSrc),this.blendDst!==bp&&(a.blendDst=this.blendDst),this.blendEquation!==ts&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(a.stencilFail=this.stencilFail),this.stencilZFail!==js&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Pt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new ie,Wh=new ie,fu=new ie,_r=new ie,qh=new ie,du=new ie,jh=new ie;class zm{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,a,l){Wh.copy(e).add(n).multiplyScalar(.5),fu.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Wh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(fu),h=_r.dot(this.direction),m=-_r.dot(fu),p=_r.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const D=1/_;v*=D,g*=D,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wh).addScaledVector(fu,g),S}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const a=Da.dot(this.direction),l=Da.dot(Da)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,a,l,c){qh.subVectors(n,e),du.subVectors(a,e),jh.crossVectors(qh,du);let f=this.direction.dot(jh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;_r.subVectors(this.origin,e);const m=h*this.direction.dot(du.crossVectors(_r,du));if(m<0)return null;const p=h*this.direction.dot(qh.cross(_r));if(p<0||m+p>f)return null;const _=-h*_r.dot(jh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ab extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=IS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Px=new dn,Zr=new zm,hu=new Fl,Ix=new ie,pu=new ie,mu=new ie,gu=new ie,Yh=new ie,vu=new ie,zx=new ie,_u=new ie;class Ba extends qn{constructor(e=new ni,n=new ab){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){vu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Yh.fromBufferAttribute(v,e),f?vu.addScaledVector(Yh,_):vu.addScaledVector(Yh.sub(n),_))}n.add(vu)}return n}raycast(e,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(c),Zr.copy(e.ray).recast(e.near),!(hu.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(hu,Ix)===null||Zr.origin.distanceToSquared(Ix)>(e.far-e.near)**2))&&(Px.copy(c).invert(),Zr.copy(e.ray).applyMatrix4(Px),!(a.boundingBox!==null&&Zr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,D=g.length;E<D;E++){const b=g[E],y=f[b.materialIndex],I=Math.max(b.start,S.start),F=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let N=I,O=F;N<O;N+=3){const L=h.getX(N),B=h.getX(N+1),T=h.getX(N+2);l=xu(this,y,e,a,p,_,v,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),D=Math.min(h.count,S.start+S.count);for(let b=E,y=D;b<y;b+=3){const I=h.getX(b),F=h.getX(b+1),N=h.getX(b+2);l=xu(this,f,e,a,p,_,v,I,F,N),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,D=g.length;E<D;E++){const b=g[E],y=f[b.materialIndex],I=Math.max(b.start,S.start),F=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let N=I,O=F;N<O;N+=3){const L=N,B=N+1,T=N+2;l=xu(this,y,e,a,p,_,v,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let b=E,y=D;b<y;b+=3){const I=b,F=b+1,N=b+2;l=xu(this,f,e,a,p,_,v,I,F,N),l&&(l.faceIndex=Math.floor(b/3),n.push(l))}}}}function MR(r,e,n,a,l,c,f,h){let m;if(e.side===ti?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,e.side===Tr,h),m===null)return null;_u.copy(h),_u.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(_u);return p<n.near||p>n.far?null:{distance:p,point:_u.clone(),object:r}}function xu(r,e,n,a,l,c,f,h,m,p){r.getVertexPosition(h,pu),r.getVertexPosition(m,mu),r.getVertexPosition(p,gu);const _=MR(r,e,n,a,pu,mu,gu,zx);if(_){const v=new ie;Hi.getBarycoord(zx,pu,mu,gu,v),l&&(_.uv=Hi.getInterpolatedAttribute(l,h,m,p,v,new Pt)),c&&(_.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new Pt)),f&&(_.normal=Hi.getInterpolatedAttribute(f,h,m,p,v,new ie),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ie,materialIndex:0};Hi.getNormal(pu,mu,gu,g.normal),_.face=g,_.barycoord=v}return _}class ER extends Wn{constructor(e=null,n=1,a=1,l,c,f,h,m,p=Pn,_=Pn,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new ie,TR=new ie,AR=new ht;class Jr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,l){return this.normal.set(e,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const l=Zh.subVectors(a,n).cross(TR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const l=e.delta(Zh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||AR.getNormalMatrix(e),l=this.coplanarPoint(Zh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Fl,RR=new Pt(.5,.5),yu=new ie;class rb{constructor(e=new Jr,n=new Jr,a=new Jr,l=new Jr,c=new Jr,f=new Jr){this.planes=[e,n,a,l,c,f]}set(e,n,a,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ia,a=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],D=c[9],b=c[10],y=c[11],I=c[12],F=c[13],N=c[14],O=c[15];if(l[0].setComponents(p-f,S-_,y-E,O-I).normalize(),l[1].setComponents(p+f,S+_,y+E,O+I).normalize(),l[2].setComponents(p+h,S+v,y+D,O+F).normalize(),l[3].setComponents(p-h,S-v,y-D,O-F).normalize(),a)l[4].setComponents(m,g,b,N).normalize(),l[5].setComponents(p-m,S-g,y-b,O-N).normalize();else if(l[4].setComponents(p-m,S-g,y-b,O-N).normalize(),n===ia)l[5].setComponents(p+m,S+g,y+b,O+N).normalize();else if(n===Wu)l[5].setComponents(m,g,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=RR.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(yu.x=l.normal.x>0?e.max.x:e.min.x,yu.y=l.normal.y>0?e.max.y:e.min.y,yu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CR extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ju=new ie,Yu=new ie,Fx=new dn,Sl=new zm,Su=new Fl,Kh=new ie,Bx=new ie;class wR extends qn{constructor(e=new ni,n=new CR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let l=1,c=n.count;l<c;l++)ju.fromBufferAttribute(n,l-1),Yu.fromBufferAttribute(n,l),a[l]=a[l-1],a[l]+=ju.distanceTo(Yu);e.setAttribute("lineDistance",new ki(a,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere),Su.applyMatrix4(l),Su.radius+=c,e.ray.intersectsSphere(Su)===!1)return;Fx.copy(l).invert(),Sl.copy(e.ray).applyMatrix4(Fx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let D=S,b=E-1;D<b;D+=p){const y=_.getX(D),I=_.getX(D+1),F=bu(this,e,Sl,m,y,I,D);F&&n.push(F)}if(this.isLineLoop){const D=_.getX(E-1),b=_.getX(S),y=bu(this,e,Sl,m,D,b,E-1);y&&n.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let D=S,b=E-1;D<b;D+=p){const y=bu(this,e,Sl,m,D,D+1,D);y&&n.push(y)}if(this.isLineLoop){const D=bu(this,e,Sl,m,E-1,S,E-1);D&&n.push(D)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function bu(r,e,n,a,l,c,f){const h=r.geometry.attributes.position;if(ju.fromBufferAttribute(h,l),Yu.fromBufferAttribute(h,c),n.distanceSqToSegment(ju,Yu,Kh,Bx)>a)return;Kh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Kh);if(!(p<e.near||p>e.far))return{distance:p,point:Bx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Hx=new ie,Gx=new ie;class DR extends wR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let l=0,c=n.count;l<c;l+=2)Hx.fromBufferAttribute(n,l),Gx.fromBufferAttribute(n,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+Hx.distanceTo(Gx);e.setAttribute("lineDistance",new ki(a,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NR extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vx=new dn,cm=new zm,Mu=new Fl,Eu=new ie;class kx extends qn{constructor(e=new ni,n=new NR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Mu.copy(a.boundingSphere),Mu.applyMatrix4(l),Mu.radius+=c,e.ray.intersectsSphere(Mu)===!1)return;Vx.copy(l).invert(),cm.copy(e.ray).applyMatrix4(Vx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,v=a.attributes.position;if(p!==null){const g=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=g,D=S;E<D;E++){const b=p.getX(E);Eu.fromBufferAttribute(v,b),Xx(Eu,b,m,l,e,n,this)}}else{const g=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=g,D=S;E<D;E++)Eu.fromBufferAttribute(v,E),Xx(Eu,E,m,l,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Xx(r,e,n,a,l,c,f){const h=cm.distanceSqToPoint(r);if(h<n){const m=new ie;cm.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class sb extends Wn{constructor(e=[],n=cs,a,l,c,f,h,m,p,_){super(e,n,a,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _o extends Wn{constructor(e,n,a=sa,l,c,f,h=Pn,m=Pn,p,_=Fa,v=1){if(_!==Fa&&_!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,l,c,f,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Im(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class LR extends _o{constructor(e,n=sa,a=cs,l,c,f=Pn,h=Pn,m,p=Fa){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,a,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ob extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends ni{constructor(e=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,a,n,e,f,c,0),E("z","y","x",1,-1,a,n,-e,f,c,1),E("x","z","y",1,1,e,a,n,l,f,2),E("x","z","y",1,-1,e,a,-n,l,f,3),E("x","y","z",1,-1,e,n,a,l,c,4),E("x","y","z",-1,-1,e,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(v,2));function E(D,b,y,I,F,N,O,L,B,T,z){const q=N/B,k=O/T,Z=N/2,de=O/2,he=L/2,Q=B+1,U=T+1;let V=0,J=0;const pe=new ie;for(let Te=0;Te<U;Te++){const A=Te*k-de;for(let G=0;G<Q;G++){const se=G*q-Z;pe[D]=se*I,pe[b]=A*F,pe[y]=he,p.push(pe.x,pe.y,pe.z),pe[D]=0,pe[b]=0,pe[y]=L>0?1:-1,_.push(pe.x,pe.y,pe.z),v.push(G/B),v.push(1-Te/T),V+=1}}for(let Te=0;Te<T;Te++)for(let A=0;A<B;A++){const G=g+A+Q*Te,se=g+A+Q*(Te+1),Me=g+(A+1)+Q*(Te+1),Re=g+(A+1)+Q*Te;m.push(G,se,Re),m.push(se,Me,Re),J+=6}h.addGroup(S,J,z),S+=J,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class af extends ni{constructor(e=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:l};const c=e/2,f=n/2,h=Math.floor(a),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=n/m,S=[],E=[],D=[],b=[];for(let y=0;y<_;y++){const I=y*g-f;for(let F=0;F<p;F++){const N=F*v-c;E.push(N,-I,0),D.push(0,0,1),b.push(F/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let I=0;I<h;I++){const F=I+p*y,N=I+p*(y+1),O=I+1+p*(y+1),L=I+1+p*y;S.push(F,N,L),S.push(N,O,L)}this.setIndex(S),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(D,3)),this.setAttribute("uv",new ki(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const l=r[n][a];if(Wx(l))l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=l.clone();else if(Array.isArray(l))if(Wx(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[n][a]=c}else e[n][a]=l.slice();else e[n][a]=l}}return e}function Xn(r){const e={};for(let n=0;n<r.length;n++){const a=xo(r[n]);for(const l in a)e[l]=a[l]}return e}function Wx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function UR(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function lb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const OR={clone:xo,merge:Xn};var PR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PR,this.fragmentShader=IR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=UR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=n[l.value]||null;break;case"c":this.uniforms[a].value=new Et().setHex(l.value);break;case"v2":this.uniforms[a].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[a].value=new ie().fromArray(l.value);break;case"v4":this.uniforms[a].value=new fn().fromArray(l.value);break;case"m3":this.uniforms[a].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[a].value=new dn().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zR extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FR extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BR extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tu=new ie,Au=new So,Qi=new ie;class cb extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tu,Au,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,Au,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Tu,Au,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,Au,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ie,qx=new Pt,jx=new Pt;class wi extends cb{constructor(e=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lm*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,qx,jx),n.subVectors(jx,qx)}setViewOffset(e,n,a,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ah*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ub extends cb{constructor(e=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ao=-90,ro=1;class HR extends qn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(ao,ro,e,n);l.layers=this.layers,this.add(l);const c=new wi(ao,ro,e,n);c.layers=this.layers,this.add(c);const f=new wi(ao,ro,e,n);f.layers=this.layers,this.add(f);const h=new wi(ao,ro,e,n);h.layers=this.layers,this.add(h);const m=new wi(ao,ro,e,n);m.layers=this.layers,this.add(m);const p=new wi(ao,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(e===ia)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const D=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(a,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=D,e.setRenderTarget(a,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class GR extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class VR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Vm=class Vm{constructor(e,n,a,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,l){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=l,this}};Vm.prototype.isMatrix2=!0;let Yx=Vm;function Zx(r,e,n,a){const l=kR(a);switch(n){case ZS:return r*e;case QS:return r*e/l.components*l.byteLength;case Nm:return r*e/l.components*l.byteLength;case us:return r*e*2/l.components*l.byteLength;case Lm:return r*e*2/l.components*l.byteLength;case KS:return r*e*3/l.components*l.byteLength;case Vi:return r*e*4/l.components*l.byteLength;case Um:return r*e*4/l.components*l.byteLength;case Uu:case Ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pu:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Up:case Pp:return Math.max(r,16)*Math.max(e,8)/4;case Lp:case Op:return Math.max(r,8)*Math.max(e,8)/2;case Ip:case zp:case Bp:case Hp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fp:case Gu:case Gp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Kp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $p:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case em:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case tm:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case nm:case im:case am:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rm:case sm:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vu:case om:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kR(r){switch(r){case Di:case WS:return{byteLength:1,components:1};case Nl:case qS:case za:return{byteLength:2,components:1};case wm:case Dm:return{byteLength:2,components:4};case sa:case Cm:case na:return{byteLength:4,components:1};case jS:case YS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);function fb(){let r=null,e=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function XR(r){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],D=v[S];D.start<=E.start+E.count+1?E.count=Math.max(E.count,D.start+D.count-E.start):(++g,v[g]=D)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const D=v[S];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var WR=`#ifdef USE_ALPHAHASH
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
}`,_t={alphahash_fragment:WR,alphahash_pars_fragment:qR,alphamap_fragment:jR,alphamap_pars_fragment:YR,alphatest_fragment:ZR,alphatest_pars_fragment:KR,aomap_fragment:QR,aomap_pars_fragment:$R,batching_pars_vertex:JR,batching_vertex:eC,begin_vertex:tC,beginnormal_vertex:nC,bsdfs:iC,iridescence_fragment:aC,bumpmap_pars_fragment:rC,clipping_planes_fragment:sC,clipping_planes_pars_fragment:oC,clipping_planes_pars_vertex:lC,clipping_planes_vertex:cC,color_fragment:uC,color_pars_fragment:fC,color_pars_vertex:dC,color_vertex:hC,common:pC,cube_uv_reflection_fragment:mC,defaultnormal_vertex:gC,displacementmap_pars_vertex:vC,displacementmap_vertex:_C,emissivemap_fragment:xC,emissivemap_pars_fragment:yC,colorspace_fragment:SC,colorspace_pars_fragment:bC,envmap_fragment:MC,envmap_common_pars_fragment:EC,envmap_pars_fragment:TC,envmap_pars_vertex:AC,envmap_physical_pars_fragment:zC,envmap_vertex:RC,fog_vertex:CC,fog_pars_vertex:wC,fog_fragment:DC,fog_pars_fragment:NC,gradientmap_pars_fragment:LC,lightmap_pars_fragment:UC,lights_lambert_fragment:OC,lights_lambert_pars_fragment:PC,lights_pars_begin:IC,lights_toon_fragment:FC,lights_toon_pars_fragment:BC,lights_phong_fragment:HC,lights_phong_pars_fragment:GC,lights_physical_fragment:VC,lights_physical_pars_fragment:kC,lights_fragment_begin:XC,lights_fragment_maps:WC,lights_fragment_end:qC,lightprobes_pars_fragment:jC,logdepthbuf_fragment:YC,logdepthbuf_pars_fragment:ZC,logdepthbuf_pars_vertex:KC,logdepthbuf_vertex:QC,map_fragment:$C,map_pars_fragment:JC,map_particle_fragment:ew,map_particle_pars_fragment:tw,metalnessmap_fragment:nw,metalnessmap_pars_fragment:iw,morphinstance_vertex:aw,morphcolor_vertex:rw,morphnormal_vertex:sw,morphtarget_pars_vertex:ow,morphtarget_vertex:lw,normal_fragment_begin:cw,normal_fragment_maps:uw,normal_pars_fragment:fw,normal_pars_vertex:dw,normal_vertex:hw,normalmap_pars_fragment:pw,clearcoat_normal_fragment_begin:mw,clearcoat_normal_fragment_maps:gw,clearcoat_pars_fragment:vw,iridescence_pars_fragment:_w,opaque_fragment:xw,packing:yw,premultiplied_alpha_fragment:Sw,project_vertex:bw,dithering_fragment:Mw,dithering_pars_fragment:Ew,roughnessmap_fragment:Tw,roughnessmap_pars_fragment:Aw,shadowmap_pars_fragment:Rw,shadowmap_pars_vertex:Cw,shadowmap_vertex:ww,shadowmask_pars_fragment:Dw,skinbase_vertex:Nw,skinning_pars_vertex:Lw,skinning_vertex:Uw,skinnormal_vertex:Ow,specularmap_fragment:Pw,specularmap_pars_fragment:Iw,tonemapping_fragment:zw,tonemapping_pars_fragment:Fw,transmission_fragment:Bw,transmission_pars_fragment:Hw,uv_pars_fragment:Gw,uv_pars_vertex:Vw,uv_vertex:kw,worldpos_vertex:Xw,background_vert:Ww,background_frag:qw,backgroundCube_vert:jw,backgroundCube_frag:Yw,cube_vert:Zw,cube_frag:Kw,depth_vert:Qw,depth_frag:$w,distance_vert:Jw,distance_frag:eD,equirect_vert:tD,equirect_frag:nD,linedashed_vert:iD,linedashed_frag:aD,meshbasic_vert:rD,meshbasic_frag:sD,meshlambert_vert:oD,meshlambert_frag:lD,meshmatcap_vert:cD,meshmatcap_frag:uD,meshnormal_vert:fD,meshnormal_frag:dD,meshphong_vert:hD,meshphong_frag:pD,meshphysical_vert:mD,meshphysical_frag:gD,meshtoon_vert:vD,meshtoon_frag:_D,points_vert:xD,points_frag:yD,shadow_vert:SD,shadow_frag:bD,sprite_vert:MD,sprite_frag:ED},Be={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ea={basic:{uniforms:Xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Xn([Be.common,Be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Xn([Be.lights,Be.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ea.physical={uniforms:Xn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Ru={r:0,b:0,g:0},TD=new dn,db=new ht;db.set(-1,0,0,0,1,0,0,0,1);function AD(r,e,n,a,l,c){const f=new Et(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(I){let F=I.isScene===!0?I.background:null;if(F&&F.isTexture){const N=I.backgroundBlurriness>0;F=e.get(F,N)}return F}function E(I){let F=!1;const N=S(I);N===null?b(f,h):N&&N.isColor&&(b(N,1),F=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(I,F){const N=S(F);N&&(N.isCubeTexture||N.mapping===nf)?(p===void 0&&(p=new Ba(new Bl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:xo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TD.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(db),p.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ba(new af(2,2),new gi({name:"BackgroundMaterial",uniforms:xo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function b(I,F){I.getRGB(Ru,lb(r)),n.buffers.color.setClear(Ru.r,Ru.g,Ru.b,F,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,F=1){f.set(I),h=F,b(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,b(f,h)},render:E,addToRenderList:D,dispose:y}}function RD(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,f=!1;function h(k,Z,de,he,Q){let U=!1;const V=v(k,he,de,Z);c!==V&&(c=V,p(c.object)),U=S(k,he,de,Q),U&&E(k,he,de,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,N(k,Z,de,he),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function p(k){return r.bindVertexArray(k)}function _(k){return r.deleteVertexArray(k)}function v(k,Z,de,he){const Q=he.wireframe===!0;let U=a[Z.id];U===void 0&&(U={},a[Z.id]=U);const V=k.isInstancedMesh===!0?k.id:0;let J=U[V];J===void 0&&(J={},U[V]=J);let pe=J[de.id];pe===void 0&&(pe={},J[de.id]=pe);let Te=pe[Q];return Te===void 0&&(Te=g(m()),pe[Q]=Te),Te}function g(k){const Z=[],de=[],he=[];for(let Q=0;Q<n;Q++)Z[Q]=0,de[Q]=0,he[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:de,attributeDivisors:he,object:k,attributes:{},index:null}}function S(k,Z,de,he){const Q=c.attributes,U=Z.attributes;let V=0;const J=de.getAttributes();for(const pe in J)if(J[pe].location>=0){const A=Q[pe];let G=U[pe];if(G===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),A===void 0||A.attribute!==G||G&&A.data!==G.data)return!0;V++}return c.attributesNum!==V||c.index!==he}function E(k,Z,de,he){const Q={},U=Z.attributes;let V=0;const J=de.getAttributes();for(const pe in J)if(J[pe].location>=0){let A=U[pe];A===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(A=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(A=k.instanceColor));const G={};G.attribute=A,A&&A.data&&(G.data=A.data),Q[pe]=G,V++}c.attributes=Q,c.attributesNum=V,c.index=he}function D(){const k=c.newAttributes;for(let Z=0,de=k.length;Z<de;Z++)k[Z]=0}function b(k){y(k,0)}function y(k,Z){const de=c.newAttributes,he=c.enabledAttributes,Q=c.attributeDivisors;de[k]=1,he[k]===0&&(r.enableVertexAttribArray(k),he[k]=1),Q[k]!==Z&&(r.vertexAttribDivisor(k,Z),Q[k]=Z)}function I(){const k=c.newAttributes,Z=c.enabledAttributes;for(let de=0,he=Z.length;de<he;de++)Z[de]!==k[de]&&(r.disableVertexAttribArray(de),Z[de]=0)}function F(k,Z,de,he,Q,U,V){V===!0?r.vertexAttribIPointer(k,Z,de,Q,U):r.vertexAttribPointer(k,Z,de,he,Q,U)}function N(k,Z,de,he){D();const Q=he.attributes,U=de.getAttributes(),V=Z.defaultAttributeValues;for(const J in U){const pe=U[J];if(pe.location>=0){let Te=Q[J];if(Te===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const A=Te.normalized,G=Te.itemSize,se=e.get(Te);if(se===void 0)continue;const Me=se.buffer,Re=se.type,ee=se.bytesPerElement,ue=Re===r.INT||Re===r.UNSIGNED_INT||Te.gpuType===Cm;if(Te.isInterleavedBufferAttribute){const _e=Te.data,Le=_e.stride,Qe=Te.offset;if(_e.isInstancedInterleavedBuffer){for(let ye=0;ye<pe.locationSize;ye++)y(pe.location+ye,_e.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ye=0;ye<pe.locationSize;ye++)b(pe.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let ye=0;ye<pe.locationSize;ye++)F(pe.location+ye,G/pe.locationSize,Re,A,Le*ee,(Qe+G/pe.locationSize*ye)*ee,ue)}else{if(Te.isInstancedBufferAttribute){for(let _e=0;_e<pe.locationSize;_e++)y(pe.location+_e,Te.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let _e=0;_e<pe.locationSize;_e++)b(pe.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let _e=0;_e<pe.locationSize;_e++)F(pe.location+_e,G/pe.locationSize,Re,A,G*ee,G/pe.locationSize*_e*ee,ue)}}else if(V!==void 0){const A=V[J];if(A!==void 0)switch(A.length){case 2:r.vertexAttrib2fv(pe.location,A);break;case 3:r.vertexAttrib3fv(pe.location,A);break;case 4:r.vertexAttrib4fv(pe.location,A);break;default:r.vertexAttrib1fv(pe.location,A)}}}}I()}function O(){z();for(const k in a){const Z=a[k];for(const de in Z){const he=Z[de];for(const Q in he){const U=he[Q];for(const V in U)_(U[V].object),delete U[V];delete he[Q]}}delete a[k]}}function L(k){if(a[k.id]===void 0)return;const Z=a[k.id];for(const de in Z){const he=Z[de];for(const Q in he){const U=he[Q];for(const V in U)_(U[V].object),delete U[V];delete he[Q]}}delete a[k.id]}function B(k){for(const Z in a){const de=a[Z];for(const he in de){const Q=de[he];if(Q[k.id]===void 0)continue;const U=Q[k.id];for(const V in U)_(U[V].object),delete U[V];delete Q[k.id]}}}function T(k){for(const Z in a){const de=a[Z],he=k.isInstancedMesh===!0?k.id:0,Q=de[he];if(Q!==void 0){for(const U in Q){const V=Q[U];for(const J in V)_(V[J].object),delete V[J];delete Q[U]}delete de[he],Object.keys(de).length===0&&delete a[Z]}}}function z(){q(),f=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:b,disableUnusedAttributes:I}}function CD(r,e,n){let a;function l(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];n.update(g,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function wD(r,e,n,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Vi&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Di&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:D,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:N,maxSamples:O,samples:L}}function DD(r){const e=this;let n=null,a=0,l=!1,c=!1;const f=new Jr,h=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||l;return l=g,a=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,D=v.clipIntersection,b=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const I=c?0:a,F=I*4;let N=y.clippingState||null;m.value=N,N=_(E,g,F,S);for(let O=0;O!==F;++O)N[O]=n[O];y.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,S,E){const D=v!==null?v.length:0;let b=null;if(D!==0){if(b=m.value,E!==!0||b===null){const y=S+D*4,I=g.matrixWorldInverse;h.getNormalMatrix(I),(b===null||b.length<y)&&(b=new Float32Array(y));for(let F=0,N=S;F!==D;++F,N+=4)f.copy(v[F]).applyMatrix4(I,h),f.normal.toArray(b,N),b[N+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,b}}const Sr=4,Kx=[.125,.215,.35,.446,.526,.582],ns=20,ND=256,bl=new ub,Qx=new Et;let Qh=null,$h=0,Jh=0,ep=!1;const LD=new ie;class $x{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,l=100,c={}){const{size:f=256,position:h=LD}=c;Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ty(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ey(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,$h,Jh),this._renderer.xr.enabled=ep,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:za,format:Vi,colorSpace:ku,depthBuffer:!1},l=Jx(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UD(c)),this._blurMaterial=PD(c,e,n),this._ggxMaterial=OD(c,e,n)}return l}_compileMaterial(e){const n=new Ba(new ni,e);this._renderer.compile(n,bl)}_sceneToCubeUV(e,n,a,l,c){const m=new wi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Qx),v.toneMapping=aa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new Bl,new ab({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,b=D.material;let y=!1;const I=e.background;I?I.isColor&&(b.color.copy(I),e.background=null,y=!0):(b.color.copy(Qx),y=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):N===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const O=this._cubeSize;so(l,N*O,F>2?O:0,O,O),v.setRenderTarget(l),y&&v.render(D,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=I}_textureToCubeUV(e,n){const a=this._renderer,l=e.mapping===cs||e.mapping===vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ty()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ey());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;so(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,bl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,D=this._sizeLods[a],b=3*D*(a>E-Sr?a-E+Sr:0),y=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-n,so(c,b,y,3*D,2*D),l.setRenderTarget(c),l.render(h,bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,so(e,b,y,3*D,2*D),l.setRenderTarget(e),l.render(h,bl)}_blur(e,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,n,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ns-1),D=c/E,b=isFinite(c)?1+Math.floor(_*D):ns;b>ns&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ns}`);const y=[];let I=0;for(let B=0;B<ns;++B){const T=B/D,z=Math.exp(-T*T/2);y.push(z),B===0?I+=z:B<b&&(I+=2*z)}for(let B=0;B<y.length;B++)y[B]=y[B]/I;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=E,g.mipInt.value=F-a;const N=this._sizeLods[l],O=3*N*(l>F-Sr?l-F+Sr:0),L=4*(this._cubeSize-N);so(n,O,L,3*N,2*N),m.setRenderTarget(n),m.render(v,bl)}}function UD(r){const e=[],n=[],a=[];let l=r;const c=r-Sr+1+Kx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-Sr?m=Kx[f-r+Sr-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,D=3,b=2,y=1,I=new Float32Array(D*E*S),F=new Float32Array(b*E*S),N=new Float32Array(y*E*S);for(let L=0;L<S;L++){const B=L%3*2/3-1,T=L>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];I.set(z,D*E*L),F.set(g,b*E*L);const q=[L,L,L,L,L,L];N.set(q,y*E*L)}const O=new ni;O.setAttribute("position",new bn(I,D)),O.setAttribute("uv",new bn(F,b)),O.setAttribute("faceIndex",new bn(N,y)),a.push(new Ba(O,null)),l>Sr&&l--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Jx(r,e,n){const a=new ra(r,e,n);return a.texture.mapping=nf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function so(r,e,n,a,l){r.viewport.set(e,n,a,l),r.scissor.set(e,n,a,l)}function OD(r,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ND,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function PD(r,e,n){const a=new Float32Array(ns),l=new ie(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ey(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ty(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function rf(){return`

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
	`}class hb extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new sb(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:xo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Ua});c.uniforms.tEquirect.value=n;const f=new Ba(l,c),h=n.minFilter;return n.minFilter===as&&(n.minFilter=Vn),new HR(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,a,l);e.setRenderTarget(c)}}function ID(r){let e=new WeakMap,n=new WeakMap,a=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Mh||S===Eh)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const D=new hb(E.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===Mh||S===Eh,D=S===cs||S===vo;if(E||D){let b=n.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new $x(r)),b=E?a.fromEquirectangular(g,b):a.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),b.texture;if(b!==void 0)return b.texture;{const I=g.image;return E&&I&&I.height>0||D&&I&&m(I)?(a===null&&(a=new $x(r)),b=E?a.fromEquirectangular(g):a.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,n.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===Mh?g.mapping=cs:S===Eh&&(g.mapping=vo),g}function m(g){let S=0;const E=6;for(let D=0;D<E;D++)g[D]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=n.get(S);E!==void 0&&(n.delete(S),E.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function zD(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const l=r.getExtension(a);return e[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&ho("WebGLRenderer: "+a+" extension not supported."),l}}}function FD(r,e,n,a){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let D=0;if(E===void 0)return;if(S!==null){const I=S.array;D=S.version;for(let F=0,N=I.length;F<N;F+=3){const O=I[F+0],L=I[F+1],B=I[F+2];g.push(O,L,L,B,B,O)}}else{const I=E.array;D=E.version;for(let F=0,N=I.length/3-1;F<N;F+=3){const O=F+0,L=F+1,B=F+2;g.push(O,L,L,B,B,O)}}const b=new(E.count>=65535?ib:nb)(g,1);b.version=D;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function BD(r,e,n){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*f),n.update(g,a,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(a,g,c,v*f,S),n.update(g,a,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,S);let D=0;for(let b=0;b<S;b++)D+=g[b];n.update(D,a,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function HD(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:a}}function GD(r,e,n){const a=new WeakMap,l=new fn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let z=function(){B.dispose(),a.delete(h),h.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),E===!0&&(F=2),D===!0&&(F=3);let N=h.attributes.position.count*F,O=1;N>e.maxTextureSize&&(O=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*O*4*v),B=new JS(L,N,O,v);B.type=na,B.needsUpdate=!0;const T=F*4;for(let q=0;q<v;q++){const k=b[q],Z=y[q],de=I[q],he=N*O*4*q;for(let Q=0;Q<k.count;Q++){const U=Q*T;S===!0&&(l.fromBufferAttribute(k,Q),L[he+U+0]=l.x,L[he+U+1]=l.y,L[he+U+2]=l.z,L[he+U+3]=0),E===!0&&(l.fromBufferAttribute(Z,Q),L[he+U+4]=l.x,L[he+U+5]=l.y,L[he+U+6]=l.z,L[he+U+7]=0),D===!0&&(l.fromBufferAttribute(de,Q),L[he+U+8]=l.x,L[he+U+9]=l.y,L[he+U+10]=l.z,L[he+U+11]=de.itemSize===4?l.w:1)}}g={count:v,texture:B,size:new Pt(N,O)},a.set(h,g),h.addEventListener("dispose",z)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let S=0;for(let D=0;D<p.length;D++)S+=p[D];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function VD(r,e,n,a,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:f,dispose:h}}const kD={[zS]:"LINEAR_TONE_MAPPING",[FS]:"REINHARD_TONE_MAPPING",[BS]:"CINEON_TONE_MAPPING",[HS]:"ACES_FILMIC_TONE_MAPPING",[VS]:"AGX_TONE_MAPPING",[kS]:"NEUTRAL_TONE_MAPPING",[GS]:"CUSTOM_TONE_MAPPING"};function XD(r,e,n,a,l,c){const f=new ra(e,n,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new _o(e,n):void 0}),h=new ra(e,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new zR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ba(m,p),v=new ub(-1,1,1,-1,0,1);let g=null,S=null,E=!1,D,b=null,y=[],I=!1;this.setSize=function(F,N){f.setSize(F,N),h.setSize(F,N);for(let O=0;O<y.length;O++){const L=y[O];L.setSize&&L.setSize(F,N)}},this.setEffects=function(F){y=F,I=y.length>0&&y[0].isRenderPass===!0;const N=f.width,O=f.height;for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(N,O)}},this.begin=function(F,N){if(E||F.toneMapping===aa&&y.length===0)return!1;if(b=N,N!==null){const O=N.width,L=N.height;(f.width!==O||f.height!==L)&&this.setSize(O,L)}return I===!1&&F.setRenderTarget(f),D=F.toneMapping,F.toneMapping=aa,!0},this.hasRenderPass=function(){return I},this.end=function(F,N){F.toneMapping=D,E=!0;let O=f,L=h;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(F,L,O,N),T.needsSwap!==!1)){const z=O;O=L,L=z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},At.getTransfer(g)===kt&&(p.defines.SRGB_TRANSFER="");const B=kD[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(b),F.render(_,v),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const pb=new Wn,um=new _o(1,1),mb=new JS,gb=new uR,vb=new sb,ny=[],iy=[],ay=new Float32Array(16),ry=new Float32Array(9),sy=new Float32Array(4);function Mo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const l=e*n;let c=ny[l];if(c===void 0&&(c=new Float32Array(l),ny[l]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=n,r[f].toArray(c,h)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function An(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function sf(r,e){let n=iy[e];n===void 0&&(n=new Int32Array(e),iy[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function WD(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function qD(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2fv(this.addr,e),An(n,e)}}function jD(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;r.uniform3fv(this.addr,e),An(n,e)}}function YD(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4fv(this.addr,e),An(n,e)}}function ZD(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;sy.set(a),r.uniformMatrix2fv(this.addr,!1,sy),An(n,a)}}function KD(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;ry.set(a),r.uniformMatrix3fv(this.addr,!1,ry),An(n,a)}}function QD(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;ay.set(a),r.uniformMatrix4fv(this.addr,!1,ay),An(n,a)}}function $D(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function JD(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2iv(this.addr,e),An(n,e)}}function eN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;r.uniform3iv(this.addr,e),An(n,e)}}function tN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4iv(this.addr,e),An(n,e)}}function nN(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function iN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2uiv(this.addr,e),An(n,e)}}function aN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;r.uniform3uiv(this.addr,e),An(n,e)}}function rN(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4uiv(this.addr,e),An(n,e)}}function sN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(um.compareFunction=n.isReversedDepthBuffer()?Pm:Om,c=um):c=pb,n.setTexture2D(e||c,l)}function oN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(e||gb,l)}function lN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(e||vb,l)}function cN(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(e||mb,l)}function uN(r){switch(r){case 5126:return WD;case 35664:return qD;case 35665:return jD;case 35666:return YD;case 35674:return ZD;case 35675:return KD;case 35676:return QD;case 5124:case 35670:return $D;case 35667:case 35671:return JD;case 35668:case 35672:return eN;case 35669:case 35673:return tN;case 5125:return nN;case 36294:return iN;case 36295:return aN;case 36296:return rN;case 35678:case 36198:case 36298:case 36306:case 35682:return sN;case 35679:case 36299:case 36307:return oN;case 35680:case 36300:case 36308:case 36293:return lN;case 36289:case 36303:case 36311:case 36292:return cN}}function fN(r,e){r.uniform1fv(this.addr,e)}function dN(r,e){const n=Mo(e,this.size,2);r.uniform2fv(this.addr,n)}function hN(r,e){const n=Mo(e,this.size,3);r.uniform3fv(this.addr,n)}function pN(r,e){const n=Mo(e,this.size,4);r.uniform4fv(this.addr,n)}function mN(r,e){const n=Mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function gN(r,e){const n=Mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function vN(r,e){const n=Mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function _N(r,e){r.uniform1iv(this.addr,e)}function xN(r,e){r.uniform2iv(this.addr,e)}function yN(r,e){r.uniform3iv(this.addr,e)}function SN(r,e){r.uniform4iv(this.addr,e)}function bN(r,e){r.uniform1uiv(this.addr,e)}function MN(r,e){r.uniform2uiv(this.addr,e)}function EN(r,e){r.uniform3uiv(this.addr,e)}function TN(r,e){r.uniform4uiv(this.addr,e)}function AN(r,e,n){const a=this.cache,l=e.length,c=sf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=um:f=pb;for(let h=0;h!==l;++h)n.setTexture2D(e[h]||f,c[h])}function RN(r,e,n){const a=this.cache,l=e.length,c=sf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||gb,c[f])}function CN(r,e,n){const a=this.cache,l=e.length,c=sf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||vb,c[f])}function wN(r,e,n){const a=this.cache,l=e.length,c=sf(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||mb,c[f])}function DN(r){switch(r){case 5126:return fN;case 35664:return dN;case 35665:return hN;case 35666:return pN;case 35674:return mN;case 35675:return gN;case 35676:return vN;case 5124:case 35670:return _N;case 35667:case 35671:return xN;case 35668:case 35672:return yN;case 35669:case 35673:return SN;case 5125:return bN;case 36294:return MN;case 36295:return EN;case 36296:return TN;case 35678:case 36198:case 36298:case 36306:case 35682:return AN;case 35679:case 36299:case 36307:return RN;case 35680:case 36300:case 36308:case 36293:return CN;case 36289:case 36303:case 36311:case 36292:return wN}}class NN{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=uN(n.type)}}class LN{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DN(n.type)}}class UN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,n[h.id],a)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function oy(r,e){r.seq.push(e),r.map[e.id]=e}function ON(r,e,n){const a=r.name,l=a.length;for(tp.lastIndex=0;;){const c=tp.exec(a),f=tp.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){oy(n,p===void 0?new NN(h,r,e):new LN(h,r,e));break}else{let v=n.map[h];v===void 0&&(v=new UN(h),oy(n,v)),n=v}}}class zu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=e.getActiveUniform(n,f),m=e.getUniformLocation(n,h.name);ON(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(e,a,l)}setOptional(e,n,a){const l=n[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,n,a,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,n){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&a.push(f)}return a}}function ly(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const PN=37297;let IN=0;function zN(r,e){const n=r.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const cy=new ht;function FN(r){At._getMatrix(cy,At.workingColorSpace,r);const e=`mat3( ${cy.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(r)){case Xu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function uy(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+zN(r.getShaderSource(e),h)}else return c}function BN(r,e){const n=FN(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HN={[zS]:"Linear",[FS]:"Reinhard",[BS]:"Cineon",[HS]:"ACESFilmic",[VS]:"AgX",[kS]:"Neutral",[GS]:"Custom"};function GN(r,e){const n=HN[e];return n===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cu=new ie;function VN(){At.getLuminanceCoefficients(Cu);const r=Cu.x.toFixed(4),e=Cu.y.toFixed(4),n=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kN(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function XN(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function WN(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return n}function Al(r){return r!==""}function fy(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qN=/^[ \t]*#include +<([\w\d./]+)>/gm;function fm(r){return r.replace(qN,YN)}const jN=new Map;function YN(r,e){let n=_t[e];if(n===void 0){const a=jN.get(e);if(a!==void 0)n=_t[a],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fm(n)}const ZN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hy(r){return r.replace(ZN,KN)}function KN(r,e,n,a){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function py(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const QN={[Lu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function $N(r){return QN[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JN={[cs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[nf]:"ENVMAP_TYPE_CUBE_UV"};function eL(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":JN[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const tL={[vo]:"ENVMAP_MODE_REFRACTION"};function nL(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":tL[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iL={[IS]:"ENVMAP_BLENDING_MULTIPLY",[k3]:"ENVMAP_BLENDING_MIX",[X3]:"ENVMAP_BLENDING_ADD"};function aL(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":iL[r.combine]||"ENVMAP_BLENDING_NONE"}function rL(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function sL(r,e,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=$N(n),p=eL(n),_=nL(n),v=aL(n),g=rL(n),S=kN(n),E=XN(c),D=l.createProgram();let b,y,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Al).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Al).join(`
`),y.length>0&&(y+=`
`)):(b=[py(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),y=[py(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?_t.tonemapping_pars_fragment:"",n.toneMapping!==aa?GN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,BN("linearToOutputTexel",n.outputColorSpace),VN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),f=fm(f),f=fy(f,n),f=dy(f,n),h=fm(h),h=fy(h,n),h=dy(h,n),f=hy(f),h=hy(h),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",n.glslVersion===Sx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=I+b+f,N=I+y+h,O=ly(l,l.VERTEX_SHADER,F),L=ly(l,l.FRAGMENT_SHADER,N);l.attachShader(D,O),l.attachShader(D,L),n.index0AttributeName!==void 0?l.bindAttribLocation(D,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function B(k){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(D)||"",de=l.getShaderInfoLog(O)||"",he=l.getShaderInfoLog(L)||"",Q=Z.trim(),U=de.trim(),V=he.trim();let J=!0,pe=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,O,L);else{const Te=uy(l,O,"vertex"),A=uy(l,L,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Q+`
`+Te+`
`+A)}else Q!==""?ct("WebGLProgram: Program Info Log:",Q):(U===""||V==="")&&(pe=!1);pe&&(k.diagnostics={runnable:J,programLog:Q,vertexShader:{log:U,prefix:b},fragmentShader:{log:V,prefix:y}})}l.deleteShader(O),l.deleteShader(L),T=new zu(l,D),z=WN(l,D)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(D,PN)),q},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IN++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=O,this.fragmentShader=L,this}let oL=0;class lL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const l=this._getShaderCacheForMaterial(e);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new cL(e),n.set(e,a)),a}}class cL{constructor(e){this.id=oL++,this.code=e,this.usedTimes=0}}function uL(r){return r===us||r===Gu||r===Vu}function fL(r,e,n,a,l,c){const f=new eb,h=new lL,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,z,q,k,Z,de){const he=k.fog,Q=Z.geometry,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=e.get(T.envMap||U,V),pe=J&&J.mapping===nf?J.image.height:null,Te=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const A=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,G=A!==void 0?A.length:0;let se=0;Q.morphAttributes.position!==void 0&&(se=1),Q.morphAttributes.normal!==void 0&&(se=2),Q.morphAttributes.color!==void 0&&(se=3);let Me,Re,ee,ue;if(Te){const We=ea[Te];Me=We.vertexShader,Re=We.fragmentShader}else{Me=T.vertexShader,Re=T.fragmentShader;const We=h.getVertexShaderStage(T),an=h.getFragmentShaderStage(T);h.update(T,We,an),ee=We.id,ue=an.id}const _e=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Qe=Z.isInstancedMesh===!0,ye=Z.isBatchedMesh===!0,$e=!!T.map,lt=!!T.matcap,ft=!!J,pt=!!T.aoMap,et=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,Yt=!!T.normalMap,$t=!!T.displacementMap,nn=!!T.emissiveMap,Qt=!!T.metalnessMap,ln=!!T.roughnessMap,Y=T.anisotropy>0,Xt=T.clearcoat>0,Ut=T.dispersion>0,P=T.iridescence>0,M=T.sheen>0,$=T.transmission>0,oe=Y&&!!T.anisotropyMap,ge=Xt&&!!T.clearcoatMap,we=Xt&&!!T.clearcoatNormalMap,Oe=Xt&&!!T.clearcoatRoughnessMap,me=P&&!!T.iridescenceMap,ve=P&&!!T.iridescenceThicknessMap,Ne=M&&!!T.sheenColorMap,Ge=M&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Pe=!!T.specularColorMap,tt=!!T.specularIntensityMap,nt=$&&!!T.transmissionMap,ut=$&&!!T.thicknessMap,W=!!T.gradientMap,De=!!T.alphaMap,Se=T.alphaTest>0,Ue=!!T.alphaHash,He=!!T.extensions;let Ae=aa;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const Ze={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:Me,fragmentShader:Re,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ye,batchingColor:ye&&Z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Z.instanceColor!==null,instancingMorph:Qe&&Z.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:lt,envMap:ft,envMapMode:ft&&J.mapping,envMapCubeUVHeight:pe,aoMap:pt,lightMap:et,bumpMap:Ct,normalMap:Yt,displacementMap:$t,emissiveMap:nn,normalMapObjectSpace:Yt&&T.normalMapType===j3,normalMapTangentSpace:Yt&&T.normalMapType===_x,packedNormalMap:Yt&&T.normalMapType===_x&&uL(T.normalMap.format),metalnessMap:Qt,roughnessMap:ln,anisotropy:Y,anisotropyMap:oe,clearcoat:Xt,clearcoatMap:ge,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,dispersion:Ut,iridescence:P,iridescenceMap:me,iridescenceThicknessMap:ve,sheen:M,sheenColorMap:Ne,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Pe,specularIntensityMap:tt,transmission:$,transmissionMap:nt,thicknessMap:ut,gradientMap:W,opaque:T.transparent===!1&&T.blending===fo&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:Ue,combine:T.combine,mapUv:$e&&E(T.map.channel),aoMapUv:pt&&E(T.aoMap.channel),lightMapUv:et&&E(T.lightMap.channel),bumpMapUv:Ct&&E(T.bumpMap.channel),normalMapUv:Yt&&E(T.normalMap.channel),displacementMapUv:$t&&E(T.displacementMap.channel),emissiveMapUv:nn&&E(T.emissiveMap.channel),metalnessMapUv:Qt&&E(T.metalnessMap.channel),roughnessMapUv:ln&&E(T.roughnessMap.channel),anisotropyMapUv:oe&&E(T.anisotropyMap.channel),clearcoatMapUv:ge&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&E(T.sheenRoughnessMap.channel),specularMapUv:ze&&E(T.specularMap.channel),specularColorMapUv:Pe&&E(T.specularColorMap.channel),specularIntensityMapUv:tt&&E(T.specularIntensityMap.channel),transmissionMapUv:nt&&E(T.transmissionMap.channel),thicknessMapUv:ut&&E(T.thicknessMap.channel),alphaMapUv:De&&E(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Yt||Y),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Q.attributes.uv&&($e||De),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&Yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Le,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:nn&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Na,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function b(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)z.push(q),z.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(z,T),I(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function I(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),z.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const z=S[T.type];let q;if(z){const k=ea[z];q=OR.clone(k.uniforms)}else q=T.uniforms;return q}function N(T,z){let q=_.get(z);return q!==void 0?++q.usedTimes:(q=new sL(r,z,T,l),p.push(q),_.set(z,q)),q}function O(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:D,getProgramCacheKey:b,getUniforms:F,acquireProgram:N,releaseProgram:O,releaseShaderCache:L,programs:p,dispose:B}}function dL(){let r=new WeakMap;function e(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:l,dispose:c}}function hL(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function my(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gy(){const r=[];let e=0;const n=[],a=[],l=[];function c(){e=0,n.length=0,a.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,D,b,y){let I=r[e];return I===void 0?(I={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:b,group:y},r[e]=I):(I.id=g.id,I.object=g,I.geometry=S,I.material=E,I.materialVariant=f(g),I.groupOrder=D,I.renderOrder=g.renderOrder,I.z=b,I.group=y),e++,I}function m(g,S,E,D,b,y){const I=h(g,S,E,D,b,y);E.transmission>0?a.push(I):E.transparent===!0?l.push(I):n.push(I)}function p(g,S,E,D,b,y){const I=h(g,S,E,D,b,y);E.transmission>0?a.unshift(I):E.transparent===!0?l.unshift(I):n.unshift(I)}function _(g,S,E){n.length>1&&n.sort(g||hL),a.length>1&&a.sort(S||my),l.length>1&&l.sort(S||my),E&&(n.reverse(),a.reverse(),l.reverse())}function v(){for(let g=e,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function pL(){let r=new WeakMap;function e(a,l){const c=r.get(a);let f;return c===void 0?(f=new gy,r.set(a,[f])):l>=c.length?(f=new gy,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:e,dispose:n}}function mL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Et};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=n,n}}}function gL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let vL=0;function _L(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xL(r){const e=new mL,n=gL(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ie);const l=new ie,c=new dn,f=new dn;function h(p){let _=0,v=0,g=0;for(let z=0;z<9;z++)a.probe[z].set(0,0,0);let S=0,E=0,D=0,b=0,y=0,I=0,F=0,N=0,O=0,L=0,B=0;p.sort(_L);for(let z=0,q=p.length;z<q;z++){const k=p[z],Z=k.color,de=k.intensity,he=k.distance;let Q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===us?Q=k.shadow.map.texture:Q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=Z.r*de,v+=Z.g*de,g+=Z.b*de;else if(k.isLightProbe){for(let U=0;U<9;U++)a.probe[U].addScaledVector(k.sh.coefficients[U],de);B++}else if(k.isDirectionalLight){const U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,J=n.get(k);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,a.directionalShadow[S]=J,a.directionalShadowMap[S]=Q,a.directionalShadowMatrix[S]=k.shadow.matrix,I++}a.directional[S]=U,S++}else if(k.isSpotLight){const U=e.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(Z).multiplyScalar(de),U.distance=he,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,a.spot[D]=U;const V=k.shadow;if(k.map&&(a.spotLightMap[O]=k.map,O++,V.updateMatrices(k),k.castShadow&&L++),a.spotLightMatrix[D]=V.matrix,k.castShadow){const J=n.get(k);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,a.spotShadow[D]=J,a.spotShadowMap[D]=Q,N++}D++}else if(k.isRectAreaLight){const U=e.get(k);U.color.copy(Z).multiplyScalar(de),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),a.rectArea[b]=U,b++}else if(k.isPointLight){const U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),U.distance=k.distance,U.decay=k.decay,k.castShadow){const V=k.shadow,J=n.get(k);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,a.pointShadow[E]=J,a.pointShadowMap[E]=Q,a.pointShadowMatrix[E]=k.shadow.matrix,F++}a.point[E]=U,E++}else if(k.isHemisphereLight){const U=e.get(k);U.skyColor.copy(k.color).multiplyScalar(de),U.groundColor.copy(k.groundColor).multiplyScalar(de),a.hemi[y]=U,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Be.LTC_FLOAT_1,a.rectAreaLTC2=Be.LTC_FLOAT_2):(a.rectAreaLTC1=Be.LTC_HALF_1,a.rectAreaLTC2=Be.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==D||T.rectAreaLength!==b||T.hemiLength!==y||T.numDirectionalShadows!==I||T.numPointShadows!==F||T.numSpotShadows!==N||T.numSpotMaps!==O||T.numLightProbes!==B)&&(a.directional.length=S,a.spot.length=D,a.rectArea.length=b,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=F,a.pointShadowMap.length=F,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=F,a.spotLightMatrix.length=N+O-L,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=B,T.directionalLength=S,T.pointLength=E,T.spotLength=D,T.rectAreaLength=b,T.hemiLength=y,T.numDirectionalShadows=I,T.numPointShadows=F,T.numSpotShadows=N,T.numSpotMaps=O,T.numLightProbes=B,a.version=vL++)}function m(p,_){let v=0,g=0,S=0,E=0,D=0;const b=_.matrixWorldInverse;for(let y=0,I=p.length;y<I;y++){const F=p[y];if(F.isDirectionalLight){const N=a.directional[v];N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),v++}else if(F.isSpotLight){const N=a.spot[S];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),S++}else if(F.isRectAreaLight){const N=a.rectArea[E];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),f.identity(),c.copy(F.matrixWorld),c.premultiply(b),f.extractRotation(c),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(F.isPointLight){const N=a.point[g];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){const N=a.hemi[D];N.direction.setFromMatrixPosition(F.matrixWorld),N.direction.transformDirection(b),D++}}}return{setup:h,setupView:m,state:a}}function vy(r){const e=new xL(r),n=[],a=[],l=[];function c(g){v.camera=g,n.length=0,a.length=0,l.length=0}function f(g){n.push(g)}function h(g){a.push(g)}function m(g){l.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function yL(r){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new vy(r),e.set(l,[h])):c>=f.length?(h=new vy(r),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const SL=`void main() {
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
}`,ML=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],EL=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],_y=new dn,Ml=new ie,np=new ie;function TL(r,e,n){let a=new rb;const l=new Pt,c=new Pt,f=new fn,h=new FR,m=new BR,p={},_=n.maxTextureSize,v={[Tr]:ti,[ti]:Tr,[Na]:Na},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:SL,fragmentShader:bL}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ba(E,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let y=this.type;this.render=function(L,B,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===E3&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lu);const z=r.getRenderTarget(),q=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Ua),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const de=y!==this.type;de&&B.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(Q=>Q.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,Q=L.length;he<Q;he++){const U=L[he],V=U.shadow;if(V===void 0){ct("WebGLShadowMap:",U,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const J=V.getFrameExtents();l.multiply(J),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,V.mapSize.y=c.y));const pe=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=pe,V.map===null||de===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Tl){if(U.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ra(l.x,l.y,{format:us,type:za,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),V.map.texture.name=U.name+".shadowMap",V.map.depthTexture=new _o(l.x,l.y,na),V.map.depthTexture.name=U.name+".shadowMapDepth",V.map.depthTexture.format=Fa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn}else U.isPointLight?(V.map=new hb(l.x),V.map.depthTexture=new LR(l.x,sa)):(V.map=new ra(l.x,l.y),V.map.depthTexture=new _o(l.x,l.y,sa)),V.map.depthTexture.name=U.name+".shadowMap",V.map.depthTexture.format=Fa,this.type===Lu?(V.map.depthTexture.compareFunction=pe?Pm:Om,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn);V.camera.updateProjectionMatrix()}const Te=V.map.isWebGLCubeRenderTarget?6:1;for(let A=0;A<Te;A++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,A),r.clear();else{A===0&&(r.setRenderTarget(V.map),r.clear());const G=V.getViewport(A);f.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),Z.viewport(f)}if(U.isPointLight){const G=V.camera,se=V.matrix,Me=U.distance||G.far;Me!==G.far&&(G.far=Me,G.updateProjectionMatrix()),Ml.setFromMatrixPosition(U.matrixWorld),G.position.copy(Ml),np.copy(G.position),np.add(ML[A]),G.up.copy(EL[A]),G.lookAt(np),G.updateMatrixWorld(),se.makeTranslation(-Ml.x,-Ml.y,-Ml.z),_y.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),V._frustum.setFromProjectionMatrix(_y,G.coordinateSystem,G.reversedDepth)}else V.updateMatrices(U);a=V.getFrustum(),N(B,T,V.camera,U,this.type)}V.isPointLightShadow!==!0&&this.type===Tl&&I(V,T),V.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(z,q,k)};function I(L,B){const T=e.update(D);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ra(l.x,l.y,{format:us,type:za})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,D,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(B,null,T,S,D,null)}function F(L,B,T,z){let q=null;const k=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)q=k;else if(q=T.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=q.uuid,de=B.uuid;let he=p[Z];he===void 0&&(he={},p[Z]=he);let Q=he[de];Q===void 0&&(Q=q.clone(),he[de]=Q,B.addEventListener("dispose",O)),q=Q}if(q.visible=B.visible,q.wireframe=B.wireframe,z===Tl?q.side=B.shadowSide!==null?B.shadowSide:B.side:q.side=B.shadowSide!==null?B.shadowSide:v[B.side],q.alphaMap=B.alphaMap,q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,q.map=B.map,q.clipShadows=B.clipShadows,q.clippingPlanes=B.clippingPlanes,q.clipIntersection=B.clipIntersection,q.displacementMap=B.displacementMap,q.displacementScale=B.displacementScale,q.displacementBias=B.displacementBias,q.wireframeLinewidth=B.wireframeLinewidth,q.linewidth=B.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Z=r.properties.get(q);Z.light=T}return q}function N(L,B,T,z,q){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Tl)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const de=e.update(L),he=L.material;if(Array.isArray(he)){const Q=de.groups;for(let U=0,V=Q.length;U<V;U++){const J=Q[U],pe=he[J.materialIndex];if(pe&&pe.visible){const Te=F(L,pe,z,q);L.onBeforeShadow(r,L,B,T,de,Te,J),r.renderBufferDirect(T,null,de,Te,L,J),L.onAfterShadow(r,L,B,T,de,Te,J)}}}else if(he.visible){const Q=F(L,he,z,q);L.onBeforeShadow(r,L,B,T,de,Q,null),r.renderBufferDirect(T,null,de,Q,L,null),L.onAfterShadow(r,L,B,T,de,Q,null)}}const Z=L.children;for(let de=0,he=Z.length;de<he;de++)N(Z[de],B,T,z,q)}function O(L){L.target.removeEventListener("dispose",O);for(const T in p){const z=p[T],q=L.target.uuid;q in z&&(z[q].dispose(),delete z[q])}}}function AL(r,e){function n(){let W=!1;const De=new fn;let Se=null;const Ue=new fn(0,0,0,0);return{setMask:function(He){Se!==He&&!W&&(r.colorMask(He,He,He,He),Se=He)},setLocked:function(He){W=He},setClear:function(He,Ae,Ze,We,an){an===!0&&(He*=We,Ae*=We,Ze*=We),De.set(He,Ae,Ze,We),Ue.equals(De)===!1&&(r.clearColor(He,Ae,Ze,We),Ue.copy(De))},reset:function(){W=!1,Se=null,Ue.set(-1,0,0,0)}}}function a(){let W=!1,De=!1,Se=null,Ue=null,He=null;return{setReversed:function(Ae){if(De!==Ae){const Ze=e.get("EXT_clip_control");Ae?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;const We=He;He=null,this.setClear(We)}},getReversed:function(){return De},setTest:function(Ae){Ae?_e(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Ae){Se!==Ae&&!W&&(r.depthMask(Ae),Se=Ae)},setFunc:function(Ae){if(De&&(Ae=iR[Ae]),Ue!==Ae){switch(Ae){case Mp:r.depthFunc(r.NEVER);break;case Ep:r.depthFunc(r.ALWAYS);break;case Tp:r.depthFunc(r.LESS);break;case go:r.depthFunc(r.LEQUAL);break;case Ap:r.depthFunc(r.EQUAL);break;case Rp:r.depthFunc(r.GEQUAL);break;case Cp:r.depthFunc(r.GREATER);break;case wp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=Ae}},setLocked:function(Ae){W=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,De&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){W=!1,Se=null,Ue=null,He=null,De=!1}}}function l(){let W=!1,De=null,Se=null,Ue=null,He=null,Ae=null,Ze=null,We=null,an=null;return{setTest:function(zt){W||(zt?_e(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(zt){De!==zt&&!W&&(r.stencilMask(zt),De=zt)},setFunc:function(zt,ii,ai){(Se!==zt||Ue!==ii||He!==ai)&&(r.stencilFunc(zt,ii,ai),Se=zt,Ue=ii,He=ai)},setOp:function(zt,ii,ai){(Ae!==zt||Ze!==ii||We!==ai)&&(r.stencilOp(zt,ii,ai),Ae=zt,Ze=ii,We=ai)},setLocked:function(zt){W=zt},setClear:function(zt){an!==zt&&(r.clearStencil(zt),an=zt)},reset:function(){W=!1,De=null,Se=null,Ue=null,He=null,Ae=null,Ze=null,We=null,an=null}}}const c=new n,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],D=null,b=!1,y=null,I=null,F=null,N=null,O=null,L=null,B=null,T=new Et(0,0,0),z=0,q=!1,k=null,Z=null,de=null,he=null,Q=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(pe)[1]),V=J>=1):pe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),V=J>=2);let Te=null,A={};const G=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),Me=new fn().fromArray(G),Re=new fn().fromArray(se);function ee(W,De,Se,Ue){const He=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(W,Ae),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<Se;Ze++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,He):r.texImage2D(De+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,He);return Ae}const ue={};ue[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),_e(r.DEPTH_TEST),f.setFunc(go),Ct(!1),Yt(px),_e(r.CULL_FACE),pt(Ua);function _e(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Le(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Qe(W,De){return g[W]!==De?(r.bindFramebuffer(W,De),g[W]=De,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=De),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=De),!0):!1}function ye(W,De){let Se=E,Ue=!1;if(W){Se=S.get(De),Se===void 0&&(Se=[],S.set(De,Se));const He=W.textures;if(Se.length!==He.length||Se[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Ze=He.length;Ae<Ze;Ae++)Se[Ae]=r.COLOR_ATTACHMENT0+Ae;Se.length=He.length,Ue=!0}}else Se[0]!==r.BACK&&(Se[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(Se)}function $e(W){return D!==W?(r.useProgram(W),D=W,!0):!1}const lt={[ts]:r.FUNC_ADD,[A3]:r.FUNC_SUBTRACT,[R3]:r.FUNC_REVERSE_SUBTRACT};lt[C3]=r.MIN,lt[w3]=r.MAX;const ft={[D3]:r.ZERO,[N3]:r.ONE,[L3]:r.SRC_COLOR,[Sp]:r.SRC_ALPHA,[F3]:r.SRC_ALPHA_SATURATE,[I3]:r.DST_COLOR,[O3]:r.DST_ALPHA,[U3]:r.ONE_MINUS_SRC_COLOR,[bp]:r.ONE_MINUS_SRC_ALPHA,[z3]:r.ONE_MINUS_DST_COLOR,[P3]:r.ONE_MINUS_DST_ALPHA,[B3]:r.CONSTANT_COLOR,[H3]:r.ONE_MINUS_CONSTANT_COLOR,[G3]:r.CONSTANT_ALPHA,[V3]:r.ONE_MINUS_CONSTANT_ALPHA};function pt(W,De,Se,Ue,He,Ae,Ze,We,an,zt){if(W===Ua){b===!0&&(Le(r.BLEND),b=!1);return}if(b===!1&&(_e(r.BLEND),b=!0),W!==T3){if(W!==y||zt!==q){if((I!==ts||O!==ts)&&(r.blendEquation(r.FUNC_ADD),I=ts,O=ts),zt)switch(W){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mx:r.blendFunc(r.ONE,r.ONE);break;case gx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gx:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vx:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}F=null,N=null,L=null,B=null,T.set(0,0,0),z=0,y=W,q=zt}return}He=He||De,Ae=Ae||Se,Ze=Ze||Ue,(De!==I||He!==O)&&(r.blendEquationSeparate(lt[De],lt[He]),I=De,O=He),(Se!==F||Ue!==N||Ae!==L||Ze!==B)&&(r.blendFuncSeparate(ft[Se],ft[Ue],ft[Ae],ft[Ze]),F=Se,N=Ue,L=Ae,B=Ze),(We.equals(T)===!1||an!==z)&&(r.blendColor(We.r,We.g,We.b,an),T.copy(We),z=an),y=W,q=!1}function et(W,De){W.side===Na?Le(r.CULL_FACE):_e(r.CULL_FACE);let Se=W.side===ti;De&&(Se=!Se),Ct(Se),W.blending===fo&&W.transparent===!1?pt(Ua):pt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ue=W.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(W){k!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),k=W)}function Yt(W){W!==b3?(_e(r.CULL_FACE),W!==Z&&(W===px?r.cullFace(r.BACK):W===M3?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),Z=W}function $t(W){W!==de&&(V&&r.lineWidth(W),de=W)}function nn(W,De,Se){W?(_e(r.POLYGON_OFFSET_FILL),(he!==De||Q!==Se)&&(he=De,Q=Se,f.getReversed()&&(De=-De),r.polygonOffset(De,Se))):Le(r.POLYGON_OFFSET_FILL)}function Qt(W){W?_e(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function ln(W){W===void 0&&(W=r.TEXTURE0+U-1),Te!==W&&(r.activeTexture(W),Te=W)}function Y(W,De,Se){Se===void 0&&(Te===null?Se=r.TEXTURE0+U-1:Se=Te);let Ue=A[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},A[Se]=Ue),(Ue.type!==W||Ue.texture!==De)&&(Te!==Se&&(r.activeTexture(Se),Te=Se),r.bindTexture(W,De||ue[W]),Ue.type=W,Ue.texture=De)}function Xt(){const W=A[Te];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ut(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function M(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function $(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function we(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Oe(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function me(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ve(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ne(W){return v[W]!==void 0?v[W]:r.getParameter(W)}function Ge(W,De){v[W]!==De&&(r.pixelStorei(W,De),v[W]=De)}function ze(W){Me.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Me.copy(W))}function Pe(W){Re.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Re.copy(W))}function tt(W,De){let Se=p.get(De);Se===void 0&&(Se=new WeakMap,p.set(De,Se));let Ue=Se.get(W);Ue===void 0&&(Ue=r.getUniformBlockIndex(De,W.name),Se.set(W,Ue))}function nt(W,De){const Ue=p.get(De).get(W);m.get(De)!==Ue&&(r.uniformBlockBinding(De,Ue,W.__bindingPointIndex),m.set(De,Ue))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},Te=null,A={},g={},S=new WeakMap,E=[],D=null,b=!1,y=null,I=null,F=null,N=null,O=null,L=null,B=null,T=new Et(0,0,0),z=0,q=!1,k=null,Z=null,de=null,he=null,Q=null,Me.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:_e,disable:Le,bindFramebuffer:Qe,drawBuffers:ye,useProgram:$e,setBlending:pt,setMaterial:et,setFlipSided:Ct,setCullFace:Yt,setLineWidth:$t,setPolygonOffset:nn,setScissorTest:Qt,activeTexture:ln,bindTexture:Y,unbindTexture:Xt,compressedTexImage2D:Ut,compressedTexImage3D:P,texImage2D:me,texImage3D:ve,pixelStorei:Ge,getParameter:Ne,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:we,texStorage3D:Oe,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:ze,viewport:Pe,reset:ut}}function RL(r,e,n,a,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,M){return E?new OffscreenCanvas(P,M):qu("canvas")}function b(P,M,$){let oe=1;const ge=Ut(P);if((ge.width>$||ge.height>$)&&(oe=$/Math.max(ge.width,ge.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const we=Math.floor(oe*ge.width),Oe=Math.floor(oe*ge.height);g===void 0&&(g=D(we,Oe));const me=M?D(we,Oe):g;return me.width=we,me.height=Oe,me.getContext("2d").drawImage(P,0,0,we,Oe),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+we+"x"+Oe+")."),me}else return"data"in P&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function y(P){return P.generateMipmaps}function I(P){r.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,M,$,oe,ge,we=!1){if(P!==null){if(r[P]!==void 0)return r[P];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Oe;oe&&(Oe=e.get("EXT_texture_norm16"),Oe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===r.RED&&($===r.FLOAT&&(me=r.R32F),$===r.HALF_FLOAT&&(me=r.R16F),$===r.UNSIGNED_BYTE&&(me=r.R8),$===r.UNSIGNED_SHORT&&Oe&&(me=Oe.R16_EXT),$===r.SHORT&&Oe&&(me=Oe.R16_SNORM_EXT)),M===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.R8UI),$===r.UNSIGNED_SHORT&&(me=r.R16UI),$===r.UNSIGNED_INT&&(me=r.R32UI),$===r.BYTE&&(me=r.R8I),$===r.SHORT&&(me=r.R16I),$===r.INT&&(me=r.R32I)),M===r.RG&&($===r.FLOAT&&(me=r.RG32F),$===r.HALF_FLOAT&&(me=r.RG16F),$===r.UNSIGNED_BYTE&&(me=r.RG8),$===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RG16_EXT),$===r.SHORT&&Oe&&(me=Oe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.RG8UI),$===r.UNSIGNED_SHORT&&(me=r.RG16UI),$===r.UNSIGNED_INT&&(me=r.RG32UI),$===r.BYTE&&(me=r.RG8I),$===r.SHORT&&(me=r.RG16I),$===r.INT&&(me=r.RG32I)),M===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.RGB8UI),$===r.UNSIGNED_SHORT&&(me=r.RGB16UI),$===r.UNSIGNED_INT&&(me=r.RGB32UI),$===r.BYTE&&(me=r.RGB8I),$===r.SHORT&&(me=r.RGB16I),$===r.INT&&(me=r.RGB32I)),M===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),$===r.UNSIGNED_INT&&(me=r.RGBA32UI),$===r.BYTE&&(me=r.RGBA8I),$===r.SHORT&&(me=r.RGBA16I),$===r.INT&&(me=r.RGBA32I)),M===r.RGB&&($===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGB16_EXT),$===r.SHORT&&Oe&&(me=Oe.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(me=r.R11F_G11F_B10F)),M===r.RGBA){const ve=we?Xu:At.getTransfer(ge);$===r.FLOAT&&(me=r.RGBA32F),$===r.HALF_FLOAT&&(me=r.RGBA16F),$===r.UNSIGNED_BYTE&&(me=ve===kt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGBA16_EXT),$===r.SHORT&&Oe&&(me=Oe.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function O(P,M){let $;return P?M===null||M===sa||M===Ll?$=r.DEPTH24_STENCIL8:M===na?$=r.DEPTH32F_STENCIL8:M===Nl&&($=r.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===Ll?$=r.DEPTH_COMPONENT24:M===na?$=r.DEPTH_COMPONENT32F:M===Nl&&($=r.DEPTH_COMPONENT16),$}function L(P,M){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function B(P){const M=P.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(P){const M=P.target;M.removeEventListener("dispose",T),k(M)}function z(P){const M=a.get(P);if(M.__webglInit===void 0)return;const $=P.source,oe=S.get($);if(oe){const ge=oe[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&q(P),Object.keys(oe).length===0&&S.delete($)}a.remove(P)}function q(P){const M=a.get(P);r.deleteTexture(M.__webglTexture);const $=P.source,oe=S.get($);delete oe[M.__cacheKey],f.memory.textures--}function k(P){const M=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let ge=0;ge<M.__webglFramebuffer[oe].length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[oe][ge]);else r.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)r.deleteFramebuffer(M.__webglFramebuffer[oe]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=P.textures;for(let oe=0,ge=$.length;oe<ge;oe++){const we=a.get($[oe]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),f.memory.textures--),a.remove($[oe])}a.remove(P)}let Z=0;function de(){Z=0}function he(){return Z}function Q(P){Z=P}function U(){const P=Z;return P>=l.maxTextures&&ct("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),Z+=1,P}function V(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function J(P,M){const $=a.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const oe=P.image;if(oe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Le($,P,M);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+M)}function pe(P,M){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Le($,P,M);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+M)}function Te(P,M){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Le($,P,M);return}n.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+M)}function A(P,M){const $=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){Qe($,P,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+M)}const G={[Dp]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[Np]:r.MIRRORED_REPEAT},se={[Pn]:r.NEAREST,[W3]:r.NEAREST_MIPMAP_NEAREST,[nu]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},Me={[Y3]:r.NEVER,[J3]:r.ALWAYS,[Z3]:r.LESS,[Om]:r.LEQUAL,[K3]:r.EQUAL,[Pm]:r.GEQUAL,[Q3]:r.GREATER,[$3]:r.NOTEQUAL};function Re(P,M){if(M.type===na&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Th||M.magFilter===nu||M.magFilter===as||M.minFilter===Vn||M.minFilter===Th||M.minFilter===nu||M.minFilter===as)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,G[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,G[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,G[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,se[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==nu&&M.minFilter!==as||M.type===na&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function ee(P,M){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",B));const oe=M.source;let ge=S.get(oe);ge===void 0&&(ge={},S.set(oe,ge));const we=V(M);if(we!==P.__cacheKey){ge[we]===void 0&&(ge[we]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ge[we].usedTimes++;const Oe=ge[P.__cacheKey];Oe!==void 0&&(ge[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&q(M)),P.__cacheKey=we,P.__webglTexture=ge[we].texture}return $}function ue(P,M,$){return Math.floor(Math.floor(P/$)/M)}function _e(P,M,$,oe){const we=P.updateRanges;if(we.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,$,oe,M.data);else{we.sort((Ge,ze)=>Ge.start-ze.start);let Oe=0;for(let Ge=1;Ge<we.length;Ge++){const ze=we[Oe],Pe=we[Ge],tt=ze.start+ze.count,nt=ue(Pe.start,M.width,4),ut=ue(ze.start,M.width,4);Pe.start<=tt+1&&nt===ut&&ue(Pe.start+Pe.count-1,M.width,4)===nt?ze.count=Math.max(ze.count,Pe.start+Pe.count-ze.start):(++Oe,we[Oe]=Pe)}we.length=Oe+1;const me=n.getParameter(r.UNPACK_ROW_LENGTH),ve=n.getParameter(r.UNPACK_SKIP_PIXELS),Ne=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,ze=we.length;Ge<ze;Ge++){const Pe=we[Ge],tt=Math.floor(Pe.start/4),nt=Math.ceil(Pe.count/4),ut=tt%M.width,W=Math.floor(tt/M.width),De=nt,Se=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,ut,W,De,Se,$,oe,M.data)}P.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,me),n.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function Le(P,M,$){let oe=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=r.TEXTURE_3D);const ge=ee(P,M),we=M.source;n.bindTexture(oe,P.__webglTexture,r.TEXTURE0+$);const Oe=a.get(we);if(we.version!==Oe.__version||ge===!0){if(n.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Se=At.getPrimaries(At.workingColorSpace),Ue=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),He=M.colorSpace===yr||Se===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ve=b(M.image,!1,l.maxTextureSize);ve=Xt(M,ve);const Ne=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type);let ze=N(M.internalFormat,Ne,Ge,M.normalized,M.colorSpace,M.isVideoTexture);Re(oe,M);let Pe;const tt=M.mipmaps,nt=M.isVideoTexture!==!0,ut=Oe.__version===void 0||ge===!0,W=we.dataReady,De=L(M,ve);if(M.isDepthTexture)ze=O(M.format===rs,M.type),ut&&(nt?n.texStorage2D(r.TEXTURE_2D,1,ze,ve.width,ve.height):n.texImage2D(r.TEXTURE_2D,0,ze,ve.width,ve.height,0,Ne,Ge,null));else if(M.isDataTexture)if(tt.length>0){nt&&ut&&n.texStorage2D(r.TEXTURE_2D,De,ze,tt[0].width,tt[0].height);for(let Se=0,Ue=tt.length;Se<Ue;Se++)Pe=tt[Se],nt?W&&n.texSubImage2D(r.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ne,Ge,Pe.data):n.texImage2D(r.TEXTURE_2D,Se,ze,Pe.width,Pe.height,0,Ne,Ge,Pe.data);M.generateMipmaps=!1}else nt?(ut&&n.texStorage2D(r.TEXTURE_2D,De,ze,ve.width,ve.height),W&&_e(M,ve,Ne,Ge)):n.texImage2D(r.TEXTURE_2D,0,ze,ve.width,ve.height,0,Ne,Ge,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&ut&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,ze,tt[0].width,tt[0].height,ve.depth);for(let Se=0,Ue=tt.length;Se<Ue;Se++)if(Pe=tt[Se],M.format!==Vi)if(Ne!==null)if(nt){if(W)if(M.layerUpdates.size>0){const He=Zx(Pe.width,Pe.height,M.format,M.type);for(const Ae of M.layerUpdates){const Ze=Pe.data.subarray(Ae*He/Pe.data.BYTES_PER_ELEMENT,(Ae+1)*He/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,Ae,Pe.width,Pe.height,1,Ne,Ze)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,ve.depth,Ne,Pe.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,ze,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,ve.depth,Ne,Ge,Pe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Se,ze,Pe.width,Pe.height,ve.depth,0,Ne,Ge,Pe.data)}else{nt&&ut&&n.texStorage2D(r.TEXTURE_2D,De,ze,tt[0].width,tt[0].height);for(let Se=0,Ue=tt.length;Se<Ue;Se++)Pe=tt[Se],M.format!==Vi?Ne!==null?nt?W&&n.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ne,Pe.data):n.compressedTexImage2D(r.TEXTURE_2D,Se,ze,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&n.texSubImage2D(r.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ne,Ge,Pe.data):n.texImage2D(r.TEXTURE_2D,Se,ze,Pe.width,Pe.height,0,Ne,Ge,Pe.data)}else if(M.isDataArrayTexture)if(nt){if(ut&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,ze,ve.width,ve.height,ve.depth),W)if(M.layerUpdates.size>0){const Se=Zx(ve.width,ve.height,M.format,M.type);for(const Ue of M.layerUpdates){const He=ve.data.subarray(Ue*Se/ve.data.BYTES_PER_ELEMENT,(Ue+1)*Se/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,ve.width,ve.height,1,Ne,Ge,He)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ne,Ge,ve.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,Ne,Ge,ve.data);else if(M.isData3DTexture)nt?(ut&&n.texStorage3D(r.TEXTURE_3D,De,ze,ve.width,ve.height,ve.depth),W&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ne,Ge,ve.data)):n.texImage3D(r.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,Ne,Ge,ve.data);else if(M.isFramebufferTexture){if(ut)if(nt)n.texStorage2D(r.TEXTURE_2D,De,ze,ve.width,ve.height);else{let Se=ve.width,Ue=ve.height;for(let He=0;He<De;He++)n.texImage2D(r.TEXTURE_2D,He,ze,Se,Ue,0,Ne,Ge,null),Se>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const Se=r.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),ve.parentNode!==Se){Se.appendChild(ve),v.add(M),Se.onpaint=Ue=>{const He=Ue.changedElements;for(const Ae of v)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},Se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ve);else{const He=r.RGBA,Ae=r.RGBA,Ze=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,He,Ae,Ze,ve)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(tt.length>0){if(nt&&ut){const Se=Ut(tt[0]);n.texStorage2D(r.TEXTURE_2D,De,ze,Se.width,Se.height)}for(let Se=0,Ue=tt.length;Se<Ue;Se++)Pe=tt[Se],nt?W&&n.texSubImage2D(r.TEXTURE_2D,Se,0,0,Ne,Ge,Pe):n.texImage2D(r.TEXTURE_2D,Se,ze,Ne,Ge,Pe);M.generateMipmaps=!1}else if(nt){if(ut){const Se=Ut(ve);n.texStorage2D(r.TEXTURE_2D,De,ze,Se.width,Se.height)}W&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ge,ve)}else n.texImage2D(r.TEXTURE_2D,0,ze,Ne,Ge,ve);y(M)&&I(oe),Oe.__version=we.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Qe(P,M,$){if(M.image.length!==6)return;const oe=ee(P,M),ge=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+$);const we=a.get(ge);if(ge.version!==we.__version||oe===!0){n.activeTexture(r.TEXTURE0+$);const Oe=At.getPrimaries(At.workingColorSpace),me=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),ve=M.colorSpace===yr||Oe===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,ze=[];for(let Ae=0;Ae<6;Ae++)!Ne&&!Ge?ze[Ae]=b(M.image[Ae],!0,l.maxCubemapSize):ze[Ae]=Ge?M.image[Ae].image:M.image[Ae],ze[Ae]=Xt(M,ze[Ae]);const Pe=ze[0],tt=c.convert(M.format,M.colorSpace),nt=c.convert(M.type),ut=N(M.internalFormat,tt,nt,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,De=we.__version===void 0||oe===!0,Se=ge.dataReady;let Ue=L(M,Pe);Re(r.TEXTURE_CUBE_MAP,M);let He;if(Ne){W&&De&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,ut,Pe.width,Pe.height);for(let Ae=0;Ae<6;Ae++){He=ze[Ae].mipmaps;for(let Ze=0;Ze<He.length;Ze++){const We=He[Ze];M.format!==Vi?tt!==null?W?Se&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,We.width,We.height,tt,We.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,ut,We.width,We.height,0,We.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Se&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,We.width,We.height,tt,nt,We.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,ut,We.width,We.height,0,tt,nt,We.data)}}}else{if(He=M.mipmaps,W&&De){He.length>0&&Ue++;const Ae=Ut(ze[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,ut,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ge){W?Se&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ze[Ae].width,ze[Ae].height,tt,nt,ze[Ae].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,ze[Ae].width,ze[Ae].height,0,tt,nt,ze[Ae].data);for(let Ze=0;Ze<He.length;Ze++){const an=He[Ze].image[Ae].image;W?Se&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,an.width,an.height,tt,nt,an.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,ut,an.width,an.height,0,tt,nt,an.data)}}else{W?Se&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,tt,nt,ze[Ae]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,tt,nt,ze[Ae]);for(let Ze=0;Ze<He.length;Ze++){const We=He[Ze];W?Se&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,tt,nt,We.image[Ae]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,ut,tt,nt,We.image[Ae])}}}y(M)&&I(r.TEXTURE_CUBE_MAP),we.__version=ge.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ye(P,M,$,oe,ge,we){const Oe=c.convert($.format,$.colorSpace),me=c.convert($.type),ve=N($.internalFormat,Oe,me,$.normalized,$.colorSpace),Ne=a.get(M),Ge=a.get($);if(Ge.__renderTarget=M,!Ne.__hasExternalTextures){const ze=Math.max(1,M.width>>we),Pe=Math.max(1,M.height>>we);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?n.texImage3D(ge,we,ve,ze,Pe,M.depth,0,Oe,me,null):n.texImage2D(ge,we,ve,ze,Pe,0,Oe,me,null)}n.bindFramebuffer(r.FRAMEBUFFER,P),ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ge,Ge.__webglTexture,0,Qt(M)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ge,Ge.__webglTexture,we),n.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(P,M,$){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const oe=M.depthTexture,ge=oe&&oe.isDepthTexture?oe.type:null,we=O(M.stencilBuffer,ge),Oe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),we,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),we,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,we,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,P)}else{const oe=M.textures;for(let ge=0;ge<oe.length;ge++){const we=oe[ge],Oe=c.convert(we.format,we.colorSpace),me=c.convert(we.type),ve=N(we.internalFormat,Oe,me,we.normalized,we.colorSpace);ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),ve,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),ve,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ve,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(P,M,$){const oe=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=a.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),oe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Re(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=c.convert(M.depthTexture.format),Ge=c.convert(M.depthTexture.type);let ze;M.depthTexture.format===Fa?ze=r.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(ze=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ze,M.width,M.height,0,Ne,Ge,null)}}else J(M.depthTexture,0);const we=ge.__webglTexture,Oe=Qt(M),me=oe?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,ve=M.depthTexture.format===rs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fa)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,me,we,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,me,we,0);else if(M.depthTexture.format===rs)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,me,we,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,me,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(P){const M=a.get(P),$=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const oe=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",ge)};oe.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=oe}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let oe=0;oe<6;oe++)lt(M.__webglFramebuffer[oe],P,oe);else{const oe=P.texture.mipmaps;oe&&oe.length>0?lt(M.__webglFramebuffer[0],P,0):lt(M.__webglFramebuffer,P,0)}else if($){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=r.createRenderbuffer(),$e(M.__webglDepthbuffer[oe],P,!1);else{const ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,we)}}else{const oe=P.texture.mipmaps;if(oe&&oe.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),$e(M.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,we)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(P,M,$){const oe=a.get(P);M!==void 0&&ye(oe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ft(P)}function et(P){const M=P.texture,$=a.get(P),oe=a.get(M);P.addEventListener("dispose",T);const ge=P.textures,we=P.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=M.version,f.memory.textures++),we){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let ve=0;ve<M.mipmaps.length;ve++)$.__webglFramebuffer[me][ve]=r.createFramebuffer()}else $.__webglFramebuffer[me]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)$.__webglFramebuffer[me]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let me=0,ve=ge.length;me<ve;me++){const Ne=a.get(ge[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&ln(P)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<ge.length;me++){const ve=ge[me];$.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const Ne=c.convert(ve.format,ve.colorSpace),Ge=c.convert(ve.type),ze=N(ve.internalFormat,Ne,Ge,ve.normalized,ve.colorSpace,P.isXRRenderTarget===!0),Pe=Qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ze,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,$.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),$e($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){n.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Re(r.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ye($.__webglFramebuffer[me][ve],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else ye($.__webglFramebuffer[me],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(M)&&I(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let me=0,ve=ge.length;me<ve;me++){const Ne=ge[me],Ge=a.get(Ne);let ze=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ze=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ze,Ge.__webglTexture),Re(ze,Ne),ye($.__webglFramebuffer,P,Ne,r.COLOR_ATTACHMENT0+me,ze,0),y(Ne)&&I(ze)}n.unbindTexture()}else{let me=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(me,oe.__webglTexture),Re(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ye($.__webglFramebuffer[ve],P,M,r.COLOR_ATTACHMENT0,me,ve);else ye($.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,me,0);y(M)&&I(me),n.unbindTexture()}P.depthBuffer&&ft(P)}function Ct(P){const M=P.textures;for(let $=0,oe=M.length;$<oe;$++){const ge=M[$];if(y(ge)){const we=F(P),Oe=a.get(ge).__webglTexture;n.bindTexture(we,Oe),I(we),n.unbindTexture()}}}const Yt=[],$t=[];function nn(P){if(P.samples>0){if(ln(P)===!1){const M=P.textures,$=P.width,oe=P.height;let ge=r.COLOR_BUFFER_BIT;const we=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=a.get(P),me=M.length>1;if(me)for(let Ne=0;Ne<M.length;Ne++)n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ve=P.texture.mipmaps;ve&&ve.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const Ge=a.get(M[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,$,oe,0,0,$,oe,ge,r.NEAREST),m===!0&&(Yt.length=0,$t.length=0,Yt.push(r.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Yt.push(we),$t.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Ne=0;Ne<M.length;Ne++){n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const Ge=a.get(M[Ne]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,Ge,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Qt(P){return Math.min(l.maxSamples,P.samples)}function ln(P){const M=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(P){const M=f.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function Xt(P,M){const $=P.colorSpace,oe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==ku&&$!==yr&&(At.getTransfer($)===kt?(oe!==Vi||ge!==Di)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",$)),M}function Ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=de,this.getTextureUnits=he,this.setTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=pe,this.setTexture3D=Te,this.setTextureCube=A,this.rebindTextures=pt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function CL(r,e){function n(a,l=yr){let c;const f=At.getTransfer(l);if(a===Di)return r.UNSIGNED_BYTE;if(a===wm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Dm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===jS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===YS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===WS)return r.BYTE;if(a===qS)return r.SHORT;if(a===Nl)return r.UNSIGNED_SHORT;if(a===Cm)return r.INT;if(a===sa)return r.UNSIGNED_INT;if(a===na)return r.FLOAT;if(a===za)return r.HALF_FLOAT;if(a===ZS)return r.ALPHA;if(a===KS)return r.RGB;if(a===Vi)return r.RGBA;if(a===Fa)return r.DEPTH_COMPONENT;if(a===rs)return r.DEPTH_STENCIL;if(a===QS)return r.RED;if(a===Nm)return r.RED_INTEGER;if(a===us)return r.RG;if(a===Lm)return r.RG_INTEGER;if(a===Um)return r.RGBA_INTEGER;if(a===Uu||a===Ou||a===Pu||a===Iu)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Lp||a===Up||a===Op||a===Pp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Lp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Up)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Op)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Pp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ip||a===zp||a===Fp||a===Bp||a===Hp||a===Gu||a===Gp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ip||a===zp)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Fp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Bp)return c.COMPRESSED_R11_EAC;if(a===Hp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Gu)return c.COMPRESSED_RG11_EAC;if(a===Gp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Vp||a===kp||a===Xp||a===Wp||a===qp||a===jp||a===Yp||a===Zp||a===Kp||a===Qp||a===$p||a===Jp||a===em||a===tm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Vp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Wp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Yp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Zp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===$p)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===em)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===tm)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===nm||a===im||a===am)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===nm)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===im)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===am)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===rm||a===sm||a===Vu||a===om)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===rm)return c.COMPRESSED_RED_RGTC1_EXT;if(a===sm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Vu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===om)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ll?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const wL=`
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

}`;class NL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new ob(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new gi({vertexShader:wL,fragmentShader:DL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ba(new af(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LL extends ds{constructor(e,n){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const D=typeof XRWebGLBinding<"u",b=new NL,y={},I=n.getContextAttributes();let F=null,N=null;const O=[],L=[],B=new Pt;let T=null;const z=new wi;z.viewport=new fn;const q=new wi;q.viewport=new fn;const k=[z,q],Z=new GR;let de=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=O[ee];return ue===void 0&&(ue=new Uh,O[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=O[ee];return ue===void 0&&(ue=new Uh,O[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=O[ee];return ue===void 0&&(ue=new Uh,O[ee]=ue),ue.getHandSpace()};function Q(ee){const ue=L.indexOf(ee.inputSource);if(ue===-1)return;const _e=O[ue];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,p||f),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function U(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",V);for(let ee=0;ee<O.length;ee++){const ue=L[ee];ue!==null&&(L[ee]=null,O[ee].disconnect(ue))}de=null,he=null,b.reset();for(const ee in y)delete y[ee];e.setRenderTarget(F),S=null,g=null,v=null,l=null,N=null,Re.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,a.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,a.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",U),l.addEventListener("inputsourceschange",V),I.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,Qe=null;I.depth&&(Qe=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=I.stencil?rs:Fa,Le=I.stencil?Ll:sa);const ye={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(ye),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ra(g.textureWidth,g.textureHeight,{format:Vi,type:Di,depthTexture:new _o(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const _e={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,_e),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ra(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Re.setContext(l),Re.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(ee){for(let ue=0;ue<ee.removed.length;ue++){const _e=ee.removed[ue],Le=L.indexOf(_e);Le>=0&&(L[Le]=null,O[Le].disconnect(_e))}for(let ue=0;ue<ee.added.length;ue++){const _e=ee.added[ue];let Le=L.indexOf(_e);if(Le===-1){for(let ye=0;ye<O.length;ye++)if(ye>=L.length){L.push(_e),Le=ye;break}else if(L[ye]===null){L[ye]=_e,Le=ye;break}if(Le===-1)break}const Qe=O[Le];Qe&&Qe.connect(_e)}}const J=new ie,pe=new ie;function Te(ee,ue,_e){J.setFromMatrixPosition(ue.matrixWorld),pe.setFromMatrixPosition(_e.matrixWorld);const Le=J.distanceTo(pe),Qe=ue.projectionMatrix.elements,ye=_e.projectionMatrix.elements,$e=Qe[14]/(Qe[10]-1),lt=Qe[14]/(Qe[10]+1),ft=(Qe[9]+1)/Qe[5],pt=(Qe[9]-1)/Qe[5],et=(Qe[8]-1)/Qe[0],Ct=(ye[8]+1)/ye[0],Yt=$e*et,$t=$e*Ct,nn=Le/(-et+Ct),Qt=nn*-et;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Qt),ee.translateZ(nn),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Qe[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const ln=$e+nn,Y=lt+nn,Xt=Yt-Qt,Ut=$t+(Le-Qt),P=ft*lt/Y*ln,M=pt*lt/Y*ln;ee.projectionMatrix.makePerspective(Xt,Ut,P,M,ln,Y),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function A(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let ue=ee.near,_e=ee.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(_e=b.depthFar)),Z.near=q.near=z.near=ue,Z.far=q.far=z.far=_e,(de!==Z.near||he!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),de=Z.near,he=Z.far),Z.layers.mask=ee.layers.mask|6,z.layers.mask=Z.layers.mask&-5,q.layers.mask=Z.layers.mask&-3;const Le=ee.parent,Qe=Z.cameras;A(Z,Le);for(let ye=0;ye<Qe.length;ye++)A(Qe[ye],Le);Qe.length===2?Te(Z,z,q):Z.projectionMatrix.copy(z.projectionMatrix),G(ee,Z,Le)};function G(ee,ue,_e){_e===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=lm*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Z)},this.getCameraTexture=function(ee){return y[ee]};let se=null;function Me(ee,ue){if(_=ue.getViewerPose(p||f),E=ue,_!==null){const _e=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let Le=!1;_e.length!==Z.cameras.length&&(Z.cameras.length=0,Le=!0);for(let lt=0;lt<_e.length;lt++){const ft=_e[lt];let pt=null;if(S!==null)pt=S.getViewport(ft);else{const Ct=v.getViewSubImage(g,ft);pt=Ct.viewport,lt===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(N))}let et=k[lt];et===void 0&&(et=new wi,et.layers.enable(lt),et.viewport=new fn,k[lt]=et),et.matrix.fromArray(ft.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ft.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(pt.x,pt.y,pt.width,pt.height),lt===0&&(Z.matrix.copy(et.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Le===!0&&Z.cameras.push(et)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=a.getBinding();const lt=v.getDepthInformation(_e[0]);lt&&lt.isValid&&lt.texture&&b.init(lt,l.renderState)}if(Qe&&Qe.includes("camera-access")&&D){e.state.unbindTexture(),v=a.getBinding();for(let lt=0;lt<_e.length;lt++){const ft=_e[lt].camera;if(ft){let pt=y[ft];pt||(pt=new ob,y[ft]=pt);const et=v.getCameraImage(ft);pt.sourceTexture=et}}}}for(let _e=0;_e<O.length;_e++){const Le=L[_e],Qe=O[_e];Le!==null&&Qe!==void 0&&Qe.update(Le,ue,p||f)}se&&se(ee,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Re=new fb;Re.setAnimationLoop(Me),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}}const UL=new dn,_b=new ht;_b.set(-1,0,0,0,1,0,0,0,1);function OL(r,e){function n(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function a(b,y){y.color.getRGB(b.fogColor.value,lb(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,I,F,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,N)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),D(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,I,F):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,n(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ti&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,n(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ti&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,n(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,n(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const I=e.get(y),F=I.envMap,N=I.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(UL.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(_b),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,I,F){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*I,b.scale.value=F*.5,y.map&&(b.map.value=y.map,n(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,I){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=I.texture,b.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function D(b,y){const I=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(I.matrixWorld),b.nearDistance.value=I.shadow.camera.near,b.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function PL(r,e,n,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,O){const L=O.program;a.uniformBlockBinding(N,L)}function p(N,O){let L=l[N.id];L===void 0&&(b(N),L=_(N),l[N.id]=L,N.addEventListener("dispose",I));const B=O.program;a.updateUBOMapping(N,B);const T=e.render.frame;c[N.id]!==T&&(g(N),c[N.id]=T)}function _(N){const O=v();N.__bindingPointIndex=O;const L=r.createBuffer(),B=N.__size,T=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,L),L}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const O=l[N.id],L=N.uniforms,B=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,z=L.length;T<z;T++){const q=L[T];if(Array.isArray(q))for(let k=0,Z=q.length;k<Z;k++)S(q[k],T,k,B);else S(q,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,O,L,B){if(D(N,O,L,B)===!0){const T=N.__offset,z=N.value;if(Array.isArray(z)){let q=0;for(let k=0;k<z.length;k++){const Z=z[k],de=y(Z);E(Z,N.__data,q),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(q+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(z,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,N.__data)}}function E(N,O,L){typeof N=="number"||typeof N=="boolean"?O[0]=N:N.isMatrix3?(O[0]=N.elements[0],O[1]=N.elements[1],O[2]=N.elements[2],O[3]=0,O[4]=N.elements[3],O[5]=N.elements[4],O[6]=N.elements[5],O[7]=0,O[8]=N.elements[6],O[9]=N.elements[7],O[10]=N.elements[8],O[11]=0):ArrayBuffer.isView(N)?O.set(new N.constructor(N.buffer,N.byteOffset,O.length)):N.toArray(O,L)}function D(N,O,L,B){const T=N.value,z=O+"_"+L;if(B[z]===void 0)return typeof T=="number"||typeof T=="boolean"?B[z]=T:ArrayBuffer.isView(T)?B[z]=T.slice():B[z]=T.clone(),!0;{const q=B[z];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return B[z]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function b(N){const O=N.uniforms;let L=0;const B=16;for(let z=0,q=O.length;z<q;z++){const k=Array.isArray(O[z])?O[z]:[O[z]];for(let Z=0,de=k.length;Z<de;Z++){const he=k[Z],Q=Array.isArray(he.value)?he.value:[he.value];for(let U=0,V=Q.length;U<V;U++){const J=Q[U],pe=y(J),Te=L%B,A=Te%pe.boundary,G=Te+A;L+=A,G!==0&&B-G<pe.storage&&(L+=B-G),he.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=L,L+=pe.storage}}}const T=L%B;return T>0&&(L+=B-T),N.__size=L,N.__cache={},this}function y(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(O.boundary=16,O.storage=N.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",N),O}function I(N){const O=N.target;O.removeEventListener("dispose",I);const L=f.indexOf(O.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function F(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:F}}const IL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function zL(){return $i===null&&($i=new ER(IL,16,16,us,za),$i.name="DFG_LUT",$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=La,$i.wrapT=La,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class FL{constructor(e={}){const{canvas:n=tR(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Di}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const D=S,b=new Set([Um,Lm,Nm]),y=new Set([Di,sa,Nl,Ll,wm,Dm]),I=new Uint32Array(4),F=new Int32Array(4),N=new ie;let O=null,L=null;const B=[],T=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let k=!1,Z=null,de=null,he=null,Q=null;this._outputColorSpace=Ci;let U=0,V=0,J=null,pe=-1,Te=null;const A=new fn,G=new fn;let se=null;const Me=new Et(0);let Re=0,ee=n.width,ue=n.height,_e=1,Le=null,Qe=null;const ye=new fn(0,0,ee,ue),$e=new fn(0,0,ee,ue);let lt=!1;const ft=new rb;let pt=!1,et=!1;const Ct=new dn,Yt=new ie,$t=new fn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ln(){return J===null?_e:1}let Y=a;function Xt(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rm}`),n.addEventListener("webglcontextlost",an,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",ii,!1),Y===null){const j="webgl2";if(Y=Xt(j,C),Y===null)throw Xt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw wt("WebGLRenderer: "+C.message),C}let Ut,P,M,$,oe,ge,we,Oe,me,ve,Ne,Ge,ze,Pe,tt,nt,ut,W,De,Se,Ue,He,Ae;function Ze(){Ut=new zD(Y),Ut.init(),Ue=new CL(Y,Ut),P=new wD(Y,Ut,e,Ue),M=new AL(Y,Ut),P.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),de=Y.createFramebuffer(),he=Y.createFramebuffer(),Q=Y.createFramebuffer(),$=new HD(Y),oe=new dL,ge=new RL(Y,Ut,M,oe,P,Ue,$),we=new ID(q),Oe=new XR(Y),He=new RD(Y,Oe),me=new FD(Y,Oe,$,He),ve=new VD(Y,me,Oe,He,$),W=new GD(Y,P,ge),tt=new DD(oe),Ne=new fL(q,we,Ut,P,He,tt),Ge=new OL(q,oe),ze=new pL,Pe=new yL(Ut),ut=new AD(q,we,M,ve,E,m),nt=new TL(q,ve,P),Ae=new PL(Y,$,P,M),De=new CD(Y,Ut,$),Se=new BD(Y,Ut,$),$.programs=Ne.programs,q.capabilities=P,q.extensions=Ut,q.properties=oe,q.renderLists=ze,q.shadowMap=nt,q.state=M,q.info=$}Ze(),D!==Di&&(z=new XD(D,n.width,n.height,h,l,c));const We=new LL(q,Y);this.xr=We,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=Ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(ee,ue,!1))},this.getSize=function(C){return C.set(ee,ue)},this.setSize=function(C,j,le=!0){if(We.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,ue=j,n.width=Math.floor(C*_e),n.height=Math.floor(j*_e),le===!0&&(n.style.width=C+"px",n.style.height=j+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(ee*_e,ue*_e).floor()},this.setDrawingBufferSize=function(C,j,le){ee=C,ue=j,_e=le,n.width=Math.floor(C*le),n.height=Math.floor(j*le),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(D===Di){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(ye)},this.setViewport=function(C,j,le,ae){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,j,le,ae),M.viewport(A.copy(ye).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy($e)},this.setScissor=function(C,j,le,ae){C.isVector4?$e.set(C.x,C.y,C.z,C.w):$e.set(C,j,le,ae),M.scissor(G.copy($e).multiplyScalar(_e).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(C){M.setScissorTest(lt=C)},this.setOpaqueSort=function(C){Le=C},this.setTransparentSort=function(C){Qe=C},this.getClearColor=function(C){return C.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,le=!0){let ae=0;if(C){let re=!1;if(J!==null){const Fe=J.texture.format;re=b.has(Fe)}if(re){const Fe=J.texture.type,Xe=y.has(Fe),Ie=ut.getClearColor(),je=ut.getClearAlpha(),qe=Ie.r,it=Ie.g,mt=Ie.b;Xe?(I[0]=qe,I[1]=it,I[2]=mt,I[3]=je,Y.clearBufferuiv(Y.COLOR,0,I)):(F[0]=qe,F[1]=it,F[2]=mt,F[3]=je,Y.clearBufferiv(Y.COLOR,0,F))}else ae|=Y.COLOR_BUFFER_BIT}j&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Z=C},this.dispose=function(){n.removeEventListener("webglcontextlost",an,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",ii,!1),ut.dispose(),ze.dispose(),Pe.dispose(),oe.dispose(),we.dispose(),ve.dispose(),He.dispose(),Ae.dispose(),Ne.dispose(),We.dispose(),We.removeEventListener("sessionstart",mn),We.removeEventListener("sessionend",Dn),jn.stop()};function an(C){C.preventDefault(),Mx("WebGLRenderer: Context Lost."),k=!0}function zt(){Mx("WebGLRenderer: Context Restored."),k=!1;const C=$.autoReset,j=nt.enabled,le=nt.autoUpdate,ae=nt.needsUpdate,re=nt.type;Ze(),$.autoReset=C,nt.enabled=j,nt.autoUpdate=le,nt.needsUpdate=ae,nt.type=re}function ii(C){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ai(C){const j=C.target;j.removeEventListener("dispose",ai),Eo(j)}function Eo(C){To(C),oe.remove(C)}function To(C){const j=oe.get(C).programs;j!==void 0&&(j.forEach(function(le){Ne.releaseProgram(le)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,le,ae,re,Fe){j===null&&(j=nn);const Xe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ie=ka(C,j,le,ae,re);M.setMaterial(ae,Xe);let je=le.index,qe=1;if(ae.wireframe===!0){if(je=me.getWireframeAttribute(le),je===void 0)return;qe=2}const it=le.drawRange,mt=le.attributes.position;let Je=it.start*qe,Dt=(it.start+it.count)*qe;Fe!==null&&(Je=Math.max(Je,Fe.start*qe),Dt=Math.min(Dt,(Fe.start+Fe.count)*qe)),je!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,je.count)):mt!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,mt.count));const rn=Dt-Je;if(rn<0||rn===1/0)return;He.setup(re,ae,Ie,le,je);let Zt,Ft=De;if(je!==null&&(Zt=Oe.get(je),Ft=Se,Ft.setIndex(Zt)),re.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*ln()),Ft.setMode(Y.LINES)):Ft.setMode(Y.TRIANGLES);else if(re.isLine){let Bt=ae.linewidth;Bt===void 0&&(Bt=1),M.setLineWidth(Bt*ln()),re.isLineSegments?Ft.setMode(Y.LINES):re.isLineLoop?Ft.setMode(Y.LINE_LOOP):Ft.setMode(Y.LINE_STRIP)}else re.isPoints?Ft.setMode(Y.POINTS):re.isSprite&&Ft.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Bt=re._multiDrawStarts,Ve=re._multiDrawCounts,Fn=re._multiDrawCount,xt=je?Oe.get(je).bytesPerElement:1,Mn=oe.get(ae).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)Mn.setValue(Y,"_gl_DrawID",ri),Ft.render(Bt[ri]/xt,Ve[ri])}else if(re.isInstancedMesh)Ft.renderInstances(Je,rn,re.count);else if(le.isInstancedBufferGeometry){const Bt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ve=Math.min(le.instanceCount,Bt);Ft.renderInstances(Je,rn,Ve)}else Ft.render(Je,rn)};function Ao(C,j,le){C.transparent===!0&&C.side===Na&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Va(C,j,le),C.side=Tr,C.needsUpdate=!0,Va(C,j,le),C.side=Na):Va(C,j,le)}this.compile=function(C,j,le=null){le===null&&(le=C),L=Pe.get(le),L.init(j),T.push(L),le.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),C!==le&&C.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),L.setupLights();const ae=new Set;return C.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let Xe=0;Xe<Fe.length;Xe++){const Ie=Fe[Xe];Ao(Ie,le,re),ae.add(Ie)}else Ao(Fe,le,re),ae.add(Fe)}),L=T.pop(),ae},this.compileAsync=function(C,j,le=null){const ae=this.compile(C,j,le);return new Promise(re=>{function Fe(){if(ae.forEach(function(Xe){oe.get(Xe).currentProgram.isReady()&&ae.delete(Xe)}),ae.size===0){re(C);return}setTimeout(Fe,10)}Ut.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let hs=null;function Wi(C){hs&&hs(C)}function mn(){jn.stop()}function Dn(){jn.start()}const jn=new fb;jn.setAnimationLoop(Wi),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){hs=C,We.setAnimationLoop(C),C===null?jn.stop():jn.start()},We.addEventListener("sessionstart",mn),We.addEventListener("sessionend",Dn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Z!==null&&Z.renderStart(C,j);const le=We.enabled===!0&&We.isPresenting===!0,ae=z!==null&&(J===null||le)&&z.begin(q,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(j),j=We.getCamera()),C.isScene===!0&&C.onBeforeRender(q,C,j,J),L=Pe.get(C,T.length),L.init(j),L.state.textureUnits=ge.getTextureUnits(),T.push(L),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ft.setFromProjectionMatrix(Ct,ia,j.reversedDepth),et=this.localClippingEnabled,pt=tt.init(this.clippingPlanes,et),O=ze.get(C,B.length),O.init(),B.push(O),We.enabled===!0&&We.isPresenting===!0){const Xe=q.xr.getDepthSensingMesh();Xe!==null&&Ar(Xe,j,-1/0,q.sortObjects)}Ar(C,j,0,q.sortObjects),O.finish(),q.sortObjects===!0&&O.sort(Le,Qe,j.reversedDepth),Qt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Qt&&ut.addToRenderList(O,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&tt.beginShadows();const re=L.state.shadowsArray;if(nt.render(re,C,j),pt===!0&&tt.endShadows(),(ae&&z.hasRenderPass())===!1){const Xe=O.opaque,Ie=O.transmissive;if(L.setupLights(),j.isArrayCamera){const je=j.cameras;if(Ie.length>0)for(let qe=0,it=je.length;qe<it;qe++){const mt=je[qe];Gl(Xe,Ie,C,mt)}Qt&&ut.render(C);for(let qe=0,it=je.length;qe<it;qe++){const mt=je[qe];Hl(O,C,mt,mt.viewport)}}else Ie.length>0&&Gl(Xe,Ie,C,j),Qt&&ut.render(C),Hl(O,C,j)}J!==null&&V===0&&(ge.updateMultisampleRenderTarget(J),ge.updateRenderTargetMipmap(J)),ae&&z.end(q),C.isScene===!0&&C.onAfterRender(q,C,j),He.resetDefaultState(),pe=-1,Te=null,T.pop(),T.length>0?(L=T[T.length-1],ge.setTextureUnits(L.state.textureUnits),pt===!0&&tt.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,Z!==null&&Z.renderEnd()};function Ar(C,j,le,ae){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ft.intersectsSprite(C)){ae&&$t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const Xe=ve.update(C),Ie=C.material;Ie.visible&&O.push(C,Xe,Ie,le,$t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ft.intersectsObject(C))){const Xe=ve.update(C),Ie=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$t.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),$t.copy(Xe.boundingSphere.center)),$t.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ie)){const je=Xe.groups;for(let qe=0,it=je.length;qe<it;qe++){const mt=je[qe],Je=Ie[mt.materialIndex];Je&&Je.visible&&O.push(C,Xe,Je,le,$t.z,mt)}}else Ie.visible&&O.push(C,Xe,Ie,le,$t.z,null)}}const Fe=C.children;for(let Xe=0,Ie=Fe.length;Xe<Ie;Xe++)Ar(Fe[Xe],j,le,ae)}function Hl(C,j,le,ae){const{opaque:re,transmissive:Fe,transparent:Xe}=C;L.setupLightsView(le),pt===!0&&tt.setGlobalState(q.clippingPlanes,le),ae&&M.viewport(A.copy(ae)),re.length>0&&Rr(re,j,le),Fe.length>0&&Rr(Fe,j,le),Xe.length>0&&Rr(Xe,j,le),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Gl(C,j,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const Je=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new ra(1,1,{generateMipmaps:!0,type:Je?za:Di,minFilter:as,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[ae.id],Xe=ae.viewport||A;Fe.setSize(Xe.z*q.transmissionResolutionScale,Xe.w*q.transmissionResolutionScale);const Ie=q.getRenderTarget(),je=q.getActiveCubeFace(),qe=q.getActiveMipmapLevel();q.setRenderTarget(Fe),q.getClearColor(Me),Re=q.getClearAlpha(),Re<1&&q.setClearColor(16777215,.5),q.clear(),Qt&&ut.render(le);const it=q.toneMapping;q.toneMapping=aa;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),pt===!0&&tt.setGlobalState(q.clippingPlanes,ae),Rr(C,le,ae),ge.updateMultisampleRenderTarget(Fe),ge.updateRenderTargetMipmap(Fe),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,rn=j.length;Dt<rn;Dt++){const Zt=j[Dt],{object:Ft,geometry:Bt,material:Ve,group:Fn}=Zt;if(Ve.side===Na&&Ft.layers.test(ae.layers)){const xt=Ve.side;Ve.side=ti,Ve.needsUpdate=!0,Ga(Ft,le,ae,Bt,Ve,Fn),Ve.side=xt,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(ge.updateMultisampleRenderTarget(Fe),ge.updateRenderTargetMipmap(Fe))}q.setRenderTarget(Ie,je,qe),q.setClearColor(Me,Re),mt!==void 0&&(ae.viewport=mt),q.toneMapping=it}function Rr(C,j,le){const ae=j.isScene===!0?j.overrideMaterial:null;for(let re=0,Fe=C.length;re<Fe;re++){const Xe=C[re],{object:Ie,geometry:je,group:qe}=Xe;let it=Xe.material;it.allowOverride===!0&&ae!==null&&(it=ae),Ie.layers.test(le.layers)&&Ga(Ie,j,le,je,it,qe)}}function Ga(C,j,le,ae,re,Fe){C.onBeforeRender(q,j,le,ae,re,Fe),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(q,j,le,ae,C,Fe),re.transparent===!0&&re.side===Na&&re.forceSinglePass===!1?(re.side=ti,re.needsUpdate=!0,q.renderBufferDirect(le,j,ae,re,C,Fe),re.side=Tr,re.needsUpdate=!0,q.renderBufferDirect(le,j,ae,re,C,Fe),re.side=Na):q.renderBufferDirect(le,j,ae,re,C,Fe),C.onAfterRender(q,j,le,ae,re,Fe)}function Va(C,j,le){j.isScene!==!0&&(j=nn);const ae=oe.get(C),re=L.state.lights,Fe=L.state.shadowsArray,Xe=re.state.version,Ie=Ne.getParameters(C,re.state,Fe,j,le,L.state.lightProbeGridArray),je=Ne.getProgramCacheKey(Ie);let qe=ae.programs;ae.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?j.environment:null,ae.fog=j.fog;const it=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ae.envMap=we.get(C.envMap||ae.environment,it),ae.envMapRotation=ae.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",ai),qe=new Map,ae.programs=qe);let mt=qe.get(je);if(mt!==void 0){if(ae.currentProgram===mt&&ae.lightsStateVersion===Xe)return la(C,Ie),mt}else Ie.uniforms=Ne.getUniforms(C),Z!==null&&C.isNodeMaterial&&Z.build(C,le,Ie),C.onBeforeCompile(Ie,q),mt=Ne.acquireProgram(Ie,je),qe.set(je,mt),ae.uniforms=Ie.uniforms;const Je=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=tt.uniform),la(C,Ie),ae.needsLights=Vl(C),ae.lightsStateVersion=Xe,ae.needsLights&&(Je.ambientLightColor.value=re.state.ambient,Je.lightProbe.value=re.state.probe,Je.directionalLights.value=re.state.directional,Je.directionalLightShadows.value=re.state.directionalShadow,Je.spotLights.value=re.state.spot,Je.spotLightShadows.value=re.state.spotShadow,Je.rectAreaLights.value=re.state.rectArea,Je.ltc_1.value=re.state.rectAreaLTC1,Je.ltc_2.value=re.state.rectAreaLTC2,Je.pointLights.value=re.state.point,Je.pointLightShadows.value=re.state.pointShadow,Je.hemisphereLights.value=re.state.hemi,Je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Je.spotLightMatrix.value=re.state.spotLightMatrix,Je.spotLightMap.value=re.state.spotLightMap,Je.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=mt,ae.uniformsList=null,mt}function oa(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=zu.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function la(C,j){const le=oe.get(C);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function Cr(C,j){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;N.setFromMatrixPosition(j.matrixWorld);for(let le=0,ae=C.length;le<ae;le++){const re=C[le];if(re.texture!==null&&re.boundingBox.containsPoint(N))return re}return null}function ka(C,j,le,ae,re){j.isScene!==!0&&(j=nn),ge.resetTextureUnits();const Fe=j.fog,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?j.environment:null,Ie=J===null?q.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:At.workingColorSpace,je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,qe=we.get(ae.envMap||Xe,je),it=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,mt=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,rn=!!le.morphAttributes.color;let Zt=aa;ae.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Zt=q.toneMapping);const Ft=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Bt=Ft!==void 0?Ft.length:0,Ve=oe.get(ae),Fn=L.state.lights;if(pt===!0&&(et===!0||C!==Te)){const It=C===Te&&ae.id===pe;tt.setState(ae,C,It)}let xt=!1;ae.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Fn.state.version||Ve.outputColorSpace!==Ie||re.isBatchedMesh&&Ve.batching===!1||!re.isBatchedMesh&&Ve.batching===!0||re.isBatchedMesh&&Ve.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ve.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ve.instancing===!1||!re.isInstancedMesh&&Ve.instancing===!0||re.isSkinnedMesh&&Ve.skinning===!1||!re.isSkinnedMesh&&Ve.skinning===!0||re.isInstancedMesh&&Ve.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ve.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ve.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ve.instancingMorph===!1&&re.morphTexture!==null||Ve.envMap!==qe||ae.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==tt.numPlanes||Ve.numIntersection!==tt.numIntersection)||Ve.vertexAlphas!==it||Ve.vertexTangents!==mt||Ve.morphTargets!==Je||Ve.morphNormals!==Dt||Ve.morphColors!==rn||Ve.toneMapping!==Zt||Ve.morphTargetsCount!==Bt||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ve.__version=ae.version);let Mn=Ve.currentProgram;xt===!0&&(Mn=Va(ae,j,re),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Mn,Ve));let ri=!1,Ni=!1,si=!1;const Ht=Mn.getUniforms(),sn=Ve.uniforms;if(M.useProgram(Mn.program)&&(ri=!0,Ni=!0,si=!0),ae.id!==pe&&(pe=ae.id,Ni=!0),Ve.needsLights){const It=Cr(L.state.lightProbeGridArray,re);Ve.lightProbeGrid!==It&&(Ve.lightProbeGrid=It,Ni=!0)}if(ri||Te!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(Y,"projectionMatrix",C.projectionMatrix),Ht.setValue(Y,"viewMatrix",C.matrixWorldInverse);const qi=Ht.map.cameraPosition;qi!==void 0&&qi.setValue(Y,Yt.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&Ht.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),Te!==C&&(Te=C,Ni=!0,si=!0)}if(Ve.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ht.setValue(Y,"directionalShadowMap",Fn.state.directionalShadowMap,ge),Fn.state.spotShadowMap.length>0&&Ht.setValue(Y,"spotShadowMap",Fn.state.spotShadowMap,ge),Fn.state.pointShadowMap.length>0&&Ht.setValue(Y,"pointShadowMap",Fn.state.pointShadowMap,ge)),re.isSkinnedMesh){Ht.setOptional(Y,re,"bindMatrix"),Ht.setOptional(Y,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Ht.setValue(Y,"boneTexture",It.boneTexture,ge))}re.isBatchedMesh&&(Ht.setOptional(Y,re,"batchingTexture"),Ht.setValue(Y,"batchingTexture",re._matricesTexture,ge),Ht.setOptional(Y,re,"batchingIdTexture"),Ht.setValue(Y,"batchingIdTexture",re._indirectTexture,ge),Ht.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&Ht.setValue(Y,"batchingColorTexture",re._colorsTexture,ge));const Li=le.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&W.update(re,le,Mn),(Ni||Ve.receiveShadow!==re.receiveShadow)&&(Ve.receiveShadow=re.receiveShadow,Ht.setValue(Y,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&j.environment!==null&&(sn.envMapIntensity.value=j.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=zL()),Ni){if(Ht.setValue(Y,"toneMappingExposure",q.toneMappingExposure),Ve.needsLights&&gn(sn,si),Fe&&ae.fog===!0&&Ge.refreshFogUniforms(sn,Fe),Ge.refreshMaterialUniforms(sn,ae,_e,ue,L.state.transmissionRenderTarget[C.id]),Ve.needsLights&&Ve.lightProbeGrid){const It=Ve.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}zu.upload(Y,oa(Ve),sn,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(zu.upload(Y,oa(Ve),sn,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(Y,"center",re.center),Ht.setValue(Y,"modelViewMatrix",re.modelViewMatrix),Ht.setValue(Y,"normalMatrix",re.normalMatrix),Ht.setValue(Y,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const It=ae.uniformsGroups;for(let qi=0,Xa=It.length;qi<Xa;qi++){const wr=It[qi];Ae.update(wr,Mn),Ae.bind(wr,Mn)}}return Mn}function gn(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Vl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,j,le){const ae=oe.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),oe.get(C.texture).__webglTexture=j,oe.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const le=oe.get(C);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,le=0){J=C,U=j,V=le;let ae=null,re=!1,Fe=!1;if(C){const Ie=oe.get(C);if(Ie.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Ie.__webglFramebuffer),A.copy(C.viewport),G.copy(C.scissor),se=C.scissorTest,M.viewport(A),M.scissor(G),M.setScissorTest(se),pe=-1;return}else if(Ie.__webglFramebuffer===void 0)ge.setupRenderTarget(C);else if(Ie.__hasExternalTextures)ge.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Ie.__boundDepthTexture!==it){if(it!==null&&oe.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const qe=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[j])?ae=qe[j][le]:ae=qe[j],re=!0):C.samples>0&&ge.useMultisampledRTT(C)===!1?ae=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[le]:ae=qe,A.copy(C.viewport),G.copy(C.scissor),se=C.scissorTest}else A.copy(ye).multiplyScalar(_e).floor(),G.copy($e).multiplyScalar(_e).floor(),se=lt;if(le!==0&&(ae=de),M.bindFramebuffer(Y.FRAMEBUFFER,ae)&&M.drawBuffers(C,ae),M.viewport(A),M.scissor(G),M.setScissorTest(se),re){const Ie=oe.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,le)}else if(Fe){const Ie=j;for(let je=0;je<C.textures.length;je++){const qe=oe.get(C.textures[je]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+je,qe.__webglTexture,le,Ie)}}else if(C!==null&&le!==0){const Ie=oe.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ie.__webglTexture,le)}pe=-1},this.readRenderTargetPixels=function(C,j,le,ae,re,Fe,Xe,Ie=0){if(!(C&&C.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(je=je[Xe]),je){M.bindFramebuffer(Y.FRAMEBUFFER,je);try{const qe=C.textures[Ie],it=qe.format,mt=qe.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!P.textureFormatReadable(it)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(mt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ae&&le>=0&&le<=C.height-re&&Y.readPixels(j,le,ae,re,Ue.convert(it),Ue.convert(mt),Fe)}finally{const qe=J!==null?oe.get(J).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,j,le,ae,re,Fe,Xe,Ie=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(je=je[Xe]),je)if(j>=0&&j<=C.width-ae&&le>=0&&le<=C.height-re){M.bindFramebuffer(Y.FRAMEBUFFER,je);const qe=C.textures[Ie],it=qe.format,mt=qe.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!P.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Fe.byteLength,Y.STREAM_READ),Y.readPixels(j,le,ae,re,Ue.convert(it),Ue.convert(mt),0);const Dt=J!==null?oe.get(J).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,Dt);const rn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await nR(Y,rn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Fe),Y.deleteBuffer(Je),Y.deleteSync(rn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,le=0){const ae=Math.pow(2,-le),re=Math.floor(C.image.width*ae),Fe=Math.floor(C.image.height*ae),Xe=j!==null?j.x:0,Ie=j!==null?j.y:0;ge.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,le,0,0,Xe,Ie,re,Fe),M.unbindTexture()},this.copyTextureToTexture=function(C,j,le=null,ae=null,re=0,Fe=0){let Xe,Ie,je,qe,it,mt,Je,Dt,rn;const Zt=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(le!==null)Xe=le.max.x-le.min.x,Ie=le.max.y-le.min.y,je=le.isBox3?le.max.z-le.min.z:1,qe=le.min.x,it=le.min.y,mt=le.isBox3?le.min.z:0;else{const sn=Math.pow(2,-re);Xe=Math.floor(Zt.width*sn),Ie=Math.floor(Zt.height*sn),C.isDataArrayTexture?je=Zt.depth:C.isData3DTexture?je=Math.floor(Zt.depth*sn):je=1,qe=0,it=0,mt=0}ae!==null?(Je=ae.x,Dt=ae.y,rn=ae.z):(Je=0,Dt=0,rn=0);const Ft=Ue.convert(j.format),Bt=Ue.convert(j.type);let Ve;j.isData3DTexture?(ge.setTexture3D(j,0),Ve=Y.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ge.setTexture2DArray(j,0),Ve=Y.TEXTURE_2D_ARRAY):(ge.setTexture2D(j,0),Ve=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment);const Fn=M.getParameter(Y.UNPACK_ROW_LENGTH),xt=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(Y.UNPACK_SKIP_PIXELS),ri=M.getParameter(Y.UNPACK_SKIP_ROWS),Ni=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Zt.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Zt.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(Y.UNPACK_SKIP_ROWS,it),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);const si=C.isDataArrayTexture||C.isData3DTexture,Ht=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const sn=oe.get(C),Li=oe.get(j),It=oe.get(sn.__renderTarget),qi=oe.get(Li.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Xa=0;Xa<je;Xa++)si&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,oe.get(C).__webglTexture,re,mt+Xa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,oe.get(j).__webglTexture,Fe,rn+Xa)),Y.blitFramebuffer(qe,it,Xe,Ie,Je,Dt,Xe,Ie,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||C.isRenderTargetTexture||oe.has(C)){const sn=oe.get(C),Li=oe.get(j);M.bindFramebuffer(Y.READ_FRAMEBUFFER,he),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Q);for(let It=0;It<je;It++)si?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,sn.__webglTexture,re,mt+It):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,sn.__webglTexture,re),Ht?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Li.__webglTexture,Fe,rn+It):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Li.__webglTexture,Fe),re!==0?Y.blitFramebuffer(qe,it,Xe,Ie,Je,Dt,Xe,Ie,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ht?Y.copyTexSubImage3D(Ve,Fe,Je,Dt,rn+It,qe,it,Xe,Ie):Y.copyTexSubImage2D(Ve,Fe,Je,Dt,qe,it,Xe,Ie);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(Ve,Fe,Je,Dt,rn,Xe,Ie,je,Ft,Bt,Zt.data):j.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ve,Fe,Je,Dt,rn,Xe,Ie,je,Ft,Zt.data):Y.texSubImage3D(Ve,Fe,Je,Dt,rn,Xe,Ie,je,Ft,Bt,Zt):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Fe,Je,Dt,Xe,Ie,Ft,Bt,Zt.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Fe,Je,Dt,Zt.width,Zt.height,Ft,Zt.data):Y.texSubImage2D(Y.TEXTURE_2D,Fe,Je,Dt,Xe,Ie,Ft,Bt,Zt);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Fn),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(Y.UNPACK_SKIP_ROWS,ri),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ni),Fe===0&&j.generateMipmaps&&Y.generateMipmap(Ve),M.unbindTexture()},this.initRenderTarget=function(C){oe.get(C).__webglFramebuffer===void 0&&ge.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ge.setTextureCube(C,0):C.isData3DTexture?ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ge.setTexture2DArray(C,0):ge.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){U=0,V=0,J=null,M.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}const BL=new Et(12764882),HL=new Et(13159638),co=4500,es=91,GL=42,VL=new Et(15253624),kL=`
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
`;function ZL(){const r=new Float32Array(co*3),e=new Float32Array(co),n=new Float32Array(co);for(let a=0;a<co;a++){const l=24+Math.random()*36,c=Math.random()*Math.PI*2,f=(Math.random()-.5)*1.1;r[a*3]=l*Math.cos(c)*Math.cos(f),r[a*3+1]=l*Math.sin(f)*2.2,r[a*3+2]=l*Math.sin(c)*Math.cos(f)-18,e[a]=Math.random(),n[a]=.7+Math.random()*1.6}return{positions:r,phases:e,sizes:n}}function KL(){let r=1597463007;return()=>(r=r*1664525+1013904223>>>0,r/4294967296)}function QL(r,e,n){const a=(r.x-e.x)*n,l=r.y-e.y;return a*a+l*l}function $L(r){const e=KL(),n=[],a=48,l=.025;for(let c=0;c<es;c++){let f=null,h=-1;for(let m=0;m<a;m++){const p={x:l+e()*(1-l*2),y:l+e()*(1-l*2)};let _=Number.POSITIVE_INFINITY;for(const v of n){const g=QL(p,v,r);_=Math.min(_,g)}_>h&&(f=p,h=_)}f&&n.push(f)}return n}function xb(r,e){const n=$L(e);for(let a=0;a<n.length;a++){const l=n[a];r[a*3]=-.96+l.x*1.92,r[a*3+1]=-.9+l.y*1.8,r[a*3+2]=0}}function JL(r){const e=new Float32Array(es),n=new Float32Array(es*3),a=new Float32Array(es),l=new Float32Array(es);for(let c=0;c<es;c++){const f=c<GL;e[c]=f?1:0,a[c]=c/es,l[c]=f?32+c*29%7:12+c*17%4}return xb(n,r),{flares:e,positions:n,phases:a,sizes:l}}function eU(r,e,n={}){const{transparent:a=!1,threadAlpha:l}=n;let c;try{c=new FL({alpha:!0,antialias:!1,canvas:r,powerPreference:"high-performance"})}catch{return()=>{}}c.setPixelRatio(1);const f=new _R;f.background=a?null:new Et(328968);const h=new wi(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:_}=ZL(),v=new ni;v.setAttribute("position",new bn(m,3)),v.setAttribute("phase",new bn(p,1)),v.setAttribute("size",new bn(_,1));const g=new gi({vertexShader:kL,fragmentShader:XL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:BL}},transparent:!0,depthWrite:!1}),S=new kx(v,g);f.add(S);const E=r.clientWidth||window.innerWidth,D=r.clientHeight||window.innerHeight,b=JL(E/D),y=b.positions,I=new ni;I.setAttribute("position",new bn(y,3)),I.setAttribute("flare",new bn(b.flares,1)),I.setAttribute("phase",new bn(b.phases,1)),I.setAttribute("size",new bn(b.sizes,1));const F=new gi({vertexShader:jL,fragmentShader:YL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:VL}},transparent:!0,depthTest:!1,depthWrite:!1}),N=new kx(I,F);f.add(N);const O=3400,L=new ni,B=new Float32Array(O*6),T=new Float32Array(O*2),z=new Float32Array(O*2);L.setAttribute("position",new bn(B,3)),L.setAttribute("lineUV",new bn(T,1)),L.setAttribute("segPhase",new bn(z,1)),L.setDrawRange(0,0);const q=new gi({vertexShader:WL,fragmentShader:qL,uniforms:{uTime:{value:0},uColor:{value:HL},uAlpha:{value:l??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),k=new DR(L,q);f.add(k);const Z=e==="alive"?4.8:5.2,de=new Map;function he(ue,_e,Le){const Qe=Math.floor(ue/Z),ye=Math.floor(_e/Z),$e=Math.floor(Le/Z);return`${Qe}:${ye}:${$e}`}for(let ue=0;ue<co;ue++){const _e=m[ue*3],Le=m[ue*3+1],Qe=m[ue*3+2],ye=he(_e,Le,Qe),$e=de.get(ye)??[];$e.push(ue),de.set(ye,$e)}function Q(ue){const _e=m[ue*3],Le=m[ue*3+1],Qe=m[ue*3+2],ye=Math.floor(_e/Z),$e=Math.floor(Le/Z),lt=Math.floor(Qe/Z),ft=[];for(let pt=-1;pt<=1;pt++)for(let et=-1;et<=1;et++)for(let Ct=-1;Ct<=1;Ct++){const Yt=`${ye+pt}:${$e+et}:${lt+Ct}`;ft.push(...de.get(Yt)??[])}return ft}const U=()=>{const ue=new Set,_e=[],Le=[],Qe=[];for(let ye=0;ye<co&&_e.length<O*6;ye++){const $e=m[ye*3],lt=m[ye*3+1],ft=m[ye*3+2],pt=[];for(const et of Q(ye)){if(et===ye)continue;const Ct=m[et*3]-$e,Yt=m[et*3+1]-lt,$t=m[et*3+2]-ft,nn=Ct*Ct+Yt*Yt+$t*$t;nn<Z*Z&&pt.push([et,nn])}pt.sort((et,Ct)=>et[1]-Ct[1]);for(const[et]of pt.slice(0,5)){if(_e.length>=O*6)break;const Ct=ye<et?`${ye}-${et}`:`${et}-${ye}`;ue.has(Ct)||(ue.add(Ct),_e.push($e,lt,ft,m[et*3],m[et*3+1],m[et*3+2]),Le.push(0,1),Qe.push(Math.random(),Math.random()))}}B.set(_e),T.set(Le),z.set(Qe),L.getAttribute("position").needsUpdate=!0,L.getAttribute("lineUV").needsUpdate=!0,L.getAttribute("segPhase").needsUpdate=!0,L.setDrawRange(0,_e.length/3)},V=()=>{for(let ue=0;ue<L.drawRange.count;ue++)z[ue]=Math.random();L.getAttribute("segPhase").needsUpdate=!0};U();const J=new VR;let pe=0,Te=0,A=0,G=E/D;const se=()=>{const ue=r.clientWidth||window.innerWidth,_e=r.clientHeight||window.innerHeight,Le=ue/_e;c.setSize(ue,_e,!1),h.aspect=Le,h.updateProjectionMatrix(),Math.abs(Le-G)/G>=.08&&(xb(y,Le),I.getAttribute("position").needsUpdate=!0,G=Le)},Me=()=>{window.cancelAnimationFrame(A),A=window.requestAnimationFrame(se)};se(),window.addEventListener("resize",Me);let Re=0;const ee=ue=>{if(document.hidden||r.dataset.paused==="true"){pe=requestAnimationFrame(ee);return}const _e=J.getElapsedTime();_e-Re>=1/30&&(Re=_e,g.uniforms.uTime.value=_e,q.uniforms.uTime.value=_e,F.uniforms.uTime.value=_e,e==="alive"&&(Te+=1/30,Te>3.2&&(Te=0,V())),c.render(f,h)),pe=requestAnimationFrame(ee)};return pe=requestAnimationFrame(ee),()=>{cancelAnimationFrame(pe),cancelAnimationFrame(A),window.removeEventListener("resize",Me),v.dispose(),L.dispose(),I.dispose(),g.dispose(),q.dispose(),F.dispose(),c.dispose()}}function tU({mode:r,paused:e=!1,transparent:n=!1,threadAlpha:a,className:l="spell-bg"}){const c=ke.useRef(null);return ke.useEffect(()=>{const f=c.current;f&&(f.dataset.paused=String(e))},[e]),ke.useEffect(()=>{const f=c.current;return f?eU(f,r,{transparent:n,threadAlpha:a}):void 0},[r,n,a]),R.jsx("canvas",{"aria-hidden":"true",className:l,ref:c})}function dm({className:r,compact:e=!1}){const n=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",r].filter(Boolean).join(" ");return R.jsx(zn,{"aria-hidden":"true",className:n,icon:b2})}const nU=["Today","Yesterday","Others"],xy=[{description:"Today, yesterday, and older threads",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],iU=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function aU(r,e){if(e==="flat")return[{label:null,threads:r}];if(e==="date")return nU.map(a=>({label:a,threads:r.filter(l=>l.dateGroup===a)}));const n=new Map;for(const a of r){const l=a.volume==null?"Volume unknown":`Vol ${a.volume}`,c=n.get(l)??[];n.set(l,[...c,a])}return[...n.entries()].map(([a,l])=>({label:a,threads:l}))}function rU({activeThreadId:r,archivedOpen:e,collapsed:n,drawerOpen:a,onArchive:l,onClose:c,onCreate:f,onDelete:h,onOpen:m,onOpenSettings:p,onPin:_,onRename:v,onSelect:g,onSetArchivedOpen:S,readerStatus:E,threads:D}){const[b,y]=ke.useState(null),[I,F]=ke.useState(""),[N,O]=ke.useState(null),[L,B]=ke.useState("date"),[T,z]=ke.useState(!1),[q,k]=ke.useState(()=>new Set(["Yesterday","Others"])),Z=ke.useMemo(()=>D.filter(A=>A.archived===e).sort((A,G)=>Number(G.pinned)-Number(A.pinned)),[e,D]),de=aU(Z,L),he=D.filter(A=>A.archived).length,Q=a||!n;function U(A){y(A.id),F(A.title)}function V(A){const G=I.trim();G&&v(A,G),y(null)}function J(A){if(N===A){h(A),O(null);return}O(A),window.setTimeout(()=>{O(G=>G===A?null:G)},3e3)}function pe(A){k(G=>{const se=new Set(G);return se.has(A)?se.delete(A):se.add(A),se})}function Te(A){const G=A.id===r;return R.jsxs("li",{className:`lab-thread-row ${G?"active":""}`,"data-testid":`thread-${A.id}`,children:[R.jsxs("div",{className:"lab-thread-main",children:[b===A.id?R.jsx("span",{className:"lab-thread-copy",children:R.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>V(A.id),onChange:se=>F(se.target.value),onClick:se=>se.stopPropagation(),onKeyDown:se=>{se.key==="Enter"&&(se.preventDefault(),V(A.id)),se.key==="Escape"&&y(null)},value:I})}):R.jsx("button",{"aria-current":G?"page":void 0,className:"lab-thread-select",onClick:()=>g(A.id),type:"button",children:R.jsx("span",{className:"lab-thread-copy",children:R.jsx("strong",{children:A.title})})}),N===A.id&&R.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),R.jsxs("div",{className:"lab-thread-actions",children:[R.jsx("button",{"aria-label":`${A.pinned?"Unpin":"Pin"} ${A.title}`,onClick:()=>_(A.id),type:"button",children:R.jsx(c3,{})}),R.jsx("button",{"aria-label":`Rename ${A.title}`,onClick:()=>U(A),type:"button",children:R.jsx(l3,{})}),R.jsx("button",{"aria-label":`${A.archived?"Restore":"Archive"} ${A.title}`,onClick:()=>l(A.id),type:"button",children:R.jsx(hx,{})}),R.jsx("button",{"aria-label":`Delete ${A.title}`,className:N===A.id?"confirming":"",onClick:()=>J(A.id),type:"button",children:R.jsx(s3,{})})]})]},A.id)}return R.jsxs("aside",{className:"lab-rail",children:[R.jsxs("header",{className:"lab-brand",children:[R.jsx("span",{className:"lab-brand-mark",children:R.jsx(dm,{compact:!0})}),R.jsx("span",{children:R.jsx("strong",{children:"weaver"})}),R.jsx("button",{"aria-label":Q?"Close threads":"Open threads",className:"lab-rail-close",onClick:Q?c:m,type:"button",children:Q?R.jsx(r3,{}):R.jsx(OS,{})})]}),R.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:f,type:"button",children:[R.jsx(t3,{}),R.jsx("span",{children:"New Weave"})]}),R.jsxs("div",{className:"lab-rail-scroll",children:[R.jsxs("section",{className:"lab-chat-section",children:[R.jsxs("header",{className:"lab-rail-section-head",children:[R.jsx("h2",{children:"Chats"}),R.jsxs("div",{className:"lab-grouping-picker",children:[R.jsxs("button",{"aria-expanded":T,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>z(A=>!A),type:"button",children:[xy.find(A=>A.value===L)?.label,R.jsx(yp,{})]}),T&&R.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[R.jsx("p",{children:"Organize threads"}),xy.map(A=>R.jsxs("button",{"aria-checked":L===A.value,onClick:()=>{B(A.value),z(!1)},role:"menuitemradio",type:"button",children:[R.jsx("span",{"aria-hidden":"true",children:L===A.value?"✓":""}),R.jsx("strong",{children:A.label}),R.jsx("small",{children:A.description})]},A.value))]})]})]}),R.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[de.map(A=>{const G=A.label,se=G?q.has(G):!1;return R.jsxs("section",{className:"lab-thread-group",children:[G&&R.jsxs("button",{"aria-expanded":!se,className:"lab-thread-group-toggle",onClick:()=>pe(G),type:"button",children:[R.jsx("span",{children:G}),R.jsx("small",{children:A.threads.length}),R.jsx(yp,{})]}),R.jsx("div",{"aria-hidden":se,className:`lab-thread-group-body ${se?"collapsed":""}`,children:R.jsx("div",{children:R.jsx("ul",{className:"lab-thread-flat-list",children:A.threads.map(Te)})})})]},G??"all")}),Z.length===0&&R.jsxs("div",{className:"lab-thread-empty",children:[R.jsx("span",{"aria-hidden":"true"}),R.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),R.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[R.jsxs("header",{className:"lab-rail-section-head",children:[R.jsx("h2",{children:"Library"}),R.jsx("small",{children:"novels"})]}),R.jsx("div",{className:"lab-novel-list",children:iU.map(A=>R.jsxs("button",{"aria-current":A.active?"page":void 0,"aria-disabled":!A.active,className:A.active?"active":"upcoming",type:"button",children:[R.jsx(a3,{}),R.jsxs("span",{children:[R.jsx("strong",{children:A.label}),R.jsx("small",{children:A.active?"current shelf":"upcoming"})]})]},A.label))})]})]}),R.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>S(!e),type:"button",children:[R.jsx(hx,{}),R.jsx("span",{children:"Archived"}),R.jsx("em",{children:he})]}),R.jsx("footer",{className:"lab-rail-footer",children:R.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:p,type:"button",children:[R.jsx(PS,{}),R.jsxs("span",{children:[R.jsx("strong",{children:"Settings"}),R.jsxs("small",{children:[E," · runes · appearance"]})]})]})})]})}const sU=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],oU=Array.from({length:20},(r,e)=>e);function lU(r){return{"--index":r}}function cU({announcement:r,eventKey:e,mode:n}){return R.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${n}`,children:[n==="particles"&&R.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:oU.map(a=>R.jsx("span",{style:lU(a)},a))}),n==="threads"&&R.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[R.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),R.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),R.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),R.jsx("p",{className:"rune-announcement",children:r})]},`${n}-${e}`)}const uU=Array.from({length:7},(r,e)=>e),fU=Array.from({length:8},(r,e)=>e),dU=Array.from({length:11},(r,e)=>e),Zu={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function ip(r){return{"--index":r}}function yb({compact:r=!1,mode:e,state:n}){return R.jsxs("div",{"aria-label":`${Zu[e]}, ${n}`,className:`lab-soul-sea soul-${e} soul-state-${n} ${r?"soul-compact":""}`,role:"img",children:[R.jsxs("div",{className:"lab-soul-sky",children:[R.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[R.jsx("span",{}),R.jsx("span",{}),R.jsx("span",{})]}),R.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:uU.map(a=>R.jsx("span",{className:"lab-soul-sun",style:ip(a)},a))}),R.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:fU.map(a=>R.jsx("span",{className:"lab-memory-light",style:ip(a)},a))})]}),R.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:dU.map(a=>R.jsx("span",{className:"lab-shadow",style:ip(a)},a))}),R.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[R.jsx("span",{className:"water-plane water-plane-back"}),R.jsx("span",{className:"water-plane water-plane-middle"}),R.jsx("span",{className:"water-plane water-plane-front"}),R.jsx("span",{className:"water-flash"})]}),!r&&R.jsxs("p",{className:"lab-soul-caption",children:[R.jsx("span",{children:Zu[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const ap=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12}],hU={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},pU=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],mU=["still","living","mirror"],gU=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function vU({initial:r,onClose:e,onSave:n}){const[a,l]=ke.useState(r),[c,f]=ke.useState("customize"),h=ke.useRef(null),m=ke.useRef(null);ke.useEffect(()=>{h.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function p(g){if(g.key!=="Tab"||!h.current)return;const S=h.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),E=S[0],D=S[S.length-1];g.shiftKey&&document.activeElement===E&&(g.preventDefault(),D?.focus()),!g.shiftKey&&document.activeElement===D&&(g.preventDefault(),E?.focus())}function _(g,S){l(E=>({...E,[g]:S}))}function v(g){const S=ap.find(b=>b.number===g);if(!S)return;const E=ap[g-2]?.end??0,D=Math.max(E+1,Math.min(a.chapter,S.end));l(b=>({...b,chapter:D,volume:g}))}return R.jsx("div",{className:"lab-settings-backdrop",onMouseDown:e,children:R.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:p,onMouseDown:g=>g.stopPropagation(),ref:h,role:"dialog",children:[R.jsxs("header",{className:"lab-settings-head",children:[R.jsxs("div",{children:[R.jsx("p",{children:"the sea within"}),R.jsx("h2",{children:"Soul Sea"})]}),R.jsx("button",{"aria-label":"Close settings",onClick:e,type:"button",children:"×"})]}),R.jsxs("div",{className:"lab-settings-layout",children:[R.jsxs("aside",{className:"lab-settings-nav",children:[R.jsx("p",{children:"Settings"}),R.jsx("nav",{"aria-label":"Settings sections",children:pU.map(g=>R.jsxs("button",{"aria-label":g.label,"aria-current":c===g.id?"page":void 0,className:c===g.id?"on":"",onClick:()=>f(g.id),type:"button",children:[R.jsx("strong",{children:g.label}),R.jsx("span",{children:g.hint})]},g.id))})]}),R.jsxs("div",{className:"lab-settings-main",children:[R.jsx(yb,{compact:!0,mode:a.soulMode,state:"idle"}),R.jsxs("div",{className:"lab-settings-content",children:[c==="reader"&&R.jsxs("section",{className:"lab-settings-section",children:[R.jsxs("div",{className:"lab-setting-title",children:[R.jsx("h3",{children:"Reader position"}),R.jsx("span",{children:"The Spell will not read beyond this point."})]}),R.jsxs("div",{className:"lab-reader-grid",children:[R.jsxs("label",{children:[R.jsx("span",{children:"Volume"}),R.jsx("select",{"aria-label":"Reader volume",onChange:g=>v(Number(g.target.value)),ref:m,value:a.volume,children:ap.map(g=>R.jsxs("option",{value:g.number,children:["Vol ",g.number," · to ch ",g.end]},g.number))})]}),R.jsxs("label",{children:[R.jsx("span",{children:"Chapter"}),R.jsx("input",{max:3127,min:1,onChange:g=>_("chapter",Number(g.target.value)),type:"number",value:a.chapter})]})]})]}),c==="spoilers"&&R.jsxs("section",{className:"lab-settings-section",children:[R.jsxs("div",{className:"lab-setting-title",children:[R.jsx("h3",{children:"Spoilers"}),R.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),R.jsxs("div",{className:"lab-choice-grid two",children:[R.jsxs("button",{"aria-pressed":a.spoilerMode==="protect",className:a.spoilerMode==="protect"?"on":"",onClick:()=>_("spoilerMode","protect"),type:"button",children:[R.jsx("strong",{children:"Protect the story"}),R.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),R.jsxs("button",{"aria-pressed":a.spoilerMode==="none",className:a.spoilerMode==="none"?"on":"",onClick:()=>_("spoilerMode","none"),type:"button",children:[R.jsx("strong",{children:"No spoiler limits"}),R.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),c==="reading"&&R.jsxs("section",{className:"lab-settings-section",children:[R.jsxs("div",{className:"lab-setting-title",children:[R.jsx("h3",{children:"Reading tier"}),R.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),R.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(g=>R.jsxs("button",{"aria-pressed":a.tier===g,className:a.tier===g?"on":"",onClick:()=>_("tier",g),type:"button",children:[R.jsx("strong",{children:g}),R.jsx("span",{children:hU[g]})]},g))})]}),c==="customize"&&R.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[R.jsxs("div",{className:"lab-setting-title",children:[R.jsx("h3",{children:"Customize the Spell"}),R.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),R.jsxs("div",{className:"lab-customize-block",children:[R.jsx("h4",{children:"Surface theme"}),R.jsx("div",{className:"lab-theme-grid",children:gU.map(g=>R.jsxs("button",{"aria-label":g.label,"aria-pressed":a.theme===g.value,className:a.theme===g.value?"on":"",onClick:()=>_("theme",g.value),type:"button",children:[R.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:g.swatches.map(S=>R.jsx("i",{style:{background:S}},S))}),R.jsx("strong",{children:g.label}),R.jsx("span",{children:g.description})]},g.value))})]}),R.jsxs("div",{className:"lab-customize-block",children:[R.jsx("h4",{children:"Rune appearance"}),R.jsx("div",{className:"lab-choice-grid three",children:sU.map(g=>R.jsxs("button",{"aria-label":g.label,"aria-pressed":a.runeMode===g.mode,className:a.runeMode===g.mode?"on":"",onClick:()=>_("runeMode",g.mode),type:"button",children:[R.jsx("strong",{children:g.label}),R.jsx("span",{children:g.description})]},g.mode))})]}),R.jsxs("div",{className:"lab-customize-block",children:[R.jsx("h4",{children:"Soul Sea"}),R.jsx("div",{className:"lab-choice-grid three",children:mU.map(g=>R.jsxs("button",{"aria-label":Zu[g],"aria-pressed":a.soulMode===g,className:a.soulMode===g?"on":"",onClick:()=>_("soulMode",g),type:"button",children:[R.jsx("strong",{children:Zu[g]}),R.jsx("span",{children:g==="still"?"A calm horizon behind the conversation.":g==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},g))})]}),R.jsxs("div",{className:"lab-customize-block",children:[R.jsx("h4",{children:"Message transparency"}),R.jsxs("div",{className:"lab-choice-grid two",children:[R.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":a.glass==="subtle",className:a.glass==="subtle"?"on":"",onClick:()=>_("glass","subtle"),type:"button",children:[R.jsx("strong",{children:"Subtle glass"}),R.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),R.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":a.glass==="immersive",className:a.glass==="immersive"?"on":"",onClick:()=>_("glass","immersive"),type:"button",children:[R.jsx("strong",{children:"Immersive · no surface"}),R.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),R.jsxs("div",{className:"lab-customize-block",children:[R.jsx("h4",{children:"Star web"}),R.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(g=>R.jsx("button",{"aria-pressed":a.starIntensity===g,className:a.starIntensity===g?"on":"",onClick:()=>_("starIntensity",g),type:"button",children:g},g))})]}),R.jsxs("div",{className:"lab-customize-row",children:[R.jsxs("div",{children:[R.jsx("h4",{children:"Reading density"}),R.jsxs("div",{className:"lab-segmented-control",children:[R.jsx("button",{"aria-label":"Compact text","aria-pressed":a.density==="compact",className:a.density==="compact"?"on":"",onClick:()=>_("density","compact"),type:"button",children:"compact"}),R.jsx("button",{"aria-label":"Comfortable text","aria-pressed":a.density==="comfortable",className:a.density==="comfortable"?"on":"",onClick:()=>_("density","comfortable"),type:"button",children:"comfortable"})]})]}),R.jsxs("div",{children:[R.jsx("h4",{children:"Font size"}),R.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(g=>R.jsx("button",{"aria-pressed":a.fontSize===g,className:a.fontSize===g?"on":"",onClick:()=>_("fontSize",g),type:"button",children:g},g))})]})]})]}),c==="privacy"&&R.jsxs("section",{className:"lab-settings-section",children:[R.jsxs("div",{className:"lab-setting-title",children:[R.jsx("h3",{children:"Keyboard & privacy"}),R.jsx("span",{children:"Quick controls and where your reading data stays."})]}),R.jsxs("dl",{className:"lab-shortcuts",children:[R.jsxs("div",{children:[R.jsxs("dt",{children:[R.jsx("kbd",{children:"Ctrl"}),R.jsx("kbd",{children:","})]}),R.jsx("dd",{children:"open settings"})]}),R.jsxs("div",{children:[R.jsx("dt",{children:R.jsx("kbd",{children:"Esc"})}),R.jsx("dd",{children:"close this panel"})]}),R.jsxs("div",{children:[R.jsx("dt",{children:R.jsx("kbd",{children:"Enter"})}),R.jsx("dd",{children:"send a message"})]})]}),R.jsxs("aside",{className:"lab-privacy-note",children:[R.jsx("span",{"aria-hidden":"true",children:"◎"}),R.jsxs("div",{children:[R.jsx("strong",{children:"Everything stays on this machine."}),R.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]})]})]})]}),R.jsxs("footer",{className:"lab-settings-actions",children:[R.jsx("button",{onClick:e,type:"button",children:"Leave unchanged"}),R.jsx("button",{className:"primary",onClick:()=>n(a),type:"button",children:"Apply settings"})]})]})})}const Ji={chapter:1e3,density:"comfortable",fontSize:"small",glass:"immersive",runeMode:"particles",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"void",tier:"ascended",volume:5},Sb="weaver.spell-surface";function Qr(r,e,n){return typeof r=="string"&&e.includes(r)?r:n}function _U(){try{const r=JSON.parse(window.localStorage.getItem(Sb)??"null");return r?{...Ji,density:Qr(r.density,["compact","comfortable"],Ji.density),fontSize:Qr(r.fontSize,["small","medium","large"],Ji.fontSize),glass:Qr(r.glass,["subtle","immersive"],Ji.glass),runeMode:Qr(r.runeMode,["particles","voice","threads"],Ji.runeMode),soulMode:Qr(r.soulMode,["still","living","mirror"],Ji.soulMode),starIntensity:Qr(r.starIntensity,["quiet","balanced","vivid"],Ji.starIntensity),theme:Qr(r.theme,["crimson","cosmos","starlight","void"],Ji.theme)}:Ji}catch{return Ji}}function xU(r){window.localStorage.setItem(Sb,JSON.stringify({density:r.density,fontSize:r.fontSize,glass:r.glass,runeMode:r.runeMode,soulMode:r.soulMode,starIntensity:r.starIntensity,theme:r.theme}))}const yy=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127];function yU(r){const e=yy.findIndex(n=>r<=n);return e===-1?yy.length:e+1}function SU(r){if(!r)return"Others";const e=new Date(r);if(Number.isNaN(e.getTime()))return"Others";const n=new Date;n.setHours(0,0,0,0);const a=new Date(n);return a.setDate(a.getDate()-1),e>=n?"Today":e>=a?"Yesterday":"Others"}function Sy(r){return{reader_chapter:r.chapter,spoiler_mode:r.spoilerMode,tier:r.tier}}function bU({api:r,privacyLabel:e}){const n=x2(r,Ai),[a,l]=ke.useState(_U),[c,f]=ke.useState(!1),[h,m]=ke.useState(!1),[p,_]=ke.useState(!1),[v,g]=ke.useState(!1),[S,E]=ke.useState(new Set),[D,b]=ke.useState(new Set),[y,I]=ke.useState(new Map),[F,N]=ke.useState(null),[O,L]=ke.useState("idle"),[B,T]=ke.useState("[The Spell listens.]"),[z,q]=ke.useState(0),[k,Z]=ke.useState(0),de=ke.useRef(null),he=ke.useRef(null),Q=ke.useRef(!1),U=ke.useRef(null),V=ke.useMemo(()=>n.conversations.map(ye=>({archived:S.has(ye.conversation_id),dateGroup:SU(ye.created_at),id:ye.conversation_id,pinned:D.has(ye.conversation_id),preview:"private reading thread",title:y.get(ye.conversation_id)??ye.title,volume:null})),[S,n.conversations,D,y]);ke.useEffect(()=>{function ye($e){$e.ctrlKey&&$e.key===","&&($e.preventDefault(),pe()),$e.key==="Escape"&&(f(!1),m(!1))}return window.addEventListener("keydown",ye),()=>window.removeEventListener("keydown",ye)}),ke.useEffect(()=>{const ye=he.current;ye&&(ye.scrollTop=ye.scrollHeight)},[n.activity,n.messages,n.recoveryMessage]),ke.useEffect(()=>{if(n.turnActive){Q.current=!0,L(n.activity.length>0?"weaving":"rippling");return}Q.current&&(Q.current=!1,L("complete"),J("[The weave is complete.]"),U.current&&window.clearTimeout(U.current),U.current=window.setTimeout(()=>L("idle"),900))},[n.activity.length,n.turnActive]),ke.useEffect(()=>{const ye=n.activity.at(-1);ye&&J(MU(ye))},[n.activity]),ke.useEffect(()=>()=>{U.current&&window.clearTimeout(U.current)},[]);function J(ye){T(ye),q($e=>$e+1),Z($e=>$e+1)}async function pe(){try{const ye=await r.getPreferences(),$e=ye.reader_chapter??a.chapter;l(lt=>({...lt,chapter:$e,spoilerMode:ye.spoiler_mode,tier:ye.tier,volume:yU($e)}))}finally{f(!0),J("[The sea within opens.]")}}function Te(){if(window.innerWidth<768){m(!0);return}_(!1)}function A(){if(window.innerWidth<768){m(!1);return}_(!0)}async function G(){await n.createConversation()&&(m(!1),J("[An empty thread waits in the void.]"),window.setTimeout(()=>de.current?.focus(),0))}async function se(ye){await n.selectConversation(ye),m(!1),J("[The thread is recalled.]")}function Me(ye,$e){I(lt=>new Map(lt).set(ye,$e)),J("[The thread accepts a new name.]")}function Re(ye,$e){ye(lt=>{const ft=new Set(lt);return ft.has($e)?ft.delete($e):ft.add($e),ft})}function ee(ye){L("rippling"),J("[The Spell is weaving an answer.]"),n.sendMessage(ye)}function ue(){L("weaving"),J("[The Spell takes up the thread once more.]"),n.regenerateReply()}const _e=`Vol ${a.volume} · ch ${a.chapter} · ${a.tier}`,Le=a.starIntensity==="quiet"?.2:a.starIntensity==="vivid"?.56:.36,Qe=n.activity.at(-1)??null;return R.jsxs("div",{className:["spell-surface-lab","spell-surface-live",h?"lab-rail-open":"",p?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":a.density,"data-font-size":a.fontSize,"data-glass":a.glass,"data-runes":a.runeMode,"data-soul":a.soulMode,"data-star-intensity":a.starIntensity,"data-theme":a.theme,"data-testid":"spell-surface-live",children:[R.jsx(tU,{className:"lab-spell-background",mode:"alive",paused:c,threadAlpha:Le}),R.jsx("div",{"aria-hidden":"true",className:"lab-galactic-band"}),R.jsx("div",{"aria-hidden":"true",className:"lab-purple-depth"}),R.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-one"}),R.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-two"}),R.jsxs("div",{"aria-hidden":"true",className:"lab-core-wake",children:[R.jsx("span",{}),R.jsx("span",{})]},k),R.jsx(yb,{mode:a.soulMode,state:O}),R.jsx(rU,{activeThreadId:n.conversationId??"",archivedOpen:v,collapsed:p,drawerOpen:h,onArchive:ye=>Re(E,ye),onClose:A,onCreate:()=>{G()},onDelete:ye=>{n.deleteConversation(ye)},onOpen:Te,onOpenSettings:()=>{pe()},onPin:ye=>Re(b,ye),onRename:Me,onSelect:ye=>{se(ye)},onSetArchivedOpen:g,readerStatus:_e,threads:V}),R.jsxs("main",{className:"lab-chat-main",children:[R.jsxs("div",{className:"lab-chat-controls",children:[R.jsx("button",{"aria-label":"Open threads",className:"lab-mobile-rail",onClick:Te,type:"button",children:R.jsx(OS,{})}),R.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{pe()},type:"button",children:R.jsx(PS,{})})]}),R.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:he,children:R.jsxs("div",{className:"lab-transcript-column",children:[n.bootError&&R.jsx("div",{className:"boot-error",children:n.bootError}),!n.bootError&&n.messages.length===0&&R.jsxs("section",{className:"lab-empty-weave",children:[R.jsx("span",{className:"lab-empty-mark",children:R.jsx(dm,{})}),R.jsx("p",{children:"[An empty thread trembles in the void.]"}),R.jsx("h1",{children:"What are we reading?"}),R.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),n.messages.map(ye=>R.jsx(x3,{Mark:dm,activity:ye.streaming?Qe:null,assistantName:Ai.assistantName,message:ye,onQuote:$e=>{n.setDraft(`"${$e}" `),de.current?.focus()},onRegenerate:ye.id===n.liveReplyId&&n.turnState==="idle"?ue:void 0,onViewPassage:N,regenerateLabel:Ai.regenerateLabel},ye.id)),n.recoveryMessage&&R.jsx(S3,{chooseLabel:Ai.recoveryChooseLabel,createLabel:Ai.recoveryCreateLabel,message:n.recoveryMessage,onChooseConversation:Te,onCreateConversation:()=>{G()},onRetry:()=>{n.retryLastTurn()},retryLabel:Ai.recoveryRetryLabel,title:Ai.recoveryTitle})]})}),R.jsx(cU,{announcement:B,eventKey:z,mode:a.runeMode}),R.jsxs("footer",{className:"lab-composer-dock",children:[R.jsx(f3,{cancelling:n.turnState==="cancelling",draft:n.draft,inputLabel:Ai.inputLabel,onCancel:()=>{n.cancelTurn()},onDraftChange:n.setDraft,onSubmit:ee,onTierChange:ye=>{const $e={...a,tier:ye};l($e),r.savePreferences(Sy($e))},placeholder:Ai.composerPlaceholder,sendLabel:Ai.sendLabel,stopLabel:Ai.stopLabel,stoppingLabel:Ai.stoppingLabel,textareaRef:de,tier:a.tier,turnActive:n.turnActive}),R.jsxs("p",{children:[R.jsx("span",{})," ",e]})]})]}),h&&R.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:()=>m(!1),type:"button"}),c&&R.jsx(vU,{initial:a,onClose:()=>f(!1),onSave:ye=>{l(ye),xU(ye),f(!1),J("[Your soul answers the change.]"),r.savePreferences(Sy(ye))}}),F&&R.jsx(y3,{handle:F,loadPassage:n.loadPassage,onClose:()=>N(null)})]})}function MU(r){return`[The Spell is ${r.status==="start"?r.detail||r.name:"done"}.]`}async function $r(r,e){if(!r.ok)throw new Error(`${e} failed (${r.status})`);return await r.json()}function EU(r){const e=typeof r.data.text=="string"?r.data.text:"",n=typeof r.data.message=="string"?r.data.message:"";if(r.event==="delta")return{type:"delta",text:e};if(r.event==="completed")return{type:"completed",text:e,tokenCount:typeof r.data.token_count=="number"?r.data.token_count:void 0,tokenBudget:typeof r.data.token_budget=="number"?r.data.token_budget:void 0};if(r.event==="interrupted")return{type:"interrupted",message:n||"The turn was interrupted."};if(r.event==="failed")return{type:"failed",message:n||"The reply failed.",code:typeof r.data.code=="string"?r.data.code:void 0};if(r.event==="tool"){const a=Array.isArray(r.data.handles)?r.data.handles.filter(l=>typeof l=="string"):void 0;return{type:"tool",name:typeof r.data.name=="string"?r.data.name:"tool",status:typeof r.data.status=="string"?r.data.status:"start",detail:typeof r.data.detail=="string"?r.data.detail:"",preview:typeof r.data.preview=="string"?r.data.preview:void 0,handles:a&&a.length>0?a:void 0}}return null}async function*TU(r){const e=[];let n=[],a=null,l=0;const c=["delta","tool","completed","interrupted","failed"];for(const f of c)r.addEventListener(f,h=>{try{const m=EU({event:f,data:JSON.parse(h.data)});m&&(e.push(m),n.splice(0).forEach(p=>p()))}catch{}});r.onerror=()=>{l+=1,(r.readyState===EventSource.CLOSED||l>4)&&(a=new Error("The reply stream was interrupted."),n.splice(0).forEach(f=>f()))};try{for(;;)if(e.length>0)yield e.shift();else{if(a)throw a;await new Promise(f=>n.push(f))}}finally{r.close()}}async function*by(r){const e=new EventSource(`/api/conversations/${encodeURIComponent(r)}/stream`);let n=!1;for await(const a of TU(e))if(yield a,a.type==="completed"||a.type==="interrupted"||a.type==="failed"){n=!0;break}if(!n)throw new Error("The reply stream closed without finishing.")}function AU(r=fetch){return{async getPreferences(){const e=await r("/api/preferences");return $r(e,"Loading preferences")},async deleteConversation(e){const n=await r(`/api/conversations/${e}`,{method:"DELETE"});return $r(n,"Deleting conversation")},async getPassage(e){const n=await r(`/api/passages?handle=${encodeURIComponent(e)}`);return $r(n,"Loading passage")},async savePreferences(e){const n=await r("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return $r(n,"Saving preferences")},async listConversations(){const e=await r("/api/conversations");return $r(e,"Loading conversations")},async createConversation(){const e=await r("/api/conversations",{method:"POST"});return $r(e,"Creating a conversation")},async loadMessages(e){const n=await r(`/api/conversations/${encodeURIComponent(e)}/messages`);return $r(n,"Loading the conversation")},async*streamTurn(e,n){const a=await r(`/api/conversations/${encodeURIComponent(e)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n})});if(!a.ok)throw new Error(`Sending the message failed (${a.status})`);yield*by(e)},async*retryTurn(e){const n=await r(`/api/conversations/${encodeURIComponent(e)}/retry`,{method:"POST"});if(!n.ok)throw new Error(`Retrying failed (${n.status})`);yield*by(e)},async cancelTurn(e){const n=await r(`/api/conversations/${encodeURIComponent(e)}/cancel`,{method:"POST"});if(n.status===202)return"cancelling";if(n.status===200)return"idle";throw new Error(`Stopping the reply failed (${n.status})`)}}}const RU=ke.lazy(()=>RM(()=>import("./ThemeLab-ZqE30DTz.js"),[]).then(r=>({default:r.ThemeLab})));ls.autoAddCss=!1;function CU(r){return document.querySelector(`meta[name="${r}"]`)?.content??""}const bb=document.getElementById("root");if(!bb)throw new Error("Weaver root element is missing.");const wU=window.location.hash==="#theme-lab";v2.createRoot(bb).render(wU?R.jsx(ke.Suspense,{fallback:R.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:R.jsx(RU,{})}):R.jsx(bU,{api:AU(),privacyLabel:CU("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{e3 as A,dx as C,OS as R,tU as S,dm as W,yb as a,rU as b,PS as c,n3 as d,cU as e,vU as f,R as j,ke as r};

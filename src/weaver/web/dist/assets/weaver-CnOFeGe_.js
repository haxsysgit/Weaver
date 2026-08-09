(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();const AM="modulepreload",RM=function(r){return"/"+r},y_={},CM=function(e,i,a){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(i.map(p=>{if(p=RM(p),p in y_)return;y_[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":AM,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,E)=>{g.addEventListener("load",S),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function wM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var uh={exports:{}},pl={};var S_;function DM(){if(S_)return pl;S_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return pl.Fragment=e,pl.jsx=i,pl.jsxs=i,pl}var b_;function NM(){return b_||(b_=1,uh.exports=DM()),uh.exports}var A=NM(),fh={exports:{}},ht={};var M_;function LM(){if(M_)return ht;M_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function y(D,X,pe){this.props=D,this.context=X,this.refs=b,this.updater=pe||E}y.prototype.isReactComponent={},y.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=y.prototype;function F(D,X,pe){this.props=D,this.context=X,this.refs=b,this.updater=pe||E}var N=F.prototype=new P;N.constructor=F,w(N,y.prototype),N.isPureReactComponent=!0;var O=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(D,X,pe){var Me=pe.ref;return{$$typeof:r,type:D,key:X,ref:Me!==void 0?Me:null,props:pe}}function j(D,X){return z(D.type,X,D.props)}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function K(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pe){return X[pe]})}var de=/\/+/g;function he(D,X){return typeof D=="object"&&D!==null&&D.key!=null?K(""+D.key):X.toString(36)}function J(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(U,U):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function L(D,X,pe,Me,Ae){var ee=typeof D;(ee==="undefined"||ee==="boolean")&&(D=null);var ue=!1;if(D===null)ue=!0;else switch(ee){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(D.$$typeof){case r:case e:ue=!0;break;case _:return ue=D._init,L(ue(D._payload),X,pe,Me,Ae)}}if(ue)return Ae=Ae(D),ue=Me===""?"."+he(D,0):Me,O(Ae)?(pe="",ue!=null&&(pe=ue.replace(de,"$&/")+"/"),L(Ae,X,pe,"",function(Je){return Je})):Ae!=null&&(k(Ae)&&(Ae=j(Ae,pe+(Ae.key==null||D&&D.key===Ae.key?"":(""+Ae.key).replace(de,"$&/")+"/")+ue)),X.push(Ae)),1;ue=0;var _e=Me===""?".":Me+":";if(O(D))for(var Le=0;Le<D.length;Le++)Me=D[Le],ee=_e+he(Me,Le),ue+=L(Me,X,pe,ee,Ae);else if(Le=S(D),typeof Le=="function")for(D=Le.call(D),Le=0;!(Me=D.next()).done;)Me=Me.value,ee=_e+he(Me,Le++),ue+=L(Me,X,pe,ee,Ae);else if(ee==="object"){if(typeof D.then=="function")return L(J(D),X,pe,Me,Ae);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ue}function V(D,X,pe){if(D==null)return D;var Me=[],Ae=0;return L(D,Me,"","",function(ee){return X.call(pe,ee,Ae++)}),Me}function G(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(pe){(D._status===0||D._status===-1)&&(D._status=1,D._result=pe)},function(pe){(D._status===0||D._status===-1)&&(D._status=2,D._result=pe)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var ce=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Se={map:V,forEach:function(D,X,pe){V(D,function(){X.apply(this,arguments)},pe)},count:function(D){var X=0;return V(D,function(){X++}),X},toArray:function(D){return V(D,function(X){return X})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ht.Activity=v,ht.Children=Se,ht.Component=y,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=F,ht.StrictMode=a,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ht.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},ht.cache=function(D){return function(){return D.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(D,X,pe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Me=w({},D.props),Ae=D.key;if(X!=null)for(ee in X.key!==void 0&&(Ae=""+X.key),X)!T.call(X,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&X.ref===void 0||(Me[ee]=X[ee]);var ee=arguments.length-2;if(ee===1)Me.children=pe;else if(1<ee){for(var ue=Array(ee),_e=0;_e<ee;_e++)ue[_e]=arguments[_e+2];Me.children=ue}return z(D.type,Ae,Me)},ht.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ht.createElement=function(D,X,pe){var Me,Ae={},ee=null;if(X!=null)for(Me in X.key!==void 0&&(ee=""+X.key),X)T.call(X,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ae[Me]=X[Me]);var ue=arguments.length-2;if(ue===1)Ae.children=pe;else if(1<ue){for(var _e=Array(ue),Le=0;Le<ue;Le++)_e[Le]=arguments[Le+2];Ae.children=_e}if(D&&D.defaultProps)for(Me in ue=D.defaultProps,ue)Ae[Me]===void 0&&(Ae[Me]=ue[Me]);return z(D,ee,Ae)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(D){return{$$typeof:h,render:D}},ht.isValidElement=k,ht.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:G}},ht.memo=function(D,X){return{$$typeof:p,type:D,compare:X===void 0?null:X}},ht.startTransition=function(D){var X=B.T,pe={};B.T=pe;try{var Me=D(),Ae=B.S;Ae!==null&&Ae(pe,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(U,ce)}catch(ee){ce(ee)}finally{X!==null&&pe.types!==null&&(X.types=pe.types),B.T=X}},ht.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ht.use=function(D){return B.H.use(D)},ht.useActionState=function(D,X,pe){return B.H.useActionState(D,X,pe)},ht.useCallback=function(D,X){return B.H.useCallback(D,X)},ht.useContext=function(D){return B.H.useContext(D)},ht.useDebugValue=function(){},ht.useDeferredValue=function(D,X){return B.H.useDeferredValue(D,X)},ht.useEffect=function(D,X){return B.H.useEffect(D,X)},ht.useEffectEvent=function(D){return B.H.useEffectEvent(D)},ht.useId=function(){return B.H.useId()},ht.useImperativeHandle=function(D,X,pe){return B.H.useImperativeHandle(D,X,pe)},ht.useInsertionEffect=function(D,X){return B.H.useInsertionEffect(D,X)},ht.useLayoutEffect=function(D,X){return B.H.useLayoutEffect(D,X)},ht.useMemo=function(D,X){return B.H.useMemo(D,X)},ht.useOptimistic=function(D,X){return B.H.useOptimistic(D,X)},ht.useReducer=function(D,X,pe){return B.H.useReducer(D,X,pe)},ht.useRef=function(D){return B.H.useRef(D)},ht.useState=function(D){return B.H.useState(D)},ht.useSyncExternalStore=function(D,X,pe){return B.H.useSyncExternalStore(D,X,pe)},ht.useTransition=function(){return B.H.useTransition()},ht.version="19.2.8",ht}var E_;function dm(){return E_||(E_=1,fh.exports=LM()),fh.exports}var Xe=dm();const hm=wM(Xe);function rp(r,e){(e==null||e>r.length)&&(e=r.length);for(var i=0,a=Array(e);i<e;i++)a[i]=r[i];return a}function UM(r){if(Array.isArray(r))return r}function OM(r){if(Array.isArray(r))return rp(r)}function PM(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function IM(r,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,My(a.key),a)}}function zM(r,e,i){return e&&IM(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function wu(r,e){var i=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!i){if(Array.isArray(r)||(i=pm(r))||e){i&&(r=i);var a=0,l=function(){};return{s:l,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,f=!0,h=!1;return{s:function(){i=i.call(r)},n:function(){var m=i.next();return f=m.done,m},e:function(m){h=!0,c=m},f:function(){try{f||i.return==null||i.return()}finally{if(h)throw c}}}}function ot(r,e,i){return(e=My(e))in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function FM(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function BM(r,e){var i=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var a,l,c,f,h=[],m=!0,p=!1;try{if(c=(i=i.call(r)).next,e===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(a=c.call(i)).done)&&(h.push(a.value),h.length!==e);m=!0);}catch(_){p=!0,l=_}finally{try{if(!m&&i.return!=null&&(f=i.return(),Object(f)!==f))return}finally{if(p)throw l}}return h}}function HM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T_(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,a)}return i}function Re(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?T_(Object(i),!0).forEach(function(a){ot(r,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):T_(Object(i)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(i,a))})}return r}function Qu(r,e){return UM(r)||BM(r,e)||pm(r,e)||HM()}function Xi(r){return OM(r)||FM(r)||pm(r)||GM()}function VM(r,e){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var a=i.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function My(r){var e=VM(r,"string");return typeof e=="symbol"?e:e+""}function Fu(r){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fu(r)}function pm(r,e){if(r){if(typeof r=="string")return rp(r,e);var i={}.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?rp(r,e):void 0}}var A_=function(){},mm={},Ey={},Ty=null,Ay={mark:A_,measure:A_};try{typeof window<"u"&&(mm=window),typeof document<"u"&&(Ey=document),typeof MutationObserver<"u"&&(Ty=MutationObserver),typeof performance<"u"&&(Ay=performance)}catch{}var kM=mm.navigator||{},R_=kM.userAgent,C_=R_===void 0?"":R_,br=mm,tn=Ey,w_=Ty,Qc=Ay;br.document;var Ha=!!tn.documentElement&&!!tn.head&&typeof tn.addEventListener=="function"&&typeof tn.createElement=="function",Ry=~C_.indexOf("MSIE")||~C_.indexOf("Trident/"),$c,XM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,WM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Cy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},qM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},wy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],In="classic",Ul="duotone",Dy="sharp",Ny="sharp-duotone",Ly="chisel",Uy="etch",Oy="graphite",Py="jelly",Iy="jelly-duo",zy="jelly-fill",Fy="mosaic",By="notdog",Hy="notdog-duo",Gy="pixel",Vy="slab",ky="slab-duo",Xy="slab-press",Wy="slab-press-duo",qy="thumbprint",jy="utility",Yy="utility-duo",Zy="utility-fill",Ky="vellum",Qy="whiteboard",jM="Classic",YM="Duotone",ZM="Sharp",KM="Sharp Duotone",QM="Chisel",$M="Etch",JM="Graphite",eE="Jelly",tE="Jelly Duo",nE="Jelly Fill",iE="Mosaic",aE="Notdog",rE="Notdog Duo",sE="Pixel",oE="Slab",lE="Slab Duo",cE="Slab Press",uE="Slab Press Duo",fE="Thumbprint",dE="Utility",hE="Utility Duo",pE="Utility Fill",mE="Vellum",gE="Whiteboard",$y=[In,Ul,Dy,Ny,Ly,Uy,Oy,Py,Iy,zy,Fy,By,Hy,Gy,Vy,ky,Xy,Wy,qy,jy,Yy,Zy,Ky,Qy];$c={},ot(ot(ot(ot(ot(ot(ot(ot(ot(ot($c,In,jM),Ul,YM),Dy,ZM),Ny,KM),Ly,QM),Uy,$M),Oy,JM),Py,eE),Iy,tE),zy,nE),ot(ot(ot(ot(ot(ot(ot(ot(ot(ot($c,Fy,iE),By,aE),Hy,rE),Gy,sE),Vy,oE),ky,lE),Xy,cE),Wy,uE),qy,fE),jy,dE),ot(ot(ot(ot($c,Yy,hE),Zy,pE),Ky,mE),Qy,gE);var vE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},_E={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},xE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),yE={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Jy=["fak","fa-kit","fakd","fa-kit-duotone"],D_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},SE=["kit"],bE="kit",ME="kit-duotone",EE="Kit",TE="Kit Duotone";ot(ot({},bE,EE),ME,TE);var AE={kit:{"fa-kit":"fak"}},RE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},CE={kit:{fak:"fa-kit"}},N_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Jc,eu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],DE="classic",NE="duotone",LE="sharp",UE="sharp-duotone",OE="chisel",PE="etch",IE="graphite",zE="jelly",FE="jelly-duo",BE="jelly-fill",HE="mosaic",GE="notdog",VE="notdog-duo",kE="pixel",XE="slab",WE="slab-duo",qE="slab-press",jE="slab-press-duo",YE="thumbprint",ZE="utility",KE="utility-duo",QE="utility-fill",$E="vellum",JE="whiteboard",eT="Classic",tT="Duotone",nT="Sharp",iT="Sharp Duotone",aT="Chisel",rT="Etch",sT="Graphite",oT="Jelly",lT="Jelly Duo",cT="Jelly Fill",uT="Mosaic",fT="Notdog",dT="Notdog Duo",hT="Pixel",pT="Slab",mT="Slab Duo",gT="Slab Press",vT="Slab Press Duo",_T="Thumbprint",xT="Utility",yT="Utility Duo",ST="Utility Fill",bT="Vellum",MT="Whiteboard";Jc={},ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(Jc,DE,eT),NE,tT),LE,nT),UE,iT),OE,aT),PE,rT),IE,sT),zE,oT),FE,lT),BE,cT),ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(Jc,HE,uT),GE,fT),VE,dT),kE,hT),XE,pT),WE,mT),qE,gT),jE,vT),YE,_T),ZE,xT),ot(ot(ot(ot(Jc,KE,yT),QE,ST),$E,bT),JE,MT);var ET="kit",TT="kit-duotone",AT="Kit",RT="Kit Duotone";ot(ot({},ET,AT),TT,RT);var CT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},wT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},sp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},DT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],eS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(wE,DT),NT=["solid","regular","light","thin","duotone","brands","semibold"],tS=[1,2,3,4,5,6,7,8,9,10],LT=tS.concat([11,12,13,14,15,16,17,18,19,20]),UT=["aw","fw","pull-left","pull-right"],OT=[].concat(Xi(Object.keys(wT)),NT,UT,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",eu.GROUP,eu.SWAP_OPACITY,eu.PRIMARY,eu.SECONDARY]).concat(tS.map(function(r){return"".concat(r,"x")})).concat(LT.map(function(r){return"w-".concat(r)})),PT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Pa="___FONT_AWESOME___",op=16,nS="fa",iS="svg-inline--fa",ss="data-fa-i2svg",lp="data-fa-pseudo-element",IT="data-fa-pseudo-element-pending",gm="data-prefix",vm="data-icon",L_="fontawesome-i2svg",zT="async",FT=["HTML","HEAD","STYLE","SCRIPT"],aS=["::before","::after",":before",":after"],rS=(function(){try{return!0}catch{return!1}})();function Ol(r){return new Proxy(r,{get:function(i,a){return a in i?i[a]:i[In]}})}var sS=Re({},Cy);sS[In]=Re(Re(Re(Re({},{"fa-duotone":"duotone"}),Cy[In]),D_.kit),D_["kit-duotone"]);var BT=Ol(sS),cp=Re({},yE);cp[In]=Re(Re(Re(Re({},{duotone:"fad"}),cp[In]),N_.kit),N_["kit-duotone"]);var U_=Ol(cp),up=Re({},sp);up[In]=Re(Re({},up[In]),CE.kit);var _m=Ol(up),fp=Re({},CT);fp[In]=Re(Re({},fp[In]),AE.kit);Ol(fp);var HT=XM,oS="fa-layers-text",GT=WM,VT=Re({},vE);Ol(VT);var kT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dh=qM,XT=[].concat(Xi(SE),Xi(OT)),Rl=br.FontAwesomeConfig||{};function WT(r){var e=tn.querySelector("script["+r+"]");if(e)return e.getAttribute(r)}function qT(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(tn&&typeof tn.querySelector=="function"){var jT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jT.forEach(function(r){var e=Qu(r,2),i=e[0],a=e[1],l=qT(WT(i));l!=null&&(Rl[a]=l)})}var lS={styleDefault:"solid",familyDefault:In,cssPrefix:nS,replacementClass:iS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rl.familyPrefix&&(Rl.cssPrefix=Rl.familyPrefix);var mo=Re(Re({},lS),Rl);mo.autoReplaceSvg||(mo.observeMutations=!1);var st={};Object.keys(lS).forEach(function(r){Object.defineProperty(st,r,{enumerable:!0,set:function(i){mo[r]=i,Cl.forEach(function(a){return a(st)})},get:function(){return mo[r]}})});Object.defineProperty(st,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,Cl.forEach(function(i){return i(st)})},get:function(){return mo.cssPrefix}});br.FontAwesomeConfig=st;var Cl=[];function YT(r){return Cl.push(r),function(){Cl.splice(Cl.indexOf(r),1)}}var Ws=op,ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ZT(r){if(!(!r||!Ha)){var e=tn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=r;for(var i=tn.head.childNodes,a=null,l=i.length-1;l>-1;l--){var c=i[l],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=c)}return tn.head.insertBefore(e,a),r}}var KT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function O_(){for(var r=12,e="";r-- >0;)e+=KT[Math.random()*62|0];return e}function yo(r){for(var e=[],i=(r||[]).length>>>0;i--;)e[i]=r[i];return e}function xm(r){return r.classList?yo(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cS(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function QT(r){return Object.keys(r||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(cS(r[i]),'" ')},"").trim()}function $u(r){return Object.keys(r||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(r[i].trim(),";")},"")}function ym(r){return r.size!==ta.size||r.x!==ta.x||r.y!==ta.y||r.rotate!==ta.rotate||r.flipX||r.flipY}function $T(r){var e=r.transform,i=r.containerWidth,a=r.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(h)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:l,inner:m,path:p}}function JT(r){var e=r.transform,i=r.width,a=i===void 0?op:i,l=r.height,c=l===void 0?op:l,f="";return Ry?f+="translate(".concat(e.x/Ws-a/2,"em, ").concat(e.y/Ws-c/2,"em) "):f+="translate(calc(-50% + ".concat(e.x/Ws,"em), calc(-50% + ").concat(e.y/Ws,"em)) "),f+="scale(".concat(e.size/Ws*(e.flipX?-1:1),", ").concat(e.size/Ws*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var eA=`:root, :host {
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
}`;function uS(){var r=nS,e=iS,i=st.cssPrefix,a=st.replacementClass,l=eA;if(i!==r||a!==e){var c=new RegExp("\\.".concat(r,"\\-"),"g"),f=new RegExp("\\--".concat(r,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");l=l.replace(c,".".concat(i,"-")).replace(f,"--".concat(i,"-")).replace(h,".".concat(a))}return l}var P_=!1;function hh(){st.autoAddCss&&!P_&&(ZT(uS()),P_=!0)}var tA={mixout:function(){return{dom:{css:uS,insertCss:hh}}},hooks:function(){return{beforeDOMElementCreation:function(){hh()},beforeI2svg:function(){hh()}}}},Ia=br||{};Ia[Pa]||(Ia[Pa]={});Ia[Pa].styles||(Ia[Pa].styles={});Ia[Pa].hooks||(Ia[Pa].hooks={});Ia[Pa].shims||(Ia[Pa].shims=[]);var Gi=Ia[Pa],fS=[],dS=function(){tn.removeEventListener("DOMContentLoaded",dS),Bu=1,fS.map(function(e){return e()})},Bu=!1;Ha&&(Bu=(tn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tn.readyState),Bu||tn.addEventListener("DOMContentLoaded",dS));function nA(r){Ha&&(Bu?setTimeout(r,0):fS.push(r))}function Pl(r){var e=r.tag,i=r.attributes,a=i===void 0?{}:i,l=r.children,c=l===void 0?[]:l;return typeof r=="string"?cS(r):"<".concat(e," ").concat(QT(a),">").concat(c.map(Pl).join(""),"</").concat(e,">")}function I_(r,e,i){if(r&&r[e]&&r[e][i])return{prefix:e,iconName:i,icon:r[e][i]}}var ph=function(e,i,a,l){var c=Object.keys(e),f=c.length,h=i,m,p,_;for(a===void 0?(m=1,_=e[c[0]]):(m=0,_=a);m<f;m++)p=c[m],_=h(_,e[p],p,e);return _};function hS(r){return Xi(r).length!==1?null:r.codePointAt(0).toString(16)}function z_(r){return Object.keys(r).reduce(function(e,i){var a=r[i],l=!!a.icon;return l?e[a.iconName]=a.icon:e[i]=a,e},{})}function dp(r,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.skipHooks,l=a===void 0?!1:a,c=z_(e);typeof Gi.hooks.addPack=="function"&&!l?Gi.hooks.addPack(r,z_(e)):Gi.styles[r]=Re(Re({},Gi.styles[r]||{}),c),r==="fas"&&dp("fa",e)}var Dl=Gi.styles,iA=Gi.shims,pS=Object.keys(_m),aA=pS.reduce(function(r,e){return r[e]=Object.keys(_m[e]),r},{}),Sm=null,mS={},gS={},vS={},_S={},xS={};function rA(r){return~XT.indexOf(r)}function sA(r,e){var i=e.split("-"),a=i[0],l=i.slice(1).join("-");return a===r&&l!==""&&!rA(l)?l:null}var yS=function(){var e=function(c){return ph(Dl,function(f,h,m){return f[m]=ph(h,c,{}),f},{})};mS=e(function(l,c,f){if(c[3]&&(l[c[3]]=f),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=f})}return l}),gS=e(function(l,c,f){if(l[f]=f,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=f})}return l}),xS=e(function(l,c,f){var h=c[2];return l[f]=f,h.forEach(function(m){l[m]=f}),l});var i="far"in Dl||st.autoFetchSvg,a=ph(iA,function(l,c){var f=c[0],h=c[1],m=c[2];return h==="far"&&!i&&(h="fas"),typeof f=="string"&&(l.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(l.unicodes[f.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});vS=a.names,_S=a.unicodes,Sm=Ju(st.styleDefault,{family:st.familyDefault})};YT(function(r){Sm=Ju(r.styleDefault,{family:st.familyDefault})});yS();function bm(r,e){return(mS[r]||{})[e]}function oA(r,e){return(gS[r]||{})[e]}function is(r,e){return(xS[r]||{})[e]}function SS(r){return vS[r]||{prefix:null,iconName:null}}function lA(r){var e=_S[r],i=bm("fas",r);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Mr(){return Sm}var bS=function(){return{prefix:null,iconName:null,rest:[]}};function cA(r){var e=In,i=pS.reduce(function(a,l){return a[l]="".concat(st.cssPrefix,"-").concat(l),a},{});return $y.forEach(function(a){(r.includes(i[a])||r.some(function(l){return aA[a].includes(l)}))&&(e=a)}),e}function Ju(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,a=i===void 0?In:i,l=BT[a][r];if(a===Ul&&!r)return"fad";var c=U_[a][r]||U_[a][l],f=r in Gi.styles?r:null,h=c||f||null;return h}function uA(r){var e=[],i=null;return r.forEach(function(a){var l=sA(st.cssPrefix,a);l?i=l:a&&e.push(a)}),{iconName:i,rest:e}}function F_(r){return r.sort().filter(function(e,i,a){return a.indexOf(e)===i})}var B_=eS.concat(Jy);function ef(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,a=i===void 0?!1:i,l=null,c=F_(r.filter(function(S){return B_.includes(S)})),f=F_(r.filter(function(S){return!B_.includes(S)})),h=c.filter(function(S){return l=S,!wy.includes(S)}),m=Qu(h,1),p=m[0],_=p===void 0?null:p,v=cA(c),g=Re(Re({},uA(f)),{},{prefix:Ju(_,{family:v})});return Re(Re(Re({},g),pA({values:r,family:v,styles:Dl,config:st,canonical:g,givenPrefix:l})),fA(a,l,g))}function fA(r,e,i){var a=i.prefix,l=i.iconName;if(r||!a||!l)return{prefix:a,iconName:l};var c=e==="fa"?SS(l):{},f=is(a,l);return l=c.iconName||f||l,a=c.prefix||a,a==="far"&&!Dl.far&&Dl.fas&&!st.autoFetchSvg&&(a="fas"),{prefix:a,iconName:l}}var dA=$y.filter(function(r){return r!==In||r!==Ul}),hA=Object.keys(sp).filter(function(r){return r!==In}).map(function(r){return Object.keys(sp[r])}).flat();function pA(r){var e=r.values,i=r.family,a=r.canonical,l=r.givenPrefix,c=l===void 0?"":l,f=r.styles,h=f===void 0?{}:f,m=r.config,p=m===void 0?{}:m,_=i===Ul,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=a.prefix==="fad"||a.prefix==="fa-duotone";if(!_&&(v||g||S)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&dA.includes(i)){var E=Object.keys(h).find(function(b){return hA.includes(b)});if(E||p.autoFetchSvg){var w=xE.get(i).defaultShortPrefixId;a.prefix=w,a.iconName=is(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||c==="fa")&&(a.prefix=Mr()||"fas"),a}var mA=(function(){function r(){PM(this,r),this.definitions={}}return zM(r,[{key:"add",value:function(){for(var i=this,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){i.definitions[h]=Re(Re({},i.definitions[h]||{}),f[h]),dp(h,f[h]);var m=_m[In][h];m&&dp(m,f[h]),yS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,a){var l=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(l).map(function(c){var f=l[c],h=f.prefix,m=f.iconName,p=f.icon,_=p[2];i[h]||(i[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(i[h][v]=p)}),i[h][m]=p}),i}}])})(),H_=[],oo={},uo={},gA=Object.keys(uo);function vA(r,e){var i=e.mixoutsTo;return H_=r,oo={},Object.keys(uo).forEach(function(a){gA.indexOf(a)===-1&&delete uo[a]}),H_.forEach(function(a){var l=a.mixout?a.mixout():{};if(Object.keys(l).forEach(function(f){typeof l[f]=="function"&&(i[f]=l[f]),Fu(l[f])==="object"&&Object.keys(l[f]).forEach(function(h){i[f]||(i[f]={}),i[f][h]=l[f][h]})}),a.hooks){var c=a.hooks();Object.keys(c).forEach(function(f){oo[f]||(oo[f]=[]),oo[f].push(c[f])})}a.provides&&a.provides(uo)}),i}function hp(r,e){for(var i=arguments.length,a=new Array(i>2?i-2:0),l=2;l<i;l++)a[l-2]=arguments[l];var c=oo[r]||[];return c.forEach(function(f){e=f.apply(null,[e].concat(a))}),e}function os(r){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var l=oo[r]||[];l.forEach(function(c){c.apply(null,i)})}function Er(){var r=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[r]?uo[r].apply(null,e):void 0}function pp(r){r.prefix==="fa"&&(r.prefix="fas");var e=r.iconName,i=r.prefix||Mr();if(e)return e=is(i,e)||e,I_(MS.definitions,i,e)||I_(Gi.styles,i,e)}var MS=new mA,_A=function(){st.autoReplaceSvg=!1,st.observeMutations=!1,os("noAuto")},xA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ha?(os("beforeI2svg",e),Er("pseudoElements2svg",e),Er("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;st.autoReplaceSvg===!1&&(st.autoReplaceSvg=!0),st.observeMutations=!0,nA(function(){SA({autoReplaceSvgRoot:i}),os("watch",e)})}},yA={icon:function(e){if(e===null)return null;if(Fu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:is(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Ju(e[0]);return{prefix:a,iconName:is(a,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(st.cssPrefix,"-"))>-1||e.match(HT))){var l=ef(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||Mr(),iconName:is(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var c=Mr();return{prefix:c,iconName:is(c,e)||e}}}},vi={noAuto:_A,config:st,dom:xA,parse:yA,library:MS,findIconDefinition:pp,toHtml:Pl},SA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,a=i===void 0?tn:i;(Object.keys(Gi.styles).length>0||st.autoFetchSvg)&&Ha&&st.autoReplaceSvg&&vi.dom.i2svg({node:a})};function tf(r,e){return Object.defineProperty(r,"abstract",{get:e}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(a){return Pl(a)})}}),Object.defineProperty(r,"node",{get:function(){if(Ha){var a=tn.createElement("div");return a.innerHTML=r.html,a.children}}}),r}function bA(r){var e=r.children,i=r.main,a=r.mask,l=r.attributes,c=r.styles,f=r.transform;if(ym(f)&&i.found&&!a.found){var h=i.width,m=i.height,p={x:h/m/2,y:.5};l.style=$u(Re(Re({},c),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function MA(r){var e=r.prefix,i=r.iconName,a=r.children,l=r.attributes,c=r.symbol,f=c===!0?"".concat(e,"-").concat(st.cssPrefix,"-").concat(i):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Re(Re({},l),{},{id:f}),children:a}]}]}function EA(r){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(i){return i in r})}function Mm(r){var e=r.icons,i=e.main,a=e.mask,l=r.prefix,c=r.iconName,f=r.transform,h=r.symbol,m=r.maskId,p=r.extra,_=r.watchable,v=_===void 0?!1:_,g=a.found?a:i,S=g.width,E=g.height,w=[st.replacementClass,c?"".concat(st.cssPrefix,"-").concat(c):""].filter(function(O){return p.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(p.classes).join(" "),b={children:[],attributes:Re(Re({},p.attributes),{},{"data-prefix":l,"data-icon":c,class:w,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(E)})};!EA(p.attributes)&&!p.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),v&&(b.attributes[ss]="");var y=Re(Re({},b),{},{prefix:l,iconName:c,main:i,mask:a,maskId:m,transform:f,symbol:h,styles:Re({},p.styles)}),P=a.found&&i.found?Er("generateAbstractMask",y)||{children:[],attributes:{}}:Er("generateAbstractIcon",y)||{children:[],attributes:{}},F=P.children,N=P.attributes;return y.children=F,y.attributes=N,h?MA(y):bA(y)}function G_(r){var e=r.content,i=r.width,a=r.height,l=r.transform,c=r.extra,f=r.watchable,h=f===void 0?!1:f,m=Re(Re({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ss]="");var p=Re({},c.styles);ym(l)&&(p.transform=JT({transform:l,width:i,height:a}),p["-webkit-transform"]=p.transform);var _=$u(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function TA(r){var e=r.content,i=r.extra,a=Re(Re({},i.attributes),{},{class:i.classes.join(" ")}),l=$u(i.styles);l.length>0&&(a.style=l);var c=[];return c.push({tag:"span",attributes:a,children:[e]}),c}var mh=Gi.styles;function mp(r){var e=r[0],i=r[1],a=r.slice(4),l=Qu(a,1),c=l[0],f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat(st.cssPrefix,"-").concat(dh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(dh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(dh.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:i,icon:f}}var AA={found:!1,width:512,height:512};function RA(r,e){!rS&&!st.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(e,'" is missing.'))}function gp(r,e){var i=e;return e==="fa"&&st.styleDefault!==null&&(e=Mr()),new Promise(function(a,l){if(i==="fa"){var c=SS(r)||{};r=c.iconName||r,e=c.prefix||e}if(r&&e&&mh[e]&&mh[e][r]){var f=mh[e][r];return a(mp(f))}RA(r,e),a(Re(Re({},AA),{},{icon:st.showMissingIcons&&r?Er("missingIconAbstract")||{}:{}}))})}var V_=function(){},vp=st.measurePerformance&&Qc&&Qc.mark&&Qc.measure?Qc:{mark:V_,measure:V_},El='FA "7.3.1"',CA=function(e){return vp.mark("".concat(El," ").concat(e," begins")),function(){return ES(e)}},ES=function(e){vp.mark("".concat(El," ").concat(e," ends")),vp.measure("".concat(El," ").concat(e),"".concat(El," ").concat(e," begins"),"".concat(El," ").concat(e," ends"))},Em={begin:CA,end:ES},Du=function(){};function k_(r){var e=r.getAttribute?r.getAttribute(ss):null;return typeof e=="string"}function wA(r){var e=r.getAttribute?r.getAttribute(gm):null,i=r.getAttribute?r.getAttribute(vm):null;return e&&i}function DA(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(st.replacementClass)}function NA(){if(st.autoReplaceSvg===!0)return Nu.replace;var r=Nu[st.autoReplaceSvg];return r||Nu.replace}function LA(r){return tn.createElementNS("http://www.w3.org/2000/svg",r)}function UA(r){return tn.createElement(r)}function TS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,a=i===void 0?r.tag==="svg"?LA:UA:i;if(typeof r=="string")return tn.createTextNode(r);var l=a(r.tag);Object.keys(r.attributes||[]).forEach(function(f){l.setAttribute(f,r.attributes[f])});var c=r.children||[];return c.forEach(function(f){l.appendChild(TS(f,{ceFn:a}))}),l}function OA(r){var e=" ".concat(r.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nu={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(l){i.parentNode.insertBefore(TS(l),i)}),i.getAttribute(ss)===null&&st.keepOriginalSource){var a=tn.createComment(OA(i));i.parentNode.replaceChild(a,i)}else i.remove()},nest:function(e){var i=e[0],a=e[1];if(~xm(i).indexOf(st.replacementClass))return Nu.replace(e);var l=new RegExp("".concat(st.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var c=a[0].attributes.class.split(" ").reduce(function(h,m){return m===st.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});a[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",c.toNode.join(" "))}var f=a.map(function(h){return Pl(h)}).join(`
`);i.setAttribute(ss,""),i.innerHTML=f}};function X_(r){r()}function AS(r,e){var i=typeof e=="function"?e:Du;if(r.length===0)i();else{var a=X_;st.mutateApproach===zT&&(a=br.requestAnimationFrame||X_),a(function(){var l=NA(),c=Em.begin("mutate");r.map(l),c(),i()})}}var Tm=!1;function RS(){Tm=!0}function _p(){Tm=!1}var Hu=null;function W_(r){if(w_&&st.observeMutations){var e=r.treeCallback,i=e===void 0?Du:e,a=r.nodeCallback,l=a===void 0?Du:a,c=r.pseudoElementsCallback,f=c===void 0?Du:c,h=r.observeMutationsRoot,m=h===void 0?tn:h;Hu=new w_(function(p){if(!Tm){var _=Mr();yo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!k_(v.addedNodes[0])&&(st.searchPseudoElements&&f(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&st.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&k_(v.target)&&~kT.indexOf(v.attributeName))if(v.attributeName==="class"&&wA(v.target)){var g=ef(xm(v.target)),S=g.prefix,E=g.iconName;v.target.setAttribute(gm,S||_),E&&v.target.setAttribute(vm,E)}else DA(v.target)&&l(v.target)})}}),Ha&&Hu.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function PA(){Hu&&Hu.disconnect()}function IA(r){var e=r.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(a,l){var c=l.split(":"),f=c[0],h=c.slice(1);return f&&h.length>0&&(a[f]=h.join(":").trim()),a},{})),i}function zA(r){var e=r.getAttribute("data-prefix"),i=r.getAttribute("data-icon"),a=r.innerText!==void 0?r.innerText.trim():"",l=ef(xm(r));return l.prefix||(l.prefix=Mr()),e&&i&&(l.prefix=e,l.iconName=i),l.iconName&&l.prefix||(l.prefix&&a.length>0&&(l.iconName=oA(l.prefix,r.innerText)||bm(l.prefix,hS(r.innerText))),!l.iconName&&st.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=r.firstChild.data)),l}function FA(r){var e=yo(r.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{});return e}function BA(){return{iconName:null,prefix:null,transform:ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function q_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=zA(r),a=i.iconName,l=i.prefix,c=i.rest,f=FA(r),h=hp("parseNodeAttributes",{},r),m=e.styleParser?IA(r):[];return Re({iconName:a,prefix:l,transform:ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:f}},h)}var HA=Gi.styles;function CS(r){var e=st.autoReplaceSvg==="nest"?q_(r,{styleParser:!1}):q_(r);return~e.extra.classes.indexOf(oS)?Er("generateLayersText",r,e):Er("generateSvgReplacementMutation",r,e)}function GA(){return[].concat(Xi(Jy),Xi(eS))}function j_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ha)return Promise.resolve();var i=tn.documentElement.classList,a=function(v){return i.add("".concat(L_,"-").concat(v))},l=function(v){return i.remove("".concat(L_,"-").concat(v))},c=st.autoFetchSvg?GA():wy.concat(Object.keys(HA));c.includes("fa")||c.push("fa");var f=[".".concat(oS,":not([").concat(ss,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ss,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=yo(r.querySelectorAll(f))}catch{}if(h.length>0)a("pending"),l("complete");else return Promise.resolve();var m=Em.begin("onTree"),p=h.reduce(function(_,v){try{var g=CS(v);g&&_.push(g)}catch(S){rS||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){AS(g,function(){a("active"),a("complete"),l("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function VA(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;CS(r).then(function(i){i&&AS([i],e)})}function kA(r){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:pp(e||{}),l=i.mask;return l&&(l=(l||{}).icon?l:pp(l||{})),r(a,Re(Re({},i),{},{mask:l}))}}var XA=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,l=a===void 0?ta:a,c=i.symbol,f=c===void 0?!1:c,h=i.mask,m=h===void 0?null:h,p=i.maskId,_=p===void 0?null:p,v=i.classes,g=v===void 0?[]:v,S=i.attributes,E=S===void 0?{}:S,w=i.styles,b=w===void 0?{}:w;if(e){var y=e.prefix,P=e.iconName,F=e.icon;return tf(Re({type:"icon"},e),function(){return os("beforeDOMElementCreation",{iconDefinition:e,params:i}),Mm({icons:{main:mp(F),mask:m?mp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:P,transform:Re(Re({},ta),l),symbol:f,maskId:_,extra:{attributes:E,styles:b,classes:g}})})}},WA={mixout:function(){return{icon:kA(XA)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=j_,i.nodeCallback=VA,i}}},provides:function(e){e.i2svg=function(i){var a=i.node,l=a===void 0?tn:a,c=i.callback,f=c===void 0?function(){}:c;return j_(l,f)},e.generateSvgReplacementMutation=function(i,a){var l=a.iconName,c=a.prefix,f=a.transform,h=a.symbol,m=a.mask,p=a.maskId,_=a.extra;return new Promise(function(v,g){Promise.all([gp(l,c),m.iconName?gp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=Qu(S,2),w=E[0],b=E[1];v([i,Mm({icons:{main:w,mask:b},prefix:c,iconName:l,transform:f,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(i){var a=i.children,l=i.attributes,c=i.main,f=i.transform,h=i.styles,m=$u(h);m.length>0&&(l.style=m);var p;return ym(f)&&(p=Er("generateAbstractTransformGrouping",{main:c,transform:f,containerWidth:c.width,iconWidth:c.width})),a.push(p||c.icon),{children:a,attributes:l}}}},qA={mixout:function(){return{layer:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.classes,c=l===void 0?[]:l;return tf({type:"layer"},function(){os("beforeDOMElementCreation",{assembler:i,params:a});var f=[];return i(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(st.cssPrefix,"-layers")].concat(Xi(c)).join(" ")},children:f}]})}}}},jA={mixout:function(){return{counter:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var l=a.classes,c=l===void 0?[]:l,f=a.attributes,h=f===void 0?{}:f,m=a.styles,p=m===void 0?{}:m;return tf({type:"counter",content:i},function(){return os("beforeDOMElementCreation",{content:i,params:a}),TA({content:i.toString(),extra:{attributes:h,styles:p,classes:["".concat(st.cssPrefix,"-layers-counter")].concat(Xi(c))}})})}}}},YA={mixout:function(){return{text:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,c=l===void 0?ta:l,f=a.classes,h=f===void 0?[]:f,m=a.attributes,p=m===void 0?{}:m,_=a.styles,v=_===void 0?{}:_;return tf({type:"text",content:i},function(){return os("beforeDOMElementCreation",{content:i,params:a}),G_({content:i,transform:Re(Re({},ta),c),extra:{attributes:p,styles:v,classes:["".concat(st.cssPrefix,"-layers-text")].concat(Xi(h))}})})}}},provides:function(e){e.generateLayersText=function(i,a){var l=a.transform,c=a.extra,f=null,h=null;if(Ry){var m=parseInt(getComputedStyle(i).fontSize,10),p=i.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([i,G_({content:i.innerHTML,width:f,height:h,transform:l,extra:c,watchable:!0})])}}},wS=new RegExp('"',"ug"),Y_=[1105920,1112319],Z_=Re(Re(Re(Re({},{FontAwesome:{normal:"fas",400:"fas"}}),_E),PT),RE),xp=Object.keys(Z_).reduce(function(r,e){return r[e.toLowerCase()]=Z_[e],r},{}),ZA=Object.keys(xp).reduce(function(r,e){var i=xp[e];return r[e]=i[900]||Xi(Object.entries(i))[0][1],r},{});function KA(r){var e=r.replace(wS,"");return hS(Xi(e)[0]||"")}function QA(r){var e=r.getPropertyValue("font-feature-settings").includes("ss01"),i=r.getPropertyValue("content"),a=i.replace(wS,""),l=a.codePointAt(0),c=l>=Y_[0]&&l<=Y_[1],f=a.length===2?a[0]===a[1]:!1;return c||f||e}function $A(r,e){var i=r.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),l=isNaN(a)?"normal":a;return(xp[i]||{})[l]||ZA[i]}function K_(r,e){var i="".concat(IT).concat(e.replace(":","-"));return new Promise(function(a,l){if(r.getAttribute(i)!==null)return a();var c=yo(r.children),f=c.filter(function(U){return U.getAttribute(lp)===e})[0],h=br.getComputedStyle(r,e),m=h.getPropertyValue("font-family"),p=m.match(GT),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return r.removeChild(f),a();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=$A(m,_),E=KA(g),w=p[0].startsWith("FontAwesome"),b=QA(h),y=bm(S,E),P=y;if(w){var F=lA(E);F.iconName&&F.prefix&&(y=F.iconName,S=F.prefix)}if(y&&!b&&(!f||f.getAttribute(gm)!==S||f.getAttribute(vm)!==P)){r.setAttribute(i,P),f&&r.removeChild(f);var N=BA(),O=N.extra;O.attributes[lp]=e,gp(y,S).then(function(U){var B=Mm(Re(Re({},N),{},{icons:{main:U,mask:bS()},prefix:S,iconName:P,extra:O,watchable:!0})),T=tn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?r.insertBefore(T,r.firstChild):r.appendChild(T),T.outerHTML=B.map(function(z){return Pl(z)}).join(`
`),r.removeAttribute(i),a()}).catch(l)}else a()}else a()})}function JA(r){return Promise.all([K_(r,"::before"),K_(r,"::after")])}function e2(r){return r.parentNode!==document.head&&!~FT.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(lp)&&(!r.parentNode||r.parentNode.tagName!=="svg")}var t2=function(e){return!!e&&aS.some(function(i){return e.includes(i)})},n2=function(e){if(!e)return[];var i=new Set,a=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=wu(a),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;if(t2(f)){var h=aS.reduce(function(m,p){return m.replace(p,"")},f);h!==""&&h!=="*"&&i.add(h)}}}catch(m){l.e(m)}finally{l.f()}return i};function Q_(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ha){var i;if(e)i=r;else if(st.searchPseudoElementsFullScan)i=r.querySelectorAll("*");else{var a=new Set,l=wu(document.styleSheets),c;try{for(l.s();!(c=l.n()).done;){var f=c.value;try{var h=wu(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=n2(p.selectorText),v=wu(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;a.add(S)}}catch(w){v.e(w)}finally{v.f()}}}catch(w){h.e(w)}finally{h.f()}}catch(w){st.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){l.e(w)}finally{l.f()}if(!a.size)return;var E=Array.from(a).join(", ");try{i=r.querySelectorAll(E)}catch{}}return new Promise(function(w,b){var y=yo(i).filter(e2).map(JA),P=Em.begin("searchPseudoElements");RS(),Promise.all(y).then(function(){P(),_p(),w()}).catch(function(){P(),_p(),b()})})}}var i2={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=Q_,i}}},provides:function(e){e.pseudoElements2svg=function(i){var a=i.node,l=a===void 0?tn:a;st.searchPseudoElements&&Q_(l)}}},$_=!1,a2={mixout:function(){return{dom:{unwatch:function(){RS(),$_=!0}}}},hooks:function(){return{bootstrap:function(){W_(hp("mutationObserverCallbacks",{}))},noAuto:function(){PA()},watch:function(i){var a=i.observeMutationsRoot;$_?_p():W_(hp("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},J_=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,l){var c=l.toLowerCase().split("-"),f=c[0],h=c.slice(1).join("-");if(f&&h==="h")return a.flipX=!0,a;if(f&&h==="v")return a.flipY=!0,a;if(h=parseFloat(h),isNaN(h))return a;switch(f){case"grow":a.size=a.size+h;break;case"shrink":a.size=a.size-h;break;case"left":a.x=a.x-h;break;case"right":a.x=a.x+h;break;case"up":a.y=a.y-h;break;case"down":a.y=a.y+h;break;case"rotate":a.rotate=a.rotate+h;break}return a},i)},r2={mixout:function(){return{parse:{transform:function(i){return J_(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-transform");return l&&(i.transform=J_(l)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var a=i.main,l=i.transform,c=i.containerWidth,f=i.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),_="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(f/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:Re({},S.outer),children:[{tag:"g",attributes:Re({},S.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:Re(Re({},a.icon.attributes),S.path)}]}]}}}},gh={x:0,y:0,width:"100%",height:"100%"};function ex(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||e)&&(r.attributes.fill="black"),r}function s2(r){return r.tag==="g"?r.children:[r]}var o2={hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-mask"),c=l?ef(l.split(" ").map(function(f){return f.trim()})):bS();return c.prefix||(c.prefix=Mr()),i.mask=c,i.maskId=a.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var a=i.children,l=i.attributes,c=i.main,f=i.mask,h=i.maskId,m=i.transform,p=c.width,_=c.icon,v=f.width,g=f.icon,S=$T({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:Re(Re({},gh),{},{fill:"white"})},w=_.children?{children:_.children.map(ex)}:{},b={tag:"g",attributes:Re({},S.inner),children:[ex(Re({tag:_.tag,attributes:Re(Re({},_.attributes),S.path)},w))]},y={tag:"g",attributes:Re({},S.outer),children:[b]},P="mask-".concat(h||O_()),F="clip-".concat(h||O_()),N={tag:"mask",attributes:Re(Re({},gh),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:s2(g)},N]};return a.push(O,{tag:"rect",attributes:Re({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(P,")")},gh)}),{children:a,attributes:l}}}},l2={provides:function(e){var i=!1;br.matchMedia&&(i=br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],l={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:Re(Re({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=Re(Re({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Re(Re({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||h.children.push({tag:"animate",attributes:Re(Re({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Re(Re({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(h),a.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:Re(Re({},f),{},{values:"1;0;0;0;0;1;"})}]}),i||a.push({tag:"path",attributes:Re(Re({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Re(Re({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},c2={hooks:function(){return{parseNodeAttributes:function(i,a){var l=a.getAttribute("data-fa-symbol"),c=l===null?!1:l===""?!0:l;return i.symbol=c,i}}}},u2=[tA,WA,qA,jA,YA,i2,a2,r2,o2,l2,c2];vA(u2,{mixoutsTo:vi});vi.noAuto;var ls=vi.config;vi.library;vi.dom;var DS=vi.parse;vi.findIconDefinition;vi.toHtml;var f2=vi.icon;vi.layer;vi.text;vi.counter;var vh={exports:{}},ml={},_h={exports:{}},xh={};var tx;function d2(){return tx||(tx=1,(function(r){function e(L,V){var G=L.length;L.push(V);e:for(;0<G;){var ce=G-1>>>1,Se=L[ce];if(0<l(Se,V))L[ce]=V,L[G]=Se,G=ce;else break e}}function i(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var V=L[0],G=L.pop();if(G!==V){L[0]=G;e:for(var ce=0,Se=L.length,D=Se>>>1;ce<D;){var X=2*(ce+1)-1,pe=L[X],Me=X+1,Ae=L[Me];if(0>l(pe,G))Me<Se&&0>l(Ae,pe)?(L[ce]=Ae,L[Me]=G,ce=Me):(L[ce]=pe,L[X]=G,ce=X);else if(Me<Se&&0>l(Ae,G))L[ce]=Ae,L[Me]=G,ce=Me;else break e}}return V}function l(L,V){var G=L.sortIndex-V.sortIndex;return G!==0?G:L.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var V=i(p);V!==null;){if(V.callback===null)a(p);else if(V.startTime<=L)a(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function O(L){if(w=!1,N(L),!E)if(i(m)!==null)E=!0,U||(U=!0,K());else{var V=i(p);V!==null&&J(O,V.startTime-L)}}var U=!1,B=-1,T=5,z=-1;function j(){return b?!0:!(r.unstable_now()-z<T)}function k(){if(b=!1,U){var L=r.unstable_now();z=L;var V=!0;try{e:{E=!1,w&&(w=!1,P(B),B=-1),S=!0;var G=g;try{t:{for(N(L),v=i(m);v!==null&&!(v.expirationTime>L&&j());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,g=v.priorityLevel;var Se=ce(v.expirationTime<=L);if(L=r.unstable_now(),typeof Se=="function"){v.callback=Se,N(L),V=!0;break t}v===i(m)&&a(m),N(L)}else a(m);v=i(m)}if(v!==null)V=!0;else{var D=i(p);D!==null&&J(O,D.startTime-L),V=!1}}break e}finally{v=null,g=G,S=!1}V=void 0}}finally{V?K():U=!1}}}var K;if(typeof F=="function")K=function(){F(k)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=k,K=function(){he.postMessage(null)}}else K=function(){y(k,0)};function J(L,V){B=y(function(){L(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var G=g;g=V;try{return L()}finally{g=G}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=g;g=L;try{return V()}finally{g=G}},r.unstable_scheduleCallback=function(L,V,G){var ce=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ce+G:ce):G=ce,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=G+Se,L={id:_++,callback:V,priorityLevel:L,startTime:G,expirationTime:Se,sortIndex:-1},G>ce?(L.sortIndex=G,e(p,L),i(m)===null&&L===i(p)&&(w?(P(B),B=-1):w=!0,J(O,G-ce))):(L.sortIndex=Se,e(m,L),E||S||(E=!0,U||(U=!0,K()))),L},r.unstable_shouldYield=j,r.unstable_wrapCallback=function(L){var V=g;return function(){var G=g;g=V;try{return L.apply(this,arguments)}finally{g=G}}}})(xh)),xh}var nx;function h2(){return nx||(nx=1,_h.exports=d2()),_h.exports}var yh={exports:{}},Bn={};var ix;function p2(){if(ix)return Bn;ix=1;var r=dm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=_,a.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Bn.requestFormReset=function(m){a.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var ax;function m2(){if(ax)return yh.exports;ax=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yh.exports=p2(),yh.exports}var rx;function g2(){if(rx)return ml;rx=1;var r=h2(),e=dm(),i=m2();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var s=t,o=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var x=!1,C=u.child;C;){if(C===s){x=!0,s=u,o=d;break}if(C===o){x=!0,o=u,s=d;break}C=C.sibling}if(!x){for(C=d.child;C;){if(C===s){x=!0,s=d,o=u;break}if(C===o){x=!0,o=d,s=u;break}C=C.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),F=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case U:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var J=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ce=[],Se=-1;function D(t){return{current:t}}function X(t){0>Se||(t.current=ce[Se],ce[Se]=null,Se--)}function pe(t,n){Se++,ce[Se]=t.current,t.current=n}var Me=D(null),Ae=D(null),ee=D(null),ue=D(null);function _e(t,n){switch(pe(ee,n),pe(Ae,t),pe(Me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?kv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=kv(n),t=Xv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(Me),pe(Me,t)}function Le(){X(Me),X(Ae),X(ee)}function Je(t){t.memoizedState!==null&&pe(ue,t);var n=Me.current,s=Xv(n,t.type);n!==s&&(pe(Ae,t),pe(Me,s))}function Be(t){Ae.current===t&&(X(Me),X(Ae)),ue.current===t&&(X(ue),ul._currentValue=G)}var De,qe;function ft(t){if(De===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||"",qe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+t+qe}var ut=!1;function tt(t,n){if(!t||ut)return"";ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(fe){var le=fe}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(fe){le=fe}t.call(Ee.prototype)}}else{try{throw Error()}catch(fe){le=fe}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],C=d[1];if(x&&C){var H=x.split(`
`),ne=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ne.length)for(o=H.length-1,u=ne.length-1;1<=o&&0<=u&&H[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ne[u]){var xe=`
`+H[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ft(s):""}function Ct(t,n){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return ft("Activity");default:return""}}function Yt(t){try{var n="",s=null;do n+=Ct(t,s),s=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,nn=r.unstable_scheduleCallback,Qt=r.unstable_cancelCallback,ln=r.unstable_shouldYield,Z=r.unstable_requestPaint,Xt=r.unstable_now,Ut=r.unstable_getCurrentPriorityLevel,I=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,se=r.unstable_LowPriority,ge=r.unstable_IdlePriority,Ce=r.log,Oe=r.unstable_setDisableYieldValue,me=null,ve=null;function Ne(t){if(typeof Ce=="function"&&Oe(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(me,t)}catch{}}var Ve=Math.clz32?Math.clz32:nt,ze=Math.log,Pe=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(ze(t)/Pe|0)|0}var it=256,dt=262144,q=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=we(o):(x&=C,x!==0?u=we(x):s||(s=C&~t,s!==0&&(u=we(s))))):(C=o&~d,C!==0?u=we(C):x!==0?u=we(x):s||(s=o&~t,s!==0&&(u=we(s)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function Qe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,s,o,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ne=t.hiddenUpdates;for(s=x&~s;0<s;){var xe=31-Ve(s),Ee=1<<xe;C[xe]=0,H[xe]=-1;var le=ne[xe];if(le!==null)for(ne[xe]=null,xe=0;xe<le.length;xe++){var fe=le[xe];fe!==null&&(fe.lane&=-536870913)}s&=~Ee}o!==0&&zt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function zt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ii(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var o=31-Ve(s),u=1<<o;u&n|t[o]&n&&(t[o]|=n),s&=~u}}function ai(t,n){var s=n&-n;return s=(s&42)!==0?1:Eo(s),(s&(t.suspendedLanes|n))!==0?0:s}function Eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function To(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ao(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:h_(t.type))}function hs(t,n){var s=V.p;try{return V.p=t,n()}finally{V.p=s}}var Wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Wi,Dn="__reactProps$"+Wi,jn="__reactContainer$"+Wi,Ar="__reactEvents$"+Wi,Hl="__reactListeners$"+Wi,Gl="__reactHandles$"+Wi,Rr="__reactResources$"+Wi,Ga="__reactMarker$"+Wi;function Va(t){delete t[mn],delete t[Dn],delete t[Ar],delete t[Hl],delete t[Gl]}function oa(t){var n=t[mn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[jn]||s[mn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Qv(t);t!==null;){if(s=t[mn])return s;t=Qv(t)}return n}t=s,s=t.parentNode}return null}function la(t){if(t=t[mn]||t[jn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Cr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function ka(t){var n=t[Rr];return n||(n=t[Rr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Ga]=!0}var Vl=new Set,R={};function Y(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)Vl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Fe={};function We(t){return $t.call(Fe,t)?!0:$t.call(re,t)?!1:ae.test(t)?Fe[t]=!0:(re[t]=!0,!1)}function Ie(t,n,s){if(We(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ze(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ye(t,n,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dt(t){if(!t._valueTracker){var n=mt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return t&&(o=mt(t)?t.checked?"true":"false":t.value),t=o,t!==s?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Bt(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,s,o,u,d,x,C){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?xt(t,x,at(n)):s!=null?xt(t,x,at(s)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+at(C):t.removeAttribute("name")}function Fn(t,n,s,o,u,d,x,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Dt(t);return}s=s!=null?""+at(s):"",n=n!=null?""+at(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Dt(t)}function xt(t,n,s){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,n,s,o){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+at(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ri(t,n,s){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+at(s):""}function Ni(t,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(J(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=at(n),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),Dt(t)}function si(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,s):typeof s!="number"||s===0||Ht.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Li(t,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&s[u]!==o&&sn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return Xa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var of=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ps=null,ms=null;function Vm(t){var n=la(t);if(n&&(t=n.stateNode)){var s=t[Dn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Bt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==t&&o.form===t.form){var u=o[Dn]||null;if(!u)throw Error(a(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===t.form&&rn(o)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Mn(t,!!s.multiple,n,!1)}}}var cf=!1;function km(t,n,s){if(cf)return t(n,s);cf=!0;try{var o=t(n);return o}finally{if(cf=!1,(ps!==null||ms!==null)&&(wc(),ps&&(n=ps,t=ms,ms=ps=null,Vm(n),t)))for(n=0;n<t.length;n++)Vm(t[n])}}function Ro(t,n){var s=t.stateNode;if(s===null)return null;var o=s[Dn]||null;if(o===null)return null;s=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=!1;if(ua)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){uf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{uf=!1}var Wa=null,ff=null,kl=null;function Xm(){if(kl)return kl;var t,n=ff,s=n.length,o,u="value"in Wa?Wa.value:Wa.textContent,d=u.length;for(t=0;t<s&&n[t]===u[t];t++);var x=s-t;for(o=1;o<=x&&n[s-o]===u[d-o];o++);return kl=u.slice(t,1<o?1-o:void 0)}function Xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function Wm(){return!1}function Yn(t){function n(s,o,u,d,x){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wl:Wm,this.isPropagationStopped=Wm,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),n}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Yn(Dr),wo=v({},Dr,{view:0,detail:0}),Eb=Yn(wo),df,hf,Do,jl=v({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(df=t.screenX-Do.screenX,hf=t.screenY-Do.screenY):hf=df=0,Do=t),df)},movementY:function(t){return"movementY"in t?t.movementY:hf}}),qm=Yn(jl),Tb=v({},jl,{dataTransfer:0}),Ab=Yn(Tb),Rb=v({},wo,{relatedTarget:0}),pf=Yn(Rb),Cb=v({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),wb=Yn(Cb),Db=v({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nb=Yn(Db),Lb=v({},Dr,{data:0}),jm=Yn(Lb),Ub={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ib(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Pb[t])?!!n[t]:!1}function mf(){return Ib}var zb=v({},wo,{key:function(t){if(t.key){var n=Ub[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ob[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fb=Yn(zb),Bb=v({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=Yn(Bb),Hb=v({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),Gb=Yn(Hb),Vb=v({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kb=Yn(Vb),Xb=v({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wb=Yn(Xb),qb=v({},Dr,{newState:0,oldState:0}),jb=Yn(qb),Yb=[9,13,27,32],gf=ua&&"CompositionEvent"in window,No=null;ua&&"documentMode"in document&&(No=document.documentMode);var Zb=ua&&"TextEvent"in window&&!No,Zm=ua&&(!gf||No&&8<No&&11>=No),Km=" ",Qm=!1;function $m(t,n){switch(t){case"keyup":return Yb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Kb(t,n){switch(t){case"compositionend":return Jm(n);case"keypress":return n.which!==32?null:(Qm=!0,Km);case"textInput":return t=n.data,t===Km&&Qm?null:t;default:return null}}function Qb(t,n){if(gs)return t==="compositionend"||!gf&&$m(t,n)?(t=Xm(),kl=ff=Wa=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zm&&n.locale!=="ko"?null:n.data;default:return null}}var $b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$b[t.type]:n==="textarea"}function tg(t,n,s,o){ps?ms?ms.push(o):ms=[o]:ps=o,n=Ic(n,"onChange"),0<n.length&&(s=new ql("onChange","change",null,s,o),t.push({event:s,listeners:n}))}var Lo=null,Uo=null;function Jb(t){zv(t,0)}function Yl(t){var n=Cr(t);if(rn(n))return t}function ng(t,n){if(t==="change")return n}var ig=!1;if(ua){var vf;if(ua){var _f="oninput"in document;if(!_f){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),_f=typeof ag.oninput=="function"}vf=_f}else vf=!1;ig=vf&&(!document.documentMode||9<document.documentMode)}function rg(){Lo&&(Lo.detachEvent("onpropertychange",sg),Uo=Lo=null)}function sg(t){if(t.propertyName==="value"&&Yl(Uo)){var n=[];tg(n,Uo,t,lf(t)),km(Jb,n)}}function e1(t,n,s){t==="focusin"?(rg(),Lo=n,Uo=s,Lo.attachEvent("onpropertychange",sg)):t==="focusout"&&rg()}function t1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Uo)}function n1(t,n){if(t==="click")return Yl(n)}function i1(t,n){if(t==="input"||t==="change")return Yl(n)}function a1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:a1;function Oo(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!$t.call(n,u)||!oi(t[u],n[u]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lg(t,n){var s=og(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=n&&o>=n)return{node:s,offset:n-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=og(s)}}function cg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ug(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Zt(t.document)}return n}function xf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var r1=ua&&"documentMode"in document&&11>=document.documentMode,vs=null,yf=null,Po=null,Sf=!1;function fg(t,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Sf||vs==null||vs!==Zt(o)||(o=vs,"selectionStart"in o&&xf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=Ic(yf,"onSelect"),0<o.length&&(n=new ql("onSelect","select",null,n,s),t.push({event:n,listeners:o}),n.target=vs)))}function Nr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var _s={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},bf={},dg={};ua&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Lr(t){if(bf[t])return bf[t];if(!_s[t])return t;var n=_s[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in dg)return bf[t]=n[s];return t}var hg=Lr("animationend"),pg=Lr("animationiteration"),mg=Lr("animationstart"),s1=Lr("transitionrun"),o1=Lr("transitionstart"),l1=Lr("transitioncancel"),gg=Lr("transitionend"),vg=new Map,Mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mf.push("scrollEnd");function Ui(t,n){vg.set(t,n),Y(n,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],xs=0,Ef=0;function Kl(){for(var t=xs,n=Ef=xs=0;n<t;){var s=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&_g(s,u,d)}}function Ql(t,n,s,o){_i[xs++]=t,_i[xs++]=n,_i[xs++]=s,_i[xs++]=o,Ef|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tf(t,n,s,o){return Ql(t,n,s,o),$l(t)}function Ur(t,n){return Ql(t,null,null,n),$l(t)}function _g(t,n,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ve(s),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=s|536870912),d):null}function $l(t){if(50<il)throw il=0,Od=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ys={};function c1(t,n,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,s,o){return new c1(t,n,s,o)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,n){var s=t.alternate;return s===null?(s=li(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function xg(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jl(t,n,s,o,u,d){var x=0;if(o=t,typeof t=="function")Af(t)&&(x=1);else if(typeof t=="string")x=pM(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=li(31,s,n,u),t.elementType=z,t.lanes=d,t;case w:return Or(s.children,u,d,n);case b:x=8,u|=24;break;case y:return t=li(12,s,n,u|2),t.elementType=y,t.lanes=d,t;case O:return t=li(13,s,n,u),t.elementType=O,t.lanes=d,t;case U:return t=li(19,s,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break e;case P:x=9;break e;case N:x=11;break e;case B:x=14;break e;case T:x=16,o=null;break e}x=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=li(x,s,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Or(t,n,s,o){return t=li(7,t,o,n),t.lanes=s,t}function Rf(t,n,s){return t=li(6,t,null,n),t.lanes=s,t}function yg(t){var n=li(18,null,null,0);return n.stateNode=t,n}function Cf(t,n,s){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Sg=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var s=Sg.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Yt(n)},Sg.set(t,n),n)}return{value:t,source:n,stack:Yt(n)}}var Ss=[],bs=0,ec=null,Io=0,yi=[],Si=0,qa=null,ji=1,Yi="";function da(t,n){Ss[bs++]=Io,Ss[bs++]=ec,ec=t,Io=n}function bg(t,n,s){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=qa,qa=t;var o=ji;t=Yi;var u=32-Ve(o)-1;o&=~(1<<u),s+=1;var d=32-Ve(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ji=1<<32-Ve(n)+u|s<<u|o,Yi=d+t}else ji=1<<d|s<<u|o,Yi=t}function wf(t){t.return!==null&&(da(t,1),bg(t,1,0))}function Df(t){for(;t===ec;)ec=Ss[--bs],Ss[bs]=null,Io=Ss[--bs],Ss[bs]=null;for(;t===qa;)qa=yi[--Si],yi[Si]=null,Yi=yi[--Si],yi[Si]=null,ji=yi[--Si],yi[Si]=null}function Mg(t,n){yi[Si++]=ji,yi[Si++]=Yi,yi[Si++]=qa,ji=n.id,Yi=n.overflow,qa=t}var Nn=null,Jt=null,Tt=!1,ja=null,bi=!1,Nf=Error(a(519));function Ya(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(xi(n,t)),Nf}function Eg(t){var n=t.stateNode,s=t.type,o=t.memoizedProps;switch(n[mn]=t,n[Dn]=o,s){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(s=0;s<rl.length;s++)St(rl[s],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||Gv(n.textContent,s)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||Ya(t,!0)}function Tg(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Ms(t){if(t!==Nn)return!1;if(!Tt)return Tg(t),Tt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Zd(t.type,t.memoizedProps)),s=!s),s&&Jt&&Ya(t),Tg(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=Kv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=Kv(t)}else n===27?(n=Jt,lr(t.type)?(t=eh,eh=null,Jt=t):Jt=n):Jt=Nn?Ei(t.stateNode.nextSibling):null;return!0}function Pr(){Jt=Nn=null,Tt=!1}function Lf(){var t=ja;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),ja=null),t}function zo(t){ja===null?ja=[t]:ja.push(t)}var Uf=D(null),Ir=null,ha=null;function Za(t,n,s){pe(Uf,n._currentValue),n._currentValue=s}function pa(t){t._currentValue=Uf.current,X(Uf)}function Of(t,n,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===s)break;t=t.return}}function Pf(t,n,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),Of(d.return,s,t),o||(x=null);break e}d=C.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Of(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Es(t,n,s,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var C=u.type;oi(u.pendingProps.value,x.value)||(t!==null?t.push(C):t=[C])}}else if(u===ue.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}u=u.return}t!==null&&Pf(n,t,s,o),n.flags|=262144}function tc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Ir=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Ag(Ir,t)}function nc(t,n){return Ir===null&&zr(t),Ag(t,n)}function Ag(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(a(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return s}var u1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},f1=r.unstable_scheduleCallback,d1=r.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function If(){return{controller:new u1,data:new Map,refCount:0}}function Fo(t){t.refCount--,t.refCount===0&&f1(d1,function(){t.controller.abort()})}var Bo=null,zf=0,Ts=0,As=null;function h1(t,n){if(Bo===null){var s=Bo=[];zf=0,Ts=Hd(),As={status:"pending",value:void 0,then:function(o){s.push(o)}}}return zf++,n.then(Rg,Rg),n}function Rg(){if(--zf===0&&Bo!==null){As!==null&&(As.status="fulfilled");var t=Bo;Bo=null,Ts=0,As=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function p1(t,n){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Cg=L.S;L.S=function(t,n){fv=Xt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&h1(t,n),Cg!==null&&Cg(t,n)};var Fr=D(null);function Ff(){var t=Fr.current;return t!==null?t:Kt.pooledCache}function ic(t,n){n===null?pe(Fr,Fr.current):pe(Fr,n.pool)}function wg(){var t=Ff();return t===null?null:{parent:vn._currentValue,pool:t}}var Rs=Error(a(460)),Bf=Error(a(474)),ac=Error(a(542)),rc={then:function(){}};function Dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ng(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ca,ca),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ug(t),t;default:if(typeof n.status=="string")n.then(ca,ca);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ug(t),t}throw Hr=n,Rs}}function Br(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hr=s,Rs):s}}var Hr=null;function Lg(){if(Hr===null)throw Error(a(459));var t=Hr;return Hr=null,t}function Ug(t){if(t===Rs||t===ac)throw Error(a(483))}var Cs=null,Ho=0;function sc(t){var n=Ho;return Ho+=1,Cs===null&&(Cs=[]),Ng(Cs,t,n)}function Go(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function oc(t,n){throw n.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Og(t){function n(Q,W){if(t){var te=Q.deletions;te===null?(Q.deletions=[W],Q.flags|=16):te.push(W)}}function s(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=fa(Q,W),Q.index=0,Q.sibling=null,Q}function d(Q,W,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<W?(Q.flags|=67108866,W):te):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,W,te,be){return W===null||W.tag!==6?(W=Rf(te,Q.mode,be),W.return=Q,W):(W=u(W,te),W.return=Q,W)}function H(Q,W,te,be){var rt=te.type;return rt===w?xe(Q,W,te.props.children,be,te.key):W!==null&&(W.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Br(rt)===W.type)?(W=u(W,te.props),Go(W,te),W.return=Q,W):(W=Jl(te.type,te.key,te.props,null,Q.mode,be),Go(W,te),W.return=Q,W)}function ne(Q,W,te,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Cf(te,Q.mode,be),W.return=Q,W):(W=u(W,te.children||[]),W.return=Q,W)}function xe(Q,W,te,be,rt){return W===null||W.tag!==7?(W=Or(te,Q.mode,be,rt),W.return=Q,W):(W=u(W,te),W.return=Q,W)}function Ee(Q,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Rf(""+W,Q.mode,te),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return te=Jl(W.type,W.key,W.props,null,Q.mode,te),Go(te,W),te.return=Q,te;case E:return W=Cf(W,Q.mode,te),W.return=Q,W;case T:return W=Br(W),Ee(Q,W,te)}if(J(W)||K(W))return W=Or(W,Q.mode,te,null),W.return=Q,W;if(typeof W.then=="function")return Ee(Q,sc(W),te);if(W.$$typeof===F)return Ee(Q,nc(Q,W),te);oc(Q,W)}return null}function le(Q,W,te,be){var rt=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return rt!==null?null:C(Q,W,""+te,be);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===rt?H(Q,W,te,be):null;case E:return te.key===rt?ne(Q,W,te,be):null;case T:return te=Br(te),le(Q,W,te,be)}if(J(te)||K(te))return rt!==null?null:xe(Q,W,te,be,null);if(typeof te.then=="function")return le(Q,W,sc(te),be);if(te.$$typeof===F)return le(Q,W,nc(Q,te),be);oc(Q,te)}return null}function fe(Q,W,te,be,rt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return Q=Q.get(te)||null,C(W,Q,""+be,rt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case S:return Q=Q.get(be.key===null?te:be.key)||null,H(W,Q,be,rt);case E:return Q=Q.get(be.key===null?te:be.key)||null,ne(W,Q,be,rt);case T:return be=Br(be),fe(Q,W,te,be,rt)}if(J(be)||K(be))return Q=Q.get(te)||null,xe(W,Q,be,rt,null);if(typeof be.then=="function")return fe(Q,W,te,sc(be),rt);if(be.$$typeof===F)return fe(Q,W,te,nc(W,be),rt);oc(W,be)}return null}function Ke(Q,W,te,be){for(var rt=null,Nt=null,$e=W,vt=W=0,Mt=null;$e!==null&&vt<te.length;vt++){$e.index>vt?(Mt=$e,$e=null):Mt=$e.sibling;var Lt=le(Q,$e,te[vt],be);if(Lt===null){$e===null&&($e=Mt);break}t&&$e&&Lt.alternate===null&&n(Q,$e),W=d(Lt,W,vt),Nt===null?rt=Lt:Nt.sibling=Lt,Nt=Lt,$e=Mt}if(vt===te.length)return s(Q,$e),Tt&&da(Q,vt),rt;if($e===null){for(;vt<te.length;vt++)$e=Ee(Q,te[vt],be),$e!==null&&(W=d($e,W,vt),Nt===null?rt=$e:Nt.sibling=$e,Nt=$e);return Tt&&da(Q,vt),rt}for($e=o($e);vt<te.length;vt++)Mt=fe($e,Q,vt,te[vt],be),Mt!==null&&(t&&Mt.alternate!==null&&$e.delete(Mt.key===null?vt:Mt.key),W=d(Mt,W,vt),Nt===null?rt=Mt:Nt.sibling=Mt,Nt=Mt);return t&&$e.forEach(function(hr){return n(Q,hr)}),Tt&&da(Q,vt),rt}function lt(Q,W,te,be){if(te==null)throw Error(a(151));for(var rt=null,Nt=null,$e=W,vt=W=0,Mt=null,Lt=te.next();$e!==null&&!Lt.done;vt++,Lt=te.next()){$e.index>vt?(Mt=$e,$e=null):Mt=$e.sibling;var hr=le(Q,$e,Lt.value,be);if(hr===null){$e===null&&($e=Mt);break}t&&$e&&hr.alternate===null&&n(Q,$e),W=d(hr,W,vt),Nt===null?rt=hr:Nt.sibling=hr,Nt=hr,$e=Mt}if(Lt.done)return s(Q,$e),Tt&&da(Q,vt),rt;if($e===null){for(;!Lt.done;vt++,Lt=te.next())Lt=Ee(Q,Lt.value,be),Lt!==null&&(W=d(Lt,W,vt),Nt===null?rt=Lt:Nt.sibling=Lt,Nt=Lt);return Tt&&da(Q,vt),rt}for($e=o($e);!Lt.done;vt++,Lt=te.next())Lt=fe($e,Q,vt,Lt.value,be),Lt!==null&&(t&&Lt.alternate!==null&&$e.delete(Lt.key===null?vt:Lt.key),W=d(Lt,W,vt),Nt===null?rt=Lt:Nt.sibling=Lt,Nt=Lt);return t&&$e.forEach(function(TM){return n(Q,TM)}),Tt&&da(Q,vt),rt}function jt(Q,W,te,be){if(typeof te=="object"&&te!==null&&te.type===w&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var rt=te.key;W!==null;){if(W.key===rt){if(rt=te.type,rt===w){if(W.tag===7){s(Q,W.sibling),be=u(W,te.props.children),be.return=Q,Q=be;break e}}else if(W.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Br(rt)===W.type){s(Q,W.sibling),be=u(W,te.props),Go(be,te),be.return=Q,Q=be;break e}s(Q,W);break}else n(Q,W);W=W.sibling}te.type===w?(be=Or(te.props.children,Q.mode,be,te.key),be.return=Q,Q=be):(be=Jl(te.type,te.key,te.props,null,Q.mode,be),Go(be,te),be.return=Q,Q=be)}return x(Q);case E:e:{for(rt=te.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){s(Q,W.sibling),be=u(W,te.children||[]),be.return=Q,Q=be;break e}else{s(Q,W);break}else n(Q,W);W=W.sibling}be=Cf(te,Q.mode,be),be.return=Q,Q=be}return x(Q);case T:return te=Br(te),jt(Q,W,te,be)}if(J(te))return Ke(Q,W,te,be);if(K(te)){if(rt=K(te),typeof rt!="function")throw Error(a(150));return te=rt.call(te),lt(Q,W,te,be)}if(typeof te.then=="function")return jt(Q,W,sc(te),be);if(te.$$typeof===F)return jt(Q,W,nc(Q,te),be);oc(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(s(Q,W.sibling),be=u(W,te),be.return=Q,Q=be):(s(Q,W),be=Rf(te,Q.mode,be),be.return=Q,Q=be),x(Q)):s(Q,W)}return function(Q,W,te,be){try{Ho=0;var rt=jt(Q,W,te,be);return Cs=null,rt}catch($e){if($e===Rs||$e===ac)throw $e;var Nt=li(29,$e,null,Q.mode);return Nt.lanes=be,Nt.return=Q,Nt}}}var Gr=Og(!0),Pg=Og(!1),Ka=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=$l(t),_g(t,null,s),n}return Ql(t,o,n,s),$l(t)}function Vo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ii(t,s)}}function Vf(t,n){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var kf=!1;function ko(){if(kf){var t=As;if(t!==null)throw t}}function Xo(t,n,s,o){kf=!1;var u=t.updateQueue;Ka=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ne=H.next;H.next=null,x===null?d=ne:x.next=ne,x=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,C=xe.lastBaseUpdate,C!==x&&(C===null?xe.firstBaseUpdate=ne:C.next=ne,xe.lastBaseUpdate=H))}if(d!==null){var Ee=u.baseState;x=0,xe=ne=H=null,C=d;do{var le=C.lane&-536870913,fe=le!==C.lane;if(fe?(bt&le)===le:(o&le)===le){le!==0&&le===Ts&&(kf=!0),xe!==null&&(xe=xe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ke=t,lt=C;le=n;var jt=s;switch(lt.tag){case 1:if(Ke=lt.payload,typeof Ke=="function"){Ee=Ke.call(jt,Ee,le);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=lt.payload,le=typeof Ke=="function"?Ke.call(jt,Ee,le):Ke,le==null)break e;Ee=v({},Ee,le);break e;case 2:Ka=!0}}le=C.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},xe===null?(ne=xe=fe,H=Ee):xe=xe.next=fe,x|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;fe=C,C=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);xe===null&&(H=Ee),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=xe,d===null&&(u.shared.lanes=0),ir|=x,t.lanes=x,t.memoizedState=Ee}}function Ig(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function zg(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Ig(s[t],n)}var ws=D(null),lc=D(0);function Fg(t,n){t=Ma,pe(lc,t),pe(ws,n),Ma=t|n.baseLanes}function Xf(){pe(lc,Ma),pe(ws,ws.current)}function Wf(){Ma=lc.current,X(ws),X(lc)}var ci=D(null),Mi=null;function Ja(t){var n=t.alternate;pe(hn,hn.current&1),pe(ci,t),Mi===null&&(n===null||ws.current!==null||n.memoizedState!==null)&&(Mi=t)}function qf(t){pe(hn,hn.current),pe(ci,t),Mi===null&&(Mi=t)}function Bg(t){t.tag===22?(pe(hn,hn.current),pe(ci,t),Mi===null&&(Mi=t)):er()}function er(){pe(hn,hn.current),pe(ci,ci.current)}function ui(t){X(ci),Mi===t&&(Mi=null),X(hn)}var hn=D(0);function cc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||$d(s)||Jd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,gt=null,Wt=null,_n=null,uc=!1,Ds=!1,Vr=!1,fc=0,Wo=0,Ns=null,m1=0;function cn(){throw Error(a(321))}function jf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!oi(t[s],n[s]))return!1;return!0}function Yf(t,n,s,o,u,d){return ma=d,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?b0:cd,Vr=!1,d=s(o,u),Vr=!1,Ds&&(d=Gg(n,s,o,u)),Hg(t),d}function Hg(t){L.H=Yo;var n=Wt!==null&&Wt.next!==null;if(ma=0,_n=Wt=gt=null,uc=!1,Wo=0,Ns=null,n)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&tc(t)&&(xn=!0))}function Gg(t,n,s,o){gt=t;var u=0;do{if(Ds&&(Ns=null),Wo=0,Ds=!1,25<=u)throw Error(a(301));if(u+=1,_n=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=M0,d=n(s,o)}while(Ds);return d}function g1(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?qo(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(gt.flags|=1024),n}function Zf(){var t=fc!==0;return fc=0,t}function Kf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Qf(t){if(uc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}uc=!1}ma=0,_n=Wt=gt=null,Ds=!1,Wo=fc=0,Ns=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?gt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Wt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=_n===null?gt.memoizedState:_n.next;if(n!==null)_n=n,Wt=t;else{if(t===null)throw gt.alternate===null?Error(a(467)):Error(a(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},_n===null?gt.memoizedState=_n=t:_n=_n.next=t}return _n}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(t){var n=Wo;return Wo+=1,Ns===null&&(Ns=[]),t=Ng(Ns,t,n),n=gt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?b0:cd),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qo(t);if(t.$$typeof===F)return Ln(t)}throw Error(a(438,String(t)))}function $f(t){var n=null,s=gt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=dc(),gt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),o=0;o<t;o++)s[o]=j;return n.index++,s}function ga(t,n){return typeof n=="function"?n(t):n}function pc(t){var n=pn();return Jf(n,Wt,t)}function Jf(t,n,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var C=x=null,H=null,ne=n,xe=!1;do{var Ee=ne.lane&-536870913;if(Ee!==ne.lane?(bt&Ee)===Ee:(ma&Ee)===Ee){var le=ne.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Ee===Ts&&(xe=!0);else if((ma&le)===le){ne=ne.next,le===Ts&&(xe=!0);continue}else Ee={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=Ee,x=d):H=H.next=Ee,gt.lanes|=le,ir|=le;Ee=ne.action,Vr&&s(d,Ee),d=ne.hasEagerState?ne.eagerState:s(d,Ee)}else le={lane:Ee,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=le,x=d):H=H.next=le,gt.lanes|=Ee,ir|=Ee;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?x=d:H.next=C,!oi(d,t.memoizedState)&&(xn=!0,xe&&(s=As,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ed(t){var n=pn(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);oi(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,o]}function Vg(t,n,s){var o=gt,u=pn(),d=Tt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var x=!oi((Wt||u).memoizedState,s);if(x&&(u.memoizedState=s,xn=!0),u=u.queue,id(Wg.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Ls(9,{destroy:void 0},Xg.bind(null,o,u,s,n),null),Kt===null)throw Error(a(349));d||(ma&127)!==0||kg(o,n,s)}return s}function kg(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=gt.updateQueue,n===null?(n=dc(),gt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Xg(t,n,s,o){n.value=s,n.getSnapshot=o,qg(n)&&jg(t)}function Wg(t,n,s){return s(function(){qg(n)&&jg(t)})}function qg(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!oi(t,s)}catch{return!0}}function jg(t){var n=Ur(t,2);n!==null&&Jn(n,t,2)}function td(t){var n=kn();if(typeof t=="function"){var s=t;if(t=s(),Vr){Ne(!0);try{s()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},n}function Yg(t,n,s,o){return t.baseState=s,Jf(t,Wt,typeof o=="function"?o:ga)}function v1(t,n,s,o,u){if(vc(t))throw Error(a(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};L.T!==null?s(!0):d.isTransition=!1,o(d),s=n.pending,s===null?(d.next=n.pending=d,Zg(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Zg(t,n){var s=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=L.T,x={};L.T=x;try{var C=s(u,o),H=L.S;H!==null&&H(x,C),Kg(t,n,C)}catch(ne){nd(t,n,ne)}finally{d!==null&&x.types!==null&&(d.types=x.types),L.T=d}}else try{d=s(u,o),Kg(t,n,d)}catch(ne){nd(t,n,ne)}}function Kg(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Qg(t,n,o)},function(o){return nd(t,n,o)}):Qg(t,n,s)}function Qg(t,n,s){n.status="fulfilled",n.value=s,$g(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Zg(t,s)))}function nd(t,n,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,$g(n),n=n.next;while(n!==o)}t.action=null}function $g(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Jg(t,n){return n}function e0(t,n){if(Tt){var s=Kt.formState;if(s!==null){e:{var o=gt;if(Tt){if(Jt){t:{for(var u=Jt,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Jt=Ei(u.nextSibling),o=u.data==="F!";break e}}Ya(o)}o=!1}o&&(n=s[0])}}return s=kn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jg,lastRenderedState:n},s.queue=o,s=x0.bind(null,gt,o),o.dispatch=s,o=td(!1),d=ld.bind(null,gt,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,s=v1.bind(null,gt,u,d,s),u.dispatch=s,o.memoizedState=t,[n,s,!1]}function t0(t){var n=pn();return n0(n,Wt,t)}function n0(t,n,s){if(n=Jf(t,n,Jg)[0],t=pc(ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=qo(n)}catch(x){throw x===Rs?ac:x}else o=n;n=pn();var u=n.queue,d=u.dispatch;return s!==n.memoizedState&&(gt.flags|=2048,Ls(9,{destroy:void 0},_1.bind(null,u,s),null)),[o,d,t]}function _1(t,n){t.action=n}function i0(t){var n=pn(),s=Wt;if(s!==null)return n0(n,s,t);pn(),n=n.memoizedState,s=pn();var o=s.queue.dispatch;return s.memoizedState=t,[n,o,!1]}function Ls(t,n,s,o){return t={tag:t,create:s,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=dc(),gt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,n.lastEffect=t),t}function a0(){return pn().memoizedState}function mc(t,n,s,o){var u=kn();gt.flags|=t,u.memoizedState=Ls(1|n,{destroy:void 0},s,o===void 0?null:o)}function gc(t,n,s,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&jf(o,Wt.memoizedState.deps)?u.memoizedState=Ls(n,d,s,o):(gt.flags|=t,u.memoizedState=Ls(1|n,d,s,o))}function r0(t,n){mc(8390656,8,t,n)}function id(t,n){gc(2048,8,t,n)}function x1(t){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=dc(),gt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function s0(t){var n=pn().memoizedState;return x1({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function o0(t,n){return gc(4,2,t,n)}function l0(t,n){return gc(4,4,t,n)}function c0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function u0(t,n,s){s=s!=null?s.concat([t]):null,gc(4,4,c0.bind(null,n,t),s)}function ad(){}function f0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&jf(n,o[1])?o[0]:(s.memoizedState=[t,n],t)}function d0(t,n){var s=pn();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&jf(n,o[1]))return o[0];if(o=t(),Vr){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[o,n],o}function rd(t,n,s){return s===void 0||(ma&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=hv(),gt.lanes|=t,ir|=t,s)}function h0(t,n,s,o){return oi(s,n)?s:ws.current!==null?(t=rd(t,s,o),oi(t,n)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=s):(t=hv(),gt.lanes|=t,ir|=t,n)}function p0(t,n,s,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var x=L.T,C={};L.T=C,ld(t,!1,n,s);try{var H=u(),ne=L.S;if(ne!==null&&ne(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xe=p1(H,o);jo(t,n,xe,hi(t))}else jo(t,n,o,hi(t))}catch(Ee){jo(t,n,{then:function(){},status:"rejected",reason:Ee},hi())}finally{V.p=d,x!==null&&C.types!==null&&(x.types=C.types),L.T=x}}function y1(){}function sd(t,n,s,o){if(t.tag!==5)throw Error(a(476));var u=m0(t).queue;p0(t,u,n,G,s===null?y1:function(){return g0(t),s(o)})}function m0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:G},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function g0(t){var n=m0(t);n.next===null&&(n=t.alternate.memoizedState),jo(t,n.next.queue,{},hi())}function od(){return Ln(ul)}function v0(){return pn().memoizedState}function _0(){return pn().memoizedState}function S1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=hi();t=Qa(s);var o=$a(n,t,s);o!==null&&(Jn(o,n,s),Vo(o,n,s)),n={cache:If()},t.payload=n;return}n=n.return}}function b1(t,n,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(t)?y0(n,s):(s=Tf(t,n,s,o),s!==null&&(Jn(s,t,o),S0(s,n,o)))}function x0(t,n,s){var o=hi();jo(t,n,s,o)}function jo(t,n,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(t))y0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,C=d(x,s);if(u.hasEagerState=!0,u.eagerState=C,oi(C,x))return Ql(t,n,u,0),Kt===null&&Kl(),!1}catch{}if(s=Tf(t,n,u,o),s!==null)return Jn(s,t,o),S0(s,n,o),!0}return!1}function ld(t,n,s,o){if(o={lane:2,revertLane:Hd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vc(t)){if(n)throw Error(a(479))}else n=Tf(t,s,o,2),n!==null&&Jn(n,t,2)}function vc(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function y0(t,n){Ds=uc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function S0(t,n,s){if((s&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,ii(t,s)}}var Yo={readContext:Ln,use:hc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Yo.useEffectEvent=cn;var b0={readContext:Ln,use:hc,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:r0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,mc(4194308,4,c0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return mc(4194308,4,t,n)},useInsertionEffect:function(t,n){mc(4,2,t,n)},useMemo:function(t,n){var s=kn();n=n===void 0?null:n;var o=t();if(Vr){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[o,n],o},useReducer:function(t,n,s){var o=kn();if(s!==void 0){var u=s(n);if(Vr){Ne(!0);try{s(n)}finally{Ne(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=b1.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=td(t);var n=t.queue,s=x0.bind(null,gt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:ad,useDeferredValue:function(t,n){var s=kn();return rd(s,t,n)},useTransition:function(){var t=td(!1);return t=p0.bind(null,gt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var o=gt,u=kn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Kt===null)throw Error(a(349));(bt&127)!==0||kg(o,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,r0(Wg.bind(null,o,d,t),[t]),o.flags|=2048,Ls(9,{destroy:void 0},Xg.bind(null,o,d,s,n),null),s},useId:function(){var t=kn(),n=Kt.identifierPrefix;if(Tt){var s=Yi,o=ji;s=(o&~(1<<32-Ve(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=fc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=m1++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:od,useFormState:e0,useActionState:e0,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ld.bind(null,gt,!0,s),s.dispatch=n,[t,n]},useMemoCache:$f,useCacheRefresh:function(){return kn().memoizedState=S1.bind(null,gt)},useEffectEvent:function(t){var n=kn(),s={impl:t};return n.memoizedState=s,function(){if((Ot&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},cd={readContext:Ln,use:hc,useCallback:f0,useContext:Ln,useEffect:id,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:pc,useRef:a0,useState:function(){return pc(ga)},useDebugValue:ad,useDeferredValue:function(t,n){var s=pn();return h0(s,Wt.memoizedState,t,n)},useTransition:function(){var t=pc(ga)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),n]},useSyncExternalStore:Vg,useId:v0,useHostTransitionStatus:od,useFormState:t0,useActionState:t0,useOptimistic:function(t,n){var s=pn();return Yg(s,Wt,t,n)},useMemoCache:$f,useCacheRefresh:_0};cd.useEffectEvent=s0;var M0={readContext:Ln,use:hc,useCallback:f0,useContext:Ln,useEffect:id,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:ed,useRef:a0,useState:function(){return ed(ga)},useDebugValue:ad,useDeferredValue:function(t,n){var s=pn();return Wt===null?rd(s,t,n):h0(s,Wt.memoizedState,t,n)},useTransition:function(){var t=ed(ga)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:qo(t),n]},useSyncExternalStore:Vg,useId:v0,useHostTransitionStatus:od,useFormState:i0,useActionState:i0,useOptimistic:function(t,n){var s=pn();return Wt!==null?Yg(s,Wt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:$f,useCacheRefresh:_0};M0.useEffectEvent=s0;function ud(t,n,s,o){n=t.memoizedState,s=s(o,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var fd={enqueueSetState:function(t,n,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.payload=n,s!=null&&(u.callback=s),n=$a(t,u,o),n!==null&&(Jn(n,t,o),Vo(n,t,o))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var o=hi(),u=Qa(o);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=$a(t,u,o),n!==null&&(Jn(n,t,o),Vo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=hi(),o=Qa(s);o.tag=2,n!=null&&(o.callback=n),n=$a(t,o,s),n!==null&&(Jn(n,t,s),Vo(n,t,s))}};function E0(t,n,s,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!Oo(s,o)||!Oo(u,d):!0}function T0(t,n,s,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==t&&fd.enqueueReplaceState(n,n.state,null)}function kr(t,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function A0(t){Zl(t)}function R0(t){console.error(t)}function C0(t){Zl(t)}function _c(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function w0(t,n,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function dd(t,n,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(t,n)},s}function D0(t){return t=Qa(t),t.tag=3,t}function N0(t,n,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){w0(n,s,o)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){w0(n,s,o),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function M1(t,n,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&Es(n,s,u,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Dc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===rc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),zd(t,o,u)),!1;case 22:return s.flags|=65536,o===rc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),zd(t,o,u)),!1}throw Error(a(435,s.tag))}return zd(t,o,u),Dc(),!1}if(Tt)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Nf&&(t=Error(a(422),{cause:o}),zo(xi(t,s)))):(o!==Nf&&(n=Error(a(423),{cause:o}),zo(xi(n,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,s),u=dd(t.stateNode,o,u),Vf(t,u),un!==4&&(un=2)),!1;var d=Error(a(520),{cause:o});if(d=xi(d,s),nl===null?nl=[d]:nl.push(d),un!==4&&(un=2),n===null)return!0;o=xi(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=dd(s.stateNode,o,t),Vf(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=D0(u),N0(u,t,s,o),Vf(s,u),!1}s=s.return}while(s!==null);return!1}var hd=Error(a(461)),xn=!1;function Un(t,n,s,o){n.child=t===null?Pg(n,null,s,o):Gr(n,t.child,s,o)}function L0(t,n,s,o,u){s=s.render;var d=n.ref;if("ref"in o){var x={};for(var C in o)C!=="ref"&&(x[C]=o[C])}else x=o;return zr(n),o=Yf(t,n,s,x,d,u),C=Zf(),t!==null&&!xn?(Kf(t,n,u),va(t,n,u)):(Tt&&C&&wf(n),n.flags|=1,Un(t,n,o,u),n.child)}function U0(t,n,s,o,u){if(t===null){var d=s.type;return typeof d=="function"&&!Af(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,O0(t,n,d,o,u)):(t=Jl(s.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Sd(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(x,o)&&t.ref===n.ref)return va(t,n,u)}return n.flags|=1,t=fa(d,o),t.ref=n.ref,t.return=n,n.child=t}function O0(t,n,s,o,u){if(t!==null){var d=t.memoizedProps;if(Oo(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,Sd(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,va(t,n,u)}return pd(t,n,s,o,u)}function P0(t,n,s,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return I0(t,n,d,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(n,d!==null?d.cachePool:null),d!==null?Fg(n,d):Xf(),Bg(n);else return o=n.lanes=536870912,I0(t,n,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(ic(n,d.cachePool),Fg(n,d),er(),n.memoizedState=null):(t!==null&&ic(n,null),Xf(),er());return Un(t,n,u,s),n.child}function Zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function I0(t,n,s,o,u){var d=Ff();return d=d===null?null:{parent:vn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&ic(n,null),Xf(),Bg(n),t!==null&&Es(t,n,o,!0),n.childLanes=u,null}function xc(t,n){return n=Sc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function z0(t,n,s){return Gr(n,t.child,null,s),t=xc(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function E1(t,n,s){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=xc(n,o),n.lanes=536870912,Zo(null,t);if(qf(n),(t=Jt)?(t=Zv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=yg(t),s.return=n,n.child=s,Nn=n,Jt=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return xc(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(qf(n),u)if(n.flags&256)n.flags&=-257,n=z0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(xn||Es(t,n,s,!1),u=(s&t.childLanes)!==0,xn||u){if(o=Kt,o!==null&&(x=ai(o,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ur(t,x),Jn(o,t,x),hd;Dc(),n=z0(t,n,s)}else t=d.treeContext,Jt=Ei(x.nextSibling),Nn=n,Tt=!0,ja=null,bi=!1,t!==null&&Mg(n,t),n=xc(n,o),n.flags|=4096;return n}return t=fa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function pd(t,n,s,o,u){return zr(n),s=Yf(t,n,s,o,void 0,u),o=Zf(),t!==null&&!xn?(Kf(t,n,u),va(t,n,u)):(Tt&&o&&wf(n),n.flags|=1,Un(t,n,s,u),n.child)}function F0(t,n,s,o,u,d){return zr(n),n.updateQueue=null,s=Gg(n,o,s,u),Hg(t),o=Zf(),t!==null&&!xn?(Kf(t,n,d),va(t,n,d)):(Tt&&o&&wf(n),n.flags|=1,Un(t,n,s,d),n.child)}function B0(t,n,s,o,u){if(zr(n),n.stateNode===null){var d=ys,x=s.contextType;typeof x=="object"&&x!==null&&(d=Ln(x)),d=new s(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=fd,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Hf(n),x=s.contextType,d.context=typeof x=="object"&&x!==null?Ln(x):ys,d.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(ud(n,s,x,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&fd.enqueueReplaceState(d,d.state,null),Xo(n,o,d,u),ko(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var C=n.memoizedProps,H=kr(s,C);d.props=H;var ne=d.context,xe=s.contextType;x=ys,typeof xe=="object"&&xe!==null&&(x=Ln(xe));var Ee=s.getDerivedStateFromProps;xe=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ne!==x)&&T0(n,d,o,x),Ka=!1;var le=n.memoizedState;d.state=le,Xo(n,o,d,u),ko(),ne=n.memoizedState,C||le!==ne||Ka?(typeof Ee=="function"&&(ud(n,s,Ee,o),ne=n.memoizedState),(H=Ka||E0(n,s,H,o,le,ne,x))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Gf(t,n),x=n.memoizedProps,xe=kr(s,x),d.props=xe,Ee=n.pendingProps,le=d.context,ne=s.contextType,H=ys,typeof ne=="object"&&ne!==null&&(H=Ln(ne)),C=s.getDerivedStateFromProps,(ne=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Ee||le!==H)&&T0(n,d,o,H),Ka=!1,le=n.memoizedState,d.state=le,Xo(n,o,d,u),ko();var fe=n.memoizedState;x!==Ee||le!==fe||Ka||t!==null&&t.dependencies!==null&&tc(t.dependencies)?(typeof C=="function"&&(ud(n,s,C,o),fe=n.memoizedState),(xe=Ka||E0(n,s,xe,o,le,fe,H)||t!==null&&t.dependencies!==null&&tc(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,fe,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,fe,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),d.props=o,d.state=fe,d.context=H,o=xe):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,yc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Gr(n,t.child,null,u),n.child=Gr(n,null,s,u)):Un(t,n,s,u),n.memoizedState=d.state,t=n.child):t=va(t,n,u),t}function H0(t,n,s,o){return Pr(),n.flags|=256,Un(t,n,s,o),n.child}var md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gd(t){return{baseLanes:t,cachePool:wg()}}function vd(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=di),t}function G0(t,n,s){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?Ja(n):er(),(t=Jt)?(t=Zv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=yg(t),s.return=n,n.child=s,Nn=n,Jt=null)):t=null,t===null)throw Ya(n);return Jd(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(er(),u=n.mode,C=Sc({mode:"hidden",children:C},u),o=Or(o,u,s,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=gd(s),o.childLanes=vd(t,x,s),n.memoizedState=md,Zo(null,o)):(Ja(n),_d(n,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(d)n.flags&256?(Ja(n),n.flags&=-257,n=xd(t,n,s)):n.memoizedState!==null?(er(),n.child=t.child,n.flags|=128,n=null):(er(),C=o.fallback,u=n.mode,o=Sc({mode:"visible",children:o.children},u),C=Or(C,u,s,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Gr(n,t.child,null,s),o=n.child,o.memoizedState=gd(s),o.childLanes=vd(t,x,s),n.memoizedState=md,n=Zo(null,o));else if(Ja(n),Jd(C)){if(x=C.nextSibling&&C.nextSibling.dataset,x)var ne=x.dgst;x=ne,o=Error(a(419)),o.stack="",o.digest=x,zo({value:o,source:null,stack:null}),n=xd(t,n,s)}else if(xn||Es(t,n,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=Kt,x!==null&&(o=ai(x,s),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ur(t,o),Jn(x,t,o),hd;$d(C)||Dc(),n=xd(t,n,s)}else $d(C)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Jt=Ei(C.nextSibling),Nn=n,Tt=!0,ja=null,bi=!1,t!==null&&Mg(n,t),n=_d(n,o.children),n.flags|=4096);return n}return u?(er(),C=o.fallback,u=n.mode,H=t.child,ne=H.sibling,o=fa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ne!==null?C=fa(ne,C):(C=Or(C,u,s,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Zo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=gd(s):(u=C.cachePool,u!==null?(H=vn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=wg(),C={baseLanes:C.baseLanes|s,cachePool:u}),o.memoizedState=C,o.childLanes=vd(t,x,s),n.memoizedState=md,Zo(t.child,o)):(Ja(n),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function _d(t,n){return n=Sc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sc(t,n){return t=li(22,t,null,n),t.lanes=0,t}function xd(t,n,s){return Gr(n,t.child,null,s),t=_d(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function V0(t,n,s){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Of(t.return,n,s)}function yd(t,n,s,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function k0(t,n,s){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=hn.current,C=(x&2)!==0;if(C?(x=x&1|2,n.flags|=128):x&=1,pe(hn,x),Un(t,n,o,s),o=Tt?Io:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V0(t,s,n);else if(t.tag===19)V0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),yd(n,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cc(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}yd(n,!0,s,null,d,o);break;case"together":yd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function va(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),ir|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Es(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,s=fa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Sd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tc(t)))}function T1(t,n,s){switch(n.tag){case 3:_e(n,n.stateNode.containerInfo),Za(n,vn,t.memoizedState.cache),Pr();break;case 27:case 5:Je(n);break;case 4:_e(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(n),n.flags|=128,null):(s&n.child.childLanes)!==0?G0(t,n,s):(Ja(n),t=va(t,n,s),t!==null?t.sibling:null);Ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(Es(t,n,s,!1),o=(s&n.childLanes)!==0),u){if(o)return k0(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pe(hn,hn.current),o)break;return null;case 22:return n.lanes=0,P0(t,n,s,n.pendingProps);case 24:Za(n,vn,t.memoizedState.cache)}return va(t,n,s)}function X0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Sd(t,s)&&(n.flags&128)===0)return xn=!1,T1(t,n,s);xn=(t.flags&131072)!==0}else xn=!1,Tt&&(n.flags&1048576)!==0&&bg(n,Io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")Af(t)?(o=kr(t,o),n.tag=1,n=B0(null,n,t,o,s)):(n.tag=0,n=pd(null,n,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=L0(null,n,t,o,s);break e}else if(u===B){n.tag=14,n=U0(null,n,t,o,s);break e}}throw n=he(t)||t,Error(a(306,n,""))}}return n;case 0:return pd(t,n,n.type,n.pendingProps,s);case 1:return o=n.type,u=kr(o,n.pendingProps),B0(t,n,o,u,s);case 3:e:{if(_e(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Gf(t,n),Xo(n,o,null,s);var x=n.memoizedState;if(o=x.cache,Za(n,vn,o),o!==d.cache&&Pf(n,[vn],s,!0),ko(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=H0(t,n,o,s);break e}else if(o!==u){u=xi(Error(a(424)),n),zo(u),n=H0(t,n,o,s);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Ei(t.firstChild),Nn=n,Tt=!0,ja=null,bi=!0,s=Pg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Pr(),o===u){n=va(t,n,s);break e}Un(t,n,o,s)}n=n.child}return n;case 26:return yc(t,n),t===null?(s=t_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Tt||(s=n.type,t=n.pendingProps,o=zc(ee.current).createElement(s),o[mn]=n,o[Dn]=t,On(o,s,t),gn(o),n.stateNode=o):n.memoizedState=t_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&Tt&&(o=n.stateNode=$v(n.type,n.pendingProps,ee.current),Nn=n,bi=!0,u=Jt,lr(n.type)?(eh=u,Jt=Ei(o.firstChild)):Jt=u),Un(t,n,n.pendingProps.children,s),yc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Jt)&&(o=tM(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Nn=n,Jt=Ei(o.firstChild),bi=!1,u=!0):u=!1),u||Ya(n)),Je(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,Zd(u,d)?o=null:x!==null&&Zd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Yf(t,n,g1,null,null,s),ul._currentValue=u),yc(t,n),Un(t,n,o,s),n.child;case 6:return t===null&&Tt&&((t=s=Jt)&&(s=nM(s,n.pendingProps,bi),s!==null?(n.stateNode=s,Nn=n,Jt=null,t=!0):t=!1),t||Ya(n)),null;case 13:return G0(t,n,s);case 4:return _e(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Gr(n,null,o,s):Un(t,n,o,s),n.child;case 11:return L0(t,n,n.type,n.pendingProps,s);case 7:return Un(t,n,n.pendingProps,s),n.child;case 8:return Un(t,n,n.pendingProps.children,s),n.child;case 12:return Un(t,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Za(n,n.type,o.value),Un(t,n,o.children,s),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,zr(n),u=Ln(u),o=o(u),n.flags|=1,Un(t,n,o,s),n.child;case 14:return U0(t,n,n.type,n.pendingProps,s);case 15:return O0(t,n,n.type,n.pendingProps,s);case 19:return k0(t,n,s);case 31:return E1(t,n,s);case 22:return P0(t,n,s,n.pendingProps);case 24:return zr(n),o=Ln(vn),t===null?(u=Ff(),u===null&&(u=Kt,d=If(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),n.memoizedState={parent:o,cache:u},Hf(n),Za(n,vn,u)):((t.lanes&s)!==0&&(Gf(t,n),Xo(n,null,null,s),ko()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Za(n,vn,o)):(o=d.cache,Za(n,vn,o),o!==u.cache&&Pf(n,[vn],s,!0))),Un(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function _a(t){t.flags|=4}function bd(t,n,s,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(vv())t.flags|=8192;else throw Hr=rc,Bf}else t.flags&=-16777217}function W0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!s_(n))if(vv())t.flags|=8192;else throw Hr=rc,Bf}function bc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,Is|=n)}function Ko(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,n}function A1(t,n,s){var o=n.pendingProps;switch(Df(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return s=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),pa(vn),Le(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ms(n)?_a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lf())),en(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(_a(n),d!==null?(en(n),W0(n,d)):(en(n),bd(n,u,null,o,s))):d?d!==t.memoizedState?(_a(n),en(n),W0(n,d)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&_a(n),en(n),bd(n,u,t,o,s)),null;case 27:if(Be(n),s=ee.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return en(n),null}t=Me.current,Ms(n)?Eg(n):(t=$v(u,o,s),n.stateNode=t,_a(n))}return en(n),null;case 5:if(Be(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return en(n),null}if(d=Me.current,Ms(n))Eg(n);else{var x=zc(ee.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[mn]=n,d[Dn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&_a(n)}}return en(n),bd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=ee.current,Ms(n)){if(t=n.stateNode,s=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Gv(t.nodeValue,s)),t||Ya(n,!0)}else t=zc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return en(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ms(n),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[mn]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else s=Lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(a(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ms(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[mn]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),bc(n,n.updateQueue),en(n),null);case 4:return Le(),t===null&&Xd(n.stateNode.containerInfo),en(n),null;case 10:return pa(n.type),en(n),null;case 19:if(X(hn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Ko(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=cc(t),d!==null){for(n.flags|=128,Ko(o,!1),t=d.updateQueue,n.updateQueue=t,bc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)xg(s,t),s=s.sibling;return pe(hn,hn.current&1|2),Tt&&da(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Xt()>Rc&&(n.flags|=128,u=!0,Ko(o,!1),n.lanes=4194304)}else{if(!u)if(t=cc(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,bc(n,t),Ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return en(n),null}else 2*Xt()-o.renderingStartTime>Rc&&s!==536870912&&(n.flags|=128,u=!0,Ko(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xt(),t.sibling=null,s=hn.current,pe(hn,u?s&1|2:s&1),Tt&&da(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return ui(n),Wf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),s=n.updateQueue,s!==null&&bc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),t!==null&&X(Fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),pa(vn),en(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function R1(t,n){switch(Df(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return pa(vn),Le(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Be(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(a(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(hn),null;case 4:return Le(),null;case 10:return pa(n.type),null;case 22:case 23:return ui(n),Wf(),t!==null&&X(Fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function q0(t,n){switch(Df(n),n.tag){case 3:pa(vn),Le();break;case 26:case 27:case 5:Be(n);break;case 4:Le();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:X(hn);break;case 10:pa(n.type);break;case 22:case 23:ui(n),Wf(),t!==null&&X(Fr);break;case 24:pa(vn)}}function Qo(t,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var d=s.create,x=s.inst;o=d(),x.destroy=o}s=s.next}while(s!==u)}}catch(C){Vt(n,n.return,C)}}function tr(t,n,s){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,u=n;var H=s,ne=C;try{ne()}catch(xe){Vt(u,H,xe)}}}o=o.next}while(o!==d)}}catch(xe){Vt(n,n.return,xe)}}function j0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{zg(n,s)}catch(o){Vt(t,t.return,o)}}}function Y0(t,n,s){s.props=kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Vt(t,n,o)}}function $o(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Vt(t,n,u)}}function Zi(t,n){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Vt(t,n,u)}else s.current=null}function Z0(t){var n=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Vt(t,t.return,u)}}function Md(t,n,s){try{var o=t.stateNode;Z1(o,t.type,s,n),o[Dn]=n}catch(u){Vt(t,t.return,u)}}function K0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ca));else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Td(t,n,s),t=t.sibling;t!==null;)Td(t,n,s),t=t.sibling}function Mc(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(o!==4&&(o===27&&lr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mc(t,n,s),t=t.sibling;t!==null;)Mc(t,n,s),t=t.sibling}function Q0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,s),n[mn]=t,n[Dn]=s}catch(d){Vt(t,t.return,d)}}var xa=!1,yn=!1,Ad=!1,$0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function C1(t,n){if(t=t.containerInfo,jd=Xc,t=ug(t),xf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,C=-1,H=-1,ne=0,xe=0,Ee=t,le=null;t:for(;;){for(var fe;Ee!==s||u!==0&&Ee.nodeType!==3||(C=x+u),Ee!==d||o!==0&&Ee.nodeType!==3||(H=x+o),Ee.nodeType===3&&(x+=Ee.nodeValue.length),(fe=Ee.firstChild)!==null;)le=Ee,Ee=fe;for(;;){if(Ee===t)break t;if(le===s&&++ne===u&&(C=x),le===d&&++xe===o&&(H=x),(fe=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=fe}s=C===-1||H===-1?null:{start:C,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yd={focusedElem:t,selectionRange:s},Xc=!1,Rn=n;Rn!==null;)if(n=Rn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rn=t;else for(;Rn!==null;){switch(n=Rn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Ke=kr(s.type,u);t=o.getSnapshotBeforeUpdate(Ke,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Vt(s,s.return,lt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Qd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Rn=t;break}Rn=n.return}}function J0(t,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),o&4&&Qo(5,s);break;case 1:if(Sa(t,s),o&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){Vt(s,s.return,x)}else{var u=kr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Vt(s,s.return,x)}}o&64&&j0(s),o&512&&$o(s,s.return);break;case 3:if(Sa(t,s),o&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{zg(t,n)}catch(x){Vt(s,s.return,x)}}break;case 27:n===null&&o&4&&Q0(s);case 26:case 5:Sa(t,s),n===null&&o&4&&Z0(s),o&512&&$o(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),o&4&&nv(t,s);break;case 13:Sa(t,s),o&4&&iv(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=z1.bind(null,s),iM(t,s))));break;case 22:if(o=s.memoizedState!==null||xa,!o){n=n!==null&&n.memoizedState!==null||yn,u=xa;var d=yn;xa=o,(yn=n)&&!d?ba(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=u,yn=d}break;case 30:break;default:Sa(t,s)}}function ev(t){var n=t.alternate;n!==null&&(t.alternate=null,ev(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Va(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Zn=!1;function ya(t,n,s){for(s=s.child;s!==null;)tv(t,n,s),s=s.sibling}function tv(t,n,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:yn||Zi(s,n),ya(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Zi(s,n);var o=on,u=Zn;lr(s.type)&&(on=s.stateNode,Zn=!1),ya(t,n,s),ol(s.stateNode),on=o,Zn=u;break;case 5:yn||Zi(s,n);case 6:if(o=on,u=Zn,on=null,ya(t,n,s),on=o,Zn=u,on!==null)if(Zn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){Vt(s,n,d)}else try{on.removeChild(s.stateNode)}catch(d){Vt(s,n,d)}break;case 18:on!==null&&(Zn?(t=on,jv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xs(t)):jv(on,s.stateNode));break;case 4:o=on,u=Zn,on=s.stateNode.containerInfo,Zn=!0,ya(t,n,s),on=o,Zn=u;break;case 0:case 11:case 14:case 15:tr(2,s,n),yn||tr(4,s,n),ya(t,n,s);break;case 1:yn||(Zi(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Y0(s,n,o)),ya(t,n,s);break;case 21:ya(t,n,s);break;case 22:yn=(o=yn)||s.memoizedState!==null,ya(t,n,s),yn=o;break;default:ya(t,n,s)}}function nv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(s){Vt(n,n.return,s)}}}function iv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(s){Vt(n,n.return,s)}}function w1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new $0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new $0),n;default:throw Error(a(435,t.tag))}}function Ec(t,n){var s=w1(t);n.forEach(function(o){if(!s.has(o)){s.add(o);var u=F1.bind(null,t,o);o.then(u,u)}})}function Kn(t,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=t,x=n,C=x;e:for(;C!==null;){switch(C.tag){case 27:if(lr(C.type)){on=C.stateNode,Zn=!1;break e}break;case 5:on=C.stateNode,Zn=!1;break e;case 3:case 4:on=C.stateNode.containerInfo,Zn=!0;break e}C=C.return}if(on===null)throw Error(a(160));tv(d,x,u),on=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)av(n,t),n=n.sibling}var Oi=null;function av(t,n){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(tr(3,t,t.return),Qo(3,t),tr(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Oi;if(Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ga]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,s),d[mn]=t,gn(d),o=d;break e;case"link":var x=a_("link","href",u).get(o+(s.href||""));if(x){for(var C=0;C<x.length;C++)if(d=x[C],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(C,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;case"meta":if(x=a_("meta","content",u).get(o+(s.content||""))){for(C=0;C<x.length;C++)if(d=x[C],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(C,1);break t}}d=u.createElement(o),On(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else r_(u,t.type,t.stateNode);else t.stateNode=i_(u,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?r_(u,t.type,t.stateNode):i_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Md(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),s!==null&&o&4&&Md(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(yn||s===null||Zi(s,s.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(Ke){Vt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Md(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Ad=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(Ke){Vt(t,t.return,Ke)}}break;case 3:if(Hc=null,u=Oi,Oi=Fc(n.containerInfo),Kn(n,t),Oi=u,Qn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Xs(n.containerInfo)}catch(Ke){Vt(t,t.return,Ke)}Ad&&(Ad=!1,rv(t));break;case 4:o=Oi,Oi=Fc(t.stateNode.containerInfo),Kn(n,t),Qn(t),Oi=o;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=Xt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 22:u=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ne=xa,xe=yn;if(xa=ne||u,yn=xe||H,Kn(n,t),yn=xe,xa=ne,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||H||xa||yn||Xr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){H=s=n;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{C=H.stateNode;var Ee=H.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ke){Vt(H,H.return,Ke)}}}else if(n.tag===6){if(s===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ke){Vt(H,H.return,Ke)}}}else if(n.tag===18){if(s===null){H=n;try{var fe=H.stateNode;u?Yv(fe,!0):Yv(H.stateNode,!1)}catch(Ke){Vt(H,H.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Ec(t,s))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ec(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var s,o=t.return;o!==null;){if(K0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=Ed(t);Mc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(si(x,""),s.flags&=-33);var C=Ed(t);Mc(t,C,x);break;case 3:case 4:var H=s.stateNode.containerInfo,ne=Ed(t);Td(t,ne,H);break;default:throw Error(a(161))}}catch(xe){Vt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)J0(t,n.alternate,n),n=n.sibling}function Xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:tr(4,n,n.return),Xr(n);break;case 1:Zi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Y0(n,n.return,s),Xr(n);break;case 27:ol(n.stateNode);case 26:case 5:Zi(n,n.return),Xr(n);break;case 22:n.memoizedState===null&&Xr(n);break;case 30:Xr(n);break;default:Xr(n)}t=t.sibling}}function ba(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ba(u,d,s),Qo(4,d);break;case 1:if(ba(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Vt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Ig(H[u],C)}catch(ne){Vt(o,o.return,ne)}}s&&x&64&&j0(d),$o(d,d.return);break;case 27:Q0(d);case 26:case 5:ba(u,d,s),s&&o===null&&x&4&&Z0(d),$o(d,d.return);break;case 12:ba(u,d,s);break;case 31:ba(u,d,s),s&&x&4&&nv(u,d);break;case 13:ba(u,d,s),s&&x&4&&iv(u,d);break;case 22:d.memoizedState===null&&ba(u,d,s),$o(d,d.return);break;case 30:break;default:ba(u,d,s)}n=n.sibling}}function Rd(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Fo(s))}function Cd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fo(t))}function Pi(t,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sv(t,n,s,o),n=n.sibling}function sv(t,n,s,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,s,o),u&2048&&Qo(9,n);break;case 1:Pi(t,n,s,o);break;case 3:Pi(t,n,s,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fo(t)));break;case 12:if(u&2048){Pi(t,n,s,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,C=d.onPostCommit;typeof C=="function"&&C(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Vt(n,n.return,H)}}else Pi(t,n,s,o);break;case 31:Pi(t,n,s,o);break;case 13:Pi(t,n,s,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(t,n,s,o):Jo(t,n):d._visibility&2?Pi(t,n,s,o):(d._visibility|=2,Us(t,n,s,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Rd(x,n);break;case 24:Pi(t,n,s,o),u&2048&&Cd(n.alternate,n);break;default:Pi(t,n,s,o)}}function Us(t,n,s,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,C=s,H=o,ne=x.flags;switch(x.tag){case 0:case 11:case 15:Us(d,x,C,H,u),Qo(8,x);break;case 23:break;case 22:var xe=x.stateNode;x.memoizedState!==null?xe._visibility&2?Us(d,x,C,H,u):Jo(d,x):(xe._visibility|=2,Us(d,x,C,H,u)),u&&ne&2048&&Rd(x.alternate,x);break;case 24:Us(d,x,C,H,u),u&&ne&2048&&Cd(x.alternate,x);break;default:Us(d,x,C,H,u)}n=n.sibling}}function Jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,o=n,u=o.flags;switch(o.tag){case 22:Jo(s,o),u&2048&&Rd(o.alternate,o);break;case 24:Jo(s,o),u&2048&&Cd(o.alternate,o);break;default:Jo(s,o)}n=n.sibling}}var el=8192;function Os(t,n,s){if(t.subtreeFlags&el)for(t=t.child;t!==null;)ov(t,n,s),t=t.sibling}function ov(t,n,s){switch(t.tag){case 26:Os(t,n,s),t.flags&el&&t.memoizedState!==null&&mM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:Os(t,n,s);break;case 3:case 4:var o=Oi;Oi=Fc(t.stateNode.containerInfo),Os(t,n,s),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=el,el=16777216,Os(t,n,s),el=o):Os(t,n,s));break;default:Os(t,n,s)}}function lv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Rn=o,uv(o,t)}lv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cv(t),t=t.sibling}function cv(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&tr(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tc(t)):tl(t);break;default:tl(t)}}function Tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Rn=o,uv(o,t)}lv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:tr(8,n,n.return),Tc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(n));break;default:Tc(n)}t=t.sibling}}function uv(t,n){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:tr(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Rn=o;else e:for(s=t;Rn!==null;){o=Rn;var u=o.sibling,d=o.return;if(ev(o),o===s){Rn=null;break e}if(u!==null){u.return=d,Rn=u;break e}Rn=d}}}var D1={getCacheForType:function(t){var n=Ln(vn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},N1=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Kt=null,yt=null,bt=0,Gt=0,fi=null,nr=!1,Ps=!1,wd=!1,Ma=0,un=0,ir=0,Wr=0,Dd=0,di=0,Is=0,nl=null,$n=null,Nd=!1,Ac=0,fv=0,Rc=1/0,Cc=null,ar=null,En=0,rr=null,zs=null,Ea=0,Ld=0,Ud=null,dv=null,il=0,Od=null;function hi(){return(Ot&2)!==0&&bt!==0?bt&-bt:L.T!==null?Hd():Ao()}function hv(){if(di===0)if((bt&536870912)===0||Tt){var t=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function Jn(t,n,s){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),sr(t,bt,di,!1)),je(t,s),((Ot&2)===0||t!==Kt)&&(t===Kt&&((Ot&2)===0&&(Wr|=s),un===4&&sr(t,bt,di,!1)),Ki(t))}function pv(t,n,s){if((Ot&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?O1(t,n):Id(t,n,!0),d=o;do{if(u===0){Ps&&!o&&sr(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!L1(s)){u=Id(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var C=t;u=nl;var H=C.current.memoizedState.isDehydrated;if(H&&(Fs(C,x).flags|=256),x=Id(C,x,!1),x!==2){if(wd&&!H){C.errorRecoveryDisabledLanes|=d,Wr|=d,u=4;break e}d=$n,$n=u,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Fs(t,0),sr(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:sr(o,n,di,!nr);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Ac+300-Xt(),10<u)){if(sr(o,n,di,!nr),ye(o,0,!0)!==0)break e;Ea=n,o.timeoutHandle=Wv(mv.bind(null,o,s,$n,Cc,Nd,n,di,Wr,Is,nr,d,"Throttled",-0,0),u);break e}mv(o,s,$n,Cc,Nd,n,di,Wr,Is,nr,d,null,-0,0)}}break}while(!0);Ki(t)}function mv(t,n,s,o,u,d,x,C,H,ne,xe,Ee,le,fe){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},ov(n,d,Ee);var Ke=(d&62914560)===d?Ac-Xt():(d&4194048)===d?fv-Xt():0;if(Ke=gM(Ee,Ke),Ke!==null){Ea=d,t.cancelPendingCommit=Ke(Mv.bind(null,t,n,d,s,o,u,x,C,H,xe,Ee,null,le,fe)),sr(t,d,x,!ne);return}}Mv(t,n,d,s,o,u,x,C,H)}function L1(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!oi(d(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function sr(t,n,s,o){n&=~Dd,n&=~Wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ve(u),x=1<<d;o[d]=-1,u&=~x}s!==0&&zt(t,s,n)}function wc(){return(Ot&6)===0?(al(0),!1):!0}function Pd(){if(yt!==null){if(Gt===0)var t=yt.return;else t=yt,ha=Ir=null,Qf(t),Cs=null,Ho=0,t=yt;for(;t!==null;)q0(t.alternate,t),t=t.return;yt=null}}function Fs(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,$1(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Pd(),Kt=t,yt=s=fa(t.current,null),bt=n,Gt=0,fi=null,nr=!1,Ps=Ue(t,n),wd=!1,Is=di=Dd=Wr=ir=un=0,$n=nl=null,Nd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),d=1<<u;n|=t[u],o&=~d}return Ma=n,Kl(),s}function gv(t,n){gt=null,L.H=Yo,n===Rs||n===ac?(n=Lg(),Gt=3):n===Bf?(n=Lg(),Gt=4):Gt=n===hd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,yt===null&&(un=1,_c(t,xi(n,t.current)))}function vv(){var t=ci.current;return t===null?!0:(bt&4194048)===bt?Mi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Mi:!1}function _v(){var t=L.H;return L.H=Yo,t===null?Yo:t}function xv(){var t=L.A;return L.A=D1,t}function Dc(){un=4,nr||(bt&4194048)!==bt&&ci.current!==null||(Ps=!0),(ir&134217727)===0&&(Wr&134217727)===0||Kt===null||sr(Kt,bt,di,!1)}function Id(t,n,s){var o=Ot;Ot|=2;var u=_v(),d=xv();(Kt!==t||bt!==n)&&(Cc=null,Fs(t,n)),n=!1;var x=un;e:do try{if(Gt!==0&&yt!==null){var C=yt,H=fi;switch(Gt){case 8:Pd(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ne=Gt;if(Gt=0,fi=null,Bs(t,C,H,ne),s&&Ps){x=0;break e}break;default:ne=Gt,Gt=0,fi=null,Bs(t,C,H,ne)}}U1(),x=un;break}catch(xe){gv(t,xe)}while(!0);return n&&t.shellSuspendCounter++,ha=Ir=null,Ot=o,L.H=u,L.A=d,yt===null&&(Kt=null,bt=0,Kl()),x}function U1(){for(;yt!==null;)yv(yt)}function O1(t,n){var s=Ot;Ot|=2;var o=_v(),u=xv();Kt!==t||bt!==n?(Cc=null,Rc=Xt()+500,Fs(t,n)):Ps=Ue(t,n);e:do try{if(Gt!==0&&yt!==null){n=yt;var d=fi;t:switch(Gt){case 1:Gt=0,fi=null,Bs(t,n,d,1);break;case 2:case 9:if(Dg(d)){Gt=0,fi=null,Sv(n);break}n=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Ki(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Dg(d)?(Gt=0,fi=null,Sv(n)):(Gt=0,fi=null,Bs(t,n,d,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var C=yt;if(x?s_(x):C.stateNode.complete){Gt=0,fi=null;var H=C.sibling;if(H!==null)yt=H;else{var ne=C.return;ne!==null?(yt=ne,Nc(ne)):yt=null}break t}}Gt=0,fi=null,Bs(t,n,d,5);break;case 6:Gt=0,fi=null,Bs(t,n,d,6);break;case 8:Pd(),un=6;break e;default:throw Error(a(462))}}P1();break}catch(xe){gv(t,xe)}while(!0);return ha=Ir=null,L.H=o,L.A=u,Ot=s,yt!==null?0:(Kt=null,bt=0,Kl(),un)}function P1(){for(;yt!==null&&!ln();)yv(yt)}function yv(t){var n=X0(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,n===null?Nc(t):yt=n}function Sv(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=F0(s,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=F0(s,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Qf(n);default:q0(s,n),n=yt=xg(n,Ma),n=X0(s,n,Ma)}t.memoizedProps=t.pendingProps,n===null?Nc(t):yt=n}function Bs(t,n,s,o){ha=Ir=null,Qf(n),Cs=null,Ho=0;var u=n.return;try{if(M1(t,u,n,s,bt)){un=1,_c(t,xi(s,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;un=1,_c(t,xi(s,t.current)),yt=null;return}n.flags&32768?(Tt||o===1?t=!0:Ps||(bt&536870912)!==0?t=!1:(nr=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),bv(n,t)):Nc(n)}function Nc(t){var n=t;do{if((n.flags&32768)!==0){bv(n,nr);return}t=n.return;var s=A1(n.alternate,n,Ma);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);un===0&&(un=5)}function bv(t,n){do{var s=R1(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);un=6,yt=null}function Mv(t,n,s,o,u,d,x,C,H){t.cancelPendingCommit=null;do Lc();while(En!==0);if((Ot&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=Ef,an(t,s,d,x,C,H),t===Kt&&(yt=Kt=null,bt=0),zs=n,rr=t,Ea=s,Ld=d,Ud=u,dv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,B1($,function(){return Cv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=V.p,V.p=2,x=Ot,Ot|=4;try{C1(t,n,s)}finally{Ot=x,V.p=u,L.T=o}}En=1,Ev(),Tv(),Av()}}function Ev(){if(En===1){En=0;var t=rr,n=zs,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var o=V.p;V.p=2;var u=Ot;Ot|=4;try{av(n,t);var d=Yd,x=ug(t.containerInfo),C=d.focusedElem,H=d.selectionRange;if(x!==C&&C&&C.ownerDocument&&cg(C.ownerDocument.documentElement,C)){if(H!==null&&xf(C)){var ne=H.start,xe=H.end;if(xe===void 0&&(xe=ne),"selectionStart"in C)C.selectionStart=ne,C.selectionEnd=Math.min(xe,C.value.length);else{var Ee=C.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var fe=le.getSelection(),Ke=C.textContent.length,lt=Math.min(H.start,Ke),jt=H.end===void 0?lt:Math.min(H.end,Ke);!fe.extend&&lt>jt&&(x=jt,jt=lt,lt=x);var Q=lg(C,lt),W=lg(C,jt);if(Q&&W&&(fe.rangeCount!==1||fe.anchorNode!==Q.node||fe.anchorOffset!==Q.offset||fe.focusNode!==W.node||fe.focusOffset!==W.offset)){var te=Ee.createRange();te.setStart(Q.node,Q.offset),fe.removeAllRanges(),lt>jt?(fe.addRange(te),fe.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),fe.addRange(te))}}}}for(Ee=[],fe=C;fe=fe.parentNode;)fe.nodeType===1&&Ee.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ee.length;C++){var be=Ee[C];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Xc=!!jd,Yd=jd=null}finally{Ot=u,V.p=o,L.T=s}}t.current=n,En=2}}function Tv(){if(En===2){En=0;var t=rr,n=zs,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var o=V.p;V.p=2;var u=Ot;Ot|=4;try{J0(t,n.alternate,n)}finally{Ot=u,V.p=o,L.T=s}}En=3}}function Av(){if(En===4||En===3){En=0,Z();var t=rr,n=zs,s=Ea,o=dv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,zs=rr=null,Rv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ar=null),To(s),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=V.p,V.p=2,L.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var C=o[x];d(C.value,{componentStack:C.stack})}}finally{L.T=n,V.p=u}}(Ea&3)!==0&&Lc(),Ki(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Od?il++:(il=0,Od=t):il=0,al(0)}}function Rv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Fo(n)))}function Lc(){return Ev(),Tv(),Av(),Cv()}function Cv(){if(En!==5)return!1;var t=rr,n=Ld;Ld=0;var s=To(Ea),o=L.T,u=V.p;try{V.p=32>s?32:s,L.T=null,s=Ud,Ud=null;var d=rr,x=Ea;if(En=0,zs=rr=null,Ea=0,(Ot&6)!==0)throw Error(a(331));var C=Ot;if(Ot|=4,cv(d.current),sv(d,d.current,x,s),Ot=C,al(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{V.p=u,L.T=o,Rv(t,n)}}function wv(t,n,s){n=xi(s,n),n=dd(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(je(t,2),Ki(t))}function Vt(t,n,s){if(t.tag===3)wv(t,t,s);else for(;n!==null;){if(n.tag===3){wv(n,t,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){t=xi(s,t),s=D0(2),o=$a(n,s,2),o!==null&&(N0(s,o,n,t),je(o,2),Ki(o));break}}n=n.return}}function zd(t,n,s){var o=t.pingCache;if(o===null){o=t.pingCache=new N1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(s)||(wd=!0,u.add(s),t=I1.bind(null,t,n,s),n.then(t,t))}function I1(t,n,s){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(bt&s)===s&&(un===4||un===3&&(bt&62914560)===bt&&300>Xt()-Ac?(Ot&2)===0&&Fs(t,0):Dd|=s,Is===bt&&(Is=0)),Ki(t)}function Dv(t,n){n===0&&(n=Te()),t=Ur(t,n),t!==null&&(je(t,n),Ki(t))}function z1(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Dv(t,s)}function F1(t,n){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Dv(t,s)}function B1(t,n){return nn(t,n)}var Uc=null,Hs=null,Fd=!1,Oc=!1,Bd=!1,or=0;function Ki(t){t!==Hs&&t.next===null&&(Hs===null?Uc=Hs=t:Hs=Hs.next=t),Oc=!0,Fd||(Fd=!0,G1())}function al(t,n){if(!Bd&&Oc){Bd=!0;do for(var s=!1,o=Uc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Ve(42|t)+1)-1,d&=u&~(x&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Ov(o,d))}else d=bt,d=ye(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ue(o,d)||(s=!0,Ov(o,d));o=o.next}while(s);Bd=!1}}function H1(){Nv()}function Nv(){Oc=Fd=!1;var t=0;or!==0&&Q1()&&(t=or);for(var n=Xt(),s=null,o=Uc;o!==null;){var u=o.next,d=Lv(o,n);d===0?(o.next=null,s===null?Uc=u:s.next=u,u===null&&(Hs=s)):(s=o,(t!==0||(d&3)!==0)&&(Oc=!0)),o=u}En!==0&&En!==5||al(t),or!==0&&(or=0)}function Lv(t,n){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ve(d),C=1<<x,H=u[x];H===-1?((C&s)===0||(C&o)!==0)&&(u[x]=Ge(C,n)):H<=n&&(t.expiredLanes|=C),d&=~C}if(n=Kt,s=bt,s=ye(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(o!==null&&Qt(o),To(s)){case 2:case 8:s=M;break;case 32:s=$;break;case 268435456:s=ge;break;default:s=$}return o=Uv.bind(null,t),s=nn(s,o),t.callbackPriority=n,t.callbackNode=s,n}return o!==null&&o!==null&&Qt(o),t.callbackPriority=2,t.callbackNode=null,2}function Uv(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Lc()&&t.callbackNode!==s)return null;var o=bt;return o=ye(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(pv(t,o,n),Lv(t,Xt()),t.callbackNode!=null&&t.callbackNode===s?Uv.bind(null,t):null)}function Ov(t,n){if(Lc())return null;pv(t,n,!0)}function G1(){J1(function(){(Ot&6)!==0?nn(I,H1):Nv()})}function Hd(){if(or===0){var t=Ts;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),or=t}return or}function Pv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function Iv(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function V1(t,n,s,o,u){if(n==="submit"&&s&&s.stateNode===u){var d=Pv((u[Dn]||null).action),x=o.submitter;x&&(n=(n=x[Dn]||null)?Pv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var C=new ql("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var H=x?Iv(u,x):new FormData(u);sd(s,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(C.preventDefault(),H=x?Iv(u,x):new FormData(u),sd(s,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Gd=0;Gd<Mf.length;Gd++){var Vd=Mf[Gd],k1=Vd.toLowerCase(),X1=Vd[0].toUpperCase()+Vd.slice(1);Ui(k1,"on"+X1)}Ui(hg,"onAnimationEnd"),Ui(pg,"onAnimationIteration"),Ui(mg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(s1,"onTransitionRun"),Ui(o1,"onTransitionStart"),Ui(l1,"onTransitionCancel"),Ui(gg,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function zv(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var C=o[x],H=C.instance,ne=C.currentTarget;if(C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ne;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(C=o[x],H=C.instance,ne=C.currentTarget,C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ne;try{d(u)}catch(xe){Zl(xe)}u.currentTarget=null,d=H}}}}function St(t,n){var s=n[Ar];s===void 0&&(s=n[Ar]=new Set);var o=t+"__bubble";s.has(o)||(Fv(n,t,2,!1),s.add(o))}function kd(t,n,s){var o=0;n&&(o|=4),Fv(s,t,o,n)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Xd(t){if(!t[Pc]){t[Pc]=!0,Vl.forEach(function(s){s!=="selectionchange"&&(W1.has(s)||kd(s,!1,t),kd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pc]||(n[Pc]=!0,kd("selectionchange",!1,n))}}function Fv(t,n,s,o){switch(h_(n)){case 2:var u=xM;break;case 8:u=yM;break;default:u=rh}s=u.bind(null,n,s,t),u=void 0,!uf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function Wd(t,n,s,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var C=o.stateNode.containerInfo;if(C===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;C!==null;){if(x=oa(C),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}C=C.parentNode}}o=o.return}km(function(){var ne=d,xe=lf(s),Ee=[];e:{var le=vg.get(t);if(le!==void 0){var fe=ql,Ke=t;switch(t){case"keypress":if(Xl(s)===0)break e;case"keydown":case"keyup":fe=Fb;break;case"focusin":Ke="focus",fe=pf;break;case"focusout":Ke="blur",fe=pf;break;case"beforeblur":case"afterblur":fe=pf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Ab;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Gb;break;case hg:case pg:case mg:fe=wb;break;case gg:fe=kb;break;case"scroll":case"scrollend":fe=Eb;break;case"wheel":fe=Wb;break;case"copy":case"cut":case"paste":fe=Nb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Ym;break;case"toggle":case"beforetoggle":fe=jb}var lt=(n&4)!==0,jt=!lt&&(t==="scroll"||t==="scrollend"),Q=lt?le!==null?le+"Capture":null:le;lt=[];for(var W=ne,te;W!==null;){var be=W;if(te=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||te===null||Q===null||(be=Ro(W,Q),be!=null&&lt.push(sl(W,be,te))),jt)break;W=W.return}0<lt.length&&(le=new fe(le,Ke,null,s,xe),Ee.push({event:le,listeners:lt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&s!==of&&(Ke=s.relatedTarget||s.fromElement)&&(oa(Ke)||Ke[jn]))break e;if((fe||le)&&(le=xe.window===xe?xe:(le=xe.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(Ke=s.relatedTarget||s.toElement,fe=ne,Ke=Ke?oa(Ke):null,Ke!==null&&(jt=c(Ke),lt=Ke.tag,Ke!==jt||lt!==5&&lt!==27&&lt!==6)&&(Ke=null)):(fe=null,Ke=ne),fe!==Ke)){if(lt=qm,be="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(lt=Ym,be="onPointerLeave",Q="onPointerEnter",W="pointer"),jt=fe==null?le:Cr(fe),te=Ke==null?le:Cr(Ke),le=new lt(be,W+"leave",fe,s,xe),le.target=jt,le.relatedTarget=te,be=null,oa(xe)===ne&&(lt=new lt(Q,W+"enter",Ke,s,xe),lt.target=te,lt.relatedTarget=jt,be=lt),jt=be,fe&&Ke)t:{for(lt=q1,Q=fe,W=Ke,te=0,be=Q;be;be=lt(be))te++;be=0;for(var rt=W;rt;rt=lt(rt))be++;for(;0<te-be;)Q=lt(Q),te--;for(;0<be-te;)W=lt(W),be--;for(;te--;){if(Q===W||W!==null&&Q===W.alternate){lt=Q;break t}Q=lt(Q),W=lt(W)}lt=null}else lt=null;fe!==null&&Bv(Ee,le,fe,lt,!1),Ke!==null&&jt!==null&&Bv(Ee,jt,Ke,lt,!0)}}e:{if(le=ne?Cr(ne):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var Nt=ng;else if(eg(le))if(ig)Nt=i1;else{Nt=t1;var $e=e1}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&It(ne.elementType)&&(Nt=ng):Nt=n1;if(Nt&&(Nt=Nt(t,ne))){tg(Ee,Nt,s,xe);break e}$e&&$e(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&xt(le,"number",le.value)}switch($e=ne?Cr(ne):window,t){case"focusin":(eg($e)||$e.contentEditable==="true")&&(vs=$e,yf=ne,Po=null);break;case"focusout":Po=yf=vs=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,fg(Ee,s,xe);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":fg(Ee,s,xe)}var vt;if(gf)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else gs?$m(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(Zm&&s.locale!=="ko"&&(gs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&gs&&(vt=Xm()):(Wa=xe,ff="value"in Wa?Wa.value:Wa.textContent,gs=!0)),$e=Ic(ne,Mt),0<$e.length&&(Mt=new jm(Mt,t,null,s,xe),Ee.push({event:Mt,listeners:$e}),vt?Mt.data=vt:(vt=Jm(s),vt!==null&&(Mt.data=vt)))),(vt=Zb?Kb(t,s):Qb(t,s))&&(Mt=Ic(ne,"onBeforeInput"),0<Mt.length&&($e=new jm("onBeforeInput","beforeinput",null,s,xe),Ee.push({event:$e,listeners:Mt}),$e.data=vt)),V1(Ee,t,ne,s,xe)}zv(Ee,n)})}function sl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Ic(t,n){for(var s=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ro(t,s),u!=null&&o.unshift(sl(t,u,d)),u=Ro(t,n),u!=null&&o.push(sl(t,u,d))),t.tag===3)return o;t=t.return}return[]}function q1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bv(t,n,s,o,u){for(var d=n._reactName,x=[];s!==null&&s!==o;){var C=s,H=C.alternate,ne=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||ne===null||(H=ne,u?(ne=Ro(s,d),ne!=null&&x.unshift(sl(s,ne,H))):u||(ne=Ro(s,d),ne!=null&&x.push(sl(s,ne,H)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var j1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function Hv(t){return(typeof t=="string"?t:""+t).replace(j1,`
`).replace(Y1,"")}function Gv(t,n){return n=Hv(n),Hv(t)===n}function qt(t,n,s,o,u,d){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&si(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,s,o);break;case"style":Li(t,o,d);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=wr(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=ca);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=wr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,Ie(t,s,o))}}function qd(t,n,s,o,u,d){switch(s){case"style":Li(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),d=t[Dn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Ie(t,s,o)}}}function On(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(t,n,d,x,s,null)}}u&&qt(t,n,"srcSet",s.srcSet,s,null),o&&qt(t,n,"src",s.src,s,null);return;case"input":St("invalid",t);var C=d=x=u=null,H=null,ne=null;for(o in s)if(s.hasOwnProperty(o)){var xe=s[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":x=xe;break;case"checked":H=xe;break;case"defaultChecked":ne=xe;break;case"value":d=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,n));break;default:qt(t,n,o,xe,s,null)}}Fn(t,d,C,H,ne,x,u,!1);return;case"select":St("invalid",t),o=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(C=s[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":x=C;break;case"multiple":o=C;default:qt(t,n,u,C,s,null)}n=d,s=x,t.multiple=!!o,n!=null?Mn(t,!!o,n,!1):s!=null&&Mn(t,!!o,s,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(x in s)if(s.hasOwnProperty(x)&&(C=s[x],C!=null))switch(x){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:qt(t,n,x,C,s,null)}Ni(t,o,u,d);return;case"option":for(H in s)s.hasOwnProperty(H)&&(o=s[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,H,o,s,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<rl.length;o++)St(rl[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(o=s[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(t,n,ne,o,s,null)}return;default:if(It(n)){for(xe in s)s.hasOwnProperty(xe)&&(o=s[xe],o!==void 0&&qd(t,n,xe,o,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(o=s[C],o!=null&&qt(t,n,C,o,s,null))}function Z1(t,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,C=null,H=null,ne=null,xe=null;for(fe in s){var Ee=s[fe];if(s.hasOwnProperty(fe)&&Ee!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=Ee;default:o.hasOwnProperty(fe)||qt(t,n,fe,null,o,Ee)}}for(var le in o){var fe=o[le];if(Ee=s[le],o.hasOwnProperty(le)&&(fe!=null||Ee!=null))switch(le){case"type":d=fe;break;case"name":u=fe;break;case"checked":ne=fe;break;case"defaultChecked":xe=fe;break;case"value":x=fe;break;case"defaultValue":C=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,n));break;default:fe!==Ee&&qt(t,n,le,fe,o,Ee)}}ke(t,x,C,H,ne,xe,d,u);return;case"select":fe=x=C=le=null;for(d in s)if(H=s[d],s.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(d)||qt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=s[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":le=d;break;case"defaultValue":C=d;break;case"multiple":x=d;default:d!==H&&qt(t,n,u,d,o,H)}n=C,s=x,o=fe,le!=null?Mn(t,!!s,le,!1):!!o!=!!s&&(n!=null?Mn(t,!!s,n,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":fe=le=null;for(C in s)if(u=s[C],s.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qt(t,n,C,null,o,u)}for(x in o)if(u=o[x],d=s[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":le=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&qt(t,n,x,u,o,d)}ri(t,le,fe);return;case"option":for(var Ke in s)le=s[Ke],s.hasOwnProperty(Ke)&&le!=null&&!o.hasOwnProperty(Ke)&&(Ke==="selected"?t.selected=!1:qt(t,n,Ke,null,o,le));for(H in o)le=o[H],fe=s[H],o.hasOwnProperty(H)&&le!==fe&&(le!=null||fe!=null)&&(H==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":qt(t,n,H,le,o,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)le=s[lt],s.hasOwnProperty(lt)&&le!=null&&!o.hasOwnProperty(lt)&&qt(t,n,lt,null,o,le);for(ne in o)if(le=o[ne],fe=s[ne],o.hasOwnProperty(ne)&&le!==fe&&(le!=null||fe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,n));break;default:qt(t,n,ne,le,o,fe)}return;default:if(It(n)){for(var jt in s)le=s[jt],s.hasOwnProperty(jt)&&le!==void 0&&!o.hasOwnProperty(jt)&&qd(t,n,jt,void 0,o,le);for(xe in o)le=o[xe],fe=s[xe],!o.hasOwnProperty(xe)||le===fe||le===void 0&&fe===void 0||qd(t,n,xe,le,o,fe);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&qt(t,n,Q,null,o,le);for(Ee in o)le=o[Ee],fe=s[Ee],!o.hasOwnProperty(Ee)||le===fe||le==null&&fe==null||qt(t,n,Ee,le,o,fe)}function Vv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function K1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,x=u.initiatorType,C=u.duration;if(d&&C&&Vv(x)){for(x=0,C=u.responseEnd,o+=1;o<s.length;o++){var H=s[o],ne=H.startTime;if(ne>C)break;var xe=H.transferSize,Ee=H.initiatorType;xe&&Vv(Ee)&&(H=H.responseEnd,x+=xe*(H<C?1:(C-ne)/(H-ne)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jd=null,Yd=null;function zc(t){return t.nodeType===9?t:t.ownerDocument}function kv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Zd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kd=null;function Q1(){var t=window.event;return t&&t.type==="popstate"?t===Kd?!1:(Kd=t,!0):(Kd=null,!1)}var Wv=typeof setTimeout=="function"?setTimeout:void 0,$1=typeof clearTimeout=="function"?clearTimeout:void 0,qv=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof qv<"u"?function(t){return qv.resolve(null).then(t).catch(eM)}:Wv;function eM(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function jv(t,n){var s=n,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Xs(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")ol(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ol(s);for(var d=s.firstChild;d;){var x=d.nextSibling,C=d.nodeName;d[Ga]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&ol(t.ownerDocument.body);s=u}while(s);Xs(n)}function Yv(t,n){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function Qd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Qd(s),Va(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function tM(t,n,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ga])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function nM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function Zv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function $d(t){return t.data==="$?"||t.data==="$~"}function Jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function iM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var eh=null;function Kv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Ei(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Qv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function $v(t,n,s){switch(n=zc(s),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ol(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Va(t)}var Ti=new Map,Jv=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=V.d;V.d={f:aM,r:rM,D:sM,C:oM,L:lM,m:cM,X:fM,S:uM,M:dM};function aM(){var t=Ta.f(),n=wc();return t||n}function rM(t){var n=la(t);n!==null&&n.tag===5&&n.type==="form"?g0(n):Ta.r(t)}var Gs=typeof document>"u"?null:document;function e_(t,n,s){var o=Gs;if(o&&typeof n=="string"&&n){var u=Bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Jv.has(u)||(Jv.add(u),t={rel:t,crossOrigin:s,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function sM(t){Ta.D(t),e_("dns-prefetch",t,null)}function oM(t,n){Ta.C(t,n),e_("preconnect",t,n)}function lM(t,n,s){Ta.L(t,n,s);var o=Gs;if(o&&t&&n){var u='link[rel="preload"][as="'+Bt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Bt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Bt(s.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var d=u;switch(n){case"style":d=Vs(t);break;case"script":d=ks(t)}Ti.has(d)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ti.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(ll(d))||n==="script"&&o.querySelector(cl(d))||(n=o.createElement("link"),On(n,"link",t),gn(n),o.head.appendChild(n)))}}function cM(t,n){Ta.m(t,n);var s=Gs;if(s&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ks(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ti.set(d,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(cl(d)))return}o=s.createElement("link"),On(o,"link",t),gn(o),s.head.appendChild(o)}}}function uM(t,n,s){Ta.S(t,n,s);var o=Gs;if(o&&t){var u=ka(o).hoistableStyles,d=Vs(t);n=n||"default";var x=u.get(d);if(!x){var C={loading:0,preload:null};if(x=o.querySelector(ll(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ti.get(d))&&th(t,s);var H=x=o.createElement("link");gn(H),On(H,"link",t),H._p=new Promise(function(ne,xe){H.onload=ne,H.onerror=xe}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Bc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:C},u.set(d,x)}}}function fM(t,n){Ta.X(t,n);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0},n),(n=Ti.get(u))&&nh(t,n),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function dM(t,n){Ta.M(t,n);var s=Gs;if(s&&t){var o=ka(s).hoistableScripts,u=ks(t),d=o.get(u);d||(d=s.querySelector(cl(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&nh(t,n),d=s.createElement("script"),gn(d),On(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function t_(t,n,s,o){var u=(u=ee.current)?Fc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Vs(s.href),s=ka(u).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vs(s.href);var d=ka(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(ll(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||hM(u,t,s,x.state))),n&&o===null)throw Error(a(528,""));return x}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ks(s),s=ka(u).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Vs(t){return'href="'+Bt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function n_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function hM(t,n,s,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",s),gn(n),t.head.appendChild(n))}function ks(t){return'[src="'+Bt(t)+'"]'}function cl(t){return"script[async]"+t}function i_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(s.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),On(o,"style",u),Bc(o,s.precedence,t),n.instance=o;case"stylesheet":u=Vs(s.href);var d=t.querySelector(ll(u));if(d)return n.state.loading|=4,n.instance=d,gn(d),d;o=n_(s),(u=Ti.get(u))&&th(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(C,H){x.onload=C,x.onerror=H}),On(d,"link",o),n.state.loading|=4,Bc(d,s.precedence,t),n.instance=d;case"script":return d=ks(s.src),(u=t.querySelector(cl(d)))?(n.instance=u,gn(u),u):(o=s,(u=Ti.get(d))&&(o=v({},s),nh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),On(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Bc(o,s.precedence,t));return n.instance}function Bc(t,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var C=o[x];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hc=null;function a_(t,n,s){if(Hc===null){var o=new Map,u=Hc=new Map;u.set(s,o)}else u=Hc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ga]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var C=o.get(x);C?C.push(d):o.set(x,[d])}}return o}function r_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function pM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function s_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function mM(t,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Vs(o.href),d=n.querySelector(ll(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=n.ownerDocument||n,o=n_(o),(u=Ti.get(u))&&th(o,u),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(C,H){x.onload=C,x.onerror=H}),On(d,"link",o),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Gc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var ih=0;function gM(t,n){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&ih===0&&(ih=62500*K1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>ih?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function kc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,n.forEach(vM,t),Vc=null,Gc.call(t))}function vM(t,n){if(!(n.state.loading&4)){var s=Vc.get(t);if(s)var o=s.get(null);else{s=new Map,Vc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),o=x)}o&&s.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||o,d===o&&s.set(null,u),s.set(x,u),this.count++,o=Gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ul={$$typeof:F,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function _M(t,n,s,o,u,d,x,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function o_(t,n,s,o,u,d,x,C,H,ne,xe,Ee){return t=new _M(t,n,s,x,H,ne,xe,Ee,C),n=1,d===!0&&(n|=24),d=li(3,null,null,n),t.current=d,d.stateNode=t,n=If(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:n},Hf(d),t}function l_(t){return t?(t=ys,t):ys}function c_(t,n,s,o,u,d){u=l_(u),o.context===null?o.context=u:o.pendingContext=u,o=Qa(n),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=$a(t,o,n),s!==null&&(Jn(s,t,n),Vo(s,t,n))}function u_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function ah(t,n){u_(t,n),(t=t.alternate)&&u_(t,n)}function f_(t){if(t.tag===13||t.tag===31){var n=Ur(t,67108864);n!==null&&Jn(n,t,67108864),ah(t,67108864)}}function d_(t){if(t.tag===13||t.tag===31){var n=hi();n=Eo(n);var s=Ur(t,n);s!==null&&Jn(s,t,n),ah(t,n)}}var Xc=!0;function xM(t,n,s,o){var u=L.T;L.T=null;var d=V.p;try{V.p=2,rh(t,n,s,o)}finally{V.p=d,L.T=u}}function yM(t,n,s,o){var u=L.T;L.T=null;var d=V.p;try{V.p=8,rh(t,n,s,o)}finally{V.p=d,L.T=u}}function rh(t,n,s,o){if(Xc){var u=sh(o);if(u===null)Wd(t,n,o,Wc,s),p_(t,o);else if(bM(u,t,n,s,o))o.stopPropagation();else if(p_(t,o),n&4&&-1<SM.indexOf(t)){for(;u!==null;){var d=la(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=we(d.pendingLanes);if(x!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var H=1<<31-Ve(x);C.entanglements[1]|=H,x&=~H}Ki(d),(Ot&6)===0&&(Rc=Xt()+500,al(0))}}break;case 31:case 13:C=Ur(d,2),C!==null&&Jn(C,d,2),wc(),ah(d,2)}if(d=sh(o),d===null&&Wd(t,n,o,Wc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Wd(t,n,o,null,s)}}function sh(t){return t=lf(t),oh(t)}var Wc=null;function oh(t){if(Wc=null,t=oa(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=f(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wc=t,null}function h_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case I:return 2;case M:return 8;case $:case se:return 32;case ge:return 268435456;default:return 32}default:return 32}}var lh=!1,cr=null,ur=null,fr=null,fl=new Map,dl=new Map,dr=[],SM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(t,n){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(n.pointerId)}}function hl(t,n,s,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=la(n),n!==null&&f_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function bM(t,n,s,o,u){switch(n){case"focusin":return cr=hl(cr,t,n,s,o,u),!0;case"dragenter":return ur=hl(ur,t,n,s,o,u),!0;case"mouseover":return fr=hl(fr,t,n,s,o,u),!0;case"pointerover":var d=u.pointerId;return fl.set(d,hl(fl.get(d)||null,t,n,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,dl.set(d,hl(dl.get(d)||null,t,n,s,o,u)),!0}return!1}function m_(t){var n=oa(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){t.blockedOn=n,hs(t.priority,function(){d_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,hs(t.priority,function(){d_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=sh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);of=o,s.target.dispatchEvent(o),of=null}else return n=la(s),n!==null&&f_(n),t.blockedOn=s,!1;n.shift()}return!0}function g_(t,n,s){qc(t)&&s.delete(n)}function MM(){lh=!1,cr!==null&&qc(cr)&&(cr=null),ur!==null&&qc(ur)&&(ur=null),fr!==null&&qc(fr)&&(fr=null),fl.forEach(g_),dl.forEach(g_)}function jc(t,n){t.blockedOn===n&&(t.blockedOn=null,lh||(lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,MM)))}var Yc=null;function v_(t){Yc!==t&&(Yc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(oh(o||s)===null)continue;break}var d=la(s);d!==null&&(t.splice(n,3),n-=3,sd(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Xs(t){function n(H){return jc(H,t)}cr!==null&&jc(cr,t),ur!==null&&jc(ur,t),fr!==null&&jc(fr,t),fl.forEach(n),dl.forEach(n);for(var s=0;s<dr.length;s++){var o=dr[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<dr.length&&(s=dr[0],s.blockedOn===null);)m_(s),s.blockedOn===null&&dr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],x=u[Dn]||null;if(typeof d=="function")x||v_(s);else if(x){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Dn]||null)C=x.formAction;else if(oh(u)!==null)continue}else C=x.action;typeof C=="function"?s[o+1]=C:(s.splice(o,3),o-=3),v_(s)}}}function __(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ch(t){this._internalRoot=t}Zc.prototype.render=ch.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=hi();c_(s,o,t,n,null,null)},Zc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;c_(t.current,2,null,t,null,null),wc(),n[jn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ao();t={blockedOn:null,target:t,priority:n};for(var s=0;s<dr.length&&n!==0&&n<dr[s].priority;s++);dr.splice(s,0,t),s===0&&m_(t)}};var x_=e.version;if(x_!=="19.2.8")throw Error(a(527,x_,"19.2.8"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var EM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{me=Kc.inject(EM),ve=Kc}catch{}}return ml.createRoot=function(t,n){if(!l(t))throw Error(a(299));var s=!1,o="",u=A0,d=R0,x=C0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=o_(t,1,!1,null,null,s,o,null,u,d,x,__),t[jn]=n.current,Xd(t),new ch(n)},ml.hydrateRoot=function(t,n,s){if(!l(t))throw Error(a(299));var o=!1,u="",d=A0,x=R0,C=C0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),n=o_(t,1,!0,n,s??null,o,u,H,d,x,C,__),n.context=l_(null),s=n.current,o=hi(),o=Eo(o),u=Qa(o),u.callback=null,$a(s,u,o),s=o,n.current.lanes=s,je(n,s),Ki(n),t[jn]=n.current,Xd(t),new Zc(n)},ml.version="19.2.8",ml}var sx;function v2(){if(sx)return vh.exports;sx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vh.exports=g2(),vh.exports}var _2=v2();function Sh(r){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${r}-${e}`}function ox(r){return{id:r.message_id,role:r.role,content:r.content}}function qr(r,e,i,a){return r.map(l=>l.id!==e?l:{...l,content:i,streaming:a})}function x2(r,e,i){return e?r.find(a=>a.conversation_id===e)?.title??i:i}function y2(r,e){const[i,a]=Xe.useState([]),[l,c]=Xe.useState(null),f=l,[h,m]=Xe.useState([]),[p,_]=Xe.useState(""),[v,g]=Xe.useState("idle"),[S,E]=Xe.useState(null),[w,b]=Xe.useState(null),[y,P]=Xe.useState(null),[F,N]=Xe.useState(null),[O,U]=Xe.useState([]),B=Xe.useRef(0),T=Xe.useRef(null);Xe.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const z=Xe.useMemo(()=>x2(i,l,e.newConversationTitle),[l,i,e.newConversationTitle]),j=v!=="idle";Xe.useEffect(()=>{let D=!0;async function X(){try{let pe=await r.listConversations(),Me=localStorage.getItem(e.storageKey);pe.some(ue=>ue.conversation_id===Me)||(Me=pe[0]?.conversation_id??null),Me||(Me=(await r.createConversation()).conversation_id,pe=await r.listConversations());const ee=await r.loadMessages(Me);if(!D)return;a(pe),c(Me),m(ee.map(ox)),localStorage.setItem(e.storageKey,Me)}catch(pe){D&&N(pe instanceof Error?pe.message:e.wakeErrorMessage)}}return X(),()=>{D=!1}},[r,e.storageKey,e.wakeErrorMessage]);async function k(){a(await r.listConversations())}async function K(){if(j||h.length===0)return!1;const D=await r.createConversation();return c(D.conversation_id),m([]),b(null),E(null),P(null),localStorage.setItem(e.storageKey,D.conversation_id),await k(),!0}async function de(D){if(!j){if(await r.deleteConversation(D),D===f){const X=(await r.listConversations()).filter(pe=>pe.conversation_id!==D);X.length>0?await J(X[0].conversation_id):await K()}await k()}}async function he(D){return r.getPassage(D)}async function J(D){if(j||D===l)return!1;const X=B.current+1;B.current=X;const pe=await r.loadMessages(D);return B.current!==X?!1:(c(D),m(pe.map(ox)),b(null),E(null),P(null),localStorage.setItem(e.storageKey,D),!0)}function L(D,X,pe){if(D.type==="delta"){T.current&&clearTimeout(T.current),U([]);const Me=pe+D.text;return m(Ae=>qr(Ae,X,Me,!0)),{text:Me,terminal:!1}}return D.type==="completed"?(m(Me=>qr(Me,X,D.text,!1)),E(X),{text:D.text,terminal:!0}):D.type==="tool"?(U([{name:D.name,status:D.status,detail:D.detail,preview:D.preview,handles:D.handles}]),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>U([]),3500),{text:pe,terminal:!1}):(m(Me=>qr(Me,X,pe,!1)),P(D.message),{text:pe,terminal:!0})}async function V(D){if(!l||j)return;const X=Sh("assistant");_(""),b(D),E(null),P(null),U([]),g("streaming"),m(Ae=>[...Ae,{id:Sh("owner"),role:"owner",content:D},{id:X,role:"weaver",content:"",streaming:!0}]);let pe="",Me=!1;try{for await(const Ae of r.streamTurn(l,D)){const ee=L(Ae,X,pe);if(pe=ee.text,Me=ee.terminal,ee.terminal)break}Me||(m(Ae=>qr(Ae,X,pe,!1)),P(e.incompleteTurnMessage))}catch(Ae){m(ue=>qr(ue,X,pe,!1));const ee=Ae instanceof Error?Ae.message:e.connectionLostMessage;P(Ae instanceof Error?`${ee} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await k()}catch{}}}async function G(){if(!(!l||v!=="streaming")){g("cancelling");try{await r.cancelTurn(l)}catch(D){P(D instanceof Error?D.message:e.cancelFailedMessage),g("streaming")}}}function ce(){w&&v==="idle"&&V(w)}async function Se(){if(!l||v!=="idle"||!w)return;const D=Sh("assistant");E(null),P(null),U([]),g("streaming"),m(Me=>[...Me,{id:D,role:"weaver",content:"",streaming:!0}]);let X="",pe=!1;try{for await(const Me of r.retryTurn(l)){const Ae=L(Me,D,X);if(X=Ae.text,pe=Ae.terminal,Ae.terminal)break}pe||(m(Me=>qr(Me,D,X,!1)),P(e.incompleteTurnMessage))}catch(Me){m(ee=>qr(ee,D,X,!1));const Ae=Me instanceof Error?Me.message:e.connectionLostMessage;P(Me instanceof Error?`${Ae} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await k()}catch{}}}return{activeTitle:z,activity:O,bootError:F,cancelTurn:G,conversationId:l,conversations:i,createConversation:K,deleteConversation:de,loadPassage:he,draft:p,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:ce,retryLastTurn:Se,selectConversation:J,sendMessage:V,setDraft:_,turnActive:j,turnState:v}}const Ai={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."};var S2={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},b2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},M2={prefix:"fas",iconName:"spider",icon:[512,512,[128375],"f717","M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z"]},E2={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},T2={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},A2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},R2={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},C2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},w2={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},D2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},N2={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},L2={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},U2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},O2={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},P2={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},I2={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function z2(r){return r=r-0,r===r}function NS(r){return z2(r)?r:(r=r.replace(/[_-]+(.)?/g,(e,i)=>i?i.toUpperCase():""),r.charAt(0).toLowerCase()+r.slice(1))}var F2=(r,e)=>hm.createElement("stop",{key:`${e}-${r.offset}`,offset:r.offset,stopColor:r.color,...r.opacity!==void 0&&{stopOpacity:r.opacity}});function B2(r){return r.charAt(0).toUpperCase()+r.slice(1)}var qs=new Map,H2=1e3;function G2(r){if(qs.has(r))return qs.get(r);const e={};let i=0;const a=r.length;for(;i<a;){const l=r.indexOf(";",i),c=l===-1?a:l,f=r.slice(i,c).trim();if(f){const h=f.indexOf(":");if(h>0){const m=f.slice(0,h).trim(),p=f.slice(h+1).trim();if(m&&p){const _=NS(m);e[_.startsWith("webkit")?B2(_):_]=p}}}i=c+1}if(qs.size===H2){const l=qs.keys().next().value;l&&qs.delete(l)}return qs.set(r,e),e}function LS(r,e,i={}){if(typeof e=="string")return e;const a=(e.children||[]).map(v=>{let g=v;return("fill"in i||i.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),LS(r,g)}),l=e.attributes||{},c={};for(const[v,g]of Object.entries(l))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=G2(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[NS(v)]=g}const{style:f,role:h,"aria-label":m,gradientFill:p,..._}=i;if(f&&(c.style=c.style?{...c.style,...f}:f),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;a.unshift(r(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(F2)))}return r(e.tag,{...c,..._},...a)}var V2=LS.bind(null,hm.createElement),lx=(r,e)=>{const i=Xe.useId();return r||(e?i:void 0)},k2=class{constructor(r="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=r,this.enabled=e}log(...r){this.enabled&&console.log(`[${this.scope}]`,...r)}warn(...r){this.enabled&&console.warn(`[${this.scope}]`,...r)}error(...r){this.enabled&&console.error(`[${this.scope}]`,...r)}},X2="searchPseudoElementsFullScan"in ls&&typeof ls.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",W2=Number.parseInt(X2)>=7,q2=()=>W2,wl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},j2={left:"fa-pull-left",right:"fa-pull-right"},Y2={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Z2={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ii={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function K2(r){const e=ls.cssPrefix||ls.familyPrefix||wl;return e===wl?r:r.replace(new RegExp(String.raw`(?<=^|\s)${wl}-`,"g"),`${e}-`)}function Q2(r){const{beat:e,fade:i,beatFade:a,bounce:l,shake:c,spin:f,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:E,rotation:w,pull:b,swapOpacity:y,rotateBy:P,widthAuto:F,canvasSquare:N,canvasRoomy:O,flip360:U,buzz:B,float:T,jello:z,spinSnap:j,spinSnap4:k,spinSnap8:K,swing:de,wag:he,className:J}=r,L=[];return J&&L.push(...J.split(" ")),e&&L.push(Cn.beat),i&&L.push(Cn.fade),a&&L.push(Cn.beatFade),l&&L.push(Cn.bounce),c&&L.push(Cn.shake),f&&L.push(Cn.spin),m&&L.push(Cn.spinReverse),h&&L.push(Cn.spinPulse),p&&L.push(Cn.pulse),_&&L.push(Ii.fixedWidth),v&&L.push(Ii.inverse),g&&L.push(Ii.border),S===!0&&L.push(Ii.flip),(S==="horizontal"||S==="both")&&L.push(Ii.flipHorizontal),(S==="vertical"||S==="both")&&L.push(Ii.flipVertical),E!=null&&L.push(Z2[E]),w!=null&&w!==0&&L.push(Y2[w]),b!=null&&L.push(j2[b]),y&&L.push(Ii.swapOpacity),q2()?(P&&L.push(Ii.rotateBy),F&&L.push(Ii.widthAuto),N&&L.push(Ii.canvasSquare),O&&L.push(Ii.canvasRoomy),U&&L.push(Cn.flip360),B&&L.push(Cn.buzz),T&&L.push(Cn.float),z&&L.push(Cn.jello),j&&L.push(Cn.spinSnap),k&&L.push(Cn.spinSnap4),K&&L.push(Cn.spinSnap8),de&&L.push(Cn.swing),he&&L.push(Cn.wag),(ls.cssPrefix||ls.familyPrefix||wl)===wl?L:L.map(K2)):L}var $2=r=>typeof r=="object"&&"icon"in r&&!!r.icon;function cx(r){if(r)return $2(r)?r:DS.icon(r)}function J2(r){return Object.keys(r)}var ux=new k2("FontAwesomeIcon"),US={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},e3=new Set(Object.keys(US)),zn=hm.forwardRef((r,e)=>{const i={...US,...r},{icon:a,mask:l,symbol:c,title:f,titleId:h,maskId:m,transform:p}=i,_=lx(m,!!l),v=lx(h,!!f),g=cx(a);if(!g)return ux.error("Icon lookup is undefined",a),null;const S=Q2(i),E=typeof p=="string"?DS.transform(p):p,w=cx(l),b=f2(g,{...S.length>0&&{classes:S},...E&&{transform:E},...w&&{mask:w},symbol:c,title:f,titleId:v,maskId:_});if(!b)return ux.error("Could not find icon",g),null;const{abstract:y}=b,P={ref:e};for(const F of J2(i))e3.has(F)||(P[F]=i[F]);return V2(y[0],P)});zn.displayName="FontAwesomeIcon";function t3(r){return A.jsx(zn,{"aria-hidden":"true",icon:R2,...r})}function fx(r){return A.jsx(zn,{"aria-hidden":"true",icon:O2,...r})}function n3(r){return A.jsx(zn,{"aria-hidden":"true",icon:U2,...r})}function i3(r){return A.jsx(zn,{"aria-hidden":"true",icon:w2,...r})}function a3(r){return A.jsx(zn,{"aria-hidden":"true",icon:P2,...r})}function r3(r){return A.jsx(zn,{"aria-hidden":"true",icon:T2,...r})}function OS(r){return A.jsx(zn,{"aria-hidden":"true",icon:S2,...r})}function s3(r){return A.jsx(zn,{"aria-hidden":"true",icon:L2,...r})}function PS(r){return A.jsx(zn,{"aria-hidden":"true",icon:A2,...r})}function o3(r){return A.jsx(zn,{"aria-hidden":"true",icon:b2,...r})}function l3(r){return A.jsx(zn,{"aria-hidden":"true",icon:D2,...r})}function IS(r){return A.jsx(zn,{"aria-hidden":"true",icon:N2,...r})}function dx(r){return A.jsx(zn,{"aria-hidden":"true",icon:I2,...r})}function c3(r){return A.jsx(zn,{"aria-hidden":"true",icon:C2,...r})}function u3(r){return A.jsx(zn,{"aria-hidden":"true",icon:E2,...r})}const f3=["awakened","ascended","transcendent"];function d3({cancelling:r,draft:e,inputLabel:i="Message assistant",onCancel:a,onDraftChange:l,onSubmit:c,onTierChange:f,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S}){const E=Xe.useRef(null),w=v??E,b=Xe.useRef(null),[y,P]=Xe.useState(!1);Xe.useEffect(()=>{const O=w.current;O&&(O.style.height="auto",O.style.height=`${Math.min(O.scrollHeight,160)}px`)},[e,w]),Xe.useEffect(()=>{if(!y)return;function O(B){b.current&&!b.current.contains(B.target)&&P(!1)}function U(B){B.key==="Escape"&&P(!1)}return document.addEventListener("pointerdown",O),document.addEventListener("keydown",U),()=>{document.removeEventListener("pointerdown",O),document.removeEventListener("keydown",U)}},[y]);function F(){const O=e.trim();!O||S||c(O)}function N(O){O.key!=="Enter"||O.shiftKey||(O.preventDefault(),F())}return A.jsx("div",{className:"composer-wrap",children:A.jsxs("div",{className:"composer-shell",children:[A.jsx("textarea",{"aria-label":i,disabled:S,onChange:O=>l(O.target.value),onKeyDown:N,placeholder:h,ref:w,rows:1,value:e}),A.jsxs("div",{className:"composer-tier",ref:b,children:[A.jsxs("button",{"aria-expanded":y,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>P(O=>!O),type:"button",children:[A.jsx("span",{className:"tier-pill-name",children:g}),A.jsx(IS,{})]}),y&&A.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:f3.map(O=>A.jsx("li",{children:A.jsxs("button",{"aria-selected":O===g,onClick:()=>{f(O),P(!1)},role:"option",type:"button",children:[A.jsx("span",{className:"tier-menu-check",children:O===g?"✦":""}),O]})},O))})]}),S?A.jsx("button",{"aria-label":r?_:p,className:"composer-action composer-stop",disabled:r,onClick:a,type:"button",children:A.jsx(a3,{})}):A.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:F,type:"button",children:A.jsx(t3,{})})]})})}const h3=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function p3(r){try{const e=new URL(r);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function bh(r,e){if(!e)return;const i=r.at(-1);if(i?.type==="text"){i.value+=e;return}r.push({type:"text",value:e})}function tu(r){const e=[];let i=0;for(const a of r.matchAll(h3)){const l=a.index??0;bh(e,r.slice(i,l));const c=a[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const f=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=f?.[2]??"";f&&p3(h)?e.push({type:"link",label:f[1],href:h}):bh(e,c)}i=l+c.length}return bh(e,r.slice(i)),e}function m3(r){const e=r.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function g3(r){const e=[],i=String(r??"").split(/\r?\n/);let a=0;for(;a<i.length;){const l=i[a].trim();if(!l){a+=1;continue}if(l.startsWith("```")){const p=[];for(a+=1;a<i.length&&!i[a].trimStart().startsWith("```");)p.push(i[a]),a+=1;a<i.length&&(a+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(l);if(c){e.push({type:"heading",level:c[1].length,children:tu(c[2])}),a+=1;continue}if(l.startsWith(">")){e.push({type:"quote",children:tu(l.replace(/^>\s?/,""))}),a+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(l)){e.push({type:"rule"}),a+=1;continue}const f=/^[-*]\s+/.test(l),h=/^\d+[.)]\s+/.test(l);if(f||h){const p=[];for(;a<i.length;){const _=i[a].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(tu(v[1])),a+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;a<i.length;){const p=i[a].trim();if(!p||m.length>0&&m3(p))break;m.push(p),a+=1}e.push({type:"paragraph",children:tu(m.join(" "))})}return e}function lo(r){return r.map((e,i)=>{const a=`${e.type}-${i}`;return e.type==="text"?A.jsx(Xe.Fragment,{children:e.value},a):e.type==="strong"?A.jsx("strong",{children:lo(e.children)},a):e.type==="emphasis"?A.jsx("em",{children:lo(e.children)},a):e.type==="code"?A.jsx("code",{children:e.value},a):A.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},a)})}function v3({children:r}){return g3(r).map((i,a)=>{const l=`${i.type}-${a}`;if(i.type==="paragraph")return A.jsx("p",{children:lo(i.children)},l);if(i.type==="heading"){const f=`h${i.level}`;return A.jsx(f,{children:lo(i.children)},l)}if(i.type==="code")return A.jsx("pre",{children:A.jsx("code",{children:i.value})},l);if(i.type==="quote")return A.jsx("blockquote",{children:lo(i.children)},l);if(i.type==="rule")return A.jsx("hr",{},l);const c=i.ordered?"ol":"ul";return A.jsx(c,{children:i.items.map((f,h)=>A.jsx("li",{children:lo(f)},`${l}-${h}`))},l)})}const _3={semantic_search:{doing:"searching the library",done:"searched the library"},read_chapters:{doing:"recalling a passage",done:"recalled a passage"},find_text:{doing:"finding the words",done:"found the words"},browse_chapters:{doing:"browsing the chapters",done:"browsed the chapters"},who_is:{doing:"consulting the notebook",done:"consulted the notebook"}};function x3(r,e,i){const a=_3[r];return a?e==="start"?`weaver is ${a.doing}`:`weaver has ${a.done}`:e==="start"?`${r} ${i||"started"}`.trim():`${r} ${i||"done"}`.trim()}function y3({Mark:r,activity:e,assistantName:i,message:a,onQuote:l,onRegenerate:c,onViewPassage:f,regenerateLabel:h}){const[m,p]=Xe.useState(!1),[_,v]=Xe.useState(null),[g,S]=Xe.useState(null),E=Xe.useRef(null);Xe.useEffect(()=>{function b(){if(a.role!=="weaver"||!l||!E.current)return;const y=window.getSelection(),P=y?y.toString().trim():"",F=E.current,N=y&&y.rangeCount>0&&F.contains(y.getRangeAt(0).commonAncestorContainer);if(P.length>=2&&N){const O=y.getRangeAt(0).getBoundingClientRect();v(P),S({top:O.bottom+6,left:O.left})}else v(null),S(null)}return document.addEventListener("selectionchange",b),()=>document.removeEventListener("selectionchange",b)},[a.role,l]);async function w(){await navigator.clipboard?.writeText(a.content),p(!0),window.setTimeout(()=>p(!1),1400)}return a.role==="owner"?A.jsx("article",{className:"message message-owner",children:A.jsxs("div",{className:"owner-message-content",children:[A.jsx("div",{className:"owner-bubble",children:a.content}),A.jsx("div",{className:"message-actions",children:A.jsxs("button",{"aria-label":"Copy owner message",onClick:w,type:"button",children:[A.jsx(fx,{}),A.jsx("span",{children:m?"Copied":"Copy"})]})})]})}):A.jsxs("article",{className:`message message-weaver ${a.streaming?"message-streaming":""}`,children:[A.jsx("div",{className:"weaver-avatar",children:A.jsx(r,{compact:!0})}),A.jsxs("div",{className:"weaver-message-content",children:[A.jsx("div",{className:"message-role",children:i}),e&&A.jsxs("p",{className:`spell-line spell-line-${e.status}`,children:[A.jsx("span",{className:"spell-bracket",children:"["}),x3(e.name,e.status,e.detail),e.preview&&A.jsxs("span",{className:"spell-preview",children:[" ",e.preview,"…"]}),e.handles&&e.handles.length>0&&A.jsx("button",{"aria-label":"View the recalled passage",className:"spell-view",onClick:()=>f?.(e.handles[0]),type:"button",children:"view passage"}),A.jsx("span",{className:"spell-bracket",children:"]"})]}),A.jsx("div",{className:"markdown-body",ref:E,children:a.content?A.jsx(v3,{children:a.content}):A.jsx("span",{className:"thinking-thread"})}),!a.streaming&&a.content&&A.jsxs("div",{className:"message-actions",children:[A.jsxs("button",{"aria-label":"Copy reply",onClick:w,type:"button",children:[A.jsx(fx,{}),A.jsx("span",{children:m?"Copied":"Copy"})]}),c&&A.jsxs("button",{"aria-label":"Regenerate reply",onClick:c,type:"button",children:[A.jsx(i3,{}),A.jsx("span",{children:h})]})]})]}),_&&g&&A.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{l?.(_),v(null),S(null)},style:{top:g.top,left:g.left},type:"button",children:[A.jsx(l3,{}),A.jsx("span",{children:"ask about this"})]})]})}function S3({handle:r,loadPassage:e,onClose:i}){const[a,l]=Xe.useState(null),[c,f]=Xe.useState(null);return Xe.useEffect(()=>{let h=!0;e(r).then(p=>{h&&l(p)}).catch(p=>{h&&f(p instanceof Error?p.message:"could not summon the passage")});function m(p){p.key==="Escape"&&i()}return window.addEventListener("keydown",m),()=>{h=!1,window.removeEventListener("keydown",m)}},[r,e,i]),A.jsx("div",{"aria-label":"Summoned passage","aria-modal":"true",className:"passage-backdrop",role:"dialog",children:A.jsxs("div",{className:"passage-panel",children:[A.jsxs("header",{className:"passage-header",children:[A.jsx("h2",{className:"passage-title",children:a?A.jsxs(A.Fragment,{children:["chapter ",a.chapter,A.jsxs("span",{className:"passage-lines",children:[", lines ",a.line_start,"-",a.line_end," · volume"," ",a.volume]})]}):"summoning…"}),A.jsx("button",{"aria-label":"Close passage",className:"icon-button passage-close",onClick:i,type:"button",children:"×"})]}),a&&a.beats.length>0&&A.jsx("div",{className:"passage-beats",children:a.beats.map(h=>A.jsx("span",{className:"passage-beat",children:h},h))}),c?A.jsx("p",{className:"passage-error",children:c}):A.jsx("pre",{className:"passage-text",children:a?a.text:"…"})]})})}function b3({chooseLabel:r,createLabel:e,message:i,onChooseConversation:a,onCreateConversation:l,onRetry:c,retryLabel:f,title:h}){return A.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[A.jsx("span",{className:"recovery-knot"}),A.jsxs("div",{children:[A.jsx("strong",{children:h}),A.jsx("p",{children:i}),A.jsxs("div",{className:"recovery-actions",children:[c&&f&&A.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:f}),A.jsx("button",{onClick:l,type:"button",children:e}),A.jsx("button",{onClick:a,type:"button",children:r})]})]})]})}const Am="185",M3=0,hx=1,E3=2,Lu=1,T3=2,Tl=3,Tr=0,ti=1,Na=2,Ua=0,fo=1,px=2,mx=3,gx=4,A3=5,ts=100,R3=101,C3=102,w3=103,D3=104,N3=200,L3=201,U3=202,O3=203,yp=204,Sp=205,P3=206,I3=207,z3=208,F3=209,B3=210,H3=211,G3=212,V3=213,k3=214,bp=0,Mp=1,Ep=2,go=3,Tp=4,Ap=5,Rp=6,Cp=7,zS=0,X3=1,W3=2,aa=0,FS=1,BS=2,HS=3,GS=4,VS=5,kS=6,XS=7,WS=300,cs=301,vo=302,Mh=303,Eh=304,nf=306,wp=1e3,La=1001,Dp=1002,Pn=1003,q3=1004,nu=1005,Vn=1006,Th=1007,as=1008,Di=1009,qS=1010,jS=1011,Nl=1012,Rm=1013,sa=1014,na=1015,za=1016,Cm=1017,wm=1018,Ll=1020,YS=35902,ZS=35899,KS=1021,QS=1022,Vi=1023,Fa=1026,rs=1027,$S=1028,Dm=1029,us=1030,Nm=1031,Lm=1033,Uu=33776,Ou=33777,Pu=33778,Iu=33779,Np=35840,Lp=35841,Up=35842,Op=35843,Pp=36196,Ip=37492,zp=37496,Fp=37488,Bp=37489,Gu=37490,Hp=37491,Gp=37808,Vp=37809,kp=37810,Xp=37811,Wp=37812,qp=37813,jp=37814,Yp=37815,Zp=37816,Kp=37817,Qp=37818,$p=37819,Jp=37820,em=37821,tm=36492,nm=36494,im=36495,am=36283,rm=36284,Vu=36285,sm=36286,j3=3200,vx=0,Y3=1,yr="",Ci="srgb",ku="srgb-linear",Xu="linear",kt="srgb",js=7680,_x=519,Z3=512,K3=513,Q3=514,Um=515,$3=516,J3=517,Om=518,eR=519,xx=35044,yx="300 es",ia=2e3,Wu=2001;function tR(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nR(){const r=qu("canvas");return r.style.display="block",r}const Sx={};function bx(...r){const e="THREE."+r.shift();console.log(e,...r)}function JS(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ct(...r){r=JS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=JS(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function ho(...r){const e=r.join(" ");e in Sx||(Sx[e]=!0,ct(...r))}function iR(r,e,i){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const aR={[bp]:Mp,[Ep]:Rp,[Tp]:Cp,[go]:Ap,[Mp]:bp,[Rp]:Ep,[Cp]:Tp,[Ap]:go};class ds{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=Math.PI/180,om=180/Math.PI;function Il(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Rt(r,e,i){return Math.max(e,Math.min(i,r))}function rR(r,e){return(r%e+e)%e}function Rh(r,e,i){return(1-i)*r+i*e}function gl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const zm=class zm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zm.prototype.isVector2=!0;let Pt=zm;class So{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,h){let m=a[l+0],p=a[l+1],_=a[l+2],v=a[l+3],g=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==E){let b=m*g+p*S+_*E+v*w;b<0&&(g=-g,S=-S,E=-E,w=-w,b=-b);let y=1-h;if(b<.9995){const P=Math.acos(b),F=Math.sin(P);y=Math.sin(y*P)/F,h=Math.sin(h*P)/F,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+w*h;const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],_=a[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return e[i]=h*E+_*v+m*S-p*g,e[i+1]=m*E+_*g+p*v-h*S,e[i+2]=p*E+_*S+h*g-m*v,e[i+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(l/2),v=h(c/2),g=m(a/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=a+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=a*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-a*p,this._z=c*_+f*p+a*m-l*h,this._w=f*_-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let a=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(a=-a,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fm=class Fm{constructor(e=0,i=0,a=0){this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*a),_=2*(h*i-c*l),v=2*(c*a-f*i);return this.x=i+m*p+f*v-h*_,this.y=a+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fm.prototype.isVector3=!0;let ie=Fm;const Ch=new ie,Mx=new So,Bm=class Bm{constructor(e,i,a,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p)}set(e,i,a,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],S=a[5],E=a[8],w=l[0],b=l[3],y=l[6],P=l[1],F=l[4],N=l[7],O=l[2],U=l[5],B=l[8];return c[0]=f*w+h*P+m*O,c[3]=f*b+h*F+m*U,c[6]=f*y+h*N+m*B,c[1]=p*w+_*P+v*O,c[4]=p*b+_*F+v*U,c[7]=p*y+_*N+v*B,c[2]=g*w+S*P+E*O,c[5]=g*b+S*F+E*U,c[8]=g*y+S*N+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-a*c*_+a*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*c,S=p*c-f*m,E=i*v+a*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(l*p-_*a)*w,e[2]=(h*a-l*f)*w,e[3]=g*w,e[4]=(_*i-l*m)*w,e[5]=(l*c-h*i)*w,e[6]=S*w,e[7]=(a*m-p*i)*w,e[8]=(f*i-a*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,i)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,i){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bm.prototype.isMatrix3=!0;let pt=Bm;const wh=new pt,Ex=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tx=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sR(){const r={enabled:!0,workingColorSpace:ku,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===yr?Xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[ku]:{primaries:e,whitePoint:a,transfer:Xu,toXYZ:Ex,fromXYZ:Tx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:a,transfer:kt,toXYZ:Ex,fromXYZ:Tx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),r}const At=sR();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ys;class oR{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ys===void 0&&(Ys=qu("canvas")),Ys.width=e.width,Ys.height=e.height;const l=Ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=Ys}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qu("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Oa(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Oa(i[a]/255)*255):i[a]=Oa(i[a]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lR=0;class Pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Dh(l[f].image)):c.push(Dh(l[f]))}else c=Dh(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oR.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let cR=0;const Nh=new ie;class Wn extends ds{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,a=La,l=La,c=Vn,f=as,h=Vi,m=Di,p=Wn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=Il(),this.name="",this.source=new Pm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==WS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wp:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Dp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wp:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Dp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=WS;Wn.DEFAULT_ANISOTROPY=1;const Hm=class Hm{constructor(e=0,i=0,a=0,l=1){this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],w=m[2],b=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(p+1)/2,N=(S+1)/2,O=(y+1)/2,U=(_+g)/4,B=(v+w)/4,T=(E+b)/4;return F>N&&F>O?F<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(F),l=U/a,c=B/a):N>O?N<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),a=U/l,c=T/l):O<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),a=B/c,l=T/c),this.set(a,l,c,i),this}let P=Math.sqrt((b-E)*(b-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(b-E)/P,this.y=(v-w)/P,this.z=(g-_)/P,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hm.prototype.isVector4=!0;let fn=Hm;class uR extends ds{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:a.depth},c=new Wn(l),f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Pm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends uR{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class eb extends Wn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fR extends Wn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ku=class Ku{constructor(e,i,a,l,c,f,h,m,p,_,v,g,S,E,w,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p,_,v,g,S,E,w,b)}set(e,i,a,l,c,f,h,m,p,_,v,g,S,E,w,b){const y=this.elements;return y[0]=e,y[4]=i,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ku().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,a=e.elements,l=1/Zs.setFromMatrixColumn(e,0).length(),c=1/Zs.setFromMatrixColumn(e,1).length(),f=1/Zs.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=E+S*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g+w*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-E,i[6]=w+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g-w*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*_,i[9]=w-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,S=f*v,E=h*_,w=h*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,S=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-w*v}else if(e.order==="XZY"){const g=f*m,S=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dR,e,hR)}lookAt(e,i,a){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pr.crossVectors(a,pi),pr.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pr.crossVectors(a,pi)),pr.normalize(),iu.crossVectors(pi,pr),l[0]=pr.x,l[4]=iu.x,l[8]=pi.x,l[1]=pr.y,l[5]=iu.y,l[9]=pi.y,l[2]=pr.z,l[6]=iu.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],S=a[13],E=a[2],w=a[6],b=a[10],y=a[14],P=a[3],F=a[7],N=a[11],O=a[15],U=l[0],B=l[4],T=l[8],z=l[12],j=l[1],k=l[5],K=l[9],de=l[13],he=l[2],J=l[6],L=l[10],V=l[14],G=l[3],ce=l[7],Se=l[11],D=l[15];return c[0]=f*U+h*j+m*he+p*G,c[4]=f*B+h*k+m*J+p*ce,c[8]=f*T+h*K+m*L+p*Se,c[12]=f*z+h*de+m*V+p*D,c[1]=_*U+v*j+g*he+S*G,c[5]=_*B+v*k+g*J+S*ce,c[9]=_*T+v*K+g*L+S*Se,c[13]=_*z+v*de+g*V+S*D,c[2]=E*U+w*j+b*he+y*G,c[6]=E*B+w*k+b*J+y*ce,c[10]=E*T+w*K+b*L+y*Se,c[14]=E*z+w*de+b*V+y*D,c[3]=P*U+F*j+N*he+O*G,c[7]=P*B+F*k+N*J+O*ce,c[11]=P*T+F*K+N*L+O*Se,c[15]=P*z+F*de+N*V+O*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],w=e[7],b=e[11],y=e[15],P=m*S-p*g,F=h*S-p*v,N=h*g-m*v,O=f*S-p*_,U=f*g-m*_,B=f*v-h*_;return i*(w*P-b*F+y*N)-a*(E*P-b*O+y*U)+l*(E*F-w*O+y*B)-c*(E*N-w*U+b*B)}determinantAffine(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return i*(f*_-h*p)-a*(c*_-h*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],w=e[13],b=e[14],y=e[15],P=i*h-a*f,F=i*m-l*f,N=i*p-c*f,O=a*m-l*h,U=a*p-c*h,B=l*p-c*m,T=_*w-v*E,z=_*b-g*E,j=_*y-S*E,k=v*b-g*w,K=v*y-S*w,de=g*y-S*b,he=P*de-F*K+N*k+O*j-U*z+B*T;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/he;return e[0]=(h*de-m*K+p*k)*J,e[1]=(l*K-a*de-c*k)*J,e[2]=(w*B-b*U+y*O)*J,e[3]=(g*U-v*B-S*O)*J,e[4]=(m*j-f*de-p*z)*J,e[5]=(i*de-l*j+c*z)*J,e[6]=(b*N-E*B-y*F)*J,e[7]=(_*B-g*N+S*F)*J,e[8]=(f*K-h*j+p*T)*J,e[9]=(a*j-i*K-c*T)*J,e[10]=(E*U-w*N+y*P)*J,e[11]=(v*N-_*U-S*P)*J,e[12]=(h*z-f*k-m*T)*J,e[13]=(i*k-a*z+l*T)*J,e[14]=(w*F-E*O-b*P)*J,e[15]=(_*O-v*F+g*P)*J,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+a,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,g=c*p,S=c*_,E=c*v,w=f*_,b=f*v,y=h*v,P=m*p,F=m*_,N=m*v,O=a.x,U=a.y,B=a.z;return l[0]=(1-(w+y))*O,l[1]=(S+N)*O,l[2]=(E-F)*O,l[3]=0,l[4]=(S-N)*U,l[5]=(1-(g+y))*U,l[6]=(b+P)*U,l[7]=0,l[8]=(E+F)*B,l[9]=(b-P)*B,l[10]=(1-(g+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),i.identity(),this;let f=Zs.set(l[0],l[1],l[2]).length();const h=Zs.set(l[4],l[5],l[6]).length(),m=Zs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),zi.copy(this);const p=1/f,_=1/h,v=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,i.setFromRotationMatrix(zi),a.x=f,a.y=h,a.z=m,this}makePerspective(e,i,a,l,c,f,h=ia,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(a-l),g=(i+e)/(i-e),S=(a+l)/(a-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===ia)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===Wu)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,a,l,c,f,h=ia,m=!1){const p=this.elements,_=2/(i-e),v=2/(a-l),g=-(i+e)/(i-e),S=-(a+l)/(a-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===ia)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===Wu)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}};Ku.prototype.isMatrix4=!0;let dn=Ku;const Zs=new ie,zi=new dn,dR=new ie(0,0,0),hR=new ie(1,1,1),pr=new ie,iu=new ie,pi=new ie,Ax=new dn,Rx=new So;class fs{constructor(e=0,i=0,a=0,l=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return Ax.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ax,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Rx.setFromEuler(this),this.setFromQuaternion(Rx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class tb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pR=0;const Cx=new ie,Ks=new So,Aa=new dn,au=new ie,vl=new ie,mR=new ie,gR=new So,wx=new ie(1,0,0),Dx=new ie(0,1,0),Nx=new ie(0,0,1),Lx={type:"added"},vR={type:"removed"},Qs={type:"childadded",child:null},Lh={type:"childremoved",child:null};class qn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ie,i=new fs,a=new So,l=new ie(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new pt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(wx,e)}rotateY(e){return this.rotateOnAxis(Dx,e)}rotateZ(e){return this.rotateOnAxis(Nx,e)}translateOnAxis(e,i){return Cx.copy(e).applyQuaternion(this.quaternion),this.position.add(Cx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(wx,e)}translateY(e){return this.translateOnAxis(Dx,e)}translateZ(e){return this.translateOnAxis(Nx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?au.copy(e):au.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(vl,au,this.up):Aa.lookAt(au,vl,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Aa),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(vR),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,mR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,gR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*a-c[8]*l,c[13]+=a-c[1]*i-c[5]*a-c[9]*l,c[14]+=l-c[2]*i-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ie(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ru extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _R={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const b=i.getJointPose(w,a),y=this._getHandJoint(p,w);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_R)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new ru;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}const nb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},su={h:0,s:0,l:0};function Oh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Et{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=a,At.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=At.workingColorSpace){if(e=rR(e,1),i=Rt(i,0,1),a=Rt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Oh(f,c,e+1/3),this.g=Oh(f,c,e),this.b=Oh(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=Ci){function a(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ci){const a=nb[e.toLowerCase()];return a!==void 0?this.setHex(a,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return At.workingToColorSpace(Gn.copy(this),e),Math.round(Rt(Gn.r*255,0,255))*65536+Math.round(Rt(Gn.g*255,0,255))*256+Math.round(Rt(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Gn.copy(this),i);const a=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){At.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,a=Gn.g,l=Gn.b;return e!==Ci?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+i,mr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(mr),e.getHSL(su);const a=Rh(mr.h,su.h,i),l=Rh(mr.s,su.s,i),c=Rh(mr.l,su.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Et;Et.NAMES=nb;class xR extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new ie,Ra=new ie,Ph=new ie,Ca=new ie,$s=new ie,Js=new ie,Ux=new ie,Ih=new ie,zh=new ie,Fh=new ie,Bh=new fn,Hh=new fn,Gh=new fn;class Hi{constructor(e=new ie,i=new ie,a=new ie){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Fi.subVectors(l,i),Ra.subVectors(a,i),Ph.subVectors(e,i);const f=Fi.dot(Fi),h=Fi.dot(Ra),m=Fi.dot(Ph),p=Ra.dot(Ra),_=Ra.dot(Ph),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(f*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,a,l,c,f,h,m){return this.getBarycoord(e,i,a,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(f,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,i,a,l,c,f){return Bh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Bh.fromBufferAttribute(e,i),Hh.fromBufferAttribute(e,a),Gh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Bh,c.x),f.addScaledVector(Hh,c.y),f.addScaledVector(Gh,c.z),f}static isFrontFacing(e,i,a,l){return Fi.subVectors(a,i),Ra.subVectors(e,i),Fi.cross(Ra).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Fi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,h;$s.subVectors(l,a),Js.subVectors(c,a),Ih.subVectors(e,a);const m=$s.dot(Ih),p=Js.dot(Ih);if(m<=0&&p<=0)return i.copy(a);zh.subVectors(e,l);const _=$s.dot(zh),v=Js.dot(zh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(a).addScaledVector($s,f);Fh.subVectors(e,c);const S=$s.dot(Fh),E=Js.dot(Fh);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(a).addScaledVector(Js,h);const b=_*E-S*v;if(b<=0&&v-_>=0&&S-E>=0)return Ux.subVectors(c,l),h=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(Ux,h);const y=1/(b+w+g);return f=w*y,h=g*y,i.copy(a).addScaledVector($s,f).addScaledVector(Js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ou.copy(a.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),lu.subVectors(this.max,_l),eo.subVectors(e.a,_l),to.subVectors(e.b,_l),no.subVectors(e.c,_l),gr.subVectors(to,eo),vr.subVectors(no,to),jr.subVectors(eo,no);let i=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-jr.z,jr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,jr.z,0,-jr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-jr.y,jr.x,0];return!Vh(i,eo,to,no,lu)||(i=[1,0,0,0,1,0,0,0,1],!Vh(i,eo,to,no,lu))?!1:(cu.crossVectors(gr,vr),i=[cu.x,cu.y,cu.z],Vh(i,eo,to,no,lu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Bi=new ie,ou=new zl,eo=new ie,to=new ie,no=new ie,gr=new ie,vr=new ie,jr=new ie,_l=new ie,lu=new ie,cu=new ie,Yr=new ie;function Vh(r,e,i,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){Yr.fromArray(r,c);const h=l.x*Math.abs(Yr.x)+l.y*Math.abs(Yr.y)+l.z*Math.abs(Yr.z),m=e.dot(Yr),p=i.dot(Yr),_=a.dot(Yr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new ie,uu=new Pt;let yR=0;class bn extends ds{constructor(e,i,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yR++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=xx,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)uu.fromBufferAttribute(this,i),uu.applyMatrix3(e),this.setXY(i,uu.x,uu.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=gl(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=ei(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=gl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=gl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=gl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=gl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array),l=ei(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ib extends bn{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class ab extends bn{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class ki extends bn{constructor(e,i,a){super(new Float32Array(e),i,a)}}const SR=new zl,xl=new ie,kh=new ie;class Fl{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):SR.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const i=xl.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(xl,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(kh)),this.expandByPoint(xl.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bR=0;const Ri=new dn,Xh=new qn,io=new ie,mi=new zl,yl=new zl,wn=new ie;class ni extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tR(e)?ab:ib)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,a){return Ri.makeTranslation(e,i,a),this.applyMatrix4(Ri),this}scale(e,i,a){return Ri.makeScale(e,i,a),this.applyMatrix4(Ri),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,yl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,yl.max),mi.expandByPoint(wn)):(mi.expandByPoint(yl.min),mi.expandByPoint(yl.max))}mi.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(wn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)wn.fromBufferAttribute(h,p),m&&(io.fromBufferAttribute(e,p),wn.add(io)),l=Math.max(l,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new bn(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new ie,m[T]=new ie;const p=new ie,_=new ie,v=new ie,g=new Pt,S=new Pt,E=new Pt,w=new ie,b=new ie;function y(T,z,j){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,z),v.fromBufferAttribute(a,j),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,z),E.fromBufferAttribute(c,j),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(k),b.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(k),h[T].add(w),h[z].add(w),h[j].add(w),m[T].add(b),m[z].add(b),m[j].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,z=P.length;T<z;++T){const j=P[T],k=j.start,K=j.count;for(let de=k,he=k+K;de<he;de+=3)y(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const F=new ie,N=new ie,O=new ie,U=new ie;function B(T){O.fromBufferAttribute(l,T),U.copy(O);const z=h[T];F.copy(z),F.sub(O.multiplyScalar(O.dot(z))).normalize(),N.crossVectors(U,z);const k=N.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,k)}for(let T=0,z=P.length;T<z;++T){const j=P[T],k=j.start,K=j.count;for(let de=k,he=k+K;de<he;de+=3)B(e.getX(de+0)),B(e.getX(de+1)),B(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==i.count)a=new bn(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const l=new ie,c=new ie,f=new ie,h=new ie,m=new ie,p=new ie,_=new ie,v=new ie;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),w=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,w),p.fromBufferAttribute(a,b),h.add(_),m.add(_),p.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(w,m.x,m.y,m.z),a.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,b=m.length;w<b;w++){h.isInterleavedBufferAttribute?S=m[w]*h.data.stride+h.offset:S=m[w]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new bn(g,_,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,a);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let MR=0;class bo extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=fo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yp,this.blendDst=Sp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_x,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(a.blending=this.blending),this.side!==Tr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==yp&&(a.blendSrc=this.blendSrc),this.blendDst!==Sp&&(a.blendDst=this.blendDst),this.blendEquation!==ts&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_x&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(a.stencilFail=this.stencilFail),this.stencilZFail!==js&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Pt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new ie,Wh=new ie,fu=new ie,_r=new ie,qh=new ie,du=new ie,jh=new ie;class Im{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Wh.copy(e).add(i).multiplyScalar(.5),fu.copy(i).sub(e).normalize(),_r.copy(this.origin).sub(Wh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(fu),h=_r.dot(this.direction),m=-_r.dot(fu),p=_r.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-h,g=f*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wh).addScaledVector(fu,g),S}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const a=Da.dot(this.direction),l=Da.dot(Da)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,a,l,c){qh.subVectors(i,e),du.subVectors(a,e),jh.crossVectors(qh,du);let f=this.direction.dot(jh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;_r.subVectors(this.origin,e);const m=h*this.direction.dot(du.crossVectors(_r,du));if(m<0)return null;const p=h*this.direction.dot(qh.cross(_r));if(p<0||m+p>f)return null;const _=-h*_r.dot(jh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rb extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=zS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ox=new dn,Zr=new Im,hu=new Fl,Px=new ie,pu=new ie,mu=new ie,gu=new ie,Yh=new ie,vu=new ie,Ix=new ie,_u=new ie;class Ba extends qn{constructor(e=new ni,i=new rb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){vu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Yh.fromBufferAttribute(v,e),f?vu.addScaledVector(Yh,_):vu.addScaledVector(Yh.sub(i),_))}i.add(vu)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(c),Zr.copy(e.ray).recast(e.near),!(hu.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(hu,Px)===null||Zr.origin.distanceToSquared(Px)>(e.far-e.near)**2))&&(Ox.copy(c).invert(),Zr.copy(e.ray).applyMatrix4(Ox),!(a.boundingBox!==null&&Zr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,Zr)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let N=P,O=F;N<O;N+=3){const U=h.getX(N),B=h.getX(N+1),T=h.getX(N+2);l=xu(this,y,e,a,p,_,v,U,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let b=E,y=w;b<y;b+=3){const P=h.getX(b),F=h.getX(b+1),N=h.getX(b+2);l=xu(this,f,e,a,p,_,v,P,F,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const b=g[E],y=f[b.materialIndex],P=Math.max(b.start,S.start),F=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let N=P,O=F;N<O;N+=3){const U=N,B=N+1,T=N+2;l=xu(this,y,e,a,p,_,v,U,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let b=E,y=w;b<y;b+=3){const P=b,F=b+1,N=b+2;l=xu(this,f,e,a,p,_,v,P,F,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function ER(r,e,i,a,l,c,f,h){let m;if(e.side===ti?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,e.side===Tr,h),m===null)return null;_u.copy(h),_u.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(_u);return p<i.near||p>i.far?null:{distance:p,point:_u.clone(),object:r}}function xu(r,e,i,a,l,c,f,h,m,p){r.getVertexPosition(h,pu),r.getVertexPosition(m,mu),r.getVertexPosition(p,gu);const _=ER(r,e,i,a,pu,mu,gu,Ix);if(_){const v=new ie;Hi.getBarycoord(Ix,pu,mu,gu,v),l&&(_.uv=Hi.getInterpolatedAttribute(l,h,m,p,v,new Pt)),c&&(_.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new Pt)),f&&(_.normal=Hi.getInterpolatedAttribute(f,h,m,p,v,new ie),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ie,materialIndex:0};Hi.getNormal(pu,mu,gu,g.normal),_.face=g,_.barycoord=v}return _}class TR extends Wn{constructor(e=null,i=1,a=1,l,c,f,h,m,p=Pn,_=Pn,v,g){super(null,f,h,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new ie,AR=new ie,RR=new pt;class Jr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=Zh.subVectors(a,i).cross(AR.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,a=!0){const l=e.delta(Zh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||RR.getNormalMatrix(e),l=this.coplanarPoint(Zh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Fl,CR=new Pt(.5,.5),yu=new ie;class sb{constructor(e=new Jr,i=new Jr,a=new Jr,l=new Jr,c=new Jr,f=new Jr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=ia,a=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],w=c[9],b=c[10],y=c[11],P=c[12],F=c[13],N=c[14],O=c[15];if(l[0].setComponents(p-f,S-_,y-E,O-P).normalize(),l[1].setComponents(p+f,S+_,y+E,O+P).normalize(),l[2].setComponents(p+h,S+v,y+w,O+F).normalize(),l[3].setComponents(p-h,S-v,y-w,O-F).normalize(),a)l[4].setComponents(m,g,b,N).normalize(),l[5].setComponents(p-m,S-g,y-b,O-N).normalize();else if(l[4].setComponents(p-m,S-g,y-b,O-N).normalize(),i===ia)l[5].setComponents(p+m,S+g,y+b,O+N).normalize();else if(i===Wu)l[5].setComponents(m,g,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const i=CR.distanceTo(e.center);return Kr.radius=.7071067811865476+i,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(yu.x=l.normal.x>0?e.max.x:e.min.x,yu.y=l.normal.y>0?e.max.y:e.min.y,yu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wR extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ju=new ie,Yu=new ie,zx=new dn,Sl=new Im,Su=new Fl,Kh=new ie,Fx=new ie;class DR extends qn{constructor(e=new ni,i=new wR){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[0];for(let l=1,c=i.count;l<c;l++)ju.fromBufferAttribute(i,l-1),Yu.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=ju.distanceTo(Yu);e.setAttribute("lineDistance",new ki(a,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere),Su.applyMatrix4(l),Su.radius+=c,e.ray.intersectsSphere(Su)===!1)return;zx.copy(l).invert(),Sl.copy(e.ray).applyMatrix4(zx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=S,b=E-1;w<b;w+=p){const y=_.getX(w),P=_.getX(w+1),F=bu(this,e,Sl,m,y,P,w);F&&i.push(F)}if(this.isLineLoop){const w=_.getX(E-1),b=_.getX(S),y=bu(this,e,Sl,m,w,b,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let w=S,b=E-1;w<b;w+=p){const y=bu(this,e,Sl,m,w,w+1,w);y&&i.push(y)}if(this.isLineLoop){const w=bu(this,e,Sl,m,E-1,S,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function bu(r,e,i,a,l,c,f){const h=r.geometry.attributes.position;if(ju.fromBufferAttribute(h,l),Yu.fromBufferAttribute(h,c),i.distanceSqToSegment(ju,Yu,Kh,Fx)>a)return;Kh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Kh);if(!(p<e.near||p>e.far))return{distance:p,point:Fx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Bx=new ie,Hx=new ie;class NR extends DR{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[];for(let l=0,c=i.count;l<c;l+=2)Bx.fromBufferAttribute(i,l),Hx.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+Bx.distanceTo(Hx);e.setAttribute("lineDistance",new ki(a,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LR extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gx=new dn,lm=new Im,Mu=new Fl,Eu=new ie;class Vx extends qn{constructor(e=new ni,i=new LR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Mu.copy(a.boundingSphere),Mu.applyMatrix4(l),Mu.radius+=c,e.ray.intersectsSphere(Mu)===!1)return;Gx.copy(l).invert(),lm.copy(e.ray).applyMatrix4(Gx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,v=a.attributes.position;if(p!==null){const g=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=g,w=S;E<w;E++){const b=p.getX(E);Eu.fromBufferAttribute(v,b),kx(Eu,b,m,l,e,i,this)}}else{const g=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=g,w=S;E<w;E++)Eu.fromBufferAttribute(v,E),kx(Eu,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function kx(r,e,i,a,l,c,f){const h=lm.distanceSqToPoint(r);if(h<i){const m=new ie;lm.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class ob extends Wn{constructor(e=[],i=cs,a,l,c,f,h,m,p,_){super(e,i,a,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _o extends Wn{constructor(e,i,a=sa,l,c,f,h=Pn,m=Pn,p,_=Fa,v=1){if(_!==Fa&&_!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,f,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class UR extends _o{constructor(e,i=sa,a=cs,l,c,f=Pn,h=Pn,m,p=Fa){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,a,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lb extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends ni{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,a,i,e,f,c,0),E("z","y","x",1,-1,a,i,-e,f,c,1),E("x","z","y",1,1,e,a,i,l,f,2),E("x","z","y",1,-1,e,a,-i,l,f,3),E("x","y","z",1,-1,e,i,a,l,c,4),E("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(v,2));function E(w,b,y,P,F,N,O,U,B,T,z){const j=N/B,k=O/T,K=N/2,de=O/2,he=U/2,J=B+1,L=T+1;let V=0,G=0;const ce=new ie;for(let Se=0;Se<L;Se++){const D=Se*k-de;for(let X=0;X<J;X++){const pe=X*j-K;ce[w]=pe*P,ce[b]=D*F,ce[y]=he,p.push(ce.x,ce.y,ce.z),ce[w]=0,ce[b]=0,ce[y]=U>0?1:-1,_.push(ce.x,ce.y,ce.z),v.push(X/B),v.push(1-Se/T),V+=1}}for(let Se=0;Se<T;Se++)for(let D=0;D<B;D++){const X=g+D+J*Se,pe=g+D+J*(Se+1),Me=g+(D+1)+J*(Se+1),Ae=g+(D+1)+J*Se;m.push(X,pe,Ae),m.push(pe,Me,Ae),G+=6}h.addGroup(S,G,z),S+=G,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class af extends ni{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(a),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=i/m,S=[],E=[],w=[],b=[];for(let y=0;y<_;y++){const P=y*g-f;for(let F=0;F<p;F++){const N=F*v-c;E.push(N,-P,0),w.push(0,0,1),b.push(F/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<h;P++){const F=P+p*y,N=P+p*(y+1),O=P+1+p*(y+1),U=P+1+p*y;S.push(F,N,U),S.push(N,O,U)}this.setIndex(S),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(w,3)),this.setAttribute("uv",new ki(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(r){const e={};for(const i in r){e[i]={};for(const a in r[i]){const l=r[i][a];if(Xx(l))l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone();else if(Array.isArray(l))if(Xx(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][a]=c}else e[i][a]=l.slice();else e[i][a]=l}}return e}function Xn(r){const e={};for(let i=0;i<r.length;i++){const a=xo(r[i]);for(const l in a)e[l]=a[l]}return e}function Xx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function OR(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function cb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const PR={clone:xo,merge:Xn};var IR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IR,this.fragmentShader=zR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=OR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=i[l.value]||null;break;case"c":this.uniforms[a].value=new Et().setHex(l.value);break;case"v2":this.uniforms[a].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[a].value=new ie().fromArray(l.value);break;case"v4":this.uniforms[a].value=new fn().fromArray(l.value);break;case"m3":this.uniforms[a].value=new pt().fromArray(l.value);break;case"m4":this.uniforms[a].value=new dn().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class FR extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class BR extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HR extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tu=new ie,Au=new So,Qi=new ie;class ub extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tu,Au,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,Au,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i,a=!1){super.updateWorldMatrix(e,i,a),this.matrixWorld.decompose(Tu,Au,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tu,Au,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ie,Wx=new Pt,qx=new Pt;class wi extends ub{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=om*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return om*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,i){return this.getViewBounds(e,Wx,qx),i.subVectors(qx,Wx)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ah*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class fb extends ub{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ao=-90,ro=1;class GR extends qn{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(ao,ro,e,i);l.layers=this.layers,this.add(l);const c=new wi(ao,ro,e,i);c.layers=this.layers,this.add(c);const f=new wi(ao,ro,e,i);f.layers=this.layers,this.add(f);const h=new wi(ao,ro,e,i);h.layers=this.layers,this.add(h);const m=new wi(ao,ro,e,i);m.layers=this.layers,this.add(m);const p=new wi(ao,ro,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===ia)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(a,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(a,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(a,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(a,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),a.texture.generateMipmaps=w,e.setRenderTarget(a,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class VR extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Gm=class Gm{constructor(e,i,a,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let a=0;a<4;a++)this.elements[a]=e[a+i];return this}set(e,i,a,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=a,c[3]=l,this}};Gm.prototype.isMatrix2=!0;let jx=Gm;function Yx(r,e,i,a){const l=XR(a);switch(i){case KS:return r*e;case $S:return r*e/l.components*l.byteLength;case Dm:return r*e/l.components*l.byteLength;case us:return r*e*2/l.components*l.byteLength;case Nm:return r*e*2/l.components*l.byteLength;case QS:return r*e*3/l.components*l.byteLength;case Vi:return r*e*4/l.components*l.byteLength;case Lm:return r*e*4/l.components*l.byteLength;case Uu:case Ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pu:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lp:case Op:return Math.max(r,16)*Math.max(e,8)/4;case Np:case Up:return Math.max(r,8)*Math.max(e,8)/2;case Pp:case Ip:case Fp:case Bp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zp:case Gu:case Hp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case jp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $p:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case em:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case tm:case nm:case im:return Math.ceil(r/4)*Math.ceil(e/4)*16;case am:case rm:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vu:case sm:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function XR(r){switch(r){case Di:case qS:return{byteLength:1,components:1};case Nl:case jS:case za:return{byteLength:2,components:1};case Cm:case wm:return{byteLength:2,components:4};case sa:case Rm:case na:return{byteLength:4,components:1};case YS:case ZS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Am}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Am);function db(){let r=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(a=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function WR(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var qR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jR=`#ifdef USE_ALPHAHASH
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
#endif`,YR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$R=`#ifdef USE_AOMAP
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
#endif`,JR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eC=`#ifdef USE_BATCHING
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
#endif`,tC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rC=`#ifdef USE_IRIDESCENCE
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
#endif`,sC=`#ifdef USE_BUMPMAP
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
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mC=`#define PI 3.141592653589793
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
} // validated`,gC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vC=`vec3 transformedNormal = objectNormal;
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
#endif`,_C=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bC="gl_FragColor = linearToOutputTexel( gl_FragColor );",MC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EC=`#ifdef USE_ENVMAP
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
#endif`,TC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
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
#endif`,RC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
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
#endif`,wC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UC=`#ifdef USE_GRADIENTMAP
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
}`,OC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,FC=`#ifdef USE_ENVMAP
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
#endif`,BC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kC=`PhysicalMaterial material;
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
#endif`,XC=`uniform sampler2D dfgLUT;
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
}`,WC=`
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
#endif`,qC=`#if defined( RE_IndirectDiffuse )
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
#endif`,jC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ZC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$C=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nw=`#if defined( USE_POINTS_UV )
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
#endif`,iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lw=`#ifdef USE_MORPHTARGETS
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
#endif`,cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mw=`#ifdef USE_NORMALMAP
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
#endif`,gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ew=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nw=`float getShadowMask() {
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
}`,Lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uw=`#ifdef USE_SKINNING
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
#endif`,Ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hw=`#ifdef USE_TRANSMISSION
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
#endif`,Gw=`#ifdef USE_TRANSMISSION
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
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jw=`uniform sampler2D t2D;
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`#include <common>
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
}`,Jw=`#if DEPTH_PACKING == 3200
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
}`,eD=`#define DISTANCE
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
}`,tD=`#define DISTANCE
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
}`,nD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aD=`uniform float scale;
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
}`,rD=`uniform vec3 diffuse;
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
}`,sD=`#include <common>
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
}`,oD=`uniform vec3 diffuse;
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
}`,lD=`#define LAMBERT
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
}`,cD=`#define LAMBERT
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
}`,uD=`#define MATCAP
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
}`,fD=`#define MATCAP
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
}`,dD=`#define NORMAL
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
}`,hD=`#define NORMAL
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
}`,pD=`#define PHONG
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
}`,mD=`#define PHONG
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
}`,gD=`#define STANDARD
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
}`,vD=`#define STANDARD
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
}`,_D=`#define TOON
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
}`,xD=`#define TOON
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
}`,yD=`uniform float size;
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
}`,SD=`uniform vec3 diffuse;
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
}`,bD=`#include <common>
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
}`,MD=`uniform vec3 color;
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
}`,ED=`uniform float rotation;
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
}`,TD=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:qR,alphahash_pars_fragment:jR,alphamap_fragment:YR,alphamap_pars_fragment:ZR,alphatest_fragment:KR,alphatest_pars_fragment:QR,aomap_fragment:$R,aomap_pars_fragment:JR,batching_pars_vertex:eC,batching_vertex:tC,begin_vertex:nC,beginnormal_vertex:iC,bsdfs:aC,iridescence_fragment:rC,bumpmap_pars_fragment:sC,clipping_planes_fragment:oC,clipping_planes_pars_fragment:lC,clipping_planes_pars_vertex:cC,clipping_planes_vertex:uC,color_fragment:fC,color_pars_fragment:dC,color_pars_vertex:hC,color_vertex:pC,common:mC,cube_uv_reflection_fragment:gC,defaultnormal_vertex:vC,displacementmap_pars_vertex:_C,displacementmap_vertex:xC,emissivemap_fragment:yC,emissivemap_pars_fragment:SC,colorspace_fragment:bC,colorspace_pars_fragment:MC,envmap_fragment:EC,envmap_common_pars_fragment:TC,envmap_pars_fragment:AC,envmap_pars_vertex:RC,envmap_physical_pars_fragment:FC,envmap_vertex:CC,fog_vertex:wC,fog_pars_vertex:DC,fog_fragment:NC,fog_pars_fragment:LC,gradientmap_pars_fragment:UC,lightmap_pars_fragment:OC,lights_lambert_fragment:PC,lights_lambert_pars_fragment:IC,lights_pars_begin:zC,lights_toon_fragment:BC,lights_toon_pars_fragment:HC,lights_phong_fragment:GC,lights_phong_pars_fragment:VC,lights_physical_fragment:kC,lights_physical_pars_fragment:XC,lights_fragment_begin:WC,lights_fragment_maps:qC,lights_fragment_end:jC,lightprobes_pars_fragment:YC,logdepthbuf_fragment:ZC,logdepthbuf_pars_fragment:KC,logdepthbuf_pars_vertex:QC,logdepthbuf_vertex:$C,map_fragment:JC,map_pars_fragment:ew,map_particle_fragment:tw,map_particle_pars_fragment:nw,metalnessmap_fragment:iw,metalnessmap_pars_fragment:aw,morphinstance_vertex:rw,morphcolor_vertex:sw,morphnormal_vertex:ow,morphtarget_pars_vertex:lw,morphtarget_vertex:cw,normal_fragment_begin:uw,normal_fragment_maps:fw,normal_pars_fragment:dw,normal_pars_vertex:hw,normal_vertex:pw,normalmap_pars_fragment:mw,clearcoat_normal_fragment_begin:gw,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:_w,iridescence_pars_fragment:xw,opaque_fragment:yw,packing:Sw,premultiplied_alpha_fragment:bw,project_vertex:Mw,dithering_fragment:Ew,dithering_pars_fragment:Tw,roughnessmap_fragment:Aw,roughnessmap_pars_fragment:Rw,shadowmap_pars_fragment:Cw,shadowmap_pars_vertex:ww,shadowmap_vertex:Dw,shadowmask_pars_fragment:Nw,skinbase_vertex:Lw,skinning_pars_vertex:Uw,skinning_vertex:Ow,skinnormal_vertex:Pw,specularmap_fragment:Iw,specularmap_pars_fragment:zw,tonemapping_fragment:Fw,tonemapping_pars_fragment:Bw,transmission_fragment:Hw,transmission_pars_fragment:Gw,uv_pars_fragment:Vw,uv_pars_vertex:kw,uv_vertex:Xw,worldpos_vertex:Ww,background_vert:qw,background_frag:jw,backgroundCube_vert:Yw,backgroundCube_frag:Zw,cube_vert:Kw,cube_frag:Qw,depth_vert:$w,depth_frag:Jw,distance_vert:eD,distance_frag:tD,equirect_vert:nD,equirect_frag:iD,linedashed_vert:aD,linedashed_frag:rD,meshbasic_vert:sD,meshbasic_frag:oD,meshlambert_vert:lD,meshlambert_frag:cD,meshmatcap_vert:uD,meshmatcap_frag:fD,meshnormal_vert:dD,meshnormal_frag:hD,meshphong_vert:pD,meshphong_frag:mD,meshphysical_vert:gD,meshphysical_frag:vD,meshtoon_vert:_D,meshtoon_frag:xD,points_vert:yD,points_frag:SD,shadow_vert:bD,shadow_frag:MD,sprite_vert:ED,sprite_frag:TD},He={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ea={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ea.physical={uniforms:Xn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Ru={r:0,b:0,g:0},AD=new dn,hb=new pt;hb.set(-1,0,0,0,1,0,0,0,1);function RD(r,e,i,a,l,c){const f=new Et(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const N=P.backgroundBlurriness>0;F=e.get(F,N)}return F}function E(P){let F=!1;const N=S(P);N===null?b(f,h):N&&N.isColor&&(b(N,1),F=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(P,F){const N=S(F);N&&(N.isCubeTexture||N.mapping===nf)?(p===void 0&&(p=new Ba(new Bl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:xo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(AD.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(hb),p.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ba(new af(2,2),new gi({name:"BackgroundMaterial",uniforms:xo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=At.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,F){P.getRGB(Ru,cb(r)),i.buffers.color.setClear(Ru.r,Ru.g,Ru.b,F,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,F=1){f.set(P),h=F,b(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,b(f,h)},render:E,addToRenderList:w,dispose:y}}function CD(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,f=!1;function h(k,K,de,he,J){let L=!1;const V=v(k,he,de,K);c!==V&&(c=V,p(c.object)),L=S(k,he,de,J),L&&E(k,he,de,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(L||f)&&(f=!1,N(k,K,de,he),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function p(k){return r.bindVertexArray(k)}function _(k){return r.deleteVertexArray(k)}function v(k,K,de,he){const J=he.wireframe===!0;let L=a[K.id];L===void 0&&(L={},a[K.id]=L);const V=k.isInstancedMesh===!0?k.id:0;let G=L[V];G===void 0&&(G={},L[V]=G);let ce=G[de.id];ce===void 0&&(ce={},G[de.id]=ce);let Se=ce[J];return Se===void 0&&(Se=g(m()),ce[J]=Se),Se}function g(k){const K=[],de=[],he=[];for(let J=0;J<i;J++)K[J]=0,de[J]=0,he[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:de,attributeDivisors:he,object:k,attributes:{},index:null}}function S(k,K,de,he){const J=c.attributes,L=K.attributes;let V=0;const G=de.getAttributes();for(const ce in G)if(G[ce].location>=0){const D=J[ce];let X=L[ce];if(X===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(X=k.instanceColor)),D===void 0||D.attribute!==X||X&&D.data!==X.data)return!0;V++}return c.attributesNum!==V||c.index!==he}function E(k,K,de,he){const J={},L=K.attributes;let V=0;const G=de.getAttributes();for(const ce in G)if(G[ce].location>=0){let D=L[ce];D===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(D=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(D=k.instanceColor));const X={};X.attribute=D,D&&D.data&&(X.data=D.data),J[ce]=X,V++}c.attributes=J,c.attributesNum=V,c.index=he}function w(){const k=c.newAttributes;for(let K=0,de=k.length;K<de;K++)k[K]=0}function b(k){y(k,0)}function y(k,K){const de=c.newAttributes,he=c.enabledAttributes,J=c.attributeDivisors;de[k]=1,he[k]===0&&(r.enableVertexAttribArray(k),he[k]=1),J[k]!==K&&(r.vertexAttribDivisor(k,K),J[k]=K)}function P(){const k=c.newAttributes,K=c.enabledAttributes;for(let de=0,he=K.length;de<he;de++)K[de]!==k[de]&&(r.disableVertexAttribArray(de),K[de]=0)}function F(k,K,de,he,J,L,V){V===!0?r.vertexAttribIPointer(k,K,de,J,L):r.vertexAttribPointer(k,K,de,he,J,L)}function N(k,K,de,he){w();const J=he.attributes,L=de.getAttributes(),V=K.defaultAttributeValues;for(const G in L){const ce=L[G];if(ce.location>=0){let Se=J[G];if(Se===void 0&&(G==="instanceMatrix"&&k.instanceMatrix&&(Se=k.instanceMatrix),G==="instanceColor"&&k.instanceColor&&(Se=k.instanceColor)),Se!==void 0){const D=Se.normalized,X=Se.itemSize,pe=e.get(Se);if(pe===void 0)continue;const Me=pe.buffer,Ae=pe.type,ee=pe.bytesPerElement,ue=Ae===r.INT||Ae===r.UNSIGNED_INT||Se.gpuType===Rm;if(Se.isInterleavedBufferAttribute){const _e=Se.data,Le=_e.stride,Je=Se.offset;if(_e.isInstancedInterleavedBuffer){for(let Be=0;Be<ce.locationSize;Be++)y(ce.location+Be,_e.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<ce.locationSize;Be++)b(ce.location+Be);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let Be=0;Be<ce.locationSize;Be++)F(ce.location+Be,X/ce.locationSize,Ae,D,Le*ee,(Je+X/ce.locationSize*Be)*ee,ue)}else{if(Se.isInstancedBufferAttribute){for(let _e=0;_e<ce.locationSize;_e++)y(ce.location+_e,Se.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let _e=0;_e<ce.locationSize;_e++)b(ce.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let _e=0;_e<ce.locationSize;_e++)F(ce.location+_e,X/ce.locationSize,Ae,D,X*ee,X/ce.locationSize*_e*ee,ue)}}else if(V!==void 0){const D=V[G];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(ce.location,D);break;case 3:r.vertexAttrib3fv(ce.location,D);break;case 4:r.vertexAttrib4fv(ce.location,D);break;default:r.vertexAttrib1fv(ce.location,D)}}}}P()}function O(){z();for(const k in a){const K=a[k];for(const de in K){const he=K[de];for(const J in he){const L=he[J];for(const V in L)_(L[V].object),delete L[V];delete he[J]}}delete a[k]}}function U(k){if(a[k.id]===void 0)return;const K=a[k.id];for(const de in K){const he=K[de];for(const J in he){const L=he[J];for(const V in L)_(L[V].object),delete L[V];delete he[J]}}delete a[k.id]}function B(k){for(const K in a){const de=a[K];for(const he in de){const J=de[he];if(J[k.id]===void 0)continue;const L=J[k.id];for(const V in L)_(L[V].object),delete L[V];delete J[k.id]}}}function T(k){for(const K in a){const de=a[K],he=k.isInstancedMesh===!0?k.id:0,J=de[he];if(J!==void 0){for(const L in J){const V=J[L];for(const G in V)_(V[G].object),delete V[G];delete J[L]}delete de[he],Object.keys(de).length===0&&delete a[K]}}}function z(){j(),f=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:j,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:b,disableUnusedAttributes:P}}function wD(r,e,i){let a;function l(m){a=m}function c(m,p){r.drawArrays(a,m,p),i.update(p,a,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),i.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];i.update(g,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function DD(r,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Vi&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Di&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:N,maxSamples:O,samples:U}}function ND(r){const e=this;let i=null,a=0,l=!1,c=!1;const f=new Jr,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||l;return l=g,a=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,b=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const P=c?0:a,F=P*4;let N=y.clippingState||null;m.value=N,N=_(E,g,F,S);for(let O=0;O!==F;++O)N[O]=i[O];y.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,S,E){const w=v!==null?v.length:0;let b=null;if(w!==0){if(b=m.value,E!==!0||b===null){const y=S+w*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<y)&&(b=new Float32Array(y));for(let F=0,N=S;F!==w;++F,N+=4)f.copy(v[F]).applyMatrix4(P,h),f.normal.toArray(b,N),b[N+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,b}}const Sr=4,Zx=[.125,.215,.35,.446,.526,.582],ns=20,LD=256,bl=new fb,Kx=new Et;let Qh=null,$h=0,Jh=0,ep=!1;const UD=new ie;class Qx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:h=UD}=c;Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ey(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,$h,Jh),this._renderer.xr.enabled=ep,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===cs||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:za,format:Vi,colorSpace:ku,depthBuffer:!1},l=$x(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$x(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OD(c)),this._blurMaterial=ID(c,e,i),this._ggxMaterial=PD(c,e,i)}return l}_compileMaterial(e){const i=new Ba(new ni,e);this._renderer.compile(i,bl)}_sceneToCubeUV(e,i,a,l,c){const m=new wi(90,1,i,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Kx),v.toneMapping=aa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new Bl,new rb({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,b=w.material;let y=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,y=!0):(b.color.copy(Kx),y=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):N===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const O=this._cubeSize;so(l,N*O,F>2?O:0,O,O),v.setRenderTarget(l),y&&v.render(w,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=P}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===cs||e.mapping===vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ey()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;so(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,bl)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,w=this._sizeLods[a],b=3*w*(a>E-Sr?a-E+Sr:0),y=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,so(c,b,y,3*w,2*w),l.setRenderTarget(c),l.render(h,bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,so(e,b,y,3*w,2*w),l.setRenderTarget(e),l.render(h,bl)}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ns-1),w=c/E,b=isFinite(c)?1+Math.floor(_*w):ns;b>ns&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ns}`);const y=[];let P=0;for(let B=0;B<ns;++B){const T=B/w,z=Math.exp(-T*T/2);y.push(z),B===0?P+=z:B<b&&(P+=2*z)}for(let B=0;B<y.length;B++)y[B]=y[B]/P;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=E,g.mipInt.value=F-a;const N=this._sizeLods[l],O=3*N*(l>F-Sr?l-F+Sr:0),U=4*(this._cubeSize-N);so(i,O,U,3*N,2*N),m.setRenderTarget(i),m.render(v,bl)}}function OD(r){const e=[],i=[],a=[];let l=r;const c=r-Sr+1+Zx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-Sr?m=Zx[f-r+Sr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,w=3,b=2,y=1,P=new Float32Array(w*E*S),F=new Float32Array(b*E*S),N=new Float32Array(y*E*S);for(let U=0;U<S;U++){const B=U%3*2/3-1,T=U>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];P.set(z,w*E*U),F.set(g,b*E*U);const j=[U,U,U,U,U,U];N.set(j,y*E*U)}const O=new ni;O.setAttribute("position",new bn(P,w)),O.setAttribute("uv",new bn(F,b)),O.setAttribute("faceIndex",new bn(N,y)),a.push(new Ba(O,null)),l>Sr&&l--}return{lodMeshes:a,sizeLods:e,sigmas:i}}function $x(r,e,i){const a=new ra(r,e,i);return a.texture.mapping=nf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function so(r,e,i,a,l){r.viewport.set(e,i,a,l),r.scissor.set(e,i,a,l)}function PD(r,e,i){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ID(r,e,i){const a=new Float32Array(ns),l=new ie(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Jx(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ey(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

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
	`}class pb extends ra{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new ob(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:xo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Ua});c.uniforms.tEquirect.value=i;const f=new Ba(l,c),h=i.minFilter;return i.minFilter===as&&(i.minFilter=Vn),new GR(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}function zD(r){let e=new WeakMap,i=new WeakMap,a=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Mh||S===Eh)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new pb(E.height);return w.fromEquirectangularTexture(r,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===Mh||S===Eh,w=S===cs||S===vo;if(E||w){let b=i.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new Qx(r)),b=E?a.fromEquirectangular(g,b):a.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const P=g.image;return E&&P&&P.height>0||w&&P&&m(P)?(a===null&&(a=new Qx(r)),b=E?a.fromEquirectangular(g):a.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,S){return S===Mh?g.mapping=cs:S===Eh&&(g.mapping=vo),g}function m(g){let S=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function FD(r){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=r.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&ho("WebGLRenderer: "+a+" extension not supported."),l}}}function BD(r,e,i,a){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const P=S.array;w=S.version;for(let F=0,N=P.length;F<N;F+=3){const O=P[F+0],U=P[F+1],B=P[F+2];g.push(O,U,U,B,B,O)}}else{const P=E.array;w=E.version;for(let F=0,N=P.length/3-1;F<N;F+=3){const O=F+0,U=F+1,B=F+2;g.push(O,U,U,B,B,O)}}const b=new(E.count>=65535?ab:ib)(g,1);b.version=w;const y=c.get(v);y&&e.remove(y),c.set(v,b)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function HD(r,e,i){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*f),i.update(g,a,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(a,g,c,v*f,S),i.update(g,a,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,S);let w=0;for(let b=0;b<S;b++)w+=g[b];i.update(w,a,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function GD(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function VD(r,e,i){const a=new WeakMap,l=new fn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let z=function(){B.dispose(),a.delete(h),h.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),E===!0&&(F=2),w===!0&&(F=3);let N=h.attributes.position.count*F,O=1;N>e.maxTextureSize&&(O=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const U=new Float32Array(N*O*4*v),B=new eb(U,N,O,v);B.type=na,B.needsUpdate=!0;const T=F*4;for(let j=0;j<v;j++){const k=b[j],K=y[j],de=P[j],he=N*O*4*j;for(let J=0;J<k.count;J++){const L=J*T;S===!0&&(l.fromBufferAttribute(k,J),U[he+L+0]=l.x,U[he+L+1]=l.y,U[he+L+2]=l.z,U[he+L+3]=0),E===!0&&(l.fromBufferAttribute(K,J),U[he+L+4]=l.x,U[he+L+5]=l.y,U[he+L+6]=l.z,U[he+L+7]=0),w===!0&&(l.fromBufferAttribute(de,J),U[he+L+8]=l.x,U[he+L+9]=l.y,U[he+L+10]=l.z,U[he+L+11]=de.itemSize===4?l.w:1)}}g={count:v,texture:B,size:new Pt(N,O)},a.set(h,g),h.addEventListener("dispose",z)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function kD(r,e,i,a,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const XD={[FS]:"LINEAR_TONE_MAPPING",[BS]:"REINHARD_TONE_MAPPING",[HS]:"CINEON_TONE_MAPPING",[GS]:"ACES_FILMIC_TONE_MAPPING",[kS]:"AGX_TONE_MAPPING",[XS]:"NEUTRAL_TONE_MAPPING",[VS]:"CUSTOM_TONE_MAPPING"};function WD(r,e,i,a,l,c){const f=new ra(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new _o(e,i):void 0}),h=new ra(e,i,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new FR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ba(m,p),v=new fb(-1,1,1,-1,0,1);let g=null,S=null,E=!1,w,b=null,y=[],P=!1;this.setSize=function(F,N){f.setSize(F,N),h.setSize(F,N);for(let O=0;O<y.length;O++){const U=y[O];U.setSize&&U.setSize(F,N)}},this.setEffects=function(F){y=F,P=y.length>0&&y[0].isRenderPass===!0;const N=f.width,O=f.height;for(let U=0;U<y.length;U++){const B=y[U];B.setSize&&B.setSize(N,O)}},this.begin=function(F,N){if(E||F.toneMapping===aa&&y.length===0)return!1;if(b=N,N!==null){const O=N.width,U=N.height;(f.width!==O||f.height!==U)&&this.setSize(O,U)}return P===!1&&F.setRenderTarget(f),w=F.toneMapping,F.toneMapping=aa,!0},this.hasRenderPass=function(){return P},this.end=function(F,N){F.toneMapping=w,E=!0;let O=f,U=h;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(F,U,O,N),T.needsSwap!==!1)){const z=O;O=U,U=z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},At.getTransfer(g)===kt&&(p.defines.SRGB_TRANSFER="");const B=XD[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(b),F.render(_,v),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const mb=new Wn,cm=new _o(1,1),gb=new eb,vb=new fR,_b=new ob,ty=[],ny=[],iy=new Float32Array(16),ay=new Float32Array(9),ry=new Float32Array(4);function Mo(r,e,i){const a=r[0];if(a<=0||a>0)return r;const l=e*i;let c=ty[l];if(c===void 0&&(c=new Float32Array(l),ty[l]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let i=0,a=r.length;i<a;i++)if(r[i]!==e[i])return!1;return!0}function An(r,e){for(let i=0,a=e.length;i<a;i++)r[i]=e[i]}function sf(r,e){let i=ny[e];i===void 0&&(i=new Int32Array(e),ny[e]=i);for(let a=0;a!==e;++a)i[a]=r.allocateTextureUnit();return i}function qD(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function jD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2fv(this.addr,e),An(i,e)}}function YD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;r.uniform3fv(this.addr,e),An(i,e)}}function ZD(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4fv(this.addr,e),An(i,e)}}function KD(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(Tn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,a))return;ry.set(a),r.uniformMatrix2fv(this.addr,!1,ry),An(i,a)}}function QD(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(Tn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,a))return;ay.set(a),r.uniformMatrix3fv(this.addr,!1,ay),An(i,a)}}function $D(r,e){const i=this.cache,a=e.elements;if(a===void 0){if(Tn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,a))return;iy.set(a),r.uniformMatrix4fv(this.addr,!1,iy),An(i,a)}}function JD(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function eN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2iv(this.addr,e),An(i,e)}}function tN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3iv(this.addr,e),An(i,e)}}function nN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4iv(this.addr,e),An(i,e)}}function iN(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function aN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2uiv(this.addr,e),An(i,e)}}function rN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3uiv(this.addr,e),An(i,e)}}function sN(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4uiv(this.addr,e),An(i,e)}}function oN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(cm.compareFunction=i.isReversedDepthBuffer()?Om:Um,c=cm):c=mb,i.setTexture2D(e||c,l)}function lN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||vb,l)}function cN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||_b,l)}function uN(r,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||gb,l)}function fN(r){switch(r){case 5126:return qD;case 35664:return jD;case 35665:return YD;case 35666:return ZD;case 35674:return KD;case 35675:return QD;case 35676:return $D;case 5124:case 35670:return JD;case 35667:case 35671:return eN;case 35668:case 35672:return tN;case 35669:case 35673:return nN;case 5125:return iN;case 36294:return aN;case 36295:return rN;case 36296:return sN;case 35678:case 36198:case 36298:case 36306:case 35682:return oN;case 35679:case 36299:case 36307:return lN;case 35680:case 36300:case 36308:case 36293:return cN;case 36289:case 36303:case 36311:case 36292:return uN}}function dN(r,e){r.uniform1fv(this.addr,e)}function hN(r,e){const i=Mo(e,this.size,2);r.uniform2fv(this.addr,i)}function pN(r,e){const i=Mo(e,this.size,3);r.uniform3fv(this.addr,i)}function mN(r,e){const i=Mo(e,this.size,4);r.uniform4fv(this.addr,i)}function gN(r,e){const i=Mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function vN(r,e){const i=Mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function _N(r,e){const i=Mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function xN(r,e){r.uniform1iv(this.addr,e)}function yN(r,e){r.uniform2iv(this.addr,e)}function SN(r,e){r.uniform3iv(this.addr,e)}function bN(r,e){r.uniform4iv(this.addr,e)}function MN(r,e){r.uniform1uiv(this.addr,e)}function EN(r,e){r.uniform2uiv(this.addr,e)}function TN(r,e){r.uniform3uiv(this.addr,e)}function AN(r,e){r.uniform4uiv(this.addr,e)}function RN(r,e,i){const a=this.cache,l=e.length,c=sf(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=cm:f=mb;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function CN(r,e,i){const a=this.cache,l=e.length,c=sf(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||vb,c[f])}function wN(r,e,i){const a=this.cache,l=e.length,c=sf(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||_b,c[f])}function DN(r,e,i){const a=this.cache,l=e.length,c=sf(i,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||gb,c[f])}function NN(r){switch(r){case 5126:return dN;case 35664:return hN;case 35665:return pN;case 35666:return mN;case 35674:return gN;case 35675:return vN;case 35676:return _N;case 5124:case 35670:return xN;case 35667:case 35671:return yN;case 35668:case 35672:return SN;case 35669:case 35673:return bN;case 5125:return MN;case 36294:return EN;case 36295:return TN;case 36296:return AN;case 35678:case 36198:case 36298:case 36306:case 35682:return RN;case 35679:case 36299:case 36307:return CN;case 35680:case 36300:case 36308:case 36293:return wN;case 36289:case 36303:case 36311:case 36292:return DN}}class LN{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=fN(i.type)}}class UN{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NN(i.type)}}class ON{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],a)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function sy(r,e){r.seq.push(e),r.map[e.id]=e}function PN(r,e,i){const a=r.name,l=a.length;for(tp.lastIndex=0;;){const c=tp.exec(a),f=tp.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){sy(i,p===void 0?new LN(h,r,e):new UN(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new ON(h),sy(i,v)),i=v}}}class zu{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);PN(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function oy(r,e,i){const a=r.createShader(e);return r.shaderSource(a,i),r.compileShader(a),a}const IN=37297;let zN=0;function FN(r,e){const i=r.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const ly=new pt;function BN(r){At._getMatrix(ly,At.workingColorSpace,r);const e=`mat3( ${ly.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(r)){case Xu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cy(r,e,i){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+FN(r.getShaderSource(e),h)}else return c}function HN(r,e){const i=BN(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const GN={[FS]:"Linear",[BS]:"Reinhard",[HS]:"Cineon",[GS]:"ACESFilmic",[kS]:"AgX",[XS]:"Neutral",[VS]:"Custom"};function VN(r,e){const i=GN[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new ie;function kN(){At.getLuminanceCoefficients(Cu);const r=Cu.x.toFixed(4),e=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XN(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function WN(r){const e=[];for(const i in r){const a=r[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function qN(r,e){const i={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function Al(r){return r!==""}function uy(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jN=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(r){return r.replace(jN,ZN)}const YN=new Map;function ZN(r,e){let i=_t[e];if(i===void 0){const a=YN.get(e);if(a!==void 0)i=_t[a],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return um(i)}const KN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dy(r){return r.replace(KN,QN)}function QN(r,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hy(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const $N={[Lu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function JN(r){return $N[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eL={[cs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[nf]:"ENVMAP_TYPE_CUBE_UV"};function tL(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eL[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nL={[vo]:"ENVMAP_MODE_REFRACTION"};function iL(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nL[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aL={[zS]:"ENVMAP_BLENDING_MULTIPLY",[X3]:"ENVMAP_BLENDING_MIX",[W3]:"ENVMAP_BLENDING_ADD"};function rL(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":aL[r.combine]||"ENVMAP_BLENDING_NONE"}function sL(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function oL(r,e,i,a){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=JN(i),p=tL(i),_=iL(i),v=rL(i),g=sL(i),S=XN(i),E=WN(c),w=l.createProgram();let b,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Al).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Al).join(`
`),y.length>0&&(y+=`
`)):(b=[hy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),y=[hy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==aa?"#define TONE_MAPPING":"",i.toneMapping!==aa?_t.tonemapping_pars_fragment:"",i.toneMapping!==aa?VN("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,HN("linearToOutputTexel",i.outputColorSpace),kN(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Al).join(`
`)),f=um(f),f=uy(f,i),f=fy(f,i),h=um(h),h=uy(h,i),h=fy(h,i),f=dy(f),h=dy(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===yx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=P+b+f,N=P+y+h,O=oy(l,l.VERTEX_SHADER,F),U=oy(l,l.FRAGMENT_SHADER,N);l.attachShader(w,O),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(k){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",de=l.getShaderInfoLog(O)||"",he=l.getShaderInfoLog(U)||"",J=K.trim(),L=de.trim(),V=he.trim();let G=!0,ce=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,O,U);else{const Se=cy(l,O,"vertex"),D=cy(l,U,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+Se+`
`+D)}else J!==""?ct("WebGLProgram: Program Info Log:",J):(L===""||V==="")&&(ce=!1);ce&&(k.diagnostics={runnable:G,programLog:J,vertexShader:{log:L,prefix:b},fragmentShader:{log:V,prefix:y}})}l.deleteShader(O),l.deleteShader(U),T=new zu(l,w),z=qN(l,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=l.getProgramParameter(w,IN)),j},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zN++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=U,this}let lL=0;class cL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,a){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new uL(e),i.set(e,a)),a}}class uL{constructor(e){this.id=lL++,this.code=e,this.usedTimes=0}}function fL(r){return r===us||r===Gu||r===Vu}function dL(r,e,i,a,l,c){const f=new tb,h=new cL,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,z,j,k,K,de){const he=k.fog,J=K.geometry,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=e.get(T.envMap||L,V),ce=G&&G.mapping===nf?G.image.height:null,Se=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const D=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,X=D!==void 0?D.length:0;let pe=0;J.morphAttributes.position!==void 0&&(pe=1),J.morphAttributes.normal!==void 0&&(pe=2),J.morphAttributes.color!==void 0&&(pe=3);let Me,Ae,ee,ue;if(Se){const je=ea[Se];Me=je.vertexShader,Ae=je.fragmentShader}else{Me=T.vertexShader,Ae=T.fragmentShader;const je=h.getVertexShaderStage(T),an=h.getFragmentShaderStage(T);h.update(T,je,an),ee=je.id,ue=an.id}const _e=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Je=K.isInstancedMesh===!0,Be=K.isBatchedMesh===!0,De=!!T.map,qe=!!T.matcap,ft=!!G,ut=!!T.aoMap,tt=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,Yt=!!T.normalMap,$t=!!T.displacementMap,nn=!!T.emissiveMap,Qt=!!T.metalnessMap,ln=!!T.roughnessMap,Z=T.anisotropy>0,Xt=T.clearcoat>0,Ut=T.dispersion>0,I=T.iridescence>0,M=T.sheen>0,$=T.transmission>0,se=Z&&!!T.anisotropyMap,ge=Xt&&!!T.clearcoatMap,Ce=Xt&&!!T.clearcoatNormalMap,Oe=Xt&&!!T.clearcoatRoughnessMap,me=I&&!!T.iridescenceMap,ve=I&&!!T.iridescenceThicknessMap,Ne=M&&!!T.sheenColorMap,Ve=M&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Pe=!!T.specularColorMap,nt=!!T.specularIntensityMap,it=$&&!!T.transmissionMap,dt=$&&!!T.thicknessMap,q=!!T.gradientMap,we=!!T.alphaMap,ye=T.alphaTest>0,Ue=!!T.alphaHash,Ge=!!T.extensions;let Te=aa;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Te=r.toneMapping);const Qe={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Me,fragmentShader:Ae,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Be,batchingColor:Be&&K._colorsTexture!==null,instancing:Je,instancingColor:Je&&K.instanceColor!==null,instancingMorph:Je&&K.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:De,matcap:qe,envMap:ft,envMapMode:ft&&G.mapping,envMapCubeUVHeight:ce,aoMap:ut,lightMap:tt,bumpMap:Ct,normalMap:Yt,displacementMap:$t,emissiveMap:nn,normalMapObjectSpace:Yt&&T.normalMapType===Y3,normalMapTangentSpace:Yt&&T.normalMapType===vx,packedNormalMap:Yt&&T.normalMapType===vx&&fL(T.normalMap.format),metalnessMap:Qt,roughnessMap:ln,anisotropy:Z,anisotropyMap:se,clearcoat:Xt,clearcoatMap:ge,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Oe,dispersion:Ut,iridescence:I,iridescenceMap:me,iridescenceThicknessMap:ve,sheen:M,sheenColorMap:Ne,sheenRoughnessMap:Ve,specularMap:ze,specularColorMap:Pe,specularIntensityMap:nt,transmission:$,transmissionMap:it,thicknessMap:dt,gradientMap:q,opaque:T.transparent===!1&&T.blending===fo&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:ye,alphaHash:Ue,combine:T.combine,mapUv:De&&E(T.map.channel),aoMapUv:ut&&E(T.aoMap.channel),lightMapUv:tt&&E(T.lightMap.channel),bumpMapUv:Ct&&E(T.bumpMap.channel),normalMapUv:Yt&&E(T.normalMap.channel),displacementMapUv:$t&&E(T.displacementMap.channel),emissiveMapUv:nn&&E(T.emissiveMap.channel),metalnessMapUv:Qt&&E(T.metalnessMap.channel),roughnessMapUv:ln&&E(T.roughnessMap.channel),anisotropyMapUv:se&&E(T.anisotropyMap.channel),clearcoatMapUv:ge&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(T.sheenRoughnessMap.channel),specularMapUv:ze&&E(T.specularMap.channel),specularColorMapUv:Pe&&E(T.specularColorMap.channel),specularIntensityMapUv:nt&&E(T.specularIntensityMap.channel),transmissionMapUv:it&&E(T.transmissionMap.channel),thicknessMapUv:dt&&E(T.thicknessMap.channel),alphaMapUv:we&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Yt||Z),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!J.attributes.uv&&(De||we),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Le,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:pe,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:De&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:nn&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Na,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function b(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const j in T.defines)z.push(j),z.push(T.defines[j]);return T.isRawShaderMaterial===!1&&(y(z,T),P(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function P(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),z.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const z=S[T.type];let j;if(z){const k=ea[z];j=PR.clone(k.uniforms)}else j=T.uniforms;return j}function N(T,z){let j=_.get(z);return j!==void 0?++j.usedTimes:(j=new oL(r,z,T,l),p.push(j),_.set(z,j)),j}function O(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function B(){h.dispose()}return{getParameters:w,getProgramCacheKey:b,getUniforms:F,acquireProgram:N,releaseProgram:O,releaseShaderCache:U,programs:p,dispose:B}}function hL(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function pL(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function py(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function my(){const r=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,w,b,y){let P=r[e];return P===void 0?(P={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:b,group:y},r[e]=P):(P.id=g.id,P.object=g,P.geometry=S,P.material=E,P.materialVariant=f(g),P.groupOrder=w,P.renderOrder=g.renderOrder,P.z=b,P.group=y),e++,P}function m(g,S,E,w,b,y){const P=h(g,S,E,w,b,y);E.transmission>0?a.push(P):E.transparent===!0?l.push(P):i.push(P)}function p(g,S,E,w,b,y){const P=h(g,S,E,w,b,y);E.transmission>0?a.unshift(P):E.transparent===!0?l.unshift(P):i.unshift(P)}function _(g,S,E){i.length>1&&i.sort(g||pL),a.length>1&&a.sort(S||py),l.length>1&&l.sort(S||py),E&&(i.reverse(),a.reverse(),l.reverse())}function v(){for(let g=e,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function mL(){let r=new WeakMap;function e(a,l){const c=r.get(a);let f;return c===void 0?(f=new my,r.set(a,[f])):l>=c.length?(f=new my,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function gL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Et};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function vL(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let _L=0;function xL(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yL(r){const e=new gL,i=vL(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ie);const l=new ie,c=new dn,f=new dn;function h(p){let _=0,v=0,g=0;for(let z=0;z<9;z++)a.probe[z].set(0,0,0);let S=0,E=0,w=0,b=0,y=0,P=0,F=0,N=0,O=0,U=0,B=0;p.sort(xL);for(let z=0,j=p.length;z<j;z++){const k=p[z],K=k.color,de=k.intensity,he=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===us?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=K.r*de,v+=K.g*de,g+=K.b*de;else if(k.isLightProbe){for(let L=0;L<9;L++)a.probe[L].addScaledVector(k.sh.coefficients[L],de);B++}else if(k.isDirectionalLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,G=i.get(k);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,a.directionalShadow[S]=G,a.directionalShadowMap[S]=J,a.directionalShadowMatrix[S]=k.shadow.matrix,P++}a.directional[S]=L,S++}else if(k.isSpotLight){const L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(K).multiplyScalar(de),L.distance=he,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,a.spot[w]=L;const V=k.shadow;if(k.map&&(a.spotLightMap[O]=k.map,O++,V.updateMatrices(k),k.castShadow&&U++),a.spotLightMatrix[w]=V.matrix,k.castShadow){const G=i.get(k);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,a.spotShadow[w]=G,a.spotShadowMap[w]=J,N++}w++}else if(k.isRectAreaLight){const L=e.get(k);L.color.copy(K).multiplyScalar(de),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),a.rectArea[b]=L,b++}else if(k.isPointLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const V=k.shadow,G=i.get(k);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,a.pointShadow[E]=G,a.pointShadowMap[E]=J,a.pointShadowMatrix[E]=k.shadow.matrix,F++}a.point[E]=L,E++}else if(k.isHemisphereLight){const L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(de),L.groundColor.copy(k.groundColor).multiplyScalar(de),a.hemi[y]=L,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==b||T.hemiLength!==y||T.numDirectionalShadows!==P||T.numPointShadows!==F||T.numSpotShadows!==N||T.numSpotMaps!==O||T.numLightProbes!==B)&&(a.directional.length=S,a.spot.length=w,a.rectArea.length=b,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=F,a.pointShadowMap.length=F,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=F,a.spotLightMatrix.length=N+O-U,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=B,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=b,T.hemiLength=y,T.numDirectionalShadows=P,T.numPointShadows=F,T.numSpotShadows=N,T.numSpotMaps=O,T.numLightProbes=B,a.version=_L++)}function m(p,_){let v=0,g=0,S=0,E=0,w=0;const b=_.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const F=p[y];if(F.isDirectionalLight){const N=a.directional[v];N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),v++}else if(F.isSpotLight){const N=a.spot[S];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),S++}else if(F.isRectAreaLight){const N=a.rectArea[E];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),f.identity(),c.copy(F.matrixWorld),c.premultiply(b),f.extractRotation(c),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(F.isPointLight){const N=a.point[g];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(b),g++}else if(F.isHemisphereLight){const N=a.hemi[w];N.direction.setFromMatrixPosition(F.matrixWorld),N.direction.transformDirection(b),w++}}}return{setup:h,setupView:m,state:a}}function gy(r){const e=new yL(r),i=[],a=[],l=[];function c(g){v.camera=g,i.length=0,a.length=0,l.length=0}function f(g){i.push(g)}function h(g){a.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function SL(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new gy(r),e.set(l,[h])):c>=f.length?(h=new gy(r),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:i,dispose:a}}const bL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ML=`uniform sampler2D shadow_pass;
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
}`,EL=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],TL=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],vy=new dn,Ml=new ie,np=new ie;function AL(r,e,i){let a=new sb;const l=new Pt,c=new Pt,f=new fn,h=new BR,m=new HR,p={},_=i.maxTextureSize,v={[Tr]:ti,[ti]:Tr,[Na]:Na},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:bL,fragmentShader:ML}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ba(E,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let y=this.type;this.render=function(U,B,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||U.length===0)return;this.type===T3&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lu);const z=r.getRenderTarget(),j=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ua),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const de=y!==this.type;de&&B.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(J=>J.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,J=U.length;he<J;he++){const L=U[he],V=L.shadow;if(V===void 0){ct("WebGLShadowMap:",L,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const G=V.getFrameExtents();l.multiply(G),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/G.x),l.x=c.x*G.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/G.y),l.y=c.y*G.y,V.mapSize.y=c.y));const ce=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ce,V.map===null||de===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Tl){if(L.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ra(l.x,l.y,{format:us,type:za,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),V.map.texture.name=L.name+".shadowMap",V.map.depthTexture=new _o(l.x,l.y,na),V.map.depthTexture.name=L.name+".shadowMapDepth",V.map.depthTexture.format=Fa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn}else L.isPointLight?(V.map=new pb(l.x),V.map.depthTexture=new UR(l.x,sa)):(V.map=new ra(l.x,l.y),V.map.depthTexture=new _o(l.x,l.y,sa)),V.map.depthTexture.name=L.name+".shadowMap",V.map.depthTexture.format=Fa,this.type===Lu?(V.map.depthTexture.compareFunction=ce?Om:Um,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn);V.camera.updateProjectionMatrix()}const Se=V.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Se;D++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,D),r.clear();else{D===0&&(r.setRenderTarget(V.map),r.clear());const X=V.getViewport(D);f.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),K.viewport(f)}if(L.isPointLight){const X=V.camera,pe=V.matrix,Me=L.distance||X.far;Me!==X.far&&(X.far=Me,X.updateProjectionMatrix()),Ml.setFromMatrixPosition(L.matrixWorld),X.position.copy(Ml),np.copy(X.position),np.add(EL[D]),X.up.copy(TL[D]),X.lookAt(np),X.updateMatrixWorld(),pe.makeTranslation(-Ml.x,-Ml.y,-Ml.z),vy.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V._frustum.setFromProjectionMatrix(vy,X.coordinateSystem,X.reversedDepth)}else V.updateMatrices(L);a=V.getFrustum(),N(B,T,V.camera,L,this.type)}V.isPointLightShadow!==!0&&this.type===Tl&&P(V,T),V.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(z,j,k)};function P(U,B){const T=e.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ra(l.x,l.y,{format:us,type:za})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(B,null,T,S,w,null)}function F(U,B,T,z){let j=null;const k=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)j=k;else if(j=T.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const K=j.uuid,de=B.uuid;let he=p[K];he===void 0&&(he={},p[K]=he);let J=he[de];J===void 0&&(J=j.clone(),he[de]=J,B.addEventListener("dispose",O)),j=J}if(j.visible=B.visible,j.wireframe=B.wireframe,z===Tl?j.side=B.shadowSide!==null?B.shadowSide:B.side:j.side=B.shadowSide!==null?B.shadowSide:v[B.side],j.alphaMap=B.alphaMap,j.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,j.map=B.map,j.clipShadows=B.clipShadows,j.clippingPlanes=B.clippingPlanes,j.clipIntersection=B.clipIntersection,j.displacementMap=B.displacementMap,j.displacementScale=B.displacementScale,j.displacementBias=B.displacementBias,j.wireframeLinewidth=B.wireframeLinewidth,j.linewidth=B.linewidth,T.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const K=r.properties.get(j);K.light=T}return j}function N(U,B,T,z,j){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&j===Tl)&&(!U.frustumCulled||a.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const de=e.update(U),he=U.material;if(Array.isArray(he)){const J=de.groups;for(let L=0,V=J.length;L<V;L++){const G=J[L],ce=he[G.materialIndex];if(ce&&ce.visible){const Se=F(U,ce,z,j);U.onBeforeShadow(r,U,B,T,de,Se,G),r.renderBufferDirect(T,null,de,Se,U,G),U.onAfterShadow(r,U,B,T,de,Se,G)}}}else if(he.visible){const J=F(U,he,z,j);U.onBeforeShadow(r,U,B,T,de,J,null),r.renderBufferDirect(T,null,de,J,U,null),U.onAfterShadow(r,U,B,T,de,J,null)}}const K=U.children;for(let de=0,he=K.length;de<he;de++)N(K[de],B,T,z,j)}function O(U){U.target.removeEventListener("dispose",O);for(const T in p){const z=p[T],j=U.target.uuid;j in z&&(z[j].dispose(),delete z[j])}}}function RL(r,e){function i(){let q=!1;const we=new fn;let ye=null;const Ue=new fn(0,0,0,0);return{setMask:function(Ge){ye!==Ge&&!q&&(r.colorMask(Ge,Ge,Ge,Ge),ye=Ge)},setLocked:function(Ge){q=Ge},setClear:function(Ge,Te,Qe,je,an){an===!0&&(Ge*=je,Te*=je,Qe*=je),we.set(Ge,Te,Qe,je),Ue.equals(we)===!1&&(r.clearColor(Ge,Te,Qe,je),Ue.copy(we))},reset:function(){q=!1,ye=null,Ue.set(-1,0,0,0)}}}function a(){let q=!1,we=!1,ye=null,Ue=null,Ge=null;return{setReversed:function(Te){if(we!==Te){const Qe=e.get("EXT_clip_control");Te?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),we=Te;const je=Ge;Ge=null,this.setClear(je)}},getReversed:function(){return we},setTest:function(Te){Te?_e(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Te){ye!==Te&&!q&&(r.depthMask(Te),ye=Te)},setFunc:function(Te){if(we&&(Te=aR[Te]),Ue!==Te){switch(Te){case bp:r.depthFunc(r.NEVER);break;case Mp:r.depthFunc(r.ALWAYS);break;case Ep:r.depthFunc(r.LESS);break;case go:r.depthFunc(r.LEQUAL);break;case Tp:r.depthFunc(r.EQUAL);break;case Ap:r.depthFunc(r.GEQUAL);break;case Rp:r.depthFunc(r.GREATER);break;case Cp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=Te}},setLocked:function(Te){q=Te},setClear:function(Te){Ge!==Te&&(Ge=Te,we&&(Te=1-Te),r.clearDepth(Te))},reset:function(){q=!1,ye=null,Ue=null,Ge=null,we=!1}}}function l(){let q=!1,we=null,ye=null,Ue=null,Ge=null,Te=null,Qe=null,je=null,an=null;return{setTest:function(zt){q||(zt?_e(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(zt){we!==zt&&!q&&(r.stencilMask(zt),we=zt)},setFunc:function(zt,ii,ai){(ye!==zt||Ue!==ii||Ge!==ai)&&(r.stencilFunc(zt,ii,ai),ye=zt,Ue=ii,Ge=ai)},setOp:function(zt,ii,ai){(Te!==zt||Qe!==ii||je!==ai)&&(r.stencilOp(zt,ii,ai),Te=zt,Qe=ii,je=ai)},setLocked:function(zt){q=zt},setClear:function(zt){an!==zt&&(r.clearStencil(zt),an=zt)},reset:function(){q=!1,we=null,ye=null,Ue=null,Ge=null,Te=null,Qe=null,je=null,an=null}}}const c=new i,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],w=null,b=!1,y=null,P=null,F=null,N=null,O=null,U=null,B=null,T=new Et(0,0,0),z=0,j=!1,k=null,K=null,de=null,he=null,J=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ce)[1]),V=G>=1):ce.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),V=G>=2);let Se=null,D={};const X=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Me=new fn().fromArray(X),Ae=new fn().fromArray(pe);function ee(q,we,ye,Ue){const Ge=new Uint8Array(4),Te=r.createTexture();r.bindTexture(q,Te),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<ye;Qe++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(we+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Te}const ue={};ue[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),_e(r.DEPTH_TEST),f.setFunc(go),Ct(!1),Yt(hx),_e(r.CULL_FACE),ut(Ua);function _e(q){_[q]!==!0&&(r.enable(q),_[q]=!0)}function Le(q){_[q]!==!1&&(r.disable(q),_[q]=!1)}function Je(q,we){return g[q]!==we?(r.bindFramebuffer(q,we),g[q]=we,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=we),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=we),!0):!1}function Be(q,we){let ye=E,Ue=!1;if(q){ye=S.get(we),ye===void 0&&(ye=[],S.set(we,ye));const Ge=q.textures;if(ye.length!==Ge.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,Qe=Ge.length;Te<Qe;Te++)ye[Te]=r.COLOR_ATTACHMENT0+Te;ye.length=Ge.length,Ue=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(ye)}function De(q){return w!==q?(r.useProgram(q),w=q,!0):!1}const qe={[ts]:r.FUNC_ADD,[R3]:r.FUNC_SUBTRACT,[C3]:r.FUNC_REVERSE_SUBTRACT};qe[w3]=r.MIN,qe[D3]=r.MAX;const ft={[N3]:r.ZERO,[L3]:r.ONE,[U3]:r.SRC_COLOR,[yp]:r.SRC_ALPHA,[B3]:r.SRC_ALPHA_SATURATE,[z3]:r.DST_COLOR,[P3]:r.DST_ALPHA,[O3]:r.ONE_MINUS_SRC_COLOR,[Sp]:r.ONE_MINUS_SRC_ALPHA,[F3]:r.ONE_MINUS_DST_COLOR,[I3]:r.ONE_MINUS_DST_ALPHA,[H3]:r.CONSTANT_COLOR,[G3]:r.ONE_MINUS_CONSTANT_COLOR,[V3]:r.CONSTANT_ALPHA,[k3]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(q,we,ye,Ue,Ge,Te,Qe,je,an,zt){if(q===Ua){b===!0&&(Le(r.BLEND),b=!1);return}if(b===!1&&(_e(r.BLEND),b=!0),q!==A3){if(q!==y||zt!==j){if((P!==ts||O!==ts)&&(r.blendEquation(r.FUNC_ADD),P=ts,O=ts),zt)switch(q){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case px:r.blendFunc(r.ONE,r.ONE);break;case mx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",q);break}else switch(q){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case px:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mx:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gx:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",q);break}F=null,N=null,U=null,B=null,T.set(0,0,0),z=0,y=q,j=zt}return}Ge=Ge||we,Te=Te||ye,Qe=Qe||Ue,(we!==P||Ge!==O)&&(r.blendEquationSeparate(qe[we],qe[Ge]),P=we,O=Ge),(ye!==F||Ue!==N||Te!==U||Qe!==B)&&(r.blendFuncSeparate(ft[ye],ft[Ue],ft[Te],ft[Qe]),F=ye,N=Ue,U=Te,B=Qe),(je.equals(T)===!1||an!==z)&&(r.blendColor(je.r,je.g,je.b,an),T.copy(je),z=an),y=q,j=!1}function tt(q,we){q.side===Na?Le(r.CULL_FACE):_e(r.CULL_FACE);let ye=q.side===ti;we&&(ye=!ye),Ct(ye),q.blending===fo&&q.transparent===!1?ut(Ua):ut(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ue=q.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),nn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(q){k!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),k=q)}function Yt(q){q!==M3?(_e(r.CULL_FACE),q!==K&&(q===hx?r.cullFace(r.BACK):q===E3?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),K=q}function $t(q){q!==de&&(V&&r.lineWidth(q),de=q)}function nn(q,we,ye){q?(_e(r.POLYGON_OFFSET_FILL),(he!==we||J!==ye)&&(he=we,J=ye,f.getReversed()&&(we=-we),r.polygonOffset(we,ye))):Le(r.POLYGON_OFFSET_FILL)}function Qt(q){q?_e(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function ln(q){q===void 0&&(q=r.TEXTURE0+L-1),Se!==q&&(r.activeTexture(q),Se=q)}function Z(q,we,ye){ye===void 0&&(Se===null?ye=r.TEXTURE0+L-1:ye=Se);let Ue=D[ye];Ue===void 0&&(Ue={type:void 0,texture:void 0},D[ye]=Ue),(Ue.type!==q||Ue.texture!==we)&&(Se!==ye&&(r.activeTexture(ye),Se=ye),r.bindTexture(q,we||ue[q]),Ue.type=q,Ue.texture=we)}function Xt(){const q=D[Se];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ut(){try{r.compressedTexImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function M(){try{r.texSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function $(){try{r.texSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ce(){try{r.texStorage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Oe(){try{r.texStorage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function me(){try{r.texImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function ve(){try{r.texImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ne(q){return v[q]!==void 0?v[q]:r.getParameter(q)}function Ve(q,we){v[q]!==we&&(r.pixelStorei(q,we),v[q]=we)}function ze(q){Me.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Me.copy(q))}function Pe(q){Ae.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Ae.copy(q))}function nt(q,we){let ye=p.get(we);ye===void 0&&(ye=new WeakMap,p.set(we,ye));let Ue=ye.get(q);Ue===void 0&&(Ue=r.getUniformBlockIndex(we,q.name),ye.set(q,Ue))}function it(q,we){const Ue=p.get(we).get(q);m.get(we)!==Ue&&(r.uniformBlockBinding(we,Ue,q.__bindingPointIndex),m.set(we,Ue))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},Se=null,D={},g={},S=new WeakMap,E=[],w=null,b=!1,y=null,P=null,F=null,N=null,O=null,U=null,B=null,T=new Et(0,0,0),z=0,j=!1,k=null,K=null,de=null,he=null,J=null,Me.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:_e,disable:Le,bindFramebuffer:Je,drawBuffers:Be,useProgram:De,setBlending:ut,setMaterial:tt,setFlipSided:Ct,setCullFace:Yt,setLineWidth:$t,setPolygonOffset:nn,setScissorTest:Qt,activeTexture:ln,bindTexture:Z,unbindTexture:Xt,compressedTexImage2D:Ut,compressedTexImage3D:I,texImage2D:me,texImage3D:ve,pixelStorei:Ve,getParameter:Ne,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Oe,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:se,compressedTexSubImage3D:ge,scissor:ze,viewport:Pe,reset:dt}}function CL(r,e,i,a,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,M){return E?new OffscreenCanvas(I,M):qu("canvas")}function b(I,M,$){let se=1;const ge=Ut(I);if((ge.width>$||ge.height>$)&&(se=$/Math.max(ge.width,ge.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ce=Math.floor(se*ge.width),Oe=Math.floor(se*ge.height);g===void 0&&(g=w(Ce,Oe));const me=M?w(Ce,Oe):g;return me.width=Ce,me.height=Oe,me.getContext("2d").drawImage(I,0,0,Ce,Oe),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ce+"x"+Oe+")."),me}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function y(I){return I.generateMipmaps}function P(I){r.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(I,M,$,se,ge,Ce=!1){if(I!==null){if(r[I]!==void 0)return r[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Oe;se&&(Oe=e.get("EXT_texture_norm16"),Oe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===r.RED&&($===r.FLOAT&&(me=r.R32F),$===r.HALF_FLOAT&&(me=r.R16F),$===r.UNSIGNED_BYTE&&(me=r.R8),$===r.UNSIGNED_SHORT&&Oe&&(me=Oe.R16_EXT),$===r.SHORT&&Oe&&(me=Oe.R16_SNORM_EXT)),M===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.R8UI),$===r.UNSIGNED_SHORT&&(me=r.R16UI),$===r.UNSIGNED_INT&&(me=r.R32UI),$===r.BYTE&&(me=r.R8I),$===r.SHORT&&(me=r.R16I),$===r.INT&&(me=r.R32I)),M===r.RG&&($===r.FLOAT&&(me=r.RG32F),$===r.HALF_FLOAT&&(me=r.RG16F),$===r.UNSIGNED_BYTE&&(me=r.RG8),$===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RG16_EXT),$===r.SHORT&&Oe&&(me=Oe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.RG8UI),$===r.UNSIGNED_SHORT&&(me=r.RG16UI),$===r.UNSIGNED_INT&&(me=r.RG32UI),$===r.BYTE&&(me=r.RG8I),$===r.SHORT&&(me=r.RG16I),$===r.INT&&(me=r.RG32I)),M===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.RGB8UI),$===r.UNSIGNED_SHORT&&(me=r.RGB16UI),$===r.UNSIGNED_INT&&(me=r.RGB32UI),$===r.BYTE&&(me=r.RGB8I),$===r.SHORT&&(me=r.RGB16I),$===r.INT&&(me=r.RGB32I)),M===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),$===r.UNSIGNED_INT&&(me=r.RGBA32UI),$===r.BYTE&&(me=r.RGBA8I),$===r.SHORT&&(me=r.RGBA16I),$===r.INT&&(me=r.RGBA32I)),M===r.RGB&&($===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGB16_EXT),$===r.SHORT&&Oe&&(me=Oe.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(me=r.R11F_G11F_B10F)),M===r.RGBA){const ve=Ce?Xu:At.getTransfer(ge);$===r.FLOAT&&(me=r.RGBA32F),$===r.HALF_FLOAT&&(me=r.RGBA16F),$===r.UNSIGNED_BYTE&&(me=ve===kt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGBA16_EXT),$===r.SHORT&&Oe&&(me=Oe.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function O(I,M){let $;return I?M===null||M===sa||M===Ll?$=r.DEPTH24_STENCIL8:M===na?$=r.DEPTH32F_STENCIL8:M===Nl&&($=r.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===Ll?$=r.DEPTH_COMPONENT24:M===na?$=r.DEPTH_COMPONENT32F:M===Nl&&($=r.DEPTH_COMPONENT16),$}function U(I,M){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pn&&I.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function B(I){const M=I.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(I){const M=I.target;M.removeEventListener("dispose",T),k(M)}function z(I){const M=a.get(I);if(M.__webglInit===void 0)return;const $=I.source,se=S.get($);if(se){const ge=se[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&j(I),Object.keys(se).length===0&&S.delete($)}a.remove(I)}function j(I){const M=a.get(I);r.deleteTexture(M.__webglTexture);const $=I.source,se=S.get($);delete se[M.__cacheKey],f.memory.textures--}function k(I){const M=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ge=0;ge<M.__webglFramebuffer[se].length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[se][ge]);else r.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)r.deleteFramebuffer(M.__webglFramebuffer[se]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=I.textures;for(let se=0,ge=$.length;se<ge;se++){const Ce=a.get($[se]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),f.memory.textures--),a.remove($[se])}a.remove(I)}let K=0;function de(){K=0}function he(){return K}function J(I){K=I}function L(){const I=K;return I>=l.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),K+=1,I}function V(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function G(I,M){const $=a.get(I);if(I.isVideoTexture&&Z(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const se=I.image;if(se===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Le($,I,M);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+M)}function ce(I,M){const $=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Le($,I,M);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+M)}function Se(I,M){const $=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Le($,I,M);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+M)}function D(I,M){const $=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){Je($,I,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+M)}const X={[wp]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[Dp]:r.MIRRORED_REPEAT},pe={[Pn]:r.NEAREST,[q3]:r.NEAREST_MIPMAP_NEAREST,[nu]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},Me={[Z3]:r.NEVER,[eR]:r.ALWAYS,[K3]:r.LESS,[Um]:r.LEQUAL,[Q3]:r.EQUAL,[Om]:r.GEQUAL,[$3]:r.GREATER,[J3]:r.NOTEQUAL};function Ae(I,M){if(M.type===na&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Th||M.magFilter===nu||M.magFilter===as||M.minFilter===Vn||M.minFilter===Th||M.minFilter===nu||M.minFilter===as)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,X[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,X[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,X[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,pe[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==nu&&M.minFilter!==as||M.type===na&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function ee(I,M){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",B));const se=M.source;let ge=S.get(se);ge===void 0&&(ge={},S.set(se,ge));const Ce=V(M);if(Ce!==I.__cacheKey){ge[Ce]===void 0&&(ge[Ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ge[Ce].usedTimes++;const Oe=ge[I.__cacheKey];Oe!==void 0&&(ge[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&j(M)),I.__cacheKey=Ce,I.__webglTexture=ge[Ce].texture}return $}function ue(I,M,$){return Math.floor(Math.floor(I/$)/M)}function _e(I,M,$,se){const Ce=I.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,$,se,M.data);else{Ce.sort((Ve,ze)=>Ve.start-ze.start);let Oe=0;for(let Ve=1;Ve<Ce.length;Ve++){const ze=Ce[Oe],Pe=Ce[Ve],nt=ze.start+ze.count,it=ue(Pe.start,M.width,4),dt=ue(ze.start,M.width,4);Pe.start<=nt+1&&it===dt&&ue(Pe.start+Pe.count-1,M.width,4)===it?ze.count=Math.max(ze.count,Pe.start+Pe.count-ze.start):(++Oe,Ce[Oe]=Pe)}Ce.length=Oe+1;const me=i.getParameter(r.UNPACK_ROW_LENGTH),ve=i.getParameter(r.UNPACK_SKIP_PIXELS),Ne=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ve=0,ze=Ce.length;Ve<ze;Ve++){const Pe=Ce[Ve],nt=Math.floor(Pe.start/4),it=Math.ceil(Pe.count/4),dt=nt%M.width,q=Math.floor(nt/M.width),we=it,ye=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,dt,q,we,ye,$,se,M.data)}I.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,me),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function Le(I,M,$){let se=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=r.TEXTURE_3D);const ge=ee(I,M),Ce=M.source;i.bindTexture(se,I.__webglTexture,r.TEXTURE0+$);const Oe=a.get(Ce);if(Ce.version!==Oe.__version||ge===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=At.getPrimaries(At.workingColorSpace),Ue=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),Ge=M.colorSpace===yr||ye===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ve=b(M.image,!1,l.maxTextureSize);ve=Xt(M,ve);const Ne=c.convert(M.format,M.colorSpace),Ve=c.convert(M.type);let ze=N(M.internalFormat,Ne,Ve,M.normalized,M.colorSpace,M.isVideoTexture);Ae(se,M);let Pe;const nt=M.mipmaps,it=M.isVideoTexture!==!0,dt=Oe.__version===void 0||ge===!0,q=Ce.dataReady,we=U(M,ve);if(M.isDepthTexture)ze=O(M.format===rs,M.type),dt&&(it?i.texStorage2D(r.TEXTURE_2D,1,ze,ve.width,ve.height):i.texImage2D(r.TEXTURE_2D,0,ze,ve.width,ve.height,0,Ne,Ve,null));else if(M.isDataTexture)if(nt.length>0){it&&dt&&i.texStorage2D(r.TEXTURE_2D,we,ze,nt[0].width,nt[0].height);for(let ye=0,Ue=nt.length;ye<Ue;ye++)Pe=nt[ye],it?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Ne,Ve,Pe.data):i.texImage2D(r.TEXTURE_2D,ye,ze,Pe.width,Pe.height,0,Ne,Ve,Pe.data);M.generateMipmaps=!1}else it?(dt&&i.texStorage2D(r.TEXTURE_2D,we,ze,ve.width,ve.height),q&&_e(M,ve,Ne,Ve)):i.texImage2D(r.TEXTURE_2D,0,ze,ve.width,ve.height,0,Ne,Ve,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,we,ze,nt[0].width,nt[0].height,ve.depth);for(let ye=0,Ue=nt.length;ye<Ue;ye++)if(Pe=nt[ye],M.format!==Vi)if(Ne!==null)if(it){if(q)if(M.layerUpdates.size>0){const Ge=Yx(Pe.width,Pe.height,M.format,M.type);for(const Te of M.layerUpdates){const Qe=Pe.data.subarray(Te*Ge/Pe.data.BYTES_PER_ELEMENT,(Te+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Te,Pe.width,Pe.height,1,Ne,Qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,ve.depth,Ne,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,ze,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?q&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,ve.depth,Ne,Ve,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,ze,Pe.width,Pe.height,ve.depth,0,Ne,Ve,Pe.data)}else{it&&dt&&i.texStorage2D(r.TEXTURE_2D,we,ze,nt[0].width,nt[0].height);for(let ye=0,Ue=nt.length;ye<Ue;ye++)Pe=nt[ye],M.format!==Vi?Ne!==null?it?q&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Ne,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,ze,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Ne,Ve,Pe.data):i.texImage2D(r.TEXTURE_2D,ye,ze,Pe.width,Pe.height,0,Ne,Ve,Pe.data)}else if(M.isDataArrayTexture)if(it){if(dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,we,ze,ve.width,ve.height,ve.depth),q)if(M.layerUpdates.size>0){const ye=Yx(ve.width,ve.height,M.format,M.type);for(const Ue of M.layerUpdates){const Ge=ve.data.subarray(Ue*ye/ve.data.BYTES_PER_ELEMENT,(Ue+1)*ye/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,ve.width,ve.height,1,Ne,Ve,Ge)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ne,Ve,ve.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,Ne,Ve,ve.data);else if(M.isData3DTexture)it?(dt&&i.texStorage3D(r.TEXTURE_3D,we,ze,ve.width,ve.height,ve.depth),q&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ne,Ve,ve.data)):i.texImage3D(r.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,Ne,Ve,ve.data);else if(M.isFramebufferTexture){if(dt)if(it)i.texStorage2D(r.TEXTURE_2D,we,ze,ve.width,ve.height);else{let ye=ve.width,Ue=ve.height;for(let Ge=0;Ge<we;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,ze,ye,Ue,0,Ne,Ve,null),ye>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ve.parentNode!==ye){ye.appendChild(ve),v.add(M),ye.onpaint=Ue=>{const Ge=Ue.changedElements;for(const Te of v)Ge.includes(Te.image)&&(Te.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ve);else{const Ge=r.RGBA,Te=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Te,Qe,ve)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&dt){const ye=Ut(nt[0]);i.texStorage2D(r.TEXTURE_2D,we,ze,ye.width,ye.height)}for(let ye=0,Ue=nt.length;ye<Ue;ye++)Pe=nt[ye],it?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ne,Ve,Pe):i.texImage2D(r.TEXTURE_2D,ye,ze,Ne,Ve,Pe);M.generateMipmaps=!1}else if(it){if(dt){const ye=Ut(ve);i.texStorage2D(r.TEXTURE_2D,we,ze,ye.width,ye.height)}q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ve,ve)}else i.texImage2D(r.TEXTURE_2D,0,ze,Ne,Ve,ve);y(M)&&P(se),Oe.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Je(I,M,$){if(M.image.length!==6)return;const se=ee(I,M),ge=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+$);const Ce=a.get(ge);if(ge.version!==Ce.__version||se===!0){i.activeTexture(r.TEXTURE0+$);const Oe=At.getPrimaries(At.workingColorSpace),me=M.colorSpace===yr?null:At.getPrimaries(M.colorSpace),ve=M.colorSpace===yr||Oe===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,Ve=M.image[0]&&M.image[0].isDataTexture,ze=[];for(let Te=0;Te<6;Te++)!Ne&&!Ve?ze[Te]=b(M.image[Te],!0,l.maxCubemapSize):ze[Te]=Ve?M.image[Te].image:M.image[Te],ze[Te]=Xt(M,ze[Te]);const Pe=ze[0],nt=c.convert(M.format,M.colorSpace),it=c.convert(M.type),dt=N(M.internalFormat,nt,it,M.normalized,M.colorSpace),q=M.isVideoTexture!==!0,we=Ce.__version===void 0||se===!0,ye=ge.dataReady;let Ue=U(M,Pe);Ae(r.TEXTURE_CUBE_MAP,M);let Ge;if(Ne){q&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,dt,Pe.width,Pe.height);for(let Te=0;Te<6;Te++){Ge=ze[Te].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const je=Ge[Qe];M.format!==Vi?nt!==null?q?ye&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,je.width,je.height,nt,je.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,dt,je.width,je.height,0,je.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,je.width,je.height,nt,it,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,dt,je.width,je.height,0,nt,it,je.data)}}}else{if(Ge=M.mipmaps,q&&we){Ge.length>0&&Ue++;const Te=Ut(ze[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,dt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ve){q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ze[Te].width,ze[Te].height,nt,it,ze[Te].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,dt,ze[Te].width,ze[Te].height,0,nt,it,ze[Te].data);for(let Qe=0;Qe<Ge.length;Qe++){const an=Ge[Qe].image[Te].image;q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,an.width,an.height,nt,it,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,dt,an.width,an.height,0,nt,it,an.data)}}else{q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,nt,it,ze[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,dt,nt,it,ze[Te]);for(let Qe=0;Qe<Ge.length;Qe++){const je=Ge[Qe];q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,nt,it,je.image[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,dt,nt,it,je.image[Te])}}}y(M)&&P(r.TEXTURE_CUBE_MAP),Ce.__version=ge.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Be(I,M,$,se,ge,Ce){const Oe=c.convert($.format,$.colorSpace),me=c.convert($.type),ve=N($.internalFormat,Oe,me,$.normalized,$.colorSpace),Ne=a.get(M),Ve=a.get($);if(Ve.__renderTarget=M,!Ne.__hasExternalTextures){const ze=Math.max(1,M.width>>Ce),Pe=Math.max(1,M.height>>Ce);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?i.texImage3D(ge,Ce,ve,ze,Pe,M.depth,0,Oe,me,null):i.texImage2D(ge,Ce,ve,ze,Pe,0,Oe,me,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ge,Ve.__webglTexture,0,Qt(M)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ge,Ve.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function De(I,M,$){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){const se=M.depthTexture,ge=se&&se.isDepthTexture?se.type:null,Ce=O(M.stencilBuffer,ge),Oe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),Ce,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),Ce,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,I)}else{const se=M.textures;for(let ge=0;ge<se.length;ge++){const Ce=se[ge],Oe=c.convert(Ce.format,Ce.colorSpace),me=c.convert(Ce.type),ve=N(Ce.internalFormat,Oe,me,Ce.normalized,Ce.colorSpace);ln(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(M),ve,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(M),ve,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ve,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(I,M,$){const se=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=a.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=c.convert(M.depthTexture.format),Ve=c.convert(M.depthTexture.type);let ze;M.depthTexture.format===Fa?ze=r.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(ze=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ze,M.width,M.height,0,Ne,Ve,null)}}else G(M.depthTexture,0);const Ce=ge.__webglTexture,Oe=Qt(M),me=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,ve=M.depthTexture.format===rs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fa)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,me,Ce,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,me,Ce,0);else if(M.depthTexture.format===rs)ln(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,me,Ce,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ve,me,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(I){const M=a.get(I),$=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const se=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ge)};se.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=se}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let se=0;se<6;se++)qe(M.__webglFramebuffer[se],I,se);else{const se=I.texture.mipmaps;se&&se.length>0?qe(M.__webglFramebuffer[0],I,0):qe(M.__webglFramebuffer,I,0)}else if($){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=r.createRenderbuffer(),De(M.__webglDepthbuffer[se],I,!1);else{const ge=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ce)}}else{const se=I.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),De(M.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(I,M,$){const se=a.get(I);M!==void 0&&Be(se.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ft(I)}function tt(I){const M=I.texture,$=a.get(I),se=a.get(M);I.addEventListener("dispose",T);const ge=I.textures,Ce=I.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=M.version,f.memory.textures++),Ce){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let ve=0;ve<M.mipmaps.length;ve++)$.__webglFramebuffer[me][ve]=r.createFramebuffer()}else $.__webglFramebuffer[me]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)$.__webglFramebuffer[me]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let me=0,ve=ge.length;me<ve;me++){const Ne=a.get(ge[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&ln(I)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<ge.length;me++){const ve=ge[me];$.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const Ne=c.convert(ve.format,ve.colorSpace),Ve=c.convert(ve.type),ze=N(ve.internalFormat,Ne,Ve,ve.normalized,ve.colorSpace,I.isXRRenderTarget===!0),Pe=Qt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ze,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,$.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),De($.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Be($.__webglFramebuffer[me][ve],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else Be($.__webglFramebuffer[me],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(M)&&P(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let me=0,ve=ge.length;me<ve;me++){const Ne=ge[me],Ve=a.get(Ne);let ze=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ze=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ze,Ve.__webglTexture),Ae(ze,Ne),Be($.__webglFramebuffer,I,Ne,r.COLOR_ATTACHMENT0+me,ze,0),y(Ne)&&P(ze)}i.unbindTexture()}else{let me=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(me,se.__webglTexture),Ae(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Be($.__webglFramebuffer[ve],I,M,r.COLOR_ATTACHMENT0,me,ve);else Be($.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,me,0);y(M)&&P(me),i.unbindTexture()}I.depthBuffer&&ft(I)}function Ct(I){const M=I.textures;for(let $=0,se=M.length;$<se;$++){const ge=M[$];if(y(ge)){const Ce=F(I),Oe=a.get(ge).__webglTexture;i.bindTexture(Ce,Oe),P(Ce),i.unbindTexture()}}}const Yt=[],$t=[];function nn(I){if(I.samples>0){if(ln(I)===!1){const M=I.textures,$=I.width,se=I.height;let ge=r.COLOR_BUFFER_BIT;const Ce=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=a.get(I),me=M.length>1;if(me)for(let Ne=0;Ne<M.length;Ne++)i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ve=I.texture.mipmaps;ve&&ve.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const Ve=a.get(M[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,$,se,0,0,$,se,ge,r.NEAREST),m===!0&&(Yt.length=0,$t.length=0,Yt.push(r.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Yt.push(Ce),$t.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Ne=0;Ne<M.length;Ne++){i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const Ve=a.get(M[Ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,Ve,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Qt(I){return Math.min(l.maxSamples,I.samples)}function ln(I){const M=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(I){const M=f.render.frame;_.get(I)!==M&&(_.set(I,M),I.update())}function Xt(I,M){const $=I.colorSpace,se=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==ku&&$!==yr&&(At.getTransfer($)===kt?(se!==Vi||ge!==Di)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",$)),M}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=L,this.resetTextureUnits=de,this.getTextureUnits=he,this.setTextureUnits=J,this.setTexture2D=G,this.setTexture2DArray=ce,this.setTexture3D=Se,this.setTextureCube=D,this.rebindTextures=ut,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function wL(r,e){function i(a,l=yr){let c;const f=At.getTransfer(l);if(a===Di)return r.UNSIGNED_BYTE;if(a===Cm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===wm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===YS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===ZS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===qS)return r.BYTE;if(a===jS)return r.SHORT;if(a===Nl)return r.UNSIGNED_SHORT;if(a===Rm)return r.INT;if(a===sa)return r.UNSIGNED_INT;if(a===na)return r.FLOAT;if(a===za)return r.HALF_FLOAT;if(a===KS)return r.ALPHA;if(a===QS)return r.RGB;if(a===Vi)return r.RGBA;if(a===Fa)return r.DEPTH_COMPONENT;if(a===rs)return r.DEPTH_STENCIL;if(a===$S)return r.RED;if(a===Dm)return r.RED_INTEGER;if(a===us)return r.RG;if(a===Nm)return r.RG_INTEGER;if(a===Lm)return r.RGBA_INTEGER;if(a===Uu||a===Ou||a===Pu||a===Iu)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Np||a===Lp||a===Up||a===Op)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Np)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Lp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Up)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Op)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Pp||a===Ip||a===zp||a===Fp||a===Bp||a===Gu||a===Hp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Pp||a===Ip)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===zp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Fp)return c.COMPRESSED_R11_EAC;if(a===Bp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Gu)return c.COMPRESSED_RG11_EAC;if(a===Hp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Gp||a===Vp||a===kp||a===Xp||a===Wp||a===qp||a===jp||a===Yp||a===Zp||a===Kp||a===Qp||a===$p||a===Jp||a===em)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Gp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Vp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Xp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Wp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Yp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Zp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Kp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Qp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===$p)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===em)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===tm||a===nm||a===im)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===tm)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===nm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===im)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===am||a===rm||a===Vu||a===sm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===am)return c.COMPRESSED_RED_RGTC1_EXT;if(a===rm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Vu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===sm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ll?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:i}}const DL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NL=`
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

}`;class LL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new lb(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new gi({vertexShader:DL,fragmentShader:NL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ba(new af(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UL extends ds{constructor(e,i){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",b=new LL,y={},P=i.getContextAttributes();let F=null,N=null;const O=[],U=[],B=new Pt;let T=null;const z=new wi;z.viewport=new fn;const j=new wi;j.viewport=new fn;const k=[z,j],K=new VR;let de=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=O[ee];return ue===void 0&&(ue=new Uh,O[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=O[ee];return ue===void 0&&(ue=new Uh,O[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=O[ee];return ue===void 0&&(ue=new Uh,O[ee]=ue),ue.getHandSpace()};function J(ee){const ue=U.indexOf(ee.inputSource);if(ue===-1)return;const _e=O[ue];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,p||f),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function L(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",V);for(let ee=0;ee<O.length;ee++){const ue=U[ee];ue!==null&&(U[ee]=null,O[ee].disconnect(ue))}de=null,he=null,b.reset();for(const ee in y)delete y[ee];e.setRenderTarget(F),S=null,g=null,v=null,l=null,N=null,Ae.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,a.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,a.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",L),l.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,Je=null;P.depth&&(Je=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=P.stencil?rs:Fa,Le=P.stencil?Ll:sa);const Be={colorFormat:i.RGBA8,depthFormat:Je,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Be),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ra(g.textureWidth,g.textureHeight,{format:Vi,type:Di,depthTexture:new _o(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const _e={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ra(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(ee){for(let ue=0;ue<ee.removed.length;ue++){const _e=ee.removed[ue],Le=U.indexOf(_e);Le>=0&&(U[Le]=null,O[Le].disconnect(_e))}for(let ue=0;ue<ee.added.length;ue++){const _e=ee.added[ue];let Le=U.indexOf(_e);if(Le===-1){for(let Be=0;Be<O.length;Be++)if(Be>=U.length){U.push(_e),Le=Be;break}else if(U[Be]===null){U[Be]=_e,Le=Be;break}if(Le===-1)break}const Je=O[Le];Je&&Je.connect(_e)}}const G=new ie,ce=new ie;function Se(ee,ue,_e){G.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);const Le=G.distanceTo(ce),Je=ue.projectionMatrix.elements,Be=_e.projectionMatrix.elements,De=Je[14]/(Je[10]-1),qe=Je[14]/(Je[10]+1),ft=(Je[9]+1)/Je[5],ut=(Je[9]-1)/Je[5],tt=(Je[8]-1)/Je[0],Ct=(Be[8]+1)/Be[0],Yt=De*tt,$t=De*Ct,nn=Le/(-tt+Ct),Qt=nn*-tt;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Qt),ee.translateZ(nn),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Je[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const ln=De+nn,Z=qe+nn,Xt=Yt-Qt,Ut=$t+(Le-Qt),I=ft*qe/Z*ln,M=ut*qe/Z*ln;ee.projectionMatrix.makePerspective(Xt,Ut,I,M,ln,Z),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function D(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let ue=ee.near,_e=ee.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(_e=b.depthFar)),K.near=j.near=z.near=ue,K.far=j.far=z.far=_e,(de!==K.near||he!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),de=K.near,he=K.far),K.layers.mask=ee.layers.mask|6,z.layers.mask=K.layers.mask&-5,j.layers.mask=K.layers.mask&-3;const Le=ee.parent,Je=K.cameras;D(K,Le);for(let Be=0;Be<Je.length;Be++)D(Je[Be],Le);Je.length===2?Se(K,z,j):K.projectionMatrix.copy(z.projectionMatrix),X(ee,K,Le)};function X(ee,ue,_e){_e===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=om*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(K)},this.getCameraTexture=function(ee){return y[ee]};let pe=null;function Me(ee,ue){if(_=ue.getViewerPose(p||f),E=ue,_!==null){const _e=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let Le=!1;_e.length!==K.cameras.length&&(K.cameras.length=0,Le=!0);for(let qe=0;qe<_e.length;qe++){const ft=_e[qe];let ut=null;if(S!==null)ut=S.getViewport(ft);else{const Ct=v.getViewSubImage(g,ft);ut=Ct.viewport,qe===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(N))}let tt=k[qe];tt===void 0&&(tt=new wi,tt.layers.enable(qe),tt.viewport=new fn,k[qe]=tt),tt.matrix.fromArray(ft.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ft.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ut.x,ut.y,ut.width,ut.height),qe===0&&(K.matrix.copy(tt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Le===!0&&K.cameras.push(tt)}const Je=l.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=a.getBinding();const qe=v.getDepthInformation(_e[0]);qe&&qe.isValid&&qe.texture&&b.init(qe,l.renderState)}if(Je&&Je.includes("camera-access")&&w){e.state.unbindTexture(),v=a.getBinding();for(let qe=0;qe<_e.length;qe++){const ft=_e[qe].camera;if(ft){let ut=y[ft];ut||(ut=new lb,y[ft]=ut);const tt=v.getCameraImage(ft);ut.sourceTexture=tt}}}}for(let _e=0;_e<O.length;_e++){const Le=U[_e],Je=O[_e];Le!==null&&Je!==void 0&&Je.update(Le,ue,p||f)}pe&&pe(ee,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ae=new db;Ae.setAnimationLoop(Me),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}}const OL=new dn,xb=new pt;xb.set(-1,0,0,0,1,0,0,0,1);function PL(r,e){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function a(b,y){y.color.getRGB(b.fogColor.value,cb(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,P,F,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),v(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,N)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),w(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,P,F):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ti&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ti&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y),F=P.envMap,N=P.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(OL.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(xb),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,P,F){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=F*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function w(b,y){const P=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function IL(r,e,i,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,O){const U=O.program;a.uniformBlockBinding(N,U)}function p(N,O){let U=l[N.id];U===void 0&&(b(N),U=_(N),l[N.id]=U,N.addEventListener("dispose",P));const B=O.program;a.updateUBOMapping(N,B);const T=e.render.frame;c[N.id]!==T&&(g(N),c[N.id]=T)}function _(N){const O=v();N.__bindingPointIndex=O;const U=r.createBuffer(),B=N.__size,T=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,U),U}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const O=l[N.id],U=N.uniforms,B=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,z=U.length;T<z;T++){const j=U[T];if(Array.isArray(j))for(let k=0,K=j.length;k<K;k++)S(j[k],T,k,B);else S(j,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,O,U,B){if(w(N,O,U,B)===!0){const T=N.__offset,z=N.value;if(Array.isArray(z)){let j=0;for(let k=0;k<z.length;k++){const K=z[k],de=y(K);E(K,N.__data,j),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(j+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(z,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,N.__data)}}function E(N,O,U){typeof N=="number"||typeof N=="boolean"?O[0]=N:N.isMatrix3?(O[0]=N.elements[0],O[1]=N.elements[1],O[2]=N.elements[2],O[3]=0,O[4]=N.elements[3],O[5]=N.elements[4],O[6]=N.elements[5],O[7]=0,O[8]=N.elements[6],O[9]=N.elements[7],O[10]=N.elements[8],O[11]=0):ArrayBuffer.isView(N)?O.set(new N.constructor(N.buffer,N.byteOffset,O.length)):N.toArray(O,U)}function w(N,O,U,B){const T=N.value,z=O+"_"+U;if(B[z]===void 0)return typeof T=="number"||typeof T=="boolean"?B[z]=T:ArrayBuffer.isView(T)?B[z]=T.slice():B[z]=T.clone(),!0;{const j=B[z];if(typeof T=="number"||typeof T=="boolean"){if(j!==T)return B[z]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(j.equals(T)===!1)return j.copy(T),!0}}return!1}function b(N){const O=N.uniforms;let U=0;const B=16;for(let z=0,j=O.length;z<j;z++){const k=Array.isArray(O[z])?O[z]:[O[z]];for(let K=0,de=k.length;K<de;K++){const he=k[K],J=Array.isArray(he.value)?he.value:[he.value];for(let L=0,V=J.length;L<V;L++){const G=J[L],ce=y(G),Se=U%B,D=Se%ce.boundary,X=Se+D;U+=D,X!==0&&B-X<ce.storage&&(U+=B-X),he.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=U,U+=ce.storage}}}const T=U%B;return T>0&&(U+=B-T),N.__size=U,N.__cache={},this}function y(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(O.boundary=16,O.storage=N.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",N),O}function P(N){const O=N.target;O.removeEventListener("dispose",P);const U=f.indexOf(O.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function F(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:F}}const zL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function FL(){return $i===null&&($i=new TR(zL,16,16,us,za),$i.name="DFG_LUT",$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=La,$i.wrapT=La,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class BL{constructor(e={}){const{canvas:i=nR(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Di}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const w=S,b=new Set([Lm,Nm,Dm]),y=new Set([Di,sa,Nl,Ll,Cm,wm]),P=new Uint32Array(4),F=new Int32Array(4),N=new ie;let O=null,U=null;const B=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let k=!1,K=null,de=null,he=null,J=null;this._outputColorSpace=Ci;let L=0,V=0,G=null,ce=-1,Se=null;const D=new fn,X=new fn;let pe=null;const Me=new Et(0);let Ae=0,ee=i.width,ue=i.height,_e=1,Le=null,Je=null;const Be=new fn(0,0,ee,ue),De=new fn(0,0,ee,ue);let qe=!1;const ft=new sb;let ut=!1,tt=!1;const Ct=new dn,Yt=new ie,$t=new fn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ln(){return G===null?_e:1}let Z=a;function Xt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Am}`),i.addEventListener("webglcontextlost",an,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",ii,!1),Z===null){const Y="webgl2";if(Z=Xt(Y,R),Z===null)throw Xt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let Ut,I,M,$,se,ge,Ce,Oe,me,ve,Ne,Ve,ze,Pe,nt,it,dt,q,we,ye,Ue,Ge,Te;function Qe(){Ut=new FD(Z),Ut.init(),Ue=new wL(Z,Ut),I=new DD(Z,Ut,e,Ue),M=new RL(Z,Ut),I.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),de=Z.createFramebuffer(),he=Z.createFramebuffer(),J=Z.createFramebuffer(),$=new GD(Z),se=new hL,ge=new CL(Z,Ut,M,se,I,Ue,$),Ce=new zD(j),Oe=new WR(Z),Ge=new CD(Z,Oe),me=new BD(Z,Oe,$,Ge),ve=new kD(Z,me,Oe,Ge,$),q=new VD(Z,I,ge),nt=new ND(se),Ne=new dL(j,Ce,Ut,I,Ge,nt),Ve=new PL(j,se),ze=new mL,Pe=new SL(Ut),dt=new RD(j,Ce,M,ve,E,m),it=new AL(j,ve,I),Te=new IL(Z,$,I,M),we=new wD(Z,Ut,$),ye=new HD(Z,Ut,$),$.programs=Ne.programs,j.capabilities=I,j.extensions=Ut,j.properties=se,j.renderLists=ze,j.shadowMap=it,j.state=M,j.info=$}Qe(),w!==Di&&(z=new WD(w,i.width,i.height,h,l,c));const je=new UL(j,Z);this.xr=je,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(ee,ue,!1))},this.getSize=function(R){return R.set(ee,ue)},this.setSize=function(R,Y,oe=!0){if(je.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,ue=Y,i.width=Math.floor(R*_e),i.height=Math.floor(Y*_e),oe===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(ee*_e,ue*_e).floor()},this.setDrawingBufferSize=function(R,Y,oe){ee=R,ue=Y,_e=oe,i.width=Math.floor(R*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===Di){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Be)},this.setViewport=function(R,Y,oe,ae){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,Y,oe,ae),M.viewport(D.copy(Be).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(De)},this.setScissor=function(R,Y,oe,ae){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,Y,oe,ae),M.scissor(X.copy(De).multiplyScalar(_e).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(R){M.setScissorTest(qe=R)},this.setOpaqueSort=function(R){Le=R},this.setTransparentSort=function(R){Je=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,oe=!0){let ae=0;if(R){let re=!1;if(G!==null){const Fe=G.texture.format;re=b.has(Fe)}if(re){const Fe=G.texture.type,We=y.has(Fe),Ie=dt.getClearColor(),Ze=dt.getClearAlpha(),Ye=Ie.r,at=Ie.g,mt=Ie.b;We?(P[0]=Ye,P[1]=at,P[2]=mt,P[3]=Ze,Z.clearBufferuiv(Z.COLOR,0,P)):(F[0]=Ye,F[1]=at,F[2]=mt,F[3]=Ze,Z.clearBufferiv(Z.COLOR,0,F))}else ae|=Z.COLOR_BUFFER_BIT}Y&&(ae|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),K=R},this.dispose=function(){i.removeEventListener("webglcontextlost",an,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",ii,!1),dt.dispose(),ze.dispose(),Pe.dispose(),se.dispose(),Ce.dispose(),ve.dispose(),Ge.dispose(),Te.dispose(),Ne.dispose(),je.dispose(),je.removeEventListener("sessionstart",mn),je.removeEventListener("sessionend",Dn),jn.stop()};function an(R){R.preventDefault(),bx("WebGLRenderer: Context Lost."),k=!0}function zt(){bx("WebGLRenderer: Context Restored."),k=!1;const R=$.autoReset,Y=it.enabled,oe=it.autoUpdate,ae=it.needsUpdate,re=it.type;Qe(),$.autoReset=R,it.enabled=Y,it.autoUpdate=oe,it.needsUpdate=ae,it.type=re}function ii(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const Y=R.target;Y.removeEventListener("dispose",ai),Eo(Y)}function Eo(R){To(R),se.remove(R)}function To(R){const Y=se.get(R).programs;Y!==void 0&&(Y.forEach(function(oe){Ne.releaseProgram(oe)}),R.isShaderMaterial&&Ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,oe,ae,re,Fe){Y===null&&(Y=nn);const We=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ie=ka(R,Y,oe,ae,re);M.setMaterial(ae,We);let Ze=oe.index,Ye=1;if(ae.wireframe===!0){if(Ze=me.getWireframeAttribute(oe),Ze===void 0)return;Ye=2}const at=oe.drawRange,mt=oe.attributes.position;let et=at.start*Ye,Dt=(at.start+at.count)*Ye;Fe!==null&&(et=Math.max(et,Fe.start*Ye),Dt=Math.min(Dt,(Fe.start+Fe.count)*Ye)),Ze!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ze.count)):mt!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,mt.count));const rn=Dt-et;if(rn<0||rn===1/0)return;Ge.setup(re,ae,Ie,oe,Ze);let Zt,Ft=we;if(Ze!==null&&(Zt=Oe.get(Ze),Ft=ye,Ft.setIndex(Zt)),re.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*ln()),Ft.setMode(Z.LINES)):Ft.setMode(Z.TRIANGLES);else if(re.isLine){let Bt=ae.linewidth;Bt===void 0&&(Bt=1),M.setLineWidth(Bt*ln()),re.isLineSegments?Ft.setMode(Z.LINES):re.isLineLoop?Ft.setMode(Z.LINE_LOOP):Ft.setMode(Z.LINE_STRIP)}else re.isPoints?Ft.setMode(Z.POINTS):re.isSprite&&Ft.setMode(Z.TRIANGLES);if(re.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Bt=re._multiDrawStarts,ke=re._multiDrawCounts,Fn=re._multiDrawCount,xt=Ze?Oe.get(Ze).bytesPerElement:1,Mn=se.get(ae).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)Mn.setValue(Z,"_gl_DrawID",ri),Ft.render(Bt[ri]/xt,ke[ri])}else if(re.isInstancedMesh)Ft.renderInstances(et,rn,re.count);else if(oe.isInstancedBufferGeometry){const Bt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,Bt);Ft.renderInstances(et,rn,ke)}else Ft.render(et,rn)};function Ao(R,Y,oe){R.transparent===!0&&R.side===Na&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,Va(R,Y,oe),R.side=Tr,R.needsUpdate=!0,Va(R,Y,oe),R.side=Na):Va(R,Y,oe)}this.compile=function(R,Y,oe=null){oe===null&&(oe=R),U=Pe.get(oe),U.init(Y),T.push(U),oe.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),R!==oe&&R.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights();const ae=new Set;return R.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){const Ie=Fe[We];Ao(Ie,oe,re),ae.add(Ie)}else Ao(Fe,oe,re),ae.add(Fe)}),U=T.pop(),ae},this.compileAsync=function(R,Y,oe=null){const ae=this.compile(R,Y,oe);return new Promise(re=>{function Fe(){if(ae.forEach(function(We){se.get(We).currentProgram.isReady()&&ae.delete(We)}),ae.size===0){re(R);return}setTimeout(Fe,10)}Ut.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let hs=null;function Wi(R){hs&&hs(R)}function mn(){jn.stop()}function Dn(){jn.start()}const jn=new db;jn.setAnimationLoop(Wi),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(R){hs=R,je.setAnimationLoop(R),R===null?jn.stop():jn.start()},je.addEventListener("sessionstart",mn),je.addEventListener("sessionend",Dn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;K!==null&&K.renderStart(R,Y);const oe=je.enabled===!0&&je.isPresenting===!0,ae=z!==null&&(G===null||oe)&&z.begin(j,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(Y),Y=je.getCamera()),R.isScene===!0&&R.onBeforeRender(j,R,Y,G),U=Pe.get(R,T.length),U.init(Y),U.state.textureUnits=ge.getTextureUnits(),T.push(U),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ft.setFromProjectionMatrix(Ct,ia,Y.reversedDepth),tt=this.localClippingEnabled,ut=nt.init(this.clippingPlanes,tt),O=ze.get(R,B.length),O.init(),B.push(O),je.enabled===!0&&je.isPresenting===!0){const We=j.xr.getDepthSensingMesh();We!==null&&Ar(We,Y,-1/0,j.sortObjects)}Ar(R,Y,0,j.sortObjects),O.finish(),j.sortObjects===!0&&O.sort(Le,Je,Y.reversedDepth),Qt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Qt&&dt.addToRenderList(O,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&nt.beginShadows();const re=U.state.shadowsArray;if(it.render(re,R,Y),ut===!0&&nt.endShadows(),(ae&&z.hasRenderPass())===!1){const We=O.opaque,Ie=O.transmissive;if(U.setupLights(),Y.isArrayCamera){const Ze=Y.cameras;if(Ie.length>0)for(let Ye=0,at=Ze.length;Ye<at;Ye++){const mt=Ze[Ye];Gl(We,Ie,R,mt)}Qt&&dt.render(R);for(let Ye=0,at=Ze.length;Ye<at;Ye++){const mt=Ze[Ye];Hl(O,R,mt,mt.viewport)}}else Ie.length>0&&Gl(We,Ie,R,Y),Qt&&dt.render(R),Hl(O,R,Y)}G!==null&&V===0&&(ge.updateMultisampleRenderTarget(G),ge.updateRenderTargetMipmap(G)),ae&&z.end(j),R.isScene===!0&&R.onAfterRender(j,R,Y),Ge.resetDefaultState(),ce=-1,Se=null,T.pop(),T.length>0?(U=T[T.length-1],ge.setTextureUnits(U.state.textureUnits),ut===!0&&nt.setGlobalState(j.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,K!==null&&K.renderEnd()};function Ar(R,Y,oe,ae){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ft.intersectsSprite(R)){ae&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const We=ve.update(R),Ie=R.material;Ie.visible&&O.push(R,We,Ie,oe,$t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ft.intersectsObject(R))){const We=ve.update(R),Ie=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),$t.copy(We.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ie)){const Ze=We.groups;for(let Ye=0,at=Ze.length;Ye<at;Ye++){const mt=Ze[Ye],et=Ie[mt.materialIndex];et&&et.visible&&O.push(R,We,et,oe,$t.z,mt)}}else Ie.visible&&O.push(R,We,Ie,oe,$t.z,null)}}const Fe=R.children;for(let We=0,Ie=Fe.length;We<Ie;We++)Ar(Fe[We],Y,oe,ae)}function Hl(R,Y,oe,ae){const{opaque:re,transmissive:Fe,transparent:We}=R;U.setupLightsView(oe),ut===!0&&nt.setGlobalState(j.clippingPlanes,oe),ae&&M.viewport(D.copy(ae)),re.length>0&&Rr(re,Y,oe),Fe.length>0&&Rr(Fe,Y,oe),We.length>0&&Rr(We,Y,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Gl(R,Y,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const et=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new ra(1,1,{generateMipmaps:!0,type:et?za:Di,minFilter:as,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Fe=U.state.transmissionRenderTarget[ae.id],We=ae.viewport||D;Fe.setSize(We.z*j.transmissionResolutionScale,We.w*j.transmissionResolutionScale);const Ie=j.getRenderTarget(),Ze=j.getActiveCubeFace(),Ye=j.getActiveMipmapLevel();j.setRenderTarget(Fe),j.getClearColor(Me),Ae=j.getClearAlpha(),Ae<1&&j.setClearColor(16777215,.5),j.clear(),Qt&&dt.render(oe);const at=j.toneMapping;j.toneMapping=aa;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),ut===!0&&nt.setGlobalState(j.clippingPlanes,ae),Rr(R,oe,ae),ge.updateMultisampleRenderTarget(Fe),ge.updateRenderTargetMipmap(Fe),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,rn=Y.length;Dt<rn;Dt++){const Zt=Y[Dt],{object:Ft,geometry:Bt,material:ke,group:Fn}=Zt;if(ke.side===Na&&Ft.layers.test(ae.layers)){const xt=ke.side;ke.side=ti,ke.needsUpdate=!0,Ga(Ft,oe,ae,Bt,ke,Fn),ke.side=xt,ke.needsUpdate=!0,et=!0}}et===!0&&(ge.updateMultisampleRenderTarget(Fe),ge.updateRenderTargetMipmap(Fe))}j.setRenderTarget(Ie,Ze,Ye),j.setClearColor(Me,Ae),mt!==void 0&&(ae.viewport=mt),j.toneMapping=at}function Rr(R,Y,oe){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let re=0,Fe=R.length;re<Fe;re++){const We=R[re],{object:Ie,geometry:Ze,group:Ye}=We;let at=We.material;at.allowOverride===!0&&ae!==null&&(at=ae),Ie.layers.test(oe.layers)&&Ga(Ie,Y,oe,Ze,at,Ye)}}function Ga(R,Y,oe,ae,re,Fe){R.onBeforeRender(j,Y,oe,ae,re,Fe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(j,Y,oe,ae,R,Fe),re.transparent===!0&&re.side===Na&&re.forceSinglePass===!1?(re.side=ti,re.needsUpdate=!0,j.renderBufferDirect(oe,Y,ae,re,R,Fe),re.side=Tr,re.needsUpdate=!0,j.renderBufferDirect(oe,Y,ae,re,R,Fe),re.side=Na):j.renderBufferDirect(oe,Y,ae,re,R,Fe),R.onAfterRender(j,Y,oe,ae,re,Fe)}function Va(R,Y,oe){Y.isScene!==!0&&(Y=nn);const ae=se.get(R),re=U.state.lights,Fe=U.state.shadowsArray,We=re.state.version,Ie=Ne.getParameters(R,re.state,Fe,Y,oe,U.state.lightProbeGridArray),Ze=Ne.getProgramCacheKey(Ie);let Ye=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const at=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=Ce.get(R.envMap||ae.environment,at),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",ai),Ye=new Map,ae.programs=Ye);let mt=Ye.get(Ze);if(mt!==void 0){if(ae.currentProgram===mt&&ae.lightsStateVersion===We)return la(R,Ie),mt}else Ie.uniforms=Ne.getUniforms(R),K!==null&&R.isNodeMaterial&&K.build(R,oe,Ie),R.onBeforeCompile(Ie,j),mt=Ne.acquireProgram(Ie,Ze),Ye.set(Ze,mt),ae.uniforms=Ie.uniforms;const et=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=nt.uniform),la(R,Ie),ae.needsLights=Vl(R),ae.lightsStateVersion=We,ae.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=U.state.lightProbeGridArray.length>0,ae.currentProgram=mt,ae.uniformsList=null,mt}function oa(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=zu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function la(R,Y){const oe=se.get(R);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Cr(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ae=R.length;oe<ae;oe++){const re=R[oe];if(re.texture!==null&&re.boundingBox.containsPoint(N))return re}return null}function ka(R,Y,oe,ae,re){Y.isScene!==!0&&(Y=nn),ge.resetTextureUnits();const Fe=Y.fog,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,Ie=G===null?j.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:At.workingColorSpace,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ye=Ce.get(ae.envMap||We,Ze),at=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,mt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!oe.morphAttributes.position,Dt=!!oe.morphAttributes.normal,rn=!!oe.morphAttributes.color;let Zt=aa;ae.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Zt=j.toneMapping);const Ft=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Bt=Ft!==void 0?Ft.length:0,ke=se.get(ae),Fn=U.state.lights;if(ut===!0&&(tt===!0||R!==Se)){const It=R===Se&&ae.id===ce;nt.setState(ae,R,It)}let xt=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Fn.state.version||ke.outputColorSpace!==Ie||re.isBatchedMesh&&ke.batching===!1||!re.isBatchedMesh&&ke.batching===!0||re.isBatchedMesh&&ke.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&ke.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&ke.instancing===!1||!re.isInstancedMesh&&ke.instancing===!0||re.isSkinnedMesh&&ke.skinning===!1||!re.isSkinnedMesh&&ke.skinning===!0||re.isInstancedMesh&&ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&ke.instancingMorph===!1&&re.morphTexture!==null||ke.envMap!==Ye||ae.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==nt.numPlanes||ke.numIntersection!==nt.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==mt||ke.morphTargets!==et||ke.morphNormals!==Dt||ke.morphColors!==rn||ke.toneMapping!==Zt||ke.morphTargetsCount!==Bt||!!ke.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ke.__version=ae.version);let Mn=ke.currentProgram;xt===!0&&(Mn=Va(ae,Y,re),K&&ae.isNodeMaterial&&K.onUpdateProgram(ae,Mn,ke));let ri=!1,Ni=!1,si=!1;const Ht=Mn.getUniforms(),sn=ke.uniforms;if(M.useProgram(Mn.program)&&(ri=!0,Ni=!0,si=!0),ae.id!==ce&&(ce=ae.id,Ni=!0),ke.needsLights){const It=Cr(U.state.lightProbeGridArray,re);ke.lightProbeGrid!==It&&(ke.lightProbeGrid=It,Ni=!0)}if(ri||Se!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ht.setValue(Z,"projectionMatrix",R.projectionMatrix),Ht.setValue(Z,"viewMatrix",R.matrixWorldInverse);const qi=Ht.map.cameraPosition;qi!==void 0&&qi.setValue(Z,Yt.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Ht.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),Se!==R&&(Se=R,Ni=!0,si=!0)}if(ke.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ht.setValue(Z,"directionalShadowMap",Fn.state.directionalShadowMap,ge),Fn.state.spotShadowMap.length>0&&Ht.setValue(Z,"spotShadowMap",Fn.state.spotShadowMap,ge),Fn.state.pointShadowMap.length>0&&Ht.setValue(Z,"pointShadowMap",Fn.state.pointShadowMap,ge)),re.isSkinnedMesh){Ht.setOptional(Z,re,"bindMatrix"),Ht.setOptional(Z,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Ht.setValue(Z,"boneTexture",It.boneTexture,ge))}re.isBatchedMesh&&(Ht.setOptional(Z,re,"batchingTexture"),Ht.setValue(Z,"batchingTexture",re._matricesTexture,ge),Ht.setOptional(Z,re,"batchingIdTexture"),Ht.setValue(Z,"batchingIdTexture",re._indirectTexture,ge),Ht.setOptional(Z,re,"batchingColorTexture"),re._colorsTexture!==null&&Ht.setValue(Z,"batchingColorTexture",re._colorsTexture,ge));const Li=oe.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&q.update(re,oe,Mn),(Ni||ke.receiveShadow!==re.receiveShadow)&&(ke.receiveShadow=re.receiveShadow,Ht.setValue(Z,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(sn.envMapIntensity.value=Y.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=FL()),Ni){if(Ht.setValue(Z,"toneMappingExposure",j.toneMappingExposure),ke.needsLights&&gn(sn,si),Fe&&ae.fog===!0&&Ve.refreshFogUniforms(sn,Fe),Ve.refreshMaterialUniforms(sn,ae,_e,ue,U.state.transmissionRenderTarget[R.id]),ke.needsLights&&ke.lightProbeGrid){const It=ke.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}zu.upload(Z,oa(ke),sn,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(zu.upload(Z,oa(ke),sn,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(Z,"center",re.center),Ht.setValue(Z,"modelViewMatrix",re.modelViewMatrix),Ht.setValue(Z,"normalMatrix",re.normalMatrix),Ht.setValue(Z,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const It=ae.uniformsGroups;for(let qi=0,Xa=It.length;qi<Xa;qi++){const wr=It[qi];Te.update(wr,Mn),Te.bind(wr,Mn)}}return Mn}function gn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Vl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,Y,oe){const ae=se.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(R.texture).__webglTexture=Y,se.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const oe=se.get(R);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,oe=0){G=R,L=Y,V=oe;let ae=null,re=!1,Fe=!1;if(R){const Ie=se.get(R);if(Ie.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Z.FRAMEBUFFER,Ie.__webglFramebuffer),D.copy(R.viewport),X.copy(R.scissor),pe=R.scissorTest,M.viewport(D),M.scissor(X),M.setScissorTest(pe),ce=-1;return}else if(Ie.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(Ie.__hasExternalTextures)ge.rebindTextures(R,se.get(R.texture).__webglTexture,se.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const at=R.depthTexture;if(Ie.__boundDepthTexture!==at){if(at!==null&&se.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Fe=!0);const Ye=se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?ae=Ye[Y][oe]:ae=Ye[Y],re=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?ae=se.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[oe]:ae=Ye,D.copy(R.viewport),X.copy(R.scissor),pe=R.scissorTest}else D.copy(Be).multiplyScalar(_e).floor(),X.copy(De).multiplyScalar(_e).floor(),pe=qe;if(oe!==0&&(ae=de),M.bindFramebuffer(Z.FRAMEBUFFER,ae)&&M.drawBuffers(R,ae),M.viewport(D),M.scissor(X),M.setScissorTest(pe),re){const Ie=se.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,oe)}else if(Fe){const Ie=Y;for(let Ze=0;Ze<R.textures.length;Ze++){const Ye=se.get(R.textures[Ze]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Ze,Ye.__webglTexture,oe,Ie)}}else if(R!==null&&oe!==0){const Ie=se.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ie.__webglTexture,oe)}ce=-1},this.readRenderTargetPixels=function(R,Y,oe,ae,re,Fe,We,Ie=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze){M.bindFramebuffer(Z.FRAMEBUFFER,Ze);try{const Ye=R.textures[Ie],at=Ye.format,mt=Ye.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(at)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(mt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ae&&oe>=0&&oe<=R.height-re&&Z.readPixels(Y,oe,ae,re,Ue.convert(at),Ue.convert(mt),Fe)}finally{const Ye=G!==null?se.get(G).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,Y,oe,ae,re,Fe,We,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze)if(Y>=0&&Y<=R.width-ae&&oe>=0&&oe<=R.height-re){M.bindFramebuffer(Z.FRAMEBUFFER,Ze);const Ye=R.textures[Ie],at=Ye.format,mt=Ye.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ie),!I.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,et),Z.bufferData(Z.PIXEL_PACK_BUFFER,Fe.byteLength,Z.STREAM_READ),Z.readPixels(Y,oe,ae,re,Ue.convert(at),Ue.convert(mt),0);const Dt=G!==null?se.get(G).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Dt);const rn=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await iR(Z,rn,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,et),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Fe),Z.deleteBuffer(et),Z.deleteSync(rn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(R.image.width*ae),Fe=Math.floor(R.image.height*ae),We=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;ge.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,oe,0,0,We,Ie,re,Fe),M.unbindTexture()},this.copyTextureToTexture=function(R,Y,oe=null,ae=null,re=0,Fe=0){let We,Ie,Ze,Ye,at,mt,et,Dt,rn;const Zt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(oe!==null)We=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,Ze=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,at=oe.min.y,mt=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-re);We=Math.floor(Zt.width*sn),Ie=Math.floor(Zt.height*sn),R.isDataArrayTexture?Ze=Zt.depth:R.isData3DTexture?Ze=Math.floor(Zt.depth*sn):Ze=1,Ye=0,at=0,mt=0}ae!==null?(et=ae.x,Dt=ae.y,rn=ae.z):(et=0,Dt=0,rn=0);const Ft=Ue.convert(Y.format),Bt=Ue.convert(Y.type);let ke;Y.isData3DTexture?(ge.setTexture3D(Y,0),ke=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ge.setTexture2DArray(Y,0),ke=Z.TEXTURE_2D_ARRAY):(ge.setTexture2D(Y,0),ke=Z.TEXTURE_2D),M.activeTexture(Z.TEXTURE0),M.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Fn=M.getParameter(Z.UNPACK_ROW_LENGTH),xt=M.getParameter(Z.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(Z.UNPACK_SKIP_PIXELS),ri=M.getParameter(Z.UNPACK_SKIP_ROWS),Ni=M.getParameter(Z.UNPACK_SKIP_IMAGES);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Zt.width),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Zt.height),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ye),M.pixelStorei(Z.UNPACK_SKIP_ROWS,at),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,mt);const si=R.isDataArrayTexture||R.isData3DTexture,Ht=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const sn=se.get(R),Li=se.get(Y),It=se.get(sn.__renderTarget),qi=se.get(Li.__renderTarget);M.bindFramebuffer(Z.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Xa=0;Xa<Ze;Xa++)si&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(R).__webglTexture,re,mt+Xa),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(Y).__webglTexture,Fe,rn+Xa)),Z.blitFramebuffer(Ye,at,We,Ie,et,Dt,We,Ie,Z.DEPTH_BUFFER_BIT,Z.NEAREST);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(re!==0||R.isRenderTargetTexture||se.has(R)){const sn=se.get(R),Li=se.get(Y);M.bindFramebuffer(Z.READ_FRAMEBUFFER,he),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,J);for(let It=0;It<Ze;It++)si?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,sn.__webglTexture,re,mt+It):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,sn.__webglTexture,re),Ht?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Li.__webglTexture,Fe,rn+It):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Li.__webglTexture,Fe),re!==0?Z.blitFramebuffer(Ye,at,We,Ie,et,Dt,We,Ie,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ht?Z.copyTexSubImage3D(ke,Fe,et,Dt,rn+It,Ye,at,We,Ie):Z.copyTexSubImage2D(ke,Fe,et,Dt,Ye,at,We,Ie);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ht?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(ke,Fe,et,Dt,rn,We,Ie,Ze,Ft,Bt,Zt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(ke,Fe,et,Dt,rn,We,Ie,Ze,Ft,Zt.data):Z.texSubImage3D(ke,Fe,et,Dt,rn,We,Ie,Ze,Ft,Bt,Zt):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Fe,et,Dt,We,Ie,Ft,Bt,Zt.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Fe,et,Dt,Zt.width,Zt.height,Ft,Zt.data):Z.texSubImage2D(Z.TEXTURE_2D,Fe,et,Dt,We,Ie,Ft,Bt,Zt);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Fn),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,xt),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(Z.UNPACK_SKIP_ROWS,ri),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ni),Fe===0&&Y.generateMipmaps&&Z.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(R){se.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){L=0,V=0,G=null,M.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const HL=new Et(12764882),GL=new Et(13159638),co=4500,es=91,VL=42,kL=new Et(15253624),XL=`
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
`,WL=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,qL=`
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
`,jL=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,YL=`
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
`,ZL=`
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
`;function KL(){const r=new Float32Array(co*3),e=new Float32Array(co),i=new Float32Array(co);for(let a=0;a<co;a++){const l=24+Math.random()*36,c=Math.random()*Math.PI*2,f=(Math.random()-.5)*1.1;r[a*3]=l*Math.cos(c)*Math.cos(f),r[a*3+1]=l*Math.sin(f)*2.2,r[a*3+2]=l*Math.sin(c)*Math.cos(f)-18,e[a]=Math.random(),i[a]=.7+Math.random()*1.6}return{positions:r,phases:e,sizes:i}}function QL(){let r=1597463007;return()=>(r=r*1664525+1013904223>>>0,r/4294967296)}function $L(r,e,i){const a=(r.x-e.x)*i,l=r.y-e.y;return a*a+l*l}function JL(r){const e=QL(),i=[],a=48,l=.025;for(let c=0;c<es;c++){let f=null,h=-1;for(let m=0;m<a;m++){const p={x:l+e()*(1-l*2),y:l+e()*(1-l*2)};let _=Number.POSITIVE_INFINITY;for(const v of i){const g=$L(p,v,r);_=Math.min(_,g)}_>h&&(f=p,h=_)}f&&i.push(f)}return i}function yb(r,e){const i=JL(e);for(let a=0;a<i.length;a++){const l=i[a];r[a*3]=-.96+l.x*1.92,r[a*3+1]=-.9+l.y*1.8,r[a*3+2]=0}}function eU(r){const e=new Float32Array(es),i=new Float32Array(es*3),a=new Float32Array(es),l=new Float32Array(es);for(let c=0;c<es;c++){const f=c<VL;e[c]=f?1:0,a[c]=c/es,l[c]=f?32+c*29%7:12+c*17%4}return yb(i,r),{flares:e,positions:i,phases:a,sizes:l}}function tU(r,e,i={}){const{transparent:a=!1,threadAlpha:l}=i;let c;try{c=new BL({canvas:r,antialias:!1,alpha:!0})}catch{return()=>{}}c.setPixelRatio(1);const f=new xR;f.background=a?null:new Et(328968);const h=new wi(62,1,.1,200);h.position.set(0,0,6),h.lookAt(0,0,-10);const{positions:m,phases:p,sizes:_}=KL(),v=new ni;v.setAttribute("position",new bn(m,3)),v.setAttribute("phase",new bn(p,1)),v.setAttribute("size",new bn(_,1));const g=new gi({vertexShader:XL,fragmentShader:WL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:HL}},transparent:!0,depthWrite:!1}),S=new Vx(v,g);f.add(S);const E=r.clientWidth||window.innerWidth,w=r.clientHeight||window.innerHeight,b=eU(E/w),y=b.positions,P=new ni;P.setAttribute("position",new bn(y,3)),P.setAttribute("flare",new bn(b.flares,1)),P.setAttribute("phase",new bn(b.phases,1)),P.setAttribute("size",new bn(b.sizes,1));const F=new gi({vertexShader:YL,fragmentShader:ZL,uniforms:{uTime:{value:0},uPixelRatio:{value:c.getPixelRatio()},uColor:{value:kL}},transparent:!0,depthTest:!1,depthWrite:!1}),N=new Vx(P,F);f.add(N);const O=3400,U=new ni,B=new Float32Array(O*6),T=new Float32Array(O*2),z=new Float32Array(O*2);U.setAttribute("position",new bn(B,3)),U.setAttribute("lineUV",new bn(T,1)),U.setAttribute("segPhase",new bn(z,1)),U.setDrawRange(0,0);const j=new gi({vertexShader:qL,fragmentShader:jL,uniforms:{uTime:{value:0},uColor:{value:GL},uAlpha:{value:l??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),k=new NR(U,j);f.add(k);const K=e==="alive"?4.8:5.2,de=new Map;function he(ue,_e,Le){const Je=Math.floor(ue/K),Be=Math.floor(_e/K),De=Math.floor(Le/K);return`${Je}:${Be}:${De}`}for(let ue=0;ue<co;ue++){const _e=m[ue*3],Le=m[ue*3+1],Je=m[ue*3+2],Be=he(_e,Le,Je),De=de.get(Be)??[];De.push(ue),de.set(Be,De)}function J(ue){const _e=m[ue*3],Le=m[ue*3+1],Je=m[ue*3+2],Be=Math.floor(_e/K),De=Math.floor(Le/K),qe=Math.floor(Je/K),ft=[];for(let ut=-1;ut<=1;ut++)for(let tt=-1;tt<=1;tt++)for(let Ct=-1;Ct<=1;Ct++){const Yt=`${Be+ut}:${De+tt}:${qe+Ct}`;ft.push(...de.get(Yt)??[])}return ft}const L=()=>{const ue=new Set,_e=[],Le=[],Je=[];for(let Be=0;Be<co&&_e.length<O*6;Be++){const De=m[Be*3],qe=m[Be*3+1],ft=m[Be*3+2],ut=[];for(const tt of J(Be)){if(tt===Be)continue;const Ct=m[tt*3]-De,Yt=m[tt*3+1]-qe,$t=m[tt*3+2]-ft,nn=Ct*Ct+Yt*Yt+$t*$t;nn<K*K&&ut.push([tt,nn])}ut.sort((tt,Ct)=>tt[1]-Ct[1]);for(const[tt]of ut.slice(0,5)){if(_e.length>=O*6)break;const Ct=Be<tt?`${Be}-${tt}`:`${tt}-${Be}`;ue.has(Ct)||(ue.add(Ct),_e.push(De,qe,ft,m[tt*3],m[tt*3+1],m[tt*3+2]),Le.push(0,1),Je.push(Math.random(),Math.random()))}}B.set(_e),T.set(Le),z.set(Je),U.getAttribute("position").needsUpdate=!0,U.getAttribute("lineUV").needsUpdate=!0,U.getAttribute("segPhase").needsUpdate=!0,U.setDrawRange(0,_e.length/3)},V=()=>{for(let ue=0;ue<U.drawRange.count;ue++)z[ue]=Math.random();U.getAttribute("segPhase").needsUpdate=!0};L();const G=new kR;let ce=0,Se=0,D=0,X=E/w;const pe=()=>{const ue=r.clientWidth||window.innerWidth,_e=r.clientHeight||window.innerHeight,Le=ue/_e;c.setSize(ue,_e,!1),h.aspect=Le,h.updateProjectionMatrix(),Math.abs(Le-X)/X>=.08&&(yb(y,Le),P.getAttribute("position").needsUpdate=!0,X=Le)},Me=()=>{window.cancelAnimationFrame(D),D=window.requestAnimationFrame(pe)};pe(),window.addEventListener("resize",Me);let Ae=0;const ee=ue=>{const _e=G.getElapsedTime();_e-Ae>=1/30&&(Ae=_e,g.uniforms.uTime.value=_e,j.uniforms.uTime.value=_e,F.uniforms.uTime.value=_e,e==="alive"&&(Se+=1/30,Se>3.2&&(Se=0,V())),c.render(f,h)),ce=requestAnimationFrame(ee)};return ce=requestAnimationFrame(ee),()=>{cancelAnimationFrame(ce),cancelAnimationFrame(D),window.removeEventListener("resize",Me),v.dispose(),U.dispose(),P.dispose(),g.dispose(),j.dispose(),F.dispose(),c.dispose()}}function nU({mode:r,transparent:e=!1,threadAlpha:i,className:a="spell-bg"}){const l=Xe.useRef(null);return Xe.useEffect(()=>{const c=l.current;return c?tU(c,r,{transparent:e,threadAlpha:i}):void 0},[r,e,i]),A.jsx("canvas",{"aria-hidden":"true",className:a,ref:l})}function fm({className:r,compact:e=!1}){const i=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",r].filter(Boolean).join(" ");return A.jsx(zn,{"aria-hidden":"true",className:i,icon:M2})}const _y=[{description:"Today, yesterday, and this week",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],iU=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function aU(r,e){if(e==="flat")return[{label:null,threads:r}];const i=new Map;for(const a of r){const l=e==="date"?a.dateGroup:a.volume==null?"Volume unknown":`Vol ${a.volume}`,c=i.get(l)??[];i.set(l,[...c,a])}return[...i.entries()].map(([a,l])=>({label:a,threads:l}))}function rU({activeThreadId:r,archivedOpen:e,collapsed:i,drawerOpen:a,onArchive:l,onClose:c,onCreate:f,onDelete:h,onOpen:m,onOpenSettings:p,onPin:_,onRename:v,onSelect:g,onSetArchivedOpen:S,readerStatus:E,threads:w}){const[b,y]=Xe.useState(null),[P,F]=Xe.useState(""),[N,O]=Xe.useState(null),[U,B]=Xe.useState("date"),[T,z]=Xe.useState(!1),j=Xe.useMemo(()=>w.filter(G=>G.archived===e).sort((G,ce)=>Number(ce.pinned)-Number(G.pinned)),[e,w]),k=aU(j,U),K=w.filter(G=>G.archived).length,de=a||!i;function he(G){y(G.id),F(G.title)}function J(G){const ce=P.trim();ce&&v(G,ce),y(null)}function L(G){if(N===G){h(G),O(null);return}O(G),window.setTimeout(()=>{O(ce=>ce===G?null:ce)},3e3)}function V(G){const ce=G.id===r;return A.jsxs("li",{className:`lab-thread-row ${ce?"active":""}`,"data-testid":`thread-${G.id}`,children:[A.jsxs("div",{className:"lab-thread-main",children:[b===G.id?A.jsx("span",{className:"lab-thread-copy",children:A.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>J(G.id),onChange:Se=>F(Se.target.value),onClick:Se=>Se.stopPropagation(),onKeyDown:Se=>{Se.key==="Enter"&&(Se.preventDefault(),J(G.id)),Se.key==="Escape"&&y(null)},value:P})}):A.jsx("button",{"aria-current":ce?"page":void 0,className:"lab-thread-select",onClick:()=>g(G.id),type:"button",children:A.jsx("span",{className:"lab-thread-copy",children:A.jsx("strong",{children:G.title})})}),N===G.id&&A.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),A.jsxs("div",{className:"lab-thread-actions",children:[A.jsx("button",{"aria-label":`${G.pinned?"Unpin":"Pin"} ${G.title}`,onClick:()=>_(G.id),type:"button",children:A.jsx(u3,{})}),A.jsx("button",{"aria-label":`Rename ${G.title}`,onClick:()=>he(G),type:"button",children:A.jsx(c3,{})}),A.jsx("button",{"aria-label":`${G.archived?"Restore":"Archive"} ${G.title}`,onClick:()=>l(G.id),type:"button",children:A.jsx(dx,{})}),A.jsx("button",{"aria-label":`Delete ${G.title}`,className:N===G.id?"confirming":"",onClick:()=>L(G.id),type:"button",children:A.jsx(o3,{})})]})]},G.id)}return A.jsxs("aside",{className:"lab-rail",children:[A.jsxs("header",{className:"lab-brand",children:[A.jsx("span",{className:"lab-brand-mark",children:A.jsx(fm,{compact:!0})}),A.jsx("span",{children:A.jsx("strong",{children:"weaver"})}),A.jsx("button",{"aria-label":de?"Close threads":"Open threads",className:"lab-rail-close",onClick:de?c:m,type:"button",children:de?A.jsx(s3,{}):A.jsx(OS,{})})]}),A.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:f,type:"button",children:[A.jsx(n3,{}),A.jsx("span",{children:"New Weave"})]}),A.jsxs("div",{className:"lab-rail-scroll",children:[A.jsxs("section",{className:"lab-chat-section",children:[A.jsxs("header",{className:"lab-rail-section-head",children:[A.jsx("h2",{children:"Chats"}),A.jsxs("div",{className:"lab-grouping-picker",children:[A.jsxs("button",{"aria-expanded":T,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>z(G=>!G),type:"button",children:[_y.find(G=>G.value===U)?.label,A.jsx(IS,{})]}),T&&A.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[A.jsx("p",{children:"Organize threads"}),_y.map(G=>A.jsxs("button",{"aria-checked":U===G.value,onClick:()=>{B(G.value),z(!1)},role:"menuitemradio",type:"button",children:[A.jsx("span",{"aria-hidden":"true",children:U===G.value?"✓":""}),A.jsx("strong",{children:G.label}),A.jsx("small",{children:G.description})]},G.value))]})]})]}),A.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[k.map(G=>A.jsxs("section",{className:"lab-thread-group",children:[G.label&&A.jsx("h3",{children:G.label}),A.jsx("ul",{className:"lab-thread-flat-list",children:G.threads.map(V)})]},G.label??"all")),j.length===0&&A.jsxs("div",{className:"lab-thread-empty",children:[A.jsx("span",{"aria-hidden":"true"}),A.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),A.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[A.jsxs("header",{className:"lab-rail-section-head",children:[A.jsx("h2",{children:"Library"}),A.jsx("small",{children:"novels"})]}),A.jsx("div",{className:"lab-novel-list",children:iU.map(G=>A.jsxs("button",{"aria-current":G.active?"page":void 0,"aria-disabled":!G.active,className:G.active?"active":"upcoming",type:"button",children:[A.jsx(r3,{}),A.jsxs("span",{children:[A.jsx("strong",{children:G.label}),A.jsx("small",{children:G.active?"current shelf":"upcoming"})]})]},G.label))})]})]}),A.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>S(!e),type:"button",children:[A.jsx(dx,{}),A.jsx("span",{children:"Archived"}),A.jsx("em",{children:K})]}),A.jsx("footer",{className:"lab-rail-footer",children:A.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:p,type:"button",children:[A.jsx(PS,{}),A.jsxs("span",{children:[A.jsx("strong",{children:"Settings"}),A.jsxs("small",{children:[E," · runes · appearance"]})]})]})})]})}const sU=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],oU=Array.from({length:20},(r,e)=>e);function lU(r){return{"--index":r}}function cU({announcement:r,eventKey:e,mode:i}){return A.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${i}`,children:[i==="particles"&&A.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:oU.map(a=>A.jsx("span",{style:lU(a)},a))}),i==="threads"&&A.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[A.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),A.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),A.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),A.jsx("p",{className:"rune-announcement",children:r})]},`${i}-${e}`)}const uU=Array.from({length:7},(r,e)=>e),fU=Array.from({length:8},(r,e)=>e),dU=Array.from({length:11},(r,e)=>e),Zu={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function ip(r){return{"--index":r}}function Sb({compact:r=!1,mode:e,state:i}){return A.jsxs("div",{"aria-label":`${Zu[e]}, ${i}`,className:`lab-soul-sea soul-${e} soul-state-${i} ${r?"soul-compact":""}`,role:"img",children:[A.jsxs("div",{className:"lab-soul-sky",children:[A.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]}),A.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:uU.map(a=>A.jsx("span",{className:"lab-soul-sun",style:ip(a)},a))}),A.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:fU.map(a=>A.jsx("span",{className:"lab-memory-light",style:ip(a)},a))})]}),A.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:dU.map(a=>A.jsx("span",{className:"lab-shadow",style:ip(a)},a))}),A.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[A.jsx("span",{className:"water-plane water-plane-back"}),A.jsx("span",{className:"water-plane water-plane-middle"}),A.jsx("span",{className:"water-plane water-plane-front"}),A.jsx("span",{className:"water-flash"})]}),!r&&A.jsxs("p",{className:"lab-soul-caption",children:[A.jsx("span",{children:Zu[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const ap=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12}],hU={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},pU=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],mU=["still","living","mirror"],gU=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function vU({initial:r,onClose:e,onSave:i}){const[a,l]=Xe.useState(r),[c,f]=Xe.useState("customize"),h=Xe.useRef(null),m=Xe.useRef(null);Xe.useEffect(()=>{h.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function p(g){if(g.key!=="Tab"||!h.current)return;const S=h.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),E=S[0],w=S[S.length-1];g.shiftKey&&document.activeElement===E&&(g.preventDefault(),w?.focus()),!g.shiftKey&&document.activeElement===w&&(g.preventDefault(),E?.focus())}function _(g,S){l(E=>({...E,[g]:S}))}function v(g){const S=ap.find(b=>b.number===g);if(!S)return;const E=ap[g-2]?.end??0,w=Math.max(E+1,Math.min(a.chapter,S.end));l(b=>({...b,chapter:w,volume:g}))}return A.jsx("div",{className:"lab-settings-backdrop",onMouseDown:e,children:A.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:p,onMouseDown:g=>g.stopPropagation(),ref:h,role:"dialog",children:[A.jsxs("header",{className:"lab-settings-head",children:[A.jsxs("div",{children:[A.jsx("p",{children:"the sea within"}),A.jsx("h2",{children:"Soul Sea"})]}),A.jsx("button",{"aria-label":"Close settings",onClick:e,type:"button",children:"×"})]}),A.jsxs("div",{className:"lab-settings-layout",children:[A.jsxs("aside",{className:"lab-settings-nav",children:[A.jsx("p",{children:"Settings"}),A.jsx("nav",{"aria-label":"Settings sections",children:pU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-current":c===g.id?"page":void 0,className:c===g.id?"on":"",onClick:()=>f(g.id),type:"button",children:[A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.hint})]},g.id))})]}),A.jsxs("div",{className:"lab-settings-main",children:[A.jsx(Sb,{compact:!0,mode:a.soulMode,state:"idle"}),A.jsxs("div",{className:"lab-settings-content",children:[c==="reader"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Reader position"}),A.jsx("span",{children:"The Spell will not read beyond this point."})]}),A.jsxs("div",{className:"lab-reader-grid",children:[A.jsxs("label",{children:[A.jsx("span",{children:"Volume"}),A.jsx("select",{"aria-label":"Reader volume",onChange:g=>v(Number(g.target.value)),ref:m,value:a.volume,children:ap.map(g=>A.jsxs("option",{value:g.number,children:["Vol ",g.number," · to ch ",g.end]},g.number))})]}),A.jsxs("label",{children:[A.jsx("span",{children:"Chapter"}),A.jsx("input",{max:3127,min:1,onChange:g=>_("chapter",Number(g.target.value)),type:"number",value:a.chapter})]})]})]}),c==="spoilers"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Spoilers"}),A.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),A.jsxs("div",{className:"lab-choice-grid two",children:[A.jsxs("button",{"aria-pressed":a.spoilerMode==="protect",className:a.spoilerMode==="protect"?"on":"",onClick:()=>_("spoilerMode","protect"),type:"button",children:[A.jsx("strong",{children:"Protect the story"}),A.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),A.jsxs("button",{"aria-pressed":a.spoilerMode==="none",className:a.spoilerMode==="none"?"on":"",onClick:()=>_("spoilerMode","none"),type:"button",children:[A.jsx("strong",{children:"No spoiler limits"}),A.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),c==="reading"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Reading tier"}),A.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),A.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(g=>A.jsxs("button",{"aria-pressed":a.tier===g,className:a.tier===g?"on":"",onClick:()=>_("tier",g),type:"button",children:[A.jsx("strong",{children:g}),A.jsx("span",{children:hU[g]})]},g))})]}),c==="customize"&&A.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Customize the Spell"}),A.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Surface theme"}),A.jsx("div",{className:"lab-theme-grid",children:gU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-pressed":a.theme===g.value,className:a.theme===g.value?"on":"",onClick:()=>_("theme",g.value),type:"button",children:[A.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:g.swatches.map(S=>A.jsx("i",{style:{background:S}},S))}),A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.description})]},g.value))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Rune appearance"}),A.jsx("div",{className:"lab-choice-grid three",children:sU.map(g=>A.jsxs("button",{"aria-label":g.label,"aria-pressed":a.runeMode===g.mode,className:a.runeMode===g.mode?"on":"",onClick:()=>_("runeMode",g.mode),type:"button",children:[A.jsx("strong",{children:g.label}),A.jsx("span",{children:g.description})]},g.mode))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Soul Sea"}),A.jsx("div",{className:"lab-choice-grid three",children:mU.map(g=>A.jsxs("button",{"aria-label":Zu[g],"aria-pressed":a.soulMode===g,className:a.soulMode===g?"on":"",onClick:()=>_("soulMode",g),type:"button",children:[A.jsx("strong",{children:Zu[g]}),A.jsx("span",{children:g==="still"?"A calm horizon behind the conversation.":g==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},g))})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Message transparency"}),A.jsxs("div",{className:"lab-choice-grid two",children:[A.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":a.glass==="subtle",className:a.glass==="subtle"?"on":"",onClick:()=>_("glass","subtle"),type:"button",children:[A.jsx("strong",{children:"Subtle glass"}),A.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),A.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":a.glass==="immersive",className:a.glass==="immersive"?"on":"",onClick:()=>_("glass","immersive"),type:"button",children:[A.jsx("strong",{children:"Immersive · no surface"}),A.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),A.jsxs("div",{className:"lab-customize-block",children:[A.jsx("h4",{children:"Star web"}),A.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(g=>A.jsx("button",{"aria-pressed":a.starIntensity===g,className:a.starIntensity===g?"on":"",onClick:()=>_("starIntensity",g),type:"button",children:g},g))})]}),A.jsxs("div",{className:"lab-customize-row",children:[A.jsxs("div",{children:[A.jsx("h4",{children:"Reading density"}),A.jsxs("div",{className:"lab-segmented-control",children:[A.jsx("button",{"aria-label":"Compact text","aria-pressed":a.density==="compact",className:a.density==="compact"?"on":"",onClick:()=>_("density","compact"),type:"button",children:"compact"}),A.jsx("button",{"aria-label":"Comfortable text","aria-pressed":a.density==="comfortable",className:a.density==="comfortable"?"on":"",onClick:()=>_("density","comfortable"),type:"button",children:"comfortable"})]})]}),A.jsxs("div",{children:[A.jsx("h4",{children:"Font size"}),A.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(g=>A.jsx("button",{"aria-pressed":a.fontSize===g,className:a.fontSize===g?"on":"",onClick:()=>_("fontSize",g),type:"button",children:g},g))})]})]})]}),c==="privacy"&&A.jsxs("section",{className:"lab-settings-section",children:[A.jsxs("div",{className:"lab-setting-title",children:[A.jsx("h3",{children:"Keyboard & privacy"}),A.jsx("span",{children:"Quick controls and where your reading data stays."})]}),A.jsxs("dl",{className:"lab-shortcuts",children:[A.jsxs("div",{children:[A.jsxs("dt",{children:[A.jsx("kbd",{children:"Ctrl"}),A.jsx("kbd",{children:","})]}),A.jsx("dd",{children:"open settings"})]}),A.jsxs("div",{children:[A.jsx("dt",{children:A.jsx("kbd",{children:"Esc"})}),A.jsx("dd",{children:"close this panel"})]}),A.jsxs("div",{children:[A.jsx("dt",{children:A.jsx("kbd",{children:"Enter"})}),A.jsx("dd",{children:"send a message"})]})]}),A.jsxs("aside",{className:"lab-privacy-note",children:[A.jsx("span",{"aria-hidden":"true",children:"◎"}),A.jsxs("div",{children:[A.jsx("strong",{children:"Everything stays on this machine."}),A.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]})]})]})]}),A.jsxs("footer",{className:"lab-settings-actions",children:[A.jsx("button",{onClick:e,type:"button",children:"Leave unchanged"}),A.jsx("button",{className:"primary",onClick:()=>i(a),type:"button",children:"Apply settings"})]})]})})}const Ji={chapter:1e3,density:"comfortable",fontSize:"medium",glass:"subtle",runeMode:"voice",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"crimson",tier:"ascended",volume:5},bb="weaver.spell-surface";function Qr(r,e,i){return typeof r=="string"&&e.includes(r)?r:i}function _U(){try{const r=JSON.parse(window.localStorage.getItem(bb)??"null");return r?{...Ji,density:Qr(r.density,["compact","comfortable"],Ji.density),fontSize:Qr(r.fontSize,["small","medium","large"],Ji.fontSize),glass:Qr(r.glass,["subtle","immersive"],Ji.glass),runeMode:Qr(r.runeMode,["particles","voice","threads"],Ji.runeMode),soulMode:Qr(r.soulMode,["still","living","mirror"],Ji.soulMode),starIntensity:Qr(r.starIntensity,["quiet","balanced","vivid"],Ji.starIntensity),theme:Qr(r.theme,["crimson","cosmos","starlight","void"],Ji.theme)}:Ji}catch{return Ji}}function xU(r){window.localStorage.setItem(bb,JSON.stringify({density:r.density,fontSize:r.fontSize,glass:r.glass,runeMode:r.runeMode,soulMode:r.soulMode,starIntensity:r.starIntensity,theme:r.theme}))}const xy=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127];function yU(r){const e=xy.findIndex(i=>r<=i);return e===-1?xy.length:e+1}function SU(r){if(!r)return"This week";const e=new Date(r);if(Number.isNaN(e.getTime()))return"This week";const i=Math.floor((Date.now()-e.getTime())/864e5);return i<=0?"Today":i===1?"Yesterday":"This week"}function yy(r){return{reader_chapter:r.chapter,spoiler_mode:r.spoilerMode,tier:r.tier}}function bU({api:r,modeLabel:e,privacyLabel:i}){const a=y2(r,Ai),[l,c]=Xe.useState(_U),[f,h]=Xe.useState(!1),[m,p]=Xe.useState(!1),[_,v]=Xe.useState(!1),[g,S]=Xe.useState(!1),[E,w]=Xe.useState(new Set),[b,y]=Xe.useState(new Set),[P,F]=Xe.useState(new Map),[N,O]=Xe.useState(null),[U,B]=Xe.useState("idle"),[T,z]=Xe.useState("[The Spell listens.]"),[j,k]=Xe.useState(0),[K,de]=Xe.useState(0),he=Xe.useRef(null),J=Xe.useRef(null),L=Xe.useRef(!1),V=Xe.useRef(null),G=Xe.useMemo(()=>a.conversations.map(De=>({archived:E.has(De.conversation_id),dateGroup:SU(De.created_at),id:De.conversation_id,pinned:b.has(De.conversation_id),preview:"private reading thread",title:P.get(De.conversation_id)??De.title,volume:null})),[E,a.conversations,b,P]);Xe.useEffect(()=>{function De(qe){qe.ctrlKey&&qe.key===","&&(qe.preventDefault(),Se()),qe.key==="Escape"&&(h(!1),p(!1))}return window.addEventListener("keydown",De),()=>window.removeEventListener("keydown",De)}),Xe.useEffect(()=>{const De=J.current;De&&(De.scrollTop=De.scrollHeight)},[a.activity,a.messages,a.recoveryMessage]),Xe.useEffect(()=>{if(a.turnActive){L.current=!0,B(a.activity.length>0?"weaving":"rippling");return}L.current&&(L.current=!1,B("complete"),ce("[The weave is complete.]"),V.current&&window.clearTimeout(V.current),V.current=window.setTimeout(()=>B("idle"),900))},[a.activity.length,a.turnActive]),Xe.useEffect(()=>{const De=a.activity.at(-1);De&&ce(MU(De))},[a.activity]),Xe.useEffect(()=>()=>{V.current&&window.clearTimeout(V.current)},[]);function ce(De){z(De),k(qe=>qe+1),de(qe=>qe+1)}async function Se(){try{const De=await r.getPreferences(),qe=De.reader_chapter??l.chapter;c(ft=>({...ft,chapter:qe,spoilerMode:De.spoiler_mode,tier:De.tier,volume:yU(qe)}))}finally{h(!0),ce("[The sea within opens.]")}}function D(){if(window.innerWidth<768){p(!0);return}v(!1)}function X(){if(window.innerWidth<768){p(!1);return}v(!0)}async function pe(){await a.createConversation()&&(p(!1),ce("[An empty thread waits in the void.]"),window.setTimeout(()=>he.current?.focus(),0))}async function Me(De){await a.selectConversation(De),p(!1),ce("[The thread is recalled.]")}function Ae(De,qe){F(ft=>new Map(ft).set(De,qe)),ce("[The thread accepts a new name.]")}function ee(De,qe){De(ft=>{const ut=new Set(ft);return ut.has(qe)?ut.delete(qe):ut.add(qe),ut})}function ue(De){B("rippling"),ce("[The Spell is weaving an answer.]"),a.sendMessage(De)}function _e(){B("weaving"),ce("[The Spell takes up the thread once more.]"),a.regenerateReply()}const Le=`Vol ${l.volume} · ch ${l.chapter} · ${l.tier}`,Je=l.starIntensity==="quiet"?.2:l.starIntensity==="vivid"?.56:.36,Be=a.activity.at(-1)??null;return A.jsxs("div",{className:["spell-surface-lab","spell-surface-live",m?"lab-rail-open":"",_?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":l.density,"data-font-size":l.fontSize,"data-glass":l.glass,"data-runes":l.runeMode,"data-soul":l.soulMode,"data-star-intensity":l.starIntensity,"data-theme":l.theme,"data-testid":"spell-surface-live",children:[A.jsx(nU,{className:"lab-spell-background",mode:"alive",threadAlpha:Je}),A.jsx("div",{"aria-hidden":"true",className:"lab-galactic-band"}),A.jsx("div",{"aria-hidden":"true",className:"lab-purple-depth"}),A.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-one"}),A.jsx("div",{"aria-hidden":"true",className:"lab-star-flare flare-two"}),A.jsxs("div",{"aria-hidden":"true",className:"lab-core-wake",children:[A.jsx("span",{}),A.jsx("span",{})]},K),A.jsx(Sb,{mode:l.soulMode,state:U}),A.jsx(rU,{activeThreadId:a.conversationId??"",archivedOpen:g,collapsed:_,drawerOpen:m,onArchive:De=>ee(w,De),onClose:X,onCreate:()=>{pe()},onDelete:De=>{a.deleteConversation(De)},onOpen:D,onOpenSettings:()=>{Se()},onPin:De=>ee(y,De),onRename:Ae,onSelect:De=>{Me(De)},onSetArchivedOpen:S,readerStatus:Le,threads:G}),A.jsxs("main",{className:"lab-chat-main",children:[A.jsxs("div",{className:"lab-chat-controls",children:[A.jsx("button",{"aria-label":"Open threads",className:"lab-mobile-rail",onClick:D,type:"button",children:A.jsx(OS,{})}),A.jsx("span",{className:"lab-live-mode",children:e}),A.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{Se()},type:"button",children:A.jsx(PS,{})})]}),A.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:J,children:A.jsxs("div",{className:"lab-transcript-column",children:[a.bootError&&A.jsx("div",{className:"boot-error",children:a.bootError}),!a.bootError&&a.messages.length===0&&A.jsxs("section",{className:"lab-empty-weave",children:[A.jsx("span",{className:"lab-empty-mark",children:A.jsx(fm,{})}),A.jsx("p",{children:"[An empty thread trembles in the void.]"}),A.jsx("h1",{children:"What are we reading?"}),A.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),a.messages.map(De=>A.jsx(y3,{Mark:fm,activity:De.streaming?Be:null,assistantName:Ai.assistantName,message:De,onQuote:qe=>{a.setDraft(`"${qe}" `),he.current?.focus()},onRegenerate:De.id===a.liveReplyId&&a.turnState==="idle"?_e:void 0,onViewPassage:O,regenerateLabel:Ai.regenerateLabel},De.id)),a.recoveryMessage&&A.jsx(b3,{chooseLabel:Ai.recoveryChooseLabel,createLabel:Ai.recoveryCreateLabel,message:a.recoveryMessage,onChooseConversation:D,onCreateConversation:()=>{pe()},onRetry:()=>{a.retryLastTurn()},retryLabel:Ai.recoveryRetryLabel,title:Ai.recoveryTitle})]})}),A.jsx(cU,{announcement:T,eventKey:j,mode:l.runeMode}),A.jsxs("footer",{className:"lab-composer-dock",children:[A.jsx(d3,{cancelling:a.turnState==="cancelling",draft:a.draft,inputLabel:Ai.inputLabel,onCancel:()=>{a.cancelTurn()},onDraftChange:a.setDraft,onSubmit:ue,onTierChange:De=>{const qe={...l,tier:De};c(qe),r.savePreferences(yy(qe))},placeholder:Ai.composerPlaceholder,sendLabel:Ai.sendLabel,stopLabel:Ai.stopLabel,stoppingLabel:Ai.stoppingLabel,textareaRef:he,tier:l.tier,turnActive:a.turnActive}),A.jsxs("p",{children:[A.jsx("span",{})," ",i]})]})]}),m&&A.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:()=>p(!1),type:"button"}),f&&A.jsx(vU,{initial:l,onClose:()=>h(!1),onSave:De=>{c(De),xU(De),h(!1),ce("[Your soul answers the change.]"),r.savePreferences(yy(De))}}),N&&A.jsx(S3,{handle:N,loadPassage:a.loadPassage,onClose:()=>O(null)})]})}function MU(r){return`[The Spell is ${r.status==="start"?r.detail||r.name:"done"}.]`}async function $r(r,e){if(!r.ok)throw new Error(`${e} failed (${r.status})`);return await r.json()}function EU(r){const e=typeof r.data.text=="string"?r.data.text:"",i=typeof r.data.message=="string"?r.data.message:"";if(r.event==="delta")return{type:"delta",text:e};if(r.event==="completed")return{type:"completed",text:e,tokenCount:typeof r.data.token_count=="number"?r.data.token_count:void 0,tokenBudget:typeof r.data.token_budget=="number"?r.data.token_budget:void 0};if(r.event==="interrupted")return{type:"interrupted",message:i||"The turn was interrupted."};if(r.event==="failed")return{type:"failed",message:i||"The reply failed.",code:typeof r.data.code=="string"?r.data.code:void 0};if(r.event==="tool"){const a=Array.isArray(r.data.handles)?r.data.handles.filter(l=>typeof l=="string"):void 0;return{type:"tool",name:typeof r.data.name=="string"?r.data.name:"tool",status:typeof r.data.status=="string"?r.data.status:"start",detail:typeof r.data.detail=="string"?r.data.detail:"",preview:typeof r.data.preview=="string"?r.data.preview:void 0,handles:a&&a.length>0?a:void 0}}return null}async function*TU(r){const e=[];let i=[],a=null,l=0;const c=["delta","tool","completed","interrupted","failed"];for(const f of c)r.addEventListener(f,h=>{try{const m=EU({event:f,data:JSON.parse(h.data)});m&&(e.push(m),i.splice(0).forEach(p=>p()))}catch{}});r.onerror=()=>{l+=1,(r.readyState===EventSource.CLOSED||l>4)&&(a=new Error("The reply stream was interrupted."),i.splice(0).forEach(f=>f()))};try{for(;;)if(e.length>0)yield e.shift();else{if(a)throw a;await new Promise(f=>i.push(f))}}finally{r.close()}}async function*Sy(r){const e=new EventSource(`/api/conversations/${encodeURIComponent(r)}/stream`);let i=!1;for await(const a of TU(e))if(yield a,a.type==="completed"||a.type==="interrupted"||a.type==="failed"){i=!0;break}if(!i)throw new Error("The reply stream closed without finishing.")}function AU(r=fetch){return{async getPreferences(){const e=await r("/api/preferences");return $r(e,"Loading preferences")},async deleteConversation(e){const i=await r(`/api/conversations/${e}`,{method:"DELETE"});return $r(i,"Deleting conversation")},async getPassage(e){const i=await r(`/api/passages?handle=${encodeURIComponent(e)}`);return $r(i,"Loading passage")},async savePreferences(e){const i=await r("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return $r(i,"Saving preferences")},async listConversations(){const e=await r("/api/conversations");return $r(e,"Loading conversations")},async createConversation(){const e=await r("/api/conversations",{method:"POST"});return $r(e,"Creating a conversation")},async loadMessages(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/messages`);return $r(i,"Loading the conversation")},async*streamTurn(e,i){const a=await r(`/api/conversations/${encodeURIComponent(e)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:i})});if(!a.ok)throw new Error(`Sending the message failed (${a.status})`);yield*Sy(e)},async*retryTurn(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/retry`,{method:"POST"});if(!i.ok)throw new Error(`Retrying failed (${i.status})`);yield*Sy(e)},async cancelTurn(e){const i=await r(`/api/conversations/${encodeURIComponent(e)}/cancel`,{method:"POST"});if(i.status===202)return"cancelling";if(i.status===200)return"idle";throw new Error(`Stopping the reply failed (${i.status})`)}}}const RU=Xe.lazy(()=>CM(()=>import("./ThemeLab-QkKsiqMO.js"),[]).then(r=>({default:r.ThemeLab})));ls.autoAddCss=!1;function by(r){return document.querySelector(`meta[name="${r}"]`)?.content??""}const Mb=document.getElementById("root");if(!Mb)throw new Error("Weaver root element is missing.");const CU=window.location.hash==="#theme-lab";_2.createRoot(Mb).render(CU?A.jsx(Xe.Suspense,{fallback:A.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:A.jsx(RU,{})}):A.jsx(bU,{api:AU(),modeLabel:by("weaver-mode"),privacyLabel:by("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{t3 as A,fx as C,OS as R,nU as S,fm as W,Sb as a,rU as b,PS as c,i3 as d,cU as e,vU as f,A as j,Xe as r};
